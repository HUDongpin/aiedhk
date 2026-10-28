import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { retryDecision } from "@/lib/newsletter/policy";

const config = JSON.parse(readFileSync("vercel.json", "utf8")) as {
  crons: Array<{ path: string; schedule: string }>;
};

function dailyNewsletterTicks() {
  const schedules = config.crons.filter(({ path }) => path === "/api/cron/newsletter");
  const ticks: number[] = [];
  for (let minuteOfDay = 0; minuteOfDay < 1440; minuteOfDay++) {
    for (const { schedule } of schedules) {
      const [minute, hour, day, month, weekday] = schedule.split(" ");
      assert.deepEqual([day, month, weekday], ["*", "*", "*"], "daily delivery and retries must run every day");
      const matches = (field: string, value: number) => field === "*" || field.split(",").some((item) => {
        assert.match(item, /^\d+$/, "extend the schedule evaluator before adding cron ranges or steps");
        return Number(item) === value;
      });
      if (matches(minute, minuteOfDay % 60) && matches(hour, Math.floor(minuteOfDay / 60))) ticks.push(minuteOfDay);
    }
  }
  return ticks;
}

test("daily digests retain 09:20 and 09:30 HKT without per-minute database polling", () => {
  const ticks = dailyNewsletterTicks();
  assert.ok(ticks.includes(80), "News needs its 01:20 UTC / 09:20 HKT invocation");
  assert.ok(ticks.includes(90), "Academy needs its 01:30 UTC / 09:30 HKT invocation");
  assert.equal(ticks.length, new Set(ticks).size, "schedules must not overlap");
  assert.ok(ticks.length <= 26, `expected at most 26 invocations per day, got ${ticks.length}`);
  const gaps = ticks.map((tick, index) => (ticks[index + 1] ?? ticks[0] + 1440) - tick);
  assert.ok(gaps.every((gap) => gap > 5), "leave more than Neon's five-minute idle timeout between scheduled ticks");
  assert.ok(gaps.every((gap) => gap <= 60), "recover delayed deliveries at least hourly");
});

test("sparser cron retries stay within the provider idempotency window", () => {
  const ticks = dailyNewsletterTicks();
  const firstAttemptAt = new Date("2026-10-28T01:20:00Z");
  let attemptAt = firstAttemptAt;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const decision = retryDecision({ attempt, firstAttemptAt, now: attemptAt, retryable: true, ambiguous: true });
    assert.equal(decision.status, "queued");
    assert.ok(decision.nextAttemptAt);
    const next = Array.from({ length: 3 }, (_, day) => ticks.map((minute) => Date.UTC(2026, 9, 28 + day, 0, minute)))
      .flat().find((time) => time >= decision.nextAttemptAt!.getTime());
    assert.ok(next !== undefined);
    attemptAt = new Date(next);
    assert.ok(attemptAt.getTime() - firstAttemptAt.getTime() < 23 * 3600_000, "do not retry after the existing 23-hour safety boundary");
  }
});
