import { unstable_cache } from "next/cache";
import { PAPER_TYPES, type PaperType, type ResearchFilterOptions, type ResearchFilterResult, type ResearchPaper } from "@/lib/types";
import { getDictionary, normalizeLocale, type Locale } from "@/lib/i18n";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { RESEARCH_NEWS_CACHE_TAG, RESEARCH_NEWS_REVALIDATE_SECONDS } from "@/lib/research-cache";
import { filterResearchPaperList } from "@/lib/research-filter";
import {
  getPublishedResearchPaperBySlugFromDatabase,
  getPublishedResearchPapersFromDatabase,
  getPublishedResearchYearsFromDatabase,
  getRelatedPublishedPapersFromDatabase,
} from "@/lib/research-pipeline/store";

export { RESEARCH_NEWS_CACHE_TAG, RESEARCH_NEWS_REVALIDATE_SECONDS } from "@/lib/research-cache";

export const researchPapers: ResearchPaper[] = reviewedResearchPapers;

type TopicKey =
  | "aiTutor"
  | "personalizedLearning"
  | "classroomOrchestration"
  | "teacherTools"
  | "coDesign"
  | "responsibleAI"
  | "multimodalLearning"
  | "learningAnalytics"
  | "collaboration"
  | "generativeAI"
  | "feedback"
  | "assessment"
  | "llm"
  | "review"
  | "aiedTrends"
  | "datasets"
  | "evaluation"
  | "benchmarking"
  | "ethics"
  | "privacy"
  | "policy"
  | "hongKong"
  | "rdHub"
  | "researchTranslation";

const paperTopicKeys: Record<string, TopicKey[]> = {
  "rp-001": ["aiTutor", "personalizedLearning", "classroomOrchestration"],
  "rp-002": ["teacherTools", "coDesign", "responsibleAI"],
  "rp-003": ["multimodalLearning", "learningAnalytics", "collaboration"],
  "rp-004": ["generativeAI", "feedback", "assessment"],
  "rp-005": ["llm", "review", "aiedTrends"],
  "rp-006": ["datasets", "evaluation", "benchmarking"],
  "rp-007": ["ethics", "privacy", "policy"],
  "rp-008": ["hongKong", "rdHub", "researchTranslation"],
};

const englishTitles = Object.fromEntries(researchPapers.map((paper) => [paper.id, paper.title])) as Record<string, string>;

