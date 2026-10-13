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
