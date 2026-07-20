export const locales = [
  "en",
  "zh-hant",
  "zh-hans",
  "es",
  "fr",
  "pt",
  "de",
  "ar",
  "ko",
  "ja",
  "hi",
  "ru",
  "id",
  "bn",
] as const;

export type Locale = (typeof locales)[number];
export type TextDirection = "ltr" | "rtl";

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  {
    label: string;
    htmlLang: string;
    dateLocale: string;
    dir: TextDirection;
  }
> = {
  en: { label: "English", htmlLang: "en-HK", dateLocale: "en-HK", dir: "ltr" },
  "zh-hant": { label: "繁體中文", htmlLang: "zh-Hant-HK", dateLocale: "zh-HK", dir: "ltr" },
  "zh-hans": { label: "简体中文", htmlLang: "zh-Hans-CN", dateLocale: "zh-CN", dir: "ltr" },
  es: { label: "Español", htmlLang: "es", dateLocale: "es-ES", dir: "ltr" },
  fr: { label: "Français", htmlLang: "fr", dateLocale: "fr-FR", dir: "ltr" },
  pt: { label: "Português", htmlLang: "pt", dateLocale: "pt-PT", dir: "ltr" },
  de: { label: "Deutsch", htmlLang: "de", dateLocale: "de-DE", dir: "ltr" },
  ar: { label: "العربية", htmlLang: "ar", dateLocale: "ar", dir: "rtl" },
  ko: { label: "한국어", htmlLang: "ko", dateLocale: "ko-KR", dir: "ltr" },
  ja: { label: "日本語", htmlLang: "ja", dateLocale: "ja-JP", dir: "ltr" },
  hi: { label: "हिन्दी", htmlLang: "hi", dateLocale: "hi-IN", dir: "ltr" },
  ru: { label: "Русский", htmlLang: "ru", dateLocale: "ru-RU", dir: "ltr" },
  id: { label: "Bahasa Indonesia", htmlLang: "id", dateLocale: "id-ID", dir: "ltr" },
  bn: { label: "বাংলা", htmlLang: "bn", dateLocale: "bn-BD", dir: "ltr" },
};

export const localeLabels = Object.fromEntries(
  locales.map((locale) => [locale, localeMeta[locale].label])
) as Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function normalizeLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function getLocaleMeta(locale: string) {
  return localeMeta[normalizeLocale(locale)];
}

const enDictionary = {
  meta: {
    siteTitle: "AIEDHK",
    siteDescription: "AI in Education Hub of Knowledge | Hong Kong as an AIED Hub",
  },
  nav: {
    home: "Home",
    mission: "Mission",
    researchNews: "News",
    about: "About",
    menu: "Menu",
    close: "Close",
  },
  common: {
    language: "Language",
    learnMore: "Learn more",
    readSummary: "Read 500-word summary",
    backToResearch: "Back to Research News",
    latestResearch: "Latest Research News",
    viewAll: "View all",
    externalLink: "Open website",
    search: "Search",
    reset: "Reset",
    loadMore: "Load more",
    noResults: "No papers matched the current filters.",
    allTypes: "All types",
    allYears: "All years",
    keyTakeaways: "Key takeaways",
    whyItMatters: "Why it matters for AIEDHK",
    relatedPapers: "Related papers",
    page: "Page",
    source: "Source",
    summaryHeading: "500-word summary",
  },
  paperTypes: {
    journal: "Journal Paper",
    conference: "Conference Paper",
    review: "Review",
    "tool-dataset": "Tool / Dataset",
    "policy-ethics": "Industry",
  },
  home: {
    eyebrow: "AI in Education Hub of Knowledge",
    heroTitle: "Hong Kong as an AIED Hub for research, product innovation, and learning impact.",
    heroText:
      "AIEDHK is a multilingual information platform for AI in Education R&D. It connects global research intelligence with local classroom practice, product experiments, and responsible innovation.",
    primaryCta: "Explore Research News",
    secondaryCta: "Read the Mission",
    missionStatement: "Accelerate the world's transition to personalized learning and teaching.",
    showcaseTitle: "AI in Education Hub of Knowledge",
    showcaseText: "Accelerate the world's transition to personalized learning and teaching",
    cards: [
      {
        title: "Mission",
        text: "A clear strategy for building Hong Kong into a trusted AIED knowledge and product hub.",
      },
      {
        title: "Research News",
        text: "Readable 500-word summaries of important AIED journal and conference papers, and AIED news.",
      },
      {
        title: "About",
        text: "R&D context from Dr. Peter Hu Dongpin, PedaNova, MAIS, and CAIS.",
      },
    ],
    hubAdvantage: "Hub advantage",
    whyTitle: "Why Hong Kong as an AIED Hub?",
    whyText:
      "Hong Kong can bridge international research, high-performance education systems, agile product development, and rigorous school-based validation. AIEDHK is designed as a living knowledge layer for that bridge.",
    translationLabel: "Translation",
    impactTitle: "From research to real-world learning impact",
    impactText:
      "The platform is structured to turn papers into summaries, summaries into design insights, and insights into tools that support teachers and learners.",
    pillars: ["Research intelligence", "Product innovation", "Teacher empowerment", "Responsible AI"],
  },
  mission: {
    eyebrow: "Mission & Strategy",
    title: "Accelerate the world's transition to personalized learning and teaching.",
    intro:
      "AIEDHK exists to make AI in Education research easier to discover, evaluate, translate, and apply. The long-term ambition is to help Hong Kong become a high-trust AIED hub for the world.",
    visionTitle: "Vision",
    visionText:
      "A future where every learner receives timely, humane, and personalized support, and every teacher can use AI responsibly to amplify professional judgment.",
    whyAiedTitle: "Why AIED matters",
    whyAiedText:
      "AIED brings together learning science, artificial intelligence, assessment, human-computer interaction, and educational practice. Its value is not simply automation; it is better feedback, better evidence, and better learning experiences.",
    whyHongKongTitle: "Why Hong Kong",
    whyHongKongText:
      "Hong Kong is positioned a super-connector to global research networks. It can become a testbed for multilingual, culturally aware, and classroom-ready AIED innovation.",
    roadmapEyebrow: "Roadmap",
    strategyTitle: "Strategy",
    strategyIntro: "Six practical directions guide the platform and its future R&D pipeline.",
    strategies: [
      {
        title: "Research intelligence",
        text: "Track AIED journals and conferences, summarize methods, datasets, trends, and application scenarios.",
      },
      {
        title: "Product innovation",
        text: "Translate research findings into educational products, prototypes, and teaching tools that can be tested in real settings.",
      },
      {
        title: "Teacher empowerment",
        text: "Help teachers understand, evaluate, and use AI education tools with confidence and professional agency.",
      },
      {
        title: "Student-centered learning",
        text: "Advance personalized learning, formative feedback, assessment support, and learner wellbeing.",
      },
      {
        title: "Global-local bridge",
        text: "Connect global AIED research with Hong Kong, Greater China, and wider Asian education practices.",
      },
      {
        title: "Ethical and responsible AI",
        text: "Promote fairness, privacy, safety, transparency, and educational value as default design principles.",
      },
    ],
  },
  research: {
    eyebrow: "AIED News",
    title: "AIED summaries for research-to-product translation.",
    intro:
      "A curated feed of AIED academic papers and news. Each card offers a concise overview, while each detail page includes a 500-word written summary, an audio summary, and practical takeaways.",
    searchPlaceholder: "Search title, author, topic, or keyword",
    resultCount: "papers",
    ingestionNote:
      "Prepared for weekly Codex-assisted ingestion: crawl papers, generate summaries, tag topics, review, and publish.",
    newsletter: {
      eyebrow: "Free daily summary",
      title: "Get the latest AIED summaries in your inbox",
      description: "Daily curated news updates.",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      submit: "Subscribe",
      submitting: "Subscribing...",
      success: "You are subscribed. Daily AIED news updates will land in your inbox.",
      alreadySubscribed: "You are already on the daily AIED news list.",
      invalidEmail: "Please enter a valid email address.",
      notConfigured: "Subscription storage is not configured yet. Please try again after launch setup.",
      error: "Something went wrong. Please try again in a moment.",
      privacyNote: "",
    },
  },
  about: {
    eyebrow: "About",
    title: "The Initiator of AIEDHK, The Company, & The Products",
    intro:
      "This page is intentionally written with editable placeholder copy. Replace it with verified biography, company, and product details as the platform evolves.",
    principalLabel: "Principal",
    personTitle: "About Dr. Peter Hu Dongpin",
    personText:
      "Dr. Peter Hu Dongpin is the initiator of AIEDHK. This section can introduce his AI in Education R&D interests, research-to-product approach, and work connecting educational needs with responsible AI systems.",
    focusTitle: "AIED R&D focus",
    focusItems: [
      "Personalized learning and teaching",
      "AI-assisted assessment and feedback",
      "Teacher-facing AI tools",
      "Responsible deployment of AI in schools",
    ],
    companyTitle: "Company",
    companyText:
      "PedaNova Ed-Tech is an R&D company rooted in AIED-native innovation. Its vision is to advance future-facing educational innovation that improves learning, teaching, and evidence-based growth.",
    portfolioLabel: "Portfolio",
    productsTitle: "Products",
    products: [
      {
        name: "MAIS",
        text: "Mathematic Adaptive Interactive System",
      },
      {
        name: "CAIS",
        text: "Chinese Adaptive Interactive System",
      },
      {
        name: "UAIS",
        text: "University Adaptive Interactive System",
      },
    ],
    linksTitle: "R&D links",
    placeholderNote:
      "Placeholder content only: please replace with verified biography, product descriptions, evidence, and milestones before public launch.",
  },
  logoConcepts: {
    metaTitle: "Logo Concepts",
    eyebrow: "Logo concepts",
    title: "Three new directions for AIEDHK",
    intro:
      "Each SVG lockup is built around AI in Education Hub of Knowledge, with a clearer bridge between learning, knowledge, AI, and Hong Kong.",
    download: "Download SVG",
    recommendationTitle: "Recommendation",
    recommendationText:
      "Choose Learning Circuit if you want a direct evolution of the current mark. Choose Harbour Hub if the Hong Kong hub message is most important. Choose Knowledge Compass if the brand should feel more scholarly and advisory.",
    previewPath: "Preview path",
    concepts: [
      {
        name: "Learning Circuit",
        summary:
          "Open book pages carry connected AI nodes, making the education and knowledge layer immediate while keeping the current cyan-blue brand.",
        signal: "Best fit for the current site header because it feels closest to the existing identity.",
      },
      {
        name: "Harbour Hub",
        summary:
          "A hub network wraps an HK monogram, pointing to Hong Kong as the connector between research, products, schools, and responsible AI.",
        signal: "Best fit for public-facing positioning around Hong Kong as an AIED hub.",
      },
      {
        name: "Knowledge Compass",
        summary:
          "A compass over an open book frames AIEDHK as a guide for discovering, evaluating, and applying AI education knowledge.",
        signal: "Best fit for reports, research pages, and academic partnership materials.",
      },
    ],
  },
  footer: {
    description:
      "AIEDHK is a multilingual knowledge hub for AI in Education research, development, and responsible learning innovation.",
    navigation: "Navigation",
    ecosystem: "Ecosystem links",
    copyright: "© 2026 AIEDHK. All rights reserved.",
  },
};

type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepWiden<U>[]
    : T extends object
      ? { [K in keyof T]: DeepWiden<T[K]> }
      : T;

type BaseDictionary = DeepWiden<typeof enDictionary>;

