import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function loadOverlapModule() {
  try {
    return await import("../scripts/check-worktree-overlap.mjs");
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

test("release verification runs the overlap checker", () => {
  const packageJson = JSON.parse(readFileSync(path.join(projectRoot, "package.json"), "utf8"));

  assert.equal(packageJson.scripts["hygiene:overlap"], "node scripts/check-worktree-overlap.mjs");
  assert.match(packageJson.scripts["release:verify"], /npm run hygiene:overlap/);
});
