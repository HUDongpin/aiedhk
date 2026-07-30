import { execFileSync } from "node:child_process";
import { existsSync, realpathSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export function classifyWorktreeState({ dirtyPaths, hasUnintegratedCommits }) {
  if (dirtyPaths.length > 0) return "active-writer";
  if (hasUnintegratedCommits) return "idle-unintegrated";
  return "completed-clean";
}

export function collectOverlapReport(currentPaths, worktrees) {
  const currentPathSet = new Set(currentPaths);
  const report = {
    blockers: [],
    activeWriters: [],
    completedClean: [],
    idleUnintegrated: [],
    prunable: [],
  };

  for (const worktree of worktrees) {
    const overlappingPaths = [...new Set(worktree.changedPaths ?? [])]
      .filter((file) => currentPathSet.has(file))
      .sort();
    const dirtyOverlappingPaths = [...new Set(worktree.dirtyPaths ?? [])]
      .filter((file) => currentPathSet.has(file))
      .sort();
    const item = { ...worktree, overlappingPaths, dirtyOverlappingPaths };

    if (worktree.classification === "active-writer") {
      report.activeWriters.push(item);
      if (dirtyOverlappingPaths.length > 0) {
        report.blockers.push({
          path: worktree.path,
          branch: worktree.branch,
          overlappingPaths: dirtyOverlappingPaths,
        });
      }
    } else if (worktree.classification === "completed-clean") {
      report.completedClean.push(item);
    } else if (worktree.classification === "idle-unintegrated") {
      report.idleUnintegrated.push(item);
    } else if (worktree.classification === "prunable") {
      report.prunable.push(item);
    }
  }

  return report;
}

function git(args, cwd, { allowFailure = false } = {}) {
  try {
    return execFileSync("git", args, {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    if (allowFailure) return null;
    const detail = error?.stderr?.trim() || error?.message || String(error);
    throw new Error(`git ${args.join(" ")} failed in ${cwd}: ${detail}`);
  }
}

function parseArguments(argv) {
  let baseRef = process.env.WORKTREE_OVERLAP_BASE || "origin/main";
  const plannedPaths = [];

  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--base" && argv[index + 1]) {
      baseRef = argv[index + 1];
      index += 1;
    } else if (argv[index] === "--path" && argv[index + 1]) {
      plannedPaths.push(argv[index + 1]);
      index += 1;
    } else {
      throw new Error(`Unknown or incomplete argument: ${argv[index]}`);
    }
  }

  return { baseRef, plannedPaths };
}

function parseWorktreeList(output) {
  return output
    .trim()
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n");
      const value = (prefix) => lines.find((line) => line.startsWith(prefix))?.slice(prefix.length);
      const branchRef = value("branch ");

      return {
        path: value("worktree "),
        head: value("HEAD "),
        branch: branchRef?.replace(/^refs\/heads\//, "") || "detached",
        prunable: lines.some((line) => line.startsWith("prunable")),
      };
    });
}

function parseStatusPaths(output) {
  const fields = output.split("\0");
  const paths = new Set();

  for (let index = 0; index < fields.length; index += 1) {
    const entry = fields[index];
    if (!entry) continue;

    const status = entry.slice(0, 2);
    const file = entry.slice(3);
    if (file) paths.add(file);

    if (/[RC]/.test(status)) {
      const previousPath = fields[index + 1];
      if (previousPath) paths.add(previousPath);
      index += 1;
    }
  }

  return [...paths].sort();
}

function statusPaths(worktreePath) {
  return parseStatusPaths(
    git(["status", "--porcelain=v1", "-z", "--untracked-files=all"], worktreePath)
  );
}

function committedPaths(baseRef, head, worktreePath) {
  return git(["diff", "--name-only", "-z", `${baseRef}...${head}`], worktreePath)
    .split("\0")
    .filter(Boolean)
    .sort();
}

function hasUnintegratedCommits(baseRef, head, worktreePath) {
  return git(["cherry", baseRef, head], worktreePath)
    .split("\n")
    .some((line) => line.startsWith("+ "));
}