export interface AcademyDictionary {
  eyebrow: string;
  title: string;
  intro: string;
  searchPlaceholder: string;
  resultCount: string;
  allTracks: string;
  allLevels: string;
  tracks: Record<"ai-knowledge" | "educational-theory", string>;
  levels: Record<"basics" | "core", string>;
  backToAcademy: string;
  summaryHeading: string;
  coreIdeas: string;
  educationConnection: string;
  relatedConcepts: string;
  relatedLessons: string;
  sources: string;
  readingTimeLabel: string;
  minuteAbbreviation: string;
  searchFieldLabel: string;
  trackFieldLabel: string;
  levelFieldLabel: string;
  noResults: string;
  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

export type Dictionary = Omit<BaseDictionary, "nav"> & {
  nav: BaseDictionary["nav"] & { academy: string };
  academy: AcademyDictionary;
};

const baseDictionaries: Record<Locale, BaseDictionary> = {
  en: enDictionary,
  "zh-hant": {
    meta: { siteTitle: "AIEDHK", siteDescription: "AI in Education Hub of Knowledge | 香港作為 AIED 樞紐" },
    nav: { home: "首頁", mission: "使命", researchNews: "研究新聞", about: "關於", menu: "選單", close: "關閉" },
    common: {
      language: "語言",
      learnMore: "了解更多",
      readSummary: "閱讀 500 字摘要",
      backToResearch: "返回研究新聞",
      latestResearch: "最新研究新聞",
      viewAll: "查看全部",
      externalLink: "開啟網站",
      search: "搜尋",
      reset: "重設",
      loadMore: "載入更多",
      noResults: "目前篩選條件下沒有符合的論文。",
      allTypes: "全部類型",
      allYears: "全部年份",
      keyTakeaways: "重點摘要",
      whyItMatters: "對 AIEDHK 的意義",
      relatedPapers: "相關論文",
      page: "頁",
      source: "來源",
      summaryHeading: "500 字摘要",
    },
    paperTypes: { journal: "期刊論文", conference: "會議論文", review: "綜述", "tool-dataset": "工具 / 數據集", "policy-ethics": "政策 / 倫理" },
    home: {
      eyebrow: "人工智能教育知識樞紐",
      heroTitle: "以香港為 AIED 樞紐，連結研究、產品創新與學習影響力。",
      heroText: "AIEDHK 是面向 AI in Education 研發的多語言資訊平台，連結全球研究動態、本地教學實踐、產品實驗與負責任創新。",
      primaryCta: "瀏覽研究新聞",
      secondaryCta: "閱讀使命",
      missionStatement: "加速世界邁向個性化學習與教學。",
      showcaseTitle: "人工智能教育知識樞紐",
      showcaseText: "加速世界邁向個性化學習與教學",
      cards: [
        { title: "使命", text: "以清晰策略推動香港成為可信賴的 AIED 知識與產品樞紐。" },
        { title: "研究新聞", text: "以易讀的 500 字摘要分享重要 AIED 期刊與會議論文。" },
        { title: "關於", text: "介紹 Dr. Peter Hu Dongpin、PedaNova、MAIS 與 CAIS 的研發脈絡。" },
      ],
      hubAdvantage: "樞紐優勢",
      whyTitle: "為何是香港作為 AIED 樞紐？",
      whyText: "香港可以連結國際研究網絡、中文教育場景、敏捷產品開發與嚴謹的校本驗證。AIEDHK 旨在成為這座橋樑的知識層。",
      translationLabel: "轉化",
      impactTitle: "從研究走向真實學習影響",
      impactText: "平台將論文轉化為摘要，將摘要轉化為設計洞察，再將洞察轉化為支援教師與學生的工具。",
      pillars: ["研究情報", "產品創新", "教師賦能", "負責任 AI"],
    },
    mission: {
      eyebrow: "使命與策略",
      title: "加速世界邁向個性化學習與教學。",
      intro: "AIEDHK 旨在讓 AI in Education 研究更容易被發現、理解、評估、轉化與應用，長期目標是協助香港成為高信任度的全球 AIED 樞紐。",
      visionTitle: "願景",
      visionText: "讓每位學習者得到及時、人本、個性化的支持，也讓每位教師能負責任地使用 AI 放大專業判斷。",
      whyAiedTitle: "為何 AIED 重要",
      whyAiedText: "AIED 結合學習科學、人工智能、評估、人機互動與教育實踐。它的價值不只是自動化，而是更好的回饋、更好的證據與更好的學習體驗。",
      whyHongKongTitle: "為何是香港",
      whyHongKongText: "香港位於全球研究網絡與中文教育體系之間，可成為多語言、具文化意識、可進入課堂的 AIED 創新試驗場。",
      roadmapEyebrow: "路線圖",
      strategyTitle: "策略",
      strategyIntro: "六個實踐方向將引導平台與未來研發管線。",
      strategies: [
        { title: "研究情報", text: "追蹤 AIED 期刊與會議，整理方法、數據集、趨勢與應用場景。" },
        { title: "產品創新", text: "將研究成果轉化為可在真實教育場景測試的產品、原型與教學工具。" },
        { title: "教師賦能", text: "幫助教師理解、評估並自信地使用 AI 教育工具。" },
        { title: "以學生為中心的學習", text: "推動個性化學習、形成性回饋、評估支援與學習者福祉。" },
        { title: "全球—本地橋樑", text: "連結全球 AIED 研究與香港、大中華及亞洲教育實踐。" },
        { title: "倫理與負責任 AI", text: "將公平、私隱、安全、透明與教育價值作為預設設計原則。" },
      ],
    },
    research: {
      eyebrow: "研究新聞",
      title: "將 AIED 論文轉化為研究到產品的洞察。",
      intro: "精選 AIED 期刊與會議論文。每張卡片提供快速概覽，詳情頁則呈現 500 字摘要與實用重點。",
      searchPlaceholder: "搜尋標題、作者、主題或關鍵詞",
      resultCount: "篇論文",
      ingestionNote: "已為每週 Codex 輔助流程預留：抓取論文、生成摘要、標註主題、審閱與發布。",
      newsletter: {
        eyebrow: "免費每日摘要",
        title: "將最新 AIED 論文與新聞送到你的信箱",
        description: "每日精選研究新聞更新。",
        emailLabel: "電郵地址",
        emailPlaceholder: "you@example.com",
        submit: "訂閱",
        submitting: "訂閱中...",
        success: "你已成功訂閱，每日 AIED 研究新聞更新將寄到你的信箱。",
        alreadySubscribed: "你已在每日 AIED 研究新聞訂閱名單中。",
        invalidEmail: "請輸入有效的電郵地址。",
        notConfigured: "訂閱儲存尚未設定。請在上線設定完成後再試。",
        error: "暫時無法完成訂閱，請稍後再試。",
        privacyNote: "單步試用訂閱。目前試用階段不需要付款。",
      },
    },
    about: {
      eyebrow: "關於",
      title: "Dr. Peter Hu Dongpin 與 AIEDHK 研發生態。",
      intro: "本頁使用可編輯佔位文案。平台完善後，可替換為已核實的個人、公司與產品資料。",
      principalLabel: "負責人",
      personTitle: "關於 Dr. Peter Hu Dongpin",
      personText: "Dr. Peter Hu Dongpin 是 AIEDHK 的發起人。本區可介紹其 AI in Education 研發興趣、研究到產品的方法，以及連結教育需求與負責任 AI 系統的工作。",
      focusTitle: "AIED 研發焦點",
      focusItems: ["個性化學與教", "AI 輔助評估與回饋", "面向教師的 AI 工具", "AI 在學校的負責任部署"],
      companyTitle: "公司",
      companyText: "PedaNova Technology 在此以可編輯公司簡介呈現，聚焦 AI in Education 研究、開發、產品創新與教育科技應用。",
      portfolioLabel: "產品組合",
      productsTitle: "產品",
      products: [
        { name: "MAIS", text: "AI 教育產品的可編輯佔位說明。可在此加入已核實的產品定位、使用者與場景。" },
        { name: "CAIS", text: "AI 教育產品的可編輯佔位說明。可在此加入已核實的產品定位、使用者與場景。" },
        { name: "UAIS", text: "University Adaptive Interactive System" },
      ],
      linksTitle: "研發連結",
      placeholderNote: "佔位內容：正式發布前，請替換為已核實的履歷、產品介紹、證據與里程碑。",
    },
    logoConcepts: {
      metaTitle: "Logo 概念",
      eyebrow: "Logo 概念",
      title: "AIEDHK 的三個新方向",
      intro: "每個 SVG 組合都圍繞 AI in Education Hub of Knowledge，讓學習、知識、AI 與香港之間的橋樑更清晰。",
      download: "下載 SVG",
      recommendationTitle: "建議",
      recommendationText: "若想延續現有標誌，選擇 Learning Circuit；若香港樞紐訊息最重要，選擇 Harbour Hub；若品牌需要更學術與顧問感，選擇 Knowledge Compass。",
      previewPath: "預覽路徑",
      concepts: [
        { name: "Learning Circuit", summary: "打開的書頁承載連接的 AI 節點，直接呈現教育與知識層，同時保留現有青藍色品牌感。", signal: "最適合目前網站頁首，因為它最接近現有身份。" },
        { name: "Harbour Hub", summary: "樞紐網絡包圍 HK 字母，指向香港連接研究、產品、學校與負責任 AI 的角色。", signal: "最適合面向公眾傳達香港作為 AIED 樞紐的定位。" },
        { name: "Knowledge Compass", summary: "指南針置於打開的書本之上，將 AIEDHK 定位為發現、評估與應用 AI 教育知識的指南。", signal: "最適合報告、研究頁面與學術合作材料。" },
      ],
    },
    footer: { description: "AIEDHK 是面向 AI in Education 研究、開發與負責任學習創新的多語言知識樞紐。", navigation: "導航", ecosystem: "生態連結", copyright: "© 2026 AIEDHK. 保留所有權利。" },
  },
  "zh-hans": {
    meta: { siteTitle: "AIEDHK", siteDescription: "AI in Education Hub of Knowledge | 香港作为 AIED 枢纽" },
    nav: { home: "首页", mission: "使命", researchNews: "研究新闻", about: "关于", menu: "菜单", close: "关闭" },
    common: {
      language: "语言",
      learnMore: "了解更多",
      readSummary: "阅读 500 字摘要",
      backToResearch: "返回研究新闻",
      latestResearch: "最新研究新闻",
      viewAll: "查看全部",
      externalLink: "打开网站",
      search: "搜索",
      reset: "重置",
      loadMore: "加载更多",
      noResults: "当前筛选条件下没有符合的论文。",
      allTypes: "全部类型",
      allYears: "全部年份",
      keyTakeaways: "重点摘要",
      whyItMatters: "对 AIEDHK 的意义",
      relatedPapers: "相关论文",
      page: "页",
      source: "来源",
      summaryHeading: "500 字摘要",
    },
    paperTypes: { journal: "期刊论文", conference: "会议论文", review: "综述", "tool-dataset": "工具 / 数据集", "policy-ethics": "政策 / 伦理" },
    home: {
      eyebrow: "人工智能教育知识枢纽",
      heroTitle: "以香港为 AIED 枢纽，连接研究、产品创新与学习影响力。",
      heroText: "AIEDHK 是面向 AI in Education 研发的多语言信息平台，连接全球研究动态、本地教学实践、产品实验与负责任创新。",
      primaryCta: "浏览研究新闻",
      secondaryCta: "阅读使命",
      missionStatement: "加速世界迈向个性化学习与教学。",
      showcaseTitle: "人工智能教育知识枢纽",
      showcaseText: "加速世界迈向个性化学习与教学",
      cards: [
        { title: "使命", text: "以清晰策略推动香港成为可信赖的 AIED 知识与产品枢纽。" },
        { title: "研究新闻", text: "以易读的 500 字摘要分享重要 AIED 期刊与会议论文。" },
        { title: "关于", text: "介绍 Dr. Peter Hu Dongpin、PedaNova、MAIS 与 CAIS 的研发脉络。" },
      ],
      hubAdvantage: "枢纽优势",
      whyTitle: "为什么是香港作为 AIED 枢纽？",
      whyText: "香港可以连接国际研究网络、中文教育场景、敏捷产品开发与严谨的校本验证。AIEDHK 旨在成为这座桥梁的知识层。",
      translationLabel: "转化",
      impactTitle: "从研究走向真实学习影响",
      impactText: "平台将论文转化为摘要，将摘要转化为设计洞察，再将洞察转化为支持教师与学生的工具。",
      pillars: ["研究情报", "产品创新", "教师赋能", "负责任 AI"],
    },
    mission: {
      eyebrow: "使命与策略",
      title: "加速世界迈向个性化学习与教学。",
      intro: "AIEDHK 旨在让 AI in Education 研究更容易被发现、理解、评估、转化与应用，长期目标是协助香港成为高信任度的全球 AIED 枢纽。",
      visionTitle: "愿景",
      visionText: "让每位学习者得到及时、人本、个性化的支持，也让每位教师能负责任地使用 AI 放大专业判断。",
      whyAiedTitle: "为什么 AIED 重要",
      whyAiedText: "AIED 结合学习科学、人工智能、评估、人机交互与教育实践。它的价值不只是自动化，而是更好的反馈、更好的证据与更好的学习体验。",
      whyHongKongTitle: "为什么是香港",
      whyHongKongText: "香港位于全球研究网络与中文教育体系之间，可成为多语言、具文化意识、可进入课堂的 AIED 创新试验场。",
      roadmapEyebrow: "路线图",
      strategyTitle: "策略",
      strategyIntro: "六个实践方向将引导平台与未来研发管线。",
      strategies: [
        { title: "研究情报", text: "追踪 AIED 期刊与会议，整理方法、数据集、趋势与应用场景。" },
        { title: "产品创新", text: "将研究成果转化为可在真实教育场景测试的产品、原型与教学工具。" },
        { title: "教师赋能", text: "帮助教师理解、评估并自信地使用 AI 教育工具。" },
        { title: "以学生为中心的学习", text: "推动个性化学习、形成性反馈、评估支持与学习者福祉。" },
        { title: "全球—本地桥梁", text: "连接全球 AIED 研究与香港、大中华及亚洲教育实践。" },
        { title: "伦理与负责任 AI", text: "将公平、隐私、安全、透明与教育价值作为默认设计原则。" },
      ],
    },
    research: { eyebrow: "研究新闻", title: "将 AIED 论文转化为研究到产品的洞察。", intro: "精选 AIED 期刊与会议论文。每张卡片提供快速概览，详情页则呈现 500 字摘要与实用重点。", searchPlaceholder: "搜索标题、作者、主题或关键词", resultCount: "篇论文", ingestionNote: "已为每周 Codex 辅助流程预留：抓取论文、生成摘要、标注主题、审阅与发布。", newsletter: { eyebrow: "免费每日摘要", title: "将最新 AIED 论文与新闻送到你的邮箱", description: "每日精选研究新闻更新。", emailLabel: "邮箱地址", emailPlaceholder: "you@example.com", submit: "订阅", submitting: "订阅中...", success: "你已成功订阅，每日 AIED 研究新闻更新将发送到你的邮箱。", alreadySubscribed: "你已在每日 AIED 研究新闻订阅名单中。", invalidEmail: "请输入有效的邮箱地址。", notConfigured: "订阅存储尚未配置。请在上线设置完成后再试。", error: "暂时无法完成订阅，请稍后再试。", privacyNote: "单步试用订阅。目前试用阶段不需要付款。" } },
    about: {
      eyebrow: "关于",
      title: "Dr. Peter Hu Dongpin 与 AIEDHK 研发生态。",
      intro: "本页使用可编辑占位文案。平台完善后，可替换为已核实的个人、公司与产品资料。",
      principalLabel: "负责人",
      personTitle: "关于 Dr. Peter Hu Dongpin",
      personText: "Dr. Peter Hu Dongpin 是 AIEDHK 的发起人。本区可介绍其 AI in Education 研发兴趣、研究到产品的方法，以及连接教育需求与负责任 AI 系统的工作。",
      focusTitle: "AIED 研发焦点",
      focusItems: ["个性化学与教", "AI 辅助评估与反馈", "面向教师的 AI 工具", "AI 在学校的负责任部署"],
      companyTitle: "公司",
      companyText: "PedaNova Technology 在此以可编辑公司简介呈现，聚焦 AI in Education 研究、开发、产品创新与教育科技应用。",
      portfolioLabel: "产品组合",
      productsTitle: "产品",
      products: [
        { name: "MAIS", text: "AI 教育产品的可编辑占位说明。可在此加入已核实的产品定位、用户与场景。" },
        { name: "CAIS", text: "AI 教育产品的可编辑占位说明。可在此加入已核实的产品定位、用户与场景。" },
        { name: "UAIS", text: "University Adaptive Interactive System" },
      ],
      linksTitle: "研发链接",
      placeholderNote: "占位内容：正式发布前，请替换为已核实的履历、产品介绍、证据与里程碑。",
    },
    logoConcepts: {
      metaTitle: "Logo 概念",
      eyebrow: "Logo 概念",
      title: "AIEDHK 的三个新方向",
      intro: "每个 SVG 组合都围绕 AI in Education Hub of Knowledge，让学习、知识、AI 与香港之间的桥梁更清晰。",
      download: "下载 SVG",
      recommendationTitle: "建议",
      recommendationText: "若想延续现有标志，选择 Learning Circuit；若香港枢纽信息最重要，选择 Harbour Hub；若品牌需要更学术与顾问感，选择 Knowledge Compass。",
      previewPath: "预览路径",
      concepts: [
        { name: "Learning Circuit", summary: "打开的书页承载连接的 AI 节点，直接呈现教育与知识层，同时保留现有青蓝色品牌感。", signal: "最适合当前网站页首，因为它最接近现有身份。" },
        { name: "Harbour Hub", summary: "枢纽网络包围 HK 字母，指向香港连接研究、产品、学校与负责任 AI 的角色。", signal: "最适合面向公众传达香港作为 AIED 枢纽的定位。" },
        { name: "Knowledge Compass", summary: "指南针置于打开的书本之上，将 AIEDHK 定位为发现、评估与应用 AI 教育知识的指南。", signal: "最适合报告、研究页面与学术合作材料。" },
      ],
    },
    footer: { description: "AIEDHK 是面向 AI in Education 研究、开发与负责任学习创新的多语言知识枢纽。", navigation: "导航", ecosystem: "生态链接", copyright: "© 2026 AIEDHK. 保留所有权利。" },
  },
  es: {
    meta: { siteTitle: "AIEDHK", siteDescription: "AI in Education Hub of Knowledge | Hong Kong como centro AIED" },
    nav: { home: "Inicio", mission: "Misión", researchNews: "Noticias de investigación", about: "Acerca de", menu: "Menú", close: "Cerrar" },
    common: { language: "Idioma", learnMore: "Saber más", readSummary: "Leer resumen de 500 palabras", backToResearch: "Volver a noticias de investigación", latestResearch: "Últimas noticias de investigación", viewAll: "Ver todo", externalLink: "Abrir sitio web", search: "Buscar", reset: "Restablecer", loadMore: "Cargar más", noResults: "Ningún artículo coincide con los filtros actuales.", allTypes: "Todos los tipos", allYears: "Todos los años", keyTakeaways: "Puntos clave", whyItMatters: "Por qué importa para AIEDHK", relatedPapers: "Artículos relacionados", page: "Página", source: "Fuente", summaryHeading: "Resumen de 500 palabras" },
    paperTypes: { journal: "Artículo de revista", conference: "Artículo de congreso", review: "Revisión", "tool-dataset": "Herramienta / conjunto de datos", "policy-ethics": "Política / ética" },
    home: { eyebrow: "Centro de conocimiento de IA en educación", heroTitle: "Hong Kong como centro AIED para investigación, innovación de producto e impacto en el aprendizaje.", heroText: "AIEDHK es una plataforma multilingüe de información para I+D en IA en educación. Conecta inteligencia global de investigación con práctica local de aula, experimentos de producto e innovación responsable.", primaryCta: "Explorar noticias de investigación", secondaryCta: "Leer la misión", missionStatement: "Acelerar la transición del mundo hacia el aprendizaje y la enseñanza personalizados.", showcaseTitle: "Centro de conocimiento de IA en educación", showcaseText: "Acelerar la transición del mundo hacia el aprendizaje y la enseñanza personalizados", cards: [{ title: "Misión", text: "Una estrategia clara para convertir Hong Kong en un centro confiable de conocimiento y producto AIED." }, { title: "Noticias de investigación", text: "Resúmenes legibles de 500 palabras de artículos importantes de revistas y congresos AIED." }, { title: "Acerca de", text: "Contexto de I+D de Dr. Peter Hu Dongpin, PedaNova, MAIS y CAIS." }], hubAdvantage: "Ventaja del centro", whyTitle: "¿Por qué Hong Kong como centro AIED?", whyText: "Hong Kong puede conectar redes internacionales de investigación, contextos educativos en chino, desarrollo ágil de productos y validación escolar rigurosa. AIEDHK está diseñado como la capa de conocimiento de ese puente.", translationLabel: "Traducción", impactTitle: "De la investigación al impacto real en el aprendizaje", impactText: "La plataforma convierte artículos en resúmenes, resúmenes en ideas de diseño e ideas en herramientas que apoyan a docentes y estudiantes.", pillars: ["Inteligencia de investigación", "Innovación de producto", "Empoderamiento docente", "IA responsable"] },
    mission: { eyebrow: "Misión y estrategia", title: "Acelerar la transición del mundo hacia el aprendizaje y la enseñanza personalizados.", intro: "AIEDHK existe para facilitar el descubrimiento, la evaluación, la traducción y la aplicación de la investigación en IA en educación. La ambición a largo plazo es ayudar a Hong Kong a convertirse en un centro AIED de alta confianza para el mundo.", visionTitle: "Visión", visionText: "Un futuro en el que cada estudiante reciba apoyo oportuno, humano y personalizado, y cada docente pueda usar la IA responsablemente para ampliar su juicio profesional.", whyAiedTitle: "Por qué importa AIED", whyAiedText: "AIED reúne ciencias del aprendizaje, inteligencia artificial, evaluación, interacción humano-computadora y práctica educativa. Su valor no es solo automatizar, sino ofrecer mejor retroalimentación, mejor evidencia y mejores experiencias de aprendizaje.", whyHongKongTitle: "Por qué Hong Kong", whyHongKongText: "Hong Kong está entre redes globales de investigación y sistemas educativos en chino. Puede ser un banco de pruebas para innovación AIED multilingüe, culturalmente consciente y lista para el aula.", roadmapEyebrow: "Hoja de ruta", strategyTitle: "Estrategia", strategyIntro: "Seis direcciones prácticas guían la plataforma y su futura cartera de I+D.", strategies: [{ title: "Inteligencia de investigación", text: "Seguir revistas y congresos AIED, y resumir métodos, conjuntos de datos, tendencias y escenarios de aplicación." }, { title: "Innovación de producto", text: "Traducir hallazgos de investigación en productos educativos, prototipos y herramientas docentes que puedan probarse en contextos reales." }, { title: "Empoderamiento docente", text: "Ayudar a docentes a comprender, evaluar y usar herramientas de IA educativa con confianza y agencia profesional." }, { title: "Aprendizaje centrado en el estudiante", text: "Impulsar aprendizaje personalizado, retroalimentación formativa, apoyo a la evaluación y bienestar del estudiante." }, { title: "Puente global-local", text: "Conectar investigación AIED global con prácticas educativas de Hong Kong, Gran China y Asia." }, { title: "IA ética y responsable", text: "Promover equidad, privacidad, seguridad, transparencia y valor educativo como principios de diseño por defecto." }] },
    research: { eyebrow: "Noticias de investigación", title: "Artículos AIED resumidos para traducir investigación en producto.", intro: "Una selección curada de artículos de revistas y congresos AIED. Cada tarjeta ofrece una visión breve, y la página de detalle aporta un resumen de 500 palabras y conclusiones prácticas.", searchPlaceholder: "Buscar título, autor, tema o palabra clave", resultCount: "artículos", ingestionNote: "Preparado para ingesta semanal asistida por Codex: rastrear artículos, generar resúmenes, etiquetar temas, revisar y publicar.", newsletter: { eyebrow: "Resumen diario gratuito", title: "Recibe las últimas noticias AIED en tu correo", description: "Actualizaciones diarias de noticias seleccionadas.", emailLabel: "Correo electrónico", emailPlaceholder: "tu@ejemplo.com", submit: "Suscribirse", submitting: "Suscribiendo...", success: "Ya estás suscrito. Las noticias AIED diarias llegarán a tu correo.", alreadySubscribed: "Ya estás en la lista diaria de noticias AIED.", invalidEmail: "Introduce un correo electrónico válido.", notConfigured: "El almacenamiento de suscripciones aún no está configurado. Inténtalo después de la configuración de lanzamiento.", error: "Algo salió mal. Inténtalo de nuevo en un momento.", privacyNote: "Alta de prueba en un solo paso. No se requiere pago durante la prueba actual." } },
    about: { eyebrow: "Acerca de", title: "Dr. Peter Hu Dongpin y el ecosistema de I+D de AIEDHK.", intro: "Esta página usa texto editable de marcador. Sustitúyelo por biografía, empresa y detalles de producto verificados a medida que evolucione la plataforma.", principalLabel: "Principal", personTitle: "Acerca de Dr. Peter Hu Dongpin", personText: "Dr. Peter Hu Dongpin es el iniciador de AIEDHK. Esta sección puede presentar sus intereses de I+D en IA en educación, su enfoque de investigación a producto y su trabajo conectando necesidades educativas con sistemas de IA responsables.", focusTitle: "Foco de I+D AIED", focusItems: ["Aprendizaje y enseñanza personalizados", "Evaluación y retroalimentación asistidas por IA", "Herramientas de IA para docentes", "Despliegue responsable de IA en escuelas"], companyTitle: "Empresa", companyText: "PedaNova Technology se presenta aquí como un perfil editable de empresa para investigación, desarrollo, innovación de producto y aplicaciones de tecnología educativa en IA en educación.", portfolioLabel: "Portafolio", productsTitle: "Productos", products: [{ name: "MAIS", text: "Marcador editable para un producto educativo impulsado por IA. Añade aquí posicionamiento, usuarios y casos de uso verificados." }, { name: "CAIS", text: "Marcador editable para un producto educativo impulsado por IA. Añade aquí posicionamiento, usuarios y casos de uso verificados." }, { name: "UAIS", text: "University Adaptive Interactive System" }], linksTitle: "Enlaces de I+D", placeholderNote: "Contenido de marcador: sustituir por biografía, descripciones de producto, evidencia e hitos verificados antes del lanzamiento público." },
    logoConcepts: { metaTitle: "Conceptos de logo", eyebrow: "Conceptos de logo", title: "Tres nuevas direcciones para AIEDHK", intro: "Cada lockup SVG se basa en AI in Education Hub of Knowledge, con un puente más claro entre aprendizaje, conocimiento, IA y Hong Kong.", download: "Descargar SVG", recommendationTitle: "Recomendación", recommendationText: "Elige Learning Circuit si deseas una evolución directa de la marca actual. Elige Harbour Hub si el mensaje de Hong Kong como centro es lo más importante. Elige Knowledge Compass si la marca debe sentirse más académica y asesora.", previewPath: "Ruta de vista previa", concepts: [{ name: "Learning Circuit", summary: "Páginas de libro abierto llevan nodos de IA conectados, haciendo inmediata la capa de educación y conocimiento sin perder la marca cian-azul.", signal: "Mejor encaje para el encabezado actual porque se siente más cercano a la identidad existente." }, { name: "Harbour Hub", summary: "Una red de centro envuelve un monograma HK, apuntando a Hong Kong como conector entre investigación, productos, escuelas e IA responsable.", signal: "Mejor para posicionamiento público sobre Hong Kong como centro AIED." }, { name: "Knowledge Compass", summary: "Una brújula sobre un libro abierto presenta AIEDHK como guía para descubrir, evaluar y aplicar conocimiento de IA educativa.", signal: "Mejor para informes, páginas de investigación y materiales de colaboración académica." }] },
    footer: { description: "AIEDHK es un centro multilingüe de conocimiento para investigación, desarrollo e innovación responsable del aprendizaje con IA en educación.", navigation: "Navegación", ecosystem: "Enlaces del ecosistema", copyright: "© 2026 AIEDHK. Todos los derechos reservados." },
  },
  fr: enDictionary,
  pt: enDictionary,
  de: enDictionary,
  ar: enDictionary,
  ko: enDictionary,
  ja: enDictionary,
  hi: enDictionary,
  ru: enDictionary,
  id: enDictionary,
  bn: enDictionary,
};

function makeRomanceDictionary(locale: Exclude<Locale, "en" | "zh-hant" | "zh-hans" | "es">): BaseDictionary {
  const copy = localizedBase(fallbackLocalizedCopy[locale]);
  return {
    meta: { siteTitle: "AIEDHK", siteDescription: copy.metaDescription },
    nav: copy.nav,
    common: copy.common,
    paperTypes: copy.paperTypes,
    home: {
      ...copy.home,
      cards: copy.home.cards,
      pillars: copy.home.pillars,
    },
    mission: {
      ...copy.mission,
      strategies: copy.mission.strategies,
    },
    research: copy.research,
    about: {
      ...copy.about,
      products: copy.about.products,
    },
    logoConcepts: {
      ...copy.logoConcepts,
      concepts: copy.logoConcepts.concepts,
    },
    footer: copy.footer,
  };
}

type LocalizedBaseCopy = { metaDescription: string } & Omit<BaseDictionary, "meta">;

type LocalizedBaseInput = {
  metaDescription: string;
  nav: [string, string, string, string, string, string];
  common: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];
  paperTypes: [string, string, string, string, string];
  home: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    [string, string],
    [string, string],
    [string, string],
    string[],
  ];
  mission: [string, string, string, string, string, string, string, string, string, string, string, string];
  research: [string, string, string, string, string, string];
  about: [string, string, string, string, string, string, string, string[], string, string, string, string, string];
  footer: [string, string, string, string];
  logo: [string, string, string, string, string, string, string, string];
};