const paperTitles: Record<Locale, Record<string, string>> = {
  en: englishTitles,
  "zh-hant": {
    "rp-001": "面向課堂個性化學習的自適應 AI 導師",
    "rp-002": "負責任課堂自動化中的教師與 AI 共設計模式",
    "rp-003": "協作解難的多模態學習分析",
    "rp-004": "評估 K-12 寫作與 STEM 學習中的生成式回饋",
    "rp-005": "AI 教育中大型語言模型的綜述",
    "rp-006": "AIED 系統的開放數據集與評估協議",
    "rp-007": "面向學生的 AI 系統中的公平、私隱與透明度",
    "rp-008": "香港作為 AIED 研究到實踐轉化的生活實驗室",
  },
  "zh-hans": {
    "rp-001": "面向课堂个性化学习的自适应 AI 导师",
    "rp-002": "负责任课堂自动化中的教师与 AI 共设计模式",
    "rp-003": "协作解难的多模态学习分析",
    "rp-004": "评估 K-12 写作与 STEM 学习中的生成式反馈",
    "rp-005": "AI 教育中大型语言模型的综述",
    "rp-006": "AIED 系统的开放数据集与评估协议",
    "rp-007": "面向学生的 AI 系统中的公平、隐私与透明度",
    "rp-008": "香港作为 AIED 研究到实践转化的生活实验室",
  },
  es: {
    "rp-001": "Tutores de IA adaptativos para aprendizaje personalizado orientado al aula",
    "rp-002": "Patrones de codiseño docente-IA para automatización responsable del aula",
    "rp-003": "Analítica de aprendizaje multimodal para resolución colaborativa de problemas",
    "rp-004": "Evaluación de retroalimentación generativa en escritura K-12 y aprendizaje STEM",
    "rp-005": "Una revisión de modelos grandes de lenguaje en IA para educación",
    "rp-006": "Conjuntos de datos abiertos y protocolos de evaluación para sistemas AIED",
    "rp-007": "Equidad, privacidad y transparencia en sistemas de IA orientados al estudiante",
    "rp-008": "Hong Kong como laboratorio vivo para traducir investigación AIED a práctica",
  },
  fr: {
    "rp-001": "Tuteurs IA adaptatifs pour un apprentissage personnalisé orienté classe",
    "rp-002": "Modèles de co-conception enseignant-IA pour une automatisation responsable en classe",
    "rp-003": "Analyse multimodale de l'apprentissage pour la résolution collaborative de problèmes",
    "rp-004": "Évaluer le feedback génératif en écriture K-12 et apprentissage STEM",
    "rp-005": "Revue des grands modèles de langage dans l'IA pour l'éducation",
    "rp-006": "Jeux de données ouverts et protocoles d'évaluation pour les systèmes AIED",
    "rp-007": "Équité, confidentialité et transparence dans les systèmes IA destinés aux élèves",
    "rp-008": "Hong Kong comme laboratoire vivant pour traduire la recherche AIED en pratique",
  },
  pt: {
    "rp-001": "Tutores de IA adaptativos para aprendizagem personalizada orientada à sala de aula",
    "rp-002": "Padrões de codesign professor-IA para automação responsável em sala de aula",
    "rp-003": "Analítica multimodal de aprendizagem para resolução colaborativa de problemas",
    "rp-004": "Avaliação de feedback generativo em escrita K-12 e aprendizagem STEM",
    "rp-005": "Uma revisão de grandes modelos de linguagem em IA para educação",
    "rp-006": "Datasets abertos e protocolos de avaliação para sistemas AIED",
    "rp-007": "Equidade, privacidade e transparência em sistemas de IA voltados ao estudante",
    "rp-008": "Hong Kong como laboratório vivo para traduzir pesquisa AIED em prática",
  },
  de: {
    "rp-001": "Adaptive KI-Tutoren für klassenorientiertes personalisiertes Lernen",
    "rp-002": "Lehrkraft-KI-Co-Designmuster für verantwortliche Unterrichtsautomatisierung",
    "rp-003": "Multimodale Lernanalytik für kollaboratives Problemlösen",
    "rp-004": "Bewertung generativer Rückmeldungen im K-12-Schreiben und STEM-Lernen",
    "rp-005": "Eine Übersicht großer Sprachmodelle in KI für Bildung",
    "rp-006": "Offene Datensätze und Evaluationsprotokolle für AIED-Systeme",
    "rp-007": "Fairness, Datenschutz und Transparenz in schülerorientierten KI-Systemen",
    "rp-008": "Hongkong als Living Lab für den Transfer von AIED-Forschung in Praxis",
  },
  ar: {
    "rp-001": "معلمو ذكاء اصطناعي تكيفيون للتعلم الشخصي الموجه للفصل",
    "rp-002": "أنماط تصميم مشترك بين المعلم والذكاء الاصطناعي لأتمتة صفية مسؤولة",
    "rp-003": "تحليلات تعلم متعددة الوسائط لحل المشكلات التعاوني",
    "rp-004": "تقييم التغذية الراجعة التوليدية في كتابة K-12 وتعلم STEM",
    "rp-005": "مراجعة للنماذج اللغوية الكبيرة في الذكاء الاصطناعي للتعليم",
    "rp-006": "مجموعات بيانات مفتوحة وبروتوكولات تقييم لأنظمة AIED",
    "rp-007": "الإنصاف والخصوصية والشفافية في أنظمة الذكاء الاصطناعي الموجهة للطلاب",
    "rp-008": "هونغ كونغ كمختبر حي لترجمة بحث AIED إلى ممارسة",
  },
  ko: {
    "rp-001": "교실 중심 개인화 학습을 위한 적응형 AI 튜터",
    "rp-002": "책임 있는 교실 자동화를 위한 교사-AI 공동설계 패턴",
    "rp-003": "협력적 문제 해결을 위한 멀티모달 학습 분석",
    "rp-004": "K-12 글쓰기와 STEM 학습에서 생성형 피드백 평가",
    "rp-005": "AI 교육에서 대규모 언어 모델에 대한 검토",
    "rp-006": "AIED 시스템을 위한 공개 데이터셋과 평가 프로토콜",
    "rp-007": "학생 대상 AI 시스템의 공정성, 개인정보 보호와 투명성",
    "rp-008": "AIED 연구-실천 전환을 위한 리빙랩으로서의 홍콩",
  },
  ja: {
    "rp-001": "教室向け個別化学習のための適応型AIチューター",
    "rp-002": "責任ある教室自動化のための教師-AI共同設計パターン",
    "rp-003": "協同的問題解決のためのマルチモーダル学習分析",
    "rp-004": "K-12のライティングとSTEM学習における生成フィードバック評価",
    "rp-005": "教育向けAIにおける大規模言語モデルのレビュー",
    "rp-006": "AIEDシステムのためのオープンデータセットと評価プロトコル",
    "rp-007": "学習者向けAIシステムにおける公平性、プライバシー、透明性",
    "rp-008": "AIED研究から実践への転換に向けたリビングラボとしての香港",
  },
  hi: {
    "rp-001": "कक्षा-केंद्रित व्यक्तिगत सीखने के लिए अनुकूली AI ट्यूटर",
    "rp-002": "जिम्मेदार कक्षा स्वचालन के लिए शिक्षक-AI सह-डिजाइन पैटर्न",
    "rp-003": "सहयोगी समस्या समाधान के लिए मल्टीमॉडल लर्निंग एनालिटिक्स",
    "rp-004": "K-12 लेखन और STEM सीखने में जनरेटिव प्रतिक्रिया का आकलन",
    "rp-005": "शिक्षा के लिए AI में बड़े भाषा मॉडलों की समीक्षा",
    "rp-006": "AIED प्रणालियों के लिए खुले डेटासेट और मूल्यांकन प्रोटोकॉल",
    "rp-007": "विद्यार्थी-केंद्रित AI प्रणालियों में निष्पक्षता, गोपनीयता और पारदर्शिता",
    "rp-008": "AIED शोध-से-व्यवहार अनुवाद के लिए जीवंत प्रयोगशाला के रूप में हांगकांग",
  },
  ru: {
    "rp-001": "Адаптивные ИИ-тьюторы для персонализированного обучения в классе",
    "rp-002": "Паттерны совместного дизайна учителя и ИИ для ответственной автоматизации класса",
    "rp-003": "Мультимодальная аналитика обучения для совместного решения задач",
    "rp-004": "Оценка генеративной обратной связи в письме K-12 и STEM-обучении",
    "rp-005": "Обзор больших языковых моделей в ИИ для образования",
    "rp-006": "Открытые наборы данных и протоколы оценки для систем AIED",
    "rp-007": "Справедливость, приватность и прозрачность в ИИ-системах для учащихся",
    "rp-008": "Гонконг как живая лаборатория перевода исследований AIED в практику",
  },
  id: {
    "rp-001": "Tutor AI adaptif untuk pembelajaran personal berorientasi kelas",
    "rp-002": "Pola codesign guru-AI untuk otomatisasi kelas yang bertanggung jawab",
    "rp-003": "Analitik pembelajaran multimodal untuk pemecahan masalah kolaboratif",
    "rp-004": "Menilai umpan balik generatif dalam penulisan K-12 dan pembelajaran STEM",
    "rp-005": "Tinjauan model bahasa besar dalam AI untuk pendidikan",
    "rp-006": "Dataset terbuka dan protokol evaluasi untuk sistem AIED",
    "rp-007": "Keadilan, privasi, dan transparansi dalam sistem AI untuk siswa",
    "rp-008": "Hong Kong sebagai laboratorium hidup untuk menerjemahkan riset AIED ke praktik",
  },
  bn: {
    "rp-001": "শ্রেণিকক্ষ-কেন্দ্রিক ব্যক্তিকৃত শেখার জন্য অভিযোজিত AI টিউটর",
    "rp-002": "দায়িত্বশীল শ্রেণিকক্ষ স্বয়ংক্রিয়তার জন্য শিক্ষক-AI সহ-নকশা প্যাটার্ন",
    "rp-003": "সহযোগী সমস্যা সমাধানের জন্য মাল্টিমোডাল লার্নিং অ্যানালিটিক্স",
    "rp-004": "K-12 লেখা ও STEM শেখায় জেনারেটিভ প্রতিক্রিয়ার মূল্যায়ন",
    "rp-005": "শিক্ষার জন্য AI-তে বৃহৎ ভাষা মডেলের পর্যালোচনা",
    "rp-006": "AIED সিস্টেমের জন্য উন্মুক্ত ডেটাসেট ও মূল্যায়ন প্রোটোকল",
    "rp-007": "শিক্ষার্থী-কেন্দ্রিক AI সিস্টেমে ন্যায্যতা, গোপনীয়তা ও স্বচ্ছতা",
    "rp-008": "AIED গবেষণা থেকে অনুশীলনে রূপান্তরের জীবন্ত ল্যাব হিসেবে হংকং",
  },
};

