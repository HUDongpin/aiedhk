import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { del, put } from "@vercel/blob";
import { resolveDashScopeTtsConfig, synthesizeDashScopeTtsWithRetry } from "@/lib/dashscope-tts";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";

async function main() {
  if (process.env.RESEARCH_AUDIO_BLOB_CLEANUP === "1") {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is required for temporary cleanup");
    await del(
      [
        "automation-exports/2026-07-24/aied-035.source.mp3",
        "automation-exports/2026-07-24/aied-034.source.mp3",
      ],
      { token }
    );
    console.log("temporary research audio exports deleted");
    return;
  }

  const ids = (process.env.RESEARCH_AUDIO_SOURCE_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (ids.length === 0) return;

  const config = resolveDashScopeTtsConfig(process.env);

  for (const id of ids) {
    const paper = reviewedResearchPapers.find((item) => item.id === id);
    if (!paper?.summaryAudio) throw new Error(`${id} is missing summaryAudio`);

    const sourcePath = paper.summaryAudio.replace(/\.m4a$/, ".source.mp3").replace(/^\//, "");
    const outputPath = join(process.cwd(), "public", sourcePath);
    await mkdir(dirname(outputPath), { recursive: true });

    const audioUrl = await synthesizeDashScopeTtsWithRetry(
      { ...config, text: paper.fullSummary, format: "mp3" },
      { attempts: 2, retryDelayMs: 800 }
    );
    const response = await fetch(audioUrl);
    if (!response.ok) throw new Error(`${id} audio download failed with status ${response.status}`);

    await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
    console.log(`${id}: generated secure build audio source`);

    if (process.env.RESEARCH_AUDIO_BLOB_EXPORT === "1") {
      const pathname = `automation-exports/2026-07-24/${id}.source.mp3`;
      const token = process.env.BLOB_READ_WRITE_TOKEN;
      if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is required for temporary export");
      const blob = await put(pathname, await readFile(outputPath), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        token,
      });
      console.log(`${id}: exported temporary source ${blob.url}`);
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