const fallbackLocalizedCopy: Record<Exclude<Locale, "en" | "zh-hant" | "zh-hans" | "es">, LocalizedBaseInput> = {
  fr: {
    metaDescription: "AI in Education Hub of Knowledge | Hong Kong comme pôle AIED",
    nav: ["Accueil", "Mission", "Actualités recherche", "À propos", "Menu", "Fermer"],
    common: ["Langue", "En savoir plus", "Lire le résumé de 500 mots", "Retour aux actualités recherche", "Dernières actualités recherche", "Tout voir", "Ouvrir le site", "Rechercher", "Réinitialiser", "Charger plus", "Aucun article ne correspond aux filtres actuels.", "Tous les types", "Toutes les années", "Points clés", "Pourquoi cela compte pour AIEDHK", "Articles liés", "Page", "Source", "Résumé de 500 mots"],
    paperTypes: ["Article de revue", "Article de conférence", "Revue", "Outil / jeu de données", "Politique / éthique"],
    home: ["Pôle de connaissance IA en éducation", "Hong Kong comme pôle AIED pour la recherche, l'innovation produit et l'impact sur l'apprentissage.", "AIEDHK est une plateforme d'information multilingue pour la R&D en IA en éducation. Elle relie l'intelligence mondiale de la recherche à la pratique locale, aux expérimentations produit et à l'innovation responsable.", "Explorer les actualités recherche", "Lire la mission", "Accélérer la transition du monde vers un apprentissage et un enseignement personnalisés.", "Pôle de connaissance IA en éducation", "Accélérer la transition du monde vers un apprentissage et un enseignement personnalisés", "Avantage du pôle", "Pourquoi Hong Kong comme pôle AIED ?", "Hong Kong peut relier les réseaux internationaux de recherche, les contextes éducatifs en chinois, le développement agile de produits et une validation scolaire rigoureuse. AIEDHK forme la couche de connaissance de ce pont.", "Traduction", "De la recherche à l'impact réel sur l'apprentissage", "La plateforme transforme les articles en résumés, les résumés en idées de conception, et les idées en outils pour enseignants et apprenants.", ["Mission", "Une stratégie claire pour faire de Hong Kong un pôle fiable de connaissance et de produit AIED."], ["Actualités recherche", "Des résumés lisibles de 500 mots sur les articles importants des revues et conférences AIED."], ["À propos", "Contexte de R&D de Dr. Peter Hu Dongpin, PedaNova, MAIS et CAIS."], ["Intelligence recherche", "Innovation produit", "Autonomisation enseignante", "IA responsable"]],
    mission: ["Mission et stratégie", "Accélérer la transition du monde vers un apprentissage et un enseignement personnalisés.", "AIEDHK rend la recherche en IA en éducation plus facile à découvrir, évaluer, traduire et appliquer. L'ambition à long terme est d'aider Hong Kong à devenir un pôle AIED de confiance pour le monde.", "Vision", "Un avenir où chaque apprenant reçoit un soutien opportun, humain et personnalisé, et où chaque enseignant utilise l'IA de manière responsable pour amplifier son jugement professionnel.", "Pourquoi l'AIED compte", "L'AIED réunit sciences de l'apprentissage, intelligence artificielle, évaluation, interaction humain-machine et pratique éducative. Sa valeur n'est pas seulement l'automatisation, mais de meilleurs retours, de meilleures preuves et de meilleures expériences.", "Pourquoi Hong Kong", "Hong Kong se situe entre les réseaux mondiaux de recherche et les systèmes éducatifs en chinois. Elle peut devenir un terrain d'essai pour une innovation AIED multilingue, culturellement consciente et prête pour la classe.", "Feuille de route", "Stratégie", "Six directions pratiques guident la plateforme et son futur pipeline de R&D."],
    research: ["Actualités recherche", "Articles AIED résumés pour traduire la recherche en produit.", "Un flux sélectionné d'articles de revues et conférences AIED. Chaque carte offre une vue concise, tandis que la page détail propose un résumé de 500 mots et des points pratiques.", "Rechercher titre, auteur, sujet ou mot-clé", "articles", "Préparé pour une ingestion hebdomadaire assistée par Codex : collecter les articles, générer les résumés, taguer les sujets, relire et publier."],
    about: ["À propos", "Dr. Peter Hu Dongpin et l'écosystème R&D d'AIEDHK.", "Cette page contient un texte indicatif modifiable à remplacer par une biographie, une entreprise et des produits vérifiés.", "Responsable", "À propos de Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin est l'initiateur d'AIEDHK. Cette section peut présenter ses intérêts de R&D en IA éducative, son approche recherche-produit et son travail reliant besoins éducatifs et IA responsable.", "Axes R&D AIED", ["Apprentissage et enseignement personnalisés", "Évaluation et retour assistés par IA", "Outils IA pour enseignants", "Déploiement responsable de l'IA à l'école"], "Entreprise", "PedaNova Technology est présenté ici comme un profil modifiable pour la recherche, le développement, l'innovation produit et les applications EdTech en IA éducative.", "Portefeuille", "Produits", "Liens R&D"],
    footer: ["AIEDHK est un pôle multilingue de connaissance pour la recherche, le développement et l'innovation responsable de l'apprentissage en IA éducative.", "Navigation", "Liens écosystème", "© 2026 AIEDHK. Tous droits réservés."],
    logo: ["Concepts de logo", "Concepts de logo", "Trois nouvelles directions pour AIEDHK", "Chaque lockup SVG s'appuie sur AI in Education Hub of Knowledge, avec un pont plus clair entre apprentissage, connaissance, IA et Hong Kong.", "Télécharger le SVG", "Recommandation", "Choisissez Learning Circuit pour une évolution directe de la marque actuelle. Choisissez Harbour Hub si le message de Hong Kong comme pôle prime. Choisissez Knowledge Compass pour une marque plus académique et consultative.", "Chemin de prévisualisation"],
  },
  pt: {
    metaDescription: "AI in Education Hub of Knowledge | Hong Kong como centro AIED",
    nav: ["Início", "Missão", "Notícias de pesquisa", "Sobre", "Menu", "Fechar"],
    common: ["Idioma", "Saiba mais", "Ler resumo de 500 palavras", "Voltar às notícias de pesquisa", "Últimas notícias de pesquisa", "Ver tudo", "Abrir site", "Pesquisar", "Redefinir", "Carregar mais", "Nenhum artigo corresponde aos filtros atuais.", "Todos os tipos", "Todos os anos", "Pontos principais", "Por que importa para AIEDHK", "Artigos relacionados", "Página", "Fonte", "Resumo de 500 palavras"],
    paperTypes: ["Artigo de revista", "Artigo de conferência", "Revisão", "Ferramenta / conjunto de dados", "Política / ética"],
    home: ["Centro de conhecimento de IA na educação", "Hong Kong como centro AIED para pesquisa, inovação de produto e impacto na aprendizagem.", "AIEDHK é uma plataforma multilíngue de informação para P&D em IA na educação. Conecta inteligência global de pesquisa com prática local de sala de aula, experimentos de produto e inovação responsável.", "Explorar notícias de pesquisa", "Ler a missão", "Acelerar a transição do mundo para aprendizagem e ensino personalizados.", "Centro de conhecimento de IA na educação", "Acelerar a transição do mundo para aprendizagem e ensino personalizados", "Vantagem do centro", "Por que Hong Kong como centro AIED?", "Hong Kong pode conectar redes internacionais de pesquisa, contextos educacionais em chinês, desenvolvimento ágil de produtos e validação escolar rigorosa. AIEDHK é a camada de conhecimento dessa ponte.", "Tradução", "Da pesquisa ao impacto real na aprendizagem", "A plataforma transforma artigos em resumos, resumos em insights de design e insights em ferramentas para professores e alunos.", ["Missão", "Uma estratégia clara para transformar Hong Kong em um centro confiável de conhecimento e produtos AIED."], ["Notícias de pesquisa", "Resumos legíveis de 500 palavras de artigos importantes de periódicos e conferências AIED."], ["Sobre", "Contexto de P&D de Dr. Peter Hu Dongpin, PedaNova, MAIS e CAIS."], ["Inteligência de pesquisa", "Inovação de produto", "Empoderamento docente", "IA responsável"]],
    mission: ["Missão e estratégia", "Acelerar a transição do mundo para aprendizagem e ensino personalizados.", "AIEDHK existe para tornar a pesquisa em IA na educação mais fácil de descobrir, avaliar, traduzir e aplicar. A ambição de longo prazo é ajudar Hong Kong a se tornar um centro AIED de alta confiança para o mundo.", "Visão", "Um futuro em que cada aluno receba apoio oportuno, humano e personalizado, e cada professor use IA de forma responsável para ampliar seu julgamento profissional.", "Por que AIED importa", "AIED reúne ciência da aprendizagem, inteligência artificial, avaliação, interação humano-computador e prática educacional. Seu valor não é apenas automação; é melhor feedback, melhor evidência e melhores experiências.", "Por que Hong Kong", "Hong Kong está entre redes globais de pesquisa e sistemas educacionais em chinês. Pode ser um laboratório para inovação AIED multilíngue, culturalmente consciente e pronta para a sala de aula.", "Roteiro", "Estratégia", "Seis direções práticas orientam a plataforma e seu futuro pipeline de P&D."],
    research: ["Notícias de pesquisa", "Artigos AIED resumidos para traduzir pesquisa em produto.", "Um feed selecionado de artigos de periódicos e conferências AIED. Cada cartão oferece visão concisa, e a página de detalhe traz resumo de 500 palavras e pontos práticos.", "Pesquisar título, autor, tema ou palavra-chave", "artigos", "Preparado para ingestão semanal assistida por Codex: coletar artigos, gerar resumos, marcar tópicos, revisar e publicar."],
    about: ["Sobre", "Dr. Peter Hu Dongpin e o ecossistema de P&D da AIEDHK.", "Esta página usa texto editável de exemplo. Substitua por biografia, empresa e produtos verificados conforme a plataforma evolui.", "Principal", "Sobre Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin é o iniciador da AIEDHK. Esta seção pode apresentar seus interesses de P&D em IA na educação, sua abordagem de pesquisa a produto e o trabalho de conectar necessidades educacionais a IA responsável.", "Foco de P&D AIED", ["Aprendizagem e ensino personalizados", "Avaliação e feedback assistidos por IA", "Ferramentas de IA para professores", "Implantação responsável de IA nas escolas"], "Empresa", "PedaNova Technology é apresentada aqui como perfil editável para pesquisa, desenvolvimento, inovação de produto e aplicações EdTech em IA na educação.", "Portfólio", "Produtos", "Links de P&D"],
    footer: ["AIEDHK é um centro multilíngue de conhecimento para pesquisa, desenvolvimento e inovação responsável da aprendizagem com IA na educação.", "Navegação", "Links do ecossistema", "© 2026 AIEDHK. Todos os direitos reservados."],
    logo: ["Conceitos de logo", "Conceitos de logo", "Três novas direções para AIEDHK", "Cada lockup SVG é construído em torno de AI in Education Hub of Knowledge, com uma ponte mais clara entre aprendizagem, conhecimento, IA e Hong Kong.", "Baixar SVG", "Recomendação", "Escolha Learning Circuit para evolução direta da marca atual. Escolha Harbour Hub se a mensagem de Hong Kong como centro for a mais importante. Escolha Knowledge Compass se a marca deve parecer mais acadêmica e consultiva.", "Caminho de prévia"],
  },
  de: {
    metaDescription: "AI in Education Hub of Knowledge | Hongkong als AIED-Hub",
    nav: ["Start", "Mission", "Forschungsnachrichten", "Über uns", "Menü", "Schließen"],
    common: ["Sprache", "Mehr erfahren", "500-Wörter-Zusammenfassung lesen", "Zurück zu Forschungsnachrichten", "Neueste Forschungsnachrichten", "Alle anzeigen", "Website öffnen", "Suchen", "Zurücksetzen", "Mehr laden", "Keine Beiträge entsprechen den aktuellen Filtern.", "Alle Typen", "Alle Jahre", "Kernaussagen", "Warum es für AIEDHK wichtig ist", "Verwandte Beiträge", "Seite", "Quelle", "500-Wörter-Zusammenfassung"],
    paperTypes: ["Zeitschriftenartikel", "Konferenzbeitrag", "Review", "Tool / Datensatz", "Politik / Ethik"],
    home: ["Wissenshub für KI in der Bildung", "Hongkong als AIED-Hub für Forschung, Produktinnovation und Lernwirkung.", "AIEDHK ist eine mehrsprachige Informationsplattform für F&E zu KI in der Bildung. Sie verbindet globale Forschungsintelligenz mit lokaler Unterrichtspraxis, Produktexperimenten und verantwortungsvoller Innovation.", "Forschungsnachrichten erkunden", "Mission lesen", "Den weltweiten Übergang zu personalisiertem Lernen und Lehren beschleunigen.", "Wissenshub für KI in der Bildung", "Den weltweiten Übergang zu personalisiertem Lernen und Lehren beschleunigen", "Hub-Vorteil", "Warum Hongkong als AIED-Hub?", "Hongkong kann internationale Forschungsnetzwerke, chinesischsprachige Bildungskontexte, agile Produktentwicklung und strenge schulische Validierung verbinden. AIEDHK ist als Wissensschicht für diese Brücke angelegt.", "Übersetzung", "Von Forschung zu realer Lernwirkung", "Die Plattform verwandelt Papers in Zusammenfassungen, Zusammenfassungen in Design-Erkenntnisse und Erkenntnisse in Werkzeuge für Lehrkräfte und Lernende.", ["Mission", "Eine klare Strategie, um Hongkong zu einem vertrauenswürdigen AIED-Wissens- und Produkthub zu entwickeln."], ["Forschungsnachrichten", "Lesbare 500-Wörter-Zusammenfassungen wichtiger AIED-Zeitschriften- und Konferenzbeiträge."], ["Über uns", "F&E-Kontext von Dr. Peter Hu Dongpin, PedaNova, MAIS und CAIS."], ["Forschungsintelligenz", "Produktinnovation", "Lehrkräfte stärken", "Verantwortungsvolle KI"]],
    mission: ["Mission und Strategie", "Den weltweiten Übergang zu personalisiertem Lernen und Lehren beschleunigen.", "AIEDHK macht Forschung zu KI in der Bildung leichter auffindbar, bewertbar, übersetzbar und anwendbar. Langfristig soll Hongkong zu einem weltweit vertrauenswürdigen AIED-Hub werden.", "Vision", "Eine Zukunft, in der jede lernende Person rechtzeitig, menschlich und personalisiert unterstützt wird und jede Lehrkraft KI verantwortungsvoll zur Stärkung professioneller Urteile nutzt.", "Warum AIED wichtig ist", "AIED verbindet Lernwissenschaft, künstliche Intelligenz, Assessment, Mensch-Computer-Interaktion und Bildungspraxis. Ihr Wert liegt nicht nur in Automatisierung, sondern in besserem Feedback, besserer Evidenz und besseren Lernerfahrungen.", "Warum Hongkong", "Hongkong liegt zwischen globalen Forschungsnetzwerken und chinesischsprachigen Bildungssystemen. Es kann ein Testfeld für mehrsprachige, kulturbewusste und unterrichtsreife AIED-Innovation sein.", "Roadmap", "Strategie", "Sechs praktische Richtungen leiten die Plattform und ihre künftige F&E-Pipeline."],
    research: ["Forschungsnachrichten", "AIED-Papers, zusammengefasst für den Transfer von Forschung zu Produkt.", "Ein kuratierter Feed von AIED-Zeitschriften- und Konferenzbeiträgen. Jede Karte bietet Überblick, die Detailseite eine 500-Wörter-Zusammenfassung und praktische Erkenntnisse.", "Titel, Autor, Thema oder Stichwort suchen", "Beiträge", "Vorbereitet für wöchentliche Codex-gestützte Aufnahme: Papers crawlen, Zusammenfassungen erzeugen, Themen taggen, prüfen und veröffentlichen."],
    about: ["Über uns", "Dr. Peter Hu Dongpin und das F&E-Ökosystem von AIEDHK.", "Diese Seite nutzt editierbaren Platzhaltertext. Ersetzen Sie ihn bei Weiterentwicklung der Plattform durch geprüfte Biografie-, Unternehmens- und Produktdetails.", "Verantwortlich", "Über Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin ist Initiator von AIEDHK. Dieser Abschnitt kann seine F&E-Interessen in KI-Bildung, seinen Research-to-Product-Ansatz und seine Arbeit zur Verbindung von Bildungsbedarfen mit verantwortungsvollen KI-Systemen vorstellen.", "AIED-F&E-Fokus", ["Personalisiertes Lernen und Lehren", "KI-gestützte Bewertung und Rückmeldung", "KI-Werkzeuge für Lehrkräfte", "Verantwortlicher KI-Einsatz in Schulen"], "Unternehmen", "PedaNova Technology wird hier als editierbares Unternehmensprofil für Forschung, Entwicklung, Produktinnovation und EdTech-Anwendungen in KI-Bildung dargestellt.", "Portfolio", "Produkte", "F&E-Links"],
    footer: ["AIEDHK ist ein mehrsprachiger Wissenshub für Forschung, Entwicklung und verantwortungsvolle Lerninnovation mit KI in der Bildung.", "Navigation", "Ökosystem-Links", "© 2026 AIEDHK. Alle Rechte vorbehalten."],
    logo: ["Logo-Konzepte", "Logo-Konzepte", "Drei neue Richtungen für AIEDHK", "Jedes SVG-Lockup baut auf AI in Education Hub of Knowledge auf und schafft eine klarere Brücke zwischen Lernen, Wissen, KI und Hongkong.", "SVG herunterladen", "Empfehlung", "Wählen Sie Learning Circuit für eine direkte Weiterentwicklung der aktuellen Marke. Wählen Sie Harbour Hub, wenn die Hongkong-Hub-Botschaft zentral ist. Wählen Sie Knowledge Compass für eine stärker akademische und beratende Wirkung.", "Vorschaupfad"],
  },
  ar: {
    metaDescription: "AI in Education Hub of Knowledge | هونغ كونغ كمركز لـ AIED",
    nav: ["الرئيسية", "المهمة", "أخبار البحث", "حول", "القائمة", "إغلاق"],
    common: ["اللغة", "اعرف المزيد", "اقرأ ملخص 500 كلمة", "العودة إلى أخبار البحث", "أحدث أخبار البحث", "عرض الكل", "فتح الموقع", "بحث", "إعادة ضبط", "تحميل المزيد", "لا توجد أوراق تطابق عوامل التصفية الحالية.", "كل الأنواع", "كل السنوات", "النقاط الرئيسية", "لماذا يهم ذلك AIEDHK", "أوراق ذات صلة", "صفحة", "المصدر", "ملخص 500 كلمة"],
    paperTypes: ["ورقة مجلة", "ورقة مؤتمر", "مراجعة", "أداة / مجموعة بيانات", "سياسة / أخلاقيات"],
    home: ["مركز معرفة الذكاء الاصطناعي في التعليم", "هونغ كونغ كمركز AIED للبحث وابتكار المنتجات وأثر التعلم.", "AIEDHK منصة معلومات متعددة اللغات للبحث والتطوير في الذكاء الاصطناعي في التعليم. تربط ذكاء البحث العالمي بالممارسة الصفية المحلية وتجارب المنتجات والابتكار المسؤول.", "استكشف أخبار البحث", "اقرأ المهمة", "تسريع انتقال العالم إلى تعلم وتعليم مخصصين.", "مركز معرفة الذكاء الاصطناعي في التعليم", "تسريع انتقال العالم إلى تعلم وتعليم مخصصين", "ميزة المركز", "لماذا هونغ كونغ كمركز AIED؟", "يمكن لهونغ كونغ أن تربط شبكات البحث الدولية وسياقات التعليم الصينية وتطوير المنتجات السريع والتحقق المدرسي الصارم. صُممت AIEDHK كطبقة معرفة لهذا الجسر.", "الترجمة", "من البحث إلى أثر تعلم واقعي", "تحول المنصة الأوراق إلى ملخصات، والملخصات إلى رؤى تصميمية، والرؤى إلى أدوات تدعم المعلمين والمتعلمين.", ["المهمة", "استراتيجية واضحة لبناء هونغ كونغ كمركز موثوق لمعرفة ومنتجات AIED."], ["أخبار البحث", "ملخصات سهلة القراءة من 500 كلمة لأوراق مهمة في مجلات ومؤتمرات AIED."], ["حول", "سياق البحث والتطوير من Dr. Peter Hu Dongpin وPedaNova وMAIS وCAIS."], ["ذكاء البحث", "ابتكار المنتج", "تمكين المعلمين", "ذكاء اصطناعي مسؤول"]],
    mission: ["المهمة والاستراتيجية", "تسريع انتقال العالم إلى تعلم وتعليم مخصصين.", "توجد AIEDHK لتسهيل اكتشاف بحث الذكاء الاصطناعي في التعليم وتقييمه وترجمته وتطبيقه. الطموح الطويل هو مساعدة هونغ كونغ على أن تصبح مركز AIED عالي الثقة للعالم.", "الرؤية", "مستقبل يحصل فيه كل متعلم على دعم في الوقت المناسب وإنساني ومخصص، ويستخدم فيه كل معلم الذكاء الاصطناعي بمسؤولية لتوسيع حكمه المهني.", "لماذا يهم AIED", "يجمع AIED علوم التعلم والذكاء الاصطناعي والتقييم والتفاعل بين الإنسان والحاسوب والممارسة التعليمية. قيمته ليست الأتمتة فقط، بل تقديم تغذية راجعة أفضل وأدلة أفضل وتجارب تعلم أفضل.", "لماذا هونغ كونغ", "تقع هونغ كونغ بين شبكات البحث العالمية وأنظمة التعليم الصينية. يمكن أن تكون مختبرا لابتكار AIED متعدد اللغات وواع ثقافيا وجاهزا للفصل.", "خارطة الطريق", "الاستراتيجية", "ستة اتجاهات عملية توجه المنصة وخط البحث والتطوير المستقبلي."],
    research: ["أخبار البحث", "أوراق AIED ملخصة لترجمة البحث إلى منتج.", "موجز منسق لأوراق مجلات ومؤتمرات AIED. تقدم كل بطاقة نظرة موجزة، بينما تدعم صفحة التفاصيل ملخص 500 كلمة ونقاطا عملية.", "ابحث عن العنوان أو المؤلف أو الموضوع أو الكلمة المفتاحية", "أوراق", "معد لإدخال أسبوعي بمساعدة Codex: زحف الأوراق، توليد الملخصات، وسم الموضوعات، المراجعة والنشر."],
    about: ["حول", "Dr. Peter Hu Dongpin ومنظومة البحث والتطوير في AIEDHK.", "تستخدم هذه الصفحة نصا قابلا للتحرير كمثال. استبدله بسيرة وشركة وتفاصيل منتجات موثقة مع تطور المنصة.", "المسؤول", "حول Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin هو مبادر AIEDHK. يمكن لهذا القسم تقديم اهتماماته في البحث والتطوير في الذكاء الاصطناعي في التعليم، ونهجه من البحث إلى المنتج، وعمله في وصل الاحتياجات التعليمية بأنظمة ذكاء اصطناعي مسؤولة.", "تركيز البحث والتطوير AIED", ["تعلم وتعليم مخصصان", "تقييم وتغذية راجعة بمساعدة الذكاء الاصطناعي", "أدوات ذكاء اصطناعي للمعلمين", "نشر مسؤول للذكاء الاصطناعي في المدارس"], "الشركة", "تُعرض PedaNova Technology هنا كملف شركة قابل للتحرير للبحث والتطوير وابتكار المنتجات وتطبيقات تقنية التعليم في الذكاء الاصطناعي في التعليم.", "المحفظة", "المنتجات", "روابط البحث والتطوير"],
    footer: ["AIEDHK مركز معرفة متعدد اللغات للبحث والتطوير وابتكار التعلم المسؤول في الذكاء الاصطناعي في التعليم.", "التنقل", "روابط المنظومة", "© 2026 AIEDHK. جميع الحقوق محفوظة."],
    logo: ["مفاهيم الشعار", "مفاهيم الشعار", "ثلاثة اتجاهات جديدة لـ AIEDHK", "كل قفل SVG مبني حول AI in Education Hub of Knowledge، مع جسر أوضح بين التعلم والمعرفة والذكاء الاصطناعي وهونغ كونغ.", "تنزيل SVG", "توصية", "اختر Learning Circuit إذا أردت تطورا مباشرا للعلامة الحالية. اختر Harbour Hub إذا كانت رسالة هونغ كونغ كمركز هي الأهم. اختر Knowledge Compass إذا كان يجب أن تبدو العلامة أكثر أكاديمية واستشارية.", "مسار المعاينة"],
  },
  ko: {
    metaDescription: "AI in Education Hub of Knowledge | AIED 허브로서의 홍콩",
    nav: ["홈", "미션", "연구 뉴스", "소개", "메뉴", "닫기"],
    common: ["언어", "더 알아보기", "500단어 요약 읽기", "연구 뉴스로 돌아가기", "최신 연구 뉴스", "전체 보기", "웹사이트 열기", "검색", "초기화", "더 불러오기", "현재 필터와 일치하는 논문이 없습니다.", "모든 유형", "모든 연도", "핵심 내용", "AIEDHK에 중요한 이유", "관련 논문", "페이지", "출처", "500단어 요약"],
    paperTypes: ["저널 논문", "학회 논문", "리뷰", "도구 / 데이터셋", "정책 / 윤리"],
    home: ["AI 교육 지식 허브", "연구, 제품 혁신, 학습 효과를 위한 AIED 허브로서의 홍콩.", "AIEDHK는 AI 교육 R&D를 위한 다국어 정보 플랫폼입니다. 글로벌 연구 인텔리전스와 현장 수업 실천, 제품 실험, 책임 있는 혁신을 연결합니다.", "연구 뉴스 탐색", "미션 읽기", "개인화된 학습과 교수로의 전환을 가속합니다.", "AI 교육 지식 허브", "개인화된 학습과 교수로의 전환을 가속합니다", "허브의 강점", "왜 홍콩이 AIED 허브인가?", "홍콩은 국제 연구 네트워크, 중국어 교육 맥락, 민첩한 제품 개발, 엄격한 학교 기반 검증을 연결할 수 있습니다. AIEDHK는 이 다리의 지식 계층입니다.", "번역", "연구에서 실제 학습 효과로", "플랫폼은 논문을 요약으로, 요약을 디자인 인사이트로, 인사이트를 교사와 학습자를 지원하는 도구로 전환합니다.", ["미션", "홍콩을 신뢰받는 AIED 지식 및 제품 허브로 만들기 위한 명확한 전략."], ["연구 뉴스", "중요한 AIED 저널 및 학회 논문을 읽기 쉬운 500단어 요약으로 제공합니다."], ["소개", "Dr. Peter Hu Dongpin, PedaNova, MAIS, CAIS의 R&D 맥락."], ["연구 인텔리전스", "제품 혁신", "교사 역량 강화", "책임 있는 AI"]],
    mission: ["미션과 전략", "개인화된 학습과 교수로의 전환을 가속합니다.", "AIEDHK는 AI 교육 연구를 더 쉽게 발견, 평가, 번역, 적용하도록 돕습니다. 장기적 목표는 홍콩이 세계를 위한 신뢰도 높은 AIED 허브가 되도록 돕는 것입니다.", "비전", "모든 학습자가 시의적절하고 인간적이며 개인화된 지원을 받고, 모든 교사가 전문적 판단을 강화하기 위해 책임 있게 AI를 사용하는 미래.", "AIED가 중요한 이유", "AIED는 학습과학, 인공지능, 평가, 인간-컴퓨터 상호작용, 교육 실천을 결합합니다. 가치는 단순 자동화가 아니라 더 나은 피드백, 증거, 학습 경험입니다.", "왜 홍콩인가", "홍콩은 글로벌 연구 네트워크와 중국어 교육 체계 사이에 있습니다. 다국어, 문화 인식, 교실 준비형 AIED 혁신의 테스트베드가 될 수 있습니다.", "로드맵", "전략", "여섯 가지 실천 방향이 플랫폼과 미래 R&D 파이프라인을 이끕니다."],
    research: ["연구 뉴스", "연구를 제품으로 전환하기 위해 요약한 AIED 논문.", "AIED 저널과 학회 논문을 선별한 피드입니다. 각 카드는 간결한 개요를 제공하고, 상세 페이지는 500단어 요약과 실천적 시사점을 제공합니다.", "제목, 저자, 주제 또는 키워드 검색", "논문", "Codex 지원 주간 수집을 위해 준비됨: 논문 크롤링, 요약 생성, 주제 태깅, 검토 및 게시."],
    about: ["소개", "Dr. Peter Hu Dongpin과 AIEDHK R&D 생태계.", "이 페이지는 편집 가능한 자리표시자 문구로 작성되었습니다. 플랫폼이 발전하면서 검증된 약력, 회사, 제품 정보로 교체하세요.", "책임자", "Dr. Peter Hu Dongpin 소개", "Dr. Peter Hu Dongpin은 AIEDHK의 발기인입니다. 이 섹션은 AI 교육 R&D 관심사, 연구에서 제품으로 이어지는 접근, 교육 수요와 책임 있는 AI 시스템을 연결하는 작업을 소개할 수 있습니다.", "AIED R&D 초점", ["개인화된 학습과 교수", "AI 지원 평가와 피드백", "교사용 AI 도구", "학교에서의 책임 있는 AI 도입"], "회사", "PedaNova Technology는 AI 교육 연구, 개발, 제품 혁신 및 교육 기술 응용을 위한 편집 가능한 회사 프로필로 제시됩니다.", "포트폴리오", "제품", "R&D 링크"],
    footer: ["AIEDHK는 AI 교육 연구, 개발, 책임 있는 학습 혁신을 위한 다국어 지식 허브입니다.", "탐색", "생태계 링크", "© 2026 AIEDHK. 모든 권리 보유."],
    logo: ["로고 콘셉트", "로고 콘셉트", "AIEDHK를 위한 세 가지 새 방향", "각 SVG 락업은 AI in Education Hub of Knowledge를 중심으로 학습, 지식, AI, 홍콩 사이의 더 명확한 다리를 만듭니다.", "SVG 다운로드", "추천", "현재 표식의 직접적인 진화를 원한다면 Learning Circuit을 선택하세요. 홍콩 허브 메시지가 가장 중요하다면 Harbour Hub를 선택하세요. 더 학술적이고 자문적인 브랜드를 원한다면 Knowledge Compass를 선택하세요.", "미리보기 경로"],
  },
  ja: {
    metaDescription: "AI in Education Hub of Knowledge | AIEDハブとしての香港",
    nav: ["ホーム", "ミッション", "研究ニュース", "概要", "メニュー", "閉じる"],
    common: ["言語", "詳しく見る", "500語要約を読む", "研究ニュースに戻る", "最新の研究ニュース", "すべて表示", "ウェブサイトを開く", "検索", "リセット", "さらに読み込む", "現在のフィルターに一致する論文はありません。", "すべての種類", "すべての年", "重要ポイント", "AIEDHKにとって重要な理由", "関連論文", "ページ", "出典", "500語要約"],
    paperTypes: ["ジャーナル論文", "会議論文", "レビュー", "ツール / データセット", "政策 / 倫理"],
    home: ["AI教育知識ハブ", "研究、製品革新、学習インパクトのためのAIEDハブとしての香港。", "AIEDHKはAI教育R&Dのための多言語情報プラットフォームです。世界の研究インテリジェンスを、地域の授業実践、製品実験、責任ある革新と結びます。", "研究ニュースを見る", "ミッションを読む", "個別化された学習と教授への世界的移行を加速する。", "AI教育知識ハブ", "個別化された学習と教授への世界的移行を加速する", "ハブの強み", "なぜ香港がAIEDハブなのか？", "香港は国際研究ネットワーク、中国語教育文脈、俊敏な製品開発、厳密な学校ベース検証を結びつけられます。AIEDHKはその橋の知識層です。", "翻訳", "研究から現実の学習インパクトへ", "このプラットフォームは論文を要約へ、要約をデザイン洞察へ、洞察を教師と学習者を支えるツールへ変換します。", ["ミッション", "香港を信頼できるAIED知識・製品ハブにするための明確な戦略。"], ["研究ニュース", "重要なAIEDジャーナル・会議論文を読みやすい500語要約で提供。"], ["概要", "Dr. Peter Hu Dongpin、PedaNova、MAIS、CAISのR&D文脈。"], ["研究インテリジェンス", "製品革新", "教師のエンパワーメント", "責任あるAI"]],
    mission: ["ミッションと戦略", "個別化された学習と教授への世界的移行を加速する。", "AIEDHKはAI教育研究をより見つけやすく、評価しやすく、翻訳しやすく、応用しやすくします。長期的な目標は、香港が世界に信頼されるAIEDハブになることです。", "ビジョン", "すべての学習者がタイムリーで人間的かつ個別化された支援を受け、すべての教師が専門的判断を高めるために責任を持ってAIを使う未来。", "AIEDが重要な理由", "AIEDは学習科学、人工知能、評価、人間コンピュータ相互作用、教育実践を結びます。価値は自動化だけでなく、より良いフィードバック、証拠、学習体験です。", "なぜ香港か", "香港はグローバル研究ネットワークと中国語教育体系の間にあります。多言語で文化に配慮し、教室で使えるAIED革新の実験場になれます。", "ロードマップ", "戦略", "六つの実践的方向がプラットフォームと将来のR&Dパイプラインを導きます。"],
    research: ["研究ニュース", "研究から製品への転換のために要約されたAIED論文。", "AIEDジャーナル・会議論文のキュレーションフィードです。各カードは簡潔な概要を、詳細ページは500語要約と実践的示唆を提供します。", "タイトル、著者、テーマ、キーワードを検索", "論文", "Codex支援の週間取り込み用に準備：論文収集、要約生成、トピック付け、レビュー、公開。"],
    about: ["概要", "Dr. Peter Hu DongpinとAIEDHK R&Dエコシステム。", "このページは編集可能なプレースホルダー文です。プラットフォームの進化に合わせて検証済みの略歴、企業、製品情報に置き換えてください。", "責任者", "Dr. Peter Hu Dongpinについて", "Dr. Peter Hu DongpinはAIEDHKの発起人です。このセクションではAI教育R&Dへの関心、研究から製品へのアプローチ、教育ニーズと責任あるAIシステムを結ぶ仕事を紹介できます。", "AIED R&Dの焦点", ["個別化された学習と教授", "AI支援評価とフィードバック", "教師向けAIツール", "学校での責任あるAI導入"], "会社", "PedaNova Technologyは、AI教育の研究、開発、製品革新、教育技術応用のための編集可能な会社プロフィールとして示されています。", "ポートフォリオ", "製品", "R&Dリンク"],
    footer: ["AIEDHKはAI教育の研究、開発、責任ある学習革新のための多言語知識ハブです。", "ナビゲーション", "エコシステムリンク", "© 2026 AIEDHK. All rights reserved."],
    logo: ["ロゴコンセプト", "ロゴコンセプト", "AIEDHKの三つの新しい方向", "各SVGロックアップはAI in Education Hub of Knowledgeを軸に、学習、知識、AI、香港のつながりをより明確にします。", "SVGをダウンロード", "推奨", "現在のマークの直接的な進化を望むならLearning Circuitを選択。香港ハブのメッセージが最重要ならHarbour Hubを選択。より学術的で助言的な印象ならKnowledge Compassを選択。", "プレビューパス"],
  },
  hi: {
    metaDescription: "AI in Education Hub of Knowledge | AIED केंद्र के रूप में हांगकांग",
    nav: ["होम", "मिशन", "शोध समाचार", "परिचय", "मेनू", "बंद करें"],
    common: ["भाषा", "और जानें", "500-शब्द सार पढ़ें", "शोध समाचार पर लौटें", "नवीनतम शोध समाचार", "सभी देखें", "वेबसाइट खोलें", "खोजें", "रीसेट", "और लोड करें", "मौजूदा फिल्टर से कोई पेपर मेल नहीं खाता।", "सभी प्रकार", "सभी वर्ष", "मुख्य बिंदु", "AIEDHK के लिए यह क्यों महत्वपूर्ण है", "संबंधित पेपर", "पृष्ठ", "स्रोत", "500-शब्द सार"],
    paperTypes: ["जर्नल पेपर", "कॉन्फ्रेंस पेपर", "समीक्षा", "टूल / डेटासेट", "नीति / नैतिकता"],
    home: ["शिक्षा में AI ज्ञान केंद्र", "शोध, उत्पाद नवाचार और सीखने के प्रभाव के लिए AIED केंद्र के रूप में हांगकांग।", "AIEDHK शिक्षा में AI R&D के लिए बहुभाषी सूचना मंच है। यह वैश्विक शोध बुद्धिमत्ता को स्थानीय कक्षा अभ्यास, उत्पाद प्रयोग और जिम्मेदार नवाचार से जोड़ता है।", "शोध समाचार देखें", "मिशन पढ़ें", "व्यक्तिगत सीखने और शिक्षण की ओर दुनिया के संक्रमण को तेज करना।", "शिक्षा में AI ज्ञान केंद्र", "व्यक्तिगत सीखने और शिक्षण की ओर दुनिया के संक्रमण को तेज करना", "केंद्र की बढ़त", "AIED केंद्र के रूप में हांगकांग क्यों?", "हांगकांग अंतरराष्ट्रीय शोध नेटवर्क, चीनी-भाषी शिक्षा संदर्भ, तेज उत्पाद विकास और कठोर स्कूल-आधारित सत्यापन को जोड़ सकता है। AIEDHK इस पुल की ज्ञान परत है।", "अनुवाद", "शोध से वास्तविक सीखने के प्रभाव तक", "मंच पेपर को सार में, सार को डिजाइन अंतर्दृष्टि में और अंतर्दृष्टि को शिक्षक व शिक्षार्थी सहायता उपकरणों में बदलता है।", ["मिशन", "हांगकांग को विश्वसनीय AIED ज्ञान और उत्पाद केंद्र बनाने की स्पष्ट रणनीति।"], ["शोध समाचार", "महत्वपूर्ण AIED जर्नल और सम्मेलन पेपरों के पढ़ने योग्य 500-शब्द सार।"], ["परिचय", "Dr. Peter Hu Dongpin, PedaNova, MAIS और CAIS का R&D संदर्भ।"], ["शोध बुद्धिमत्ता", "उत्पाद नवाचार", "शिक्षक सशक्तीकरण", "जिम्मेदार AI"]],
    mission: ["मिशन और रणनीति", "व्यक्तिगत सीखने और शिक्षण की ओर दुनिया के संक्रमण को तेज करना।", "AIEDHK शिक्षा में AI शोध को खोजने, मूल्यांकन करने, अनुवादित करने और लागू करने को आसान बनाता है। दीर्घकालिक लक्ष्य हांगकांग को दुनिया के लिए उच्च-विश्वास AIED केंद्र बनाना है।", "दृष्टि", "ऐसा भविष्य जहां हर शिक्षार्थी को समय पर, मानवीय और व्यक्तिगत समर्थन मिले, और हर शिक्षक जिम्मेदारी से AI का उपयोग कर पेशेवर निर्णय को बढ़ा सके।", "AIED क्यों महत्वपूर्ण है", "AIED सीखने के विज्ञान, कृत्रिम बुद्धिमत्ता, मूल्यांकन, मानव-कंप्यूटर अंतःक्रिया और शैक्षिक अभ्यास को जोड़ता है। इसका मूल्य केवल स्वचालन नहीं, बल्कि बेहतर प्रतिक्रिया, प्रमाण और सीखने के अनुभव हैं।", "हांगकांग क्यों", "हांगकांग वैश्विक शोध नेटवर्क और चीनी-भाषी शिक्षा प्रणालियों के बीच स्थित है। यह बहुभाषी, सांस्कृतिक रूप से सजग और कक्षा-तैयार AIED नवाचार का परीक्षण स्थल बन सकता है।", "रोडमैप", "रणनीति", "छह व्यावहारिक दिशाएँ मंच और भविष्य की R&D पाइपलाइन का मार्गदर्शन करती हैं।"],
    research: ["शोध समाचार", "शोध-से-उत्पाद अनुवाद के लिए सारांशित AIED पेपर।", "AIED जर्नल और सम्मेलन पेपरों की चुनी हुई धारा। प्रत्येक कार्ड संक्षिप्त अवलोकन देता है, और विवरण पृष्ठ 500-शब्द सार व व्यावहारिक बिंदु देता है।", "शीर्षक, लेखक, विषय या कीवर्ड खोजें", "पेपर", "Codex-सहायता प्राप्त साप्ताहिक इनजेशन के लिए तैयार: पेपर क्रॉल करें, सार बनाएं, विषय टैग करें, समीक्षा करें और प्रकाशित करें।"],
    about: ["परिचय", "Dr. Peter Hu Dongpin और AIEDHK R&D पारिस्थितिकी तंत्र।", "यह पृष्ठ संपादन योग्य प्लेसहोल्डर पाठ से लिखा गया है। मंच के विकसित होने पर इसे सत्यापित जीवनी, कंपनी और उत्पाद विवरण से बदलें।", "प्रधान", "Dr. Peter Hu Dongpin के बारे में", "Dr. Peter Hu Dongpin AIEDHK के आरंभकर्ता हैं। यह अनुभाग शिक्षा में AI R&D रुचियों, शोध-से-उत्पाद दृष्टिकोण और शिक्षा आवश्यकताओं को जिम्मेदार AI प्रणालियों से जोड़ने के कार्य को प्रस्तुत कर सकता है।", "AIED R&D फोकस", ["व्यक्तिगत सीखना और शिक्षण", "AI-सहायता प्राप्त मूल्यांकन और प्रतिक्रिया", "शिक्षक-केंद्रित AI उपकरण", "स्कूलों में AI का जिम्मेदार उपयोग"], "कंपनी", "PedaNova Technology को यहाँ शिक्षा में AI शोध, विकास, उत्पाद नवाचार और शिक्षा-तकनीक अनुप्रयोगों के लिए संपादन योग्य कंपनी प्रोफाइल के रूप में प्रस्तुत किया गया है।", "पोर्टफोलियो", "उत्पाद", "R&D लिंक"],
    footer: ["AIEDHK शिक्षा में AI शोध, विकास और जिम्मेदार सीखने के नवाचार के लिए बहुभाषी ज्ञान केंद्र है।", "नेविगेशन", "इकोसिस्टम लिंक", "© 2026 AIEDHK. सर्वाधिकार सुरक्षित."],
    logo: ["लोगो अवधारणाएँ", "लोगो अवधारणाएँ", "AIEDHK के लिए तीन नई दिशाएँ", "प्रत्येक SVG लॉकअप AI in Education Hub of Knowledge पर आधारित है, जो सीखने, ज्ञान, AI और हांगकांग के बीच स्पष्ट पुल बनाता है।", "SVG डाउनलोड करें", "सिफारिश", "यदि आप मौजूदा चिह्न का सीधा विकास चाहते हैं तो Learning Circuit चुनें। यदि हांगकांग केंद्र संदेश सबसे महत्वपूर्ण है तो Harbour Hub चुनें। यदि ब्रांड अधिक अकादमिक और सलाहकारी लगे तो Knowledge Compass चुनें।", "पूर्वावलोकन पथ"],
  },
  ru: {
    metaDescription: "AI in Education Hub of Knowledge | Гонконг как центр AIED",
    nav: ["Главная", "Миссия", "Новости исследований", "О проекте", "Меню", "Закрыть"],
    common: ["Язык", "Узнать больше", "Читать резюме на 500 слов", "Назад к новостям исследований", "Последние новости исследований", "Смотреть все", "Открыть сайт", "Поиск", "Сбросить", "Загрузить еще", "Нет статей, соответствующих текущим фильтрам.", "Все типы", "Все годы", "Ключевые выводы", "Почему это важно для AIEDHK", "Связанные статьи", "Страница", "Источник", "Резюме на 500 слов"],
    paperTypes: ["Журнальная статья", "Конференционная статья", "Обзор", "Инструмент / набор данных", "Политика / этика"],
    home: ["Центр знаний ИИ в образовании", "Гонконг как центр AIED для исследований, продуктовых инноваций и влияния на обучение.", "AIEDHK — многоязычная информационная платформа для R&D в области ИИ в образовании. Она связывает глобальную исследовательскую аналитику с местной практикой классов, продуктовыми экспериментами и ответственными инновациями.", "Изучить новости исследований", "Прочитать миссию", "Ускорить переход мира к персонализированному обучению и преподаванию.", "Центр знаний ИИ в образовании", "Ускорить переход мира к персонализированному обучению и преподаванию", "Преимущество хаба", "Почему Гонконг как центр AIED?", "Гонконг может соединять международные исследовательские сети, китайскоязычные образовательные контексты, гибкую разработку продуктов и строгую школьную проверку. AIEDHK задуман как слой знаний для этого моста.", "Перевод", "От исследований к реальному влиянию на обучение", "Платформа превращает статьи в резюме, резюме в дизайн-инсайты, а инсайты в инструменты поддержки учителей и учащихся.", ["Миссия", "Четкая стратегия превращения Гонконга в надежный центр знаний и продуктов AIED."], ["Новости исследований", "Понятные 500-словные резюме важных журнальных и конференционных статей AIED."], ["О проекте", "R&D-контекст Dr. Peter Hu Dongpin, PedaNova, MAIS и CAIS."], ["Исследовательская аналитика", "Продуктовые инновации", "Поддержка учителей", "Ответственный ИИ"]],
    mission: ["Миссия и стратегия", "Ускорить переход мира к персонализированному обучению и преподаванию.", "AIEDHK помогает легче находить, оценивать, переводить и применять исследования по ИИ в образовании. Долгосрочная цель — помочь Гонконгу стать высокодоверенным центром AIED для мира.", "Видение", "Будущее, где каждый учащийся получает своевременную, человечную и персонализированную поддержку, а каждый учитель ответственно использует ИИ для усиления профессионального суждения.", "Почему AIED важен", "AIED объединяет науки об обучении, искусственный интеллект, оценивание, человеко-компьютерное взаимодействие и образовательную практику. Его ценность не только в автоматизации, а в лучшей обратной связи, доказательствах и опыте обучения.", "Почему Гонконг", "Гонконг находится между глобальными исследовательскими сетями и китайскоязычными образовательными системами. Он может стать полигоном многоязычных, культурно осознанных и готовых для класса инноваций AIED.", "Дорожная карта", "Стратегия", "Шесть практических направлений ведут платформу и будущий R&D-пайплайн."],
    research: ["Новости исследований", "Статьи AIED, кратко изложенные для перевода исследований в продукты.", "Кураторская лента журнальных и конференционных статей AIED. Каждая карточка дает краткий обзор, а страница деталей — резюме на 500 слов и практические выводы.", "Искать название, автора, тему или ключевое слово", "статей", "Подготовлено для еженедельной загрузки с помощью Codex: сбор статей, генерация резюме, тегирование тем, проверка и публикация."],
    about: ["О проекте", "Dr. Peter Hu Dongpin и R&D-экосистема AIEDHK.", "Эта страница содержит редактируемый placeholder-текст. По мере развития платформы замените его проверенной биографией, данными компании и продуктами.", "Руководитель", "О Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin — инициатор AIEDHK. Этот раздел может представить его интересы R&D в ИИ-образовании, подход research-to-product и работу по соединению образовательных потребностей с ответственными ИИ-системами.", "Фокус R&D AIED", ["Персонализированное обучение и преподавание", "Оценивание и обратная связь с помощью ИИ", "ИИ-инструменты для учителей", "Ответственное внедрение ИИ в школах"], "Компания", "PedaNova Technology представлена здесь как редактируемый профиль компании для исследований, разработки, продуктовых инноваций и EdTech-приложений в ИИ-образовании.", "Портфолио", "Продукты", "R&D-ссылки"],
    footer: ["AIEDHK — многоязычный центр знаний для исследований, разработки и ответственных инноваций обучения с ИИ в образовании.", "Навигация", "Ссылки экосистемы", "© 2026 AIEDHK. Все права защищены."],
    logo: ["Концепции логотипа", "Концепции логотипа", "Три новых направления для AIEDHK", "Каждый SVG-локап построен вокруг AI in Education Hub of Knowledge и яснее связывает обучение, знания, ИИ и Гонконг.", "Скачать SVG", "Рекомендация", "Выберите Learning Circuit для прямой эволюции текущего знака. Выберите Harbour Hub, если главное — сообщение о Гонконге как хабе. Выберите Knowledge Compass, если бренд должен звучать более академично и консультационно.", "Путь предпросмотра"],
  },
  id: {
    metaDescription: "AI in Education Hub of Knowledge | Hong Kong sebagai pusat AIED",
    nav: ["Beranda", "Misi", "Berita Riset", "Tentang", "Menu", "Tutup"],
    common: ["Bahasa", "Pelajari lebih lanjut", "Baca ringkasan 500 kata", "Kembali ke Berita Riset", "Berita Riset terbaru", "Lihat semua", "Buka situs web", "Cari", "Atur ulang", "Muat lagi", "Tidak ada makalah yang cocok dengan filter saat ini.", "Semua jenis", "Semua tahun", "Poin utama", "Mengapa penting bagi AIEDHK", "Makalah terkait", "Halaman", "Sumber", "Ringkasan 500 kata"],
    paperTypes: ["Makalah jurnal", "Makalah konferensi", "Tinjauan", "Alat / dataset", "Kebijakan / etika"],
    home: ["Pusat pengetahuan AI dalam pendidikan", "Hong Kong sebagai pusat AIED untuk riset, inovasi produk, dan dampak pembelajaran.", "AIEDHK adalah platform informasi multibahasa untuk R&D AI dalam pendidikan. Platform ini menghubungkan intelijen riset global dengan praktik kelas lokal, eksperimen produk, dan inovasi bertanggung jawab.", "Jelajahi Berita Riset", "Baca Misi", "Mempercepat transisi dunia menuju pembelajaran dan pengajaran yang dipersonalisasi.", "Pusat pengetahuan AI dalam pendidikan", "Mempercepat transisi dunia menuju pembelajaran dan pengajaran yang dipersonalisasi", "Keunggulan pusat", "Mengapa Hong Kong sebagai pusat AIED?", "Hong Kong dapat menjembatani jaringan riset internasional, konteks pendidikan berbahasa Tionghoa, pengembangan produk yang tangkas, dan validasi berbasis sekolah yang ketat. AIEDHK dirancang sebagai lapisan pengetahuan untuk jembatan itu.", "Terjemahan", "Dari riset menuju dampak pembelajaran nyata", "Platform ini mengubah makalah menjadi ringkasan, ringkasan menjadi wawasan desain, dan wawasan menjadi alat yang mendukung guru dan pelajar.", ["Misi", "Strategi jelas untuk membangun Hong Kong menjadi pusat pengetahuan dan produk AIED yang tepercaya."], ["Berita Riset", "Ringkasan 500 kata yang mudah dibaca dari makalah jurnal dan konferensi AIED penting."], ["Tentang", "Konteks R&D dari Dr. Peter Hu Dongpin, PedaNova, MAIS, dan CAIS."], ["Intelijen riset", "Inovasi produk", "Pemberdayaan guru", "AI bertanggung jawab"]],
    mission: ["Misi & Strategi", "Mempercepat transisi dunia menuju pembelajaran dan pengajaran yang dipersonalisasi.", "AIEDHK hadir untuk membuat riset AI dalam pendidikan lebih mudah ditemukan, dievaluasi, diterjemahkan, dan diterapkan. Ambisi jangka panjangnya adalah membantu Hong Kong menjadi pusat AIED yang sangat tepercaya bagi dunia.", "Visi", "Masa depan ketika setiap pelajar menerima dukungan tepat waktu, manusiawi, dan personal, dan setiap guru menggunakan AI secara bertanggung jawab untuk memperkuat penilaian profesional.", "Mengapa AIED penting", "AIED menyatukan ilmu pembelajaran, kecerdasan buatan, asesmen, interaksi manusia-komputer, dan praktik pendidikan. Nilainya bukan sekadar otomatisasi, melainkan umpan balik, bukti, dan pengalaman belajar yang lebih baik.", "Mengapa Hong Kong", "Hong Kong berada di antara jaringan riset global dan sistem pendidikan berbahasa Tionghoa. Ini dapat menjadi tempat uji inovasi AIED yang multibahasa, peka budaya, dan siap untuk kelas.", "Peta jalan", "Strategi", "Enam arah praktis memandu platform dan pipeline R&D masa depan."],
    research: ["Berita Riset", "Makalah AIED diringkas untuk menerjemahkan riset menjadi produk.", "Umpan pilihan makalah jurnal dan konferensi AIED. Setiap kartu dirancang untuk gambaran singkat, sementara halaman detail mendukung ringkasan 500 kata dan poin praktis.", "Cari judul, penulis, topik, atau kata kunci", "makalah", "Disiapkan untuk ingest mingguan berbantuan Codex: merayapi makalah, membuat ringkasan, memberi tag topik, meninjau, dan menerbitkan."],
    about: ["Tentang", "Dr. Peter Hu Dongpin dan ekosistem R&D AIEDHK.", "Halaman ini menggunakan teks placeholder yang dapat diedit. Ganti dengan biografi, perusahaan, dan detail produk terverifikasi saat platform berkembang.", "Prinsipal", "Tentang Dr. Peter Hu Dongpin", "Dr. Peter Hu Dongpin adalah penggagas AIEDHK. Bagian ini dapat memperkenalkan minat R&D AI dalam pendidikan, pendekatan riset-ke-produk, dan kerja menghubungkan kebutuhan pendidikan dengan sistem AI bertanggung jawab.", "Fokus R&D AIED", ["Pembelajaran dan pengajaran personal", "Asesmen dan umpan balik berbantuan AI", "Alat AI untuk guru", "Penerapan AI yang bertanggung jawab di sekolah"], "Perusahaan", "PedaNova Technology ditampilkan di sini sebagai profil perusahaan yang dapat diedit untuk riset, pengembangan, inovasi produk, dan aplikasi teknologi pendidikan AI dalam pendidikan.", "Portofolio", "Produk", "Tautan R&D"],
    footer: ["AIEDHK adalah pusat pengetahuan multibahasa untuk riset, pengembangan, dan inovasi pembelajaran bertanggung jawab dengan AI dalam pendidikan.", "Navigasi", "Tautan ekosistem", "© 2026 AIEDHK. Semua hak dilindungi."],
    logo: ["Konsep logo", "Konsep logo", "Tiga arah baru untuk AIEDHK", "Setiap lockup SVG dibangun di sekitar AI in Education Hub of Knowledge, dengan jembatan yang lebih jelas antara pembelajaran, pengetahuan, AI, dan Hong Kong.", "Unduh SVG", "Rekomendasi", "Pilih Learning Circuit jika Anda ingin evolusi langsung dari tanda saat ini. Pilih Harbour Hub jika pesan Hong Kong sebagai pusat paling penting. Pilih Knowledge Compass jika merek perlu terasa lebih akademis dan konsultatif.", "Jalur pratinjau"],
  },
  bn: {
    metaDescription: "AI in Education Hub of Knowledge | AIED হাব হিসেবে হংকং",
    nav: ["হোম", "মিশন", "গবেষণা সংবাদ", "পরিচিতি", "মেনু", "বন্ধ করুন"],
    common: ["ভাষা", "আরও জানুন", "৫০০-শব্দের সারাংশ পড়ুন", "গবেষণা সংবাদে ফিরুন", "সর্বশেষ গবেষণা সংবাদ", "সব দেখুন", "ওয়েবসাইট খুলুন", "অনুসন্ধান", "রিসেট", "আরও লোড করুন", "বর্তমান ফিল্টারের সঙ্গে কোনো পেপার মেলেনি।", "সব ধরন", "সব বছর", "মূল বক্তব্য", "AIEDHK-এর জন্য কেন গুরুত্বপূর্ণ", "সম্পর্কিত পেপার", "পৃষ্ঠা", "উৎস", "৫০০-শব্দের সারাংশ"],
    paperTypes: ["জার্নাল পেপার", "কনফারেন্স পেপার", "রিভিউ", "টুল / ডেটাসেট", "নীতি / নৈতিকতা"],
    home: ["শিক্ষায় AI জ্ঞান হাব", "গবেষণা, পণ্য উদ্ভাবন ও শেখার প্রভাবের জন্য AIED হাব হিসেবে হংকং।", "AIEDHK শিক্ষায় AI R&D-এর জন্য বহুভাষিক তথ্য প্ল্যাটফর্ম। এটি বৈশ্বিক গবেষণা বুদ্ধিমত্তাকে স্থানীয় শ্রেণিকক্ষ অনুশীলন, পণ্য পরীক্ষা এবং দায়িত্বশীল উদ্ভাবনের সঙ্গে যুক্ত করে।", "গবেষণা সংবাদ দেখুন", "মিশন পড়ুন", "ব্যক্তিকৃত শেখা ও শিক্ষাদানের দিকে বিশ্বের রূপান্তর ত্বরান্বিত করা।", "শিক্ষায় AI জ্ঞান হাব", "ব্যক্তিকৃত শেখা ও শিক্ষাদানের দিকে বিশ্বের রূপান্তর ত্বরান্বিত করা", "হাবের সুবিধা", "AIED হাব হিসেবে হংকং কেন?", "হংকং আন্তর্জাতিক গবেষণা নেটওয়ার্ক, চীনা-ভাষার শিক্ষা প্রেক্ষাপট, দ্রুত পণ্য উন্নয়ন এবং কঠোর স্কুলভিত্তিক যাচাইকে সংযুক্ত করতে পারে। AIEDHK সেই সেতুর জ্ঞান স্তর।", "অনুবাদ", "গবেষণা থেকে বাস্তব শেখার প্রভাব", "প্ল্যাটফর্মটি পেপারকে সারাংশে, সারাংশকে ডিজাইন অন্তর্দৃষ্টিতে এবং অন্তর্দৃষ্টিকে শিক্ষক ও শিক্ষার্থীদের সহায়তাকারী টুলে রূপান্তর করে।", ["মিশন", "হংকংকে বিশ্বস্ত AIED জ্ঞান ও পণ্য হাবে গড়ার পরিষ্কার কৌশল।"], ["গবেষণা সংবাদ", "গুরুত্বপূর্ণ AIED জার্নাল ও কনফারেন্স পেপারের সহজপাঠ্য ৫০০-শব্দের সারাংশ।"], ["পরিচিতি", "Dr. Peter Hu Dongpin, PedaNova, MAIS এবং CAIS-এর R&D প্রেক্ষাপট।"], ["গবেষণা বুদ্ধিমত্তা", "পণ্য উদ্ভাবন", "শিক্ষক ক্ষমতায়ন", "দায়িত্বশীল AI"]],
    mission: ["মিশন ও কৌশল", "ব্যক্তিকৃত শেখা ও শিক্ষাদানের দিকে বিশ্বের রূপান্তর ত্বরান্বিত করা।", "AIEDHK শিক্ষায় AI গবেষণা খুঁজে পাওয়া, মূল্যায়ন, অনুবাদ ও প্রয়োগ সহজ করতে কাজ করে। দীর্ঘমেয়াদি লক্ষ্য হলো হংকংকে বিশ্বের জন্য উচ্চ-আস্থার AIED হাব হতে সহায়তা করা।", "দৃষ্টি", "এমন ভবিষ্যৎ যেখানে প্রতিটি শিক্ষার্থী সময়োপযোগী, মানবিক ও ব্যক্তিকৃত সহায়তা পায়, এবং প্রতিটি শিক্ষক পেশাগত বিচারশক্তি বাড়াতে দায়িত্বশীলভাবে AI ব্যবহার করেন।", "AIED কেন গুরুত্বপূর্ণ", "AIED শেখার বিজ্ঞান, কৃত্রিম বুদ্ধিমত্তা, মূল্যায়ন, মানব-কম্পিউটার মিথস্ক্রিয়া এবং শিক্ষা অনুশীলনকে একত্র করে। এর মূল্য শুধু স্বয়ংক্রিয়তা নয়; আরও ভালো প্রতিক্রিয়া, প্রমাণ ও শেখার অভিজ্ঞতা।", "হংকং কেন", "হংকং বৈশ্বিক গবেষণা নেটওয়ার্ক ও চীনা-ভাষার শিক্ষা ব্যবস্থার মাঝখানে। এটি বহুভাষিক, সংস্কৃতিসচেতন ও শ্রেণিকক্ষ-প্রস্তুত AIED উদ্ভাবনের পরীক্ষাক্ষেত্র হতে পারে।", "রোডম্যাপ", "কৌশল", "ছয়টি ব্যবহারিক দিকনির্দেশ প্ল্যাটফর্ম ও ভবিষ্যৎ R&D পাইপলাইনকে পথ দেখায়।"],
    research: ["গবেষণা সংবাদ", "গবেষণা থেকে পণ্যে রূপান্তরের জন্য সংক্ষেপিত AIED পেপার।", "AIED জার্নাল ও কনফারেন্স পেপারের নির্বাচিত ফিড। প্রতিটি কার্ড সংক্ষিপ্ত ধারণা দেয়, আর বিস্তারিত পৃষ্ঠা ৫০০-শব্দের সারাংশ ও ব্যবহারিক বক্তব্য দেয়।", "শিরোনাম, লেখক, বিষয় বা কীওয়ার্ড অনুসন্ধান করুন", "পেপার", "Codex-সহায়তায় সাপ্তাহিক ইনজেশনের জন্য প্রস্তুত: পেপার ক্রল, সারাংশ তৈরি, বিষয় ট্যাগ, পর্যালোচনা ও প্রকাশ।"],
    about: ["পরিচিতি", "Dr. Peter Hu Dongpin এবং AIEDHK R&D ইকোসিস্টেম।", "এই পৃষ্ঠায় সম্পাদনযোগ্য প্লেসহোল্ডার লেখা আছে। প্ল্যাটফর্ম বাড়ার সঙ্গে সঙ্গে যাচাইকৃত জীবনী, কোম্পানি ও পণ্যের তথ্য দিয়ে বদলান।", "প্রধান", "Dr. Peter Hu Dongpin সম্পর্কে", "Dr. Peter Hu Dongpin AIEDHK-এর প্রবর্তক। এই অংশে শিক্ষায় AI R&D আগ্রহ, গবেষণা-থেকে-পণ্য পদ্ধতি এবং শিক্ষা চাহিদাকে দায়িত্বশীল AI সিস্টেমের সঙ্গে যুক্ত করার কাজ তুলে ধরা যেতে পারে।", "AIED R&D ফোকাস", ["ব্যক্তিকৃত শেখা ও শিক্ষাদান", "AI-সহায়তায় মূল্যায়ন ও প্রতিক্রিয়া", "শিক্ষকমুখী AI টুল", "স্কুলে দায়িত্বশীল AI বাস্তবায়ন"], "কোম্পানি", "PedaNova Technology এখানে শিক্ষায় AI গবেষণা, উন্নয়ন, পণ্য উদ্ভাবন ও শিক্ষা প্রযুক্তি প্রয়োগের জন্য সম্পাদনযোগ্য কোম্পানি প্রোফাইল হিসেবে দেওয়া হয়েছে।", "পোর্টফোলিও", "পণ্য", "R&D লিংক"],
    footer: ["AIEDHK শিক্ষায় AI গবেষণা, উন্নয়ন এবং দায়িত্বশীল শেখার উদ্ভাবনের জন্য বহুভাষিক জ্ঞান হাব।", "নেভিগেশন", "ইকোসিস্টেম লিংক", "© 2026 AIEDHK. সর্বস্বত্ব সংরক্ষিত."],
    logo: ["লোগো ধারণা", "লোগো ধারণা", "AIEDHK-এর জন্য তিনটি নতুন দিক", "প্রতিটি SVG লকআপ AI in Education Hub of Knowledge ঘিরে তৈরি, যেখানে শেখা, জ্ঞান, AI ও হংকংয়ের মধ্যে স্পষ্ট সেতু আছে।", "SVG ডাউনলোড", "সুপারিশ", "বর্তমান চিহ্নের সরাসরি বিবর্তন চাইলে Learning Circuit বেছে নিন। হংকং হাব বার্তা সবচেয়ে গুরুত্বপূর্ণ হলে Harbour Hub বেছে নিন। ব্র্যান্ডকে আরও একাডেমিক ও পরামর্শমূলক লাগতে চাইলে Knowledge Compass বেছে নিন।", "প্রিভিউ পথ"],
  },
};