const topicLabels: Record<Locale, Record<TopicKey, string>> = {
  en: {
    aiTutor: "AI tutor",
    personalizedLearning: "personalized learning",
    classroomOrchestration: "classroom orchestration",
    teacherTools: "teacher tools",
    coDesign: "co-design",
    responsibleAI: "responsible AI",
    multimodalLearning: "multimodal learning",
    learningAnalytics: "learning analytics",
    collaboration: "collaboration",
    generativeAI: "generative AI",
    feedback: "feedback",
    assessment: "assessment",
    llm: "LLM",
    review: "review",
    aiedTrends: "AIED trends",
    datasets: "datasets",
    evaluation: "evaluation",
    benchmarking: "benchmarking",
    ethics: "ethics",
    privacy: "privacy",
    policy: "policy",
    hongKong: "Hong Kong",
    rdHub: "R&D hub",
    researchTranslation: "research translation",
  },
  "zh-hant": makeTopicLabels(["AI 導師", "個性化學習", "課堂編排", "教師工具", "共設計", "負責任 AI", "多模態學習", "學習分析", "協作", "生成式 AI", "回饋", "評估", "大型語言模型", "綜述", "AIED 趨勢", "數據集", "評估", "基準測試", "倫理", "私隱", "政策", "香港", "研發樞紐", "研究轉化"]),
  "zh-hans": makeTopicLabels(["AI 导师", "个性化学习", "课堂编排", "教师工具", "共设计", "负责任 AI", "多模态学习", "学习分析", "协作", "生成式 AI", "反馈", "评估", "大型语言模型", "综述", "AIED 趋势", "数据集", "评估", "基准测试", "伦理", "隐私", "政策", "香港", "研发枢纽", "研究转化"]),
  es: makeTopicLabels(["tutor de IA", "aprendizaje personalizado", "orquestación del aula", "herramientas docentes", "codiseño", "IA responsable", "aprendizaje multimodal", "analítica de aprendizaje", "colaboración", "IA generativa", "retroalimentación", "evaluación", "LLM", "revisión", "tendencias AIED", "conjuntos de datos", "evaluación", "benchmarking", "ética", "privacidad", "política", "Hong Kong", "centro de I+D", "traducción de investigación"]),
  fr: makeTopicLabels(["tuteur IA", "apprentissage personnalisé", "orchestration de classe", "outils enseignants", "co-conception", "IA responsable", "apprentissage multimodal", "analyse de l'apprentissage", "collaboration", "IA générative", "feedback", "évaluation", "LLM", "revue", "tendances AIED", "jeux de données", "évaluation", "benchmarking", "éthique", "confidentialité", "politique", "Hong Kong", "pôle R&D", "traduction de recherche"]),
  pt: makeTopicLabels(["tutor de IA", "aprendizagem personalizada", "orquestração da sala", "ferramentas docentes", "codesign", "IA responsável", "aprendizagem multimodal", "analítica de aprendizagem", "colaboração", "IA generativa", "feedback", "avaliação", "LLM", "revisão", "tendências AIED", "datasets", "avaliação", "benchmarking", "ética", "privacidade", "política", "Hong Kong", "centro de P&D", "tradução de pesquisa"]),
  de: makeTopicLabels(["KI-Tutor", "personalisiertes Lernen", "Unterrichtsorchestrierung", "Lehrkräfte-Tools", "Co-Design", "verantwortungsvolle KI", "multimodales Lernen", "Lernanalytik", "Zusammenarbeit", "generative KI", "Feedback", "Bewertung", "LLM", "Review", "AIED-Trends", "Datensätze", "Evaluation", "Benchmarking", "Ethik", "Datenschutz", "Politik", "Hongkong", "F&E-Hub", "Forschungstransfer"]),
  ar: makeTopicLabels(["معلم ذكاء اصطناعي", "تعلم شخصي", "تنسيق الفصل", "أدوات المعلمين", "تصميم مشترك", "ذكاء اصطناعي مسؤول", "تعلم متعدد الوسائط", "تحليلات التعلم", "تعاون", "ذكاء اصطناعي توليدي", "تغذية راجعة", "تقييم", "نموذج لغوي كبير", "مراجعة", "اتجاهات AIED", "مجموعات بيانات", "تقييم", "قياس معياري", "أخلاقيات", "خصوصية", "سياسة", "هونغ كونغ", "مركز بحث وتطوير", "ترجمة البحث"]),
  ko: makeTopicLabels(["AI 튜터", "개인화 학습", "교실 오케스트레이션", "교사용 도구", "공동설계", "책임 있는 AI", "멀티모달 학습", "학습 분석", "협력", "생성형 AI", "피드백", "평가", "LLM", "리뷰", "AIED 동향", "데이터셋", "평가", "벤치마킹", "윤리", "개인정보 보호", "정책", "홍콩", "R&D 허브", "연구 전환"]),
  ja: makeTopicLabels(["AIチューター", "個別化学習", "教室オーケストレーション", "教師向けツール", "共同設計", "責任あるAI", "マルチモーダル学習", "学習分析", "協働", "生成AI", "フィードバック", "評価", "LLM", "レビュー", "AIED動向", "データセット", "評価", "ベンチマーク", "倫理", "プライバシー", "政策", "香港", "R&Dハブ", "研究転換"]),
  hi: makeTopicLabels(["AI ट्यूटर", "व्यक्तिगत सीखना", "कक्षा संयोजन", "शिक्षक उपकरण", "सह-डिजाइन", "जिम्मेदार AI", "मल्टीमॉडल सीखना", "लर्निंग एनालिटिक्स", "सहयोग", "जनरेटिव AI", "प्रतिक्रिया", "मूल्यांकन", "LLM", "समीक्षा", "AIED रुझान", "डेटासेट", "मूल्यांकन", "बेंचमार्किंग", "नैतिकता", "गोपनीयता", "नीति", "हांगकांग", "R&D केंद्र", "शोध अनुवाद"]),
  ru: makeTopicLabels(["ИИ-тьютор", "персонализированное обучение", "оркестрация класса", "инструменты для учителей", "совместный дизайн", "ответственный ИИ", "мультимодальное обучение", "аналитика обучения", "сотрудничество", "генеративный ИИ", "обратная связь", "оценивание", "LLM", "обзор", "тенденции AIED", "наборы данных", "оценка", "бенчмаркинг", "этика", "приватность", "политика", "Гонконг", "R&D-хаб", "перевод исследований"]),
  id: makeTopicLabels(["tutor AI", "pembelajaran personal", "orkestrasi kelas", "alat guru", "codesign", "AI bertanggung jawab", "pembelajaran multimodal", "analitik pembelajaran", "kolaborasi", "AI generatif", "umpan balik", "asesmen", "LLM", "tinjauan", "tren AIED", "dataset", "evaluasi", "benchmarking", "etika", "privasi", "kebijakan", "Hong Kong", "pusat R&D", "terjemahan riset"]),
  bn: makeTopicLabels(["AI টিউটর", "ব্যক্তিকৃত শেখা", "শ্রেণিকক্ষ অর্কেস্ট্রেশন", "শিক্ষক টুল", "সহ-নকশা", "দায়িত্বশীল AI", "মাল্টিমোডাল শেখা", "লার্নিং অ্যানালিটিক্স", "সহযোগিতা", "জেনারেটিভ AI", "প্রতিক্রিয়া", "মূল্যায়ন", "LLM", "রিভিউ", "AIED প্রবণতা", "ডেটাসেট", "মূল্যায়ন", "বেঞ্চমার্কিং", "নৈতিকতা", "গোপনীয়তা", "নীতি", "হংকং", "R&D হাব", "গবেষণা রূপান্তর"]),
};