function uniquePaths(...collections) {
  return [...new Set(collections.flat())].sort();
}

function normalizePlannedPaths(plannedPaths, projectRoot) {
  return plannedPaths.map((plannedPath) => {
    const absolutePath = path.resolve(projectRoot, plannedPath);
    const relativePath = path.relative(projectRoot, absolutePath);
    const escapesProject =
      relativePath === ".." ||
      relativePath.startsWith(`..${path.sep}`) ||
      path.isAbsolute(relativePath);

    if (!relativePath || escapesProject) {
      throw new Error(`Planned path must name a file inside the project: ${plannedPath}`);
    }

    return relativePath.split(path.sep).join("/");
  });
}

function printWorktree(category, worktree) {
  const overlap = worktree.overlappingPaths.length;
  const dirtyOverlap = worktree.dirtyOverlappingPaths?.length ?? 0;
  const dirty = worktree.dirtyPaths.length;
  console.log(
    `[${category}] ${worktree.branch} @ ${worktree.path} (dirty=${dirty}, overlap=${overlap}, dirty-overlap=${dirtyOverlap})`
  );
  for (const file of worktree.overlappingPaths) {
    console.log(`  ${file}`);
  }
}

function runOverlapCheck(argv = process.argv.slice(2)) {
  const { baseRef, plannedPaths } = parseArguments(argv);
  const projectRoot = git(["rev-parse", "--show-toplevel"], process.cwd()).trim();
  const normalizedPlannedPaths = normalizePlannedPaths(plannedPaths, projectRoot);
  const baseCommit = git(["rev-parse", "--verify", `${baseRef}^{commit}`], projectRoot).trim();
  const currentHead = git(["rev-parse", "HEAD"], projectRoot).trim();
  const currentRoot = realpathSync(projectRoot);
  const currentPaths = uniquePaths(
    committedPaths(baseRef, currentHead, projectRoot),
    statusPaths(projectRoot),
    normalizedPlannedPaths
  );
  const worktrees = [];

  for (const listed of parseWorktreeList(git(["worktree", "list", "--porcelain"], projectRoot))) {
    const listedExists = listed.path && existsSync(listed.path);
    if (listedExists && realpathSync(listed.path) === currentRoot) continue;

    if (!listedExists || listed.prunable) {
      worktrees.push({
        ...listed,
        classification: "prunable",
        changedPaths: [],
        dirtyPaths: [],
      });
      continue;
    }

    const dirtyPaths = statusPaths(listed.path);
    const unintegrated = hasUnintegratedCommits(baseRef, listed.head, listed.path);
    worktrees.push({
      ...listed,
      classification: classifyWorktreeState({
        dirtyPaths,
        hasUnintegratedCommits: unintegrated,
      }),
      changedPaths: uniquePaths(
        committedPaths(baseRef, listed.head, listed.path),
        dirtyPaths
      ),
      dirtyPaths,
    });
  }

  const report = collectOverlapReport(currentPaths, worktrees);
  console.log("Worktree overlap check");
  console.log(`Base: ${baseRef} (${baseCommit.slice(0, 12)})`);
  console.log(`Candidate paths: ${currentPaths.length}`);
  console.log(`Active writers: ${report.activeWriters.length}`);
  console.log(`Completed clean worktrees: ${report.completedClean.length}`);
  console.log(`Idle unintegrated worktrees: ${report.idleUnintegrated.length}`);
  console.log(`Prunable registrations: ${report.prunable.length}`);

  for (const worktree of report.activeWriters) printWorktree("active-writer", worktree);
  for (const worktree of report.completedClean) printWorktree("completed-clean", worktree);
  for (const worktree of report.idleUnintegrated) printWorktree("idle-unintegrated", worktree);
  for (const worktree of report.prunable) printWorktree("prunable", worktree);

  if (report.blockers.length > 0) {
    console.error("Worktree overlap check failed: active writer paths overlap the candidate.");
    process.exitCode = 1;
    return;
  }

  console.log("Worktree overlap check passed.");
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : null;
if (invokedPath === import.meta.url) {
  try {
    runOverlapCheck();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
