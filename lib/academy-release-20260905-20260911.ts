import type { AcademyLesson } from "@/lib/types";

export const academyRelease20260905To20260911: AcademyLesson[] = [
  {
    "id": "academy-099",
    "listingIdentifier": "AI Knowledge 50",
    "title": "Decision Trees and Rule-Based Models",
    "slug": "decision-trees-and-rule-based-models",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-05T08:00:00.000Z",
    "image": "/images/academy/covers/academy-099-decision-trees-and-rule-based-models.png",
    "summaryAudio": "/audio/academy/academy-099-decision-trees-and-rule-based-models-summary.m4a",
    "tags": [
      "decision trees",
      "rule-based models",
      "interpretability"
    ],
    "imageAlt": "A computing educator and two adult learners trace a small resource-review decision tree while a learner holds a notebook with a matching diagram.",
    "summaryAudioTitle": "Listen to Decision Trees and Rule-Based Models",
    "shortSummary": "How decision trees turn features into explicit branches, and why a readable rule still needs evidence, boundary checks, and a clear educational purpose.",
    "fullSummary": "A decision tree makes a prediction by following a sequence of tests. Each internal node asks a question about a feature, each branch represents an answer, and a terminal node supplies a predicted class or value. A small tree can be read as a set of if–then rules. This makes its decision path inspectable, although inspectability alone does not establish that the prediction is accurate, fair, or educationally meaningful.\n\nA learned tree and a hand-written rule system have different origins. In a learned tree, an algorithm selects splits from training data according to a criterion such as reduction in impurity or prediction error. In a hand-written system, people specify the rules directly. Both can be useful, but their evidence needs differ. A learned threshold may reflect patterns in a sample; a policy threshold may express an institutional decision. Neither should be presented as a natural law simply because it appears in a clear diagram.\n\nConsider a resource-routing tool that asks whether a lesson includes audio and whether a checked transcript is available. A human-authored rule might route audio without a transcript to an accessibility review queue. The rule is transparent because the relevant condition and action are visible. By contrast, a tree trained to predict teacher ratings might split on resource length or file size. That path describes the model's association with ratings; it does not explain why a resource supports learning or prove that changing its length will improve it.\n\nTree complexity needs control. Repeated splitting can create branches that fit a few unusual training examples and fail on new resources. Limiting depth, requiring enough observations at a leaf, or pruning branches can reduce this risk. A very shallow tree may miss important interactions, so simplicity should be evaluated rather than assumed sufficient. Small changes in data can sometimes produce quite different trees. Testing stability and reviewing borderline cases help reveal how dependable the apparent rules are.\n\nReadable models are valuable because people can challenge their inputs and paths. A teacher can ask whether a missing value was treated sensibly, whether a proxy feature is appropriate, or whether a branch sends some users to a burdensome process. Cynthia Rudin argues for considering inherently interpretable models in consequential decisions rather than relying solely on explanations of opaque models. This is a design argument, not proof that every tree is preferable to every other method. Very large trees can become difficult to understand in practice.\n\nA classroom activity can compare a small hand-written routing tree with a tree learned from synthetic ratings. Learners trace several cases, identify edge conditions, and explain which rules are policies and which are statistical patterns. They then propose independent evaluation cases. The goal is to connect transparency with responsibility: a visible rule makes inspection possible, but the institution still has to justify the target, data, threshold, action, and route for correcting an inappropriate result.",
    "coreIdeas": [
      "Decision trees follow explicit feature tests to a prediction, while hand-written rule systems encode specified conditions and actions.",
      "Readable branches can overfit, change with the sample, or rely on inappropriate proxies.",
      "Distinguish policy rules from learned associations and evaluate both before using their outputs in educational workflows."
    ],
    "educationConnection": "Compare a transcript-review routing rule with a synthetic learned rating tree, trace boundary cases, and identify which decisions require policy justification versus predictive validation.",
    "relatedConcepts": [
      "Rule induction",
      "Tree pruning",
      "Interpretable models"
    ],
    "sourceUrls": [
      {
        "label": "scikit-learn: Decision Trees",
        "url": "https://scikit-learn.org/stable/modules/tree.html"
      },
      {
        "label": "Rudin: Interpretable Models for High-Stakes Decisions",
        "url": "https://arxiv.org/abs/1811.10154"
      }
    ]
  },
  {
    "id": "academy-100",
    "listingIdentifier": "Educational Theory 50",
    "title": "Reflective Practice",
    "slug": "reflective-practice",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-05T08:00:00.000Z",
    "image": "/images/academy/covers/academy-100-reflective-practice.png",
    "summaryAudio": "/audio/academy/academy-100-reflective-practice-summary.m4a",
    "tags": [
      "reflective practice",
      "professional learning",
      "teacher inquiry"
    ],
    "imageAlt": "A South Asian woman teacher and Black and White adult colleagues examine a brief lesson transcript and a few annotated learner responses during a bright reflective planning meeting",
    "summaryAudioTitle": "Listen to Reflective Practice",
    "shortSummary": "How educators can examine a puzzling moment in practice, test their interpretation, and use the inquiry to improve a subsequent decision.",
    "fullSummary": "Reflective practice is the deliberate examination of experience to improve understanding and action. It asks more than whether a lesson went well or badly. A practitioner identifies a puzzling event, considers evidence and alternative explanations, and decides what to try next. Reflection can connect professional knowledge with the uncertainty of real situations, where a standard procedure may not fully explain what is happening.\n\nDonald Schön emphasized reflection-in-action: noticing and responding to an unexpected situation while work is unfolding. Reflection-on-action examines the event afterward, when there is more time to reconstruct decisions and consider other possibilities. John Dewey's account of reflective thought similarly treats inquiry as an examination of the grounds and consequences of a belief. These traditions provide ways to reason about practice; they do not make every personal impression a reliable explanation.\n\nImagine a teacher leading a discussion in which only three learners respond. During the lesson, the teacher notices that questions requiring immediate speech seem to exclude others and introduces a brief written pause before discussion. That is a provisional adjustment within the situation. Afterward, the teacher reviews a few response sheets and notes which questions generated substantive ideas. They consider alternatives: perhaps the issue involved wait time, language demands, unclear prior knowledge, or a classroom norm about who is expected to speak.\n\nA useful reflection separates observation from interpretation. \"Three people answered the first four questions\" is a different statement from \"The class was unmotivated.\" The teacher can invite learner feedback, consult a colleague, and inspect work samples before choosing an explanation. A next lesson might retain the written pause while changing one other feature deliberately. The follow-up asks whether participation and reasoning improved, for whom, and under what conditions. This creates a small cycle of inquiry rather than a retrospective story that merely justifies the original decision.\n\nReflection needs time, trust, and proportionate records. An exhaustive diary after every lesson can become a compliance exercise. A short account of one consequential decision may be more useful if it includes evidence, an alternative interpretation, and a testable next step. Peer discussion can expose blind spots, but observation records and learner comments require appropriate privacy. Staff should not be pressured to disclose personal experiences or perform self-criticism to demonstrate professional commitment.\n\nAssessment of reflective practice should focus on the quality of reasoning and subsequent adjustment, not on how eloquently someone describes feelings. Emotion can signal that something deserves attention, while further evidence helps clarify what it means. AI can help organize notes or suggest questions, but it cannot verify events it did not observe and may generate a convincing explanation without support. The practical aim is disciplined professional curiosity: remain open to being mistaken, examine the situation carefully, and make the next action more informed than the last.",
    "coreIdeas": [
      "Reflective practice investigates a specific puzzle in action rather than merely rating an experience.",
      "Distinguish observations from interpretations and compare plausible explanations with evidence.",
      "Use proportionate records, trusted dialogue, and a subsequent action that tests the revised understanding."
    ],
    "educationConnection": "Analyze uneven participation in a discussion, separate observed turns from assumptions about motivation, and test a supported adjustment in the next lesson.",
    "relatedConcepts": [
      "Reflection-in-action",
      "Professional inquiry",
      "Evidence-informed judgment"
    ],
    "sourceUrls": [
      {
        "label": "Schön: Educating the Reflective Practitioner, ERIC Record",
        "url": "https://eric.ed.gov/?id=ED295518"
      },
      {
        "label": "Dewey: How We Think",
        "url": "https://www.gutenberg.org/ebooks/37423"
      }
    ]
  },
  {
    "id": "academy-101",
    "listingIdentifier": "AI Knowledge 51",
    "title": "Clustering Without Ground-Truth Labels",
    "slug": "clustering-without-ground-truth-labels",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-06T08:00:00.000Z",
    "image": "/images/academy/covers/academy-101-clustering-without-ground-truth-labels.png",
    "summaryAudio": "/audio/academy/academy-101-clustering-without-ground-truth-labels-summary.m4a",
    "tags": [
      "clustering",
      "unsupervised learning",
      "data exploration"
    ],
    "imageAlt": "A White male educator and Black and Latina adult learners sort a small selection of lesson-description cards into alternative groups on a bright table",
    "summaryAudioTitle": "Listen to Clustering Without Ground-Truth Labels",
    "shortSummary": "How algorithms group similar observations without known labels, and why the resulting groups depend on representations, assumptions, and purpose.",
    "fullSummary": "Clustering groups observations according to a chosen notion of similarity without using a known class label for each observation during fitting. It can help explore a collection of resources, identify recurring patterns, or organize a large set of responses for further inspection. A clustering algorithm does not automatically discover the only correct categories in the world. Its result depends on what is measured, how similarity is defined, and which grouping assumptions the method imposes.\n\nK-means, for example, seeks a specified number of groups around centers using a distance-based objective. Hierarchical methods build nested groupings, while density-based methods look for regions with sufficiently concentrated observations. These approaches can produce different answers for the same dataset because they formalize different ideas of a useful group. Christian Hennig's discussion of true clusters emphasizes that clustering goals and context need to be stated rather than hidden behind the algorithm's output.\n\nImagine teachers exploring a library of 60 lesson descriptions. They encode each description with an approved text representation and ask a clustering method for four groups. One group appears to contain laboratory activities, another discussion lessons, and another worked mathematics examples. Inspection reveals that the fourth group mainly contains unusually long descriptions. The result may reflect writing format as much as pedagogy. Naming that group \"advanced learning\" would add an interpretation that the data and method have not established.\n\nA careful exploration checks representative examples, unusual members, and alternative settings. Change the number of groups or the representation and ask which patterns persist. Check whether text length, subject-specific vocabulary, language, or duplicated templates dominate similarity. Scaling numerical features can also change distance-based results. If teachers know the purpose is to improve resource search, they can judge whether the groups help users find relevant material. That practical criterion is more informative than assuming that a mathematically compact grouping is educationally meaningful.\n\nInternal scores such as silhouette measures compare cohesion and separation within the chosen representation. They can help compare some configurations, but they do not validate the interpretation of a cluster. Stability under resampling is useful evidence, yet a stable pattern can still reflect a systematic artifact. External labels, when legitimately available, provide another comparison but may encode their own assumptions. Evaluation should therefore combine quantitative diagnostics with domain inspection and a clear account of intended use.\n\nThe caution becomes especially important when clustering learners. A group in activity data is not a diagnosis, a fixed learning style, or proof of an inherent ability type. Context, opportunity, and measurement choices may produce the pattern. Educators should avoid attaching permanent labels to people on that basis. In a classroom exercise, let learners generate two defensible groupings of the same resource collection and explain the questions each answers. Clustering is most useful as a transparent tool for exploration and hypothesis formation, followed by further evidence where decisions depend on the interpretation.",
    "coreIdeas": [
      "Clustering produces groups relative to a representation, similarity rule, algorithm, and purpose.",
      "Internal fit and stability do not establish that a group has the educational meaning assigned to it.",
      "Inspect examples and alternatives, and avoid treating learner clusters as permanent or diagnostic categories."
    ],
    "educationConnection": "Cluster a fictional resource collection under two representations, inspect whether length or topic drives the groups, and justify which grouping helps a stated search task.",
    "relatedConcepts": [
      "Similarity measures",
      "Cluster validation",
      "Exploratory analysis"
    ],
    "sourceUrls": [
      {
        "label": "scikit-learn: Clustering",
        "url": "https://scikit-learn.org/stable/modules/clustering.html"
      },
      {
        "label": "Hennig: What Are the True Clusters?",
        "url": "https://arxiv.org/abs/1502.02555"
      }
    ]
  },
  {
    "id": "academy-102",
    "listingIdentifier": "Educational Theory 51",
    "title": "Transformative Learning",
    "slug": "transformative-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-06T08:00:00.000Z",
    "image": "/images/academy/covers/academy-102-transformative-learning.png",
    "summaryAudio": "/audio/academy/academy-102-transformative-learning-summary.m4a",
    "tags": [
      "transformative learning",
      "adult education",
      "critical reflection"
    ],
    "imageAlt": "A Black woman professional-learning facilitator and White, South Asian, and East Asian adult teachers compare contrasting classroom participation cases in a calm bright seminar room",
    "summaryAudioTitle": "Listen to Transformative Learning",
    "shortSummary": "How adult learners may revise the assumptions through which they interpret experience, and why educators should support inquiry without prescribing personal transformation.",
    "fullSummary": "Transformative learning concerns changes in the assumptions through which people interpret experience. In Jack Mezirow's account, learners may critically examine a frame of reference, consider alternatives through dialogue, and revise how they understand or act. This is different from simply adding another fact or skill. The focus is on a change in the perspective that organizes those facts and skills, although not every important learning experience needs to be transformative.\n\nAn unexpected event or disagreement can make an assumption visible. A learner may recognize that an interpretation once treated as obvious rests on a partial experience or inherited expectation. Reflection then asks how the assumption developed, what evidence supports it, and whether another account is more adequate. Dialogue provides a way to test reasons with others. The process can involve uncertainty and emotion as well as deliberate argument, and it should not be reduced to a checklist that every adult follows in the same order.\n\nConsider a teacher who interprets quiet classroom participation as a lack of preparation. During a professional-learning activity, several learners describe how they formulate ideas in another language before speaking, and written responses show detailed reasoning. The teacher begins to question the assumption that quick public speech is a reliable sign of engagement. After examining further evidence and discussing alternatives, the teacher changes participation routines and the meaning assigned to silence. The potential transformation concerns the interpretive frame, not merely the addition of a written-response technique.\n\nEducators can support such inquiry with contrasting cases, evidence, reflective prompts, and respectful discussion. Ask participants to distinguish an assumption from an observation and to consider what would challenge their preferred account. Provide time to test a revised perspective in practice. The teacher in the example might inspect whether new routines reveal reasoning previously overlooked, rather than declare a completed transformation after one moving conversation. Change in expressed belief and change in sustained action are different forms of evidence.\n\nPower and culture complicate the process. A facilitator's preferred perspective should not become the required destination. Learners may reasonably disagree, retain an assumption after examination, or choose not to disclose personal experiences. Publicly demanding a disorienting experience or a confession of changed beliefs can be coercive. Critical reviews of transformative-learning research discuss the influence of context, relationships, and forms of knowing that a narrowly individual or purely rational account may understate. Respect for agency is therefore part of the method, not an optional courtesy.\n\nAssessment should examine the quality of inquiry, the handling of evidence, and the reasons for any revised action. It should not grade learners on adopting the educator's identity or worldview. Transformative learning is a useful lens for understanding substantial changes in meaning, especially in adult education. Its contribution is to make assumptions available for examination while recognizing that change is situated, sometimes gradual, and never fully captured by a declaration that someone has been transformed.",
    "coreIdeas": [
      "Transformative learning concerns revision of an interpretive frame rather than only acquisition of additional information.",
      "Critical reflection, dialogue, experience, and action can expose and test assumptions.",
      "Support agency and contextual understanding; do not require a prescribed worldview or personal disclosure as evidence of learning."
    ],
    "educationConnection": "Examine the assumption that quick public speech signals engagement, compare learner accounts with written evidence, and justify any revised participation practice.",
    "relatedConcepts": [
      "Frames of reference",
      "Critical reflection",
      "Perspective transformation"
    ],
    "sourceUrls": [
      {
        "label": "Mezirow: Transformative Learning, Theory to Practice",
        "url": "https://files.su.ac.za/public/documents/2025-09/mezirow1997.pdf"
      },
      {
        "label": "Taylor: A Critical Review of Transformative Learning Research",
        "url": "https://eric.ed.gov/?id=EJ764361"
      }
    ]
  },
  {
    "id": "academy-103",
    "listingIdentifier": "AI Knowledge 52",
    "title": "Dimensionality Reduction and Visualization",
    "slug": "dimensionality-reduction-and-visualization",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-07T08:00:00.000Z",
    "image": "/images/academy/covers/academy-103-dimensionality-reduction-and-visualization.png",
    "summaryAudio": "/audio/academy/academy-103-dimensionality-reduction-and-visualization-summary.m4a",
    "tags": [
      "dimensionality reduction",
      "PCA",
      "data visualization"
    ],
    "imageAlt": "An educator explains a diagram mapping six resource symbols from three axes to a two-axis view while two learners follow.",
    "summaryAudioTitle": "Listen to Dimensionality Reduction and Visualization",
    "shortSummary": "How high-dimensional data become a two-dimensional picture, and why the picture’s distances, groups, and axes require careful interpretation.",
    "fullSummary": "Dimensionality reduction represents data using fewer coordinates than the original description. It can make patterns easier to inspect or reduce the complexity of later computation. An educational resource might initially be represented by hundreds of numerical features, while a visualization shows only two. The reduction necessarily selects some relationships to preserve and sacrifices others. A clear picture is therefore an interpretation produced by a method, not a transparent window into the original data.\n\nPrincipal component analysis, or PCA, constructs linear directions that capture variation in the data. The first component captures the greatest available variance; later components capture additional variance under an orthogonality constraint. These directions are combinations of the original features, not automatically meaningful educational constructs. A component might largely reflect document length or a measurement scale. Centering, scaling, and the choice of features affect the result, so an axis should not be labeled \"understanding\" merely because it separates some observations.\n\nMethods such as t-SNE emphasize local relationships in a different way. They can reveal neighborhoods in a complex representation, but distances between far-apart groups and the apparent sizes of groups may be misleading. The original t-SNE paper and Wattenberg and colleagues' interactive analysis show why settings and interpretation matter. Running the method with different choices can produce visibly different arrangements. A compelling map is not evidence that the data contain discrete natural types.\n\nImagine teachers exploring 80 lesson descriptions. A two-dimensional map places several laboratory lessons near one another. Clicking a few examples reveals shared vocabulary about equipment, but some similarly relevant lessons are farther away because they use different wording. The teachers should inspect the original text and high-dimensional similarity before treating distance on the display as a recommendation rule. If the map was built with t-SNE, a large gap between two groups is not a reliable measurement of how educationally different they are.\n\nA responsible visualization states the representation, reduction method, settings, and intended use. For PCA, report how much variation the displayed components capture and inspect their feature contributions. For nonlinear maps, compare multiple runs or settings and examine neighborhood stability. If dimensionality reduction feeds a predictive model, fit it only within the training data during evaluation. Otherwise, information from held-out observations can leak into development even though the transformation did not use their labels.\n\nEducators can compare two maps of the same fictional resource collection and identify conclusions that survive both. Ask which claims require returning to the original examples and which cannot be established from a map at all. Avoid labeling learners by clusters in a reduced plot. The useful role of dimensionality reduction is to support questions, inspection, and communication while making its distortions visible. A good visualization helps viewers know what they are seeing, what has been compressed, and what further evidence is needed before acting on the apparent pattern.",
    "coreIdeas": [
      "Dimensionality reduction preserves selected relationships while discarding information.",
      "PCA variance directions and nonlinear neighborhood maps require different interpretations.",
      "Inspect original examples, settings, stability, and possible leakage before treating a visual pattern as evidence for a decision."
    ],
    "educationConnection": "Compare PCA and neighborhood maps of fictional lesson descriptions, inspect representative texts, and distinguish exploratory observations from unsupported claims about distance or learner types.",
    "relatedConcepts": [
      "Principal components",
      "t-SNE",
      "Representation geometry"
    ],
    "sourceUrls": [
      {
        "label": "scikit-learn: Principal Component Analysis and Decomposition",
        "url": "https://scikit-learn.org/stable/modules/decomposition.html"
      },
      {
        "label": "Van der Maaten and Hinton: Visualizing Data Using t-SNE",
        "url": "https://jmlr.org/papers/v9/vandermaaten08a.html"
      },
      {
        "label": "Wattenberg, Viégas, and Johnson: How to Use t-SNE Effectively",
        "url": "https://distill.pub/2016/misread-tsne/"
      }
    ]
  },
  {
    "id": "academy-104",
    "listingIdentifier": "Educational Theory 52",
    "title": "Andragogy and Adult Learning",
    "slug": "andragogy-and-adult-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-07T08:00:00.000Z",
    "image": "/images/academy/covers/academy-104-andragogy-and-adult-learning.png",
    "summaryAudio": "/audio/academy/academy-104-andragogy-and-adult-learning-summary.m4a",
    "tags": [
      "andragogy",
      "adult learning",
      "learner experience"
    ],
    "imageAlt": "A Black woman adult educator and White, South Asian, and East Asian adult learners turn a few annotated local-history record cards into a simple digital catalogue in a bright community classroom",
    "summaryAudioTitle": "Listen to Andragogy and Adult Learning",
    "shortSummary": "How adult-learning principles can guide relevance, participation, and support without assuming that every adult learns in the same way.",
    "fullSummary": "Andragogy is associated with approaches to helping adults learn, especially Malcolm Knowles's account of adult learners' experience, self-direction, readiness, and orientation toward meaningful problems. It encourages educators to explain why learning matters, connect with prior experience, and involve learners in planning and evaluation. These are useful design considerations, but they should not be treated as universal facts about every adult or as principles that never apply to children.\n\nAdults bring histories of work, family, community participation, and previous schooling. Those experiences can supply examples, practical knowledge, and reasons to learn. They can also contain habits or misconceptions that need examination. Self-direction varies by subject and situation: an experienced professional may need explicit guidance when learning an unfamiliar digital tool. Readiness depends on more than motivation, including time, confidence, access, and whether a task connects with an immediate or longer-term purpose.\n\nImagine a community course on creating a digital local-history catalogue. Learners bring different kinds of knowledge: one understands the archive's handwritten records, another knows spreadsheet formulas, and another is familiar with the community's naming conventions. The instructor begins with a shared problem—making records searchable—then asks participants what they need the catalogue to do. This establishes relevance while revealing expertise that a standard introductory lecture might overlook. It also exposes differing assumptions about dates, categories, and acceptable evidence.\n\nThe course still needs structured teaching. A brief demonstration can show how to separate a date field from a descriptive note, followed by supported practice on fictional records. Learners who already know the operation can test a more complex case, while beginners receive a clearer sequence and time to ask questions. Participants help choose useful examples and review the resulting catalogue, but the instructor remains responsible for technical accuracy and accessible materials. Participation in planning does not mean that everyone must discover each procedure independently.\n\nAndragogy is best used as a set of questions about fit. What experience can learners use? Which assumptions need checking? What choices are meaningful? What support would make those choices usable? Merriam's discussion of andragogy and self-directed learning examines both their influence and their limitations as accounts of adult learning. Culture, institutional power, compulsory participation, and unequal resources complicate a simple story of autonomous adults pursuing freely chosen goals. A respectful course acknowledges those conditions rather than attributing every difficulty to motivation.\n\nAssessment can let learners demonstrate the required capability through a relevant task while keeping criteria transparent. In the catalogue example, they might explain a data-cleaning decision, repair an unfamiliar record, and identify a limitation in the finished search system. Offer flexible ways to participate where possible, without weakening the intended standard. Adult-learning principles are most useful when they help educators recognize experience and agency alongside real support needs. The aim is a purposeful learning relationship that adapts to actual participants rather than an idealized image of the independent adult learner.",
    "coreIdeas": [
      "Andragogy emphasizes adult experience, relevance, participation, and growing self-direction as design considerations.",
      "Adults differ in expertise, readiness, culture, resources, and need for explicit support.",
      "Negotiate meaningful choices while retaining clear criteria, accurate instruction, and accessible routes to the required capability."
    ],
    "educationConnection": "Design a local-history catalogue workshop that draws on participants’ experience, offers supported technical practice, and assesses an unfamiliar record-cleaning task.",
    "relatedConcepts": [
      "Prior experience",
      "Self-directed learning",
      "Problem-centered education"
    ],
    "sourceUrls": [
      {
        "label": "Knowles: The Modern Practice of Adult Education, Andragogy Chapter",
        "url": "https://www.colllearning.info/wp-content/uploads/2019/03/The-Modern-Practice-of-Adult-Education.pdf"
      },
      {
        "label": "Merriam: Andragogy and Self-Directed Learning, Pillars of Adult Learning Theory",
        "url": "https://doi.org/10.1002/ace.3"
      }
    ]
  },
  {
    "id": "academy-105",
    "listingIdentifier": "AI Knowledge 53",
    "title": "Gradient Descent and Optimization",
    "slug": "gradient-descent-and-optimization",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-08T08:00:00.000Z",
    "image": "/images/academy/covers/academy-105-gradient-descent-and-optimization.png",
    "summaryAudio": "/audio/academy/academy-105-gradient-descent-and-optimization-summary.m4a",
    "tags": [
      "gradient descent",
      "optimization",
      "model training"
    ],
    "imageAlt": "A White male mathematics educator and Black and East Asian adult learners trace two large step arrows on a simple bowl-shaped loss curve in a bright classroom",
    "summaryAudioTitle": "Listen to Gradient Descent and Optimization",
    "shortSummary": "How a model’s parameters are adjusted to reduce a chosen loss, and why successful optimization is only one part of building useful educational AI.",
    "fullSummary": "Gradient descent is an optimization method that repeatedly adjusts parameters in a direction expected to reduce a function. In machine learning, that function is often a loss measuring how poorly the model's predictions match a training objective. The gradient describes how the loss changes with small changes in each parameter. Moving a suitable distance in the opposite direction can reduce the loss locally. This is a numerical procedure, not evidence that the model understands the educational task.\n\nA one-parameter example makes the update visible. Suppose the loss is the square of the difference between a parameter w and the target value three. Starting at w equal to zero, the loss is nine and the gradient is minus six. With a learning rate of 0.1, subtracting the learning rate times the gradient moves w to 0.6. The new loss is 5.76. This toy calculation illustrates one step toward a minimum; real models may have millions or billions of interacting parameters.\n\nThe learning rate controls step size. Very small steps can make progress slow, while overly large steps can overshoot or make the loss increase. The local direction is useful only together with an appropriate step. Training procedures may change the rate over time or use optimizers that adapt updates based on previous gradients. Momentum, for example, uses accumulated directional information. These choices affect numerical behavior, and no setting is best for every model and dataset.\n\nComputing a gradient over all training examples can be expensive. Stochastic and mini-batch methods estimate updates using one example or a subset at a time. Their losses may fluctuate even while the overall training process improves. A teacher viewing a training chart should therefore distinguish an individual noisy step from a persistent problem. Data order, initialization, batch size, and optimizer settings can all influence the path. Reproducibility requires recording those choices alongside the model and data version.\n\nOptimization and generalization are different goals. A model can keep reducing its training loss while becoming less reliable on new examples. Validation data help decide when additional fitting is no longer useful. The chosen loss also matters: an optimizer can become excellent at the wrong target, such as reproducing biased labels or rewarding a superficial feature of student writing. It does not decide whether the training objective represents worthwhile learning or whether its predictions should guide a consequential action.\n\nLearners can explore the toy function by calculating several updates with different learning rates and plotting their paths on a simple curve. Ask when the loss falls, when it overshoots, and what information the gradient supplies. Then connect the exercise to a model-training report that includes both training and validation results. Gradient descent explains how parameter adjustment can occur, while leaving separate questions about data quality, task validity, fairness, and educational benefit. Understanding those boundaries helps educators interpret technical progress without mistaking lower loss for a complete evaluation.",
    "coreIdeas": [
      "Gradient descent uses local slope information and a learning rate to update parameters toward lower loss.",
      "Step size, batching, initialization, and optimizer choices affect the training path.",
      "Lower training loss does not establish generalization, a valid educational objective, or beneficial use."
    ],
    "educationConnection": "Calculate updates for the squared distance from three using two learning rates, plot the paths, and distinguish optimization progress from independent validation.",
    "relatedConcepts": [
      "Gradients",
      "Learning rates",
      "Stochastic optimization"
    ],
    "sourceUrls": [
      {
        "label": "Dive into Deep Learning: Gradient Descent",
        "url": "https://d2l.ai/chapter_optimization/gd.html"
      },
      {
        "label": "Ruder: An Overview of Gradient Descent Optimization Algorithms",
        "url": "https://arxiv.org/abs/1609.04747"
      }
    ]
  },
  {
    "id": "academy-106",
    "listingIdentifier": "Educational Theory 53",
    "title": "Heutagogy and Self-Determined Learning",
    "slug": "heutagogy-and-self-determined-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-08T08:00:00.000Z",
    "image": "/images/academy/covers/academy-106-heutagogy-and-self-determined-learning.png",
    "summaryAudio": "/audio/academy/academy-106-heutagogy-and-self-determined-learning-summary.m4a",
    "tags": [
      "heutagogy",
      "self-determined learning",
      "learner capability"
    ],
    "imageAlt": "A facilitator and three adult learners revise a park route map and audio-guide storyboard in an outdoor pavilion.",
    "summaryAudioTitle": "Listen to Heutagogy and Self-Determined Learning",
    "shortSummary": "How learners can help determine what they need to learn and how to demonstrate it, while educators provide the structure and support that make this responsibility usable.",
    "fullSummary": "Heutagogy is an approach to self-determined learning associated with Stewart Hase and Chris Kenyon. It extends the learner's role beyond choosing how to complete a prescribed task. Learners help define what they need to learn, identify resources, shape their pathway, and negotiate evidence of progress. The educator remains a facilitator and source of expertise. Giving learners responsibility is meaningful only when they have the support and opportunity to exercise it.\n\nThe approach often distinguishes competence in familiar tasks from capability in unfamiliar situations. A capable learner can adapt knowledge, locate new resources, collaborate, and reflect on how to learn when the problem changes. Heutagogical accounts also discuss examining assumptions about the learning process itself, sometimes described as double-loop learning. This is more demanding than following an individualized sequence chosen entirely by software. Personalization by an algorithm does not necessarily give a learner authority over goals or criteria.\n\nImagine an adult learner who wants to create an accessible audio guide for a local park. With an educator, they identify initial goals involving clear explanation, recording, and user testing. During feedback, they discover that visitors also need a simple route diagram and an alternative to audio. The learner revises the project and seeks expertise in accessible information design. The educational value lies partly in recognizing that the original problem definition was incomplete and deciding what must now be learned.\n\nA workable agreement can specify the broad purpose, constraints, available support, and evidence required, while leaving room to revise the pathway. Short check-ins help the learner explain choices and request assistance. A portfolio can show drafts, feedback, changed assumptions, and a demonstration in a new context. The educator may still require a minimum standard for accuracy or accessibility. Negotiating learning does not mean that every criterion is optional, especially where professional responsibilities or other people's welfare are involved.\n\nReadiness varies. Some learners need explicit models for setting goals, finding trustworthy sources, or evaluating their own work. Others face limited time, connectivity, language support, or access to knowledgeable peers. Simply removing instruction can transfer burden to the learner and deepen inequality. Blaschke's review presents heutagogy as a developing approach with examples of practice; it should not be treated as settled evidence that maximum autonomy is best for everyone. Appropriate support can be gradually adjusted rather than withdrawn as a matter of principle.\n\nTeachers can begin with a bounded project in which learners choose a meaningful question and propose evidence of success. Review both the artifact and the reasoning behind changes to the learning plan. Ask what the learner would do if the context changed again. Heutagogy is most useful as a way to examine who controls learning decisions and how people develop the capacity to make those decisions well. Its success depends on informed agency, accessible resources, and accountable support, rather than on the absence of teaching.",
    "coreIdeas": [
      "Heutagogy gives learners a role in defining goals, pathways, and evidence, beyond selecting steps in a preset course.",
      "Capability includes adapting knowledge and learning strategies when the situation changes.",
      "Self-determination needs negotiated standards, resources, feedback, and support matched to readiness and access."
    ],
    "educationConnection": "Use an accessible park-guide project in which learners revise their goals after user feedback and document what new knowledge and support the revision required.",
    "relatedConcepts": [
      "Learner-defined goals",
      "Capability development",
      "Double-loop learning"
    ],
    "sourceUrls": [
      {
        "label": "Hase and Kenyon: From Andragogy to Heutagogy",
        "url": "https://www.researchgate.net/publication/301339522_From_andragogy_to_heutagogy"
      },
      {
        "label": "Blaschke: Heutagogy and Lifelong Learning",
        "url": "https://www.irrodl.org/index.php/irrodl/article/view/1076/2087"
      }
    ]
  },
  {
    "id": "academy-107",
    "listingIdentifier": "AI Knowledge 54",
    "title": "Loss Functions and Learning Objectives",
    "slug": "loss-functions-and-learning-objectives",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-09T08:00:00.000Z",
    "image": "/images/academy/covers/academy-107-loss-functions-and-learning-objectives.png",
    "summaryAudio": "/audio/academy/academy-107-loss-functions-and-learning-objectives-summary.m4a",
    "tags": [
      "loss functions",
      "training objectives",
      "educational alignment"
    ],
    "imageAlt": "An educator and two adult learners compare a V-shaped and a U-shaped penalty curve beside a simple annotated rubric.",
    "summaryAudioTitle": "Listen to Loss Functions and Learning Objectives",
    "shortSummary": "How a loss function defines what a model is rewarded for improving, and why that mathematical objective may differ from the learning outcome educators value.",
    "fullSummary": "A loss function assigns a numerical penalty to a model's prediction. Training then adjusts parameters to reduce that penalty across examples. The choice of loss shapes which errors matter most and what the system is encouraged to learn. An educational learning objective, such as explaining a concept independently, is a different kind of objective. The two can be connected, but they should never be assumed equivalent merely because both use the word learning.\n\nFor numerical predictions, absolute error measures the size of a mistake, while squared error penalizes large mistakes more strongly. If two predictions miss by two and ten units, their absolute errors are two and ten, but their squared errors are four and one hundred. This difference can change the fitted model. Neither choice is automatically correct: the decision depends on the meaning of the units, the reliability of unusual observations, and the consequences of large errors.\n\nFor classification, cross-entropy penalizes a model for assigning low probability to the observed class. A confidently wrong prediction can receive a much larger penalty than a cautious one. Weighted losses can emphasize selected classes or cases, while additional penalty terms can discourage overly complex solutions. These are mathematical design choices. They do not resolve whether the reference labels are valid, whether some cases deserve greater weight, or whether optimizing the measure improves the actual educational service.\n\nImagine a model trained to imitate rubric scores on short explanations. Reducing score-prediction loss may improve agreement with the training raters. Yet the model could rely on vocabulary or length instead of the quality of reasoning. If the raters' judgments are inconsistent, the model learns from that uncertainty as well. A system may perform well on its loss while giving unhelpful feedback or disadvantaging a particular writing style. The training target is an operational proxy, and educators need to inspect what it captures and omits.\n\nEvaluation should include outcomes outside the training objective. For the explanation model, examine errors by rubric dimension, inspect feedback usefulness, and test whether learners improve on an independent task. Compare performance on new prompts and relevant learner groups. Keep validation and final evaluation separate from optimization. A lower loss on development data is informative about that objective and dataset; it is not a complete claim about learning, fairness, or suitability for decisions that affect students.\n\nA classroom exercise can ask learners to choose between absolute and squared error for fictional resource-duration estimates, then justify the consequences of each choice. A second exercise asks what would be missed if a writing tutor optimized only rubric-score agreement. These comparisons make the hidden priorities of model training visible. A well-chosen loss is necessary for many successful systems, but it remains one component of a broader design. The people responsible for educational AI must connect the mathematical target to a defensible purpose and verify that important outcomes were not sacrificed along the way.",
    "coreIdeas": [
      "A loss function specifies the penalty that optimization tries to reduce.",
      "Different losses weight mistakes differently and can produce different fitted behavior.",
      "Educational goals require additional validity and outcome checks because training losses are proxies, not learning itself."
    ],
    "educationConnection": "Compare absolute and squared error on fictional duration estimates, then audit what a rubric-score imitation objective would omit from a useful writing tutor.",
    "relatedConcepts": [
      "Cross-entropy",
      "Proxy objectives",
      "Construct validity"
    ],
    "sourceUrls": [
      {
        "label": "Google Machine Learning Crash Course: Linear Regression Loss",
        "url": "https://developers.google.com/machine-learning/crash-course/linear-regression/loss"
      },
      {
        "label": "Dive into Deep Learning: Softmax Regression",
        "url": "https://d2l.ai/chapter_linear-classification/softmax-regression.html"
      }
    ]
  },
  {
    "id": "academy-108",
    "listingIdentifier": "Educational Theory 54",
    "title": "Cognitive Flexibility Theory",
    "slug": "cognitive-flexibility-theory",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-09T08:00:00.000Z",
    "image": "/images/academy/covers/academy-108-cognitive-flexibility-theory.png",
    "summaryAudio": "/audio/academy/academy-108-cognitive-flexibility-theory-summary.m4a",
    "tags": [
      "cognitive flexibility theory",
      "case-based learning",
      "advanced understanding"
    ],
    "imageAlt": "A White woman teacher educator and Black and South Asian adult teachers compare three annotated classroom case cards connected to a few broad concept labels on a bright board",
    "summaryAudioTitle": "Listen to Cognitive Flexibility Theory",
    "shortSummary": "How revisiting complex cases through different concepts can help learners adapt knowledge, and why the approach requires more than a collection of hyperlinks.",
    "fullSummary": "Cognitive flexibility theory addresses advanced learning in domains where cases are complex and cannot be handled adequately by one simple rule. Associated with Rand Spiro and colleagues, it emphasizes revisiting cases from different conceptual perspectives and assembling relevant knowledge for a new situation. The aim is flexible application rather than a single compressed account that hides important variation. This use of cognitive flexibility is a learning theory, not merely a label for being open-minded.\n\nThe problem arises when introductory simplifications become rigid. A learner may know a useful principle but apply it everywhere as if context never changed. In an ill-structured domain, several concepts may interact, and the same feature can matter differently across cases. The theory proposes that multiple representations and deliberate comparisons can help learners notice these interactions. It does not imply that all subjects lack reliable rules or that beginners should be exposed to unlimited complexity before gaining foundational knowledge.\n\nConsider teachers studying classroom participation. One case involves limited speaking confidence, another involves a question that assumes missing background knowledge, and a third involves a peer norm that discourages disagreement. All three show little public talk, but the appropriate response differs. A case collection can let teachers revisit each situation through language, task design, social relationships, and evidence of understanding. The goal is to resist a single explanation, such as low motivation, while still making a justified decision.\n\nThe educator should organize the comparisons. Ask what changes when the same case is viewed through another concept, which evidence supports that view, and which features distinguish two superficially similar cases. Short case segments can focus attention on a critical interaction before the whole situation is reconsidered. Learners can then propose an intervention and explain why an approach useful in one case might be inappropriate in another. This makes the assembly of knowledge visible rather than leaving it to chance navigation.\n\nHypertext environments were an important setting for research on this theory because linked materials allow multiple routes through cases and concepts. However, adding links does not itself produce flexible understanding. Learners can become lost, skim without comparison, or collect disconnected facts. Jacobson and Spiro investigated learning environments designed around these principles; the lesson from that work is to align navigation with intellectual tasks. Teachers still need clear goals, prerequisite support, and feedback on the quality of interpretations.\n\nAssessment should include a new, sufficiently rich case that cannot be solved by repeating a familiar example word for word. Ask learners to identify relevant concepts, explain their interaction, consider alternatives, and justify an action. Acknowledging complexity should not become an excuse for vague conclusions. Cognitive flexibility theory offers a way to preserve important detail while supporting transfer in demanding domains. Its value depends on purposeful case design and evidence that learners can use several perspectives coherently, rather than simply state that every situation is different.",
    "coreIdeas": [
      "Cognitive flexibility theory targets advanced knowledge use in complex, ill-structured domains.",
      "Revisit cases through multiple concepts and compare how context changes the relevance of a principle.",
      "Use guided comparisons and new-case assessment; hyperlinks and complexity alone do not produce flexible understanding."
    ],
    "educationConnection": "Compare three cases of limited classroom talk through language, task, and social perspectives, then justify a different response for a new case.",
    "relatedConcepts": [
      "Case-based learning",
      "Multiple representations",
      "Adaptive transfer"
    ],
    "sourceUrls": [
      {
        "label": "Spiro and colleagues: Cognitive Flexibility Theory",
        "url": "https://files.eric.ed.gov/fulltext/ED302821.pdf"
      },
      {
        "label": "Jacobson and Spiro: Hypertext Learning Environments and Transfer of Complex Knowledge",
        "url": "https://files.eric.ed.gov/fulltext/ED355508.pdf"
      }
    ]
  },
  {
    "id": "academy-109",
    "listingIdentifier": "AI Knowledge 55",
    "title": "Self-Supervised Learning",
    "slug": "self-supervised-learning",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-10T08:00:00.000Z",
    "image": "/images/academy/covers/academy-109-self-supervised-learning.png",
    "summaryAudio": "/audio/academy/academy-109-self-supervised-learning-summary.m4a",
    "tags": [
      "self-supervised learning",
      "pretraining",
      "representation learning"
    ],
    "imageAlt": "A teacher and two learners infer missing parts from a masked plant photograph and an incomplete four-panel picture sequence.",
    "summaryAudioTitle": "Listen to Self-Supervised Learning",
    "shortSummary": "How models create training targets from the structure of existing data, and why learning from unlabelled material still depends on human choices and independent evaluation.",
    "fullSummary": "Self-supervised learning creates a training signal from the data itself rather than requiring a person to label every example for the immediate task. A system might hide part of a sentence and predict the missing text, predict a later part of a sequence, or reconstruct missing image patches. The original data supply targets against which predictions can be compared. The term does not mean that the system learns without an objective, a dataset, or human design choices.\n\nThis approach is useful because large collections often exist without labels for the eventual application. Pretraining can develop representations that are later adapted to a smaller labeled dataset or another task. BERT uses masked-language modeling as an important pretraining objective. Masked autoencoders study reconstruction of hidden image patches, while wav2vec 2.0 learns speech representations through a different self-supervised task. These examples illustrate a family of methods, not one universal training recipe.\n\nConsider a small classroom demonstration using teacher-written science sentences. In the original sentence, \"The plant absorbs water through its roots,\" the word water is hidden. The original text supplies a target, so a training system can compare its prediction with that word. Learners should notice a limitation: another completion may be linguistically plausible, and predicting the original word is not the same as establishing a complete scientific explanation. The objective rewards a particular relationship in the data, not all aspects of conceptual understanding.\n\nA model trained on many such tasks may learn patterns useful for classifying or retrieving text, but usefulness must be tested. For an educational application, a team might adapt a pretrained representation to organize approved resources and compare it with a simpler baseline. The relevant evaluation should use new resources and the languages, subjects, and formats that the school actually needs. Strong pretraining results on a public benchmark do not establish that the local application improves teaching or supports learners equitably.\n\nUnlabelled data are not automatically neutral or free to use. People created the text, recordings, and images, and choices about collection, filtering, duplication, and representation shape what the model learns. Personal information, restricted materials, and biased patterns can remain present even when no task label has been added. Self-supervision also does not eliminate the need for labeled evaluation data. Without a trustworthy way to judge the final task, it is difficult to know whether the learned representation serves its intended purpose.\n\nEducators can make the mechanism visible by asking learners to design three hidden-information tasks and identify the target available in each. They then consider which features a model could exploit without learning the concept the teacher cares about. This encourages a precise distinction between data-derived supervision and educational understanding. Self-supervised learning can reduce dependence on manually labeled training examples for some tasks, while leaving open questions about data rights, representation quality, transfer, and the evidence needed before using the resulting system in an educational setting.",
    "coreIdeas": [
      "Self-supervision derives training targets from existing data through tasks such as masking, prediction, or reconstruction.",
      "Pretraining can support later tasks, but target-task usefulness requires independent evaluation.",
      "Unlabelled data still embody human choices, biases, and rights; self-supervision does not remove those responsibilities."
    ],
    "educationConnection": "Design masked-text and missing-image tasks using teacher-created material, identify each training target, and explain why success on that target does not prove conceptual understanding.",
    "relatedConcepts": [
      "Masked prediction",
      "Pretraining",
      "Transfer learning"
    ],
    "sourceUrls": [
      {
        "label": "Devlin and colleagues: BERT",
        "url": "https://arxiv.org/abs/1810.04805"
      },
      {
        "label": "He and colleagues: Masked Autoencoders Are Scalable Vision Learners",
        "url": "https://arxiv.org/abs/2111.06377"
      },
      {
        "label": "Baevski and colleagues: wav2vec 2.0",
        "url": "https://arxiv.org/abs/2006.11477"
      }
    ]
  },
  {
    "id": "academy-110",
    "listingIdentifier": "Educational Theory 55",
    "title": "Variation Theory",
    "slug": "variation-theory",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-10T08:00:00.000Z",
    "image": "/images/academy/covers/academy-110-variation-theory.png",
    "summaryAudio": "/audio/academy/academy-110-variation-theory-summary.m4a",
    "tags": [
      "variation theory",
      "critical features",
      "mathematics teaching"
    ],
    "imageAlt": "An East Asian woman mathematics teacher and Black and White adult learners compare two pairs of straight-line graphs, with one visual feature changing at a time, on a bright classroom board",
    "summaryAudioTitle": "Listen to Variation Theory",
    "shortSummary": "How deliberately changing one aspect while holding others steady can help learners notice what matters, and why the teacher’s intended contrast must be checked against learners’ experience.",
    "fullSummary": "Variation Theory examines how learners come to discern important aspects of an object of learning. Associated with Ference Marton and colleagues, it proposes that experiencing relevant differences against a stable background can make a feature noticeable. The object of learning is the capability or understanding being developed, such as recognizing what determines a line's slope. The theory concerns the structure of learners' experience, not simply providing a large variety of activities.\n\nA critical aspect is something learners need to notice to develop the intended understanding. Which aspects are critical depends partly on what learners already discern. A teacher may assume that everyone distinguishes steepness from vertical position, while some learners interpret a higher line as necessarily steeper. Before designing examples, the teacher needs evidence of those interpretations. A contrast that is obvious to an expert may be invisible or confusing to a novice.\n\nConsider two lines with equations y = 2x + 1 and y = 4x + 1. Their vertical intercept stays the same while the coefficient of x changes. Learners compare the graphs and explain what changed. Next, compare y = 2x + 1 with y = 2x + 3: the slope remains the same while the vertical position changes. These carefully chosen contrasts can help separate two aspects that varied together in earlier examples. The teacher asks learners to predict a new graph before displaying it.\n\nLater examples can vary previously fixed features while preserving the relationship that defines the concept. Eventually, learners need to coordinate several aspects at once. This progression is purposeful: separate a feature so it can be noticed, explore its relevance across contexts, and then consider interacting features together. However, the teacher should not follow a rigid sequence regardless of learner responses. If a comparison produces an unexpected interpretation, that evidence should inform the next example or explanation.\n\nResearch by Marton and Pang tests a particular conjecture about variation and invariance, while learning-study work by Pang and Lo connects theory-guided lesson design with teacher investigation. These studies support examining how examples are organized, but they do not prove that any set of contrasting examples will produce the intended learning. Learners may attend to color, wording, or another irrelevant difference. Clear representations, discussion, and opportunities to explain remain important, as does access to the examples through suitable formats.\n\nA practical assessment asks learners to create their own pair of examples: one that changes slope while keeping intercept fixed, and one that changes intercept while keeping slope fixed. They explain why each pair serves its purpose and identify a misleading comparison. The teacher then checks a less familiar case. Variation Theory helps educators move from \"show more examples\" to a sharper question: what must change, what must remain stable, and what evidence will show that learners noticed the relationship the lesson was designed to reveal?",
    "coreIdeas": [
      "Variation Theory connects discernment with purposeful patterns of difference and invariance.",
      "Critical aspects depend on learners’ current understanding, so example design needs diagnostic evidence.",
      "Check what learners actually notice and coordinate, rather than assuming the intended contrast was experienced."
    ],
    "educationConnection": "Contrast line equations with a fixed intercept and changing slope, then reverse the pattern and ask learners to design their own diagnostic example pairs.",
    "relatedConcepts": [
      "Discernment",
      "Object of learning",
      "Learning study"
    ],
    "sourceUrls": [
      {
        "label": "Marton and Pang: Testing a Conjecture About Variation and Invariance",
        "url": "https://frontlinelearningresearch.org/index.php/journal/article/view/16"
      },
      {
        "label": "Pang and Lo: Learning Study and Theory-Guided Teacher Development",
        "url": "https://hub.hku.hk/bitstream/10722/144941/3/content.pdf?accept=1"
      },
      {
        "label": "Lo: Variation Theory and the Improvement of Teaching and Learning",
        "url": "https://repository.eduhk.hk/en/publications/variation-theory-and-the-improvement-of-teaching-and-learning-3/"
      }
    ]
  },
  {
    "id": "academy-111",
    "listingIdentifier": "AI Knowledge 56",
    "title": "Contrastive Learning",
    "slug": "contrastive-learning",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-11T08:00:00.000Z",
    "image": "/images/academy/covers/academy-111-contrastive-learning.png",
    "summaryAudio": "/audio/academy/academy-111-contrastive-learning-summary.m4a",
    "tags": [
      "contrastive learning",
      "representation learning",
      "similarity"
    ],
    "imageAlt": "A South Asian male computing teacher and Black and White adult learners compare a few paired educational diagrams and one carefully cropped example on a bright classroom table",
    "summaryAudioTitle": "Listen to Contrastive Learning",
    "shortSummary": "How models learn representations by comparing related and contrasting examples, and why the choice of pairs defines which differences the model learns to ignore.",
    "fullSummary": "Contrastive learning trains a representation by comparing examples. In a common setup, representations of related examples are encouraged to become more similar, while contrasting examples are separated. The model learns a space in which selected relationships are easier to recognize. The crucial design choice is what counts as related and what counts as different. Those choices express assumptions about the task rather than revealing an objective definition of similarity.\n\nSimCLR provides a well-known visual example. It creates two transformed views of an image and trains the model to recognize their relationship relative to other images. Its research shows that the composition of transformations matters for the resulting representation. Other contrastive systems connect different modalities. CLIP, for example, learns from image–text pairs by matching images with associated descriptions. These approaches share a comparative training idea while using different data, objectives, and assumptions.\n\nImagine a teacher building a search tool for approved classroom diagrams. Two photographs of the same diagram taken under different lighting could form a useful positive pair if lighting is irrelevant to the search goal. A photograph paired with its checked caption could support cross-modal retrieval. But cropping a diagram so that a crucial label disappears may change its meaning. Treating the crop as equivalent would teach the model to ignore information that the teacher needs it to preserve. More aggressive transformation is not automatically better.\n\nNegative examples also require care. Two diagrams of equivalent fractions may come from different files but represent the same mathematical relationship. Treating them as unrelated simply because their file identities differ can create a false negative in a basic contrastive setup. Conversely, nearly identical-looking diagrams can express different ideas when one sign or label changes. The usefulness of the learned space depends on whether the pair construction captures relevant distinctions rather than superficial visual resemblance.\n\nEvaluation should therefore go beyond the training loss. Ask whether the representation retrieves appropriate diagrams for new queries, distinguishes subtle conceptual differences, and works across the formats learners use. Inspect failure cases in the original images and text. A high similarity score is not proof that two resources are pedagogically interchangeable or factually consistent. If a model was trained mainly on one language or style, its comparisons may work differently for other materials. Dataset coverage remains relevant even when training labels are generated automatically.\n\nA classroom activity can have learners design positive and negative pairs from a small set of teacher-created diagrams, then explain the assumptions behind each choice. Include an ambiguous pair and require a decision tied to a specific search task. This makes contrastive learning a concrete lesson in representation: the model learns which variations to tolerate and which distinctions to preserve from the relationships it is shown. Good pair design can support useful transfer, while careless pair design can systematically remove the very information an educational application needs.",
    "coreIdeas": [
      "Contrastive learning shapes representations through selected relationships among examples.",
      "Positive pairs, negative pairs, and transformations encode assumptions about relevant similarity.",
      "Evaluate downstream distinctions and retrieval, because low contrastive loss does not guarantee educational equivalence or correctness."
    ],
    "educationConnection": "Construct and justify positive and negative pairs of teacher-created diagrams, including a crop that removes a key label and a visually different pair showing the same concept.",
    "relatedConcepts": [
      "Data augmentation",
      "Embedding geometry",
      "Cross-modal retrieval"
    ],
    "sourceUrls": [
      {
        "label": "Chen and colleagues: SimCLR, A Simple Framework for Contrastive Learning",
        "url": "https://arxiv.org/abs/2002.05709"
      },
      {
        "label": "Radford and colleagues: Learning Transferable Visual Models from Natural Language Supervision",
        "url": "https://arxiv.org/abs/2103.00020"
      }
    ]
  },
  {
    "id": "academy-112",
    "listingIdentifier": "Educational Theory 56",
    "title": "APOS Theory in Mathematics Learning",
    "slug": "apos-theory-in-mathematics-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-11T08:00:00.000Z",
    "image": "/images/academy/covers/academy-112-apos-theory-in-mathematics-learning.png",
    "summaryAudio": "/audio/academy/academy-112-apos-theory-in-mathematics-learning-summary.m4a",
    "tags": [
      "APOS theory",
      "mathematics learning",
      "functions"
    ],
    "imageAlt": "A mathematics educator and two adult learners connect function-machine models with input-output arrows and function sketches.",
    "summaryAudioTitle": "Listen to APOS Theory in Mathematics Learning",
    "shortSummary": "How Action, Process, Object, and Schema offer a framework for examining mathematical understanding beyond successful step-by-step calculation.",
    "fullSummary": "APOS Theory is a framework for researching and designing mathematics learning. The acronym refers to Action, Process, Object, and Schema. Developed by Ed Dubinsky and collaborators, it describes possible mental constructions through which learners understand mathematical ideas. The framework helps educators ask what kind of reasoning a task requires, rather than treating a correct calculation as complete evidence of conceptual understanding. Its categories are theoretical tools, not permanent labels for students.\n\nAn action conception involves carrying out transformations with explicit steps or external cues. Through reflection and experience, actions may be interiorized into a process that a learner can imagine and reason about without executing every step. A process can be encapsulated as an object on which further operations are performed. A schema organizes related actions, processes, objects, and relationships into a coherent understanding. Movement between these conceptions can be important; learning is not simply a one-way staircase with four fixed levels.\n\nConsider the function f(x) = 2x + 1. A learner using an action conception may follow instructions to double three and add one, obtaining seven. A process conception allows the learner to imagine how the function transforms any input and reason that increasing the input by one increases the output by two. Treating the function as an object supports comparing it with another function or forming a composition. A broader schema connects formulas, graphs, domains, outputs, and operations on functions.\n\nA teacher can design tasks that reveal these distinctions. Ask for a numerical output, then ask what happens to the output when the input changes without supplying a particular number. Next, introduce g(x) = x squared and compare f(g(x)) with g(f(x)). The resulting expressions, 2x squared plus one and the square of 2x plus one, are generally different. Learners should explain the order of the processes and inspect the functions as entities being composed, not merely memorize a substitution recipe.\n\nAPOS researchers use a genetic decomposition: a proposed account of mental constructions that may support understanding of a particular concept. Here, genetic refers to the development of the concept, not biological inheritance. The proposal guides activities and is revised through evidence from learners' explanations and performance. The framework has informed cycles of activities, classroom discussion, and exercises. It should not become a checklist in which a teacher declares an object conception after one correct answer or assumes that every learner follows an identical route.\n\nFor assessment, combine calculations with explanations, comparisons, and unfamiliar cases. A learner may reason flexibly about functions in one representation while depending on explicit actions in another. Instruction can help connect those representations and revisit needed processes. APOS Theory makes such differences available for investigation, but it does not replace mathematical analysis or attentive teaching. Its practical value is to identify the constructions a task may require and to seek evidence that learners can coordinate them when the context or representation changes.",
    "coreIdeas": [
      "APOS distinguishes action, process, object, and schema conceptions as theoretical descriptions of mathematical reasoning.",
      "Tasks should reveal whether learners can imagine, transform, and connect mathematical ideas beyond following a procedure.",
      "A genetic decomposition is a revisable developmental hypothesis, not a biological claim or fixed classification of learners."
    ],
    "educationConnection": "Use a linear function and a squaring function to compare numerical substitution, reasoning about change, composition, and connections among formulas and graphs.",
    "relatedConcepts": [
      "Interiorization",
      "Encapsulation",
      "Genetic decomposition"
    ],
    "sourceUrls": [
      {
        "label": "Asiala and colleagues: A Framework for Research and Curriculum Development in Undergraduate Mathematics",
        "url": "https://www.math.kent.edu/~edd/Framework.pdf"
      },
      {
        "label": "Dubinsky: Using a Theory of Learning in College Mathematics Courses",
        "url": "https://people.math.wisc.edu/~rwilson/Courses/Math903/UsingAPOS.pdf"
      }
    ]
  }
];
