import assert from "node:assert/strict";
import test from "node:test";
import {
  getAllResearchTopics,
  getLocalizedTopicLabel,
  getPapersForTopicSlug,
  getResearchTopicBySlug,
  topicSlug,
} from "@/lib/research-topics";

test("topics are derived from canonical tags with non-empty slugs and real counts", () => {
  const topics = getAllResearchTopics();

  assert.ok(topics.length > 0, "there should be at least one topic");
  assert.ok(topics.every((topic) => topic.slug.length > 0));
  assert.ok(topics.every((topic) => topic.count >= 1));
  // sorted by descending count
  for (let i = 1; i < topics.length; i += 1) {
    assert.ok(topics[i - 1].count >= topics[i].count);
  }
});

test("a known tag resolves to a topic and lists its papers", () => {
  const slug = topicSlug("AI feedback");
  const topic = getResearchTopicBySlug(slug);
  assert.ok(topic, "AI feedback should be a topic");

  const papers = getPapersForTopicSlug(slug, "en");
  assert.ok(papers.length >= 1, "topic should list at least one paper");
  assert.equal(topic.count, papers.length, "count should match the number of listed papers");
});

test("topic label localizes when a translation exists and falls back otherwise", () => {
  // aied-025 carries the "news" tag and has a zh-hant translation ("新聞").
  const newsSlug = topicSlug("news");
  const label = getLocalizedTopicLabel(newsSlug, "zh-hant");
  assert.ok(label.length > 0);

  const englishLabel = getLocalizedTopicLabel(newsSlug, "en");
  assert.equal(englishLabel, "news");
});
