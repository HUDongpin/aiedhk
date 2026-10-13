import type { ResearchPaper } from "@/lib/types";

// The owner requested historical publication dates for these daily archive entries.
export const researchNewsBackfill20260824To1013: ResearchPaper[] = [
  {
    "id": "aied-114",
    "slug": "research-programming-students-shifted-their-ai-habits-with-guidance-but-better-interaction-was-not-a-randomized-learning-effect",
    "title": "Programming students shifted their AI habits with guidance, but better interaction was not a randomized learning effect",
    "authors": [
      "Hacer Güner",
      "Erkan Er"
    ],
    "venue": "Education and Information Technologies",
    "year": 2025,
    "type": "journal",
    "tags": [
      "programming education",
      "AI literacy",
      "learner agency",
      "prompting"
    ],
    "shortSummary": "A classroom study followed programming students through unguided ChatGPT use, a prompting demonstration, and embedded example prompts. Their interaction profiles changed substantially, while students who refined their own code often achieved stronger unaided quiz scores than students who requested complete solutions. The study offers practical evidence about classroom guidance, but its sequential tasks and existing knowledge differences do not establish that a particular prompting intervention caused better learning.",
    "fullSummary": "Giving students access to ChatGPT does not determine how they use it. Hacer Güner and Erkan Er examined that problem inside an introductory Python course, following how learners asked for code, explanations, debugging, and revision. Their main contribution is a description of changing interaction habits tied to classroom activities. The results support paying attention to the work students do before and after an AI response, while leaving the causal effect of individual support strategies unresolved.\n\nThe course ran for 14 weeks across three sections taught by one instructor. Of 175 enrolled students, 158 participated in all research activities, although the usable samples varied between specific analyses. The researchers collected prior-knowledge scores, voluntarily submitted ChatGPT conversations, and quizzes completed without outside help. Across the sessions, they coded 2,388 prompts. This combination provided a closer view of learning processes than satisfaction ratings or submitted code alone would have offered.\n\nThree activities introduced different forms of support in a fixed sequence. Students first tackled a programming task with unrestricted ChatGPT access and no guidance. A later session began with a 20-minute demonstration of practices such as dividing a task, requesting hints, checking generated code, and asking for explanations. The final activity supplied example prompts within a lab guide. The programming topics also changed, moving from variables and functions through loops and conditions to lists, strings, and file handling.\n\nFive interaction profiles emerged, ranging from asking AI to generate a solution to writing independently or using AI to improve an existing attempt. Profile distributions shifted significantly across sessions. By the third session, the collaborative profile was the most common. In the earlier sessions, students who first produced their own code and then requested refinement generally performed better on particular quiz comparisons than students relying on generated solutions. The authors also found that prior programming knowledge differed between some profiles.\n\nThose distinctions limit what the findings establish. The study did not randomly allocate comparable students to alternative prompting lessons, and the same activities were not repeated under interchangeable conditions. Increasing familiarity, changing task difficulty, and accumulated programming knowledge accompanied the interventions. Profile membership was an observed behavior, not an assigned treatment. Better quiz performance among code refiners therefore cannot by itself show that instructing any learner to adopt that profile will produce the same advantage.\n\nThe authors further acknowledge incomplete conversation records, possible unreported use of other resources, and a sample from one university with similar backgrounds. Their data capture selected classroom episodes rather than a long-term transfer test. These boundaries matter when interpreting the work as evidence for AI literacy: learning to ask more elaborate questions is useful only if students also understand, test, and eventually reproduce the underlying programming decisions independently.\n\nFor AIEDHK, a reasonable classroom application is to make the sequence of student work visible. Ask learners to retain their initial attempt, identify the precise point where they requested assistance, and explain why they accepted or rejected a suggestion. Teachers could then pair that process record with a short unaided exercise. This is an instructional implication of the study, not an intervention it directly validated, and it keeps the focus on developing programming judgment rather than simply producing functioning code.",
    "keyTakeaways": [
      "The study identified five interaction profiles across three differently supported programming sessions.",
      "Prior knowledge and unaided quiz outcomes varied between profiles; the comparisons were observational.",
      "Conversation records and independent checks offer complementary evidence about what students learned."
    ],
    "whyItMatters": "AI coding lessons can assess the learner’s initial reasoning, decisions about assistance, and later unaided performance. The study supports inspecting these processes without treating polished generated code as evidence of mastery.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13337-7",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13337-7"
      }
    ],
    "createdAt": "2026-08-24",
    "image": "/images/research/covers/aied-114-backfill.png",
    "imageAlt": "Two programming students trace and test their own code with an instructor in a university computer lab",
    "summaryImage": "/images/research/summary/aied-114-backfill-summary.png",
    "summaryImageAlt": "Two programming students trace and test their own code with an instructor in a university computer lab",
    "summaryAudio": "/audio/research/aied-114-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-115",
    "slug": "news-gpt-5-6-kiro-specification-learning",
    "title": "Product news: GPT-5.6 arrives in Kiro, putting software specifications at the centre of AI-assisted learning",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-5.6",
      "Kiro",
      "programming education",
      "specifications",
      "testing"
    ],
    "shortSummary": "OpenAI announced GPT-5.6 support in Kiro on August 24, connecting its model family to a workflow organized around requirements, designs, tasks, and tests. The educational opportunity is to make students' decisions visible before code is generated. Anthropic's new AI-learning guidance and Gemini's established study tools provide useful comparisons, while a working application still needs to be distinguished from a learner's understanding of why it works.",
    "fullSummary": "OpenAI announced on August 24, 2026 that GPT-5.6 Sol, Terra, and Luna were available in Kiro. The integration connects the models to a development workflow built around written requirements, technical designs, executable tasks, review checkpoints, and property-based testing. OpenAI also reports improved cost efficiency in its testing with AWS. That result concerns a particular engineering environment; it does not establish how much a school will save or how much a student will learn.\n\nFor programming education, the interesting object is the specification. A student who asks for an application can receive plausible code without having decided what correct behaviour means. A written specification creates something a teacher and classmates can question before implementation begins. Which inputs are valid? What should happen when data is missing? Which information should never be exposed? These decisions can become assessable evidence of design reasoning, even when an agent writes much of the code.\n\nConsider a proposed classroom project that summarizes rainfall records. Students first describe units, missing observations, and the difference between a daily total and an average. They then predict several outputs manually before asking the agent to implement the calculation. If the generated program produces a convincing chart with the wrong units, the discrepancy points to a specific requirement or implementation error. The exercise should keep the original prediction visible, so the student cannot quietly redefine success after seeing the result.\n\nProperty-based testing offers another useful teaching angle. Instead of checking only a few examples, students state relationships that should continue to hold across inputs. Rearranging valid observations should not change their total; duplicating every observation should double that total. Students still need to justify those properties and identify when they would be inappropriate. An agent can help generate cases, but a passing test suite is only as meaningful as the claims it actually checks.\n\nTwo existing educational approaches provide context. Anthropic's August 20 account of Claude Academy emphasizes intentional delegation and maintaining human skills. Google's previously released Gemini Guided Learning offers stepwise support rather than only a finished response. Applied to Kiro, the common question is where the learner must still make and explain a decision. These are different product designs, not evidence that one produces better learning than another.\n\nA teacher can assess the project in three parts: the specification, the implemented behaviour, and an individual explanation. A student might demonstrate a failure case, explain why a test catches it, and adapt the program to a new requirement without asking the agent to choose the requirement. Peers can review whether the final application matches the original contract. This makes revision and disagreement visible rather than rewarding only the most polished interface.\n\nThe announcement broadens model choice within a structured development tool. For an educational pilot, that is a reason to examine the whole learning activity, including access to paid services, time spent reviewing generated code, and the quality of students' explanations. The strongest submission would show how a student moved from an uncertain idea to a defensible specification and checked implementation, with assistance documented along the way.",
    "keyTakeaways": [
      "GPT-5.6 is now available in Kiro alongside a workflow organized around specifications, review, and tests.",
      "A specification can make students' decisions about inputs, errors, and intended behaviour visible before generation.",
      "Assess the written contract, running implementation, and individual explanation separately."
    ],
    "whyItMatters": "AI-generated code becomes more educationally useful when learners must define and defend the conditions under which it should work.",
    "sourceUrl": "https://openai.com/index/gpt-5-6-in-kiro/",
    "sourceUrls": [
      {
        "label": "OpenAI: GPT-5.6 in Kiro — 2026-08-24",
        "url": "https://openai.com/index/gpt-5-6-in-kiro/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-08-24",
    "image": "/images/research/covers/aied-115-backfill.png",
    "imageAlt": "A lecturer and two students check a rainfall chart against written software requirements and test-case cards in a maker workshop",
    "summaryImage": "/images/research/summary/aied-115-backfill-summary.png",
    "summaryImageAlt": "A lecturer and two students check a rainfall chart against written software requirements and test-case cards in a maker workshop",
    "summaryAudio": "/audio/research/aied-115-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-116",
    "slug": "research-translation-students-welcomed-ai-feedback-but-still-needed-help-turning-broad-advice-into-revisions",
    "title": "Translation students welcomed AI feedback but still needed help turning broad advice into revisions",
    "authors": [
      "Simin Xu",
      "Yanfang Su",
      "Kanglong Liu"
    ],
    "venue": "Education and Information Technologies",
    "year": 2025,
    "type": "journal",
    "tags": [
      "translation education",
      "feedback literacy",
      "Hong Kong",
      "learner engagement"
    ],
    "shortSummary": "A Hong Kong study examined how 29 translation master’s students understood, felt about, and acted on ChatGPT feedback. Screen recordings and interviews showed active checking alongside frustration with vague advice and excessive praise. Learners did not simply accept every suggestion. The findings illuminate feedback uptake in one translation task, while leaving comparative effectiveness and durable translation learning for future studies with broader samples and stronger designs.",
    "fullSummary": "AI feedback can feel clear and encouraging while remaining difficult to use. A study by Simin Xu, Yanfang Su, and Kanglong Liu examines that gap through the revision practices of translation students at a Hong Kong university. Rather than measuring whether participants liked a chatbot in general, the researchers connected their reactions to draft changes and screen recordings. The result is a detailed account of how feedback can stimulate effort without automatically resolving problems in meaning and translation quality.\n\nThe participants were 29 students enrolled in a Master of Translating and Interpreting programme. They completed an online activity using a teaching platform that integrated ChatGPT. A built-in prompt drew on a translation assessment rubric, and two experienced teachers had reviewed the platform’s feedback before data collection. Students translated a Chinese political-news text into English, received the first feedback output generated for their draft, and then revised their work. Their initial translation was completed without machine translation or online resources under screen-sharing observation.\n\nThe researchers assembled original and revised translations, model feedback, revision recordings, a post-task questionnaire, and interviews with four purposively selected students. Analysis separated cognitive engagement, emotional and attitudinal engagement, and observable revision behavior. Feedback itself typically combined a reference translation, comments, and a grade. That combination matters because students might respond to a reassuring score, imitate a reference phrase, or interpret a diagnostic comment in quite different ways.\n\nParticipants generally reported understanding the feedback and investing effort in revision. Interviews nevertheless revealed confusion when advice referred broadly to coherence or clarity without identifying a specific problem. Students often checked disputed suggestions against other resources and made changes the chatbot had not proposed. They appreciated lexical and sentence-level assistance, but some considered particular substitutions unnecessary. Positive comments could increase confidence, while excessive praise became frustrating when learners wanted concrete criticism that would help them improve.\n\nObserved behavior also complicated a simple acceptance story. The researchers documented revisions connected to AI feedback alongside self-initiated changes. Students did not adopt every suggestion, and the relationship between reported ease of understanding and actual uptake was uneven. These findings concern how learners processed feedback in this task. They do not show that a high uptake rate necessarily produced a better translation, nor that a positive experience represented durable growth in independent translation ability.\n\nThe paper identifies limitations involving prompt quality, the use of ChatGPT 3.5, a restricted sample, and the need for broader investigation. The design also lacks a parallel teacher-feedback or no-feedback group that could isolate a comparative learning advantage. A single translation and revision episode cannot establish how students would handle unfamiliar genres later without assistance. The strongest inference is about the demands of feedback engagement, not a general ranking of AI and human translation teaching.\n\nFor AIEDHK, the practical lesson is to teach the response to feedback as explicitly as the request for feedback. A tutor could ask students to locate the passage at issue, explain the intended meaning, and justify a proposed revision before accepting it. Comparing an AI suggestion with a dictionary, corpus, or teacher explanation would make disagreement productive. These are pedagogical implications for local design: helpful feedback should support a learner’s judgment, while confidence and fluent wording remain only part of the evidence.",
    "keyTakeaways": [
      "Students combined generally positive attitudes with selective uptake and independent checking.",
      "Vague meaning-level advice sometimes required substantial effort without giving a clear revision path.",
      "The single-task study investigated engagement rather than establishing long-term learning or superiority to teacher feedback."
    ],
    "whyItMatters": "The Hong Kong setting offers locally relevant evidence for designing translation feedback activities. Platforms can make learners’ reasons for accepting, modifying, or rejecting advice visible to teachers.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13457-0",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13457-0"
      }
    ],
    "createdAt": "2026-08-25",
    "image": "/images/research/covers/aied-116-backfill.png",
    "imageAlt": "A translation student and a tutor compare two annotated text pages and a bilingual dictionary beside a laptop overlooking a Hong Kong campus",
    "summaryImage": "/images/research/summary/aied-116-backfill-summary.png",
    "summaryImageAlt": "A translation student and a tutor compare two annotated text pages and a bilingual dictionary beside a laptop overlooking a Hong Kong campus",
    "summaryAudio": "/audio/research/aied-116-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-117",
    "slug": "news-chatgpt-admin-plugin-campus-access",
    "title": "Product news: OpenAI's Admin plugin brings workspace permissions and usage decisions into conversation",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Admin plugin",
      "workspace permissions",
      "institutional AI",
      "usage budgets",
      "digital administration"
    ],
    "shortSummary": "OpenAI's August 25 Admin plugin connects workspace questions to supported administrative actions in ChatGPT Work and Codex. It can help authorized staff investigate access and usage without widening their existing permissions. The update raises practical questions for campuses about appeals, spending decisions, and action records. Claude's newly shared memory and Gemini's course-context tools illustrate why administrators must distinguish account controls from the information an assistant uses.",
    "fullSummary": "OpenAI introduced an Admin plugin for ChatGPT Work and Codex on August 25, 2026. It brings supported workspace administration into a conversational interface, including questions about usage, members, access, and spending. OpenAI says the plugin respects the administrator's existing role and permissions and returns structured results for actions. Its central promise is to connect an operational question with an authorized response, without requiring staff to move repeatedly between screens.\n\nOn a campus, a simple request such as “help this teaching assistant access the course workspace” can contain several different decisions. The person may have the wrong account, belong to the wrong group, lack a required role, or be waiting for approval. An administrator needs to establish which condition applies before changing access. Conversational convenience is valuable only if the intended person, group, resource, and duration remain unambiguous.\n\nThe same distinction applies to budgets. A usage total can show that someone is approaching an allocation, but cannot explain whether the activity was educationally useful. A researcher analysing a large public dataset may use more credits than a colleague preparing a short handout. Treating raw activity as a performance ranking could reward volume and penalize legitimate differences in work. A sensible review asks what the allocation supports and whether the person has an accessible alternative.\n\nA proposed campus trial could begin with a read-only exercise: ask the assistant to explain why a fictional account cannot reach a training resource, then compare its explanation with the configured roles. The next stage could involve a reversible change in an isolated test workspace. Reviewers would check the exact request, the action applied, the resulting access, and what happens when the requester lacks authority. This tests the administrative behaviour rather than the fluency of the answer.\n\nThe wider product context also matters. Anthropic's August 25 memory update connects what Claude remembers across chat and Cowork. Google's August 4 Classroom announcement describes Gemini prompts connected to course material. These features concern an assistant's context, while OpenAI's Admin plugin concerns supported workspace controls. An institution should make both intelligible: who may perform an action, and which information can inform it. Neither layer can safely be inferred from the other.\n\nSchools should also preserve a route to challenge an administrative decision. A declined request may reflect a budget rule, an account mismatch, or an exception that requires human judgment. The explanation should identify the relevant rule and the staff member or process that can review it. Automatically repeating a policy answer would be poor service when the underlying record is wrong or a learner needs a different form of access.\n\nFor educational organisations, the release invites a practical redesign of routine support. Conversational tools can help staff connect evidence with action, but the success measure should be accurate resolution, understandable decisions, and appropriate access. A pilot can record correction rates, unresolved cases, and time to resolution without turning individual learning activity into a simplistic productivity score. The useful administrative assistant is one whose actions colleagues can reconstruct and, when necessary, correct.",
    "keyTakeaways": [
      "The Admin plugin exposes supported workspace operations within existing administrative roles.",
      "Usage figures need interpretation; they are not measures of staff productivity or student learning.",
      "Campus pilots should test correct resolution, denied actions, appeals, and the resulting access state."
    ],
    "whyItMatters": "As AI becomes part of institutional infrastructure, convenient administration needs clear explanations and correction routes as well as working controls.",
    "sourceUrl": "https://openai.com/index/introducing-admin-plugin/",
    "sourceUrls": [
      {
        "label": "OpenAI: Admin plugin for ChatGPT Work and Codex — 2026-08-25",
        "url": "https://openai.com/index/introducing-admin-plugin/"
      },
      {
        "label": "Anthropic: Memory across Cowork and chat — 2026-08-25",
        "url": "https://claude.com/resources/articles/claudes-memory-works-everywhere-and-you-decide-whats-in-it"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-08-25",
    "image": "/images/research/covers/aied-117-backfill.png",
    "imageAlt": "A university administrator explains an account-access diagram to a teaching assistant while a colleague checks course allocations at a service counter",
    "summaryImage": "/images/research/summary/aied-117-backfill-summary.png",
    "summaryImageAlt": "A university administrator explains an account-access diagram to a teaching assistant while a colleague checks course allocations at a service counter",
    "summaryAudio": "/audio/research/aied-117-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-118",
    "slug": "research-a-review-of-early-chatgpt-research-separates-model-performance-from-evidence-about-student-learning",
    "title": "A review of early ChatGPT research separates model performance from evidence about student learning",
    "authors": [
      "Qian Liu",
      "Anjin Hu",
      "Tehmina Gladman",
      "Steve Gallagher"
    ],
    "venue": "Innovative Higher Education",
    "year": 2025,
    "type": "review",
    "tags": [
      "research review",
      "higher education",
      "assessment",
      "learning design"
    ],
    "shortSummary": "A scoping review published in 2025 maps 39 studies from ChatGPT’s first eight months in higher education. It finds varied model performance, promising classroom uses, and repeated concerns about accuracy and assessment. Much of the evidence evaluated what the model could produce or what users believed. The review calls for stronger explanations of learning and should be read as an early baseline, not an evaluation of current models.",
    "fullSummary": "When a chatbot passes an examination, it has demonstrated something about its own outputs. That is different from showing that students learn more by using it. Qian Liu and colleagues bring this distinction into focus in a scoping review of early ChatGPT research in higher education. Published in 2025, the review looks back at the first eight months after ChatGPT became public. Its value lies in mapping the questions researchers initially asked and identifying the educational questions those studies left unanswered.\n\nThe authors searched Web of Science and Scopus on 24 July 2023, restricting the search to English-language, peer-reviewed research articles within specified education and social-science categories. Two reviewers independently screened titles and abstracts, discussed disagreements, and then examined eligible full texts. The process yielded 39 included articles, all published in 2023. Most investigated GPT-3.5. The review used a scoping approach and qualitative grouping rather than pooling learning effects into a single numerical estimate.\n\nFive themes organized the evidence: performance in assessment, support for learning, general perceptions, adoption, and institutional policy implications. Many studies asked ChatGPT to answer questions or produce writing and compared those outputs with academic expectations. Performance varied across task formats, disciplines, and levels of specialized knowledge. Such tests could inform assessment design, but their success criteria did not establish what a novice gained from working alongside the model. A tool’s ability to generate an answer and a learner’s ability to explain it remain separate outcomes.\n\nStudies involving learning suggested both opportunities and obstacles. Immediate responses and help with generic academic work could be useful, while inaccurate explanations and specialized tasks exposed limitations. The review also found reports that students valued human teaching and that novices could struggle to identify misinformation. Perception and adoption studies documented interest alongside concerns about privacy, integrity, critical thinking, and the loss of interpersonal contact. These findings describe an emerging research landscape with mixed purposes and methods, rather than a uniform verdict on effectiveness.\n\nThe authors’ central criticism is explanatory. Much research documented model capacity or user opinion without sufficiently specifying how learning was supposed to occur. They argue for connecting applications to learning theory and to the digital tools already used in universities. Treating ChatGPT as an isolated addition can miss how tasks, teachers, peers, assessment rules, and existing resources shape its educational role. This is a research agenda, not evidence that one particular theory or classroom configuration has already solved those problems.\n\nThe review’s boundaries are especially important now. Its literature search predates later models and most subsequent classroom trials. It could miss relevant work outside the two databases and chosen categories, and a scoping review is not designed to deliver a pooled intervention estimate or a definitive implementation prescription. Readers should therefore resist presenting its early capability findings as measurements of contemporary systems. The enduring contribution is the distinction between kinds of evidence and the questions needed to interpret them.\n\nFor AIEDHK, that distinction can guide both reporting and evaluation. A school pilot could separately record model accuracy, student use, independent learning, and teacher workload. A positive result on one measure would then remain visible without standing in for the others. Likewise, a news article can identify whether a study tested a model, surveyed its users, or measured learning. This simple discipline makes research more useful to educators deciding which claims justify classroom experimentation and which still require direct evidence.",
    "keyTakeaways": [
      "The review synthesized 39 early studies and grouped their questions into five themes.",
      "Model assessment performance, user perceptions, and student learning require different interpretations.",
      "The July 2023 search makes this a historical baseline rather than a test of current model capabilities."
    ],
    "whyItMatters": "AIEDHK can use the review’s distinctions to label evidence clearly and design pilots with separate measures of system performance, learner outcomes, and instructional conditions.",
    "sourceUrl": "https://doi.org/10.1007/s10755-025-09790-4",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10755-025-09790-4"
      }
    ],
    "createdAt": "2026-08-26",
    "image": "/images/research/covers/aied-118-backfill.png",
    "imageAlt": "Three researchers compare printed studies and a hand-drawn evidence matrix at a sunlit library table, with a subtle cyan arrow linking the papers.",
    "summaryImage": "/images/research/summary/aied-118-backfill-summary.png",
    "summaryImageAlt": "Three researchers compare printed studies and a hand-drawn evidence matrix at a sunlit library table, with a subtle cyan arrow linking the papers.",
    "summaryAudio": "/audio/research/aied-118-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-119",
    "slug": "news-openai-continuous-learning-usage-report",
    "title": "Product news: OpenAI's learning report shows demand for help beyond the classroom, while outcomes remain an open question",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "ChatGPT",
      "education usage",
      "independent practice",
      "learning support",
      "AI literacy"
    ],
    "shortSummary": "OpenAI's August 26 education report describes substantial use of ChatGPT for homework, practice, and checks of understanding outside classroom hours. Its figures concern activity on the platform, not measured learning gains. Read alongside Anthropic's approach to AI education and Gemini's learning tools, the report gives educators a concrete reason to discuss how students ask for help, verify explanations, and return to independent practice.",
    "fullSummary": "OpenAI published “Learning never stops” on August 26, 2026, describing how ChatGPT is used for learning beyond scheduled lessons. The company reports up to 70 million weekly conversations across age groups devoted to checking understanding and practising, alongside large seasonal volumes of schoolwork-related messages. These are measures of platform activity. A conversation about learning can contain useful practice, a copied answer, an unresolved misconception, or several of these at different moments.\n\nThat distinction changes the question a school should ask. Counting access establishes that students are seeking help, but it does not show whether the help is accurate, whether the student understands it, or whether it remains useful without the tool. Conversation counts and message counts are also different units; neither is a count of individual learners. A school should resist turning headline volumes into a local estimate of how many pupils are benefiting.\n\nThe timing of help is nevertheless educationally relevant. A question can emerge while a student is revising after school, drafting in a second language, or encountering an unfamiliar term in a textbook. If the student waits several days to ask, the original difficulty may be hard to reconstruct. A proposed learning routine is to save the question, the attempted solution, and the explanation received, then revisit the point in class. That record makes after-school assistance available for teacher discussion.\n\nA practical assignment could ask students to identify one claim in an AI explanation that they can check directly. In mathematics, they might substitute a result back into the original problem. In history, they might inspect a cited primary document. In writing, they could compare suggested revisions with the meaning they intended. The purpose is to connect an answer with a method of checking it, rather than asking students to accept or reject the entire tool in the abstract.\n\nAnthropic's August 20 description of Claude Academy places intentional use and continued skill practice at the centre of AI education. Gemini's established Guided Learning tools similarly offer questions and stepwise explanations. Together with OpenAI's report, these product accounts suggest that the design of assistance deserves attention. They do not provide a common outcome measure that would justify ranking the platforms by their educational effectiveness.\n\nTeachers also need a fair picture of non-use. Some learners may lack reliable connectivity, prefer a human explanation, or find an assistant's language difficult. Others may rely on help without understanding its limitations. A class discussion can make these differences visible without requiring students to disclose private chat histories. Schools could collect a few voluntarily selected examples and provide an equivalent teacher-created exercise for anyone who does not use an AI service.\n\nThe report is most useful as a prompt for educational inquiry. Institutions can investigate which questions students bring to assistants, which misunderstandings persist, and whether later independent work improves. They can distinguish time saved on preparation from time spent correcting an explanation. OpenAI's figures establish the scale of reported activity; the next step for educators is to examine the quality, distribution, and consequences of that activity in their own setting.",
    "keyTakeaways": [
      "OpenAI reports substantial learning-related activity, but platform counts do not establish student outcomes.",
      "Ask learners to preserve a question, an attempted solution, and a checkable explanation rather than only a final answer.",
      "Local evaluation should include independent work and the experiences of learners who do not use AI."
    ],
    "whyItMatters": "After-school AI use is already a teaching issue; educators need ways to understand its quality without confusing frequency, access, and mastery.",
    "sourceUrl": "https://openai.com/index/learning-never-stops/",
    "sourceUrls": [
      {
        "label": "OpenAI: Learning never stops — 2026-08-26",
        "url": "https://openai.com/index/learning-never-stops/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-08-26",
    "image": "/images/research/covers/aied-119-backfill.png",
    "imageAlt": "A teenage learner writes algebra in a notebook oriented toward her, while an adult and a librarian review a worked example on a tablet.",
    "summaryImage": "/images/research/summary/aied-119-backfill-summary.png",
    "summaryImageAlt": "A teenage learner writes algebra in a notebook oriented toward her, while an adult and a librarian review a worked example on a tablet.",
    "summaryAudio": "/audio/research/aied-119-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-120",
    "slug": "research-ai-writing-feedback-improved-revised-drafts-while-adding-teacher-feedback-did-not-yield-a-clear-overall-advantage",
    "title": "AI writing feedback improved revised drafts, while adding teacher feedback did not yield a clear overall advantage",
    "authors": [
      "Linqian Ding",
      "Di Zou",
      "Lucas Kohnke"
    ],
    "venue": "Education and Information Technologies",
    "year": 2025,
    "type": "journal",
    "tags": [
      "academic writing",
      "feedback",
      "Hong Kong",
      "human-AI collaboration"
    ],
    "shortSummary": "A study of 77 graduate students in Hong Kong compared ChatGPT feedback with teacher-refined ChatGPT feedback on a literature-review assignment. Both groups improved their revised drafts. The combined approach produced a significant grammar advantage, but no significant overall improvement advantage between groups. Because the study assessed one assignment without an unaided transfer test, the findings concern revision quality rather than established long-term writing development.",
    "fullSummary": "Combining teacher expertise with AI feedback is an appealing proposition, but its benefits need to be measured carefully. Linqian Ding, Di Zou, and Lucas Kohnke compared ChatGPT feedback with a version reviewed and supplemented by an experienced human rater. Both approaches were followed by improvements in students’ revised academic writing. The important qualification is that the combined approach did not produce a statistically significant advantage in overall improvement between groups, even though some individual dimensions showed a more favorable pattern.\n\nThe participants were 77 graduate students studying English Language Education at a Hong Kong university. All were native Mandarin speakers with substantial English-learning experience. Two intact Academic English Writing classes, taught by the same instructor, were assigned to the two conditions: 30 students received ChatGPT-only feedback and 47 received combined feedback. The authors describe the study as quasi-experimental. The focal task was one literature-review assignment within a 16-week course, rather than a complete evaluation of the course’s writing development.\n\nBoth groups received training on obtaining and interpreting feedback, then wrote initial drafts during class. A recommended prompt asked ChatGPT for specific, actionable, encouraging comments and examples. The AI-only group revised from that feedback. For the combined group, an experienced academic-writing rater reviewed the original draft and the model’s comments, refined advice about coherence and topic relevance, and supplied tailored revision strategies. Researchers compared first and final drafts across mechanics, tone, grammar, organization, content, and APA formatting, alongside a perception questionnaire.\n\nWithin each group, overall scores improved. The AI-only group showed clearer gains on surface-related dimensions, while its content score did not significantly improve. The combined group improved across all assessed dimensions. However, those separate within-group results do not establish a between-group advantage. The direct comparison found greater grammar improvement for combined feedback, but no significant difference in overall improvement or content improvement. The organization comparison also did not reach the conventional significance threshold. Reporting the distinction prevents a stronger claim than the results support.\n\nStudents generally found the feedback understandable, yet understanding an instruction was not identical to knowing how to revise. Some described broad advice as abstract or insufficiently tied to their argument. Others questioned whether proposed wording was natural. Their comments point toward feedback literacy as part of the intervention: learners need to formulate a useful request, judge whether the response fits the task, and translate advice into a concrete change. These perceptions help explain the revision experience without independently proving learning gains.\n\nThe authors identify two major limitations. First, comparing drafts from a single assignment cannot show long-term writing development. Second, the study did not compare ChatGPT with established automated writing evaluation systems, so its distinctive advantage over those tools remains unknown. The two intact classes and the absence of a teacher-only or no-feedback condition further narrow causal interpretation. The findings therefore support a claim about assisted revision under these conditions, not a general conclusion that AI replaces writing instruction or reliably improves unaided future performance.\n\nFor AIEDHK, a useful implication is to evaluate feedback at the level of specific writing goals. A classroom pilot might inspect sentence accuracy separately from argument quality, then ask students to explain a revision and complete a later independent task. Teacher attention could focus on the reasoning that automated suggestions leave unresolved. These are proposed applications, not outcomes tested in the paper, and they preserve the distinction between a stronger submitted draft and a more capable writer.",
    "keyTakeaways": [
      "Both feedback conditions were followed by improved drafts on one academic writing assignment.",
      "Combined feedback had a grammar advantage, but the overall between-group improvement difference was not significant.",
      "Long-term independent writing development and comparison with conventional AWE tools remain untested."
    ],
    "whyItMatters": "Hong Kong writing programmes can evaluate which feedback dimensions benefit from human review while retaining independent writing checks. Improved assisted drafts should not automatically be reported as durable learning.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13775-3",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13775-3"
      }
    ],
    "createdAt": "2026-08-27",
    "image": "/images/research/covers/aied-120-backfill.png",
    "imageAlt": "A writing tutor discusses two annotated drafts with a graduate student beside a laptop, with a sunlit Hong Kong waterfront visible through the window.",
    "summaryImage": "/images/research/summary/aied-120-backfill-summary.png",
    "summaryImageAlt": "A writing tutor discusses two annotated drafts with a graduate student beside a laptop, with a sunlit Hong Kong waterfront visible through the window.",
    "summaryAudio": "/audio/research/aied-120-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-121",
    "slug": "news-claude-chrome-ga-browser-literacy",
    "title": "Product news: Claude in Chrome leaves pilot status, making browser authority a practical AI-literacy topic",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude in Chrome",
      "browser agents",
      "prompt injection",
      "source evaluation",
      "digital literacy"
    ],
    "shortSummary": "Anthropic made Claude in Chrome generally available on paid plans on August 26. The browser assistant can use existing sessions to read and act on websites, with automated action checks and optional manual approvals. Reported here on August 27, the change makes source evaluation and permission boundaries tangible for educators. OpenAI's learning-use report and Gemini's study features offer a contrasting reminder that web access and understanding are different capabilities.",
    "fullSummary": "Anthropic announced general availability for Claude in Chrome on August 26, 2026, following its earlier pilot. This August 27 report examines the educational implications of letting an assistant work in a signed-in browser. The extension can read pages and perform actions, while checks review intended operations against the user's request. Anthropic also retains a manual approval option and describes enterprise domain controls. The release concerns browser access, not universal permission to use every account or website.\n\nFor a learner, a webpage usually looks like material to read. For a browser agent, the same page may contain information that influences its next action. This makes the boundary between evidence and instruction especially important. A course reading can inform a summary, but it should not gain authority to change the assignment or redirect the assistant to an unrelated account. Teaching that distinction can make an otherwise abstract security issue concrete.\n\nA suitable classroom demonstration could use teacher-created pages in an isolated environment. One page might contain a normal explanation, another an incorrect factual claim, and a third an instruction that conflicts with the assigned task. Students would predict how each should be handled before examining the assistant's response. The objective is to distinguish evaluating a claim from obeying an instruction. Real credentials, student records, or unfamiliar public websites are unnecessary for that exercise.\n\nAnthropic reports stronger defences against prompt injection in its evaluations, while acknowledging that attacks continue to evolve. A low measured attack rate should not be translated into a promise that every browsing session is safe. For research assignments, even a well-controlled agent may collect a weak source or misread an argument. Technical safeguards and academic source judgment answer different questions, and both can matter in the same task.\n\nOpenAI's August 26 learning-use report describes demand for explanations and practice outside class. Gemini's existing Guided Learning offers structured help with topics and study materials. Neither comparison implies that browser autonomy is required for learning support. Educators can ask whether a task needs the assistant to navigate at all, or whether a small, deliberately chosen collection of materials would better serve the lesson.\n\nA librarian might pilot browser assistance by asking it to gather candidate sources on a topic, then having students record authorship, publication context, supporting evidence, and disagreements. Students would choose which sources deserve inclusion and explain why. The final bibliography could show which items were discovered by the agent and which survived human review. This preserves the difference between finding material quickly and making a defensible judgment about its value.\n\nInstitutions should also consider where a browser session begins and ends. An assistant operating in an existing login may encounter unrelated personal or administrative context. A dedicated teaching profile and a narrow task can make the activity easier to understand and review. Claude in Chrome's broader availability makes browser-based assistance more accessible, but the educational goal should remain precise: help learners recognize what a source says, what authority it has, and which actions they have actually authorized.",
    "keyTakeaways": [
      "Claude in Chrome became generally available on August 26; this article reports the update on August 27.",
      "Web content should be treated as evidence to evaluate, not as authority to redirect an agent.",
      "A teaching activity can separate discovery, source judgment, and authorized action using isolated examples."
    ],
    "whyItMatters": "Browser agents make it possible to teach the distinction between information, instruction, and permission through visible tasks rather than abstract warnings.",
    "sourceUrl": "https://claude.com/resources/articles/claude-in-chrome-generally-available",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude in Chrome general availability — 2026-08-26",
        "url": "https://claude.com/resources/articles/claude-in-chrome-generally-available"
      },
      {
        "label": "OpenAI: Learning never stops — 2026-08-26",
        "url": "https://openai.com/index/learning-never-stops/"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-08-27",
    "image": "/images/research/covers/aied-121-backfill.png",
    "imageAlt": "A librarian guides two students as they compare printed webpages, a source-checking notebook, and a laptop displaying browser permission options.",
    "summaryImage": "/images/research/summary/aied-121-backfill-summary.png",
    "summaryImageAlt": "A librarian guides two students as they compare printed webpages, a source-checking notebook, and a laptop displaying browser permission options.",
    "summaryAudio": "/audio/research/aied-121-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-122",
    "slug": "research-multilevel-ai-assisted-feedback-supported-collaborative-regulation-with-human-review-built-into-delivery",
    "title": "Multilevel AI-assisted feedback supported collaborative regulation, with human review built into delivery",
    "authors": [
      "Guoqing Lu",
      "Shen Ba",
      "Lan Yang"
    ],
    "venue": "Education and Information Technologies",
    "year": 2025,
    "type": "journal",
    "tags": [
      "collaborative learning",
      "formative feedback",
      "teacher education",
      "metacognition"
    ],
    "shortSummary": "A study of 114 preservice teachers compared four designs for AI-assisted formative feedback during collaborative learning. Feedback addressing task, process, and self-regulation showed advantages on several group outcomes over task-only comments, while adding detail was not uniformly better. A teaching assistant reviewed and delivered the feedback, so the findings concern a supervised instructional workflow rather than students using an autonomous chatbot or AI outperforming teacher feedback.",
    "fullSummary": "Useful feedback can address whether a group’s answer is correct, how the group worked, and how its members regulate their next steps. Guoqing Lu, Shen Ba, and Lan Yang investigated those design choices in an AI-supported collaborative learning study. Their findings favor attention to several levels of feedback, while challenging the assumption that longer or more elaborate AI comments are automatically more effective. The workflow also retained human review, an important part of what the study actually tested.\n\nThe participants were 114 preservice teachers specializing in geoscience at a public university in Northwest China. They took an introductory course on artificial intelligence and its educational applications. The study used a two-by-two design crossing feedback focus with complexity. Task-level feedback concentrated on the work itself; multilevel feedback additionally addressed process and self-regulation. Simple feedback identified strengths and weaknesses, while elaborate feedback included more detailed evaluation and concrete improvement suggestions. All conditions also received common basic oral feedback from the teacher.\n\nStudents worked collaboratively on the educational uses and risks of AI, producing mind maps and presenting group solutions. At designated stages, a teaching assistant used GPT-4 to generate feedback from group task sheets and discussion information. The assistant checked responses against the assigned feedback protocol, corrected logical or content errors, and refined prompts when necessary. Students therefore did not directly converse with the model. The tested intervention combined model generation, structured prompts, human checking, and an established classroom activity.\n\nResults differed by outcome. Multilevel conditions showed stronger behavioral participation on certain comparisons and an advantage in reported group-shared metacognition. Feedback complexity alone did not have a significant main effect on that measure, although focus and complexity interacted. Several group-product measures also favored multilevel feedback. The multilevel-elaborate condition exceeded the task-simple condition on the course achievement comparison. These patterns suggest that what the feedback addresses can matter more than simply how much text it contains.\n\nThe null results are equally relevant. The conditions did not significantly differ in perceived cognitive or emotional engagement, individual shared metacognition, or post-course AI literacy. AI literacy improved across the course, but every condition experienced the same broader instruction; that change cannot isolate the effect of AI feedback. Likewise, this was a comparison between feedback designs, not a trial against entirely human feedback or a no-feedback baseline. The study does not establish the independent contribution of the language model within the supervised package.\n\nThe authors describe the research as an exploratory quasi-experiment and acknowledge its distinctive preservice-teacher sample. Much of the engagement and metacognitive evidence relied on self-report, and the intervention did not test direct student interaction with an AI system. Group artifact quality and course scores add useful perspectives, but they do not remove every measurement or generalizability limitation. A school adopting the approach would still need to test whether its own learners understand and act on the feedback as intended.\n\nFor AIEDHK, the design implication is concrete: a feedback tool can ask about the group’s plan, division of work, and next check alongside the correctness of its answer. Teachers can retain responsibility for verifying that advice fits the activity. Any local evaluation should measure the response to feedback and independent achievement separately. That would test the pedagogical workflow represented in this study while avoiding an unsupported claim that automated feedback alone produces better collaboration.",
    "keyTakeaways": [
      "Feedback about task, process, and self-regulation showed advantages on several collaborative outcomes.",
      "More elaborate feedback was not uniformly superior, and several individual outcomes did not differ.",
      "A teaching assistant reviewed AI output; autonomous chatbot delivery was not evaluated."
    ],
    "whyItMatters": "AIEDHK can help educators specify the intended function of feedback and preserve human review. Collaborative process measures should accompany product scores when evaluating local use.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13778-0",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13778-0"
      }
    ],
    "createdAt": "2026-08-28",
    "image": "/images/research/covers/aied-122-backfill.png",
    "imageAlt": "Two preservice teachers revise a five-part whiteboard mind map while a teaching assistant checks an annotated feedback sheet beside them.",
    "summaryImage": "/images/research/summary/aied-122-backfill-summary.png",
    "summaryImageAlt": "Two preservice teachers revise a five-part whiteboard mind map while a teaching assistant checks an annotated feedback sheet beside them.",
    "summaryAudio": "/audio/research/aied-122-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-123",
    "slug": "news-claude-teachers-district-enterprise-offering",
    "title": "Product news: Claude for Teachers adds school-managed accounts and new mathematics checks",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude for Teachers",
      "district adoption",
      "formative assessment",
      "teacher development",
      "school administration"
    ],
    "shortSummary": "Anthropic's August 28 update extends Claude for Teachers from individual educators to centrally managed U.S. schools and districts, alongside new lesson-preparation and mathematics-checking resources. It is an institutional expansion, not the product's original launch. OpenAI's recent district partnerships and Gemini's course-connected study tools show different routes into schools. The immediate educational question is how staff will review, adapt, and share the materials these services produce.",
    "fullSummary": "Anthropic expanded Claude for Teachers to U.S. K-12 schools and districts on August 28, 2026. The new offering lets qualifying organisations manage educators and staff together, with institutional account controls, rather than relying only on individually verified teachers. It follows the product's July introduction. For schools, the news is therefore a change in how access and responsibility can be organised, alongside additional support for teaching practice.\n\nThe update includes lesson-preparation support and a skill for creating short checks of understanding, with mathematics available at launch. These resources were developed with Learning Commons. Anthropic also describes a planned evaluation with Detroit Public Schools Community District. An announced evaluation is a commitment to investigate, not a finding that teacher wellbeing or student achievement has improved. That distinction should remain visible when leaders discuss adoption with staff or families.\n\nA short mathematics check can be valuable if it reveals how a pupil is thinking. It can be much less useful if it merely reproduces a familiar question with different numbers. Teachers reviewing generated items should ask which misconception each answer would reveal, whether more than one response is defensible, and what instructional decision would follow. The quality of the follow-up matters as much as the wording of the question.\n\nFor example, a proposed departmental activity could give teachers the same fraction objective and ask them to review several generated questions. One item might measure calculation, another interpretation of a diagram, and another the ability to explain a comparison. Colleagues could identify what each item actually tests and revise ambiguous distractors. They would then use a small set in their normal teaching, examine the responses, and document what they changed in the next lesson.\n\nOpenAI's August 26 announcement similarly expands ChatGPT for Teachers partnerships across U.S. school systems. Gemini's earlier Classroom update connects study prompts with course materials under administrator controls. These are distinct institutional approaches, with different account arrangements and educational functions. Their availability should not be flattened into a single claim that every pupil can use every service. The Anthropic offer discussed here is explicitly for eligible U.S. schools and districts; it does not establish eligibility for Hong Kong schools.\n\nCentral management can also change professional collaboration. A school could agree where reviewed teaching materials are stored, who maintains them, and how a correction reaches colleagues who copied an earlier version. New staff need a clear way to learn these practices, while departing staff should not leave essential resources tied only to a personal account. Such arrangements are ordinary educational infrastructure, and they deserve attention alongside the assistant's visible features.\n\nFor school leaders, a useful pilot would therefore combine access with a modest shared review process. Teachers can record the original objective, the generated draft, the changes they made, and the classroom evidence that informed those changes. Leaders can consider preparation time and staff experience without assuming that more generated material means better instruction. The expansion creates an opportunity to support teacher judgment collectively, provided the school evaluates the material and practice that result.",
    "keyTakeaways": [
      "The August 28 update extends an existing teacher product to centrally managed U.S. schools and districts.",
      "New mathematics checks should be reviewed for the thinking they reveal and the teaching decisions they support.",
      "A planned district evaluation is not yet evidence of improved learning or wellbeing."
    ],
    "whyItMatters": "Shared institutional access matters when it helps teachers improve and maintain instructional materials together, rather than simply generate more of them.",
    "sourceUrl": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude for Teachers for schools and districts — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "OpenAI: More U.S. ChatGPT for Teachers districts — 2026-08-26",
        "url": "https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-08-28",
    "image": "/images/research/covers/aied-123-backfill.png",
    "imageAlt": "Three teachers review equivalent-fraction area models on a small whiteboard while one annotates a mathematics question sheet.",
    "summaryImage": "/images/research/summary/aied-123-backfill-summary.png",
    "summaryImageAlt": "Three teachers review equivalent-fraction area models on a small whiteboard while one annotates a mathematics question sheet.",
    "summaryAudio": "/audio/research/aied-123-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-124",
    "slug": "research-higher-self-reported-ai-literacy-accompanied-stronger-assisted-essays-and-different-interaction-patterns",
    "title": "Higher self-reported AI literacy accompanied stronger assisted essays and different interaction patterns",
    "authors": [
      "Jinhee Kim",
      "Sang-Soog Lee",
      "Rita Detrick",
      "Jialin Wang",
      "Na Li"
    ],
    "venue": "Journal of Computing in Higher Education",
    "year": 2025,
    "type": "journal",
    "tags": [
      "academic writing",
      "AI literacy",
      "epistemic network analysis",
      "learning processes"
    ],
    "shortSummary": "Researchers observed 36 graduate students writing with a GPT-4 system, combining think-aloud recordings, interaction traces, expert essay ratings, and epistemic network analysis. Students with higher self-reported AI literacy produced stronger assisted essays and showed different patterns of collaboration with the system. The association does not demonstrate that AI literacy training caused better writing, because underlying academic skills and other learner differences were not experimentally separated.",
    "fullSummary": "AI-assisted writing is a sequence of decisions: a learner generates an idea, asks for help, evaluates a response, and chooses what to write. Jinhee Kim and colleagues studied those decisions rather than treating chatbot access as a uniform intervention. Their investigation found that students reporting higher AI literacy interacted differently with a GPT-4 writing system and received higher ratings for their completed essays. The results describe an association between learner characteristics, interaction, and assisted performance, with important limits on causal interpretation.\n\nThe study involved 36 first-year master’s students in Digital Education at a Sino-British university in Suzhou. Participants completed an AI-literacy questionnaire and were divided into higher and lower groups around its median score. This was a comparison of existing self-reported characteristics, not random assignment to an AI-literacy course. Students received preparation in prompting and thinking aloud, then completed an academic writing task in a system containing a conversation area, writing workspace, and notepad.\n\nThe researchers captured spoken thinking, screen activity, and system records. Participants could verbalize in Chinese while composing in English, helping the team observe processes that might otherwise remain hidden behind a polished final essay. Coded activities covered writing, metacognition, and socio-emotional responses. Epistemic network analysis examined how those activities occurred together and distinguished learner-initiated exchanges from other forms of activity. Five experts rated the final essays for content, organization, and expression without receiving identifying participant information.\n\nThe higher-literacy group more often invited, adopted, and modified AI contributions, and the network analysis indicated different interaction configurations between the groups. Its essays also received higher ratings across the three writing dimensions. These findings complicate a simple rule that less AI involvement is always better: active collaboration can involve frequent model use. At the same time, raw activity counts and patterns are not interchangeable. The paper did not find a significant frequency-distribution difference for the broad metacognitive activity category, despite differences in absolute counts.\n\nThe crucial boundary is the outcome being assessed. The experts rated writing produced with AI available, not an independently written later essay. The study therefore cannot establish that the higher-literacy group learned more during the session or retained a transferable advantage afterward. Nor does its comparison show that raising a questionnaire score would cause the same performance difference. Baseline writing ability, critical reading, prior experience, and confidence may influence both how students describe their AI literacy and how successfully they use assistance.\n\nThe authors explicitly recognize those alternative explanations and the small, single-course sample. They argue that AI literacy operates alongside foundational academic skills and recommend separating those influences in future research. The think-aloud setting and coded discourse provide valuable process evidence, but remain a partial account of cognition. The study is strongest as a close examination of different approaches to an assisted task, rather than a general claim about the efficacy of any particular writing platform.\n\nFor AIEDHK, this suggests evaluating the quality of decisions within AI collaboration. A writing activity could ask learners to explain why a suggestion fits their argument, preserve an alternative formulation, and identify what evidence is still missing. Teachers could combine that record with both assisted work and a later independent task. Such a design would test whether a productive interaction pattern supports developing writers, rather than assuming that a fluent final essay or frequent use already demonstrates durable educational progress.",
    "keyTakeaways": [
      "The study combined think-aloud data, interaction records, network analysis, and expert ratings of assisted essays.",
      "Higher self-reported AI literacy was associated with different interaction patterns and stronger assisted writing.",
      "A small observational comparison cannot separate AI literacy from foundational writing and academic skills."
    ],
    "whyItMatters": "Process-aware assessment can make students’ evaluation of AI suggestions visible. Independent follow-up writing is needed to distinguish a stronger assisted product from lasting skill development.",
    "sourceUrl": "https://doi.org/10.1007/s12528-025-09444-6",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s12528-025-09444-6"
      }
    ],
    "createdAt": "2026-08-29",
    "image": "/images/research/covers/aied-124-backfill.png",
    "imageAlt": "Two graduate learners discuss a marked-up paragraph beside a desktop writing editor and a notebook containing planning and claim-evidence notes.",
    "summaryImage": "/images/research/summary/aied-124-backfill-summary.png",
    "summaryImageAlt": "Two graduate learners discuss a marked-up paragraph beside a desktop writing editor and a notebook containing planning and claim-evidence notes.",
    "summaryAudio": "/audio/research/aied-124-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-125",
    "slug": "news-cowork-built-in-browser-research-workspace",
    "title": "Product news: Claude Cowork's own browser separates delegated web research from a user's open tabs",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Cowork",
      "research browsing",
      "digital archives",
      "account boundaries",
      "source provenance"
    ],
    "shortSummary": "Claude Cowork gained a built-in desktop browser on August 26, allowing web tasks to run separately from a user's ordinary browsing session. This August 29 report considers what that separation could mean for supervised research and archive work. OpenAI's administrative tools and Google's Gemini learning collection provide complementary context: a useful workflow needs both a clear task boundary and a way for people to inspect the evidence it collects.",
    "fullSummary": "Anthropic announced a built-in browser for Claude Cowork on August 26, 2026. Reported here on August 29, the feature gives delegated web work a separate browser inside the desktop app, rather than requiring access to the user's existing Chrome session. Anthropic describes a staged rollout for Pro, Max, and Team users and administrator-controlled access for Enterprise. This is distinct from the general availability of the Claude in Chrome extension announced the same day.\n\nFor educational research, the distinction is practical. A personal browser can contain private correspondence, unfinished assignments, institutional systems, and unrelated accounts. A separate browsing environment makes it easier to define a task around a selected collection of websites. It does not make every source trustworthy or make all browsing read-only. The purpose and permitted actions still need to be clear to the person supervising the work.\n\nAn archive project provides a useful example. A seminar might ask students to assemble a catalogue of public museum objects connected with a historical period. The assistant could collect candidate pages, while students decide what counts as an object record, how to distinguish provenance from interpretation, and which fields belong in the catalogue. A retrieved page should remain linked to the entry it supports, so a later reader can inspect the evidence rather than trust a detached summary.\n\nThe browsing record can become part of the lesson. Students might compare two apparently similar objects and discover that one date refers to production while another refers to acquisition. They could mark uncertainty and explain why an institution's description is more informative than a search snippet. If the assistant misses a qualification, the revision should show what changed and which source justified it. This turns collection into an exercise in disciplined historical reasoning.\n\nOpenAI's recently introduced Admin plugin approaches a different part of delegation: supported workspace actions remain tied to existing permissions. Google's earlier back-to-school collection, including Gemini study tools, approaches the learner-facing side through structured practice and materials. These examples underline that browsing, administration, and learning support are separate functions. Combining them should begin with an educational purpose, not with the assumption that every available capability belongs in the same activity.\n\nTeachers can define a small initial collection, a maximum number of entries, and the information students must verify themselves. They can also make non-digital participation possible by providing a few printed source records. The task should reward justified inclusion and careful handling of ambiguity, rather than the largest catalogue. A group that rejects an attractive but poorly documented source may demonstrate more understanding than one that collects hundreds of plausible entries.\n\nAnthropic notes that its browser safeguards reduce rather than eliminate prompt-injection risk. A separate browser therefore offers a useful organisational boundary, not a guarantee of safe or accurate research. For a university pilot, success would mean a manageable set of sources, traceable statements, and students who can explain their selection decisions. The product makes web delegation more convenient; the teaching design should make the resulting evidence more visible and the human judgment more deliberate.",
    "keyTakeaways": [
      "Cowork's browser is a separate desktop environment, distinct from controlling an existing Chrome session.",
      "A source catalogue should preserve original links, uncertainty, and reasons for inclusion or rejection.",
      "Evaluate the quality of the collection and students' judgments, not the number of pages an agent visits."
    ],
    "whyItMatters": "Delegated browsing can support inquiry when it makes evidence easier to inspect and leaves source selection as an explicit human task.",
    "sourceUrl": "https://claude.com/resources/articles/cowork-built-in-browser",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude Cowork built-in browser — 2026-08-26",
        "url": "https://claude.com/resources/articles/cowork-built-in-browser"
      },
      {
        "label": "OpenAI: Admin plugin for ChatGPT Work and Codex — 2026-08-25",
        "url": "https://openai.com/index/introducing-admin-plugin/"
      },
      {
        "label": "Google: Back to school learning tools — 2025-08-06",
        "url": "https://blog.google/products-and-platforms/products/education/back-to-school-collection-2025/"
      }
    ],
    "createdAt": "2026-08-29",
    "image": "/images/research/covers/aied-125-backfill.png",
    "imageAlt": "A curator and two students compare a ceramic-vessel photograph, an annotated provenance card, and a laptop catalogue in a university museum archive.",
    "summaryImage": "/images/research/summary/aied-125-backfill-summary.png",
    "summaryImageAlt": "A curator and two students compare a ceramic-vessel photograph, an annotated provenance card, and a laptop catalogue in a university museum archive.",
    "summaryAudio": "/audio/research/aied-125-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-126",
    "slug": "research-problem-based-learning-students-saw-ai-as-useful-while-negotiating-effort-group-trust-and-rules",
    "title": "Problem-based learning students saw AI as useful while negotiating effort, group trust, and rules",
    "authors": [
      "Sofie Otto",
      "Stine Ejsing-Duun",
      "Euan Lindsay"
    ],
    "venue": "Education and Information Technologies",
    "year": 2025,
    "type": "journal",
    "tags": [
      "problem-based learning",
      "collaboration",
      "student perspectives",
      "learner agency"
    ],
    "shortSummary": "An exploratory study at Aalborg University surveyed 83 IT-focused students about generative AI in a problem-based learning environment. Students generally valued its support for explanations, ideas, and task completion, while describing tensions around missed learning opportunities, shared effort, and unclear rules. These are situated student accounts rather than measured learning effects, but they show why decisions about AI use need to include the project group and its educational goals.",
    "fullSummary": "In a collaborative project, saving time and learning through the work do not always point in the same direction. Sofie Otto, Stine Ejsing-Duun, and Euan Lindsay explored how students negotiated that tension when generative AI entered a university organized around problem-based learning. The study found broadly favorable attitudes alongside concerns about effort, trust, and uncertainty. Its contribution is to place AI use within the social organization of learning, rather than viewing it only as a private exchange between a student and a tool.\n\nThe research took place at Aalborg University, where students work in groups on extended, authentic problems with supervision. An online questionnaire was distributed to first- and fifth-semester students in IT-focused programmes during the winter of 2023. After incomplete responses were excluded, the analysis included 83 students. Alongside questions about experience and attitudes, the survey asked participants to describe their most important benefit and concern. Sixty-seven respondents contributed answers to the open questions, producing 134 qualitative responses.\n\nThe researchers combined descriptive statistics and principal component analysis with a thematic analysis informed by activity theory. That perspective connects a learner’s actions with project goals, peers, expectations, tools, and divisions of work. It helped distinguish using AI to support thinking and understanding from using it to accelerate or replace task performance. Those uses can complement one another, but they can also conflict when a task is valuable precisely because students must struggle through it together.\n\nStudents described benefits including explanations, idea generation, coding support, and help getting started. Most regarded AI as a potentially useful learning aid, and many trusted their group members to use it responsibly. At the same time, some worried about dependence and the loss of learning opportunities. The qualitative accounts showed that disagreements could arise when one member treated generated output as efficient progress while another saw the same action as avoiding the reasoning the group needed to practice.\n\nThe study does not suggest that project groups were generally in conflict. Most respondents disagreed that AI had caused conflict in their own group. Rather, a subset of accounts revealed consequential tensions that a simple average satisfaction score could obscure. Students also called for clearer guidance about acceptable use and expressed concern about unintended misconduct. The authors interpret these issues as interactions among educational purposes, community expectations, and rules, rather than as a problem solved solely by choosing a more capable model.\n\nThe limitations are substantial and clearly stated. The evidence is self-reported, comes from a modest sample in one institutional setting, and captures a particular early period of adoption. Asking for the most important benefit and concern may emphasize extreme experiences. Individual responses cannot fully represent group-level dynamics, and the study did not directly observe collaboration or measure independent learning gains. It therefore maps experiences and possible design problems without demonstrating that AI caused either better learning or a decline in trust.\n\nFor AIEDHK, a practical implication is to make group expectations explicit before substantial project work begins. Students could agree which activities they want to perform themselves, where AI support is acceptable, and how they will explain generated contributions to one another. Those agreements should be revisited as the project develops. This is a suggested response to the tensions reported in the paper, not an intervention tested by it, and it treats students as participants in designing responsible collaborative practice.",
    "keyTakeaways": [
      "Students generally valued AI support, while a subset described tensions around learning effort and group expectations.",
      "Most respondents did not report AI-related group conflict; qualitative concerns should not be generalized to everyone.",
      "The exploratory survey captures situated experiences rather than causal learning or collaboration effects."
    ],
    "whyItMatters": "Project-based courses can invite students to agree on the purpose and limits of AI assistance within their group. Such agreements can make reasoning, contribution, and shared accountability easier to discuss.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13533-5",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13533-5"
      }
    ],
    "createdAt": "2026-08-30",
    "image": "/images/research/covers/aied-126-backfill.png",
    "imageAlt": "Four university students discuss a hand-drawn project map around a round table, with a laptop showing a short task list highlighted in cyan.",
    "summaryImage": "/images/research/summary/aied-126-backfill-summary.png",
    "summaryImageAlt": "Four university students discuss a hand-drawn project map around a round table, with a laptop showing a short task list highlighted in cyan.",
    "summaryAudio": "/audio/research/aied-126-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-127",
    "slug": "news-claude-memory-editable-learning-context",
    "title": "Product news: Claude unifies chat and Cowork memory, making remembered context open to correction",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude memory",
      "learner agency",
      "research continuity",
      "personalization",
      "context management"
    ],
    "shortSummary": "Anthropic's August 25 memory update lets chat and Cowork draw on the same editable record of remembered topics. Reported here on August 30, it raises a useful educational question: who decides which account of a learner or project persists? OpenAI's workspace administration and Gemini's course-selected context offer contrasting controls. Continuity can reduce repetition, but educators should distinguish remembered preferences from current evidence about understanding.",
    "fullSummary": "Anthropic announced on August 25, 2026 that Claude chat and Cowork would share the same memory. Users can inspect remembered topics and edit or delete them, while the system updates context during conversations. This August 30 report focuses on what that change means for continuing educational and research work. A remembered detail may help an assistant resume a project, but its persistence should not be confused with its accuracy or continuing relevance.\n\nThe most useful memory is often mundane: a preferred document format, the meaning of a project acronym, or the location of an approved source collection. These details can spare a researcher repeated explanations. A different kind of statement, such as “this learner struggles with statistics,” is more consequential. It may be based on a temporary difficulty, a mistaken inference, or an outdated conversation. Educators should avoid allowing such a label to become an unexamined description of a person.\n\nA proposed university exercise could ask students to maintain a short project brief alongside an assistant's remembered context. After changing the research question, they would compare the two and identify what should be retained, revised, or removed. The exercise can use fictional project details. Students would then explain which version has authority and why. The learning goal is to understand context management as an active editorial decision, rather than a convenience that happens invisibly.\n\nFor research teams, memory should also be distinguished from an evidence record. A remembered conclusion may help orient a conversation, but a reproducible analysis needs the underlying data version, method, and result. A project can change because a new sample arrives, a coding error is corrected, or a collaborator questions an assumption. Keeping the authoritative record outside conversational memory makes those changes easier to inspect and discuss.\n\nOpenAI's August 25 Admin plugin concerns a related but different boundary: the actions an account is permitted to perform. Gemini in Classroom uses selected course and assignment material to contextualize study prompts. Comparing these approaches clarifies three questions: what is remembered, what is supplied for this task, and what action is authorized. A useful answer to one question does not settle the others, and institutions should explain them in language staff and students can understand.\n\nThe update's editable topics could support reflective use if learners periodically ask whether the remembered context still represents their intentions. They might remove an obsolete deadline or replace an overly broad preference with a specific one. They should also be able to begin a task without carrying forward an earlier framing. A student exploring a new interpretation needs room to disagree with their own previous position, rather than receive increasingly personalised confirmation of it.\n\nAnthropic describes different defaults and organisational controls across plans, so local access should be checked before designing an activity around memory. The educational value lies in making continuity understandable and revisable. A good pilot would examine whether participants notice stale context, can correct it, and can still identify the original evidence behind a claim. Less repetition is convenient; better control over the story an assistant carries forward is the more important capability to teach.",
    "keyTakeaways": [
      "The shared-memory update was announced August 25 and is reported here on August 30.",
      "Remembered preferences and project context should remain revisable; they are not definitive learner profiles.",
      "Keep authoritative research evidence separate from an assistant's contextual memory."
    ],
    "whyItMatters": "Persistent AI context becomes more useful when learners and researchers can inspect it, correct it, and decide when to start afresh.",
    "sourceUrl": "https://claude.com/resources/articles/claudes-memory-works-everywhere-and-you-decide-whats-in-it",
    "sourceUrls": [
      {
        "label": "Anthropic: Memory across Cowork and chat — 2026-08-25",
        "url": "https://claude.com/resources/articles/claudes-memory-works-everywhere-and-you-decide-whats-in-it"
      },
      {
        "label": "OpenAI: Admin plugin for ChatGPT Work and Codex — 2026-08-25",
        "url": "https://openai.com/index/introducing-admin-plugin/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-08-30",
    "image": "/images/research/covers/aied-127-backfill.png",
    "imageAlt": "A doctoral student and supervisor compare an annotated earlier project brief with a revised research question, beside a laptop showing the two document versions.",
    "summaryImage": "/images/research/summary/aied-127-backfill-summary.png",
    "summaryImageAlt": "A doctoral student and supervisor compare an annotated earlier project brief with a revised research question, beside a laptop showing the two document versions.",
    "summaryAudio": "/audio/research/aied-127-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-128",
    "slug": "research-students-rated-ai-tools-differently-after-demonstrations-but-expected-support-was-not-tested-learning",
    "title": "Students rated AI tools differently after demonstrations, but expected support was not tested learning",
    "authors": [
      "Joana Heil",
      "Dirk Ifenthaler",
      "Martin Cooper",
      "Maria Lidia Mascia",
      "Rachele Conti",
      "Maria Pietronilla Penna"
    ],
    "venue": "Smart Learning Environments",
    "year": 2025,
    "type": "journal",
    "tags": [
      "AI competence",
      "student expectations",
      "higher education",
      "assessment"
    ],
    "shortSummary": "A survey of 223 students at universities in Australia, Germany, and Italy compared expectations about six AI tools after short demonstrations. Perceived support varied by tool, and students reporting greater AI competence tended to give more positive ratings. Participants did not use the tools during the study. The results therefore inform questions about expectations and training needs, not claims about actual learning improvements or a current product ranking.",
    "fullSummary": "Students can expect different things from an AI reading assistant, translator, chatbot, or presentation tool. Joana Heil and colleagues investigated those expectations in a study spanning three universities. They found that perceived educational support varied across applications and was associated with self-reported AI competence. The distinction between an expectation and an observed outcome is central: participants watched demonstrations and rated potential uses, so the study did not test whether any tool actually improved learning or assessment performance.\n\nThe researchers recruited 223 students through convenience sampling at one university each in Australia, Germany, and Italy. Most participants were undergraduates. Their online survey covered learning and assessment experiences, perceptions of selected AI applications, and dimensions of AI competence. A shared data-collection protocol presented similarly structured short videos demonstrating a specific educational use case, followed by questions about expected benefits, acceptability, and related issues. The tools included ChatGPT, DeepL, ExplainPaper, PaperDigest, Quillbot, and Tome as they were represented in those demonstrations.\n\nThe design makes the object of evaluation unusually clear. Students were judging a described possibility, such as simplifying a difficult paper or preparing a presentation, rather than interacting with an application on their own coursework. That is useful for understanding initial appeal and anticipated purpose. It also means the results depend partly on how the example problem and tool were presented. A convincing demonstration could raise expectations without revealing the difficulties a student encounters during independent use.\n\nRatings differed among the six applications. ExplainPaper received the highest average rating for expected learning and assessment support in the reported comparison, with significant differences from several other tools. Students’ competence ratings were also uneven across dimensions, with attitudes rated more highly than theoretical understanding. Overall self-reported AI competence had a positive association with tool evaluations. This relationship was limited in size and does not establish whether competence produced favorable judgments, favorable experiences shaped self-confidence, or another factor influenced both.\n\nThe authors additionally explored whether expectations clustered around understanding material or achieving performance goals. That distinction is potentially useful: improving a grade, saving effort, and understanding a concept are not identical purposes. However, the statistical models describe patterns in survey responses, not demonstrated categories of actual tool use. Some reported fit indices were less favorable than others. The proposed grouping is therefore best read as an interpretation to investigate, rather than a fixed classification of what an application necessarily does for learners.\n\nThe paper’s limitations explicitly include convenience sampling, reliance on questionnaires, and the absence of direct interaction with the tools. Three institutions do not provide representative samples of three national student populations. More importantly, no experiment or authentic use-case assessment linked expectations to learning outcomes. The authors call for longitudinal and mixed-methods research that follows competence and use over time. Changing products also mean the findings should not be presented as a current comparative review of their capabilities.\n\nFor AIEDHK, the study offers a useful starting point for a pilot rather than an endpoint. Before students try a tool, educators could record what they expect it to help with. After a defined activity, they could compare those expectations with task quality, an independent understanding check, and the effort required to verify outputs. This proposed extension would connect perceived usefulness to observable educational value while preserving the distinction between enthusiasm, competence, performance, and learning.",
    "keyTakeaways": [
      "The sample evaluated demonstrations of six tools, without directly using them in the study.",
      "Self-reported AI competence was positively associated with expected support, not measured learning gains.",
      "Perceived learning and performance purposes can guide pilot questions but do not establish product effectiveness."
    ],
    "whyItMatters": "Local pilots can compare students’ initial expectations with actual task experiences and independent learning checks. This avoids using positive acceptance ratings as a substitute for educational evidence.",
    "sourceUrl": "https://doi.org/10.1186/s40561-025-00395-0",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1186/s40561-025-00395-0"
      }
    ],
    "createdAt": "2026-08-31",
    "image": "/images/research/covers/aied-128-backfill.png",
    "imageAlt": "An educator demonstrates a paper-reading tool on a large screen while university students watch, take notes, and hold an annotated expectations card.",
    "summaryImage": "/images/research/summary/aied-128-backfill-summary.png",
    "summaryImageAlt": "An educator demonstrates a paper-reading tool on a large screen while university students watch, take notes, and hold an annotated expectations card.",
    "summaryAudio": "/audio/research/aied-128-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-129",
    "slug": "news-openai-youth-ai-safety-policy-access",
    "title": "Industry news: OpenAI backs California youth AI safeguards while arguing for continued learning access",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "youth AI",
      "age-appropriate design",
      "education policy",
      "student agency",
      "school technology"
    ],
    "shortSummary": "OpenAI's August 31 policy statement supports California Senate Bill 1119 and argues that youth safeguards should preserve useful learning access. It is a company position urging action, not evidence that a law has taken effect or that a product is safe in every setting. Anthropic's teacher-focused institutional offer and Gemini's controlled Classroom access provide practical comparisons for schools considering which users, activities, and responsibilities belong in an AI programme.",
    "fullSummary": "OpenAI published support for California Senate Bill 1119 on August 31, 2026, urging the governor to sign the measure. The company argues for protections tailored to younger users while preserving access to useful educational activities. It highlights age assessment, independent scrutiny, parental tools, and protections for personal information. This article reports that policy position at the time it was published; it does not treat the statement as confirmation of enactment or as legal guidance for schools elsewhere.\n\nFor educators, the underlying design question is how to provide help without assuming that all learners have the same needs or authority. A child asking for a definition, an older student revising an essay, and a teacher preparing materials may require different experiences. A product label alone does not explain those differences. Schools need a clear account of the intended user, the task, the information involved, and the adult who can respond when something goes wrong.\n\nAccess and protection are sometimes discussed as if one must always displace the other. A more useful school discussion begins with a specific activity. For instance, an approved practice exercise can be designed around a short, teacher-selected passage and a small set of questions. Students can be shown how to challenge an explanation and how to ask a teacher for help. This gives the institution something concrete to evaluate, instead of debating unrestricted use in the abstract.\n\nContemporary products illustrate different boundaries. Anthropic's August 28 expansion of Claude for Teachers centres on institutionally managed educator and staff accounts. Google's earlier Gemini in Classroom announcement makes student features dependent on school-administered access and connects prompts with class materials. These approaches should not be described as interchangeable. An educator workspace, a student-facing activity, and a personal consumer account carry different expectations even when they use related model technology.\n\nA school consultation can make those expectations visible. Students might review several fictional scenarios and identify where they would want a teacher, parent, or technical support person involved. Families could comment on whether notices are understandable and whether an alternative activity is available. Staff could map who receives concerns and how quickly they can act. Such a consultation would help test the institution's process; it would not certify the product's overall safety.\n\nEvidence also needs to match the claim. The existence of a control does not show how reliably people find it, understand it, or use it. A company policy can describe intended behaviour without measuring every real interaction. Educational evaluation should include misunderstandings, inaccessible instructions, and cases where a student needs a human response. Reports should distinguish the number of accounts covered from the quality of support people actually receive.\n\nFor Hong Kong schools, the immediate relevance is comparative rather than a direct statement of local legal duties. OpenAI's position makes youth access and safeguards part of the public AI agenda, while the other product updates show how those concerns reach everyday account and classroom design. A useful institutional response is to define a limited educational purpose, involve the people affected, and review the experience with evidence before broadening it.",
    "keyTakeaways": [
      "OpenAI's August 31 statement supports a California bill and urges signature; it is not an enactment notice.",
      "Teacher workspaces, student activities, and personal accounts should not be treated as the same deployment.",
      "Schools can evaluate understandable support routes and user experiences alongside technical controls."
    ],
    "whyItMatters": "Youth AI policy becomes actionable for educators when it is translated into specific learning activities, clear responsibility, and accessible human support.",
    "sourceUrl": "https://openai.com/index/supporting-california-bill-advance-ai-youth-safety/",
    "sourceUrls": [
      {
        "label": "OpenAI: Support for California youth AI legislation — 2026-08-31",
        "url": "https://openai.com/index/supporting-california-bill-advance-ai-youth-safety/"
      },
      {
        "label": "Anthropic: Claude for Teachers for schools and districts — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-08-31",
    "image": "/images/research/covers/aied-129-backfill.png",
    "imageAlt": "A parent, student, teacher and school coordinator discuss an illustrated learning-activity sheet and a tablet during a school meeting.",
    "summaryImage": "/images/research/summary/aied-129-backfill-summary.png",
    "summaryImageAlt": "A parent, student, teacher and school coordinator discuss an illustrated learning-activity sheet and a tablet during a school meeting.",
    "summaryAudio": "/audio/research/aied-129-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-130",
    "slug": "research-ai-supported-climate-futures-activities-accompanied-greater-hope-without-isolating-the-contribution-of-ai",
    "title": "AI-supported climate futures activities accompanied greater hope, without isolating the contribution of AI",
    "authors": [
      "Shu-Chiu Liu",
      "Pierre-Alexandre Château"
    ],
    "venue": "Journal of Science Education and Technology",
    "year": 2025,
    "type": "journal",
    "tags": [
      "climate education",
      "futures thinking",
      "generative AI",
      "student agency"
    ],
    "shortSummary": "A climate-change course integrated image or text generation into a structured activity about desirable futures. Across two semester cohorts, students expressed more positive future perspectives and greater climate hope after instruction, with some self-perceived action gains in the image group. The study combined AI with scientific preparation, discussion, and narrative work, so it cannot attribute those changes specifically to AI or establish that intentions became actual climate action.",
    "fullSummary": "Climate education asks learners to understand serious risks while seeing meaningful possibilities for action. Shu-Chiu Liu and Pierre-Alexandre Château examined a teaching module that addressed this challenge through futures thinking, using generative AI to help students represent a desirable carbon-neutral future. Students reported more hopeful perspectives after the instruction. The evidence concerns a complete educational sequence, however, rather than an isolated test of whether image or text generation itself produces agency or changes environmental behavior.\n\nThe module formed the final part of an introductory university climate-change course. It followed instruction on scientific concepts and the ecological and social dimensions of climate change. Two consecutive semester cohorts experienced similar content and structure, with one using image generation and the other using text generation. Matched data were available for 58 students in the image group and 62 in the text group. The comparison was therefore between cohorts, not random allocation of students to tools within the same class.\n\nAcross approximately eight hours, students explored climate projections, discussed drivers of different futures, and developed their own visions of a sustainable city. They were asked to imagine life in 2053 and translate prior discussions about energy, transport, consumption, and policy into concrete features of that future. AI entered after this preparatory work. Students refined prompts, compared outputs, and shared their scenarios with classmates, keeping scientific preparation and peer discussion within the activity rather than relying on generation alone.\n\nThe researchers combined word-association responses, climate-hope and self-perceived-action questionnaires, and written reflections. Both cohorts expressed more positive future perspectives and higher overall hope after instruction. The image group also improved on confidence in personal influence and willingness to act, while neither group significantly improved on perceived knowledge of action possibilities. These outcomes are not interchangeable: a shift in emotional outlook or declared willingness is different from demonstrating knowledge, undertaking an action, or sustaining that action later.\n\nStudent reflections described useful aspects of generation, including speed, imaginative support, and the ability to make an idea easier to discuss. They also identified limitations. Images sometimes lacked realism or failed to capture intended details, while generated narratives could feel shallow or dependent on the input supplied. Those comments provide evidence of participants noticing constraints. They do not by themselves establish a measured improvement in general AI literacy, nor show that the generated scenarios were scientifically reliable without teacher and learner scrutiny.\n\nThe study’s design limits comparisons between modalities and claims about causation. Cohorts came from different semesters, and there was no equivalent version of the module without AI. The observed changes could reflect the broader teaching, discussion, futures orientation, or differences between cohorts as well as AI-supported work. Outcomes relied substantially on self-report and immediate reflections, with no direct observation of later climate action. Larger change in one group also does not automatically demonstrate a statistically established advantage over the other group.\n\nFor AIEDHK, the useful design idea is to place generation after learners have gathered evidence and articulated their own values and proposals. A class could then examine which features of a generated future are plausible, what assumptions support them, and what actions would be needed to make them possible. Any local evaluation should track those reasoning steps and subsequent activity separately from hopeful feelings. This approach treats the study as a model for structured exploration, while leaving claims about durable learning and behavior open to testing.",
    "keyTakeaways": [
      "Two semester cohorts used image or text generation within a broader futures-thinking module.",
      "Hope and future outlook improved, while measured action outcomes concerned students’ own perceptions.",
      "No non-AI comparator or randomized tool assignment isolated the effect of generation."
    ],
    "whyItMatters": "Climate lessons can combine evidence-based preparation with critical examination of generated futures. Evaluating reasoning and later action alongside hope would strengthen the educational evidence.",
    "sourceUrl": "https://doi.org/10.1007/s10956-025-10229-w",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s10956-025-10229-w"
      }
    ],
    "createdAt": "2026-09-01",
    "image": "/images/research/covers/aied-130-backfill.png",
    "imageAlt": "A lecturer and two students compare a hand-drawn low-carbon neighborhood plan with a streetscape on a laptop, discussing a cycling route and solar roofs.",
    "summaryImage": "/images/research/summary/aied-130-backfill-summary.png",
    "summaryImageAlt": "A lecturer and two students compare a hand-drawn low-carbon neighborhood plan with a streetscape on a laptop, discussing a cycling route and solar roofs.",
    "summaryAudio": "/audio/research/aied-130-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-131",
    "slug": "news-gemini-agentic-video-lecture-evidence",
    "title": "Product news: Gemini adds selective video analysis, opening a new route to checkable lecture search",
    "authors": [
      "Google DeepMind"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini video",
      "lecture search",
      "multimodal learning",
      "teacher education",
      "evidence selection"
    ],
    "shortSummary": "Google announced agentic video understanding on September 1, allowing supported Gemini models to inspect selected moments rather than process a recording only at a fixed rate. The API capability could support lecture search and teacher education, provided returned moments remain checkable. OpenAI's education partnerships and Anthropic's browser tools show parallel interest in assisted workflows, but finding a relevant clip is different from interpreting teaching or measuring learning.",
    "fullSummary": "Google introduced agentic video understanding on September 1, 2026 for Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite. The feature lets the model search and inspect selected parts of a recording across visual frames, audio, and transcripts. Google reports improved efficiency and accuracy in its evaluations. The initial announcement makes the capability available through developer interfaces, while describing Gemini-app availability as forthcoming. Schools should not assume it appeared in every student's app that day.\n\nThe educational opportunity is more specific than summarising a whole lecture. A learner might ask where a lecturer changes an assumption, demonstrates an exception, or connects two diagrams. An assistant that can revisit relevant moments could return a short set of timestamps for review. The student can then watch the surrounding material and decide whether the selection answers the question. The returned clip is evidence to examine, not a substitute for the interpretation.\n\nFor teacher education, a proposed exercise could use a deliberately recorded demonstration lesson with consenting adult participants. Trainees might first mark moments where the teacher checks understanding, then compare their selections with the assistant's. Disagreement can be productive: one observer may count a general invitation for questions, while another requires evidence that a learner's reasoning was elicited. The group would need to define the category before treating a count as meaningful.\n\nSelective viewing also creates a methodological issue. A system can find a convincing example while missing a contradictory moment elsewhere in the recording. Asking for the “best example” and asking for “every instance” are different tasks. An evaluation should include cases where the relevant event is brief, repeated, partly obscured, or absent. Reviewers should check whether the assistant admits uncertainty and whether the cited timestamps actually support its explanation.\n\nOpenAI's recent school partnerships focus on bringing managed AI tools and training to educators. Anthropic's browser developments extend what an assistant can inspect and act on during web work. Gemini's video update adds another form of access: targeted inspection within media. Across these approaches, educational teams should define the evidence they need before choosing a tool. More accessible information does not automatically supply a sound interpretation of it.\n\nA small pilot could begin with public instructional videos whose content teachers already know. Students could receive the same question and compare ordinary searching with assistant-selected clips. The assessment might examine whether they locate the right passage, preserve its qualifications, and explain a new example afterwards. Time saved would be recorded separately. This would help distinguish efficient retrieval from improved understanding without claiming either outcome in advance.\n\nThe data source matters as well. A public demonstration, a licensed lecture recording, and identifiable classroom footage are not interchangeable inputs. Institutions need appropriate permission and a clear purpose for the material they use. Google's announcement makes video analysis more flexible, but a defensible educational workflow still needs traceable timestamps, agreed categories, and human interpretation. The most promising use is one that helps people return to the right evidence and think more carefully about what it shows.",
    "keyTakeaways": [
      "The September 1 launch concerns supported Gemini APIs; app availability was described as forthcoming.",
      "Timestamped retrieval can support learning when students inspect the surrounding evidence and explain its meaning.",
      "Video counts and selected examples need clear categories, missing-case checks, and appropriate source permissions."
    ],
    "whyItMatters": "AI-assisted video search could make lectures easier to revisit while giving educators a concrete way to teach evidence selection and interpretation.",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/",
    "sourceUrls": [
      {
        "label": "Google DeepMind: Agentic video understanding — 2026-09-01",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/"
      },
      {
        "label": "OpenAI: More U.S. ChatGPT for Teachers districts — 2026-08-26",
        "url": "https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts/"
      },
      {
        "label": "Anthropic: Claude in Chrome general availability — 2026-08-26",
        "url": "https://claude.com/resources/articles/claude-in-chrome-generally-available"
      }
    ],
    "createdAt": "2026-09-01",
    "image": "/images/research/covers/aied-131-backfill.png",
    "imageAlt": "Teacher trainees and a mentor review a paused lesson about triangle area while a trainee marks the corresponding moment on a paper timeline.",
    "summaryImage": "/images/research/summary/aied-131-backfill-summary.png",
    "summaryImageAlt": "Teacher trainees and a mentor review a paused lesson about triangle area while a trainee marks the corresponding moment on a paper timeline.",
    "summaryAudio": "/audio/research/aied-131-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-132",
    "slug": "research-language-learners-trust-in-ai-was-linked-to-reliance-and-resistance-with-self-direction-shaping-reported-use",
    "title": "Language learners’ trust in AI was linked to reliance and resistance, with self-direction shaping reported use",
    "authors": [
      "Feifei Wang",
      "Nuoen Li",
      "Alan C. K. Cheung",
      "Gary K. W. Wong"
    ],
    "venue": "International Journal of Educational Technology in Higher Education",
    "year": 2025,
    "type": "journal",
    "tags": [
      "language learning",
      "trust in AI",
      "self-directed learning",
      "learner agency"
    ],
    "shortSummary": "A mixed-methods study combined a survey of 682 Chinese university students with 40 follow-up interviews about AI use in language learning. Trust was associated with reliance, resistance, and intentions, while self-directed learning moderated the relationship between intention and reported use. Interviews distinguished thoughtful use from uncritical dependence. Because the design was cross-sectional and self-reported, the model explains patterns of association rather than causal pathways or measured language gains.",
    "fullSummary": "Trust in generative AI is not simply a quality to maximize. A learner might trust a tool enough to explore its suggestions, or trust it so readily that checking stops. Feifei Wang and colleagues investigated this distinction in language learning through an explanatory mixed-methods study. Their findings connect trust with reliance, resistance, and reported use, while showing how students describe different ways of negotiating those relationships. The work addresses learner behavior and interpretation rather than testing whether AI improves language proficiency.\n\nThe quantitative phase recruited Chinese university students who had already used generative AI for language learning. An online survey collected between June and August 2024 produced 682 valid responses. The researchers used established measures adapted and translated for the context, then tested a structural equation model involving trust, reliance, resistance, behavioral intention, self-directed learning, and use. A second phase interviewed 40 purposively selected participants to explore the survey relationships and capture experiences that a path diagram could not fully describe.\n\nIn the statistical model, greater trust was associated with stronger intention to use AI and greater reliance, while resistance showed an opposing relationship with intention. Self-directed learning moderated the association between intention and reported use. These relationships were consistent with the authors’ proposed framework, but consistency does not establish temporal order. Students were not assigned different levels of trust or self-direction, and the measures came from the same survey occasion. A fitted model cannot by itself prove that increasing trust will produce responsible or effective use.\n\nThe interviews give the statistical results a more practical meaning. Some learners described accepting suggestions because they assumed the system knew more than they did. Others checked whether an answer addressed their question, revised prompts, or retained responsibility for the final text. Resistance also took different forms, including preference for familiar learning methods and more active skepticism following disappointing experiences. Learners linked their decisions to perceived accuracy, academic-integrity expectations, data concerns, and the clarity of support from teachers or institutions.\n\nThese accounts suggest that reliance is a judgment made in context, not a single stable trait. A student may accept a grammar suggestion while rejecting an interpretation of an argument. The researchers describe appropriate, excessive, and insufficient reliance, alongside disuse and different kinds of inappropriate use. Those categories are conceptual interpretations of participants’ accounts. They should not be read as externally verified classifications of every learner’s actual behavior, or as evidence that one pattern caused a particular language-learning outcome.\n\nThe authors explicitly identify the cross-sectional design, self-report bias, and the concentration on language learners in Chinese higher education as limitations. The survey’s use measure was not a platform-log observation, and no independent language assessment established educational benefit. The interview sample deepens understanding but does not remove those boundaries. Future longitudinal or experimental work would be needed to test how trust develops, how it responds to experience, and whether changes in self-directed practice alter learning.\n\nFor AIEDHK, the implication is to support calibrated judgments rather than blanket confidence or blanket rejection. Educators could ask learners to state the purpose of an AI request, check a disputed response against a reliable resource, and explain which decisions they retained. Clear course expectations would make those judgments easier to discuss. These are proposed classroom applications of the study’s framework, with success still requiring observation of both actual behavior and independent language performance.",
    "keyTakeaways": [
      "The survey and interviews connect trust, reliance, resistance, and self-directed use in language learning.",
      "Learners described selective checking as well as uncritical acceptance and avoidance.",
      "Cross-sectional self-reports do not establish causal pathways or language-learning gains."
    ],
    "whyItMatters": "Language teaching can make students’ reasons for trusting or questioning AI visible. Clear task purposes and independent checks offer more useful goals than simply increasing adoption.",
    "sourceUrl": "https://doi.org/10.1186/s41239-025-00547-9",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1186/s41239-025-00547-9"
      }
    ],
    "createdAt": "2026-09-02",
    "image": "/images/research/covers/aied-132-backfill.png",
    "imageAlt": "A language tutor and student compare a laptop suggestion with an underlined reference-book passage while another student presents an annotated page.",
    "summaryImage": "/images/research/summary/aied-132-backfill-summary.png",
    "summaryImageAlt": "A language tutor and student compare a laptop suggestion with an underlined reference-book passage while another student presents an annotated page.",
    "summaryAudio": "/audio/research/aied-132-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-133",
    "slug": "news-teacher-canvas-preparation-chatgpt-case",
    "title": "Product news: A Utah teacher's ChatGPT Work case highlights preparation time and the craft of adapting assignments",
    "authors": [
      "OpenAI Academy"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "ChatGPT Work",
      "teacher workload",
      "Canvas",
      "differentiated instruction",
      "classroom practice"
    ],
    "shortSummary": "OpenAI Academy's September 2 profile describes Utah teacher Ashtin Johnson using ChatGPT Work for Canvas preparation and adapting assignments. Her account offers a concrete workflow and a self-reported time-saving experience, not a controlled estimate of impact. Compared with Anthropic's new teacher resources and Gemini's course-linked study support, the case puts the teacher's review decisions at the centre: what stays common, what changes, and what students still need to understand.",
    "fullSummary": "OpenAI Academy published a profile of Utah teacher Ashtin Johnson on September 2, 2026. It describes her use of ChatGPT Work to prepare Canvas courses and adapt assignments for fifth graders working at different levels. Johnson reports substantial time savings and more attention available for students. This is a vendor-published practitioner account, rather than an independent evaluation of workload or learning. Its value is the visibility it gives to a recognisable teaching workflow.\n\nPreparing an online course involves more than drafting text. A teacher has to organise the sequence, connect instructions with resources, check dates, and make sure pupils and families can find what they need. An assistant may help assemble these pieces, but the educational decisions remain consequential. A beautifully organised page can still contain an unclear task, an inaccessible document, or an activity that does not fit the lesson's purpose.\n\nAssignment adaptation deserves especially careful attention. Shorter sentences may improve access to a reading task, while removing the central reasoning challenge would change what students are learning. Teachers can compare versions by asking which ideas remain common, which support has been added, and whether every student still has something worthwhile to think about. The important distinction is between adjusting access to the work and quietly replacing the work with a simpler objective.\n\nA proposed planning meeting could begin with one shared science question and several draft explanations. Colleagues would annotate where vocabulary, examples, diagrams, and prompts differ. They could then identify an observable response that would show whether students understood the common idea. The review need not require a lengthy rubric: a brief account of the intended support and the reasoning retained would make the adaptation more transparent.\n\nAnthropic's August 28 teacher update adds lesson preparation and checks of understanding, while Gemini's earlier Classroom update connects study prompts with class materials. These are useful contemporary comparisons to OpenAI's case. All three place AI near an existing teaching activity, but they do not establish the same workflow, access conditions, or outcomes. A teacher should select a feature because it solves a clearly identified preparation or learning problem.\n\nWorkload claims also deserve a complete accounting. Drafting time, checking time, correction time, and later reuse can move in different directions. A template that saves an hour today may require substantial repair tomorrow; a carefully reviewed resource may become more useful over repeated lessons. Teachers assessing a pilot could keep a short time diary and note which tasks became easier, which became harder, and whether the resulting materials needed further revision after use.\n\nThe case points towards a form of professional learning that begins with actual classroom work. Staff could share an original task, an AI-assisted revision, and a short explanation of what they accepted or rejected. Student responses would then inform the next revision. Johnson's experience is a useful example to discuss, but it should not become a universal promise about hours saved. For schools, the stronger question is whether assistance improves the preparation process while preserving teacher judgment and the substance of learning.",
    "keyTakeaways": [
      "The profile is a practitioner account of Canvas preparation and assignment adaptation, not a controlled impact study.",
      "Adaptations should preserve a common learning goal while changing the support available to reach it.",
      "Measure drafting, checking, correction, and reuse separately when evaluating workload."
    ],
    "whyItMatters": "Teacher-facing AI is easiest to evaluate when colleagues can inspect a real task, the changes made to it, and the classroom response that followed.",
    "sourceUrl": "https://academy.openai.com/public/blogs/making-more-time-for-teaching-with-chatgpt-work-2026-09-02",
    "sourceUrls": [
      {
        "label": "OpenAI Academy: Making more time for teaching — 2026-09-02",
        "url": "https://academy.openai.com/public/blogs/making-more-time-for-teaching-with-chatgpt-work-2026-09-02"
      },
      {
        "label": "Anthropic: Claude for Teachers for schools and districts — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-09-02",
    "image": "/images/research/covers/aied-133-backfill.png",
    "imageAlt": "Three educators compare bean-plant worksheets and a laptop lesson page while a teaching assistant annotates a diagram of roots, stem and leaves.",
    "summaryImage": "/images/research/summary/aied-133-backfill-summary.png",
    "summaryImageAlt": "Three educators compare bean-plant worksheets and a laptop lesson page while a teaching assistant annotates a diagram of roots, stem and leaves.",
    "summaryAudio": "/audio/research/aied-133-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-134",
    "slug": "research-students-valued-ai-coding-help-while-exam-evidence-exposed-difficulties-in-correcting-generated-code",
    "title": "Students valued AI coding help while exam evidence exposed difficulties in correcting generated code",
    "authors": [
      "Dan Kohen-Vacs",
      "Maya Usher",
      "Marc Jansen"
    ],
    "venue": "International Journal of Artificial Intelligence in Education",
    "year": 2025,
    "type": "journal",
    "tags": [
      "programming education",
      "debugging",
      "assessment",
      "AI literacy"
    ],
    "shortSummary": "Two studies examined student attitudes to generative AI and performance on code-correction tasks. A survey found favorable perceptions, while exam analyses found lower performance on AI-generated debugging tasks in several cohorts. The studies involved different students and compared debugging with code construction, so they do not establish that positive attitudes caused weak verification or that AI origin alone made the tasks harder. They identify a specific skill worth teaching and assessing.",
    "fullSummary": "A student can find AI coding tools useful and still struggle to judge their output. Dan Kohen-Vacs, Maya Usher, and Marc Jansen explored both sides of this issue through two complementary studies. One examined perceptions of generative AI; the other analyzed examination performance when students corrected flawed generated code. Together, the studies make a case for teaching verification explicitly. They do not link an individual student’s enthusiasm to that student’s debugging ability, because the two studies involved different populations.\n\nThe first study surveyed 64 undergraduates at an Israeli higher education institution who had completed at least one programming course. An anonymous questionnaire examined perceived usefulness, creativity support, intention to use AI, and concerns. Students generally rated usefulness and future use positively, and regarded AI as helpful for efficiency and generating ideas. Dependence remained a notable concern. These responses describe perceived value and reservations, rather than an observed increase in creativity, learning efficiency, or programming competence.\n\nThe second study analyzed examination data from 147 undergraduates in Germany across Operations Research and Cryptography courses. Six examinations over three academic terms included tasks requiring learners to identify and correct errors in LLM-generated code, alongside instructor-designed programming and theory components. An example used a flawed Java implementation of RSA encryption. The correction task required students to understand the intended algorithm, locate faults, and restore functionality, drawing on both subject knowledge and practical debugging skill.\n\nIn the later two terms, students performed significantly worse on the generated-code correction tasks than on the comparison components in both courses. The earliest term did not show significant differences. That exception matters: the findings were not identical across every cohort or examination. The researchers interpret the later pattern as evidence that working critically with generated code presents a substantial challenge. Their data support attention to that challenge, without proving that every generated-code task is more difficult than every conventional programming question.\n\nThe central methodological limitation is the comparison itself. Debugging an existing program and building a solution from a specification place different demands on students. The authors explicitly acknowledge that the study cannot isolate the effect of AI origin from those task differences. A stronger follow-up could match the structure and difficulty of human- and AI-produced debugging tasks. It could also measure students’ initial knowledge and observe the reasoning used to diagnose an error, rather than relying only on examination scores.\n\nOther limits include the distinct national and curricular settings, short-term outcomes, and the absence of a systematic comparison of instructional approaches. The survey and examination components should therefore be read as complementary perspectives, not a causal chain from tool acceptance to overreliance. There was also no longitudinal test of whether regular AI use weakened or strengthened debugging competence. Those are important questions, but this study does not answer them through the coexistence of positive perceptions and difficult correction tasks.\n\nFor AIEDHK, the practical implication is to assess the skill that AI-assisted work requires. A programming exercise could present a plausible solution, ask students to devise a test that exposes a fault, and require an explanation of the repair. Teachers could balance this with writing code independently and checking unfamiliar examples later. Such activities follow from the identified assessment problem; their effectiveness would still need to be evaluated. The aim is to help learners verify a program’s behavior and reasoning, not merely recognize the appearance of convincing code.",
    "keyTakeaways": [
      "Student attitudes and debugging performance were examined in separate samples and settings.",
      "Generated-code correction was more difficult on several exam comparisons, but not in the earliest term.",
      "Debugging-versus-construction differences prevent attributing the performance gap solely to AI origin."
    ],
    "whyItMatters": "Programming curricula can explicitly assess testing, explanation, and error correction alongside code production. The paper identifies a need for verification practice without establishing that AI use causes skill loss.",
    "sourceUrl": "https://doi.org/10.1007/s40593-025-00496-4",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://link.springer.com/article/10.1007/s40593-025-00496-4"
      }
    ],
    "createdAt": "2026-09-03",
    "image": "/images/research/covers/aied-134-backfill.png",
    "imageAlt": "A programming student traces an algorithm and test cases on paper while a tutor points to a test report beside code on a laptop.",
    "summaryImage": "/images/research/summary/aied-134-backfill-summary.png",
    "summaryImageAlt": "A programming student traces an algorithm and test cases on paper while a tutor points to a test report beside code on a laptop.",
    "summaryAudio": "/audio/research/aied-134-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-135",
    "slug": "news-google-ai-educator-series-inquiry-practice",
    "title": "Product news: Google expands AI Educator Series with inquiry and Guided Learning modules",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Google AI Educator Series",
      "Gemini Guided Learning",
      "professional development",
      "inquiry",
      "teacher communities"
    ],
    "shortSummary": "Google's September 3 update adds practical topics to its free AI Educator Series and announces a virtual learning event for September 19. Modules connect Gemini with problem solving, inquiry, and classroom workflows. The offer sits alongside Anthropic's Claude Academy and OpenAI's teacher stories, but a badge records participation or a defined assessment rather than broad teaching competence. Schools can extend the training by reviewing a lesson artifact and its classroom use.",
    "fullSummary": "Google announced additions to its AI Educator Series on September 3, 2026, with topics including Gemini Guided Learning, inquiry using Deep Research, and interactive learning experiences. The programme offers short, no-cost training sessions and badges. Google also announced a virtual event for September 19. As of this report, that event was still prospective; its attendance, participant experience, and educational effects cannot be inferred from the invitation.\n\nThe appeal of short training is understandable. Teachers often have a specific problem to solve before the next lesson and limited time for a long course. A focused module can give them a starting point. The question for a school is what happens after that starting point: whether a teacher can adapt the idea to a different topic, recognise a poor response, and explain why a particular use of AI is appropriate.\n\nGuided problem solving offers a useful example. A teacher could ask whether an assistant's question helps a student reveal their reasoning or merely nudges them towards the expected answer. The distinction can be subtle. Too much guidance may remove the decision the student was meant to make, while too little may leave the learner guessing. Professional discussion can focus on actual exchanges and the point at which a teacher would intervene.\n\nFor inquiry, the first task is to define what a good question requires. A generated research summary may look complete before the learner has decided which evidence would count or what would challenge their view. A proposed follow-up to a training module could ask teachers to design a brief inquiry activity with a source-selection decision built in. Students would identify a claim, inspect an original source, and explain why a competing source deserves more or less weight.\n\nAnthropic's August account of Claude Academy emphasises intentional delegation and continued human practice. OpenAI Academy's September 2 teacher profile illustrates AI-assisted preparation in a specific classroom. Together with Google's modules, these resources offer different entry points into professional learning. Their practical examples can be discussed without assuming that completing any one provider's material demonstrates transferable teaching expertise.\n\nA school could extend an individual badge into a small peer-learning cycle. A teacher brings one draft activity to colleagues, identifies the intended learning, and demonstrates a weak or misleading AI response. The group proposes revisions and agrees what to observe when the activity is used. At a later meeting, the teacher shares selected student work and explains what changed. This makes the training's influence visible without demanding an elaborate research project from every participant.\n\nAccess also belongs in the design. Staff need time to practise, and schools should offer routes for teachers who use different platforms or who decide that a task is better completed without AI. The useful outcome is a wider repertoire of justified choices. Google's expansion adds convenient material and a community event to that process, but institutional professional development should look beyond badge totals to the quality of activities teachers can design, question, and improve.",
    "keyTakeaways": [
      "Google announced new training content on September 3 and a future virtual event for September 19.",
      "A short module can start professional learning; transfer requires adaptation, critique, and classroom follow-up.",
      "Peer review of one lesson artifact offers a practical bridge between a badge and teaching practice."
    ],
    "whyItMatters": "AI professional development becomes more meaningful when training resources lead to shared examination of what teachers and students actually do.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/",
    "sourceUrls": [
      {
        "label": "Google: New AI Educator Series training — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "OpenAI Academy: Making more time for teaching — 2026-09-02",
        "url": "https://academy.openai.com/public/blogs/making-more-time-for-teaching-with-chatgpt-work-2026-09-02"
      }
    ],
    "createdAt": "2026-09-03",
    "image": "/images/research/covers/aied-135-backfill.png",
    "imageAlt": "A facilitator leads a teacher-development circle using an inquiry-cycle diagram while participants annotate lesson sketches and a tablet.",
    "summaryImage": "/images/research/summary/aied-135-backfill-summary.png",
    "summaryImageAlt": "A facilitator leads a teacher-development circle using an inquiry-cycle diagram while participants annotate lesson sketches and a tablet.",
    "summaryAudio": "/audio/research/aied-135-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-136",
    "slug": "research-simulated-counseling-practice-benefited-from-structured-ai-feedback-with-the-clearest-group-difference-in-empathy",
    "title": "Simulated counseling practice benefited from structured AI feedback, with the clearest group difference in empathy",
    "authors": [
      "Ryan Louie",
      "Raj Sanjay Shah",
      "Ifdita Hasan Orney",
      "Juan Pablo Pacheco",
      "Emma Brunskill",
      "Diyi Yang"
    ],
    "venue": "CHI 2026",
    "year": 2026,
    "type": "conference",
    "tags": [
      "simulation-based learning",
      "feedback",
      "professional education",
      "skill assessment"
    ],
    "shortSummary": "A randomized study of 94 novices compared practice with an AI-simulated counseling client with the same practice plus AI feedback. The clearest between-group result favored feedback on an automated empathy measure; other skills showed more limited or within-group changes. The experiment tested immediate behavior in simulated text conversations, with classifier-based assessment and no conventional-training comparator. It therefore informs training design rather than establishing readiness to counsel real clients.",
    "fullSummary": "Providing a realistic practice partner is only one part of professional learning. In a CHI 2026 paper, Ryan Louie and colleagues evaluated CARE, a system combining AI-simulated counseling conversations with optional feedback. Their randomized study found a meaningful difference between practicing alone and practicing with structured feedback, most clearly on an automated measure of empathy. The work asks whether simulation can help novices develop particular conversational skills, while leaving transfer to real clients and established training programmes unresolved.\n\nThe researchers recruited 94 participants with limited counseling education and less than a year of related experience. In an online laboratory session, everyone received a brief tutorial and completed an initial conversation with a simulated client. Participants were then randomly assigned to a practice period either with an AI client alone or with access to AI-generated feedback on their responses. A later conversation with another simulated client assessed immediate performance after practice. This design compared two versions of AI-supported training rather than AI training against human supervision.\n\nCARE’s feedback identified strengths or areas needing improvement, explained the conversational goal, and offered an alternative response. The system aimed to support basic client-centered skills such as listening, reflection, and asking questions. Researchers evaluated conversation transcripts with automated classifiers, examined self-efficacy ratings, and analyzed participants’ reflections. Domain experts annotated a subset of the data to support classifier development and validation. Those measures provide several views of the training experience, but automated labels remain an approximation of skillful interaction.\n\nThe clearest between-group behavioral difference concerned empathy. The practice-only group declined on that measure, while the feedback group maintained it with a nonsignificant upward trend; the difference in change favored feedback. The feedback group also showed within-group improvements in reflections and questions, but corresponding between-group differences were not significant. Practice alone reduced some inappropriate suggestions. These distinctions prevent a broad claim that feedback significantly improved every skill or that simulation without feedback produced no useful change whatsoever.\n\nParticipants’ reflections suggested different approaches to helping. Those receiving feedback more often described listening, validation, and supporting the client’s own exploration. Practice-only participants more often remained focused on solutions, while adjusting how much information they gathered first. Confidence also changed in ways that did not consistently track performance, and the feedback condition did not demonstrate a general advantage in self-assessment calibration. A learner’s sense of readiness therefore cannot substitute for observing the relevant behavior against an explicit standard.\n\nThe published paper gives substantial attention to limitations. Its classifiers used some study data during development, creating potential overfitting and generalization concerns. Assessment focused on individual conversational microskills in text, not the quality of an entire therapeutic relationship, nonverbal communication, long-term retention, or real clinical outcomes. Participants trained in a laboratory session rather than a full educational programme. The simulated scenarios also reflected particular professional and cultural perspectives. These boundaries are integral to interpreting the result as preliminary training evidence.\n\nFor AIEDHK, the transferable educational idea is to combine deliberate practice with specific feedback and a separate performance check. Similar design questions arise in teacher questioning, professional communication, and other interpersonal skills, although this study did not test those domains. A local pilot would need expert-defined criteria, review of feedback quality, and assessment outside the practice interface. The finding supports investigating feedback as a component of simulation-based learning, while keeping professional competence and real-world effectiveness as distinct outcomes requiring further evidence.",
    "keyTakeaways": [
      "The randomized comparison isolated access to feedback within AI-simulated practice.",
      "The strongest between-group behavioral finding favored feedback on the automated empathy measure.",
      "Immediate simulated text performance does not establish long-term transfer, clinical effectiveness, or professional readiness."
    ],
    "whyItMatters": "Professional-learning simulations should pair practice with actionable feedback and independent performance assessment. AIEDHK can apply the design question across training domains while preserving the paper’s narrow evidence boundary.",
    "sourceUrl": "https://doi.org/10.1145/3772318.3791821",
    "sourceUrls": [
      {
        "label": "CHI 2026 paper",
        "url": "https://doi.org/10.1145/3772318.3791821"
      },
      {
        "label": "Author-hosted full paper",
        "url": "https://youralien.github.io/files/louie2026CanLlmUpskillCounselors.pdf"
      },
      {
        "label": "Author manuscript and version history",
        "url": "https://arxiv.org/abs/2505.02428"
      }
    ],
    "createdAt": "2026-09-04",
    "image": "/images/research/covers/aied-136-backfill.png",
    "imageAlt": "A trainee and supervisor review a simulated text conversation and annotated listening-skills notes in a bright professional-training room.",
    "summaryImage": "/images/research/summary/aied-136-backfill-summary.png",
    "summaryImageAlt": "A trainee and supervisor review a simulated text conversation and annotated listening-skills notes in a bright professional-training room.",
    "summaryAudio": "/audio/research/aied-136-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-137",
    "slug": "news-gemini-3-8-flash-teaching-prototype-review",
    "title": "Product news: Gemini 3.8 Flash puts richer educational prototypes within reach, with review work still essential",
    "authors": [
      "Google DeepMind"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini 3.8 Flash",
      "educational prototypes",
      "geography visualizations",
      "AI coding",
      "model selection"
    ],
    "shortSummary": "Google introduced Gemini 3.8 Flash and the restricted Flash Cyber variant on September 2. This September 4 report focuses on what the general model's coding and reasoning claims could mean for educational prototypes, including Google's geographical visualization demonstration. OpenAI's Kiro integration and Anthropic's AI-learning guidance provide contemporary comparisons. A generated interactive resource still needs checks of its underlying data, behaviour, accessibility, and contribution to the learner's task.",
    "fullSummary": "Google introduced Gemini 3.8 Flash and Gemini 3.8 Flash Cyber on September 2, 2026. This September 4 report focuses on the general Flash model, which Google positions for stronger reasoning, coding, and agent workflows. Flash Cyber is a separate restricted offering for trusted defenders, not a general classroom tool. The announcement's benchmarks and demonstrations are evidence of what Google tested and showcased, rather than evidence that a generated resource will teach a topic well.\n\nOne demonstration uses geographical data to create an interactive topographic map with cross-sections and explanations. That is a useful starting point for educational design because it connects code generation with a visible scientific representation. A teacher considering such a prototype should ask which relationship students are meant to understand. Rotating a colourful landscape may be engaging, but an activity becomes clearer when learners must predict a cross-section or explain how elevation changes along a route.\n\nThe underlying data and transformations deserve attention before the interface is used. A map may mix units, exaggerate vertical scale, or interpolate between observations in a way students cannot see. A correct-looking display can therefore support an incorrect inference. Reviewers should compare selected points with the source data, inspect how the representation is calculated, and make any deliberate simplification explicit in the teaching materials.\n\nA proposed geography exercise could begin with a printed contour map. Students sketch the expected profile along a marked line, then use the interactive prototype to test their prediction. They explain disagreements and try another route. The assistant may help build or revise the tool, but the learning activity should require the student to connect two representations. That task remains worthwhile even if the class uses a simpler, manually prepared visualization.\n\nOpenAI's August 24 Kiro integration similarly connects model assistance with software requirements and tests. Anthropic's Claude Academy guidance asks learners to make intentional choices about delegation. These contemporary developments support a useful comparison with Gemini: which parts of creating a teaching tool should be automated, and which decisions should the educator retain? Model choice can follow that answer rather than precede it.\n\nEvaluation should include the ordinary ways a classroom resource can fail. Labels may be too small, controls may be inaccessible from a keyboard, or the activity may depend on a connection that is unreliable in the teaching room. Students may also discover inputs the developer did not anticipate. A bounded pilot with colleagues can reveal these issues before a whole class relies on the resource. A successful model demonstration does not remove that work.\n\nCost should be considered at the level of the finished activity, including generation, revision, checking, and maintenance. Google notes that the newer model may use more tokens on demanding tasks, so stronger benchmark performance does not guarantee a cheaper project. For educators, the practical promise is greater freedom to prototype a specific learning idea. The useful outcome is a resource whose scientific meaning, interaction, and teaching purpose remain understandable after the impressive first demonstration.",
    "keyTakeaways": [
      "Gemini 3.8 Flash launched September 2; Flash Cyber has a separate restricted-access purpose.",
      "Evaluate a generated teaching prototype against its data, representations, interactions, and learning objective.",
      "The relevant cost includes revision and maintenance, while students still need a meaningful reasoning task."
    ],
    "whyItMatters": "Faster prototyping can help educators test their own ideas, provided the resulting resource is reviewed as a teaching instrument rather than accepted as a model showcase.",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    "sourceUrls": [
      {
        "label": "Google DeepMind: Gemini 3.8 Flash and Flash Cyber — 2026-09-02",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        "label": "OpenAI: GPT-5.6 in Kiro — 2026-08-24",
        "url": "https://openai.com/index/gpt-5-6-in-kiro/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      }
    ],
    "createdAt": "2026-09-04",
    "image": "/images/research/covers/aied-137-backfill.png",
    "imageAlt": "A geography teacher and two students compare a contour map with a wooden terrain cross-section and a landscape profile on a laptop.",
    "summaryImage": "/images/research/summary/aied-137-backfill-summary.png",
    "summaryImageAlt": "A geography teacher and two students compare a contour map with a wooden terrain cross-section and a landscape profile on a laptop.",
    "summaryAudio": "/audio/research/aied-137-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-138",
    "createdAt": "2026-09-05",
    "title": "Direct questions to a source-grounded AI helped essay revision, while lasting learning remained untested",
    "authors": [
      "Yixin Cheng",
      "Yizhou Fan",
      "Xinyu Li",
      "Guanliang Chen",
      "Dragan Gašević",
      "Zachari Swiecki"
    ],
    "venue": "Computers and Education: Artificial Intelligence",
    "year": 2025,
    "type": "journal",
    "slug": "direct-ai-questions-essay-revision-help-seeking-networks",
    "tags": [
      "help seeking",
      "epistemic network analysis",
      "academic writing",
      "source-grounded AI",
      "learning evidence"
    ],
    "shortSummary": "A study of 59 university students compared essay revision supported by GPT-4 with revision supported by an online human tutor. AI users asked more direct, knowledge-oriented questions and achieved better revised-essay scores. Network analysis linked questioning patterns to that difference, whereas simpler frequency-based models did not show the same mediation. The study measured performance while assistance was available, leaving independent learning and lasting transfer unresolved.",
    "fullSummary": "The educational value of an AI writing assistant may depend on the questions a learner brings to it. Yixin Cheng and colleagues examined how students sought help while revising an essay, comparing GPT-4 with a human tutor through similar chat interfaces. Their interest was not simply whether the finished text looked better. They studied the pattern of requests, the knowledge gaps those requests revealed and how different forms of questioning related to performance. This makes help seeking itself an observable part of AI-supported writing.\n\nThe experiment involved 59 students at a Chinese public university, all writing in English as a second language. After a two-hour task combining several source texts, participants were randomly assigned to a one-hour revision condition: 33 could consult GPT-4 and 26 could consult an experienced writing tutor. The AI received relevant source passages, the essay, the rubric and related conversation history. It was instructed to suggest revisions without writing or summarizing the entire essay, so the results concern a configured learning environment rather than unrestricted chatbot use.\n\nResearchers coded students' questions and analyzed both their frequencies and connections. Compared with tutor users, AI users asked more questions and tended to make direct, relatively isolated requests for conceptual or procedural information. Human-tutor exchanges more often involved indirect requests for judgment and longer negotiation of shared understanding. The revised essays in the AI condition scored better after adjustment for baseline writing and other covariates. These findings describe how a particular source of help changed the immediate revision process.\n\nEpistemic network analysis added an important distinction. A network measure capturing relationships among question types statistically mediated the connection between condition and revised-essay score. Principal-component measures based on question frequencies did not show equivalent mediation. The implication is that counting prompts may miss how learners combine requests across a conversation. However, a statistical mediation model does not prove that making questions more direct will independently cause better learning: question style was observed, not separately randomized, and other features of the responses may contribute.\n\nThe authors explicitly distinguish performance from durable learning. They did not test whether an advantage remained after the assistant was removed, or whether students understood rather than copied the responses they received. The analysis concentrated on questions rather than the quality and frequency of the answers. A small, single-university sample using a second language also limits generalization. An experienced tutor may pursue broader writing development while a configured AI targets the immediate rubric; the study cannot settle which approach is best across educational purposes.\n\nFor AIEDHK, a useful next step is to teach and assess help seeking alongside writing. Students could identify a specific uncertainty, ask a focused question, inspect the response against a source and explain the revision in their own words. Teachers could review a small number of such episodes rather than reward prompt volume. A later unaided writing task would then show whether the process developed transferable understanding. Those are proposed instructional and evaluation steps, not additional findings from the experiment. They connect efficient assistance with evidence of what the learner can subsequently do independently.",
    "keyTakeaways": [
      "The randomized comparison involved 59 students revising English essays with either a configured GPT-4 assistant or an online human tutor.",
      "AI users asked more direct knowledge-oriented questions; question relationships measured with ENA, rather than simple frequency summaries, statistically mediated revision performance.",
      "The outcome was assisted essay performance, not delayed independent learning, and the mediation analysis does not isolate a causal effect of question style."
    ],
    "whyItMatters": "AIEDHK can use this study to make help-seeking quality visible in writing activities. Source checking, explained revisions and later unaided writing should accompany any claim that better assisted text reflects better learning.",
    "sourceUrl": "https://doi.org/10.1016/j.caeai.2025.100374",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.sciencedirect.com/science/article/pii/S2666920X25000141"
      },
      {
        "label": "Open author-institution copy of the full article",
        "url": "https://researchmgt.monash.edu/ws/portalfiles/portal/713466733/668971470.pdf"
      }
    ],
    "image": "/images/research/covers/aied-138-backfill.png",
    "imageAlt": "A university student and writing tutor discuss two source-focused question cards, a highlighted laptop passage and annotated essay notes in a library carrel.",
    "summaryImage": "/images/research/summary/aied-138-backfill-summary.png",
    "summaryImageAlt": "A university student and writing tutor discuss two source-focused question cards, a highlighted laptop passage and annotated essay notes in a library carrel.",
    "summaryAudio": "/audio/research/aied-138-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-139",
    "slug": "news-accessibility-bookmarklets-user-agency",
    "title": "Product news: An accessibility specialist uses ChatGPT to adapt reading tools, without shifting responsibility to users",
    "authors": [
      "OpenAI Academy"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "accessibility",
      "inclusive design",
      "ChatGPT",
      "keyboard navigation",
      "learner agency"
    ],
    "shortSummary": "An OpenAI Academy profile published September 4 describes accessibility specialist James Warnken using ChatGPT to create browser shortcuts and a keyboard-focus styling tool. Reported here on September 5, the case shows a person directing technology around a specific access need. Anthropic's teaching guidance and Gemini's educator training offer related learning opportunities, but personal adaptations do not replace a school's responsibility to provide usable digital materials.",
    "fullSummary": "A September 4 OpenAI Academy profile describes how accessibility specialist James Warnken used ChatGPT to create browser shortcuts that change difficult-to-read text and a tool for generating visible keyboard-focus indicators. This September 5 report treats the story as a practical account of user-directed adaptation. It is not a new universal accessibility feature, nor an evaluation showing that the tools work for every learner or website.\n\nThe important starting point is Warnken's knowledge of the problem. He could describe which parts of a page were hard to read and what change would help him. That expertise gave the coding assistant a concrete purpose. In education, the same principle argues for listening to the learner's experience before proposing a technological fix. A person who finds a page difficult may need clearer structure, different presentation, or an alternative route through the activity.\n\nA personal adaptation can also reveal a defect in the original material. If a student needs a custom shortcut simply to see a button, the institution should examine the button, not celebrate the workaround and move on. The student's initiative is valuable, but it should not become an expectation that every learner build and maintain their own repair. Teachers and web teams can use such experiences to prioritise changes that help more people.\n\nA useful design lesson would begin with a deliberately simple course page and a clearly described task. Students could try completing it with a keyboard, with enlarged text, and with different visual settings. They would record where navigation or meaning becomes unclear, then propose a change and check the task again. This activity assesses whether a design works in use, rather than whether its source code contains an accessibility-related attribute.\n\nAnthropic's August account of Claude Academy emphasises human agency and intentional delegation. Google's September 3 AI Educator Series update provides practical training around Gemini and classroom work. OpenAI's case adds a concrete example of someone using assistance to build a narrowly defined tool. Together, these resources can support discussion about who identifies the problem, who evaluates the result, and who remains responsible for maintaining the shared environment.\n\nAI-generated adjustments require thoughtful testing too. Changing every text colour may make some content easier to read while obscuring information on another background. A visible focus outline must remain understandable as a person moves between links, fields, and buttons. Learners could document both the situations where an adaptation helps and the situations where it fails. That record is more useful than presenting the first working demonstration as a complete solution.\n\nFor a school or university, the case suggests a constructive relationship between personal agency and institutional improvement. Staff can invite concrete reports of barriers, offer assistance without requiring disclosure of unnecessary personal details, and show what changed in response. Students can contribute as knowledgeable partners rather than passive recipients of a tool. The lasting educational outcome would be a more usable course environment and a clearer habit of testing design decisions with the people who depend on them.",
    "keyTakeaways": [
      "The September 4 profile reports a user-built accessibility adaptation, not a universal product fix.",
      "Learners' concrete descriptions of barriers should shape design and review.",
      "Personal workarounds can inform institutional repairs without becoming a burden every student must carry."
    ],
    "whyItMatters": "AI-assisted making is most inclusive when it strengthens a learner's voice and leads institutions to improve the shared materials they provide.",
    "sourceUrl": "https://academy.openai.com/public/blogs/making-websites-easier-to-read-with-chatgpt-2026-09-04",
    "sourceUrls": [
      {
        "label": "OpenAI Academy: Making websites easier to read — 2026-09-04",
        "url": "https://academy.openai.com/public/blogs/making-websites-easier-to-read-with-chatgpt-2026-09-04"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-05",
    "image": "/images/research/covers/aied-139-backfill.png",
    "imageAlt": "A student using a wheelchair works at a keyboard while two educators compare an enlarged course page with a hand-drawn keyboard-navigation sequence.",
    "summaryImage": "/images/research/summary/aied-139-backfill-summary.png",
    "summaryImageAlt": "A student using a wheelchair works at a keyboard while two educators compare an enlarged course page with a hand-drawn keyboard-navigation sequence.",
    "summaryAudio": "/audio/research/aied-139-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-140",
    "createdAt": "2026-09-06",
    "title": "Biology lessons provided a concrete route into AI concepts, but gains did not extend clearly to biology knowledge",
    "authors": [
      "Shenghua Zha",
      "Marcy Maulucci Bragdon",
      "Na Gong",
      "Jinhui Wang",
      "Silas Leavesley",
      "Rachel Eaton",
      "Erin Bosarge"
    ],
    "venue": "International Journal of Artificial Intelligence in Education",
    "year": 2025,
    "type": "journal",
    "slug": "biology-class-ai-literacy-interdisciplinary-understanding",
    "tags": [
      "AI literacy",
      "biology education",
      "secondary education",
      "interdisciplinary learning",
      "machine learning"
    ],
    "shortSummary": "Researchers integrated four AI lessons into an honors biology course attended by 37 secondary students. Activities linked cell classification, neural networks and biological applications with familiar science content. Among students with paired assessments, AI knowledge improved significantly while biology knowledge did not. Worksheet explanations revealed both useful cross-disciplinary connections and persistent misconceptions. This classroom case supports further curriculum development, but its small sample and lack of a control group preclude a causal effectiveness claim.",
    "fullSummary": "AI literacy need not begin in a separate computer science course. Shenghua Zha and colleagues investigated what happens when students encounter machine learning through biology they are already studying. Their classroom case connects cell images, neurons and biological applications with the concepts behind AI systems. The educational question is whether familiar disciplinary knowledge helps students understand an unfamiliar technology, and whether the connection also deepens their science understanding. It is a study of learning about AI, not simply using a chatbot to complete biology assignments.\n\nThirty-seven students in a public high-school honors biology course in the southern United States participated in four integrated lessons. Twenty-nine completed both the pre-test and post-test. The experienced biology teacher had undertaken a six-week AI training program before teaching the course. Researchers combined knowledge assessments with worksheet analysis of how students explained relationships between the disciplines. Each lesson occupied roughly two or three class sessions, and teacher guidance remained central to introducing concepts and interpreting the activities.\n\nOne activity used Teachable Machine to train and test classifiers on cell images. Students could connect their knowledge of biological categories with the need for suitable training examples. Another compared human neurons with artificial neural-network structures. Later lessons examined neural-network applications involving leaf pigments and cancer detection. These tasks offered different kinds of conceptual connection: using biology to understand AI, applying AI ideas to a biological problem and explaining where an analogy is informative or potentially misleading.\n\nThe paired assessments showed a significant improvement in overall AI knowledge. The increase in biology knowledge was smaller and not statistically significant. Quantitative relationships between the two subjects varied across lessons, while the qualitative analysis showed that some students used prior knowledge to explain the new domain effectively. Others produced vague or inaccurate accounts, even when they mentioned a relevant concept. Naming a model, recognizing an image or recalling a biological term therefore did not necessarily demonstrate a sound explanation of how the combined system worked.\n\nThe study's limits are substantial and useful for planning follow-up work. It examined one advanced class without a comparison group, so maturation, instruction and the particular teacher cannot be separated from the integrated design. Assessment coverage was limited, and eight students lacked paired tests. Time pressure also removed a planned reflection task in one lesson. The authors consequently call for stronger assessments and comparative designs. The findings cannot show that this curriculum outperforms separate AI instruction or that the absence of a significant biology gain means there was no benefit.\n\nFor Hong Kong schools, the case suggests a manageable curriculum experiment: start with a science classification problem that students already understand, let them train a simple model and ask them to explain a failure on a new example. Teachers could assess AI concepts and biology concepts separately, then require an explanation linking them. A second class or staggered introduction would strengthen evaluation, while delayed tasks would probe retention. These are proposed extensions beyond the reported case. The practical opportunity is broader access to AI understanding through ordinary subjects, with enough evidence to distinguish an engaging activity from a reliable conceptual connection.",
    "keyTakeaways": [
      "Four integrated lessons involved 37 honors biology students; 29 provided paired knowledge assessments.",
      "AI knowledge improved significantly, while the biology gain was not significant and cross-disciplinary explanations remained uneven.",
      "The uncontrolled classroom case suggests a curriculum approach rather than establishing comparative effectiveness or long-term transfer."
    ],
    "whyItMatters": "AIEDHK can help schools introduce AI concepts through existing subject knowledge while assessing both disciplines independently. Students should explain why a model succeeds or fails, not only operate the software.",
    "sourceUrl": "https://doi.org/10.1007/s40593-025-00476-8",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s40593-025-00476-8"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s40593-025-00476-8.pdf"
      }
    ],
    "image": "/images/research/covers/aied-140-backfill.png",
    "imageAlt": "A teacher and two students compare plant and animal cell diagrams with a laptop classification display while one student records reasons in a notebook.",
    "summaryImage": "/images/research/summary/aied-140-backfill-summary.png",
    "summaryImageAlt": "A teacher and two students compare plant and animal cell diagrams with a laptop classification display while one student records reasons in a notebook.",
    "summaryAudio": "/audio/research/aied-140-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-141",
    "slug": "news-weathernext-3-weather-data-literacy",
    "title": "Product news: WeatherNext 3 offers a concrete lesson in AI forecasts, observations, and uncertainty",
    "authors": [
      "Google DeepMind"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "WeatherNext 3",
      "Gemini",
      "data literacy",
      "geography education",
      "scientific reasoning"
    ],
    "shortSummary": "Google's September 3 WeatherNext 3 announcement describes forecasts refreshed from recent observations and delivered through products including Gemini. This September 6 report considers its value for teaching data and scientific reasoning. Comparisons with OpenAI's coding workflows and Anthropic's AI-learning guidance keep the focus on human interpretation: students should distinguish observations from predictions, compare like with like, and explain uncertainty rather than treat a sharper map as certainty.",
    "fullSummary": "Google announced WeatherNext 3 on September 3, 2026, describing a weather model that incorporates recent satellite observations and produces hourly forecasts at finer spatial detail. The company says the system is integrated across products including Gemini. Reported here on September 6, the update offers a timely classroom example of how AI connects observations, modelling, and public information. It does not make a weather forecast equivalent to a direct measurement of what will happen.\n\nThe distinction can be explored without asking students to build a model. A class might record a forecast for a chosen place, note when it was issued, and compare it later with an observation from the same location and period. Students would need to decide which quantity they are comparing: temperature at a particular hour, rainfall over a day, or a broader description of conditions. An apparent error can arise from mismatched definitions as well as from the prediction itself.\n\nMaps add another layer of interpretation. A more detailed grid can display variation that a coarser map hides, but the visual precision can also encourage overconfidence. A colour boundary does not necessarily represent a sharp physical boundary on the ground. Teachers can ask students to explain what the map's colours, units, time labels, and spatial cells mean before discussing whether a forecast was useful. That makes reading the representation part of the scientific task.\n\nOne proposed lesson could use two forecast snapshots issued at different times. Students predict why the later one might change after new observations arrive, then compare the changes with the evidence available. The exercise can distinguish revising a model-informed estimate from simply being inconsistent. It also gives a practical meaning to uncertainty: what remains unknown, what evidence would reduce it, and which conclusion is justified now.\n\nOpenAI's August Kiro integration places specifications and testing around AI-assisted programming. Anthropic's Claude Academy guidance asks people to retain responsibility for important judgments. Applied to weather learning with Gemini, these ideas suggest a modest division of labour: an assistant can help organise a comparison or explain a term, while students define the variables and defend the interpretation. Neither provider's general guidance establishes the forecasting model's performance in a local lesson.\n\nA school project should preserve the original forecast rather than replace it whenever a new version appears. Otherwise, students cannot reconstruct what was known at the time. A small table containing issue time, target time, location, unit, predicted value, and observed value can be sufficient. The class can discuss missing observations and cases where different sources disagree, without forcing every difference into a simple right-or-wrong label.\n\nThe educational value is therefore broader than a new weather feature. WeatherNext 3 provides a familiar setting in which students can examine how AI-generated information should be read, compared, and revised. A successful lesson would leave them better able to distinguish evidence from prediction and visual detail from confidence. Those habits remain useful when they later encounter forecasts, estimates, and model-based claims in other subjects.",
    "keyTakeaways": [
      "WeatherNext 3 was announced September 3; this article uses it as a September 6 data-literacy topic.",
      "Compare forecasts and observations only after aligning time, place, quantity, and units.",
      "Preserving the original forecast lets students reason about revision and uncertainty."
    ],
    "whyItMatters": "Weather is an accessible setting for teaching how model outputs relate to observations and why a detailed representation still requires careful interpretation.",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/",
    "sourceUrls": [
      {
        "label": "Google DeepMind: Introducing WeatherNext 3 — 2026-09-03",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/"
      },
      {
        "label": "OpenAI: GPT-5.6 in Kiro — 2026-08-24",
        "url": "https://openai.com/index/gpt-5-6-in-kiro/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      }
    ],
    "createdAt": "2026-09-06",
    "image": "/images/research/covers/aied-141-backfill.png",
    "imageAlt": "A teacher and two students compare a weather map, a terrace thermometer, and a tablet forecast while a student records observations on a clipboard.",
    "summaryImage": "/images/research/summary/aied-141-backfill-summary.png",
    "summaryImageAlt": "A teacher and two students compare a weather map, a terrace thermometer, and a tablet forecast while a student records observations on a clipboard.",
    "summaryAudio": "/audio/research/aied-141-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-142",
    "createdAt": "2026-09-08",
    "title": "AI-generated art examples were associated with greater engagement in a small primary-school painting study",
    "authors": [
      "Cunling Bian",
      "Xiaofang Wang",
      "Yingxue Huang",
      "Shan Zhou",
      "Weigang Lu"
    ],
    "venue": "Humanities and Social Sciences Communications",
    "year": 2025,
    "type": "journal",
    "slug": "ai-generated-art-examples-primary-painting-engagement",
    "tags": [
      "visual arts education",
      "AI-generated images",
      "classroom engagement",
      "self-efficacy",
      "primary education"
    ],
    "shortSummary": "A study of 78 fifth-grade pupils compared conventional art examples with teacher-curated images generated using Stable Diffusion. The AI-image group reported stronger engagement and self-efficacy, while cognitive load did not differ significantly. Blinded teachers also rated its paintings more favorably. These short classroom results concern instructional examples and pupils' own painting; they do not establish lasting creativity gains or support replacing children's artistic work with generated images.",
    "fullSummary": "Can an AI-generated example help a child learn to make their own artwork? Cunling Bian and colleagues explored that question by changing the visual examples used in primary-school art instruction. Their study concerned images prepared for teaching, while pupils continued to paint with conventional materials. That distinction matters: a child producing a picture through a generator is a different activity from studying a generated example, applying a technique and creating a personal response on paper.\n\nThe classroom study involved 78 fifth-grade pupils at one school in Shandong Province, with 39 in each group. Both groups first completed conventional art instruction and an initial painting task. The subsequent task introduced teacher-curated Stable Diffusion images to one group while the other continued with examples drawn from established artworks. The teacher, core lesson structure and physical art materials were held similar across conditions. The second task asked pupils to apply anthropomorphism when designing a distinctive cartoon character, giving the comparison a specific artistic purpose.\n\nResearchers gathered questionnaires on classroom engagement, self-efficacy and cognitive load, and assessed pupils' paintings. Three art teachers scored anonymized work without knowing the pupils' group assignments. Their rubric covered technical skill, adherence to the theme, composition, creativity and effort. Using both learner reports and artwork ratings is stronger than relying on enthusiasm alone, although neither measure necessarily captures the development of artistic judgment across time or across different genres and materials.\n\nThe AI-image group showed higher reported engagement and self-efficacy, and its paintings received more favorable ratings across the assessed dimensions. Cognitive load did not differ significantly between groups. These results suggest that well-chosen generated examples may be worth studying as instructional resources. They do not show that generated imagery is universally easier to learn from, or that an unchanged cognitive-load rating proves the two approaches impose identical demands. Novelty, the particular examples selected and the short activity may all influence pupils' responses.\n\nThe evidence should remain bounded to this setting. The paper describes a small, short comparison in one age group and one school, using a narrow type of cartoon-image task. Its reporting alternates between randomized assignment and a quasi-experimental label, so the design deserves cautious interpretation rather than an expansive causal headline. There was no delayed assessment of independent creativity or a comparison across image generators. The authors also stress the importance of teachers evaluating the suitability of generated examples, rather than presenting outputs automatically as good art instruction.\n\nFor AIEDHK, a practical application would be a carefully documented materials pilot. An art teacher could select examples that illustrate the same specific technique, explain why each image is useful and preserve pupils' own sketches and revisions. Evaluation could combine blinded artwork assessment with a later task using a different theme, and ask children to explain choices about shape, composition or expression. Those are proposed next steps, not outcomes reported here. The educational target should remain the child's interpretation and making: generated examples are resources whose value depends on what learners subsequently notice, try and justify.",
    "keyTakeaways": [
      "The study compared two groups of 39 fifth-grade pupils using different teaching examples while pupils painted with traditional materials.",
      "Engagement, self-efficacy and artwork ratings favored the AI-image condition; cognitive load showed no significant difference.",
      "Short duration, a single school and inconsistent design labeling limit causal and long-term creativity claims."
    ],
    "whyItMatters": "AIEDHK can treat generated images as materials requiring teacher selection and evaluation. Their educational value should be judged through pupils’ own artistic decisions and later independent work, rather than image novelty alone.",
    "sourceUrl": "https://doi.org/10.1057/s41599-025-05860-2",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.nature.com/articles/s41599-025-05860-2"
      },
      {
        "label": "Open publisher full PDF",
        "url": "https://www.nature.com/articles/s41599-025-05860-2.pdf"
      }
    ],
    "image": "/images/research/covers/aied-142-backfill.png",
    "imageAlt": "Two children paint their own animal pictures with a teacher's guidance, using a few reference sketches and laptop examples in an art classroom.",
    "summaryImage": "/images/research/summary/aied-142-backfill-summary.png",
    "summaryImageAlt": "Two children paint their own animal pictures with a teacher's guidance, using a few reference sketches and laptop examples in an art classroom.",
    "summaryAudio": "/audio/research/aied-142-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-143",
    "slug": "news-missouri-google-ai-career-training-access",
    "title": "Industry news: Missouri and Google connect classroom AI access with workforce training",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini for Education",
      "Missouri",
      "workforce learning",
      "AI literacy",
      "education access"
    ],
    "shortSummary": "Google's September 8 Missouri partnership links education tools, teacher training, and career credentials across schools, higher education, and community job centres. The announced reach is an intended provision, not a count of completed learning. OpenAI's district partnerships and Anthropic's school-managed teacher offering provide comparisons. For education leaders, the useful questions concern who participates, which support makes access usable, and whether participants can apply their learning beyond a credential.",
    "fullSummary": "Google announced a partnership with Missouri education and workforce agencies on September 8, 2026. The plan combines no-cost access to AI tools, training, and career credentials, with an announced scope of nearly 100,000 educators and more than 1.1 million students. Gemini for Education is among the resources. Google says adoption remains voluntary for individual institutions. These figures describe intended access, not evidence that everyone has enrolled, used a tool, or completed a course.\n\nThe combination of classroom and workforce provision is the distinctive feature. A school pupil, a university student, and an adult changing careers can encounter related tools through different institutions. That can create opportunities for continuity, but only if the learning pathways are understandable. A person should be able to see the entry requirements, the kind of practice involved, the support available, and what a credential does and does not demonstrate.\n\nFor teachers, access to an assistant is only one part of adoption. They need time to learn the interface, examples that fit their subject, and colleagues who can help evaluate outputs. A rural school with a small technical team may have different needs from a large university department. An implementation plan that counts accounts equally can miss these differences. Institutions could therefore record support intensity and unresolved barriers alongside activation and completion.\n\nFor adult learners, the connection with job centres may be particularly important. A course advertised as flexible still requires devices, connectivity, time, and confidence in asking for help. A proposed local evaluation could examine where participants stop, what brings them back, and whether they can perform a realistic task after training. It should include people who do not complete a certificate, since their experience may reveal a problem in the pathway rather than a lack of motivation.\n\nOpenAI's recent U.S. district partnerships also combine access with training, while Anthropic's August school offering brings teacher accounts under institutional management. These announcements show several companies working through existing educational organisations. They do not establish equivalent eligibility, privacy arrangements, or outcomes. Missouri's programme is a specific partnership; its terms should not be assumed to apply to a school in Hong Kong or another jurisdiction.\n\nA useful assessment can be close to the work participants want to do. A teacher might revise a lesson resource and explain the changes. An adult learner might clean a small dataset, inspect an AI-generated formula, or draft a service email using supplied facts. The assessment should make room for checking, correction, and disclosure of assistance. A polished result alone cannot show whether the participant could recognise a plausible error next time.\n\nThe partnership offers a broad route into AI learning, but its eventual value will depend on participation and support as much as on the technology supplied. Public reporting could distinguish the people offered access, those who used it, those who completed training, and those who demonstrated a new capability. That would help communities understand whether a large announced opportunity became a useful and inclusive learning pathway.",
    "keyTakeaways": [
      "The September 8 partnership announces access and training provision; its reach figures are not completion outcomes.",
      "Institutions retain choices about adoption, while learners need understandable pathways and practical support.",
      "Evaluate demonstrated tasks and non-completion experiences alongside account and certificate counts."
    ],
    "whyItMatters": "Large access programmes are easier to judge when they connect their headline reach to the support and learning experiences of different communities.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/missouri-state-education-partnership/",
    "sourceUrls": [
      {
        "label": "Google: Missouri AI and career-training partnership — 2026-09-08",
        "url": "https://blog.google/products-and-platforms/products/education/missouri-state-education-partnership/"
      },
      {
        "label": "OpenAI: Additional U.S. teacher district partnerships — 2026-08-26",
        "url": "https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts/"
      },
      {
        "label": "Anthropic: School and district teacher offering — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      }
    ],
    "createdAt": "2026-09-08",
    "image": "/images/research/covers/aied-143-backfill.png",
    "imageAlt": "An adult learner discusses an inventory spreadsheet with an instructor and volunteer, beside a diagram linking study, practice, project work and workplace application.",
    "summaryImage": "/images/research/summary/aied-143-backfill-summary.png",
    "summaryImageAlt": "An adult learner discusses an inventory spreadsheet with an instructor and volunteer, beside a diagram linking study, practice, project work and workplace application.",
    "summaryAudio": "/audio/research/aied-143-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-144",
    "createdAt": "2026-09-09",
    "title": "A twelve-week teacher-education course raised self-reported GenAI literacy across five dimensions",
    "authors": [
      "Ting Huang",
      "Chenze Wu",
      "Meixin Wu"
    ],
    "venue": "Discover Artificial Intelligence",
    "year": 2025,
    "type": "journal",
    "slug": "language-teacher-genai-literacy-twelve-week-course",
    "tags": [
      "teacher education",
      "AI literacy",
      "language education",
      "critical evaluation",
      "professional learning"
    ],
    "shortSummary": "A twelve-week English teacher-education intervention compared four existing university classes, with 45 analyzed participants in each condition. Students receiving explicit GenAI instruction reported higher post-course literacy across technical, critical, communication, creative and ethical dimensions. The course combined practice with reflection and disclosure of AI use. Because the main outcomes came from self-report and classes were not individually randomized, the findings do not demonstrate independent teaching competence or lasting classroom impact.",
    "fullSummary": "Knowing how to obtain a fluent AI response is only one part of being ready to teach with generative AI. Ting Huang, Chenze Wu and Meixin Wu examined a course that treated literacy as a combination of technical proficiency, critical evaluation, communication, creative application and ethical competence. Their intervention placed these dimensions inside ordinary English teacher preparation, rather than offering a one-off demonstration of a tool. The central question was whether repeated, guided use would change how future teachers understood their own capacity to use AI responsibly.\n\nThe study took place in a compulsory English curriculum and pedagogy course at a university in southeastern China. Four existing classes participated: two received the intervention and two followed the regular curriculum. Ninety complete responses were analyzed, with 45 in each condition. The twelve-week course ran from September to December 2024. Researchers used pre-course and post-course questionnaires, including a 25-item literacy scale and open-ended responses. Analysis compared outcomes after accounting for baseline scores, alongside qualitative coding of students' explanations.\n\nThe intervention integrated GenAI into multiple teaching topics and included explicit prompting practice, evaluation of outputs and discussion of ethical issues. KIMI was used in tasks involving lesson plans and presentation materials. Students first created a lesson plan and supporting slides independently, then later used AI to improve them and reflected on the process. They also recorded their interactions and explained how the tool had contributed. This sequence makes a useful distinction between possessing a finished artifact and examining the decisions behind it.\n\nThe intervention group reported higher post-course overall literacy than the comparison group, with corresponding advantages across all five dimensions. Open-ended responses added examples of more considered use, including adapting prompts and evaluating teaching applications. The reported improvement should nevertheless be described as a change in questionnaire-based literacy. Even a reliable self-report scale does not directly establish that someone can identify a fabricated source, protect student information or design an effective lesson when independently assessed. Confidence and awareness are relevant outcomes, but they are not interchangeable with demonstrated competence.\n\nSeveral design features restrict broader claims. Classes were assigned as intact groups, and participation came from one institution with a predominantly female cohort. Researchers helped develop and implement the intervention, so local teaching expertise and expectations may have influenced outcomes. There was no delayed post-test, and open-ended survey responses could not be followed up through interviews. The study therefore supports further evaluation of sustained literacy training without establishing a universal causal effect, durable competence or benefits for the pupils these future teachers may eventually teach.\n\nFor Hong Kong teacher education, the practical contribution is an inspectable training sequence. Programs could combine the five dimensions with short performance tasks: check a questionable claim, improve a weak prompt, identify a privacy problem and justify an adaptation for a particular class. An independent lesson design before and after training could complement self-ratings, while a later placement review could examine transfer. These are proposed additions beyond the reported study. The course offers a useful starting structure, provided the evaluation distinguishes what participants believe they can do from what their teaching decisions actually demonstrate.",
    "keyTakeaways": [
      "Four intact classes contributed 90 complete responses, split evenly between a twelve-week GenAI-integrated course and regular instruction.",
      "The intervention group reported stronger overall literacy and advantages across five dimensions, measured mainly through questionnaires.",
      "Self-report, a single institution and no delayed assessment limit claims about demonstrated teaching competence or lasting classroom impact."
    ],
    "whyItMatters": "AIEDHK can use the five-domain framework to organize teacher learning, while adding direct tasks that test source evaluation, ethical decisions and instructional adaptation. Confidence gains should be paired with observable practice.",
    "sourceUrl": "https://doi.org/10.1007/s44163-025-00435-1",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s44163-025-00435-1"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s44163-025-00435-1.pdf"
      }
    ],
    "image": "/images/research/covers/aied-144-backfill.png",
    "imageAlt": "Teacher trainees and a facilitator review an annotated English dialogue activity, source checks, lesson-sequence notes and a laptop comparison.",
    "summaryImage": "/images/research/summary/aied-144-backfill-summary.png",
    "summaryImageAlt": "Teacher trainees and a facilitator review an annotated English dialogue activity, source checks, lesson-sequence notes and a laptop comparison.",
    "summaryAudio": "/audio/research/aied-144-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-145",
    "slug": "news-chatgpt-edu-district-adoption-coordination",
    "title": "Industry news: OpenAI's district-adoption programme puts coordination and staff support ahead of account counts",
    "authors": [
      "OpenAI Academy"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "ChatGPT Edu",
      "district implementation",
      "professional learning",
      "institutional support",
      "AI adoption"
    ],
    "shortSummary": "OpenAI Academy's programme for a September 9 district-adoption webinar focuses on roles, communication, practical use cases, and continuing staff support. The public agenda is evidence of the intended training, not of attendance or successful implementation. Anthropic's teacher-account expansion and Google's Missouri partnership make the topic timely. Schools can use the agenda to examine how a rollout connects technical access with instructional decisions and help when a workflow fails.",
    "fullSummary": "OpenAI Academy listed “ChatGPT Edu: Leading District-Wide Adoption” for September 9, 2026. Its published programme focuses on coordinating technical teams, instructional leaders, professional learning staff, communications teams, and schools. It also addresses expectations for review, approved information, and continuing support. This report draws on the public agenda; it does not claim to have observed the session or to know whether participants later implemented its recommendations successfully.\n\nThe topic is useful because an AI rollout can look complete before ordinary work becomes easier. Accounts may be active while staff remain unsure what they are allowed to upload, whom to ask for help, or whether an output is suitable for a lesson. A clear implementation plan should connect these questions to people and processes. The technical team cannot make every instructional decision, and teachers should not have to diagnose every access problem alone.\n\nA school can test its plan with a simple scenario. A teacher wants to adapt a reading passage, encounters an account restriction, and receives a draft containing an unsupported fact. Who resolves the restriction? Who decides whether the source material is appropriate? How does the teacher report the factual problem? Following that single activity through the organisation can reveal gaps that are invisible in an account-activation dashboard.\n\nCommunication should also describe the limits of an initial rollout. Staff need to know which activities are being tried, what evidence will inform expansion, and how they can decline or suggest a different approach. A long policy document may be less useful than a short, accurate explanation linked to a named contact. Updates should reach people who missed the first training session, including temporary and newly appointed staff.\n\nThe surrounding announcements show why this matters now. Anthropic's August 28 teacher offer adds central school and district management. Google's September 8 Missouri partnership includes Gemini tools, training, and credentials across educational and workforce settings. Compared with OpenAI's agenda, these developments highlight the same practical transition from individual experimentation to organisational provision. They remain different offers, and a local institution must inspect the actual arrangements rather than assume the products share one model of access.\n\nA continuing support plan could distinguish three kinds of question: getting into the service, using it for a particular task, and deciding whether the result is good enough. Staff with different expertise can handle each one, while a shared record helps identify recurring problems. If many teachers misunderstand the same feature, another login tutorial will not solve the instructional issue. The response should follow the pattern of difficulty.\n\nFor education leaders, the useful output of a rollout meeting would be a small set of defined activities, named responsibilities, and a review date. Evidence can include corrected materials, unresolved cases, staff experiences, and examples of a workflow that was intentionally stopped. OpenAI's published agenda supplies a timely discussion framework. The institutional work is to make that framework concrete enough that a colleague knows what to do when their first real task does not go as expected.",
    "keyTakeaways": [
      "The source is a September 9 webinar programme, not observed evidence of training outcomes.",
      "Test an implementation plan by following one realistic task through access, use, review, and support.",
      "Assign responsibilities and review actual difficulties rather than equating activated accounts with adoption."
    ],
    "whyItMatters": "Institutional AI becomes usable when people know which tasks are supported, who can help, and how the organisation learns from a failed attempt.",
    "sourceUrl": "https://academy.openai.com/en/public/clubs/k-12-administrators-and-district-leaders-gcxd3/events/chatgpt-edu-leading-district-wide-adoption-q4cg54ccu9",
    "sourceUrls": [
      {
        "label": "OpenAI Academy: Leading district-wide adoption programme — 2026-09-09",
        "url": "https://academy.openai.com/en/public/clubs/k-12-administrators-and-district-leaders-gcxd3/events/chatgpt-edu-leading-district-wide-adoption-q4cg54ccu9"
      },
      {
        "label": "Anthropic: School and district teacher offering — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "Google: Missouri AI and career-training partnership — 2026-09-08",
        "url": "https://blog.google/products-and-platforms/products/education/missouri-state-education-partnership/"
      }
    ],
    "createdAt": "2026-09-09",
    "image": "/images/research/covers/aied-145-backfill.png",
    "imageAlt": "Four school staff members arrange responsibility cards around an annotated lesson scenario while a teacher records support needs.",
    "summaryImage": "/images/research/summary/aied-145-backfill-summary.png",
    "summaryImageAlt": "Four school staff members arrange responsibility cards around an annotated lesson scenario while a teacher records support needs.",
    "summaryAudio": "/audio/research/aied-145-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-146",
    "createdAt": "2026-09-10",
    "title": "Reflective chatbot feedback improved immediate transfer, while encouragement mainly supported retention",
    "authors": [
      "Jiaqi Yin",
      "Haoxin Xu",
      "Yafeng Pan",
      "Yi Hu"
    ],
    "venue": "npj Science of Learning",
    "year": 2025,
    "type": "journal",
    "slug": "reflective-chatbot-feedback-transfer-retention-brain-study",
    "tags": [
      "metacognition",
      "chatbot feedback",
      "learning transfer",
      "retention",
      "learning sciences"
    ],
    "shortSummary": "A randomized laboratory study analyzed 87 university students learning cardiovascular concepts through a chatbot. Reflective prompts improved immediate transfer and confidence–accuracy alignment compared with neutral prompts, while both reflective and encouraging feedback supported retention. Brain recordings revealed different activity patterns across conditions. These results concern a structured lesson and immediate tests; brain activation is not a direct measure of understanding, and the study does not establish long-term classroom effectiveness.",
    "fullSummary": "Feedback can invite a learner to reconsider understanding, offer encouragement or simply signal a pause. Jiaqi Yin and colleagues compared these functions inside a chatbot lesson rather than treating every supportive response as equivalent. Their study asked whether reflective and affective messages would influence retention, transfer and the accuracy of learners' judgments about what they knew. It also recorded brain activity, providing an additional research perspective without replacing the behavioral evidence that matters for educational decisions.\n\nThe researchers recruited 93 university students in Shanghai who were not biology majors. After six exclusions caused by recording problems or missing screen recordings, the analysis included 87 students, with 29 in each randomly assigned feedback condition. All studied fifteen modules about the cardiovascular system. Each module combined learning, a self-assessment and feedback. The reflective condition prompted monitoring or planning, the affective condition offered encouragement or praise, and the neutral condition provided a break prompt. These were structured feedback arrangements, not a comparison of unrestricted language models.\n\nAfter accounting for initial knowledge, both reflective and affective feedback produced higher retention scores than neutral feedback. The reflective condition also performed better on questions requiring application to new problems, with mean transfer scores of 9.38 compared with 6.72 in the neutral condition. Its confidence judgments tracked answer accuracy more closely. Affective feedback did not show a significant transfer advantage over the neutral condition. These different patterns support choosing feedback according to the intended learning outcome rather than assuming that a pleasant message accomplishes every instructional purpose.\n\nFunctional near-infrared spectroscopy measured blood-oxygen changes over selected cortical regions during the lesson. Different feedback conditions showed different activation patterns, and some signals correlated with metacognitive sensitivity or retention. Such findings can inform hypotheses about how learners respond to feedback. They do not allow a teacher to infer that more activation necessarily means deeper learning, or that a particular student's understanding can be read directly from a brain signal. Predictive modeling within this sample also requires independent validation before any practical use.\n\nThe design has clear boundaries. Outcomes came from immediate retention and transfer tests after a short lesson, not from delayed classroom performance. The neutral comparison offered little substantive instructional guidance, so superiority to it does not establish superiority to a strong teacher-feedback approach. Participants came from one university, and the measurement system covered only selected brain areas. The intervention also combined different messages with corresponding reflection or emotion ratings. The evidence therefore supports the tested packages, while leaving the contribution of each individual component unresolved.\n\nFor AIEDHK, the most usable implication is a simple feedback-design question: what should the learner do next? A reflective prompt could ask for an explanation, identify an uncertainty or encourage a change in strategy; supportive language could help maintain willingness to continue. A classroom pilot should measure the intended outcome separately, including a later unfamiliar task if transfer is the goal. These are proposed design and evaluation steps beyond the experiment. The study provides a reason to distinguish feedback functions and verify their consequences through learner performance, rather than use neuroscience imagery as a shortcut to educational credibility.",
    "keyTakeaways": [
      "Eighty-seven analyzed students received reflective, affective or neutral feedback during the same structured cardiovascular lesson.",
      "Reflective feedback supported immediate transfer and confidence–accuracy alignment; both reflective and affective feedback supported retention relative to neutral prompts.",
      "Immediate laboratory outcomes and selective brain measurements do not establish durable classroom effects or a direct brain-based measure of understanding."
    ],
    "whyItMatters": "AIEDHK can design feedback around its function and test that function directly. Encouragement, reflection and correctness information should be evaluated against distinct learner outcomes rather than treated as interchangeable features.",
    "sourceUrl": "https://doi.org/10.1038/s41539-025-00311-8",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.nature.com/articles/s41539-025-00311-8"
      },
      {
        "label": "Open publisher full PDF",
        "url": "https://www.nature.com/articles/s41539-025-00311-8.pdf"
      }
    ],
    "image": "/images/research/covers/aied-146-backfill.png",
    "imageAlt": "A student explains a heart-and-lungs circulation sketch and confidence rating to a tutor while another learner reviews an answer sheet and a laptop offers reflective questions.",
    "summaryImage": "/images/research/summary/aied-146-backfill-summary.png",
    "summaryImageAlt": "A student explains a heart-and-lungs circulation sketch and confidence rating to a tutor while another learner reviews an answer sheet and a laptop offers reflective questions.",
    "summaryAudio": "/audio/research/aied-146-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-147",
    "slug": "news-agents-api-research-task-records",
    "title": "Product news: OpenAI's Agents API brings managed execution to research and educational applications",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Agents API",
      "research software",
      "agent workflows",
      "reproducibility",
      "educational development"
    ],
    "shortSummary": "OpenAI launched the Agents API in public beta on September 10, offering managed execution, context handling, tools, and subagents for longer tasks. Educational developers can explore more sustained workflows, but need to define what happens when work stops, resumes, or changes direction. Anthropic's shared memory and Gemini's selective video analysis provide comparisons. The central design task is to preserve evidence and human responsibility across the whole activity.",
    "fullSummary": "OpenAI introduced the Agents API in public beta on September 10, 2026. It brings the execution framework used by Codex to developers, including support for tools, longer sessions, context management, and subagents. Developers can choose an execution environment rather than assemble every part of the workflow themselves. For education and research software, the announcement makes sustained tasks easier to explore, while leaving the purpose, evidence standard, and user experience for the application team to define.\n\nA longer task needs a more explicit record than a single answer. If an assistant gathers sources, analyses a file, and drafts a report, each stage can fail in a different way. A missing source may be mistaken for an absent finding; a partial computation may be mistaken for a complete result. The application should make those states visible so a user can tell what actually happened and decide whether work should continue.\n\nConsider a proposed research-support tool for a university library. It could collect candidate public sources on a topic, remove duplicates, and prepare a comparison table. The table should preserve the original links and distinguish retrieved facts from the assistant's interpretation. If access to one source fails, the result should say so rather than fill the gap with a plausible summary. A librarian can then assess both the useful material and the remaining uncertainty.\n\nSubagents create another design choice. Dividing a task among several assistants may speed up independent work, but the pieces can rely on inconsistent definitions or overlapping sources. A coordinator needs a clear way to reconcile disagreements and keep the final claims connected to evidence. More participants do not automatically create independent verification if they repeat the same unsupported assumption. Application designers should decide which checks genuinely add a different perspective.\n\nAnthropic's August memory update supports continuity across chat and Cowork. Gemini's September video feature selectively inspects media segments. Compared with OpenAI's managed execution, these updates address different parts of a sustained workflow: remembered context, access to evidence, and carrying out the task. An educational application may need only some of them. The learning objective should determine which capabilities are useful and what the user should still inspect directly.\n\nA development team can begin with a short public dataset and a known expected result. It can deliberately remove an input, interrupt a run, or change an instruction, then check whether the application reports the situation accurately. The purpose is to test meaningful behaviour, not merely whether the agent returns a success message. The same exercise can become a software-engineering lesson about recovery, accountability, and the difference between attempted and completed work.\n\nThe beta is an infrastructure release, not a ready-made tutor or a guarantee of research quality. Its educational promise is that teams can spend more attention on the task and less on repeatedly assembling supporting machinery. The resulting application should still make it easy to identify the sources used, the actions performed, the checks passed, and the decisions left for a person. Those records are what allow longer AI work to remain reviewable.",
    "keyTakeaways": [
      "The September 10 release places the Agents API in public beta with managed support for sustained tasks.",
      "Task records should distinguish missing inputs, partial work, failed checks, and completed results.",
      "Subagents add value only when their outputs can be reconciled against a shared task and evidence standard."
    ],
    "whyItMatters": "Longer AI workflows are useful for education when users can reconstruct what happened and intervene at the decisions that matter.",
    "sourceUrl": "https://openai.com/index/introducing-the-agents-api/",
    "sourceUrls": [
      {
        "label": "OpenAI: Introducing the Agents API — 2026-09-10",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Anthropic: Memory across Cowork and chat — 2026-08-25",
        "url": "https://claude.com/resources/articles/claudes-memory-works-everywhere-and-you-decide-whats-in-it"
      },
      {
        "label": "Google DeepMind: Agentic video understanding — 2026-09-01",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/"
      }
    ],
    "createdAt": "2026-09-10",
    "image": "/images/research/covers/aied-147-backfill.png",
    "imageAlt": "A librarian, graduate student and student developer check printed source records against a three-stage source-to-notes-to-table workflow on a monitor.",
    "summaryImage": "/images/research/summary/aied-147-backfill-summary.png",
    "summaryImageAlt": "A librarian, graduate student and student developer check printed source records against a three-stage source-to-notes-to-table workflow on a monitor.",
    "summaryAudio": "/audio/research/aied-147-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-148",
    "createdAt": "2026-09-11",
    "title": "Thinking before consulting ChatGPT improved creativity on the next independent task",
    "authors": [
      "Sarah Shi Hui Wong",
      "Sophia Xuefei Qiu"
    ],
    "venue": "Educational Psychology Review",
    "year": 2026,
    "type": "journal",
    "slug": "think-first-chatgpt-later-independent-creativity",
    "tags": [
      "human-AI collaboration",
      "creativity",
      "independent performance",
      "self-regulated learning",
      "experimental research"
    ],
    "shortSummary": "In a randomized experiment with 196 university students, unrestricted ChatGPT use improved an assisted product-design task but offered no advantage on the next unaided task. A guided group first generated its own ideas and then used ChatGPT to develop them; this group performed better independently afterward. The result supports investigating the sequence of human and AI work, while leaving delayed retention and the separate contribution of guidance unresolved.",
    "fullSummary": "An impressive AI-assisted idea is not necessarily evidence that its author has become more creative. Sarah Shi Hui Wong and Sophia Xuefei Qiu tested that distinction by measuring what participants could do after ChatGPT was removed. Their experiment compared unrestricted assistance with a guided sequence in which learners generated their own ideas before asking AI to improve them. The second, independent task is the crucial feature: it evaluates a consequence for the person beyond the quality of the assisted product.\n\nThe analysis included 196 students from a university in Singapore, randomly assigned to human-only, general-AI or regulated-AI groups. Group sizes were 64, 67 and 65 respectively. Participants first completed a baseline creativity measure, then had twelve minutes to propose an improvement to an ordinary stuffed toy. The general-AI group could use ChatGPT freely. The regulated group first formed its own ideas and then received examples of prompts for developing, evaluating and improving them. The human-only group worked without AI assistance.\n\nAll groups subsequently completed a different twelve-minute invention task without ChatGPT or the sample prompts: propose a game to help adults learn foreign-language vocabulary. Two trained experts independently rated every response without knowing the participant's condition. Ratings distinguished originality, usefulness and elaboration. This separation is valuable because a longer or more detailed proposal can appear sophisticated without being especially novel or effective. The researchers also analyzed conversation transcripts to examine how participants actually engaged with the assistant.\n\nDuring the assisted task, the general-AI group produced more original and useful solutions than the other groups. The pattern changed once assistance was removed. On the independent invention task, the regulated-AI group outperformed both comparison groups in originality and usefulness, while the general-AI group was comparable to the human-only group. For originality, the regulated group's advantage corresponded to reported standardized differences of about 0.52 against human-only and 0.48 against general-AI. The result therefore favors a particular collaboration sequence over unrestricted access in this setting.\n\nThe process analysis found more idea-development and evaluation prompts in the regulated group. Such prompts statistically mediated part of its later originality advantage, but that analysis does not independently prove the mechanism. The regulated intervention bundled initial self-generation, guidance and AI interaction. As the authors acknowledge, a group receiving the same guidance without AI would help isolate the assistant's contribution. The independent task also followed within the same experimental session. The evidence shows immediate carryover to a different creative task, not durable gains across weeks, subjects or professional design work.\n\nFor AIEDHK, the approach can inform a bounded classroom trial: preserve an initial human idea, use AI to question or extend it, and require the learner to justify the final choices. Assessment should then include a new task completed without assistance. A delayed follow-up and a similarly guided human-only comparison would make the evidence stronger. These are proposed extensions beyond the experiment. The practical lesson is to organize AI use around the development of a learner's thinking process, while testing independent performance rather than assuming that better assisted output automatically represents learning.",
    "keyTakeaways": [
      "Randomized groups totaling 196 students compared human-only work, free ChatGPT use and self-generated ideas followed by guided AI collaboration.",
      "Free AI use helped the assisted task; the guided group performed better on the subsequent unaided invention task.",
      "The independent test was immediate, and guidance was bundled with AI use; long-term gains and AI-specific mechanisms remain unestablished."
    ],
    "whyItMatters": "AIEDHK can separate the quality of an AI-assisted creation from the learner’s subsequent independent capability. Preserve initial ideas, inspect the collaboration process and test performance again after assistance is removed.",
    "sourceUrl": "https://doi.org/10.1007/s10648-026-10118-7",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10648-026-10118-7"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s10648-026-10118-7.pdf"
      }
    ],
    "image": "/images/research/covers/aied-148-backfill.png",
    "imageAlt": "Two design students compare an initial pull-along toy sketch with a revised axle drawing beside a small physical mock-up and laptop.",
    "summaryImage": "/images/research/summary/aied-148-backfill-summary.png",
    "summaryImageAlt": "Two design students compare an initial pull-along toy sketch with a revised axle drawing beside a small physical mock-up and laptop.",
    "summaryAudio": "/audio/research/aied-148-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-149",
    "slug": "news-gpt-rosalind-trusted-access-research-training",
    "title": "Product news: GPT-Rosalind leaves research preview for eligible organisations, sharpening the need for evidence-centred training",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-Rosalind",
      "research training",
      "life sciences",
      "evidence provenance",
      "specialist AI"
    ],
    "shortSummary": "A September 11 update to OpenAI's GPT-Rosalind announcement says the specialist life-sciences model is leaving research preview for eligible organisations through trusted access. This is an access change to an existing model programme. Anthropic's AI-learning guidance and Gemini's inquiry training offer complementary context for universities: access to a specialised assistant should be paired with the ability to trace data, inspect methods, and distinguish a useful hypothesis from a validated result.",
    "fullSummary": "OpenAI updated its GPT-Rosalind announcement on September 11, 2026 to say that the specialist life-sciences model was leaving research preview and becoming available globally to eligible organisations through its trusted-access programme. The underlying announcement was published in June. This report concerns the September access change, not the launch of an entirely new model that day. Eligibility and institutional oversight remain part of the offer.\n\nFor universities, specialist access creates a training question before it creates an outcome claim. A graduate student may receive a more relevant explanation or a more capable analysis assistant, yet still need to understand which data were used, why a method was chosen, and what the result can support. Domain-specific fluency can make an answer sound authoritative. It does not remove the need to check whether the reasoning fits the research question.\n\nA suitable introductory activity could use a small, already published teaching dataset with an instructor-verified result. Students would ask the assistant to describe the variables and propose an analysis, then compare the proposal with the course's requirements. They would record which suggestions they accepted, rejected, or modified. The purpose would be to make methodological judgment visible, without involving sensitive participant records or live experimental decisions.\n\nThe evidence trail should survive beyond the chat. A result needs a connection to its input version, transformations, assumptions, and outputs. If an assistant changes a filtering rule, the student should be able to identify which observations were affected and whether the interpretation changed. A saved narrative saying that the data were cleaned is not enough. A reproducible record allows a supervisor to examine the actual choices.\n\nAnthropic's Claude Academy approach emphasises deciding what to delegate and continuing to practise important skills. Google's September AI Educator Series includes using Gemini Deep Research in inquiry. Compared with OpenAI's specialist access, these resources address broader preparation for working with AI. They can support discussion about evidence and judgment, but should not be treated as substitutes for disciplinary methods training or as proof that a specialist model is suitable for every project.\n\nSupervisors could distinguish three products of an AI-assisted exercise: a candidate explanation, an executable analysis, and an interpretation supported by checked evidence. Each requires a different review. A plausible explanation might suggest what to investigate; a running script shows that code executes; a defensible conclusion depends on the data and method. Asking students to identify the boundary between these products helps prevent a smooth narrative from concealing an unresolved assumption.\n\nThe access expansion may let more qualified research organisations explore specialised assistance, but the educational goal should remain the development of researchers who can question and verify their tools. A useful course or lab induction would include a deliberately flawed suggestion, a corrected analysis, and a discussion of what could not be concluded. That gives students experience with the full research process, including uncertainty and revision, rather than only demonstrations in which the assistant appears to succeed.",
    "keyTakeaways": [
      "September 11 marks a trusted-access expansion and exit from research preview, not a fresh model launch.",
      "Specialist fluency should be checked against data, assumptions, methods, and an inspectable analysis record.",
      "Training should separate a hypothesis, executable code, and an evidence-supported conclusion."
    ],
    "whyItMatters": "Access to specialised research AI is most valuable when it develops researchers' ability to evaluate methods and preserve a reproducible evidence trail.",
    "sourceUrl": "https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/",
    "sourceUrls": [
      {
        "label": "OpenAI: GPT-Rosalind capabilities and September access update — 2026-09-11",
        "url": "https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-11",
    "image": "/images/research/covers/aied-149-backfill.png",
    "imageAlt": "A supervisor and graduate researcher inspect a data-quality chart while a student records a three-step methods sketch in a bioinformatics teaching room.",
    "summaryImage": "/images/research/summary/aied-149-backfill-summary.png",
    "summaryImageAlt": "A supervisor and graduate researcher inspect a data-quality chart while a student records a three-step methods sketch in a bioinformatics teaching room.",
    "summaryAudio": "/audio/research/aied-149-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-150",
    "createdAt": "2026-09-12",
    "title": "An engineering module taught students to audit AI claims before using them in design work",
    "authors": [
      "Christine E. King",
      "Beth A. Lopour"
    ],
    "venue": "Biomedical Engineering Education",
    "year": 2025,
    "type": "journal",
    "slug": "engineering-design-ai-claim-audit-source-verification",
    "tags": [
      "engineering education",
      "critical AI literacy",
      "source verification",
      "problem-based learning",
      "research skills"
    ],
    "shortSummary": "A biomedical engineering course asked students to verify ChatGPT's claims against research literature and revise an AI-generated device proposal with tracked changes. Thirty-one of 68 students answered the evaluation survey, reporting better awareness of limitations and less automatic trust. Project reflections showed selective use, especially for brainstorming. This teaching report offers a concrete assessment design, but it did not demonstrate a causal improvement in critical-thinking ability or student learning outcomes.",
    "fullSummary": "Telling students to check an AI answer is easier than showing what a good check should contain. Christine E. King and Beth A. Lopour developed a biomedical engineering module that turned verification into an assessable activity. Students compared generated claims with published research, examined references and documented the changes needed to make a proposed design credible. The aim was to make the boundary between a plausible suggestion and supported engineering reasoning visible before students relied on AI in a larger project.\n\nThe activities were introduced in an upper-division quantitative physiology course with 68 students. One assignment used a published review of brain–computer interfaces as a reference point. Students questioned ChatGPT about relevant developments, checked the accuracy of its responses and investigated the citations it supplied. They identified kinds of query for which the output was useful or unreliable. This made source evaluation part of disciplinary work rather than an abstract warning about hallucination or a test of whether prose sounded convincing.\n\nA second assignment asked students to obtain a proposed brain–computer-interface design from ChatGPT and revise it. The deliverable included the original response, an edited version with tracked changes and explanations supporting retained or altered statements. Students had to make the design feasible and connect its claims to relevant literature. They then completed a problem-based design project in which AI use was optional, but any use had to be described. The structure therefore preserved evidence of students' judgment as well as the final design artifact.\n\nOnly 31 students completed the optional evaluation survey. Respondents generally reported a better understanding of the tool's strengths and weaknesses and less trust in unverified responses. The statistical tests compared their ratings with a neutral response, so the reported significance should not be read as a randomized gain in critical-thinking skill. Project reflections added useful detail: five of 22 groups did not use ChatGPT, while eleven described using it mainly for ideation. Some groups explicitly described further research to check generated information.\n\nThis is a teaching report with encouraging process evidence, not a controlled effectiveness trial. Fewer than half of enrolled students answered the survey, creating a risk that respondents differed from nonrespondents. The module used ChatGPT 3.5, and its behavior and knowledge limits should not be generalized automatically to later systems. Treating a review article as a reference also does not make that article infallible. The authors explicitly state that the study was not adequately powered to assess student learning outcomes. It cannot establish that skepticism alone produced better design decisions.\n\nFor AIEDHK, the transferable contribution is the assignment architecture. Students can submit a claim, the source used to check it, a correction and a reason for the final decision. Teachers can assess the quality of that evidence trail, including justified acceptance rather than only rejection of AI suggestions. A later independent task could test whether verification practices carry over to unfamiliar material. These are proposed evaluation steps beyond the report. The educational goal is a learner who can judge a useful idea against evidence and constraints, not merely produce a polished account of having used AI responsibly.",
    "keyTakeaways": [
      "The module combined literature-based claim checking with a tracked revision of an AI-generated engineering design.",
      "The optional survey had 31 respondents from 68 students; project reflections showed selective use, especially ideation.",
      "The report did not establish causal critical-thinking or learning gains, and its statistical survey results were comparisons with neutral ratings."
    ],
    "whyItMatters": "AIEDHK can adapt the evidence trail as an assessment product: original claim, checked source, reasoned correction and final judgment. This makes verification observable while keeping claims about learning proportional to the evidence.",
    "sourceUrl": "https://doi.org/10.1007/s43683-025-00192-8",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s43683-025-00192-8"
      },
      {
        "label": "Publisher full PDF including assignment appendices",
        "url": "https://link.springer.com/content/pdf/10.1007/s43683-025-00192-8.pdf"
      }
    ],
    "image": "/images/research/covers/aied-150-backfill.png",
    "imageAlt": "An instructor and two engineering students compare an assistive-device block diagram with a research page containing a crossed-out claim and a corrected statement.",
    "summaryImage": "/images/research/summary/aied-150-backfill-summary.png",
    "summaryImageAlt": "An instructor and two engineering students compare an assistive-device block diagram with a research page containing a crossed-out claim and a corrected statement.",
    "summaryAudio": "/audio/research/aied-150-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-151",
    "slug": "news-anthropic-threat-report-information-literacy",
    "title": "Industry news: Anthropic's misuse report gives educators a concrete reason to teach source provenance",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "information literacy",
      "AI misuse",
      "source provenance",
      "digital citizenship",
      "critical reading"
    ],
    "shortSummary": "Anthropic's September 10 threat report describes selected operations involving misuse of Claude, including deceptive information activity. This September 12 report focuses on the educational implications of fabricated authority and hidden coordination. The cases are not a representative measure of all AI use. OpenAI's managed teacher access and Gemini's course-context tools remain relevant comparisons: a helpful interface or supplied source collection does not eliminate the need to examine where a claim comes from.",
    "fullSummary": "Anthropic published its September threat intelligence report on September 10, 2026, covering selected misuse activity observed between December 2025 and August 2026. The company describes cases across several areas, including influence operations and fraud, and says it disrupted the activity it identified. This September 12 article focuses on the report's implications for information literacy. Anthropic explicitly presents notable cases, not a representative sample from which the frequency of all AI misuse can be estimated.\n\nFor educators, the relevant problem is broader than recognising machine-written sentences. A piece of information can appear credible because it sits inside a polished website, carries an impressive institutional label, or is repeated by several apparently separate accounts. Readers need to investigate who produced it, which evidence supports it, and whether the sources are genuinely independent. Fluent language alone answers none of those questions.\n\nA classroom activity can explore this with harmless, teacher-created examples. Students could receive three short accounts of a fictional community event, each with a different source history. Two might trace back to the same unsupported statement, while the third links to a clear original record. Students would draw the chain of evidence and explain why repetition does not necessarily provide corroboration. There is no need to expose them to live malicious sites or reproduce operational abuse techniques.\n\nThe task can also distinguish uncertainty from accusation. An unfamiliar publisher is not automatically dishonest, and an error does not prove an organised campaign. Students should be able to state what they know, what they cannot verify, and which additional evidence would change their view. That is a more defensible habit than labelling every suspicious-looking text as AI-generated or treating detection software as a final judge.\n\nOpenAI's recent teacher partnerships and Anthropic's own school offering place AI inside managed educational settings. Gemini in Classroom can connect study prompts with course materials. These arrangements help define access and context, but they do not make every source or generated explanation reliable. A curated collection can contain an outdated document, and an assistant can misrepresent an otherwise sound source. Institutional access and critical reading remain complementary responsibilities.\n\nA library or department could maintain a small set of examples showing different failure modes: a real citation used for an unsupported claim, a copied statement presented as independent confirmation, and a source whose date changes its meaning. Learners can practise returning to the original and recording exactly what it establishes. The emphasis should be on a repeatable method of checking, not on memorising a list of trusted-looking brands.\n\nThreat reports can support this teaching when their own evidence limits are examined. Students can ask what the reporting organisation could observe, how cases were selected, and which conclusions extend beyond the available record. Anthropic's publication supplies a current industry example for that discussion. The educational response is to strengthen habits of attribution, corroboration, and proportionate confidence, while leaving technical incident investigation to the people responsible for those systems.",
    "keyTakeaways": [
      "Anthropic's September 10 report contains selected notable cases, not an estimate of typical AI-use risk.",
      "Trace claims to original evidence and distinguish independent corroboration from repetition.",
      "Information-literacy teaching should support justified uncertainty rather than automatic accusations of deception."
    ],
    "whyItMatters": "As plausible-looking information becomes easier to produce, learners need practical ways to inspect provenance and calibrate confidence.",
    "sourceUrl": "https://www.anthropic.com/threat-intelligence-report-september-2026",
    "sourceUrls": [
      {
        "label": "Anthropic: September 2026 threat intelligence report — 2026-09-10",
        "url": "https://www.anthropic.com/threat-intelligence-report-september-2026"
      },
      {
        "label": "OpenAI: Additional U.S. teacher district partnerships — 2026-08-26",
        "url": "https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts/"
      },
      {
        "label": "Anthropic: School and district teacher offering — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-09-12",
    "image": "/images/research/covers/aied-151-backfill.png",
    "imageAlt": "A teacher and three students trace connections between three printed excerpts and an original source document during a media-literacy lesson.",
    "summaryImage": "/images/research/summary/aied-151-backfill-summary.png",
    "summaryImageAlt": "A teacher and three students trace connections between three printed excerpts and an original source document during a media-literacy lesson.",
    "summaryAudio": "/audio/research/aied-151-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-152",
    "createdAt": "2026-09-13",
    "title": "Stating the data-science step increased acceptance of AI code suggestions, while alternatives alone did not",
    "authors": [
      "Dhivyabharathi Ramasamy",
      "Cristina Sarasua",
      "Abraham Bernstein"
    ],
    "venue": "Empirical Software Engineering",
    "year": 2025,
    "type": "journal",
    "slug": "data-science-workflow-context-ai-code-alternatives",
    "tags": [
      "research workflows",
      "data science",
      "AI coding assistance",
      "human-AI interaction",
      "analysis quality"
    ],
    "shortSummary": "An experiment with 28 data scientists tested a notebook assistant that could include workflow context and offer alternative code recommendations. Naming the data-science step increased acceptance of suggestions, while alternatives alone showed no significant effect. Predictive tasks were easier for the assistant-supported workflow than descriptive analysis. The small study informs interface design; accepting more generated code does not by itself demonstrate better scientific reasoning, reliable findings or improved learner competence.",
    "fullSummary": "An AI coding assistant can produce valid-looking code while misunderstanding the analytical step a researcher is trying to complete. Dhivyabharathi Ramasamy, Cristina Sarasua and Abraham Bernstein examined whether making that step explicit helps, and whether offering alternative code paths adds value. Their study used CATSci, a notebook interface that lets users inspect, edit, accept or reject recommendations. For education researchers and students learning analysis, the underlying question is how an interface can support deliberate analytical choices rather than make code insertion the default measure of success.\n\nThe experiment recruited 28 data scientists from Upwork, each reporting at least one year of relevant experience. Participants were randomly allocated to four groups of seven, combining the presence or absence of workflow-step information with the presence or absence of alternative recommendations. All used a GPT-4-based assistant in Jupyter notebooks. They completed a descriptive task involving correlations in a prepared public dataset and a predictive task involving a financial classification dataset. Task order was randomized, and interaction logs were combined with surveys and written feedback.\n\nThe interface allowed prompts to include previous notebook cells, additional instructions and an explicit data-science step, such as exploration or modeling. In the alternatives condition, the assistant supplied a main suggestion plus three other possibilities. Users could examine the code before inserting it. This design made the research question narrower than whether AI helps data analysis in general: every group had AI support, and the experiment varied particular features of the assistance and its presentation.\n\nProviding the workflow step significantly increased the probability that users accepted a recommendation. Offering alternatives alone did not produce a significant difference. Acceptance and task scores also differed between descriptive and predictive work, with the predictive task performing more favorably. Participants often wanted additional instructions and contextual information to obtain useful suggestions. These results suggest that communicating analytical intent may matter more than simply multiplying proposed solutions. They also show that success on one kind of data task should not be assumed to transfer to another.\n\nThe findings have practical limits. Seven participants per group provide limited statistical power, and the tasks were intentionally simple. The study's reported power analysis was only 0.5 for a large effect under its assumptions. Users were encouraged to rely on the assistant as much as possible, and the interface did not retain a complete conversational history automatically. Most importantly, acceptance is a behavior, not a guarantee that a method is justified or a conclusion is valid. The results do not establish educational learning gains, scientific reproducibility or superiority over working without an assistant.\n\nFor AIEDHK, research-methods teaching could use the workflow idea while retaining independent checks. Before requesting code, a learner could state the question, the current analytical step, the data assumptions and the expected output. After receiving a suggestion, the learner could explain why the method fits, inspect errors and compare a plausible alternative where it matters. A later unaided task could test understanding of the analysis. These are proposed extensions beyond the study. The useful lesson is to make analytical purpose explicit and inspect the result, while keeping convenience, code acceptance and evidential quality as separate outcomes.",
    "keyTakeaways": [
      "Twenty-eight experienced data scientists tested four combinations of workflow-step context and alternative AI code suggestions.",
      "Workflow context increased recommendation acceptance; alternatives alone did not show a significant effect, and task type mattered.",
      "The small AI-only comparison concerns interface features and behavior, not proof of better scientific validity or learner understanding."
    ],
    "whyItMatters": "AIEDHK research workflows can require an explicit analytical purpose before code generation and a reasoned method check afterward. More accepted code should not be treated as stronger evidence or a substitute for statistical judgment.",
    "sourceUrl": "https://doi.org/10.1007/s10664-025-10622-4",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10664-025-10622-4"
      },
      {
        "label": "Author study data and analyses",
        "url": "https://doi.org/10.5281/zenodo.10943330"
      }
    ],
    "image": "/images/research/covers/aied-152-backfill.png",
    "imageAlt": "A researcher and graduate student discuss a sparse scatterplot, analysis workflow cards, and handwritten questions about a model choice.",
    "summaryImage": "/images/research/summary/aied-152-backfill-summary.png",
    "summaryImageAlt": "A researcher and graduate student discuss a sparse scatterplot, analysis workflow cards, and handwritten questions about a model choice.",
    "summaryAudio": "/audio/research/aied-152-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-153",
    "slug": "news-devin-astra-testing-evidence-software-learning",
    "title": "Product news: Devin's Astra testing case separates a working demonstration from the checks still missing",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Devin",
      "GPT-6 Astra",
      "software testing",
      "programming education",
      "verification evidence"
    ],
    "shortSummary": "OpenAI's September 11 Cognition case describes Devin using GPT-6 Astra to test software and return a recording alongside a report of passed and untested checks. This September 13 article examines that evidence format, rather than repeating Astra's model launch. Anthropic's browser actions and Gemini's coding demonstrations provide comparisons. For student software projects, the useful question is what a demonstration proves, what it leaves open, and who performs the next check.",
    "fullSummary": "OpenAI published a Cognition case study on September 11, 2026 describing how Devin uses GPT-6 Astra to test software and show its results. One example pairs a recording of a game running in a simulator with a report identifying checks completed and areas left untested. This September 13 article examines that review workflow. It is a vendor-published example, not an independent estimate of reliability or a new report on Astra's original launch.\n\nThe combination is useful because a demonstration and a test report answer different questions. A recording can show what happened during one run. A report can specify which conditions were checked and which were omitted. Neither should be mistaken for proof that every user journey, device, or edge case works. Students learning to build software need to understand that boundary before they learn to produce more persuasive demonstrations. Reviewers should be able to reproduce the most important check.\n\nA course project could require a short evidence packet with every proposed change. The packet might include the requirement, the exact version tested, a relevant recording, and a list of unresolved checks. The student would explain why those checks are relevant to the change. A polished video without that explanation would be incomplete, while an honest report of a remaining failure could demonstrate strong engineering judgment.\n\nFor example, a team building a quiz interface might show a correct answer being accepted. Reviewers could then ask what happens with an empty response, a keyboard-only interaction, a repeated submission, or a narrow screen. The team does not need to test every conceivable situation at once. It needs to select cases that meaningfully challenge the intended behaviour and state what remains outside the evidence.\n\nAnthropic's browser tools expand an assistant's ability to act on visible interfaces. Google's Gemini 3.8 Flash announcement showcases generated interactive software. These developments make the quality of review increasingly important. OpenAI's Cognition example contributes a useful reporting pattern, but the platforms' different capabilities should not be collapsed into a claim that all generated applications are self-validating. The people accepting a change still need to understand the tests.\n\nTeachers can also ask students to revise their confidence after a new observation. A feature may pass the original check and fail when the input changes. The appropriate response is to update the claim, preserve the failed case, and improve the test, rather than delete the evidence or broaden the success statement. This makes debugging part of the assessed reasoning rather than an embarrassing detour hidden from the final presentation.\n\nThe case's most transferable idea is therefore modest: show the behaviour and describe the scope of the checks. In a capstone review, a student should be able to say which requirement a recording supports, which test could falsify their claim, and what another reviewer should try next. An AI agent can help assemble those materials, but a convincing engineering account depends on the connection among requirement, execution, limitation, and human acceptance.",
    "keyTakeaways": [
      "The case concerns a September 11 testing workflow, not Astra's original model announcement.",
      "A recording shows one observed run; a test report should state the scope and remaining gaps.",
      "Student projects can assess how evidence supports a requirement and how confidence changes after a failure."
    ],
    "whyItMatters": "AI-assisted software education benefits when students learn to make bounded, falsifiable claims about their work rather than simply present a polished demo.",
    "sourceUrl": "https://openai.com/index/cognition-devin-testing-with-astra/",
    "sourceUrls": [
      {
        "label": "OpenAI: Cognition tests Devin work with Astra — 2026-09-11",
        "url": "https://openai.com/index/cognition-devin-testing-with-astra/"
      },
      {
        "label": "Anthropic: Claude in Chrome general availability — 2026-08-26",
        "url": "https://claude.com/resources/articles/claude-in-chrome-generally-available"
      },
      {
        "label": "Google DeepMind: Gemini 3.8 Flash — 2026-09-02",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      }
    ],
    "createdAt": "2026-09-13",
    "image": "/images/research/covers/aied-153-backfill.png",
    "imageAlt": "A student presents a shape-based quiz on a tablet while a lecturer and teammate review a partly completed checklist and a narrow-screen preview.",
    "summaryImage": "/images/research/summary/aied-153-backfill-summary.png",
    "summaryImageAlt": "A student presents a shape-based quiz on a tablet while a lecturer and teammate review a partly completed checklist and a narrow-screen preview.",
    "summaryAudio": "/audio/research/aied-153-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-154",
    "createdAt": "2026-09-14",
    "title": "Structured chatbot speaking practice was linked to better oral scores and lower self-reported anxiety",
    "authors": [
      "Dongliang Ding",
      "Ahmad Muhyiddin B Yusof"
    ],
    "venue": "Humanities and Social Sciences Communications",
    "year": 2025,
    "type": "journal",
    "slug": "conversation-bot-speaking-practice-performance-anxiety",
    "tags": [
      "language learning",
      "speaking practice",
      "conversation bots",
      "learner confidence",
      "mixed-methods research"
    ],
    "shortSummary": "A six-week study compared 60 learners in two existing IELTS-preparation classes. Those using Mondly for supplementary speaking practice improved more on oral assessments and reported a larger reduction in speaking anxiety than those using alternative practice activities. Interviews described useful repetition and a less judgmental setting, alongside limitations in conversational variety. The evidence is encouraging but class-based allocation, one commercial platform and short follow-up limit causal and long-term conclusions.",
    "fullSummary": "An AI conversation partner can offer repeated opportunities to speak without the immediate social pressure of addressing a teacher or classmate. Dongliang Ding and Ahmad Muhyiddin B Yusof investigated whether that kind of practice was associated with better speaking performance and lower speaking anxiety. Their study examined a structured use of Mondly within IELTS preparation. It concerns a defined language-learning activity rather than a general claim that conversational AI can replace the interpersonal work of learning to communicate.\n\nSixty undergraduate learners from two existing classes at an IELTS preparation center in China took part. Thirty used Mondly as a supplementary out-of-class speaking resource for six weeks, and thirty completed alternative speaking practice. The study used a convenience sample and intact classes rather than individual random assignment. Before and after the intervention, participants completed an IELTS-format speaking assessment and a nineteen-item speaking-anxiety questionnaire. Interviews with thirteen learners from the chatbot group added information about how the activity felt and where they encountered difficulties.\n\nThe chatbot practice included functional conversations and extended responses linked to the speaking curriculum. Learners could rehearse situations, receive feedback and repeat practice. The authors sought to make the practice relevant to the skills being assessed, such as fluency, pronunciation and the organization of a spoken response. That alignment matters when interpreting the findings: improvement on a closely matched assessment is useful, but it does not automatically establish flexible communication across unfamiliar topics, partners or social settings.\n\nAverage speaking scores rose from 5.06 to 5.78 in the chatbot group and from 5.14 to 5.42 in the comparison group. Analyses adjusting for pre-test scores favored the chatbot condition for both speaking performance and self-reported anxiety. Interviewees described benefits involving practice, confidence and willingness to speak. These reports help explain why a low-pressure practice setting may appeal to learners, but they do not independently establish the mechanism of improvement. The combination of structured tasks, feedback, repetition and the particular platform was evaluated as a package.\n\nSeveral qualifications remain important. One center and two intact classes offer limited protection against differences in teaching context or learner characteristics. The intervention was short, and the commercial platform did not allow researchers to isolate individual features. Anxiety was measured through self-report, not as a clinical outcome, and the study does not establish an enduring change beyond the immediate post-test. Some participants wanted more varied topics and interaction options. Human partners still supply unpredictable responses, shared context and negotiation of meaning that a structured application may not reproduce fully.\n\nFor AIEDHK, a reasonable pilot would position chatbot practice as preparation for human communication. Learners could rehearse a scenario, review a small number of recurring difficulties, and then complete a related conversation with a peer or teacher. Evaluation should include an unfamiliar speaking task, recorded practice exposure and a delayed check, alongside learners' own experience. These are proposed next steps rather than outcomes of the study. The practical aim is additional meaningful practice that helps a person speak more effectively with other people, with performance, confidence and longer-term development kept as separate questions.",
    "keyTakeaways": [
      "Sixty learners in two intact classes compared six weeks of Mondly-supported speaking practice with alternative practice activities.",
      "Speaking assessments and self-reported anxiety favored the chatbot condition after adjustment for baseline scores.",
      "Class-based allocation, a single platform and short follow-up limit causal claims and do not establish durable real-world communication gains."
    ],
    "whyItMatters": "AIEDHK can use conversational practice as preparation for peer and teacher interaction. Evaluate unfamiliar oral tasks and later performance, while treating confidence and speaking-anxiety reports as complementary learner outcomes.",
    "sourceUrl": "https://doi.org/10.1057/s41599-025-05550-z",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.nature.com/articles/s41599-025-05550-z"
      },
      {
        "label": "Open publisher full PDF",
        "url": "https://www.nature.com/articles/s41599-025-05550-z.pdf"
      }
    ],
    "image": "/images/research/covers/aied-154-backfill.png",
    "imageAlt": "A learner practices speaking with a headset in a language-centre booth while a peer waits at the door with a role-play picture card.",
    "summaryImage": "/images/research/summary/aied-154-backfill-summary.png",
    "summaryImageAlt": "A learner practices speaking with a headset in a language-centre booth while a peer waits at the door with a role-play picture card.",
    "summaryAudio": "/audio/research/aied-154-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-155",
    "slug": "news-gpt-live-api-language-learning-pauses",
    "title": "Product news: GPT-Live-1 API gives language-learning designers more control over pauses and turn-taking",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-Live-1",
      "language learning",
      "voice agents",
      "learner participation",
      "interaction design"
    ],
    "shortSummary": "OpenAI released GPT-Live-1 through its API on September 10, with simultaneous listening and speaking, interruption handling, and delegated reasoning. This September 14 report focuses on language-learning design. An early Speak account suggests fewer interruptions, but does not establish improved proficiency. Anthropic's continuity features and Gemini's Guided Learning provide useful contrasts: good assistance must leave learners room to formulate an answer, revise it, and decide when they need help.",
    "fullSummary": "OpenAI launched GPT-Live-1 in the API on September 10, 2026, bringing a voice model that can listen and speak simultaneously to developers. The announcement describes interruption handling and the ability to delegate deeper work to other models and tools. This September 14 report focuses on the implications for language practice. An early account from Speak describes fewer interruptions during learners' thinking pauses; it is a product evaluation report, not evidence of a gain in language proficiency.\n\nA pause in a language lesson can mean several things. The learner may be searching for a word, planning the next clause, checking grammar, or deciding whether to ask for help. An assistant that responds too quickly can remove the opportunity to complete the thought. One that waits indefinitely can leave the learner unsupported. The design problem is to make assistance responsive without making the learner a spectator in the conversation.\n\nTeachers could evaluate a voice prototype with a small set of clearly defined interactions. One learner pauses mid-sentence, another corrects a word, and another explicitly asks for a hint. Reviewers would examine whether the assistant treats those situations differently and whether the learner can regain the floor. The task should include varied accents and speaking speeds, while avoiding the assumption that one conversational rhythm is the standard everyone should match.\n\nThe content of a reply matters as much as its timing. A smooth response can still misunderstand the learner's meaning or give an unhelpful correction. A useful transcript review would identify what the student was trying to say, how the assistant interpreted it, and whether the next exchange helped clarify the idea. This gives the teacher a way to inspect the interaction without reducing quality to speed or the number of turns.\n\nAnthropic's shared chat and Cowork memory addresses continuity across tasks. Gemini's established Guided Learning addresses stepwise support for understanding. Compared with OpenAI's voice API, these features show that educational assistance has several dimensions: carrying context, shaping guidance, and managing conversation. A language activity may benefit from some of them, but should still be designed around what the learner needs to practise rather than around the assistant's most impressive feature.\n\nA proposed lesson could ask learners to tell a short story, review one exchange with a teacher, and tell the story again to a classmate. The assessment would focus on whether the learner can communicate the intended meaning more effectively in the later interaction. Enjoyment, perceived confidence, and technical interruptions could be recorded separately. This would avoid assuming that a pleasant conversation automatically produces transferable speaking skill.\n\nDevelopers also need to make the transition between speaking and acting clear. A request to explain a sentence is different from a request to save or send work. The application should preserve the learner's control over those actions. GPT-Live-1 makes more natural voice interaction available as a building block; its educational value depends on how designers protect thinking time, make misunderstandings recoverable, and connect assisted practice with meaningful human communication.",
    "keyTakeaways": [
      "The API release was September 10; an early partner report concerns interruptions, not measured language gains.",
      "Voice-tutor evaluation should inspect pauses, self-correction, misunderstandings, and the learner's ability to regain the floor.",
      "Assess later communication separately from enjoyment, speed, and perceived fluency."
    ],
    "whyItMatters": "Voice AI can become a better practice partner when interaction design preserves the time and agency learners need to formulate their own meaning.",
    "sourceUrl": "https://openai.com/index/introducing-gpt-live-1-in-the-api/",
    "sourceUrls": [
      {
        "label": "OpenAI: GPT-Live-1 in the API — 2026-09-10",
        "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
      },
      {
        "label": "Anthropic: Memory across Cowork and chat — 2026-08-25",
        "url": "https://claude.com/resources/articles/claudes-memory-works-everywhere-and-you-decide-whats-in-it"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-09-14",
    "image": "/images/research/covers/aied-155-backfill.png",
    "imageAlt": "A learner pauses thoughtfully in a language studio while a tutor listens and a classmate holds a three-scene speaking cue card.",
    "summaryImage": "/images/research/summary/aied-155-backfill-summary.png",
    "summaryImageAlt": "A learner pauses thoughtfully in a language studio while a tutor listens and a classmate holds a three-scene speaking cue card.",
    "summaryAudio": "/audio/research/aied-155-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-156",
    "createdAt": "2026-09-15",
    "title": "AI-supported lesson-design teams maintained immediate scores after withdrawal, but durable learning was not tested",
    "authors": [
      "Daniele Agostini",
      "Anna Serbati",
      "Federica Picasso",
      "Anastasiya Lipnevich"
    ],
    "venue": "Frontiers in Education",
    "year": 2026,
    "type": "journal",
    "slug": "chatgpt-collaborative-lesson-design-immediate-withdrawal",
    "tags": [
      "collaborative learning",
      "teacher education",
      "lesson design",
      "AI feedback",
      "evidence boundaries"
    ],
    "shortSummary": "A crossover study organized 102 teachers-in-training into 21 lesson-design groups, with complete knowledge-test data from 82 participants. Teams used ChatGPT during either the first or second task. Scores rose during AI-supported phases and did not show a detectable immediate decline after withdrawal for the first sequence. Reflections also described efficiency gains and reduced peer idea-building. Short timing, weak test consistency and sequential tasks prevent interpreting this pattern as established long-term retention.",
    "fullSummary": "When an AI system joins a design group, the question is not only whether the group finishes a better plan. It is also whether participants learn from the discussion and continue contributing their own ideas. Daniele Agostini and colleagues explored this tension in collaborative lesson design, asking teachers-in-training to treat ChatGPT as a contributor whose suggestions could be questioned. Their study followed both individual knowledge checks and group-produced artifacts, providing a view of collaboration that extends beyond the final written lesson.\n\nThe study involved 102 postgraduate teachers-in-training organized into 21 groups. In a four-hour session, groups completed two connected tasks: first select and justify inclusive educational technologies, then develop a detailed teaching intervention. Groups were allocated to opposite sequences. One used ChatGPT 3.5 in the first task and worked without it in the second; the other began without AI and gained access for the second task. Complete data for all three individual knowledge checks were available for 82 participants, with 38 and 44 in the two sequences.\n\nThe first sequence improved on the knowledge check after the AI-supported task, particularly on technology-related items. Its scores did not show a statistically detectable decline in the immediately following task without AI. The other sequence showed its clearer improvement after AI became available. The authors describe this pattern as sustained performance after withdrawal within the study timeframe. That is a narrower conclusion than proving durable retention: the same session continued, and a nonsignificant decline does not establish equivalence or guarantee that knowledge will persist later.\n\nGroup artifacts and written reflections added a more complicated picture. Participants described AI as useful for organizing work and producing structured suggestions, but some also reported less spontaneous exchange of ideas among peers. The issue is therefore not whether AI participation is uniformly helpful or harmful. A tool can make drafting easier while changing who proposes, questions and develops ideas. The qualitative evidence comes from participants' accounts of their collaboration, rather than a complete independent record of every conversational contribution.\n\nSeveral methodological limits deserve attention. The individual test contained thirteen mostly recall or understanding items and had low internal-consistency estimates. Only 82 of 102 participants contributed complete test data. The two design tasks were sequential and different, so task demands, practice and carryover complicate comparisons. There was no delayed follow-up and no final common task in which both sequences worked without AI. The results provide an exploratory account of short-term collaboration and score patterns, not a secure estimate of enduring learning or an isolated causal effect of treating AI as a teammate.\n\nFor AIEDHK, a useful classroom experiment would preserve a group's initial ideas and require members to discuss which AI suggestions they accepted, revised or rejected. Individual explanations could reveal whether every participant understood the decisions behind the shared artifact. A later common task without assistance, and a stronger knowledge measure, would help test whether any benefit lasts. These are proposed extensions beyond the reported study. The educational priority is a group that continues to reason together, with efficient document production evaluated separately from individual understanding and the quality of peer participation.",
    "keyTakeaways": [
      "The study involved 102 participants in 21 groups, but complete three-wave knowledge-test analysis included 82 participants.",
      "Immediate scores were maintained after AI withdrawal in one sequence; this is not proof of durable retention or statistical equivalence.",
      "Group reflections suggested both efficient production and possible reductions in peer idea-building; weak measurement and sequential tasks constrain inference."
    ],
    "whyItMatters": "AIEDHK can evaluate AI-supported collaboration through both individual explanations and group interaction evidence. A good shared lesson plan does not establish that all members learned or that peer reasoning remained strong.",
    "sourceUrl": "https://doi.org/10.3389/feduc.2026.1751618",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1751618/full"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1751618/pdf"
      }
    ],
    "image": "/images/research/covers/aied-156-backfill.png",
    "imageAlt": "Four teacher trainees discuss a laptop lesson suggestion, compare activity cards, and record a reasoned revision in a notebook.",
    "summaryImage": "/images/research/summary/aied-156-backfill-summary.png",
    "summaryImageAlt": "Four teacher trainees discuss a laptop lesson suggestion, compare activity cards, and record a reasoned revision in a notebook.",
    "summaryAudio": "/audio/research/aied-156-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-157",
    "slug": "news-google-public-service-ai-project-learning",
    "title": "Industry news: Google.org selects public-service AI projects, offering cases for responsible project-based learning",
    "authors": [
      "Google.org"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "public-service AI",
      "project-based learning",
      "community engagement",
      "AI literacy",
      "open-source plans"
    ],
    "shortSummary": "Google.org announced 15 recipients of its AI for Government Innovation challenge on September 15, combining funding with expert support for public-service projects. The selection is a starting point, not proof that the proposed systems have delivered their intended benefits. OpenAI's agent infrastructure, Anthropic's delegation guidance, and Gemini's inquiry training give educators practical comparison points for teaching how to define a public problem, involve users, and evaluate a proposed solution.",
    "fullSummary": "Google.org announced 15 recipients of its AI for Government Innovation challenge on September 15, 2026. The programme combines funding and expert support for organisations working with public services, with projects intended to become adaptable open-source blueprints. The announcement includes work on clearer public communication and transport information. Selection signals support for a proposal; it does not show that every system is deployed, every blueprint is available, or every intended benefit has been achieved.\n\nFor project-based learning, the interesting starting point is the public problem rather than the model. A confusing letter, an inaccessible timetable, or an unclear application step can create real difficulty. Students can learn to describe that difficulty in terms a user recognises before proposing an AI feature. They should be able to explain what the current process does, where people encounter trouble, and what an improvement would look like.\n\nA proposed university activity could use a fictional local-service notice. Students would identify the decisions a reader needs to make, then produce a clearer version with AI assistance. Another group would check whether any condition, deadline, or exception had been lost. The exercise would reward accurate communication, not merely shorter text. It would also show why a system that sounds helpful can still create a problem if it changes the meaning of a requirement.\n\nThe people affected should help define success. A service designer may value fewer support requests, while a resident may value understanding what to do and reaching a person when the situation is unusual. These goals can overlap without being identical. Students can compare several evaluation questions and identify whose experience each one captures. That makes stakeholder reasoning part of the project rather than a paragraph added after the prototype is finished.\n\nOpenAI's September Agents API provides infrastructure for sustained tool-based workflows. Anthropic's Claude Academy guidance encourages intentional delegation. Google's Gemini inquiry training supports a different stage: examining questions and evidence. Together, these resources can help learners consider how an application is built and why it should be built. None determines whether a particular public-service proposal is appropriate for the people it would affect.\n\nA responsible classroom project can stay small. Teams might test a prototype with fictional records and volunteer reviewers, record misunderstandings, and revise the design before considering real deployment. They should preserve an ordinary route to the service for people who do not want or cannot use the AI interface. A failed prototype can still be a strong learning outcome if students explain what it revealed and why they changed direction.\n\nThe grant announcement offers a set of contemporary cases for that kind of analysis. Educators can ask which claims are aspirations, which are demonstrated features, and what evidence would justify expansion. As the projects develop, the same questions can be revisited against public artifacts and user experience. The valuable lesson is that public benefit must be specified and examined, not inferred from a grant, an open-source intention, or a polished demonstration.",
    "keyTakeaways": [
      "The September 15 announcement selects supported projects; it does not certify completed public-service outcomes.",
      "Start a student project with a user's problem and an observable definition of improvement.",
      "Evaluate preserved meaning, participation, and alternatives alongside prototype functionality."
    ],
    "whyItMatters": "Public-service AI cases can help students connect technical development with the experiences and choices of the people a system is meant to serve.",
    "sourceUrl": "https://blog.google/company-news/outreach-and-initiatives/google-org/ai-government-innovation-recipients/",
    "sourceUrls": [
      {
        "label": "Google.org: AI for Government Innovation recipients — 2026-09-15",
        "url": "https://blog.google/company-news/outreach-and-initiatives/google-org/ai-government-innovation-recipients/"
      },
      {
        "label": "OpenAI: Introducing the Agents API — 2026-09-10",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-15",
    "image": "/images/research/covers/aied-157-backfill.png",
    "imageAlt": "An older resident, students and a lecturer discuss a fictional community bus route while a student records suggestions about service and accessibility.",
    "summaryImage": "/images/research/summary/aied-157-backfill-summary.png",
    "summaryImageAlt": "An older resident, students and a lecturer discuss a fictional community bus route while a student records suggestions about service and accessibility.",
    "summaryAudio": "/audio/research/aied-157-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-158",
    "createdAt": "2026-09-16",
    "title": "Progressive mind maps strengthened programming performance beyond chatbot assistance alone",
    "authors": [
      "Xindong Ye",
      "Wenyu Zhang",
      "Yuxin Zhou",
      "Xiaozhi Li",
      "Qiang Zhou"
    ],
    "venue": "Humanities and Social Sciences Communications",
    "year": 2025,
    "type": "journal",
    "slug": "progressive-mind-maps-chatbot-programming-learning",
    "tags": [
      "programming education",
      "mind mapping",
      "instructional scaffolding",
      "computational thinking",
      "secondary education"
    ],
    "shortSummary": "A study of 111 seventh-grade students compared chatbot-supported Python learning with two forms of mind-map scaffolding. The group progressing from partially completed maps to independent construction achieved the strongest programming-test results. Questionnaire-based computational-thinking outcomes also favored the scaffolded conditions, but post-test programming self-efficacy did not differ significantly between groups. The study supports examining the structure around AI help, while intact-class allocation and limited process data constrain causal and transfer claims.",
    "fullSummary": "A chatbot can answer a programming question without helping a beginner organize the problem that generated it. Xindong Ye and colleagues investigated whether mind maps could provide that missing structure. Their approach asked learners to make the sequence and relationships in a solution visible before and during coding. The comparison was between different ways of supporting chatbot use, not between access to AI and no access. This makes the study relevant to the instructional design surrounding an assistant rather than a simple technology-adoption decision.\n\nThe quasi-experiment involved 111 seventh-grade pupils from three classes at one junior high school in southeastern China. One class of 36 used progressive mind-map scaffolding with a GPT-4-based chatbot. Another class of 36 constructed its own maps with chatbot support. The remaining 39 pupils used chatbot assistance without the mapping scaffold. The same teacher taught Python concepts across an eleven-week course, including preparation and assessment. The differentiated intervention occupied six weeks, so the overall course duration should not be confused with six weeks of identical experimental exposure.\n\nThe progressive approach began with teacher-prepared maps containing gaps. Learners then moved to maps supported by prompts before constructing maps independently. Across the lessons, students clarified a problem, analyzed it, planned a solution, wrote and debugged code, and reflected on the result. The teacher monitored the process, including whether pupils simply generated code. The intended relationship was reciprocal: maps helped students formulate more focused requests, and chatbot feedback could help them revise the represented solution.\n\nThe progressive-map group had the highest programming post-test score, outperforming the self-constructed-map group by 5.11 points and the chatbot-only group by 9.31 points. The self-constructed-map group also exceeded the chatbot-only group. Overall computational-thinking questionnaire scores favored the mapped conditions, but the pattern was not uniform across subscales. Algorithmic thinking and cooperation did not differ significantly between groups. Programming self-efficacy improved within groups, but its post-test comparison was not significant. Those distinctions prevent a general claim that the scaffold improved every aspect of programming learning.\n\nThe study has several limits. Only three intact classes participated, so class differences cannot be ruled out by similar pre-test averages. The computational-thinking measure was a self-report scale rather than a direct demonstration of every named skill. The authors also noted limited assessment of the maps themselves and of students' interactions with the chatbot. Without those process measures, it is difficult to determine which parts of the scaffold mattered most. The study did not establish delayed retention or independent transfer to a substantially different programming problem.\n\nFor AIEDHK, the practical opportunity is to make planning a visible part of AI-supported coding. A teacher could ask students to draw a short decision structure, explain a branch and predict a result before requesting help. Support could gradually be reduced as the learner becomes able to plan independently. Evaluation should include unfamiliar code-tracing or debugging tasks without the assistant and should inspect how the map changes. These are proposed extensions beyond the experiment. The useful design principle is structured problem representation with fading support, while keeping tested programming performance distinct from self-reported confidence and broad claims about thinking skills.",
    "keyTakeaways": [
      "Three classes totaling 111 pupils compared progressive maps, self-constructed maps and chatbot-only programming support.",
      "The progressive-map group led on programming tests; computational-thinking questionnaire advantages varied across subscales.",
      "Post-test self-efficacy did not differ significantly, and the study did not establish delayed independent transfer."
    ],
    "whyItMatters": "AIEDHK can place visible planning before code generation and gradually reduce scaffolds. Evaluate whether learners can trace, explain and debug unfamiliar code independently, not only finish an assisted program.",
    "sourceUrl": "https://doi.org/10.1057/s41599-025-04846-4",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.nature.com/articles/s41599-025-04846-4"
      },
      {
        "label": "Open publisher full PDF",
        "url": "https://www.nature.com/articles/s41599-025-04846-4.pdf"
      }
    ],
    "image": "/images/research/covers/aied-158-backfill.png",
    "imageAlt": "A teacher and two students compare a simple Python loop with a hand-drawn programming concept map while one learner adds explanatory notes.",
    "summaryImage": "/images/research/summary/aied-158-backfill-summary.png",
    "summaryImageAlt": "A teacher and two students compare a simple Python loop with a hand-drawn programming concept map while one learner adds explanatory notes.",
    "summaryAudio": "/audio/research/aied-158-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-159",
    "slug": "news-one-claude-docs-slides-academic-revision",
    "title": "Product news: Claude merges chat and Cowork while adding document and slide creation in beta",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Docs",
      "Claude Slides",
      "academic communication",
      "revision",
      "agent workflows"
    ],
    "shortSummary": "Anthropic's September 16 announcement begins merging Claude chat and Cowork and introduces Docs and Slides alongside Design inside conversations. Rollout starts with Pro and Max, while the creation tools remain in beta on paid plans. OpenAI's agent infrastructure and Gemini's educational tools provide comparison points. For academic work, the convenience of turning one conversation into several artifacts makes it especially important to check how evidence and uncertainty survive each revision.",
    "fullSummary": "Anthropic announced on September 16, 2026 that Claude chat and Cowork were beginning to merge into one experience. The rollout starts with Pro and Max users over the following weeks. Claude Docs and Slides also arrive, with Design available inside conversations; these creation tools are in beta on paid plans. The change reduces the need to choose a separate place for discussion, longer tasks, and artifact creation, but it is not immediate universal availability.\n\nFor academic work, moving from discussion to a document and then to slides is a familiar sequence. Each step changes the audience and the amount of detail that can be shown. An assistant may make that sequence faster, while also carrying a weak assumption through every output. A coherent set of artifacts is useful only if the central claim, supporting evidence, and limitations remain appropriate to each format.\n\nA research seminar could examine this directly. Students begin with a short, checked analysis and ask for a report and presentation. They then compare the conclusions across the two. Did a cautious association become a causal statement? Did a small sample disappear from the slide? Did a chart lose its unit or source? The task can make compression visible as an editorial decision, rather than treating slides as a decorative version of the report.\n\nRevision should also remain understandable to collaborators. If a student changes the interpretation in the document, the presentation needs to be reviewed for consistency. If the assistant changes a figure, the team should be able to identify why. A shared source record and a brief note of consequential changes can help people who were not present in the original conversation. They should not need access to every informal exchange to judge the final claim.\n\nOpenAI's September Agents API supports longer tool-based workflows, while Gemini's educational resources place AI assistance inside inquiry and teaching activities. Compared with those developments, Anthropic's update changes the surface where work is discussed and produced. The technologies can make different stages more convenient, but the educational purpose still needs to be explicit. Producing a report, slides, and an illustration is not itself evidence that a student understands the argument.\n\nTeachers could therefore assess a short explanation of one important editorial choice. A student might justify why a qualification remained on a slide, why a visual was removed, or why a source did not support the original wording. Another student could challenge that decision using the same evidence. This gives the class a reason to inspect the content rather than reward the sheer volume or polish of generated material.\n\nThe unified experience may suit work that develops through repeated discussion and revision. Its value for education will depend on whether that continuity makes ideas easier to question, not merely easier to package. A useful final handoff would contain the current artifact, the evidence it relies on, and any unresolved interpretation. The interface can connect the work; the learner should still be able to explain the choices that gave it meaning.",
    "keyTakeaways": [
      "The September 16 merger starts with a staged Pro/Max rollout; Docs, Slides, and Design are in beta on paid plans.",
      "Check how claims, sources, units, and uncertainty change when a report becomes a presentation.",
      "Assess consequential editorial decisions as well as the final artifacts."
    ],
    "whyItMatters": "Integrated creation tools can support academic communication when learners remain able to explain and challenge the reasoning preserved in each output.",
    "sourceUrl": "https://claude.com/resources/articles/cowork-is-now-claude",
    "sourceUrls": [
      {
        "label": "Anthropic: Cowork and chat become one Claude — 2026-09-16",
        "url": "https://claude.com/resources/articles/cowork-is-now-claude"
      },
      {
        "label": "OpenAI: Introducing the Agents API — 2026-09-10",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-16",
    "image": "/images/research/covers/aied-159-backfill.png",
    "imageAlt": "A researcher rehearses at a lectern while a supervisor and peer compare an annotated report passage with a projected chart and context note.",
    "summaryImage": "/images/research/summary/aied-159-backfill-summary.png",
    "summaryImageAlt": "A researcher rehearses at a lectern while a supervisor and peer compare an annotated report passage with a projected chart and context note.",
    "summaryAudio": "/audio/research/aied-159-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-160",
    "createdAt": "2026-09-17",
    "title": "Motivational agents changed some algebra-learning choices without a significant overall test advantage",
    "authors": [
      "Man Su",
      "Belle Dang",
      "Andy Nguyen",
      "Tomohiro Nagashima"
    ],
    "venue": "npj Science of Learning",
    "year": 2025,
    "type": "journal",
    "slug": "motivational-agents-algebra-choice-learning-evidence",
    "tags": [
      "adaptive learning",
      "pedagogical agents",
      "algebra",
      "self-regulated learning",
      "learner choice"
    ],
    "shortSummary": "A randomized study analyzed 49 secondary pupils using an adaptive algebra system with or without motivational pedagogical agents. The agent condition showed descriptive gains, but its adjusted post-test advantage and error-rate difference were not significant. Interaction analyses highlighted different choices about optional learning activities and the importance of prior knowledge. The study illustrates why engagement paths deserve attention, while a small sample and 25-minute intervention cannot establish durable benefits from adding an agent.",
    "fullSummary": "Adding a friendly agent to an adaptive lesson does not automatically improve what students learn. Man Su and colleagues examined that assumption in an algebra environment that offered choices about optional learning activities. Their study treated those choices as part of self-regulation: when to attempt a task, seek support or move on. The main value of the investigation lies in combining outcome measures with interaction traces, while retaining an important null finding about the overall learning advantage of the agent condition.\n\nFifty-four ninth- and tenth-grade pupils from two German schools took part and were randomly assigned to versions of the AlgeSPACE system with or without motivational pedagogical agents. Five pupils were excluded because of incomplete post-tests or disengagement, leaving 49 in the analysis: 24 with agents and 25 without them. After a pre-test and brief tutorial, pupils worked independently for 25 minutes and completed an immediate post-test. The system recorded their choices, answers, solution steps and time spent during the activity.\n\nThe agents delivered motivational prompts around learning opportunities, such as trying a problem before receiving automated feedback. The study therefore examined a particular combination of visual presence and motivational messaging within a designed algebra system. It did not evaluate an open-ended generative tutor or compare every possible kind of adaptive feedback. The prompts were delivered at predefined points and were not dynamically personalized to each moment of misunderstanding or disengagement, a distinction relevant to interpreting both the outcomes and the proposed improvements.\n\nBoth conditions improved from pre-test to post-test. Although descriptive gains were larger with agents, the condition effect on post-test scores was not significant after adjustment for prior knowledge; the reported p value was .189. Error rates also did not differ significantly. Prior knowledge was a stronger predictor of performance. Process mining and sequence analyses revealed differences in how learners navigated optional activities, but such patterns should not be converted into a claim of proven overall effectiveness. A different path through a lesson can be informative without producing a reliably better test result.\n\nThe exploratory design places limits on subgroup and behavioral interpretations. The final sample was small, the activity brief, and all participants came from one national context and a narrow age range. Excluding some disengaged participants also matters when the intervention itself is intended to influence engagement. Logged decisions show what students selected, but do not fully reveal why they skipped a task or whether a choice was strategically appropriate. There was no delayed assessment of algebra understanding or evidence that these choice patterns would persist during repeated use.\n\nFor AIEDHK, the study suggests evaluating an agent through the learning decision it is intended to support. A pilot could ask learners to explain selected choices, such as skipping a familiar example or requesting another attempt, and compare those explanations with performance on a new problem. Repeated sessions and delayed tests would provide a stronger basis for judging benefit. These are proposed extensions beyond the experiment. The practical lesson is to distinguish an engaging interface, a meaningful learning choice and measurable understanding, while reporting null comparisons as clearly as positive interaction patterns.",
    "keyTakeaways": [
      "The final sample included 49 pupils,24 with motivational agents and 25 without, during 25 minutes of adaptive algebra practice.",
      "Adjusted post-test performance and error rates did not show a significant overall agent advantage.",
      "Interaction traces illuminate learning choices, but brief exposure, small samples and excluded disengaged participants limit broader claims."
    ],
    "whyItMatters": "AIEDHK can test whether an agent supports a specific learning decision rather than assume its presence adds value. Report learning outcomes, choice patterns and null comparisons separately, and ask learners why they selected or skipped activities.",
    "sourceUrl": "https://doi.org/10.1038/s41539-025-00366-7",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.nature.com/articles/s41539-025-00366-7"
      },
      {
        "label": "Open publisher full PDF",
        "url": "https://www.nature.com/articles/s41539-025-00366-7.pdf"
      }
    ],
    "image": "/images/research/covers/aied-160-backfill.png",
    "imageAlt": "Two students discuss annotated algebra examples while choosing a next practice task on a tablet under a teacher's observation.",
    "summaryImage": "/images/research/summary/aied-160-backfill-summary.png",
    "summaryImageAlt": "Two students discuss annotated algebra examples while choosing a next practice task on a tablet under a teacher's observation.",
    "summaryAudio": "/audio/research/aied-160-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-161",
    "slug": "news-claude-projects-coordination-capstone-learning",
    "title": "Product news: Claude's redesigned projects coordinate parallel work, creating a new teaching challenge for team accountability",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude projects",
      "multi-agent coordination",
      "capstone projects",
      "shared context",
      "software teamwork"
    ],
    "shortSummary": "Anthropic introduced a redesigned project experience in Claude Code beta on September 17 for a limited group of eligible Pro and Max users. A coordinator can divide work among threads and bring results together, with shared context and a project library. OpenAI's Agents API and Gemini's coding capabilities offer related building blocks. For student teams, the key question is how to preserve clear responsibilities and individual understanding when more work can be delegated.",
    "fullSummary": "Anthropic introduced redesigned projects in Claude Code beta on September 17, 2026. A coordinator can scope requests, delegate work across threads, review outputs, and assemble results. Initial access is limited to selected Pro and Max users of cloud sessions without existing web or desktop projects; broader access is planned. This is a specific project-coordination release, distinct from the previous day's announcement merging Claude chat and Cowork.\n\nThe feature makes a familiar educational problem more visible: dividing work is easier than ensuring that everyone understands the whole. A student team can produce several components quickly while losing track of assumptions at their boundaries. If one part uses a different data format or definition, the final system may fail despite each contributor reporting success. Coordination needs a shared account of what the parts must do together.\n\nA capstone team could begin with a small interface agreement before delegating implementation. It would specify the information exchanged, the cases that must be handled, and the evidence expected at handoff. Students could then review whether each result meets that agreement. The purpose is not to eliminate disagreement, but to make it possible to locate and resolve a disagreement without relying on the memory of one participant.\n\nAnthropic describes threads working on separate repository copies and branches, with shared memory and a library of materials. Separate work areas can reduce accidental interference, but they do not settle overlapping design decisions. A project still needs someone to examine the integrated result. Students should understand that several successful component checks may leave a failure in the interaction between components.\n\nOpenAI's September Agents API also supports subagents and managed task execution. Gemini 3.8 Flash's announcement emphasises coding and longer agent workflows. These developments broaden the ways teams can delegate, but do not prescribe how a course should assess participation. The same educational objective could be served by a simpler tool if students can demonstrate planning, integration, and reasoned review more clearly through it.\n\nOne proposed assessment would ask each student to explain a decision outside the component they initially led. Another would require the team to preserve an integration failure and show how it was diagnosed. These activities can reveal whether the shared project became a learning environment or merely a collection of outsourced tasks. They also make room for students who contribute through testing, documentation, or coordination rather than only writing code.\n\nTeams should keep the goal revisable and the current decision record easy to find. A remembered assumption may help a new thread begin, but a changed requirement should be explicit enough for every contributor to notice. Usage also needs attention when many threads run at once. A team might review the first delegated result against its plan before expanding the work, making scope changes visible before they multiply across several active threads. The redesigned project offers a stronger coordination surface; a strong educational use would leave students better able to define responsibilities, reconcile conflicting work, and explain why the combined result deserves acceptance.",
    "keyTakeaways": [
      "The September 17 beta has limited initial eligibility and should not be described as available to all Claude users.",
      "Parallel task completion does not establish that the integrated result works.",
      "Assess shared understanding, integration reasoning, and coordination alongside component output."
    ],
    "whyItMatters": "More capable project orchestration makes it important to teach the human work of defining interfaces, resolving disagreements, and accepting a combined result.",
    "sourceUrl": "https://claude.com/resources/articles/projects-redesigned",
    "sourceUrls": [
      {
        "label": "Anthropic: Projects redesigned — 2026-09-17",
        "url": "https://claude.com/resources/articles/projects-redesigned"
      },
      {
        "label": "OpenAI: Introducing the Agents API — 2026-09-10",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Google DeepMind: Gemini 3.8 Flash — 2026-09-02",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      }
    ],
    "createdAt": "2026-09-17",
    "image": "/images/research/covers/aied-161-backfill.png",
    "imageAlt": "An engineering capstone team compares interface cards and a test checklist beside a whiteboard showing three components joining one application.",
    "summaryImage": "/images/research/summary/aied-161-backfill-summary.png",
    "summaryImageAlt": "An engineering capstone team compares interface cards and a test checklist beside a whiteboard showing three components joining one application.",
    "summaryAudio": "/audio/research/aied-161-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-162",
    "createdAt": "2026-09-18",
    "title": "Guided ChatGPT inquiry accompanied stronger thermodynamics scores, with teacher support built into the intervention",
    "authors": [
      "Tarik El Fathi",
      "Aouatif Saad",
      "Hayat Larhzil",
      "Driss Lamri",
      "El Mehdi Al Ibrahmi"
    ],
    "venue": "Disciplinary and Interdisciplinary Science Education Research",
    "year": 2025,
    "type": "journal",
    "slug": "guided-chatgpt-inquiry-thermodynamics-conceptual-understanding",
    "tags": [
      "science education",
      "thermodynamics",
      "inquiry-based learning",
      "conceptual understanding",
      "AI-supported instruction"
    ],
    "shortSummary": "A quasi-experiment with 120 first-year engineering students compared conventional thermodynamics tutorials with guided ChatGPT inquiry. The AI-supported group achieved higher conceptual post-test scores and reported positive experiences, but the intervention also included prompt training, peer discussion and instructor feedback. Difficulties remained on quantitative topics. The study supports evaluating a complete instructional design; it does not isolate the chatbot's contribution or establish durable gains beyond one semester.",
    "fullSummary": "An AI explanation of heat, work or entropy can sound clear while leaving a student's underlying misconception intact. Tarik El Fathi and colleagues investigated a teaching approach that required learners to question and evaluate those explanations rather than simply collect answers. Their thermodynamics study combined ChatGPT with a constructivist inquiry-based prompting framework. The educational object was a guided cycle of asking, checking and revising, with the instructor still responsible for clarifying concepts and addressing difficulties.\n\nThe quasi-experiment involved 120 first-year engineering students at Ibn Tofail University in Morocco during the autumn semester of 2023. Sixty students followed conventional instruction and sixty used the AI-supported approach. Groups were formed with comparable academic profiles and taught by the same instructor; the study was not an individually randomized trial. Conceptual understanding was assessed before and after teaching with a French adaptation of the Survey of Thermodynamic Processes and First and Second Laws. Weekly questionnaires also tracked experiences and acceptance of ChatGPT.\n\nBefore using the system, the intervention group completed three hours of training in constructing prompts, checking responses and refining questions. During the semester, both groups attended two-hour weekly tutorials. The AI-supported sessions included prompt refinement, evaluation of generated explanations, collaborative discussion and instructor feedback. The comparison group used worked examples, guided exercises and conventional problem solving. The matched tutorial schedule helps describe the comparison, but AI access was bundled with a distinctive teaching approach and preparation rather than varied as an isolated ingredient.\n\nThe intervention group achieved a higher conceptual post-test mean of 22.53, compared with 18.60 in the comparison group. Both groups improved, while the AI-supported group showed the larger gain. The authors reported clearer progress on some conceptual topics and persistent difficulty with areas involving quantitative reasoning, including engine efficiency and reversible processes. Exploratory analyses of item patterns suggested different conceptual structures across groups. Those statistical patterns may guide further investigation, but they do not directly show the structure of an individual learner's understanding.\n\nThe findings should remain specific to the instructional package and context. Convenience sampling at one institution, nonrandom allocation and a single semester limit causal attribution and generalization. The intervention used the available free ChatGPT service, whose behavior can change over time. Participants also had reliable computers and internet access during tutorials, conditions that may not hold elsewhere. Positive acceptance ratings are useful implementation evidence, but they cannot establish conceptual mastery, independent problem-solving skill or retention after the assistant is no longer available.\n\nFor AIEDHK, the practical next step would be a small science tutorial that preserves a learner's initial explanation, the AI response and the reason for a revision. Teachers could contrast conceptual questions with numerical problems and require students to check assumptions, units and physical plausibility. A delayed unaided test would help assess whether the learning persists. These are proposed extensions beyond the study. The useful lesson is to evaluate guided inquiry as a whole, with teacher review and independent performance checks, rather than attribute every observed improvement to access to a conversational model.",
    "keyTakeaways": [
      "The quasi-experiment compared 60 students per condition within a 120-student introductory thermodynamics course.",
      "Higher conceptual scores accompanied an instructional package combining ChatGPT, prompt training, discussion and teacher feedback.",
      "Nonrandom allocation, one institution and no delayed independent assessment limit claims about AI-specific or durable effects."
    ],
    "whyItMatters": "AIEDHK can use inquiry prompts to make scientific reasoning inspectable, while checking numerical work and later unaided understanding separately. The instructor-guided learning design matters as much as the presence of a chatbot.",
    "sourceUrl": "https://doi.org/10.1186/s43031-025-00125-z",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1186/s43031-025-00125-z"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1186/s43031-025-00125-z.pdf"
      }
    ],
    "image": "/images/research/covers/aied-162-backfill.png",
    "imageAlt": "An instructor and two engineering students discuss a pressure-volume curve, an energy-balance sketch and unit checks beside a laptop question prompt.",
    "summaryImage": "/images/research/summary/aied-162-backfill-summary.png",
    "summaryImageAlt": "An instructor and two engineering students discuss a pressure-volume curve, an energy-balance sketch and unit checks beside a laptop question prompt.",
    "summaryAudio": "/audio/research/aied-162-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-163",
    "slug": "news-google-ai-educator-credit-pathways",
    "title": "Industry news: Google announces credit pathways for AI educator training, linking short courses with formal recognition",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Google AI Educator Series",
      "professional learning",
      "college credit",
      "Gemini",
      "teacher development"
    ],
    "shortSummary": "Google's September 18 announcement adds planned undergraduate, graduate, and continuing-education credit pathways around its AI Educator Series. The arrangements involve named partners and should not be read as universal credit recognition. Alongside Anthropic's AI-learning approach and OpenAI's community workshops, the update raises a practical question for teachers: what evidence of learning should travel with a badge or credit, and how can it inform classroom practice?",
    "fullSummary": "Google announced new credit pathways for its AI Educator Series on September 18, 2026. The post describes forthcoming undergraduate credit through College Unbound, graduate credit through ISTE and Dominican University, and continuing-education recognition for Illinois educators through a local partner. It also points to the next day's training event. These are specified partnership arrangements, not a statement that every institution will recognise every badge or that all participants have already earned credit.\n\nThe development adds a different question to the discussion of short AI courses. A teacher may complete a useful session in a small amount of time, but formal recognition requires clarity about what was learned and how it was assessed. A badge, a continuing-education hour, and academic credit serve different purposes. Participants need to know which pathway they are pursuing and what evidence or further work the receiving institution expects.\n\nFor school leaders, the opportunity is to connect individual learning with a shared professional record. A teacher could retain a revised activity, the original learning objective, and a short account of how AI assistance was evaluated. That artifact can support discussion with colleagues even when the credential itself is recognised only within a particular programme. It also gives the teacher something more informative to revisit than a list of completed modules.\n\nGemini-related training can be examined through concrete teaching decisions. If a module introduces guided problem solving, the teacher might demonstrate how a prompt encourages a student to explain a step without supplying the whole solution. If it introduces inquiry, the teacher could show how students choose and check sources. These examples do not establish learning effects in advance; they make the intended practice sufficiently clear to review and improve.\n\nAnthropic's Claude Academy account similarly emphasises purposeful delegation and continued human practice. OpenAI's September community workshops for older adults illustrate another form of learning support, organised around everyday tasks. Compared with Google's credit pathways, these are different approaches to participation and recognition. A free workshop can be valuable without academic credit, while a credit-bearing course still needs activities that connect with the participant's work.\n\nAn institution could ask staff to share one change they made after training and one unresolved difficulty. A peer might review the material, try a related task, or suggest a different form of support. This creates a route from course participation to professional dialogue without assuming that a credential is a complete measure of competence. It also recognises the work of teachers who learn through practice, mentoring, or other providers.\n\nThe announcement is therefore useful news about recognition routes, with a clear geographical and institutional scope. Teachers considering credit should confirm the relevant pathway's requirements, costs, and recognition with its provider and their own institution. For a school's development plan, the more durable record is the combination of training, an inspectable teaching artifact, and reflection on its use. That evidence can support meaningful professional growth even as products, badges, and partnerships change.",
    "keyTakeaways": [
      "Google announced partner-specific credit pathways on September 18; recognition is not automatically universal.",
      "Distinguish a badge, continuing-education recognition, and academic credit when choosing a learning route.",
      "Retain a teaching artifact and reflection alongside the credential so colleagues can examine the practice."
    ],
    "whyItMatters": "Formal recognition is more useful when it is connected to visible teaching decisions rather than treated as a complete proxy for professional capability.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/college-credit-ai-educator-series/",
    "sourceUrls": [
      {
        "label": "Google: College and continuing-education credit pathways — 2026-09-18",
        "url": "https://blog.google/products-and-platforms/products/education/college-credit-ai-educator-series/"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "OpenAI: Helping older adults use AI — 2026-09-16",
        "url": "https://openai.com/index/helping-older-adults-use-ai-in-everyday-life/"
      }
    ],
    "createdAt": "2026-09-18",
    "image": "/images/research/covers/aied-163-backfill.png",
    "imageAlt": "An educator and two advisers compare a course-pathway sheet with an annotated classroom activity and its revised version.",
    "summaryImage": "/images/research/summary/aied-163-backfill-summary.png",
    "summaryImageAlt": "An educator and two advisers compare a course-pathway sheet with an annotated classroom activity and its revised version.",
    "summaryAudio": "/audio/research/aied-163-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-164",
    "createdAt": "2026-09-19",
    "title": "Teachers welcomed an AI-enhanced autism-education platform, while student learning outcomes remain untested",
    "authors": [
      "Diana Gadzhimusieva",
      "Santiago Meliá",
      "Gonzalo Lorenzo Lledó",
      "Seyed Shahabadin Nasabeh"
    ],
    "venue": "Education and Information Technologies",
    "year": 2026,
    "type": "journal",
    "slug": "autism-education-lms-teacher-acceptance-pilot",
    "tags": [
      "inclusive education",
      "autistic learners",
      "teacher adoption",
      "learning management systems",
      "educational technology"
    ],
    "shortSummary": "A pilot evaluation of SpectrumSphere surveyed 30 educators about an AI-enhanced learning-management prototype intended to support autistic learners. Perceived usefulness, ease of use and technological confidence were associated with intentions to adopt the system. The study contributes evidence about teacher acceptance and proposed workflow integration, not demonstrated benefits for children. Its small regional survey cannot establish classroom effectiveness, sustained adoption or improvements in communication and academic learning.",
    "fullSummary": "A learning platform can be promising to teachers before there is evidence that it improves outcomes for the learners it is meant to support. Diana Gadzhimusieva and colleagues make that distinction especially important in their development and pilot evaluation of SpectrumSphere. The proposed platform brings learner information, activity records and adaptive recommendations into a shared educational workflow for autistic students. The empirical evaluation, however, concerns educators' perceptions and intentions. It is an early implementation study, not a trial of effects on children's learning or development.\n\nThe researchers surveyed thirty educators from schools in Alicante and San Vicente del Raspeig, Spain. Participants worked across specialized, general and combined classroom settings. An online questionnaire contained demographic questions and fourteen items informed by an extended technology-acceptance model. The items addressed perceived usefulness, ease of use, confidence with technology, external support and intentions to use the platform. Responses were analyzed through correlations and regression models, providing a picture of relationships among educators' judgments within this small sample.\n\nThe system design aims to help teachers connect activities with curricular competence, maintain learner profiles and review progress across conventional and technology-supported tasks. It also proposes coordination with families and integration with tools such as robotics and immersive environments. These are design features and intended uses. Their presence in an architecture does not by itself demonstrate that recommendations are appropriate for a particular child, that records capture meaningful progress or that integrating more technologies improves an educational experience.\n\nTeachers generally expressed favorable views of the prototype. Perceived usefulness and ease of use were positively associated with intention to adopt it, while confidence in handling technology was also important. Not every proposed relationship was supported: perceived external control did not show a significant direct association with intention. These results suggest that usability and practical relevance deserve attention during development. They should not be described as causal drivers established by an experiment, because the perceptions and intentions were measured together rather than manipulated over time.\n\nThe evidence has several boundaries. Thirty self-selected educators from one region cannot represent the diversity of autistic learners, families or educational settings. Stated intention does not establish sustained classroom use, and favorable teacher ratings are not child-outcome measurements. The study did not test changes in communication, participation or academic achievement, nor did it provide a controlled comparison with existing support. The authors acknowledge possible selection bias, limited statistical power and the need for observations, usage records and longitudinal evaluation alongside survey evidence.\n\nFor AIEDHK, this stage of development calls for co-design and careful feasibility testing. Educators and families could examine whether records are understandable, recommendations can be challenged and the interface fits established support routines. Any subsequent study should define meaningful learner-specific goals and measure actual participation or learning while documenting support needs and burden. These are proposed next steps rather than findings of the pilot. The useful contribution is an educator-centered integration concept with preliminary acceptance evidence, while the case for benefit to learners remains a separate question requiring direct evaluation.",
    "keyTakeaways": [
      "The pilot surveyed 30 educators, not a sample of children receiving an evaluated learning intervention.",
      "Usefulness, ease of use and technological confidence were associated with adoption intentions; one proposed external-support relationship was not significant.",
      "The study does not establish learner outcomes, sustained use or comparative effectiveness of the platform."
    ],
    "whyItMatters": "AIEDHK can distinguish adoption evidence from benefit to learners when reviewing inclusive-education technology. A favorable teacher survey should lead to co-design and direct feasibility checks before claims about academic or developmental outcomes.",
    "sourceUrl": "https://doi.org/10.1007/s10639-025-13888-9",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10639-025-13888-9"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s10639-025-13888-9.pdf"
      }
    ],
    "image": "/images/research/covers/aied-164-backfill.png",
    "imageAlt": "A parent and two educators review an illustrated activity schedule and matching tablet routine options in an inclusive classroom.",
    "summaryImage": "/images/research/summary/aied-164-backfill-summary.png",
    "summaryImageAlt": "A parent and two educators review an illustrated activity schedule and matching tablet routine options in an inclusive classroom.",
    "summaryAudio": "/audio/research/aied-164-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-165",
    "slug": "news-claude-small-business-workflow-training",
    "title": "Product news: Claude's small-business expansion connects reusable workflows with entrepreneurship training",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude for Small Business",
      "entrepreneurship education",
      "workplace learning",
      "workflow design",
      "AI literacy"
    ],
    "shortSummary": "Anthropic's September 15 update expands Claude for Small Business with workflows, integrations, and training activity. Reported here on September 19, it offers entrepreneurship educators a concrete set of tasks to examine, from proposals to recurring reports. OpenAI's agent tools and Gemini's educational training provide comparisons. The learning opportunity lies in defining a useful workflow, checking its inputs, and retaining the business decisions that a person must understand and own.",
    "fullSummary": "Anthropic expanded Claude for Small Business on September 15, 2026, adding workflows, integrations, and a programme of workshops and partner webinars. This September 19 report considers the update as a resource for entrepreneurship and workplace learning. The company describes tasks such as preparing proposals and recurring reports, but the announcement's customer stories should not be treated as general estimates of business growth or educational effectiveness.\n\nA reusable workflow can make an unfamiliar business task easier to approach. It can also conceal assumptions that a learner needs to understand. A proposal may depend on the scope of work, the available capacity, and information supplied by a client. If the assistant fills in missing details without making them visible, a professional-looking document can become a poor basis for a decision. Learning to identify those missing details is part of the work.\n\nAn entrepreneurship class could use a fictional service business with a small set of supplied records. Students might turn an inquiry into a draft proposal, then highlight each statement supported by the records and each point requiring clarification. A peer could play the client and ask how the proposal changes when the deadline or scope changes. The task would assess interpretation and negotiation, not simply the speed of producing a template.\n\nRecurring reports create a different learning opportunity. Students need to define what a measure means before asking for a weekly summary. A total of inquiries, a count of confirmed jobs, and expected revenue describe different things. A useful workflow preserves those distinctions and explains missing information. If the source spreadsheet changes, the learner should know which part of the report must be checked again.\n\nOpenAI's Agents API provides infrastructure for longer tasks with tools and managed execution. Google's Gemini-related educator training offers examples of applying AI to inquiry and practical work. Compared with Anthropic's ready-made business workflows, these approaches provide different levels of structure. A course can use them to discuss when an existing workflow is suitable, when it needs adaptation, and when a simple manual process is easier to explain and maintain.\n\nThe training component is as important as the number of integrations. A learner should be able to describe what information a connector provides and which actions the workflow is permitted to take. Connecting an account should not become a substitute for understanding the business process. A classroom prototype can use fictional records and drafts, keeping real customer commitments and transactions outside the exercise while students learn the logic.\n\nFor a vocational or university programme, a useful final submission would include the workflow, an example input, a checked output, and a short explanation of one failure case. Students could also identify which judgment they deliberately kept for a person. Anthropic's expansion supplies current industry examples for that discussion. Its educational value depends on whether learners become better at framing, reviewing, and adapting work, rather than merely more comfortable pressing a button that produces it.",
    "keyTakeaways": [
      "The September 15 expansion combines practical workflows with training; customer stories are not general outcome estimates.",
      "Use fictional business records to examine assumptions, missing information, and changes in scope.",
      "Assess a learner's ability to explain and adapt the workflow, including a meaningful failure case."
    ],
    "whyItMatters": "Entrepreneurship education can use ready-made AI workflows to teach the reasoning behind a business process, provided that reasoning remains visible.",
    "sourceUrl": "https://claude.com/resources/articles/claude-for-small-business-launches-new-workflows-integrations-and-training-programs",
    "sourceUrls": [
      {
        "label": "Anthropic: Small-business workflows and training expansion — 2026-09-15",
        "url": "https://claude.com/resources/articles/claude-for-small-business-launches-new-workflows-integrations-and-training-programs"
      },
      {
        "label": "OpenAI: Agents API launch — 2026-09-10",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-19",
    "image": "/images/research/covers/aied-165-backfill.png",
    "imageAlt": "An instructor and two adult learners compare a fictional catering inquiry, proposed menu workflow and weekly plan in a cafe-style training classroom.",
    "summaryImage": "/images/research/summary/aied-165-backfill-summary.png",
    "summaryImageAlt": "An instructor and two adult learners compare a fictional catering inquiry, proposed menu workflow and weekly plan in a cafe-style training classroom.",
    "summaryAudio": "/audio/research/aied-165-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-166",
    "createdAt": "2026-09-20",
    "title": "A tailored mathematics chatbot increased situational interest without a significant overall learning-gain advantage",
    "authors": [
      "Cilia Ricarda Rücker",
      "Sebastian Becker-Genschow"
    ],
    "venue": "Computers and Education Open",
    "year": 2025,
    "type": "journal",
    "slug": "ada-mathematics-chatbot-interest-learning-gains",
    "tags": [
      "mathematics education",
      "secondary education",
      "domain-specific chatbots",
      "situational interest",
      "classroom research"
    ],
    "shortSummary": "A classroom study with 195 ninth-grade pupils compared the tailored ADA chatbot with conventional differentiated materials while learning a square-root method. Pupils using ADA reported stronger situational interest and favorable acceptance. Overall learning gains did not show a significant group-by-time advantage, and cognitive-load differences were also nonsignificant. The result supports studying motivational engagement separately from achievement, particularly when a new tool is introduced for a brief classroom sequence.",
    "fullSummary": "A mathematics chatbot can make a lesson more interesting without producing a clear improvement in learning during a brief classroom sequence. Cilia Ricarda Rücker and Sebastian Becker-Genschow examined this distinction through ADA, a domain-specific assistant designed for secondary mathematics. Their study focused on the Heron method for approximating square roots and compared the chatbot with conventional differentiated materials. It offers a useful case of evaluating both the experience of learning and the knowledge students demonstrate, rather than treating enthusiasm as sufficient evidence of effectiveness.\n\nThe study involved 195 ninth-grade pupils from German secondary schools, with 102 in the chatbot condition and 93 in the comparison condition. Existing classes were allocated through cluster randomization. The classroom sequence used one period for the pre-test and a double period for the intervention and immediate post-test. The groups differed in prior knowledge despite the allocation procedure, so the analysis examined changes over time rather than relying only on post-test averages. This baseline imbalance is relevant to how confidently any difference can be attributed to the intervention.\n\nADA was configured around curricular content and pedagogical support. The study describes curated knowledge, retrieval and prompting intended to make responses more relevant to the topic. Pupils could seek help during the mathematical activity, while the comparison group received conventional materials for differentiation. Such a design concerns a tailored assistant embedded in a lesson, not unrestricted use of a general chatbot. The learning tasks progressed from recalling the method to applying it and considering how it might be optimized.\n\nPupils using ADA reported significantly greater situational interest and generally favorable judgments of usability and usefulness. The broader outcome pattern was more cautious. Differences in reported emotions and cognitive load did not reach significance. Although descriptive learning gains favored the chatbot group, the overall group-by-time interaction for performance was not significant, with a reported p value of .094. The findings therefore provide clearer evidence for immediate motivational engagement than for an overall achievement advantage. A favorable trend should remain a trend rather than be promoted into a confirmed effect.\n\nThe study was limited to brief exposure, one mathematical topic and a particular age group. It did not assess delayed retention or repeated use, and novelty could have contributed to interest. Detailed chat processes were not the main object of analysis, leaving uncertainty about which interactions helped or distracted learners. The paper also acknowledges that retrieval and tailored prompts cannot eliminate misleading output. These limits matter because perceived competence of an assistant may increase willingness to use it even when the learner is not well placed to judge its mathematical reliability.\n\nFor AIEDHK, a useful follow-up would compare interest, explanation quality and independent problem solving across several lessons. Teachers could inspect a sample of conversations for misleading hints and ask pupils to justify each step of a new calculation without the assistant. Interface design should also reduce the effort of switching between paper tasks and digital support. These are proposed extensions beyond the study. The practical contribution is a measured separation of engagement from achievement: a promising learning experience still needs evidence that students can retain, explain and apply the mathematics themselves.",
    "keyTakeaways": [
      "A brief classroom comparison involved 195 ninth-grade pupils, with existing classes allocated to ADA or conventional differentiated materials.",
      "Situational interest favored ADA, but the overall group-by-time learning-performance interaction was not significant (p=.094).",
      "Brief exposure, baseline differences and no delayed assessment limit claims about achievement and retention."
    ],
    "whyItMatters": "AIEDHK can evaluate a tailored chatbot as an instructional support while keeping engagement, trust and independent mathematical performance separate. Repeated lessons and delayed tests are needed before interpreting enthusiasm as durable benefit.",
    "sourceUrl": "https://doi.org/10.1016/j.caeo.2025.100315",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://doi.org/10.1016/j.caeo.2025.100315"
      },
      {
        "label": "Open author-institution full article",
        "url": "https://kups.ub.uni-koeln.de/81246/1/1-s2.0-S2666557325000746-main.pdf"
      }
    ],
    "image": "/images/research/covers/aied-166-backfill.png",
    "imageAlt": "Two students explain square-root estimates using number-line and square-area sketches while a teacher listens beside a laptop hint panel.",
    "summaryImage": "/images/research/summary/aied-166-backfill-summary.png",
    "summaryImageAlt": "Two students explain square-root estimates using number-line and square-area sketches while a teacher listens beside a laptop hint panel.",
    "summaryAudio": "/audio/research/aied-166-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-167",
    "slug": "news-older-adults-ai-skills-jam-lifelong-learning",
    "title": "Industry news: OpenAI and OATS bring hands-on AI learning to older adults through community partners",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "lifelong learning",
      "older adults",
      "AI literacy",
      "community education",
      "ChatGPT"
    ],
    "shortSummary": "OpenAI's September 16 announcement describes free, in-person AI workshops with OATS from AARP across ten U.S. communities. This September 20 report examines the lifelong-learning design, rather than claiming completed outcomes. Anthropic's practical AI-learning guidance and Gemini's educator resources offer comparisons. Effective support should begin with a participant's own task, allow different paces and preferences, and help people decide when to question an answer or seek human assistance.",
    "fullSummary": "OpenAI announced an Older Adults AI Skills Jam with Older Adults Technology Services from AARP on September 16, 2026. The programme brings free, in-person ChatGPT workshops to ten U.S. communities through local partners. This September 20 report considers the approach to lifelong learning. The announcement describes the programme's intended reach and activities; it does not supply an independently assessed account of what every participant learned or how they used the tools afterwards.\n\nThe community setting is significant. A familiar library or learning centre can provide a place to ask questions, practise with support, and return when something remains unclear. Participants will arrive with different experiences, interests, devices, and accessibility needs. Age alone does not define digital confidence. A useful session should let someone work on a meaningful task without assuming that all older adults need the same explanation or pace.\n\nEveryday tasks can provide a concrete starting point. A participant might want to organise a hobby project, understand the wording of a letter, or compare travel options. The instructor can help separate the task from the assistant's first suggestion. What information is missing? Which details need checking? What would make the result useful to this person? These questions allow the learner's purpose to guide the activity.\n\nOpenAI includes online-safety discussion in the workshop design. Educationally, that is an opportunity to practise pausing and checking rather than simply outsourcing suspicion to an AI verdict. A harmless sample message can contain an urgent request, an unclear sender, or an unexpected link. Participants can discuss what they would verify through another channel. An assistant's explanation can support that conversation without becoming the final authority on whether a message is genuine.\n\nAnthropic's Claude Academy approach also starts from practical problems and intentional choices about assistance. Gemini's educator training provides another set of examples for organising learning around real tasks. These resources serve different audiences, but they offer a useful comparison with OpenAI's community workshops: practical access works best when learners have time to experiment and a clear way to ask for help. A collection of features alone is not a learning pathway.\n\nA community provider could invite participants to leave with one small artifact they understand and can revise themselves. It might be a checked checklist, a plain-language draft, or a plan for a personal project. A later session could revisit whether the artifact remained useful and what new questions arose. Participants should also be able to decide that a particular task is better handled with a person or another tool.\n\nThe strongest evaluation would listen to varied experiences, including people who used the tool once, those who returned, and those who chose not to continue. It could examine confidence alongside the ability to identify an error and find appropriate support. The programme offers a visible investment in learning across the lifespan. Its broader lesson is that inclusive AI education requires patient, purposeful practice shaped by the learner, not a single definition of what technological participation should look like.",
    "keyTakeaways": [
      "The September 16 announcement describes a community workshop programme, not measured outcomes for every participant.",
      "Begin with learners' own purposes and avoid assuming a single pace or need based on age.",
      "Assess practical understanding, error recognition, and access to support alongside confidence."
    ],
    "whyItMatters": "Lifelong AI learning is more inclusive when community support helps people make their own informed choices about useful tasks and appropriate assistance.",
    "sourceUrl": "https://openai.com/index/helping-older-adults-use-ai-in-everyday-life/",
    "sourceUrls": [
      {
        "label": "OpenAI: Helping older adults use AI — 2026-09-16",
        "url": "https://openai.com/index/helping-older-adults-use-ai-in-everyday-life/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-20",
    "image": "/images/research/covers/aied-167-backfill.png",
    "imageAlt": "Two older learners explain a balcony-gardening plan and tablet choices to a facilitator during a community-library learning session.",
    "summaryImage": "/images/research/summary/aied-167-backfill-summary.png",
    "summaryImageAlt": "Two older learners explain a balcony-gardening plan and tablet choices to a facilitator during a community-library learning session.",
    "summaryAudio": "/audio/research/aied-167-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-168",
    "createdAt": "2026-09-21",
    "title": "A museum science program improved measured machine-learning knowledge, while some concepts and access gaps remained unresolved",
    "authors": [
      "Gabrielle Rabinowitz",
      "Katherine S. Moore",
      "Safinah Ali",
      "Mark Weckel",
      "Irene Lee",
      "Preeti Gupta",
      "Rachel Chaffee"
    ],
    "venue": "International Journal of STEM Education",
    "year": 2025,
    "type": "journal",
    "slug": "museum-machine-learning-science-youth-curriculum",
    "tags": [
      "AI literacy",
      "informal science learning",
      "machine learning",
      "high school education",
      "equitable participation"
    ],
    "shortSummary": "A four-week museum program introduced 42 high-school learners to machine learning through scientific questions, datasets and hands-on activities. Knowledge-inventory scores and self-efficacy improved, while measures of bias understanding and applying ML in science showed a less consistent pattern. Exit tickets and interviews added evidence that tests alone missed. The uncontrolled evaluation informs curriculum design but does not establish comparative effectiveness, durable learning or the elimination of participation gaps.",
    "fullSummary": "Learning about machine learning becomes more concrete when young people use it to investigate a scientific question. Gabrielle Rabinowitz and colleagues evaluated a curriculum that connected ML concepts with natural-science data and a research-mentorship pathway at the American Museum of Natural History. The program aimed to make advanced ideas accessible through practical activities while widening participation in a field with uneven access. Its evaluation examined knowledge, confidence and learners' explanations rather than relying only on whether participants enjoyed working with technology.\n\nThe four-week curriculum was implemented across two years and the study included 42 high-school-age participants. Recruitment followed the museum mentorship program's existing application routes through prior programs, partner schools and community organizations. Activities combined scientific datasets, interactive tools, unplugged exercises and embodied demonstrations. Learners considered different ML methods, participated in field-science activities and created a decision flowchart for choosing a method appropriate to a research question. Bias and the possible consequences of using a model were also part of the curriculum.\n\nThe evaluation combined a 35-item Machine Learning Concept Inventory with measures of self-efficacy and career interest, exit tickets and retrospective interviews. The inventory had undergone preliminary validation, but the authors identified further work needed on its structure and use with different populations. This mix of measures is valuable because operating a tool, explaining a concept and deciding whether ML is appropriate are related but distinct learning outcomes. A single total score can conceal strengths in one area and uncertainty in another.\n\nOverall inventory scores and self-efficacy improved after the program. However, the inventory did not detect significant changes in knowledge of ML bias or the skill of applying ML to scientific research. Exit tickets and interviews contained examples of learners explaining limitations, questioning data quality and considering when a model should be used. The authors interpret these differences as a reason to examine measurement alignment and the difficulty of the targeted concepts. Qualitative examples enrich the picture, but they should not erase nonsignificant results or be treated as proof that every participant mastered those ideas.\n\nThe evaluation had no untreated comparison group, so it cannot isolate the curriculum's causal contribution from selection, maturation or other program experiences. The sample was small and drawn from a specific mentorship setting. Subgroup analyses suggested gains among learners from under-represented groups, but some initial knowledge gaps persisted and subgroup sizes were uneven. Long-term effects on understanding, research participation and career interest remained untested. The evidence therefore supports further curriculum development without establishing that the program closes broader educational or demographic opportunity gaps.\n\nFor AIEDHK, the program suggests a practical route through locally meaningful scientific data. Learners could classify environmental observations, compare model errors and justify whether the dataset is adequate for a proposed question. Assessment should include explanations of limitations and decisions about when not to use ML, alongside conceptual questions. A later project would help test whether the understanding carries forward. These are proposed extensions beyond the evaluation. The useful contribution is a science-centered curriculum with multiple forms of learning evidence and an explicit recognition that access, confidence and conceptual mastery each require their own assessment.",
    "keyTakeaways": [
      "The four-week museum curriculum involved 42 high-school learners and combined ML methods with scientific data and practical activities.",
      "Knowledge and self-efficacy improved, but inventory results for bias and applying ML in science were not significant.",
      "No comparison group, small subgroups and no long-term follow-up limit claims about causal effects or closing opportunity gaps."
    ],
    "whyItMatters": "AIEDHK can connect ML literacy with scientific decisions and assess when learners judge a model inappropriate. Multiple evidence sources are useful, but qualitative examples and confidence gains should not replace direct checks of conceptual understanding.",
    "sourceUrl": "https://doi.org/10.1186/s40594-025-00543-5",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1186/s40594-025-00543-5"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1186/s40594-025-00543-5.pdf"
      }
    ],
    "image": "/images/research/covers/aied-168-backfill.png",
    "imageAlt": "Teenagers and a science educator compare wildlife camera photographs and record uncertainty on a simple classification flowchart in a museum learning studio.",
    "summaryImage": "/images/research/summary/aied-168-backfill-summary.png",
    "summaryImageAlt": "Teenagers and a science educator compare wildlife camera photographs and record uncertainty on a simple classification flowchart in a museum learning studio.",
    "summaryAudio": "/audio/research/aied-168-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-169",
    "slug": "news-openai-academy-role-based-learning-paths",
    "title": "Industry news: OpenAI Academy adds learning paths for educators, students, developers, and leaders",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "OpenAI Academy",
      "AI for Educators",
      "college students",
      "role-based learning",
      "assessment"
    ],
    "shortSummary": "OpenAI expanded its Academy on September 21 with courses for educators, college students, developers, and leaders, alongside its existing workplace pathway. Course badges depend on passing an assessment. Anthropic's learning approach and Google's Gemini-related training provide useful comparisons, but the new portfolio is not evidence that all roles need the same skills. Institutions can choose tasks and assessments that reflect what each group actually needs to decide and do.",
    "fullSummary": "OpenAI expanded its Academy on September 21, 2026 with learning paths for developers, leaders, educators, and college students. They join the existing Apply AI at Work pathway, and course badges are awarded after learners pass the relevant assessment. The announcement organises training around roles rather than a single general introduction. For educational institutions, that creates an opportunity to ask which decisions and practices each group needs to develop.\n\nThe educator and student pathways have different purposes. OpenAI describes educators planning activities and reviewing generated material against learning objectives, while students practise tasks such as organising study, reviewing drafts, and preparing for applications. These are intended course activities, not demonstrated effects on teaching quality or student attainment. A school or university should inspect the actual tasks before deciding how the courses fit its programme.\n\nRole-specific training can be useful because a teacher, a technical developer, and an institutional leader may encounter the same system from different positions. A teacher must judge whether an explanation serves a lesson. A developer needs to understand how an application behaves when information is missing. A leader must decide which activities deserve support and how the organisation will learn from experience. Shared terminology helps, but the assessment should reflect these different responsibilities.\n\nA university could combine a common introductory activity with separate applied tasks. Everyone might examine one flawed AI response and identify what needs checking. Educators could then revise a lesson activity, students could review a draft against an assignment, and technical staff could document a failure case in a small application. A later discussion would reveal which concerns are shared and which require specialised expertise.\n\nAnthropic's Claude Academy framing emphasises intentional delegation and the skills people should continue to practise. Google's AI Educator Series connects Gemini with problem solving and inquiry, and its recent announcement adds partner-specific credit pathways. Compared with these resources, OpenAI's new portfolio offers another way to organise training. The relevant comparison is what learners practise and demonstrate, not simply how many courses or badges a platform lists.\n\nAssessment deserves particular attention when a course teaches people to work with an assistant. A polished artifact can be produced without a clear understanding of its limitations. An assessment can therefore ask the learner to explain one rejected suggestion, identify a missing source, or adapt the workflow to a changed requirement. Those tasks make judgment visible. Learners should also be able to explain what they could not verify. They also provide feedback that remains useful when the product interface changes.\n\nInstitutions should leave room for different starting points and for learning beyond the provider's examples. Staff and students can bring a real task they have permission to use, document how assistance changed it, and discuss what remained their responsibility. The Academy expansion supplies a structured set of entry points. Its local value will depend on whether participation leads to more thoughtful choices and demonstrable capability in the work people actually do.",
    "keyTakeaways": [
      "The September 21 expansion adds role-focused pathways and assessment-linked badges.",
      "Different institutional roles need different applied tasks even when they share foundational AI concepts.",
      "Assess judgment through rejected suggestions, missing evidence, and adaptation to changed requirements."
    ],
    "whyItMatters": "Role-based AI learning can help institutions move beyond generic awareness if it is connected to observable decisions and responsibilities.",
    "sourceUrl": "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/",
    "sourceUrls": [
      {
        "label": "OpenAI: New Academy learning paths — 2026-09-21",
        "url": "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      },
      {
        "label": "Google: College and continuing-education credit pathways — 2026-09-18",
        "url": "https://blog.google/products-and-platforms/products/education/college-credit-ai-educator-series/"
      }
    ],
    "createdAt": "2026-09-21",
    "image": "/images/research/covers/aied-169-backfill.png",
    "imageAlt": "Participants in a university AI workshop compare a lesson activity, software workflow and reading notes while a student records questions.",
    "summaryImage": "/images/research/summary/aied-169-backfill-summary.png",
    "summaryImageAlt": "Participants in a university AI workshop compare a lesson activity, software workflow and reading notes while a student records questions.",
    "summaryAudio": "/audio/research/aied-169-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
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
    "id": "aied-172",
    "createdAt": "2026-09-23",
    "title": "AI feedback improved answers during an augmented-reality physics lab, while independent transfer was not assessed",
    "authors": [
      "Atakan Coban",
      "David Dzsotjan",
      "Stefan Küchemann",
      "Jürgen Durst",
      "Jochen Kuhn",
      "Christoph Hoyer"
    ],
    "venue": "EPJ Quantum Technology",
    "year": 2025,
    "type": "journal",
    "slug": "ai-feedback-augmented-reality-quantum-physics-lab",
    "tags": [
      "physics education",
      "augmented reality",
      "formative feedback",
      "quantum cryptography",
      "learning processes"
    ],
    "shortSummary": "A physics laboratory study compared feedback and no-feedback questions within an augmented-reality quantum-cryptography activity involving 21 student groups. GPT-4 feedback helped groups improve their immediate explanations, while gaze records suggested changes in attention to relevant representations and equipment. The measured outcome was answer improvement during supported discussion. A small voluntary sample, exploratory gaze analyses and no independent delayed test limit broader claims about learning and the value of the combined technology.",
    "fullSummary": "In a physics laboratory, a learner may need to connect an abstract model with the behavior of real equipment. Atakan Coban and colleagues studied whether spoken AI feedback could help make that connection during an augmented-reality activity about quantum cryptography. The system overlaid representations on a physical apparatus and asked groups to explain key steps. The research is distinctive because it examined both the answers students produced and where they looked while discussing the problem, rather than treating interaction with a visualization as evidence of understanding by itself.\n\nTwenty-one student groups at a German university participated in an approximately three-hour laboratory experiment. The groups were assigned to two sequences: one received GPT-4 feedback on questions one and three, and the other on questions two and four. All completed the same experimental steps. The physical activity was an analogy demonstration of a quantum-key-distribution protocol, while augmented-reality glasses displayed relevant representations. Spoken responses were converted to text, and the AI's feedback was converted back to speech so that the group could hear and discuss it.\n\nThe feedback prompts included the question and a reference answer. The model was instructed to compare the group's explanation with that reference and guide correction without simply revealing the answer. In the no-feedback condition, it asked the question and then directed the group onward. Groups could receive multiple feedback rounds while developing their response. The comparison therefore tested the opportunity to revise an explanation with adaptive guidance within the activity, not whether AI feedback was better than expert human feedback or whether the resulting understanding persisted independently.\n\nThe analysis favored questions receiving feedback: groups improved their explanations during the interaction. Gaze records suggested that feedback on conceptual questions drew attention toward virtual representations, whereas feedback on experimental procedures drew attention toward physical materials. These observations offer hypotheses about how feedback and representations work together. Looking at a relevant object, however, does not demonstrate that the learner interpreted it correctly. The gaze analysis also used an exploratory significance threshold of .10 because of limited sample size, requiring particular caution when interpreting individual effects.\n\nThe study was small and participation voluntary. Its measured learning outcome consisted of responses produced during the supported laboratory process, with no delayed or unfamiliar task performed independently. The model's behavior reflected a specific period in 2024, and students were initially unfamiliar with the headset. Some reported discomfort from its weight or heat later in the activity. Because all groups used the augmented-reality environment, the study does not isolate the value of AR itself. Nor can the findings establish that adding both technologies will benefit other subjects or classroom settings.\n\nFor AIEDHK, the practical design question is whether feedback directs learners back to evidence they can inspect. A laboratory pilot could ask students to revise an explanation using an observation, diagram or measurement, then test the same principle through a new situation without guidance. Teachers should separately review the factual quality of feedback and the usability of the equipment. These are proposed extensions beyond the experiment. The useful contribution is a coordinated feedback-and-representation workflow, whose educational value still depends on what learners can explain after the support is removed.",
    "keyTakeaways": [
      "Twenty-one lab groups received feedback on different questions in a counterbalanced activity using the same augmented-reality setup.",
      "GPT-4 feedback improved explanations during supported discussion; gaze patterns suggested shifts toward task-relevant representations.",
      "No delayed independent learning test was included, and exploratory gaze tests used an alpha threshold of .10."
    ],
    "whyItMatters": "AIEDHK can connect AI feedback to observable laboratory evidence and test the explanation again without support. Attention traces and better revised answers should remain distinct from proof of lasting conceptual understanding.",
    "sourceUrl": "https://doi.org/10.1140/epjqt/s40507-025-00310-z",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1140/epjqt/s40507-025-00310-z"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1140/epjqt/s40507-025-00310-z.pdf"
      }
    ],
    "image": "/images/research/covers/aied-172-backfill.png",
    "imageAlt": "Two students and an instructor inspect polarizer components while comparing an annotated light-path diagram in an optics teaching laboratory.",
    "summaryImage": "/images/research/summary/aied-172-backfill-summary.png",
    "summaryImageAlt": "Two students and an instructor inspect polarizer components while comparing an annotated light-path diagram in an optics teaching laboratory.",
    "summaryAudio": "/audio/research/aied-172-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-173",
    "slug": "news-gpt-6-sol-luna-task-cost-selection",
    "title": "Product news: GPT-6 Sol and Luna broaden lower-cost model choices for educational and research workflows",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-6 Sol",
      "GPT-6 Luna",
      "model evaluation",
      "research costs",
      "educational applications"
    ],
    "shortSummary": "OpenAI released GPT-6 Sol and Luna on September 22, extending its model family with lower-priced options for coding, professional work, and computer use. This September 23 report focuses on choosing a model for a specific educational task. Anthropic's same-day Opus 5.5 release and Gemini's inquiry tools provide context. Token prices matter, but a useful comparison also includes errors, retries, review effort, and what learners are expected to do themselves.",
    "fullSummary": "OpenAI introduced GPT-6 Sol and GPT-6 Luna on September 22, 2026. This September 23 report examines the models' relevance to educational and research workflows, rather than treating the reporting date as their launch. OpenAI positions them as more affordable options for coding, professional work, and computer use. The launch announcement lists API access and selected ChatGPT Work and Codex plans, while noting that the models were not yet available in Chat.\n\nThe two tiers create a practical selection problem. A task that extracts a few fields from a well-structured document may need a different level of capability from one that reconciles conflicting evidence across several sources. Choosing the most expensive model for every step may waste resources; choosing the cheapest without checking its errors can also be costly. The useful unit of comparison is a completed, reviewed task.\n\nAt launch, standard API prices were $2 per million input tokens and $10 per million output tokens for Sol, and $0.10 and $0.50 respectively for Luna. Those prices do not determine the final cost of a workflow. A longer answer, repeated attempts, tool use, and human correction can change the result. Institutions should compare the total effort required to reach an acceptable output under the same task conditions.\n\nA university pilot could select several ordinary activities: organising a supplied reading list, checking a table against its source, and explaining a small piece of code. Reviewers would decide in advance what counts as an error and which qualifications must remain visible. They could then compare models without knowing which produced each response. The exercise should record failure cases as well as successful outputs, rather than showcasing only the best examples.\n\nAnthropic's same-day Opus 5.5 announcement also emphasises efficiency and complex work. Gemini's existing inquiry and learning tools provide a contrasting reminder that task completion is not the only educational objective. OpenAI's new tiers broaden the options, but a cheaper or stronger assistant does not decide which parts of a learning activity should be delegated. Teachers still need to identify the reasoning students must practise themselves.\n\nFor an educational application, model selection may change within one workflow. A relatively simple stage could organise known material, while a harder stage could receive additional scrutiny or a different model. Such routing should remain understandable to the team maintaining the application. When a result fails, they need to know which stage and configuration produced it, rather than assume that a product name describes every action taken.\n\nThe release is therefore an opportunity to make model choice more deliberate. A small evaluation with realistic tasks can reveal where lower cost preserves acceptable quality and where additional capability or human attention is worthwhile. Students can participate by explaining the trade-offs and checking outputs against sources. The strongest educational use would combine broader access with better judgment about when an assistant is sufficient, when it is uncertain, and when the work should remain with a person.",
    "keyTakeaways": [
      "GPT-6 Sol and Luna launched September 22; this article reports them on September 23.",
      "Compare total reviewed task cost, including retries and correction, rather than token prices alone.",
      "Model routing should remain inspectable, while learning design determines what students must practise themselves."
    ],
    "whyItMatters": "More model tiers can improve access when institutions evaluate the actual work and preserve the educational decisions that price comparisons cannot answer.",
    "sourceUrl": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
    "sourceUrls": [
      {
        "label": "OpenAI: Introducing GPT-6 Sol and Luna — 2026-09-22",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "Anthropic: Introducing Claude Opus 5.5 — 2026-09-22",
        "url": "https://www.anthropic.com/claude-opus-5-5"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-23",
    "image": "/images/research/covers/aied-173-backfill.png",
    "imageAlt": "A lecturer and postgraduate compare two anonymous response sheets with a source table while another student records review effort.",
    "summaryImage": "/images/research/summary/aied-173-backfill-summary.png",
    "summaryImageAlt": "A lecturer and postgraduate compare two anonymous response sheets with a source table while another student records review effort.",
    "summaryAudio": "/audio/research/aied-173-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-174",
    "createdAt": "2026-09-24",
    "title": "AI-assisted short-answer grading broadly resembled instructor grading, without testing learning gains",
    "authors": [
      "Tobias Heinrich",
      "Spencer Baily",
      "Kuan-Wu Chen",
      "Jack DeOliveira",
      "Sanghoon Park",
      "Navida Chun-Han Wang"
    ],
    "venue": "PLOS ONE",
    "year": 2025,
    "type": "journal",
    "slug": "ai-assisted-political-science-grading-feedback-trials",
    "tags": [
      "assessment",
      "short-answer questions",
      "AI-assisted grading",
      "instructor oversight",
      "higher education"
    ],
    "shortSummary": "Randomized grading comparisons across political-science courses analyzed 3,080 short-answer responses from 271 students. Instructor-guided GPT-4 prompts broadly resembled human grading on selected evaluation measures, with small and context-dependent differences. Human feedback was slightly more likely to be rated helpful overall. The study evaluates grading and feedback workflows, not student learning or critical-thinking gains, and low regrade-request rates cannot establish that all errors or biases were absent.",
    "fullSummary": "Detailed comments on short answers are valuable but difficult to provide repeatedly in a large class. Tobias Heinrich and colleagues tested whether a language model could extend an instructor's grading approach by using explicit criteria and examples. Their political-science study evaluated the resulting scores, student requests for regrading and perceptions of feedback. The relevant question was whether an AI-assisted workflow could approximate selected aspects of instructor grading at scale, not whether automated scoring should become the final authority over an academic judgment.\n\nThe analysis covered 271 students, twenty-six tests and 3,080 short-answer responses across undergraduate courses in the 2023–2024 academic year. About 88 percent of responses received AI-assisted grading. For each question, randomly selected responses were graded intensively by instructors and used as examples in a prompt that also contained the question, rubric and a new response. GPT-4 then produced a score and written feedback for the remaining answers. Students were informed of the approach and could request human regrading under the course policy.\n\nThe researchers examined three outcomes. First, they tested how closely a short-answer score tracked performance on other assessment items. Second, they analyzed requests for human regrading as a practical signal of grading problems students considered worth contesting. Third, they asked students how helpful they found prior feedback. Random assignment of responses supported comparison of grading methods, but these outcomes capture different aspects of assessment quality. None is a direct test of whether reading the feedback caused subsequent learning or improved critical thinking.\n\nAverage differences between grading methods were generally small, with variation across courses and student subgroups. The pooled difference in score discrimination was not significant. Human-graded responses attracted slightly more regrade requests, while human feedback was modestly more likely to be rated helpful overall. The study therefore supports further investigation of instructor-guided AI grading without establishing that one method is uniformly superior. Similarity on these measures also does not mean that every individual score was correct or that students received equally useful advice in every case.\n\nThe boundaries are especially important because grading affects students. Regrade requests were uncommon and could miss errors that students did not recognize or were reluctant to challenge; the policy also allowed a regrade to lower a score. The trial did not examine ideological bias, favoritism or long-term learning effects. One course contributed almost half the pooled sample, and the proprietary model may be difficult to reproduce after retirement. The experiment evaluated a particular prompt-and-example workflow rather than all forms of automated assessment or high-stakes examination scoring.\n\nFor AIEDHK, a cautious pilot could begin with low-stakes formative responses, explicit rubrics and a human appeal route. Instructors could audit both accepted grades and unchallenged responses, examine subgroup patterns and check whether feedback supports better work on a later task. Learners should understand how the judgment was produced and how to contest it. These are proposed evaluation steps beyond the paper. The useful contribution is evidence about a scalable feedback workflow, with responsibility for assessment quality and evidence of learning still requiring separate human judgment and measurement.",
    "keyTakeaways": [
      "The analysis included 271 students,26 tests and 3,080 short-answer responses; about 88 percent were graded with GPT-4 assistance.",
      "Selected grading measures were broadly similar, with small differences and course-level variation; human feedback was slightly more often rated helpful.",
      "The study did not test learning gains or ideological bias, and low regrade requests do not prove an absence of errors."
    ],
    "whyItMatters": "AIEDHK can distinguish grading-workflow evidence from evidence of educational benefit. Any pilot should include an explicit rubric, human review and appeal, and an independent test of whether feedback improves later work.",
    "sourceUrl": "https://doi.org/10.1371/journal.pone.0328041",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328041"
      },
      {
        "label": "Author data and replication code",
        "url": "https://osf.io/7auxr/"
      }
    ],
    "image": "/images/research/covers/aied-174-backfill.png",
    "imageAlt": "A professor and teaching assistant compare a short-answer rubric, annotated responses and a laptop feedback draft while recording a justification.",
    "summaryImage": "/images/research/summary/aied-174-backfill-summary.png",
    "summaryImageAlt": "A professor and teaching assistant compare a short-answer rubric, annotated responses and a laptop feedback draft while recording a justification.",
    "summaryAudio": "/audio/research/aied-174-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-175",
    "slug": "news-claude-tag-personal-connectors-channel-audience",
    "title": "Product news: Claude Tag adds personal connectors in channels, separating source access from the audience for a reply",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Tag",
      "personal connectors",
      "collaborative research",
      "information sharing",
      "team permissions"
    ],
    "shortSummary": "Anthropic's September 24 Claude Tag update lets people use their own connectors for requests in a Slack channel, with controls over how the response is posted. Rollout begins on Team plans, with Enterprise to follow. The distinction matters for educational teams: permission to read a document is not the same as permission to show its contents to everyone in a channel. OpenAI's administration tools and Gemini's course context provide useful comparisons.",
    "fullSummary": "Anthropic announced personal connectors for Claude Tag on September 24, 2026. A person can ask Claude in a Slack channel to use information available through their own connected accounts, alongside the channel's shared tools. The rollout begins on Team plans, with Enterprise to follow. Users can review responses before posting, and Anthropic notes that anything posted is visible to the channel. The update therefore changes both access to information and the responsibility for presenting it.\n\nAn educational team can encounter this distinction during ordinary collaboration. A researcher may have access to a draft that colleagues have not yet seen. A teacher may hold notes that are appropriate for private preparation but not for a whole department. Asking an assistant to consult that material does not automatically make every detail suitable for the audience receiving the answer. The source permission and the communication decision need separate attention.\n\nA proposed training exercise could use fictional documents with different audiences. One might be a public course outline, another an internal planning note, and a third a draft that contains an unconfirmed decision. Participants would decide what a channel summary should include and which points require clarification. They could compare their decisions with an assistant's draft before anything is posted. This keeps the focus on purposeful communication rather than on the mechanics of a connector.\n\nReview should include context as well as sensitive details. A sentence can be harmless in isolation but misleading when removed from the document's qualifications or date. A summary might present an idea as an agreed plan or omit the person responsible for checking it. Educational teams can ask whether the reply preserves the status of each statement, especially when it combines information from several sources with different owners.\n\nOpenAI's Admin plugin exposes supported workspace actions under existing permissions. Gemini in Classroom uses selected course and assignment material to inform study prompts. Compared with these approaches, Claude Tag brings individually accessible context into a shared conversation. The products solve different problems, and none removes the need to decide who should see the resulting information. Convenient retrieval and appropriate sharing are related but distinct capabilities.\n\nThe announcement also distinguishes personal requests from unattended work: scheduled routines use the channel's administrator-provided connectors. That difference matters when a team turns a useful one-off comparison into a recurring process. The information available to the routine may not match what a person supplied during the original conversation. A team should check the actual inputs and audience again rather than assume that the first successful result will repeat unchanged.\n\nFor a research group or teaching department, the update can support more contextual collaboration if people understand these boundaries. A useful practice is to identify the source, the intended audience, and the status of the claim before accepting a shared response. Colleagues should be able to correct a misleading summary and return to the relevant original. The learning opportunity is to make information stewardship visible within everyday teamwork, not merely to connect more accounts.",
    "keyTakeaways": [
      "Team-plan rollout begins September 24; Enterprise availability was still forthcoming in the announcement.",
      "Individual access to a source does not determine whether its contents belong in a channel reply.",
      "Recurring routines use shared channel connectors, so their inputs need to be checked separately."
    ],
    "whyItMatters": "Context-rich collaboration works better when educators and researchers understand both who can retrieve information and who can see the resulting message.",
    "sourceUrl": "https://claude.com/resources/articles/claude-tag-now-supports-personal-connectors-in-channels",
    "sourceUrls": [
      {
        "label": "Anthropic: Personal connectors in Claude Tag channels — 2026-09-24",
        "url": "https://claude.com/resources/articles/claude-tag-now-supports-personal-connectors-in-channels"
      },
      {
        "label": "OpenAI: Admin plugin for ChatGPT Work and Codex — 2026-08-25",
        "url": "https://openai.com/index/introducing-admin-plugin/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-09-24",
    "image": "/images/research/covers/aied-175-backfill.png",
    "imageAlt": "A research team compares a public summary with a sample internal draft while discussing document access and the audience for a shared response.",
    "summaryImage": "/images/research/summary/aied-175-backfill-summary.png",
    "summaryImageAlt": "A research team compares a public summary with a sample internal draft while discussing document access and the audience for a shared response.",
    "summaryAudio": "/audio/research/aied-175-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-176",
    "createdAt": "2026-09-25",
    "title": "AI scribes produced fuller educational feedback notes, but human editing did not remove every error",
    "authors": [
      "Jaideep S. Talwalkar",
      "David Chartash",
      "Lisa Zhang",
      "Michael Makutonin",
      "Conrad W. Safranek",
      "Anne Elizabeth Sidamon-Eristoff",
      "Lee H. Schwamm",
      "Donald S. Wright"
    ],
    "venue": "JMIR Medical Education",
    "year": 2026,
    "type": "journal",
    "slug": "ambient-ai-scribe-educational-feedback-note-quality",
    "tags": [
      "medical education",
      "feedback documentation",
      "AI scribes",
      "human review",
      "faculty workflows"
    ],
    "shortSummary": "A randomized workshop study assigned 13 medical educators to human-only or AI-assisted feedback documentation. AI-assisted narratives scored higher for inclusion of useful feedback elements, but they were much longer and sometimes inaccurate. Review of 117 generated elements found eight mischaracterizations and two hallucinations; editing reduced most mischaracterizations but did not remove the two hallucinations. The study measured documentation quality and workload, not subsequent student competence or clinical outcomes.",
    "fullSummary": "Good verbal feedback can lose detail when an educator later turns it into a written note. Jaideep Talwalkar and colleagues tested whether an ambient AI scribe could preserve more of that educational conversation. Their study took place in a medical interviewing workshop using standardized patients. The AI was asked to summarize feedback that had actually been spoken, not to invent a new assessment of the learner. That distinction makes factual fidelity to the source conversation central to evaluating the workflow.\n\nThirteen clinician educators were randomized to human-only or AI-assisted documentation. The workshop involved 102 first-year medical students who attended, and feedback forms were submitted for 94 of them. In the AI condition, a scribe generated a transcript of the interview and feedback exchange. A private GPT-4o instance within the university's infrastructure then extracted educational feedback, which instructors reviewed and edited before submission. The comparison instructors wrote their narratives without AI assistance. The intervention therefore combined recording, summarization and human editing rather than replacing the educator's observation.\n\nResearchers rated human-only, unedited AI and human-edited AI narratives using a five-point feedback-quality instrument. Median scores were two for human-only notes and three for both AI-assisted forms. AI-assisted notes were also substantially longer. Their higher scores indicate that more of the instrument's feedback elements were explicitly documented, but do not establish that the additional detail was always accurate, necessary or useful to the student. A well-structured narrative and a faithful account of what happened are related but separate qualities.\n\nA factuality review of 117 generated feedback elements found eight mischaracterizations and two hallucinations. Editing reduced the mischaracterizations to one, but the two hallucinations remained in the reviewed sample. This is a concrete reason not to treat a human-editing step as an automatic guarantee of accuracy. Task-load and usability scores did not differ significantly between conditions, with wide uncertainty and challenging ratings in both groups. The study does not establish a time-saving benefit merely because it found no statistically significant workload difference.\n\nThe trial was small and limited to one institution and workshop format. Instructors were the randomized units, and a modest number of educators produced many individual notes. Raters were formally blinded, but could usually identify whether a narrative had AI assistance, partly because the writing differed markedly. Only a subsample received detailed factuality review. The research did not measure whether students understood, used or benefited from the notes on a later encounter. It therefore supports evaluating a documentation workflow, not claims about improved clinical competence or patient outcomes.\n\nFor AIEDHK, the broader application is preserving feedback in supervised practice settings without losing its evidential basis. A pilot could require each substantive comment to be traceable to an observed action or recorded exchange, and ask the educator to correct unsupported interpretations before sharing the note. A later learner task could establish whether the feedback changed performance. These are proposed steps beyond the trial. The useful opportunity is better capture of educational detail, with source fidelity, review burden and learner benefit assessed separately rather than assumed from the length or polish of the generated document.",
    "keyTakeaways": [
      "Thirteen educators were randomized to documentation workflows; AI-assisted notes contained more rated feedback elements.",
      "In 117 reviewed elements, eight mischaracterizations and two hallucinations appeared; editing left one mischaracterization and both hallucinations.",
      "No significant workload or usability advantage was established, and subsequent learner or clinical outcomes were not measured."
    ],
    "whyItMatters": "AIEDHK can use AI to help capture observed feedback while requiring each important statement to remain grounded in the source interaction. More complete documentation should not be confused with verified accuracy or improved learner performance.",
    "sourceUrl": "https://doi.org/10.2196/89996",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://mededu.jmir.org/2026/1/e89996/"
      },
      {
        "label": "Publisher-listed earlier preprint and first-publication record",
        "url": "https://preprints.jmir.org/preprint/89996"
      }
    ],
    "image": "/images/research/covers/aied-176-backfill.png",
    "imageAlt": "A medical educator and two adult students compare an interviewing observation checklist with generated feedback and an annotated reflection sheet.",
    "summaryImage": "/images/research/summary/aied-176-backfill-summary.png",
    "summaryImageAlt": "A medical educator and two adult students compare an interviewing observation checklist with generated feedback and an annotated reflection sheet.",
    "summaryAudio": "/audio/research/aied-176-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-177",
    "slug": "news-claude-plugin-submission-reusable-teaching-tools",
    "title": "Product news: Claude opens a plugin submission portal, giving educational developers a clearer route from prototype to distribution",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude plugins",
      "educational development",
      "reusable tools",
      "software review",
      "tool evaluation"
    ],
    "shortSummary": "Anthropic opened a developer submission portal for Claude plugins on September 25, bringing submission checks, review feedback, publication control, and usage analytics into one process. Plugins can package connectors and reusable skills. For educational developers, the new route makes distribution more concrete, but directory approval does not establish classroom suitability. OpenAI's developer-learning paths and Gemini's practical training provide complementary ways to think about evaluation, maintenance, and the people a tool is intended to serve.",
    "fullSummary": "Anthropic announced a plugin submission portal on September 25, 2026. Developers on paid Claude plans can submit extensions, receive automated checks and review feedback, and choose when to publish after approval. Plugins can package connectors, reusable skills, or both. The update gives builders a clearer path into the Claude directory, but it does not establish that an approved extension has been evaluated for a particular course, age group, or educational purpose.\n\nFor educational developers, distribution changes the scale of responsibility. A prototype used by its author can rely on explanations given in person. A tool installed by another teacher needs to communicate its purpose, expected inputs, and limitations on its own. It should behave sensibly when a file is missing, a source is unavailable, or the user asks for something outside its intended scope. Those situations belong in development before the listing becomes public.\n\nA small university team might build a tool that checks a supplied bibliography for incomplete fields. The first version could work on the team's own examples, yet fail on another discipline's sources or a bilingual document. A useful evaluation would include those cases and explain what the tool does not determine. Finding a complete-looking citation is different from confirming that the source exists or supports the claim in the text.\n\nReusable instructions also need maintenance. A skill can encode a good workflow, but the surrounding application, source format, or institutional expectation may change. The developer should make it possible to identify the version used and understand consequential updates. Teachers who rely on the tool need a way to report a failure without exposing student work unnecessarily. A public listing is the beginning of that relationship, not the end of development.\n\nOpenAI's September Academy expansion includes a developer pathway covering evaluation and operating AI applications. Google's Gemini-related educator training offers a complementary view from teaching practice. These resources can help a team connect technical testing with the activity a teacher is trying to support. Anthropic's portal adds a distribution process; the institution still needs to decide whether the extension fits its users and evidence requirements.\n\nUsage analytics can help identify where a tool is being found or installed, but they should not be read as measures of learning. Many installations may reflect curiosity, while a smaller number of sustained users may reveal a valuable niche. Developers can pair those signals with specific reports: which task was attempted, where the result failed, and what the user needed instead. That information is more useful for improvement than popularity alone.\n\nAn educational extension is ready for wider use when someone outside the original team can understand, test, and question it. A clear description, realistic examples, visible limitations, and a correction route all contribute to that readiness. The new portal makes the publication process easier to follow. For educators building tools, the more important achievement is a reusable activity that colleagues can adopt with an informed understanding of what it does and what still requires their judgment.",
    "keyTakeaways": [
      "The September 25 portal supports plugin submission, review, publication, and usage monitoring.",
      "Directory approval should be distinguished from suitability for a specific educational activity.",
      "Test unfamiliar inputs, document limits, and maintain a correction route as the tool reaches new users."
    ],
    "whyItMatters": "Educational tool distribution becomes more responsible when the workflow, evidence limits, and maintenance expectations are understandable beyond the original developer.",
    "sourceUrl": "https://claude.com/resources/articles/build-plugins-for-claude",
    "sourceUrls": [
      {
        "label": "Anthropic: Build plugins for Claude — 2026-09-25",
        "url": "https://claude.com/resources/articles/build-plugins-for-claude"
      },
      {
        "label": "OpenAI: New Academy learning paths — 2026-09-21",
        "url": "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-09-25",
    "image": "/images/research/covers/aied-177-backfill.png",
    "imageAlt": "A student developer demonstrates a bibliography-checking prototype while a librarian and lecturer compare three source cards and a reference page.",
    "summaryImage": "/images/research/summary/aied-177-backfill-summary.png",
    "summaryImageAlt": "A student developer demonstrates a bibliography-checking prototype while a librarian and lecturer compare three source cards and a reference page.",
    "summaryAudio": "/audio/research/aied-177-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-178",
    "createdAt": "2026-09-26",
    "title": "Guided AI dialogue was followed by more developed reading questions, with task order limiting causal interpretation",
    "authors": [
      "Xiaoyu Zhao",
      "Guili Kong",
      "Hui Zhou",
      "Liting Liao",
      "Xiuhan Li"
    ],
    "venue": "Smart Learning Environments",
    "year": 2026,
    "type": "journal",
    "slug": "guided-ai-dialogue-reading-question-quality",
    "tags": [
      "digital reading",
      "question generation",
      "dialogue learning",
      "learner agency",
      "AI scaffolding"
    ],
    "shortSummary": "A within-student study of 112 undergraduates compared questions written after ordinary digital reading with questions written after a second reading supported by ERNIE Bot dialogue. The AI-supported phase produced more questions and higher rated question quality. Dialogue patterns also differed by performance. Because all students encountered the ordinary reading first and a different AI-supported text second, the evidence cannot separate assistance from order, practice and text effects or establish independent transfer.",
    "fullSummary": "An educational assistant can be designed to help a reader ask a better question instead of simply supplying an answer. Xiaoyu Zhao and colleagues studied this possibility through a guided dialogue mode built around ERNIE Bot. After reading, students proposed questions for classmates, and researchers examined how numerous, clear and cognitively demanding those questions were. This places a learner-generated artifact at the center of evaluation, while raising an important design question: does improved questioning during support carry over when the support is absent?\n\nThe instructional quasi-experiment involved 112 sophomore students at a university in central China. Each student first read one article in a general digital-reading mode and posted questions. After a break, the student read a second article and engaged in AI-supported dialogue before completing the same kind of question-generation task. Experts selected texts considered comparable in length, relevance and conceptual demand. Nevertheless, the ordinary reading always preceded the AI-supported reading, so mode, text and order were not independently varied.\n\nThe agent was designed to encourage inquiry through examples, follow-up prompts, counter-questions and evaluative feedback, rather than simply return direct answers. Learners retained some control over how they responded or redirected the conversation. Researchers collected 1,234 student-generated questions and 579 dialogue segments, then coded the questions for cognitive level and features such as clarity, relevance and logical structure. They also used sequence analysis to examine how learners combined dialogue strategies. These measures describe questioning performance and observed interaction, not the full internal process of comprehension.\n\nStudents produced an average of 5.90 questions after the AI-supported phase, compared with 5.13 after general reading. Rated overall question quality was also higher, with reported means of 5.86 and 5.18 on the study's eight-point scale. Higher-performing questioners showed different patterns of reflection, evaluation and adjustment in their dialogue. The findings suggest that a scaffolded conversation can be a useful setting for practicing inquiry. However, associations between dialogue patterns and question quality do not establish that a particular strategy independently caused the difference.\n\nThe design warrants a restrained conclusion. Repeating the task may help students understand what is expected, and the second text may elicit different questions even if experts regard the texts as comparable. There was no counterbalanced sequence to separate these influences. The short activity also did not test autonomous transfer, stable metacognitive regulation or later questioning without AI. Coding reliability supports consistency of the ratings, but cannot resolve those design limitations. The result is evidence of stronger observed performance in the supported phase, not proof of a durable increase in a general questioning ability.\n\nFor AIEDHK, a useful next study would reverse the order for some learners and include a third, unfamiliar text read without assistance. Teaching could ask students to identify what a question assumes, explain why it matters and connect it to a specific passage. Teachers could assess the quality of those justifications rather than reward the number of questions alone. These are proposed extensions beyond the paper. The practical opportunity is to make inquiry visible and teachable, while checking whether the learner can continue to formulate worthwhile questions after the conversational support has been removed.",
    "keyTakeaways": [
      "All 112 students completed general reading first and AI-supported reading of a different text second.",
      "The supported phase yielded more questions and higher rated quality, but mode was confounded with order and text.",
      "Dialogue sequences are process associations; the study did not test delayed autonomous questioning or stable metacognitive gains."
    ],
    "whyItMatters": "AIEDHK can ask learners to generate and justify questions as a visible inquiry outcome. Counterbalanced tasks and later unaided reading would help distinguish an immediate scaffold benefit from a transferable capability.",
    "sourceUrl": "https://doi.org/10.1186/s40561-026-00455-z",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1186/s40561-026-00455-z"
      },
      {
        "label": "Author research data",
        "url": "https://doi.org/10.6084/m9.figshare.28938359"
      }
    ],
    "image": "/images/research/covers/aied-178-backfill.png",
    "imageAlt": "Two university students and a teacher compare an annotated article with three question cards during a reading seminar.",
    "summaryImage": "/images/research/summary/aied-178-backfill-summary.png",
    "summaryImageAlt": "Two university students and a teacher compare an annotated article with three question cards during a reading seminar.",
    "summaryAudio": "/audio/research/aied-178-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-179",
    "slug": "news-claude-marketplace-institutional-tool-fit",
    "title": "Product news: Claude Marketplace gathers extensions and services, making educational tool selection a task-fit decision",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Marketplace",
      "educational tools",
      "institutional selection",
      "AI ecosystems",
      "workflow fit"
    ],
    "shortSummary": "Anthropic launched Claude Marketplace on September 23, bringing connectors, plugins, agents, products, and service partners into a common discovery destination. This September 26 report focuses on what an educational institution should compare when exploring that catalogue. OpenAI's role-based learning paths and Gemini's education partnerships provide context. A listing can make a tool easier to find, but its value depends on the task, required access, support, and evidence of useful performance.",
    "fullSummary": "Anthropic launched Claude Marketplace on September 23, 2026, bringing several kinds of partner offering into a common discovery destination. The catalogue includes plugins and connectors, Claude-powered products and agents, and service partners. This September 26 report examines the implications for educational organisations. The marketplace changes how options are found; it does not turn every listing into the same kind of product or establish its suitability for a school or research team.\n\nThose categories matter because they solve different problems. A connector provides access to a source or action. A reusable workflow packages a way of doing a task. A separate product may have its own interface and operating model, while a service partner helps an organisation implement something. Comparing them only by a short description can hide the work an institution must still do. The first question should be what problem needs solving.\n\nA department might want help organising approved course materials. Before exploring tools, it could define the users, the material that may be read, the output required, and the decisions that remain with staff. That brief makes it possible to distinguish a helpful extension from one that offers impressive but unnecessary capabilities. It also gives reviewers a basis for deciding whether an existing institutional tool already meets the need.\n\nA small trial should use a task that staff can check directly. For example, a candidate tool might produce a source-linked overview from several public documents. Reviewers could inspect missing items, incorrect attributions, and the handling of contradictory information. They should also examine what happens when access is removed or a document changes. A successful demonstration on a hand-picked example is only a starting point for understanding operational fit.\n\nOpenAI's new Academy pathways separate learning needs for developers, leaders, educators, and students. Google's Missouri partnership connects Gemini access with training and local institutional choice. These developments provide a useful comparison with Anthropic's marketplace: discovering a tool is one part of adoption, while people still need the knowledge and support to use it appropriately. A catalogue cannot decide those responsibilities for them.\n\nInstitutions should keep the comparison understandable to the people who will use the result. Staff need to know which accounts or files a tool relies on, who maintains it, and how they can get help. They should be able to stop using a poor fit without losing the core materials for their work. A narrowly useful tool with clear support can be a better choice than a broad one whose behaviour is difficult to explain.\n\nThe marketplace's practical benefit is easier discovery across an expanding ecosystem. For an educational team, a defensible selection record would connect the chosen offering to a defined task, a checked trial, and a plan for support and review. That record can be revisited when the product changes or the institution's needs develop. The aim is to expand useful capability while keeping the reasons for each choice visible to colleagues.",
    "keyTakeaways": [
      "The September 23 marketplace groups different offerings; a connector, product, and service partner are not interchangeable.",
      "Define the educational task and evidence requirements before comparing listings.",
      "Use a checked trial and clear support expectations to justify adoption beyond a demonstration."
    ],
    "whyItMatters": "A larger AI ecosystem is useful to institutions when it leads to better-matched tools and understandable choices, rather than simply more installations.",
    "sourceUrl": "https://claude.com/resources/articles/claude-marketplace",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude Marketplace launch — 2026-09-23",
        "url": "https://claude.com/resources/articles/claude-marketplace"
      },
      {
        "label": "OpenAI: New Academy learning paths — 2026-09-21",
        "url": "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/"
      },
      {
        "label": "Google: Missouri AI and career-training partnership — 2026-09-08",
        "url": "https://blog.google/products-and-platforms/products/education/missouri-state-education-partnership/"
      }
    ],
    "createdAt": "2026-09-26",
    "image": "/images/research/covers/aied-179-backfill.png",
    "imageAlt": "A coordinator, instructor and student representative compare three tool-purpose cards with a course example and an access checklist.",
    "summaryImage": "/images/research/summary/aied-179-backfill-summary.png",
    "summaryImageAlt": "A coordinator, instructor and student representative compare three tool-purpose cards with a course example and an access checklist.",
    "summaryAudio": "/audio/research/aied-179-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-180",
    "createdAt": "2026-09-27",
    "title": "A primary mathematics AI pilot reported before-and-after gains, with comparative effectiveness still unclear",
    "authors": [
      "Jingxi Liu",
      "Daner Sun",
      "Jin Sun",
      "Jingyun Wang",
      "Philip Leung Ho Yu"
    ],
    "venue": "Computers and Education: Artificial Intelligence",
    "year": 2025,
    "type": "journal",
    "slug": "primary-mathematics-ai-word-problem-pilot-evidence",
    "tags": [
      "primary mathematics",
      "word problems",
      "AI scaffolding",
      "learning-system design",
      "evaluation quality"
    ],
    "shortSummary": "A ChatGPT-supported word-problem system was studied in two fifth-grade classes totaling 104 pupils. The detailed performance analysis reported gains among 49 AI-group pupils after three post-task outliers were removed. Although the abstract describes a comparative advantage, the main results present a within-group paired analysis rather than a clear between-group effect. The paper offers a learning-system design and preliminary task evidence, while leaving stronger claims about comparative and lasting effectiveness unresolved.",
    "fullSummary": "Primary-school word problems require students to connect language with a mathematical representation, choose a strategy and check whether an answer makes sense. Jingxi Liu and colleagues designed ChatGPT-MPS to support that process through structured guidance and opportunities to compare solutions. Their paper describes both system development and a classroom pilot. Reading the detailed analysis, however, is essential: the evidence it reports is narrower than the comparative effectiveness claim made in the abstract, and that distinction should shape any practical interpretation.\n\nThe study involved 104 fifth-grade pupils from two existing classes in Guangdong, China. One class of 52 used the system and another class of 52 served as a comparison. Assignment followed class membership rather than individual randomization. The AI group received a ten-minute introduction and worked for 40 minutes on twelve curriculum-aligned word problems with step-by-step support. The comparison class worked on the same problem set under the same time constraint without the system. The design therefore began with a potentially informative classroom comparison.\n\nThe main performance results nevertheless focus on the AI class alone. After removing three post-task outliers, the paired analysis included 49 pupils. Their mean score rose from 56.45 to 72.59, a gain of 16.14 points. This is a reported before-and-after change within the participating class. The main results do not present a clear between-group estimate supporting the abstract's statement that the experimental group improved more than the comparison group. A significant paired test cannot substitute for that comparison, because practice, instruction and other changes could also contribute to improvement.\n\nThe system itself offers useful design ideas. It organizes guidance for primary-level problems, preserves learning records and allows learners to access more than one solution method. Students also completed an interest questionnaire, whose results linked perceived value, knowledge and engagement with interest in the system. These are perceptions measured together, rather than independent evidence that the tool caused motivation or conceptual growth. Comparing approaches could support reasoning, but only if learners understand and can explain why a method fits the problem rather than merely read a generated procedure.\n\nThe study's short activity, single school and intact-class allocation restrict generalization. The removal of three observations also makes the reported analytic sample important. The paper does not establish delayed retention or performance on an unfamiliar problem without assistance, and the detailed results do not resolve comparative effectiveness. System responsiveness and positive interest ratings are relevant to feasibility, but cannot validate every generated explanation or demonstrate durable mathematical understanding. The appropriate conclusion is preliminary evidence of an immediate task-score change within a designed learning environment.\n\nFor AIEDHK, a follow-up evaluation could retain the system's structured guidance while reporting both classes' baseline and follow-up results transparently. A prespecified analysis should account for class allocation and document missing data or outlier decisions. Learners could also explain a solution, identify an incorrect step and solve a new problem without AI after a delay. These are proposed improvements beyond the reported pilot. The practical contribution is a reviewable design for supporting word-problem work, with a clear need for stronger evidence before claiming that the system outperforms conventional teaching or builds independent problem-solving skill.",
    "keyTakeaways": [
      "The pilot involved 104 pupils in two intact classes, but the detailed paired performance analysis concerned 49 AI-group pupils.",
      "The reported mean gain was 16.14 points after three post-task outliers were removed; this is a within-group change.",
      "A clear comparative effect and delayed independent transfer were not established in the main results, despite the stronger abstract wording."
    ],
    "whyItMatters": "AIEDHK can preserve useful learning-system ideas while checking whether the reported analysis supports the headline. Before-and-after gains, positive perceptions and a described comparison group are not substitutes for a transparent between-group evaluation.",
    "sourceUrl": "https://doi.org/10.1016/j.caeai.2025.100438",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.sciencedirect.com/science/article/pii/S2666920X25000785"
      },
      {
        "label": "Open institutional copy of the publisher full article",
        "url": "https://rims.khazar.org/bitstreams/4c7cc63b-e0eb-42d1-b657-13ec7524594a/download"
      }
    ],
    "image": "/images/research/covers/aied-180-backfill.png",
    "imageAlt": "A teacher and two pupils discuss part-whole bar models for a shopping word problem while one pupil records the reasoning.",
    "summaryImage": "/images/research/summary/aied-180-backfill-summary.png",
    "summaryImageAlt": "A teacher and two pupils discuss part-whole bar models for a shopping word problem while one pupil records the reasoning.",
    "summaryAudio": "/audio/research/aied-180-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-181",
    "slug": "news-lowes-ai-guidance-workplace-learning",
    "title": "Industry news: Lowe's AI assistants illustrate the difference between immediate guidance and lasting workplace learning",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "workplace learning",
      "Mylow",
      "vocational education",
      "expertise",
      "AI assistance"
    ],
    "shortSummary": "OpenAI's September 25 Lowe's case describes AI assistants that help customers and store associates work through project questions. This September 27 report considers the implications for vocational learning. The account shows a route to guidance during work, not a measured increase in employees' independent expertise. Anthropic's small-business workflows and Gemini's practical learning tools provide comparisons for designing support that helps people understand a decision rather than only obtain an answer.",
    "fullSummary": "OpenAI published a Lowe's case on September 25, 2026 describing Mylow and Mylow Companion, assistants for customers and store associates. The company account emphasises conversational project guidance, including voice access for staff while they help customers. This September 27 report examines the workplace-learning question raised by that design. The case describes use and business experience; it does not establish that employees developed lasting expertise because an assistant answered their questions.\n\nReceiving help during a task and learning from that help are related but different outcomes. A worker may complete an unfamiliar activity successfully while still being unable to explain the decision later. Another may use the answer to connect a new case with existing experience. A training programme should decide which of these outcomes it expects and what evidence would show that the expectation was met.\n\nVocational educators can explore the distinction with a simulated customer conversation. A learner first clarifies what the customer is trying to achieve, then consults a supplied knowledge resource or an assistant. The learner must explain which information is relevant and what remains unknown. An instructor can change one detail and ask how the recommendation should change. This tests whether the learner is interpreting the situation rather than repeating the first plausible response.\n\nThe case also draws attention to experienced workers. Expertise does not mean knowing every product or procedure, and an assistant may be useful when someone moves beyond their usual area. Training can therefore focus on recognising the limits of one's knowledge and identifying when another person is needed. A confident answer should not remove the option to ask a colleague with relevant experience.\n\nAnthropic's September small-business expansion packages recurring work into reusable workflows, while Gemini's established learning tools offer guided support and practice. Compared with OpenAI's retail case, these examples show different ways of making information available at the moment of need. The educational design question remains whether the person can understand, question, and adapt the guidance. Convenience alone cannot answer it.\n\nA workplace pilot could examine several forms of evidence. It might record whether a question was resolved correctly, whether the employee could explain the reason, and whether they handled a related case later with less help. Customer experience and business measures can be considered separately. The comparison should use tasks of similar difficulty. This would avoid interpreting a commercial result as proof of learning, while still recognising that timely guidance can be useful for the work itself.\n\nThe practical lesson for colleges and employers is to build a small reflective step into assisted work. A learner might note what they asked, which part of the answer they checked, and what they would do differently next time. The record can be brief and focused on the decision. Lowe's provides a current example of AI guidance embedded in everyday service; educators can use it to ask how immediate support becomes an opportunity to develop judgment over time.",
    "keyTakeaways": [
      "The September 25 case describes workplace guidance, not a causal test of employee learning.",
      "Use changed scenarios to check whether a learner understands the reason behind an assisted answer.",
      "Evaluate immediate task success and later independent judgment as separate outcomes."
    ],
    "whyItMatters": "AI at work can support vocational learning when guidance is followed by explanation, adaptation, and reflection on the decision made.",
    "sourceUrl": "https://openai.com/index/lowes/",
    "sourceUrls": [
      {
        "label": "OpenAI: Lowe's project-guidance assistants — 2026-09-25",
        "url": "https://openai.com/index/lowes/"
      },
      {
        "label": "Anthropic: Small-business workflows and training expansion — 2026-09-15",
        "url": "https://claude.com/resources/articles/claude-for-small-business-launches-new-workflows-integrations-and-training-programs"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-09-27",
    "image": "/images/research/covers/aied-181-backfill.png",
    "imageAlt": "A trainer and two adult learners compare a fictional room project, paint swatches and sample boards with a tablet checklist.",
    "summaryImage": "/images/research/summary/aied-181-backfill-summary.png",
    "summaryImageAlt": "A trainer and two adult learners compare a fictional room project, paint swatches and sample boards with a tablet checklist.",
    "summaryAudio": "/audio/research/aied-181-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-182",
    "createdAt": "2026-09-28",
    "title": "Students preferred AI design feedback in a small study, while improvements in design quality were not established",
    "authors": [
      "Tanja Katharina Schmitt-Fumian",
      "Selina Tauscher",
      "Katja Thoring"
    ],
    "venue": "Proceedings of the Design Society (ICED25)",
    "year": 2025,
    "type": "conference",
    "slug": "ai-human-design-feedback-student-perceptions",
    "tags": [
      "design education",
      "formative feedback",
      "human-AI collaboration",
      "ideation",
      "student perceptions"
    ],
    "shortSummary": "An ICED 25 study asked 25 students to compare GPT-4 feedback with comments from human educators on a design-ideation task. Students generally rated the AI comments more positively for support, clarity and organization. Feedback order was randomized, and interviews explored the reasons for preferences. The study measured reception of textual comments, not independently rated improvements in designs or later creative ability, and substantial prompt-development work preceded the comparison.",
    "fullSummary": "Feedback can feel encouraging and well organized without necessarily improving the idea it addresses. Tanja Katharina Schmitt-Fumian, Selina Tauscher and Katja Thoring examined how design students received comments generated by GPT-4 compared with comments written by educators. Presented at ICED 25, the study offers a focused look at feedback reception during ideation. Its strongest contribution is understanding what students valued in the comments, while the effect of those comments on subsequent design quality remains a different question.\n\nTwenty-five students developed an idea for a startup intended to reduce academic stress. The task began with rapid idea generation and a short refinement period. Six human educators and GPT-4 then provided textual feedback using a common structure addressing strengths, areas for improvement and further development. Each student received both sources of feedback. Presentation order was randomized, with thirteen seeing human feedback first and twelve seeing AI feedback first. Students completed a survey and a recorded interview about their experience of the comments.\n\nThe AI setup was not an untouched default chatbot. Before the main comparison, the researchers iteratively refined its prompts to produce appropriate feedback and make the source less obvious to readers. The intended comment length was 150 words, and the feedback was structured around the same core categories for humans and AI. This preparation is part of the intervention. Any claim about speed or scalability should therefore distinguish rapid generation of an individual response from the earlier work needed to define, calibrate and review a suitable feedback approach.\n\nStudents generally gave more favorable ratings to AI comments across the measured dimensions, including supportiveness, inspiration, coherence and organization. Interviews helped explain the appeal of a consistently positive tone and explicit structure. These results suggest features that educators might also adopt in their own feedback. They do not demonstrate that agreement, encouragement or perceived correctness reliably identifies a better critique. A challenging comment may be less comfortable yet reveal a genuine weakness, and an agreeable AI response may be easy to accept without improving the underlying design.\n\nThe study was small and conducted outside a normal graded project. Educators and students did not know one another, and the analysis focused on textual feedback and student perceptions. It did not establish changes in independently rated design quality, transfer to a later ideation task or a sustained increase in creative capability. The authors also question how well AI can challenge assumptions rather than soften its response. Those limits make this exploratory evidence about feedback reception, not a basis for replacing the contextual judgment of a design teacher.\n\nFor AIEDHK, a useful next step would pair perception measures with revision evidence. Students could identify which comment prompted a change, explain the reason for accepting or rejecting it, and submit the revised idea for independent assessment. A teacher could examine whether the feedback exposed a weak assumption or merely improved presentation. These are proposed extensions beyond the study. The practical opportunity is to combine clear, constructive feedback with substantive critique, and to evaluate whether that combination helps learners make stronger design decisions rather than only feel more supported.",
    "keyTakeaways": [
      "Twenty-five students compared AI and human comments on the same ideation task, with feedback order randomized.",
      "AI comments received more favorable student ratings for qualities such as support and organization.",
      "The study did not establish better designs or lasting creativity, and prompt optimization was part of the preparation."
    ],
    "whyItMatters": "AIEDHK can learn from the clarity and structure students value in feedback while testing actual revisions separately. Positive reception should complement, rather than stand in for, evidence that a critique improves the learner’s decisions.",
    "sourceUrl": "https://doi.org/10.1017/pds.2025.10057",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/ai-vs-human-exploring-the-potential-of-generative-ai-as-a-feedback-tool-to-support-ideation-in-design-education/B7B047299B4E271B91BC639843BEDE3F"
      },
      {
        "label": "Open conference full PDF",
        "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B7B047299B4E271B91BC639843BEDE3F/S2732527X25100576a.pdf/ai-vs-human-exploring-the-potential-of-generative-ai-as-a-feedback-tool-to-support-ideation-in-design-education.pdf"
      }
    ],
    "image": "/images/research/covers/aied-182-backfill.png",
    "imageAlt": "A lecturer and two design students compare a service storyboard with annotated feedback sheets while a student records revision ideas.",
    "summaryImage": "/images/research/summary/aied-182-backfill-summary.png",
    "summaryImageAlt": "A lecturer and two design students compare a service storyboard with annotated feedback sheets while a student records revision ideas.",
    "summaryAudio": "/audio/research/aied-182-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-183",
    "slug": "news-claude-sonnet-5-5-everyday-educational-work",
    "title": "Product news: Claude Sonnet 5.5 targets faster everyday work, with task boundaries still central to educational use",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Sonnet 5.5",
      "model selection",
      "teacher preparation",
      "research workflows",
      "AI evaluation"
    ],
    "shortSummary": "Anthropic released Claude Sonnet 5.5 on September 28, positioning it as a faster, lower-cost complement to Opus 5.5 for well-defined work. The company reports improvements in coding, documents, and communication, with efficiency gains dependent on the task. OpenAI's recently released GPT-6 Sol and Luna and Gemini's course-connected support provide context. Educational teams should evaluate the work they actually need, including the review required before a draft becomes usable.",
    "fullSummary": "Anthropic introduced Claude Sonnet 5.5 on September 28, 2026, the second model in its 5.5 family. The company positions it as a faster, lower-cost complement to Opus 5.5 for well-scoped tasks, coding fixes, and document work. It reports output generation more than 30% faster than Sonnet 5 and up to 30% lower cost for most work. Those are vendor-reported comparisons, not guaranteed savings for every course or research workflow.\n\nThe emphasis on well-defined work is useful for educators. A teacher asking for several examples of a concept can specify the intended audience, source material, and errors the examples should help students recognise. A broad request to improve an entire course leaves more decisions implicit. The model's speed matters less if the teacher has to reconstruct what it assumed about the curriculum after reading the output.\n\nA preparation task could therefore begin with a small, checked source and a clear purpose. For instance, a lecturer might ask for alternative explanations of a statistical idea while requiring the same definition and assumptions in every version. Colleagues would check whether the differences are in presentation or in substance. A shorter or more fluent explanation can still be misleading if it removes the condition under which the statement is true.\n\nThe same distinction applies to research documents. An assistant may reorganise a report, improve headings, or make a table easier to read without being authorised to change the interpretation. Reviewers need to know whether a revision altered the evidence, the wording, or both. A useful comparison preserves the original and records consequential changes, so clarity does not come at the cost of an unnoticed shift in meaning.\n\nOpenAI's GPT-6 Sol and Luna, released on September 22, also broaden the range of lower-cost models for professional and technical work. Gemini's course-connected learning support offers a different reference point: a tool can be designed around a learner's material and task. Anthropic's Sonnet release adds another option, but the right comparison depends on what the user needs to produce or understand, rather than a single overall ranking.\n\nA department can test a few representative tasks before changing its default model. Reviewers might examine factual omissions, adherence to source material, usefulness of explanations, and time spent correcting drafts. The settings and inputs should be recorded, and examples that failed should remain in the comparison. Faster generation may be valuable when it reduces total preparation effort, but speed should be measured separately from the quality of the final material.\n\nFor students, an efficient assistant should create more room for useful practice rather than quietly take over the central reasoning. A teacher can ask learners to compare two explanations, identify a missing qualification, or revise a draft using evidence. Sonnet 5.5's announcement makes everyday assistance more capable according to Anthropic's tests. The educational opportunity is to pair that capability with precise tasks and a clear account of what a person must still inspect, decide, and learn.",
    "keyTakeaways": [
      "Sonnet 5.5 launched September 28 with vendor-reported speed and workload-efficiency gains.",
      "Define the educational task and preserve source assumptions before comparing model outputs.",
      "Measure correction effort and final material quality separately from generation speed."
    ],
    "whyItMatters": "A faster everyday model is most useful when it helps teachers and researchers complete clearly specified work without obscuring the decisions that require review.",
    "sourceUrl": "https://www.anthropic.com/claude-sonnet-5-5",
    "sourceUrls": [
      {
        "label": "Anthropic: Introducing Claude Sonnet 5.5 — 2026-09-28",
        "url": "https://www.anthropic.com/claude-sonnet-5-5"
      },
      {
        "label": "OpenAI: Introducing GPT-6 Sol and Luna — 2026-09-22",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-09-28",
    "image": "/images/research/covers/aied-183-backfill.png",
    "imageAlt": "A lecturer, research assistant and postgraduate compare two concept explanations and a table of points to check while recording revision notes.",
    "summaryImage": "/images/research/summary/aied-183-backfill-summary.png",
    "summaryImageAlt": "A lecturer, research assistant and postgraduate compare two concept explanations and a table of points to check while recording revision notes.",
    "summaryAudio": "/audio/research/aied-183-backfill-summary.m4a",
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
  },
  {
    "id": "aied-186",
    "createdAt": "2026-09-30",
    "title": "A four-family AI-supported coaching study showed promising shared-reading changes under continuous expert review",
    "authors": [
      "Yusuf Akemoğlu",
      "Zhaohui Li",
      "Qingxiao Zheng",
      "Emily Brooke Roberts",
      "Samar Pratap Singh",
      "Jinjun Xiong"
    ],
    "venue": "Journal of Autism and Developmental Disorders",
    "year": 2026,
    "type": "journal",
    "slug": "paicoach-shared-reading-human-reviewed-parent-support",
    "tags": [
      "inclusive education",
      "shared reading",
      "parent coaching",
      "human-in-the-loop AI",
      "single-case research"
    ],
    "shortSummary": "PaiCoach was evaluated with four mothers and their young autistic children using staggered baseline, coaching and maintenance phases. Parent implementation of communication-support strategies and children's responsiveness increased during the coaching package. However, the package included live training and expert review of every AI output;31.4 percent required editing. The findings support further study of supervised assistance, not autonomous intervention or general effectiveness across autistic children and families.",
    "fullSummary": "AI may help organize feedback about a parent-child learning interaction, but interpreting that interaction requires care. Yusuf Akemoğlu and colleagues evaluated PaiCoach as a support for parents during shared book reading with young autistic children. The system analyzed short videos and drafted feedback connected to specific moments. Trained reviewers checked the outputs before families could access them. The study therefore concerns an AI-assisted professional workflow, with human interpretation built into the intervention rather than added only when something appeared to go wrong.\n\nFour mother-child pairs participated. The children were 45 to 56 months old and used limited expressive language, while continuing their existing support services. A concurrent multiple-baseline design staggered the introduction of the intervention across families. Each pair completed several baseline sessions, six or seven intervention sessions and one or two maintenance observations, over approximately ten to twelve weeks. During baseline, parents recorded ordinary shared reading. The intervention began with an hour of live online training and continued with video-based coaching through PaiCoach.\n\nThe researchers measured how consistently parents implemented the targeted communication-support strategies and how children responded during the observed reading routines. Visual analysis showed increases after the coaching package was introduced, with corresponding improvements in child responsiveness. Maintenance observations occurred about three weeks later with feedback disabled, and offered preliminary evidence that some changes remained. Staggering intervention onset strengthens an individual-level analysis compared with a single before-and-after observation, but four families still provide a narrow basis for generalization.\n\nThe human-review results are central to interpreting the technology. Across 53 reviewed sessions and 879 coded instances, 31.4 percent of AI-generated outputs required editing. Reviewers corrected problems involving timing, strategy identification, fidelity scoring and feedback. Child communication was especially difficult to classify when gestures were obscured or speech overlapped. These are consequential details in a setting where a mistaken interpretation could change the advice a family receives. The published outcomes were based on the reviewed system, not on uncorrected AI output delivered automatically to parents.\n\nThe study cannot separate the effects of initial live training, continued expert-validated feedback, the platform and the AI analysis itself. It also does not establish superiority to conventional coaching, benefits across other routines or sustained changes beyond the brief maintenance period. All participating parents were mothers, and the children and contexts represented only a small part of the diversity of autistic communication. Reported workflow efficiencies came from implementation experience rather than a randomized comparison of staff time. The appropriate conclusion is promising preliminary evidence for a supervised coaching package with substantial ongoing review requirements.\n\nFor AIEDHK, the broader research lesson is to report the whole human-AI workflow and make its review burden visible. Future evaluations could compare coaching approaches, include more families and communication styles, and test whether observed changes extend to meaningful everyday participation. They should also examine which AI errors persist and how corrections affect feedback. These are proposed research directions beyond the study, not guidance to replace a family's existing support. The opportunity lies in assisting professional observation and family learning while preserving human judgment about each interaction and keeping claims proportional to the evidence.",
    "keyTakeaways": [
      "Four mother-child pairs were studied with staggered intervention onset and brief maintenance observations during shared reading.",
      "Observed improvements followed a package including live training and expert-reviewed AI coaching; the AI component was not isolated.",
      "All outputs were checked, and 31.4 percent required editing; the results do not demonstrate autonomous or broadly generalizable intervention effectiveness."
    ],
    "whyItMatters": "AIEDHK can assess AI-supported inclusive education by documenting both learner interaction and the expert work required to interpret it. Small supervised studies are useful early evidence, but they do not justify claims of autonomous capability or universal benefit.",
    "sourceUrl": "https://doi.org/10.1007/s10803-026-07519-6",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10803-026-07519-6"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s10803-026-07519-6.pdf"
      }
    ],
    "image": "/images/research/covers/aied-186-backfill.png",
    "imageAlt": "A mother and preschool child share an illustrated storybook while an early-years educator quietly reviews observation notes nearby.",
    "summaryImage": "/images/research/summary/aied-186-backfill-summary.png",
    "summaryImageAlt": "A mother and preschool child share an illustrated storybook while an early-years educator quietly reviews observation notes nearby.",
    "summaryAudio": "/audio/research/aied-186-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-187",
    "slug": "news-classic-reading-plans-chatgpt-reader-choice",
    "title": "Product news: A ChatGPT Work reading-plan case puts personal interests alongside the effort of reading classics",
    "authors": [
      "OpenAI Academy"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "reading guidance",
      "literature education",
      "ChatGPT Work",
      "reader agency",
      "personalization"
    ],
    "shortSummary": "OpenAI Academy's September 29 profile describes Karen Rodriguez using ChatGPT Work to turn reader surveys into personalised plans for exploring classic literature. This September 30 report considers the educational design behind that use. Anthropic's learning guidance and Gemini's study tools offer comparisons, but a tailored plan is not evidence that reading comprehension has improved. The reader still needs room to choose, question an interpretation, and engage directly with the book.",
    "fullSummary": "OpenAI Academy published a profile of Karen Rodriguez on September 29, 2026, describing her use of ChatGPT Work to create personalised reading plans for Literary Fancy subscribers. The plans draw on readers' interests, prior reading, and available time, and explain why a recommendation may fit. This September 30 report examines that guidance model. It is a practitioner story, not a controlled study of reading engagement, comprehension, or long-term reading habits.\n\nA reading plan can solve a real starting problem. Someone interested in classic literature may not know which book to try first or how to approach an unfamiliar style. A manageable suggestion with a clear reason can make the next step less intimidating. But personalisation should remain open to disagreement. A reader may want to depart from past preferences, try a difficult work, or reject the assistant's account of what they would enjoy.\n\nFor a literature class, the useful question is how guidance leads back to the text. An assistant might suggest a theme to notice, but students should be able to point to the passage that supports or complicates that suggestion. If they begin with a ready-made interpretation, they can actively test it rather than search only for confirming examples. The book remains the source of evidence, while the guide is a provisional aid.\n\nA proposed activity could ask students to compare two possible reading routes through a set of public-domain texts. They would explain which sequence they prefer and what they expect to gain from it. After reading one selection, they would revisit that expectation and revise the plan. This makes the plan responsive to experience rather than a prescription that must be completed to count as success.\n\nAnthropic's Claude Academy approach emphasises agency and deliberate choices about assistance. Gemini's established study tools support guided exploration and practice. OpenAI's profile adds a concrete example of AI used to prepare a reading pathway. The products and contexts differ, but they invite the same educational distinction: organising access to material is not the same as doing the interpretive work that gives reading its value.\n\nTeachers and librarians can also examine whose interests a recommendation system makes visible. A short survey may miss a reader's language preferences, access needs, or wish to encounter an unfamiliar perspective. Asking a follow-up question can be more useful than producing a longer list. The person using the plan should understand the basis of the recommendations and have a simple way to change them.\n\nA meaningful evaluation would look beyond the elegance of the generated guide. Readers might discuss a passage, explain a changed interpretation, or describe why they abandoned one book and chose another. Completion is one possible signal, but thoughtful selection and sustained attention matter too. The case offers a practical way to connect AI assistance with a human reading community. Its strongest educational use would help people begin and continue reading while preserving their authority to make meaning for themselves.",
    "keyTakeaways": [
      "The September 29 profile describes a personalised reading-plan practice, not demonstrated comprehension effects.",
      "Treat AI guidance as provisional and return to passages that support or challenge it.",
      "Let readers revise recommendations as their interests and experience develop."
    ],
    "whyItMatters": "Personalised guidance can support reading when it helps people enter the text and make their own interpretive choices, rather than replacing those choices.",
    "sourceUrl": "https://academy.openai.com/public/blogs/making-the-classics-more-approachable-with-chatgpt-work-2026-09-29",
    "sourceUrls": [
      {
        "label": "OpenAI Academy: Making classics more approachable — 2026-09-29",
        "url": "https://academy.openai.com/public/blogs/making-the-classics-more-approachable-with-chatgpt-work-2026-09-29"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-09-30",
    "image": "/images/research/covers/aied-187-backfill.png",
    "imageAlt": "An intergenerational reading circle discusses an annotated reading plan and passages in open books in a library alcove.",
    "summaryImage": "/images/research/summary/aied-187-backfill-summary.png",
    "summaryImageAlt": "An intergenerational reading circle discusses an annotated reading plan and passages in open books in a library alcove.",
    "summaryAudio": "/audio/research/aied-187-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-188",
    "createdAt": "2026-10-01",
    "title": "Postgraduate readers used AI critiques in different ways, with original-source checking remaining essential",
    "authors": [
      "Haoming Lin",
      "Wei Wei",
      "Bin Zou",
      "Ying Zheng"
    ],
    "venue": "Discover Computing",
    "year": 2026,
    "type": "journal",
    "slug": "genai-critical-reading-source-checking-process-patterns",
    "tags": [
      "academic reading",
      "critical AI literacy",
      "metacognition",
      "postgraduate education",
      "source evaluation"
    ],
    "shortSummary": "An observational study followed 53 postgraduate readers as they revised critiques of academic articles using generated reviews, a chatbot and the original paper. Screen recordings and interviews revealed different patterns of reliance, re-reading and dialogue that varied with the perceived difficulty of the task. The study explains how AI-supported reading can unfold, but without a non-AI comparison or independent transfer assessment it does not establish that the tool improved critical-reading ability.",
    "fullSummary": "An AI critique can introduce a useful perspective on a research paper, but it can also become a substitute for checking what the paper actually says. Haoming Lin and colleagues investigated this tension by observing postgraduate students during AI-assisted academic reading. Their focus was the process: which resources students consulted, how they moved between them and why they chose a particular strategy. This offers a different kind of evidence from a study comparing final scores, and it requires a correspondingly careful interpretation.\n\nFifty-three master's students in English education or applied linguistics at a university in eastern China participated. They were recruited through snowball sampling and already had experience with academic reading and generative AI. Each selected an empirical article, wrote an initial critical review and then revised it with access to a Coze-based tool using DeepSeek R 1. The tool supplied critiques across multiple aspects of the paper and an embedded chatbot, while the original article remained available. Students could decide how to use those resources.\n\nResearchers analyzed screen recordings of the reading and revision activity, then used reflective interviews to explore learners' explanations of their choices. Sequence analysis identified three recurring patterns. One relied mainly on generated critiques with little return to the original article. Another involved repeated comparison between the generated material and the paper. A third included more direct chatbot dialogue, particularly when students were considering whether evidence adequately supported an argument. These patterns describe activities across tasks and should not be treated as fixed categories of learner ability.\n\nInterviews suggested that perceived difficulty shaped the strategy selected. For apparently straightforward aspects, some students focused on recalling content or improving their wording. More challenging issues prompted comparison, verification or dialogue. However, more dialogue did not always mean more direct engagement with the source: students could move between two AI-generated resources while rarely reopening the paper. The result illustrates why a sophisticated-looking discussion can still leave an evidential gap if the model's interpretation is not checked against methods, results and limitations in the original research.\n\nThe study was observational and had no non-AI control group or separate experimental comparison of the tool's functions. Screen behavior indicates visible actions rather than directly revealing comprehension, and retrospective accounts may not capture every reason for a choice. The sample came from one discipline cluster and institution and was predominantly female. The study did not establish a causal improvement in critical-reading skill or test whether strategies transferred independently to a new article. Its value is a detailed description of how learners distribute attention and effort among available resources.\n\nFor AIEDHK, research-reading activities could require a short evidence trail: the AI's claim, the relevant passage or table in the paper, and the reader's reasoned judgment about the match. A learner could also identify one claim that remains uncertain and explain what additional information would resolve it. Later review of a new paper without the tool would help test transfer. These are proposed extensions beyond the study. The practical lesson is to keep the primary source active in the workflow and evaluate the reader's justification, rather than assume that more generated commentary or a longer chatbot conversation represents deeper critical engagement.",
    "keyTakeaways": [
      "The study observed 53 postgraduate readers using generated critiques, an embedded chatbot and original research articles.",
      "Resource-use patterns varied with perceived task difficulty; more AI dialogue did not always involve more original-source checking.",
      "No non-AI control or independent transfer test was included, so the study describes processes rather than establishing learning gains."
    ],
    "whyItMatters": "AIEDHK can make source verification a visible part of AI-assisted research reading. Ask learners to connect an interpretation to the paper’s actual evidence and explain uncertainty, instead of using dialogue volume as a proxy for understanding.",
    "sourceUrl": "https://doi.org/10.1007/s10791-026-10069-1",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10791-026-10069-1"
      },
      {
        "label": "Publisher full PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s10791-026-10069-1.pdf"
      }
    ],
    "image": "/images/research/covers/aied-188-backfill.png",
    "imageAlt": "Graduate readers and a supervisor compare an annotated article's results table with a laptop critique while recording evidence checks.",
    "summaryImage": "/images/research/summary/aied-188-backfill-summary.png",
    "summaryImageAlt": "Graduate readers and a supervisor compare an annotated article's results table with a laptop critique while recording evidence checks.",
    "summaryAudio": "/audio/research/aied-188-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-189",
    "slug": "news-claude-code-mods-learning-tool-customization",
    "title": "Product news: Claude Code mods let developers reshape the assistant, making tool configuration part of software literacy",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Code mods",
      "developer education",
      "tool configuration",
      "TypeScript",
      "AI workflows"
    ],
    "shortSummary": "Anthropic introduced Claude Code mods on October 1: small TypeScript extensions that can alter behaviour and interface elements and are distributed through plugins. They run with Claude Code's machine access and are not sandboxed. Compared with OpenAI's recent developer-platform extensions and Gemini's coding tools, the release makes a useful educational topic: students should understand how configuration changes an assistant, how to test those changes, and who is responsible for the resulting behaviour.",
    "fullSummary": "Anthropic introduced mods for Claude Code on October 1, 2026. These small TypeScript extensions can change how the assistant behaves or how parts of its interface appear, and they are distributed inside plugins. Mods work in the command-line and desktop applications. Anthropic explicitly states that they run with the same machine access as Claude Code and are not sandboxed. For educational developers, this is executable customisation rather than a harmless presentation preference.\n\nThe release makes a useful software-literacy question concrete: when two people say they used the same AI tool, did they actually use the same environment? Different instructions, extensions, or interface changes can alter what the model sees and what the user can inspect. A course comparing results should record those conditions, rather than attribute every difference to the underlying model alone.\n\nA simple teaching example could change how a test result is displayed in an isolated practice environment. Students would compare the original output with the revised presentation and check that important failures remain visible. They would explain which information was removed, reordered, or highlighted and why. The purpose would be to examine the relationship between interface design and judgment, not to make an unsuccessful test look successful.\n\nBehavioural changes deserve an equally explicit contract. If an extension transforms an instruction or intervenes in a tool call, reviewers should understand the intended transformation and its limits. An educational team can keep examples of normal, missing, and unexpected inputs, then check the observed results. A mod that appears useful in one demonstration may interact differently with another extension, so the combined environment also needs examination.\n\nOpenAI's recent DevDay announcements include new ways for developers to extend ChatGPT experiences. Gemini 3.8 Flash offers another route to building and revising software with model assistance. Compared with these developments, Anthropic's mods focus on customising the coding assistant itself. The distinction matters: building an application, extending a platform, and changing the tool used to develop software create different responsibilities and should be taught as such.\n\nStudents can document a customisation with a brief explanation of the problem, the change, and the evidence that it works. They should retain a way to return to the original behaviour and identify which version was used for an assessed task. Another student should be able to repeat the same check. In a shared teaching environment, staff need to know which extensions are installed and how changes are introduced. This makes troubleshooting possible when a student's result differs from an instructor's example.\n\nThe feature expands developer control, but more customisation is not automatically better for learning. A clear default environment may be preferable for an introductory course, while an advanced class can use mods to study event handling, interface choices, and reproducibility. The strongest submission would show a small, justified change whose effects can be explained and tested. That turns a new extension mechanism into an opportunity to understand the tools shaping the work.",
    "keyTakeaways": [
      "Mods launched October 1 as executable Claude Code customisations distributed through plugins.",
      "Their machine access makes provenance and tested behaviour important when used in teaching environments.",
      "Record the configured environment and assess a small, reversible change against its intended effect."
    ],
    "whyItMatters": "Customisable AI development tools can teach software literacy when learners understand and test the environment that mediates their work.",
    "sourceUrl": "https://claude.com/resources/articles/claude-code-mods",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude Code mods — 2026-10-01",
        "url": "https://claude.com/resources/articles/claude-code-mods"
      },
      {
        "label": "OpenAI: DevDay 2026 recap — 2026-09-29",
        "url": "https://openai.com/index/devday-2026-recap/"
      },
      {
        "label": "Google DeepMind: Gemini 3.8 Flash — 2026-09-02",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      }
    ],
    "createdAt": "2026-10-01",
    "image": "/images/research/covers/aied-189-backfill.png",
    "imageAlt": "An instructor and two programming students compare test-result panels, including a failed check, with configuration notes and an annotated event-flow sketch.",
    "summaryImage": "/images/research/summary/aied-189-backfill-summary.png",
    "summaryImageAlt": "An instructor and two programming students compare test-result panels, including a failed check, with configuration notes and an annotated event-flow sketch.",
    "summaryAudio": "/audio/research/aied-189-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-190",
    "createdAt": "2026-10-02",
    "title": "Teacher, peer, or AI? Comparing effects of feedback sources in higher education",
    "authors": [
      "Joshua Weidlich",
      "Flurin Gotsch",
      "Kai Schudel",
      "Claudia Marusic-Würscher",
      "Jennifer Mazzarella",
      "Hannah Bolten",
      "Dario Bütler",
      "Simon Luger",
      "Bettina Wohlfender",
      "Katharina Maag Merki"
    ],
    "venue": "Computers and Education Open",
    "year": 2025,
    "type": "journal",
    "slug": "feedback-source-preference-and-revision-quality-diverge",
    "tags": [
      "Higher Education",
      "AI Feedback",
      "Peer Learning",
      "Assessment"
    ],
    "shortSummary": "Students can welcome feedback without producing stronger revisions. A randomized university study compared teacher, peer, and language-model feedback while concealing its source from recipients. AI and peer comments were perceived as fairer than teacher comments, but teacher feedback supported better scientific argumentation than AI feedback. The findings separate the experience of receiving comments from the quality of the work that follows, with implications for evaluating automated feedback tools.",
    "fullSummary": "Feedback tools often promise comments that students will find useful, fair, and easy to accept. A classroom experiment in Switzerland asks whether those reactions translate into better academic work. Its answer is qualified: learners' perceptions and the quality of their revisions did not move together. Teacher feedback supported stronger scientific argumentation than language-model feedback, even though students did not judge teacher comments more favorably.\n\nJoshua Weidlich and colleagues studied a real undergraduate assignment at the University of Zurich involving school quality, evaluation, and organizational development. Of 138 enrolled students, 90 contributed the complete information needed for the analysis: 31 in the teacher-feedback condition, 30 in the peer condition, and 29 in the AI condition. Students were assigned within five discussion groups, and the source of the received feedback was concealed. This reduced the likelihood that a label such as “teacher” or “AI” alone explained their reactions.\n\nAn especially useful design choice was that every student first provided peer feedback. Only the source of subsequently received feedback differed. Giving comments can itself promote reflection, so holding that experience constant helped the researchers concentrate on the receiving side of the process. Students then had a week to revise their submissions. The analysis considered initial submission quality and distinguished content, scientific argumentation, and formal quality instead of compressing everything into a single satisfaction score.\n\nThe perception results favored different sources on different measures. Students did not report a significant difference in usefulness. AI and peer feedback were rated as fairer than teacher feedback; peer comments received greater acceptance than teacher comments. Students were also more willing to engage with peer feedback than with either teacher or AI feedback. These distinctions matter: the study does not show that AI won every measure of student reception.\n\nThe revision results told a different story. Content quality did not differ significantly by feedback source. For scientific argumentation, however, the adjusted mean was 3.04 following teacher feedback and 2.59 following AI feedback, with a reported standardized difference of 0.82. Teacher and peer feedback also outperformed AI feedback on formal quality. The teacher and peer conditions did not differ significantly on the reported quality comparisons. Favorable reactions to machine-generated comments therefore did not establish equivalent revision support.\n\nFor lecturers, the practical implication is to evaluate the student's next action and resulting work, alongside the feedback itself. A pilot could examine whether comments help learners strengthen a claim, connect evidence to an argument, or apply an academic convention. Student acceptance remains useful information, but it answers a different question from whether a revision improved. Peer review also deserves consideration as a structured learning activity, rather than merely a cheaper substitute for expert comments.\n\nThe evidence is bounded by one course, a particular assignment and feedback configuration, and a complete-case sample smaller than the enrolled class. It measures revision quality over a short interval, not long-term learning or independent transfer. The findings support careful allocation of feedback roles; they do not establish that every teacher response will outperform every language model, or that positive learner experiences should be disregarded.",
    "keyTakeaways": [
      "Source-blind assignment separated reactions to comments from preconceived reactions to a teacher, peer, or AI label.",
      "Teacher feedback supported better scientific argumentation than AI feedback, while content quality showed no significant source effect.",
      "Feedback evaluation should include the quality of subsequent revisions, alongside usefulness, fairness, and acceptance."
    ],
    "whyItMatters": "Automated feedback can be pleasant to receive without supporting the strongest revision. Universities need evidence about what students change and learn, as well as whether they like the comments.",
    "sourceUrl": "https://doi.org/10.1016/j.caeo.2025.100300",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.sciencedirect.com/science/article/pii/S266655732500059X"
      },
      {
        "label": "University of Zurich: open full-text article",
        "url": "https://www.ife.uzh.ch/dam/jcr%3A240d1fe5-81a5-4670-8e0d-b8ab9548d498/Weidlich%20et%20al_2025_Teacher%20peer%20or%20AI_Comparing%20effects%20of%20feedback%20sources%20in%20higher%20education.pdf"
      }
    ],
    "image": "/images/research/covers/aied-190-backfill.png",
    "imageAlt": "A university student revises an essay using an evidence-to-claim sketch while a lecturer and peer discuss the feedback.",
    "summaryImage": "/images/research/summary/aied-190-backfill-summary.png",
    "summaryImageAlt": "A university student revises an essay using an evidence-to-claim sketch while a lecturer and peer discuss the feedback.",
    "summaryAudio": "/audio/research/aied-190-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-191",
    "slug": "news-gpt-6-guide-assignment-steering-learning",
    "title": "Product news: OpenAI's GPT-6 guide treats clear assignments and steering as part of working with agents",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-6 guide",
      "AI delegation",
      "research workflows",
      "task design",
      "AI literacy"
    ],
    "shortSummary": "OpenAI published a practical GPT-6 guide on October 2 covering assignments, model choice, longer tasks, and review. This is guidance for using an existing model family, not another model launch. Anthropic's recent Sonnet release and Gemini's learning tools provide useful context. For educators, the guide offers a way to discuss how a person defines success, updates a task when circumstances change, and checks what the assistant actually completed.",
    "fullSummary": "OpenAI published a practical guide to the GPT-6 family on October 2, 2026. It covers model selection, clear assignments, long-running work, and preparation for deployment. This is a guidance release for an existing family, not the announcement of another new model. Its educational relevance lies in the relationship between a person's instructions and the evidence needed to judge the work that follows.\n\nThe guide encourages users to state the desired result, relevant context, constraints, and completion conditions, while keeping instructions consistent across the workflow. That is a useful starting point for teaching delegation. A request can be detailed yet still leave the central decision unclear. Conversely, a short assignment can be effective when it identifies the purpose and the boundaries that matter.\n\nA research-methods class could compare two requests for the same supplied dataset. One asks for an impressive report; the other identifies the question, allowed transformations, and checks required before interpretation. Students would inspect how the outputs differ and which ambiguities remain. The exercise should not assume that better wording guarantees a correct analysis. It should show how task design makes the resulting work easier to assess.\n\nLonger work also needs a way to respond when circumstances change. A newly discovered error may alter the next step without invalidating every earlier result. Students can practise issuing a correction that states what changes and what remains valid. They should then check whether the assistant applied it to the appropriate work. A message sent during a task is not, by itself, evidence that the task has been corrected.\n\nAnthropic's Sonnet 5.5 release emphasises efficient work on well-defined tasks. Gemini's existing Guided Learning offers support organised around understanding a topic. Alongside OpenAI's guide, these developments suggest that AI literacy includes deciding the form of assistance needed. Sometimes the goal is a checked artifact; sometimes it is an explanation that leaves room for the learner to reason. The assignment should make that difference visible.\n\nFor a group project, participants could maintain a brief record of the goal, the evidence currently available, and the unresolved decisions. When they change direction, they would update that record rather than rely on a long sequence of informal messages. A peer could then examine whether the final output reflects the current assignment. For example, a revised deadline should not silently alter the dataset, while a corrected variable definition may require the analysis to be rerun. This provides a practical lesson in coordination that remains useful beyond any one provider's interface.\n\nThe guide also treats task success, latency, and cost as things to measure. Educational teams can add a further question: what understanding remains with the person using the assistant? A student might explain a rejected suggestion, reproduce a key check, or adapt the result to a new example. That makes the distinction between effective delegation and successful learning concrete. OpenAI's publication supplies current operational guidance; educators can use it to develop the judgment required to direct and evaluate assistance.",
    "keyTakeaways": [
      "The October 2 publication is practical guidance, not a fresh model launch.",
      "Define the result and completion evidence, then verify that later corrections reached the relevant work.",
      "Assess both the delegated artifact and the learner's ability to explain or adapt it."
    ],
    "whyItMatters": "Clear task direction becomes an educational capability when learners can connect their instructions, revisions, and acceptance decisions to observable evidence.",
    "sourceUrl": "https://openai.com/index/practical-guide-building-gpt-6/",
    "sourceUrls": [
      {
        "label": "OpenAI: Practical guide to the GPT-6 family — 2026-10-02",
        "url": "https://openai.com/index/practical-guide-building-gpt-6/"
      },
      {
        "label": "Anthropic: Claude Sonnet 5.5 launch — 2026-09-28",
        "url": "https://www.anthropic.com/claude-sonnet-5-5"
      },
      {
        "label": "Google: Advancing AI tools for learning — 2025-08-06",
        "url": "https://blog.google/intl/en-au/products/explore-get-answers/advancing-our-ai-tools-for-learning/"
      }
    ],
    "createdAt": "2026-10-02",
    "image": "/images/research/covers/aied-191-backfill.png",
    "imageAlt": "A lecturer and two students compare initial and clarified task briefs while updating a decision record beside a simple data table.",
    "summaryImage": "/images/research/summary/aied-191-backfill-summary.png",
    "summaryImageAlt": "A lecturer and two students compare initial and clarified task briefs while updating a decision record beside a simple data table.",
    "summaryAudio": "/audio/research/aied-191-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-192",
    "createdAt": "2026-10-03",
    "title": "How Adding Metacognitive Requirements in Support of AI Feedback in Practice Exams Transforms Student Learning Behaviors",
    "authors": [
      "Mak Ahmad",
      "Prerna Ravi",
      "David Karger",
      "Marc Facciotti"
    ],
    "venue": "Proceedings of the Twelfth ACM Conference on Learning @ Scale",
    "year": 2025,
    "type": "conference",
    "slug": "biology-practice-exams-ai-feedback-metacognition",
    "tags": [
      "Learning at Scale",
      "Biology Education",
      "Metacognition",
      "AI Feedback"
    ],
    "shortSummary": "A large biology course tested several forms of practice-exam feedback, including GPT-4o explanations and textbook links. No significant overall difference emerged in subsequent exam performance between feedback conditions. Students nevertheless described useful changes in how they reasoned, judged confidence, and studied. Because every condition required an explanation and confidence judgment, the trial cannot isolate those requirements as the cause of learning gains. It offers a careful distinction between reported study changes and measured achievement.",
    "fullSummary": "Asking students to explain an answer and judge their confidence may change how they approach practice. Adding a generative-AI explanation is a separate instructional decision. A Learning @ Scale study in a large introductory biology course brings those choices into the same platform, while showing why favorable learner accounts should be interpreted separately from evidence of improved examination performance.\n\nMak Ahmad and colleagues investigated practice exams in a University of California, Davis course enrolling 1,002 first-year biology students. Across three midterms, the consenting participant counts were 541, 342, and 413; these are overlapping exam-specific groups, not three independent samples to add together. The study analyzed 28,313 student-question interactions. This setting gives the work practical relevance: feedback was embedded in preparation for real course assessments, rather than evaluated only through an isolated demonstration.\n\nThe platform offered four feedback conditions: correctness information alone, correctness with relevant textbook links, personalized GPT-4o feedback, and the combination of AI feedback with textbook links. Assignment varied within students across questions. A consistent allocation procedure connected students, questions, and exams, allowing learners to encounter the different forms of feedback. Actual midterm questions were linked to practice opportunities through their learning objectives, providing an outcome beyond whether students appreciated the interface.\n\nEvery condition also required students to explain their answer and report confidence. That common feature is central to interpreting the results. The comparison can address differences between the feedback packages on top of those requirements. It cannot establish what would have happened without the explanation and confidence prompts, because a corresponding condition was not included. Descriptions of greater reflection are therefore informative about learner experience, but they do not identify an experimentally isolated metacognitive effect.\n\nOn the main performance comparison, the researchers did not find a statistically significant overall effect of feedback condition on subsequent exam performance. The reported test had a p value of .093. Suggestive numerical patterns should not be promoted into a demonstrated achievement advantage for AI feedback. The absence of a significant result also does not prove that all packages are equivalent; uncertainty, implementation, exposure, and assessment alignment remain relevant to interpreting that finding.\n\nThe qualitative evidence was more encouraging about study behavior. A survey collected 279 responses, and 23 interviews involved 19 students, with four interviewed twice. Students described changes in reasoning, awareness of uncertain knowledge, preparation strategies, and engagement with explanatory resources. These accounts help explain which parts of the experience learners noticed. They provide plausible design ideas for future studies, while retaining the limitations of self-report and voluntary participation.\n\nFor course teams, the study suggests separating two evaluation questions: does a practice system elicit the thinking that instructors want, and does a particular feedback addition improve independent performance? A useful classroom pilot would preserve explanation and confidence data, examine how learners respond to corrections, and include an appropriate comparison for any claimed mechanism. Evidence from this single course, without a baseline biology assessment, cannot establish broad achievement gains or long-term retention. Its contribution is a realistic view of promising learning behaviors alongside a non-significant overall performance comparison.",
    "keyTakeaways": [
      "AI explanations and textbook links did not produce a significant overall exam-performance difference between feedback conditions.",
      "All conditions required answer explanations and confidence judgments, so their independent contribution was not experimentally isolated.",
      "Survey and interview accounts identify promising study behaviors, but should remain distinct from measured learning effects."
    ],
    "whyItMatters": "Course designers can use explanation and confidence prompts to make study behavior visible, while testing separately whether AI feedback adds value on independent assessments.",
    "sourceUrl": "https://doi.org/10.1145/3698205.3729542",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://dl.acm.org/doi/10.1145/3698205.3729542"
      },
      {
        "label": "Authors’ open full text, version 1",
        "url": "https://arxiv.org/html/2505.13381v1"
      },
      {
        "label": "arXiv version history and first-public date",
        "url": "https://arxiv.org/abs/2505.13381"
      }
    ],
    "image": "/images/research/covers/aied-192-backfill.png",
    "imageAlt": "University learners and a tutor discuss a cell worksheet with written reasons and a confidence judgment beside a practice-question interface.",
    "summaryImage": "/images/research/summary/aied-192-backfill-summary.png",
    "summaryImageAlt": "University learners and a tutor discuss a cell worksheet with written reasons and a confidence judgment beside a practice-question interface.",
    "summaryAudio": "/audio/research/aied-192-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-193",
    "slug": "news-gemini-guided-vision-accessible-learning",
    "title": "Product news: Gemini Guided Vision adds conversational visual assistance, with clear limits for educational use",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini Live",
      "Guided Vision",
      "accessibility",
      "inclusive education",
      "visual descriptions"
    ],
    "shortSummary": "Google launched Guided Vision in Gemini Live on October 1 for supported Android devices and regions. This October 3 report considers its potential for describing learning materials and supporting user-directed exploration. Google identifies it as an assistive utility that can make mistakes, not a navigation aid. OpenAI's accessibility case and Anthropic's document tools provide comparisons: access to content must be evaluated with the learner and should complement well-designed materials.",
    "fullSummary": "Google launched Guided Vision in Gemini Live on October 1, 2026, offering conversational descriptions and spoken camera-reframing cues on supported Android devices. This October 3 report examines possible educational uses. Google says the feature was developed with the blind and low-vision community, and explicitly describes it as an assistive utility that can make mistakes. It is not intended to replace mobility aids or provide navigation and obstacle-detection guidance.\n\nIn a learning setting, the useful task might be much narrower: describing an object on a desk, reading a label, or helping a learner ask a follow-up question about visible material. The learner's purpose should determine the description. A broad account of everything in view may be less helpful than an answer about a particular feature, relationship, or piece of text.\n\nAn accessibility team could explore this with a small collection of familiar teaching objects and diagrams. A learner would choose what to inspect, ask for a description, and compare the response with another accessible representation. The team could note which details were useful, which were wrong, and what additional context was needed. This evaluates the interaction in a meaningful activity rather than assuming that a fluent description is sufficient. For example, reviewers could check whether the description preserves the direction of an arrow and the relationship between two labelled objects.\n\nVisual interpretation is not the same as understanding a lesson. A system may identify a shape yet miss the relationship a teacher intends students to examine. It may read a label correctly but describe an arrow ambiguously. Teachers should preserve accessible source materials and explanations that do not depend on one generated description. Learners should have a clear way to question the output and request a different form of support.\n\nOpenAI's recent accessibility profile described a person using ChatGPT to create reading adaptations. Anthropic's document and slide tools make additional materials easier to produce. Gemini Guided Vision approaches another part of the problem: accessing visual information through conversation. These developments can complement one another, but none relieves an educational institution of designing materials that are usable in the first place.\n\nA proposed classroom activity might ask learners to compare two descriptions of the same simple diagram. They could identify what each description makes clear and what it leaves uncertain, then suggest a better question. Participation should be voluntary and shaped with the people who use the support. It should not require a learner to demonstrate personal difficulties for classmates or to rely on an untested tool for a consequential task.\n\nThe feature's practical value will depend on the device, language, material, and context of use. A local review should therefore include the learner's judgment and alternatives that remain available when the assistant is wrong or unavailable. Guided Vision offers a new way to ask questions about visual information. An inclusive educational use would give learners more control over how they access a topic, while keeping the underlying content and the route to human support understandable.",
    "keyTakeaways": [
      "Guided Vision launched October 1 as an assistive visual tool, with explicit limits on navigation use.",
      "Evaluate descriptions against the learner's purpose and an accessible source representation.",
      "Keep alternatives and human support available when the generated description is wrong or insufficient."
    ],
    "whyItMatters": "Conversational visual assistance can broaden access when it is shaped with learners and complements accessible teaching materials.",
    "sourceUrl": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/",
    "sourceUrls": [
      {
        "label": "Google: Guided Vision in Gemini Live — 2026-10-01",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/"
      },
      {
        "label": "OpenAI Academy: Making websites easier to read — 2026-09-04",
        "url": "https://academy.openai.com/public/blogs/making-websites-easier-to-read-with-chatgpt-2026-09-04"
      },
      {
        "label": "Anthropic: Docs, Slides and unified Claude experience — 2026-09-16",
        "url": "https://claude.com/resources/articles/cowork-is-now-claude"
      }
    ],
    "createdAt": "2026-10-03",
    "image": "/images/research/covers/aied-193-backfill.png",
    "imageAlt": "A learner uses a phone to inspect a raised-line geometry card while a specialist and tutor compare it with a matching large-print version.",
    "summaryImage": "/images/research/summary/aied-193-backfill-summary.png",
    "summaryImageAlt": "A learner uses a phone to inspect a raised-line geometry card while a specialist and tutor compare it with a matching large-print version.",
    "summaryAudio": "/audio/research/aied-193-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-194",
    "createdAt": "2026-10-04",
    "title": "Computer-assisted learning in the real world: How Khan Academy influences student math learning",
    "authors": [
      "Taryn Eames",
      "Emma Brunskill",
      "Bogdan Yamkovenko",
      "Kodi Weatherholtz",
      "Philip Oreopoulos"
    ],
    "venue": "Proceedings of the National Academy of Sciences",
    "year": 2026,
    "type": "journal",
    "slug": "khan-academy-real-world-math-panel-evidence",
    "tags": [
      "Mathematics Education",
      "Adaptive Learning",
      "Learning Analytics",
      "School Education"
    ],
    "shortSummary": "A large United States study links Khan Academy use with mathematics progress across roughly 214,000 students. Its observational design uses changes in classmates’ usage and extensive statistical controls, rather than random assignment. Average exposure was modest, and higher prior achievers appeared to benefit more. The findings highlight implementation and access to practice, while leaving uncertainty about causation. They concern established computer-assisted learning and should not be read as evidence for generative-AI chatbots.",
    "fullSummary": "Large educational platforms can accumulate extensive usage records, but the scale of a dataset does not by itself establish what caused learning. A PNAS study of Khan Academy mathematics use examines that challenge through approximately 490,000 observations from 214,000 students, 11,000 teachers, and 1,000 schools. It reports positive relationships between use and mathematics progress, while making clear that its identification strategy depends on assumptions that a randomized trial would address differently.\n\nTaryn Eames and colleagues studied three United States school years, from 2020–2021 through 2022–2023, using mathematics assessment and platform data. The setting included grades three to eight in MAP Accelerator and captured Khan Academy activity beyond that product alone. This is evidence about computer-assisted mathematics learning, including structured practice and skill progression. The intervention was not a generative-AI chatbot, and the results cannot be transferred directly to conversational tutoring systems.\n\nStudents who voluntarily use a platform more may also differ in motivation, support, or prior skill. To reduce that selection problem, the researchers examined variation in the average use of other students taught by the same teacher, leaving each focal student's own use out of that measure. Models included student, teacher, school, and year-by-grade effects, with additional robustness analyses. The design attempts to capture changes in exposure associated with classroom practice, rather than treating a simple individual usage correlation as causal proof.\n\nEven with these controls, time-varying influences can remain. A teacher might alter mathematics instruction in ways that increase both platform use and achievement, or a school might introduce other support at the same time. The study cannot guarantee that all such changes are removed. Its estimates are therefore best understood as carefully modeled observational evidence, not the result of randomly assigning children to different doses of Khan Academy.\n\nAverage annual use was only 6.6 hours, approximately 11 minutes a week, associated in the model with a gain of 0.031 standard deviations in mathematics. Usage was highly uneven: about 24 percent of students recorded no use, and roughly 65 percent averaged under ten minutes a week. Only about one in ten reached the recommended 18 hours a year. These patterns suggest that access to software and sustained classroom implementation are different achievements.\n\nThe study also reports variation in estimated benefits. Students with stronger prior achievement appeared to gain more, and skill progression per hour differed across teachers' classes. Those findings invite closer examination of how practice is supported and which learners need additional help. They do not identify a specific teacher behavior as the cause. Similarly, estimates for greater weekly exposure are model projections, not results from a trial assigning that schedule; the data do not show exactly which classroom activities platform time replaced.\n\nFor schools, the useful question is how a practice tool fits within teaching, assessment, and support for learners who struggle. The dataset is proprietary, although replication code is available. Author affiliations and a subsequent correction disclose Khan Academy employment or unpaid advisory connections; the correction concerns competing interests rather than numerical results. The paper offers substantial real-world evidence for an established learning platform, with observational uncertainty and implementation differences that should remain visible in decisions about adoption.",
    "keyTakeaways": [
      "The large panel supports modeled associations between Khan Academy use and mathematics progress, not randomized causal evidence.",
      "Average use was low and uneven; exposure and benefits differed across learners and classrooms.",
      "This study concerns computer-assisted practice, and its findings should not be treated as a generative-AI tutoring result."
    ],
    "whyItMatters": "Platform adoption only becomes instruction when students receive useful, sustained practice. Large-scale usage evidence can reveal implementation gaps, provided its causal limits and learner differences remain explicit.",
    "sourceUrl": "https://doi.org/10.1073/pnas.2507708123",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.pnas.org/doi/10.1073/pnas.2507708123"
      },
      {
        "label": "Published correction: competing-interest disclosure",
        "url": "https://www.pnas.org/doi/10.1073/pnas.2604984123"
      },
      {
        "label": "Public replication code record",
        "url": "https://doi.org/10.5281/zenodo.17810869"
      }
    ],
    "image": "/images/research/covers/aied-194-backfill.png",
    "imageAlt": "A teacher and two primary pupils compare equivalent fraction bars on a worksheet beside a tablet practice activity.",
    "summaryImage": "/images/research/summary/aied-194-backfill-summary.png",
    "summaryImageAlt": "A teacher and two primary pupils compare equivalent fraction bars on a worksheet beside a tablet practice activity.",
    "summaryAudio": "/audio/research/aied-194-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-195",
    "slug": "news-openai-sbdc-local-ai-advisor-training",
    "title": "Industry news: OpenAI and America's SBDC plan local advisor training to support small-business AI learning",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "community training",
      "America's SBDC",
      "adult learning",
      "AI advisors",
      "entrepreneurship"
    ],
    "shortSummary": "OpenAI's September 30 partnership with America's SBDC proposes training local advisors and supporting small businesses through workshops and follow-up. This October 4 report focuses on the learning model: help is embedded in an existing advisory relationship rather than limited to a one-off demonstration. Anthropic's small-business training and Gemini's educator resources offer comparisons. Planned reach should remain distinct from participation, sustained use, and demonstrated capability.",
    "fullSummary": "OpenAI announced a partnership with America's SBDC on September 30, 2026 to expand practical AI learning through local business advisors. The initial plan combines advisor training, hands-on workshops, and follow-up support. This October 4 report focuses on that learning model. The announcement describes intended activity and reach; it does not establish that all proposed training has occurred or that participants have achieved a measured improvement in business performance.\n\nThe use of an existing advisory network is the distinctive feature. An advisor may already understand an owner's priorities, resources, and constraints. That context can help turn a broad interest in AI into a manageable task. It can also provide continuity after a workshop, when the owner encounters an unfamiliar input or discovers that a promising demonstration does not fit ordinary work.\n\nFor adult education, the first task should be useful and explainable. A participant might organise a set of fictional enquiries into a response plan or prepare a draft using supplied facts. The advisor can help identify what the assistant assumed and what the owner needs to check. The aim is to build confidence that rests on understanding, rather than on the speed or polish of the first output.\n\nFollow-up is where a training model can learn from reality. An owner may stop using a workflow because it takes too much preparation, because the underlying information is unreliable, or because another process works better. Those experiences should not disappear behind a count of people trained. A short conversation about what was retained, revised, or abandoned can reveal how the programme should change.\n\nAnthropic's September small-business expansion also combines workflows with workshops and partner learning. Google's Gemini-related educator training offers examples of moving from a short module to practical use. Compared with these resources, OpenAI's SBDC partnership places particular weight on local advisors. The approaches can be compared by the support available after an introduction, not only by the number of tools or sessions offered.\n\nA community provider could use a simple learning record: the participant's goal, the task attempted, a checked result, and a question for the next meeting. The record should be small enough to maintain during real work. A later exercise can change the input slightly and ask the participant to explain which parts of the workflow still apply. It could also note when a participant deliberately chose not to automate something. That decision can demonstrate sound judgment, especially when the task requires relationships, contextual knowledge, or responsibility that should remain with a person.\n\nFor colleges and entrepreneurship programmes, the partnership offers a current example of distributing AI support through people who already serve a community. Its eventual educational value will depend on the quality of those relationships and the evidence collected through practice. A useful report would distinguish training offered, participation, continued use, and capability demonstrated on a later task. That would show whether the initial opportunity became a durable form of support rather than another event that participants attended and forgot.",
    "keyTakeaways": [
      "The September 30 partnership is an initial training and support plan, not a completed outcome report.",
      "Local advisors can help connect a workshop task with the participant's actual constraints.",
      "Follow up on retained, revised, and abandoned workflows rather than reporting attendance alone."
    ],
    "whyItMatters": "Community-based AI learning can become more durable when participants have a trusted person to help them adapt a task after the first demonstration.",
    "sourceUrl": "https://openai.com/index/helping-small-businesses-put-ai-to-work/",
    "sourceUrls": [
      {
        "label": "OpenAI: Partnership with America's SBDC — 2026-09-30",
        "url": "https://openai.com/index/helping-small-businesses-put-ai-to-work/"
      },
      {
        "label": "Anthropic: Small-business workflows and training expansion — 2026-09-15",
        "url": "https://claude.com/resources/articles/claude-for-small-business-launches-new-workflows-integrations-and-training-programs"
      },
      {
        "label": "Google: AI Educator Series September update — 2026-09-03",
        "url": "https://blog.google/products-and-platforms/products/education/new-ai-educator-trainings-september-2026/"
      }
    ],
    "createdAt": "2026-10-04",
    "image": "/images/research/covers/aied-195-backfill.png",
    "imageAlt": "An adviser and craft-business owner discuss a fictional customer-response plan while another learner records questions for a follow-up session.",
    "summaryImage": "/images/research/summary/aied-195-backfill-summary.png",
    "summaryImageAlt": "An adviser and craft-business owner discuss a fictional customer-response plan while another learner records questions for a follow-up session.",
    "summaryAudio": "/audio/research/aied-195-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-196",
    "createdAt": "2026-10-05",
    "title": "Interacting with ChatGPT in essay writing: A study of L2 learners’ task motivation",
    "authors": [
      "Javad Zare",
      "Ahmad Al-Issa",
      "Fatemeh Ranjbaran Madiseh"
    ],
    "venue": "ReCALL",
    "year": 2025,
    "type": "journal",
    "slug": "chatgpt-essay-writing-motivation-delayed-comparison",
    "tags": [
      "Language Learning",
      "Writing Education",
      "Learner Motivation",
      "Generative AI"
    ],
    "shortSummary": "ChatGPT-supported essay activities increased immediate task motivation in a small study of university English learners. The comparison with peer-supported writing was significant just after instruction, but not at the one-month follow-up. The study measured motivation rather than improvement in writing competence. Its results suggest a possible short-term engagement benefit while showing why a lasting within-group increase should not be described as a lasting advantage over another teaching approach.",
    "fullSummary": "A learner can feel more motivated to write after using ChatGPT without necessarily becoming a better writer, and an immediate motivational advantage may not remain statistically clear a month later. A ReCALL study of university English learners illustrates both distinctions. Its results support a short-term increase in task motivation, while the delayed comparison places an important boundary around claims of a lasting advantage.\n\nJavad Zare, Ahmad Al-Issa, and Fatemeh Ranjbaran Madiseh studied 69 Persian-speaking learners of English in Iran. Participants had a broadly comparable B1 proficiency level and were assessed for initial writing ability and motivation. The methods report random assignment to two instructional conditions. Over twelve twice-weekly sessions, the same teacher used a presentation, practice, and production sequence, while the support available during essay production differed.\n\nIn the experimental condition, students used ChatGPT-4 through the Chatgot service to develop ideas, receive comments on drafts, and address language problems. The activity was designed around support for students' own essays, rather than asking the system to supply a final essay for submission. In the comparison condition, students worked with peers on corresponding tasks. This contrast concerns two supported writing arrangements; it does not compare AI-assisted writing with receiving no help.\n\nThe researchers administered a task-motivation questionnaire before instruction, immediately afterward, and one month later. They also interviewed sixteen learners, eight from each condition, to understand their experiences. This combination provides both a numerical trajectory and accounts of how learners perceived feedback, interaction, and the writing process. The outcome, however, remained task motivation. The study did not collect the specific linguistic outcomes needed to establish gains in writing competence from the intervention.\n\nImmediately after the course, the AI-supported group showed higher motivation than the comparison group, with a reported p value of .004 and standardized difference of .722. Its mean rose from 91.67 before instruction to 107.38 afterward. The comparison group's mean moved from 90.73 to 94.89. Those results are consistent with a meaningful immediate difference in the measured motivational experience in this setting.\n\nAt the one-month follow-up, the picture was more restrained. The AI-supported group's mean was 103.51, while the comparison group's was 96.89, and the between-group difference was not statistically significant. Motivation in the AI condition remained above its own baseline, but that within-group result does not establish a persistent advantage over peer-supported learning. Both the comparison group and the passage of time matter when interpreting whether an instructional benefit lasts.\n\nFor language teachers, the findings support trying clearly bounded AI feedback activities while continuing to examine what learners can do independently. Motivation questionnaires, discussion of feedback use, and separately assessed writing tasks answer different questions. A stronger evaluation would track all three and include delayed work completed without assistance. This small, single-context study offers useful evidence about engagement, not proof of durable writing improvement. Novelty, self-report, learner proficiency, and the limited follow-up period constrain generalization. Its most useful contribution is a precise account of when the motivational difference was observed, and when the comparison no longer supported a clear advantage.",
    "keyTakeaways": [
      "The AI-supported condition showed a significant immediate motivation advantage over peer-supported writing.",
      "The one-month between-group difference was not significant, despite the AI group remaining above its own baseline.",
      "The outcomes concern task motivation; the study does not establish improved writing competence."
    ],
    "whyItMatters": "Motivational evidence can inform classroom design, but educators need separate assessments of retained writing skill and should distinguish an immediate benefit from a lasting comparative advantage.",
    "sourceUrl": "https://doi.org/10.1017/S0958344025000035",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.cambridge.org/core/journals/recall/article/interacting-with-chatgpt-in-essay-writing-a-study-of-l2-learners-task-motivation/720D0AD1F515BDD36E44713A73B8EF3D"
      },
      {
        "label": "Author institution: full-text PDF",
        "url": "https://squ.elsevierpure.com/files/104766789/ReCALL_ChatGPT_in_essay_writing.pdf"
      }
    ],
    "image": "/images/research/covers/aied-196-backfill.png",
    "imageAlt": "A language learner annotates her essay while a classmate and instructor discuss a claim-reason-example paragraph map.",
    "summaryImage": "/images/research/summary/aied-196-backfill-summary.png",
    "summaryImageAlt": "A language learner annotates her essay while a classmate and instructor discuss a claim-reason-example paragraph map.",
    "summaryAudio": "/audio/research/aied-196-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-197",
    "slug": "news-google-ted-teacher-ideas-classroom-evidence",
    "title": "Industry news: Google and TED launch an educator idea search, putting teacher accounts of technology in the spotlight",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "World Teachers' Day",
      "TED",
      "teacher voice",
      "Gemini",
      "professional inquiry"
    ],
    "shortSummary": "Google marked World Teachers' Day on October 5 with educator stories and a global idea search in partnership with TED. The initiative creates a route for teachers to share technology-informed practice, but a compelling story is not the same as evidence of an effect. OpenAI's educator learning paths and Anthropic's AI-learning guidance provide comparisons. Schools can use the moment to connect teacher voice with concrete classroom artifacts, limitations, and questions for further inquiry.",
    "fullSummary": "Google announced a partnership with TED on October 5, 2026 to seek ideas from educators innovating with technology. Its World Teachers' Day collection also presents teachers' accounts of classroom practice, including uses of Gemini. Selected ideas may have an opportunity to reach the TED stage. The announcement is an invitation to share and develop ideas; it does not report a completed selection process or establish the effectiveness of the featured practices.\n\nTeacher voice matters because a product description cannot fully capture the conditions of a classroom. Teachers encounter varied prior knowledge, language needs, time constraints, and unexpected responses. Their accounts can show how a tool was adapted to a purpose and where it failed to fit. They can also reveal useful questions that a general benchmark would never ask.\n\nA strong professional story should make those conditions visible. What was the teacher trying to help students do? What material or interaction changed? What did the teacher observe, and what alternative explanation remains possible? These questions do not diminish the story. They help colleagues decide whether the idea is relevant to their own setting and what they would need to test before adapting it. A colleague should be able to distinguish what was actually observed from what the teacher hopes a future version of the activity might achieve.\n\nA school could invite teachers to share one small artifact alongside an account of practice. It might be a revised prompt, a student task, or two versions of an explanation. Colleagues could examine the learning objective and suggest what evidence would show that the change helped. The discussion can include a failed attempt or a decision to stop using a feature. Such accounts are valuable even when they do not make a dramatic presentation.\n\nOpenAI's recent Academy expansion includes a pathway for educators to review AI outputs against teaching objectives. Anthropic's Claude Academy approach emphasises deliberate delegation and continued human practice. Alongside Google's initiative, these resources show several ways of supporting teacher participation. The important distinction is between learning a provider's examples and contributing an informed account of one's own classroom decisions.\n\nStudents' perspectives should also inform the account where appropriate. A resource that feels efficient to a teacher may still confuse a learner, while a slower activity may provoke useful discussion. Teachers can gather selected work or brief feedback without presenting a single positive reaction as proof of impact. The aim is to make practice open to examination while respecting the people whose learning is being discussed.\n\nFor educational communities, the idea search is a timely invitation to articulate what technology is for. A persuasive contribution can connect an instructional problem, a concrete design choice, and an honest statement of what remains unknown. Google and TED offer a platform for those voices. Schools can strengthen the substance behind the stories by supporting collaborative inquiry, preserving examples, and treating revision as part of professional expertise rather than a weakness to hide.",
    "keyTakeaways": [
      "The October 5 announcement launches an idea search and story collection, not a completed evaluation or selection outcome.",
      "Pair a teacher's account with a concrete artifact, context, and acknowledged limitations.",
      "Use peer and learner perspectives to refine an idea before treating it as transferable practice."
    ],
    "whyItMatters": "Teacher stories become more useful to the profession when they make instructional reasoning and evidence open to discussion.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/world-teachers-day-2026/",
    "sourceUrls": [
      {
        "label": "Google: World Teachers' Day and TED idea search — 2026-10-05",
        "url": "https://blog.google/products-and-platforms/products/education/world-teachers-day-2026/"
      },
      {
        "label": "OpenAI: New Academy learning paths — 2026-09-21",
        "url": "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/"
      },
      {
        "label": "Anthropic: Approach to teaching and learning AI — 2026-08-20",
        "url": "https://claude.com/resources/articles/anthropics-approach-to-teaching-and-learning-ai"
      }
    ],
    "createdAt": "2026-10-05",
    "image": "/images/research/covers/aied-197-backfill.png",
    "imageAlt": "A teacher explains an annotated classroom activity to colleagues while a facilitator records reflections in a school-library discussion circle.",
    "summaryImage": "/images/research/summary/aied-197-backfill-summary.png",
    "summaryImageAlt": "A teacher explains an annotated classroom activity to colleagues while a facilitator records reflections in a school-library discussion circle.",
    "summaryAudio": "/audio/research/aied-197-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-198",
    "createdAt": "2026-10-06",
    "title": "Evidence of impact and interpretational limits of generative AI in STEM education: A systematic review and meta-analysis on cognitive learning outcomes",
    "authors": [
      "Chiara Boolzen",
      "Jochen Kuhn",
      "Salome Flegr",
      "Eva-Maria Rott",
      "Niklas Stausberg",
      "Stefan Küchemann"
    ],
    "venue": "Artificial Intelligence Review",
    "year": 2026,
    "type": "journal",
    "slug": "stem-ai-learning-meta-analysis-publication-bias",
    "tags": [
      "STEM Education",
      "Research Methods",
      "Generative AI",
      "Learning Outcomes"
    ],
    "shortSummary": "A STEM-focused review shows why a positive average effect can be a fragile guide to classroom decisions. Across 49 studies, the conventional pooled estimate favored generative AI, but a publication-bias adjustment moved the average close to zero with substantial uncertainty. Effects still varied widely across contexts. The result calls for better comparisons and clearer descriptions of what students actually do, rather than treating every AI-supported activity as the same intervention.",
    "fullSummary": "Claims that generative AI improves learning often rest on a pooled average across very different studies. A systematic review in Artificial Intelligence Review shows how much that average can depend on publication bias and instructional comparisons. The conventional analysis favored AI-supported STEM learning, but an alternative analysis accounting for selective publication placed the overall estimate close to zero. Neither result describes every classroom or every use of AI.\n\nChiara Boolzen and colleagues searched ERIC, PsycINFO, and Web of Science, with the search updated on 7 May 2026, and added studies through citation tracking. The review included 85 studies involving learner interaction with generative AI and a comparison condition. Of these, 49 studies supplied 59 effect sizes suitable for the quantitative synthesis. The pooled outcomes were externally assessed cognitive performance, a useful boundary that separates demonstrated knowledge or skill from students' impressions of how much they learned.\n\nThe initial random-effects analysis produced Hedges' g of 0.839, conventionally interpreted as a large standardized difference. However, between-study variation was extreme: the reported I-squared was 96.32 percent, and the prediction interval ranged from −1.52 to 3.20. A prediction interval describes the spread of plausible effects across comparable future settings, rather than uncertainty around one overall mean. Here, it encompasses negative, negligible, and strongly positive outcomes.\n\nThe authors then used robust Bayesian meta-analysis, which combines models with different assumptions about effects, heterogeneity, and publication bias. The adjusted mean was 0.076, with a 95 percent credible interval from −0.37 to 0.79. This weakened the case for a broadly positive average. It should not be read as proof that AI never helps, or as a precise estimate of no effect: the interval remained wide, and considerable unexplained variation persisted after the adjustment.\n\nA central interpretive issue was what learners actually did in the intervention and comparison conditions. The review distinguished designs that changed students' cognitive activity, rather than classifying studies solely by whether AI was present. Differences in learning outcomes and in these instructional arrangements accounted for some variation. Yet the analyses did not establish a reliable combination of features that guaranteed a large benefit. Such comparisons across studies remain vulnerable to other differences between populations, tasks, and implementations.\n\nThe evidence base also had important weaknesses. None of the included studies received a low overall risk-of-bias rating under the review's assessment. Learner characteristics and interaction processes were often poorly reported, making it difficult to examine prompt quality, verification behavior, prior knowledge, or the amount of thinking delegated to a system. The review's own model choices, search coverage, coding, and assumptions about publication bias also shape its conclusions.\n\nFor educators, the paper offers a way to ask better questions of an attractive headline. What was the comparison activity? Was knowledge assessed independently? Did AI add useful practice or replace the activity students needed to learn? For researchers, it strengthens the case for transparent reporting, comparable instructional conditions, and publication of null results. The contribution is a more cautious interpretation of an uneven literature, with attention to the design of learning rather than a universal verdict about the technology.",
    "keyTakeaways": [
      "The conventional pooled effect was positive, but the publication-bias-adjusted average was close to zero with a wide credible interval.",
      "Very high between-study variation makes a single average a weak forecast for a particular classroom.",
      "Comparisons need to describe students’ cognitive activity, independent outcomes, and the instructional package around AI."
    ],
    "whyItMatters": "School and university decisions require evidence about specific learning designs. A pooled AI effect can obscure selective publication, weak comparisons, and substantial differences between learners and tasks.",
    "sourceUrl": "https://doi.org/10.1007/s10462-026-11665-9",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://link.springer.com/article/10.1007/s10462-026-11665-9"
      },
      {
        "label": "Publisher full-text PDF",
        "url": "https://link.springer.com/content/pdf/10.1007/s10462-026-11665-9.pdf"
      },
      {
        "label": "Preregistered review protocol",
        "url": "https://aspredicted.org/hpbd-dk75.pdf"
      }
    ],
    "image": "/images/research/covers/aied-198-backfill.png",
    "imageAlt": "Two educators and a learner compare circuit experiment sketches and written observations in a science classroom.",
    "summaryImage": "/images/research/summary/aied-198-backfill-summary.png",
    "summaryImageAlt": "Two educators and a learner compare circuit experiment sketches and written observations in a science classroom.",
    "summaryAudio": "/audio/research/aied-198-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-199",
    "slug": "news-claude-google-workspace-direct-editing",
    "title": "Product news: Claude enters Google Docs, Sheets, and Slides in beta, bringing review closer to the file",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Google Workspace",
      "Claude",
      "document revision",
      "spreadsheet literacy",
      "teacher workflows"
    ],
    "shortSummary": "Anthropic launched Claude for Google Workspace in public beta on October 6, alongside connectors that create and edit Google files from Claude. The add-on can work with selected text, cells, or slides inside an open file. OpenAI's Word add-in and Gemini's course-context tools provide comparisons. For educational work, the benefit of fewer handoffs should be paired with clear edit scope, checked formulas, and a record of consequential changes.",
    "fullSummary": "Anthropic launched Claude for Google Workspace in public beta on October 6, 2026 for paid Claude plans. The add-on works inside Google Docs, Sheets, and Slides, while separate beta connectors let Claude create and edit Google files from a conversation. The assistant can work with selected text, cells, or slides. This moves assistance closer to the artifact, but it also makes the scope of an edit more important because the source file itself can change.\n\nFor a teacher revising a handout, the intended change may be narrow: clarify an instruction without changing the question, adjust the reading level without removing the reasoning, or reorganise headings without altering the content. A useful request states both what should change and what should remain stable. The resulting edit should then be checked in the document, rather than accepted because the assistant describes it as an improvement.\n\nSpreadsheets require a different kind of review. A formula can produce a plausible value while selecting the wrong rows or treating missing entries as zero. In a teaching exercise, students could compare a generated calculation with a small manual example and explain any discrepancy. They should inspect the referenced cells and assumptions, not only the appearance of the chart. That turns direct editing into an opportunity to practise spreadsheet reasoning.\n\nPresentations add another boundary between content and form. A slide can look cleaner after a revision while losing a unit, a qualification, or the connection to its source. Students could be asked to identify one detail that must remain visible and explain why. A peer could review the edited slide against the underlying material. The goal is a clearer representation that still preserves the meaning of the evidence.\n\nOpenAI's ChatGPT for Word offers another in-document route for drafting and revision. Gemini in Classroom brings course and assignment context into study prompts. Compared with these tools, Anthropic's Workspace release offers a new way to work directly across familiar file types. The interfaces differ, but educators should still distinguish access to a file, permission to change it, and acceptance of the resulting content.\n\nA department can establish a modest review habit without making every small edit burdensome. Staff might keep an original version for substantial revisions, define the section or range involved, and record changes that affect interpretation or assessment. Formatting corrections need a different level of attention from changes to a grading formula or research conclusion. The review should follow the consequence of the edit.\n\nThe release is likely to interest teams already working in shared Google files, though beta status and local account controls remain relevant. A useful educational adoption would reduce mechanical copying while keeping the important decisions inspectable. Learners and teachers should be able to explain what the assistant changed, why the change was wanted, and how they checked the result. Familiar document software can then become a place to practise responsible revision, rather than a surface where fluent changes happen unnoticed.",
    "keyTakeaways": [
      "The October 6 launch is a public beta for paid Claude plans, with both an add-on and file-editing connectors.",
      "Define which content may change and inspect the result in the actual document, sheet, or deck.",
      "Match review effort to the consequence of an edit, especially for formulas and interpretations."
    ],
    "whyItMatters": "Direct AI editing can save mechanical work while making careful revision and spreadsheet reasoning more important to teach.",
    "sourceUrl": "https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude in Google Docs, Sheets and Slides — 2026-10-06",
        "url": "https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides"
      },
      {
        "label": "OpenAI Help: ChatGPT for Word — 2026-09-17",
        "url": "https://help.openai.com/en/articles/20001526-chatgpt-for-word"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-10-06",
    "image": "/images/research/covers/aied-199-backfill.png",
    "imageAlt": "School staff compare a lesson-sequence draft with a calculation-structure template and a selected spreadsheet range while recording checks.",
    "summaryImage": "/images/research/summary/aied-199-backfill-summary.png",
    "summaryImageAlt": "School staff compare a lesson-sequence draft with a calculation-structure template and a selected spreadsheet range while recording checks.",
    "summaryAudio": "/audio/research/aied-199-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-200",
    "createdAt": "2026-10-07",
    "title": "From generative-AI feedback to sport skill learning: The roles of perceived competence and autonomous motivation in university physical education",
    "authors": [
      "Jiehao Dong",
      "Zhen Zhang"
    ],
    "venue": "Frontiers in Psychology",
    "year": 2026,
    "type": "journal",
    "slug": "basketball-ai-feedback-package-delayed-retention",
    "tags": [
      "Physical Education",
      "AI Feedback",
      "Randomized Trial",
      "Learning Retention"
    ],
    "shortSummary": "A randomized university basketball study found better free-throw accuracy and technique after a structured AI feedback programme, including a test two weeks after feedback stopped. The comparison involved whole teaching packages: written personalized feedback and an action plan versus conventional oral instructor feedback. It therefore does not isolate an AI-specific effect. The delayed advantage reflected a higher retained skill level, while the study found no clear difference in the rate of forgetting.",
    "fullSummary": "AI-supported learning research usually measures words, answers, or code. A university basketball trial instead examined a physical skill: free throws. Students assigned to a structured generative-AI feedback programme performed better than those receiving conventional instructor feedback, and the difference remained detectable two weeks after instruction. The important qualification is that the study compared complete feedback arrangements, not the source of an otherwise identical message.\n\nJiehao Dong and Zhen Zhang recruited 240 undergraduates and randomly assigned 120 to each condition during an eight-week physical-education unit. Both groups followed the same basketball curriculum, practice volume, technical rubric, and scheduled feedback frequency across sixteen sessions. The experimental package combined written AI-generated feedback, a standardized format, individualized explanation, an interface, and a brief action-intention step. The comparison package used the course's conventional oral instructor feedback.\n\nThe system worked from structured performance information, including recent shooting results and movement indicators, rather than inviting unrestricted chatbot conversation. Learners received guidance tied to a common technical rubric and a next action to attempt. This design connects the feedback to observable practice, but several features changed together. Written versus oral presentation, opportunities to reflect, personalization, novelty, and the action plan could all contribute to the difference alongside the generative model.\n\nSkill was assessed at baseline, immediately after instruction, and fourteen days later without technical feedback. Shooting accuracy came from thirty free throws under standardized conditions. Two independent instructors, unaware of the assigned condition, rated anonymized videos using a five-domain technique rubric. Delayed accuracy and technique were the co-primary outcomes, with the analysis requiring both to favor the experimental package after adjustment for multiple testing.\n\nBoth groups improved. Immediately after the programme, accuracy had increased by 18.6 percentage points in the AI-package group and 11.6 points in the comparison group. The model-estimated difference in improvement was 6.7 percentage points. At the delayed test, the adjusted advantage was 6.1 percentage points for shooting accuracy and 1.63 points for technique quality. Both delayed outcomes met the study's statistical criterion. Of the original 240 students, 229 completed the delayed assessment; analyses retained original group assignment and examined missing-data sensitivity.\n\nA higher score after two weeks is evidence of retained performance over that interval, but it is not evidence of slower forgetting. Both groups declined modestly after the immediate test, and the differences in their declines were not statistically detectable. The trial also found higher perceived competence and autonomous motivation in the experimental condition. Because the proposed psychological mediators were measured at the same mid-course occasion, their statistical associations cannot establish a causal sequence from competence to motivation to skill.\n\nFor physical-education teachers, the result makes a concrete feedback design worth examining: record a small set of relevant observations, explain a correction, and ask the learner to plan the next attempt. Whether AI is necessary for that design requires another comparison. The study concerns one basketball unit, a short retention interval, and a bundled intervention. It does not demonstrate transfer to other sports, durable long-term learning, or replacement of a teacher's observation and judgment.",
    "keyTakeaways": [
      "The complete AI feedback package improved shooting accuracy and technique relative to conventional oral feedback in this trial.",
      "The advantage persisted at a fourteen-day test without feedback, but there was no clear difference in forgetting rates.",
      "AI source, written format, personalization, and action planning were bundled; the study does not identify their separate effects."
    ],
    "whyItMatters": "Physical skill outcomes make feedback quality visible beyond learner satisfaction. The trial suggests a promising structured practice design while preserving the need to test which components produce the benefit.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2026.1965551",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1965551/full"
      },
      {
        "label": "Published full-text PDF",
        "url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1965551/pdf"
      }
    ],
    "image": "/images/research/covers/aied-200-backfill.png",
    "imageAlt": "A university learner prepares a free throw while a coach holding a tablet shot sequence and a peer observe in a bright gym.",
    "summaryImage": "/images/research/summary/aied-200-backfill-summary.png",
    "summaryImageAlt": "A university learner prepares a free throw while a coach holding a tablet shot sequence and a peer observe in a bright gym.",
    "summaryAudio": "/audio/research/aied-200-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-201",
    "slug": "news-chatgpt-teens-study-tools-college-planner-preview",
    "title": "Product news: ChatGPT adds teen study tools and previews a U.S.-focused College Planner",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "ChatGPT for Teens",
      "College Planner",
      "study tools",
      "student agency",
      "college preparation"
    ],
    "shortSummary": "OpenAI's October 7 update combines teen study tools with a forthcoming College Planner. The planner was not yet launched: its initial design targets U.S. students in grades 10–12 planning for four-year college, with wider coverage intended later. The announcement also discusses flashcards, quizzes, and note capture. Anthropic's teacher resources and Gemini's classroom tools provide comparisons, while reported usage should not be mistaken for demonstrated learning or admissions outcomes.",
    "fullSummary": "OpenAI announced teen learning updates on October 7, 2026 and said College Planner would be added soon. The initial planned experience is for U.S. students in grades 10–12 who intend to attend a four-year college. Wider geographical and educational coverage is a future plan. The announcement therefore does not establish that College Planner is already available, or that students in Hong Kong can use a local admissions version.\n\nThe proposed planner brings application requirements, deadlines, and tasks into one place. Separately, the update describes study features including flashcards and quizzes from notes, plus multi-page photo capture on iOS. These serve different purposes: one organises a process, while the others support study activity. Neither should be treated as a substitute for deciding what a student wants to study, understanding a topic, or checking an institution's current requirements.\n\nFor college preparation, organisation can be a useful form of support. A student may know their goals yet struggle to keep track of several documents and dates. A counsellor can help the student distinguish a required step from a suggestion and identify where information must be confirmed with the institution. The student should remain involved in those decisions, rather than receive an apparently complete plan whose assumptions are difficult to inspect.\n\nFor study tools, the first check is whether the generated material represents the notes accurately. A flashcard can reinforce an oversimplified definition, and a quiz can offer a misleading answer. Teachers could ask students to review a small set, correct one weak item, and explain what knowledge it tests. A later task without the cards would help distinguish familiarity with the practice format from understanding that can be used elsewhere.\n\nAnthropic's teacher offering supports preparation and checks of understanding, while Gemini in Classroom connects learning prompts with selected course materials. These provide useful comparisons with OpenAI's update, but their intended users and access arrangements differ. Educators should evaluate the specific activity and available support rather than assume that a common label such as study tool describes the same experience across providers.\n\nOpenAI also shares early usage observations in the announcement. Activity measures can show that young people are using a feature; they do not establish improved comprehension, wellbeing, or admissions success. A school evaluating similar support could combine voluntary accounts of use with checked work and a clear route to teacher or counsellor help. Students who do not use the service should retain an equivalent way to complete the learning activity.\n\nThe update makes planning and practice more visible parts of the AI product agenda. Its educational promise is strongest when the tool helps a student ask a better question, organise the next step, or notice what they do not yet understand. The important boundary remains clear: a forthcoming planner is a proposed resource with a defined initial scope, while decisions about learning and future study continue to require the student's own judgment and human guidance.",
    "keyTakeaways": [
      "College Planner was forthcoming on October 7, initially designed for U.S. grades 10–12 and four-year college preparation.",
      "Check generated study items against course material and assess understanding beyond the practice format.",
      "Usage observations do not establish learning, wellbeing, or admissions effects."
    ],
    "whyItMatters": "Planning and practice tools can support students when availability is described accurately and organisation remains connected to understanding and human guidance.",
    "sourceUrl": "https://openai.com/index/teens-learn-and-plan/",
    "sourceUrls": [
      {
        "label": "OpenAI: Teens learning tools and College Planner plans — 2026-10-07",
        "url": "https://openai.com/index/teens-learn-and-plan/"
      },
      {
        "label": "Anthropic: School and district teacher offering — 2026-08-28",
        "url": "https://claude.com/resources/articles/claude-for-teachers-now-available-for-schools-and-districts"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-10-07",
    "image": "/images/research/covers/aied-201-backfill.png",
    "imageAlt": "A counsellor and parent help a teenager review a next-step planning sheet and study cards while he records questions.",
    "summaryImage": "/images/research/summary/aied-201-backfill-summary.png",
    "summaryImageAlt": "A counsellor and parent help a teenager review a next-step planning sheet and study cards while he records questions.",
    "summaryAudio": "/audio/research/aied-201-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-202",
    "createdAt": "2026-10-08",
    "title": "Teacher feedback VS AI-assisted peer feedback in L2 writing: A quasi-experimental study in a Chinese University",
    "authors": [
      "Jinfeng Tang",
      "Ping Li",
      "Rong Luo"
    ],
    "venue": "PLOS One",
    "year": 2026,
    "type": "journal",
    "slug": "ai-assisted-peer-writing-feedback-over-two-tasks",
    "tags": [
      "Peer Learning",
      "Writing Education",
      "AI Feedback",
      "Higher Education"
    ],
    "shortSummary": "An eight-week study compared teacher comments with peer feedback supported by DeepSeek in two university English classes. Both approaches supported better revised essays, but their improvement patterns and feedback focus differed. An initial vocabulary-diversity advantage for the AI-peer class did not persist into the second task, and sentence-complexity results were limited. Because intact classes received different teaching packages, the findings cannot separate AI's contribution from peer discussion or other class differences.",
    "fullSummary": "A peer who discusses an essay with AI support is doing something different from a chatbot that comments directly on a student's work. A PLOS One study examines that combined activity across two university English classes. The results suggest that teacher feedback and AI-assisted peer feedback can produce different revision patterns, while also showing how easily broad claims about language development can outrun the measures collected.\n\nJinfeng Tang, Ping Li, and Rong Luo followed 61 second-year English majors at a university in central China for eight weeks. Two intact classes were selected from six using initial writing performance: thirty students received AI-assisted peer feedback and thirty-one received teacher feedback. The same instructor, teaching content, and lesson periods were maintained. This was a quasi-experiment, however, with no individual random assignment. A similar starting score does not remove every possible difference between classes.\n\nEach student completed two argumentative writing tasks, with an initial and revised draft for each, yielding 244 texts. Both feedback arrangements used a common checklist covering organization, argumentation, grammar, vocabulary, and technical details. In the experimental class, students worked in pairs and used DeepSeek to analyze a partner's draft, then discussed and negotiated the comments they would offer. The teacher supervised that process without directly supplying content feedback. The comparison class received the instructor's written comments and revision suggestions.\n\nTeacher feedback covered more issues in the first task, with 316 recorded suggestions compared with 185 in the AI-peer class. Its focus changed in the second task toward organization and argumentation. Essay scores improved under both approaches, but the reported revision gains followed different trajectories. The AI-peer class's gains were relatively stable across the two tasks, whereas the teacher-feedback class showed a larger initial gain and a smaller subsequent one. These are results for successive drafting and revision cycles, rather than evidence from a delayed independent transfer test.\n\nThe language-feature analyses were more qualified than a general statement that AI improved writing. The AI-peer class showed an initial lexical-diversity advantage, but the group difference was no longer significant in the second task. For syntactic complexity, the detailed results reported an overall improvement across the first revision cycle, without a significant group difference or interaction. In the second task, the reported time, group, and interaction effects were all non-significant. There was therefore no established advantage of one feedback mode for sentence complexity.\n\nFor teachers, the interesting design element is the discussion between classmates after consulting AI. Learners must decide which suggestions fit a partner's meaning and explain those choices. A classroom adaptation could retain a common rubric and ask students to document why they accepted or rejected a suggestion. That is an instructional implication, not a mechanism demonstrated by this study: it did not closely trace how learners internalized feedback or separate the effect of AI from peer negotiation.\n\nThe authors propose combining teacher, peer, and AI contributions. That hybrid was not itself tested here. The evidence comes from one institution, two non-randomized classes, two writing tasks, and platform-based writing scores. It supports further investigation of complementary feedback roles, while leaving durable writing development, independent performance, and the specific value added by the AI component unresolved.",
    "keyTakeaways": [
      "The intervention combined DeepSeek with peer discussion; it did not test AI feedback in isolation.",
      "Initial lexical-diversity differences disappeared on the second task, and neither approach had a demonstrated syntactic-complexity advantage.",
      "The proposed teacher-peer-AI hybrid is a future design suggestion, not a condition evaluated in this quasi-experiment."
    ],
    "whyItMatters": "Feedback quality depends on how learners interpret and negotiate comments. This study adds process-oriented classroom evidence, while reminding educators to distinguish revised text quality from lasting independent writing development.",
    "sourceUrl": "https://doi.org/10.1371/journal.pone.0345976",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0345976"
      },
      {
        "label": "Publisher full-text PDF",
        "url": "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0345976&type=printable"
      }
    ],
    "image": "/images/research/covers/aied-202-backfill.png",
    "imageAlt": "A student drafts an essay at a window ledge while a peer points to an argument map and a lecturer observes.",
    "summaryImage": "/images/research/summary/aied-202-backfill-summary.png",
    "summaryImageAlt": "A student drafts an essay at a window ledge while a peer points to an argument map and a lecturer observes.",
    "summaryAudio": "/audio/research/aied-202-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-203",
    "slug": "news-claude-dashboards-motion-inspectable-explainers",
    "title": "Product news: Claude Dashboards and Motion make data and animations more inspectable for teaching",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Motion",
      "Claude Dashboards",
      "data literacy",
      "animated explanations",
      "instructional design"
    ],
    "shortSummary": "Anthropic launched Claude Dashboards and Motion in beta on October 8, with different plan availability, while removing the beta label from Docs, Slides, and Design. Charts expose their underlying queries, and Motion produces editable animation code. OpenAI's learning visualisations and Gemini's classroom tools offer comparisons. For educators, the opportunity is to inspect how a visual was constructed and whether its movement or data presentation helps explain the intended relationship.",
    "fullSummary": "Anthropic announced Claude Dashboards and Claude Motion on October 8, 2026. Dashboards is in beta on paid plans, while Motion is in beta on Team and Enterprise. The same announcement takes Docs, Slides, and Design out of beta. It highlights inspectable queries behind charts and editable code behind animations. These are useful features for educational review, but neither a live chart nor an attractive animation establishes that its explanation is correct.\n\nA dashboard turns a question into a set of data decisions. Which records are included? Which dates define the period? Is the value a count, a total, or an average? When those decisions are visible, students can compare the chart with the query and ask whether it answers the original question. The visible construction matters more than the impression of authority created by a polished display.\n\nA teaching example could use public transport data to compare travel patterns across days. Students would predict a pattern, inspect a generated chart, and check the definition of each category. If a value changes after a refresh, they would distinguish new data from a changed calculation. A small record of the source and refresh time can help them reconstruct the result instead of treating a moving display as a fixed finding.\n\nAnimation presents a different set of choices. Movement can draw attention to a relationship, but it can also imply a sequence or mechanism that the evidence does not support. Teachers might pause an explainer at key moments and ask what each transition means. A useful revision could slow one change, keep a reference object visible, or remove motion that adds interest without adding understanding. Editable code makes those choices possible to inspect.\n\nOpenAI's teen learning update also highlights visualisations and study activities. Gemini's course-connected tools help students work from their classroom material. Compared with these approaches, Anthropic's release focuses on producing data displays and animated explanations. The educational task should determine which representation is helpful. Sometimes a static diagram, a table, or a spoken explanation will make the relationship easier to examine. Learners could also redraw the key relationship themselves, making it easier to see whether they understood more than the animation's sequence.\n\nA school can test a short explainer with a concrete question rather than a general request for feedback. Can learners predict what happens next, identify the variable that changed, or apply the idea to another example? Their answers can reveal whether the animation's structure supports the intended reasoning. Liking the visual or remembering its colours is a different outcome and should not be reported as conceptual understanding.\n\nThe product update makes the construction of visuals more accessible to people who may not normally write queries or animation code. That can support teacher experimentation if the resulting artifacts remain open to checking. A strong teaching resource would preserve meaningful labels, explain its assumptions, and offer a way to revisit the underlying evidence. The goal is an explanation people can reason with, not simply a more elaborate object to watch.",
    "keyTakeaways": [
      "Dashboards and Motion launched in beta on October 8 with different plan availability.",
      "Inspect the query or animation structure as well as the displayed result.",
      "Evaluate whether learners can reason with the representation, separately from visual appeal."
    ],
    "whyItMatters": "Inspectable visual creation can support data and science teaching when educators connect design choices to the reasoning students need to practise.",
    "sourceUrl": "https://claude.com/resources/articles/dashboards-and-motion",
    "sourceUrls": [
      {
        "label": "Anthropic: Claude Dashboards and Motion — 2026-10-08",
        "url": "https://claude.com/resources/articles/dashboards-and-motion"
      },
      {
        "label": "OpenAI: Teens learning tools and College Planner plans — 2026-10-07",
        "url": "https://openai.com/index/teens-learn-and-plan/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-10-08",
    "image": "/images/research/covers/aied-203-backfill.png",
    "imageAlt": "A teacher and student arrange three graph-storyboard cards while a colleague adjusts matching animation frames on a laptop.",
    "summaryImage": "/images/research/summary/aied-203-backfill-summary.png",
    "summaryImageAlt": "A teacher and student arrange three graph-storyboard cards while a colleague adjusts matching animation frames on a laptop.",
    "summaryAudio": "/audio/research/aied-203-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-204",
    "createdAt": "2026-10-09",
    "title": "Designing Safe and Relevant Generative Chats for Math Learning in Intelligent Tutoring Systems",
    "authors": [
      "Zachary Levonian",
      "Owen Henkel",
      "Chenglu Li",
      "Millie-Ellen Postle"
    ],
    "venue": "Journal of Educational Data Mining",
    "year": 2025,
    "type": "journal",
    "slug": "math-tutor-conversations-safety-and-groundedness",
    "tags": [
      "Intelligent Tutoring",
      "Mathematics Education",
      "AI Safety",
      "Learning Design"
    ],
    "shortSummary": "More than 8,000 learners used a structured growth-mindset conversation inside a mathematics tutor, giving researchers a practical view of moderation and response quality. Monitoring found no overtly objectionable model outputs, but identified subtler failures to respond appropriately to concerning student messages. A separate study found that educators preferred moderately guided textbook-supported answers. Neither safety monitoring nor response preference establishes improved learning, and both findings depend on the particular system and evaluation context.",
    "fullSummary": "An AI mathematics tutor needs to answer more than mathematical questions. Learners may joke, change the subject, or disclose something that calls for a careful response. A Journal of Educational Data Mining article examines these realities through two studies: a structured growth-mindset conversation deployed in the Rori tutor, and an offline evaluation of textbook-supported answers to conceptual mathematics questions. Its contribution is evidence about system behavior, rather than a test of mathematics achievement.\n\nZachary Levonian and colleagues first developed a conversational design using GPT-3.5, moderation checks on inputs and outputs, and predefined responses for different levels of concern. The design kept the exchange focused on a specific educational purpose. Researchers also used adversarial testing and ongoing review, recognizing that a moderation score alone cannot describe every inappropriate or unhelpful interaction. The work treats the surrounding system as part of the intervention, rather than assuming a model is safe by itself.\n\nA classroom usability phase involved 109 students across six classrooms and 252 conversations. A subsequent field deployment involved 8,168 users, 8,755 conversations, and 126,278 messages. Researchers reported no overtly objectionable generated outputs in their monitoring. That observation is useful, but it is bounded by this conversation format, model, user population, and review process. It cannot establish that unrestricted dialogue or another deployment would behave in the same way.\n\nThe more revealing issue concerned responses to student messages. In a review of unflagged conversations with elevated moderation scores, forty included material that warranted caution or correction. The system responded appropriately in thirty-seven, while three responses ignored or equivocated about the problem. A message can therefore avoid obviously prohibited content and still fail to provide an adequate educational response. The authors discuss the need for better handling of sensitive inputs and clearer pathways to human support.\n\nThe second study examined retrieval-augmented generation: supplying relevant textbook material when a model answers a question. Researchers selected 51 answerable conceptual or factual mathematics questions from a larger sample of student discussion posts. Nine educators and educational-technology designers compared answers produced with different amounts of guidance. They tended to prefer moderately guided answers over both unguided answers and strongly constrained ones. Greater resemblance to a source document did not automatically make an answer more useful.\n\nThis distinction matters for classroom design. A response may closely repeat a textbook yet fail to address the learner's confusion, while a more conversational answer may be preferred without being the strongest teaching choice. The study's preference judgments came from adults, not the students who asked the questions, and the evaluation concerned single-turn answers. It did not establish a relationship between those preferences and subsequent learning.\n\nFor developers and educators, the practical lesson is to evaluate several dimensions together: subject accuracy, relevance to the question, handling of student inputs, and the learning activity surrounding the exchange. The observed deployment supports the feasibility of a carefully structured conversation, while its exceptions show why monitoring must examine subtle failures as well as explicit harmful output. Broader claims about safety, student benefit, or instructional effectiveness require additional evidence in the intended setting.",
    "keyTakeaways": [
      "The large field deployment evaluated a structured conversation and its safeguards, not unrestricted chatbot safety.",
      "Some concerning student messages received inadequate responses even when generated text was not overtly objectionable.",
      "Textbook groundedness, adult response preference, and measured student learning are separate evaluation targets."
    ],
    "whyItMatters": "Educational dialogue needs both subject relevance and appropriate responses to learners. This study provides concrete design evidence while showing why safe-looking output and preferred answers are insufficient measures of educational success.",
    "sourceUrl": "https://doi.org/10.5281/zenodo.14751365",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://jedm.educationaldatamining.org/index.php/JEDM/article/view/840"
      },
      {
        "label": "Journal open-access full text",
        "url": "https://jedm.educationaldatamining.org/index.php/JEDM/article/download/840/237"
      },
      {
        "label": "Authors’ study code and data",
        "url": "https://github.com/DigitalHarborFoundation/chatbot-safety"
      },
      {
        "label": "Conceptual math retrieval study materials",
        "url": "https://github.com/DigitalHarborFoundation/rag-for-math-qa"
      }
    ],
    "image": "/images/research/covers/aied-204-backfill.png",
    "imageAlt": "Two pupils discuss an upward quadratic graph with a teacher beside a tablet offering calm mathematical hints.",
    "summaryImage": "/images/research/summary/aied-204-backfill-summary.png",
    "summaryImageAlt": "Two pupils discuss an upward quadratic graph with a teacher beside a tablet offering calm mathematical hints.",
    "summaryAudio": "/audio/research/aied-204-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-205",
    "slug": "news-claude-haiku-5-5-bounded-educational-tasks",
    "title": "Product news: Claude Haiku 5.5 expands fast, small-model options for narrowly defined educational tasks",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Haiku 5.5",
      "small models",
      "education infrastructure",
      "model evaluation",
      "task routing"
    ],
    "shortSummary": "Anthropic released Claude Haiku 5.5 on October 7 for fast, high-volume work and added an adjustable effort setting. This October 9 report examines bounded educational uses such as organising public resource metadata. The same announcement lowers Sonnet 5.5 cache-read pricing. OpenAI's model guide and Gemini's learning context provide comparisons. Lower cost can broaden experimentation, but each task still needs checks for omissions, incorrect categories, and cases requiring a person.",
    "fullSummary": "Anthropic released Claude Haiku 5.5 on October 7, 2026, positioning it for quick, repetitive, high-volume tasks. The model adds adjustable effort, and the announcement also lowers Sonnet 5.5 cache-read pricing. This October 9 report examines the implications for educational infrastructure. The company reports substantial efficiency improvements, but the practical value depends on the task, its error costs, and the review needed before an output is used.\n\nA smaller model may be useful for a narrowly specified stage of a larger process. A resource catalogue might need titles, dates, or subject labels extracted from public pages. Those fields can often be checked against the source more directly than an open-ended educational judgment. A team can define the permitted categories, retain the original link, and decide what happens when the source is ambiguous or incomplete.\n\nThe boundary is important. Assigning a topic label to a public document is different from deciding which student needs an intervention or whether an answer deserves a grade. Similar-looking classification tasks can have very different consequences. Educational developers should not move a consequential decision to a cheaper model simply because the interface accepts the same input format.\n\nA proposed pilot could use a small catalogue that staff have already reviewed. The model would extract specified fields, mark uncertainty, and leave missing information blank rather than invent it. Reviewers would examine omissions and false matches, including documents with similar titles or mixed languages. The result would show whether the task is sufficiently bounded for the model, not whether the model is universally reliable. For example, a missing publication date should remain distinct from a page update date, since substituting one for the other can distort a resource's apparent currency.\n\nOpenAI's October 2 model guide likewise recommends matching capability and effort to the workload. Gemini's course-context features illustrate a different concern: even a simple study interaction depends on supplying the right material. Compared with these approaches, Haiku 5.5 broadens the available building blocks. The application still needs a clear account of which information each stage receives and which decisions its output is allowed to influence.\n\nEfficiency should be measured across the whole process. A fast extraction that requires extensive correction may save little time. A well-defined task with a reliable uncertainty route may be more useful even if it returns fewer completed fields. Developers can compare total review effort, successful cases, and the treatment of unfamiliar inputs. They should also record the model and effort setting so later changes can be examined.\n\nFor teaching, this provides a practical lesson in decomposing a problem. Students can identify which stages are mechanical, which require interpretation, and where they would retain human judgment. They can then test their proposed division against realistic examples. Haiku 5.5's release makes more low-cost experimentation possible according to Anthropic's account. A sound educational use would make the boundaries of that experimentation clearer, rather than encourage every task to be automated because it has become cheaper.",
    "keyTakeaways": [
      "Haiku 5.5 launched October 7 for fast, bounded work, with adjustable effort and a related Sonnet cache-price update.",
      "Distinguish simple resource processing from consequential judgments about learners.",
      "Compare total reviewed task effort and uncertainty handling, not speed alone."
    ],
    "whyItMatters": "Small-model efficiency is most useful when developers can define a narrow task, verify its output, and keep consequential judgments appropriately reviewed.",
    "sourceUrl": "https://www.anthropic.com/claude-haiku-5-5",
    "sourceUrls": [
      {
        "label": "Anthropic: Introducing Claude Haiku 5.5 — 2026-10-07",
        "url": "https://www.anthropic.com/claude-haiku-5-5"
      },
      {
        "label": "OpenAI: Practical guide to the GPT-6 family — 2026-10-02",
        "url": "https://openai.com/index/practical-guide-building-gpt-6/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-10-09",
    "image": "/images/research/covers/aied-205-backfill.png",
    "imageAlt": "A librarian and two adult students sort resource cards and check missing catalogue fields while recording metadata notes.",
    "summaryImage": "/images/research/summary/aied-205-backfill-summary.png",
    "summaryImageAlt": "A librarian and two adult students sort resource cards and check missing catalogue fields while recording metadata notes.",
    "summaryAudio": "/audio/research/aied-205-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-206",
    "createdAt": "2026-10-10",
    "title": "LeanTutor: Towards a Verified AI Mathematical Proof Tutor",
    "authors": [
      "Manooshree Patel",
      "Rayna Bhattacharyya",
      "Thomas Lu",
      "Arnav Mehta",
      "Niels Voss",
      "Narges Norouzi",
      "Gireeja Ranade"
    ],
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence",
    "year": 2026,
    "type": "conference",
    "slug": "leantutor-proof-checking-and-translation-boundary",
    "tags": [
      "Mathematics Education",
      "Intelligent Tutoring",
      "Formal Verification",
      "AI Evaluation"
    ],
    "shortSummary": "LeanTutor connects a language model to the Lean theorem prover to support mathematical proof feedback. Its technical evaluation shows promising hints on a small selected benchmark, but also exposes a crucial boundary: a verifier can check the formal proof only after the learner's words have been translated correctly. The study did not test classroom learning, and feedback evaluation excluded failed translations. It is an early system design with explicit limitations, not a validated replacement for mathematics instruction.",
    "fullSummary": "A mathematical proof tutor should be able to explain a mistake without inventing one. LeanTutor, presented in the AAAI proceedings' educational-AI track, explores a way to combine conversational language models with formal proof checking. The design is promising because it connects feedback to an external verifier. Its evaluation also shows why that connection does not automatically make the entire tutoring exchange correct.\n\nManooshree Patel and colleagues built three connected components. The first translates a natural-language proof into Lean, a language and system for checking mathematical reasoning. The second proposes a next proof step, and the third turns the resulting information into feedback that a learner can read. The intention is to let students work in ordinary mathematical language while the system uses formal structure behind the scenes.\n\nThe authors created PeanoBench, a dataset of 371 proofs based on elementary arithmetic tasks from the Natural Numbers Game. It includes correct proofs and deliberately altered proofs with missing steps. The natural-language versions were written by the paper's authors using different styles; they were not collected from a classroom of independent students. This makes the benchmark useful for controlled technical development while limiting how well it represents the variety of real learner explanations and errors.\n\nA central evaluation question was whether the translated formal proof faithfully represented the submitted reasoning. A proof that successfully compiles is not enough: the model might have silently replaced a student's argument with a different valid solution. The researchers therefore compared individual tactics and resulting proof states with reference translations. They found that providing a formal staff solution helped, but also that the model relied heavily on that reference. Alternative reasoning paths remained difficult to translate reliably.\n\nThe end-to-end feedback evaluation was deliberately narrow. From incorrect proofs that had been successfully translated, the researchers selected twenty-one for evaluation. Two external graduate evaluators with mathematics-teaching experience rated feedback without knowing its model source; each proof was rated by one evaluator. LeanTutor's hints and suggested next steps received higher average accuracy and relevance scores than the language-model baseline. Readability was broadly comparable, and explicit next-step responses predictably revealed more of the answer. These are descriptive feedback ratings on a selected subset, not estimates of student learning gains.\n\nThe selection boundary is particularly important. The feedback assessment excluded proofs whose translation failed. In practice, a Lean error could arise from a student's mathematical mistake or from the system's own mistranslation. Confusing those cases could produce incorrect corrective feedback. The prototype also assumes a close correspondence between ordinary-language proof steps and formal tactics, and it relies on an already formalized staff solution. Those assumptions become harder to sustain as proofs grow more complex.\n\nFor mathematics educators and developers, LeanTutor identifies a useful direction: combine fluent explanations with tools that can check parts of the reasoning, and evaluate the connections between them. The next evidence needed is broader testing on authentic student work, transparent handling of uncertain translations, and classroom studies of independent proof construction. The paper offers an architectural and benchmark contribution, with a carefully bounded demonstration. It does not establish that the tutor is universally correct, improves retained understanding, or is ready to replace human feedback.",
    "keyTakeaways": [
      "Formal verification checks the translated proof; it does not guarantee that the translation preserves a learner’s intended reasoning.",
      "Feedback ratings came from twenty-one successfully translated incorrect proofs, excluding translation failures.",
      "LeanTutor is a technical proof of concept, with no classroom learning or retention evaluation in this paper."
    ],
    "whyItMatters": "External verifiers can strengthen mathematical tutoring, but every step between a learner’s explanation and the verifier requires its own evidence. This prototype makes that boundary concrete.",
    "sourceUrl": "https://doi.org/10.1609/aaai.v40i47.41514",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/41514"
      },
      {
        "label": "AAAI/EAAI published full-text paper",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/41514/45475"
      }
    ],
    "image": "/images/research/covers/aied-206-backfill.png",
    "imageAlt": "A mathematics lecturer and peer discuss a university student's induction proof beside a laptop showing feedback on the next step.",
    "summaryImage": "/images/research/summary/aied-206-backfill-summary.png",
    "summaryImageAlt": "A mathematics lecturer and peer discuss a university student's induction proof beside a laptop showing feedback on the next step.",
    "summaryAudio": "/audio/research/aied-206-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-207",
    "slug": "news-chatgpt-intelligent-ui-interactive-reasoning",
    "title": "Product news: ChatGPT Intelligent UI turns some answers into interactive learning experiences",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Intelligent UI",
      "GPT-6",
      "interactive explanations",
      "learning design",
      "visual reasoning"
    ],
    "shortSummary": "OpenAI introduced GPT-6 with Intelligent UI in ChatGPT on October 7, allowing responses to combine text, visuals, and interactive elements. This October 10 report focuses on educational use, while preserving the staged rollout and the distinction from Work and Codex. Anthropic's new visual tools and Gemini's Guided Vision offer comparisons. A useful interactive response should help learners predict, inspect, and explain a relationship rather than merely click through an attractive answer.",
    "fullSummary": "OpenAI introduced GPT-6 with Intelligent UI in ChatGPT on October 7, 2026. Responses can combine text, visuals, and interactive elements according to the question, with a staged rollout across plans. The update concerns the Chat experience rather than changing the models in Work or Codex. This October 10 report focuses on the educational implications of an answer that can become an interface the learner manipulates.\n\nInteractivity can make a relationship easier to investigate. A learner might change an input, compare two cases, or reveal another part of a diagram. But the presence of a slider or button does not determine what the learner understands. The activity needs a question that gives the interaction purpose. Otherwise, a student can explore the controls without noticing the idea the representation was meant to explain.\n\nA proposed lesson could ask students to predict an outcome before changing a value. They would then compare the displayed result with their prediction and explain the difference. The teacher could introduce a new example outside the interface to see whether the explanation transfers. This preserves a role for reasoning before and after the interaction, rather than treating successful navigation as evidence of learning.\n\nGenerated interfaces also need checking as software and as explanations. A calculator may use the wrong formula; a diagram may omit a condition; a chart may label a variable ambiguously. Teachers can begin with examples whose behaviour they can verify directly. They should inspect extreme or missing inputs and ask whether the display communicates its assumptions. A smooth animation should not conceal an incorrect relationship.\n\nAnthropic's October Dashboards and Motion release similarly expands visual creation, with inspectable queries and editable animation code. Gemini Guided Vision provides a different form of access through conversational descriptions of visual information. Compared with these developments, OpenAI's Intelligent UI adapts the format of an answer inside the conversation. The useful representation depends on the learner's task and access needs, not on which format looks most sophisticated.\n\nStudents can participate in the review. They might identify a label that needs clarification, compare the generated interface with a textbook example, or propose an input that would reveal a mistake. A class can also discuss when a plain paragraph or a static table would be easier to understand. This makes interface choice part of the reasoning rather than an invisible decision made entirely by the model. An explanation of one deliberately chosen counterexample can be more informative than a long record of successful interactions.\n\nFor an educational pilot, the strongest evidence would connect the interaction with something the learner can explain or do afterwards. Engagement, speed, and preference can be recorded separately, without being presented as comprehension. Intelligent UI introduces a flexible response format with clear potential for exploration. Its educational value will depend on the questions built around it and on whether users can inspect, challenge, and carry the underlying idea beyond the generated interface.",
    "keyTakeaways": [
      "Intelligent UI was announced October 7 for the Chat experience with staged availability.",
      "Build prediction and explanation around interaction, rather than treating clicks as learning evidence.",
      "Check the generated interface's calculations, labels, assumptions, and unfamiliar inputs."
    ],
    "whyItMatters": "Interactive answers can support learning when the interface makes reasoning visible and learners can use the idea beyond the interaction itself.",
    "sourceUrl": "https://openai.com/index/gpt-6-for-everyone/",
    "sourceUrls": [
      {
        "label": "OpenAI: GPT-6 and Intelligent UI — 2026-10-07",
        "url": "https://openai.com/index/gpt-6-for-everyone/"
      },
      {
        "label": "Anthropic: Dashboards and Motion — 2026-10-08",
        "url": "https://claude.com/resources/articles/dashboards-and-motion"
      },
      {
        "label": "Google: Guided Vision in Gemini Live — 2026-10-01",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/"
      }
    ],
    "createdAt": "2026-10-10",
    "image": "/images/research/covers/aied-207-backfill.png",
    "imageAlt": "A teacher and two teenagers compare a paper prediction about moving a parabola upward with an interactive graph on a tablet.",
    "summaryImage": "/images/research/summary/aied-207-backfill-summary.png",
    "summaryImageAlt": "A teacher and two teenagers compare a paper prediction about moving a parabola upward with an interactive graph on a tablet.",
    "summaryAudio": "/audio/research/aied-207-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-208",
    "createdAt": "2026-10-11",
    "title": "Nonstandard English and the Automated Scoring of Open-Ended Math Problems",
    "authors": [
      "Abubakir Siedahmed",
      "Jaclyn Ocumpaugh",
      "Zelda Ferris",
      "Dinesh Kodwani",
      "Neil Heffernan",
      "Eamon Worden"
    ],
    "venue": "Proceedings of the 18th International Conference on Educational Data Mining",
    "year": 2025,
    "type": "conference",
    "slug": "math-scoring-dialect-and-prompt-sensitivity",
    "tags": [
      "Mathematics Assessment",
      "Educational Equity",
      "AI Evaluation",
      "Language Diversity"
    ],
    "shortSummary": "A study of 394 authentic mathematics responses examined how GPT-4o scores language associated with African American Vernacular English. Changing one targeted dialect feature did not significantly alter scores, while changing the grading prompt did. The latter contrast also changed rubric wording, so it cannot cleanly establish that a dialect instruction removed bias. The study makes a useful case for testing content scoring carefully, with language variation and mathematical reasoning evaluated separately.",
    "fullSummary": "An open-ended mathematics answer should be judged for its reasoning, without an irrelevant penalty for the variety of English a learner uses. An Educational Data Mining paper examines this problem with authentic student responses and GPT-4o. Its results reveal sensitivity to the grading prompt, but they do not provide a simple verdict that the model is either biased or fair across language varieties.\n\nAbubakir Siedahmed and colleagues selected responses from ASSISTments containing four grammatical features associated with African American Vernacular English: negative concord, subject-verb agreement leveling, preterit done, and habitual be. After cleaning and expert checking, the analysis included 394 responses across 349 mathematics problems from seventy-five schools. These features can also occur in other varieties of English. Individual student demographics were unavailable, so the study cannot identify the race or dialect identity of each response's author.\n\nFor each original response, the researchers constructed a comparison version by standardizing the targeted grammatical feature. This is a paired text comparison, not a comparison between separate groups of students. Other dialect features, spelling differences, or incomplete phrasing could remain in both versions. Preserving most of the original response helps keep the mathematical content comparable, but it also means that the comparison is not between fully standardized and wholly dialectal language.\n\nThe model scored both versions using two prompts and several temperature settings. One prompt gave grading instructions without referring to dialect. The other explicitly asked the model to treat standard English and dialect varieties equally. The principal paired comparisons found no significant difference between the original and modified responses under either prompt. That result does not establish equivalence or comprehensive fairness; the manipulation was limited, and some linguistic categories had relatively few examples.\n\nChanging the prompt raised scores for both text versions. The reported mean increase was 0.34 points for original responses and 0.26 points for the comparison responses on the zero-to-four scale. However, the published prompts contain another difference that matters to interpretation: the highest-score criterion in the first prompt required a complete explanation or justification, while the second omitted that phrase. Our reading of the displayed prompt table therefore identifies a possible scoring-rule confound. The observed increase cannot be cleanly attributed to the instruction about dialect alone.\n\nFor assessment teams, the useful lesson is methodological. A test of language-related scoring should hold the mathematical rubric constant, preserve the intended meaning of paired answers, and compare model decisions with careful human judgments. Raising scores is not automatically improving fairness or accuracy. An evaluation also needs to identify whether correct reasoning is recognized and whether the system applies the same substantive expectations across ways of expressing it.\n\nThe study opens a valuable line of inquiry in content assessment, beyond the more familiar case of essay grading. Its scope remains one model, selected linguistic features, and a restricted sample of mathematics responses. It did not measure learning gains or validate an operational grading policy. The paper's contribution is to make language variation and prompt sensitivity visible in a domain where educators might otherwise assume that only the mathematics matters.",
    "keyTakeaways": [
      "Standardizing one targeted dialect feature did not significantly change scores in this paired-response study.",
      "The prompt comparison changed both dialect guidance and rubric wording, limiting causal interpretation of the score increase.",
      "Fair assessment requires checking mathematical content, meaning-preserving language variation, and consistent scoring criteria together."
    ],
    "whyItMatters": "Automated mathematics scoring can be sensitive to language and instructions. Carefully controlled comparisons help distinguish fair recognition of reasoning from changes in grading strictness.",
    "sourceUrl": "https://doi.org/10.5281/zenodo.15870175",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.long-papers.195/index.html"
      },
      {
        "label": "Published proceedings full-text PDF",
        "url": "https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.long-papers.195/2025.EDM.long-papers.195.pdf"
      },
      {
        "label": "Official DOI publication record",
        "url": "https://zenodo.org/records/15870175"
      }
    ],
    "image": "/images/research/covers/aied-208-backfill.png",
    "imageAlt": "A student explains equivalent fraction bars to a listening teacher and classmate, with a tablet set aside.",
    "summaryImage": "/images/research/summary/aied-208-backfill-summary.png",
    "summaryImageAlt": "A student explains equivalent fraction bars to a listening teacher and classmate, with a tablet set aside.",
    "summaryAudio": "/audio/research/aied-208-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-209",
    "slug": "news-claude-dynamic-workflows-document-coverage",
    "title": "Product news: Claude Managed Agents adds dynamic workflows for larger tasks, making coverage records more important",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Managed Agents",
      "dynamic workflows",
      "document review",
      "research infrastructure",
      "coverage tracking"
    ],
    "shortSummary": "Anthropic's October 9 platform notes introduce dynamic workflows in beta for Claude Managed Agents. An agent can organise work into phases, run multiple agents, and combine results while the server executes the workflow in the background. This October 11 report considers large document collections. OpenAI's workflow guidance and Gemini's course-context tools provide comparisons: faster processing is useful only when reviewers can see which items were examined, omitted, or left unresolved.",
    "fullSummary": "Anthropic's October 9, 2026 platform release notes introduce dynamic workflows in beta for Claude Managed Agents. An agent can write a programme that runs other agents in phases and combines their results, with execution continuing on the server. This October 11 report examines the implications for work involving many documents. The release expands orchestration; it does not establish that a large collection has been reviewed completely or interpreted correctly.\n\nScale changes the evidence a user needs. When reviewing a handful of files, a person may remember which one failed to open or contained an ambiguous section. Across hundreds of items, those details can disappear inside a polished synthesis. A useful system should preserve an item-level record of what was processed, what failed, and what requires another look. The final summary should not silently treat an unread document as irrelevant. A coverage table can list each source identifier, its processing status, and the reason an item needs review.\n\nA proposed university-library exercise could use a small, known collection of public reports. Students would define the fields to collect, then compare the workflow's coverage with a manually prepared inventory. Some files could deliberately be missing a date or contain an unclear title. The exercise would test how the system represents uncertainty and incomplete access, without requiring a large or sensitive dataset.\n\nThe order of phases also matters. Deduplicating documents before extraction is different from merging apparently similar findings afterwards. A mistake early in the process can remove evidence that a later stage never sees. Students can draw the sequence, identify dependencies, and explain which intermediate results should be retained. That makes orchestration a subject of inquiry rather than an invisible efficiency feature.\n\nOpenAI's practical GPT-6 guide similarly discusses independent work, updates, and completion evidence. Gemini's course-context tools offer a smaller-scale example of selecting the material an assistant should use. Compared with those approaches, Anthropic's new workflow mechanism addresses execution across many pieces. The core educational question remains whether the person can reconstruct how the final account was assembled from the available inputs.\n\nA review plan should include exclusions as well as outputs. Why was an item skipped? Was it a duplicate, inaccessible, outside the defined scope, or simply not processed before the run ended? Those are different conditions. A team can sample completed items and inspect every unresolved category, while preserving the distinction between a partial result and a complete collection. Adding more agents does not remove the need for that judgment.\n\nThe beta may help developers build larger research-support or administrative tools with less orchestration work of their own. For education, the useful outcome would be a process that is easier to audit and explain, not merely one that finishes sooner. A strong student or developer handoff would include the collection definition, coverage record, important intermediate decisions, and remaining gaps. That makes scale compatible with an honest account of what the system actually did.",
    "keyTakeaways": [
      "Dynamic workflows entered beta in the October 9 platform update and are reported here on October 11.",
      "Preserve item-level coverage, failures, and reasons for exclusion when processing a collection.",
      "Inspect phase dependencies and intermediate decisions before accepting a combined result."
    ],
    "whyItMatters": "Large AI workflows remain academically useful only when their speed is accompanied by a traceable account of the evidence included and left out.",
    "sourceUrl": "https://platform.claude.com/docs/en/release-notes/overview",
    "sourceUrls": [
      {
        "label": "Anthropic Platform: October 9 dynamic-workflow beta — 2026-10-09",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "label": "OpenAI: Practical guide to the GPT-6 family — 2026-10-02",
        "url": "https://openai.com/index/practical-guide-building-gpt-6/"
      },
      {
        "label": "Google Workspace: Gemini in Classroom expansion — 2026-08-04",
        "url": "https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html"
      }
    ],
    "createdAt": "2026-10-11",
    "image": "/images/research/covers/aied-209-backfill.png",
    "imageAlt": "A librarian and two university researchers compare annotated public reports with a monitor showing document-analysis coverage and unresolved items.",
    "summaryImage": "/images/research/summary/aied-209-backfill-summary.png",
    "summaryImageAlt": "A librarian and two university researchers compare annotated public reports with a monitor showing document-analysis coverage and unresolved items.",
    "summaryAudio": "/audio/research/aied-209-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-210",
    "createdAt": "2026-10-12",
    "title": "Improving Generative AI Student Feedback: Direct Preference Optimization with Teachers in the Loop",
    "authors": [
      "Juliette Woodrow",
      "Chris Piech",
      "Sanmi Koyejo"
    ],
    "venue": "Proceedings of the 18th International Conference on Educational Data Mining",
    "year": 2025,
    "type": "conference",
    "slug": "teacher-preferences-shape-ai-probability-feedback",
    "tags": [
      "Teacher Agency",
      "AI Feedback",
      "Higher Education",
      "Learning at Scale"
    ],
    "shortSummary": "Teaching assistants' choices can help adapt AI feedback to a particular course. In a university probability course, researchers trained a model using comments that staff selected, edited, or wrote themselves. Experts preferred its feedback to GPT-4o in a blind comparison, while classroom staff still frequently wrote their own responses. The study demonstrates a feasible feedback workflow and stronger teacher preference, but it did not test whether students learned more or used the feedback more effectively.",
    "fullSummary": "Helpful feedback depends on the course as well as the student's answer. Terminology, the level of explanation, and what an instructor expects a learner to attempt next all shape an appropriate response. An Educational Data Mining study explores whether a language model can learn those preferences from teaching assistants' ordinary grading decisions, while leaving the final feedback under human control.\n\nJuliette Woodrow, Chris Piech, and Sanmi Koyejo developed a workflow in a university probability course. For each student response, teaching assistants saw two AI-generated feedback suggestions. They could choose one, edit it, or write a new comment. Those choices became training examples for direct preference optimization, a method that increases the likelihood of responses people prefer. The updated model then supplied suggestions for a later assignment. The workflow concerned feedback text, not automatic assignment of the student's grade.\n\nThe implementation used a Llama 3.1 model adapted to the course, with GPT-4o helping identify relevant observations about the submitted work. Staff reviewed all generated feedback before it reached students. This distinction is central to the contribution: the system learned from actual instructional choices and operated within an existing review process. It was not evaluated as an autonomous tutor communicating unchecked comments to a class.\n\nA controlled evaluation involved ten current or former course staff. They compared feedback on anonymized submissions under blind, randomized presentation, without being told which models had produced it. The adapted model was preferred in 56.8 percent of comparisons, versus 40.2 percent for GPT-4o; in the remaining three percent, neither response was considered suitable. Evaluators also gave the adapted feedback higher insightfulness ratings. These findings concern expert judgments of feedback quality and fit, rather than student achievement.\n\nThe classroom deployment supplied a useful counterbalance to the controlled comparison. Across two course offerings with nearly three hundred students and more than ten teaching assistants per term, staff often wrote their own feedback. In one later deployment round, teacher-written comments accounted for 58.7 percent of responses, compared with 27.5 percent selected from the adapted model and 13.8 percent from GPT-4o. A model can outperform another model while still being only one source of useful comments in practice.\n\nThe researchers also reported an implementation failure: a formatting bug prevented models from seeing equations in one deployment round, which also had fewer problems contributing preference data. That episode underscores how interface and data handling can change feedback quality independently of model capability. Automated critic scores supplied additional evaluation, but such judgments remain proxies that need to be compared with human review and real student use.\n\nThe study did not assess whether learners acted on the comments, improved their revisions, or retained more understanding. Its findings come from one course, and an exploratory fairness analysis was too limited to establish equitable performance across learners. For teaching teams, the practical contribution is an adaptable review-and-learning workflow: retain the ability to reject suggestions, learn from expert edits, and track why comments are chosen. The next question is whether feedback that better matches staff preferences also supports better independent learning.",
    "keyTakeaways": [
      "The model learned from teaching assistants’ real selections and edits, with human review before feedback reached students.",
      "Experts preferred the adapted feedback to GPT-4o, but staff still frequently wrote their own comments during deployment.",
      "Teacher preference and operational feasibility were measured; student uptake, learning gains, and retention were not."
    ],
    "whyItMatters": "Teachers need AI suggestions that fit their subject and pedagogy. This study shows how their choices can guide adaptation while preserving the distinction between preferred comments and demonstrated learning benefits.",
    "sourceUrl": "https://doi.org/10.5281/zenodo.15870266",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.short-papers.166/index.html"
      },
      {
        "label": "Published proceedings full-text PDF",
        "url": "https://educationaldatamining.org/edm2025/proceedings/2025.EDM.short-papers.166/2025.EDM.short-papers.166.pdf"
      },
      {
        "label": "Authors’ project materials",
        "url": "https://juliettewoodrow.github.io/dpo_feedback/"
      },
      {
        "label": "Official DOI publication record",
        "url": "https://zenodo.org/records/15870266"
      }
    ],
    "image": "/images/research/covers/aied-210-backfill.png",
    "imageAlt": "A teaching assistant, instructor and university student discuss two proposed feedback comments beside a probability tree for two coin tosses.",
    "summaryImage": "/images/research/summary/aied-210-backfill-summary.png",
    "summaryImageAlt": "A teaching assistant, instructor and university student discuss two proposed feedback comments beside a probability tree for two coin tosses.",
    "summaryAudio": "/audio/research/aied-210-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-211",
    "slug": "news-gemini-special-education-student-expression",
    "title": "Teacher case: Gemini voice prompts and visual guides support student expression in an Indonesian classroom",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini",
      "inclusive education",
      "student expression",
      "visual support",
      "teacher practice"
    ],
    "shortSummary": "In an October 5 Google-published account, Indonesian teacher Eni Wulandari describes using Gemini for visual guides and helping students express ideas through voice prompts. This October 12 report examines the design choices in that practice, without generalising its reported benefits. OpenAI's voice tools and Anthropic's visual-creation features offer comparisons. The educational priority is the learner's intended meaning, choice, and access to several ways of participating.",
    "fullSummary": "Indonesian teacher Eni Wulandari described her use of Gemini in a Google-published account on October 5, 2026. She reports creating visual guides and supporting students who have difficulty writing to express ideas through voice prompts and generated images. This October 12 article examines the practice as a teacher account. It does not establish an effect for all learners with disabilities or replace an individual understanding of each student's communication needs.\n\nThe important educational move is to offer another route for expressing an idea. A student may have a clear intention that is difficult to communicate through a particular written task. Voice, images, objects, or another supported form can make participation possible in a different way. The teacher still needs to check whether the resulting image represents what the student meant, rather than accepting the system's interpretation as the student's own.\n\nA simple activity could let a learner describe a familiar scene, inspect the generated image with support, and decide what should change. The teacher could ask about one element at a time and provide alternatives where needed. The process should preserve the learner's ability to reject a suggestion. For example, a learner may choose a different object or ask to remove a detail that changes the story. An attractive image is not successful communication if the student had little control over the meaning it conveys.\n\nVisual guides also need to be matched to their purpose. A picture that seems obvious to an adult may omit the action or relationship a learner needs to recognise. Teachers can compare the guide with the actual task, observe where confusion remains, and revise one feature at a time. They should retain other forms of explanation and support, rather than assume that adding an image solves the access problem.\n\nOpenAI's GPT-Live-1 API release offers developers more control over spoken interaction. Anthropic's Motion and document tools support the production of visual materials. Gemini's classroom example connects these broader capabilities with a specific teacher's practice. The products are not interchangeable interventions, and their availability or technical performance does not establish that they meet an individual learner's needs.\n\nAn inclusive review can focus on the student's choices and participation. Did the learner initiate an idea, recognise whether the output matched it, or request a meaningful revision? What support was needed, and was another method more useful? These observations can help the teacher refine the activity without reducing success to the number of images produced. They also keep the learner's agency visible alongside the technology.\n\nWulandari's account is valuable as a concrete example that colleagues can discuss and adapt cautiously. A school considering similar work should involve the learner and relevant support staff, use appropriate materials, and preserve several routes for communication. The aim is not to make every student interact with AI in the same way. It is to widen the ways students can express, question, and develop their own ideas, with technology serving the meaning they want to communicate.",
    "keyTakeaways": [
      "The source is an October 5 teacher account, reported October 12, rather than a general effectiveness study.",
      "Check whether a generated image expresses the learner's intended meaning and can be meaningfully revised.",
      "Evaluate participation and choice while retaining several routes for communication."
    ],
    "whyItMatters": "AI-supported expression is most inclusive when the learner remains the author of the meaning and can accept, reject, or reshape the output.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/special-education-gemini/",
    "sourceUrls": [
      {
        "label": "Google Teacher Voices: Eni Wulandari on Gemini — 2026-10-05",
        "url": "https://blog.google/products-and-platforms/products/education/special-education-gemini/"
      },
      {
        "label": "OpenAI: GPT-Live-1 API release — 2026-09-10",
        "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
      },
      {
        "label": "Anthropic: Dashboards and Motion — 2026-10-08",
        "url": "https://claude.com/resources/articles/dashboards-and-motion"
      }
    ],
    "createdAt": "2026-10-12",
    "image": "/images/research/covers/aied-211-backfill.png",
    "imageAlt": "A child chooses between illustrated story settings while a teacher listens and an assistant presents two picture cards beside a tablet.",
    "summaryImage": "/images/research/summary/aied-211-backfill-summary.png",
    "summaryImageAlt": "A child chooses between illustrated story settings while a teacher listens and an assistant presents two picture cards beside a tablet.",
    "summaryAudio": "/audio/research/aied-211-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-212",
    "createdAt": "2026-10-13",
    "title": "AI-Assisted Co-Creation: Bridging Skill Gaps in Student-Generated Content",
    "authors": [
      "Stanislav Pozdniakov",
      "Jonathan Brazil",
      "Mehrnoush Mohammadi",
      "Mollie Dollinger",
      "Shazia Sadiq",
      "Hassan Khosravi"
    ],
    "venue": "Journal of Learning Analytics",
    "year": 2025,
    "type": "journal",
    "slug": "student-created-questions-ai-feedback-uptake",
    "tags": [
      "Learning Analytics",
      "Student Agency",
      "AI Feedback",
      "Assessment Design"
    ],
    "shortSummary": "Students often rated AI feedback positively when creating multiple-choice questions in RiPPLE, but visible revision followed in only about 35 percent of editing sessions. The study examined feedback, activity logs, and student comments across introductory university courses. Its findings separate liking a response from using it and from learning through it. They suggest that question-authoring activities need explicit support for evaluating feedback, alongside safeguards against inaccurate or irrelevant suggestions.",
    "fullSummary": "Asking students to write assessment questions can reveal what they understand about a subject. AI feedback may help them improve the wording, answer choices, and explanations, but receiving a useful-looking comment is only the start of that process. A Journal of Learning Analytics study of RiPPLE shows a gap between positive reactions to AI feedback and the revisions visible in students' activity logs.\n\nStanislav Pozdniakov and colleagues examined an Australian university setting spanning introductory information-systems, economics, and health-sciences courses. Students created multiple-choice resources as part of assessment work, including a question, correct and incorrect options, and explanations. Once they had a draft, they could request AI feedback in a sidebar. The feedback summarized the resource, identified strengths, and suggested improvements. Students retained the option to proceed without adopting the advice or to disable assistance.\n\nThe research combined several sources of evidence rather than relying on a satisfaction survey alone. The authors analyzed 1,063 feedback instances linked to student-created questions, activity traces, 3,324 helpfulness ratings, and 601 comments. These are different analytic units, not a single sample size to apply to every result. The feedback analysis examined its focus, readability, and tone, while the logs examined the sequence of actions after students requested help.\n\nLearners generally responded positively: 79 percent of helpfulness ratings were positive, twelve percent neutral, and nine percent negative. Comments appreciated clarity, encouragement, and suggestions about question design or disciplinary explanation. Other comments identified incorrect information, repetition of changes already made, misunderstandings of the question's purpose, or advice that was difficult to act on. Positive sentiment therefore coexisted with concrete quality problems that students needed to recognize.\n\nVisible behavior was more selective. In approximately 65 percent of resource-creation sessions, the next step after feedback was self-assessment rather than editing. The authors summarized active attempts to revise as occurring in about 35 percent of sessions. When learners did revise, they often changed the question body or answer options. These logs show observable interaction patterns, but they cannot fully reveal whether a student considered and reasonably rejected a suggestion, felt satisfied with the draft, or overlooked a useful improvement.\n\nThe study does not establish that feedback caused better questions or improved subject knowledge. It lacked a randomized comparison for those outcomes, and helpfulness reports are not independent assessments of learning. The authors also used language models to help classify feedback content, with human checks and acknowledged disagreements; that analytical process carries its own uncertainty. Findings from this interface, prompt design, and university context should not automatically be extended to essays, projects, or younger learners.\n\nFor instructors, the practical opportunity is to connect AI comments with an explicit decision. Students could explain which suggestion they accepted, which they rejected, and why the final question better tests the intended concept. That would make judgment more visible without assuming every suggestion deserves adoption. It remains a teaching implication to test, not an intervention proven by this study. The research offers a realistic account of feedback reception and use, and a reminder that the path from a positive rating to stronger independent understanding still needs to be demonstrated.",
    "keyTakeaways": [
      "Most helpfulness ratings were positive, while visible revision followed in only about 35 percent of editing sessions.",
      "No edit does not necessarily mean no engagement; learners may accept, reject, or overlook advice for different reasons.",
      "The study describes feedback and activity patterns, without demonstrating causal gains in question quality or subject learning."
    ],
    "whyItMatters": "AI feedback only supports learning when students can judge and use it appropriately. Combining learner comments with activity traces helps course teams see where that process needs instructional support.",
    "sourceUrl": "https://doi.org/10.18608/jla.2025.8601",
    "sourceUrls": [
      {
        "label": "Peer-reviewed article: full text and publication record",
        "url": "https://www.learning-analytics.info/index.php/JLA/article/view/8601"
      },
      {
        "label": "Published full text via ERIC",
        "url": "https://files.eric.ed.gov/fulltext/EJ1465725.pdf"
      },
      {
        "label": "Publisher PDF view",
        "url": "https://learning-analytics.info/index.php/JLA/article/view/8601/7889"
      }
    ],
    "image": "/images/research/covers/aied-212-backfill.png",
    "imageAlt": "A university student revises a biology multiple-choice question while a classmate and lecturer consider feedback shown beside a simple animal-cell drawing.",
    "summaryImage": "/images/research/summary/aied-212-backfill-summary.png",
    "summaryImageAlt": "A university student revises a biology multiple-choice question while a classmate and lecturer consider feedback shown beside a simple animal-cell drawing.",
    "summaryAudio": "/audio/research/aied-212-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-213",
    "slug": "news-gemini-colab-oral-defence-assessment",
    "title": "Teacher case: A Malaysian lecturer uses oral defence to assess students' judgment in Gemini-assisted coding",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini in Colab",
      "assessment",
      "data mining education",
      "oral defence",
      "human judgment"
    ],
    "shortSummary": "An October 5 teacher account from Universiti Putra Malaysia describes students using Gemini in Colab while defending their modelling choices in verbal interviews. This October 13 report considers the assessment design, not a proven improvement in attainment. OpenAI's software-testing cases and Anthropic's project coordination provide context: when AI can produce working code, educators need evidence of what students understand, can troubleshoot, and can justify in a changed situation.",
    "fullSummary": "Nurfadhlina Mohd Sharef of Universiti Putra Malaysia described a change to assessment in an October 5, 2026 Google-published account. Her data-mining students use Gemini in Google Colab, while verbal interviews ask them to defend choices, troubleshoot, and identify questionable AI suggestions. This October 13 report examines that design. The short practitioner account does not provide a comparative study of attainment or establish that oral assessment is suitable in the same form for every learner.\n\nThe central problem is recognisable: a working model does not reveal all the reasoning that produced it. A student may have made careful decisions, accepted the first generated answer, or relied on a mixture of both. Asking for an explanation can make those differences more visible. The interview should focus on the decisions the course intends to assess, rather than become an unpredictable test of confidence or speaking style.\n\nA lecturer could ask why a particular variable was included, what an error message means, or how a result would change under a different assumption. The question should connect to the student's actual work. A useful answer may include uncertainty and a proposal for checking it. Students should not be rewarded merely for producing a confident defence of a weak choice.\n\nThe method also needs clear expectations. Learners can be told which kinds of reasoning they should be prepared to explain and what assistance is permitted during preparation. Relevant access needs and language demands should be considered when choosing the format. An alternative way to demonstrate the same understanding may be appropriate. The goal is valid evidence of judgment, not a single performance style imposed on everyone.\n\nOpenAI's recent Devin case separates a software demonstration from the scope of completed tests. Anthropic's redesigned projects coordinate several strands of AI work. Compared with these developments, the Gemini classroom account shifts attention to the human accepting and explaining the result. More capable coding assistance makes that distinction important: successful execution and a student's understanding are different claims with different evidence.\n\nA balanced assessment could combine the code, a small record of consequential decisions, and a focused follow-up conversation. Students might identify one AI suggestion they rejected and explain why, then adapt a part of the analysis to a new example. Reviewers can examine whether the explanation matches the implementation. A second assessor could review a sample of responses to check whether the criteria are being applied consistently. This also gives feedback that can guide the student's next attempt, rather than only produce a score.\n\nThe account offers a concrete idea for redesigning assessment as AI-assisted work becomes ordinary. Its value lies in making students' reasoning discussable, while leaving room to examine fairness, workload, and consistency across assessors. A useful local trial would document the questions asked, the criteria applied, and the difficulties encountered. The aim is an assessment in which learners can show what they know, how they check assistance, and where their own judgment changes the work.",
    "keyTakeaways": [
      "The October 5 source describes a lecturer's practice, not a controlled comparison of assessment outcomes.",
      "Connect oral questions to the modelling decisions the course intends to assess.",
      "Combine implementation, decision records, and accessible follow-up evidence of understanding."
    ],
    "whyItMatters": "Assessment can remain meaningful with AI-assisted coding when it examines the learner's judgment and understanding rather than only the finished program.",
    "sourceUrl": "https://blog.google/products-and-platforms/products/education/gemini-google-colab/",
    "sourceUrls": [
      {
        "label": "Google Teacher Voices: Gemini and coding interviews — 2026-10-05",
        "url": "https://blog.google/products-and-platforms/products/education/gemini-google-colab/"
      },
      {
        "label": "OpenAI: Devin testing workflow with Astra — 2026-09-11",
        "url": "https://openai.com/index/cognition-devin-testing-with-astra/"
      },
      {
        "label": "Anthropic: Redesigned Claude Code projects — 2026-09-17",
        "url": "https://claude.com/resources/articles/projects-redesigned"
      }
    ],
    "createdAt": "2026-10-13",
    "image": "/images/research/covers/aied-213-backfill.png",
    "imageAlt": "A university student explains a simple shape-classification decision tree to a lecturer during a supportive coding assessment conversation.",
    "summaryImage": "/images/research/summary/aied-213-backfill-summary.png",
    "summaryImageAlt": "A university student explains a simple shape-classification decision tree to a lecturer during a supportive coding assessment conversation.",
    "summaryAudio": "/audio/research/aied-213-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  }
];
