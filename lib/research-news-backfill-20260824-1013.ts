import type { ResearchPaper } from "@/lib/types";

// The owner requested historical publication dates for these daily archive entries.
export const researchNewsBackfill20260824To1013: ResearchPaper[] = [
  {
    "id": "aied-170",
    "slug": "teacher-authorship-ai-science-lesson-design-environmental-agency",
    "createdAt": "2026-09-22",
    "title": "Teachers used AI to develop science lessons, while keeping responsibility for evidence and local relevance",
    "authors": [
      "Won Jung Kim"
    ],
    "venue": "Research in Science Education",
    "year": 2026,
    "type": "journal",
    "tags": [
      "teacher education",
      "lesson planning",
      "environmental science agency",
      "teacher authorship",
      "generative AI"
    ],
    "shortSummary": "A qualitative study of 23 teachers followed AI-assisted science lesson design through surveys, lesson documents, chat logs and instructor notes. Teachers used AI to develop concepts, refine activities and connect environmental learning with student action. They also had to verify claims and repeatedly adapt generic suggestions. The study documents a supervised design process; it does not establish that AI saved preparation time or improved pupils' learning.",
    "fullSummary": "What remains the teacher's job when an AI system can draft an entire science lesson? Won Jung Kim's study examines that question through environmental science agency: connecting scientific understanding with students' capacity to investigate issues and participate in consequential action. The focus is the work between an initial AI suggestion and a lesson that a teacher can justify. A polished plan is only one artifact of that process; its scientific credibility, classroom relevance and opportunities for student agency still require professional judgment.\n\nThe study followed 23 teachers in a master's-level elementary science methods course at a university in the western United States during spring 2024. Sixteen were student or intern teachers and seven had independent teaching experience. An introductory workshop addressed responsible use and prompting. The researcher analyzed surveys, lesson designs, AI conversations and instructor field notes through constant comparison, with additional coders helping review and refine categories. This design provides a detailed account of practices within one course rather than a controlled comparison of teaching approaches.\n\nThree patterns emerged: teachers used AI to clarify concepts, develop lesson components and explicitly incorporate environmental science agency. Seventeen teachers refined components such as activities, questions and assessment, while eleven intentionally used AI to address agency. These categories can overlap. The distinction matters because a lesson about water, climate or recycling does not automatically give students responsibility for investigating a locally meaningful problem or acting on their findings. That educational purpose has to be designed into what learners actually do.\n\nThe supplementary coding framework makes the range of work visible: teachers outlined lesson sequences, planned accommodations, drafted prompts, developed materials and checked environmental claims. They also revised suggestions around pupils' cultural experiences, school resources and curriculum schedules. One reported example involved rehearsing a classroom discussion by asking AI to play students. Such rehearsal can generate possibilities for a teacher to inspect, but a simulated response cannot establish how actual children will think or respond.\n\nThe challenges are as instructive as the uses. Checking sources, supplying contextual detail and repeatedly correcting broad suggestions required effort. Some teachers questioned whether the additional interaction was worthwhile. This small, exploratory study largely involved early-career teachers with limited AI experience, so its patterns should not be treated as a universal account of teaching. It measured neither comparative preparation-time savings nor effects on pupils' learning or environmental action. The observed work supports a process description, not a causal claim of improved instruction.\n\nFor Hong Kong teacher education, an appropriate next step would be a small, documented planning exercise around a local environmental question. Teachers could preserve an initial plan, the AI suggestions they accepted or rejected, the sources used to verify claims and the reasons for each revision. Review should examine whether students will collect evidence, explain a conclusion and make a meaningful choice. A separate classroom evaluation would then test what pupils learn and how much preparation the full workflow requires. These are proposed evaluation steps, not findings from this study. They keep authorship visible and make the educational value of AI assistance inspectable.",
    "keyTakeaways": [
      "The qualitative study followed 23 teachers using surveys, lesson designs, AI chat logs and field notes within one science methods course.",
      "Teachers used AI for conceptual support and detailed planning, but scientific accuracy, student agency and local relevance required repeated teacher review.",
      "The study did not test pupil outcomes or causal time savings; a useful-looking lesson plan is not evidence of improved teaching."
    ],
    "whyItMatters": "AIEDHK can use this study to frame AI lesson planning as accountable teacher authorship. A local pilot should retain evidence of what teachers changed and why, then evaluate actual classroom learning and the complete preparation workload separately.",
    "sourceUrl": "https://doi.org/10.1007/s11165-025-10262-0",
    "sourceUrls": [
      {
        "label": "Open-access research article: teacher AI use and environmental science agency",
        "url": "https://link.springer.com/article/10.1007/s11165-025-10262-0"
      },
      {
        "label": "Author supplementary materials: participants and coding framework",
        "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1007%2Fs11165-025-10262-0/MediaObjects/11165_2025_10262_MOESM1_ESM.pdf"
      }
    ],
    "image": "/images/research/covers/aied-170-teacher-science-planning.png",
    "imageAlt": "Three teachers revise an environmental science lesson using a water-cycle diagram, a river catchment map and annotated planning sheets in a sunlit classroom",
    "summaryImage": "/images/research/summary/aied-170-teacher-science-planning-summary.png",
    "summaryImageAlt": "Three teachers revise an environmental science lesson using a water-cycle diagram, a river catchment map and annotated planning sheets in a sunlit classroom",
    "summaryAudio": "/audio/research/aied-170-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-171",
    "slug": "news-claude-opus-5-5-research-costs-model-choice",
    "title": "Product news: Claude Opus 5.5 brings lower-cost research workflows and clearer collaboration",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Opus 5.5",
      "GPT-6 Sol",
      "Gemini Guided Learning",
      "research workflows",
      "AI evaluation"
    ],
    "shortSummary": "Anthropic released Claude Opus 5.5 on September 22, emphasizing stronger coding and knowledge work, clearer communication, and lower operating costs. The same day's GPT-6 Sol and Luna launch broadened the choice of affordable models, while Gemini's established Guided Learning tools offered a contrasting educational purpose. For universities, the opportunity is to compare research workflows carefully while keeping model performance, completed artifacts, and student learning as separate outcomes.",
    "fullSummary": "Anthropic introduced Claude Opus 5.5 on September 22, 2026, opening its Claude 5.5 family with a model focused on coding, agents, and knowledge work. The company reports stronger performance than Opus 5 and clearer communication during extended tasks. It also says typical workloads at default settings cost about 40% less to run. These are vendor-reported improvements that could matter to research teams maintaining analysis code, checking documents, and producing reports.\n\nThe pricing distinction is important. Standard API input and output tokens are priced at $4 and $20 per million, while cache reads cost $0.20 per million. Lower unit prices combine with the company's claimed reduction in tokens needed per task; the advertised saving is therefore a workload estimate, not a guaranteed reduction for every research project. A fair local comparison should include failed attempts, tool charges, review time, and repeated runs.\n\nThe release also highlights better source handling and communication. In Anthropic's internal research-report test, outputs were checked against sources and failed if they invented a figure or quotation. Such a test addresses a useful professional requirement, but it does not establish that every bibliography, statistical interpretation, or classroom explanation will be reliable. A polished report still needs checks against the original document, and a correct numerical result still needs an appropriate analytic method.\n\nAnthropic's product overview describes document creation, chart interpretation, computer use, and coordination of agents as intended applications. Educational teams could test these capabilities on public datasets and previously checked teaching materials before using them in consequential work. For example, a lecturer might request an analysis notebook and an accompanying explanation, then independently rerun the notebook and check whether the explanation preserves uncertainty. That is a proposed evaluation activity, not an outcome reported in the announcement.\n\nThe same day's OpenAI launch of GPT-6 Sol and GPT-6 Luna provides a relevant comparison. OpenAI positions them as less expensive options for coding, professional tasks, and computer use, with access through its API and selected ChatGPT Work and Codex plans. Their arrival strengthens the case for choosing a model by the task and a reproducible local evaluation, rather than treating a single provider's benchmark table as a purchasing decision.\n\nGemini offers a different educational reference point already available before this date. Google's August 2025 learning update introduced Guided Learning, stepwise explanations, integrated visuals, and study aids such as flashcards. These features focus attention on how a learner participates in the process. They should not be confused with the ability of a general-purpose agent to finish a document or software task, nor does their pedagogical design alone prove learning gains.\n\nFor a university pilot, the central question is what should remain the learner's or researcher's responsibility. Teams can define a small task set, retain original sources, record the model and settings, and assess factual errors alongside time and cost. In a course, they should also ask students to explain and reproduce key decisions without the assistant. Opus 5.5 makes a timely case for testing more capable, affordable support; the educational value depends on whether that support leaves people better able to reason, verify, and work independently.",
    "keyTakeaways": [
      "Anthropic reports stronger coding and knowledge work from Opus 5.5, alongside clearer communication and lower typical operating costs; savings remain workload-dependent.",
      "GPT-6 Sol and Luna broaden the same-day model choices, while Gemini's existing Guided Learning tools illustrate a distinct focus on learner participation.",
      "Institutions should evaluate verified task quality, total review cost, and independent learner performance separately before expanding use."
    ],
    "whyItMatters": "Research teams and educators have more capable tools within reach, but selecting a model responsibly requires evidence about the exact task, its total cost, and what people can still explain and verify themselves.",
    "sourceUrl": "https://www.anthropic.com/claude-opus-5-5",
    "sourceUrls": [
      {
        "label": "Anthropic: Introducing Claude Opus 5.5 — September 22, 2026",
        "url": "https://www.anthropic.com/claude-opus-5-5"
      },
      {
        "label": "Anthropic: Claude Opus product overview",
        "url": "https://www.anthropic.com/claude/opus"
      },
      {
        "label": "OpenAI: Introducing GPT-6 Sol and Luna — September 22, 2026",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "Google: Advancing our AI tools for learning — August 6, 2025",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-09-22",
    "image": "/images/research/covers/aied-171-opus55-research-workflows.png",
    "imageAlt": "An education researcher and a developer compare an annotated geometry lesson with code and a verification diagram on a laptop in a university studio",
    "summaryImage": "/images/research/summary/aied-171-opus55-research-workflows-summary.png",
    "summaryImageAlt": "An education researcher and a developer compare an annotated geometry lesson with code and a verification diagram on a laptop in a university studio",
    "summaryAudio": "/audio/research/aied-171-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-184",
    "slug": "adaptive-ai-feedback-teacher-diagnostic-reasoning-justification-accuracy",
    "createdAt": "2026-09-29",
    "title": "Adaptive AI feedback improved teachers-in-training’s written justifications, without improving decision accuracy",
    "authors": [
      "Annette Kinder",
      "Fiona J. Briese",
      "Marius Jacobs",
      "Niclas Dern",
      "Niels Glodny",
      "Simon Jacobs",
      "Samuel Leßmann"
    ],
    "venue": "Computers and Education: Artificial Intelligence",
    "year": 2025,
    "type": "journal",
    "tags": [
      "adaptive feedback",
      "teacher education",
      "diagnostic reasoning",
      "randomized controlled trial",
      "generative AI"
    ],
    "shortSummary": "In a randomized study of 269 German teachers-in-training, adaptive GPT-4 feedback produced a small improvement in the justification of a subsequent diagnostic decision compared with a standard expert response. It also led to longer answers and more favorable feedback ratings, but decision accuracy did not improve. The result supports examining different components of professional reasoning separately and does not establish that AI outperforms personalized feedback from a human teacher.",
    "fullSummary": "A teacher can offer a more detailed explanation while still making the wrong instructional decision. Annette Kinder and colleagues make that distinction visible in a randomized study of AI-generated feedback for teachers-in-training. The task required participants to judge a recommendation for a fictional pupil with learning difficulties and justify that judgment using diagnostic information. This is a useful test of educational AI because fluent writing alone is insufficient: a defensible decision also depends on selecting and interpreting relevant evidence.\n\nThe German master's-level teacher preparation course study analyzed 269 participants: 132 received adaptive feedback generated with GPT4-1106-preview, and 137 received the same expert-written feedback. Thirty-four of the original 303 participants had incomplete assignments and were excluded. Everyone first completed a baseline case, received feedback, and then responded to a different case. Two raters unaware of participants' assigned conditions assessed decision accuracy and justification. The second case therefore tested immediate application beyond revising the original answer, although it remained a closely related task.\n\nAfter accounting for baseline justification, the adaptive-feedback group produced better-supported explanations, with a small effect: the reported partial eta squared was 0.016 and p was .036. The corresponding test of decision accuracy was not significant, with p equal to .523. Participants receiving adaptive feedback also wrote longer responses. This combination should discourage a single headline that collapses length, reasoning and correctness into a general claim that the AI improved teacher competence. The measured advantage was specific, limited and uneven across outcomes.\n\nFeedback reception provides another part of the picture. Adaptive feedback was rated as more useful and interesting, and participants spent more reading time per word on it. These measures are consistent with greater engagement, but they do not establish the psychological mechanism responsible for the writing difference. Longer answers may contain more relevant diagnostic evidence without showing that the underlying recommendation is correct. An assessment system that rewards verbal elaboration alone could therefore miss an important weakness in professional reasoning.\n\nThe comparison also has a clear boundary. Adaptive AI feedback was contrasted with a standard expert response, not individualized feedback from a human tutor. Personalization and feedback source changed together, so the experiment cannot isolate either ingredient. It involved one brief feedback cycle in a particular university course, not repeated coaching or a delayed test of classroom decision-making. Completion-based exclusions and the absence of participant demographic information further limit interpretation. The study does not establish long-term transfer, broad teacher effectiveness or superiority to tailored human support.\n\nFor teacher educators, the result suggests a practical evaluation design rather than an automatic deployment decision. A pilot could score the correctness of recommendations, the evidence supporting them and the quality of revisions separately. It could compare static guidance, personalized AI feedback and a feasible human-supported alternative, while examining errors in the feedback itself. Delayed unfamiliar cases would help test whether any benefit persists. These are proposed extensions beyond the reported experiment. For AIEDHK, the useful lesson is to evaluate what a feedback system helps learners do next, with special attention to the outcomes that remain unchanged.",
    "keyTakeaways": [
      "Among 269 analyzed participants, adaptive GPT-4 feedback improved subsequent justification quality by a small amount compared with standard expert feedback.",
      "The study found no significant decision-accuracy advantage; longer responses and more positive feedback ratings cannot substitute for correct reasoning.",
      "Personalization and source varied together, and only one short feedback cycle was studied, so the result does not establish superiority to personalized human feedback or lasting transfer."
    ],
    "whyItMatters": "Teacher-facing AI should be assessed against the professional decisions it is meant to support. This trial gives AIEDHK a concrete reason to keep explanation quality, decision accuracy, learner engagement and delayed transfer as separate evaluation outcomes.",
    "sourceUrl": "https://doi.org/10.1016/j.caeai.2024.100349",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article and DOI",
        "url": "https://doi.org/10.1016/j.caeai.2024.100349"
      },
      {
        "label": "Open-access full article in Freie Universität Berlin repository",
        "url": "https://refubium.fu-berlin.de/bitstream/handle/fub188/51428/1-s2.0-S2666920X24001528-main.pdf?isAllowed=y&sequence=1"
      }
    ],
    "image": "/images/research/covers/aied-184-teacher-diagnostic-feedback.png",
    "imageAlt": "A teacher trainee writes a diagnostic justification while a tutor points to the evidence in a pupil case sheet beside a tablet displaying feedback",
    "summaryImage": "/images/research/summary/aied-184-teacher-diagnostic-feedback-summary.png",
    "summaryImageAlt": "A teacher trainee writes a diagnostic justification while a tutor points to the evidence in a pupil case sheet beside a tablet displaying feedback",
    "summaryAudio": "/audio/research/aied-184-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-185",
    "slug": "news-openai-devday-2026-agents-education-research",
    "title": "Product news: OpenAI DevDay 2026 expands agents, developer tools, and shared AI workspaces",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "OpenAI DevDay 2026",
      "GPT-6.1 Sol",
      "Dots",
      "Claude Sonnet 5.5",
      "Gemini Guided Learning",
      "education technology"
    ],
    "shortSummary": "OpenAI's September 29 DevDay brought GPT-6.1 Sol, Dots, computer use in the Agents API, and new ways to build and collaborate inside ChatGPT. For education and research, the announcements connect more affordable models with longer-running work and shared artifacts. Anthropic's newly released Sonnet 5.5 and Gemini's existing learning tools provide useful comparisons, while preview status, permissions, and evidence of independent learning remain essential distinctions.",
    "fullSummary": "OpenAI held DevDay 2026 in San Francisco on September 29, announcing updates across models, agents, developer tools, and collaborative work. For education and research, the significant connection is between these layers: a model can handle a task, an agent can continue working with tools, and a shared workspace can expose the resulting artifacts to colleagues. The announcements create possibilities for new workflows, without establishing that those workflows improve learning.\n\nGPT-6.1 Sol was a central model release. OpenAI describes improvements in coding, computer use, document understanding, and scientific workflows, with standard input and output token prices at one-fifth of GPT-6 Astra's. Its release page includes evaluations of data analysis, simulation, and other scientific tasks. Those results help identify candidate uses, but they remain bounded evaluations. A research group should test its own methods, source requirements, and failure cases before treating the model as a dependable assistant.\n\nDots adds a different kind of capability: ongoing work through an agent with its own cloud computer and connected applications. OpenAI's examples include a scientist receiving updated analyses and figures when new evidence arrives. This is a product scenario, not an independently evaluated research outcome. For a lab, the practical questions are which data the agent may read, which operations it may perform, and which changes require human approval. An automated refresh must not silently replace an accepted analysis.\n\nDevDay also extended the Agents API with computer use. The underlying API had already entered public beta on September 10; September 29 should not be reported as its original launch. It supports managed execution, tools, context handling, and subagents, while the new interface capability broadens the software an agent can operate. Educational developers could explore bounded administrative or research tasks, but should preserve logs and test both successful actions and refusals outside the permitted scope.\n\nOther announcements included plugin extensions, ChatGPT Space, and Pages for shared work. Collaborative slides were announced for the following weeks, and Decisions API was described as a limited preview on the event date. These distinctions matter when planning a course or institutional pilot. An announced feature is not necessarily available to every student, device, region, or subscription, and a shared document does not itself establish clear authorship or consent.\n\nAnthropic had released Claude Sonnet 5.5 the previous day, positioning it as a faster, lower-cost complement to Opus 5.5 for bounded work, coding fixes, and documents. That contemporary alternative keeps the comparison focused on task fit rather than ecosystem allegiance. Gemini's previously released Guided Learning provides another reference: stepwise explanations and study aids aim to involve learners in working through a topic. It was an existing educational capability, not a DevDay announcement.\n\nFor Hong Kong educational teams, a useful first pilot would connect one approved source collection to one carefully specified task, then require a human to inspect the output and its supporting evidence. Researchers might compare an agent's report against a manually checked analysis; teachers might assess whether students can justify the choices made in an AI-assisted artifact. The event broadens what can be built and delegated. Its educational significance will depend on accessible participation, accountable permissions, and demonstrable understanding after the automated work is complete.",
    "keyTakeaways": [
      "DevDay connected GPT-6.1 Sol, Dots, developer interfaces, and collaborative artifacts, expanding the options for sustained research and educational work.",
      "Agents API launched on September 10; its DevDay addition was computer use, while collaborative slides and Decisions API had staged or preview availability.",
      "Compare OpenAI's new workflows with Sonnet 5.5 and Gemini's learning tools by task, permissions, access, and evidence of independent understanding."
    ],
    "whyItMatters": "Education teams can now consider richer AI workflows, but the useful unit of evaluation is a complete, inspectable activity with clear human responsibility, not the number of features announced at a developer conference.",
    "sourceUrl": "https://openai.com/index/devday-2026-recap/",
    "sourceUrls": [
      {
        "label": "OpenAI: DevDay 2026 Recap — September 29, 2026",
        "url": "https://openai.com/index/devday-2026-recap/"
      },
      {
        "label": "OpenAI: Introducing GPT-6.1 Sol",
        "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
      },
      {
        "label": "OpenAI: Introducing dots — September 29, 2026",
        "url": "https://openai.com/index/introducing-dots/"
      },
      {
        "label": "OpenAI: Introducing the Agents API — September 10, 2026",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Anthropic: Introducing Claude Sonnet 5.5 — September 28, 2026",
        "url": "https://www.anthropic.com/claude-sonnet-5-5"
      },
      {
        "label": "Google: Advancing our AI tools for learning — August 6, 2025",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-09-29",
    "image": "/images/research/covers/aied-185-devday-research-agents.png",
    "imageAlt": "A professor and two researchers discuss a human review checkpoint in a research workflow drawn on a whiteboard beside a monitor in a bright seminar room",
    "summaryImage": "/images/research/summary/aied-185-devday-research-agents-summary.png",
    "summaryImageAlt": "A professor and two researchers discuss a human review checkpoint in a research workflow drawn on a whiteboard beside a monitor in a bright seminar room",
    "summaryAudio": "/audio/research/aied-185-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  }
];