function localizedBase(input: LocalizedBaseInput): LocalizedBaseCopy {
  const strategies = strategyTranslations[input.nav[0]] ?? strategyTranslations.default;
  const concepts = logoConceptTranslations[input.nav[0]] ?? logoConceptTranslations.default;
  return {
    metaDescription: input.metaDescription,
    nav: { home: input.nav[0], mission: input.nav[1], researchNews: input.nav[2], about: input.nav[3], menu: input.nav[4], close: input.nav[5] },
    common: {
      language: input.common[0],
      learnMore: input.common[1],
      readSummary: input.common[2],
      backToResearch: input.common[3],
      latestResearch: input.common[4],
      viewAll: input.common[5],
      externalLink: input.common[6],
      search: input.common[7],
      reset: input.common[8],
      loadMore: input.common[9],
      noResults: input.common[10],
      allTypes: input.common[11],
      allYears: input.common[12],
      keyTakeaways: input.common[13],
      whyItMatters: input.common[14],
      relatedPapers: input.common[15],
      page: input.common[16],
      source: input.common[17],
      summaryHeading: input.common[18],
    },
    paperTypes: { journal: input.paperTypes[0], conference: input.paperTypes[1], review: input.paperTypes[2], "tool-dataset": input.paperTypes[3], "policy-ethics": input.paperTypes[4] },
    home: {
      eyebrow: input.home[0],
      heroTitle: input.home[1],
      heroText: input.home[2],
      primaryCta: input.home[3],
      secondaryCta: input.home[4],
      missionStatement: input.home[5],
      showcaseTitle: input.home[6],
      showcaseText: input.home[7],
      hubAdvantage: input.home[8],
      whyTitle: input.home[9],
      whyText: input.home[10],
      translationLabel: input.home[11],
      impactTitle: input.home[12],
      impactText: input.home[13],
      cards: [
        { title: input.home[14][0], text: input.home[14][1] },
        { title: input.home[15][0], text: input.home[15][1] },
        { title: input.home[16][0], text: input.home[16][1] },
      ],
      pillars: input.home[17],
    },
    mission: {
      eyebrow: input.mission[0],
      title: input.mission[1],
      intro: input.mission[2],
      visionTitle: input.mission[3],
      visionText: input.mission[4],
      whyAiedTitle: input.mission[5],
      whyAiedText: input.mission[6],
      whyHongKongTitle: input.mission[7],
      whyHongKongText: input.mission[8],
      roadmapEyebrow: input.mission[9],
      strategyTitle: input.mission[10],
      strategyIntro: input.mission[11],
      strategies,
    },
    research: {
      eyebrow: input.research[0],
      title: input.research[1],
      intro: input.research[2],
      searchPlaceholder: input.research[3],
      resultCount: input.research[4],
      ingestionNote: input.research[5],
      newsletter: localizedNewsletterCopy[input.nav[0]] ?? localizedNewsletterCopy.default,
    },
    about: {
      eyebrow: input.about[0],
      title: input.about[1],
      intro: input.about[2],
      principalLabel: input.about[3],
      personTitle: input.about[4],
      personText: input.about[5],
      focusTitle: input.about[6],
      focusItems: input.about[7],
      companyTitle: input.about[8],
      companyText: input.about[9],
      portfolioLabel: input.about[10],
      productsTitle: input.about[11],
      products: [
        { name: "MAIS", text: localizedProductText[input.nav[0]] ?? localizedProductText.default },
        { name: "CAIS", text: localizedProductText[input.nav[0]] ?? localizedProductText.default },
        { name: "UAIS", text: "University Adaptive Interactive System" },
      ],
      linksTitle: input.about[12],
      placeholderNote: input.about[2],
    },
    logoConcepts: {
      metaTitle: input.logo[0],
      eyebrow: input.logo[1],
      title: input.logo[2],
      intro: input.logo[3],
      download: input.logo[4],
      recommendationTitle: input.logo[5],
      recommendationText: input.logo[6],
      previewPath: input.logo[7],
      concepts,
    },
    footer: { description: input.footer[0], navigation: input.footer[1], ecosystem: input.footer[2], copyright: input.footer[3] },
  };
}

