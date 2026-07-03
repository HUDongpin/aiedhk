import { execFileSync } from "node:child_process";

function git(args) {
  return execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function fail(message, details = []) {
  console.error(message);
  for (const detail of details) {
    console.error(`  ${detail}`);
  }
  process.exit(1);
}

try {
  git(["rev-parse", "--is-inside-work-tree"]);
} catch {
  fail("Worktree hygiene check requires a Git repository.");
}

const status = git(["status", "--porcelain=v1", "--untracked-files=all"])
  .split("\n")
  .filter(Boolean);

if (status.length > 0) {
  fail("Worktree is not clean.", status);
}

const trackedFiles = git(["ls-files", "-z"]).split("\0").filter(Boolean);
const forbiddenTrackedFiles = trackedFiles.filter((file) => {
  if (file === ".env.example") return false;

  return (
    file === ".env" ||
    file.startsWith(".env.") ||
    file.startsWith(".vercel/") ||
    file.startsWith(".next/") ||
    file.startsWith("node_modules/") ||
    file.startsWith(".playwright-cli/") ||
    file.startsWith("output/") ||
    file.startsWith("outputs/") ||
    file.startsWith("tmp/") ||
    /^All API Keys.*\.docx$/i.test(file)
  );
});

if (forbiddenTrackedFiles.length > 0) {
  fail("Forbidden local, generated, or secret-bearing files are tracked.", forbiddenTrackedFiles);
}

console.log("Worktree hygiene check passed.");
