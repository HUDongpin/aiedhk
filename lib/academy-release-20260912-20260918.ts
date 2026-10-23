import type { AcademyLesson } from "@/lib/types";

export const academyRelease20260912To20260918: AcademyLesson[] = [
  {
    "id": "academy-113",
    "listingIdentifier": "AI Knowledge 57",
    "title": "Knowledge Distillation",
    "slug": "knowledge-distillation",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-12T08:00:00.000Z",
    "image": "/images/academy/covers/academy-113-knowledge-distillation.png",
    "summaryAudio": "/audio/academy/academy-113-knowledge-distillation-summary.m4a",
    "shortSummary": "Knowledge distillation trains a student model to approximate a teacher model, trading some capacity for a smaller deployment while requiring independent checks of errors, bias, and educational usefulness.",
    "fullSummary": "A school wants an AI classifier that can run on inexpensive laptops. Its strongest model is too large for those devices. Knowledge distillation offers one route: use a capable teacher model to help train a smaller student model. The words teacher and student describe computational roles. They do not imply that either model understands a subject as a human educator does, or that a smaller model receives an exact copy of everything the larger model knows.\n\nIn a classification example, ordinary labels identify the expected category. A teacher can also supply a distribution across alternatives. Suppose a response is mainly about evaporation, but the teacher assigns some probability to boiling and very little to condensation. Those relative probabilities carry information about distinctions the teacher has learned. A temperature setting can soften the distribution during training so that less probable alternatives contribute more visibly to the learning signal. The student learns to approximate these outputs, often alongside learning from the original labels.\n\nDistillation can target other information, including intermediate representations or generated responses. DistilBERT illustrates distillation during language-model pretraining, combining several training objectives. Different approaches preserve different behaviours, so a distillation claim needs to specify the teacher, student, training data, objectives, and evaluation tasks. A smaller file or faster response is an operational result; it does not establish that every useful capability has survived.\n\nConsider an illustrative biology department building a local tool that sorts anonymous practice explanations into topics for teacher review. Staff first prepare a diverse set of examples and reserve a separate evaluation set. A teacher model produces candidate distributions for the training examples. Educators inspect ambiguous items and labels before a student model is trained. They then compare the two models on held-out responses, especially short answers, multilingual writing, unfamiliar wording, and closely related scientific ideas. The intended benefit is quicker sorting on classroom devices, while the teacher retains responsibility for interpreting student understanding.\n\nThe department should also measure memory use, latency, and battery demand on the actual equipment. A student that performs well on one benchmark may fail on a local curriculum. Distillation can reproduce a teacher's mistakes or biases and may discard rare but important distinctions. Training data and teacher outputs can contain protected or sensitive material. Using a smaller model does not resolve those issues, and generated labels should not silently become unquestioned educational judgments.\n\nA useful classroom activity is to compare hard category labels with probability distributions for a few fictional examples. Learners explain what extra information the distributions contain and which uncertainty remains. They can then design an acceptance test for a hypothetical compressed assistant. Include a non-AI alternative, a manual review route, and examples where the system should decline classification. This makes distillation a concrete lesson about transferring behaviour under constraints, while keeping the educational purpose and the cost of lost distinctions visible.",
    "coreIdeas": [
      "A student learns from teacher outputs or representations, often together with original labels.",
      "Compression preserves selected behaviours rather than guaranteeing complete equivalence.",
      "Local evaluation must examine rare errors, resource use, privacy, and the intended educational decision."
    ],
    "educationConnection": "Compare hard labels and softened distributions for fictional science answers, then design a held-out test for a classroom classifier.",
    "relatedConcepts": [
      "Soft targets",
      "Model compression",
      "Teacher-student learning"
    ],
    "tags": [
      "distillation",
      "model compression",
      "efficient AI"
    ],
    "imageAlt": "A teacher and an adult learner compare two similar probability bar charts beside a laptop and an annotated notebook.",
    "summaryAudioTitle": "Listen to Knowledge Distillation",
    "sourceUrls": [
      {
        "label": "Hinton, Vinyals, and Dean: Distilling the Knowledge in a Neural Network",
        "url": "https://arxiv.org/abs/1503.02531"
      },
      {
        "label": "Sanh and colleagues: DistilBERT",
        "url": "https://arxiv.org/abs/1910.01108"
      }
    ]
  },
  {
    "id": "academy-114",
    "listingIdentifier": "Educational Theory 57",
    "title": "Realistic Mathematics Education",
    "slug": "realistic-mathematics-education",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-12T08:00:00.000Z",
    "image": "/images/academy/covers/academy-114-realistic-mathematics-education.png",
    "summaryAudio": "/audio/academy/academy-114-realistic-mathematics-education-summary.m4a",
    "shortSummary": "Realistic Mathematics Education guides learners from meaningful situations and informal strategies toward increasingly general mathematical models, with deliberate teaching rather than unstructured discovery.",
    "fullSummary": "A class can calculate a fraction correctly and still struggle to explain why the method works. Realistic Mathematics Education, usually called RME, approaches this problem by treating mathematics as an activity of organizing situations and relationships. Learners begin with contexts they can make sense of, develop informal methods, discuss those methods, and gradually construct more general mathematical tools. The teacher plans and guides this progression.\n\nRealistic does not simply mean practical or taken from everyday life. A situation can be imaginable and meaningful without being a literal real-world task. A mathematical puzzle can therefore be a suitable starting point. What matters is whether learners can enter the situation and use it to develop the intended mathematics. An elaborate shopping story that obscures a relationship may be less helpful than a carefully chosen diagram.\n\nRME distinguishes movement from a situation toward mathematical descriptions from further work within mathematics, such as comparing representations, organizing relationships, and generalizing. These are often called horizontal and vertical mathematization. Models are especially important. A drawing may initially represent a particular situation, then become a tool for reasoning about a wider family of problems. This change in the role of a model needs discussion; it does not happen automatically because a picture is present.\n\nImagine adult learners comparing two drink mixtures. One uses two cups of concentrate for three cups of water; another uses four cups of concentrate for six cups of water. Groups draw containers, make tables, and explain whether the taste should match. The teacher selects approaches that reveal the common multiplicative relationship. A ratio table initially describes these mixtures, then supports questions about unfamiliar quantities. Later, students express the relationship symbolically and identify which transformations preserve the mixture. The context provides an entry point while the mathematical structure becomes increasingly explicit.\n\nGuided reinvention does not require each student to rediscover mathematics independently. Teachers anticipate likely strategies, choose productive contrasts, introduce notation, and connect contributions. Whole-class discussion should make the mathematical reasons visible rather than merely celebrate different answers. Some learners need additional examples, vocabulary support, or direct explanation before they can participate. Accessible materials and sufficient time matter because a supposedly familiar context may be unfamiliar to part of the class.\n\nRME is a design tradition with a history and multiple implementations, not a guarantee that contextual problems always outperform other instruction. Its suitability depends on the mathematical goal, task sequence, prior knowledge, and teaching. Contexts can distract, and informal methods can remain disconnected from formal methods if the transition is weak. To evaluate a lesson, ask students to solve a new problem, explain the relationship, and use a representation outside the original story. Evidence of learning lies in increasingly flexible mathematical reasoning, not simply enthusiasm for the opening activity or the production of attractive drawings.",
    "coreIdeas": [
      "Meaningful or imaginable situations provide a starting point for mathematization.",
      "Models can develop from representations of a situation into tools for general reasoning.",
      "Teachers deliberately connect informal strategies, discussion, representations, and formal mathematics."
    ],
    "educationConnection": "Use equivalent drink mixtures to move from drawings to ratio tables and symbolic relationships, then assess an unfamiliar ratio problem.",
    "relatedConcepts": [
      "Guided reinvention",
      "Mathematization",
      "Emergent models"
    ],
    "tags": [
      "mathematics education",
      "RME",
      "mathematical modeling"
    ],
    "imageAlt": "A mathematics educator and two adult learners compare drink concentrations using continuous shaded proportion bars and a mixture sketch.",
    "summaryAudioTitle": "Listen to Realistic Mathematics Education",
    "sourceUrls": [
      {
        "label": "Van den Heuvel-Panhuizen and Drijvers: Realistic Mathematics Education",
        "url": "https://research-portal.uu.nl/en/publications/realistic-mathematics-education/"
      },
      {
        "label": "Freudenthal Institute: RME in Textbooks",
        "url": "https://www.fi.uu.nl/en/summerschool/docs2018/2018%20FIsummerschool%20RMEinTextbooks%20web.pdf"
      }
    ]
  },
  {
    "id": "academy-115",
    "listingIdentifier": "AI Knowledge 58",
    "title": "Model Quantization",
    "slug": "model-quantization",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-13T08:00:00.000Z",
    "image": "/images/academy/covers/academy-115-model-quantization.png",
    "summaryAudio": "/audio/academy/academy-115-model-quantization-summary.m4a",
    "shortSummary": "Quantization represents model values with fewer bits. It can reduce memory and improve deployment efficiency, but the effects on accuracy and speed depend on the method, hardware, and task.",
    "fullSummary": "A neural network contains many numerical values. Storing and manipulating those values uses memory, computing time, and energy. Model quantization reduces the precision used to represent some of them. A system might replace higher-precision values with eight-bit or four-bit representations, together with the information needed to interpret those representations. This changes numerical storage and computation; it does not necessarily reduce the number of model parameters.\n\nA simple analogy is recording a measured length to the nearest centimetre instead of the nearest millimetre. The record becomes less precise, and some different measurements now share a value. Neural-network quantization similarly maps a range of values onto a smaller set of representable levels. Scale factors, and sometimes zero points, connect the stored values with their approximate numerical meaning. Real methods can be more sophisticated than uniform rounding, particularly when important values have unusual distributions.\n\nThere are two broad routes. Post-training quantization transforms an already trained model, often using representative examples to determine suitable ranges. Quantization-aware training exposes a model to the effects of reduced precision during training so it can adapt. Research on integer-only inference and on LLM.int8 shows why both numerical design and hardware implementation matter. Some methods retain higher precision for selected values or operations. A label such as eight-bit therefore does not fully describe the computation.\n\nSuppose a college wants a local language assistant on a classroom computer with limited memory. Staff compare a reference model with a quantized version using the same prompts and controlled settings. Their test includes short explanations, numerical comparisons, multilingual instructions, refusal behaviour, and longer conversations. They record whether each version fits in memory, how quickly it responds, and whether the answers satisfy a teacher-written rubric. The comparison should use the actual computer because an optimization that helps one processor may offer little advantage on another.\n\nMemory savings for model weights do not imply identical savings for the entire application. Activations, temporary buffers, stored conversation information, and other software still consume resources. Conversion overhead or unsupported operations can reduce a hoped-for speed improvement. More aggressive compression may alter difficult or rare behaviours even when an average benchmark changes little. Neither smaller storage nor a familiar benchmark establishes suitability for feedback, assessment, or other consequential educational uses.\n\nAn accessible teaching activity uses a number line to round a small set of values at different resolutions. Learners identify which distinctions disappear and compare the accumulated result of a short calculation. They then connect the exercise to a model evaluation plan, while recognizing that real networks are much more complicated. Quantization is useful when its resource benefits are demonstrated and its errors remain acceptable for a defined purpose. Keep the original model version, conversion method, evaluation examples, and deployment settings recorded so that a later change can be assessed fairly.",
    "coreIdeas": [
      "Quantization reduces numerical precision, which is different from removing parameters or training a smaller student.",
      "Post-training and quantization-aware approaches manage approximation in different ways.",
      "Measure whole-application resource use and educational errors on the target hardware."
    ],
    "educationConnection": "Round a small numerical dataset at different resolutions, then design a fair comparison of two model versions on classroom devices.",
    "relatedConcepts": [
      "Numerical precision",
      "Post-training quantization",
      "Quantization-aware training"
    ],
    "tags": [
      "quantization",
      "model efficiency",
      "numerical precision"
    ],
    "imageAlt": "A computing instructor and an adult learner compare a smooth line with a stepped approximation and a rounding diagram beside a small computer.",
    "summaryAudioTitle": "Listen to Model Quantization",
    "sourceUrls": [
      {
        "label": "Jacob and colleagues: Integer-Arithmetic-Only Inference",
        "url": "https://arxiv.org/abs/1712.05877"
      },
      {
        "label": "Dettmers and colleagues: LLM.int8",
        "url": "https://arxiv.org/abs/2208.07339"
      }
    ]
  },
  {
    "id": "academy-116",
    "listingIdentifier": "Educational Theory 58",
    "title": "Instrumental Genesis",
    "slug": "instrumental-genesis",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-13T08:00:00.000Z",
    "image": "/images/academy/covers/academy-116-instrumental-genesis.png",
    "summaryAudio": "/audio/academy/academy-116-instrumental-genesis-summary.m4a",
    "shortSummary": "Instrumental genesis explains how a tool becomes a useful mathematical instrument through the development of ways of using it, while its features also shape the learner’s activity.",
    "fullSummary": "Handing a learner a graphing calculator does not automatically give that learner a mathematical instrument. Instrumental genesis describes the development through which an artifact, such as a calculator, spreadsheet, or geometry application, becomes connected with purposeful schemes of use. An instrument is understood as more than the physical or digital object: it includes the organized ways a person uses that object to accomplish a type of task.\n\nThe distinction matters because technical and mathematical learning are intertwined. A learner may know which button produces a graph yet misinterpret what the graph establishes. Another may understand a mathematical relationship but lack the tool techniques needed to investigate it. Instrumental genesis studies this developing relationship instead of assuming that software is a neutral container for previously acquired knowledge.\n\nTwo interacting processes are often distinguished. Instrumentation concerns how a tool's possibilities and constraints shape a user's activity and emerging schemes. Instrumentalization concerns how users select, configure, adapt, and assign purposes to the artifact. These processes can develop together. Choosing a spreadsheet formula, deciding which cells to vary, and interpreting the resulting pattern involve both the tool's structure and the learner's mathematical intentions.\n\nConsider an adult mathematics class investigating where two functions intersect. Students first predict possible intersections, then use a graphing application. A narrow viewing window hides one intersection, while a coarse display makes a near intersection appear exact. The teacher asks groups to alter the window, compare graphs with a numerical table, and verify candidate solutions algebraically. Over time, students develop a routine of prediction, tool use, and independent checking. The educational achievement is not merely plotting two curves; it is knowing when a display is informative, incomplete, or misleading.\n\nTeachers support this development through instrumental orchestration: deliberate arrangements of tools, tasks, displays, and participation. One learner might demonstrate an approach while classmates explain and challenge it. The teacher can select contrasting screens or pause before a calculation to solicit predictions. The arrangement should make reasoning public and avoid letting the most technically fluent student perform every operation. An accessible alternative is needed when the interface creates barriers to participation.\n\nInstrumental genesis is a theoretical lens for understanding tool use, not a promise that particular technology will improve achievement. It also does not excuse poor interface design. Persistent difficulties may arise from inaccessible controls, misleading defaults, insufficient instruction, or the mathematical challenge itself. Observation should examine what learners do, why they do it, and how their routines change across tasks. When an AI assistant becomes part of a mathematics workflow, educators can ask the same questions about checking, interpretation, and dependence, while recognizing that applying the framework to generative systems requires additional attention to unpredictable outputs. The central lesson is that competent use develops through meaningful activity and guidance, rather than following automatically from access.",
    "coreIdeas": [
      "An instrument combines an artifact with purposeful schemes of use.",
      "Instrumentation and instrumentalization describe reciprocal influences between people and tools.",
      "Teachers orchestrate tasks and participation so technical actions become connected to mathematical reasoning."
    ],
    "educationConnection": "Investigate graph-window errors, then build a prediction, plotting, table-checking, and algebraic-verification routine.",
    "relatedConcepts": [
      "Instrumentation",
      "Instrumentalization",
      "Instrumental orchestration"
    ],
    "tags": [
      "instrumental genesis",
      "digital mathematics",
      "tool use"
    ],
    "imageAlt": "A teacher and two adult learners compare handwritten function sketches with an interactive graph display while one learner adjusts the tool.",
    "summaryAudioTitle": "Listen to Instrumental Genesis",
    "sourceUrls": [
      {
        "label": "Kieran and Drijvers: Digital Technology and Mathematics Education",
        "url": "https://dspace.library.uu.nl/bitstream/handle/1874/344157/978-3-319-26047-1_6.pdf?isAllowed=y&sequence=2"
      },
      {
        "label": "Drijvers and colleagues: The Teacher and the Tool",
        "url": "https://research-portal.uu.nl/ws/files/248493885/s10649-010-9254-5.pdf"
      }
    ]
  },
  {
    "id": "academy-117",
    "listingIdentifier": "AI Knowledge 59",
    "title": "Low-Rank Adaptation",
    "slug": "low-rank-adaptation",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-14T08:00:00.000Z",
    "image": "/images/academy/covers/academy-117-low-rank-adaptation.png",
    "summaryAudio": "/audio/academy/academy-117-low-rank-adaptation-summary.m4a",
    "shortSummary": "Low-rank adaptation trains a compact set of additional parameters while keeping a base model fixed, making some customization more economical without guaranteeing reliable knowledge or educational performance.",
    "fullSummary": "A department wants a language model to follow a particular feedback format. Updating every parameter in a large model may require more memory and storage than the team can justify. Low-rank adaptation, usually called LoRA, offers a more economical way to change selected model behaviours. It keeps the original model weights fixed while learning a smaller set of parameters that describe updates to selected weight matrices.\n\nThe mathematical idea is a factorization. Instead of learning a full update matrix, LoRA represents that update as the product of two thinner matrices. Their shared inner dimension is the rank chosen for the adaptation. A smaller rank limits the number of trainable values and the forms of change that can be expressed. This is a useful constraint when the adaptation can be captured economically, but it is not a theorem that every educational task needs only a small update.\n\nDuring training, examples determine the adapter parameters while the base model remains frozen. The adapter must be used with a compatible base model. Depending on the implementation, it may be loaded separately or its update may be merged into suitable weights for deployment. QLoRA combines low-rank adaptation with a quantized frozen base model to further reduce training memory. Quantization and low-rank adaptation therefore address related resource problems through different mechanisms.\n\nFor an illustrative application, a teacher education programme prepares examples of feedback that identify a claim, cite evidence from a learner's paragraph, and ask one useful revision question. The examples contain consented or fictional work and carefully reviewed responses. Staff compare the unadapted model, a stronger prompt, and a LoRA-adapted version on a reserved set of unfamiliar writing. They judge whether feedback is accurate, grounded in the submitted text, understandable, and useful for revision. A consistent three-part format counts as only one part of success.\n\nThe dataset can teach unwanted habits alongside the intended format. If every training example praises an answer, the adapted model may praise incorrect work. If examples represent only one writing style or language variety, performance may be uneven. Small adapter files can still reflect sensitive training information and require appropriate access control. Adaptation also cannot reliably replace a maintained retrieval system when the main need is access to frequently changing school information.\n\nEducators evaluating an adapted assistant should record the base model, adapter version, data provenance, training settings, and held-out results. Test conflicting instructions, ambiguous work, and cases requiring the assistant to acknowledge uncertainty. Recheck after either model or adapter changes. A classroom explanation can use a grid whose adjustment is constructed from two small tables, illustrating how a structured update uses fewer numbers than an unrestricted one. The practical question is whether the constrained update improves the intended task enough to justify its training, maintenance, and verification costs, compared with simpler alternatives.",
    "coreIdeas": [
      "LoRA learns a low-rank update while freezing the base model.",
      "Adapter quality depends on the task, training examples, rank, and compatible base model.",
      "Evaluate educational usefulness separately from format compliance and memory savings."
    ],
    "educationConnection": "Compare prompting and adaptation for a feedback format using held-out writing and a rubric covering evidence, correctness, and revision value.",
    "relatedConcepts": [
      "Parameter-efficient fine-tuning",
      "Low-rank factorization",
      "QLoRA"
    ],
    "tags": [
      "LoRA",
      "fine-tuning",
      "model adaptation"
    ],
    "imageAlt": "A computing teacher and an adult learner connect a compact matrix-adjustment diagram with annotated writing examples.",
    "summaryAudioTitle": "Listen to Low-Rank Adaptation",
    "sourceUrls": [
      {
        "label": "Hu and colleagues: LoRA",
        "url": "https://arxiv.org/abs/2106.09685"
      },
      {
        "label": "Dettmers and colleagues: QLoRA",
        "url": "https://arxiv.org/abs/2305.14314"
      }
    ]
  },
  {
    "id": "academy-118",
    "listingIdentifier": "Educational Theory 59",
    "title": "Commognition and Learning Mathematics",
    "slug": "commognition-and-learning-mathematics",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-14T08:00:00.000Z",
    "image": "/images/academy/covers/academy-118-commognition-and-learning-mathematics.png",
    "summaryAudio": "/audio/academy/academy-118-commognition-and-learning-mathematics-summary.m4a",
    "shortSummary": "Commognition examines mathematics learning as changing participation in mathematical discourse, including words, visual mediators, routines, and accepted ways of justifying claims.",
    "fullSummary": "A learner says that multiplication makes numbers larger. In familiar whole-number examples, that statement may have seemed dependable. Multiplication by a positive fraction smaller than one creates a conflict that cannot be resolved simply by asking for more confidence. Anna Sfard's commognitive perspective invites educators to examine the rules of mathematical discourse that the learner is using and how those rules must change.\n\nCommognition joins communication and cognition. Within this theoretical perspective, thinking is treated as an individualized form of communication, including communication with oneself. Mathematics learning is examined as participation in increasingly developed mathematical discourse. This is a particular way of framing learning, not an uncontested description of every mental process. Its value for teachers lies in making some otherwise hidden differences in mathematical meaning available for analysis.\n\nMathematical discourses can be examined through characteristic word use, visual mediators such as symbols and graphs, recurring routines, and narratives accepted as valid. A word such as function may initially mean a calculation rule and later refer to an object with properties. A proof routine also differs from checking several examples. Learners can therefore use familiar vocabulary while following different rules about what counts as an answer or a justification.\n\nImagine a class discussing negative numbers. One learner rejects subtracting a larger number from a smaller one because the earlier classroom discourse permitted only whole-number results. Another immediately uses a memorized sign rule. The teacher asks both to explain what subtraction means in their examples, introduces a number-line representation, and compares situations where earlier methods remain useful with situations requiring an expanded number system. The discussion addresses the change in mathematical practice rather than identifying one learner as careless. Later tasks ask learners to justify their methods and interpret unfamiliar expressions.\n\nA commognitive conflict can occur when participants follow incompatible discourse rules while assuming that they share the same meaning. Teachers can make these rules explicit by contrasting example checking with proof, everyday meanings with mathematical definitions, or procedural performance with explanation. Recordings and written work can reveal whether a learner is repeating a ritual to satisfy the teacher or using a routine flexibly to establish a mathematical result. Such interpretations need several examples and sensitivity to language and context.\n\nThe framework does not imply that more classroom talk always produces better understanding. Quiet work, gestures, diagrams, and private reasoning may also matter. Nor should educators dismiss a student's contribution because its language is unfamiliar or differs from the dominant classroom register. A useful application is to select one short exchange, identify the mathematical meanings and justifications in play, and plan a task that makes the difference discussable. Combine this lens with other evidence of learning. Its contribution is a precise question: which features of mathematical communication are changing, and what support helps learners participate meaningfully in that change?",
    "coreIdeas": [
      "Commognition treats thinking and communication within a shared theoretical framework.",
      "Mathematical learning can involve changes in words, mediators, routines, and accepted justifications.",
      "Conflicting discourse rules should be made explicit and investigated without equating fluent talk with understanding."
    ],
    "educationConnection": "Analyze a discussion of negative numbers to identify competing rules, then design a representation and justification task that addresses the difference.",
    "relatedConcepts": [
      "Mathematical discourse",
      "Commognitive conflict",
      "Mathematical routines"
    ],
    "tags": [
      "commognition",
      "mathematics learning",
      "discourse"
    ],
    "imageAlt": "Three adults discuss a number-line sketch and a half-shaded rectangle, comparing how they explain the mathematical meaning.",
    "summaryAudioTitle": "Listen to Commognition and Learning Mathematics",
    "sourceUrls": [
      {
        "label": "Sfard: When the Rules of Discourse Change",
        "url": "https://staff-old.najah.edu/sites/default/files/when%20the%20rules%20of%20discourse%20change.pdf"
      },
      {
        "label": "Sfard: Thinking as Communicating",
        "url": "https://www.cambridge.org/core/books/thinking-as-communicating/4AD97425F28C43AC894B4658CDA6DB24"
      }
    ]
  },
  {
    "id": "academy-119",
    "listingIdentifier": "AI Knowledge 60",
    "title": "Synthetic Training Data",
    "slug": "synthetic-training-data",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-15T08:00:00.000Z",
    "image": "/images/academy/covers/academy-119-synthetic-training-data.png",
    "summaryAudio": "/audio/academy/academy-119-synthetic-training-data-summary.m4a",
    "shortSummary": "Synthetic training data are generated examples used to train models. Their value depends on correctness, diversity, provenance, and evaluation against independent human or real-world data.",
    "fullSummary": "Synthetic training data are examples produced through a generating process rather than collected directly as ordinary observations. A simulator can generate sensor readings, a rule system can construct mathematics problems, and a language model can produce instructions and responses. Synthetic describes the origin of the data. It does not tell us whether the examples are correct, diverse, representative, private, or suitable for training.\n\nOne attraction is control. Developers can deliberately vary a feature, create a rare scenario, or generate additional examples for a narrowly defined task. Self-Instruct demonstrated a pipeline that generated instruction data and filtered invalid or overly similar examples before using them for training. That result shows a possible method, not a general guarantee that a model improves by consuming its own outputs. Filtering criteria and an independent evaluation set remain essential.\n\nConsider a hypothetical assistant that classifies errors in equivalent-fraction exercises. Teachers define several error types and construct examples using exact arithmetic rules. A generator produces candidate responses for each type, including correct answers. Educators verify that the intended error is actually present, check ambiguous cases, and remove unrealistic language. The final evaluation uses separately collected, appropriately consented learner responses because success on the generator's patterns alone would be weak evidence of classroom usefulness.\n\nGeneration can amplify the assumptions of its source. A language model may produce plausible but incorrect explanations or make student writing unnaturally tidy. Repeated sampling does not ensure new information: many examples may differ superficially while expressing the same pattern. A dataset can also omit uncommon perspectives or language forms. Teachers should inspect coverage across meaningful dimensions and keep records of the generating model or rules, prompts, filtering decisions, and human corrections.\n\nResearch on recursive training has shown that replacing data with model-generated outputs across generations can cause distributions to deteriorate under studied conditions, sometimes called model collapse. This is a warning about particular feedback processes, not proof that every use of synthetic data is harmful. Retaining appropriate real data, checking rare cases, and independently measuring performance are different from repeatedly treating generated outputs as ground truth. The balance must be evaluated for the actual task rather than inferred from the word synthetic.\n\nSynthetic examples are not automatically anonymous. A generator trained on sensitive records may reproduce details, and a realistic record can still create privacy concerns. For educational work, fictional identities and deliberately designed scenarios are preferable when authentic personal data are unnecessary. A useful class activity compares a small synthetic dataset with independent examples, asking which variation is missing and which errors the generator repeats. Before training, learners write acceptance rules for correctness, diversity, and provenance. After training, they test on a different source. This turns synthetic data into a transparent engineering choice whose usefulness can be checked, rather than an inexpensive substitute for all evidence from actual learning situations.",
    "coreIdeas": [
      "Synthetic describes data provenance, not quality or privacy.",
      "Generation needs correctness checks, meaningful diversity, filtering, and documented provenance.",
      "Independent evaluation is necessary to detect generator shortcuts and recursive degradation."
    ],
    "educationConnection": "Generate rule-checked fraction-error examples, inspect their coverage, and evaluate a classifier on independently sourced responses.",
    "relatedConcepts": [
      "Data augmentation",
      "Model collapse",
      "Data provenance"
    ],
    "tags": [
      "synthetic data",
      "training data",
      "data quality"
    ],
    "imageAlt": "An educator and two adult learners review fictional illustrated training examples, marking acceptable patterns and a flawed sequence for revision.",
    "summaryAudioTitle": "Listen to Synthetic Training Data",
    "sourceUrls": [
      {
        "label": "Wang and colleagues: Self-Instruct",
        "url": "https://arxiv.org/abs/2212.10560"
      },
      {
        "label": "Shumailov and colleagues: The Curse of Recursion",
        "url": "https://arxiv.org/abs/2305.17493"
      }
    ]
  },
  {
    "id": "academy-120",
    "listingIdentifier": "Educational Theory 60",
    "title": "Threshold Concepts",
    "slug": "threshold-concepts",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-15T08:00:00.000Z",
    "image": "/images/academy/covers/academy-120-threshold-concepts.png",
    "summaryAudio": "/audio/academy/academy-120-threshold-concepts-summary.m4a",
    "shortSummary": "Threshold concepts are proposed gateways that change how learners understand a discipline. They can guide curriculum inquiry, but difficult content should not automatically be labelled a threshold.",
    "fullSummary": "Some ideas seem to change how learners see an entire subject. After understanding opportunity cost, an economics student may begin to notice that choosing one action means giving up alternatives, even when no money changes hands. Meyer and Land proposed threshold concepts to describe ideas that can open a new way of thinking within a discipline. The framework helps educators investigate important conceptual transitions and the difficulties learners encounter around them.\n\nThreshold concepts have commonly been described as transformative, integrative, potentially irreversible, bounded, and troublesome. These are proposed characteristics, not a checklist that mechanically certifies a topic. Transformative means that understanding changes the learner's perspective. Integrative means that previously separate ideas become connected. Troublesome knowledge may challenge intuition, language, prior assumptions, or identity. Claims of irreversibility and boundaries require particular care because learners can forget, regress, or understand differently across situations.\n\nThe framework also uses liminality to describe an uncertain transitional state. A learner may repeat disciplinary language before using it with understanding, alternate between old and new explanations, or feel unsettled by the change. This does not mean that confusion is inherently beneficial. A teacher still needs to determine whether the obstacle is conceptual, linguistic, emotional, contextual, or a gap in prerequisite knowledge, and provide support that fits the evidence.\n\nIn an illustrative introductory economics lesson, learners choose between attending an optional workshop and working a paid shift. They first list visible expenses, then consider the value of the best alternative forgone. The teacher adds a case where the workshop is free but time is scarce, followed by a case involving several alternatives. Students explain why opportunity cost is not simply the sum of every possible sacrifice. Their explanations reveal whether they are applying a new way of analyzing choice or merely repeating a definition.\n\nTeachers can use candidate threshold concepts to prioritize a crowded curriculum, design contrasting cases, invite discussion of uncertainty, and revisit an idea in different contexts. Assessment should examine changed reasoning and connections, not only vocabulary recall. Student accounts are valuable because experts can underestimate what made their own understanding possible. A candidate identified by a lecturer may not function as a gateway for every learner or in every programme.\n\nThe concept remains debated, including how thresholds can be identified and tested. A hard topic is not necessarily transformative, and an important topic is not necessarily a threshold. Avoid using the label to blame learners for being stuck or to romanticize prolonged difficulty. A practical approach is to treat a proposed threshold as a curriculum hypothesis: describe the expected change in thinking, gather examples of learner reasoning, identify supports, and look for transfer to unfamiliar tasks. Retain the framework when it makes teaching decisions clearer, while remaining open to a simpler explanation of the learning difficulty.",
    "coreIdeas": [
      "Threshold concepts are proposed transformative and integrative gateways within disciplines.",
      "Transitional uncertainty requires diagnosis and support rather than celebration of confusion.",
      "Treat candidate thresholds as curriculum hypotheses and examine changes in reasoning across cases."
    ],
    "educationConnection": "Use opportunity-cost cases with money, time, and competing alternatives to distinguish definition recall from a changed analysis of choice.",
    "relatedConcepts": [
      "Troublesome knowledge",
      "Liminality",
      "Curriculum design"
    ],
    "tags": [
      "threshold concepts",
      "higher education",
      "conceptual learning"
    ],
    "imageAlt": "A lecturer and two adult learners compare earlier and revised case sketches around a compact concept map.",
    "summaryAudioTitle": "Listen to Threshold Concepts",
    "sourceUrls": [
      {
        "label": "Cousin: An Introduction to Threshold Concepts",
        "url": "https://www.tandfonline.com/doi/full/10.11120/plan.2006.00170004"
      },
      {
        "label": "Loertscher and colleagues: Identification of Threshold Concepts for Biochemistry",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4152212/"
      },
      {
        "label": "Batzli and colleagues: Crossing the Threshold",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5132383/"
      }
    ]
  },
  {
    "id": "academy-121",
    "listingIdentifier": "AI Knowledge 61",
    "title": "Federated Learning",
    "slug": "federated-learning",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-16T08:00:00.000Z",
    "image": "/images/academy/covers/academy-121-federated-learning.png",
    "summaryAudio": "/audio/academy/academy-121-federated-learning-summary.m4a",
    "shortSummary": "Federated learning coordinates model training across separate data holders. Local data can remain in place, but shared updates, unequal datasets, and coordination still require careful design.",
    "fullSummary": "Several colleges want to improve a model without pooling their learner records in one central database. Federated learning is a family of approaches that coordinates training across separate data holders. Each participant performs some computation locally, and the system combines information from those computations to update a shared model. Keeping raw records local changes the data flow, but does not by itself make the overall process private or fair.\n\nIn a common approach, a coordinator distributes current model parameters. Participating clients train on local examples and send model updates back. The coordinator aggregates those updates, sometimes weighting them by local sample size, and starts another round. The original Federated Averaging research explored how multiple local training steps can reduce communication demands. A client may be an individual device or an institution; those settings differ substantially in reliability, scale, and governance.\n\nEducation creates distinctive coordination problems. Colleges may teach different curricula, use different assessment conventions, or serve different populations. Their data are therefore unlikely to be interchangeable samples from one uniform distribution. Larger participants can dominate an average, while small or intermittently connected sites contribute less. A shared model can perform well overall yet fail at a particular institution. Evaluation needs both collective results and results for each intended setting.\n\nConsider an illustrative consortium developing a model that predicts whether a practice response concerns a particular science topic. Each college checks that labels have the same meaning before training begins. The consortium creates a shared protocol, reserves local test sets, and compares the federated model with models trained only within each college. Teachers examine errors across language varieties and curricula. If one site benefits while another loses useful distinctions, the decision should reflect that difference rather than hiding it behind a pooled accuracy score.\n\nModel updates can reveal information about training data. Secure aggregation can limit what a coordinator sees from individual participants, while differential privacy can provide a different kind of protection under stated assumptions. Neither technique follows automatically from the word federated. The system also needs authentication, authorization, protection against malicious updates, retention rules, and a response to participant withdrawal. Institutions should know who controls the coordinator and how updates and model versions are recorded.\n\nA classroom demonstration can use fictional datasets held by different groups. Each group fits a small model or computes a permitted summary, then compares locally trained and combined results. Introduce one group with a different data pattern to make the challenge visible. Ask learners to draw exactly what leaves each group and what an observer could infer. The lesson is that distributed training redistributes computation and information flows; it does not eliminate the need for data quality, meaningful consent, security, or educational judgment. A consortium should proceed only when this more complex arrangement serves a clear purpose better than available alternatives.",
    "coreIdeas": [
      "Federated training combines locally computed updates while leaving raw data with separate holders.",
      "Different curricula, data distributions, and participation patterns can create uneven performance.",
      "Updates still carry risks, so privacy and security protections must be specified separately."
    ],
    "educationConnection": "Simulate local and shared model training with fictional college datasets, then map the information exchanged and compare site-specific errors.",
    "relatedConcepts": [
      "Federated averaging",
      "Secure aggregation",
      "Non-identically distributed data"
    ],
    "tags": [
      "federated learning",
      "distributed training",
      "privacy"
    ],
    "imageAlt": "Three adults compare separate local computers with a diagram that sends model updates to a central aggregation step.",
    "summaryAudioTitle": "Listen to Federated Learning",
    "sourceUrls": [
      {
        "label": "McMahan and colleagues: Communication-Efficient Learning from Decentralized Data",
        "url": "https://proceedings.mlr.press/v54/mcmahan17a.html"
      },
      {
        "label": "Kairouz and colleagues: Advances and Open Problems in Federated Learning",
        "url": "https://arxiv.org/abs/1912.04977"
      }
    ]
  },
  {
    "id": "academy-122",
    "listingIdentifier": "Educational Theory 61",
    "title": "Epistemic Cognition",
    "slug": "epistemic-cognition",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-16T08:00:00.000Z",
    "image": "/images/academy/covers/academy-122-epistemic-cognition.png",
    "summaryAudio": "/audio/academy/academy-122-epistemic-cognition-summary.m4a",
    "shortSummary": "Epistemic cognition concerns how people pursue and evaluate knowledge. It helps educators examine the aims, standards, and processes behind judgments about evidence and trustworthy claims.",
    "fullSummary": "Two students read the same confident explanation online. One accepts it because it sounds professional; the other asks where its evidence came from. Their difference concerns more than reading comprehension. Epistemic cognition involves thinking about knowledge and the ways it is sought, justified, evaluated, and revised. It asks what people are trying to know and what they count as a good reason for believing something.\n\nThe AIR framework organizes this work around epistemic aims and value, epistemic ideals, and reliable processes. Aims concern desired achievements such as understanding an explanation or deciding which claim is credible. Ideals are standards for judging whether those aims have been met, such as consistency with evidence or explanatory adequacy. Reliable processes concern how people try to reach those ends, including checking sources, comparing evidence, or testing a prediction. The components are related but need not align automatically.\n\nA learner may value accuracy while using an unreliable process, such as counting search results without checking whether they repeat the same source. Another may follow a teacher's checklist while caring mainly about finishing quickly. Domain knowledge also matters: evaluating a historical interpretation differs from checking a geometric proof. Epistemic cognition should therefore be examined within meaningful tasks rather than reduced to a single permanent label such as sophisticated thinker.\n\nImagine a teacher education seminar comparing claims about homework. Groups receive a school newsletter, a research abstract, and an AI-generated summary. Their aim is to advise on one clearly defined homework practice. Before judging the documents, they decide what evidence would be relevant: learner age, subject, task, comparison, and outcome. They trace the summary to original sources, distinguish opinion from evidence, and record uncertainties. They may conclude that the available sources do not answer their local question. Recognizing that limit can be an appropriate epistemic achievement.\n\nTeachers can make these processes visible by asking learners to explain why a source deserves weight, what evidence could change their view, and which questions remain unanswered. Model a revision of judgment when new evidence appears. Provide enough subject knowledge for students to evaluate claims rather than expecting generic critical thinking to do all the work. An AI assistant can help generate questions for checking, but its fluency should not be treated as an epistemic credential.\n\nThe framework offers a way to interpret and design activity; it does not establish that a brief checklist will reliably change beliefs or improve every decision. Self-reported beliefs may differ from action, and performance can change across contexts. Assess reasoning through annotated source comparisons, justified decisions, and responses to conflicting evidence. Include opportunities to say that a conclusion is provisional. The educational goal is a more explicit relationship between the knowledge learners seek, the standards they use, and the processes they can defend as suitable for the task.",
    "coreIdeas": [
      "Epistemic cognition concerns knowledge-related aims, standards, and processes.",
      "Good intentions and stated beliefs do not guarantee reliable evaluation practices.",
      "Teach and assess justified judgments within particular domains and information tasks."
    ],
    "educationConnection": "Compare a newsletter, research abstract, and AI summary about homework, tracing claims and explaining what evidence would justify a local decision.",
    "relatedConcepts": [
      "Epistemic aims",
      "Epistemic ideals",
      "Reliable processes"
    ],
    "tags": [
      "epistemic cognition",
      "evidence evaluation",
      "knowledge"
    ],
    "imageAlt": "A lecturer and two adult learners compare experiment, historical and measured evidence while discussing how a claim can be justified.",
    "summaryAudioTitle": "Listen to Epistemic Cognition",
    "sourceUrls": [
      {
        "label": "Rinehart, Chinn, and Buckland: Applying the AIR Model",
        "url": "https://scholarworks.uni.edu/facpub/5736/"
      },
      {
        "label": "Chinn, Buckland, and Samarapungavan: Integrating Philosophy into Epistemic Cognition",
        "url": "https://repository.isls.org/jspui/handle/1/2860?mode=full"
      }
    ]
  },
  {
    "id": "academy-123",
    "listingIdentifier": "AI Knowledge 62",
    "title": "Differential Privacy",
    "slug": "differential-privacy",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-17T08:00:00.000Z",
    "image": "/images/academy/covers/academy-123-differential-privacy.png",
    "summaryAudio": "/audio/academy/academy-123-differential-privacy-summary.m4a",
    "shortSummary": "Differential privacy limits how much one protected contribution can change the probability of an analysis output. Its guarantees depend on the privacy definition, parameters, implementation, and repeated releases.",
    "fullSummary": "A school wants to report patterns in study activity without making an individual learner's participation easy to detect. Removing names is not sufficient when other information can reconnect a record to a person. Differential privacy approaches the problem differently: it constrains how much the probability of an analysis output can change when a protected contribution is added or removed. The guarantee concerns the behaviour of a randomized computation, under a specified definition of neighbouring datasets.\n\nImagine two datasets that are identical except for one student's contribution. A differentially private mechanism aims to make the probability distributions of its possible outputs sufficiently similar across those datasets. Carefully calibrated randomness is a common way to achieve this. The goal is not to make every released statistic false or to promise that no information about anyone can ever be inferred. It limits the additional disclosure associated with the protected contribution under the mechanism's assumptions.\n\nThe definition of a contribution is crucial. Protecting one event is different from protecting all events associated with one person. Parameters, often written epsilon and delta, express parts of the privacy guarantee. Smaller epsilon generally represents a stronger constraint, but comparing systems also requires knowing the neighbouring-dataset definition, delta, and the full analysis process. Repeated releases can accumulate privacy loss, so a collection of individually protected outputs still needs an overall accounting strategy.\n\nFor an illustrative classroom demonstration, use fictional completion counts from several tutorial groups. Release a noisy count for each group, then examine how the results affect conclusions about participation. Small groups may be especially difficult to describe accurately under a fixed protection requirement. Students discuss whether merging groups, releasing less detail, or answering fewer questions would better fit the educational purpose. The exercise should use synthetic records rather than real learner information because demonstrating noise does not establish a valid production guarantee.\n\nIn machine learning, differential privacy can also be applied during training, with methods that limit individual contributions and add noise. Implementation details matter: clipping rules, sampling, numerical behaviour, accounting, and the handling of intermediate data can change the result. A product's claim of differential privacy therefore needs technical documentation and competent review. The NIST guidance emphasizes evaluating the actual guarantee rather than relying on the presence of a privacy-related label.\n\nDifferential privacy does not settle every question about educational data. Consent, access control, retention, purpose limitation, group harms, and the consequences of decisions still require attention. It also introduces a practical relationship between privacy and utility that must be assessed for the intended analysis. Educators can ask four useful questions: whose contribution is protected, what is released, how strong is the complete guarantee, and which conclusions remain accurate enough to use? Those questions turn an abstract mathematical protection into an accountable discussion about a particular educational data release.",
    "coreIdeas": [
      "Differential privacy constrains changes in output probabilities between explicitly defined neighbouring datasets.",
      "Protection depends on contribution units, privacy parameters, composition, and implementation.",
      "Privacy guarantees must be considered alongside statistical usefulness and broader data responsibilities."
    ],
    "educationConnection": "Explore noisy counts with fictional tutorial data and explain why repeated releases and small groups complicate interpretation.",
    "relatedConcepts": [
      "Privacy budget",
      "Neighbouring datasets",
      "Privacy-utility tradeoff"
    ],
    "tags": [
      "differential privacy",
      "data protection",
      "privacy guarantees"
    ],
    "imageAlt": "A computing teacher and two adult learners compare slightly different aggregate bar charts while discussing protection of individual records.",
    "summaryAudioTitle": "Listen to Differential Privacy",
    "sourceUrls": [
      {
        "label": "Dwork and Roth: The Algorithmic Foundations of Differential Privacy",
        "url": "https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf"
      },
      {
        "label": "NIST SP 800-226: Evaluating Differential Privacy Guarantees",
        "url": "https://csrc.nist.gov/pubs/sp/800/226/final"
      }
    ]
  },
  {
    "id": "academy-124",
    "listingIdentifier": "Educational Theory 62",
    "title": "Conceptual and Procedural Knowledge",
    "slug": "conceptual-and-procedural-knowledge",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-17T08:00:00.000Z",
    "image": "/images/academy/covers/academy-124-conceptual-and-procedural-knowledge.png",
    "summaryAudio": "/audio/academy/academy-124-conceptual-and-procedural-knowledge-summary.m4a",
    "shortSummary": "Conceptual and procedural knowledge support each other in mathematics. Teaching can connect principles and methods through examples, explanations, practice, and assessment of both kinds of understanding.",
    "fullSummary": "Knowing how to carry out a calculation is not identical to knowing why it works. Procedural knowledge concerns methods and sequences of actions; conceptual knowledge concerns principles and relationships. A learner may execute a familiar method accurately while misunderstanding its meaning, or explain an idea while making calculation errors. Both kinds of knowledge are important, and neither should be used as a dismissive label for the other.\n\nResearch by Rittle-Johnson and colleagues challenges a simple choice between concepts first and procedures first. Knowledge can develop iteratively: understanding helps a learner select or generate a method, and using a method can reveal relationships that deepen understanding. The direction and strength of those connections depend on the task, existing knowledge, and instruction. This does not imply that any sequence of practice will spontaneously produce conceptual insight.\n\nTake fraction addition. A learner adds one half and one third by adding both numerators and denominators, producing two fifths. A teacher asks whether the proposed answer should be larger or smaller than one half. A strip diagram then shows the need for equal-sized units. Dividing both wholes into sixths supports the calculation three sixths plus two sixths equals five sixths. The written procedure can now be connected to the meaning of equivalent fractions and the unit being counted.\n\nThe teacher next varies the numbers, asks learners to explain a common error, and includes cases with an already shared denominator. Some practice develops fluency; comparison and explanation make relationships explicit. A student who can describe equal-sized parts but cannot reliably find an equivalent fraction needs different support from one who calculates accurately without understanding the units. The diagnosis should be based on several responses rather than one spoken explanation or one correct answer.\n\nAssessment can separate, while also connecting, the two aspects. Ask learners to complete a calculation, judge whether a result is plausible, explain a representation, and adapt a method to a new case. A rehearsed explanation may be procedural in its own way, so verbal sophistication is not a perfect measure of conceptual knowledge. Conversely, a correct procedure may contain meaningful reasoning even when a learner struggles to express it in the language of instruction. Diagrams, gestures, and examples can offer additional evidence.\n\nFor educators, the useful planning question is where a lesson makes the connection between a method and its underlying relationships visible. Worked examples, guided comparison, purposeful practice, and discussion can each contribute. Avoid presenting speed and understanding as enemies or assuming that every learner follows the same developmental route. An AI tutor should be evaluated on whether its feedback supports those connections, not merely whether it supplies a correct final answer. The goal is reliable, flexible mathematical activity in which learners can use methods, explain relevant principles, and recognize when a familiar method needs to change.",
    "coreIdeas": [
      "Conceptual knowledge concerns relationships and principles; procedural knowledge concerns methods.",
      "The two can develop through reciprocal, iterative connections rather than a universal fixed order.",
      "Use varied assessments to distinguish accurate execution, understanding, and flexible application."
    ],
    "educationConnection": "Connect fraction addition to equal-sized units, then assess calculation, error diagnosis, representation, and transfer separately.",
    "relatedConcepts": [
      "Procedural fluency",
      "Conceptual understanding",
      "Iterative learning"
    ],
    "tags": [
      "mathematics knowledge",
      "procedures",
      "concepts"
    ],
    "imageAlt": "A mathematics educator and two adult learners connect a half-shaded bar model with the steps used to construct it.",
    "summaryAudioTitle": "Listen to Conceptual and Procedural Knowledge",
    "sourceUrls": [
      {
        "label": "Rittle-Johnson and Alibali: Conceptual and Procedural Knowledge",
        "url": "https://alibali.psych.wisc.edu/wp-content/uploads/sites/371/2018/02/Rittle-JohnsonAlibali1999.pdf"
      },
      {
        "label": "Matthews and Rittle-Johnson: In Pursuit of Knowledge",
        "url": "https://cdn.vanderbilt.edu/vu-sub/wp-content/uploads/sites/280/2023/08/04183157/ATME_MatthewsandRittle-Johnson_2009.pdf"
      }
    ]
  },
  {
    "id": "academy-125",
    "listingIdentifier": "AI Knowledge 63",
    "title": "Machine Unlearning",
    "slug": "machine-unlearning",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-18T08:00:00.000Z",
    "image": "/images/academy/covers/academy-125-machine-unlearning.png",
    "summaryAudio": "/audio/academy/academy-125-machine-unlearning-summary.m4a",
    "shortSummary": "Machine unlearning seeks to remove specified training-data influence from a model. Deleting a record, suppressing an answer, and demonstrating successful unlearning are different operations.",
    "fullSummary": "A learner's record is removed from a training database. Does a model previously trained on that record also forget it? Usually, deleting the stored record does not automatically reverse the changes made during training. Machine unlearning studies methods for removing specified training-data influence from an already trained system. The question is technically different from deleting a file, restricting access, or asking a chatbot not to mention a topic.\n\nA natural reference point is retraining the model without the data to be removed. That may be expensive, and randomized training can produce different models even from the same dataset. Unlearning research therefore needs explicit definitions of what it means to match the appropriate retraining outcome. Some methods provide formal guarantees under stated assumptions; others offer approximate empirical changes. These categories should not be presented as equivalent simply because both are called unlearning.\n\nSystem design can make removal easier. Bourtoule and colleagues proposed a training approach that divides work into shards and slices so that affected portions can be retrained more selectively. Other research examines efficient deletion for particular learning algorithms. Such methods illustrate why preparation and model structure matter. A technique demonstrated for one algorithm or dataset cannot automatically be assumed effective for every large language model.\n\nImagine a college running a small classifier trained on consented discussion posts. A participant later withdraws a set of contributions under the project's agreed process. The team identifies the original records, derived examples, training versions, and affected model artifacts. It evaluates whether its chosen deletion method is applicable or whether full retraining is needed. A replacement model is then checked for both the intended removal criterion and continued performance on legitimate tasks. Copies, caches, evaluation sets, and backups require their own handling according to the established retention policy.\n\nEvaluation is difficult. A model's failure to reproduce a phrase does not prove that all influence has disappeared. Conversely, a model may still know a fact because it appeared in other legitimate data. Membership tests and extraction attempts can provide useful evidence but are not universal proofs of forgetting. The test must correspond to the claim being made, including whether protection concerns particular examples, a person's contributions, or a broader category of information.\n\nFor educators procuring or building AI systems, unlearning should be discussed before sensitive data enter training. Ask which models use the data, how contributions can be located, what removal mechanism exists, and what evidence supports it. Do not treat a chat interface's delete button as proof about model weights. A classroom exercise can trace a fictional record through a training pipeline and mark which artifacts require action after withdrawal. This clarifies the practical lesson: responsible removal combines data lineage, an appropriate technical method, verification, and communication about the limits of the achieved result.",
    "coreIdeas": [
      "Deleting source data does not automatically remove its influence from trained parameters.",
      "Unlearning claims need an explicit reference, scope, and guarantee or empirical criterion.",
      "Removal workflows must track derived data, model artifacts, copies, and remaining uncertainty."
    ],
    "educationConnection": "Trace a fictional learner record through training and identify the evidence required to claim its influence has been removed.",
    "relatedConcepts": [
      "Data deletion",
      "Retraining",
      "Data lineage"
    ],
    "tags": [
      "machine unlearning",
      "training data",
      "model privacy"
    ],
    "imageAlt": "A teacher and two adult learners trace an excluded record through a revised model workflow and a separate validation step.",
    "summaryAudioTitle": "Listen to Machine Unlearning",
    "sourceUrls": [
      {
        "label": "Bourtoule and colleagues: Machine Unlearning",
        "url": "https://arxiv.org/abs/1912.03817"
      },
      {
        "label": "Ginart and colleagues: Making AI Forget You",
        "url": "https://arxiv.org/abs/1907.05012"
      }
    ]
  },
  {
    "id": "academy-126",
    "listingIdentifier": "Educational Theory 63",
    "title": "Representational Competence",
    "slug": "representational-competence",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-18T08:00:00.000Z",
    "image": "/images/academy/covers/academy-126-representational-competence.png",
    "summaryAudio": "/audio/academy/academy-126-representational-competence-summary.m4a",
    "shortSummary": "Representational competence means interpreting, choosing, constructing, and connecting representations for a purpose, while recognizing what each representation reveals and leaves out.",
    "fullSummary": "A student can reproduce a graph neatly yet misunderstand what it represents. Representational competence concerns using representations to think and communicate: interpreting their conventions, choosing suitable forms, constructing them accurately, connecting them with other forms, and recognizing their limits. A representation may be a diagram, graph, equation, table, physical model, gesture, or verbal description. Competence involves relationships between the representation, its purpose, and the phenomenon being studied.\n\nRepresentations are selective. A map preserves some spatial relationships while omitting others; a graph encodes particular variables and scales; a chemical structure uses conventions that differ from a photograph of a substance. Learners need to know which features carry meaning and which are incidental. A familiar-looking image can therefore be misleading when its conventions are not understood. Attractive presentation is not evidence of successful interpretation.\n\nConsider an adult physics class investigating steady motion. Groups observe a toy vehicle, record positions at equal time intervals, construct a position-time graph, and describe the motion in words. The teacher asks what the graph's slope represents and whether the line depicts the vehicle's path through the room. Students then compare a second motion with a pause. The changing relationship between observations, table entries, graph segments, and descriptions becomes the object of learning.\n\nA useful next task reverses the direction: give a graph and ask learners to enact or describe a possible motion. Another asks them to identify two different physical situations that could produce the same graph. These tasks reveal whether students treat the representation as a meaningful model or merely a drawing to imitate. They also expose ambiguity. A position-time graph alone may not provide every detail about the setting, and students should not invent missing information.\n\nTeaching can make representational choices explicit. Ask why a table is useful for exact values, why a graph reveals a trend, and when an equation makes a relationship easier to generalize. Require explanations of axes, units, symbols, and assumptions. Start with a manageable number of forms and provide support for translation; asking novices to coordinate many unfamiliar displays at once can become burdensome. Accessible alternatives should preserve the intended relationships, not simply describe the visual appearance of a figure.\n\nResearch on representational competence includes domain-specific studies, so skill with one kind of representation should not be assumed to transfer everywhere. An expert in statistical graphs may still need instruction in molecular diagrams. Assess interpretation and purposeful construction separately from artistic or software fluency. In AI-supported work, learners can critique a generated diagram against the underlying data and explain necessary corrections. The educational aim is agency over representations: knowing what they claim, how to use them, and when another form or additional evidence is needed. That aim extends well beyond recognizing symbols or copying a teacher's finished example.",
    "coreIdeas": [
      "Representations encode selected relationships through conventions that learners must understand.",
      "Competence includes interpretation, construction, selection, translation, and critique.",
      "Assess meaning and purpose separately from drawing quality or software fluency."
    ],
    "educationConnection": "Translate observed motion into a table and graph, then reverse the task by interpreting a new graph as a possible motion.",
    "relatedConcepts": [
      "Representational fluency",
      "Graph interpretation",
      "Model limitations"
    ],
    "tags": [
      "representational competence",
      "representations",
      "science learning"
    ],
    "imageAlt": "A physics educator and two adult learners connect a toy vehicle's positions with an observation table and a rising motion graph.",
    "summaryAudioTitle": "Listen to Representational Competence",
    "sourceUrls": [
      {
        "label": "Dufresne, Gerace, and Leonard: Solving Physics Problems with Multiple Representations",
        "url": "https://srri.umass.edu/publications/dufresne-1997spp/"
      },
      {
        "label": "Developing Representational Competence: Linking Motion to Physics Concepts through Graphs",
        "url": "https://www.tandfonline.com/doi/full/10.1080/23735082.2020.1750670"
      }
    ]
  }
];