const strategyTranslations: Record<string, BaseDictionary["mission"]["strategies"]> = {
  default: enDictionary.mission.strategies,
  Accueil: [
    { title: "Intelligence recherche", text: "Suivre les revues et conférences AIED, et résumer méthodes, jeux de données, tendances et scénarios." },
    { title: "Innovation produit", text: "Transformer les résultats de recherche en produits, prototypes et outils pédagogiques testables en contexte réel." },
    { title: "Autonomisation enseignante", text: "Aider les enseignants à comprendre, évaluer et utiliser les outils d'IA éducative avec confiance." },
    { title: "Apprentissage centré apprenant", text: "Faire progresser personnalisation, feedback formatif, soutien à l'évaluation et bien-être." },
    { title: "Pont global-local", text: "Relier la recherche AIED mondiale aux pratiques de Hong Kong, de la Grande Chine et de l'Asie." },
    { title: "IA éthique et responsable", text: "Promouvoir équité, confidentialité, sécurité, transparence et valeur éducative comme principes par défaut." },
  ],
  Início: [
    { title: "Inteligência de pesquisa", text: "Acompanhar periódicos e conferências AIED, resumindo métodos, datasets, tendências e cenários." },
    { title: "Inovação de produto", text: "Transformar achados de pesquisa em produtos, protótipos e ferramentas docentes testáveis em contextos reais." },
    { title: "Empoderamento docente", text: "Ajudar professores a entender, avaliar e usar ferramentas de IA educacional com confiança." },
    { title: "Aprendizagem centrada no estudante", text: "Avançar aprendizagem personalizada, feedback formativo, suporte à avaliação e bem-estar." },
    { title: "Ponte global-local", text: "Conectar pesquisa AIED global com práticas de Hong Kong, Grande China e Ásia." },
    { title: "IA ética e responsável", text: "Promover equidade, privacidade, segurança, transparência e valor educacional como princípios padrão." },
  ],
  Start: [
    { title: "Forschungsintelligenz", text: "AIED-Zeitschriften und Konferenzen verfolgen und Methoden, Datensätze, Trends und Anwendungen zusammenfassen." },
    { title: "Produktinnovation", text: "Forschungsergebnisse in Bildungsprodukte, Prototypen und Unterrichtswerkzeuge für reale Tests übersetzen." },
    { title: "Lehrkräfte stärken", text: "Lehrkräfte befähigen, KI-Bildungstools sicher zu verstehen, zu bewerten und einzusetzen." },
    { title: "Lernende im Zentrum", text: "Personalisiertes Lernen, formatives Feedback, Bewertungsunterstützung und Wohlbefinden fördern." },
    { title: "Global-lokale Brücke", text: "Globale AIED-Forschung mit Bildungspraxis in Hongkong, Greater China und Asien verbinden." },
    { title: "Ethische und verantwortliche KI", text: "Fairness, Datenschutz, Sicherheit, Transparenz und Bildungswert als Standardprinzipien fördern." },
  ],
  الرئيسية: [
    { title: "ذكاء البحث", text: "متابعة مجلات ومؤتمرات AIED وتلخيص الأساليب ومجموعات البيانات والاتجاهات والتطبيقات." },
    { title: "ابتكار المنتج", text: "ترجمة نتائج البحث إلى منتجات تعليمية ونماذج وأدوات تدريس قابلة للاختبار في الواقع." },
    { title: "تمكين المعلمين", text: "مساعدة المعلمين على فهم أدوات الذكاء الاصطناعي التعليمية وتقييمها واستخدامها بثقة." },
    { title: "تعلم يتمحور حول الطالب", text: "تعزيز التعلم الشخصي والتغذية الراجعة التكوينية ودعم التقييم ورفاه المتعلم." },
    { title: "جسر عالمي-محلي", text: "ربط بحث AIED العالمي بممارسات هونغ كونغ والصين الكبرى وآسيا التعليمية." },
    { title: "ذكاء اصطناعي أخلاقي ومسؤول", text: "تعزيز الإنصاف والخصوصية والسلامة والشفافية والقيمة التعليمية كمبادئ افتراضية." },
  ],
  홈: [
    { title: "연구 인텔리전스", text: "AIED 저널과 학회를 추적하고 방법, 데이터셋, 동향, 적용 장면을 요약합니다." },
    { title: "제품 혁신", text: "연구 결과를 실제 환경에서 시험할 교육 제품, 프로토타입, 교수 도구로 전환합니다." },
    { title: "교사 역량 강화", text: "교사가 AI 교육 도구를 이해, 평가, 활용하도록 돕습니다." },
    { title: "학생 중심 학습", text: "개인화 학습, 형성 피드백, 평가 지원, 학습자 웰빙을 발전시킵니다." },
    { title: "글로벌-로컬 가교", text: "글로벌 AIED 연구를 홍콩, 중화권, 아시아 교육 실천과 연결합니다." },
    { title: "윤리적이고 책임 있는 AI", text: "공정성, 개인정보 보호, 안전, 투명성, 교육적 가치를 기본 원칙으로 삼습니다." },
  ],
  ホーム: [
    { title: "研究インテリジェンス", text: "AIEDのジャーナルと会議を追跡し、方法、データセット、動向、応用場面を要約します。" },
    { title: "製品革新", text: "研究成果を現実の場で試せる教育製品、プロトタイプ、教育ツールに変換します。" },
    { title: "教師のエンパワーメント", text: "教師がAI教育ツールを理解、評価、活用できるよう支援します。" },
    { title: "学習者中心の学び", text: "個別化学習、形成的フィードバック、評価支援、学習者のウェルビーイングを推進します。" },
    { title: "グローバル・ローカルの橋", text: "世界のAIED研究と香港、中華圏、アジアの教育実践を結びます。" },
    { title: "倫理的で責任あるAI", text: "公平性、プライバシー、安全、透明性、教育的価値を標準原則にします。" },
  ],
  होम: [
    { title: "शोध बुद्धिमत्ता", text: "AIED जर्नल और कॉन्फ्रेंस को ट्रैक कर विधि, डेटासेट, रुझान और अनुप्रयोगों का सार बनाना।" },
    { title: "उत्पाद नवाचार", text: "शोध निष्कर्षों को वास्तविक परिवेश में परीक्षण योग्य शिक्षा उत्पादों, प्रोटोटाइप और शिक्षण उपकरणों में बदलना।" },
    { title: "शिक्षक सशक्तीकरण", text: "शिक्षकों को AI शिक्षा उपकरण समझने, मूल्यांकन करने और आत्मविश्वास से उपयोग करने में मदद करना।" },
    { title: "विद्यार्थी-केंद्रित सीखना", text: "व्यक्तिगत सीखना, formative feedback, मूल्यांकन समर्थन और learner wellbeing को आगे बढ़ाना।" },
    { title: "वैश्विक-स्थानीय पुल", text: "वैश्विक AIED शोध को हांगकांग, ग्रेटर चाइना और एशियाई शिक्षा अभ्यास से जोड़ना।" },
    { title: "नैतिक और जिम्मेदार AI", text: "निष्पक्षता, गोपनीयता, सुरक्षा, पारदर्शिता और शैक्षिक मूल्य को डिफ़ॉल्ट सिद्धांत बनाना।" },
  ],
  Главная: [
    { title: "Исследовательская аналитика", text: "Отслеживать журналы и конференции AIED, суммируя методы, датасеты, тенденции и сценарии." },
    { title: "Продуктовые инновации", text: "Переводить результаты исследований в образовательные продукты, прототипы и инструменты для реальных тестов." },
    { title: "Поддержка учителей", text: "Помогать учителям понимать, оценивать и уверенно использовать инструменты ИИ в образовании." },
    { title: "Обучение вокруг ученика", text: "Развивать персонализацию, формативную обратную связь, поддержку оценки и благополучие." },
    { title: "Глобально-локальный мост", text: "Связывать мировые исследования AIED с практиками Гонконга, Большого Китая и Азии." },
    { title: "Этичный и ответственный ИИ", text: "Продвигать справедливость, приватность, безопасность, прозрачность и образовательную ценность." },
  ],
  Beranda: [
    { title: "Intelijen riset", text: "Melacak jurnal dan konferensi AIED, lalu merangkum metode, dataset, tren, dan skenario aplikasi." },
    { title: "Inovasi produk", text: "Menerjemahkan temuan riset menjadi produk, prototipe, dan alat pengajaran yang dapat diuji." },
    { title: "Pemberdayaan guru", text: "Membantu guru memahami, menilai, dan memakai alat AI pendidikan dengan percaya diri." },
    { title: "Pembelajaran berpusat siswa", text: "Memajukan personalisasi, umpan balik formatif, dukungan asesmen, dan kesejahteraan pelajar." },
    { title: "Jembatan global-lokal", text: "Menghubungkan riset AIED global dengan praktik pendidikan Hong Kong, Tiongkok Raya, dan Asia." },
    { title: "AI etis dan bertanggung jawab", text: "Mendorong keadilan, privasi, keamanan, transparansi, dan nilai pendidikan sebagai prinsip awal." },
  ],
  হোম: [
    { title: "গবেষণা বুদ্ধিমত্তা", text: "AIED জার্নাল ও সম্মেলন অনুসরণ করে পদ্ধতি, ডেটাসেট, প্রবণতা ও প্রয়োগের সারাংশ তৈরি করা।" },
    { title: "পণ্য উদ্ভাবন", text: "গবেষণা ফলাফলকে বাস্তব প্রেক্ষাপটে পরীক্ষাযোগ্য শিক্ষা পণ্য, প্রোটোটাইপ ও টুলে রূপান্তর করা।" },
    { title: "শিক্ষক ক্ষমতায়ন", text: "শিক্ষকদের AI শিক্ষা টুল বুঝতে, মূল্যায়ন করতে ও আত্মবিশ্বাসের সঙ্গে ব্যবহার করতে সহায়তা করা।" },
    { title: "শিক্ষার্থী-কেন্দ্রিক শেখা", text: "ব্যক্তিকরণ, formative feedback, মূল্যায়ন সহায়তা ও শিক্ষার্থীর কল্যাণ এগিয়ে নেওয়া।" },
    { title: "বৈশ্বিক-স্থানীয় সেতু", text: "বৈশ্বিক AIED গবেষণাকে হংকং, বৃহত্তর চীন ও এশিয়ার শিক্ষা অনুশীলনের সঙ্গে যুক্ত করা।" },
    { title: "নৈতিক ও দায়িত্বশীল AI", text: "ন্যায্যতা, গোপনীয়তা, নিরাপত্তা, স্বচ্ছতা ও শিক্ষাগত মূল্যকে ডিফল্ট নীতি করা।" },
  ],
};

