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
