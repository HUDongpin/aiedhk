import type { Locale } from "@/lib/i18n";

interface DigestCopy {
  countLabel: string;
  newsIntro: string;
  academyIntro: string;
}

// Newsletter chrome is localized independently of the reviewed content language.
export const digestCopy: Record<Locale, DigestCopy> = {
  en: { countLabel: "In this issue", newsIntro: "Research and developments in AI for education.", academyIntro: "Two lessons to connect AI and learning." },
  "zh-hant": { countLabel: "本期篇數", newsIntro: "精選人工智能教育研究與最新動態。", academyIntro: "透過兩堂課，連結人工智能與學習。" },
  "zh-hans": { countLabel: "本期篇数", newsIntro: "精选人工智能教育研究与最新动态。", academyIntro: "通过两堂课，连接人工智能与学习。" },
  es: { countLabel: "Contenidos de esta edición", newsIntro: "Investigación y novedades sobre IA en la educación.", academyIntro: "Dos lecciones para conectar la IA y el aprendizaje." },
  fr: { countLabel: "Au sommaire", newsIntro: "Recherche et actualités sur l’IA dans l’éducation.", academyIntro: "Deux leçons pour relier l’IA et l’apprentissage." },
  pt: { countLabel: "Conteúdos desta edição", newsIntro: "Investigação e novidades sobre IA na educação.", academyIntro: "Duas lições para ligar a IA à aprendizagem." },
  de: { countLabel: "Beiträge in dieser Ausgabe", newsIntro: "Forschung und Entwicklungen zu KI in der Bildung.", academyIntro: "Zwei Lektionen verbinden KI und Lernen." },
  ar: { countLabel: "عدد مواد هذا العدد", newsIntro: "أبحاث ومستجدات الذكاء الاصطناعي في التعليم.", academyIntro: "درسان يربطان الذكاء الاصطناعي والتعلّم." },
  ko: { countLabel: "이번 호 콘텐츠 수", newsIntro: "교육 분야의 AI 연구와 새로운 소식을 전합니다.", academyIntro: "두 가지 수업으로 AI와 학습을 연결합니다." },
  ja: { countLabel: "今回のコンテンツ数", newsIntro: "教育におけるAIの研究と最新動向をお届けします。", academyIntro: "2つのレッスンでAIと学習をつなぎます。" },
  hi: { countLabel: "इस अंक में सामग्री की संख्या", newsIntro: "शिक्षा में एआई से जुड़े शोध और नए घटनाक्रम।", academyIntro: "एआई और सीखने को जोड़ने वाले दो पाठ।" },
  ru: { countLabel: "Материалов в выпуске", newsIntro: "Исследования и новости об ИИ в образовании.", academyIntro: "Два урока, связывающих ИИ и обучение." },
  id: { countLabel: "Jumlah materi edisi ini", newsIntro: "Riset dan perkembangan AI untuk pendidikan.", academyIntro: "Dua pelajaran yang menghubungkan AI dan pembelajaran." },
  bn: { countLabel: "এই সংখ্যায় বিষয়বস্তুর সংখ্যা", newsIntro: "শিক্ষায় এআই সম্পর্কিত গবেষণা ও নতুন অগ্রগতি।", academyIntro: "এআই ও শেখার মধ্যে সংযোগ তৈরির দুটি পাঠ।" },
};
