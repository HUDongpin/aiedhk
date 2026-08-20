import type { ResearchPaper } from "@/lib/types";

export const researchNewsBackfill20260811To0821: ResearchPaper[] = [
  {
    id: "aied-109",
    slug: "news-concise-output-style-gateway-cache-control",
    title: "Product news: Claude Code 2.1.237 adds a concise output style and repairs gateway prompt caching",
    authors: ["Anthropic"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Claude Code 2.1.237", "output styles", "prompt caching", "AI workflow literacy"],
    image: "/images/research/covers/aied-109-concise-output-style-gateway-cache-control-2026.png",
    imageAlt: "A diverse university project team reviews a compact result panel, a gateway diagram, and a verification checklist in a bright computing studio",
    summaryImage: "/images/research/summary/aied-109-concise-output-style-gateway-cache-control-summary.png",
    summaryImageAlt: "A diverse university project team reviews a compact result panel, a gateway diagram, and a verification checklist in a bright computing studio",
    summaryAudio: "/audio/research/aied-109-concise-output-style-gateway-cache-control-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Claude Code 2.1.237 introduces a built-in Concise output style and fixes prompt caching for sessions that use an LLM gateway or custom base URL. The release can reduce narration and repeated processing, but brevity and cache efficiency do not establish correctness. Educational teams should preserve task requirements, evidence, tests, and review notes outside the presentation style.",
    fullSummary: `Anthropic released Claude Code 2.1.237 with two changes that matter for educational and research workflows: a built-in Concise output style and a repair to prompt caching when a session uses an LLM gateway or custom base URL. The style is selected in the output-style configuration and asks Claude to lead with results while reducing preamble and narration. The cache fix addresses infrastructure that routes requests through an institutional or third-party gateway rather than directly to the default service.

Presentation style and reasoning quality are different properties. A concise response can help a student or developer see a result, test failure, or requested edit without searching through extensive narration. It may also reduce the temptation to treat fluent process commentary as proof that careful reasoning occurred. Yet shorter output can omit assumptions, uncertainty, source boundaries, or rejected alternatives if the task does not explicitly require them. The style should therefore be treated as a communication preference, not a verification setting.

Prompt caching has a different function. A cache can reuse stable parts of a request so repeated turns require less processing. When a gateway or custom base URL is involved, a cache error can increase latency or cost and can make session behavior less predictable. Repairing that path improves operational consistency, but it does not guarantee that the cached context is current or appropriate. A stale instruction, incorrect requirement, or sensitive detail remains problematic even when it is cached efficiently.

In a course or research lab, teams can separate four layers of evidence. The task specification records what the system was asked to do. The source record identifies the documents, code revision, and data available. The execution record captures model, settings, gateway, and tests. The review record explains which human checked the output and what changed after that check. An output style may change the final presentation, while a cache may change performance, but neither should erase these layers.

A useful classroom exercise compares the same bounded coding task in standard and concise styles. Learners score both responses for task completion, unsupported claims, visible assumptions, test evidence, and ease of review. They then inspect the actual code diff and run the same tests. If the concise response is easier to use but hides a necessary qualification, students revise the task contract so the qualification remains mandatory. If both responses fail the same test, they see directly that verbosity was never the deciding evidence.

For AIEDHK, the release is a reminder that interface efficiency should support accountable work. Institutions using gateways should document routing and retention rules, monitor cost and cache behavior, and keep sensitive context within approved boundaries. Teachers can allow concise presentation while requiring evidence artifacts that cannot be compressed away: sources, assumptions, test results, limitations, and a named reviewer. The product update improves control over how work is presented and processed; educational trust still depends on what can be independently inspected.`,
    keyTakeaways: [
      "Product news: Claude Code 2.1.237 adds a Concise output style that changes presentation, not the evidential standard for a result.",
      "The gateway prompt-cache fix can improve efficiency and consistency, but teams must still manage stale context, routing, privacy, and cost.",
      "Educational workflows should preserve specifications, sources, tests, limitations, and human review regardless of output length.",
    ],
    whyItMatters: "For AIEDHK, the release makes a useful distinction between communication efficiency and trustworthy evidence: concise AI work should remain fully testable, attributable, and reviewable.",
    sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.237",
    sourceUrls: [
      { label: "Anthropic: Claude Code 2.1.237 release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.237" },
    ],
    createdAt: "2026-08-21",
  },
  {
    id: "aied-108",
    slug: "learnai-just-in-time-cross-disciplinary-co-creation",
    title: "LearnAI piloted a two-layer route from campus AI awareness to supervised co-creation",
    authors: ["Weihao Qu", "Ling Zheng", "Chris Buzaid", "Daniel Crawford"],
    venue: "arXiv preprint",
    year: 2026,
    type: "conference",
    tags: ["AI co-creation", "peer tutoring", "cross-disciplinary learning", "AI readiness", "higher education"],
    image: "/images/research/covers/aied-108-learnai-just-in-time-co-creation-2026.png",
    imageAlt: "A trained undergraduate tutor supports two learners from different disciplines as they frame an AI project and verify a working prototype in a university studio",
    summaryImage: "/images/research/summary/aied-108-learnai-just-in-time-co-creation-summary.png",
    summaryImageAlt: "A trained undergraduate tutor supports two learners from different disciplines as they frame an AI project and verify a working prototype in a university studio",
    summaryAudio: "/audio/research/aied-108-learnai-just-in-time-co-creation-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Qu and colleagues describe LearnAI, a university framework that paired short course-embedded introductions across 18 courses with optional one-to-one co-creation led by trained undergraduate tutors. Thirty-five clients produced 36 portfolios and more than 20 deployed applications. Interviews and a seven-person readiness comparison are preliminary, so the report supports feasibility and design learning rather than causal claims about skill growth.",
    fullSummary: `Weihao Qu, Ling Zheng, Chris Buzaid and Daniel Crawford present LearnAI, a two-layer framework for supporting AI work across disciplines at a comprehensive teaching university. The problem is a familiar institutional gap. General workshops can introduce concepts without helping participants complete a real project, while technical courses may be inaccessible to learners without programming experience. LearnAI links broad exposure to optional, just-in-time collaboration so participants can enter at different levels.

The Wide-Exposure Layer placed short presentations inside 18 existing courses across five disciplines. Its purpose was to create shared awareness without requiring a separate course. The Customized Co-Creation Layer then offered one-to-one sessions with trained undergraduate tutors. These sessions followed a five-stage script: problem framing, tool-task mapping, iterative co-prompting, deployment and verification, and ethical reflection. The sequence matters because it begins with a human purpose and ends with inspection and consequences rather than treating prompting as the whole practice.

Across two semesters, 35 clients co-created 36 portfolio websites and more than 20 deployed web applications. The paper also reports interviews with five clients and two tutors. Participants often described moving from seeing AI as a passive answer machine toward treating it as a tool directed through iterative human decisions. The authors include boundary cases, including people who felt overwhelmed and people who intentionally rejected AI. These accounts make the framework more credible than a success-only showcase because non-use and difficulty remain legitimate outcomes.

The evidence is still preliminary. The experience comes from one institution, interview samples are small, and the paired readiness data include only seven participants. Completed portfolios and applications show activity and production, not independent mastery, long-term transfer, accessibility, or educational quality. Tutors may also differ in how they interpret the five stages. The study cannot establish that LearnAI caused readiness gains or that the model will scale with the same support quality.

For a stronger evaluation, an institution could document tutor training and fidelity, sample the reasoning behind tool choices, assess artifacts with independent rubrics, and measure whether clients can later frame and verify a new task without assistance. It should compare participation and outcomes across prior experience, discipline, disability, language, and access to paid tools. Costs, maintenance, privacy, authorship, and responsibility for deployed applications also belong in the evaluation.

For AIEDHK, LearnAI offers a practical design pattern: distribute introductory access, then provide supervised help at the moment a learner has a meaningful problem. Its most valuable feature is not the number of artifacts but the pedagogical script that connects purpose, selection, iteration, verification, and ethics. Hong Kong universities could adapt the pattern through cross-faculty peer tutors and bilingual support, while keeping evidence claims proportionate. The report demonstrates an adoptable workflow and early participant experience; it does not yet demonstrate durable learning or equitable impact. Any replication should publish participation, non-completion, support intensity, accessibility, and follow-up evidence so apparent reach can be distinguished clearly from sustained capability.`,
    keyTakeaways: [
      "LearnAI combines course-embedded exposure across 18 courses with optional one-to-one co-creation led by trained undergraduate tutors.",
      "Its five-stage script moves from problem framing and tool selection through iterative work, deployment, verification, and ethical reflection.",
      "Thirty-five clients produced substantial artifacts, but small interviews and seven paired readiness cases support feasibility rather than causal learning claims.",
    ],
    whyItMatters: "For AIEDHK, LearnAI supplies an actionable peer-support architecture while showing why production counts must be paired with independent evidence of mastery, access, and long-term transfer.",
    sourceUrl: "https://arxiv.org/abs/2608.19164",
    sourceUrls: [
      { label: "arXiv paper: LearnAI", url: "https://arxiv.org/abs/2608.19164" },
      { label: "Full HTML paper", url: "https://arxiv.org/html/2608.19164" },
    ],
    createdAt: "2026-08-21",
  },
  {
    id: "aied-107",
    slug: "news-session-model-defaults-cross-session-review",
    title: "Product news: Claude Code 2.1.236 clarifies default models and cross-session coordination",
    authors: ["Anthropic"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Claude Code 2.1.236", "model defaults", "cross-session messaging", "workflow governance"],
    image: "/images/research/covers/aied-107-session-model-defaults-cross-session-review-2026.png",
    imageAlt: "A lecturer and two student developers compare model settings and a cross-session handoff board while reviewing a software project in a bright lab",
    summaryImage: "/images/research/summary/aied-107-session-model-defaults-cross-session-review-summary.png",
    summaryImageAlt: "A lecturer and two student developers compare model settings and a cross-session handoff board while reviewing a software project in a bright lab",
    summaryAudio: "/audio/research/aied-107-session-model-defaults-cross-session-review-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Claude Code 2.1.236 adds an environment setting for the model used by new sessions and an idle-notification option for cross-session messages, alongside reliability fixes. The controls can make coordinated work more predictable, but institutions should record the actual model, inherited context, recipient, completion evidence, and human acceptance rather than assuming a default or notification proves correct execution.",
    fullSummary: `Anthropic's Claude Code 2.1.236 release adds two coordination controls with direct relevance to teaching teams and research software projects. The ANTHROPIC_DEFAULT_MODEL environment variable can set the model that new sessions begin with, while a selection made through the model command can still override and persist across restarts. A notify_when_idle option for cross-session SendMessage can ask another local session to alert the sender when it becomes idle. The release also includes reliability and usability fixes.

A default model is an operational starting point, not a reliable record of what completed a task. A user may override it, an organization may apply policy, a service may route a request differently, or a resumed session may retain an earlier choice. Models can differ in capability, speed, cost, context limits, safety behavior, and availability. In assessed or reproducible work, teams should capture the actual model and relevant settings at execution time rather than infer them from an environment configuration.

Cross-session notification solves a different problem: knowing when another strand of work may be ready for attention. It can reduce manual polling when several bounded tasks are coordinated. Yet an idle signal does not mean a task passed its acceptance criteria. A session may be idle because it completed, failed, reached an ambiguity, or awaits a review decision. The sender still needs the artifact, test output, limitations, and a clear status. Notification is transport metadata, not completion evidence.

These distinctions are teachable in project-based learning. A student team can assign one session to implement a function and another to review tests. Before work begins, the team records the task owner, chosen model, permitted files, required tests, and handoff format. When an idle notification arrives, the receiving student checks the commit or diff, reruns tests in a clean context, and records acceptance or rejection. If a model was overridden, the log is updated. The exercise turns orchestration into visible academic practice rather than invisible automation.

Institutional environments add governance questions. Administrators should decide where defaults are set, who may override them, whether premium routes need cost approval, and how sensitive course or research data moves between sessions. Cross-session messages should carry the minimum context necessary. They should not become a path for copying confidential records, credentials, or unverified assumptions into unrelated work. Shared machines also require clear ownership and retention rules.

For AIEDHK, the update supports a useful separation among configuration, coordination, and verification. Configuration chooses a starting model. Coordination helps sessions exchange status. Verification determines whether the educational or technical goal was met. A defensible workflow records all three and keeps a human accountable for acceptance. The release can make multi-session work smoother, but trustworthy learning and research still require an exact task contract, observable evidence, independent checks, and a clear final decision. This record should remain understandable to a teacher or reviewer who did not participate in the original sessions and cannot rely on their hidden context.`,
    keyTakeaways: [
      "Product news: Claude Code 2.1.236 lets organizations set the starting model for new sessions while preserving explicit user overrides.",
      "Idle notifications can improve coordination, but an idle session is not evidence that its task succeeded or passed review.",
      "Teams should record the actual model, delegated scope, transferred context, tests, limitations, and human acceptance for each handoff.",
    ],
    whyItMatters: "For AIEDHK, the release helps teach that configuration and coordination are not verification; accountable AI teamwork needs execution evidence and a named human decision.",
    sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.236",
    sourceUrls: [
      { label: "Anthropic: Claude Code 2.1.236 release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.236" },
    ],
    createdAt: "2026-08-20",
  },
  {
    id: "aied-106",
    slug: "semantics-constrained-counterfactual-recourse-education",
    title: "SC2R made student-risk recommendations machine-checkable without claiming causal improvement",
    authors: ["Ngoc Luyen Le", "Marie-Hélène Abel", "Bertrand Laforge"],
    venue: "arXiv preprint",
    year: 2026,
    type: "tool-dataset",
    tags: ["learning analytics", "counterfactual recourse", "semantic constraints", "OULAD", "decision support"],
    image: "/images/research/covers/aied-106-semantics-constrained-counterfactual-recourse-2026.png",
    imageAlt: "A student adviser and two adult learners review a feasible intervention timeline, a resource budget, and a learner-support dashboard in a university advising room",
    summaryImage: "/images/research/summary/aied-106-semantics-constrained-counterfactual-recourse-summary.png",
    summaryImageAlt: "A student adviser and two adult learners review a feasible intervention timeline, a resource budget, and a learner-support dashboard in a university advising room",
    summaryAudio: "/audio/research/aied-106-semantics-constrained-counterfactual-recourse-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Le, Abel and Laforge introduce SC2R, a counterfactual-recourse pipeline that combines calibrated risk prediction, integer programming, an RDF intervention vocabulary, and SHACL validation. Offline OULAD experiments show that semantic checks can reject plans that ignore timing, budget, immutability, or availability. The authors explicitly avoid causal outcome claims, so the contribution is operational feasibility rather than proof that an intervention helps students.",
    fullSummary: `Ngoc Luyen Le, Marie-Hélène Abel and Bertrand Laforge address a gap in student-risk analytics. A predictive model may identify a learner as likely to struggle, but a probability does not tell an adviser what can reasonably change. Generic counterfactual explanations can suggest altering variables that are immutable, unavailable, too late, or outside a learner's control. The authors propose SC2R, a semantics-constrained counterfactual recourse framework designed to make proposed intervention plans operationally meaningful.

SC2R combines four components. A calibrated predictive model estimates risk. Integer programming searches over discrete action variables for compact changes that could alter the prediction. A lightweight RDF vocabulary represents the intervention plan. SHACL validation checks constraints such as timing, budget, immutability, and service availability. This separation is important: mathematical optimization can find a model-valid plan, while semantic validation asks whether the plan is permitted and feasible in the actual educational setting.

The framework is evaluated offline on the Open University Learning Analytics Dataset using snapshots before assessments at two decision horizons. The authors report strong predictive performance, scalable generation of compact plans, and cases where semantic validation exposes infeasible recommendations that an optimization-only approach would accept. Their claim is carefully bounded. They do not say that following a generated plan causes a student to improve. They show that recourse becomes more actionable when recommendations can be checked against explicit operational constraints.

Several limitations remain. OULAD is historical and institution-specific. Recorded clicks, assessments, and demographics do not capture every reason a learner may disengage or every support available. A plan that changes a model prediction may not change learning, wellbeing, or persistence. Integer constraints encode institutional judgments that can be incomplete or inequitable. Calibration and feasibility can drift as courses, services, populations, and policies change. Students and advisers were not shown testing the recommendations in a live decision process.

A responsible pilot would begin with low-stakes, supportive actions and participatory review. Advisers, teachers, disability services, learners, and data-governance staff should define which variables are actionable and which must never become targets. Every recommendation should show its evidence, constraints, cost, timing, uncertainty, and alternative options. A human adviser should be able to reject it, while a student should be able to question the data and decline an intervention without penalty. Prospective evaluation should measure service access, burden, fairness, unintended effects, and actual outcomes.

For AIEDHK, SC2R illustrates a mature distinction between prediction and decision support. The technical contribution is not merely a better risk score; it is a representation that lets people and machines test whether a proposed response fits real rules. The explicit refusal to claim causality is equally valuable. Educational analytics should be judged by whether recommendations are feasible, contestable, equitable, and beneficial in practice, not by whether an optimization can move a probability across a threshold. Publishing rejected plans and the constraints that rejected them would also help institutions audit whose circumstances the formal rules fail to represent.`,
    keyTakeaways: [
      "SC2R joins calibrated prediction, integer-programming recourse, RDF plan representation, and SHACL validation for educational interventions.",
      "Semantic rules expose plans that may change a model prediction but violate timing, budget, immutability, or availability constraints.",
      "The offline OULAD study establishes operational feasibility, not causal effects on learning, persistence, wellbeing, or equity.",
    ],
    whyItMatters: "For AIEDHK, SC2R offers a strong pattern for accountable learning analytics: recommendations should be feasible and machine-checkable while remaining contestable and prospectively evaluated by people.",
    sourceUrl: "https://arxiv.org/abs/2608.17618",
    sourceUrls: [
      { label: "arXiv paper: SC2R", url: "https://arxiv.org/abs/2608.17618" },
      { label: "Full HTML paper", url: "https://arxiv.org/html/2608.17618" },
    ],
    createdAt: "2026-08-20",
  },
  {
    id: "aied-105",
    slug: "news-gemini-classroom-all-ages-contextual-study",
    title: "Product news: Gemini in Classroom expands to students of all ages with course-grounded study prompts",
    authors: ["Google Workspace"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Gemini in Classroom", "K-12 AI", "course-grounded prompts", "administrator controls"],
    image: "/images/research/covers/aied-105-gemini-classroom-all-ages-contextual-study-2026.png",
    imageAlt: "A racially diverse secondary-school class uses teacher-selected course materials to build a study guide while an educator reviews the activity on a classroom display",
    summaryImage: "/images/research/summary/aied-105-gemini-classroom-all-ages-contextual-study-summary.png",
    summaryImageAlt: "A racially diverse secondary-school class uses teacher-selected course materials to build a study guide while an educator reviews the activity on a classroom display",
    summaryAudio: "/audio/research/aied-105-gemini-classroom-all-ages-contextual-study-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Google is expanding Gemini in Classroom to eligible K-12 and higher-education students of all ages, with contextual prompts that can use a selected class, assignment instructions, and curriculum materials. Web rollout began August 10 and mobile rollout August 17. Admin controls remain decisive, and Google advises reviewing generated output, so access should be paired with age-appropriate teaching, privacy checks, and learning evidence.",
    fullSummary: `Google announced that Gemini in Google Classroom is expanding to eligible K-12 and higher-education students of all ages. The feature appears only where an administrator has granted the relevant access. Students can use the Gemini tab to create study guides, quizzes, flashcards, audio overviews, and other study materials grounded in class content. Contextual starter prompts can include a selected class, assignment title, instructions, and curriculum materials, reducing the need to copy information between products.

The rollout details matter. Google said full web rollout would begin August 10, 2026, with mobile rollout beginning August 17. Access is controlled through the Gemini in Classroom setting and is on by default for teachers and students of all ages unless an administrator has turned student access off. Availability spans Education Fundamentals, Standard, and Plus where the required services are enabled. A visible feature on one account therefore does not establish availability or approval for every learner.

Grounding study activity in teacher-provided material can reduce topic drift and help learners practice with the content actually taught. A learner might select an assignment and request a quiz, then use wrong answers to identify what to review. Yet course context does not guarantee correct questions, faithful explanations, balanced difficulty, or accessible presentation. Generated material may overemphasize what is easy to extract, disclose information through an inappropriate sharing path, or encourage answer-seeking rather than productive recall and explanation.

Age expansion raises additional responsibilities. Schools need clear notices for students and families, role verification, data-retention and sharing rules, and procedures for harmful or inaccurate output. Teachers should decide when AI supports the learning goal and when independent work is required. Younger learners need explicit instruction in checking claims, protecting personal information, and asking an adult for help. The vendor itself advises users to review generated content because AI can make mistakes and to adapt outputs to local context and policy.

A defensible classroom pilot can begin with one teacher-selected unit and a small set of permitted activities. Teachers review generated quizzes against the curriculum, accessibility needs, and likely misconceptions before assigning them. Learners label which source material supports each answer, explain corrections, and complete an unaided task afterward. Administrators inspect permissions and access logs, while families and students have a route to ask questions or opt out where policy permits.

For AIEDHK, the product news is significant because the boundary of school-managed generative AI now includes younger students and tighter course context. The opportunity is not merely faster content creation; it is a teachable environment for retrieval, practice, feedback, and verification. The safeguard is to keep educators in control of purpose and evidence. Rollout status, administrator approval, age-appropriate support, source fidelity, accessibility, privacy, and independent learning should all be visible before convenience is interpreted as educational value. Schools should publish a plain-language account of these boundaries so learners and families can understand what the feature does, what it records, and where to seek help.`,
    keyTakeaways: [
      "Product news: Gemini in Classroom is expanding to eligible students of all ages with prompts grounded in selected classes, assignments, and curriculum materials.",
      "The staged web and mobile rollout depends on administrator-controlled access; visibility in one account does not establish institution-wide approval.",
      "Schools should pair course grounding with teacher review, age-appropriate AI literacy, privacy controls, accessibility, and unaided evidence of learning.",
    ],
    whyItMatters: "For AIEDHK, the expansion creates a concrete K-12 governance case: course context can improve relevance, but educator control and independent learning evidence must remain the adoption standard.",
    sourceUrl: "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html",
    sourceUrls: [
      { label: "Google Workspace: Gemini in Classroom for students of all ages", url: "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html" },
    ],
    createdAt: "2026-08-18",
  },
  {
    id: "aied-104",
    slug: "scaffold-do-not-substitute-ai-harm-cycle",
    title: "Students' essays supported a scaffold-don't-substitute principle, but not a causal harm estimate",
    authors: ["Lucile Favero", "Juan Antonio Pérez-Ortiz", "Tanja Käser", "Nuria Oliver"],
    venue: "ACM AI Leadership Summit",
    year: 2026,
    type: "conference",
    tags: ["AI scaffolding", "cognitive offloading", "learner agency", "student voice", "responsible design"],
    image: "/images/research/covers/aied-104-scaffold-do-not-substitute-ai-harm-cycle-2026.png",
    imageAlt: "A teacher prompts a diverse group of secondary students to reason with question cards while an unused answer-generating tablet rests at the edge of the table",
    summaryImage: "/images/research/summary/aied-104-scaffold-do-not-substitute-ai-harm-cycle-summary.png",
    summaryImageAlt: "A teacher prompts a diverse group of secondary students to reason with question cards while an unused answer-generating tablet rests at the edge of the table",
    summaryAudio: "/audio/research/aied-104-scaffold-do-not-substitute-ai-harm-cycle-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Favero and colleagues organize educational AI risks across cognition, agency, emotional wellbeing, and ethics, then examine 49 International Baccalaureate essays. Eighty percent described reduced thinking through AI reliance, while students preferred tools that prompt recall and reflection rather than supply immediate solutions. The sample is exploratory and self-reported, so it motivates a design principle, not a prevalence or causal claim.",
    fullSummary: `Lucile Favero, Juan Antonio Pérez-Ortiz, Tanja Käser and Nuria Oliver argue that educational AI becomes harmful when it substitutes for the human capacities education is intended to develop. Their framework connects four dimensions: cognition, agency, emotional wellbeing, and ethics. Cognitive offloading can reduce effort; reduced effort can weaken a learner's sense of control; dependence and uncertainty can affect wellbeing; and these changes can intensify questions about responsibility and fairness. The authors describe this as a self-reinforcing cycle rather than four isolated risks.

The paper grounds the framework in an exploratory analysis of 49 International Baccalaureate argumentative essays about AI's impact. Eighty percent of the essays reported that reliance on AI reduces thinking. Students also described a preferred alternative: systems that withhold immediate answers, prompt recall, ask questions, and encourage reflection. The authors connect these requests with established learning-science principles and summarize the resulting design stance as scaffold, do not substitute.

Student voice is a strength of the study. Learners are often treated as recipients of AI policy rather than contributors to product design. Their essays reveal concerns and desired interactions in their own educational context. Still, the number 80 percent must be interpreted narrowly. The sample is small, comes from a particular programme, and consists of essays written for an argument task. It does not measure actual tool use, cognitive change, achievement, mental health, or the prevalence of an effect across students. Coding self-reports cannot establish that AI caused the harms described.

The proposed design principle is therefore best treated as a hypothesis and a requirement for testing. A scaffolded tutor might ask a learner to retrieve an idea before showing a hint, request a prediction before a simulation, or provide a partial step followed by an explanation prompt. A substitutive tool might produce the completed essay or solution immediately. Researchers can compare these designs on unaided retention, transfer, help-seeking, confidence calibration, frustration, agency, accessibility, and time. They should also examine whether withholding help disadvantages learners who need accommodations or foundational instruction.

Teachers can apply the principle without banning AI. They can specify phases in which learners first attempt, explain, or retrieve; allow graduated hints; require source checks; and assess a later task without assistance. Students should help define when support feels productive and when it feels controlling or evasive. Product teams should expose hint policies and let educators align them with age, subject, and learner needs.

For AIEDHK, the paper supplies a memorable orientation while modelling evidential restraint. The student essays justify taking substitution risks seriously, but they do not quantify causal harm. The next step is participatory, prospective evaluation of designs that preserve effort without denying appropriate support. Educational AI should be judged by the capacities learners retain and can exercise independently, not by the amount of work the system completes on their behalf. Designers should report when scaffolds frustrate, exclude, or delay learners as carefully as they report successful reflection, because support quality depends on responsive adjustment.`,
    keyTakeaways: [
      "The framework links cognitive offloading, agency, emotional wellbeing, and ethics in a potentially self-reinforcing educational harm cycle.",
      "Among 49 IB essays, 80 percent described reduced thinking through AI reliance and many preferred prompts, recall, and reflection over immediate answers.",
      "The exploratory self-report sample motivates scaffolded design experiments but cannot establish prevalence, causality, or measured learning harm.",
    ],
    whyItMatters: "For AIEDHK, scaffold, do not substitute is a strong product hypothesis that should be tested through unaided retention, transfer, agency, equity, and learner-participatory evidence.",
    sourceUrl: "https://arxiv.org/abs/2608.17451",
    sourceUrls: [
      { label: "arXiv paper: From Substitution to Scaffolding", url: "https://arxiv.org/abs/2608.17451" },
    ],
    createdAt: "2026-08-18",
  },
  {
    id: "aied-103",
    slug: "news-project-transcript-controls-selection-clearing",
    title: "Product news: Claude Code 2.1.234 improves project transcript controls and review ergonomics",
    authors: ["Anthropic"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Claude Code 2.1.234", "project configuration", "transcript governance", "review ergonomics"],
    image: "/images/research/covers/aied-103-project-transcript-controls-selection-clearing-2026.png",
    imageAlt: "A mixed-gender student software team reviews a project transcript folder, text selection controls, and an approval checklist on separate screens",
    summaryImage: "/images/research/summary/aied-103-project-transcript-controls-selection-clearing-summary.png",
    summaryImageAlt: "A mixed-gender student software team reviews a project transcript folder, text selection controls, and an approval checklist on separate screens",
    summaryAudio: "/audio/research/aied-103-project-transcript-controls-selection-clearing-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Claude Code 2.1.234 adds a configurable short directory name for per-project transcripts and a keybinding action that clears in-app text selection, alongside reliability fixes. These controls can improve hosted-session organization and keyboard review, but transcripts remain sensitive records. Courses and labs need approved storage, minimal retention, accessible alternatives, and evidence-based acceptance of every code change.",
    fullSummary: `Anthropic's Claude Code 2.1.234 release includes two modest controls that reveal larger governance questions. A CLAUDE_CODE_PROJECT_DIR_NAME environment variable lets hosts that assign each session a separate configuration directory choose a shorter name for the per-project transcript directory. A selection:clear keybinding action lets users bind a key to clear an in-application text selection. The release also includes fixes for reliability and interface behavior.

Transcript naming sounds administrative, but a transcript can contain prompts, source excerpts, file paths, code, errors, and model responses. In a school or research environment, some of that material may be confidential, copyrighted, personally identifiable, or security-sensitive. A convenient directory name should never be confused with a retention policy. Institutions need to know where transcripts are stored, which project and user own them, who can read them, whether they synchronize or back up, and when they are deleted. Names should help attribution without embedding student names or sensitive project details.

The selection-clearing action concerns review ergonomics. Keyboard users may select text while examining a long response, and a predictable way to clear that state can reduce accidental actions or confusion. Configurable keybindings can also support individual workflows. Accessibility cannot be inferred from one new command, however. Institutions should test screen-reader announcements, focus order, contrast, keyboard reachability, and error recovery with actual users. A feature can improve one interaction while leaving other barriers intact.

In a student software project, the relevant workflow begins before the agent session. The team defines the repository, permitted files, data classification, transcript location, and acceptance tests. During the session, students avoid pasting secrets or private records and keep source citations outside transient model commentary. Afterward, they inspect the exact diff, rerun tests, record unresolved limitations, and retain only the transcript evidence required by course or research policy. The source repository remains the authoritative artifact.

Hosted environments deserve special attention because per-session directories can multiply quickly. Administrators should test collision handling, access controls, cleanup, backup scope, and what happens when a session is resumed or moved. A short project label should map to a stable internal identifier. Learners should be told whether transcripts form part of assessment evidence and how to challenge an inaccurate or inappropriate record. Teachers should not use raw transcript length as a proxy for effort or understanding.

For AIEDHK, the release is useful because it makes infrastructure and interface choices visible. Responsible agent use is not only about model output; it includes the records created around that output and the human ability to inspect them. Transcript minimization, clear ownership, accessible controls, and clean-code verification belong in one workflow. Claude Code 2.1.234 can make hosted organization and keyboard use more manageable, but educational trust still rests on privacy rules, reproducible artifacts, and independent review rather than on session metadata. Periodic deletion audits should confirm that expired transcripts actually leave active storage and protected backups according to the published institutional retention schedule. Those audits should also document exceptions, responsible owners, and a dated corrective-action deadline.`,
    keyTakeaways: [
      "Product news: Claude Code 2.1.234 lets hosted environments choose shorter per-project transcript directory names and adds a selection-clearing keybinding action.",
      "Transcripts can contain sensitive educational and research context, so naming must sit inside explicit ownership, access, retention, and deletion rules.",
      "Review ergonomics help users inspect work, but accessibility and correctness require broader user testing, exact-diff review, and independent tests.",
    ],
    whyItMatters: "For AIEDHK, the update connects everyday agent settings with transcript governance and accessible review, two requirements that should accompany any classroom coding workflow.",
    sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.234",
    sourceUrls: [
      { label: "Anthropic: Claude Code 2.1.234 release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.234" },
    ],
    createdAt: "2026-08-17",
  },
  {
    id: "aied-102",
    slug: "generative-ai-authentic-object-oriented-programming-assessments-2026",
    title: "Five AI systems outscored the average OOP cohort but still failed compilation and advanced concepts",
    authors: ["Marina Lepp", "Joosep Kaimre"],
    venue: "arXiv preprint",
    year: 2026,
    type: "journal",
    tags: ["programming assessment", "object-oriented programming", "generative AI", "assessment design", "code evaluation"],
    image: "/images/research/covers/aied-102-generative-ai-object-oriented-programming-assessments-2026.png",
    imageAlt: "A programming lecturer and two diverse university students inspect compiled code, an inheritance diagram, and a grading rubric in a computer laboratory",
    summaryImage: "/images/research/summary/aied-102-generative-ai-object-oriented-programming-assessments-summary.png",
    summaryImageAlt: "A programming lecturer and two diverse university students inspect compiled code, an inheritance diagram, and a grading rubric in a computer laboratory",
    summaryAudio: "/audio/research/aied-102-generative-ai-object-oriented-programming-assessments-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Lepp and Kaimre evaluated ChatGPT-5.2, DeepSeek-V3, Gemini 2.5 Flash, Claude Sonnet 4.5, and Microsoft 365 Copilot on authentic introductory OOP tests and examinations using student grading criteria. Systems exceeded the historical average and often solved long tasks, yet some code did not compile and interfaces, abstract classes, inheritance, and image-based questions remained difficult. The results challenge take-home assessment validity without proving student learning.",
    fullSummary: `Marina Lepp and Joosep Kaimre revisit how current generative AI systems perform on authentic introductory object-oriented programming assessments. They evaluate ChatGPT-5.2, DeepSeek-V3, Gemini 2.5 Flash, Claude Sonnet 4.5, and Microsoft 365 Copilot using programming tests and examination tasks from a university course. Generated solutions are graded with the same criteria used for students and compared with historical student results and findings from the previous year.

All five systems scored above the average student cohort and often earned full marks on longer programming tasks. This is consequential for assessment design. A take-home task that once distinguished whether a novice could integrate several OOP ideas may now be completed convincingly by a widely available model. The paper also shows that high aggregate performance does not mean uniform capability. Some outputs failed to compile. Interfaces, abstract classes, inheritance-related problems, and graphics questions requiring image interpretation continued to produce errors.

Using authentic assessments and ordinary grading criteria is a strength because the evaluation speaks directly to existing course practice. The comparison across five systems also avoids treating one product as representative of all generative AI. Yet historical student averages and model scores answer different questions. Students worked under course conditions and learned over time; models responded to supplied tasks. A model's grade is not evidence that a learner who submits its output understands the code, can debug it, or can transfer the concepts to a new problem.

The study also requires temporal caution. Product names and versions will change, and prompts, tools, image inputs, sampling, or repeated attempts can alter results. Authentic tasks may enter future training data. A score from 2026 is therefore a snapshot rather than a permanent ranking. The paper identifies recurring failure patterns, but broader replication should record exact interfaces and settings, run several trials, test unseen tasks, and analyze why code fails instead of reporting only total marks.

For teaching, the findings support assessment redesign rather than a simple prohibition. Instructors can combine supervised coding, oral explanation, code tracing, debugging of unfamiliar defects, version-history review, and iterative projects tied to local decisions. Students may use AI in declared phases, then explain every design choice and complete a related task without assistance. Rubrics can reward tests, reasoning, maintainability, provenance, and response to feedback rather than only a final program.

For AIEDHK, the paper offers a current capability audit and a warning about construct validity. If an assessment intends to measure a student's independent OOP knowledge, an AI-generated solution can invalidate the inference even when the code is correct. If the goal includes responsible AI-supported development, the task should directly assess verification, debugging, attribution, and judgment. The observed strengths and compilation failures together make one principle clear: educators must assess the learner's accountable performance, not merely the polished artifact available at submission time. Updated tasks should be piloted for difficulty and accessibility so redesigned controls do not accidentally measure anxiety, typing speed, or prior tool access instead of programming knowledge.`,
    keyTakeaways: [
      "Five current AI systems exceeded the historical student average and often earned full marks on longer authentic introductory OOP tasks.",
      "Compilation failures and recurring problems with interfaces, abstract classes, inheritance, and image interpretation show uneven capability beneath high scores.",
      "Model performance challenges the validity of unsupervised product-only assessment but does not demonstrate student understanding, transfer, or debugging skill.",
    ],
    whyItMatters: "For AIEDHK, the study supports redesigning programming assessment around visible reasoning, supervised performance, debugging, provenance, and accountable AI use rather than final-code scores alone.",
    sourceUrl: "https://arxiv.org/abs/2608.16318",
    sourceUrls: [
      { label: "arXiv paper: Generative AI on OOP assessments", url: "https://arxiv.org/abs/2608.16318" },
    ],
    createdAt: "2026-08-17",
  },
  {
    id: "aied-101",
    slug: "news-mcp-oauth-redirect-reliability-institutions",
    title: "Product news: Claude Code 2.1.231 repairs MCP OAuth sign-in for pre-registered clients",
    authors: ["Anthropic"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Claude Code 2.1.231", "MCP OAuth", "connected tools", "institutional access"],
    image: "/images/research/covers/aied-101-mcp-oauth-redirect-reliability-institutions-2026.png",
    imageAlt: "A university technology administrator and two educators inspect an authorization flow between an AI assistant and approved campus services",
    summaryImage: "/images/research/summary/aied-101-mcp-oauth-redirect-reliability-institutions-summary.png",
    summaryImageAlt: "A university technology administrator and two educators inspect an authorization flow between an AI assistant and approved campus services",
    summaryAudio: "/audio/research/aied-101-mcp-oauth-redirect-reliability-institutions-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Claude Code 2.1.231 fixes an OAuth redirect-URI mismatch that could block MCP sign-in for services using pre-registered clients. Reliable authorization can make approved integrations usable, but it does not broaden legitimate access. Education teams should validate exact redirect URIs, scopes, account roles, token storage, revocation, audit logs, and data minimization before connecting institutional services.",
    fullSummary: `Anthropic released Claude Code 2.1.231 as a focused reliability update for Model Context Protocol connections. It fixes OAuth sign-in failures caused by a redirect URI mismatch when an MCP server uses a pre-registered OAuth client, with Slack named as an example. The change is narrow, but it concerns a critical boundary: how an AI coding environment receives delegated access to another service on a user's behalf.

OAuth is designed to let a user authorize limited access without handing the connecting application a password. The redirect URI is part of that control. After authorization, the service returns the user to an address registered for the client. Exact matching helps prevent authorization responses from being sent to an unintended location. A mismatch can block a legitimate connection, while loose or incorrectly configured redirects can create security risk. Repairing compatibility should therefore preserve strict validation rather than encourage broad wildcards.

In education, connected services may contain course discussions, research files, staff messages, student work, or administrative records. Successful sign-in does not mean every resource is appropriate for an agent to read. Scope, account role, workspace policy, channel membership, data classification, and the purpose of the task remain separate decisions. An instructor who can read a private conversation may still lack authority to expose it to an automated workflow or include it in assessment evidence.

A responsible integration test starts in a non-production workspace with synthetic data. Administrators register the exact redirect URI, request the minimum scopes, verify consent text, and observe where tokens are stored. They test denial, expiration, account switching, revocation, and removal of the MCP server. Logs should identify which user authorized which service and action without recording token values or unnecessary content. Security staff should also review the MCP server itself, its operator, update process, and data-retention terms.

For a classroom exercise, students can diagram the authorization flow and distinguish authentication, authorization, data access, and task acceptance. They identify what the user proves at sign-in, which permissions the client receives, what the agent can request, and which human remains responsible for the output. A successful connection is then tested with the least sensitive sample and removed afterward. This makes connected-tool literacy concrete rather than reducing OAuth to a login button.

For AIEDHK, the release is a useful reminder that reliability and governance must advance together. A broken redirect blocks approved work; a repaired redirect should restore only the access that policy and consent already permit. Institutions need an inventory of connected services, approved clients, scopes, owners, review dates, and revocation procedures. They should also require source provenance when connected content influences an answer. Claude Code 2.1.231 resolves a sign-in defect, but educational legitimacy still depends on least privilege, transparent consent, protected tokens, auditable use, and human judgment about the data and result. Regular access reviews should remove abandoned clients and confirm that former students, staff, and project members no longer retain delegated permissions.`,
    keyTakeaways: [
      "Product news: Claude Code 2.1.231 fixes OAuth redirect-URI mismatch failures for MCP servers using pre-registered clients.",
      "A successful connection restores technical access but does not expand the user's authority or make every institutional record suitable for agent use.",
      "Education deployments should test exact redirects, minimum scopes, token handling, revocation, auditability, server trust, and data minimization.",
    ],
    whyItMatters: "For AIEDHK, the fix turns a small release note into a practical connected-tool lesson: reliable OAuth must preserve least privilege, consent, provenance, and institutional accountability.",
    sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.231",
    sourceUrls: [
      { label: "Anthropic: Claude Code 2.1.231 release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.231" },
    ],
    createdAt: "2026-08-15",
  },
  {
    id: "aied-100",
    slug: "joint-course-grade-transformer-trace",
    title: "TRACE predicted courses and grades jointly, cutting grade error without establishing intervention benefit",
    authors: ["Paul Savala"],
    venue: "arXiv preprint",
    year: 2026,
    type: "tool-dataset",
    tags: ["course prediction", "grade prediction", "transformer", "learning analytics", "early warning"],
    image: "/images/research/covers/aied-100-joint-course-grade-transformer-trace-2026.png",
    imageAlt: "An academic adviser and two university students compare concurrent course schedules, predicted grade ranges, and an advising decision map",
    summaryImage: "/images/research/summary/aied-100-joint-course-grade-transformer-trace-summary.png",
    summaryImageAlt: "An academic adviser and two university students compare concurrent course schedules, predicted grade ranges, and an advising decision map",
    summaryAudio: "/audio/research/aied-100-joint-course-grade-transformer-trace-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Savala introduces TRACE, a transformer that represents courses by semester and jointly predicts a student's next course set and corresponding grades. On ten years of institutional data, joint training reduced mean absolute grade error by nearly 50 percent compared with the same architecture predicting grades alone and outperformed LSTM and graph baselines. External validity, fairness, calibration, and intervention effects remain open.",
    fullSummary: `Paul Savala introduces TRACE, a transformer-based model for jointly predicting which courses a student will take next and the grades associated with those courses. Many academic prediction systems flatten a transcript into a simple sequence. That representation can miss concurrency: several courses taken in the same semester may interact through workload, prerequisite knowledge, scheduling, and combinations of difficulty. TRACE encodes course activity by semester and learns the course set and grade task together.

The model uses a loss function that combines course-set prediction with grade prediction. Trained on ten years of institutional data, the joint approach reduced mean absolute grade error by nearly 50 percent compared with an otherwise identical architecture trained only to predict grades. It also outperformed LSTM-based sequential models and graph-neural-network approaches in the reported evaluation. The result suggests that predicting the future learning context can improve estimation of performance within that context.

The comparison is technically informative, but predictive accuracy is not the same as educational usefulness. A lower average error does not show whether predictions are calibrated for individual decisions, whether performance is similar across programmes and student groups, or whether an adviser can act constructively on the result. Institutional data reflect existing enrolment rules, opportunities, inequalities, withdrawals, and advising practices. A model can reproduce those patterns without explaining them or showing what would help a student.

The paper discusses early-detection use in higher education, which raises several design requirements. Predictions should be accompanied by uncertainty and the evidence available at that time. Students need a route to correct records and contest an interpretation. Advisers should avoid discouraging enrolment solely because a model expects a lower grade. Support offers should be separated from punitive actions, and institutions should test whether false positives or false negatives are concentrated in particular groups. Retraining and recalibration are necessary when courses, grading, or populations change.

A strong prospective study would compare an advising workflow using TRACE with ordinary advising under a pre-registered protocol. Outcomes could include appropriate support uptake, course completion, learning, wellbeing, delayed graduation, adviser workload, and student trust. The study should document what recommendations were made and whether students experienced additional opportunity or constraint. It should also test simpler baselines, missing-data sensitivity, temporal drift, privacy controls, and whether course-set predictions leak information unavailable at the decision point.

For AIEDHK, TRACE demonstrates why representation matters in learning analytics: concurrent courses are not merely independent events in a list. The reported error reduction is promising evidence for the modelling choice. It is not evidence that deployment improves student outcomes or that a predicted grade should direct a learner's path. Educational adoption requires calibrated and equitable performance, transparent limits, student participation, supportive intervention design, and prospective evaluation. A model can organize uncertainty for an adviser, but accountable people must decide how that uncertainty is used. Institutions should publish appeal routes and monitor whether predictions narrow student ambition or redirect resources away from those whose records are incomplete.`,
    keyTakeaways: [
      "TRACE represents courses by semester and jointly learns the next course set and corresponding grades rather than flattening history into one sequence.",
      "Joint training reduced mean absolute grade error by nearly 50 percent against the same grade-only architecture and beat reported LSTM and graph baselines.",
      "The retrospective result does not establish calibration, cross-institution validity, fairness, actionable support, or causal benefit from deployment.",
    ],
    whyItMatters: "For AIEDHK, TRACE shows a meaningful modelling advance while reinforcing that student-risk predictions need contestability, supportive use, subgroup evidence, and prospective outcome evaluation.",
    sourceUrl: "https://arxiv.org/abs/2608.13409",
    sourceUrls: [
      { label: "arXiv paper: TRACE", url: "https://arxiv.org/abs/2608.13409" },
      { label: "Full HTML paper", url: "https://arxiv.org/html/2608.13409" },
    ],
    createdAt: "2026-08-15",
  },
  {
    id: "aied-099",
    slug: "news-interactive-session-reliability-evidence",
    title: "Product news: Claude Code 2.1.228 repairs terminal redraw and command-discovery failures",
    authors: ["Anthropic"],
    venue: "AI Product and Learning Report",
    year: 2026,
    type: "policy-ethics",
    tags: ["product news", "Claude Code 2.1.228", "terminal reliability", "Windows Git", "workflow verification"],
    image: "/images/research/covers/aied-099-interactive-session-reliability-evidence-2026.png",
    imageAlt: "A computing instructor and two diverse students diagnose a frozen terminal view, a Git path diagram, and a test report in a bright lab",
    summaryImage: "/images/research/summary/aied-099-interactive-session-reliability-evidence-summary.png",
    summaryImageAlt: "A computing instructor and two diverse students diagnose a frozen terminal view, a Git path diagram, and a test report in a bright lab",
    summaryAudio: "/audio/research/aied-099-interactive-session-reliability-evidence-summary.m4a",
    summaryAudioTitle: "Listen to the product news report",
    shortSummary: "Product news: Claude Code 2.1.228 fixes rare interactive sessions that stopped redrawing while still running, improves discovery of Git and Git Bash on Windows, and repairs a terminal-interface state issue. The release improves observability and setup reliability, but a responsive screen is not completion evidence. Students should verify process state, repository changes, exit codes, and tests before accepting agent work.",
    fullSummary: `Anthropic's Claude Code 2.1.228 release repairs several reliability problems in interactive development. A rare internal layout error could leave a session running while the terminal stopped redrawing. The update also fixes cases where Git or Git Bash was not found on Windows when Claude Code launched from a parent folder of the installation. A further terminal-interface correction prevents a command path from unexpectedly changing session state. These are operational fixes rather than new model capabilities.

The redraw failure illustrates a basic observability problem. What a user sees in a terminal is a view of a process, not the process itself. If the screen freezes while work continues, a student may interrupt a valid operation, start a duplicate, or assume that a requested edit completed. Conversely, an animated interface can look active while no useful progress occurs. Reliable redraw reduces ambiguity, but users still need independent signals such as process state, file changes, exit codes, logs, and test results.

The Windows path fix addresses reproducibility across learning environments. Students often work on managed laptops with different installation paths, shells, permissions, and inherited environment variables. A tool that works only from one launch directory can create false differences in ability and consume instructional time. Courses should publish a small environment check that reports tool versions and repository status without exposing secrets. They should also provide a supported fallback and avoid grading students on undocumented machine-specific setup.

In a classroom coding workflow, the acceptance boundary should be explicit. Before an agent starts, the learner records the intended files and tests. If the interface appears frozen, the learner checks whether the process exists and whether outputs are changing before deciding to stop it. When control returns, the learner examines the exact diff, runs the required tests in a known working directory, and explains the result. A Git command being available only enables the workflow; it does not prove that the correct branch, commit, or remote was used.

These practices also matter in research computing. A stalled display during data transformation can tempt a researcher to rerun a job and overwrite or duplicate outputs. Project-specific temporary directories, idempotent scripts, clear timestamps, and immutable raw data reduce that risk. Teams should distinguish a tool defect from a model error, an environment error, and a failed research assumption because each requires a different response.

For AIEDHK, the product news supports teaching operational literacy alongside prompting. Learners need to understand processes, terminals, paths, repositories, and tests well enough to question what an AI development tool appears to be doing. Claude Code 2.1.228 improves the reliability of that view and removes a Windows setup failure. Trust still comes from a chain of evidence: known environment, bounded task, observed changes, successful checks, and human acceptance. Interface recovery is valuable precisely because it helps users reach that evidence without mistaking the screen for the result. That distinction also helps instructors diagnose support needs fairly.`,
    keyTakeaways: [
      "Product news: Claude Code 2.1.228 fixes a rare terminal redraw failure and improves Git discovery on Windows installations.",
      "A responsive or frozen interface is only an observation; process state, diffs, exit codes, and tests determine whether work completed correctly.",
      "Courses should provide reproducible environment checks and supported fallbacks so machine-specific setup does not become hidden assessment bias.",
    ],
    whyItMatters: "For AIEDHK, the release is a practical case for operational AI literacy: students should verify the environment and artifacts behind an agent interface before trusting its apparent status.",
    sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.228",
    sourceUrls: [
      { label: "Anthropic: Claude Code 2.1.228 release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.228" },
    ],
    createdAt: "2026-08-11",
  },
  {
    id: "aied-098",
    slug: "inside-joint-student-reasoning-action-simulation",
    title: "INSIDE aligned simulated student actions with internal dialogue, but reasoning fidelity remained partial",
    authors: ["Rose Niousha", "Minwoo Kang", "Narges Norouzi"],
    venue: "Conference on Language Modeling 2026",
    year: 2026,
    type: "conference",
    tags: ["student simulation", "internal dialogue", "Bloom's taxonomy", "LLM evaluation", "tutor testing"],
    image: "/images/research/covers/aied-098-inside-student-reasoning-action-simulation-2026.png",
    imageAlt: "A learning scientist and two diverse student researchers compare coded learner actions with a structured reasoning map in a university lab",
    summaryImage: "/images/research/summary/aied-098-inside-student-reasoning-action-simulation-summary.png",
    summaryImageAlt: "A learning scientist and two diverse student researchers compare coded learner actions with a structured reasoning map in a university lab",
    summaryAudio: "/audio/research/aied-098-inside-student-reasoning-action-simulation-summary.m4a",
    summaryAudioTitle: "Listen to the paper summary",
    shortSummary: "Niousha, Kang and Norouzi introduce INSIDE, a framework that fine-tunes LLM student simulators on paired internal-dialogue traces and observable actions across cognitive, affective, and action dimensions. It improved action fidelity and achieved reasoning alignment up to 57.9 percent across evaluated models. The result advances simulator evaluation but leaves substantial mismatch and does not justify replacing trials with real learners.",
    fullSummary: `Rose Niousha, Minwoo Kang and Narges Norouzi examine a hidden weakness in large-language-model student simulators. A simulator may reproduce an observable answer or code submission while representing the learner's reason incorrectly. Two students can make the same mistake because of different knowledge, goals, emotions, or strategies. A tutoring system tested only against simulated actions could therefore appear effective for the wrong reason.

The authors introduce INTERNAL STUDENT DIALOGUE, or INSIDE, a framework that fine-tunes models to generate both latent dialogue and student action. The dialogue is structured through Bloom's taxonomy across cognitive, affective, and action dimensions. Training examples pair think traces with observable outputs. Evaluation then considers two axes: whether simulated actions resemble those of real students and whether the generated internal dialogue aligns with available evidence about learner reasoning.

Across the evaluated models, INSIDE improved action fidelity and produced the strongest reported reasoning alignment, reaching up to 57.9 percent. This matters because it moves evaluation beyond surface imitation. A simulator that states a plausible misconception or uncertainty can help researchers inspect why a tutor chooses a hint and design scenarios that vary more meaningfully than correct versus incorrect answers. Joint modelling can also reveal when a convincing action is paired with an implausible internal explanation.

The result should not be read as access to a student's mind. Internal dialogue is a constructed representation, and reasoning alignment below full agreement leaves substantial mismatch. Bloom categories organize aspects of performance but do not capture every cultural, social, emotional, or contextual influence on learning. Fine-tuned models may reproduce biases in the traces used for training. A simulator can also generate a coherent rationale that no real student expressed. Acceptance at COLM supports research relevance, not classroom validity.

For tutor evaluation, simulated learners are best used as a pre-deployment stress test. Researchers can generate cases with different misconceptions, confidence, affect, and action patterns, then inspect whether the tutor adapts safely. Results should guide hypotheses and identify failure modes before real-user study. They should not replace participatory design, teacher review, or trials with actual learners. Sensitive decisions about intervention, grading, or disability support should never be based on a synthetic profile treated as a real person's state.

For AIEDHK, INSIDE offers a valuable methodological warning and a promising tool. Observable fidelity alone is insufficient when an educational system claims to respond to reasoning. Researchers should report how latent states were defined, whose data informed them, how alignment was measured, and where the simulator fails. They should then validate tutor behavior with diverse learners and outcome evidence. A simulator can make early testing broader and safer, but the remaining gap between generated dialogue and human experience must remain visible. The strongest use is to challenge a tutor before deployment, not to certify that it understands students. Evaluation sets should include multilingual, neurodiverse, and culturally varied reasoning patterns without presenting any synthetic profile as a definitive account of a group.`,
    keyTakeaways: [
      "INSIDE jointly models structured internal dialogue and observable student action instead of evaluating surface behavior alone.",
      "The framework improved action fidelity and reached reasoning alignment up to 57.9 percent, leaving substantial room for mismatch.",
      "Synthetic learners can stress-test tutors and generate hypotheses but cannot replace participatory design or outcome studies with real students.",
    ],
    whyItMatters: "For AIEDHK, INSIDE sharpens the standard for student simulation: plausible actions and rationales are useful test inputs, not proof that a system understands or benefits real learners.",
    sourceUrl: "https://arxiv.org/abs/2608.10492",
    sourceUrls: [
      { label: "arXiv paper: INSIDE the Student's Mind", url: "https://arxiv.org/abs/2608.10492" },
      { label: "Full HTML paper", url: "https://arxiv.org/html/2608.10492" },
    ],
    createdAt: "2026-08-11",
  },
];
