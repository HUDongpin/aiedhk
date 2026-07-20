import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "@/app/api/research-news/route";

test("retired public POST /api/research-news returns 410 Gone and points to the real workflow", async () => {
  const response = POST();

  assert.equal(response.status, 410);

  const body = (await response.json()) as { status: string; review: string; ingestion: string };
  assert.equal(body.status, "gone");
  assert.equal(body.review, "/admin/research-news");
  assert.equal(body.ingestion, "/api/cron/research-ingest");
});