function makeTopicLabels(values: string[]): Record<TopicKey, string> {
  const keys: TopicKey[] = [
    "aiTutor",
    "personalizedLearning",
    "classroomOrchestration",
    "teacherTools",
    "coDesign",
    "responsibleAI",
    "multimodalLearning",
    "learningAnalytics",
    "collaboration",
    "generativeAI",
    "feedback",
    "assessment",
    "llm",
    "review",
    "aiedTrends",
    "datasets",
    "evaluation",
    "benchmarking",
    "ethics",
    "privacy",
    "policy",
    "hongKong",
    "rdHub",
    "researchTranslation",
  ];
  return Object.fromEntries(keys.map((key, index) => [key, values[index] ?? key])) as Record<TopicKey, string>;
}

interface ResearchTextTemplate {
  imageAlt: string;
  shortSummary: string;
  fullSummary: string[];
  keyTakeaways: string[];
  whyItMatters: string;
}

const researchTextTemplates: Record<Locale, ResearchTextTemplate> = {
  en: {
    imageAlt: "Abstract illustration for {title}",
    shortSummary: "{title} examines {topics} for AI in Education practice, with attention to classroom use, evidence quality, teacher control, and responsible deployment.",
    fullSummary: [
      "{title} is presented as a {type} connected to {topics}. This localized summary highlights the paper's practical meaning for AI in Education and for AIEDHK's research-to-product lens.",
      "The work is useful because it turns a technical or policy question into implementation choices: what evidence should be trusted, which teacher workflows need support, where learner needs vary, and how risk should be governed before classroom use.",
      "For product teams and school partners, the paper encourages careful translation from research claims into pilotable features, evaluation routines, and teacher-facing explanations. It also keeps multilingual and culturally aware use in view.",
      "For AIEDHK, the paper belongs in the weekly research intelligence pipeline because it can inform summaries, tagging, future review checklists, and responsible product experiments across Hong Kong and wider education markets.",
    ],
    keyTakeaways: [
      "{title} connects {topics} with practical AIED implementation.",
      "The paper is most useful when translated into teacher workflows, evaluation criteria, and governance routines.",
      "AIEDHK can use this research to support multilingual product design and school-ready validation.",
    ],
    whyItMatters: "AIEDHK can use this paper to connect global evidence on {topics} with Hong Kong's multilingual classrooms, responsible AI expectations, and research-to-product strategy.",
  },
  "zh-hant": {
    imageAlt: "{title} 的抽象插圖",
    shortSummary: "{title} 探討 {topics} 在 AI 教育實踐中的應用，並關注課堂使用、證據品質、教師控制與負責任部署。",
    fullSummary: [
      "{title} 是一篇與 {topics} 相關的{type}。此本地化摘要突出了它對 AI 教育以及 AIEDHK 研究到產品視角的實務意義。",
      "這項研究的價值在於把技術或政策問題轉化為實作選擇：哪些證據值得信任、哪些教師流程需要支援、學習者需求如何差異化，以及課堂使用前風險如何治理。",
      "對產品團隊與學校夥伴而言，論文提醒我們要把研究主張轉化為可試點功能、評估流程與面向教師的解釋，同時保留多語言與文化脈絡。",
      "對 AIEDHK 而言，這篇論文適合納入每週研究情報流程，支援摘要、標籤、未來審查清單，以及香港與更廣教育市場的負責任產品實驗。",
    ],
    keyTakeaways: ["{title} 將 {topics} 與 AIED 實務落地連結起來。", "研究需要被轉化為教師流程、評估準則與治理機制才最有價值。", "AIEDHK 可用這項研究支援多語言產品設計與校本驗證。"],
    whyItMatters: "AIEDHK 可用這篇論文把 {topics} 的全球證據連結到香港多語言課堂、負責任 AI 要求與研究到產品策略。",
  },
  "zh-hans": {
    imageAlt: "{title} 的抽象插图",
    shortSummary: "{title} 探讨 {topics} 在 AI 教育实践中的应用，并关注课堂使用、证据质量、教师控制与负责任部署。",
    fullSummary: [
      "{title} 是一篇与 {topics} 相关的{type}。此本地化摘要突出它对 AI 教育以及 AIEDHK 研究到产品视角的实践意义。",
      "这项研究的价值在于把技术或政策问题转化为实施选择：哪些证据值得信任、哪些教师流程需要支持、学习者需求如何差异化，以及课堂使用前风险如何治理。",
      "对产品团队与学校伙伴而言，论文提醒我们要把研究主张转化为可试点功能、评估流程与面向教师的解释，同时保留多语言与文化语境。",
      "对 AIEDHK 而言，这篇论文适合纳入每周研究情报流程，支持摘要、标签、未来审查清单，以及香港与更广教育市场的负责任产品实验。",
    ],
    keyTakeaways: ["{title} 将 {topics} 与 AIED 实践落地连接起来。", "研究需要被转化为教师流程、评估准则与治理机制才最有价值。", "AIEDHK 可用这项研究支持多语言产品设计与校本验证。"],
    whyItMatters: "AIEDHK 可用这篇论文把 {topics} 的全球证据连接到香港多语言课堂、负责任 AI 要求与研究到产品策略。",
  },
  es: {
    imageAlt: "Ilustración abstracta para {title}",
    shortSummary: "{title} examina {topics} para la práctica de IA en educación, con atención al uso en aula, la calidad de la evidencia, el control docente y el despliegue responsable.",
    fullSummary: [
      "{title} se presenta como un {type} conectado con {topics}. Este resumen localizado destaca su significado práctico para la IA en educación y para la mirada de AIEDHK de investigación a producto.",
      "El trabajo es útil porque convierte una pregunta técnica o política en decisiones de implementación: qué evidencia confiar, qué flujos docentes apoyar, dónde varían las necesidades del alumnado y cómo gobernar riesgos antes del uso en aula.",
      "Para equipos de producto y socios escolares, el artículo anima a traducir afirmaciones de investigación en funciones pilotables, rutinas de evaluación y explicaciones para docentes, manteniendo también la dimensión multilingüe y cultural.",
      "Para AIEDHK, pertenece al flujo semanal de inteligencia de investigación porque puede informar resúmenes, etiquetas, futuras listas de revisión y experimentos responsables en Hong Kong y otros mercados educativos.",
    ],
    keyTakeaways: ["{title} conecta {topics} con implementación práctica de AIED.", "La investigación aporta más valor cuando se traduce en flujos docentes, criterios de evaluación y rutinas de gobernanza.", "AIEDHK puede usar esta investigación para apoyar diseño multilingüe y validación lista para escuelas."],
    whyItMatters: "AIEDHK puede usar este artículo para conectar evidencia global sobre {topics} con aulas multilingües de Hong Kong, expectativas de IA responsable y estrategia de investigación a producto.",
  },
  fr: {} as ResearchTextTemplate,
  pt: {} as ResearchTextTemplate,
  de: {} as ResearchTextTemplate,
  ar: {} as ResearchTextTemplate,
  ko: {} as ResearchTextTemplate,
  ja: {} as ResearchTextTemplate,
  hi: {} as ResearchTextTemplate,
  ru: {} as ResearchTextTemplate,
  id: {} as ResearchTextTemplate,
  bn: {} as ResearchTextTemplate,
};

