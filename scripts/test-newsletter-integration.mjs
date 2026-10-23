import { constants } from "node:fs";
import { access, mkdtemp, readdir, rm } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:net";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, delimiter, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const project = dirname(dirname(fileURLToPath(import.meta.url)));
const require = createRequire(import.meta.url);
const files = ["store", "planner", "delivery", "service", "scheduler", "acceptance", "fixtures"].map((name) => `tests/newsletter-${name}.test.ts`);
let ownedDirectory;
let binaries;
let child;
let interrupted = false;
for (const signal of ["SIGINT", "SIGTERM"]) process.once(signal, () => {
  interrupted = true;
  child?.kill(signal);
});

async function executable(path) {
  try { await access(path, constants.X_OK); return true; } catch { return false; }
}
async function findPostgres() {
  const directories = (process.env.PATH ?? "").split(delimiter).filter(Boolean);
  for (const root of ["/opt/homebrew/opt", "/usr/local/opt", "/usr/lib/postgresql"]) {
    const children = await readdir(root).catch(() => []);
    directories.push(...children.filter((name) => root.endsWith("postgresql") || /^postgresql(?:@\d+)?$/.test(name))
      .sort().reverse().map((name) => join(root, name, "bin")));
  }
  for (const directory of [...new Set(directories)]) {
    const initdb = join(directory, "initdb"), pgCtl = join(directory, "pg_ctl");
    if (await executable(initdb) && await executable(pgCtl)) return { initdb, pgCtl };
  }
  throw new Error("local_postgres_binaries_missing: install PostgreSQL with initdb and pg_ctl, or provide an explicit loopback NEWSLETTER_TEST_DATABASE_URL");
}
function loopbackUrl(value) {
  let url;
  try { url = new URL(value); } catch { throw new Error("newsletter_test_database_url_invalid"); }
  if (!["postgres:", "postgresql:"].includes(url.protocol)
    || !["localhost", "127.0.0.1", "[::1]", "::1"].includes(url.hostname) || url.search || url.hash) {
    throw new Error("newsletter_test_database_url_must_be_loopback_without_query_or_fragment");
  }
  return value;
}
async function freePort() {
  const server = createServer();
  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(0, "127.0.0.1", resolve); });
  const address = server.address();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return address.port;
}
function runPostgres(binary, args, failure) {
  const result = spawnSync(binary, args, { stdio: "pipe", timeout: 30_000, encoding: "utf8", env: createIntegrationEnvironment(process.env) });
  if (result.error || result.status !== 0) throw new Error(failure);
}
const shellQuote = (value) => `'${value.replaceAll("'", "'\\''")}'`;
async function startPostgres() {
  binaries = await findPostgres();
  ownedDirectory = await mkdtemp(join(tmpdir(), "aiedhk-newsletter-test-"));
  const data = join(ownedDirectory, "data");
  runPostgres(binaries.initdb, ["-D", data, "-U", "newsletter_test", "--auth-local=trust", "--auth-host=trust", "--no-instructions"], "local_postgres_initdb_failed");
  const port = await freePort();
  // Trust authentication is confined to this owned ephemeral cluster on loopback and its private socket directory.
  runPostgres(binaries.pgCtl, ["-D", data, "-l", join(ownedDirectory, "postgres.log"), "-o",
    `-h 127.0.0.1 -p ${port} -k ${shellQuote(ownedDirectory)}`, "-w", "-t", "15", "start"], "local_postgres_start_failed");
  return `postgres://newsletter_test@127.0.0.1:${port}/postgres`;
}
export function createIntegrationEnvironment(source, url) {
  const env = {};
  // An allowlist avoids leaking unrelated application credentials to either PostgreSQL or tests.
  for (const key of ["PATH", "HOME", "USER", "LOGNAME", "TMPDIR", "TMP", "TEMP", "LANG", "LC_ALL", "SYSTEMROOT", "PATHEXT"]) {
    if (typeof source[key] === "string") env[key] = source[key];
  }
  if (url) env.NEWSLETTER_TEST_DATABASE_URL = url;
  return env;
}
async function runTests(url) {
  const env = createIntegrationEnvironment(process.env, url);
  const code = await new Promise((resolve, reject) => {
    child = spawn(process.execPath, [require.resolve("tsx/cli"), "--test", "--test-concurrency=1", ...files], { cwd: project, env, stdio: "inherit" });
    child.once("error", () => reject(new Error("newsletter_integration_runner_failed")));
    child.once("exit", (status) => resolve(status ?? 1));
  });
  child = undefined;
  return code;
}

async function main() {
  try {
    const configured = process.env.NEWSLETTER_TEST_DATABASE_URL;
    const url = configured ? loopbackUrl(configured) : await startPostgres();
    if (interrupted) throw new Error("newsletter_integration_interrupted");
    console.log(`Newsletter integration tests: ${configured ? "explicit loopback database, isolated schemas" : "owned ephemeral loopback PostgreSQL"}.`);
    process.exitCode = await runTests(url);
  } catch (error) {
    // All errors here use fixed codes; never echo a connection string or child process diagnostics.
    console.error(error instanceof Error ? error.message : "newsletter_integration_failed");
    process.exitCode = 1;
  } finally {
    if (ownedDirectory) {
      try {
        const data = join(ownedDirectory, "data");
        const running = await access(join(data, "postmaster.pid")).then(() => true, () => false);
        if (running) runPostgres(binaries.pgCtl, ["-D", data, "-m", "immediate", "-w", "-t", "15", "stop"], "local_postgres_stop_failed");
        await rm(ownedDirectory, { recursive: true, force: true });
      } catch {
        console.error(`local_postgres_cleanup_failed: inspect the owned directory ${ownedDirectory}`);
        process.exitCode = 1;
      }
    }
    if (interrupted) process.exitCode = 1;
  }
}
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();
