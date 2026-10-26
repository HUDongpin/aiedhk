import type { AcademyLesson } from "@/lib/types";

// Reviewed English lessons; existing locale fallback remains in effect.
export const academyRelease20261024To20261026: AcademyLesson[] = [
  {
    "id": "academy-197",
    "listingIdentifier": "AI Knowledge 99",
    "title": "Conformal Prediction",
    "slug": "conformal-prediction",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-197-conformal-prediction.png",
    "summaryAudio": "/audio/academy/academy-197-conformal-prediction-summary.m4a",
    "tags": [
      "prediction sets",
      "uncertainty",
      "calibration data"
    ],
    "imageAlt": "A Black woman educator and East Asian and White adult learners compare hand-drawn prediction intervals and marked outcomes in a bright seminar room.",
    "summaryAudioTitle": "Listen to Conformal Prediction",
    "shortSummary": "Conformal prediction turns calibrated errors into prediction sets or intervals. Its coverage guarantee depends on exchangeable data and concerns repeated predictions, not certainty for every learner.",
    "fullSummary": "Conformal prediction is a way to attach a set of plausible answers, or an interval of plausible numerical values, to a model's prediction. Instead of reporting only one predicted outcome, the system also communicates how much uncertainty remains. The method uses examples with known outcomes to calibrate this uncertainty. It can work with many underlying prediction models, but its statistical promise depends on a carefully defined data relationship and prediction procedure.\n\nIn a simple split conformal approach, one portion of the data trains the model and a separate portion calibrates the prediction sets. For regression, a basic score is the absolute difference between a prediction and the observed value. A suitable quantile of the calibration scores determines how far an interval extends around a new prediction. The quantile requires a finite-sample adjustment; simply taking an arbitrary percentile can lose the advertised guarantee.\n\nFor classification, the result can be a set containing several possible labels. A difficult example may need a larger set than an easy one. The underlying model influences how informative these sets are. A weak model can achieve coverage with very broad sets, so coverage alone does not establish practical usefulness. Lei and colleagues' work on regression explains how conformal methods trade computational demands against the length and adaptivity of prediction intervals.\n\nThe standard guarantee requires exchangeability of the calibration examples and the new example: roughly, their joint distribution must not depend on their ordering. Independent observations from the same distribution satisfy this condition. Repeated observations from the same learner, a changing curriculum, or a different student population can violate the simple setup. Distribution-free therefore does not mean assumption-free, and ordinary calibration should not be carried unchanged into an unfamiliar setting.\n\nA nominal ninety-percent coverage level concerns the procedure across calibration samples and new examples under its assumptions. It does not guarantee that exactly nine of the next ten intervals will succeed. Nor does it mean every particular learner, subgroup, or difficulty level receives ninety-percent coverage. Barber and colleagues show why strong conditional guarantees are difficult to obtain without additional assumptions. Report relevant subgroup checks and acknowledge uncertainty when there are too few observations.\n\nConsider a fictional classroom-planning model that predicts time needed for a practice task. Teachers could compare intervals with observed completion times on a separate evaluation set. They would inspect both missed outcomes and intervals too broad to help planning. They would also check whether repeated records from the same class made the evaluation misleading. This example is a design exercise, not evidence that such a system improves learning or should determine an individual student's opportunities.\n\nFor an introductory activity, learners draw prediction intervals for a small fictional dataset, mark which outcomes are covered, and discuss what happens when the data source changes. Conformal prediction provides a disciplined language for uncertainty when its assumptions and limitations remain visible. Educational decisions still require appropriate outcomes, fair procedures, human judgment, and evidence that using the predictions actually serves learners.",
    "coreIdeas": [
      "A separate calibration sample turns prediction errors into sets or intervals using an appropriate finite-sample procedure.",
      "Standard coverage relies on exchangeable data and is marginal across examples, rather than a guarantee for each individual or subgroup.",
      "Useful evaluation examines set width, missed outcomes, population changes and educational consequences alongside coverage."
    ],
    "educationConnection": "Use fictional task-time predictions to compare interval width and observed coverage, then explain why repeated learner records or a changed population can undermine the simple calibration setup.",
    "relatedConcepts": [
      "Prediction intervals",
      "Exchangeability",
      "Marginal coverage"
    ],
    "sourceUrls": [
      {
        "label": "Angelopoulos and Bates: A Gentle Introduction to Conformal Prediction",
        "url": "https://arxiv.org/abs/2107.07511"
      },
      {
        "label": "Lei et al.: Distribution-Free Predictive Inference for Regression",
        "url": "https://arxiv.org/abs/1604.04173"
      },
      {
        "label": "Barber et al.: The Limits of Distribution-Free Conditional Predictive Inference",
        "url": "https://arxiv.org/abs/1903.04684"
      }
    ]
  },
  {
    "id": "academy-198",
    "listingIdentifier": "Educational Theory 99",
    "title": "Advance Organizers",
    "slug": "advance-organizers",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-198-advance-organizers.png",
    "summaryAudio": "/audio/academy/academy-198-advance-organizers-summary.m4a",
    "tags": [
      "prior knowledge",
      "meaningful learning",
      "instructional organization"
    ],
    "imageAlt": "A science educator points to three connected water-cycle sketches while two adult learners examine a related worksheet in a bright classroom.",
    "summaryAudioTitle": "Listen to Advance Organizers",
    "shortSummary": "Advance organizers introduce an overarching conceptual structure before detailed instruction. Their value depends on meaningful connections to learners' existing knowledge and cannot be inferred from attractive diagrams alone.",
    "fullSummary": "An advance organizer introduces a conceptual framework before learners encounter detailed material. It helps them see how the coming ideas relate to something they already understand. In David Ausubel's account of meaningful learning, new information becomes more intelligible when it connects with relevant existing concepts. The organizer supplies or activates this connecting structure, so a lesson is less likely to become a collection of isolated facts.\n\nAn organizer has a different purpose from a timetable or a list of lesson headings. Saying that a class will cover evaporation, condensation, and rainfall names the topics. An organizer might instead establish that water can change state and location while remaining part of an interconnected system. The details that follow then have a conceptual home. A drawing can express this relationship, but a diagram is not automatically an effective organizer simply because it appears before teaching.\n\nThe choice depends on learners' starting points. For unfamiliar material, a teacher may introduce a broad explanatory idea in accessible language. For material resembling something already studied, a comparison can clarify both connections and important differences. Before choosing either approach, ask learners to explain an example or interpret a simple representation. Recognizing a familiar term is weaker evidence of understanding than using it accurately to make sense of a situation.\n\nImagine an adult science class preparing to study condensation. The teacher first discusses familiar experiences with water, then presents three connected sketches showing liquid water, invisible water vapor, and liquid forming on a cool surface. Learners explain what stays the same and what changes. During the detailed lesson, the teacher returns to this framework to connect observations with state changes. The sequence is an illustrative teaching design; it is not a claim that three sketches establish a validated intervention.\n\nOrganizers should remain manageable. Too many concepts, unexplained arrows, or unfamiliar terms can create another lesson that students cannot yet understand. Invite learners to interpret the relationships, identify uncertainties, and revise the organizer as the lesson develops. Provide an accessible verbal explanation alongside a visual representation. When an analogy is used, state where it stops being helpful so that the bridge to new knowledge does not create a persistent misconception.\n\nThe evidence should be read with care. Barron's research on science organizers did not find significant advantages for its organizer treatments across the studied grade levels. A later critique by Bryce and Blown questions how confidently teachers can identify and characterize learners' prior knowledge. These sources caution against treating organizers as a universally effective recipe. Results depend on the content, comparison condition, learner knowledge, and how the organizer is actually used.\n\nEvaluate understanding after instruction by asking learners to explain a new example and connect its parts, rather than merely reproduce the opening diagram. Compare their explanations with their initial responses to identify what changed. An advance organizer is useful when it supports meaningful relationships that learners can use independently. Its success lies in clearer understanding and subsequent reasoning, not in the completeness or decorative appeal of the introductory display.",
    "coreIdeas": [
      "An advance organizer presents a conceptual relationship before detailed teaching, rather than merely announcing a list of topics.",
      "Teachers must examine learners' actual prior understanding and explain the organizer's connections in accessible forms.",
      "Effects are context dependent; evaluate new explanations and transfer instead of assuming that any opening diagram improves learning."
    ],
    "educationConnection": "Before teaching condensation, elicit learners' explanations of familiar water experiences, introduce a compact state-change framework, and revisit it when students explain a new case.",
    "relatedConcepts": [
      "Meaningful learning",
      "Prior-knowledge activation",
      "Conceptual organization"
    ],
    "sourceUrls": [
      {
        "label": "Temple University: Advance Organizers, Setting the Stage for Learning and Retention",
        "url": "https://sites.temple.edu/edvice/2022/04/06/advance-organizers-setting-the-stage-for-learning-and-retention/"
      },
      {
        "label": "Barron: The Effects of Advance Organizers on General Science Learning",
        "url": "https://files.eric.ed.gov/fulltext/ED061554.pdf"
      },
      {
        "label": "Bryce and Blown: Ausubel's Meaningful Learning Revisited",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10130311/"
      }
    ]
  },
  {
    "id": "academy-199",
    "listingIdentifier": "AI Knowledge 100",
    "title": "Out-of-Distribution Detection",
    "slug": "out-of-distribution-detection",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-199-out-of-distribution-detection.png",
    "summaryAudio": "/audio/academy/academy-199-out-of-distribution-detection-summary.m4a",
    "tags": [
      "distribution shift",
      "novel inputs",
      "AI evaluation"
    ],
    "imageAlt": "A Latina teacher and Black and East Asian adult learners compare plant photographs and place a mushroom photograph beside a separate review tray in a bright botany room.",
    "summaryAudioTitle": "Listen to Out-of-Distribution Detection",
    "shortSummary": "Out-of-distribution detection flags inputs that may fall outside a model's supported setting. Confidence scores are imperfect signals, and useful detection requires realistic tests and an appropriate response to uncertainty.",
    "fullSummary": "Out-of-distribution detection asks whether an incoming example differs enough from a system's reference data that its prediction may need special handling. A classifier trained to recognize several plant species might receive a photograph of a mushroom, an unfamiliar species, or a badly damaged image. It can still produce one of its available labels. Detection adds a separate question: is this input within the conditions for which the system has been prepared and evaluated?\n\nThe relevant boundary depends on the task. A new camera or lighting condition changes the appearance of an image without necessarily changing what it depicts. An unseen category changes what the system needs to recognize. In education, an unfamiliar language, curriculum, age group, or answer format can also create a mismatch. A difference is not automatically harmful, but it must be understood before the model's previous performance is assumed to carry over.\n\nHendrycks and Gimpel proposed a baseline that uses a classifier's largest softmax probability as a detection score. Correctly classified familiar examples often receive higher scores than mistakes or unfamiliar inputs in their evaluated settings. This supplies a useful comparison point for more elaborate methods. It does not establish that a large probability always means an input is familiar, or that the model's score is a reliable measure of educational correctness.\n\nOther approaches use internal representations, alternative scores, or explicit examples of unfamiliar inputs. Their success must be tested rather than inferred from the method's complexity. Nalisnick and colleagues showed that some deep generative models assigned higher likelihood to certain unfamiliar image datasets than to their training distribution. A score that sounds mathematically appropriate can therefore behave counterintuitively. Research by Hendrycks and colleagues also demonstrates the importance of evaluating larger and more varied real-world detection tasks.\n\nA detection threshold balances missed unfamiliar cases against false alarms on legitimate inputs. Evaluate both types of error using held-out examples that reflect expected use and plausible changes. Testing only obvious mismatches, such as unrelated photographs, may conceal failures on subtly unfamiliar inputs. Keep threshold-selection data separate from final evaluation, and describe which kinds of change were examined. No finite test collection demonstrates reliable detection of every future unknown.\n\nConsider a fictional school botany activity. Learners test a plant classifier with ordinary plant photos, altered lighting, and a mushroom photo. They record the classification and detection result separately. If an unfamiliar case is flagged, the system could request another photograph, explain its scope, or refer the question to a teacher. The response should preserve access to learning; an unusual input should not become evidence that a learner is deficient or should be excluded.\n\nBefore using a detector in practice, check whether false alarms fall unevenly across languages, devices, or learner groups. Provide a route to correction and retain only the data needed for legitimate review. Out-of-distribution detection is one component of a broader reliability process. It can help expose situations that deserve caution, but it neither repairs a prediction nor proves that accepted inputs are safe, fair, or educationally useful.",
    "coreIdeas": [
      "An unfamiliar input and an incorrect prediction are related but distinct problems, requiring separate evaluation.",
      "Confidence or likelihood scores can fail as novelty signals; compare methods with realistic held-out changes and explicit thresholds.",
      "Detection needs a constructive response, subgroup checks and a correction route so false alarms do not unfairly restrict learning."
    ],
    "educationConnection": "Test a fictional plant classifier with familiar photos, changed lighting and an unfamiliar mushroom image, recording predictions and novelty flags separately before designing a teacher-review response.",
    "relatedConcepts": [
      "Distribution shift",
      "Novelty detection",
      "False alarms"
    ],
    "sourceUrls": [
      {
        "label": "Hendrycks and Gimpel: A Baseline for Detecting Misclassified and Out-of-Distribution Examples",
        "url": "https://arxiv.org/abs/1610.02136"
      },
      {
        "label": "Nalisnick et al.: Do Deep Generative Models Know What They Do Not Know?",
        "url": "https://arxiv.org/abs/1810.09136"
      },
      {
        "label": "Hendrycks et al.: Scaling Out-of-Distribution Detection for Real-World Settings",
        "url": "https://arxiv.org/abs/1911.11132"
      }
    ]
  },
  {
    "id": "academy-200",
    "listingIdentifier": "Educational Theory 100",
    "title": "Learning with Contrasting Cases",
    "slug": "learning-with-contrasting-cases",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-200-learning-with-contrasting-cases.png",
    "summaryAudio": "/audio/academy/academy-200-learning-with-contrasting-cases-summary.m4a",
    "tags": [
      "comparison",
      "structural understanding",
      "learning design"
    ],
    "imageAlt": "A mathematics educator and two adult learners compare corresponding features on two triangle-diagram sheets during a warm workshop.",
    "summaryAudioTitle": "Listen to Learning with Contrasting Cases",
    "shortSummary": "Carefully chosen contrasting cases help learners notice important relationships. Explicit comparison, relevant prior knowledge and follow-up explanation matter more than simply displaying several examples.",
    "fullSummary": "Learning with contrasting cases uses deliberately selected examples to make an important distinction easier to notice. When learners examine cases together, they can ask what changes, what stays constant, and which relationship explains the difference. The instructional value lies in the comparison they perform. Showing several examples in succession does not guarantee that learners will connect them or identify the feature the teacher intends.\n\nSchwartz and Bransford studied how analyzing contrasting cases could prepare students to learn from a subsequent explanation. In their classroom studies, college students examined simplified psychology experiments before receiving related teaching. The design helped learners develop distinctions that made the explanation more meaningful. This finding supports a sequence in which comparison and instruction work together; it does not establish that learners should always discover a principle without guidance.\n\nThe choice of cases determines what can be learned. Two examples that differ in many irrelevant ways may encourage superficial comparisons. Two that are almost identical may reveal too little. A teacher should identify the target relationship, then select a manageable set of cases that makes it available for discussion. Prompts such as 'Which step performs the same function?' or 'What would change if this quantity doubled?' direct attention toward reasoning rather than appearance.\n\nConsider two worked solutions to the same equation. One expands brackets before rearranging terms; the other first uses an available common factor. Learners align corresponding steps, explain why both preserve equality, and discuss when each approach is efficient. The teacher then changes the equation so that a previously useful shortcut no longer helps. This illustrative activity aims to develop choices among methods, not a rule that the shortest written solution is always best.\n\nRittle-Johnson, Star, and Durkin's research programme distinguishes comparing solution methods from merely seeing more than one method. Their classroom experiments found benefits for procedural flexibility, with some other benefits depending on prior knowledge. Their later curriculum trial did not show greater learning simply from assignment to the comparison materials, and implementation was lower than expected. These findings make support for teachers and learners part of the design, rather than treating comparison as self-executing.\n\nNovices may need an explanation of one method before a comparison becomes productive. Place related representations close together, align corresponding features, and ask learners to explain a specific connection. Avoid overwhelming them with many unfamiliar procedures at once. Discussion should also accommodate different ways of describing a relationship, while the teacher checks the underlying mathematics or disciplinary claim. A plausible verbal contrast can still hide an error.\n\nAssessment should look beyond whether students can list similarities and differences. Ask them to select a method for a new problem, justify that choice, or predict how a changed feature affects the outcome. Use their responses to decide whether the cases exposed the intended relationship. Contrasting cases are most useful when purposeful selection, active comparison, clear explanation, and later application form a coherent learning sequence. The comparison serves a particular conceptual goal rather than becoming an attractive activity detached from understanding.",
    "coreIdeas": [
      "Useful cases vary features that reveal a target relationship while controlling distracting differences.",
      "Learners need explicit comparison prompts, suitable prior knowledge and follow-up explanation; multiple examples alone are insufficient.",
      "Check flexible application to new cases, and account for classroom implementation when interpreting research findings."
    ],
    "educationConnection": "Compare two valid solutions of one equation, align corresponding operations, and then change the equation so learners must reconsider which method is useful.",
    "relatedConcepts": [
      "Structural comparison",
      "Procedural flexibility",
      "Preparation for learning"
    ],
    "sourceUrls": [
      {
        "label": "Schwartz and Bransford: A Time for Telling",
        "url": "https://aaalab.stanford.edu/papers/time_for_telling.pdf"
      },
      {
        "label": "Rittle-Johnson, Star, and Durkin: The Power of Comparison in Mathematics Instruction",
        "url": "https://cdn.vanderbilt.edu/vu-my/wp-content/uploads/sites/3147/2020/01/21230240/RittleJohnson_Star_Durkin_2017_ComparisonChapter.pdf"
      },
      {
        "label": "Stanford AAA Lab: Contrasting Cases Research",
        "url": "https://aaalab.stanford.edu/research/inventive-learning/contrasting-cases/"
      }
    ]
  },
  {
    "id": "academy-201",
    "listingIdentifier": "AI Knowledge 101",
    "title": "Model Cards and Their Limits",
    "slug": "model-cards-and-their-limits",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-26T08:00:00.000Z",
    "image": "/images/academy/covers/academy-201-model-cards-and-their-limits.png",
    "summaryAudio": "/audio/academy/academy-201-model-cards-and-their-limits-summary.m4a",
    "tags": [
      "model documentation",
      "intended use",
      "evidence appraisal"
    ],
    "imageAlt": "A Black male teacher and South Asian and White adult colleagues inspect a structured model-information sheet beside a laptop in a bright staff meeting.",
    "summaryAudioTitle": "Listen to Model Cards and Their Limits",
    "shortSummary": "Model cards describe a model's intended use, evaluation and limitations. Read them as evidence-bearing documentation whose claims still need checking against the specific educational application.",
    "fullSummary": "A model card is structured documentation that helps people understand what an AI model is designed to do, how it was evaluated, and where caution is needed. Mitchell and colleagues proposed model cards to make important performance conditions visible when trained models are released. A useful card connects claims to evidence and context. It allows educators to ask informed questions before a model becomes part of a learning activity or institutional decision.\n\nThe original framework includes model details, intended uses, relevant performance factors, metrics, evaluation data, training data, quantitative analyses, ethical considerations, and caveats. These sections serve different purposes. A list of training languages describes exposure, while an evaluation on a particular language provides evidence about tested performance. Neither establishes that every educational task in that language is supported. Missing information should remain visibly unknown instead of being replaced by an optimistic assumption.\n\nRead performance results together with their evaluation conditions. Identify the task, dataset, sample size, metric, comparison, and model version. Where relevant, examine differences across groups and combinations of factors. An overall average can conceal important variation, while a subgroup estimate based on very few examples may be unstable. The question is whether the reported evidence applies to the people, materials, and decisions involved in the proposed use.\n\nHugging Face's documentation illustrates a practical implementation: model repositories can carry a model card with human-readable descriptions and structured metadata. Metadata can identify items such as the task, language, license, or associated datasets. These fields improve organization and discovery, but a completed template does not establish the truth of every statement. Read the supporting evidence, check its provenance, and distinguish measured results from recommendations or claims that have not been independently examined.\n\nConsider a fictional school team evaluating an essay-feedback model. Its card reports testing on adult English essays, while the school intends to support younger multilingual writers. The team marks that mismatch, asks for relevant evaluation, and prepares a limited review using appropriate consent and data handling. They also inspect whether the final application adds retrieval, prompts, filters, or tools that change behavior. Evidence about the base model is only part of the evidence needed for the complete classroom system.\n\nThe limits are practical as well as technical. A model card can be incomplete, outdated, or difficult for its audience to interpret. It is not a certification that the model is fair, secure, legally compliant, or effective for learning. NIST's AI Risk Management Framework situates documentation within an ongoing process of understanding context, evaluating risks, and managing deployment. Documentation helps make that process inspectable; it does not replace the process itself.\n\nFor an educational activity, compare two fictional cards and sort statements into supported evidence, context-dependent recommendations, and unanswered questions. Ask which additional observation would change a decision. Keep the reviewed card linked to the exact model and application version, and revisit it when either changes. Model cards are valuable when they expose assumptions and limitations clearly enough for users to act, seek clarification, or decide that the available evidence is insufficient.",
    "coreIdeas": [
      "Model cards connect intended use, evaluation conditions and limitations to a specific model rather than providing a universal endorsement.",
      "Readable documentation and metadata support appraisal, but completed fields do not prove claims or remove unknowns.",
      "Educational adoption needs evidence about the actual learners and complete application, with documentation updated when the system changes."
    ],
    "educationConnection": "Review a fictional essay-feedback model card, identify the mismatch between its evaluation population and the intended learners, and specify the additional evidence required before use.",
    "relatedConcepts": [
      "Model documentation",
      "Intended-use boundaries",
      "System evaluation"
    ],
    "sourceUrls": [
      {
        "label": "Mitchell et al.: Model Cards for Model Reporting",
        "url": "https://arxiv.org/abs/1810.03993"
      },
      {
        "label": "Hugging Face: Model Cards",
        "url": "https://huggingface.co/docs/hub/model-cards"
      },
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ]
  },
  {
    "id": "academy-202",
    "listingIdentifier": "Educational Theory 101",
    "title": "Learning Progressions",
    "slug": "learning-progressions",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-26T08:00:00.000Z",
    "image": "/images/academy/covers/academy-202-learning-progressions.png",
    "summaryAudio": "/audio/academy/academy-202-learning-progressions-summary.m4a",
    "tags": [
      "conceptual development",
      "curriculum coherence",
      "formative assessment"
    ],
    "imageAlt": "A White woman educator and East Asian and Black adult teachers compare three large evaporation drawings with different explanatory arrows in a bright science classroom.",
    "summaryAudioTitle": "Listen to Learning Progressions",
    "shortSummary": "Learning progressions describe plausible developments in understanding over time. They guide coherent teaching and assessment while remaining hypotheses that must account for instruction and individual variation.",
    "fullSummary": "A learning progression describes how understanding of an important idea may develop into increasingly powerful forms over time. It connects learners' existing ways of reasoning with a longer-term educational goal and proposes useful intermediate understandings. The purpose is to guide coherent teaching and assessment across lessons or years. A progression concerns changes in the quality of thinking, rather than simply an ordered list of textbook topics.\n\nThe National Research Council's Taking Science to School presents learning progressions as research-informed proposals about how scientific understanding can grow with appropriate teaching. Their starting points include the resources learners already bring. Their endpoints reflect important disciplinary ideas and educational aims. Intermediate understandings describe possible bridges between those points. These pathways depend on instructional opportunities and remain open to investigation, revision, and alternative routes.\n\nA later Framework for K-12 Science Education uses progression thinking to organize developing knowledge, practices, and crosscutting concepts across grades. The framework also acknowledges that evidence was uneven and that some endpoints involved expert judgment. This distinction matters: a published sequence is not automatically a fully validated account of how every child learns. Curriculum expectations and empirical descriptions of development inform each other, but they are not interchangeable.\n\nConsider an illustrative progression for understanding evaporation. A learner may initially describe water as simply disappearing. With suitable investigation, the learner might recognize that water enters the surrounding air and can later be recovered through condensation. More developed explanations connect observations to a model of matter and changes of state. These examples are prompts for examining reasoning, not fixed stages or age labels, and real learners may combine elements from several explanations.\n\nMargaret Heritage connects progression thinking with instructional planning and formative assessment. Ask students to explain a phenomenon, interpret evidence, or predict a new outcome. Look for the reasoning behind the response rather than assigning a level from one correct word. A student might explain evaporation well in a familiar example yet struggle with a different context. Language demands, representation choices, and prior experience can affect what an assessment reveals. Collect several complementary pieces of evidence before deciding what support is needed.\n\nThe next instructional step should respond to that evidence. If learners believe that evaporated water ceases to exist, compare closed and open systems and discuss what observations could distinguish competing explanations. If they already track water through changes, ask them to apply the model to an unfamiliar situation. Teachers can compare anonymous work samples to refine their interpretation, while inviting students to explain what they intended. Progression language should support opportunity rather than fix a learner's identity.\n\nDigital systems can organize evidence around a progression, but a dashboard position should not be mistaken for direct access to understanding. Check how tasks elicit the targeted reasoning, how interpretations are made, and whether the proposed next activity helps. Revise the progression when recurring evidence contradicts its assumptions. A useful learning progression makes a long-term goal teachable through meaningful intermediate ideas while preserving uncertainty, learner variation, and the central role of instruction.",
    "coreIdeas": [
      "A learning progression proposes changes in reasoning between existing understanding and a meaningful disciplinary goal.",
      "Progressions depend on instruction and remain revisable hypotheses rather than universal age stages or fixed learner labels.",
      "Use varied evidence of students' explanations to choose support, and test whether the proposed next step advances understanding."
    ],
    "educationConnection": "Compare anonymous explanations of evaporation, identify the reasoning each reveals, and choose an investigation that could support a more powerful explanation without treating students as fixed levels.",
    "relatedConcepts": [
      "Developmental pathways",
      "Curriculum coherence",
      "Evidence of reasoning"
    ],
    "sourceUrls": [
      {
        "label": "National Research Council: Taking Science to School, Learning Progressions",
        "url": "https://www.nationalacademies.org/read/11625/chapter/10"
      },
      {
        "label": "National Research Council: Framework for K-12 Science Education, Guiding Assumptions",
        "url": "https://www.nationalacademies.org/read/13165/chapter/5"
      },
      {
        "label": "Heritage: Learning Progressions, Supporting Instruction and Formative Assessment",
        "url": "https://csaa.wested.org/wp-content/uploads/2020/01/Learning_Progressions_Supporting_2008.pdf"
      }
    ]
  }
];
