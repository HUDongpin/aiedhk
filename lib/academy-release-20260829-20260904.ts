import type { AcademyLesson } from "@/lib/types";

export const academyRelease20260829To20260904: AcademyLesson[] = [
  {
    "id": "academy-085",
    "listingIdentifier": "AI Knowledge 43",
    "title": "Precision, Recall, and Decision Thresholds",
    "slug": "precision-recall-and-decision-thresholds",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-29T08:00:00.000Z",
    "image": "/images/academy/covers/academy-085-precision-recall-and-decision-thresholds.png",
    "summaryAudio": "/audio/academy/academy-085-precision-recall-and-decision-thresholds-summary.m4a",
    "tags": [
      "precision and recall",
      "decision thresholds",
      "classification"
    ],
    "imageAlt": "A Black woman educator and White and South Asian adult learners place a few fictional essay cards into a four-cell confusion-matrix diagram in a bright seminar room",
    "summaryAudioTitle": "Listen to Precision, Recall, and Decision Thresholds",
    "shortSummary": "How precision and recall describe different kinds of error, and why choosing an AI decision threshold is also a decision about educational consequences.",
    "fullSummary": "A classifier often produces a score before a system decides whether to flag a case. A decision threshold turns that score into an action. Lowering the threshold usually flags more cases; raising it usually flags fewer. The choice matters because a missed case and an unnecessary flag can have different consequences. Precision and recall help educators describe that tradeoff more clearly than a single overall accuracy figure.\n\nPrecision asks: among the cases the system flagged, how many truly belonged to the target category? Recall asks: among all cases that truly belonged to the target category, how many did the system flag? Both depend on a clearly defined positive category and a credible reference judgment. They are not interchangeable measures of correctness. A system can achieve high precision by flagging very few easy cases while missing many that need attention.\n\nSuppose a fictional writing-feedback tool reviews 100 essays. Human reviewers identify 20 that need feedback on evidence use. The tool flags 25 essays, of which 15 actually need that feedback. Its precision is 15 divided by 25, or 60 percent. Its recall is 15 divided by 20, or 75 percent. There are ten unnecessary flags and five missed cases. These counts make the practical workload visible: the teacher inspects 25 essays, while some unflagged essays still need support.\n\nChanging the threshold alters these counts without necessarily changing the model's underlying scores. A lower threshold may be appropriate when review is quick and missing a learning need is costly. A higher threshold may be necessary when every flag initiates a burdensome process. Such choices require discussion with the people affected. A threshold that is reasonable for suggesting optional practice may be unacceptable for an allegation of misconduct or a decision about access to a course. The same score does not justify the same action everywhere.\n\nPrecision–recall curves show performance across thresholds. They help teams inspect the range of possible policies rather than report only a favorable point. The F1 score combines precision and recall through a harmonic mean, but its equal weighting is not an ethical or educational rule. Where consequences differ, report the underlying counts and use a decision criterion that reflects the actual purpose. Precision also changes with the prevalence of the target condition, so results from a specially balanced test set may not describe normal classroom use.\n\nThresholds should be selected using development data and then tested on independent, representative cases. Inspect uncertainty, variation across learner groups, and disagreement in human labels. A well-chosen threshold cannot repair a poorly defined construct or an unreliable model. In teaching, let learners calculate the essay example and compare alternative thresholds under a fixed review capacity. Ask them to justify the resulting policy in ordinary language. The goal is to understand that an automated flag is a designed decision with costs, benefits, and limits that the institution must make explicit.",
    "coreIdeas": [
      "Precision concerns the reliability of flags; recall concerns how many target cases the system finds.",
      "A threshold converts model scores into actions and trades missed cases against unnecessary flags.",
      "Choose thresholds with independent evidence and explicit consequences rather than treating a default value or F1 score as a policy."
    ],
    "educationConnection": "Calculate precision and recall for a fictional essay-review tool, then compare threshold policies under a limited teacher-review budget.",
    "relatedConcepts": [
      "Confusion matrices",
      "Class prevalence",
      "Cost-sensitive decisions"
    ],
    "sourceUrls": [
      {
        "label": "scikit-learn: Classification Metrics",
        "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
      },
      {
        "label": "scikit-learn: Tuning the Decision Threshold",
        "url": "https://scikit-learn.org/stable/modules/classification_threshold.html"
      }
    ]
  },
  {
    "id": "academy-086",
    "listingIdentifier": "Educational Theory 43",
    "title": "Learning by Teaching",
    "slug": "learning-by-teaching",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-29T08:00:00.000Z",
    "image": "/images/academy/covers/academy-086-learning-by-teaching.png",
    "summaryAudio": "/audio/academy/academy-086-learning-by-teaching-summary.m4a",
    "tags": [
      "learning by teaching",
      "explanation",
      "knowledge organization"
    ],
    "imageAlt": "A White adult learner explains a simple heat-transfer diagram to Black and East Asian peers while a South Asian teacher listens beside a metal and wooden spoon",
    "summaryAudioTitle": "Listen to Learning by Teaching",
    "shortSummary": "How preparing to teach and explaining to another learner can strengthen the teacher-learner’s own understanding, when the task includes meaningful reasoning and feedback.",
    "fullSummary": "Learning by teaching describes situations in which preparing or delivering an explanation helps the person who teaches learn the material. The activity can involve a peer, a younger learner, or a simulated audience. Its promise lies in what teaching requires: selecting important ideas, organizing them coherently, retrieving them, and responding to gaps in understanding. Simply reading a prepared script aloud may provide much less of that intellectual work.\n\nPreparing to teach and actually teaching are distinct conditions. Research by Nestojko and colleagues found that expecting to teach could change how learners studied and organized material for later recall. Fiorella and Mayer compared teaching expectancy with teaching itself, emphasizing that these activities should not be assumed equivalent. The evidence concerns particular tasks and outcomes. It does not establish that every learner becomes an expert merely by taking the teacher's role, or that teaching always outperforms equally demanding study.\n\nImagine an adult learner preparing a three-minute explanation of why a metal spoon feels colder than a wooden spoon in the same room. To teach the idea accurately, the learner must distinguish temperature from the rate of heat transfer. They select a simple diagram showing energy moving from a warmer hand, anticipate the mistaken claim that metal must have a lower room temperature, and check the explanation against a reliable source. Preparing the explanation can expose a gap that rereading had concealed.\n\nThe audience then asks whether the same reasoning applies to a metal chair outside in sunlight. This question forces the learner-teacher to inspect the boundary of the original example: objects exposed to different energy inputs need not have the same temperature. A useful teaching exchange therefore includes questions, correction, and revision. The adult learner writes a clearer explanation afterward and attempts a new thermal-conduction problem without notes. That independent task gives stronger evidence of learning than applause or a polished presentation.\n\nTeachers can make the method manageable by assigning a narrow concept, providing trustworthy materials, and giving a short preparation period. Rotate roles so that one confident learner does not become the permanent instructor. Offer options for spoken, written, or visual explanation and protect learners from being publicly judged on presentation style. The teacher remains responsible for checking content and correcting shared misconceptions. Peer teaching should not become a way to transfer all instructional responsibility to students who have not received adequate support.\n\nAI can serve as a questioning partner or a learner that asks for clarification, but it may accept a false explanation or introduce errors of its own. Use bounded topics and a checked reference, and inspect the revisions it prompts. The strongest educational question is not whether learners performed the role of teacher, but whether the role made them organize, explain, and test ideas more effectively. Learning by teaching is most useful when it produces an improved account and independently usable understanding for both participants.",
    "coreIdeas": [
      "Teaching can require organization, retrieval, explanation, and attention to another learner’s questions.",
      "Preparing to teach and teaching are different activities with task-dependent evidence.",
      "Provide accurate sources, equitable roles, feedback, and an independent follow-up task to check learning."
    ],
    "educationConnection": "Prepare and teach a short explanation of thermal conduction, respond to a boundary-case question, revise the explanation, and solve a new problem independently.",
    "relatedConcepts": [
      "Teaching expectancy",
      "Generative learning",
      "Peer explanation"
    ],
    "sourceUrls": [
      {
        "label": "Nestojko and colleagues: Expecting to Teach Enhances Learning and Organization",
        "url": "https://sites.williams.edu/nk2/files/2011/08/TeachingExpectancy.pdf"
      },
      {
        "label": "Fiorella and Mayer: The Relative Benefits of Learning by Teaching and Teaching Expectancy",
        "url": "https://doi.org/10.1016/j.cedpsych.2013.06.001"
      }
    ]
  },
  {
    "id": "academy-087",
    "listingIdentifier": "AI Knowledge 44",
    "title": "Learning from Imbalanced Data",
    "slug": "learning-from-imbalanced-data",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-30T08:00:00.000Z",
    "image": "/images/academy/covers/academy-087-learning-from-imbalanced-data.png",
    "summaryAudio": "/audio/academy/academy-087-learning-from-imbalanced-data-summary.m4a",
    "tags": [
      "class imbalance",
      "resampling",
      "model evaluation"
    ],
    "imageAlt": "A Latina computing teacher and Black and White adult learners inspect a resource-catalog chart with one small highlighted category and a few example diagram cards",
    "summaryAudioTitle": "Listen to Learning from Imbalanced Data",
    "shortSummary": "Why high accuracy can conceal failure on uncommon cases, and how training and evaluation can respond without inventing evidence about rare learners or events.",
    "fullSummary": "A dataset is imbalanced when some target classes contain many more examples than others. This is common in education: most resources may lack a particular feature, while only a few submissions exhibit a specific error. A model trained to minimize ordinary error can perform well on the majority while paying insufficient attention to rare cases. The importance of the minority class depends on the task, not simply on how small it is.\n\nSuppose a resource library contains 100 items, only five of which include an interactive diagram. A classifier that labels every item \"no interactive diagram\" reaches 95 percent accuracy while finding none of the items the teacher wants. This illustrates why overall accuracy can be misleading. Report the class distribution, a confusion matrix, and measures such as recall for the rare class and precision among flagged items. The toy example describes class frequency, not a demographic group of learners.\n\nSeveral training strategies can respond to imbalance. Class weights increase the contribution of selected errors to the training objective. Oversampling repeats or synthesizes examples from a smaller class; undersampling reduces examples from a larger class. SMOTE, introduced by Chawla and colleagues, creates synthetic feature-space examples between selected minority-class neighbors. These methods change what the algorithm sees or values during training. They do not create independent observations of the real world or guarantee better performance.\n\nA teacher and developer evaluating the resource tagger might first collect more diverse, accurately labeled examples of interactive diagrams. They should include different subjects, visual styles, and file formats so that the model does not learn one superficial cue. If they try class weighting or resampling, they compare the result with a simple baseline using the same untouched evaluation set. A gain in rare-class recall may come with more false flags, which could be acceptable for a search aid but burdensome in another workflow.\n\nResampling must occur within the training data, including within each training fold during cross-validation. Doing it before the split can place duplicates or closely related synthetic examples on both sides and inflate apparent performance. Synthetic data also require a plausible feature representation. Interpolating numerical measurements can produce examples that make little sense for text, categorical variables, or tightly constrained educational records. A convenient software option is not evidence that its assumptions fit the task.\n\nRare classes create evaluation uncertainty as well as a training challenge. If only five positive cases appear in a test set, one error changes recall substantially. Report counts and uncertainty, inspect errors, and avoid strong conclusions about subgroups with little evidence. Class imbalance is also different from unequal representation of social groups, though the two can interact. A fair workflow examines both. The practical aim is not to force every dataset into equal class sizes, but to make important uncommon cases visible while preserving realistic evaluation and an honest account of what the available data can establish.",
    "coreIdeas": [
      "Overall accuracy can hide complete failure to identify a rare target class.",
      "Weighting and resampling change training emphasis; synthetic examples are not new independent evidence.",
      "Keep evaluation representative and untouched, resample only within training, and report uncertainty for sparse classes."
    ],
    "educationConnection": "Evaluate a fictional interactive-resource tagger with a 95-to-5 class split, compare weighting and resampling plans, and identify which errors affect a teacher’s search workflow.",
    "relatedConcepts": [
      "Class weighting",
      "SMOTE",
      "Precision–recall evaluation"
    ],
    "sourceUrls": [
      {
        "label": "Chawla and colleagues: SMOTE, Synthetic Minority Over-sampling Technique",
        "url": "https://arxiv.org/abs/1106.1813"
      },
      {
        "label": "imbalanced-learn: User Guide",
        "url": "https://imbalanced-learn.org/stable/user_guide.html"
      },
      {
        "label": "imbalanced-learn: Common Pitfalls",
        "url": "https://imbalanced-learn.org/stable/common_pitfalls.html"
      }
    ]
  },
  {
    "id": "academy-088",
    "listingIdentifier": "Educational Theory 44",
    "title": "Peer Instruction",
    "slug": "peer-instruction",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-30T08:00:00.000Z",
    "image": "/images/academy/covers/academy-088-peer-instruction.png",
    "summaryAudio": "/audio/academy/academy-088-peer-instruction-summary.m4a",
    "tags": [
      "peer instruction",
      "concept questions",
      "classroom dialogue"
    ],
    "imageAlt": "A physics educator and adult learners compare two toy carts and opposite force arrows, with sparse physics sketches on the classroom board.",
    "summaryAudioTitle": "Listen to Peer Instruction",
    "shortSummary": "How a cycle of individual commitment, peer reasoning, and instructor explanation can make conceptual thinking visible and help students revise it.",
    "fullSummary": "Peer instruction is a structured teaching approach associated with Eric Mazur and colleagues. Learners first respond individually to a conceptual question, then discuss their reasoning with peers, reconsider their answers, and receive instructor clarification. The question is not merely a quick poll. It should reveal a meaningful distinction or misconception that learners can examine together. The sequence combines personal accountability with a reason to listen to another person's explanation.\n\nThe initial individual response matters because it gives each learner a position to inspect. During discussion, peers can compare assumptions, articulate a mechanism, and challenge an attractive but incomplete argument. A second response lets the teacher see how thinking has changed. Research by Crouch and Mazur documents the approach in physics teaching, while studies by Smith and colleagues investigate learning from concept-question discussions and instructor explanation. These findings support examining reasoning, rather than assuming that changing an answer means understanding has improved.\n\nConsider a physics question about two carts experiencing the same net force. One cart has twice the mass of the other. Learners choose which cart has the greater acceleration and explain their choice. A common confusion is to treat greater mass as automatically producing greater acceleration. Partners must connect the situation to the relationship between force, mass, and acceleration. After discussion, the teacher clarifies that the lighter cart has twice the acceleration, under the stated conditions, and uses a simple diagram to connect the quantities.\n\nThe next question should change the surface details while preserving the concept. For example, ask what force is needed to give the heavier cart the same acceleration as the lighter cart. An independent answer can show whether learners can apply the relationship rather than copy a partner's original choice. This step also helps distinguish genuine learning from conformity to the most confident speaker. A correct second vote alone is useful information, but it is not a complete assessment of conceptual understanding.\n\nGood questions offer plausible alternatives that represent distinct ways of reasoning. If nearly everyone can answer immediately, discussion may add little; if the prerequisites are absent, discussion may circulate guesses. Teachers can adjust with a short explanation, a representation, or a different question. Response cards, accessible paper forms, or digital polling can all support the sequence. Technology is optional. The quality of the question and the use of the responses are more important than the voting device.\n\nParticipation needs deliberate support. Give quiet thinking time, invite reasons rather than declarations of certainty, and ensure that language or status differences do not silence contributors. Ask learners to summarize a partner's reasoning before defending their own. The teacher then synthesizes the discussion and corrects unresolved errors. Peer instruction is a way to organize conceptual comparison and feedback; it works best when the classroom treats revision as evidence of learning and checks that learners can carry the improved reasoning into a new task.",
    "coreIdeas": [
      "Peer instruction links an individual answer, reasoned discussion, reconsideration, and instructor clarification.",
      "Concept questions should expose meaningful alternatives, and follow-up questions should test independent understanding.",
      "Accessible participation and attention to reasoning prevent voting or social conformity from substituting for learning."
    ],
    "educationConnection": "Use a two-cart force-and-acceleration question, compare peer explanations, then assess the same relationship independently with a changed force requirement.",
    "relatedConcepts": [
      "Concept questions",
      "Formative assessment",
      "Peer explanation"
    ],
    "sourceUrls": [
      {
        "label": "Crouch and Mazur: Peer Instruction, Ten Years of Experience and Results",
        "url": "https://mazur.harvard.edu/publications/peer-instruction-ten-years-experience-and-results"
      },
      {
        "label": "Smith and colleagues: Why Peer Discussion Improves Performance on Concept Questions",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19119232/"
      },
      {
        "label": "Smith and colleagues: Combining Peer Discussion with Instructor Explanation",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3046888/"
      }
    ]
  },
  {
    "id": "academy-089",
    "listingIdentifier": "AI Knowledge 45",
    "title": "Data Leakage in Machine Learning",
    "slug": "data-leakage-in-machine-learning",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-31T08:00:00.000Z",
    "image": "/images/academy/covers/academy-089-data-leakage-in-machine-learning.png",
    "summaryAudio": "/audio/academy/academy-089-data-leakage-in-machine-learning-summary.m4a",
    "tags": [
      "data leakage",
      "evaluation design",
      "machine learning"
    ],
    "imageAlt": "A White woman data educator and Black and South Asian adult learners mark a simple course timeline and sort a few fictional feature cards by when information becomes available",
    "summaryAudioTitle": "Listen to Data Leakage in Machine Learning",
    "shortSummary": "How information from the answer, the future, or related test cases can enter model development and make an educational AI system appear more capable than it is.",
    "fullSummary": "Data leakage occurs when model development uses information that would not legitimately be available for the intended prediction. It can make an evaluation look impressive while giving a misleading picture of real use. Leakage does not require copying the answer directly into a training column. It can enter through timing, duplicated records, preprocessing, or relationships among observations that a simple random split fails to respect.\n\nBegin with the prediction moment. Suppose a school wants a model to identify, in week three, learners who may need additional course support. A dataset includes a field recording whether a learner completed the final examination. That field contains information from after week three and cannot be used for the stated task. A model that relies on it may perform well in a retrospective spreadsheet but cannot offer the promised early support. Removing names from the data would not fix this timing problem.\n\nA second route involves related records. If several drafts of one learner's essay appear in both training and test sets, the model may benefit from having seen almost the same writing. Randomly splitting rows does not create independent learners. If the intended use is prediction for new learners, keep each learner's records together. If the claim concerns new schools or future terms, the split may need to respect schools or chronology as well. The correct unit follows the intended generalization claim.\n\nPreprocessing can leak information too. Estimating a mean for missing-value imputation, selecting predictive features, or fitting a dimensionality-reduction transformation using the entire dataset allows test information to influence the model. Fit these operations only on the training portion, then apply the learned transformation to held-out cases. During cross-validation, repeat that separation within each fold. A pipeline can enforce the sequence, but only if the data boundaries and operations have been specified correctly.\n\nResearch by Kapoor and Narayanan documents leakage as a serious source of reproducibility problems in machine-learning-based science. For educators, the lesson is to ask how an impressive score was produced. Request a data timeline, a description of related observations, the split rules, and the order of preprocessing and model selection. Repeatedly trying settings against the final test set also turns that set into development information. A nominally untouched file name is not evidence of an independent evaluation.\n\nA useful classroom exercise provides a fictional feature list for the week-three support model. Learners mark which fields were available at prediction time, group records belonging to the same person, and redesign the evaluation. They then explain why the corrected score might be lower yet more informative. Leakage prevention does not guarantee a useful or fair model, but it makes the evidence more credible. The practical standard is that evaluation should reproduce the information and independence constraints of the decision the institution actually intends to make.",
    "coreIdeas": [
      "Leakage lets development use answer-related, future, or held-out information unavailable in the intended task.",
      "Split by the relevant unit and time, and fit all learned preprocessing only within training data.",
      "An honest evaluation reproduces deployment information boundaries, even when the corrected score is lower."
    ],
    "educationConnection": "Audit a fictional week-three support dataset for future fields, repeated learner records, and globally fitted preprocessing, then redesign the split and training sequence.",
    "relatedConcepts": [
      "Temporal validation",
      "Grouped data",
      "Preprocessing pipelines"
    ],
    "sourceUrls": [
      {
        "label": "Kapoor and Narayanan: Leakage and the Reproducibility Crisis in ML-based Science",
        "url": "https://arxiv.org/abs/2207.07048"
      },
      {
        "label": "scikit-learn: Common Pitfalls and Data Leakage",
        "url": "https://scikit-learn.org/stable/common_pitfalls.html"
      }
    ]
  },
  {
    "id": "academy-090",
    "listingIdentifier": "Educational Theory 45",
    "title": "Dialogic Teaching",
    "slug": "dialogic-teaching",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-31T08:00:00.000Z",
    "image": "/images/academy/covers/academy-090-dialogic-teaching.png",
    "summaryAudio": "/audio/academy/academy-090-dialogic-teaching-summary.m4a",
    "tags": [
      "dialogic teaching",
      "classroom talk",
      "reasoning"
    ],
    "imageAlt": "A Black woman history educator and White, South Asian, and East Asian adult learners compare two annotated historical extracts around a bright classroom discussion table",
    "summaryAudioTitle": "Listen to Dialogic Teaching",
    "shortSummary": "How teachers can use connected classroom dialogue to develop reasoning, while maintaining disciplinary standards and broad participation.",
    "fullSummary": "Dialogic teaching treats classroom talk as a way of developing ideas together. Learners explain, question, challenge, and build on contributions, while the teacher connects the discussion to an educational purpose. It is more than allowing students to speak after a presentation. A dialogue becomes intellectually useful when participants engage with one another's reasoning and the conversation accumulates understanding instead of remaining a series of unrelated answers.\n\nRobin Alexander's account emphasizes qualities such as collective, reciprocal, supportive, cumulative, and purposeful talk. These qualities describe how a discussion functions. Supportive talk permits uncertainty and disagreement without ridicule. Cumulative talk links contributions so that later ideas respond to earlier ones. Purposeful talk retains a learning direction even when the teacher cannot predict every response. The teacher therefore has an active role in selecting questions, interpreting answers, and deciding when explanation or correction is needed.\n\nImagine a history lesson comparing two accounts of the same public event. One learner argues that the sources disagree because one author was dishonest. Another points to their different locations and access to information. Rather than immediately announcing the preferred answer, the teacher asks which passages support each interpretation. A third learner adds the date of each account. The class then revises its explanation to consider perspective, timing, and evidence. The conversation becomes cumulative because each contribution changes what the group can reasonably claim.\n\nUseful teacher moves include asking a learner to clarify a term, inviting a peer to paraphrase an argument, requesting a counterexample, and returning to an earlier claim after new evidence appears. Wait time gives participants a chance to formulate a response. Brief paired preparation, writing, diagrams, or home-language discussion can widen access before whole-class talk. Participation should not be measured only by the number of turns taken; a short question that exposes an assumption may be more consequential than a long speech.\n\nDialogue needs disciplinary boundaries. Not every interpretation is equally supported, and a respectful discussion can still contain misinformation. Teachers should distinguish open questions from established facts, correct harmful or false claims appropriately, and show how evidence constrains an answer. They also need to notice whose contributions receive attention and whose ideas are routinely overlooked. A classroom can sound lively while authority remains concentrated among a few confident speakers. Inclusion requires both opportunities to contribute and serious uptake of those contributions.\n\nAn evaluation of dialogic teaching should inspect the quality of talk and learning beyond the discussion. Alexander's research and the Education Endowment Foundation trial provide evidence about particular programmes and settings, not a guarantee for any activity labeled dialogue. Teachers can review a short transcript, trace how ideas were taken up, and assess a later independent explanation. The goal is a conversation that leaves learners better able to reason with evidence, listen critically, and revise their own accounts. More talk is useful only when it advances those purposes.",
    "coreIdeas": [
      "Dialogic teaching organizes reciprocal, cumulative, purposeful talk around developing understanding.",
      "Teachers actively connect contributions, invite evidence, and widen participation while maintaining disciplinary standards.",
      "Assess the uptake and development of ideas and later independent reasoning, rather than the volume of classroom talk."
    ],
    "educationConnection": "Compare two historical accounts, trace how peers revise an explanation through evidence, and review a short transcript for whose ideas shaped the conclusion.",
    "relatedConcepts": [
      "Cumulative dialogue",
      "Epistemic agency",
      "Classroom discourse"
    ],
    "sourceUrls": [
      {
        "label": "Alexander: Developing Dialogic Teaching, Genesis, Process, Trial",
        "url": "https://robinalexander.org.uk/wp-content/uploads/2019/12/RPIE-2018-Alexander-dialogic-teaching.pdf"
      },
      {
        "label": "Education Endowment Foundation: Dialogic Teaching Trial",
        "url": "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/dialogic-teaching"
      }
    ]
  },
  {
    "id": "academy-091",
    "listingIdentifier": "AI Knowledge 46",
    "title": "Overfitting and Regularization",
    "slug": "overfitting-and-regularization",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-01T08:00:00.000Z",
    "image": "/images/academy/covers/academy-091-overfitting-and-regularization.png",
    "summaryAudio": "/audio/academy/academy-091-overfitting-and-regularization-summary.m4a",
    "tags": [
      "overfitting",
      "regularization",
      "generalization"
    ],
    "imageAlt": "An East Asian woman computing educator and Black and White adult learners compare a smooth fitted curve and a sharply bending curve over a small synthetic dataset on a classroom display",
    "summaryAudioTitle": "Listen to Overfitting and Regularization",
    "shortSummary": "Why a model can fit its training examples too closely, and how constraints and independent validation can support performance on new cases.",
    "fullSummary": "Overfitting occurs when a model learns patterns that help explain its training data but do not transfer reliably to new data. These patterns may include noise, accidental associations, or details specific to a small sample. A model can therefore become more accurate on the examples it has seen while becoming less useful for future cases. The target of learning is generalization, not a perfect recollection of the development dataset.\n\nImagine estimating the relationship between practice time and performance using a small fictional class dataset. A very flexible curve can weave through almost every recorded point, including unusual observations caused by measurement error or an interrupted lesson. A simpler curve may miss some training points yet predict a new learner's result more accurately. Neither curve establishes that practice time causes the result. The example illustrates fitting and prediction, while causal interpretation requires additional assumptions and study design.\n\nRegularization introduces preferences or constraints that discourage some kinds of overly complex fit. In a linear model, an L2 penalty discourages large coefficients, while an L1 penalty can set some coefficients to zero. Other approaches restrict tree depth or stop training before the model increasingly fits idiosyncratic detail. These methods encode assumptions about what solutions are likely to generalize. They are not magic corrections, and stronger regularization is not always better.\n\nToo little flexibility can produce underfitting: the model misses an important relationship even in the training data. The practical task is to find an appropriate balance for the problem and evidence available. Compare training and validation performance as a relevant setting changes. A large training advantage can suggest overfitting, while poor performance on both may suggest insufficient model capacity, weak features, label problems, or a task that the available data cannot support. These patterns are diagnostic clues rather than automatic diagnoses.\n\nFor an educational resource classifier, a developer might compare several tree depths using separate development folds. The simplest tree may miss meaningful combinations of features; the deepest may memorize rare formatting details. Select a setting based on suitable validation evidence and then evaluate the chosen workflow on untouched cases. Fitting preprocessing and selecting features must occur within the training portion as well. Regularization cannot compensate for test leakage, a misleading target label, or an evaluation that ignores new schools or later terms.\n\nEducators can explore the idea by fitting simple and flexible curves to a small synthetic dataset, revealing new points only after predictions are recorded. Ask which model appeared best before the reveal and what changed afterward. Discuss the uncertainty that remains when data are scarce. Regularization is a disciplined way of limiting what a model can infer from finite evidence. Its value must be demonstrated on relevant new cases, with attention to subgroup errors and the consequences of using predictions. A lower training score can be acceptable when it accompanies more dependable performance where the model will actually be used.",
    "coreIdeas": [
      "Overfitting improves fit to sample-specific detail at the expense of performance on new cases.",
      "Regularization constrains possible solutions, but excessive constraint can underfit useful relationships.",
      "Select model settings with suitable validation and judge the final workflow on independent, relevant cases."
    ],
    "educationConnection": "Fit simple and flexible curves to synthetic practice data, record predictions for hidden points, and use the reveal to distinguish training fit from generalization.",
    "relatedConcepts": [
      "Bias–variance tradeoff",
      "L1 and L2 penalties",
      "Validation curves"
    ],
    "sourceUrls": [
      {
        "label": "James and colleagues: An Introduction to Statistical Learning",
        "url": "https://www.statlearning.com/"
      },
      {
        "label": "scikit-learn: Validation Curves and Learning Curves",
        "url": "https://scikit-learn.org/stable/modules/learning_curve.html"
      }
    ]
  },
  {
    "id": "academy-092",
    "listingIdentifier": "Educational Theory 46",
    "title": "Distributed Cognition",
    "slug": "distributed-cognition",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-01T08:00:00.000Z",
    "image": "/images/academy/covers/academy-092-distributed-cognition.png",
    "summaryAudio": "/audio/academy/academy-092-distributed-cognition-summary.m4a",
    "tags": [
      "distributed cognition",
      "representations",
      "collaborative systems"
    ],
    "imageAlt": "A South Asian educator and three adult learners coordinate a raised-bed garden plan with a drawing, measuring tape and sunlight sketch outdoors.",
    "summaryAudioTitle": "Listen to Distributed Cognition",
    "shortSummary": "How thinking can be organized across people, tools, and shared representations, and what that perspective reveals about classroom work.",
    "fullSummary": "Distributed cognition examines cognitive activity at the level of a system that includes people, tools, representations, and their coordination. Instead of asking only what one learner remembers internally, it asks how information is represented, moved, and transformed while a task is completed. Edwin Hutchins's studies of navigation and aviation illustrate how successful performance depends on interactions among individuals and artifacts rather than on isolated minds alone.\n\nA shared diagram, checklist, physical arrangement, or spoken confirmation can carry part of a task's informational demands. These artifacts do more than store facts outside the head. Their organization can make a relationship visible, constrain a possible action, or help participants coordinate the next step. The relevant unit of analysis depends on the question. Studying a whole classroom system does not deny individual thinking; it makes connections between individual work and the surrounding organization explicit.\n\nConsider a group preparing a school garden plan. One learner measures the site, another maintains a scale drawing, and a third records sunlight observations in a table. A fourth checks whether proposed beds fit the available space. The group uses a shared map to connect these contributions. When the scale changes, the map, measurements, and proposed layout must be reconciled. The intellectual work is distributed across people and representations, and a failure at a handoff can undermine the result even when each individual calculation is correct.\n\nA teacher analyzing this activity can trace one piece of information from measurement to drawing to decision. Where is it recorded? Which units are used? Who checks the transformation? Can another participant interpret the notation? A poorly labeled diagram can create unnecessary coordination work, while a clear shared representation can make disagreement inspectable. Rotating roles can help learners understand the whole process rather than become permanently responsible for one narrow operation. The design should preserve meaningful participation for everyone.\n\nThe perspective also changes how technology is evaluated. A shared digital board may improve coordination, or it may hide revisions and make one person's actions difficult to inspect. An AI assistant may transform notes into a plan, but the group must understand what was omitted, inferred, or changed. Convenience can shift cognitive responsibility without making that shift visible. Teachers should decide which operations learners need to understand themselves and which external supports are legitimate parts of the target practice.\n\nAssessment must follow that decision. If the goal is coordinated planning, evaluate the group's representations, checks, and handoffs as well as its final plan. If the goal includes independent scale reasoning, add an individual task that makes that capability visible. Successful collective performance does not prove that every participant has acquired the same knowledge. Distributed cognition provides a way to inspect how a learning environment thinks through its organized activity, while keeping responsibility, individual development, and the limits of external assistance open to examination.",
    "coreIdeas": [
      "Cognitive activity can be studied across coordinated people, artifacts, and transformations of information.",
      "Shared representations shape reasoning and handoffs, rather than merely storing information outside the head.",
      "Match assessment to collective and individual goals, and make shifts of responsibility through tools visible."
    ],
    "educationConnection": "Trace a measurement through a garden-planning team’s map, table, and decision; inspect units, handoffs, shared checks, and each learner’s independent scale reasoning.",
    "relatedConcepts": [
      "External representations",
      "Coordination",
      "Cognitive tools"
    ],
    "sourceUrls": [
      {
        "label": "Hutchins: How a Cockpit Remembers Its Speeds",
        "url": "https://pages.ucsd.edu/~c8johnson/COGS102B/Hutchins95.pdf"
      },
      {
        "label": "Hutchins: Distributed Cognition in Aviation",
        "url": "https://pages.ucsd.edu/~ehutchins/dcogAviation.html"
      },
      {
        "label": "Hollan, Hutchins, and Kirsh: Distributed Cognition and Human–Computer Interaction",
        "url": "https://adrenaline.ucsd.edu/kirsh/Articles/DCog/dcog.pdf"
      }
    ]
  },
  {
    "id": "academy-093",
    "listingIdentifier": "AI Knowledge 47",
    "title": "Cross-Validation for Small Datasets",
    "slug": "cross-validation-for-small-datasets",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-02T08:00:00.000Z",
    "image": "/images/academy/covers/academy-093-cross-validation-for-small-datasets.png",
    "summaryAudio": "/audio/academy/academy-093-cross-validation-for-small-datasets-summary.m4a",
    "tags": [
      "cross-validation",
      "small datasets",
      "generalization"
    ],
    "imageAlt": "A statistics educator and two adult learners compare five groups of illustrated response cards with an unlabeled cross-validation grid on the board.",
    "summaryAudioTitle": "Listen to Cross-Validation for Small Datasets",
    "shortSummary": "How cross-validation reuses limited data for development and evaluation, and why it cannot remove the uncertainty created by a small sample.",
    "fullSummary": "Cross-validation evaluates a learning procedure by repeatedly fitting it on part of a dataset and testing it on held-out observations. In k-fold cross-validation, the data are divided into k parts. Each part takes a turn as the validation set while the remaining parts supply training data. The resulting scores provide evidence about performance across these splits. They do not create new independent observations or turn a small dataset into a large one.\n\nThe choice of split must match the intended prediction. Imagine 20 learners each contributing ten short written responses. There are 200 rows, but those rows are not 200 independent learners. If the application will assess responses from new learners, keep each person's responses together. A five-fold design could hold out four learners at a time and train on the other sixteen. Randomly distributing all rows would answer a different and often easier question because the model could encounter the same learner during training and validation.\n\nAll data-dependent steps belong inside the training portion of each split. This includes missing-value handling, scaling, feature selection, resampling, and model fitting. The validation portion should undergo the transformations learned from training, without influencing them. Otherwise, information leaks across the boundary. Software pipelines can help enforce this sequence, but they cannot decide whether the original grouping or timing assumptions are appropriate for the educational setting.\n\nModel selection adds another layer. If a team tries many settings and reports the best cross-validation score, that score reflects the search as well as the model. Nested cross-validation separates an inner process for choosing settings from an outer process for evaluating the whole selection procedure. Alternatively, a genuinely untouched final test set can evaluate a selected workflow when enough data are available. The important distinction is between evidence used to make development choices and evidence used to judge those choices.\n\nSmall samples remain uncertain. Different partitions can produce different scores, especially when classes are rare or individual learners vary substantially. Research by Varoquaux highlights that cross-validation error bars can be underestimated in small-sample settings. Fold scores are not fully independent because their training sets overlap, so their simple standard deviation should not be casually presented as a confidence interval. Repeated cross-validation can reveal sensitivity to splits, but repeated reuse of the same learners does not supply a new population.\n\nEducators reviewing a small pilot should request the number of independent learners and institutions, split rules, model-selection process, and uncertainty—not just an average accuracy. A classroom exercise can compare row-level and learner-level splits in a fictional response dataset and explain why the results answer different questions. Cross-validation is a disciplined way to use limited evidence, not a substitute for representative data or later external validation. When uncertainty remains too large for a consequential decision, the appropriate conclusion may be that the pilot supports further investigation rather than routine deployment.",
    "coreIdeas": [
      "Cross-validation evaluates a procedure across held-out splits but does not increase the number of independent observations.",
      "Respect learner, school, and temporal groups, and fit preprocessing within each training split.",
      "Separate model selection from evaluation and report the substantial uncertainty that can remain with small samples."
    ],
    "educationConnection": "Compare row-level and learner-level five-fold designs for 20 fictional learners with repeated responses, then explain which deployment claim each design addresses.",
    "relatedConcepts": [
      "Grouped cross-validation",
      "Nested cross-validation",
      "Sampling uncertainty"
    ],
    "sourceUrls": [
      {
        "label": "scikit-learn: Cross-Validation",
        "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
      },
      {
        "label": "Varoquaux: Cross-Validation Failure, Small Sample Sizes Lead to Large Error Bars",
        "url": "https://arxiv.org/abs/1706.07581"
      }
    ]
  },
  {
    "id": "academy-094",
    "listingIdentifier": "Educational Theory 47",
    "title": "Embodied Cognition",
    "slug": "embodied-cognition",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-02T08:00:00.000Z",
    "image": "/images/academy/covers/academy-094-embodied-cognition.png",
    "summaryAudio": "/audio/academy/academy-094-embodied-cognition-summary.m4a",
    "tags": [
      "embodied cognition",
      "gesture",
      "mathematics learning"
    ],
    "imageAlt": "A White woman mathematics teacher and Black and South Asian adult learners connect a hand gesture and a movable marker with a clearly marked number-line diagram at an accessible table",
    "summaryAudioTitle": "Listen to Embodied Cognition",
    "shortSummary": "How perception and action can contribute to thinking, and how to design purposeful gestures or movement without assuming that all movement improves learning.",
    "fullSummary": "Embodied cognition is a family of perspectives emphasizing relationships among thinking, perception, bodily action, and the environment. It challenges accounts that treat cognition as entirely detached from how people act in the world. Margaret Wilson's analysis distinguishes several claims within this family, some more strongly supported or more controversial than others. Educators should therefore avoid treating embodied cognition as one settled theory that predicts the same benefit from every physical activity.\n\nIn learning, a gesture or action can represent a relationship that is difficult to hold in words alone. A hand movement may show grouping, direction, balance, or change. Research on mathematical gesture investigates whether producing or observing particular actions can support learning and generalization. The important question is what the action represents and how it connects with the concept. Waving, standing, or using a touchscreen is not inherently an embodied explanation of the material.\n\nConsider an adult numeracy lesson on adding a positive number to a negative number. A learner begins at minus two on a number line and moves five equal steps to the right, arriving at three. The teacher connects the starting position, direction, and distance to the expression minus two plus five. Learners then explain which feature of the movement corresponds to each part of the notation. The motion becomes useful when it makes a mathematical relationship inspectable rather than serving as a decorative break from symbolic work.\n\nThe next task should vary the representation. Learners might move a small marker, gesture above a printed line, or reason from a static diagram. They then solve a related expression without physically moving. This checks whether the representation supports a transferable idea. Physical activity can also mislead: a learner may memorize a direction rule without understanding which operation it represents. Contrasting carefully selected cases and asking for explanations can reveal that limitation before the action becomes an inflexible routine.\n\nAccessibility belongs in the design from the beginning. No learner should have to stand, walk, make a particular gesture, or disclose a disability to participate. Observation, assisted movement, digital controls, tactile materials, and alternative representations can preserve the intellectual relationship while changing the action. Embodied perspectives do not imply that learners have fixed kinesthetic learning styles or should be assigned instruction by such labels. The relevant issue is the fit between a representation, a concept, and the learner's available ways of engaging.\n\nA practical evaluation compares what learners understand before and after the activity and what they can do with a new representation. Include a clear explanation and suitable feedback, because motion alone does not resolve misconceptions. Studies of gesture offer evidence for specific tasks, not a universal prescription to maximize movement. Embodied cognition can help educators ask a sharper design question: which perceptual or action-based relationship will make the target idea easier to notice, explain, and eventually use when the original activity is absent?",
    "coreIdeas": [
      "Embodied cognition includes several claims about how perception and action contribute to thinking.",
      "A gesture or movement must represent a relevant conceptual relationship; physical activity alone is insufficient.",
      "Provide accessible alternatives and test whether understanding transfers beyond the original action."
    ],
    "educationConnection": "Connect a move from minus two to three on a number line with symbolic addition, allow multiple ways to represent the movement, and assess a new expression without the action.",
    "relatedConcepts": [
      "Gesture",
      "Perception–action coupling",
      "Representational transfer"
    ],
    "sourceUrls": [
      {
        "label": "Wilson: Six Views of Embodied Cognition",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12613670/"
      },
      {
        "label": "Novack and colleagues: From Action to Abstraction, Using the Hands to Learn Math",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3984351/"
      },
      {
        "label": "Cook, Mitchell, and Goldin-Meadow: Gesturing Makes Learning Last",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17560971/"
      }
    ]
  },
  {
    "id": "academy-095",
    "listingIdentifier": "AI Knowledge 48",
    "title": "Prediction and Causal Inference",
    "slug": "prediction-and-causal-inference",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-03T08:00:00.000Z",
    "image": "/images/academy/covers/academy-095-prediction-and-causal-inference.png",
    "summaryAudio": "/audio/academy/academy-095-prediction-and-causal-inference-summary.m4a",
    "tags": [
      "causal inference",
      "prediction",
      "educational evaluation"
    ],
    "imageAlt": "A South Asian male education researcher and Black and White adult learners compare a simple tutoring-outcome chart with a three-variable causal diagram in a bright seminar room",
    "summaryAudioTitle": "Listen to Prediction and Causal Inference",
    "shortSummary": "Why predicting an outcome differs from estimating what an intervention would change, and how that distinction affects decisions about educational AI.",
    "fullSummary": "Prediction asks what outcome is likely given available information. Causal inference asks how an outcome would change under a specified intervention. These questions can use some of the same data and statistical tools, but they require different reasoning. A highly accurate predictor does not automatically identify an effective action. It may rely on signals that are useful for forecasting yet have no causal influence on the outcome.\n\nImagine a school dataset in which learners receiving more tutoring tend to have lower examination marks. A predictive model might use tutoring hours as a signal of lower expected marks. It would be a mistake to conclude that removing tutoring would improve achievement. Learners may have been offered tutoring because they were already struggling. Prior difficulty influences both tutoring allocation and later marks, creating confounding. The association cannot be interpreted as the effect of tutoring without addressing how the support was assigned.\n\nOne way to express a causal question uses potential outcomes: what would happen to the same learner under one intervention and under another? Only one of those outcomes is observed for that learner in the realized situation. Estimating an average effect therefore requires a design and assumptions that make comparisons informative. Hernán and Robins develop this perspective, while Pearl explains causal reasoning through graphical and structural models. Both approaches make clear that causal interpretation needs more than a fitted association.\n\nRandom assignment can support a credible comparison when appropriate and feasible, because assignment does not systematically follow prior learner characteristics. Even then, missing outcomes, nonparticipation, spillovers between learners, and changes in implementation require attention. Observational approaches can also support causal inference under explicit assumptions, using designs such as discontinuities, suitable comparison groups, or careful adjustment. Adding many variables to a model is not automatically helpful: adjusting for the wrong variable can introduce bias rather than remove it.\n\nFor an AI-supported feedback pilot, define the intervention precisely. Is the question about access to the tool, actual use, a particular feedback routine, or an entire teaching programme? Define the comparison, population, timeframe, and learning outcome. An assisted homework score is different from an unaided transfer test. A diagram of plausible causal relationships can expose assumptions about prior attainment, teacher choices, motivation, and access. The diagram is a statement to justify, not evidence that the assumptions are true.\n\nEducators can practice by writing two questions about the tutoring example: one forecasting a learner's likely result and one estimating the effect of offering support. They then identify what evidence each question needs. Causal estimates also have uncertainty and may not transport to a different school or learner population. Average benefit does not imply equal benefit for every individual. The practical value of the distinction is that an institution can use prediction to organize attention while demanding additional evidence before claiming that acting on the prediction will improve learning.",
    "coreIdeas": [
      "Prediction forecasts outcomes; causal inference estimates changes under a specified intervention.",
      "Confounding can make useful predictive associations misleading guides to action.",
      "Define the intervention and comparison, justify the design and assumptions, and distinguish average effects from individual benefits."
    ],
    "educationConnection": "Use a fictional tutoring dataset to separate a forecasting question from an intervention question, draw possible confounding relationships, and specify the evidence needed for each.",
    "relatedConcepts": [
      "Confounding",
      "Potential outcomes",
      "Causal diagrams"
    ],
    "sourceUrls": [
      {
        "label": "Hernán and Robins: Causal Inference, What If",
        "url": "https://miguelhernan.org/whatifbook"
      },
      {
        "label": "Pearl: Causal Inference in Statistics, An Overview",
        "url": "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
      }
    ]
  },
  {
    "id": "academy-096",
    "listingIdentifier": "Educational Theory 48",
    "title": "Constructionism",
    "slug": "constructionism",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-03T08:00:00.000Z",
    "image": "/images/academy/covers/academy-096-constructionism.png",
    "summaryAudio": "/audio/academy/academy-096-constructionism-summary.m4a",
    "tags": [
      "constructionism",
      "learning through making",
      "creative learning"
    ],
    "imageAlt": "An educator watches two adult learners test and revise a handmade maze game using marked path tiles and annotated paper prototypes.",
    "summaryAudioTitle": "Listen to Constructionism",
    "shortSummary": "How creating a shareable artifact can become a setting for building knowledge, when making includes explanation, feedback, and revision.",
    "fullSummary": "Constructionism is a perspective on learning associated with Seymour Papert and Idit Harel. It shares constructivism's concern with learners building knowledge, while emphasizing the value of constructing something that can be inspected and discussed by others. That public artifact might be a program, model, story, explanation, or physical object. Making becomes educational when learners develop and revise ideas through the artifact, rather than simply assemble a finished product.\n\nAn artifact gives thinking a form that can be tested. A program behaves in a particular way; a model makes assumptions visible; a story exposes connections between events. Learners can compare their intention with what the artifact actually does and use feedback to revise it. Constructionist environments often support personally meaningful projects and experimentation. However, personal relevance does not remove the need for disciplinary knowledge, guidance, or a clear account of what learners are expected to understand.\n\nImagine learners designing a small fraction game for another class. The game asks players to match equivalent fractions using partitioned shapes. During testing, a learner notices that the program marks one half and two fourths as different because it compares the written numerals directly. Repairing the rule requires a better representation of equivalence. The group can discuss why multiplying numerator and denominator by the same nonzero factor preserves a fraction's value, then revise both the code and the visual explanation.\n\nThe project becomes more than an attractive game when learners can explain those decisions. Ask them to keep a few meaningful versions, describe a bug that changed their understanding, and test the game with users who interpret the instructions differently. Feedback should address mathematical meaning as well as usability. A teacher may introduce a targeted mini-lesson or a simpler starting project when a prerequisite is missing. Freedom to build and access to explicit teaching can support the same learning process.\n\nThe final artifact is incomplete evidence of learning. One participant may write all the code, a template may supply the central logic, or an AI tool may generate a polished product that the group cannot explain. Assess individual reasoning, design choices, and revisions alongside the shared result. Provide accessible tools and low-cost materials so that technical equipment or prior coding experience does not determine who can participate meaningfully. A complex product is not necessarily a more conceptually demanding one.\n\nFor educators, the planning question is which ideas the artifact will force learners to encounter and reconsider. A constructionist task needs opportunities to test, share, receive critique, and improve, rather than a single submission deadline. Resnick's work on creative learning emphasizes projects, peers, passion, and play as useful design considerations. These principles do not guarantee success in every setting. The strongest projects connect learners' purposes with rigorous ideas and leave them able to explain, adapt, and rebuild important parts of what they have made.",
    "coreIdeas": [
      "Constructionism emphasizes knowledge building through creating a public, inspectable artifact.",
      "Testing and revising an artifact can expose assumptions and make conceptual problems concrete.",
      "Assess reasoning and contribution as well as the finished product, with guidance and accessible tools."
    ],
    "educationConnection": "Build and test a small equivalent-fractions game, use a representational bug to examine equivalence, and assess each learner’s explanation of the repaired rule.",
    "relatedConcepts": [
      "Constructivism",
      "Debugging",
      "Creative learning"
    ],
    "sourceUrls": [
      {
        "label": "Papert and Harel: Situating Constructionism",
        "url": "https://web.media.mit.edu/~calla/web_comunidad/Reading-En/situating_constructionism.pdf"
      },
      {
        "label": "Resnick: Lifelong Kindergarten, Chapter Excerpt",
        "url": "https://www.creativeacademic.uk/uploads/1/3/5/4/13542890/chapter1-excerpt.pdf"
      },
      {
        "label": "MIT OpenCourseWare: The Nature of Constructionist Learning",
        "url": "https://ocw.mit.edu/courses/mas-962-the-nature-of-constructionist-learning-spring-2003/pages/readings/"
      }
    ]
  },
  {
    "id": "academy-097",
    "listingIdentifier": "AI Knowledge 49",
    "title": "Bayesian Updating for AI Decisions",
    "slug": "bayesian-updating-for-ai-decisions",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-04T08:00:00.000Z",
    "image": "/images/academy/covers/academy-097-bayesian-updating-for-ai-decisions.png",
    "summaryAudio": "/audio/academy/academy-097-bayesian-updating-for-ai-decisions-summary.m4a",
    "tags": [
      "Bayesian reasoning",
      "base rates",
      "evidence updating"
    ],
    "imageAlt": "A White woman statistics educator and Black and South Asian adult learners compare a small probability tree with grouped resource cards on a sunlit classroom table",
    "summaryAudioTitle": "Listen to Bayesian Updating for AI Decisions",
    "shortSummary": "How prior information and new evidence combine in a Bayesian update, and why a positive AI flag can mean less than its headline sensitivity suggests.",
    "fullSummary": "Bayesian updating describes how a probability changes when new evidence becomes available. A prior probability expresses what is assumed or known before the new observation. A likelihood describes how probable that observation would be under a particular hypothesis or model. Combining them and normalizing produces a posterior probability. The update is a mathematical relationship, but its usefulness depends on whether the prior, likelihood, and assumptions are appropriate.\n\nA common mistake is to reverse a conditional probability. The probability that an AI system flags a relevant resource is not the probability that a flagged resource is relevant. To move from one to the other, the frequency of relevant resources and the system's false-positive behavior also matter. This is especially important when the target is uncommon. A good ability to detect true cases can coexist with many incorrect flags among all flagged cases.\n\nConsider a fictional resource tagger applied to 100 items. Ten genuinely contain the concept a teacher wants. The system flags eight of those ten, giving 80 percent sensitivity. It also incorrectly flags 18 of the other 90 items, a 20 percent false-positive rate. Among the 26 flagged resources, only eight are relevant: about 31 percent. The initial probability of relevance was 10 percent, so the flag provides useful evidence, but it does not make relevance nearly certain. These counts illustrate a Bayesian update in a natural-frequency format.\n\nThe same reasoning can be expressed with odds. Prior odds of one to nine are multiplied by a likelihood ratio of four, because a positive flag is four times as probable for a relevant item as for an irrelevant one. Posterior odds become four to nine, corresponding to a probability of four thirteenths. The arithmetic is simple in this example because the hypotheses are binary and the rates are assumed known. Real estimates have uncertainty and may vary across subjects, formats, or model versions.\n\nEvidence should not be counted twice. If two taggers were trained on similar data and make correlated errors, treating their agreement as independent observations can exaggerate confidence. A prior also requires explanation; it should reflect relevant information rather than an unexamined stereotype or convenience. Sensitivity analysis asks whether reasonable alternative assumptions would change the conclusion. Bayesian methods do not remove judgment. They make the relationship between assumptions, evidence, and conclusions more explicit and therefore easier to inspect.\n\nFor educational AI decisions, a posterior probability is only part of the reasoning. The appropriate action also depends on the cost of checking a resource, the consequences of missing one, and available review capacity. A teacher may inspect flagged items first while keeping other search routes open. Learners can recalculate the example with a different starting prevalence and see why the same tool behaves differently across collections. Bayesian updating offers a disciplined way to revise beliefs without mistaking a confident flag, repeated output, or favorable headline metric for conclusive evidence.",
    "coreIdeas": [
      "Bayesian updating combines a prior with the likelihood of observed evidence to produce a posterior.",
      "Sensitivity differs from the probability that a positive flag is correct; base rates and false positives matter.",
      "Inspect assumptions, dependence among evidence, and decision consequences rather than treating the posterior as automatic authority."
    ],
    "educationConnection": "Use 100 fictional resource cards to calculate the probability that a flagged item is relevant, then repeat with a different prevalence and explain the change.",
    "relatedConcepts": [
      "Conditional probability",
      "Likelihood ratios",
      "Base-rate reasoning"
    ],
    "sourceUrls": [
      {
        "label": "Downey: Think Bayes, Bayes’s Theorem",
        "url": "https://allendowney.github.io/ThinkBayes2/chap02.html"
      },
      {
        "label": "Gelman and colleagues: Bayesian Data Analysis",
        "url": "https://sites.stat.columbia.edu/gelman/book/"
      }
    ]
  },
  {
    "id": "academy-098",
    "listingIdentifier": "Educational Theory 49",
    "title": "Experiential Learning",
    "slug": "experiential-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-04T08:00:00.000Z",
    "image": "/images/academy/covers/academy-098-experiential-learning.png",
    "summaryAudio": "/audio/academy/academy-098-experiential-learning-summary.m4a",
    "tags": [
      "experiential learning",
      "reflection",
      "learning cycles"
    ],
    "imageAlt": "A Black woman adult educator and White and East Asian adult learners compare two sparse paper-bridge prototypes with annotated prediction and observation sketches in a bright workshop",
    "summaryAudioTitle": "Listen to Experiential Learning",
    "shortSummary": "How experience can be transformed into learning through reflection, conceptual explanation, and another informed attempt.",
    "fullSummary": "Experiential learning concerns how people develop understanding through the interpretation and transformation of experience. Doing an activity is not sufficient by itself. Learners may repeat a familiar action, miss an important feature, or draw an inaccurate conclusion. An educational design therefore needs ways to notice what happened, explain it, connect it with concepts, and use that explanation to guide a subsequent attempt.\n\nKolb's experiential learning theory describes relationships among concrete experience, reflective observation, abstract conceptualization, and active experimentation. A learner encounters a situation, examines it, develops or revises an account, and tries an action informed by that account. These modes provide a useful planning language. They should not be treated as a rigid timetable that every learner follows identically, or as proof that learners belong to permanent types requiring a matching instructional style.\n\nImagine an adult education group constructing a paper bridge across a small gap. They predict where the bridge will bend, test it with a modest standardized load, and record what happens. Reflection asks more than whether the bridge succeeded: where did it deform, which design feature seemed relevant, and what evidence contradicts the initial prediction? The teacher introduces an appropriate explanation of how shape and support affect the structure. Learners then design a second bridge to test one specific change.\n\nThe value lies in the connection between attempts. If the group merely adds more material after every failure, it may produce a stronger bridge without understanding why. A simple record of the design, prediction, observation, and revision makes the learning visible. Changing one feature at a time can help interpret the result, while a comparison with another group's design can challenge a premature conclusion. The teacher supplies relevant concepts and methodological guidance when experience alone cannot support a sound explanation.\n\nExperiential activities also have social and practical boundaries. Learners bring different prior experiences, and the same task may feel familiar, inaccessible, or uncomfortable to different participants. Offer alternative roles and representations, explain the purpose, and avoid requiring personal disclosure as evidence of reflection. In professional placements or community projects, real people may be affected by learners' actions. Supervision and appropriate task boundaries are part of the educational design, not obstacles to authentic experience.\n\nAssessment can combine an artifact, a brief account of how evidence changed a decision, and a new situation requiring the same idea. A polished reflective journal alone may show familiarity with expected language rather than improved judgment. Kolb and Kolb's work provides principles for organizing experiential education, while subsequent scholarship debates and refines the model. Use the cycle as a guide to designing connected learning opportunities, then evaluate what learners can explain and do. The central question is whether the next action is better informed by examined experience, rather than whether an activity was memorable or enjoyable.",
    "coreIdeas": [
      "Experience becomes learning through interpretation, conceptual connection, and informed further action.",
      "Kolb’s four learning modes offer a planning framework rather than a rigid sequence or fixed learner classification.",
      "Make the link between attempts visible and assess improved reasoning in a new situation."
    ],
    "educationConnection": "Use a paper-bridge task with explicit predictions, observations, concept discussion, and a controlled redesign; assess what evidence changed each learner’s next decision.",
    "relatedConcepts": [
      "Reflective observation",
      "Active experimentation",
      "Learning from experience"
    ],
    "sourceUrls": [
      {
        "label": "Kolb and Kolb: Learning Styles and Learning Spaces",
        "url": "https://learningfromexperience.com/downloads/research-library/learning-styles-and-learning-spaces.pdf"
      },
      {
        "label": "Kolb and Kolb: Experiential Learning Theory as a Guide for Educators",
        "url": "https://nsuworks.nova.edu/elthe/vol1/iss1/7/"
      },
      {
        "label": "Morris: Experiential Learning, A Systematic Review and Revision of Kolb’s Model",
        "url": "https://doi.org/10.1080/10494820.2019.1570279"
      }
    ]
  }
];
