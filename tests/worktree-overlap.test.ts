import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function loadOverlapModule() {
  try {
    const modulePath = ["../scripts", "check-worktree-overlap.mjs"].join("/");
    return await import(modulePath);
  } catch (error) {
    assert.fail(`worktree overlap checker is unavailable: ${String(error)}`);
  }
}

test("worktree state classification separates active writers from clean worktrees", async () => {
  const { classifyWorktreeState } = await loadOverlapModule();

  assert.equal(
    classifyWorktreeState({ dirtyPaths: ["lib/research-reviewed-data.ts"], hasUnintegratedCommits: false }),
    "active-writer"
  );
  assert.equal(
    classifyWorktreeState({ dirtyPaths: [], hasUnintegratedCommits: false }),
    "completed-clean"
  );
  assert.equal(
    classifyWorktreeState({ dirtyPaths: [], hasUnintegratedCommits: true }),
    "idle-unintegrated"
  );
});

test("only overlapping active writers block the candidate worktree", async () => {
  const { collectOverlapReport } = await loadOverlapModule();
  const sharedPath = "lib/academy-reviewed-data.ts";

  const report = collectOverlapReport([sharedPath, "tests/academy-data.test.ts"], [
    {
      path: "/worktrees/active",
      branch: "codex/active",
      classification: "active-writer",
      changedPaths: [sharedPath, "public/audio/research/new.m4a"],
      dirtyPaths: [sharedPath],
    },
    {
      path: "/worktrees/completed",
      branch: "codex/completed",
      classification: "completed-clean",
      changedPaths: [sharedPath],
      dirtyPaths: [],
    },
    {
      path: "/worktrees/idle",
      branch: "codex/idle",
      classification: "idle-unintegrated",
      changedPaths: [sharedPath],
      dirtyPaths: [],
    },
  ]);

  assert.deepEqual(report.blockers, [
    {
      path: "/worktrees/active",
      branch: "codex/active",
      overlappingPaths: [sharedPath],
    },
  ]);
  assert.equal(report.completedClean[0].overlappingPaths[0], sharedPath);
  assert.equal(report.idleUnintegrated[0].overlappingPaths[0], sharedPath);
});

test("unrelated dirty files do not turn historical branch overlap into an active-writer blocker", async () => {
  const { collectOverlapReport } = await loadOverlapModule();
  const historicalAcademyPath = "lib/academy-reviewed-data.ts";

  const report = collectOverlapReport([historicalAcademyPath], [
    {
      path: "/worktrees/unrelated-draft",
      branch: "codex/old-academy-branch",
      classification: "active-writer",
      changedPaths: [historicalAcademyPath, "app/research-news/page.tsx"],
      dirtyPaths: ["app/research-news/page.tsx"],
    },
  ]);

  assert.deepEqual(report.blockers, []);
  assert.deepEqual(report.activeWriters[0].overlappingPaths, [historicalAcademyPath]);
  assert.deepEqual(report.activeWriters[0].dirtyOverlappingPaths, []);
});

test("overlap CLI reports separate worktree categories", () => {
  const result = spawnSync(
    process.execPath,
    [path.join(projectRoot, "scripts/check-worktree-overlap.mjs"), "--base", "origin/main"],
    { cwd: projectRoot, encoding: "utf8" }
  );

  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /Active writers:\s+\d+/);
  assert.match(result.stdout, /Completed clean worktrees:\s+\d+/);
  assert.match(result.stdout, /Idle unintegrated worktrees:\s+\d+/);
  assert.match(result.stdout, /Worktree overlap check passed\./);
});

test("overlap CLI blocks a clean candidate when repeated planned paths overlap an active writer", () => {
  const fixtureRoot = mkdtempSync(path.join(os.tmpdir(), "worktree-overlap-"));
  const candidateRoot = path.join(fixtureRoot, "candidate");
  const activeRoot = path.join(fixtureRoot, "active");
  const sharedPath = "lib/academy-reviewed-data.ts";
  const secondPlannedPath = "tests/academy-data.test.ts";
  const git = (args: string[], cwd = candidateRoot) => {
    const result = spawnSync("git", args, { cwd, encoding: "utf8" });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  };

  try {
    mkdirSync(path.join(candidateRoot, "lib"), { recursive: true });
    mkdirSync(path.join(candidateRoot, "tests"), { recursive: true });
    writeFileSync(path.join(candidateRoot, sharedPath), "export const lessons = [];\n");
    writeFileSync(path.join(candidateRoot, secondPlannedPath), "// academy tests\n");
    git(["init", "-b", "main"]);
    git(["config", "user.name", "Overlap Test"]);
    git(["config", "user.email", "overlap@example.test"]);
    git(["add", "."]);
    git(["commit", "-m", "fixture"]);
    git(["worktree", "add", activeRoot, "-b", "active-writer"]);
    writeFileSync(path.join(activeRoot, sharedPath), "export const lessons = [\"draft\"];\n");

    const result = spawnSync(
      process.execPath,
      [
        path.join(projectRoot, "scripts/check-worktree-overlap.mjs"),
        "--base",
        "main",
        "--path",
        `./${sharedPath}`,
        "--path",
        secondPlannedPath,
      ],
      { cwd: candidateRoot, encoding: "utf8" }
    );

    assert.equal(result.status, 1, `${result.stdout}\n${result.stderr}`);
    assert.match(result.stdout, /Candidate paths:\s+2/);
    assert.match(result.stdout, /\[active-writer\].*overlap=1/);
    assert.match(result.stdout, new RegExp(sharedPath.replace(".", "\\.")));
    assert.match(result.stderr, /active writer paths overlap the candidate/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("overlap CLI rejects planned paths outside the candidate repository", () => {
  const result = spawnSync(
    process.execPath,
    [path.join(projectRoot, "scripts/check-worktree-overlap.mjs"), "--path", "../outside.txt"],
    { cwd: projectRoot, encoding: "utf8" }
  );

  assert.equal(result.status, 1, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stderr, /Planned path must name a file inside the project/);
});

test("release verification runs the overlap checker", () => {
  const packageJson = JSON.parse(readFileSync(path.join(projectRoot, "package.json"), "utf8"));
  const hygieneGuide = readFileSync(path.join(projectRoot, "docs/worktree-hygiene.md"), "utf8");

  assert.equal(packageJson.scripts["hygiene:overlap"], "node scripts/check-worktree-overlap.mjs");
  assert.match(packageJson.scripts["release:verify"], /npm run hygiene:overlap/);
  assert.match(hygieneGuide, /npm run hygiene:overlap -- --path <repo-relative-path>/);
});
