import assert from "node:assert/strict";
import test from "node:test";
import {
  buildDashScopeTtsRequest,
  createDashScopeTtsCache,
  parseDashScopeTtsAudioUrl,
  synthesizeDashScopeTts,
  synthesizeDashScopeTtsWithRetry,
} from "@/lib/dashscope-tts";

test("buildDashScopeTtsRequest creates the documented CosyVoice non-streaming request", () => {
  const request = buildDashScopeTtsRequest({
    apiKey: "test-api-key",
    text: "  There is a very large garden behind my house.  ",
    model: "cosyvoice-v3-flash",
    voice: "loongdavid_v3",
  });

  assert.equal(request.url, "https://dashscope.aliyuncs.com/api/v1/services/audio/tts/SpeechSynthesizer");
  assert.equal(request.init.method, "POST");
  assert.deepEqual(request.init.headers, {
    Authorization: "Bearer test-api-key",
    "Content-Type": "application/json",
  });

  const body = JSON.parse(String(request.init.body));
  assert.deepEqual(body, {
    model: "cosyvoice-v3-flash",
    input: {
      text: "There is a very large garden behind my house.",
      voice: "loongdavid_v3",
      format: "mp3",
      sample_rate: 24000,
      language_hints: ["en"],
    },
  });
});

test("parseDashScopeTtsAudioUrl extracts the temporary audio URL", () => {
  const audioUrl = parseDashScopeTtsAudioUrl({
    request_id: "request-1",
    output: {
      finish_reason: "stop",
      audio: {
        data: "",
        url: "https://dashscope-result.example/audio.mp3?token=temporary",
        id: "audio-1",
        expires_at: 1772697707,
      },
    },
    usage: { characters: 15 },
  });

  assert.equal(audioUrl, "https://dashscope-result.example/audio.mp3?token=temporary");
});

test("parseDashScopeTtsAudioUrl rejects malformed responses", () => {
  assert.throws(() => parseDashScopeTtsAudioUrl({ output: { audio: {} } }), /audio URL/i);
});

test("synthesizeDashScopeTts sends the request with injected fetch and returns the audio URL", async () => {
  let callCount = 0;
  const fetcher: typeof fetch = async (url, init) => {
    callCount += 1;
    assert.equal(url, "https://dashscope.aliyuncs.com/api/v1/services/audio/tts/SpeechSynthesizer");
    assert.equal(init?.method, "POST");

    const body = JSON.parse(String(init?.body));
    assert.equal(body.model, "cosyvoice-v3-flash");
    assert.equal(body.input.voice, "loongdavid_v3");

    return new Response(
      JSON.stringify({
        output: {
          finish_reason: "stop",
          audio: { url: "https://dashscope-result.example/summary.mp3" },
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  };

  const audioUrl = await synthesizeDashScopeTts(
    { apiKey: "test-api-key", text: "AIEDHK summary.", model: "cosyvoice-v3-flash", voice: "loongdavid_v3" },
    fetcher
  );

  assert.equal(audioUrl, "https://dashscope-result.example/summary.mp3");
  assert.equal(callCount, 1);
});

test("createDashScopeTtsCache reuses unexpired synthesis results", async () => {
  const cache = createDashScopeTtsCache();
  let calls = 0;

  const first = await cache.getOrCreate("en:paper-1", async () => {
    calls += 1;
    return "https://dashscope-result.example/cached.mp3";
  });
  const second = await cache.getOrCreate("en:paper-1", async () => {
    calls += 1;
    return "https://dashscope-result.example/fresh.mp3";
  });

  assert.equal(first, "https://dashscope-result.example/cached.mp3");
  assert.equal(second, "https://dashscope-result.example/cached.mp3");
  assert.equal(calls, 1);
});

test("synthesizeDashScopeTtsWithRetry retries a transient upstream failure", async () => {
  let calls = 0;
  const fetcher: typeof fetch = async () => {
    calls += 1;
    if (calls === 1) {
      return new Response(JSON.stringify({ code: "InternalError", message: "temporary upstream failure" }), { status: 502 });
    }

    return new Response(
      JSON.stringify({
        output: {
          finish_reason: "stop",
          audio: { url: "https://dashscope-result.example/retried.mp3" },
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  };

  const audioUrl = await synthesizeDashScopeTtsWithRetry(
    { apiKey: "test-api-key", text: "AIEDHK summary.", model: "cosyvoice-v3-flash", voice: "loongdavid_v3" },
    { fetcher, attempts: 2, retryDelayMs: 0 }
  );

  assert.equal(audioUrl, "https://dashscope-result.example/retried.mp3");
  assert.equal(calls, 2);
});