const logoConceptTranslations: Record<string, BaseDictionary["logoConcepts"]["concepts"]> = {
  default: enDictionary.logoConcepts.concepts,
  Accueil: [
    { name: "Learning Circuit", summary: "Des pages de livre ouvertes portent des nœuds IA connectés, rendant visible la couche éducation et connaissance.", signal: "Le plus proche de l'identité actuelle du site." },
    { name: "Harbour Hub", summary: "Un réseau de hub entoure un monogramme HK et montre Hong Kong comme connecteur.", signal: "Le meilleur pour le positionnement public de Hong Kong comme pôle AIED." },
    { name: "Knowledge Compass", summary: "Une boussole sur un livre ouvert présente AIEDHK comme guide du savoir IA éducatif.", signal: "Adapté aux rapports, pages de recherche et partenariats académiques." },
  ],
  Início: [
    { name: "Learning Circuit", summary: "Páginas abertas carregam nós de IA conectados, tornando imediata a camada de educação e conhecimento.", signal: "Mais próximo da identidade atual do site." },
    { name: "Harbour Hub", summary: "Uma rede de hub envolve um monograma HK e mostra Hong Kong como conector.", signal: "Melhor para posicionar Hong Kong como centro AIED." },
    { name: "Knowledge Compass", summary: "Uma bússola sobre um livro aberto apresenta AIEDHK como guia de conhecimento em IA educacional.", signal: "Adequado para relatórios, páginas de pesquisa e parcerias acadêmicas." },
  ],
  Start: [
    { name: "Learning Circuit", summary: "Offene Buchseiten tragen verbundene KI-Knoten und machen Bildungs- und Wissensschicht sichtbar.", signal: "Am nächsten an der aktuellen Identität des Headers." },
    { name: "Harbour Hub", summary: "Ein Hub-Netz umschließt ein HK-Monogramm und zeigt Hongkong als Verbindungspunkt.", signal: "Am besten für die öffentliche Positionierung Hongkongs als AIED-Hub." },
    { name: "Knowledge Compass", summary: "Ein Kompass über einem offenen Buch rahmt AIEDHK als Wissensführer.", signal: "Geeignet für Berichte, Forschungsseiten und akademische Partnerschaften." },
  ],
  الرئيسية: [
    { name: "Learning Circuit", summary: "صفحات كتاب مفتوح تحمل عقد ذكاء اصطناعي متصلة وتوضح طبقة التعليم والمعرفة.", signal: "الأقرب إلى هوية رأس الموقع الحالية." },
    { name: "Harbour Hub", summary: "شبكة مركز تحيط بحرفي HK وتعرض هونغ كونغ كنقطة وصل.", signal: "الأفضل لتموضع هونغ كونغ العام كمركز AIED." },
    { name: "Knowledge Compass", summary: "بوصلة فوق كتاب مفتوح تضع AIEDHK كدليل لمعرفة الذكاء الاصطناعي التعليمية.", signal: "مناسب للتقارير وصفحات البحث والشراكات الأكاديمية." },
  ],
  홈: [
    { name: "Learning Circuit", summary: "열린 책 페이지에 연결된 AI 노드를 담아 교육과 지식 계층을 즉시 보여줍니다.", signal: "현재 사이트 헤더 정체성과 가장 가깝습니다." },
    { name: "Harbour Hub", summary: "허브 네트워크가 HK 모노그램을 감싸며 홍콩의 연결자 역할을 보여줍니다.", signal: "홍콩을 AIED 허브로 포지셔닝하기에 좋습니다." },
    { name: "Knowledge Compass", summary: "열린 책 위 나침반이 AIEDHK를 AI 교육 지식의 안내자로 표현합니다.", signal: "보고서, 연구 페이지, 학술 협력 자료에 적합합니다." },
  ],
  ホーム: [
    { name: "Learning Circuit", summary: "開いた本のページに接続されたAIノードを載せ、教育と知識の層を明確に示します。", signal: "現在のサイトヘッダーのアイデンティティに最も近い方向です。" },
    { name: "Harbour Hub", summary: "ハブネットワークがHKモノグラムを包み、香港の接続者としての役割を示します。", signal: "香港をAIEDハブとして伝えるのに適しています。" },
    { name: "Knowledge Compass", summary: "開いた本の上のコンパスが、AI教育知識のガイドとしてAIEDHKを表します。", signal: "レポート、研究ページ、学術連携資料に適しています。" },
  ],
  होम: [
    { name: "Learning Circuit", summary: "खुले पुस्तक पृष्ठ जुड़े AI नोड दिखाते हैं और शिक्षा-ज्ञान परत को स्पष्ट करते हैं।", signal: "मौजूदा साइट header पहचान के सबसे करीब।" },
    { name: "Harbour Hub", summary: "HK monogram के आसपास hub network हांगकांग की connector भूमिका दिखाता है।", signal: "हांगकांग को AIED केंद्र के रूप में रखने के लिए उपयुक्त।" },
    { name: "Knowledge Compass", summary: "खुली किताब पर compass AIEDHK को AI शिक्षा ज्ञान के guide के रूप में दिखाता है।", signal: "रिपोर्ट, शोध पृष्ठ और academic partnership सामग्री के लिए उपयुक्त।" },
  ],
  Главная: [
    { name: "Learning Circuit", summary: "Открытые страницы книги несут связанные ИИ-узлы и показывают слой образования и знаний.", signal: "Ближе всего к текущей идентичности шапки сайта." },
    { name: "Harbour Hub", summary: "Сеть хаба окружает монограмму HK и показывает Гонконг как соединитель.", signal: "Лучше всего для публичного позиционирования Гонконга как AIED-хаба." },
    { name: "Knowledge Compass", summary: "Компас над открытой книгой представляет AIEDHK как проводник по знаниям ИИ в образовании.", signal: "Подходит для отчетов, исследовательских страниц и академических партнерств." },
  ],
  Beranda: [
    { name: "Learning Circuit", summary: "Halaman buku terbuka membawa node AI yang terhubung dan memperjelas lapisan pendidikan serta pengetahuan.", signal: "Paling dekat dengan identitas header saat ini." },
    { name: "Harbour Hub", summary: "Jaringan hub membungkus monogram HK dan menunjukkan Hong Kong sebagai penghubung.", signal: "Terbaik untuk posisi publik Hong Kong sebagai pusat AIED." },
    { name: "Knowledge Compass", summary: "Kompas di atas buku terbuka membingkai AIEDHK sebagai panduan pengetahuan AI pendidikan.", signal: "Cocok untuk laporan, halaman riset, dan materi kemitraan akademik." },
  ],
  হোম: [
    { name: "Learning Circuit", summary: "খোলা বইয়ের পাতায় সংযুক্ত AI নোড শিক্ষা ও জ্ঞানের স্তরকে স্পষ্ট করে।", signal: "বর্তমান সাইট header পরিচয়ের সবচেয়ে কাছাকাছি।" },
    { name: "Harbour Hub", summary: "HK monogram ঘিরে hub network হংকংয়ের connector ভূমিকা দেখায়।", signal: "হংকংকে AIED হাব হিসেবে উপস্থাপনের জন্য উপযুক্ত।" },
    { name: "Knowledge Compass", summary: "খোলা বইয়ের উপর compass AIEDHK-কে AI শিক্ষা জ্ঞানের guide হিসেবে দেখায়।", signal: "রিপোর্ট, গবেষণা পৃষ্ঠা ও academic partnership উপকরণের জন্য উপযুক্ত।" },
  ],
};