function makeResearchTemplate(locale: Exclude<Locale, "en" | "zh-hant" | "zh-hans" | "es">): ResearchTextTemplate {
  const copy = researchTemplateCopy[locale];
  return {
    imageAlt: copy[0],
    shortSummary: copy[1],
    fullSummary: [copy[2], copy[3], copy[4], copy[5]],
    keyTakeaways: [copy[6], copy[7], copy[8]],
    whyItMatters: copy[9],
  };
}

const researchTemplateCopy: Record<Exclude<Locale, "en" | "zh-hant" | "zh-hans" | "es">, [string, string, string, string, string, string, string, string, string, string]> = {
  fr: ["Illustration abstraite pour {title}", "{title} examine {topics} pour la pratique de l'IA en éducation, avec attention à l'usage en classe, à la qualité des preuves, au contrôle enseignant et au déploiement responsable.", "{title} est présenté comme un {type} lié à {topics}. Ce résumé localisé met en avant son sens pratique pour l'IA en éducation et pour le regard recherche-produit d'AIEDHK.", "Le travail est utile parce qu'il transforme une question technique ou politique en choix de mise en œuvre : quelles preuves croire, quels flux enseignants soutenir, où les besoins varient et comment gouverner les risques avant la classe.", "Pour les équipes produit et les partenaires scolaires, l'article invite à traduire les résultats en fonctionnalités pilotables, routines d'évaluation et explications pour enseignants, tout en gardant la dimension multilingue et culturelle.", "Pour AIEDHK, il appartient au pipeline hebdomadaire de veille car il peut nourrir résumés, tags, futures grilles de revue et expérimentations responsables à Hong Kong et ailleurs.", "{title} relie {topics} à une mise en œuvre AIED concrète.", "La recherche est plus utile lorsqu'elle devient flux enseignants, critères d'évaluation et routines de gouvernance.", "AIEDHK peut l'utiliser pour soutenir la conception multilingue et la validation scolaire.", "AIEDHK peut relier les preuves mondiales sur {topics} aux classes multilingues de Hong Kong, aux attentes d'IA responsable et à la stratégie recherche-produit."],
  pt: ["Ilustração abstrata para {title}", "{title} examina {topics} para a prática de IA na educação, com atenção ao uso em sala, qualidade da evidência, controle docente e implantação responsável.", "{title} é apresentado como um {type} conectado a {topics}. Este resumo localizado destaca seu significado prático para IA na educação e para a lente de pesquisa-para-produto da AIEDHK.", "O trabalho é útil porque transforma uma questão técnica ou política em escolhas de implementação: que evidência confiar, quais fluxos docentes apoiar, onde necessidades variam e como governar riscos antes do uso em sala.", "Para equipes de produto e escolas parceiras, o artigo incentiva traduzir achados em funcionalidades pilotáveis, rotinas de avaliação e explicações para professores, mantendo a dimensão multilíngue e cultural.", "Para AIEDHK, ele pertence ao pipeline semanal de inteligência de pesquisa porque pode informar resumos, tags, checklists e experimentos responsáveis em Hong Kong e outros mercados.", "{title} conecta {topics} à implementação prática de AIED.", "A pesquisa é mais útil quando vira fluxos docentes, critérios de avaliação e rotinas de governança.", "AIEDHK pode usar esta pesquisa para apoiar design multilíngue e validação escolar.", "AIEDHK pode conectar evidências globais sobre {topics} às salas multilíngues de Hong Kong, às expectativas de IA responsável e à estratégia de pesquisa-para-produto."],
  de: ["Abstrakte Illustration zu {title}", "{title} untersucht {topics} für die Praxis von KI in der Bildung, mit Blick auf Unterrichtsnutzung, Evidenzqualität, Kontrolle durch Lehrkräfte und verantwortliche Einführung.", "{title} wird als {type} zu {topics} vorgestellt. Diese lokalisierte Zusammenfassung zeigt die praktische Bedeutung für KI in der Bildung und den Research-to-Product-Blick von AIEDHK.", "Die Arbeit ist nützlich, weil sie technische oder politische Fragen in Umsetzungsentscheidungen übersetzt: welcher Evidenz vertraut wird, welche Lehrkräfte-Workflows Unterstützung brauchen, wo Lernbedarfe variieren und wie Risiken vor dem Unterrichtseinsatz gesteuert werden.", "Für Produktteams und Schulpartner ermutigt der Beitrag, Forschungsaussagen in pilotierbare Funktionen, Evaluationsroutinen und Erklärungen für Lehrkräfte zu übersetzen, inklusive mehrsprachiger und kultureller Perspektiven.", "Für AIEDHK gehört der Beitrag in die wöchentliche Forschungsintelligenz, weil er Zusammenfassungen, Tags, künftige Review-Checklisten und verantwortliche Experimente informieren kann.", "{title} verbindet {topics} mit praktischer AIED-Umsetzung.", "Forschung ist am wertvollsten, wenn sie in Lehrkräfte-Workflows, Bewertungskriterien und Governance-Routinen übersetzt wird.", "AIEDHK kann diese Forschung für mehrsprachiges Produktdesign und schulreife Validierung nutzen.", "AIEDHK kann globale Evidenz zu {topics} mit Hongkongs mehrsprachigen Klassenzimmern, verantwortlichen KI-Erwartungen und Research-to-Product-Strategie verbinden."],
  ar: ["رسم تجريدي لـ {title}", "يفحص {title} موضوع {topics} في ممارسة الذكاء الاصطناعي في التعليم، مع اهتمام بالاستخدام الصفي وجودة الأدلة وتحكم المعلم والنشر المسؤول.", "يُعرض {title} بوصفه {type} مرتبطا بـ {topics}. يبرز هذا الملخص المحلي معناه العملي للذكاء الاصطناعي في التعليم وعدسة AIEDHK من البحث إلى المنتج.", "تكمن فائدة العمل في تحويل سؤال تقني أو سياسي إلى اختيارات تنفيذية: أي دليل نثق به، أي مسارات عمل للمعلمين تحتاج دعما، أين تختلف احتياجات المتعلمين، وكيف تُحكم المخاطر قبل الاستخدام الصفي.", "بالنسبة لفرق المنتجات وشركاء المدارس، يشجع المقال على ترجمة ادعاءات البحث إلى خصائص قابلة للتجريب وروتينات تقييم وشروح للمعلمين، مع الحفاظ على البعد متعدد اللغات والثقافي.", "بالنسبة إلى AIEDHK، ينتمي هذا العمل إلى خط ذكاء البحث الأسبوعي لأنه يدعم الملخصات والوسوم وقوائم المراجعة المستقبلية وتجارب المنتجات المسؤولة.", "يربط {title} بين {topics} والتنفيذ العملي لـ AIED.", "تصبح البحوث أكثر فائدة عندما تتحول إلى مسارات عمل للمعلمين ومعايير تقييم وروتينات حوكمة.", "يمكن لـ AIEDHK استخدام هذا البحث لدعم تصميم متعدد اللغات وتحقق جاهز للمدارس.", "يمكن لـ AIEDHK وصل الأدلة العالمية حول {topics} بفصول هونغ كونغ متعددة اللغات وتوقعات الذكاء الاصطناعي المسؤول واستراتيجية البحث إلى المنتج."],
  ko: ["{title}에 대한 추상 일러스트", "{title}은 AI 교육 실천에서 {topics}을 살피며, 교실 사용, 증거 품질, 교사 통제, 책임 있는 도입에 주목합니다.", "{title}은 {topics}와 연결된 {type}입니다. 이 현지화 요약은 AI 교육과 AIEDHK의 연구-제품 관점에서 실천적 의미를 강조합니다.", "이 연구는 기술 또는 정책 질문을 구현 선택으로 바꾸기 때문에 유용합니다. 어떤 증거를 신뢰할지, 어떤 교사 워크플로를 지원할지, 학습자 요구가 어디서 달라지는지, 교실 사용 전 위험을 어떻게 관리할지 다룹니다.", "제품팀과 학교 파트너에게 이 논문은 연구 주장을 파일럿 가능한 기능, 평가 루틴, 교사용 설명으로 번역하도록 권합니다. 다국어와 문화적 맥락도 함께 고려합니다.", "AIEDHK에는 주간 연구 인텔리전스 파이프라인에 들어갈 만한 자료입니다. 요약, 태그, 향후 검토 체크리스트, 책임 있는 제품 실험을 뒷받침할 수 있습니다.", "{title}은 {topics}을 실제 AIED 구현과 연결합니다.", "연구는 교사 워크플로, 평가 기준, 거버넌스 루틴으로 번역될 때 가장 유용합니다.", "AIEDHK는 이 연구를 다국어 제품 설계와 학교 검증에 활용할 수 있습니다.", "AIEDHK는 {topics}에 관한 글로벌 증거를 홍콩의 다국어 교실, 책임 있는 AI 기대, 연구-제품 전략과 연결할 수 있습니다."],
  ja: ["{title}の抽象イラスト", "{title}はAI教育実践における{topics}を検討し、教室での利用、エビデンス品質、教師のコントロール、責任ある導入に注目します。", "{title}は{topics}に関係する{type}です。このローカライズ要約は、AI教育とAIEDHKの研究から製品への視点における実践的意味を示します。", "この研究は、技術的または政策的問いを実装上の選択に変える点で有用です。信頼すべき証拠、支援すべき教師ワークフロー、学習者ニーズの違い、教室利用前のリスク管理を扱います。", "製品チームと学校パートナーにとって、論文は研究主張を試行可能な機能、評価ルーチン、教師向け説明へ翻訳することを促します。多言語と文化的文脈も維持します。", "AIEDHKにとって、この論文は週次研究インテリジェンスに適しています。要約、タグ、将来のレビューリスト、責任ある製品実験に役立ちます。", "{title}は{topics}を実践的なAIED実装につなげます。", "研究は教師ワークフロー、評価基準、ガバナンス手順へ翻訳された時に最も有用です。", "AIEDHKはこの研究を多言語製品設計と学校での検証に活用できます。", "AIEDHKは{topics}に関する世界の証拠を、香港の多言語教室、責任あるAIへの期待、研究から製品への戦略に結びつけられます。"],
  hi: ["{title} के लिए अमूर्त चित्रण", "{title} शिक्षा में AI अभ्यास के लिए {topics} की जांच करता है, जिसमें कक्षा उपयोग, प्रमाण की गुणवत्ता, शिक्षक नियंत्रण और जिम्मेदार तैनाती पर ध्यान है।", "{title} को {topics} से जुड़ा {type} के रूप में प्रस्तुत किया गया है। यह स्थानीयकृत सार AI शिक्षा और AIEDHK के शोध-से-उत्पाद दृष्टिकोण के लिए इसके व्यावहारिक अर्थ को उजागर करता है।", "यह कार्य उपयोगी है क्योंकि यह तकनीकी या नीति प्रश्न को कार्यान्वयन विकल्पों में बदलता है: किस प्रमाण पर भरोसा हो, किन शिक्षक वर्कफ्लो को समर्थन मिले, शिक्षार्थी जरूरतें कहाँ बदलती हैं, और कक्षा उपयोग से पहले जोखिम कैसे संचालित हों।", "उत्पाद टीमों और स्कूल साझेदारों के लिए, पेपर शोध दावों को परीक्षण योग्य सुविधाओं, मूल्यांकन routines और शिक्षक-केंद्रित व्याख्याओं में बदलने को प्रेरित करता है, साथ ही बहुभाषी और सांस्कृतिक संदर्भ बनाए रखता है।", "AIEDHK के लिए, यह पेपर साप्ताहिक शोध बुद्धिमत्ता पाइपलाइन में शामिल होने योग्य है क्योंकि यह सार, टैग, भविष्य की समीक्षा सूची और जिम्मेदार उत्पाद प्रयोगों को सूचित कर सकता है।", "{title} {topics} को व्यावहारिक AIED कार्यान्वयन से जोड़ता है।", "शोध सबसे उपयोगी तब होता है जब वह शिक्षक वर्कफ्लो, मूल्यांकन मानदंड और शासन routines में बदले।", "AIEDHK इस शोध का उपयोग बहुभाषी उत्पाद डिजाइन और स्कूल-तैयार सत्यापन के लिए कर सकता है।", "AIEDHK {topics} पर वैश्विक प्रमाण को हांगकांग की बहुभाषी कक्षाओं, जिम्मेदार AI अपेक्षाओं और शोध-से-उत्पाद रणनीति से जोड़ सकता है।"],
  ru: ["Абстрактная иллюстрация для {title}", "{title} рассматривает {topics} для практики ИИ в образовании, уделяя внимание использованию в классе, качеству доказательств, контролю учителя и ответственному внедрению.", "{title} представлен как {type}, связанный с {topics}. Эта локализованная сводка подчеркивает практическое значение для ИИ в образовании и для подхода AIEDHK от исследования к продукту.", "Работа полезна тем, что переводит технический или политический вопрос в решения внедрения: каким данным доверять, какие рабочие процессы учителей поддерживать, где различаются потребности учащихся и как управлять рисками до применения в классе.", "Для продуктовых команд и школьных партнеров статья предлагает переводить исследовательские утверждения в пилотируемые функции, процедуры оценки и объяснения для учителей, сохраняя многоязычный и культурный контекст.", "Для AIEDHK статья подходит для еженедельного пайплайна исследовательской аналитики, потому что может поддержать резюме, теги, будущие чек-листы и ответственные продуктовые эксперименты.", "{title} связывает {topics} с практическим внедрением AIED.", "Исследование наиболее полезно, когда переводится в рабочие процессы учителей, критерии оценки и процедуры управления.", "AIEDHK может использовать это исследование для многоязычного дизайна продуктов и школьной валидации.", "AIEDHK может связать мировые доказательства по {topics} с многоязычными классами Гонконга, ожиданиями ответственного ИИ и стратегией от исследования к продукту."],
  id: ["Ilustrasi abstrak untuk {title}", "{title} mengkaji {topics} untuk praktik AI dalam pendidikan, dengan perhatian pada penggunaan kelas, kualitas bukti, kontrol guru, dan penerapan bertanggung jawab.", "{title} disajikan sebagai {type} yang terhubung dengan {topics}. Ringkasan lokal ini menyoroti makna praktisnya bagi AI dalam pendidikan dan lensa riset-ke-produk AIEDHK.", "Karya ini berguna karena mengubah pertanyaan teknis atau kebijakan menjadi pilihan implementasi: bukti apa yang dipercaya, alur kerja guru mana yang didukung, di mana kebutuhan pelajar berbeda, dan bagaimana risiko dikelola sebelum digunakan di kelas.", "Bagi tim produk dan mitra sekolah, makalah ini mendorong penerjemahan klaim riset menjadi fitur yang dapat diuji, rutinitas evaluasi, dan penjelasan untuk guru, sambil menjaga konteks multibahasa dan budaya.", "Bagi AIEDHK, makalah ini layak masuk pipeline intelijen riset mingguan karena dapat memberi masukan pada ringkasan, tag, checklist tinjauan, dan eksperimen produk bertanggung jawab.", "{title} menghubungkan {topics} dengan implementasi AIED praktis.", "Riset paling berguna ketika diterjemahkan menjadi alur kerja guru, kriteria evaluasi, dan rutinitas tata kelola.", "AIEDHK dapat memakai riset ini untuk mendukung desain produk multibahasa dan validasi siap sekolah.", "AIEDHK dapat menghubungkan bukti global tentang {topics} dengan kelas multibahasa Hong Kong, ekspektasi AI bertanggung jawab, dan strategi riset-ke-produk."],
  bn: ["{title} এর জন্য বিমূর্ত চিত্র", "{title} শিক্ষায় AI অনুশীলনের জন্য {topics} পরীক্ষা করে, যেখানে শ্রেণিকক্ষ ব্যবহার, প্রমাণের গুণমান, শিক্ষক নিয়ন্ত্রণ ও দায়িত্বশীল বাস্তবায়নে নজর থাকে।", "{title} {topics} সম্পর্কিত {type} হিসেবে উপস্থাপিত। এই স্থানীয়কৃত সারাংশ AI শিক্ষা এবং AIEDHK-এর গবেষণা-থেকে-পণ্য দৃষ্টিকোণের জন্য এর ব্যবহারিক অর্থ তুলে ধরে।", "কাজটি উপকারী কারণ এটি প্রযুক্তিগত বা নীতিগত প্রশ্নকে বাস্তবায়নের সিদ্ধান্তে রূপ দেয়: কোন প্রমাণ বিশ্বাসযোগ্য, কোন শিক্ষক ওয়ার্কফ্লো সহায়তা দরকার, কোথায় শিক্ষার্থীর চাহিদা বদলে যায়, এবং শ্রেণিকক্ষে ব্যবহারের আগে ঝুঁকি কীভাবে পরিচালিত হবে।", "পণ্য দল ও স্কুল অংশীদারদের জন্য, পেপারটি গবেষণা দাবিকে পরীক্ষাযোগ্য ফিচার, মূল্যায়ন রুটিন এবং শিক্ষক-কেন্দ্রিক ব্যাখ্যায় অনুবাদ করতে উৎসাহ দেয়, পাশাপাশি বহুভাষিক ও সাংস্কৃতিক প্রেক্ষাপট ধরে রাখে।", "AIEDHK-এর জন্য, পেপারটি সাপ্তাহিক গবেষণা বুদ্ধিমত্তা পাইপলাইনে মানানসই, কারণ এটি সারাংশ, ট্যাগ, ভবিষ্যৎ রিভিউ চেকলিস্ট ও দায়িত্বশীল পণ্য পরীক্ষাকে জানাতে পারে।", "{title} {topics} কে ব্যবহারিক AIED বাস্তবায়নের সঙ্গে যুক্ত করে।", "গবেষণা সবচেয়ে কার্যকর হয় যখন তা শিক্ষক ওয়ার্কফ্লো, মূল্যায়ন মানদণ্ড ও গভর্ন্যান্স রুটিনে রূপ নেয়।", "AIEDHK এই গবেষণা বহুভাষিক পণ্য নকশা ও স্কুল-প্রস্তুত যাচাইয়ে ব্যবহার করতে পারে।", "AIEDHK {topics} বিষয়ে বৈশ্বিক প্রমাণকে হংকংয়ের বহুভাষিক শ্রেণিকক্ষ, দায়িত্বশীল AI প্রত্যাশা ও গবেষণা-থেকে-পণ্য কৌশলের সঙ্গে যুক্ত করতে পারে।"],
};

