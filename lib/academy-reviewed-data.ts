import type { AcademyLesson } from "@/lib/types";

export const reviewedAcademyLessons: AcademyLesson[] = [
  {
    id: "academy-001",
    slug: "what-artificial-intelligence-is",
    title: "What Artificial Intelligence Is",
    track: "ai-knowledge",
    level: "basics",
    tags: ["artificial intelligence", "systems", "responsible AI"],
    image: "/images/academy/covers/academy-001-what-ai-is.png",
    imageAlt: "An educator and two adult learners examine an artificial intelligence learning apparatus in a bright laboratory",
    summaryImage: "/images/academy/summary/academy-001-what-ai-is.png",
    summaryImageAlt: "A learner observes a three-stage AI process connecting real-world inputs, learned patterns, and a recommendation",
    summaryAudio: "/audio/academy/academy-001-what-ai-is-summary.m4a",
    summaryAudioTitle: "Listen to What Artificial Intelligence Is",
    shortSummary: "A practical definition of AI that separates capabilities, methods, and human purposes without treating the technology as magic.",
    fullSummary: `Artificial intelligence is a broad name for computer systems that produce outputs associated with human cognitive abilities. Those outputs may be predictions, recommendations, classifications, generated language, images, plans, or decisions. A useful definition focuses on what a system does: it receives inputs, represents patterns in some computational form, and generates outputs that can influence a digital or physical environment. This avoids imagining AI as a single machine or a humanlike mind. A spelling checker, a recommendation engine, a face-recognition system, and a conversational model can all be AI, although their purposes and capabilities differ greatly.

Most contemporary AI is built from data and algorithms. An algorithm is a procedure for transforming information. In rule-based AI, people write many of the rules directly. In machine learning, developers specify a learning process and the system estimates useful patterns from examples. Neither approach understands the world exactly as a person does. Its performance depends on the task definition, training data, evaluation measures, computing resources, and conditions in which it is used. A system that performs very well on one benchmark may fail when language, users, or circumstances change.

It is helpful to separate narrow AI from the idea of general intelligence. Today’s deployed systems are designed or trained for bounded kinds of work, even when a general-purpose interface makes them appear flexible. They can combine several capabilities and operate across many topics, but fluency is not proof of consciousness, intention, or reliable reasoning. Outputs are statistical or programmed results, not guarantees of truth. Human users therefore need to judge whether a tool is suitable for the stakes, population, and context involved.

AI is also a sociotechnical system. The model is only one part. Data collectors, designers, teachers, institutions, policies, interfaces, and affected communities shape what the technology becomes in practice. Choices about labels, objectives, access, privacy, and acceptable error distribute benefits and harms. Responsible AI work asks who defines success, whose data are represented, how decisions can be challenged, and what human oversight remains. These questions are especially important in education, where a prediction or recommendation can affect opportunity and self-belief.

For learners, the strongest starting point is neither excitement nor fear but precise questioning. What task is the system designed to perform? What evidence shows that it works? Where did its information come from? What can it not do? Who remains accountable for the result? Those questions turn AI literacy into practical judgment. They also reveal why AI should usually support human purposes rather than define them. Understanding AI as designed, limited, and situated technology makes it easier to use its real strengths while noticing uncertainty, bias, and consequences. This definition also leaves room for future techniques: methods will change, but careful attention to purpose, evidence, context, and responsibility will remain essential.`,
    coreIdeas: [
      "AI systems transform inputs into predictions, recommendations, generated content, or decisions for defined purposes.",
      "Capability is task- and context-dependent; fluent output does not establish humanlike understanding or reliable truth.",
      "AI is sociotechnical: data, people, institutions, interfaces, and rules jointly shape its educational effects.",
    ],
    educationConnection: "Teachers and learners can evaluate any classroom AI by naming its task, evidence, limitations, data assumptions, and accountable human decision-maker before adoption.",
    relatedConcepts: ["Machine learning", "Algorithmic bias", "Human oversight"],
    sourceUrls: [
      { label: "OECD AI principles", url: "https://oecd.ai/en/ai-principles" },
      { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "UNESCO guidance for generative AI in education", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
    ],
    createdAt: "2026-07-15T08:00:00.000Z",
  },
  {
    id: "academy-002",
    slug: "machine-learning-deep-learning-generative-ai",
    title: "Machine Learning, Deep Learning, and Generative AI",
    track: "ai-knowledge",
    level: "basics",
    tags: ["machine learning", "deep learning", "generative AI"],
    image: "/images/academy/covers/academy-002-ml-dl-generative-ai.png",
    imageAlt: "An educator and adult learner compare nested learning systems with a generated abstract form",
    summaryImage: "/images/academy/summary/academy-002-ml-dl-generative-ai.png",
    summaryImageAlt: "Comparison of predictive machine learning and generative AI workflows",
    summaryAudio: "/audio/academy/academy-002-ml-dl-generative-ai-summary.m4a",
    summaryAudioTitle: "Listen to Machine Learning, Deep Learning, and Generative AI",
    shortSummary: "How three related terms fit together, what each contributes, and why their differences matter when choosing educational tools.",
    fullSummary: `Machine learning, deep learning, and generative AI are related concepts, but they are not interchangeable. Machine learning is a family of methods that improves performance on a task by finding patterns in data rather than relying only on rules written by programmers. A model might learn to classify messages, estimate a student’s next response, or rank resources. Training adjusts the model’s parameters using examples and an objective that describes better or worse performance. Evaluation then checks how well the learned pattern transfers to data the model did not see during training.

Deep learning is a branch of machine learning built around neural networks with many computational layers. Each layer transforms a representation, allowing later layers to combine simpler patterns into more abstract ones. In an image system, early layers might respond to edges while later layers represent shapes or objects. In a language model, layers build context-sensitive representations of tokens. Deep learning became powerful because large datasets, specialized hardware, improved algorithms, and scalable software made it practical to train networks with very large numbers of parameters.

Generative AI describes systems designed to create new content that resembles patterns in their training data. The output may be text, images, audio, video, code, or combinations of these. Many current generative systems use deep learning, but “generative” names the purpose of producing content, while “deep” describes an architectural approach. By contrast, a predictive model may assign a label or score without generating a rich artifact. The categories overlap: a language model is deep learning, machine learning, and generative AI at the same time.

These systems learn correlations, not a complete causal model of reality. Results depend on data coverage, objective functions, prompts, sampling settings, and surrounding product design. Generative models can recombine patterns in useful and surprising ways, yet they can also produce plausible errors, reproduce stereotypes, or obscure the source of a claim. Bigger models often gain capabilities, but scale alone does not ensure accuracy, fairness, privacy, or educational value. Appropriate evaluation must reflect the actual use case rather than a general impression of fluency.

In education, the distinctions guide better decisions. A teacher might use a conventional classifier to flag practice items for review, a deep vision model to recognize handwritten notation, or generative AI to propose explanations and examples. Each calls for different checks. Predictive accuracy, calibration, provenance, originality, age appropriateness, and teacher oversight may matter in different proportions. Students benefit from comparing outputs and tracing evidence instead of accepting a technical label as a quality guarantee. Knowing the family relationship among these terms makes the technology easier to discuss, select, and challenge with precision. It also prevents a common mistake: assuming every AI application generates content or that every generated artifact reflects the same model, data, and risk profile.`,
    coreIdeas: [
      "Machine learning estimates patterns from data; deep learning is a multilayer neural-network approach within machine learning.",
      "Generative AI is defined by creating content and commonly uses deep-learning models, so the categories overlap.",
      "Educational suitability depends on task-specific evidence, provenance, risks, and human oversight rather than model scale alone.",
    ],
    educationConnection: "Distinguishing prediction from generation helps educators choose relevant evaluation criteria and teach students why a confident output still needs evidence and review.",
    relatedConcepts: ["Training data", "Neural networks", "Model evaluation"],
    sourceUrls: [
      { label: "Deep Learning book", url: "https://www.deeplearningbook.org/" },
      { label: "Stanford AI Index", url: "https://aiindex.stanford.edu/report/" },
      { label: "NIST Generative AI Profile", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" },
    ],
    createdAt: "2026-07-16T08:00:00.000Z",
  },
  {
    id: "academy-003",
    slug: "how-large-language-models-generate-text",
    title: "How Large Language Models Generate Text",
    track: "ai-knowledge",
    level: "core",
    tags: ["large language models", "transformers", "tokens"],
    image: "/images/academy/covers/academy-003-how-llms-generate-text.png",
    imageAlt: "An educator and adult learner inspect a transparent layered language-model apparatus",
    summaryImage: "/images/academy/summary/academy-003-how-llms-generate-text.png",
    summaryImageAlt: "Step-by-step diagram of token prediction and repeated text generation",
    summaryAudio: "/audio/academy/academy-003-how-llms-generate-text-summary.m4a",
    summaryAudioTitle: "Listen to How Large Language Models Generate Text",
    shortSummary: "A step-by-step account of tokenization, transformer attention, next-token probabilities, and the limits hidden by fluent language.",
    fullSummary: `A large language model generates text by repeatedly predicting a likely next token. A token is a unit produced by a tokenizer: it may be a word, part of a word, punctuation, or another symbol. When a prompt enters the system, the tokenizer converts it into token identifiers. The model maps those identifiers to numerical vectors called embeddings, which represent features learned during training. The model does not search a stored sentence and paste it. It computes a distribution of probabilities over possible continuations from patterns encoded in its parameters and the context currently available.

Most modern language models use the transformer architecture. Its attention mechanism lets each token representation weigh information from other positions in the context. Across many layers, the model builds representations sensitive to syntax, meaning, style, instructions, and longer-range relationships. Position information preserves order. During pretraining, the model processes vast amounts of text and adjusts parameters to reduce errors in predicting missing or next tokens. This simple objective, repeated at scale, encourages the network to capture many regularities of language and knowledge expressed through language.

At generation time, the model produces scores for the next token and a decoding method chooses one. Always selecting the highest-probability option can sound repetitive. Sampling can produce more variety by drawing from several plausible options, with controls such as temperature changing how concentrated the choices are. The selected token is appended to the context, and the cycle runs again until a stopping condition is reached. Because each choice changes later probabilities, small differences can lead to substantially different answers.

Instruction tuning and preference-based training shape a pretrained model into a more useful conversational assistant. They teach response formats, safety behaviors, and patterns that people tend to prefer. Retrieval tools can also supply documents at request time, while external tools can calculate, browse, or act. These additions change the information available to the system, but they do not make every output correct. A model may construct an unsupported statement because the next-token sequence is linguistically plausible. This is often called hallucination, although the mechanism is ordinary probabilistic generation rather than a special failure mode.

For education, mechanism matters. Students should understand why clear prose can coexist with factual error, fabricated citations, or shallow reasoning. Prompting can improve relevance by specifying purpose, audience, constraints, and evidence, but verification remains necessary. Teachers can ask learners to compare outputs with primary sources, explain which claims are supported, and revise weak reasoning. Language models are powerful partners for drafting, questioning, feedback, and alternative explanations when tasks preserve intellectual work. Treating generated text as a proposal to inspect, rather than an authority to obey, aligns classroom practice with how the technology actually operates. That stance preserves the speed and range of generation while keeping evidence, disciplinary standards, and learner judgment at the center.`,
    coreIdeas: [
      "An LLM repeatedly predicts the next token from the prompt and the tokens already generated.",
      "Transformer attention builds context-sensitive representations, while decoding controls choose among probable continuations.",
      "Fluency follows from learned language patterns and does not guarantee factual accuracy, sources, or sound reasoning.",
    ],
    educationConnection: "Students can use LLM output as a draft or hypothesis, then verify claims against primary evidence and explain revisions as part of visible learning.",
    relatedConcepts: ["Tokenization", "Attention", "Retrieval-augmented generation"],
    sourceUrls: [
      { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { label: "Language Models are Few-Shot Learners", url: "https://arxiv.org/abs/2005.14165" },
      { label: "Stanford CS324 language models", url: "https://stanford-cs324.github.io/winter2022/" },
    ],
    createdAt: "2026-07-17T08:00:00.000Z",
  },
  {
    id: "academy-004",
    slug: "behaviorism-learning-through-consequences",
    title: "Behaviorism and Learning Through Consequences",
    track: "educational-theory",
    level: "basics",
    tags: ["behaviorism", "reinforcement", "feedback"],
    image: "/images/academy/covers/academy-004-behaviorism-consequences.png",
    imageAlt: "A learner operates a three-stage classroom feedback apparatus while an educator observes",
    summaryImage: "/images/academy/summary/academy-004-behaviorism-consequences.png",
    summaryImageAlt: "A three-part feedback loop connects a signal, an action, and an outcome around a learner",
    summaryAudio: "/audio/academy/academy-004-behaviorism-consequences-summary.m4a",
    summaryAudioTitle: "Listen to Behaviorism and Learning Through Consequences",
    shortSummary: "How observable behavior changes through consequences, practice, cues, and feedback—and where this lens helps or falls short.",
    fullSummary: `Behaviorism explains learning through changes in observable behavior and the environmental conditions surrounding those changes. Rather than beginning with hidden mental structures, a behaviorist asks what a learner does, what happens before the action, and what follows it. This focus made learning measurable and supported careful experiments. Classical conditioning studies how one stimulus comes to elicit a response through association. Operant conditioning studies how consequences change the future likelihood of behavior. Educational applications draw most often on operant ideas, practice, feedback, and the deliberate shaping of complex performances.

Reinforcement is any consequence that increases a behavior. Positive reinforcement adds something valued, such as informative praise or access to a meaningful activity. Negative reinforcement removes an unwanted condition when the desired behavior occurs; it is not the same as punishment. Punishment aims to reduce behavior, either by adding an aversive consequence or removing something valued. These terms describe effects, not intentions. A reward is only a reinforcer if the behavior actually becomes more likely. Extinction occurs when a previously reinforced response no longer produces the expected consequence and gradually decreases.

Timing and contingency matter. Feedback that follows a response quickly can make the relationship between action and outcome clearer. Complex skills can be shaped by reinforcing successive approximations, then gradually raising the standard. Practice schedules also affect persistence. Continuous reinforcement helps establish a new behavior, while intermittent schedules can make an established response more resistant to disappearance. Discriminative cues signal when a behavior is likely to be useful or reinforced. In a classroom, a worked example, prompt, rubric, or routine can become such a cue.

Behaviorism is especially useful where outcomes can be specified and observed: fluent recall, safe laboratory procedures, letter formation, multiplication facts, or consistent participation routines. Immediate corrective feedback and well-sequenced practice can reduce ambiguity. Yet the lens is incomplete. Correct performance does not always reveal conceptual understanding, motivation, identity, creativity, or the reasoning used. External rewards can also narrow attention or displace intrinsic interest when used carelessly. Effective education therefore does not reduce every goal to compliance or points.

A balanced teacher uses behaviorist tools transparently and selectively. The desired behavior should connect to a worthwhile learning purpose, feedback should carry information rather than mere approval, and learners should increasingly monitor their own performance. Digital systems can provide rapid practice and adaptive cues, but their metrics should not become the definition of learning. Combining observable evidence with questions about thinking, emotion, and social meaning gives a fuller account. Behaviorism remains valuable because consequences shape action; its limits remind educators that action is only one window into learning. Used with care, this tradition offers precise tools for designing practice without turning education into a system of rewards and penalties.`,
    coreIdeas: [
      "Behaviorism studies observable changes and the cues and consequences that make actions more or less likely.",
      "Reinforcement increases behavior, punishment decreases it, and their meanings depend on measured effects rather than intent.",
      "Practice and immediate feedback support defined skills, but observable performance alone cannot represent all learning.",
    ],
    educationConnection: "Use explicit cues, deliberate practice, and informative consequences for well-defined skills while also examining learners’ understanding, motivation, and agency.",
    relatedConcepts: ["Classical conditioning", "Operant conditioning", "Mastery learning"],
    sourceUrls: [
      { label: "Skinner Foundation archive", url: "https://www.bfskinner.org/publications/" },
      { label: "APA Dictionary: operant conditioning", url: "https://dictionary.apa.org/operant-conditioning" },
      { label: "OpenStax Psychology: learning", url: "https://openstax.org/books/psychology-2e/pages/6-introduction" },
    ],
    createdAt: "2026-07-18T08:00:00.000Z",
  },
  {
    id: "academy-005",
    slug: "cognitive-load-theory",
    title: "Cognitive Load Theory",
    track: "educational-theory",
    level: "core",
    tags: ["cognitive load", "working memory", "instructional design"],
    image: "/images/academy/covers/academy-005-cognitive-load-theory.png",
    imageAlt: "An adult learner studies beside an educator at a desk divided between organized and distracting materials",
    summaryImage: "/images/academy/summary/academy-005-cognitive-load-theory.png",
    summaryImageAlt: "Three information streams enter a capacity-limited workspace and form organized long-term knowledge",
    summaryAudio: "/audio/academy/academy-005-cognitive-load-theory-summary.m4a",
    summaryAudioTitle: "Listen to Cognitive Load Theory",
    shortSummary: "Why working memory limits make guidance, sequencing, worked examples, and coherent multimedia central to instructional design.",
    fullSummary: `Cognitive load theory begins with a contrast between working memory and long-term memory. Working memory can actively process only a limited amount of unfamiliar information at once. Long-term memory can hold richly organized knowledge structures, often called schemas, that let experts treat many interacting elements as a meaningful unit. Learning occurs when useful knowledge becomes organized in long-term memory and can guide future thinking. Instruction should therefore help novices build and automate schemas without overwhelming the limited workspace needed to understand new material.

The theory commonly distinguishes intrinsic and extraneous cognitive load. Intrinsic load comes from the complexity of the material relative to what the learner already knows. The same algebra problem may be demanding for a beginner and simple for an expert because the expert has relevant schemas. Teachers cannot remove the subject’s essential relationships, but they can sequence elements, preteach components, and manage complexity. Extraneous load comes from avoidable features of presentation or activity that consume attention without serving the learning goal, such as split sources, decorative detail, unclear instructions, or unnecessary search.

Several instructional effects follow. Worked examples can help novices by showing a complete solution path before independent problem solving. Completion problems then remove parts of the support, and practice gradually increases learner responsibility. Integrating labels with a diagram can reduce the need to mentally combine separated information. Eliminating redundant explanations can prevent learners from processing the same simple content in competing forms. In multimedia learning, words and visuals should be coordinated around the essential idea rather than used to decorate a slide.

Guidance must change with expertise. Support that reduces load for beginners can become redundant for knowledgeable learners, an effect known as expertise reversal. This is why cognitive load is not a fixed property of a resource. It emerges from the interaction among content, prior knowledge, task, presentation, and time. Difficulty is not automatically harmful: effort directed toward relevant relationships can support learning. The aim is not to make thinking effortless, but to protect limited attention from activity that does not contribute to the target schema.

In classrooms, cognitive load theory encourages diagnosis before redesign. What elements must learners coordinate? Which are already familiar? Does the interface force them to remember information that could remain visible? Are hints arriving when needed? AI tools can adapt examples and explanations, but extra chat, animations, or choices may also add load. Teachers can use short checks to decide when to fade guidance and when to restore it. The practical principle is economical: preserve productive complexity, remove needless complexity, and align support with the learner’s current knowledge. Designers should test these decisions with learners, because a clean-looking resource can still overload novices and a dense representation can be efficient for experts.`,
    coreIdeas: [
      "Working memory is limited for unfamiliar information, while organized schemas in long-term memory expand effective capacity.",
      "Instruction should manage intrinsic complexity and reduce extraneous processing that does not serve the learning goal.",
      "Guidance should fade as knowledge grows because support useful to novices can become redundant for experts.",
    ],
    educationConnection: "Teachers can sequence complexity, integrate related representations, begin with worked examples, and fade support using evidence of learners’ developing schemas.",
    relatedConcepts: ["Working memory", "Worked-example effect", "Expertise reversal"],
    sourceUrls: [
      { label: "Sweller on cognitive load during problem solving", url: "https://doi.org/10.1207/s15516709cog1202_4" },
      { label: "Paas, Renkl, and Sweller overview", url: "https://doi.org/10.1207/S15326985EP3801_8" },
      { label: "de Jong on cognitive load theory", url: "https://doi.org/10.1016/j.compedu.2009.09.012" },
    ],
    createdAt: "2026-07-19T08:00:00.000Z",
  },
  {
    id: "academy-006",
    slug: "constructivism-active-knowledge-building",
    title: "Constructivism and Active Knowledge Building",
    track: "educational-theory",
    level: "basics",
    tags: ["constructivism", "prior knowledge", "active learning"],
    image: "/images/academy/covers/academy-006-constructivism-knowledge-building.png",
    imageAlt: "A bridge-like model built from wood, colorful blocks, and transparent scaffolds with learners behind it",
    summaryImage: "/images/academy/summary/academy-006-constructivism-knowledge-building.png",
    summaryImageAlt: "Learners assemble a bridge from prior-knowledge blocks, dialogue links, and temporary scaffolding",
    summaryAudio: "/audio/academy/academy-006-constructivism-knowledge-building-summary.m4a",
    summaryAudioTitle: "Listen to Constructivism and Active Knowledge Building",
    shortSummary: "How learners actively interpret experience through prior knowledge, inquiry, explanation, dialogue, and revision.",
    fullSummary: `Constructivism is a family of perspectives sharing one central claim: learners do not receive knowledge as an unchanged copy. They actively interpret experience through what they already know, the questions they notice, the tools they use, and the social settings in which meaning is discussed. New information may extend an existing idea, reorganize it, or conflict with it. Learning therefore involves building and revising mental structures, not simply recording explanations delivered by a teacher.

Prior knowledge is powerful because it shapes attention and interpretation. It can support rapid understanding, but it can also contain misconceptions that resist change. A learner who believes heavier objects always fall faster may fit a demonstration into that belief unless the discrepancy becomes explicit and intelligible. Constructivist teaching often elicits current thinking, creates experiences that make important relationships visible, and asks learners to explain how their ideas changed. Assessment becomes a way to uncover reasoning, not merely score the final answer.

Different constructivist traditions emphasize different processes. Cognitive constructivism is associated with individual reorganization of knowledge through experience. Social constructivist accounts emphasize language, culture, participation, and interaction with more knowledgeable others. These emphases are compatible in many classrooms: a learner interprets personally while using concepts, representations, and norms developed with others. Dialogue matters because explaining, questioning, and comparing perspectives can make assumptions available for inspection.

Active learning follows from this account, but activity alone is not enough. Manipulating materials, talking in groups, or exploring a simulation can remain superficial when learners lack a clear problem, relevant knowledge, guidance, or a reason to connect observations. Productive tasks require intellectual activity: predicting, retrieving, explaining, representing, testing, comparing, and revising. Teachers still play a decisive role by selecting examples, modeling disciplinary practices, supplying vocabulary, asking diagnostic questions, and structuring collaboration. Constructivism does not require leaving novices to discover everything independently.

In education, the perspective supports inquiry, discussion, project work, formative assessment, and authentic problems when these are carefully scaffolded. Digital and AI tools can offer simulations, alternative explanations, feedback, or conversational partners, but learners need to evaluate and integrate what those tools provide. A useful lesson might begin with a prediction, collect evidence, compare interpretations, introduce an expert model, and conclude with an explanation transfer task. The teacher can then see not only whether an answer changed but why. Constructivism’s enduring contribution is to treat learning as meaning-making: knowledge becomes usable when learners connect it, test it, articulate it, and revise it in communities that care about evidence. This view also changes the meaning of error. A wrong answer can reveal a coherent prior model, giving the teacher a starting point for questions, contrasting cases, and experiences that support durable conceptual change across unfamiliar situations and future problems.`,
    coreIdeas: [
      "Learners interpret new experience through prior knowledge and actively build or revise organized understanding.",
      "Meaning-making is both individual and social, shaped by language, tools, dialogue, culture, and participation.",
      "Active learning requires purposeful cognitive work and guidance; physical activity or unguided discovery is insufficient.",
    ],
    educationConnection: "Elicit prior ideas, design evidence-rich tasks, scaffold explanation and dialogue, and assess how learners revise their reasoning—not only whether answers are correct.",
    relatedConcepts: ["Prior knowledge", "Scaffolding", "Conceptual change"],
    sourceUrls: [
      { label: "How People Learn II", url: "https://nap.nationalacademies.org/catalog/24783/how-people-learn-ii-learners-contexts-and-cultures" },
      { label: "Bruner, The Process of Education", url: "https://www.hup.harvard.edu/books/9780674710016" },
      { label: "Piaget archive", url: "https://archivespiaget.ch/en/jean-piaget/works" },
    ],
    createdAt: "2026-07-20T08:00:00.000Z",
  },
  {
    id: "academy-007",
    slug: "training-validation-and-test-data",
    title: "Training, Validation, and Test Data",
    track: "ai-knowledge",
    level: "basics",
    tags: ["training data", "validation data", "model evaluation"],
    image: "/images/academy/covers/academy-007-training-validation-and-test-data.png",
    imageAlt: "An educator and adult learner compare three distinct fields of blue, cyan, and coral data points in a bright university studio",
    summaryImage: "/images/academy/summary/academy-007-training-validation-and-test-data.png",
    summaryImageAlt: "A large blue training field flows through a cyan validation field toward a separate coral test field",
    summaryAudio: "/audio/academy/academy-007-training-validation-and-test-data-summary.m4a",
    summaryAudioTitle: "Listen to Training, Validation, and Test Data",
    shortSummary: "Why machine-learning projects separate data for fitting, development decisions, and a final independent check of generalization.",
    fullSummary: `A machine-learning model should do more than remember the examples used to build it. It should generalize: perform usefully on relevant cases it has not encountered before. Training, validation, and test data support different parts of that argument. They are not three kinds of information by nature. They are separate roles assigned to examples so that learning, development decisions, and final evaluation do not all rely on the same evidence.

The training set is the data used to fit the model. During training, an algorithm repeatedly compares predictions with an objective, calculates error, and adjusts model parameters. A flexible model can reduce training error by capturing real patterns, but it can also fit noise or accidental details. A very low training loss therefore shows that the model has adapted to its training examples; by itself, it does not show that the model will work for new learners, schools, or future data.

The validation set provides evidence during development. Teams use it to compare candidate models, tune hyperparameters, choose features, set thresholds, or decide when to stop training. Because these choices respond to validation results, the validation set indirectly influences the finished system even though its examples do not update model parameters in the usual training loop. Repeated experimentation can gradually overfit the validation evidence. Cross-validation can use several rotating training and validation folds when data are scarce, but an untouched final test set is still valuable.

The test set is reserved for an independent estimate after the main choices have been made. Looking at test results and then redesigning the model turns that test set into another validation set. Data leakage creates a similar problem when information from validation or test examples enters training through duplicate records, preprocessing, feature construction, or related people appearing across splits. Random splitting is not always appropriate. A time-based split may better represent future use, and group-based splitting can keep records from one student or school together. There is no universal percentage for each set; size and design should reflect the population, task, dependencies, and uncertainty that matter.

Educational AI makes these distinctions concrete. Suppose a system predicts which practice item a learner should receive next. Training data may fit the prediction model, validation data may guide thresholds and design choices, and test data should estimate performance on genuinely unseen learners or contexts. Results should also be examined across relevant groups, because a strong average can hide weak performance for particular students. A clean split cannot repair biased labels or an unrepresentative dataset, and historical test performance does not guarantee future validity when conditions change. The central discipline is evidential independence: separate the examples that teach the model from the examples that guide its design and from the examples used to support the final claim.`,
    coreIdeas: [
      "Training data fits model parameters, while low training error alone cannot establish performance on unseen cases.",
      "Validation data guides development choices; repeated tuning can overfit it, so final test evidence should remain independent.",
      "Split design must prevent leakage and reflect real deployment structure, including time, groups, representation, and change.",
    ],
    educationConnection: "When evaluating educational AI, ask whether learners, schools, time periods, and preprocessing were separated in ways that make the reported test result relevant to the intended classroom use.",
    relatedConcepts: ["Generalization", "Overfitting", "Data leakage"],
    sourceUrls: [
      { label: "Google ML: dividing datasets", url: "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets" },
      { label: "Scikit-learn: cross-validation", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
      { label: "TensorFlow: overfit and underfit", url: "https://www.tensorflow.org/tutorials/keras/overfit_and_underfit" },
    ],
    createdAt: "2026-07-23T08:00:00.000Z",
  },
  {
    id: "academy-008",
    slug: "working-memory-and-long-term-memory",
    title: "Working Memory and Long-Term Memory",
    track: "educational-theory",
    level: "basics",
    tags: ["working memory", "long-term memory", "instructional design"],
    image: "/images/academy/covers/academy-008-working-memory-and-long-term-memory.png",
    imageAlt: "An adult learner arranges a small set of geometric models with an educator in a sunlit university learning studio",
    summaryImage: "/images/academy/summary/academy-008-working-memory-and-long-term-memory.png",
    summaryImageAlt: "Four active objects on a small workspace exchange organized forms with an expansive curved archive",
    summaryAudio: "/audio/academy/academy-008-working-memory-and-long-term-memory-summary.m4a",
    summaryAudioTitle: "Listen to Working Memory and Long-Term Memory",
    shortSummary: "How a limited active workspace interacts with durable organized knowledge during comprehension, problem solving, encoding, and retrieval.",
    fullSummary: `Working memory and long-term memory describe different but interacting functions. Working memory keeps a limited amount of information temporarily available for thought and action. It supports tasks such as following a sentence, comparing two quantities, or holding an intermediate result while solving a problem. Long-term memory preserves knowledge and experience beyond the immediate moment. It includes facts and events that can be consciously recalled as well as skills and influences that may operate without deliberate recollection.

Working memory is not simply a small storage box. In Baddeley’s multicomponent framework, a central executive coordinates attention alongside systems specialized for verbal and visuospatial material, with an episodic buffer integrating information across sources and long-term memory. Other theories draw the boundaries differently. Cowan describes working memory partly as currently activated long-term knowledge, with a more restricted focus of attention. Researchers continue to debate components and limits, but agree that only a modest amount of unfamiliar material can remain readily usable at once.

Long-term memory has far greater capacity, yet it is not a perfect recording. Information must be encoded, organized, and later retrieved; attention, meaning, prior knowledge, practice, cues, and interference affect those processes. Retrieval is reconstructive, so confidence does not guarantee accuracy. What a learner already knows can radically change a task’s demand. A novice may need to hold several disconnected elements in working memory, whereas an expert retrieves an organized schema and treats those elements as one meaningful chunk. Chunking is therefore powerful when the chunks represent knowledge already learned, not when items are merely grouped visually.

Learning depends on movement in both directions. Relevant long-term knowledge is retrieved into the active workspace to interpret new information. New relationships can then be encoded into long-term memory through explanation, meaningful practice, retrieval, and connections to prior knowledge. Repeating material can help keep it active briefly, but durable learning usually requires more than maintenance. Learners need to make sense of ideas and successfully bring them back after some forgetting. Forgetting can reflect weak encoding, interference, or difficulty retrieving a memory in the current context rather than complete erasure.

Instruction should respect the limited workspace while deliberately building the knowledge that makes future thinking efficient. Teachers can keep essential information visible, break complex tasks into coherent steps, connect examples to familiar schemas, and remove distracting detail. They can then ask learners to retrieve, explain, compare, and apply ideas without the original support. Digital and AI tools can offer prompts or reminders, but constant assistance may let a learner complete a task without storing a usable mental model. A strong design alternates supported processing with opportunities for independent recall and transfer. The practical goal is not to avoid mental effort. It is to use working memory for relationships worth learning and to organize those relationships into long-term knowledge that can guide later judgment.`,
    coreIdeas: [
      "Working memory temporarily maintains and manipulates a limited amount of currently relevant information.",
      "Long-term memory stores organized knowledge and experience, but encoding and retrieval are selective and reconstructive.",
      "Prior knowledge changes effective task demand because retrieved schemas let many elements function as meaningful chunks.",
    ],
    educationConnection: "Keep essential relationships manageable and visible, connect them to prior knowledge, then use retrieval, explanation, and transfer tasks to build independently usable long-term knowledge.",
    relatedConcepts: ["Attention", "Schema theory", "Retrieval practice"],
    sourceUrls: [
      { label: "Cowan on long-term, short-term, and working memory", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2657600/" },
      { label: "Baddeley on working memory", url: "https://doi.org/10.1038/nrn1201" },
      { label: "OpenStax: how memory functions", url: "https://openstax.org/books/psychology-2e/pages/8-1-how-memory-functions" },
    ],
    createdAt: "2026-07-23T08:00:00.000Z",
  },
];
