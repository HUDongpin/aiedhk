import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { copyFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import test from "node:test";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
(url ? test : test.skip)("a fixture setup failure closes clients so the test process can exit", async () => {
  const directory = await mkdtemp(join(tmpdir(), "newsletter-fixture-failure-"));
  try {
    await mkdir(join(directory, "migrations"));
    await copyFile("migrations/001_newsletter_subscribers.sql", join(directory, "migrations/001_newsletter_subscribers.sql"));
    const helper = pathToFileURL(resolve("tests/helpers/newsletter-db.ts")).href;
    // Omit the second migration so setup fails after opening both clients and creating its schema.
    // This exercises cleanup without requiring cluster-wide CREATE ROLE privileges.
    const script = `import { isolatedNewsletterDatabase } from ${JSON.stringify(helper)};
      process.chdir(process.env.NEWSLETTER_FIXTURE_DIRECTORY);
      try {
        const fixture = await isolatedNewsletterDatabase(process.env.NEWSLETTER_TEST_DATABASE_URL);
        await fixture.close(); process.exitCode = 1;
      } catch (error) {
        console.log(error?.code === 'ENOENT' ? 'ENOENT' : 'unexpected_fixture_error');
        if (error?.code !== 'ENOENT') process.exitCode = 1;
      }`;
    const result = await promisify(execFile)(process.execPath, ["--import", "tsx", "--input-type=module", "-e", script], {
      cwd: process.cwd(), timeout: 5000,
      env: { PATH: process.env.PATH ?? "", NODE_ENV: "test", NEWSLETTER_TEST_DATABASE_URL: url!, NEWSLETTER_FIXTURE_DIRECTORY: directory },
    });
    assert.equal(result.stdout.trim(), "ENOENT");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
