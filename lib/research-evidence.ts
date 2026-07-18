import { normalizeLocale, type Locale } from "@/lib/i18n";
import type { PaperType } from "@/lib/types";

/**
 * Research-to-product "evidence signal": a coarse, factual classification of what
 * KIND of evidence a Research News item represents, derived from its existing
 * `type` (never fabricated). It helps readers weigh an item before acting on it —
 * a peer-reviewed study and a vendor announcement warrant different confidence.
 */
export type EvidenceSignal = "peer-reviewed" | "evidence-synthesis" | "conference" | "tool-dataset" | "industry-signal";

export function evidenceSignalForType(type: PaperType): EvidenceSignal {
  switch (type) {
    case "journal":
      return "peer-reviewed";
    case "review":
      return "evidence-synthesis";
    case "conference":
      return "conference";
    case "tool-dataset":
      return "tool-dataset";
    case "policy-ethics":
    default:
      return "industry-signal";
  }
}

interface EvidenceCopy {
  label: string;
  description: string;
}

type EvidenceCopyByLocale = Partial<Record<Locale, Record<EvidenceSignal, EvidenceCopy>>>;

const en: Record<EvidenceSignal, EvidenceCopy> = {
  "peer-reviewed": { label: "Peer-reviewed study", description: "Reports original results reviewed by other researchers before publication." },
  "evidence-synthesis": { label: "Evidence synthesis", description: "Reviews or combines findings across many studies rather than one experiment." },
  conference: { label: "Conference paper", description: "Presented at an academic venue; often earlier-stage than a journal article." },
  "tool-dataset": { label: "Tool / dataset", description: "A resource to build on or evaluate, not a claim of learning impact." },
  "industry-signal": { label: "Industry signal", description: "A product or policy announcement, not independent evidence of learning impact." },
};

const evidenceCopy: EvidenceCopyByLocale = {
  en,
  "zh-hant": {
    "peer-reviewed": { label: "同行評審研究", description: "報告經其他研究者評審後才發表的原創結果。" },
    "evidence-synthesis": { label: "證據綜述", description: "綜合或彙整多項研究的發現，而非單一實驗。" },
    conference: { label: "會議論文", description: "於學術會議發表，通常較期刊論文處於更早階段。" },
    "tool-dataset": { label: "工具／數據集", description: "可供延伸或評估的資源，並非學習成效的主張。" },
    "industry-signal": { label: "產業訊號", description: "產品或政策公告，而非學習成效的獨立證據。" },
  },
  "zh-hans": {
    "peer-reviewed": { label: "同行评审研究", description: "报告经其他研究者评审后才发表的原创结果。" },
    "evidence-synthesis": { label: "证据综述", description: "综合或汇整多项研究的发现，而非单一实验。" },
    conference: { label: "会议论文", description: "于学术会议发表，通常较期刊论文处于更早阶段。" },
    "tool-dataset": { label: "工具／数据集", description: "可供延伸或评估的资源，并非学习成效的主张。" },
    "industry-signal": { label: "产业信号", description: "产品或政策公告，而非学习成效的独立证据。" },
  },
};

export function evidenceSignalCopy(signal: EvidenceSignal, localeInput: string): EvidenceCopy {
  const locale = normalizeLocale(localeInput);
  return (evidenceCopy[locale] ?? en)[signal];
}