const localizedProductText: Record<string, string> = {
  default: "Editable placeholder for an AI-powered education product. Add verified product positioning, users, and use cases here.",
  Accueil: "Texte indicatif modifiable pour un produit éducatif alimenté par l'IA. Ajoutez ici le positionnement, les utilisateurs et les cas d'usage vérifiés.",
  Início: "Texto editável para um produto educacional com IA. Adicione aqui posicionamento, usuários e casos de uso verificados.",
  Start: "Editierbarer Platzhalter für ein KI-gestütztes Bildungsprodukt. Ergänzen Sie geprüfte Positionierung, Nutzer und Anwendungsfälle.",
  الرئيسية: "نص قابل للتحرير لمنتج تعليمي مدعوم بالذكاء الاصطناعي. أضف التموضع والمستخدمين وحالات الاستخدام الموثقة.",
  홈: "AI 기반 교육 제품을 위한 편집 가능한 자리표시자입니다. 검증된 포지셔닝, 사용자, 사용 사례를 추가하세요.",
  ホーム: "AI搭載教育製品の編集可能なプレースホルダーです。検証済みの位置づけ、ユーザー、利用場面を追加してください。",
  होम: "AI-संचालित शिक्षा उत्पाद के लिए संपादन योग्य placeholder। सत्यापित positioning, users और use cases जोड़ें।",
  Главная: "Редактируемый placeholder для образовательного продукта на базе ИИ. Добавьте проверенное позиционирование, пользователей и сценарии.",
  Beranda: "Placeholder yang dapat diedit untuk produk pendidikan berbasis AI. Tambahkan positioning, pengguna, dan kasus penggunaan terverifikasi.",
  হোম: "AI-চালিত শিক্ষা পণ্যের জন্য সম্পাদনাযোগ্য placeholder। যাচাইকৃত positioning, user এবং use case যোগ করুন।",
};

const localizedNewsletterCopy: Record<string, BaseDictionary["research"]["newsletter"]> = {
  default: enDictionary.research.newsletter,
  Accueil: {
    eyebrow: "Résumé quotidien gratuit",
    title: "Recevez les derniers articles AIED par e-mail",
    description: "Une sélection quotidienne d'actualités AIED.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@example.com",
    submit: "S'abonner",
    submitting: "Inscription...",
    success: "Vous êtes inscrit. Les actualités AIED quotidiennes arriveront dans votre boîte mail.",
    alreadySubscribed: "Vous êtes déjà dans la liste quotidienne AIED.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    notConfigured: "Le stockage des abonnements n'est pas encore configuré. Réessayez après la mise en ligne.",
    error: "Un problème est survenu. Réessayez dans un moment.",
    privacyNote: "Inscription d'essai en une étape. Aucun paiement n'est requis pendant l'essai actuel.",
  },
  Início: {
    eyebrow: "Resumo diário gratuito",
    title: "Receba os artigos AIED mais recentes no e-mail",
    description: "Atualizações diárias de notícias selecionadas.",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@example.com",
    submit: "Assinar",
    submitting: "Assinando...",
    success: "Você está inscrito. As notícias diárias AIED chegarão ao seu e-mail.",
    alreadySubscribed: "Você já está na lista diária de notícias AIED.",
    invalidEmail: "Digite um e-mail válido.",
    notConfigured: "O armazenamento de assinaturas ainda não está configurado. Tente após a configuração de lançamento.",
    error: "Algo deu errado. Tente novamente em instantes.",
    privacyNote: "Assinatura de teste em uma etapa. Nenhum pagamento é necessário durante o teste atual.",
  },
  Start: {
    eyebrow: "Kostenlose tägliche Zusammenfassung",
    title: "Aktuelle AIED-Papers direkt per E-Mail",
    description: "Täglich kuratierte AIED-Nachrichten.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@example.com",
    submit: "Abonnieren",
    submitting: "Abonnieren...",
    success: "Sie sind angemeldet. Tägliche AIED-Nachrichten kommen per E-Mail.",
    alreadySubscribed: "Sie sind bereits auf der täglichen AIED-Nachrichtenliste.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    notConfigured: "Der Abonnementspeicher ist noch nicht konfiguriert. Bitte nach dem Launch-Setup erneut versuchen.",
    error: "Etwas ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
    privacyNote: "Ein-Schritt-Testanmeldung. Während des aktuellen Tests ist keine Zahlung erforderlich.",
  },
  الرئيسية: enDictionary.research.newsletter,
  홈: enDictionary.research.newsletter,
  ホーム: enDictionary.research.newsletter,
  होम: enDictionary.research.newsletter,
  Главная: enDictionary.research.newsletter,
  Beranda: enDictionary.research.newsletter,
  হোম: enDictionary.research.newsletter,
};

for (const locale of ["fr", "pt", "de", "ar", "ko", "ja", "hi", "ru", "id", "bn"] as const) {
  baseDictionaries[locale] = makeRomanceDictionary(locale);
}

