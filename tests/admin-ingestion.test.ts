import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { listRecentIngestionRuns } from "@/lib/research-pipeline/store";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("listRecentIngestionRuns returns null (not a crash) when no database is configured", async () => {
  const prev = process.env.DATABASE_URL;
  delete process.env.DATABASE_URL;
  try {
    const runs = await listRecentIngestionRuns(5);
    assert.equal(runs, null);
  } finally {
    if (prev !== undefined) process.env.DATABASE_URL = prev;
  }
});

test("the admin queue surfaces recent ingestion-run status", () => {
  const pageSource = source("app/admin/research-news/page.tsx");

  assert.match(pageSource, /listRecentIngestionRuns/);
  assert.match(pageSource, /Recent ingestion runs/);
  // panel is only rendered when the database is available
  assert.match(pageSource, /ingestionRuns !== null && <IngestionRuns/);
});
