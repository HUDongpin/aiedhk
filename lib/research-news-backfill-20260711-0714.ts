import type { ResearchPaper } from "@/lib/types";

export const researchNewsBackfill20260714: ResearchPaper[] = [
  {
    id: "aied-081",
    slug: "news-gemini-chrome-uk-connected-ai",
    title:
      "Product news: Gemini in Chrome reaches UK desktops with cross-tab assistance and connected apps",
    authors: ["Charmaine Dsilva", "Google Chrome"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: [
      "product news",
      "Gemini in Chrome",
      "connected apps",
      "prompt injection",
      "browser AI governance",
    ],
    image:
      "/images/research/covers/aied-081-gemini-chrome-uk-connected-ai-2026.png",
    imageAlt:
      "A diverse group of university students and a lecturer compare browser tabs while a technology specialist reviews connected-app permissions and safety prompts",
    summaryImage:
      "/images/research/summary/aied-081-gemini-chrome-uk-connected-ai-summary.png",
    summaryImageAlt:
      "A diverse group of university students and a lecturer compare browser tabs while a technology specialist reviews connected-app permissions and safety prompts",
    summaryAudio:
      "/audio/research/aied-081-gemini-chrome-uk-connected-ai-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary:
      "Product news: Google began expanding Gemini in Chrome to UK desktop users on July 14, adding long-page summaries, comparisons across open tabs and optional connections to Google apps. The staged vendor rollout also makes browser context, account permissions and prompt-injection testing immediate governance questions for education.",
    fullSummary: `Google's July 14 announcement begins the expansion of Gemini in Chrome to desktop users in the United Kingdom. The company describes a staged rollout rather than instant universal access. An iOS release was promised for the following month, so it was not part of the confirmed July 14 availability. The announcement also does not establish access in Hong Kong, eligibility for every account type or the administrative settings available to schools. Those boundaries matter when a consumer-facing browser feature is discussed as though it were already an institutional service.

The browser assistant can summarize a long page and compare information across several open tabs. Google also describes connections to Calendar, Maps, Gmail and YouTube, allowing a user to schedule an event, inspect a location, draft an email or ask about a video without leaving the current page. Gemini can retain context from earlier conversations to tailor later responses, while Nano Banana 2 can transform an image from the web in response to a prompt. These capabilities reduce switching costs, but they also widen the context that may enter one interaction.

Google says its models are trained to recognize known prompt-injection attacks and that Chrome asks for confirmation before sensitive actions. The company also presents connected apps as an optional feature that users can disable. These are relevant design controls, not proof that hostile page content cannot manipulate an assistant. A browser can encounter untrusted instructions embedded in websites, documents or messages, and a confirmation dialog may be misunderstood. Education teams therefore need defense in depth, narrow permissions and testing with authorized synthetic cases rather than relying on a model claim alone.

For learning, cross-tab comparison could help students assemble evidence from several sources, identify disagreements and build a cited explanation. It could equally produce a fluent synthesis that hides weak sources or removes the productive work of reading. Connected Gmail and Calendar actions also cross a boundary between inquiry and account operation. A school pilot should define which sites and accounts are permitted, require students to preserve source links, and include an independent task in which they explain the comparison without browser assistance.

The evidence is a product announcement from Google, not an independent security assessment or an educational study. It supplies no classroom outcome data, no measured failure rate for prompt-injection defenses and no guarantee that every UK user received the feature on publication day. Remembered context can contain errors or sensitive information, and connected apps may expose school communications or schedules. The release should therefore be reported as a capability and rollout change, not as evidence that browser AI is safe, accurate or beneficial for learning.

For Hong Kong schools and universities, the useful response is a bounded evaluation. Managed-account owners can review app permissions, retention and administrator controls; teachers can test Traditional Chinese, Cantonese and English source comparison; security teams can run prompt-injection scenarios; and assessment designers can ask what learners can still verify unaided. Browser-level AI may become an important learning interface, but institutional adoption requires visible provenance, minimum necessary access, human confirmation and a clear route for reporting errors.`,
    keyTakeaways: [
      "Product news: Google began a staged UK desktop rollout of Gemini in Chrome on July 14; the announced iOS release was still a future plan.",
      "The browser assistant can summarize pages, compare tabs and connect to selected Google apps, expanding both learning possibilities and the context exposed to one interaction.",
      "Google describes prompt-injection training and confirmation for sensitive actions, but schools still need narrow permissions, independent red testing and unaided learning evidence.",
    ],
    whyItMatters:
      "For AIEDHK, the release moves general-purpose AI into the browser layer where students encounter sources and school accounts, making provenance, permissions, prompt-injection resilience and independent judgment part of the same learning design.",
    sourceUrl:
      "https://blog.google/products-and-platforms/products/chrome/were-expanding-gemini-in-chrome-to-users-in-the-uk/",
    sourceUrls: [
      {
        label: "Google Chrome: Expanding Gemini in Chrome to users in the UK",
        url: "https://blog.google/products-and-platforms/products/chrome/were-expanding-gemini-in-chrome-to-users-in-the-uk/",
      },
    ],
    createdAt: "2026-07-14",
  },
  {
    id: "aied-080",
    slug: "student-ai-dependency-literacy-self-efficacy",
    title:
      "Self-reported AI literacy and self-efficacy showed different relationships with student dependency in a 478-person survey",
    authors: [
      "Hilit Maizel",
      "Maya Kalman Halevi",
      "Miri Sarid",
      "Rony Tutian",
    ],
    venue: "Education Sciences",
    year: 2026,
    type: "journal",
    tags: [
      "AI dependency",
      "AI literacy",
      "academic self-efficacy",
      "self-regulated learning",
      "higher education",
    ],
    image:
      "/images/research/covers/aied-080-student-ai-dependency-literacy-self-efficacy-2026.png",
    imageAlt:
      "Diverse university students plan an AI-assisted assignment while a lecturer helps them compare self-reported AI literacy, self-efficacy and independent study strategies",
    summaryImage:
      "/images/research/summary/aied-080-student-ai-dependency-literacy-self-efficacy-summary.png",
    summaryImageAlt:
      "Diverse university students plan an AI-assisted assignment while a lecturer helps them compare self-reported AI literacy, self-efficacy and independent study strategies",
    summaryAudio:
      "/audio/research/aied-080-student-ai-dependency-literacy-self-efficacy-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary:
      "A survey of 478 Israeli higher-education students found that technical dimensions of AI literacy were positively associated with self-reported AI dependency, while AI self-efficacy, academic self-efficacy and effort regulation were associated with less dependency. Its cross-sectional design identifies relationships, not causal effects.",
    fullSummary: `Maizel and colleagues examine why students with greater AI literacy do not all relate to AI in the same way. Their July 2026 Education Sciences article analyzes an online survey of 478 Israeli higher-education students recruited through a paid panel in August and September 2025. The sample included 228 college and 250 university students; 76 percent were women, the mean age was 25.8 years, and most were studying for a bachelor's degree. Fourteen of 492 initial respondents were excluded because their AI-dependency measure was missing.

The survey combined a five-item AI-dependency scale with the 20-item Meta AI Literacy Scale and measures of academic self-efficacy and learning-resource management. The dependency scale had a reported Cronbach's alpha of .85 and the overall AI-literacy scale an alpha of .91, although one ethics and emotional-regulation subscale was less reliable at .64. Resource-management measures covered time and study-environment management, effort regulation, peer learning and help seeking. The help-seeking items concern human sources, so they should not be interpreted as direct measures of asking an AI system for help.

In a regression with eight predictors, the model was statistically significant, F(8, 469) = 22.03, p < .001, with R squared of .273 and adjusted R squared of .261. Using and understanding AI was the strongest positive predictor of self-reported dependency, with a standardized coefficient of approximately .404. Detecting AI was also a smaller positive predictor. In contrast, AI self-efficacy, academic self-efficacy and effort regulation were associated with lower dependency. These coefficients describe relationships after accounting for the included variables; they do not establish which factor came first.

The authors also describe four profiles. High literacy with low dependency included 156 students, or 32.6 percent; moderate literacy with moderate dependency included 127; low literacy with low dependency included 110; and high literacy with high dependency included 85, or 17.8 percent. The high-literacy, low-dependency group reported the strongest academic self-efficacy, time and study management, and effort regulation. Help seeking did not differ significantly across the profiles. The coexistence of two high-literacy groups is more informative than a simple claim that literacy either prevents or causes dependency.

Important limits remain. The cross-sectional, self-report design cannot establish causal direction: frequent AI use may build technical knowledge, technical confidence may encourage more use, or unmeasured factors may affect both. The paid Israeli panel, high proportion of women and single survey period limit generalization. No chat logs, assignment records or independent learning outcomes were collected. The dependency scale also should not be equated with usage frequency, clinical addiction or proof that a student's learning has deteriorated.

For Hong Kong higher education, the study supports a broader AI-literacy design rather than a direct intervention claim. Courses can combine tool knowledge with academic self-efficacy, effort regulation, source checking and planned moments of human help. Evaluation should include multilingual and discipline-balanced samples, behavioral evidence and unaided performance over time. The practical question is not whether students know more AI functions, but whether they can decide when to use them, sustain effort and demonstrate understanding when assistance is removed.`,
    keyTakeaways: [
      "The analysis covered 478 higher-education students and modeled AI dependency using dimensions of AI literacy, self-efficacy and resource-management strategies.",
      "Self-reported using-and-understanding AI literacy was positively associated with dependency, while AI self-efficacy, academic self-efficacy and effort regulation were negatively associated with it.",
      "Because the study is cross-sectional and self-reported, its profiles and coefficients cannot show that AI literacy causes or prevents dependency.",
    ],
    whyItMatters:
      "For AIEDHK, the study shows why AI literacy should include self-belief, effort regulation and independent performance alongside operational skill: knowing how to use a tool is not the same as knowing when and how much to rely on it.",
    sourceUrl: "https://doi.org/10.3390/educsci16071123",
    sourceUrls: [
      {
        label: "Education Sciences: Understanding Student Dependency on AI",
        url: "https://www.mdpi.com/2227-7102/16/7/1123",
      },
    ],
    createdAt: "2026-07-14",
  },
];

export const researchNewsBackfill20260711To0712: ResearchPaper[] = [
  {
    id: "aied-079",
    slug: "news-england-ai-edtech-procurement-guidance",
    title:
      "Product news policy brief: England adds an AI-aware EdTech procurement checklist for schools",
    authors: ["UK Department for Education"],
    venue: "AI Policy and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: [
      "product news",
      "EdTech procurement",
      "data protection",
      "generative AI",
      "school governance",
    ],
    image:
      "/images/research/covers/aied-079-england-ai-edtech-procurement-guidance-2026.png",
    imageAlt:
      "A diverse school procurement team reviews an educational AI contract, data-flow map and safeguarding checklist in a bright meeting room",
    summaryImage:
      "/images/research/summary/aied-079-england-ai-edtech-procurement-guidance-summary.png",
    summaryImageAlt:
      "A diverse school procurement team reviews an educational AI contract, data-flow map and safeguarding checklist in a bright meeting room",
    summaryAudio:
      "/audio/research/aied-079-england-ai-edtech-procurement-guidance-summary.m4a",
    summaryAudioTitle: "Listen to the product news policy brief",
    shortSummary:
      "Product news policy brief: England's Department for Education added a school EdTech procurement section on July 9. It asks schools to map data flows, examine AI training and cross-border storage, involve data-protection and safeguarding leads, set contract and exit controls, and monitor products after purchase.",
    fullSummary: `England's Department for Education added a new Procuring educational technology section to its Data protection in schools guidance on July 9, 2026. The parent guidance was first published in 2023, so July 9 is the amendment date rather than the launch of an entirely new manual. The section gives schools a practical sequence for assessing EdTech before purchase and after deployment. Generative AI appears within that broader procurement framework because suppliers may process pupil information, generate content or change how data are reused.

The guidance begins with data protection by design and by default. Schools should identify their educational purpose, limit collection to the minimum necessary data and leave non-core features disabled unless there is a justified reason to enable them. A data protection officer should be involved from the outset. Where processing is likely to create high risks, such as pupil profiling or large-scale biometric use, the school should complete a data protection impact assessment and update it when the product or processing changes.

Procurement teams are told to map the full data lifecycle and establish whether the school and supplier act as controller, processor or joint controllers. They should identify subprocessors and data locations, then place security, access, breach notification, retention, deletion or return, and audit expectations into the contract. The guidance also recommends authentication, encryption and logging, along with an exit plan. These provisions matter because a school may need to recover or delete information when a service changes ownership, terms or technical architecture.

An AI writing-tool example makes the test concrete. The hypothetical supplier could use pupil-entered text to train its AI, store information outside the United Kingdom and offer no way to disable training. The school decides not to proceed. The section also asks AI suppliers to explain moderation, model training, controls, and how they address inaccurate or biased output. Authorized use, human monitoring and review by both the data-protection and safeguarding leads remain necessary after a product passes initial procurement.

This is regulatory and operational guidance, not an EdTech certification or an empirical study. Following its questions does not prove that a system is accurate, accessible, safe in every interaction or educationally effective. Its legal setting is England and UK data-protection law; requirements cannot simply be presented as Hong Kong law. Supplier answers also need verification, while software updates, new subprocessors and changed defaults can invalidate an earlier assessment. Ongoing monitoring is therefore part of the guidance's logic, not an optional final step.

Hong Kong schools can adapt the checklist without importing its legal claims. A local review can document purpose, data minimization, model-training use, cross-border transfers, subprocessors, safeguarding routes, accessibility, audit evidence and deletion at exit, then map each decision to the Personal Data (Privacy) Ordinance and institutional policy. Product quality should be assessed separately through curriculum fit and independent learning evidence. The lasting contribution is a governance pattern: define the educational need, inspect the whole data chain, contract for control and revisit the decision when the product changes.`,
    keyTakeaways: [
      "Product news policy brief: the UK Department for Education added the EdTech procurement section on July 9; the wider data-protection manual predates that amendment.",
      "Schools are asked to map data roles and locations, examine AI training, involve data-protection and safeguarding leads, and contract for security, deletion and exit.",
      "The guidance is not a product certification or Hong Kong legal rule; educational effectiveness and local compliance still require separate evidence and review.",
    ],
    whyItMatters:
      "For AIEDHK, the guidance turns broad AI-governance principles into procurement questions that a school can assign, document and revisit, while keeping data compliance separate from evidence that a tool actually supports learning.",
    sourceUrl:
      "https://www.gov.uk/guidance/data-protection-in-schools/procuring-educational-technology-edtech",
    sourceUrls: [
      {
        label: "UK Department for Education: Procuring educational technology",
        url: "https://www.gov.uk/guidance/data-protection-in-schools/procuring-educational-technology-edtech",
      },
      {
        label:
          "UK Department for Education: Data protection in schools updates",
        url: "https://www.gov.uk/guidance/data-protection-in-schools/updates",
      },
      {
        label:
          "UK Department for Education: Generative AI and data protection in schools",
        url: "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools",
      },
    ],
    createdAt: "2026-07-12",
  },
  {
    id: "aied-078",
    slug: "ai-english-language-education-systematic-review",
    title:
      "A review of 101 higher-education English-language studies maps five roles for AI and recurring evidence gaps",
    authors: ["Yanping Wang", "Zuwati Hasim", "Ling Wu", "Yujia Fang"],
    venue: "Cogent Education",
    year: 2026,
    type: "review",
    tags: [
      "AI in education",
      "English language teaching",
      "systematic review",
      "higher education",
      "AI literacy",
    ],
    image:
      "/images/research/covers/aied-078-ai-english-language-education-systematic-review-2026.png",
    imageAlt:
      "A racially diverse university language class evaluates AI-supported writing, speaking, translation and feedback activities with an instructor",
    summaryImage:
      "/images/research/summary/aied-078-ai-english-language-education-systematic-review-summary.png",
    summaryImageAlt:
      "A racially diverse university language class evaluates AI-supported writing, speaking, translation and feedback activities with an instructor",
    summaryAudio:
      "/audio/research/aied-078-ai-english-language-education-systematic-review-summary.m4a",
    summaryAudioTitle: "Listen to the review summary",
    shortSummary:
      "A systematic review retained 101 empirical studies of AI in higher-education ESL and EFL from 1,536 records. It identified five broad roles for AI and generally positive reports, while finding regional and skill imbalances, uneven methods, overreliance risks and limited evidence about culture, equity and durable outcomes.",
    fullSummary: `Wang and colleagues systematically review how artificial intelligence has been used in English-language teaching and learning in higher education. Their July 2026 Cogent Education article covers empirical ESL and EFL research published from 2020 to January 17, 2025. The team searched Web of Science, Scopus, ScienceDirect and ERIC under a PRISMA process. The scope is deliberately narrower than a general review of educational technology: participants had to be higher-education English-language learners or teachers, and the work had to report empirical evidence.

The searches returned 1,536 records. After 105 duplicates were removed, 1,431 titles and abstracts were screened. The reviewers sought 296 full texts, could not retrieve two, assessed 294 and excluded 193, leaving 101 studies. Non-English publications, non-empirical papers and studies centered on native-language learning or unclear learner profiles were excluded. Three authors screened independently after a ten-paper calibration exercise, with a senior researcher resolving disagreements. All included studies were appraised using the 2018 Mixed Methods Appraisal Tool.

The synthesis combined descriptive and thematic analysis with latent Dirichlet allocation. It organized applications into five functional families and five recurring educational roles: teaching assistant, learning companion, assessment and feedback provider, translation and comprehension support, and personalized learning or motivation support. Publication volume rose sharply across the review period, especially as generative AI became easier to access. Yet activity was regionally concentrated, language skills were studied unevenly, and mixed-method, student-focused designs were especially common.

Across the included literature, researchers often reported improved engagement, language practice, feedback access, writing support or learner confidence. The review also identifies repeated concerns: overreliance, inaccurate or variable feedback, limited cultural adaptability, inequitable access, privacy and ethical uncertainty. These patterns should be read as a map of reported findings, not a pooled effect estimate. A large number of favorable conclusions across small or short studies cannot establish that one AI approach reliably improves every learner's proficiency.

The review itself is bounded by English-language publication, four databases and a higher-education ESL/EFL focus. Its evidence base ends in January 2025, before later products and policies. Many original studies use localized convenience samples, brief interventions, self-report or quasi-experimental designs, and the literature is weighted toward writing. The article does not provide a meta-analytic causal effect, and publication patterns may favor novel or positive findings. Long-term retention, unaided performance and culturally responsive behavior therefore remain important gaps.

For Hong Kong universities and teacher education, the five-role framework can structure a disciplined pilot portfolio. Institutions can test feedback, conversation, translation and personalization separately across Cantonese, English and Putonghua, with teacher review and source checking. Research should include receptive and oral skills as well as writing, compare assisted work with delayed unaided performance, and report access across student groups. Teacher workload and the reliability of corrective feedback should also be measured rather than assumed. The review supports targeted experimentation, not blanket adoption: each role needs a defined learning purpose, local language evidence and an outcome that remains meaningful after the tool is removed.`,
    keyTakeaways: [
      "The PRISMA review retained 101 empirical higher-education ESL and EFL studies from 1,536 records across four databases.",
      "AI was grouped into five roles spanning teaching assistance, learning companionship, feedback, translation and comprehension, and personalized support.",
      "Regional, skill and methodological imbalances mean generally positive reports do not establish a pooled causal or durable learning benefit.",
    ],
    whyItMatters:
      "For AIEDHK, the review supplies a usable map of AI roles in university language education while showing where Hong Kong needs stronger local evidence: multilingual performance, teacher mediation, equity and learning that persists without assistance.",
    sourceUrl: "https://doi.org/10.1080/2331186X.2026.2696619",
    sourceUrls: [
      {
        label: "Cogent Education: AI in English language teaching and learning",
        url: "https://www.tandfonline.com/doi/full/10.1080/2331186X.2026.2696619",
      },
    ],
    createdAt: "2026-07-12",
  },
  {
    id: "aied-077",
    slug: "news-unesco-multilingual-youth-ai-assistant",
    title:
      "Product news: UNESCO IITE seeks a shared five-language youth AI assistant with risk-aware prompt optimization",
    authors: ["UNESCO Institute for Information Technologies in Education"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: [
      "product news",
      "UNESCO IITE",
      "multilingual chatbot",
      "youth safety",
      "prompt optimization",
    ],
    image:
      "/images/research/covers/aied-077-unesco-multilingual-youth-ai-assistant-2026.png",
    imageAlt:
      "A diverse youth support team reviews multilingual AI conversations, curated knowledge and risk-escalation pathways with student representatives",
    summaryImage:
      "/images/research/summary/aied-077-unesco-multilingual-youth-ai-assistant-summary.png",
    summaryImageAlt:
      "A diverse youth support team reviews multilingual AI conversations, curated knowledge and risk-escalation pathways with student representatives",
    summaryAudio:
      "/audio/research/aied-077-unesco-multilingual-youth-ai-assistant-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary:
      "Product news: UNESCO IITE invited proposals to consolidate Oilo and Aspan into a shared five-language Telegram solution and build a youth AI assistant with prompt clarification and risk recognition. The July 10 specification defines responsible-development requirements but does not document a completed or evaluated product.",
    fullSummary: `UNESCO's Institute for Information Technologies in Education published a call for proposals on July 10 for a new multilingual AI-enabled chatbot and the consolidation of two existing services. Proposals were due on July 27. The notice is a procurement specification, not a product launch or contract-award announcement. It nevertheless provides an unusually concrete public description of the intended system, delivery responsibilities and responsible-AI checks for a service aimed at students and young people in Eastern Europe and Central Asia.

One workstream would consolidate the Oilo and Aspan chatbots on a shared Telegram solution supporting Russian, Kyrgyz, Kazakh, Turkmen and Uzbek. The services would retain distinct identities and functions while drawing on a common technical core, curated knowledge and safety logic. A separate AI Assistant for students and young people would operate through VK and/or Telegram. The specification says the tools should remain free for end users. An earlier UNESCO IITE account described Oilo as using expert-curated information on health, mental health, relationships and safety.

The proposed Prompt Optimization Tool is designed to clarify or reformulate a user's query in real time. It should identify the topic and level of risk, then help produce a safer, more structured and evidence-informed response. This intermediate step could be valuable when a young person's wording is brief, ambiguous or emotionally charged. It is also a consequential classifier: a missed risk or poorly reframed question could send the conversation in the wrong direction. The public notice does not report measured accuracy for topic detection, reformulation or escalation.

The requested service includes high-risk response protocols, testing, correction of critical defects, technical documentation and source-code handover. The contractor would also address relevant sections of UNESCO's Ethical Impact Assessment 2.0 and provide hosting, model access, APIs and maintenance through the end of 2026. These requirements make governance part of the build rather than an afterthought. They do not specify which bidder, model or final architecture would be selected, and a written safety requirement is not evidence that the deployed system will satisfy it.

The boundaries should remain prominent in publication. No contract award, completed assistant, user study, safety audit, uptime result or learning outcome is established by the call. Telegram and VK access varies by jurisdiction and institutional policy. Curated information can become outdated, multilingual meaning can shift, and a youth-facing chatbot cannot replace professional health, mental-health or safeguarding services. Reporting should therefore say UNESCO IITE invited technical proposals, not that UNESCO had already launched a five-language assistant.

For Hong Kong, the specification offers a governance pattern rather than a ready product. A local youth service would need Traditional Chinese, Cantonese and English evaluation, locally verified support information, Personal Data (Privacy) Ordinance review, age-appropriate consent and clear handoff to trusted adults or emergency resources. Procurement should test false negatives and false positives in risk classification and let domain experts review reformulations. The educational value lies in making curated evidence, multilingual quality, risk routing and accountable human support visible requirements before development begins.`,
    keyTakeaways: [
      "Product news: UNESCO IITE's July 10 call sought a five-language shared Telegram core for Oilo and Aspan plus a new youth AI assistant.",
      "The specification asks a prompt-optimization layer to clarify queries, identify topics and risk, and support structured, evidence-informed responses.",
      "This is a procurement brief, not proof of a launched, awarded, safe or effective service; local language and safeguarding validation remain essential.",
    ],
    whyItMatters:
      "For AIEDHK, the call shows how multilingual capability, curated knowledge, risk classification, maintenance and human escalation can be specified before a youth AI product is built rather than added after deployment.",
    sourceUrl:
      "https://iite.unesco.org/announcements/call-for-proposals-technical-services-for-the-development-of-a-new-multilingual-ai-enabled-chatbot-with-an-embedded-prompt-optimization-tool-and-the-consolidation-of-oilo-and-aspan-chatbots-on-a-share/",
    sourceUrls: [
      {
        label:
          "UNESCO IITE: Call for proposals for multilingual AI-enabled chatbots",
        url: "https://iite.unesco.org/announcements/call-for-proposals-technical-services-for-the-development-of-a-new-multilingual-ai-enabled-chatbot-with-an-embedded-prompt-optimization-tool-and-the-consolidation-of-oilo-and-aspan-chatbots-on-a-share/",
      },
      {
        label: "UNESCO IITE: Oilo chatbot background",
        url: "https://iite.unesco.org/highlights/oilo-chatbot-sex-ed-kyrgyzstan-en/",
      },
    ],
    createdAt: "2026-07-11",
  },
  {
    id: "aied-076",
    slug: "interactive-llm-learning-dashboard-reflection",
    title:
      "An eliciting LLM dashboard prompted more reflective dialogue and showed a trend toward stronger learning-judgment calibration",
    authors: [
      "Laura Graf",
      "Patrick Bassner",
      "Maximilian Anzinger",
      "Felix Dietrich",
      "Stephan Krusche",
      "Oleksandra Poquet",
    ],
    venue: "Education and Information Technologies",
    year: 2026,
    type: "journal",
    tags: [
      "learning analytics",
      "LLM pedagogical agent",
      "learning dashboard",
      "self-assessment",
      "human-AI interaction",
    ],
    image:
      "/images/research/covers/aied-076-interactive-llm-learning-dashboard-reflection-2026.png",
    imageAlt:
      "A diverse computer science class uses a learning dashboard to record self-assessments and discuss algorithms with a teacher and an AI dialogue panel",
    summaryImage:
      "/images/research/summary/aied-076-interactive-llm-learning-dashboard-reflection-summary.png",
    summaryImageAlt:
      "A diverse computer science class uses a learning dashboard to record self-assessments and discuss algorithms with a teacher and an AI dialogue panel",
    summaryAudio:
      "/audio/research/aied-076-interactive-llm-learning-dashboard-reflection-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary:
      "A five-week exploratory study with 30 computer-science students compared no agent, a telling LLM agent and an eliciting agent inside a learning dashboard. The eliciting condition produced more reflective messages and showed descriptive trends toward clearer relationships between self-judgments and mastery estimates, but the study did not test achievement gains.",
    fullSummary: `Graf and colleagues rethink a learning dashboard as an interactive space rather than a static display. Their July 2026 Education and Information Technologies article reports a five-week exploratory case study in an introductory algorithms and data-structures course at a European university. Thirty volunteer computer-science students were compensated and randomly assigned to one of three conditions: a dashboard without a pedagogical agent, an agent that mainly told students information, or an agent designed to elicit reflection through questions. The small sample makes the work exploratory despite the randomized assignment.

The dashboard combined learning analytics with a GPT-4o pedagogical agent and a Judgment of Learning prompt. Students first estimated their own understanding; the interface then revealed a system estimate derived from course activity and performance. The agent could use tools to retrieve exercises, scores, timestamps, competency information and lecture slides. Its ReAct-style process could issue several tool requests for one message. The telling and eliciting conditions therefore differed principally in dialogue strategy, not simply in whether an LLM or analytics data were present.

Reflective messages appeared more often in the eliciting condition than in the telling condition. The reported two-proportion test was z = 2.47, p = .013. This supports a bounded interaction claim: asking learners to explain and inspect their thinking changed the observed dialogue. It does not establish that students acquired more algorithmic knowledge. Static analytics alone were not highly salient to many participants; 70 percent said they did not actively attend to the dashboard visualizations while making their self-rating.

The eliciting condition recorded 104 learning judgments. Those judgments correlated with confidence, progress and system-estimated mastery, with the mastery relationship reaching r = .482, p < .001, in the third interval. The telling condition did not show significant overall relationships on the same measures. Curiosity was also important: 83 percent of participants said wanting to see the system rating motivated them to submit a judgment. These patterns suggest developing calibration, but multiple observations came from a small number of learners and should not be treated as independent proof of improvement.

System quality was imperfect. In an audit of 284 randomly sampled agent responses, 13 percent were rated faulty and 37 percent very useful; during the first two weeks, 37 percent were faulty. The study lasted only five weeks, involved one computer-science course and used a self-selected, paid sample. It did not directly measure changed study behavior, course examination gains, delayed retention or transfer. The findings therefore support more testing of elicitation and calibration, not a claim that an LLM dashboard improves learning outcomes.

For Hong Kong universities and secondary schools, a useful replication could ask learners to explain a mastery judgment before any system score is shown, then test whether that explanation predicts and improves later unaided work. The dashboard should be evaluated in Cantonese, English and Putonghua, with curriculum-grounded retrieval, teacher review and visible correction routes for faulty responses. Engagement, calibration and achievement should be reported separately. The design is promising because it turns analytics into a conversation, but educational value depends on accurate support and evidence beyond the conversation itself.`,
    keyTakeaways: [
      "Thirty students were assigned to no-agent, telling-agent or eliciting-agent dashboard conditions during a five-week introductory computing course.",
      "Eliciting prompts produced more reflective messages and showed descriptive trends toward stronger relationships between learning judgments and system mastery estimates.",
      "The small exploratory study and substantial early response faults do not establish improved achievement, retention or transfer.",
    ],
    whyItMatters:
      "For AIEDHK, the study identifies a testable design choice for learning analytics: ask students to articulate their judgment before revealing the system estimate, then evaluate reflection, calibration and independent learning as separate outcomes.",
    sourceUrl: "https://doi.org/10.1007/s10639-026-14082-1",
    sourceUrls: [
      {
        label:
          "Education and Information Technologies: Interactive learning dashboards",
        url: "https://link.springer.com/article/10.1007/s10639-026-14082-1",
      },
      {
        label: "Technical University of Munich: Publication record",
        url: "https://portal.fis.tum.de/en/publications/interactive-learning-dashboards-rethinking-learning-visualisation/",
      },
    ],
    createdAt: "2026-07-11",
  },
];