const academyTranslations: Record<Locale, { nav: string; copy: Omit<AcademyDictionary, "newsletter"> }> = {
  en: { nav: "Academy", copy: { eyebrow: "PedaNova Academy", title: "Build durable foundations in AI and learning science.", intro: "Paired, reviewed lessons connect essential AI knowledge with educational theory for thoughtful practice.", searchPlaceholder: "Search title, topic, summary, or core idea", resultCount: "lessons", allTracks: "All tracks", allLevels: "All levels", tracks: { "ai-knowledge": "AI Knowledge", "educational-theory": "Educational Theory" }, levels: { basics: "Basics", core: "Core" }, backToAcademy: "Back to Academy", summaryHeading: "Full lesson summary", coreIdeas: "3 core ideas", educationConnection: "Education connection", relatedConcepts: "3 related concepts", relatedLessons: "Related lessons", sources: "Sources", readingTimeLabel: "Estimated reading time", minuteAbbreviation: "min", searchFieldLabel: "Search Academy lessons", trackFieldLabel: "Filter by track", levelFieldLabel: "Filter by level", noResults: "No lessons matched the current filters." } },
  "zh-hant": { nav: "學院", copy: { eyebrow: "學院", title: "建立人工智能與學習科學的穩固基礎。", intro: "經審閱的配對課程把核心 AI 知識與教育理論連結到審慎實踐。", searchPlaceholder: "搜尋標題、主題、摘要或核心概念", resultCount: "節課", allTracks: "全部軌道", allLevels: "全部程度", tracks: { "ai-knowledge": "AI 知識", "educational-theory": "教育理論" }, levels: { basics: "基礎", core: "核心" }, backToAcademy: "返回學院", summaryHeading: "完整課程摘要", coreIdeas: "3 個核心概念", educationConnection: "教育連結", relatedConcepts: "3 個相關概念", relatedLessons: "相關課程", sources: "來源", readingTimeLabel: "預計閱讀時間", minuteAbbreviation: "分鐘", searchFieldLabel: "搜尋學院課程", trackFieldLabel: "按軌道篩選", levelFieldLabel: "按程度篩選", noResults: "目前篩選條件下沒有符合的課程。" } },
  "zh-hans": { nav: "学院", copy: { eyebrow: "学院", title: "建立人工智能与学习科学的坚实基础。", intro: "经审阅的配对课程将核心 AI 知识与教育理论连接到审慎实践。", searchPlaceholder: "搜索标题、主题、摘要或核心概念", resultCount: "节课", allTracks: "全部方向", allLevels: "全部程度", tracks: { "ai-knowledge": "AI 知识", "educational-theory": "教育理论" }, levels: { basics: "基础", core: "核心" }, backToAcademy: "返回学院", summaryHeading: "完整课程摘要", coreIdeas: "3 个核心概念", educationConnection: "教育联系", relatedConcepts: "3 个相关概念", relatedLessons: "相关课程", sources: "来源", readingTimeLabel: "预计阅读时间", minuteAbbreviation: "分钟", searchFieldLabel: "搜索学院课程", trackFieldLabel: "按方向筛选", levelFieldLabel: "按程度筛选", noResults: "当前筛选条件下没有匹配的课程。" } },
  es: { nav: "Academia", copy: { eyebrow: "Academia", title: "Construye bases sólidas en IA y ciencias del aprendizaje.", intro: "Lecciones revisadas conectan conocimientos esenciales de IA con teoría educativa.", searchPlaceholder: "Buscar título, tema, resumen o idea clave", resultCount: "lecciones", allTracks: "Todas las áreas", allLevels: "Todos los niveles", tracks: { "ai-knowledge": "Conocimiento de IA", "educational-theory": "Teoría educativa" }, levels: { basics: "Fundamentos", core: "Núcleo" }, backToAcademy: "Volver a Academia", summaryHeading: "Resumen completo", coreIdeas: "3 ideas clave", educationConnection: "Conexión educativa", relatedConcepts: "3 conceptos relacionados", relatedLessons: "Lecciones relacionadas", sources: "Fuentes", readingTimeLabel: "Tiempo de lectura estimado", minuteAbbreviation: "min", searchFieldLabel: "Buscar lecciones", trackFieldLabel: "Filtrar por área", levelFieldLabel: "Filtrar por nivel", noResults: "Ninguna lección coincide con los filtros." } },
  fr: { nav: "Académie", copy: { eyebrow: "Académie", title: "Construisez des bases solides en IA et sciences de l'apprentissage.", intro: "Des leçons révisées relient les connaissances essentielles en IA à la théorie éducative.", searchPlaceholder: "Rechercher titre, sujet, résumé ou idée clé", resultCount: "leçons", allTracks: "Tous les parcours", allLevels: "Tous les niveaux", tracks: { "ai-knowledge": "Connaissances IA", "educational-theory": "Théorie éducative" }, levels: { basics: "Bases", core: "Fondamental" }, backToAcademy: "Retour à l'Académie", summaryHeading: "Résumé complet", coreIdeas: "3 idées clés", educationConnection: "Lien avec l'éducation", relatedConcepts: "3 concepts associés", relatedLessons: "Leçons associées", sources: "Sources", readingTimeLabel: "Temps de lecture estimé", minuteAbbreviation: "min", searchFieldLabel: "Rechercher des leçons", trackFieldLabel: "Filtrer par parcours", levelFieldLabel: "Filtrer par niveau", noResults: "Aucune leçon ne correspond aux filtres." } },
  pt: { nav: "Academia", copy: { eyebrow: "Academia", title: "Construa bases sólidas em IA e ciência da aprendizagem.", intro: "Lições revisadas conectam conhecimentos essenciais de IA à teoria educacional.", searchPlaceholder: "Pesquisar título, tema, resumo ou ideia central", resultCount: "lições", allTracks: "Todas as áreas", allLevels: "Todos os níveis", tracks: { "ai-knowledge": "Conhecimento de IA", "educational-theory": "Teoria educacional" }, levels: { basics: "Básico", core: "Nuclear" }, backToAcademy: "Voltar à Academia", summaryHeading: "Resumo completo", coreIdeas: "3 ideias centrais", educationConnection: "Conexão educacional", relatedConcepts: "3 conceitos relacionados", relatedLessons: "Lições relacionadas", sources: "Fontes", readingTimeLabel: "Tempo estimado de leitura", minuteAbbreviation: "min", searchFieldLabel: "Pesquisar lições", trackFieldLabel: "Filtrar por área", levelFieldLabel: "Filtrar por nível", noResults: "Nenhuma lição corresponde aos filtros." } },
  de: { nav: "Akademie", copy: { eyebrow: "Akademie", title: "Solide Grundlagen in KI und Lernwissenschaft schaffen.", intro: "Geprüfte Lektionen verbinden zentrales KI-Wissen mit Bildungstheorie.", searchPlaceholder: "Titel, Thema, Zusammenfassung oder Kernidee suchen", resultCount: "Lektionen", allTracks: "Alle Bereiche", allLevels: "Alle Stufen", tracks: { "ai-knowledge": "KI-Wissen", "educational-theory": "Bildungstheorie" }, levels: { basics: "Grundlagen", core: "Kern" }, backToAcademy: "Zurück zur Akademie", summaryHeading: "Vollständige Zusammenfassung", coreIdeas: "3 Kernideen", educationConnection: "Bildungsbezug", relatedConcepts: "3 verwandte Konzepte", relatedLessons: "Verwandte Lektionen", sources: "Quellen", readingTimeLabel: "Geschätzte Lesezeit", minuteAbbreviation: "Min.", searchFieldLabel: "Lektionen suchen", trackFieldLabel: "Nach Bereich filtern", levelFieldLabel: "Nach Stufe filtern", noResults: "Keine Lektionen entsprechen den Filtern." } },
  ar: { nav: "الأكاديمية", copy: { eyebrow: "الأكاديمية", title: "ابنِ أسسًا راسخة في الذكاء الاصطناعي وعلوم التعلم.", intro: "دروس مراجعة تربط معرفة الذكاء الاصطناعي الأساسية بالنظرية التعليمية.", searchPlaceholder: "ابحث في العنوان أو الموضوع أو الملخص أو الفكرة", resultCount: "دروس", allTracks: "كل المسارات", allLevels: "كل المستويات", tracks: { "ai-knowledge": "معرفة الذكاء الاصطناعي", "educational-theory": "النظرية التعليمية" }, levels: { basics: "الأساسيات", core: "الجوهر" }, backToAcademy: "العودة إلى الأكاديمية", summaryHeading: "الملخص الكامل", coreIdeas: "3 أفكار أساسية", educationConnection: "الصلة بالتعليم", relatedConcepts: "3 مفاهيم مرتبطة", relatedLessons: "دروس مرتبطة", sources: "المصادر", readingTimeLabel: "وقت القراءة المقدّر", minuteAbbreviation: "د", searchFieldLabel: "البحث في دروس الأكاديمية", trackFieldLabel: "التصفية حسب المسار", levelFieldLabel: "التصفية حسب المستوى", noResults: "لا توجد دروس تطابق عوامل التصفية." } },
  ko: { nav: "아카데미", copy: { eyebrow: "아카데미", title: "AI와 학습과학의 탄탄한 기초를 세우세요.", intro: "검토된 짝수업이 핵심 AI 지식과 교육 이론을 연결합니다.", searchPlaceholder: "제목, 주제, 요약 또는 핵심 아이디어 검색", resultCount: "개 수업", allTracks: "모든 트랙", allLevels: "모든 수준", tracks: { "ai-knowledge": "AI 지식", "educational-theory": "교육 이론" }, levels: { basics: "기초", core: "핵심" }, backToAcademy: "아카데미로 돌아가기", summaryHeading: "전체 수업 요약", coreIdeas: "핵심 아이디어 3개", educationConnection: "교육 연결", relatedConcepts: "관련 개념 3개", relatedLessons: "관련 수업", sources: "출처", readingTimeLabel: "예상 읽기 시간", minuteAbbreviation: "분", searchFieldLabel: "아카데미 수업 검색", trackFieldLabel: "트랙별 필터", levelFieldLabel: "수준별 필터", noResults: "필터와 일치하는 수업이 없습니다." } },
  ja: { nav: "アカデミー", copy: { eyebrow: "アカデミー", title: "AIと学習科学の確かな基礎を築く。", intro: "レビュー済みのペアレッスンがAIの基礎知識と教育理論を結びます。", searchPlaceholder: "タイトル、トピック、要約、核心概念を検索", resultCount: "レッスン", allTracks: "すべての分野", allLevels: "すべてのレベル", tracks: { "ai-knowledge": "AI知識", "educational-theory": "教育理論" }, levels: { basics: "基礎", core: "中核" }, backToAcademy: "アカデミーに戻る", summaryHeading: "完全なレッスン要約", coreIdeas: "3つの核心概念", educationConnection: "教育とのつながり", relatedConcepts: "3つの関連概念", relatedLessons: "関連レッスン", sources: "出典", readingTimeLabel: "推定読了時間", minuteAbbreviation: "分", searchFieldLabel: "アカデミーのレッスンを検索", trackFieldLabel: "分野で絞り込む", levelFieldLabel: "レベルで絞り込む", noResults: "条件に一致するレッスンはありません。" } },
  hi: { nav: "अकादमी", copy: { eyebrow: "अकादमी", title: "AI और अधिगम विज्ञान की मजबूत नींव बनाएँ।", intro: "समीक्षित युग्मित पाठ आवश्यक AI ज्ञान को शिक्षा सिद्धांत से जोड़ते हैं।", searchPlaceholder: "शीर्षक, विषय, सारांश या मुख्य विचार खोजें", resultCount: "पाठ", allTracks: "सभी ट्रैक", allLevels: "सभी स्तर", tracks: { "ai-knowledge": "AI ज्ञान", "educational-theory": "शिक्षा सिद्धांत" }, levels: { basics: "बुनियादी", core: "मुख्य" }, backToAcademy: "अकादमी पर लौटें", summaryHeading: "पूरा पाठ सारांश", coreIdeas: "3 मुख्य विचार", educationConnection: "शिक्षा संबंध", relatedConcepts: "3 संबंधित अवधारणाएँ", relatedLessons: "संबंधित पाठ", sources: "स्रोत", readingTimeLabel: "अनुमानित पढ़ने का समय", minuteAbbreviation: "मिनट", searchFieldLabel: "अकादमी पाठ खोजें", trackFieldLabel: "ट्रैक से फ़िल्टर करें", levelFieldLabel: "स्तर से फ़िल्टर करें", noResults: "कोई पाठ फ़िल्टर से मेल नहीं खाता।" } },
  ru: { nav: "Академия", copy: { eyebrow: "Академия", title: "Создайте прочную основу в ИИ и науках об обучении.", intro: "Проверенные парные уроки связывают знания об ИИ с педагогической теорией.", searchPlaceholder: "Поиск по названию, теме, резюме или идее", resultCount: "уроков", allTracks: "Все направления", allLevels: "Все уровни", tracks: { "ai-knowledge": "Знания об ИИ", "educational-theory": "Теория образования" }, levels: { basics: "Основы", core: "Ядро" }, backToAcademy: "Назад в Академию", summaryHeading: "Полное резюме урока", coreIdeas: "3 ключевые идеи", educationConnection: "Связь с образованием", relatedConcepts: "3 связанных понятия", relatedLessons: "Связанные уроки", sources: "Источники", readingTimeLabel: "Расчётное время чтения", minuteAbbreviation: "мин", searchFieldLabel: "Поиск уроков Академии", trackFieldLabel: "Фильтр по направлению", levelFieldLabel: "Фильтр по уровню", noResults: "Нет уроков, соответствующих фильтрам." } },
  id: { nav: "Akademi", copy: { eyebrow: "Akademi", title: "Bangun fondasi kuat dalam AI dan ilmu pembelajaran.", intro: "Pelajaran berpasangan yang ditinjau menghubungkan pengetahuan AI dengan teori pendidikan.", searchPlaceholder: "Cari judul, topik, ringkasan, atau ide inti", resultCount: "pelajaran", allTracks: "Semua jalur", allLevels: "Semua tingkat", tracks: { "ai-knowledge": "Pengetahuan AI", "educational-theory": "Teori pendidikan" }, levels: { basics: "Dasar", core: "Inti" }, backToAcademy: "Kembali ke Akademi", summaryHeading: "Ringkasan pelajaran lengkap", coreIdeas: "3 ide inti", educationConnection: "Kaitan pendidikan", relatedConcepts: "3 konsep terkait", relatedLessons: "Pelajaran terkait", sources: "Sumber", readingTimeLabel: "Perkiraan waktu baca", minuteAbbreviation: "mnt", searchFieldLabel: "Cari pelajaran Akademi", trackFieldLabel: "Filter berdasarkan jalur", levelFieldLabel: "Filter berdasarkan tingkat", noResults: "Tidak ada pelajaran yang cocok dengan filter." } },
  bn: { nav: "একাডেমি", copy: { eyebrow: "একাডেমি", title: "AI ও শিক্ষাবিজ্ঞানে দৃঢ় ভিত্তি গড়ুন।", intro: "পর্যালোচিত যুগ্ম পাঠ অপরিহার্য AI জ্ঞানকে শিক্ষা তত্ত্বের সঙ্গে যুক্ত করে।", searchPlaceholder: "শিরোনাম, বিষয়, সারাংশ বা মূল ধারণা খুঁজুন", resultCount: "পাঠ", allTracks: "সব ট্র্যাক", allLevels: "সব স্তর", tracks: { "ai-knowledge": "AI জ্ঞান", "educational-theory": "শিক্ষা তত্ত্ব" }, levels: { basics: "ভিত্তি", core: "মূল" }, backToAcademy: "একাডেমিতে ফিরুন", summaryHeading: "সম্পূর্ণ পাঠ সারাংশ", coreIdeas: "৩টি মূল ধারণা", educationConnection: "শিক্ষার সংযোগ", relatedConcepts: "৩টি সম্পর্কিত ধারণা", relatedLessons: "সম্পর্কিত পাঠ", sources: "উৎস", readingTimeLabel: "আনুমানিক পড়ার সময়", minuteAbbreviation: "মিনিট", searchFieldLabel: "একাডেমির পাঠ খুঁজুন", trackFieldLabel: "ট্র্যাক দিয়ে ফিল্টার করুন", levelFieldLabel: "স্তর দিয়ে ফিল্টার করুন", noResults: "কোনো পাঠ বর্তমান ফিল্টারের সঙ্গে মেলেনি।" } },
};

const academyNewsletterCopy: Record<Locale, AcademyDictionary["newsletter"]> = {
  en: { eyebrow: "Keep learning", title: "Connect PedaNova Academy lessons with the latest AIED technologies and learning theories", description: "Daily curated lesson updates." },
  "zh-hant": { eyebrow: "持續學習", title: "把 PedaNova 學院課程連結至最新 AIED 技術與學習理論", description: "每天獲取一則精選 AIED 更新，延伸你在學院所學的內容。" },
  "zh-hans": { eyebrow: "持续学习", title: "将 PedaNova 学院课程连接到最新 AIED 技术与学习理论", description: "每天获取一则精选 AIED 更新，拓展你在学院所学的内容。" },
  es: { eyebrow: "Sigue aprendiendo", title: "Conecta las lecciones de PedaNova Academy con las últimas tecnologías AIED y teorías del aprendizaje", description: "Recibe cada día una actualización AIED cuidadosamente seleccionada para ampliar lo que aprendes en la Academia." },
  fr: { eyebrow: "Continuez à apprendre", title: "Reliez les leçons de PedaNova Academy aux dernières technologies AIED et théories de l’apprentissage", description: "Recevez chaque jour une actualité AIED soigneusement sélectionnée pour prolonger vos apprentissages dans l’Académie." },
  pt: { eyebrow: "Continue a aprender", title: "Ligue as lições da PedaNova Academy às mais recentes tecnologias AIED e teorias da aprendizagem", description: "Receba diariamente uma atualização AIED cuidadosamente selecionada para aprofundar o que aprende na Academia." },
  de: { eyebrow: "Weiterlernen", title: "Verbinden Sie die Lektionen der PedaNova Academy mit den neuesten AIED-Technologien und Lerntheorien", description: "Erhalten Sie jeden Tag ein sorgfältig kuratiertes AIED-Update, das Ihr Lernen in der Akademie vertieft." },
  ar: { eyebrow: "واصل التعلّم", title: "اربط دروس أكاديمية PedaNova بأحدث تقنيات الذكاء الاصطناعي في التعليم ونظريات التعلّم", description: "احصل كل يوم على تحديث مختار بعناية حول أبحاث الذكاء الاصطناعي في التعليم لتوسيع ما تتعلمه في الأكاديمية." },
  ko: { eyebrow: "배움을 이어가세요", title: "PedaNova Academy 수업을 최신 AIED 기술 및 학습 이론과 연결하세요", description: "매일 엄선된 AIED 업데이트를 받아 아카데미에서 배운 내용을 확장하세요." },
  ja: { eyebrow: "学びを続ける", title: "PedaNova Academyのレッスンを最新のAIED技術と学習理論につなげる", description: "厳選されたAIEDの最新情報を毎日受け取り、アカデミーでの学びを深めましょう。" },
  hi: { eyebrow: "सीखना जारी रखें", title: "PedaNova Academy के पाठों को नवीनतम AIED तकनीकों और अधिगम सिद्धांतों से जोड़ें", description: "अकादमी में सीखी बातों को आगे बढ़ाने के लिए हर दिन सावधानी से चुना गया एक AIED अपडेट पाएँ।" },
  ru: { eyebrow: "Продолжайте учиться", title: "Свяжите уроки PedaNova Academy с новейшими технологиями AIED и теориями обучения", description: "Получайте каждый день тщательно отобранный обзор AIED, чтобы углублять знания из Академии." },
  id: { eyebrow: "Terus belajar", title: "Hubungkan pelajaran PedaNova Academy dengan teknologi AIED dan teori pembelajaran terbaru", description: "Dapatkan satu pembaruan AIED pilihan setiap hari untuk memperluas pembelajaran Anda di Akademi." },
  bn: { eyebrow: "শেখা চালিয়ে যান", title: "PedaNova Academy-এর পাঠকে সাম্প্রতিক AIED প্রযুক্তি ও শিখন তত্ত্বের সঙ্গে যুক্ত করুন", description: "একাডেমিতে শেখা বিষয়কে আরও বিস্তৃত করতে প্রতিদিন যত্নসহকারে নির্বাচিত একটি AIED আপডেট পান।" },
};

export const dictionaries = Object.fromEntries(
  locales.map((locale) => [locale, {
    ...baseDictionaries[locale],
    nav: { ...baseDictionaries[locale].nav, academy: academyTranslations[locale].nav },
    academy: { ...academyTranslations[locale].copy, newsletter: academyNewsletterCopy[locale] },
  }])
) as Record<Locale, Dictionary>;

export function getDictionary(locale: string): Dictionary {
  return dictionaries[normalizeLocale(locale)];
}

export function getLocalePath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}