for (const locale of ["fr", "pt", "de", "ar", "ko", "ja", "hi", "ru", "id", "bn"] as const) {
  researchTextTemplates[locale] = makeResearchTemplate(locale);
}

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => values[key] ?? "");
}

function localizedPaper(paper: ResearchPaper, localeInput: string): ResearchPaper {
  const locale = normalizeLocale(localeInput);
  if (locale === "en") return paper;

  const localizedTitle = paperTitles[locale][paper.id];
  if (!localizedTitle) return paper;

  const dictionary = getDictionary(locale);
  const topicKeys = paperTopicKeys[paper.id] ?? [];
  const tags = topicKeys.map((key) => topicLabels[locale][key] ?? topicLabels.en[key]);
  const title = localizedTitle;
  const template = researchTextTemplates[locale];
  const values = {
    title,
    type: dictionary.paperTypes[paper.type],
    topics: tags.join(", "),
    venue: paper.venue,
    site: "AIEDHK",
  };

  return {
    ...paper,
    title,
    tags,
    imageAlt: fillTemplate(template.imageAlt, values),
    shortSummary: fillTemplate(template.shortSummary, values),
    fullSummary: template.fullSummary.map((paragraph) => fillTemplate(paragraph, values)).join("\n\n"),
    keyTakeaways: template.keyTakeaways.map((takeaway) => fillTemplate(takeaway, values)),
    whyItMatters: fillTemplate(template.whyItMatters, values),
  };
}

