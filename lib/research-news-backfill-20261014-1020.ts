import type { ResearchPaper } from "@/lib/types";

// Historical coverage dates continue the owner-approved daily News archive.
export const researchNewsBackfill20261014To1020: ResearchPaper[] = [
  {
    "id": "aied-214",
    "slug": "research-ai-feedback-reached-student-groups-but-fewer-than-one-in-three-actionable-comments-appeared-in-their-revisions",
    "title": "AI feedback reached student groups, but fewer than one in three actionable comments appeared in their revisions",
    "authors": [
      "Guoqing Lu",
      "Huimin Zhang",
      "Shen Ba",
      "Lan Yang"
    ],
    "venue": "Journal of Educational Computing Research",
    "year": 2026,
    "type": "journal",
    "tags": [
      "collaborative learning",
      "teacher education",
      "feedback uptake",
      "human oversight"
    ],
    "shortSummary": "An 18-week study of 114 pre-service teachers examined what happened after human-reviewed AI feedback reached their groups. Researchers traced 965 actionable comments into later work: 271 were implemented, while many remained unused or ambiguous. The four feedback conditions did not differ significantly in implementation status. The finding directs attention to students’ decisions about advice, with classroom applications below offered as editorial proposals rather than tested improvements in learning.",
    "fullSummary": "An open-access study by Guoqing Lu and colleagues follows the journey from AI feedback to group revision. Across an 18-week course, 114 geography pre-service teachers at one Chinese university worked in 16 groups and received three feedback rounds. Four conditions varied feedback detail and focus. Teaching assistants reviewed GPT-4 outputs before distribution, so the intervention combined human and AI work.\n\nResearchers compared feedback with subsequent task sheets and projects. Of 965 actionable comments, 271 were implemented, 450 were not, and 244 had ambiguous status. The association between the four feedback conditions and implementation status was not statistically significant. Network analysis linked implemented comments with combinations of identified problems, suggestions, and solutions. Reflections included both appreciation and concerns about impractical or vague advice.\n\nThese findings describe uptake in a particular collaborative setting. They do not establish that a chatbot independently improved learning. The authors identify the single institution, inference from submitted artifacts, and teaching-assistant mediation as limitations. An observed revision also cannot settle whether students understood its rationale. The educational question raised by this evidence is what teachers should ask learners to do between receiving a comment and submitting another version.\n\nFor AIEDHK, one possible classroom design is a short decision record attached to a group project. Each team would select two consequential comments, locate the passage or decision being challenged, and explain whether it accepted, modified, or rejected the advice. A rejected suggestion would require a reason grounded in the assignment and available evidence. This is an editorial proposal, not a procedure validated by the study. Its purpose would be to give teachers a manageable view of deliberation without requiring every conversation to be transcribed.\n\nConsider a geography education team preparing a lesson about flood risk. A feedback system might suggest adding a map, but the group still has to decide which map, whose risk it represents, and whether its scale fits the teaching objective. Learners could compare two candidates and annotate the tradeoff before choosing one. The resulting record would show an instructional decision that a simple count of accepted comments misses. It would also leave room for a well-supported refusal when a suggested addition would distract from the lesson.\n\nAssessment would need to follow the same logic. A teacher could compare the original and revised explanation, then ask an individual group member to justify one change without consulting the feedback. A local pilot could record time spent, unresolved disagreements, and the quality of those explanations. It should not set a target that every suggestion must be accepted, because that would turn selective judgment into compliance. Whether this activity improves later independent work would remain a separate question requiring appropriate comparison and follow-up.\n\nFor platform designers, the proposed workflow suggests a useful place for a small feature: connecting a comment to the learner’s stated decision and the relevant revision. The interface could allow acceptance, modification, or rejection, with the original wording retained for review. Teachers could inspect a few meaningful decisions instead of a large approval percentage. Such a design would make feedback use more inspectable while keeping its educational value open to evaluation.",
    "keyTakeaways": [
      "Only 271 of 965 actionable comments were visibly implemented; another 244 had ambiguous status.",
      "Implementation status did not differ significantly across the four feedback conditions.",
      "A proposed decision record could make selective uptake visible, but its learning value would need testing."
    ],
    "whyItMatters": "The next design problem is making students’ reasons for using feedback visible. Counting delivered comments or accepted suggestions alone gives teachers an incomplete basis for judging learning.",
    "sourceUrl": "https://doi.org/10.1177/07356331261494805",
    "sourceUrls": [
      {
        "label": "Publisher full text — first published 11 October 2026",
        "url": "https://journals.sagepub.com/doi/10.1177/07356331261494805"
      }
    ],
    "createdAt": "2026-10-14",
    "image": "/images/research/covers/aied-214-backfill.png",
    "imageAlt": "Three university learners discuss an annotated lesson plan and AI feedback on a laptop in a sunlit seminar room",
    "summaryImage": "/images/research/summary/aied-214-backfill-summary.png",
    "summaryImageAlt": "Three university learners discuss an annotated lesson plan and AI feedback on a laptop in a sunlit seminar room",
    "summaryAudio": "/audio/research/aied-214-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-215",
    "slug": "news-claude-opentelemetry-education-process-records",
    "title": "Product news: Claude adds OpenTelemetry export, giving education developers a clearer view of AI requests",
    "authors": [
      "Anthropic"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "Claude API",
      "OpenTelemetry",
      "educational technology",
      "process evidence",
      "observability"
    ],
    "shortSummary": "Anthropic launched OpenTelemetry export in beta on October 14. The feature gives developers a way to inspect Claude API activity through their existing monitoring systems. For education teams, the practical question is what a technical trace can establish about an application and what still requires evidence from learners. A proposed review exercise pairs a troublesome request with a student's explanation, keeping software diagnosis, data collection, and judgments about understanding separate.",
    "fullSummary": "Anthropic's October 14, 2026 release notes announce beta OpenTelemetry export for Claude API requests and Managed Agents sessions. Its documentation describes traces that can include model requests and tool activity, with timing and token information. SDK and API tracing cover different parts of the workflow and can be combined. This is a developer capability: it does not automatically turn the Claude interface into a classroom assessment system or provide a validated measure of learning.\n\nThe documentation distinguishes a default metadata mode from an optional mode containing prompts and responses. Exported information is stored under the receiving monitoring service's access and retention settings. An education team should therefore decide what a diagnostic question actually requires before expanding collection. A failed request may be explainable without retaining a student's entire conversation. Conversely, a neat sequence of successful software operations says little about whether the student understood the answer that appeared on screen.\n\nConsider a proposed pilot for a course assistant that answers questions from teacher-approved readings. A student reports that the assistant cited the wrong chapter. Developers could inspect the relevant technical sequence, while the teacher compares the displayed answer with the assigned source. The learner then explains which claim seemed convincing and how they checked it. These are three different objects of inquiry: application behaviour, answer quality, and the student's interpretation. Keeping them separate makes the investigation more useful than treating a single activity record as an explanation of everything that happened.\n\nA debugging workshop could begin with a deliberately prepared example using fictional student data. Learners predict which source the assistant should retrieve and which error would change the result. After running the example, they compare that prediction with the available record and identify any missing information. The task should reward a defensible explanation of a discrepancy, including uncertainty, rather than simply counting tool calls. This is an instructional proposal for using process records; the release announcement does not report a classroom trial of that activity.\n\nFor institutional evaluation, teams could define a small set of concrete questions before instrumentation begins. Can a reported failure be located? Can someone explain which material informed the response? Can unnecessary content be excluded from the diagnostic record? Reviewers should also examine cases where the application behaves as configured but still produces an unsuitable explanation. Technical success and instructional suitability need separate criteria, and a successful demonstration should not be presented as proof that every learner will receive appropriate support.\n\nThe change gives education developers another way to investigate AI workflows, while leaving the educational interpretation to people. A useful local pilot would document the diagnostic task, the information collected, the decisions made from it, and the questions it could not answer. Students' own work and explanations can provide complementary evidence without being reduced to system events. The immediate outcome to seek is a more accountable investigation of application behaviour; any claim about improved understanding would require a study designed to measure that outcome directly.",
    "keyTakeaways": [
      "The October 14 release is a beta developer feature for tracing Claude API workflows.",
      "Technical records can help investigate an application, but they do not establish learner understanding.",
      "Define the diagnostic question and required information before expanding conversation collection."
    ],
    "whyItMatters": "Education teams need ways to explain AI failures without treating operational activity as a substitute for student reasoning. A bounded tracing pilot can connect technical diagnosis with human review.",
    "sourceUrl": "https://platform.claude.com/docs/en/manage-claude/opentelemetry",
    "sourceUrls": [
      {
        "label": "Anthropic: OpenTelemetry for the Claude API",
        "url": "https://platform.claude.com/docs/en/manage-claude/opentelemetry"
      },
      {
        "label": "Anthropic: October 14, 2026 release notes",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      }
    ],
    "createdAt": "2026-10-14",
    "image": "/images/research/covers/aied-215-backfill.png",
    "imageAlt": "A Black software instructor and an East Asian education student examine a simple request timeline beside an annotated reading excerpt in a bright university development lab",
    "summaryImage": "/images/research/summary/aied-215-backfill-summary.png",
    "summaryImageAlt": "A Black software instructor and an East Asian education student examine a simple request timeline beside an annotated reading excerpt in a bright university development lab",
    "summaryAudio": "/audio/research/aied-215-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-216",
    "slug": "research-students-trust-in-a-feedback-source-did-not-reliably-track-the-quality-of-its-advice",
    "title": "Students’ feedback ratings reflected source credibility without consistently matching expert judgments",
    "authors": [
      "Tanya Nazaretsky",
      "Hagit Gabbay",
      "Tanja Käser"
    ],
    "venue": "Computers and Education: Artificial Intelligence",
    "year": 2026,
    "type": "journal",
    "tags": [
      "feedback literacy",
      "source credibility",
      "higher education",
      "AI evaluation"
    ],
    "shortSummary": "Researchers compared human and AI feedback on 979 responses from six university STEM courses, then examined ratings from 472 students. Expert analysis found broadly similar pedagogical quality, while students’ judgments were associated with their views of the source’s credibility. The study did not measure feedback uptake or learning gains. For educators, it raises a practical question: how can students justify an evaluation of advice before deciding whether to use it?",
    "fullSummary": "A study by Tanya Nazaretsky, Hagit Gabbay, and Tanja Käser examines how students judge feedback when human and AI sources are involved. The researchers paired feedback variants for 979 authentic responses from six EPFL STEM courses and analyzed evaluations from 472 students. Their rubric distinguished pedagogical features at sentence level, offering a more detailed comparison than a single helpfulness score.\n\nExpert analysis found broadly comparable feedback quality, with statistically significant differences associated with small effects. Students’ ratings were related to perceived provider credibility. Their judgments aligned with some expert measures for human feedback, but the corresponding alignment was absent for AI feedback. The authors also found gaps in metacognitive support in both kinds of feedback. These are findings about messages and perceptions, not demonstrated advantages in learning.\n\nThe study involved one institution and a single evaluation occasion. It did not assess feedback uptake or performance gains, and its models left substantial variation unexplained. Prior experiences with AI and other relevant personal characteristics were not fully captured. The result therefore does not establish that students always misjudge AI advice, or that source information alone caused every rating difference.\n\nFor AIEDHK, an editorial teaching proposal is to turn feedback evaluation into a small, visible reasoning task. Before choosing whether to follow a comment, a learner could identify the claim it makes about the work, check that claim against the original response, and specify what an adequate revision would accomplish. Source identity would remain available, but students would have to provide evidence for their judgment. This activity has not been validated by the reported study; it is a concrete candidate for a classroom pilot.\n\nIn a statistics class, for example, students might compare two comments on the interpretation of a confidence interval. One sounds reassuring but leaves the misconception untouched; another points to a specific error and asks for a corrected explanation. The teacher could ask pairs to highlight the exact words that support each evaluation. Revealing or discussing provenance after an initial reading could then open a conversation about why opinions changed. The aim would be defensible evaluation, without treating either human authorship or automated generation as a substitute for checking the mathematics.\n\nA classroom assessment could retain the first judgment, the evidence cited, and the eventual revision. An independent follow-up problem would give a different kind of information from a satisfaction survey. Teachers could also examine disagreements between student and expert ratings rather than immediately averaging them away: a learner might notice that a technically correct comment is difficult to act upon. Such disagreements would need discussion, because an expert rubric and a student experience can illuminate different aspects of the same feedback encounter.\n\nFor institutions purchasing feedback systems, this distinction suggests a cautious evaluation plan. Ask whether a tool produces accurate and usable advice, whether students can explain their response to it, and whether later independent work improves. Each question needs its own evidence. A high approval rating could help identify an accessible interface, but it should not be the sole basis for an educational claim. The proposed comparison activity offers one way to start gathering richer evidence while keeping judgments about effectiveness open.",
    "keyTakeaways": [
      "Expert analysis compared paired feedback for 979 responses across six STEM courses.",
      "Student evaluations were associated with provider credibility and did not consistently match expert judgments.",
      "Feedback uptake and learning gains were not measured; proposed evaluation exercises need separate testing."
    ],
    "whyItMatters": "Feedback literacy includes explaining why advice deserves acceptance or rejection. Schools can evaluate that judgment directly rather than relying only on whether students like the tool or trust its author.",
    "sourceUrl": "https://doi.org/10.1016/j.caeai.2025.100533",
    "sourceUrls": [
      {
        "label": "Publisher full text",
        "url": "https://www.sciencedirect.com/science/article/pii/S2666920X25001730"
      },
      {
        "label": "Author institution record — early online date 18 December 2025",
        "url": "https://weizmann.elsevierpure.com/en/publications/can-students-judge-like-experts-a-large-scale-study-on-the-pedago/"
      }
    ],
    "createdAt": "2026-10-15",
    "image": "/images/research/covers/aied-216-backfill.png",
    "imageAlt": "A South Asian female lecturer and a White male university student examine two differently annotated statistics feedback sheets beside a hand-drawn confidence-interval diagram",
    "summaryImage": "/images/research/summary/aied-216-backfill-summary.png",
    "summaryImageAlt": "A South Asian female lecturer and a White male university student examine two differently annotated statistics feedback sheets beside a hand-drawn confidence-interval diagram",
    "summaryAudio": "/audio/research/aied-216-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  },
  {
    "id": "aied-217",
    "slug": "news-openai-educators-brazilian-portuguese-questions",
    "title": "Product news: OpenAI adds Brazilian Portuguese to its educator course, keeping teacher judgment at the centre",
    "authors": [
      "OpenAI"
    ],
    "venue": "AI Product and Learning Report",
    "year": 2026,
    "type": "policy-ethics",
    "tags": [
      "product news",
      "teacher professional development",
      "Brazilian Portuguese",
      "OpenAI Academy",
      "questioning",
      "AI literacy"
    ],
    "shortSummary": "OpenAI announced a Brazilian Portuguese version of AI for Educators on October 15. The course offers a new language route into professional learning about classroom AI use. This report considers how a teaching team might turn that opportunity into a concrete lesson-design exercise: examine a generated question, explain the instructional choice, and test the activity against students' needs. Course availability is a product announcement, while changes in teaching quality and student learning remain outcomes to investigate.",
    "fullSummary": "OpenAI announced on October 15, 2026 that its AI for Educators course was available in Brazilian Portuguese on the free OpenAI Academy platform. The announcement describes materials for primary, secondary, and higher education, including lesson preparation, activities, assessment, and communication. Its stated emphasis is preserving educators' pedagogical judgment. The language addition is the news event; the announcement does not present an evaluation showing that completing the course improves teaching or student attainment.\n\nThe same article encourages educators to examine questioning through ChatGPT's existing Study Mode. For a school considering the course, a useful starting point would be a lesson the teacher already understands well. The teacher could compare a generated question with the question they would ordinarily ask and explain which response each question is intended to elicit. This would make professional learning visible in a specific decision, rather than using confidence with the interface as the main sign of progress.\n\nConsider a proposed staff workshop on interpreting a historical source. Each participant brings a short, permitted extract and writes one initial question without AI assistance. Participants then ask for alternative questions and sort them according to purpose: locating evidence, explaining perspective, or weighing a competing interpretation. They should retain examples they reject as well as those they adapt. Their explanation of why a question is unsuitable can be as informative as the final activity, particularly when an attractive prompt asks students to speculate beyond the evidence provided.\n\nA shared language can make professional discussion easier to organize, but local adaptation still requires concrete choices. A teacher might examine whether vocabulary suits the class, whether an example assumes unfamiliar cultural knowledge, and whether learners can respond through more than one format. Colleagues could review the adapted task using those explicit criteria. These are proposed design checks, not measured effects of the translated course. They also avoid assuming that a single language label describes every educator's context, curriculum, or preferred way of learning.\n\nThe workshop could finish with a short rehearsal. One colleague plays the learner, offering an incomplete or mistaken answer; another explains the next question they would ask and why. The team records which part of the activity needed revision and what classroom evidence would justify keeping it. If the task is later used with students, teachers can examine actual responses and an independent follow-up task. Such evidence would be more relevant to instructional decisions than a polished AI-generated worksheet or a certificate alone.\n\nFor AIEDHK readers, the announcement is an opportunity to connect access to professional learning with deliberate classroom experimentation. Institutions could invite Portuguese-speaking educators to review the materials, choose one bounded practice, and document its fit to their setting. Participation should lead to a reviewable teaching decision and an honest account of what remains uncertain. The immediate benefit offered by the release is access to course content in another language; stronger claims about teaching practice, inclusion, or learning would need evidence gathered for those specific questions.",
    "keyTakeaways": [
      "The October 15 announcement adds Brazilian Portuguese to AI for Educators on OpenAI Academy.",
      "Teacher judgment can be made visible by explaining why a generated question is accepted, revised, or rejected.",
      "Course access and completion should be distinguished from demonstrated changes in classroom practice."
    ],
    "whyItMatters": "Professional learning becomes reviewable when teachers connect an AI tool to a specific instructional decision, rehearse it, and inspect what students subsequently do.",
    "sourceUrl": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions/",
    "sourceUrls": [
      {
        "label": "OpenAI: Teaching students to think and learn through questions — October 15, 2026",
        "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions/"
      }
    ],
    "createdAt": "2026-10-15",
    "image": "/images/research/covers/aied-217-backfill.png",
    "imageAlt": "Three teachers discuss annotated history lesson and question cards on a sunlit staff-room pinboard, with a course outline on a tablet",
    "summaryImage": "/images/research/summary/aied-217-backfill-summary.png",
    "summaryImageAlt": "Three teachers discuss annotated history lesson and question cards on a sunlit staff-room pinboard, with a course outline on a tablet",
    "summaryAudio": "/audio/research/aied-217-backfill-summary.m4a",
    "summaryAudioTitle": "Listen to the summary"
  }
];
