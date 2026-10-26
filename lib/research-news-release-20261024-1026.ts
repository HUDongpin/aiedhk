import type { ResearchPaper } from "@/lib/types";

// Archive coverage dates; actual publication is recorded in the release receipt.
export const researchNewsRelease20261024To1026: ResearchPaper[] = [
  {
    "id": "aied-237",
    "createdAt": "2026-10-24",
    "slug": "research-tutoring-loop-evidence-learning",
    "title": "Preprint: A tutoring-loop review separates convincing dialogue from evidence of learning",
    "authors": [
      "Sayantan Adak",
      "Rima Hazra",
      "Koyel Mukherjee",
      "Digbalay Bose",
      "Somnath Banerjee"
    ],
    "venue": "arXiv preprint, version 2",
    "year": 2026,
    "type": "review",
    "tags": [
      "preprint",
      "AI tutoring",
      "learner modeling",
      "learning evidence"
    ],
    "shortSummary": "A review examines how learner information, instructional choices and evaluation connect in AI tutoring. It highlights the need to inspect what students subsequently do, beyond the apparent quality of a conversation.",
    "fullSummary": "A preprint by Sayantan Adak and colleagues, revised on October 14, 2026, organizes conversational AI tutoring around the connections between learner information, instructional action, training and evaluation. Its audit covers 88 papers. The authors find that evaluating pedagogical quality is considerably more common than demonstrating a connected adaptive pathway. They distinguish immediate performance from learning, later retention and transfer. The review searches through August 31, does not pool learning effects, and concentrates on conversational systems. Its categories simplify varied studies, so it should be read as an evidence map rather than a universal effectiveness estimate.\n\nFor AIEDHK, a useful next step is to turn that distinction into a small lesson-review activity. The following example is an editorial proposal, not an intervention evaluated by the review. A mathematics teacher could begin with one learner explanation and ask colleagues to identify exactly what it reveals. A correct final answer might coexist with an uncertain method. An incorrect answer might reflect a calculation slip rather than a misunderstanding. Those possibilities call for different questions before any instructional response is selected.\n\nThe team could prepare two fictional conversations about proportional reasoning. In one, the learner understands the relationship but miscalculates. In the other, the learner applies addition where multiplication is needed. Reviewers would inspect the assistant's next question and explain how it responds to the particular evidence. If the same generic hint appears in both conversations, the team would have a concrete reason to investigate the supposed personalization more closely.\n\nA classroom pilot could then keep a short record of the learner's initial reasoning, the help offered and the next independent explanation. The teacher would decide in advance what change would count as useful progress. For example, the learner might correctly explain why two quantities vary together in a different situation. Completing another nearly identical exercise with the assistant still present would answer a narrower question. Keeping these outcomes separate would make the eventual report easier for colleagues to interpret.\n\nStudents could participate in the review by describing which part of the assistance they used and what they still find uncertain. They might revise an explanation in their preferred teaching language, draw a representation, or demonstrate a method aloud. These options would help the teacher inspect reasoning without making polished English the only available form of evidence. Any resulting differences should be investigated in the local setting rather than assumed from the interface.\n\nThe same record can support practical decisions about workload. A teaching team could note the time spent interpreting unclear exchanges, correcting unsuitable hints and selecting the next task. It could retain a few unsuccessful examples alongside promising ones. Such a pilot would give an institution a more informative starting point than counting messages or completed exercises alone. The proposed aim is modest: establish which visible learner evidence justifies continuing, revising or stopping a particular tutoring activity, then decide whether a broader evaluation is warranted.",
    "keyTakeaways": [
      "The review maps the connections between tutoring components and learner-related evidence.",
      "A proposed pilot can compare the help offered for different underlying errors.",
      "Teachers can define an independent follow-up task before interpreting a successful interaction."
    ],
    "whyItMatters": "Educators can use a concrete learner explanation and a later task to make decisions about an AI tutoring pilot more inspectable.",
    "sourceUrl": "https://arxiv.org/abs/2610.15692",
    "sourceUrls": [
      {
        "label": "Preprint record — revised 14 October 2026",
        "url": "https://arxiv.org/abs/2610.15692"
      },
      {
        "label": "Version 2 full text",
        "url": "https://arxiv.org/html/2610.15692v2"
      }
    ],
    "image": "/images/research/covers/aied-237-october.webp",
    "imageAlt": "Illustrative scene of an educator and learner discussing a four-part tutoring loop and a balance-scale drawing on a glass board in a bright study area.",
    "summaryImage": "/images/research/summary/aied-237-october-summary.webp",
    "summaryImageAlt": "Illustrative scene of an educator and learner discussing a four-part tutoring loop and a balance-scale drawing on a glass board in a bright study area.",
    "summaryAudio": "/audio/research/aied-237-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-238",
    "createdAt": "2026-10-24",
    "slug": "news-decisions-api-bounded-learning-actions",
    "title": "Product news: OpenAI Decisions API targets faster bounded choices in learning applications",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Decisions API",
      "language learning",
      "instructional design"
    ],
    "shortSummary": "OpenAI made its Decisions API generally available on October 22. The release focuses on rapid choices among defined outcomes, creating a practical design question for education: when should an application wait, clarify or offer help?",
    "fullSummary": "OpenAI announced general availability of the Decisions API on October 22, 2026. The service uses GPT-6 Luna for questions with bounded answers, returning a probability, a selected option or a rubric score. The announcement adds a native GPT-Live connection and cites language-learning company Speak's internal timing results. These are product capabilities and a customer-reported performance observation. They do not demonstrate better language learning or establish that a fast automated choice is educationally appropriate.\n\nFor education developers, the announcement makes a familiar teaching decision more explicit: what should happen next? The following design exercise is an AIEDHK proposal, rather than a tested use described by the vendor. A speaking-practice activity could offer a small set of actions, such as waiting for the learner, asking for clarification or providing a hint. The teaching team would first explain when each action is useful, including cases where the available information is insufficient to choose confidently.\n\nConsider a learner who pauses halfway through a sentence. The pause might indicate careful planning, unfamiliar vocabulary, a microphone problem or an intention to stop. A system that always responds quickly could interrupt productive thinking. Designers could write several fictional examples with the same pause but different surrounding evidence. Teachers and learners could discuss which response would be welcome and what additional information would change their judgment. That discussion would help define the application before an automated component is introduced.\n\nThe pilot interface could make the selected action visible to the teacher and easy for the learner to correct. A learner might request more thinking time or indicate that a hint arrived too soon. The team could retain these corrections as examples for review, while collecting only the information necessary for the exercise. A narrow choice menu would still need an appropriate route for uncertainty, because forcing every situation into a familiar category can conceal a missing alternative.\n\nEvaluation could compare the assisted activity with the course's existing practice routine. Reviewers would inspect interruptions, unsuitable hints, recovery after misunderstanding and the effort required to intervene. They could separately assess whether learners later handle a similar conversation without assistance. This would keep interface responsiveness, participant experience and language performance as distinct outcomes. A pleasant exchange might justify further testing, while a later independent task would provide different evidence about learning.\n\nTeachers could also ask students to explain a disputed choice. If an assistant offered a vocabulary hint, what evidence suggested that vocabulary was the problem? Could a clarification request have been more useful? Students could propose an alternative response and justify it using the conversation. This turns a hidden application decision into something that can be discussed, challenged and improved during a lesson.\n\nA sensible first release would therefore use one bounded activity with a small audience and an agreed review process. The team would record its intended choices, known uncertainties and observed failures before expanding the workflow. The practical opportunity is to make instructional decisions easier to examine while reducing unnecessary delay. Whether that combination supports learners needs to be established through the actual activity and its consequences.",
    "keyTakeaways": [
      "The October 22 announcement concerns a service for bounded application decisions.",
      "A proposed language activity should distinguish a helpful response from an interruption.",
      "Review timing, learner corrections and independent performance as separate outcomes."
    ],
    "whyItMatters": "Teaching teams can define what a helpful next action looks like before treating faster application behaviour as an educational improvement.",
    "sourceUrl": "https://openai.com/index/decisions-api/",
    "sourceUrls": [
      {
        "label": "OpenAI announcement — 22 October 2026",
        "url": "https://openai.com/index/decisions-api/"
      }
    ],
    "image": "/images/research/covers/aied-238-october.webp",
    "imageAlt": "Illustrative scene of a learner speaking through a headset beside an educator, with pause, question and hint cards and a tablet on the desk.",
    "summaryImage": "/images/research/summary/aied-238-october-summary.webp",
    "summaryImageAlt": "Illustrative scene of a learner speaking through a headset beside an educator, with pause, question and hint cards and a tablet on the desk.",
    "summaryAudio": "/audio/research/aied-238-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-239",
    "createdAt": "2026-10-25",
    "slug": "research-tutor-metric-optimization-expert-judgment",
    "title": "Preprint: Raising a tutor metric lowered human ratings in an optimization experiment",
    "authors": [
      "Daniel Domínguez Figaredo",
      "Rafael Fernández De la Cruz"
    ],
    "venue": "arXiv preprint",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "AI tutoring",
      "evaluation validity",
      "pedagogical adaptivity"
    ],
    "shortSummary": "An optimization experiment produced higher automated scores but lower human ratings for instructional sequences. Its synthetic cases and constrained intervention make it a warning about evaluation design, not evidence of harm to actual students.",
    "fullSummary": "An October 8 preprint by Daniel Domínguez Figaredo and Rafael Fernández De la Cruz audited a tutor across 2,000 synthetic learner scenarios and fine-tuned an open model on weak cases. For corrected cases, its adaptivity metric rose from 0.05 to 0.42 while ratings from 31 graduate-student raters fell from 4.46 to 3.03. Repetitive activity choices contributed to the discrepancy. Human ratings were in-sample, and changed prose also complicates interpretation. The study did not test student learning; its open model was a proxy for the original tutor.\n\nFor AIEDHK, the result suggests a practical review exercise before a school relies on a single quality score. The following activity is an editorial proposal. A teaching team could take two short lesson sequences and ask what a score would reward in each. One sequence might repeatedly offer a useful explanation. Another might begin with explanation, move to practice and then ask the learner to justify a new example. Reviewers would discuss whether the scoring rule can distinguish those purposes.\n\nThe exercise could use a familiar topic such as interpreting a bar chart. At the start, a learner might need help identifying the axes. Later, the learner might need to compare quantities or challenge an unsupported conclusion. The team could write down the evidence that would justify each transition. It would then inspect whether a highly rated sequence actually responds to those changes or simply repeats an initially reasonable move. This makes the intended progression available for discussion.\n\nStudents in a teacher-education course could extend the exercise by inventing a response that earns a good score while failing their lesson objective. They would explain the mismatch and propose one observation that the score misses. Another group could challenge that proposal with a different learner example. The purpose would be to improve the explanation of instructional quality, rather than to collect increasingly elaborate numbers that nobody can interpret in a teaching situation.\n\nA local pilot could preserve separate evidence about individual responses, the sequence as a whole and subsequent learner work. Teachers might review whether the assistance becomes less necessary, whether an error recurs and whether the learner can explain a method independently. They could also note cases where repeating an explanation is appropriate. Variety alone would be an inadequate target if it distracts from the learner's needs. Each judgment should have an explicit educational reason.\n\nFor development teams, a release discussion could include one successful example and one unresolved case. Reviewers would inspect the complete exchange, not only the aggregate result, and decide what additional check is needed. A change that improves one indicator could remain provisional until other relevant observations have been considered. That arrangement would help prevent the easiest number to improve from becoming the only definition of success.\n\nThe proposed approach also makes disagreement useful. If two educators prefer different sequences, they can identify the learner evidence or lesson objective behind their choices. Recording that difference may be more informative than averaging it away immediately. An institution can then decide whether the disagreement reflects unclear criteria, different teaching aims or a case that needs direct classroom investigation before wider adoption.",
    "keyTakeaways": [
      "The experiment concerns synthetic scenarios and expert judgments, rather than student outcomes.",
      "A proposed review can inspect whether a scoring rule recognizes instructional progression.",
      "Keep a complete exchange and an unresolved case available when assessing an update."
    ],
    "whyItMatters": "Educators and developers can examine what a quality score omits before using it to guide changes to a tutoring system.",
    "sourceUrl": "https://arxiv.org/abs/2610.12125",
    "sourceUrls": [
      {
        "label": "Preprint record — submitted 8 October 2026",
        "url": "https://arxiv.org/abs/2610.12125"
      },
      {
        "label": "Version 1 full text",
        "url": "https://arxiv.org/pdf/2610.12125v1"
      }
    ],
    "image": "/images/research/covers/aied-239-october.webp",
    "imageAlt": "Illustrative research-review scene with two raters comparing repeated and progressive activity sequences beside a screen with one rising and one falling chart.",
    "summaryImage": "/images/research/summary/aied-239-october-summary.webp",
    "summaryImageAlt": "Illustrative research-review scene with two raters comparing repeated and progressive activity sequences beside a screen with one rising and one falling chart.",
    "summaryAudio": "/audio/research/aied-239-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-240",
    "createdAt": "2026-10-25",
    "slug": "news-claude-google-cloud-processor-choice",
    "title": "Product news: Claude Platform adds an Anthropic-managed Google Cloud route",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude Platform",
      "Google Cloud",
      "institutional AI"
    ],
    "shortSummary": "Anthropic announced a generally available Google Cloud access route on October 22. Institutions can now compare two service arrangements while keeping feature access, operational responsibility and educational evaluation as distinct decisions.",
    "fullSummary": "Anthropic announced its managed Claude Platform offering on Google Cloud on October 22, 2026. It combines Google Cloud authentication and billing with the Claude Platform feature set. Anthropic operates this offering and acts as data processor; the existing Google-managed route remains available with Google in that role. The announcement lists US and Global endpoints for the new arrangement. This is an infrastructure and access update, not a classroom evaluation or a claim that either route meets every institution's requirements.\n\nFor a university considering an AI-supported research or teaching application, the practical question begins with the work it wants to support. The following planning example is an AIEDHK proposal. A department might want students to question a small collection of approved course readings and inspect the sources behind each answer. Before selecting a service route, its teaching and technical staff could describe the intended audience, the documents involved and the decisions that remain with the instructor.\n\nThe team could draw a simple path from a student's request to the documents consulted, the generated answer and the record retained for review. Each step would name a responsible role and the information it needs. This exercise could reveal an unnecessary transfer, an unclear audience or a record that nobody knows how to correct. Resolving those questions early would make a later technical comparison more concrete and easier for non-specialist colleagues to participate in.\n\nA small pilot could begin with fictional course materials and a deliberately limited set of questions. Reviewers would include a question answered directly by a source, one requiring a careful comparison and one the materials cannot answer. They would inspect whether the response accurately represents the documents and whether the learner can open the relevant passage. They could also test how the application responds when a document is changed or withdrawn from the approved collection.\n\nTeaching staff could assess the activity through what students explain after consulting the tool. A learner might identify a disagreement between two readings, distinguish a quotation from an inference or justify why more evidence is needed. These tasks would connect the technical pilot to a course objective. Counting generated answers or available features would provide operational information, but it would not by itself answer whether the activity supports the intended understanding.\n\nThe project team could keep its service comparison brief and specific. For each candidate arrangement, it would record the selected capabilities, the people responsible for configuration, the evidence needed to accept an update and the practical steps for stopping the pilot. A colleague who did not build the application should be able to follow that account and reproduce a small example. Unclear terms or responsibilities could then become focused questions for the appropriate institutional owner.\n\nThe useful outcome is a justified choice for a defined teaching or research workflow. A familiar invoice or sign-in process may make adoption easier, while the educational case still depends on the activity and its evaluation. Treating both parts explicitly would let an institution take advantage of an additional access route without allowing procurement convenience to stand in for evidence about how learners use the resulting application.",
    "keyTakeaways": [
      "The announcement distinguishes Anthropic-managed and Google-managed service arrangements.",
      "A proposed pilot can map each information transfer to a responsible institutional role.",
      "Evaluate students’ source-based explanations alongside the operation of the application."
    ],
    "whyItMatters": "Institutions can make a service choice reviewable by connecting it to a defined learning activity, an information flow and named operational responsibilities.",
    "sourceUrl": "https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed",
    "sourceUrls": [
      {
        "label": "Anthropic announcement — 22 October 2026",
        "url": "https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed"
      }
    ],
    "image": "/images/research/covers/aied-240-october.webp",
    "imageAlt": "Illustrative scene of two colleagues comparing a diagram of two cloud-service routes from a laptop to separate server icons beside equipment racks.",
    "summaryImage": "/images/research/summary/aied-240-october-summary.webp",
    "summaryImageAlt": "Illustrative scene of two colleagues comparing a diagram of two cloud-service routes from a laptop to separate server icons beside equipment racks.",
    "summaryAudio": "/audio/research/aied-240-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-241",
    "createdAt": "2026-10-26",
    "slug": "research-playing-bias-visual-evidence",
    "title": "Conference paper: Playing Bias uses image comparison to make AI stereotypes debatable",
    "authors": [
      "Amalia Foka"
    ],
    "venue": "iLRN 2026, accepted paper; open author version",
    "year": 2026,
    "type": "conference",
    "tags": [
      "AI literacy",
      "visual literacy",
      "generative images",
      "critical inquiry"
    ],
    "shortSummary": "Playing Bias describes structured activities for discussing how generated images represent people. Its fine-arts pilot offers an inspectable teaching design, while leaving causal and longer-term learning effects unresolved.",
    "fullSummary": "Amalia Foka's Playing Bias, listed as accepted at iLRN 2026 and posted to arXiv on October 23, describes three games for interpreting generated imagery. Its pilot involved 15 fine-arts undergraduates in Greece across six three-hour classes. Students examined images, varied prompts and documented visual claims. The author reports more disciplined discussion in their artifacts and 22 group memos. This was an author-taught descriptive pilot without a controlled comparison; coding used one rater without inter-rater reliability. It offers a teaching design rather than a demonstrated general improvement in AI literacy.\n\nFor AIEDHK, an accessible follow-up could begin with a familiar public-facing image, such as a school club poster. The following workshop example is an editorial proposal. Learners could first describe what is visible before discussing what it suggests: who is shown handling equipment, who appears to lead the activity and whose contribution is difficult to see. This would give the group shared evidence to discuss instead of asking everyone to agree immediately on whether an image is fair.\n\nA teacher could invite two plausible interpretations of the same detail. A person standing at the centre might appear authoritative, but another participant could be directing the work from the edge of the scene. Learners would identify which visible features support each interpretation and what the image leaves uncertain. The exercise could help distinguish observation from inference without assuming that every representational question has one mechanically correct answer.\n\nThe class could then plan a small comparison using approved, non-sensitive prompts. Before generating anything, each group would state what it expects to change and what evidence would challenge that expectation. It could retain all outputs from the comparison, including awkward or inconclusive ones, so the discussion does not depend on selecting a dramatic example. Any claims would remain about that documented set of outputs and settings rather than about every image the model could produce.\n\nA local teaching team would also need to consider the experience of participants. Learners should not be required to speak for an ethnic group, gender or disability category, and they should be able to discuss a prepared example instead of generating one about themselves. The teacher could introduce respectful language for disagreeing with a representation while avoiding assumptions about the people shown. These choices would keep the focus on the image and the reasoning used to interpret it.\n\nAssessment could ask for a short account linking one claim to visible evidence and one unresolved question. A later task could use an unfamiliar image and ask the learner to explain a new judgment independently. Teachers might compare those accounts with earlier work while documenting the limitations of the activity. Enjoyable discussion and attractive outputs would remain useful observations, but they would not replace a direct examination of how students justify their conclusions.\n\nThe proposed workshop could end with a practical editorial decision: keep, revise or replace a draft poster, with reasons that another group can inspect. This connects critical discussion to an ordinary choice that schools already make. It also gives students a way to disagree constructively and revise their judgment when new evidence appears, while leaving broader claims about model behaviour open to more systematic investigation.",
    "keyTakeaways": [
      "The reported pilot was descriptive and involved a small fine-arts cohort.",
      "A proposed workshop can separate visible details from competing interpretations.",
      "Assess how learners justify a later judgment, alongside their participation in discussion."
    ],
    "whyItMatters": "Schools can connect AI image literacy to ordinary editorial choices about whose work, expertise and participation a picture makes visible.",
    "sourceUrl": "https://arxiv.org/abs/2610.32159",
    "sourceUrls": [
      {
        "label": "Open author record — posted 23 October 2026; accepted at iLRN 2026",
        "url": "https://arxiv.org/abs/2610.32159"
      },
      {
        "label": "Open author full text",
        "url": "https://arxiv.org/pdf/2610.32159"
      }
    ],
    "image": "/images/research/covers/aied-241-october.webp",
    "imageAlt": "Illustrative scene of three people comparing two large prints of group interactions, using sparse visual markers and a sketchbook in an art studio.",
    "summaryImage": "/images/research/summary/aied-241-october-summary.webp",
    "summaryImageAlt": "Illustrative scene of three people comparing two large prints of group interactions, using sparse visual markers and a sketchbook in an art studio.",
    "summaryAudio": "/audio/research/aied-241-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-242",
    "createdAt": "2026-10-26",
    "slug": "news-gemini-notebook-connected-source-actions",
    "title": "Product news: Gemini Notebook actions bring source management into chat",
    "authors": [
      "Google Workspace"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Gemini Notebook",
      "source literacy",
      "research workflow"
    ],
    "shortSummary": "Google’s October 23 update lets Gemini chats manage and query notebooks through a Connected App. For education, the change creates a useful review point between discussing information and changing the source collection used for an assignment.",
    "fullSummary": "Google announced on October 23, 2026 that Gemini Notebook is available as a Connected App inside Gemini. Users can manage notebooks and their sources, save notes and ask questions using notebook context through chat. Access for managed accounts requires both Gemini and Gemini Notebook to be enabled. Google says the connection defaults on globally except in the European Economic Area, where it defaults off. This is a product workflow update; the announcement does not evaluate source accuracy or student learning.\n\nFor teaching, the significant design question is how a learner notices that a conversation has changed the evidence available for a later answer. The following classroom example is an AIEDHK proposal. A biology group could work with a small approved collection about urban pollinators. Each member would know which sources are included, why they were chosen and which questions the collection cannot settle. That shared starting point would make subsequent changes easier to explain.\n\nSuppose a student asks an assistant to add a recent article to the notebook. Before relying on a new answer, the group could inspect the article's author, publication context and relationship to the assignment. It might discover that the source concerns a different climate or describes an opinion rather than an investigation. The learner would record a brief reason for including it, limiting its use or leaving it outside the collection. The action would therefore remain connected to a research judgment.\n\nA useful class exercise could compare an answer before and after one source is added. Students would identify which claim changed and trace that change to the relevant passage. If the answer barely changes, they could investigate whether the new source contributes anything important or whether its content was overlooked. If the sources disagree, the group would explain the disagreement rather than select whichever response sounds more fluent. The teacher could review a small number of examples in detail.\n\nThe same activity could include a mistaken addition and a correction. A group might notice that an item is outdated or irrelevant, explain the problem and check the collection after correcting it. The teacher would decide which records are needed to understand the work without retaining unnecessary personal information. Students could keep an ordinary source list alongside the assisted workflow so that a classmate can reconstruct the basis of an argument even when a particular interface is unavailable.\n\nEvaluation could focus on a short independent explanation after the group activity. Learners might be asked to justify which source best supports a claim, name an important limitation and identify a question that needs more evidence. The instructor could also note how much time the workflow adds or saves, including the time needed to correct unsuitable actions. These observations would help decide whether the connection is useful for that course and its available support.\n\nThe proposed benefit is a more deliberate relationship between source selection and the answer a learner accepts. Moving notebook actions into conversation may make a workflow convenient, but convenience leaves the educational judgment open. A small, reviewable assignment can make that judgment visible: students explain what they changed, why it mattered and what the resulting evidence does and does not support before using it in their own work.",
    "keyTakeaways": [
      "The October 23 update connects notebook management and questions to Gemini chat.",
      "A proposed assignment can record why a source was included, limited or removed.",
      "Compare changed answers with the source passages and assess a later independent explanation."
    ],
    "whyItMatters": "Teachers can make source selection an explicit part of an assisted research activity, with a clear record of the judgments learners make.",
    "sourceUrl": "https://workspaceupdates.googleblog.com/2026/10/take-actions-on-your-notebooks-from-Gemini-Notebook-directly-in-the-Gemini-app.html",
    "sourceUrls": [
      {
        "label": "Google Workspace announcement — 23 October 2026",
        "url": "https://workspaceupdates.googleblog.com/2026/10/take-actions-on-your-notebooks-from-Gemini-Notebook-directly-in-the-Gemini-app.html"
      }
    ],
    "image": "/images/research/covers/aied-242-october.webp",
    "imageAlt": "Illustrative scene of an educator and learner comparing a botany book and pollinator drawings with a laptop diagram linking three sources to a note.",
    "summaryImage": "/images/research/summary/aied-242-october-summary.webp",
    "summaryImageAlt": "Illustrative scene of an educator and learner comparing a botany book and pollinator drawings with a laptop diagram linking three sources to a note.",
    "summaryAudio": "/audio/research/aied-242-october-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  }
];
