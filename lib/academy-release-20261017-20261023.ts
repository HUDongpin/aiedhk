import type { AcademyLesson } from "@/lib/types";

export const academyRelease20261017To20261023: AcademyLesson[] = [
  {
    "id": "academy-183",
    "listingIdentifier": "AI Knowledge 92",
    "title": "Adversarial Robustness",
    "slug": "adversarial-robustness",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-17T08:00:00.000Z",
    "image": "/images/academy/covers/academy-183-adversarial-robustness.png",
    "summaryAudio": "/audio/academy/academy-183-adversarial-robustness-summary.m4a",
    "tags": [
      "adversarial robustness",
      "model stability",
      "AI testing"
    ],
    "imageAlt": "A Black teacher and East Asian and White adult learners compare original and slightly altered symbol images beside a results chart.",
    "summaryAudioTitle": "Listen to Adversarial Robustness",
    "shortSummary": "Adversarial robustness measures stability under specified deliberate input changes. Strong ordinary accuracy and failed attacks are insufficient without a clear threat model and appropriate evaluation.",
    "fullSummary": "Adversarial robustness is a system's ability to maintain appropriate behavior when inputs are deliberately changed to cause failure. In machine learning, an adversarial example can look much like an ordinary input to a person while producing a different model prediction. Robustness is always relative to a specified set of changes and an intended behavior. A system cannot meaningfully be called robust against every possible input without defining those boundaries.\n\nEarly research by Goodfellow and colleagues showed how small, strategically chosen changes could produce confident misclassification in neural networks. The central lesson is that high accuracy on ordinary test examples does not establish stability around them. A model can depend on features that are useful in its training distribution but fragile under targeted changes. This differs from an accidental noisy image, although both kinds of variation deserve evaluation in educational applications.\n\nConsider a handwriting recognizer used to organize practice worksheets. A controlled test starts with correctly recognized digits and applies bounded changes that preserve the intended digit for human reviewers. The evaluators compare predictions before and after each change. If a minor alteration causes a large shift, the finding concerns the recognizer's stability. If the alteration actually changes a three into an eight, expecting the original prediction would be inappropriate: the semantic target has changed.\n\nA threat model states what an adversary can know and change. Can they modify the image, submit repeated requests, or influence a retrieved document? Can they inspect the model or only observe outputs? These assumptions shape the test and its interpretation. Methods developed for image perturbations do not automatically cover language-model instruction attacks, audio manipulation, or data poisoning. Each involves different objects, constraints, and failure criteria.\n\nDefenses also need careful evaluation. Adversarial training includes challenging examples during learning, but its benefits depend on the attacks, data and training setup. Research on obfuscated gradients showed that some defenses appeared strong because they made particular attack methods ineffective without removing the underlying vulnerability. A failed attack can therefore reflect a weak evaluation method rather than a genuinely secure model. Independent and appropriately adapted tests strengthen the evidence.\n\nFor a classroom activity, educators can compare benign image transformations with a small, preapproved set of adversarial test examples in a local sandbox. Learners document whether the human interpretation remains stable, how the model changes, and which conditions were actually tested. The exercise should emphasize reasoning about evidence and scope, not probing real school systems without permission. Preserve original examples and make the testing process reproducible.\n\nOperational decisions should connect robustness to consequences. A worksheet search tool may tolerate some errors that an automated grading system cannot. Provide uncertainty handling, human review, and a correction route where failure affects learners. Monitor ordinary performance too, since a defense can introduce costs or new mistakes. Adversarial robustness contributes to dependable AI when its claim is specific, its evaluation matches realistic conditions, and its remaining limitations remain visible to those relying on the system.",
    "coreIdeas": [
      "Robustness is defined relative to allowable changes, attacker knowledge and intended behavior, including whether the input's meaning should remain unchanged.",
      "High ordinary accuracy can coexist with targeted failures, while a defense can appear successful merely because a particular attack is weak.",
      "Use authorized reproducible tests, evaluate ordinary utility and connect remaining failures to human review and task-specific consequences."
    ],
    "educationConnection": "Compare a recognizer's response to approved transformations of handwriting, checking first whether human readers agree that the intended symbol remains the same.",
    "relatedConcepts": [
      "Adversarial examples",
      "Threat models",
      "Adversarial training"
    ],
    "sourceUrls": [
      {
        "label": "Goodfellow, Shlens and Szegedy: Explaining and Harnessing Adversarial Examples",
        "url": "https://arxiv.org/abs/1412.6572"
      },
      {
        "label": "Athalye, Carlini and Wagner: Obfuscated Gradients Give a False Sense of Security",
        "url": "https://arxiv.org/abs/1802.00420"
      }
    ]
  },
  {
    "id": "academy-184",
    "listingIdentifier": "Educational Theory 92",
    "title": "Student Self-Assessment",
    "slug": "student-self-assessment",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-17T08:00:00.000Z",
    "image": "/images/academy/covers/academy-184-student-self-assessment.png",
    "summaryAudio": "/audio/academy/academy-184-student-self-assessment-summary.m4a",
    "tags": [
      "student self-assessment",
      "rubrics",
      "learner agency"
    ],
    "imageAlt": "A South Asian teacher and White and Black adult learners review evidence in a water-use report and plan revisions.",
    "summaryAudioTitle": "Listen to Student Self-Assessment",
    "shortSummary": "Student self-assessment develops judgment by connecting criteria, evidence and revision. It needs examples, calibration and time to act, rather than a checklist or self-awarded mark alone.",
    "fullSummary": "Student self-assessment is the process of examining one's own work or learning against criteria and using that judgment to guide improvement. It can involve identifying evidence of quality, locating a gap, and choosing a revision. The purpose is to develop the learner's capacity to judge and act. Assigning oneself a grade may be part of some arrangements, but it is not the defining educational mechanism.\n\nUseful self-assessment requires an understandable sense of quality. A rubric can help, yet words such as 'clear', 'critical', or 'well developed' may mean little without examples and discussion. Learners need opportunities to compare work, explain their judgments, and see how criteria apply. Teachers can make this process visible by thinking aloud while reviewing an anonymized example and showing how a specific feature supports an evaluation.\n\nImagine a learner reviewing a report about water use. One criterion asks whether the recommendation is supported by evidence. The learner highlights the proposed action, then searches for data that justify it. They discover that the report describes high consumption but does not compare the likely effects of two possible changes. The resulting revision adds a comparison and qualifies the recommendation. Self-assessment has produced an evidence-based decision rather than a general statement that the report is 'quite good'.\n\nResearch by Andrade and colleagues examined writing activities combining models, criteria and rubric-referenced self-assessment. Another study explored students' experiences of using criteria to review their own work. Together they illustrate both the practical structure and the interpretive demands of self-assessment. Outcomes depend on the intervention and context; a rubric handed out once is not equivalent to sustained instruction in judgment and revision.\n\nTeachers can begin with one or two important criteria and require learners to identify where their work meets them. When judgments differ, compare the evidence and clarify the criterion rather than treating disagreement as dishonesty. A learner may overestimate quality, underestimate it, or interpret the task differently. Calibration develops through repeated comparisons with examples, peers and teachers, while retaining room to question whether a criterion is appropriate or sufficiently clear.\n\nTime to act is essential. If self-assessment occurs only after the final mark and no further related work is planned, the opportunity for improvement is limited. Build a review point before submission or connect reflection to a subsequent task. Keep the process manageable so that completing a checklist does not displace substantive work. Students should see how the judgment informs a concrete choice, not merely provide the teacher with another form to collect.\n\nEvaluate self-assessment through the quality of the reasoning, the usefulness of revisions, and later independent performance. Agreement with a teacher's mark is one possible indicator, but it is not the whole goal. Students can learn to justify a sound alternative interpretation. Effective self-assessment combines standards with agency: learners understand what quality requires, inspect their own evidence honestly, and decide how to improve while drawing on support when their judgment remains uncertain.",
    "coreIdeas": [
      "Self-assessment examines evidence in one's own work against criteria and uses the judgment to guide an action.",
      "Criteria become usable through examples, dialogue and repeated calibration; disagreement can reveal different interpretations or unclear standards.",
      "Assess the quality of reasoning and revision alongside later performance, and provide a real opportunity to use the judgment."
    ],
    "educationConnection": "Ask learners to highlight evidence for two report criteria, identify one unsupported claim and make a justified revision before comparing their reasoning with a peer or teacher.",
    "relatedConcepts": [
      "Evaluative judgment",
      "Criteria-referenced assessment",
      "Revision planning"
    ],
    "sourceUrls": [
      {
        "label": "Andrade, Du and Wang: Putting Rubrics to the Test",
        "url": "https://doi.org/10.1111/j.1745-3992.2008.00118.x"
      },
      {
        "label": "Andrade and Du: Student Responses to Criteria-Referenced Self-Assessment",
        "url": "https://ssrlsig.org/wp-content/uploads/2018/02/andrade-du-2007-student-responses-to-criteria-refd.pdf"
      }
    ]
  },
  {
    "id": "academy-185",
    "listingIdentifier": "AI Knowledge 93",
    "title": "Ensembles and Predictive Uncertainty",
    "slug": "ensembles-and-predictive-uncertainty",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-18T08:00:00.000Z",
    "image": "/images/academy/covers/academy-185-ensembles-and-predictive-uncertainty.png",
    "summaryAudio": "/audio/academy/academy-185-ensembles-and-predictive-uncertainty-summary.m4a",
    "tags": [
      "ensembles",
      "predictive uncertainty",
      "calibration"
    ],
    "imageAlt": "A Latina teacher and Black and White adult learners compare three prediction charts and an uncertainty summary.",
    "summaryAudioTitle": "Listen to Ensembles and Predictive Uncertainty",
    "shortSummary": "Ensembles combine models and can reveal disagreement, but shared blind spots can produce confident consensus. Evaluate calibration, diversity and the practical use of uncertainty before relying on combined predictions.",
    "fullSummary": "An ensemble combines predictions from several models. It can average probabilities, combine numerical estimates, or use a voting rule. The models may differ in training samples, initialization, architecture, or other choices. Combining them can improve prediction and provide information about uncertainty, but the value depends on the members' quality and diversity. Repeating the same model without meaningful variation does not automatically create independent evidence.\n\nDifferent models can fit available training data while behaving differently on unfamiliar cases. Their disagreement may therefore signal uncertainty associated with what the training evidence leaves unresolved. Predictive uncertainty can also arise from ambiguity or variability in the observations themselves. These sources are often described as epistemic and aleatoric uncertainty, but an ordinary ensemble does not perfectly separate them. Its disagreement is an indicator that needs validation for the intended task.\n\nConsider a system deciding whether a photographed handwritten symbol is a seven. Three models assign probabilities of 0.2, 0.5 and 0.8. Their average is 0.5, but their disagreement is substantial. Another set assigns 0.5, 0.5 and 0.5: the same average, with no disagreement among members. The two situations raise different questions about uncertainty. Neither set supports a confident transcription, and a teacher may need to inspect the original image or ask the writer to clarify.\n\nResearch on deep ensembles by Lakshminarayanan and colleagues demonstrated a practical approach to estimating predictive uncertainty in classification and regression. Ovadia and colleagues later examined uncertainty methods under dataset shift, highlighting how performance and calibration can change when inputs differ from training conditions. These results motivate careful testing; they do not guarantee that an ensemble will recognize every unfamiliar case or remain calibrated in a new classroom.\n\nAgreement can be misleading when models share the same data gaps or shortcuts. Several recognizers might confidently misread an unfamiliar script because none was trained to handle it. A majority vote would reinforce the error. Educators should therefore ask how members differ, what cases were evaluated, and whether confidence corresponds to observed correctness. Include relevant languages, document styles and conditions, and inspect failures where all members agree.\n\nA classroom demonstration can give teams several simple prediction rules for the same fictional dataset. Students compare individual predictions, a combined prediction, and disagreements. They then introduce a new kind of example that violates an assumption shared by all rules. This makes the distinction between diversity and mere multiplicity concrete. Record both average accuracy and the cases the ensemble fails to identify as uncertain.\n\nOperationally, an ensemble may require more computation, storage and maintenance than a single model. The additional cost should serve a clear educational need, such as routing uncertain transcriptions for review. Set thresholds using appropriate validation data and examine how many cases require human attention. Ensembles are useful when they improve decisions and reveal uncertainty that people can act on. They should not turn several related guesses into an appearance of unquestionable consensus.",
    "coreIdeas": [
      "Combining models can improve predictions and expose uncertainty when members capture different plausible explanations of the data.",
      "The same average probability can hide different patterns of disagreement, and ensemble uncertainty does not perfectly separate all uncertainty sources.",
      "Shared data gaps can make every member wrong; evaluate calibration under relevant shifts and justify the additional operational cost."
    ],
    "educationConnection": "Compare several simple predictors on familiar and unfamiliar examples, then inspect both disagreement and confidently shared errors before deciding which cases need review.",
    "relatedConcepts": [
      "Deep ensembles",
      "Epistemic uncertainty",
      "Correlated errors"
    ],
    "sourceUrls": [
      {
        "label": "Lakshminarayanan, Pritzel and Blundell: Deep Ensembles",
        "url": "https://arxiv.org/abs/1612.01474"
      },
      {
        "label": "Ovadia et al.: Can You Trust Your Model's Uncertainty?",
        "url": "https://arxiv.org/abs/1906.02530"
      }
    ]
  },
  {
    "id": "academy-186",
    "listingIdentifier": "Educational Theory 93",
    "title": "Peer Assessment",
    "slug": "peer-assessment",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-18T08:00:00.000Z",
    "image": "/images/academy/covers/academy-186-peer-assessment.png",
    "summaryAudio": "/audio/academy/academy-186-peer-assessment-summary.m4a",
    "tags": [
      "peer assessment",
      "review quality",
      "collaborative feedback"
    ],
    "imageAlt": "A Black teacher and South Asian and White adult learners exchange annotated investigation drafts and discuss a revision.",
    "summaryAudioTitle": "Listen to Peer Assessment",
    "shortSummary": "Peer assessment develops judgment through both giving and using reviews. Clear criteria, calibration, respectful participation and time for revision make the exchange educationally useful.",
    "fullSummary": "Peer assessment involves learners judging the quality of one another's work using relevant criteria and communicating the basis of that judgment. It can support improvement in the recipient's work and develop the reviewer's understanding of quality. These are related but distinct learning opportunities. A carefully designed process makes room for both, rather than treating peer assessment only as a way to distribute a teacher's marking workload.\n\nReviewing requires comparison: the learner interprets criteria, identifies evidence, detects a problem, and considers a useful response. That process can make features of quality more visible in the reviewer's own work. Cho and MacArthur investigated learning through reviewing in an undergraduate writing study. Nicol and colleagues also examined students' accounts of producing and receiving reviews. These studies provide context-specific evidence and explanations, not a guarantee that any exchange of comments improves learning.\n\nConsider a class drafting explanations of an environmental investigation. Each reviewer examines one criterion: whether the conclusion is supported by the data. Instead of writing 'needs more detail', the reviewer identifies a particular sentence and explains that it claims a difference without referring to the comparison results. The writer then decides whether to add evidence, qualify the conclusion, or explain why the suggested change would be inappropriate. The exchange makes judgment and response visible.\n\nPreparation matters. Teachers can use an anonymized example to model a specific, respectful review and compare it with vague praise or unsupported criticism. Learners practice applying the criteria before reviewing classmates. A small number of focused criteria often makes the task more manageable than a long rubric. Reviewers should distinguish an error they can explain from a question they are uncertain about, and know when to ask for teacher guidance.\n\nSocial relationships shape the process. Friendship, status, language confidence, fear of offending, or previous conflict can influence comments. Anonymity can address some concerns but may not be feasible or sufficient in a small class. Clear norms, suitable pairing, accessible formats and a route for reporting disrespectful feedback remain important. Students should not be forced to disclose sensitive personal work to peers simply because peer assessment is on the lesson plan.\n\nProvide time for writers to interpret and use reviews. A short response note can state which advice was used, what was changed, and why some advice was declined. Reviewers can also identify one insight they will apply to their own next draft. Where peer judgments contribute to grades, stronger moderation and transparent procedures are necessary. For formative use, the main evidence is the quality of reasoning and revision rather than agreement on a number.\n\nPeer assessment can fail when learners lack relevant knowledge, comments arrive too late, or the task rewards politeness over honest analysis. Monitor examples and adjust the design. Examine later independent work to see whether students can apply what they learned beyond the reviewed draft. The aim is a community capable of making and discussing informed judgments, while each writer retains responsibility for deciding how to improve their work.",
    "coreIdeas": [
      "Producing a review can develop the reviewer's understanding of quality as well as provide information for the recipient.",
      "Specific evidence and criteria make feedback actionable; preparation and moderation help manage uncertainty and social pressures.",
      "Writers need time and agency to respond, while evaluation should examine reasoning, revision and transfer rather than comment counts alone."
    ],
    "educationConnection": "Have learners review one evidence criterion in a draft, require a specific example and explanation, and let writers document a reasoned response before revising.",
    "relatedConcepts": [
      "Peer review",
      "Feedback production",
      "Evaluative judgment"
    ],
    "sourceUrls": [
      {
        "label": "Cho and MacArthur: Learning by Reviewing",
        "url": "https://eric.ed.gov/?id=EJ933615"
      },
      {
        "label": "Nicol, Thomson and Breslin: Rethinking Feedback Practices",
        "url": "https://strathprints.strath.ac.uk/48844/"
      }
    ]
  },
  {
    "id": "academy-187",
    "listingIdentifier": "AI Knowledge 94",
    "title": "Confidence Intervals for AI Evaluation",
    "slug": "confidence-intervals-for-ai-evaluation",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-19T08:00:00.000Z",
    "image": "/images/academy/covers/academy-187-confidence-intervals-for-ai-evaluation.png",
    "summaryAudio": "/audio/academy/academy-187-confidence-intervals-for-ai-evaluation-summary.m4a",
    "tags": [
      "confidence intervals",
      "AI evaluation",
      "statistical reasoning"
    ],
    "imageAlt": "A White teacher and adult learners compare AI evaluation estimates with confidence-interval bars and paired outcomes.",
    "summaryAudioTitle": "Listen to Confidence Intervals for AI Evaluation",
    "shortSummary": "Confidence intervals express uncertainty in estimated AI performance under specific assumptions. Useful reporting identifies the sampling unit, method, paired comparisons and sources of variation that remain outside the interval.",
    "fullSummary": "A confidence interval describes uncertainty in an estimated quantity, such as an AI system's accuracy or its average response time. Evaluation uses a finite sample, so another comparable sample could give a different result. An interval makes some of that sampling uncertainty visible. It does not automatically include every source of uncertainty, such as biased test data, an unreliable scoring rubric, or changes in the deployed system.\n\nIn a frequentist interpretation, a 95 percent confidence procedure would cover the fixed target quantity in about 95 percent of repeated comparable samples, if its assumptions hold. After one interval is calculated, the target is not assigned a 95 percent probability of lying inside it by that statement alone. The distinction matters because confidence describes a procedure's long-run behavior, not a guarantee about an individual prediction or learner.\n\nSuppose two fictional tutoring systems answer the same 100 reviewed questions. One answers 92 correctly and the other 94. Reporting only those percentages can make the second appear decisively better. A careful comparison examines uncertainty in the difference and which questions each system missed. Because both systems answered the same items, the data are paired. The pattern of shared and different errors contains information that two separate headline intervals do not capture.\n\nThe interval method should fit the metric and design. Accuracy is a proportion, while response time is often skewed and may require a different approach. Bootstrap methods repeatedly resample the observed data to estimate variability, but their usefulness depends on how resampling is performed. If many questions come from the same student, classroom, or source document, treating them as independent can understate uncertainty. Resampling meaningful clusters may better reflect the evaluation design.\n\nEducational evaluations can have several sources of variation. Sampling different learners differs from generating multiple responses to the same prompt. Repeated model runs can reveal generation variability, but they do not replace a representative set of tasks. Human raters introduce another source of uncertainty. State which quantity the interval targets and which sources of variation the analysis includes. A very narrow interval around a biased estimate can create false reassurance.\n\nTeachers can explore the idea using a jar of labeled fictional outcomes and repeated samples. Each group estimates an accuracy rate from its draw, then compares estimates and intervals across groups. The exercise can be extended by making outcomes cluster by classroom to show why the sampling unit matters. Keep this as a statistical illustration, not evidence about any real product. The goal is to see that uncertainty follows the design of data collection and analysis.\n\nReport the estimate, interval, sample size, sampling unit, and method alongside practical consequences. Overlapping intervals do not by themselves settle a formal comparison, and a statistically detectable difference may be educationally trivial. Predefine important comparisons to reduce selective reporting. Confidence intervals improve AI evaluation when they make the limits of an estimate intelligible and help people decide what further evidence would materially change a decision.",
    "coreIdeas": [
      "A confidence interval concerns an estimated population or process quantity, not the certainty of an individual AI answer.",
      "The method must match the metric and sampling design; paired outputs and clustered tasks require appropriate treatment.",
      "Report practical effects and design limits alongside interval estimates, since precision does not remove bias or establish educational importance."
    ],
    "educationConnection": "Compare two fictional systems on the same questions, examine paired disagreements, and use repeated sampling to show why a small observed accuracy difference may be uncertain.",
    "relatedConcepts": [
      "Sampling uncertainty",
      "Paired evaluation",
      "Cluster bootstrap"
    ],
    "sourceUrls": [
      {
        "label": "NIST Engineering Statistics Handbook: Confidence Limits",
        "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm"
      },
      {
        "label": "Dror et al.: The Hitchhiker's Guide to Statistical Significance in NLP",
        "url": "https://aclanthology.org/P18-1128/"
      }
    ]
  },
  {
    "id": "academy-188",
    "listingIdentifier": "Educational Theory 94",
    "title": "Feedback Literacy",
    "slug": "feedback-literacy",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-19T08:00:00.000Z",
    "image": "/images/academy/covers/academy-188-feedback-literacy.png",
    "summaryAudio": "/audio/academy/academy-188-feedback-literacy-summary.m4a",
    "tags": [
      "feedback literacy",
      "revision",
      "learner agency"
    ],
    "imageAlt": "A Latina teacher and South Asian and Black adult learners use feedback to revise two report paragraphs.",
    "summaryAudioTitle": "Listen to Feedback Literacy",
    "shortSummary": "Feedback literacy enables learners to interpret information, judge quality, manage reactions and take useful action. It develops through opportunities for revision and dialogue, with responsibility shared by course design and learners.",
    "fullSummary": "Feedback literacy is the capacity to make sense of feedback information and use it to improve work or learning strategies. It includes understanding how feedback works, making judgments about quality, handling emotional responses, and taking action. The focus is the learner's participation in a feedback process. Receiving many comments is not enough if the learner cannot interpret them or has no opportunity to use them.\n\nCarless and Boud's framework brings these aspects together, while Molloy, Boud and Henderson developed a learning-centred account informed by students' experiences. Both direct attention to what learners do with information rather than treating feedback as a message delivered by an expert. Information may come from teachers, peers, examples, a task outcome, or the learner's own comparison. Its usefulness depends on meaning, trust, timing, and the possibility of action.\n\nConsider a student receiving the comment 'be more analytical' on a report. The phrase is too broad to guide revision by itself. In a follow-up activity, the student compares two paragraphs, one that lists findings and one that explains a relationship while considering an alternative. They identify the difference, ask a clarifying question, and revise one section of their report. The teacher then checks whether the revision improves the reasoning. The feedback process has become a sequence of interpretation, judgment and action.\n\nEmotions are part of that sequence. Critical comments can feel disappointing or threaten a learner's sense of competence, especially when expectations were unclear. Teachers can acknowledge the reaction, discuss the work respectfully, and help learners choose a manageable next step. Managing affect should not mean suppressing justified concern about unfair or inaccurate feedback. Learners need room to question a comment and explain why they accept, adapt, or decline it.\n\nDesign opportunities for uptake into the course. A draft followed by a revision, or two related tasks with a reflection between them, makes action possible. Ask learners to explain what information they used and why. A short revision note can be more informative than a checklist confirming that every comment was followed. Where advice conflicts, learners can compare it against the task's purpose and evidence rather than treating the most authoritative voice as automatically correct.\n\nFeedback literacy is not solely a student responsibility. Teachers need to provide intelligible criteria, usable examples, accessible comments and time for dialogue. Excessive workload, late feedback, or an assessment sequence that never revisits a skill can prevent uptake even when learners are motivated. AI-generated feedback creates an additional need to verify factual accuracy and relevance; confident wording should not compel compliance with a mistaken suggestion.\n\nEvaluation should follow what happens after information is provided. Look for improved judgments, justified revisions, better strategies and transfer to later work. Satisfaction with comments and the number received answer different questions. Feedback literacy develops through repeated practice within supportive relationships and well-designed tasks. Its purpose is to help learners become active, discerning users of information who can seek, interpret and act on feedback throughout their education and beyond.",
    "coreIdeas": [
      "Feedback becomes educationally useful through learners' interpretation, judgment and action, not through comment delivery alone.",
      "Emotional responses and disagreement deserve attention; informed uptake can include adapting or declining advice with reasons.",
      "Courses must provide usable information and opportunities to act, and evaluation should examine revision and transfer rather than satisfaction alone."
    ],
    "educationConnection": "Turn a vague comment into an exemplar comparison, a clarifying question and a targeted revision, then ask the learner to explain which information informed the change.",
    "relatedConcepts": [
      "Feedback uptake",
      "Managing affect",
      "Evaluative judgment"
    ],
    "sourceUrls": [
      {
        "label": "Carless and Boud: The Development of Student Feedback Literacy",
        "url": "https://doi.org/10.1080/02602938.2018.1463354"
      },
      {
        "label": "Molloy, Boud and Henderson: A Learning-Centred Framework for Feedback Literacy",
        "url": "https://researchmgt.monash.edu/ws/portalfiles/portal/326816419/284993103_oa.pdf"
      }
    ]
  },
  {
    "id": "academy-189",
    "listingIdentifier": "AI Knowledge 95",
    "title": "Label Noise and Annotation Agreement",
    "slug": "label-noise-and-annotation-agreement",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-20T08:00:00.000Z",
    "image": "/images/academy/covers/academy-189-label-noise-and-annotation-agreement.png",
    "summaryAudio": "/audio/academy/academy-189-label-noise-and-annotation-agreement-summary.m4a",
    "tags": [
      "label noise",
      "data quality",
      "annotation"
    ],
    "imageAlt": "A Black teacher and White and South Asian adult educators compare independently annotated science responses and refine a category guide.",
    "summaryAudioTitle": "Listen to Label Noise and Annotation Agreement",
    "shortSummary": "Label noise can reflect mistakes, unclear constructs or legitimate disagreement. Reliable annotation combines explicit guidance, interpreted agreement measures and documented review without treating model disagreement as proof of human error.",
    "fullSummary": "Label noise occurs when the recorded labels used to train or evaluate a model do not reliably represent the intended target. Some errors are straightforward: a response is attached to the wrong student or a category is selected accidentally. Others arise because the task is ambiguous, instructions are incomplete, or reasonable annotators interpret evidence differently. Improving labels therefore requires understanding disagreement rather than automatically treating it as careless work.\n\nAn annotation scheme defines what is being labeled, the available categories, and the evidence needed for each decision. If educators label written explanations as correct, partly correct, or incorrect, they must decide how to treat missing reasoning, contradictory statements, and alternative valid methods. Without shared guidance, annotators may apply different constructs while using the same category names. A model trained on those labels can learn inconsistent or unintended patterns.\n\nImagine two teachers judging a science answer that gives the right conclusion but an inaccurate explanation. One selects correct because the final statement matches the answer key. The other selects partly correct because reasoning is central to the task. Their disagreement exposes a problem in the specification. Adjudication should clarify what the assessment intends to measure and record the reason for the final decision. Silently taking a majority vote would hide the unresolved distinction.\n\nAgreement statistics summarize consistency but require interpretation. Raw agreement reports how often annotators match. Cohen's kappa compares two annotators' agreement with an expected level based on their category frequencies. It can change when category prevalence changes, so a single threshold should not determine whether an entire dataset is trustworthy. Examine a confusion table, category definitions, sample composition, and the disagreements that have educational consequences.\n\nModel-assisted methods can help prioritize suspicious labels. Confident learning, developed by Northcutt and colleagues, uses estimated probabilities and assumptions about label noise to identify possible issues. These flags are candidates for review, not proof that a human annotation is wrong. A model may disagree because it has learned a biased shortcut or because the example represents a rare but valid case. Preserve the original label and the rationale for any correction.\n\nSome tasks contain legitimate variation rather than one recoverable hidden truth. Interpretations of tone, relevance, or open-ended quality may depend on context and perspective. Research on CrowdTruth argues for treating disagreement as informative in suitable annotation tasks. Teams can retain multiple judgments, uncertainty, or distributions where these better represent the construct. That decision should be explicit; not every task benefits from collapsing complexity into one hard label.\n\nA sound workflow pilots instructions, trains annotators with examples, double-codes a representative subset, reviews disagreements, and versions revisions. Keep evaluation labels independent from model-driven changes that could make the test favor the system under study. Report who annotated, what guidance they used, and what uncertainty remains without exposing sensitive identities. Label quality improves when the dataset reflects a clear educational question and preserves the evidence behind its judgments.",
    "coreIdeas": [
      "Annotation quality depends on a clear target, evidence rules and category definitions, not only on annotator effort.",
      "Agreement measures summarize consistency but must be read alongside prevalence, confusion patterns and consequential disagreements.",
      "Model-assisted flags require review, and some constructs should preserve multiple perspectives or uncertainty rather than force one label."
    ],
    "educationConnection": "Have two educators independently label a small set of explanations, analyze why they disagree, revise the codebook and retain an audit trail of any adjudicated changes.",
    "relatedConcepts": [
      "Annotation agreement",
      "Cohen's kappa",
      "Confident learning"
    ],
    "sourceUrls": [
      {
        "label": "Northcutt, Jiang and Chuang: Confident Learning",
        "url": "https://arxiv.org/abs/1911.00068"
      },
      {
        "label": "Aroyo and Welty: Crowd Truth and Human Annotation",
        "url": "https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/2564"
      },
      {
        "label": "scikit-learn: Cohen's Kappa Score",
        "url": "https://sklearn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html"
      }
    ]
  },
  {
    "id": "academy-190",
    "listingIdentifier": "Educational Theory 95",
    "title": "Authentic Learning",
    "slug": "authentic-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-20T08:00:00.000Z",
    "image": "/images/academy/covers/academy-190-authentic-learning.png",
    "summaryAudio": "/audio/academy/academy-190-authentic-learning-summary.m4a",
    "tags": [
      "authentic learning",
      "instructional design",
      "purposeful activity"
    ],
    "imageAlt": "A South Asian teacher and Black and White adult learners prepare a local-history audio guide using an artifact, source photograph and annotated script.",
    "summaryAudioTitle": "Listen to Authentic Learning",
    "shortSummary": "Authentic learning connects knowledge to purposeful activity, audiences and constraints. Effective design keeps disciplinary reasoning visible, supports novices and assesses more than a polished product.",
    "fullSummary": "Authentic learning organizes study around purposeful activity that resembles how knowledge is used beyond a conventional exercise. Learners address a meaningful problem, work with relevant evidence, and produce an outcome for an audience or use. Authenticity can concern the thinking required, the constraints, the tools, and the consequences. Adding a realistic photograph or a workplace title does not by itself make an activity authentic.\n\nHerrington and Oliver's instructional design framework emphasizes features such as meaningful contexts, complex tasks, multiple perspectives, access to expert performance, collaboration, reflection, articulation, scaffolding and assessment integrated with the activity. These features provide design questions rather than a checklist that guarantees learning. The appropriate form depends on the subject, learners' preparation and what they are expected to understand.\n\nConsider adult learners developing an audio guide for a local history display. They must verify information about an object, distinguish evidence from interpretation, decide what a visitor needs to know, and write a clear script within a short duration. Accessibility and audience questions influence the product. Feedback from a museum educator and potential visitors prompts revision. Subject knowledge becomes necessary for making a defensible public explanation, rather than remaining separate from the task.\n\nThe teacher still has a substantial instructional role. Learners may need explicit teaching about evaluating sources, interpreting dates, writing for listening, and acknowledging uncertainty. Provide models and interim checkpoints while leaving meaningful choices open. A task can be authentic yet poorly designed if novices spend most of their time struggling with audio software instead of historical reasoning. Remove avoidable complexity and ensure the target learning remains visible.\n\nAssessment should examine both the product and the reasoning behind it. A polished recording could conceal an unsupported claim, while an imperfect recording might contain excellent historical analysis. Ask learners to explain source choices, justify revisions and show how feedback affected the script. Individual evidence remains useful in a group project. Criteria should reflect the learning goals and the demands of the intended audience without rewarding expensive equipment or prior technical privilege.\n\nAuthenticity is also a matter of perspective. A problem meaningful to a teacher may seem remote to learners, and an outside partner's priorities may conflict with educational aims. Invite learners to shape the question and discuss whose needs the activity serves. Protect consent and ownership when work reaches a real audience. A well-designed simulation can be appropriate when public use would impose unnecessary risk, cost, or pressure on novices.\n\nEvidence from particular authentic-learning environments does not establish that every complex real-world task produces better outcomes than focused practice. Learners still need opportunities to consolidate knowledge and transfer it to different situations. A useful debrief asks which ideas became tools for action, which decisions depended on context, and what would change elsewhere. Authentic learning is valuable when purposeful use and disciplined reflection make subject knowledge more connected and usable, while instructional support keeps the experience accessible and educationally coherent.",
    "coreIdeas": [
      "Authenticity concerns meaningful use, reasoning and constraints, not simply realistic decoration or a role title.",
      "Complex tasks need explicit teaching, scaffolding and integrated assessment so the intended subject learning remains central.",
      "Evaluate products and reasoning, consider whose purpose is served, and examine transfer rather than assuming real-world context guarantees learning."
    ],
    "educationConnection": "Design a short history audio guide for a defined audience, require verified sources and revision after feedback, and assess the reasoning separately from production polish.",
    "relatedConcepts": [
      "Authentic tasks",
      "Integrated assessment",
      "Situated knowledge use"
    ],
    "sourceUrls": [
      {
        "label": "Herrington and Oliver: An Instructional Design Framework for Authentic Learning",
        "url": "https://researchportal.murdoch.edu.au/esploro/outputs/journalArticle/An-instructional-design-framework-for-authentic/991005543312007891"
      },
      {
        "label": "Herrington, Oliver and Stoney: Engaging Learners in Complex Authentic Contexts",
        "url": "https://researchportal.murdoch.edu.au/esploro/outputs/conferencePaper/Engaging-learners-in-complex-authentic-contexts/991005543746907891"
      }
    ]
  },
  {
    "id": "academy-191",
    "listingIdentifier": "AI Knowledge 96",
    "title": "Reproducible AI Experiments",
    "slug": "reproducible-ai-experiments",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-21T08:00:00.000Z",
    "image": "/images/academy/covers/academy-191-reproducible-ai-experiments.png",
    "summaryAudio": "/audio/academy/academy-191-reproducible-ai-experiments-summary.m4a",
    "tags": [
      "reproducibility",
      "AI experiments",
      "evaluation records"
    ],
    "imageAlt": "A Black teacher and White and East Asian adult educators reconstruct an AI evaluation from an experiment log and comparison table.",
    "summaryAudioTitle": "Listen to Reproducible AI Experiments",
    "shortSummary": "Reproducible AI experiments connect claims to exact data, prompts, configurations, outputs and scoring decisions. Seeds and model names alone are insufficient, and privacy limits should be documented honestly.",
    "fullSummary": "Reproducible AI experiments provide enough information for others to reconstruct how a result was obtained and examine whether it holds. This involves more than sharing a model name or a screenshot of an answer. Data selection, preprocessing, prompts, software, settings and scoring decisions can all change the result. A useful record connects the reported claim to the exact procedure and evidence that produced it.\n\nTerminology varies across research communities. Some distinguish reproducing results with the original materials from replicating a finding with new data or an independent implementation. Define the intended meaning in the report. Exact numerical agreement may be appropriate for a deterministic calculation, while a stochastic training process may require comparing a distribution of outcomes. Neither kind of check alone establishes that the result will generalize to another school or population.\n\nConsider a team comparing two prompts for generating science explanations. They save the full prompt text, the model version, generation settings, input questions, outputs, and the rubric used by reviewers. The test questions are separated from examples used to develop the prompts. Reviewers work from anonymized outputs in a randomized order. Another team can then examine whether the claimed improvement comes from the prompt, different questions, inconsistent scoring, or selective choice of successful responses.\n\nA random seed helps control some variation, but it is not a universal reproducibility switch. Hardware, library versions, parallel computation, and remote-service behavior can introduce differences. A provider may change the system behind a product label. Record the execution date and available version identifiers, preserve permitted outputs, and explain what cannot be fixed or retrieved. When exact reconstruction is impossible, state that limitation rather than describing a fresh run as identical.\n\nReports should include unsuccessful runs and the rules used to select results. Trying many settings and publishing only the best outcome can overstate performance. Predefining comparisons, separating development from evaluation, and reporting variability across appropriate repeated runs make conclusions easier to assess. The NeurIPS reproducibility programme and checklist emphasize transparent experimental details, resources, limitations and access to materials where possible.\n\nEducational data introduce access responsibilities. Reproducibility does not require publishing identifiable student records or confidential assessments. Teams can share analysis code, schemas, redacted examples, synthetic demonstration data and a controlled access route where appropriate. Clearly distinguish synthetic examples from the real data used for reported findings. Document transformations and exclusions so an authorized reviewer can understand how the analytic dataset was constructed.\n\nA practical handover includes a concise claim, a runnable procedure where feasible, the expected outputs, and a list of conditions that may cause differences. Ask a colleague unfamiliar with the original work to attempt the reconstruction and record what was missing. This exercise often reveals assumptions hidden in personal habits or local files. Reproducibility is valuable because it turns a persuasive result into an inspectable argument, making errors easier to find and future comparisons more trustworthy.",
    "coreIdeas": [
      "Reconstruction requires the complete experimental procedure and evidence, with reproducibility and replication terms defined for the context.",
      "Seeds control only some variability; model versions, software, hardware, selection rules and repeated outcomes also matter.",
      "Share inspectable materials within legitimate data constraints and clearly separate synthetic demonstrations from real evaluation evidence."
    ],
    "educationConnection": "Have a second educator reconstruct a small prompt comparison from its saved questions, outputs, rubric and configuration, then record missing information and justified differences.",
    "relatedConcepts": [
      "Experimental provenance",
      "Replication",
      "Research transparency"
    ],
    "sourceUrls": [
      {
        "label": "Pineau et al.: Improving Reproducibility in Machine Learning Research",
        "url": "https://jmlr.org/papers/v22/20-303.html"
      },
      {
        "label": "NeurIPS Paper Checklist",
        "url": "https://neurips.cc/public/guides/PaperChecklist"
      }
    ]
  },
  {
    "id": "academy-192",
    "listingIdentifier": "Educational Theory 96",
    "title": "Activity Theory and Expansive Learning",
    "slug": "activity-theory-and-expansive-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-21T08:00:00.000Z",
    "image": "/images/academy/covers/academy-192-activity-theory-and-expansive-learning.png",
    "summaryAudio": "/audio/academy/academy-192-activity-theory-and-expansive-learning-summary.m4a",
    "tags": [
      "activity theory",
      "expansive learning",
      "educational change"
    ],
    "imageAlt": "Adult participants revise a shared writing-feedback process on a classroom board while a facilitator points to the diagram.",
    "summaryAudioTitle": "Listen to Activity Theory and Expansive Learning",
    "shortSummary": "Activity theory examines educational work through tools, rules, community and shared purpose. Expansive learning concerns collective redesign when recurring tensions reveal that the activity itself needs to change.",
    "fullSummary": "Activity theory examines purposeful human activity as a system shaped by tools, social relationships, rules and history. In Engeström's account, the unit of analysis includes the people acting, the object they are working on, mediating tools, community, rules and division of labor. The object is the meaningful problem or purpose that gives the activity direction. Looking at these relationships can explain why a difficulty persists even when individuals are skilled and motivated.\n\nFor example, teachers may want feedback to improve students' writing, but the assessment system requires a final grade before comments are returned. The digital platform closes submissions, students begin a different unit, and staff workloads leave no time for dialogue. Asking teachers to write better comments addresses only one part of the system. The rules, tools and allocation of work may still make revision practically impossible.\n\nActivity theory uses the concept of contradictions for historically developing tensions within or between elements of activity. This is more specific than an ordinary disagreement or a list of complaints. In the feedback example, the activity may be pulled between certifying completed work and supporting continuing development. Evidence of recurring breakdowns can help participants investigate that tension, including how current arrangements emerged and whose purposes they serve.\n\nExpansive learning concerns a collective transformation of the activity's object and organization. Participants may question an established practice, analyze its difficulties, model an alternative, test it, and revise it through use. The process is not necessarily a neat sequence. In the school example, a team might redesign assessment around an iterative writing cycle, with shared exemplars, draft review, revision time and a different distribution of teacher and peer support.\n\nThe proposed change must be examined in practice. Does it improve opportunities to revise, or merely move more work onto students? Do timetables and reporting requirements support it? Are families and learners informed about the new purpose? Engeström's work and the Change Laboratory approach describe ways practitioners can analyze disturbances and construct new models of their activity. These accounts offer a framework for inquiry, not a guarantee that every institutional problem requires or will achieve expansive transformation.\n\nA teacher-learning workshop can begin with one recurring breakdown, a concrete example, and a map of relevant relationships. Participants compare perspectives before proposing a solution. Include people whose work is often invisible, such as support staff or learners navigating accessibility barriers. The map should remain a provisional analytic tool, supported by observations and discussion rather than treated as an objective diagram that explains everything by itself.\n\nActivity theory is most useful when it helps a team see beyond individual blame and isolated technology fixes. Its broad concepts can become vague if detached from evidence, and power differences can constrain whose proposals are adopted. Examine both changes in practice and their consequences over time. Expansive learning asks whether people have collectively developed a new way to understand and organize their work, with a more coherent relationship between the educational purpose and the system that carries it out.",
    "coreIdeas": [
      "An activity system connects people and a meaningful object with tools, rules, community and division of labor, situated in history.",
      "Contradictions are developing structural tensions that require evidence and analysis, rather than a synonym for any disagreement.",
      "Expansive learning involves collectively questioning, modeling and testing a transformed activity while examining power and practical consequences."
    ],
    "educationConnection": "Map a recurring feedback breakdown across purpose, platform, deadlines and responsibilities, then test a revised writing cycle and examine whether it changes real opportunities to learn.",
    "relatedConcepts": [
      "Activity systems",
      "Contradictions",
      "Change Laboratory"
    ],
    "sourceUrls": [
      {
        "label": "Engeström: Expansive Learning at Work",
        "url": "https://doi.org/10.1080/13639080020028747"
      },
      {
        "label": "Engeström et al.: The Change Laboratory as a Tool for Transforming Work",
        "url": "https://researchportal.helsinki.fi/en/publications/the-change-laboratory-as-a-tool-for-transforming-work/"
      }
    ]
  },
  {
    "id": "academy-193",
    "listingIdentifier": "AI Knowledge 97",
    "title": "On-Device and Edge AI",
    "slug": "on-device-and-edge-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-193-on-device-and-edge-ai.png",
    "summaryAudio": "/audio/academy/academy-193-on-device-and-edge-ai-summary.m4a",
    "tags": [
      "on-device AI",
      "offline learning",
      "deployment tradeoffs"
    ],
    "imageAlt": "A Latina biology teacher and Black and East Asian adult learners compare a leaf photograph on a tablet with a field guide outdoors.",
    "summaryAudioTitle": "Listen to On-Device and Edge AI",
    "shortSummary": "On-device and edge AI move computation closer to learners, potentially improving offline access and limiting data transfer. Hardware constraints, full application data flows and equitable access still require evaluation.",
    "fullSummary": "On-device AI runs a model on the user's phone, tablet, laptop, or another local device. Edge AI is a broader term that can include computation on nearby equipment, such as a school server, rather than in a distant cloud. These arrangements change where inference happens and how data move. They do not automatically determine where the model was trained or whether the surrounding application communicates with online services.\n\nLocal inference can reduce dependence on connectivity and avoid sending some raw inputs elsewhere. It can also reduce network delay for suitable tasks. Frameworks such as Google's LiteRT and Apple's Core ML support running models on device hardware. Actual performance depends on model size, supported operations, available memory, processors and software. A capability demonstrated on a recent high-end phone may work poorly on an older device used by learners.\n\nConsider a biology class using a plant-identification assistant during fieldwork where internet access is unreliable. A local model can analyze a photograph and present possible matches without waiting for a server. Learners compare the suggestions with visible leaf features and a field guide. The application clearly indicates uncertainty and preserves a route to continue the lesson without a prediction. Local execution improves availability, but it does not establish that the species identification is correct.\n\nFitting a model onto a device often requires choices about memory, speed and quality. Smaller architectures or lower-precision representations can reduce resource demands, but they need evaluation on the actual task. Measure startup time, sustained response time, battery use, temperature and storage, not only one fast demonstration. A device may slow down as it heats, and a model download can be substantial even when subsequent inference works offline.\n\nPrivacy claims require examining the complete data flow. An application can perform inference locally while uploading analytics, crash logs, saved files or user queries through another feature. Device backups and shared accounts create additional access questions. Conversely, a nearby school server is still a separate system with administrators and storage policies. Explain what stays on the device, what leaves, for what purpose, and how users can control or delete retained information.\n\nA school trial should include the range of devices learners actually have and an accessible alternative for those without suitable hardware. Test disconnected operation deliberately, including what happens when a model is unavailable or an update fails. Local models still need maintenance, security updates and quality monitoring. A hybrid design may route some tasks to a server, but users should understand when that happens and what data are involved.\n\nThe appropriate architecture follows the educational purpose. A small classifier used outdoors has different needs from a complex conversational tutor. Compare local and remote options using real task quality, responsiveness, accessibility, total resource demands and data handling. On-device AI is useful when moving computation closer to the learner solves a concrete problem while keeping the system's limitations visible. It should expand participation rather than make effective learning depend on owning the newest device.",
    "coreIdeas": [
      "On-device inference and nearby edge processing describe where computation occurs, not an automatic guarantee about training location or all data flows.",
      "Model size, hardware and sustained resource use affect quality and responsiveness across the devices learners actually use.",
      "Evaluate offline behavior, updates, accessibility and data handling, including any hybrid server route and alternatives for unsupported devices."
    ],
    "educationConnection": "Trial a local fieldwork classifier on varied devices, test it without connectivity, and compare both identification quality and the application's actual data transfers.",
    "relatedConcepts": [
      "Local inference",
      "Edge computing",
      "Hybrid deployment"
    ],
    "sourceUrls": [
      {
        "label": "Google: Getting Started with LiteRT",
        "url": "https://developers.google.com/edge/litert/overview"
      },
      {
        "label": "Apple: Core ML",
        "url": "https://developer.apple.com/documentation/coreml/"
      }
    ]
  },
  {
    "id": "academy-194",
    "listingIdentifier": "Educational Theory 97",
    "title": "Funds of Knowledge",
    "slug": "funds-of-knowledge",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-194-funds-of-knowledge.png",
    "summaryAudio": "/audio/academy/academy-194-funds-of-knowledge-summary.m4a",
    "tags": [
      "funds of knowledge",
      "home-school connections",
      "community learning"
    ],
    "imageAlt": "A Black teacher listens as a South Asian adult learner explains a bicycle-brake diagram beside a wheel and repair tools.",
    "summaryAudioTitle": "Listen to Funds of Knowledge",
    "shortSummary": "Funds of knowledge recognizes household and community expertise as an intellectual resource for teaching. It requires respectful inquiry and substantive curricular connections without stereotyping or extracting private experience.",
    "fullSummary": "Funds of knowledge are bodies of knowledge and skill developed through the historical and social life of households and communities. They can include ways of managing resources, repairing equipment, caring for others, organizing work, communicating across languages, and solving recurring practical problems. The concept asks educators to recognize intellectual resources that school routines may overlook, especially when families are described mainly through what they supposedly lack.\n\nMoll, Amanti, Neff and González developed this approach through research connecting households and classrooms in working-class Mexican communities in Tucson. Related teacher research treated educators as learners of household practices and used collaborative discussion to develop curriculum connections. The emphasis was on situated knowledge and relationships, not a catalogue of traits assigned to an ethnic group. What one household knows cannot be assumed from its language, income or cultural label.\n\nImagine a learner who helps a relative maintain bicycles. A conversation reveals knowledge of diagnosing faults, comparing replacement parts, estimating costs, and explaining a repair to a customer. A teacher can connect these practices to measurement, mechanical reasoning, technical explanation or proportional relationships. The learner's experience becomes a substantive resource for inquiry. It does not mean the learner already understands every formal physics concept or should be made responsible for teaching the entire class.\n\nBuilding such connections requires listening carefully to what people actually do. Voluntary conversations, learner-selected examples and community partnerships can reveal useful practices without making home visits a universal requirement. Families should understand the purpose and be able to decide what to share. Knowledge about finances, migration, health or employment can be sensitive. Respecting boundaries is part of recognizing families as partners rather than treating their lives as curriculum material available for extraction.\n\nTeachers then make a deliberate curricular connection. A repair example might lead to comparing measured forces or constructing a clear diagnostic explanation. Preserve the complexity of the original practice while introducing new representations and concepts. Merely displaying cultural objects or celebrating a food does not engage the same mechanism. The question is how community expertise changes the intellectual opportunities available in the classroom and how classroom learning can support further participation.\n\nPower and recognition need attention. A teacher can unintentionally validate household knowledge only when it resembles existing school subjects, or select the contributions of the most confident families. Invite varied forms of participation and acknowledge expertise without romanticizing hardship or assuming every practice is unproblematic. Learners may choose to keep school and home identities partly separate. Their preferences should shape how personal experience enters public classroom discussion.\n\nThe approach offers a way to revise deficit assumptions and broaden the resources used for teaching. Evidence from particular projects should not be turned into a universal effect claim. Examine whether curricular connections deepen understanding, change participation, and strengthen respectful relationships. Funds of knowledge become educationally meaningful when teachers learn from communities and connect that learning to rigorous, accessible instruction, while families and learners retain influence over how their knowledge is represented.",
    "coreIdeas": [
      "Households develop situated knowledge through work, care, relationships and practical problem-solving that schools may overlook.",
      "Educators learn from specific people and practices rather than assigning knowledge from demographic or cultural categories.",
      "Curricular connections should deepen disciplinary learning while protecting consent, privacy and learners' control over personal experience."
    ],
    "educationConnection": "Invite learners to choose a practical activity they know well, identify its reasoning demands together, and connect it to a rigorous curriculum task without requiring personal disclosure.",
    "relatedConcepts": [
      "Household knowledge",
      "Community expertise",
      "Asset-oriented pedagogy"
    ],
    "sourceUrls": [
      {
        "label": "Moll et al.: Funds of Knowledge for Teaching",
        "url": "https://doi.org/10.1080/00405849209543534"
      },
      {
        "label": "González et al.: Teacher Research on Funds of Knowledge",
        "url": "https://files.eric.ed.gov/fulltext/ED360825.pdf"
      }
    ]
  },
  {
    "id": "academy-195",
    "listingIdentifier": "AI Knowledge 98",
    "title": "Caching and Batching AI Requests",
    "slug": "caching-and-batching-ai-requests",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-195-caching-and-batching-ai-requests.png",
    "summaryAudio": "/audio/academy/academy-195-caching-and-batching-ai-requests-summary.m4a",
    "tags": [
      "AI serving",
      "caching",
      "batching"
    ],
    "imageAlt": "An East Asian teacher and Black and White adult colleagues organize repeated request cards beside a queue diagram and laptop.",
    "summaryAudioTitle": "Listen to Caching and Batching AI Requests",
    "shortSummary": "Caching reuses valid work and batching combines requests. Educational systems must distinguish prefix computation from saved answers, invalidate stale information and balance throughput with learner waiting time.",
    "fullSummary": "Caching and batching are ways to reduce repeated work when serving AI requests. Caching reuses an earlier result or intermediate computation when it is valid to do so. Batching processes several requests together to use computing resources more efficiently. Both can improve service, but they solve different problems and create different tradeoffs. Their success should be judged through the experience and correctness of the educational application.\n\nSeveral kinds of caching are easily confused. A response cache stores a completed answer for a matching request. A retrieval cache may reuse search results or document representations. Prefix caching in language-model serving reuses intermediate attention information for an identical initial token sequence, reducing repeated processing of shared input. It does not mean every user receives the same completed answer. vLLM's documentation describes this distinction and the conditions under which prefix reuse helps.\n\nConsider a school assistant whose requests share a long, fixed set of course instructions. Reusing computations for that common prefix can reduce repeated work while each learner's question is still processed separately. By contrast, caching a complete answer to 'When is my assignment due?' is risky if different classes have different deadlines. The cache must account for relevant user permissions, course version, language and other context. Similar wording does not establish equivalent meaning.\n\nCaches need a policy for invalidation, which means deciding when stored information is no longer valid. A changed rubric, corrected lesson, new model version or withdrawn permission can make reuse inappropriate. Expiration times are useful but may be insufficient when a correction needs immediate effect. Retained data also require protection and deletion procedures. A performance improvement is unacceptable if it exposes one learner's private content to another.\n\nBatching combines work so hardware can process requests efficiently. With language models, responses have different lengths, so waiting for every request in a fixed batch to finish can waste capacity. Continuous or in-flight batching allows new requests to join as others complete. Research on PagedAttention and systems such as vLLM explores memory management that supports efficient serving. Throughput gains still depend on workload, hardware and implementation rather than a universal speed multiplier.\n\nEducational priorities determine how to use these techniques. A live tutoring conversation needs responsive feedback, while generating a set of reviewed practice drafts may tolerate a queue. Waiting to form a larger batch can improve throughput while increasing an individual's delay. Measure time to first response, completion time, error rates and long-tail waits under realistic classroom demand. Ensure one failed request can be identified and retried without duplicating completed work or mixing results between learners.\n\nA practical exercise sorts fictional requests into those suitable for safe reuse, those that need fresh context, and those that can wait for batch processing. Learners justify their choices and identify what would invalidate a stored result. Caching and batching are useful when they remove redundant computation while preserving correctness, permissions and timely support. Efficient infrastructure serves the educational workflow; it should not quietly redefine what information users receive or how long they must wait.",
    "coreIdeas": [
      "Response, retrieval and prefix caches reuse different objects; prefix reuse does not imply identical completed answers.",
      "Safe cache keys and invalidation account for content versions, context and permissions so performance gains do not create stale or cross-user responses.",
      "Batching improves resource use under suitable workloads but can alter latency, requiring realistic measurement and reliable result tracking."
    ],
    "educationConnection": "Classify fictional school-assistant requests by safe cache reuse and acceptable queueing, then identify which context changes require invalidation or fresh computation.",
    "relatedConcepts": [
      "Prefix caching",
      "Cache invalidation",
      "Continuous batching"
    ],
    "sourceUrls": [
      {
        "label": "vLLM: Automatic Prefix Caching",
        "url": "https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/"
      },
      {
        "label": "Kwon et al.: Efficient Memory Management with PagedAttention",
        "url": "https://arxiv.org/abs/2309.06180"
      },
      {
        "label": "NVIDIA: In-Flight Batching and Request Scheduling",
        "url": "https://nvidia.github.io/TensorRT-LLM/1.3.0rc27/features/paged-attention-ifb-scheduler.html"
      }
    ]
  },
  {
    "id": "academy-196",
    "listingIdentifier": "Educational Theory 98",
    "title": "Translanguaging in Education",
    "slug": "translanguaging-in-education",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-196-translanguaging-in-education.png",
    "summaryAudio": "/audio/academy/academy-196-translanguaging-in-education-summary.m4a",
    "tags": [
      "translanguaging",
      "multilingual learning",
      "language and content"
    ],
    "imageAlt": "A Black science teacher and East Asian and Latina adult learners compare a condensation sketch with multilingual handwritten notes.",
    "summaryAudioTitle": "Listen to Translanguaging in Education",
    "shortSummary": "Translanguaging uses multilingual learners' full repertoires for meaning-making. Purposeful teaching connects these resources to content understanding, target-language development and equitable participation.",
    "fullSummary": "Translanguaging in education attends to how multilingual learners use their full communicative repertoires to make meaning. A learner may combine resources associated with different named languages, varieties, gestures, images and written forms while reasoning. The perspective challenges an assumption that learning always works best when these resources are rigidly separated. It also raises practical questions about how teaching can support both conceptual understanding and the development of particular languages.\n\nLi Wei develops translanguaging as a theory of flexible meaning-making across conventional language boundaries and other semiotic resources. Cenoz and Gorter describe pedagogical translanguaging as planned use of learners' repertoires to develop language and content learning. These accounts are related but should not be treated as one simple technique. Spontaneous classroom practices and deliberately designed teaching activities may serve different purposes and require different forms of support.\n\nConsider a science lesson on condensation in a multilingual adult class. Learners first explain an everyday example using languages and diagrams that help them reason. Partners compare their accounts, identify the shared mechanism, and discuss how key terms are expressed. The teacher then supports a clear explanation in the language required for the final report. The sequence preserves access to ideas while making the target language demands explicit and teachable.\n\nThe educational work lies in connecting resources purposefully. Learners might compare how two languages express a relationship, annotate a text using familiar language, or use a diagram while preparing an oral explanation. Translation alone is not the whole process, and moving between languages does not automatically resolve conceptual errors. Teachers still need evidence that students understand the phenomenon and can communicate appropriately for the intended audience and task.\n\nPlanning should consider who shares which resources. A task that assumes everyone speaks the same home language can exclude some learners. Provide multiple routes, such as individual notes, multilingual references, visuals and partner choice, without forcing students to disclose or perform a linguistic identity. Teachers need not speak every language, but should acknowledge the limits of their understanding and use trusted linguistic support where assessment or safeguarding depends on precise meaning.\n\nLanguage status also matters. If a dominant language takes over every shared activity, flexible language use may unintentionally reduce opportunities to develop a minoritized language. Cenoz and Gorter discuss protection and development of learners' languages alongside content learning. Set clear purposes for when flexibility supports reasoning and when sustained practice in a particular language is needed. Learners' preferences and the institution's legitimate learning goals should inform these decisions.\n\nResearch and theory support examining multilingual resources as assets, while the effects of specific designs depend on context, proficiency, subject and implementation. Assess content understanding and target-language performance separately where the goals require that distinction. A useful reflection asks which resources helped learners understand, what language they still need to develop, and how they can communicate the idea in a new setting. Translanguaging becomes educationally purposeful when it expands access to reasoning while supporting deliberate language growth and equitable participation.",
    "coreIdeas": [
      "Translanguaging examines flexible use of linguistic and other communicative resources, with theoretical and pedagogical accounts serving related but distinct purposes.",
      "Planned activities can connect familiar-language reasoning with explicit target-language development while checking conceptual understanding independently.",
      "Design must account for different repertoires, learner choice and language status, including protection of opportunities to develop minoritized languages."
    ],
    "educationConnection": "Let learners explain condensation through chosen languages and diagrams, compare the underlying mechanism, and then prepare a supported explanation in the required reporting language.",
    "relatedConcepts": [
      "Linguistic repertoire",
      "Metalinguistic awareness",
      "Multilingual pedagogy"
    ],
    "sourceUrls": [
      {
        "label": "Li Wei: Translanguaging as a Practical Theory of Language",
        "url": "https://discovery.ucl.ac.uk/id/eprint/10041151/"
      },
      {
        "label": "Cenoz and Gorter: Pedagogical Translanguaging",
        "url": "https://www.cambridge.org/core/elements/pedagogical-translanguaging/67802C1E5AE4A418AE3B8E2DEFBAD30A"
      }
    ]
  }
];
