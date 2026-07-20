import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { resolveDashScopeTtsConfig, synthesizeDashScopeTtsWithRetry } from "@/lib/dashscope-tts";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";

async function main() {
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
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
