import type { ResearchPaper } from "@/lib/types";

// Archive coverage dates; the actual publication is recorded in the release receipt.
export const researchNewsRelease20261027To1030: ResearchPaper[] = [
  {
    "id": "aied-243",
    "slug": "research-adatutor-strategy-selection-simulated-dialogues",
    "title": "Preprint: AdaTutor learns when to change tutoring strategy in simulated dialogues",
    "authors": [
      "Rajeev Bhatt Ambati",
      "Shashank Srivastava",
      "Snigdha Chaturvedi"
    ],
    "venue": "arXiv preprint",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "adaptive tutoring",
      "pedagogical strategies",
      "simulated learners"
    ],
    "shortSummary": "AdaTutor compares forms of assistance before selecting its next response. Tests with simulated learners suggest a benefit over fixed strategies, leaving real-student learning and classroom transfer to be established.",
    "fullSummary": "A preprint submitted on October 26, 2026 introduces AdaTutor, a system that learns to choose among six tutoring strategies, including hints, worked examples and requests for self-explanation. Rajeev Bhatt Ambati and colleagues call the training approach Comparative Pedagogical Supervision. It compares possible responses within a tutoring context rather than prescribing the same form of help throughout a dialogue. Across mathematics and science reasoning datasets, the authors report stronger results than their best fixed-strategy baselines after five tutoring turns.\n\nThe evaluation boundary matters. The experiments use a stateful language-model student simulator, and the paper also examines the quality of generated responses. Those checks are useful for developing a tutoring policy, but they are not a classroom trial with measured student learning. Success with a simulator does not establish retention, transfer or the appropriateness of a strategy for a particular child. The work is presented here as a preprint, with those distinctions kept visible.\n\nFor educators, the design question is concrete: what evidence would justify changing the kind of help? The following activity is an AIEDHK teaching proposal. A teacher-education group could prepare three fictional responses to the same proportional-reasoning problem. One response reveals a misunderstanding of the relationship, another shows a sound setup with an arithmetic slip, and the third reaches the answer without explaining why it works. Each case creates a different reason to intervene.\n\nParticipants could first choose a response themselves and explain their choice. They might offer a contrasting example for the misunderstanding, a small checking prompt for the calculation or an explanation request for the unexplained answer. They would then inspect an AI tutor's next turn using the same criteria. The aim would be to determine whether the chosen strategy responds to the learner evidence, rather than whether its wording sounds friendly or sophisticated.\n\nThe group could extend each fictional exchange by one turn. If a learner now explains the relationship correctly, should the assistant continue with a worked example or reduce the support? Reviewers would identify the observation that changed their decision. Keeping the earlier state visible would prevent an apparently adaptive sequence from being judged only by its final message. It would also expose cases where the assistant repeats a strategy despite new information.\n\nA later classroom pilot could examine a small number of teacher-approved tasks with appropriate participation arrangements. Teachers would record the help offered, opportunities for independent reasoning and the learner's subsequent explanation. A separate task after assistance ends would address a different question from immediate success during tutoring. Students' descriptions of helpful or intrusive support would add another perspective without replacing the performance evidence.\n\nAdaTutor supplies a research approach to strategy selection. The educational opportunity is to make the choice of assistance discussable and testable. Before adopting such a policy, a school would still need evidence that the system recognizes relevant learner differences and that the resulting support advances its actual teaching objectives.",
    "keyTakeaways": [
      "The method selects among six forms of assistance using the tutoring context.",
      "Reported gains concern simulated tutoring experiments, not demonstrated classroom learning.",
      "An educator review can ask which learner observation justifies each strategy change."
    ],
    "whyItMatters": "A tutor should be judged on why it changes its assistance and what learners subsequently do, as well as on the quality of its individual messages.",
    "sourceUrl": "https://arxiv.org/abs/2610.34659",
    "sourceUrls": [
      {
        "label": "AdaTutor preprint record — 26 October 2026",
        "url": "https://arxiv.org/abs/2610.34659"
      },
      {
        "label": "Version 1 full text and simulator methods",
        "url": "https://arxiv.org/html/2610.34659v1"
      }
    ],
    "image": "/images/research/covers/aied-243-october.webp",
    "imageAlt": "Illustrative photograph of a teacher and learner comparing a worked example and a hint, with a restrained branching tutoring diagram on a glass panel.",
    "summaryImage": "/images/research/summary/aied-243-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of a teacher and learner comparing a worked example and a hint, with a restrained branching tutoring diagram on a glass panel.",
    "summaryAudio": "/audio/research/aied-243-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-27"
  },
  {
    "id": "aied-244",
    "slug": "news-gpt-61-terra-visual-educator-workflows",
    "title": "Product news: GPT-6.1 Terra brings visual computer use to educator workflows",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "GPT-6.1 Terra",
      "computer use",
      "teacher workflows"
    ],
    "shortSummary": "OpenAI describes GPT-6.1 Terra as a model for visual reasoning, computer use and writing. Its rollout to Work and Codex includes eligible Edu workspaces, making reviewable actions a practical question for educators.",
    "fullSummary": "OpenAI introduced GPT-6.1 Terra with an emphasis on visual reasoning, computer use and clearer writing. Its October 26 release notes describe a rollout in ChatGPT Work and Codex that includes Plus, Pro, Business, Enterprise and Edu plans, subject to the experiences available through a user's plan, region and workspace settings. The announcement reports improvements on professional computer-use tasks and lower standard API pricing than GPT-5.6 Terra and GPT-6.1 Sol. These are vendor-reported product and benchmark claims, not evidence of improved teaching or student learning.\n\nFor an educator, the consequential shift is from receiving advice to having software perform an action. A system that can interpret a diagram, move information between files or edit an application may reduce some routine work. The educational value depends on whether the completed result is correct, whether the teacher can inspect it and whether the task was appropriate to delegate. Availability in an Edu plan does not answer those questions for a particular school.\n\nThe following workflow is an AIEDHK proposal for a bounded evaluation. A teacher could prepare a fictional lesson pack containing a short text, a diagram and a table. The task would be to produce an editable handout that preserves the scientific relationships, units and source references. Before using the assistant, the teacher would list a few requirements that can be checked directly, including the intended reading level and the meaning of each arrow in the diagram.\n\nReview would begin with those requirements. Did the system retain a qualification in the source? Did it change a unit while simplifying the table? Does the alternative text explain the diagram's instructional purpose? A visually polished page could still fail any of these checks. Keeping the source and final artifact side by side would make corrections easier to justify and provide examples for improving the next task description.\n\nComputer actions also need a clear stopping point. The pilot could authorize preparing a draft in a designated folder while reserving publication or distribution for the teacher. If an unexpected permission prompt or ambiguous destination appears, the workflow should make the uncertainty visible. The important test is whether the tool completes the agreed work in the intended place and leaves a result that can be reviewed without reconstructing every intermediate step.\n\nTeachers could measure preparation time together with review and repair time. They might compare the assisted workflow with their existing method for a similar handout and retain examples of failures as well as useful outputs. A time saving that depends on overlooking a mistaken diagram would not support the same conclusion as a checked, editable resource delivered with less effort.\n\nThe announcement therefore offers a reason to test a specific workflow, not to assume that all educator work should become automated. A small evaluation can establish which tasks Terra handles reliably, which require a stronger review step and which remain easier to do directly. Student-facing use would need its own instructional purpose and evidence.",
    "keyTakeaways": [
      "Terra emphasizes visual reasoning, computer use and writing in Work and Codex.",
      "Plan and workspace eligibility should be checked before designing a deployment around it.",
      "Evaluate editable output, review effort and authorized actions together."
    ],
    "whyItMatters": "Schools can assess a concrete preparation workflow before interpreting a general computer-use benchmark as evidence of educational value.",
    "sourceUrl": "https://openai.com/index/introducing-gpt-6-1-terra/",
    "sourceUrls": [
      {
        "label": "OpenAI: Introducing GPT-6.1 Terra",
        "url": "https://openai.com/index/introducing-gpt-6-1-terra/"
      },
      {
        "label": "ChatGPT release notes — GPT-6.1 Terra, 26 October 2026",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "image": "/images/research/covers/aied-244-october.webp",
    "imageAlt": "Illustrative photograph of an educator reviewing a diagram and an editable lesson handout on a large monitor in a bright planning studio.",
    "summaryImage": "/images/research/summary/aied-244-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of an educator reviewing a diagram and an editable lesson handout on a large monitor in a bright planning studio.",
    "summaryAudio": "/audio/research/aied-244-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-27"
  },
  {
    "id": "aied-245",
    "slug": "research-tutoring-logs-simple-prediction-baselines",
    "title": "Preprint: Tutoring logs add little to simple score predictions in one course",
    "authors": [
      "Zeyu Dong",
      "Mikael Kwame Kuada",
      "Asa Holley Buchakjian-Tweedy",
      "Ibrahem Aljabea"
    ],
    "venue": "arXiv preprint",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "learning analytics",
      "prediction baselines",
      "AI tutoring"
    ],
    "shortSummary": "A retrospective analysis compares tutoring-interaction features with constant score predictions. Small overall gains and uneven errors show why a support model needs more than a favorable average accuracy figure.",
    "fullSummary": "An October 24 preprint by Zeyu Dong and colleagues examines whether summaries of AI-tutor interactions improve assignment-score prediction over simple constant baselines. The StudyChat corpus contains 16,851 exchanges, but the supervised analysis has outcomes for 175 student-semester records. These are different units of evidence. The study compares six fitted estimators using repeated nested cross-validation and describes its results as retrospective prediction, not an early-warning intervention.\n\nGradient boosting achieved a mean absolute error of 3.023 grade points, compared with 3.138 for the median baseline. The reported conditional bootstrap interval for the difference crosses zero. Scores were concentrated near the ceiling, and the model ranking changed when the authors examined lower-scoring students. The analysis does not establish a learning effect or added predictive value beyond prior academic performance. Its central contribution is a closer look at what the chosen comparison and error distribution allow a researcher to claim.\n\nFor a teaching team, this suggests an accessible evaluation exercise. The following is an AIEDHK proposal using fictional data. Create a small set of assignment scores, most near the top of the scale, and ask participants to predict every score using the training group's median. Then compare those predictions with a mock system's outputs. A simple method can look surprisingly strong when the range of observed outcomes is narrow.\n\nNext, inspect the individual errors. Participants could mark the cases where a prediction would have caused a teacher to overlook a learner who needed support. They could also identify unnecessary alerts and discuss the consequences of each type of mistake. A single average error gives neither decision a complete answer. The exercise should make the intended support action explicit before selecting the measurement used to judge the model.\n\nThe time at which information becomes available needs equal attention. If a feature summarizes conversations from the whole semester, it cannot automatically support a claim about identifying difficulty before the first assignment. Reviewers could draw a timeline and place each input on it. Any proposed early-support system would need to be evaluated using only information available at the actual decision point, with an outcome that occurs afterward.\n\nStudents and teachers could also examine what a prediction leaves unexplained. Frequent requests for help might reflect productive persistence, confusion, accessibility needs or the structure of an assignment. A model can find an association without resolving these interpretations. A follow-up conversation and the learner's actual work may provide information that an interaction count cannot. The prediction should therefore remain open to correction rather than becoming a fixed description of a student.\n\nBefore deploying an analytics tool, an institution could require a meaningful baseline, errors for the intended population and a prospective test of the proposed support process. It could then check whether teachers can act on the information and whether the action helps. This preprint provides a useful warning against skipping those steps simply because a fitted model produces a plausible score.",
    "keyTakeaways": [
      "The analysis has 175 outcome-bearing student-semester records, not 16,851 independent student outcomes.",
      "The small overall gain depends on the baseline and does not establish a learning effect.",
      "A prospective support claim needs inputs available before the decision and evaluation of the support itself."
    ],
    "whyItMatters": "A school needs to know whom a prediction helps and when its inputs are available before relying on an average error score.",
    "sourceUrl": "https://arxiv.org/abs/2610.33488",
    "sourceUrls": [
      {
        "label": "Preprint record — 24 October 2026",
        "url": "https://arxiv.org/abs/2610.33488"
      },
      {
        "label": "Version 1 methods, results and scope",
        "url": "https://arxiv.org/html/2610.33488v1"
      }
    ],
    "image": "/images/research/covers/aied-245-october.webp",
    "imageAlt": "Illustrative photograph of two educators examining a simple prediction baseline and uneven error bars on a seminar-room display.",
    "summaryImage": "/images/research/summary/aied-245-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of two educators examining a simple prediction baseline and uneven error bars on a seminar-room display.",
    "summaryAudio": "/audio/research/aied-245-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-28"
  },
  {
    "id": "aied-246",
    "slug": "news-anthropic-science-institutional-partnerships",
    "title": "Industry news: Anthropic expands AI for Science through institutional partnerships",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "industry news",
      "Claude",
      "AI for Science",
      "research education"
    ],
    "shortSummary": "Anthropic’s October 28 announcement expands access to Claude credits through scientific foundations, institutions and research groups. For universities, the opportunity is to connect access with transparent research practice.",
    "fullSummary": "Anthropic announced on October 28, 2026 that its AI for Science program is expanding through partnerships with scientific foundations, institutions and research groups. The company says the program provides free Claude credits for selected high-impact scientific work and highlights twenty partners. Its announcement describes support across fields including biology, physics, chemistry, climate science and mathematics. The reported partnerships and examples are the company's account; the post is not an independent evaluation of research productivity.\n\nThe announcement also points to projects intended to produce shared resources such as datasets, software and standards. One example is the Model Hardware Standard developed with HHMI Janelia Research Campus, which Anthropic identifies as a research preview. The credit program should not be read as universal free access for every university or as approval for an assistant to operate laboratory equipment without an institution's own procedures.\n\nFor research education, a practical question follows: what should a student be able to show after using an AI assistant? The following seminar design is an AIEDHK proposal. A supervisor could select a small, public dataset and ask students to formulate a question, document an analysis plan and identify the evidence needed to support a conclusion. The assistant could help implement a bounded part of that plan while the student remains responsible for explaining the choices.\n\nEach group could keep a concise record of the data version, relevant prompts, generated code and corrections. The record would include at least one output that required revision, with the reason for the change. This creates material for a discussion about how the result was produced. It also makes it easier for another group to repeat the work and locate a disagreement without relying on the original chat's apparent confidence.\n\nThe seminar could separate several outcomes that are often combined. Producing code quickly is different from obtaining a correct result. Obtaining a correct result is different from understanding the method. Understanding one analysis is different from applying the method to a new question. Students could demonstrate each outcome through a runnable artifact, a short explanation and an individual variation on the original task. These are proposed teaching checks, not benefits demonstrated by the credit announcement.\n\nInstitutional access would also need an appropriate data route and clear responsibility for reviewing outputs. Public example data offers a manageable starting point. A project involving restricted records or laboratory actions would require the relevant local arrangements before using the same workflow. The availability of credits changes the resources available for a project; it does not by itself resolve scientific, ethical or operational decisions.\n\nUniversities considering the program could begin with one research-training activity and define what success would look like before expanding it. Useful evidence might include reproducibility, the quality of students' explanations and the effort required to verify generated work. The educational opportunity is to teach accountable AI-assisted inquiry while keeping the standards for a scientific claim tied to the underlying evidence.",
    "keyTakeaways": [
      "The expansion distributes Claude credits through selected scientific organizations and projects.",
      "Vendor accounts of research activity should remain separate from independent effectiveness evidence.",
      "Research training can assess reproducibility, explanation and correction alongside productivity."
    ],
    "whyItMatters": "Access to AI resources becomes educationally useful when students can explain and reproduce the scientific work those resources help them perform.",
    "sourceUrl": "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions",
    "sourceUrls": [
      {
        "label": "Anthropic announcement — 28 October 2026",
        "url": "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions"
      }
    ],
    "image": "/images/research/covers/aied-246-october.webp",
    "imageAlt": "Illustrative photograph of a diverse university research group reviewing a plant-science experiment and an open analysis notebook in a bright laboratory.",
    "summaryImage": "/images/research/summary/aied-246-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of a diverse university research group reviewing a plant-science experiment and an open analysis notebook in a bright laboratory.",
    "summaryAudio": "/audio/research/aied-246-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-28"
  },
  {
    "id": "aied-247",
    "slug": "research-grammar-game-context-sensitive-reasoning",
    "title": "Preprint: Grammar-game traces reveal context-sensitive reasoning patterns",
    "authors": [
      "Trystan Geoffre",
      "Zheng Yuan",
      "Thierry Geoffre"
    ],
    "venue": "arXiv manuscript",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "learning analytics",
      "grammatical reasoning",
      "adaptive scaffolding"
    ],
    "shortSummary": "A manuscript analyzes sequences of actions in a French grammar game to describe reasoning patterns and predict validation success. Its observational design leaves the learning effects of proposed scaffolding untested.",
    "fullSummary": "A manuscript posted on October 26, 2026 examines how action sequences in a grammar game can inform a more specific account of learner difficulties. Trystan Geoffre and colleagues analyze 36,234 interactions from 234 students across 42 morphosyntactic exercises. Their framework combines interpretable strategy indicators with a coordination-demand index, then groups activity into four states. It attempts to describe how learners approach a task rather than relying only on a final correct or incorrect response.\n\nThe authors report substantial variation with context and predictive performance for validation success. However, the study is observational and focuses on French morphosyntax in one educational context. The paper explicitly leaves causal effects of hint timing and type for future randomized trials. Its indicators are model-based interpretations of behavior, not direct measurements of thought or emotion. This report treats the accessible arXiv version as a preprint; a journal name on the manuscript is not taken as independent confirmation of publication status.\n\nFor teachers, the work invites a useful distinction between a response and the process that produced it. The following classroom-review activity is an AIEDHK proposal. A language teaching team could examine two fictional attempts that end with the same grammatical error. In one attempt, a learner changes several choices quickly. In the other, the learner repeatedly revises one relationship after careful pauses. The team would list possible explanations and identify what further evidence would distinguish them.\n\nA short follow-up question might be more informative than an immediate label. The teacher could ask the learner to explain which words need to agree or to show the relationship with a simple diagram. If the explanation reveals a sound rule but difficulty coordinating several parts of the sentence, the next task might reduce the number of simultaneous decisions. If the rule itself is unclear, a contrasting example could serve a different purpose. These choices would be hypotheses to check in the learner's subsequent work.\n\nThe team could then test whether a proposed dashboard preserves uncertainty. Does it show the observations behind a flag? Can a teacher record an alternative interpretation? Does the display distinguish a repeated error from evidence that an intervention helped? A useful interface would support those questions without turning a temporary pattern into a stable description of a learner. Students should have a way to explain what the recorded sequence missed.\n\nBefore a pilot, educators could decide which traces are necessary and avoid collecting additional information merely because the software permits it. A small set of relevant actions may be enough to evaluate the proposed support process. The evaluation could compare the teacher's initial interpretation, the support offered and a later independent response, while keeping usability and learning outcomes separate.\n\nThe research contribution is a more structured way to inspect behavioral evidence. Its practical value for education will depend on whether the interpretations remain meaningful across tasks and whether the resulting teaching decisions help learners. Predicting a validation event is an intermediate result, not the endpoint of that evaluation.",
    "keyTakeaways": [
      "The analysis uses action sequences from 234 students in a French morphosyntax setting.",
      "Strategy indicators and predicted validation success do not establish an intervention effect.",
      "A useful teacher interface should expose evidence, uncertainty and a route to revise the interpretation."
    ],
    "whyItMatters": "Learning analytics can support more specific teaching questions when a behavioral pattern remains a revisable interpretation rather than a permanent learner label.",
    "sourceUrl": "https://arxiv.org/abs/2610.35609",
    "sourceUrls": [
      {
        "label": "Manuscript record — 26 October 2026",
        "url": "https://arxiv.org/abs/2610.35609"
      },
      {
        "label": "Version 1 methods and limitations",
        "url": "https://arxiv.org/html/2610.35609v1"
      }
    ],
    "image": "/images/research/covers/aied-247-october.webp",
    "imageAlt": "Illustrative photograph of a language teacher and learner arranging sentence cards while a sparse sequence of revision steps appears on a nearby display.",
    "summaryImage": "/images/research/summary/aied-247-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of a language teacher and learner arranging sentence cards while a sparse sequence of revision steps appears on a nearby display.",
    "summaryAudio": "/audio/research/aied-247-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-29"
  },
  {
    "id": "aied-248",
    "slug": "news-gemini-immersive-explorations-learning",
    "title": "Product news: Gemini immersive explorations turn visual topics into layered learning journeys",
    "authors": [
      "Google"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini for Education",
      "immersive explorations",
      "visual learning"
    ],
    "shortSummary": "Google’s October 28 release introduces interactive topic explorations through the Gemini app and student hub. Teachers can connect the visual layers to predictions and explanations while checking language availability and learning evidence.",
    "fullSummary": "Google announced immersive explorations in the Gemini app on October 28, 2026. The feature presents topics through interactive visual layers with guided explanations, including examples ranging from historical trade routes to physical systems. Google says users can enter through the Gemini student hub or a dedicated web address, with student-hub access available in Education Fundamentals, Standard and Plus. The release describes direct access within chat and audio narration as forthcoming, so they should not be assumed to be available in every account today.\n\nThe official announcement lists English, Indonesian, Hindi, Brazilian Portuguese, French and simplified Chinese. Other language settings currently receive an English-only experience. This matters for Hong Kong educators planning Cantonese or traditional-Chinese instruction: access to the feature does not establish that its explanations fit the language of their lesson. The announcement describes product availability and functionality, not a controlled study of learning outcomes.\n\nThe following activity is an AIEDHK proposal for using a layered visual resource deliberately. A science teacher could ask students to predict what they will find inside a familiar physical system before opening the exploration. Each pair would sketch one relationship and explain the mechanism they expect. The teacher would select a small number of layers that address the lesson objective, keeping the exploration focused enough for students to compare their prediction with what they encounter.\n\nAt each selected layer, learners could record one observation, one explanation and one question. Those categories help separate what the visualization shows from what a learner infers. A compelling animation can make a mechanism appear obvious even when an important condition is omitted. The teacher could pause at that point and ask which feature of the display supports the explanation and which part would need another source or a physical demonstration.\n\nAfter the exploration, students would revise their initial sketch and identify the evidence behind the change. A new example without the interactive resource would then check whether they can apply the relationship independently. For a topic involving scale, the teacher might ask what remains the same and what changes when moving between the whole system and one component. This creates an assessable connection between navigation and conceptual understanding.\n\nTeachers would also need an accessible route through the material. A checked text description, a static diagram or an oral explanation may serve learners who cannot use the interactive display comfortably. Language support should preserve the scientific meaning rather than merely replace words. These alternatives can be planned before the lesson so that the visual interface does not become the only way to participate.\n\nGemini's new feature provides another format for exploring educational content. Its value will depend on the questions, explanations and follow-up tasks that surround it. A small pilot can examine accuracy, accessibility, learner reasoning and preparation time before a school adopts the experience more widely. The aim is to make a visual journey produce inspectable learning, not simply a record of clicks through attractive scenes.",
    "keyTakeaways": [
      "Immersive explorations are available through the Gemini app and student hub; some additions remain forthcoming.",
      "Simplified Chinese is listed, while other unsupported language settings currently receive English.",
      "Connect visual exploration to learner predictions, evidence-based revisions and an independent follow-up task."
    ],
    "whyItMatters": "Interactive visuals can support a lesson when learners must explain what each layer shows and use the idea beyond the interface.",
    "sourceUrl": "https://workspaceupdates.googleblog.com/2026/10/immersive-explorations-now-available-in-the-Gemini-app.html",
    "sourceUrls": [
      {
        "label": "Google Workspace announcement — 28 October 2026",
        "url": "https://workspaceupdates.googleblog.com/2026/10/immersive-explorations-now-available-in-the-Gemini-app.html"
      },
      {
        "label": "Google: Immersive Explorations for Students and Learners",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/immersive-explorations-student-hub/"
      }
    ],
    "image": "/images/research/covers/aied-248-october.webp",
    "imageAlt": "Illustrative photograph of a teacher and two learners exploring a layered cutaway of the Earth on a classroom display, with a matching student sketch.",
    "summaryImage": "/images/research/summary/aied-248-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of a teacher and two learners exploring a layered cutaway of the Earth on a classroom display, with a matching student sketch.",
    "summaryAudio": "/audio/research/aied-248-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-29"
  },
  {
    "id": "aied-249",
    "slug": "research-tutorcasebench-context-specific-support",
    "title": "Preprint: TutorCaseBench separates recognizing a strategy from responding to a learner",
    "authors": [
      "Yeon Su Park",
      "Chanyoung Park",
      "Tae Soo Kim",
      "Seungju Kim",
      "Hyunwoo Kim",
      "Daho Jung",
      "Jinsung Yoon",
      "Juho Kim"
    ],
    "venue": "arXiv preprint",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "AI tutor evaluation",
      "case-based assessment",
      "instructional support"
    ],
    "shortSummary": "A benchmark builds simulated tutoring cases from qualitative education studies. Models were more successful at choosing a proposed strategy than at generating a response adapted to the particular situation.",
    "fullSummary": "TutorCaseBench, a preprint submitted on October 22, 2026, evaluates whether language-model tutors can respond appropriately to specific learner challenges. Yeon Su Park and colleagues build scenarios, dialogues and rubrics from qualitative case studies in education and related fields. The benchmark contains 923 constructed dialogues, with separate open-response and multiple-choice tasks. Across eleven models, the authors find a gap between selecting an appropriate strategy and generating a response that satisfies case-specific criteria.\n\nThese are benchmark results from constructed cases, not observations of the evaluated tutors helping actual students. The construction and scoring pipeline also uses language models, with human validation of components. Such checks support scrutiny of the benchmark but do not turn its scores into evidence of classroom effectiveness or suitability for a particular learner. The work is useful as a preprint about evaluation design, with that boundary kept explicit.\n\nFor teacher education, the distinction between naming a strategy and using it well is immediately recognizable. The following review exercise is an AIEDHK proposal. A group could begin with a fictional learner who stops participating during a difficult problem. Participants would list several possible explanations, including unclear instructions, uncertainty about the concept or an unhelpful interaction. They would avoid deciding what the behavior means before asking for more evidence.\n\nNext, each participant would write the tutor's actual next sentence. A general recommendation such as encourage the learner would not be sufficient. The sentence would need to fit what is known, invite a useful response and preserve the learner's dignity. Peers could compare the drafts and explain which details of the case informed their wording. This makes it easier to see when a supposedly supportive response introduces an assumption that the case does not justify.\n\nThe group could then inspect an AI-generated reply using the same criteria. Does it respond to the learner's question? Does it offer an appropriate choice or a manageable next step? Does it promise something the tutor cannot provide? Reviewers would identify the relevant words in the response and describe what they would change. An attractive tone would be one consideration, while the fit between evidence and action would remain central.\n\nA further exercise could change one important detail in the case and ask whether the response should change. For example, a learner might already understand the procedure but be unsure what the task is asking them to explain. A tutor that repeats the same instructional move across both versions may be following a general script rather than adapting to the available evidence. The comparison creates a specific question for further testing.\n\nAny classroom pilot would require its own review process and appropriate human support. A benchmark can reveal weaknesses and help organize test cases, but it cannot establish that an assistant should independently handle every difficult interaction. The practical contribution is a more demanding standard for evaluation: a tutor needs to show how its chosen words fit the situation, not merely demonstrate that it can recognize the name of a plausible strategy.",
    "keyTakeaways": [
      "TutorCaseBench uses constructed dialogues grounded in published qualitative cases.",
      "Selecting a strategy and generating a well-adapted response are distinct evaluation tasks.",
      "Case-based scores do not replace evidence from real educational use or appropriate human support."
    ],
    "whyItMatters": "A useful tutor evaluation asks how a response fits the learner evidence, including what the system does not yet know.",
    "sourceUrl": "https://arxiv.org/abs/2610.30828",
    "sourceUrls": [
      {
        "label": "TutorCaseBench preprint record — 22 October 2026",
        "url": "https://arxiv.org/abs/2610.30828"
      },
      {
        "label": "Version 1 construction, evaluation and human validation",
        "url": "https://arxiv.org/html/2610.30828v1"
      }
    ],
    "image": "/images/research/covers/aied-249-october.webp",
    "imageAlt": "Illustrative photograph of a teacher-education group discussing a short fictional tutoring exchange, with two alternative response cards on a seminar table.",
    "summaryImage": "/images/research/summary/aied-249-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of a teacher-education group discussing a short fictional tutoring exchange, with two alternative response cards on a seminar table.",
    "summaryAudio": "/audio/research/aied-249-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-30"
  },
  {
    "id": "aied-250",
    "slug": "news-openai-servicenow-campus-workflow-actions",
    "title": "Product news: OpenAI and ServiceNow connect workflow context with permissioned actions",
    "authors": [
      "OpenAI",
      "ServiceNow"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "ChatGPT",
      "ServiceNow",
      "campus operations"
    ],
    "shortSummary": "An October 28 partnership update describes ServiceNow workflows in ChatGPT and planned Codex, security and voice capabilities. Universities can use the announcement to examine how an assistant moves from finding information to changing a record.",
    "fullSummary": "OpenAI and ServiceNow announced an expanded partnership on October 28, 2026. Their update describes connecting organizational context and workflow actions with ChatGPT, including finding related incidents and updating ServiceNow records. OpenAI says customers choose the capabilities exposed through their own instance and that ServiceNow's Action Fabric applies existing business rules and permissions. The ServiceNow MCP plugin is described as available in the marketplace, while enhanced capabilities are expected by the end of 2026.\n\nSeveral other elements remain planned. The announcement places voice capabilities in early 2027, security capabilities on an early-access path in January 2027 and Codex in AI Workflow Factory in 2027. These timelines are vendor expectations, not proof that every capability is available now. The partnership is an enterprise product announcement; it does not report an evaluation of university services or an effect on teaching and learning.\n\nFor a campus team, the useful design question is when an assistant should move from finding information to changing something. The following help-desk exercise is an AIEDHK proposal using fictional records. A staff member reports that a classroom projector has stopped working. An assistant could locate similar incidents, identify the room's equipment and prepare a suggested next step. The team would decide which of those tasks requires only reading and which would alter a ticket, contact another person or schedule work.\n\nReviewers could test the workflow with deliberately ambiguous cases. Two rooms might have similar names, an older incident might concern replaced equipment or the person making the request might lack permission to view another department's records. The assistant should preserve those distinctions rather than treating the most similar text as sufficient evidence. A useful result would show the record it used and make any unresolved ambiguity visible before a consequential update.\n\nThe exercise could also check how the workflow recovers from an error. If a ticket was assigned to the wrong team, can staff identify the action, correct the record and understand what happened? If a proposed update was never applied, does the interface clearly say that it remains a draft? These are practical service questions that a fluent conversation alone cannot answer. They can be evaluated before connecting the assistant to a broader set of institutional systems.\n\nThe campus team could compare resolution quality, staff review time and unnecessary handoffs with its existing process. A quick response that creates extra work for another team should not be counted as an unqualified improvement. Staff feedback can identify which parts of the workflow are easier to inspect and which need a clearer boundary or better source information.\n\nThe announcement points toward assistants operating inside established organizational processes. For education institutions, a sensible starting point is one bounded service task with explicit permissions, visible records and a correction route. Such a pilot can establish whether the integration improves that service before its role expands. It keeps the value claim tied to observed work rather than to the breadth of the partnership announcement.",
    "keyTakeaways": [
      "The existing marketplace plugin and the announced future capabilities have different availability states.",
      "Organizational permissions and selected capabilities shape the actions a connected assistant can take.",
      "A campus pilot can test record accuracy, action visibility and recovery before expanding scope."
    ],
    "whyItMatters": "University service teams need inspectable actions and correct records as well as fast answers when connecting AI to operational systems.",
    "sourceUrl": "https://openai.com/index/openai-servicenow-partnership-expansion/",
    "sourceUrls": [
      {
        "label": "OpenAI and ServiceNow partnership expansion — 28 October 2026",
        "url": "https://openai.com/index/openai-servicenow-partnership-expansion/"
      }
    ],
    "image": "/images/research/covers/aied-250-october.webp",
    "imageAlt": "Illustrative photograph of campus support staff reviewing a classroom-equipment service ticket and a permissioned action flow on a workstation.",
    "summaryImage": "/images/research/summary/aied-250-october-summary.webp",
    "summaryImageAlt": "Illustrative photograph of campus support staff reviewing a classroom-equipment service ticket and a permissioned action flow on a workstation.",
    "summaryAudio": "/audio/research/aied-250-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary",
    "createdAt": "2026-10-30"
  }
];
