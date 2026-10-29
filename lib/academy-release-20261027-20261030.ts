import type { AcademyLesson } from "@/lib/types";

// Archive coverage dates; the actual publication is recorded in the release receipt.
export const academyRelease20261027To20261030: AcademyLesson[] = [
  {
    "id": "academy-203",
    "listingIdentifier": "AI Knowledge 102",
    "slug": "datasheets-for-datasets",
    "title": "Datasheets for Datasets",
    "track": "ai-knowledge",
    "level": "core",
    "tags": [
      "Dataset documentation",
      "Data provenance",
      "Data statements"
    ],
    "image": "/images/academy/covers/academy-203-datasheets-for-datasets.png",
    "imageAlt": "A lecturer and adult learner compare botanical photograph cards with a documented data-flow sketch in an open folder beside a laptop.",
    "summaryAudio": "/audio/academy/academy-203-datasheets-for-datasets-summary.m4a",
    "summaryAudioTitle": "Listen to Datasheets for Datasets",
    "shortSummary": "Dataset documentation records how data was collected, labeled and maintained, helping educators judge whether it fits a proposed use. A completed form supports scrutiny; it does not certify quality or permission.",
    "fullSummary": "A dataset is more than a collection of examples. Its purpose, collection conditions, labels, missing cases and maintenance history affect what a model can learn and what an evaluation can establish. A datasheet brings these decisions into a document that travels with the dataset. It helps a prospective user ask whether the available evidence fits a proposed application before training or purchasing a system.\n\nGebru and colleagues proposed datasheets covering a dataset's motivation, composition, collection, preparation, uses, distribution and maintenance. Bender and Friedman developed data statements for language technology, emphasizing information such as language varieties, speakers, annotators and the situation in which language was produced. The approaches overlap, but their questions serve different contexts. A school should adapt the documentation to its actual data rather than treating one template as universally sufficient.\n\nA useful record distinguishes facts from unknowns. A label called correct might mean agreement with an answer key, a teacher judgment or a majority vote among annotators. Each interpretation supports different claims. Likewise, a dataset described as multilingual may contain very unequal amounts of each language. Missing information should remain explicitly unknown until checked. Filling every box with confident prose, including AI-generated prose, cannot substitute for collection records or informed decisions by the people responsible.\n\nConsider an illustrative teacher-training activity involving fictional student explanations of plant growth. One group creates a small dataset using responses to a single worksheet. A second group is asked whether the data could support a feedback tool for a different year group. Before seeing any model scores, the second group requests the task instructions, marking criteria, collection dates and examples of disagreements. They also ask whether copied answers and partially completed explanations were included. These questions reveal what a headline accuracy number would leave unresolved.\n\nThe groups then prepare a short datasheet and identify one proposed use that the records support and one that needs new evidence. They could discover that the examples cover written explanations but offer no information about oral reasoning. They should record that boundary rather than describing the learners as lacking knowledge. A revision might add a new collection procedure or narrow the intended use. The exercise makes documentation part of deciding what to build, not merely a final attachment.\n\nDocumentation also needs a named maintainer, version and correction route. If labels change, users need to know which release they received and whether earlier results remain comparable. Access restrictions, retention decisions and permissions should point to the relevant institutional records. A datasheet can describe those arrangements, but it does not itself grant consent, establish a lawful basis or guarantee that privacy has been protected.\n\nFor educational AI, the practical habit is to read the data record alongside the model report and the proposed teaching activity. Ask what was observed, whose circumstances are represented, which assumptions remain untested and who can resolve uncertainty. Good documentation makes those questions easier to answer and keeps limitations visible as a system changes.",
    "coreIdeas": [
      "Document collection, labels, representation and maintenance before interpreting model results.",
      "Use explicit unknowns and evidence links instead of filling gaps with plausible descriptions.",
      "A datasheet supports a suitability decision but does not certify fairness, permission or privacy."
    ],
    "educationConnection": "Use fictional plant-growth explanations to create a dataset record, then judge whether it supports feedback in a different class or response format.",
    "relatedConcepts": [
      "Dataset documentation",
      "Data provenance",
      "Data statements"
    ],
    "sourceUrls": [
      {
        "label": "Gebru et al.: Datasheets for Datasets",
        "url": "https://arxiv.org/abs/1803.09010"
      },
      {
        "label": "Bender and Friedman: Data Statements for Natural Language Processing",
        "url": "https://aclanthology.org/Q18-1041/"
      }
    ],
    "createdAt": "2026-10-27T08:00:00.000Z"
  },
  {
    "id": "academy-204",
    "listingIdentifier": "Educational Theory 102",
    "slug": "generative-learning-strategies",
    "title": "Generative Learning Strategies",
    "track": "educational-theory",
    "level": "core",
    "tags": [
      "Generative learning",
      "Learner explanations",
      "Selecting and organizing"
    ],
    "image": "/images/academy/covers/academy-204-generative-learning-strategies.png",
    "imageAlt": "A science educator watches two adult learners explain a water-cycle drawing on a whiteboard and compare it with a notebook sketch.",
    "summaryAudio": "/audio/academy/academy-204-generative-learning-strategies-summary.m4a",
    "summaryAudioTitle": "Listen to Generative Learning Strategies",
    "shortSummary": "Generative learning involves selecting important information, organizing it and connecting it with prior knowledge. Learner-created explanations, diagrams and examples need guidance and checking to make that thinking productive.",
    "fullSummary": "Generative learning describes the work learners do to make sense of information. They select what matters, organize it into a coherent structure and connect it with relevant knowledge they already have. The word generative refers to the learner's meaning-making. It does not require a generative AI system, an original artistic product or a lesson without teacher explanation.\n\nWittrock's account emphasized learners constructing relationships between incoming information and existing knowledge. Fiorella and Mayer later reviewed strategies including summarizing, mapping, drawing, imagining, self-testing, self-explaining, teaching and enacting. These activities can invite productive mental work, but their outward form is not proof that such work occurred. Copying a concept map or repeating an explanation can produce a polished artifact with little new understanding.\n\nThe teaching challenge is to choose a representation that makes important relationships inspectable. A drawing can help with a spatial process, while an explanation may reveal why a mathematical step follows. Learners often need examples, prompts and feedback to perform the strategy well. Asking novices to create an elaborate diagram while also learning unfamiliar content may overwhelm them. A small, supported task can expose more useful thinking than an ambitious product with unclear criteria.\n\nConsider an illustrative lesson on the water cycle. After a brief explanation, pairs draw how water moves between a puddle, the air, clouds and a hillside. Each arrow must stand for a process that the pair can explain. The teacher asks where the water is when it cannot be seen and what would change if the air became cooler. The drawing becomes a starting point for examining reasoning, rather than an exercise in matching a decorative picture.\n\nNext, learners compare their diagrams with a reliable explanation and mark one revision. They explain what evidence justified the change. A learner who drew a direct arrow from cloud to underground water might add an intermediate process or clarify the conditions involved. The teacher can offer a partially completed diagram or an oral response option when drawing skill or language demands would otherwise hide understanding. The intellectual goal remains explaining the relationships.\n\nAn AI tool could supply an alternative explanation for critique after learners have made their own attempt. Students might identify an omitted process, an unsupported connection or a helpful example. If the tool produces the final diagram before students make any decisions, the teacher needs another way to see their reasoning. A useful prompt asks the learner to justify a change, not simply approve an attractive answer.\n\nAssessment should examine the content of the explanation and its use in a new situation. Later, students could explain condensation on a cold window without their original diagram. That task asks whether the relationships have become available beyond the initial activity. It also helps separate a successful classroom performance from durable understanding.\n\nGenerative strategies are therefore tools for designing and observing learning, not a checklist to maximize activity. Choose a strategy because it serves a particular concept, support learners in using it and inspect what they produce. Revise the task when the representation obscures the idea or when students cannot explain the connections they have drawn.",
    "coreIdeas": [
      "The learner generates meaningful relationships by selecting, organizing and integrating information.",
      "A visible product is useful only when its content reveals the intended reasoning.",
      "Guidance, revision and a later independent task help distinguish activity from understanding."
    ],
    "educationConnection": "Ask learners to draw and explain a water cycle, revise one relationship using evidence, then apply it to condensation in a new setting.",
    "relatedConcepts": [
      "Generative learning",
      "Learner explanations",
      "Selecting and organizing"
    ],
    "sourceUrls": [
      {
        "label": "Fiorella and Mayer: Eight Ways to Promote Generative Learning",
        "url": "https://doi.org/10.1007/s10648-015-9348-9"
      },
      {
        "label": "Wittrock: Learning as a Generative Process",
        "url": "https://doi.org/10.1080/00461527409529129"
      }
    ],
    "createdAt": "2026-10-27T08:00:00.000Z"
  },
  {
    "id": "academy-205",
    "listingIdentifier": "AI Knowledge 103",
    "slug": "evaluating-retrieval-augmented-generation",
    "title": "Evaluating Retrieval-Augmented Generation",
    "track": "ai-knowledge",
    "level": "core",
    "tags": [
      "RAG evaluation",
      "Evidence support",
      "Retrieval quality"
    ],
    "image": "/images/academy/covers/academy-205-evaluating-retrieval-augmented-generation.png",
    "imageAlt": "An educator and learner compare a source passage and an answer on two screens, with an annotated course document between them.",
    "summaryAudio": "/audio/academy/academy-205-evaluating-retrieval-augmented-generation-summary.m4a",
    "summaryAudioTitle": "Listen to Evaluating Retrieval-Augmented Generation",
    "shortSummary": "A retrieval-augmented system can fail when it finds the wrong evidence or when it misuses good evidence. Evaluate retrieval, answer support and usefulness separately, with human checks on automated judgments.",
    "fullSummary": "Retrieval-augmented generation, often shortened to RAG, gives a language model selected documents to help answer a question. Evaluating the complete answer is useful, but it does not explain where a failure occurred. The retriever may miss the relevant passage, return an outdated document or supply correct evidence that the generator then misinterprets. A useful evaluation separates these stages while still checking the experience of the person asking the question.\n\nThe RAGAs research framework distinguishes qualities such as context relevance, answer relevance and faithfulness to retrieved material. ARES evaluates related dimensions using trained language-model judges and human-annotated examples. These approaches make large-scale comparison more practical, but an automated score remains a measurement produced under particular assumptions. Agreement with a source is also different from truth: an answer can faithfully repeat an obsolete or incorrect document.\n\nStart by defining the questions the system is supposed to handle. For each test case, record an acceptable answer, the evidence needed and any reason the system should decline to answer. Include questions with similar wording but different meanings, questions requiring more than one passage and questions the collection cannot answer. Keep development examples separate from the cases used to judge a proposed release. Otherwise, repeated adjustment can turn the test into another training resource.\n\nConsider an illustrative university help assistant built from fictional course regulations. A teacher asks whether a particular assignment permits group work. The evaluation checks whether the retrieved passage belongs to the correct course, assessment and academic year. It then checks whether the response preserves exceptions and links to the supporting passage. A fluent answer based on last year's rule would fail even if every sentence accurately reflected the retrieved document.\n\nThe team can diagnose the result in stages. If the correct passage was absent, inspect document preparation, indexing and retrieval. If the evidence was present but the answer reversed a condition, inspect generation and the response instructions. If the question was ambiguous, check whether the system requested the missing detail. Keeping these categories separate helps the team make a targeted repair rather than changing several components at once and losing track of what mattered.\n\nHuman review is especially useful for a sample of difficult cases and disagreements between evaluators. Reviewers should see the question, retrieved passages and generated answer, then apply the same written criteria. Compare judgments across languages and question types. An automatic evaluator that favors confident wording or overlooks a missing exception can make a weak release look strong. Recording its failures is part of evaluating the evaluation method itself.\n\nFinally, report both quality and practical constraints. Response time, source freshness, correction handling and accessibility affect whether the system is usable. Repeat the relevant checks after changing the model, index or source collection, and preserve the tested versions. Educational usefulness still requires evidence from the intended activity. A high RAG score can support a decision to pilot an assistant; it cannot establish that students learn more or that every answer is reliable.",
    "coreIdeas": [
      "Separate retrieval quality, support for the answer and relevance to the actual question.",
      "Test unsupported, ambiguous and outdated-source cases alongside ordinary questions.",
      "Calibrate automated judges with human review and preserve the exact evaluated versions."
    ],
    "educationConnection": "Evaluate a fictional course-policy assistant by checking the source year, retrieved exception and final answer independently.",
    "relatedConcepts": [
      "RAG evaluation",
      "Evidence support",
      "Retrieval quality"
    ],
    "sourceUrls": [
      {
        "label": "Es et al.: RAGAs",
        "url": "https://aclanthology.org/2024.eacl-demo.16/"
      },
      {
        "label": "Saad-Falcon et al.: ARES",
        "url": "https://aclanthology.org/2024.naacl-long.20/"
      }
    ],
    "createdAt": "2026-10-28T08:00:00.000Z"
  },
  {
    "id": "academy-206",
    "listingIdentifier": "Educational Theory 103",
    "slug": "preparation-for-future-learning",
    "title": "Preparation for Future Learning",
    "track": "educational-theory",
    "level": "core",
    "tags": [
      "Preparation for future learning",
      "Transfer assessment",
      "Learning from resources"
    ],
    "image": "/images/academy/covers/academy-206-preparation-for-future-learning.png",
    "imageAlt": "A teacher and two adult learners compare small bar-chart sketches with a worked explanation at a bright classroom table.",
    "summaryAudio": "/audio/academy/academy-206-preparation-for-future-learning-summary.m4a",
    "summaryAudioTitle": "Listen to Preparation for Future Learning",
    "shortSummary": "Preparation for future learning asks how earlier instruction helps learners use a new explanation, resource or problem. Assessment can include an opportunity to learn while still keeping independent performance visible.",
    "fullSummary": "Preparation for future learning asks whether an educational experience helps a learner learn something new later. A conventional transfer task often removes assistance and checks what the learner can already do. That is a valuable question, but it can miss differences in how learners notice useful information, interpret an explanation or revise an approach when a new resource becomes available.\n\nBransford and Schwartz argued for broadening transfer assessment to include learning opportunities. Schwartz and Martin examined this idea in statistics instruction, where students invented representations before receiving further resources. Their studies illustrate how initial activities can prepare learners to benefit from a later explanation even when immediate performance does not reveal the whole advantage. This is evidence from particular instructional designs, not a claim that unguided invention always outperforms explicit teaching.\n\nThe distinction changes what a teacher looks for. A student may not yet know a formal method but may have noticed the problem that the method solves. Another student may execute a familiar procedure accurately while overlooking when a new method is needed. Both prior knowledge and opportunities to encounter useful contrasts matter. Preparation should create a reason to attend to the explanation that follows, rather than merely making the first task difficult.\n\nConsider an illustrative class comparing the consistency of two sets of fictional travel times. Before introducing a formal measure of spread, pairs invent a way to describe how variable each set is. They test their proposal against a second example and discover where it gives an unhelpful comparison. The teacher then offers a short worked explanation of an appropriate measure. Learners revisit their earlier cases and identify what the new method resolves.\n\nAn assessment can preserve several forms of evidence. First, record what learners can explain before the new resource. Next, give everyone the same short learning opportunity. Finally, ask them to use the idea with another dataset and explain their revision. Improvement during that sequence provides information about learning from resources. A later task without the explanation provides a different check on what remains available independently. Neither score should silently replace the other.\n\nCareful design matters because access to a resource can introduce new demands. Dense prose, unfamiliar notation or an inaccessible diagram might prevent a learner from showing readiness to learn. Provide appropriate language and accessibility support while keeping the central reasoning comparable. Record the help offered so that differences in opportunities are not mistaken for stable differences in ability. Learners should also be able to explain which part of the resource changed their thinking.\n\nAI can be one possible resource in such an activity, but its contribution needs to be specified. A teacher might supply the same checked explanation to all learners or ask them to evaluate two contrasting suggestions. An unrestricted assistant that completes the final task makes interpretation harder. The aim is to observe how the learner uses information, questions it and adapts an approach. Preparation for future learning places that capacity alongside present performance as a meaningful educational outcome.",
    "coreIdeas": [
      "Transfer includes learning from a new resource as well as applying knowledge without help.",
      "Compare what learners know before, during and after a defined opportunity to learn.",
      "Keep resource access, guidance and later independent performance explicit in assessment."
    ],
    "educationConnection": "Let learners invent a measure of variability, study a shared explanation and justify how they revise their method on new travel-time data.",
    "relatedConcepts": [
      "Preparation for future learning",
      "Transfer assessment",
      "Learning from resources"
    ],
    "sourceUrls": [
      {
        "label": "Bransford and Schwartz: Rethinking Transfer",
        "url": "https://web.stanford.edu/~danls/RethinkingTransfer.pdf"
      },
      {
        "label": "Schwartz and Martin: Inventing to Prepare for Future Learning",
        "url": "https://aaalab.stanford.edu/assets/papers/2004/Inventing_to_prepare_for_future_learning.pdf"
      }
    ],
    "createdAt": "2026-10-28T08:00:00.000Z"
  },
  {
    "id": "academy-207",
    "listingIdentifier": "AI Knowledge 104",
    "slug": "test-time-compute-and-reasoning-budgets",
    "title": "Test-Time Compute and Reasoning Budgets",
    "track": "ai-knowledge",
    "level": "core",
    "tags": [
      "Test-time compute",
      "Reasoning budgets",
      "Verification"
    ],
    "image": "/images/academy/covers/academy-207-test-time-compute-and-reasoning-budgets.png",
    "imageAlt": "A computing instructor and adult learner compare alternative solution paths on a whiteboard beside a laptop and a small desk timer.",
    "summaryAudio": "/audio/academy/academy-207-test-time-compute-and-reasoning-budgets-summary.m4a",
    "summaryAudioTitle": "Listen to Test-Time Compute and Reasoning Budgets",
    "shortSummary": "AI systems can spend additional computation while answering, through longer reasoning, alternative candidates or verification. A larger budget changes cost and delay; its value must be measured on the intended task.",
    "fullSummary": "Training changes a model's parameters using data. Test-time computation is the work performed when the trained system answers a new request. A system can allocate additional computation by generating a longer reasoning sequence, considering several candidate solutions or checking intermediate steps. These approaches can improve some outcomes, but they add time and resource use and do not guarantee a correct answer.\n\nSnell and colleagues studied how inference computation can be allocated through response revision and searches guided by verifiers. Their results highlight that useful allocation depends on problem difficulty and the method used. The s1 research project explored another approach, controlling the length of reasoning through budget forcing. These are particular experimental techniques and evaluations. They should not be treated as interchangeable implementations of every commercial setting called thinking or reasoning effort.\n\nA budget needs an explicit unit and boundary. It might limit generated tokens, candidate attempts, tool calls, elapsed time or financial cost. Two systems assigned the same token allowance can still differ in latency and resource consumption. A provider's named effort setting is also not a portable measurement across models. Record the model version, instructions, available tools and budget configuration when comparing results, rather than reporting only a product name.\n\nConsider an illustrative classroom exercise in checking mathematical solutions. A team prepares a set of short problems with verified answers and several problems containing deliberate ambiguity. They compare a small and a larger computation budget using the same task instructions. Before running the comparison, they decide how to score correctness, recognition of missing information and unnecessary delay. They repeat enough cases to avoid drawing a conclusion from one impressive example.\n\nThe review can then distinguish types of benefit. Extra computation might help a system check arithmetic, explore an alternative representation or notice an inconsistency. It might also produce a longer explanation that remains wrong. If several candidates share the same misconception, voting among them does not create independent evidence. If a verifier rewards an attractive but invalid step, searching harder against that verifier can reinforce the error. A human-readable explanation should therefore be checked on its merits.\n\nEducational design adds another question: whose reasoning should the activity develop? A learner may benefit more from a brief, timely prompt than from a lengthy finished solution. A teacher preparing a resource may prefer additional checking before showing it to students. The appropriate budget depends on the purpose, the consequences of error and the time available. Faster responses and higher benchmark scores are useful system properties, but they are not direct measures of learning.\n\nA practical deployment can define a default budget, an escalation condition and a route for unresolved cases. Test those choices with representative tasks and record both successful and unsuccessful responses. Reassess them when the model or workflow changes. The central idea is deliberate allocation: spend computation where evidence shows it is useful, keep the resulting claims proportionate and preserve a person's ability to question the answer.",
    "coreIdeas": [
      "Inference budgets can fund longer reasoning, alternative candidates or verification without retraining the model.",
      "Compare exact configurations using correctness, uncertainty handling, delay and resource use.",
      "Additional computation cannot repair a flawed verifier or establish that an explanation is true."
    ],
    "educationConnection": "Compare two bounded AI configurations on teacher-checked problems, recording errors and useful clarifications as well as response time.",
    "relatedConcepts": [
      "Test-time compute",
      "Reasoning budgets",
      "Verification"
    ],
    "sourceUrls": [
      {
        "label": "Snell et al.: Scaling LLM Test-Time Compute Optimally",
        "url": "https://arxiv.org/abs/2408.03314"
      },
      {
        "label": "Muennighoff et al.: s1, Simple Test-Time Scaling",
        "url": "https://aclanthology.org/2025.emnlp-main.1025/"
      }
    ],
    "createdAt": "2026-10-29T08:00:00.000Z"
  },
  {
    "id": "academy-208",
    "listingIdentifier": "Educational Theory 104",
    "slug": "cognitive-diagnostic-assessment",
    "title": "Cognitive Diagnostic Assessment",
    "track": "educational-theory",
    "level": "core",
    "tags": [
      "Diagnostic assessment",
      "Q-matrix",
      "Attribute profiles"
    ],
    "image": "/images/academy/covers/academy-208-cognitive-diagnostic-assessment.png",
    "imageAlt": "A mathematics teacher and two learners examine fraction diagrams and annotated worked solutions at a small classroom table.",
    "summaryAudio": "/audio/academy/academy-208-cognitive-diagnostic-assessment-summary.m4a",
    "summaryAudioTitle": "Listen to Cognitive Diagnostic Assessment",
    "shortSummary": "Cognitive diagnostic assessment uses a model of knowledge and task demands to interpret patterns of responses. Its skill profiles are uncertain inferences that require validation and useful instructional follow-up.",
    "fullSummary": "Two learners can receive the same total test score while needing different kinds of support. Cognitive diagnostic assessment aims to make more specific inferences about the knowledge or skills involved in their responses. It begins with a theory of the domain and the demands of the tasks, then uses response patterns to estimate a learner profile. The profile is a model-based interpretation, not direct access to a person's thinking.\n\nLeighton and Gierl emphasize the connection between cognitive models, assessment design and the evidence needed for diagnostic claims. In many diagnostic classification approaches, a Q-matrix records which attributes each task requires. For example, a fraction problem might involve recognizing equivalent fractions, finding a common denominator and adding numerators. The matrix expresses a substantive hypothesis about those requirements. It should be informed by content expertise and evidence about how learners actually solve the tasks.\n\nA wrong response rarely identifies one missing skill by itself. A learner can make a slip, misunderstand wording or use an unexpected strategy. Conversely, a correct response may involve guessing or a shortcut that bypasses an intended attribute. Diagnostic models make assumptions about such possibilities and about how attributes combine. Different assumptions can produce different profiles. The number and variety of tasks must support the distinctions the assessment is intended to make.\n\nConsider an illustrative teacher workshop using fictional fraction responses. Teachers first describe three small, teachable capabilities and design several tasks that draw on different combinations. They predict which response patterns would support each interpretation. Next, they inspect worked solutions and brief learner explanations. If a supposed common-denominator task can be solved through a simple visual comparison, they revise the task description or the attribute mapping instead of forcing the evidence into the original plan.\n\nThe workshop can compare two students with equal totals but different patterns. One may consistently handle equivalent fractions yet struggle when an addition task introduces an unfamiliar representation. Another may succeed on practiced additions while giving weak explanations of equivalence. These are starting hypotheses for a short follow-up conversation. A targeted question can test the interpretation before the teacher decides what support to provide. The exercise does not require presenting a complex statistical model as a classroom certainty.\n\nValidation should address both measurement and use. Check whether the tasks cover the intended domain, whether the model fits the response patterns and how uncertain the classifications are. Examine whether language, accessibility or opportunity to learn affects the interpretation. A diagnostic label is only useful if it supports an appropriate next step and can be revised when new evidence appears. It should not become a permanent description of a learner's ability.\n\nAI can help draft candidate tasks or organize response evidence, but educators need to inspect the attribute definitions, solutions and proposed inferences. A fluent explanation of why a learner answered incorrectly is not a validated diagnosis. Keep the original work visible, communicate uncertainty and check the effect of any follow-up teaching. Cognitive diagnostic assessment is most valuable when a defensible interpretation leads to a specific, revisable opportunity to learn.",
    "coreIdeas": [
      "Equal total scores can hide different response patterns and instructional needs.",
      "Attribute definitions and task mappings are hypotheses requiring domain and response-process evidence.",
      "Treat diagnostic profiles as uncertain, revisable interpretations linked to follow-up teaching."
    ],
    "educationConnection": "Compare fictional fraction-response patterns, test each interpretation with a short learner explanation and design a targeted next task.",
    "relatedConcepts": [
      "Diagnostic assessment",
      "Q-matrix",
      "Attribute profiles"
    ],
    "sourceUrls": [
      {
        "label": "Leighton and Gierl: Cognitive Diagnostic Assessment for Education",
        "url": "https://www.cambridge.org/core/books/cognitive-diagnostic-assessment-for-education/109FBE147A6FB76538B4A530A422CB63"
      },
      {
        "label": "Leighton and Gierl: Defining and Evaluating Models of Cognition",
        "url": "https://doi.org/10.1111/j.1745-3992.2007.00090.x"
      },
      {
        "label": "Williamson: Cognitive Diagnostic Models and How They Can Be Useful",
        "url": "https://www.cambridgeassessment.org.uk/Images/701443-cognitive-diagnostic-models-and-how-they-can-be-useful.pdf"
      }
    ],
    "createdAt": "2026-10-29T08:00:00.000Z"
  },
  {
    "id": "academy-209",
    "listingIdentifier": "AI Knowledge 105",
    "slug": "active-learning-and-label-selection",
    "title": "Active Learning and Label Selection",
    "track": "ai-knowledge",
    "level": "core",
    "tags": [
      "Active learning",
      "Label selection",
      "Annotation quality"
    ],
    "image": "/images/academy/covers/academy-209-active-learning-and-label-selection.png",
    "imageAlt": "An educator and adult learner choose a few varied example cards for labeling beside a laptop and a small annotated category chart.",
    "summaryAudio": "/audio/academy/academy-209-active-learning-and-label-selection-summary.m4a",
    "summaryAudioTitle": "Listen to Active Learning and Label Selection",
    "shortSummary": "Active learning lets a model select which examples need human labels next. Its value depends on the selection rule, annotation quality and performance on an independent test set, not simply on collecting fewer labels.",
    "fullSummary": "In machine learning, active learning is a process for choosing which examples a human should label next. A model begins with some labeled data, selects additional cases from an available pool, receives labels and updates. The aim is to use limited annotation effort effectively. This technical meaning is different from active learning in education, where the phrase concerns learners' participation in meaningful activities.\n\nSelection rules express different priorities. An uncertainty-based method may request examples for which the model is unsure. A diversity-based method may seek examples that represent parts of the data not yet covered. Research by Gal and colleagues explores Bayesian uncertainty for selecting image labels, while Sener and Savarese formulate selection as a core-set problem. These approaches illustrate distinct ways to choose useful cases; neither provides a universal guarantee of fewer labels for every educational application.\n\nAn uncertain prediction is not automatically a valuable annotation request. A blurred image or an ambiguous question may remain difficult even after expert review. A model can also be confidently wrong about a poorly represented group, so uncertainty alone may overlook cases that deserve attention. Batch selection adds another challenge: several individually useful examples may be nearly identical. The policy needs to balance information, coverage and the actual cost of obtaining a reliable label.\n\nConsider an illustrative project that sorts fictional student questions into course topics. Teachers first agree on the topic definitions and label a small, varied starting set. The model then proposes a few additional questions for review. For each proposal, the interface shows the question and why it was selected, such as uncertainty between two topics or limited coverage of a particular type of phrasing. Teachers can flag an ambiguous example rather than force it into an unsuitable category.\n\nThe team keeps a separate test set that is never used to choose or train on new labels. After each round, it checks whether the updated model improves on that set and whether performance differs across question types. It compares the selection policy with randomly chosen examples under a similar annotation budget. This helps establish whether the extra selection machinery provides a benefit, rather than attributing any improvement to active learning when simply adding data would have helped.\n\nHuman effort needs a broader measure than the number of labels. Some questions take seconds to classify, while others require discussion or a revision of the category definitions. Record review time, disagreement and changes to the labeling guide. If teachers repeatedly disagree, the problem may be an unclear construct rather than an inadequate model. Improving the definition can be more valuable than repeatedly asking for another label.\n\nAn educational deployment should also limit collection to the agreed purpose and preserve appropriate access controls. A labeling request should not expose unnecessary student information. Define when to stop, how to handle unresolved cases and who can change the task. Active learning is a way to organize a conversation between a model and knowledgeable people. Its success depends on whether that conversation produces better evidence and a more useful system for the intended setting.",
    "coreIdeas": [
      "Active learning selects examples for human annotation; it is distinct from classroom active learning.",
      "Uncertainty, diversity and annotation cost create different selection priorities.",
      "Compare policies on an independent test set and count review effort as well as labels."
    ],
    "educationConnection": "Use fictional course questions to compare uncertainty-based and random label requests while recording teacher disagreement and review time.",
    "relatedConcepts": [
      "Active learning",
      "Label selection",
      "Annotation quality"
    ],
    "sourceUrls": [
      {
        "label": "Gal et al.: Deep Bayesian Active Learning with Image Data",
        "url": "https://proceedings.mlr.press/v70/gal17a.html"
      },
      {
        "label": "Sener and Savarese: A Core-Set Approach",
        "url": "https://arxiv.org/abs/1708.00489"
      }
    ],
    "createdAt": "2026-10-30T08:00:00.000Z"
  },
  {
    "id": "academy-210",
    "listingIdentifier": "Educational Theory 105",
    "slug": "cognitive-offloading-and-learning",
    "title": "Cognitive Offloading and Learning",
    "track": "educational-theory",
    "level": "core",
    "tags": [
      "Cognitive offloading",
      "External representations",
      "Metacognitive control"
    ],
    "image": "/images/academy/covers/academy-210-cognitive-offloading-and-learning.png",
    "imageAlt": "A teacher and learner review a meaningful investigation checklist beside a thermometer, an observation chart and a tablet reminder.",
    "summaryAudio": "/audio/academy/academy-210-cognitive-offloading-and-learning-summary.m4a",
    "summaryAudioTitle": "Listen to Cognitive Offloading and Learning",
    "shortSummary": "Cognitive offloading uses external actions and resources to reduce mental demands. In education, decide what the tool should carry and what the learner should still understand, remember or practise independently.",
    "fullSummary": "Cognitive offloading occurs when people change the environment or use an external resource to reduce the mental demands of a task. Writing a reminder, arranging objects to make a comparison easier or keeping intermediate calculations on paper can all serve this purpose. Offloading is an ordinary feature of skilled activity. It is not automatically evidence of laziness, declining ability or a failure to learn.\n\nRisko and Gilbert describe how offloading connects cognitive demands with people's judgments about their own abilities. Gilbert's experiments on delayed intentions examine how people use external reminders when they expect remembering to be difficult. This research helps explain decisions to rely on support, but it does not establish that every digital tool has the same consequences. A calendar reminder, a calculator and an AI-generated explanation can shift very different parts of an activity outside the learner.\n\nThe educational question is what should remain the learner's responsibility. If the objective is interpreting a graph, using a tool to organize a large table may free attention for comparison and explanation. If the objective is learning a calculation procedure, having the tool perform every step changes the practice opportunity. The same support can therefore serve one lesson and undermine the evidence needed in another. Begin with the intended knowledge or capability rather than a general rule for or against assistance.\n\nConsider an illustrative class planning a small investigation of classroom temperature. Learners use a checklist to remember measurement times and a spreadsheet to organize observations. Those supports can reduce routine memory demands while learners decide where to measure, explain possible sources of error and interpret the pattern. The teacher asks each group to identify which decisions the tools made easier and which decisions still required their judgment.\n\nNow imagine an assistant that also writes the interpretation. Students might receive a fluent paragraph without comparing the observations themselves. A teacher could redesign that step by asking learners to predict the pattern first, inspect the proposed explanation and justify one revision. A later question using a small new dataset could check what they can explain independently. The aim is to preserve the target reasoning while using external support for an appropriate part of the work.\n\nLearners' confidence also deserves attention. Someone who underestimates their memory may set more reminders than necessary, while someone who overestimates their understanding may reject useful support. Reflection can compare an initial prediction with actual performance, helping learners choose assistance more deliberately. Avoid turning this into a competition to work unaided. Accessibility needs and legitimate professional practices mean that effective performance may appropriately include stable external tools.\n\nAssessment should state whether it concerns performance with a resource, independent knowledge or the ability to select and evaluate support. These outcomes can complement one another, but they should not be silently substituted. When a tool is unavailable or produces an error, learners also need a way to recognize the problem and continue. Thoughtful offloading means allocating work deliberately, checking the result and retaining the understanding needed to use assistance well.",
    "coreIdeas": [
      "External reminders and representations can reduce mental demands without making learning unnecessary.",
      "Decide which part of an activity can be delegated from the lesson objective.",
      "Distinguish supported performance, independent understanding and skill in choosing assistance."
    ],
    "educationConnection": "Use reminders and a spreadsheet in a temperature investigation while keeping prediction, interpretation and explanation with the learners.",
    "relatedConcepts": [
      "Cognitive offloading",
      "External representations",
      "Metacognitive control"
    ],
    "sourceUrls": [
      {
        "label": "Risko and Gilbert: Cognitive Offloading",
        "url": "https://samgilbert.net/pubs/Risko2016TiCS.pdf"
      },
      {
        "label": "Gilbert: Strategic Offloading of Delayed Intentions",
        "url": "https://samgilbert.net/pubs/Gilbert2015QJEP.pdf"
      }
    ],
    "createdAt": "2026-10-30T08:00:00.000Z"
  }
];