export const YEARS = Array.from(new Set(researchPapers.map((paper) => paper.year))).sort((a, b) => b - a);

export function isPaperType(value: string): value is PaperType {
  return PAPER_TYPES.some((type) => type.value === value);
}

export function getResearchPapers(locale: string = "en") {
  return researchPapers.map((paper) => localizedPaper(paper, locale));
}

export function getResearchPaperBySlug(slug: string, locale: string = "en") {
  const paper = researchPapers.find((item) => item.slug === slug);
  return paper ? localizedPaper(paper, locale) : undefined;
}

export function getRelatedPapers(paper: ResearchPaper, locale: string = "en", limit = 3) {
  const source = researchPapers.find((candidate) => candidate.id === paper.id) ?? paper;
  const tagSet = new Set(source.tags.map((tag) => tag.toLowerCase()));
  return researchPapers
    .filter((candidate) => candidate.id !== source.id)
    .map((candidate) => {
      const score = candidate.tags.reduce((total, tag) => total + (tagSet.has(tag.toLowerCase()) ? 1 : 0), 0);
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score || b.candidate.year - a.candidate.year)
    .slice(0, limit)
    .map(({ candidate }) => localizedPaper(candidate, locale));
}

function createdAtTime(paper: ResearchPaper) {
  const time = new Date(paper.createdAt).getTime();
  return Number.isFinite(time) ? time : 0;
}

export function withReviewedStaticEnhancements(paper: ResearchPaper): ResearchPaper {
  const reviewedPaper = reviewedResearchPapers.find((item) => item.slug === paper.slug || item.id === paper.id);
  if (!reviewedPaper) return paper;

  return {
    ...paper,
    image: reviewedPaper.image,
    imageAlt: paper.imageAlt || reviewedPaper.imageAlt,
    summaryImage: paper.summaryImage ?? reviewedPaper.summaryImage,
    summaryImageAlt: paper.summaryImageAlt ?? reviewedPaper.summaryImageAlt,
    summaryAudio: paper.summaryAudio ?? reviewedPaper.summaryAudio,
    summaryAudioTitle: paper.summaryAudioTitle ?? reviewedPaper.summaryAudioTitle,
  };
}

function mergeResearchPapers(primary: ResearchPaper[], secondary: ResearchPaper[]) {
  const seen = new Set<string>();
  const merged: ResearchPaper[] = [];

  for (const paper of [...primary, ...secondary]) {
    const key = paper.slug || paper.id;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(withReviewedStaticEnhancements(paper));
  }

  return merged.sort((a, b) => createdAtTime(b) - createdAtTime(a) || b.year - a.year || a.title.localeCompare(b.title));
}

export function filterResearchPapers(options: ResearchFilterOptions = {}, locale: string = "en"): ResearchFilterResult {
  return filterResearchPaperList(getResearchPapers(locale), options);
}

const getCachedDatabasePapers = unstable_cache(
  async (locale: string) => getPublishedResearchPapersFromDatabase(locale),
  ["published-research-papers"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabasePaperBySlug = unstable_cache(
  async (slug: string, locale: string) => getPublishedResearchPaperBySlugFromDatabase(slug, locale),
  ["published-research-paper-by-slug"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabaseRelatedPapers = unstable_cache(
  async (paper: ResearchPaper, locale: string, limit: number) => getRelatedPublishedPapersFromDatabase(paper, locale, limit),
  ["related-published-research-papers"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabaseYears = unstable_cache(
  async () => getPublishedResearchYearsFromDatabase(),
  ["published-research-years"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

export async function getPublishedResearchPapers(locale: string = "en") {
  const databasePapers = await getCachedDatabasePapers(locale);
  const reviewedPapers = getResearchPapers(locale);
  return databasePapers === null ? reviewedPapers : mergeResearchPapers(databasePapers, reviewedPapers);
}

export async function getPublishedResearchPaperBySlug(slug: string, locale: string = "en") {
  const databasePaper = await getCachedDatabasePaperBySlug(slug, locale);
  if (databasePaper) return withReviewedStaticEnhancements(databasePaper);
  return getResearchPaperBySlug(slug, locale);
}

export async function getRelatedPublishedPapers(paper: ResearchPaper, locale: string = "en", limit = 3) {
  const databasePapers = await getCachedDatabaseRelatedPapers(paper, locale, limit);
  const reviewedPapers = getRelatedPapers(paper, locale, limit);
  if (databasePapers === null) return reviewedPapers;
  return mergeResearchPapers(databasePapers, reviewedPapers).slice(0, limit);
}

export async function filterPublishedResearchPapers(options: ResearchFilterOptions = {}, locale: string = "en") {
  return filterResearchPaperList(await getPublishedResearchPapers(locale), options);
}

export async function getResearchYears() {
  const years = await getCachedDatabaseYears();
  if (!years || years.length === 0) return YEARS;
  return Array.from(new Set([...years, ...YEARS])).sort((a, b) => b - a);
}
