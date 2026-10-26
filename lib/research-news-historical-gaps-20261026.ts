import type { ResearchPaper } from "@/lib/types";

// Archive coverage dates; actual publication is recorded in the release receipt.
export const researchNewsHistoricalGaps20261026: ResearchPaper[] = [
  {
    "id": "aied-234",
    "contentId": "aied-234",
    "slug": "research-hawaii-community-knowledge-ai-auditing",
    "title": "Conference paper: Educators in Hawai‘i designed AI audits around community knowledge and shared review",
    "authors": [
      "Dora Zhao",
      "Hannah Cha",
      "Michael J Ryan",
      "Angelina Wang",
      "Rachel Baker-Ramos",
      "Evyn-Bree Helekahi-Kaiwi",
      "Rebecca Diego",
      "Josiah Hester",
      "Diyi Yang"
    ],
    "venue": "CHI Conference on Human Factors in Computing Systems (CHI 2026)",
    "year": 2026,
    "type": "conference",
    "tags": [
      "community knowledge",
      "AI auditing",
      "teacher perspectives",
      "cultural representation"
    ],
    "createdAt": "2026-07-10",
    "shortSummary": "A CHI study with educators in O‘ahu explores how AI audits could make sources and cultural perspectives open to shared review. Its designs offer a starting point for local discussion, while their effectiveness and applicability elsewhere remain untested.",
    "keyTakeaways": [
      "Cultural interpretation requires decisions about whose knowledge and perspective are represented.",
      "The workshop findings are situated design evidence, with limited grounds for generalisation.",
      "A proposed lesson can ask learners to explain their source choices and unresolved questions."
    ],
    "whyItMatters": "Teaching teams can make the reasons behind a content decision visible and discussable, while involving people who understand the knowledge being represented.",
    "sourceUrl": "https://doi.org/10.1145/3772318.3790958",
    "sourceUrls": [
      {
        "label": "CHI 2026 paper — DOI record",
        "url": "https://doi.org/10.1145/3772318.3790958"
      },
      {
        "label": "Open-access author full text",
        "url": "https://www.microsoft.com/en-us/research/wp-content/uploads/2026/02/chi26c-sub5809-cam-i16-1.pdf"
      }
    ],
    "imageAlt": "Illustrative scene of three educators comparing annotated historical sources, photographs and a map with a laptop, with sparse visual links between source passages.",
    "fullSummary": "Dora Zhao and colleagues studied how educators in Hawai‘i wanted to examine culturally sensitive AI output. Their CHI 2026 paper reports four co-design workshops with 22 public-school educators in O‘ahu. Participants proposed ways to inspect sources, compare perspectives and flag problematic material. They emphasised knowing who produced an interpretation and the people from whom that knowledge came. The contribution is a set of situated design insights, rather than a tested auditing product or evidence of improved student learning.\n\nThe sample was voluntary and limited to elementary-level public-school educators. Students, administrators and cultural practitioners were not represented in the workshops. The authors also focused on text-based systems. These boundaries matter: a design developed with one community should not be presumed to represent other communities, languages or media.\n\nFor AIEDHK, the paper opens a useful practical question: who should help decide whether an AI-generated teaching example is appropriate? Consider a proposed local-history lesson in which a model produces a short account of a neighbourhood. A teacher could compare that account with a public archive, an appropriately shared oral-history source and a museum resource. The aim would be to identify where the account simplifies disagreement or presents one viewpoint as the only available account. This is an editorial teaching proposal, not an activity evaluated in the study.\n\nStudents could annotate one sentence at a time. One annotation would record what the sentence claims, another the evidence supporting it, and a third the perspective it leaves uncertain. A learner might discover that a date is well documented while the explanation of why an event mattered varies between accounts. The teacher could use that distinction to discuss the difference between checking a factual statement and understanding an interpretation. The activity should allow an honest unresolved question to remain visible.\n\nA teaching team could prepare the exercise with people familiar with the place and its histories. Contributors should decide which materials can be used, how their contributions are described, and what should remain outside a public dataset. A shared review sheet could record a concern, the passage that prompted it, and the reason for a revision. That record would help a second teacher understand the decision without treating the first teacher's judgment as an unexplained rule.\n\nEvaluation could begin modestly. Before the lesson, students might explain how they would check an unfamiliar account. Afterwards, they could examine a new passage and justify which source they would consult next. Teachers would inspect those explanations for attention to evidence and perspective, while recording whether the activity creates an unreasonable preparation burden. A later independent task could show whether students carry the checking practice into their own work.\n\nThe proposed educational value lies in making interpretation discussable. A convincing paragraph and a source link are useful starting points, but students still need to explain what the source establishes, whose account it represents, and what they cannot yet conclude. Schools can use that question to shape a small, reviewable lesson before investing in a larger AI-auditing workflow.",
    "image": "/images/research/covers/aied-234-historical.webp",
    "summaryImage": "/images/research/summary/aied-234-historical-summary.webp",
    "summaryImageAlt": "Illustrative scene of three educators comparing annotated historical sources, photographs and a map with a laptop, with sparse visual links between source passages.",
    "summaryAudio": "/audio/research/aied-234-historical-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-235",
    "contentId": "aied-235",
    "slug": "research-adaptive-tutor-prompts-student-engagement",
    "title": "Preprint: Adaptive tutor prompts changed interaction patterns without establishing better learning",
    "authors": [
      "Po-Chin Chang",
      "Nicholas Hogan",
      "Aske Plaat",
      "Michiel T. van der Meer"
    ],
    "venue": "arXiv preprint, version 1",
    "year": 2026,
    "type": "tool-dataset",
    "tags": [
      "preprint",
      "adaptive tutoring",
      "prompt selection",
      "learning evidence"
    ],
    "createdAt": "2026-08-22",
    "shortSummary": "A high-school tutoring preprint examines adaptive prompt selection. Its interaction results invite closer study, but limited exercise data and nonsignificant outcome comparisons leave the learning advantage unresolved.",
    "keyTakeaways": [
      "Interaction efficiency and independent understanding need separate evaluation.",
      "Sparse assessment participation limits conclusions about a tutoring system.",
      "A proposed classroom trial should connect each hint to subsequent reasoning and unaided work."
    ],
    "whyItMatters": "Schools can ask whether a more responsive conversation produces understanding that learners can demonstrate independently.",
    "sourceUrl": "https://arxiv.org/abs/2606.20138v1",
    "sourceUrls": [
      {
        "label": "Preprint version 1 — submitted 18 June 2026",
        "url": "https://arxiv.org/abs/2606.20138v1"
      },
      {
        "label": "Version 1 full text",
        "url": "https://arxiv.org/html/2606.20138v1"
      }
    ],
    "imageAlt": "Illustrative scene of a learner and tutor comparing a handwritten triangle solution with a laptop showing a triangle and branching hint paths at an evening study desk.",
    "fullSummary": "Po-Chin Chang and colleagues describe an AI tutor that selects among instructional prompts using subject information and feedback on dialogue. The June 18, 2026 preprint version reports an online comparison involving 656 conversations from 359 Dutch high-school students. Some longer conversations became shorter under adaptive prompting. However, combined exercise uptake was 20.8 percent with the router and 19.6 percent with the baseline, a difference that was not statistically significant. The limited exercise-accuracy analyses also did not establish an advantage. These findings concern interaction patterns and preliminary evaluation, rather than demonstrated improvement in learning.\n\nThe evaluation relied partly on AI-generated pedagogical scores. Many learners did not proceed to exercises, and some subjects had very little data. The authors identify these limitations when discussing learning outcomes and adaptation across subjects. This report uses version 1, which was available before the archive coverage date; it does not import the later revision's publication status.\n\nFor educators, a useful question is what a shorter conversation actually means. A student might reach a helpful next step more quickly, or might leave before resolving a difficulty. Consider a proposed classroom trial in which a teacher compares two approved styles of hint for the same geometry task. One asks the learner to explain a relationship; another points to a particular feature of the diagram. Students would still have to complete and explain the solution themselves. This example is an editorial proposal, not a procedure evaluated in the paper.\n\nThe trial could retain the original problem, the hint, the student's next attempt and the explanation for that attempt. Those records would let the teacher inspect whether the hint directed attention toward the relevant mathematical relationship. Counting messages alone would leave that question unanswered. A concise exchange followed by a correct explanation could be useful; an equally concise exchange followed by an unsupported answer would require a different response.\n\nTeachers could also ask students to judge the help they received. A short reflection might identify which part of a hint was useful, what remained confusing and what they would try without assistance. These judgments should be compared with the student's work, because feeling helped and demonstrating understanding answer different questions. When the two disagree, the teacher would have a concrete example for discussing how to use feedback thoughtfully.\n\nA local evaluation should define its main learning outcome before choosing a winning prompt. It could compare performance on a new, unaided problem and retain a later check to examine whether the reasoning persists. Participation and missing exercises should be reported alongside the results. If learners who find the tutor confusing are also less likely to complete the assessment, a simple average among completers may give an incomplete picture.\n\nThe practical design choice is therefore broader than selecting the prompt with the highest interaction score. A school needs a way to connect a tutoring decision with what the learner subsequently understands and can do. Adaptive prompting offers a candidate mechanism for making support responsive, while the educational case still depends on evidence from the intended learners, subjects and assessment conditions.",
    "image": "/images/research/covers/aied-235-historical.webp",
    "summaryImage": "/images/research/summary/aied-235-historical-summary.webp",
    "summaryImageAlt": "Illustrative scene of a learner and tutor comparing a handwritten triangle solution with a laptop showing a triangle and branching hint paths at an evening study desk.",
    "summaryAudio": "/audio/research/aied-235-historical-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-236",
    "contentId": "aied-236",
    "slug": "news-cengage-course-ai-assistants-learning-evidence",
    "title": "Industry news: Cengage expands course-based AI assistants, inviting evidence checks beyond product reach",
    "authors": [
      "Cengage"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "industry news",
      "course materials",
      "AI literacy",
      "assessment",
      "higher education"
    ],
    "createdAt": "2026-08-22",
    "shortSummary": "Cengage announces wider integration of AI assistance, practice and instructor insights across its higher-education products. A local pilot could examine whether students can justify revisions and apply what they learn independently.",
    "keyTakeaways": [
      "A product rollout describes access and capabilities without establishing a learning effect.",
      "Continued assignment submission and independent competence should be examined separately.",
      "A bounded trial can retain student revisions, reasons and teacher review time."
    ],
    "whyItMatters": "Institutions evaluating integrated course AI can connect advertised functions to the decisions and independent performance they want students to develop.",
    "sourceUrl": "https://www.cengagegroup.com/news/press-releases/2026/cengage-expands-higher-education-learning-platforms-with-integrated-ai-capabilities-to-strengthen-career-ready-learning/",
    "sourceUrls": [
      {
        "label": "Cengage official announcement — 13 August 2026",
        "url": "https://www.cengagegroup.com/news/press-releases/2026/cengage-expands-higher-education-learning-platforms-with-integrated-ai-capabilities-to-strengthen-career-ready-learning/"
      }
    ],
    "imageAlt": "Illustrative scene of two learners rehearsing a workplace conversation beside a whiteboard flow diagram and bar chart while an educator reviews a tablet.",
    "fullSummary": "Cengage's August 13, 2026 announcement describes an expansion of Student Assistant and Instructor Assistant across more than 800 higher-education products for the autumn. It also presents AI-supported practice, feedback and assessment features in MindTap, alongside AI-literacy resources. These are vendor-described capabilities and rollout plans. The release does not provide a controlled evaluation establishing that the newly announced package improves learning across those courses.\n\nThe company reports an association between Student Assistant use and continued assignment submission among students who struggled early. That comparison should not be read as a causal effect: the announcement does not supply enough methodological detail to establish that using the assistant caused persistence. Product reach, continued participation and independent understanding are different outcomes, each requiring appropriate evidence.\n\nFor a teaching team, the announcement suggests a concrete procurement question: what would learners practise with this support that they could later do for themselves? Consider a proposed business-communication assignment. Students could respond to a fictional customer scenario, review AI feedback, revise their response and explain which suggestions they accepted. A teacher would assess the final response against published criteria and inspect the reasons for revision. This is an editorial example of a possible evaluation, not a documented result from the announcement.\n\nThe assignment could focus on a small number of meaningful decisions. Did the student identify the customer's actual concern? Does the response use evidence available in the scenario? Is the proposed next step feasible? A student who declines an AI suggestion with a sound explanation may demonstrate stronger judgment than one who accepts every suggestion. The assessment therefore needs room for justified disagreement as well as successful revision.\n\nBefore adopting a tool across a course, instructors could review its feedback on a small set of prepared examples. Those examples should include a strong response, an incomplete response and a confidently mistaken response. Reviewers could record whether the feedback identifies the relevant problem, points to supporting evidence and suggests an achievable next step. They could also note how much editing is needed before a comment is suitable for students. That review effort belongs in any estimate of time saved.\n\nA pilot could then compare students' work on a later scenario completed without the assistant. Keeping the task unfamiliar would help assess whether a learner can transfer the reasoning beyond a revised draft. Teachers could examine participation separately, recording whether students continue submitting work and why some stop. Interviews or short reflections might help explain those patterns without treating self-reported confidence as proof of achievement.\n\nAccess also needs an operational check. A course team could verify which titles, languages, accessibility features and institutional arrangements are actually available to its students, including what support exists when a generated response is disputed. These checks would make the trial feasible in the local setting. The immediate industry development is a broader integration of AI within course products. Its educational significance will become clearer when institutions connect the advertised workflow to reviewable student reasoning, independent performance and the full cost of teacher oversight.",
    "image": "/images/research/covers/aied-236-historical.webp",
    "summaryImage": "/images/research/summary/aied-236-historical-summary.webp",
    "summaryImageAlt": "Illustrative scene of two learners rehearsing a workplace conversation beside a whiteboard flow diagram and bar chart while an educator reviews a tablet.",
    "summaryAudio": "/audio/research/aied-236-historical-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  }
];
