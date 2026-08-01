import type { AcademyLesson } from "@/lib/types";

export const reviewedAcademyLessons: AcademyLesson[] = [
  {
    id: "academy-001",
    listingIdentifier: "AI Knowledge 01",
    slug: "what-artificial-intelligence-is",
    title: "What Artificial Intelligence Is",
    track: "ai-knowledge",
    level: "basics",
    tags: ["artificial intelligence", "systems", "responsible AI"],
    image: "/images/academy/covers/academy-001-what-ai-is.png",
    imageAlt: "An educator and two adult learners examine an artificial intelligence learning apparatus in a bright laboratory",
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
    listingIdentifier: "AI Knowledge 02",
    slug: "machine-learning-deep-learning-generative-ai",
    title: "Machine Learning, Deep Learning, and Generative AI",
    track: "ai-knowledge",
    level: "basics",
    tags: ["machine learning", "deep learning", "generative AI"],
    image: "/images/academy/covers/academy-002-ml-dl-generative-ai.png",
    imageAlt: "An educator and adult learner compare nested learning systems with a generated abstract form",
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
    listingIdentifier: "AI Knowledge 03",
    slug: "how-large-language-models-generate-text",
    title: "How Large Language Models Generate Text",
    track: "ai-knowledge",
    level: "core",
    tags: ["large language models", "transformers", "tokens"],
    image: "/images/academy/covers/academy-003-how-llms-generate-text.png",
    imageAlt: "An educator and adult learner inspect a transparent layered language-model apparatus",
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
    listingIdentifier: "Educational Theory 01",
    slug: "behaviorism-learning-through-consequences",
    title: "Behaviorism and Learning Through Consequences",
    track: "educational-theory",
    level: "basics",
    tags: ["behaviorism", "reinforcement", "feedback"],
    image: "/images/academy/covers/academy-004-behaviorism-consequences.png",
    imageAlt: "A learner operates a three-stage classroom feedback apparatus while an educator observes",
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
    listingIdentifier: "Educational Theory 02",
    slug: "cognitive-load-theory",
    title: "Cognitive Load Theory",
    track: "educational-theory",
    level: "core",
    tags: ["cognitive load", "working memory", "instructional design"],
    image: "/images/academy/covers/academy-005-cognitive-load-theory.png",
    imageAlt: "An adult learner studies beside an educator at a desk divided between organized and distracting materials",
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
    listingIdentifier: "Educational Theory 03",
    slug: "constructivism-active-knowledge-building",
    title: "Constructivism and Active Knowledge Building",
    track: "educational-theory",
    level: "basics",
    tags: ["constructivism", "prior knowledge", "active learning"],
    image: "/images/academy/covers/academy-006-constructivism-knowledge-building.png",
    imageAlt: "A bridge-like model built from wood, colorful blocks, and transparent scaffolds with learners behind it",
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
    listingIdentifier: "AI Knowledge 04",
    slug: "training-validation-and-test-data",
    title: "Training, Validation, and Test Data",
    track: "ai-knowledge",
    level: "basics",
    tags: ["training data", "validation data", "model evaluation"],
    image: "/images/academy/covers/academy-007-training-validation-and-test-data.png",
    imageAlt: "Two East Asian education professionals compare a coral folder, an ivory board, and a separate charcoal folder in a bright university studio",
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
    listingIdentifier: "Educational Theory 04",
    slug: "working-memory-and-long-term-memory",
    title: "Working Memory and Long-Term Memory",
    track: "educational-theory",
    level: "basics",
    tags: ["working memory", "long-term memory", "instructional design"],
    image: "/images/academy/covers/academy-008-working-memory-and-long-term-memory.png",
    imageAlt: "An adult learner arranges a small set of geometric models with an educator in a sunlit university learning studio",
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
  {
    id: "academy-009",
    listingIdentifier: "AI Knowledge 05",
    slug: "supervised-unsupervised-reinforcement-learning",
    title: "Supervised, Unsupervised, and Reinforcement Learning",
    track: "ai-knowledge",
    level: "basics",
    tags: ["supervised learning", "unsupervised learning", "reinforcement learning"],
    image: "/images/academy/covers/academy-009-supervised-unsupervised-reinforcement-learning.png",
    imageAlt: "Three adult learners compare paired ceramic tiles, grouped wooden forms, and a small wheeled robot at separate stations in a daylight learning laboratory",
    summaryAudio: "/audio/academy/academy-009-supervised-unsupervised-reinforcement-learning-summary.m4a",
    summaryAudioTitle: "Listen to Supervised, Unsupervised, and Reinforcement Learning",
    shortSummary: "How three major learning settings differ in the feedback they provide, the patterns they seek, and the claims their results can support.",
    fullSummary: `Supervised, unsupervised, and reinforcement learning describe three different ways of organizing a learning problem. They are not competing labels for the same method. Each specifies what experience is available to a system and what kind of signal guides improvement. Knowing the difference helps educators ask a practical question before discussing algorithms: what information tells the system that it is doing better?

In supervised learning, examples are paired with target outputs. A model may learn to classify an image, estimate a score, or predict whether a learner will answer an item correctly. Classification predicts categories, while regression predicts quantities. Training compares predictions with known targets and adjusts the model to reduce error. The targets are often called labels, but they are not automatically ground truth. A label may reflect a human judgment, a measurement process, or a historical decision with its own uncertainty and bias. Evaluation therefore needs separate data and attention to how the labels were produced.

Unsupervised learning begins without a target output for every example. The system looks for structure in the inputs, such as clusters, lower-dimensional representations, unusual cases, or recurring associations. A grouping can help people explore a large collection, but the algorithm does not discover a single correct interpretation of the world. Results depend on the selected features, similarity measure, model assumptions, and number of groups. A cluster of students, for example, should not be treated as a natural ability category simply because a procedure separated their records.

Reinforcement learning concerns an agent that takes actions in an environment and receives rewards or other evaluative signals over time. The goal is to learn a policy for choosing actions that leads to greater expected return. This setting introduces delayed consequences and the exploration problem: the agent must sometimes try uncertain actions to learn whether they are useful. Reward design is consequential. A tutoring agent rewarded only for immediate correctness might give excessive hints, while a reward that considers later independent performance could support a different policy.

Real systems can combine these settings. A model may learn representations without labels, refine them with supervised examples, and then use feedback from interaction. The correct choice depends on the decision, available evidence, acceptable risk, and evaluation plan. In education, the names do not guarantee validity. Teams still need representative data, independent testing, subgroup analysis, privacy protection, and accountable human review. Practitioners should also ask how often feedback arrives, whether it is delayed or incomplete, how errors affect future decisions, and who can challenge an automated result. These operational details can matter as much as the algorithm family. The most useful distinction is the feedback structure: targets guide supervised learning, patterns in inputs guide unsupervised learning, and consequences across actions guide reinforcement learning.`,
    coreIdeas: [
      "Supervised learning uses target outputs, while label quality and evaluation design limit what its predictions mean.",
      "Unsupervised learning organizes input structure without a single target, so its patterns depend on chosen representations and assumptions.",
      "Reinforcement learning improves action policies from consequences over time, making exploration and reward design central concerns.",
    ],
    educationConnection: "Before adopting an educational AI system, identify its learning setting, the signal that guides it, and whether that signal represents the learning outcome educators actually value.",
    relatedConcepts: ["Classification and regression", "Clustering", "Reward design"],
    sourceUrls: [
      { label: "Scikit-learn: supervised learning", url: "https://scikit-learn.org/stable/supervised_learning.html" },
      { label: "Scikit-learn: unsupervised learning", url: "https://scikit-learn.org/stable/unsupervised_learning.html" },
      { label: "Sutton and Barto, Reinforcement Learning", url: "https://mitpress.mit.edu/9780262039246/reinforcement-learning/" },
    ],
    createdAt: "2026-07-24T08:00:00.000Z",
  },
  {
    id: "academy-010",
    listingIdentifier: "Educational Theory 05",
    slug: "retrieval-practice",
    title: "Retrieval Practice",
    track: "educational-theory",
    level: "basics",
    tags: ["retrieval practice", "memory", "formative assessment"],
    image: "/images/academy/covers/academy-010-retrieval-practice.png",
    imageAlt: "An adult learner writes from memory on a blank sheet beside a closed book and laptop at a quiet library table",
    summaryAudio: "/audio/academy/academy-010-retrieval-practice-summary.m4a",
    summaryAudioTitle: "Listen to Retrieval Practice",
    shortSummary: "Why trying to recall knowledge can strengthen later access, reveal gaps, and support transfer when prompts and feedback are designed well.",
    fullSummary: `Retrieval practice means deliberately bringing previously learned information to mind instead of only looking at it again. A learner might answer a question without notes, explain a concept from memory, sketch a process, or solve a problem after the worked example is removed. The defining action is attempted recall. A quiz can create retrieval practice, but testing is not the goal by itself. The instructional purpose is to strengthen usable knowledge and show what still needs attention.

Research comparing retrieval with additional study has repeatedly found that successful recall can improve later retention. One explanation is that retrieval strengthens and reorganizes the routes used to access knowledge. It can also make future learning more effective by clarifying which ideas are secure and which are incomplete. The immediate experience can be misleading: rereading often feels fluent because the material is visible, while recall feels harder because support has been removed. That difficulty can be productive when the learner has enough prior learning to make a serious attempt.

Effective retrieval practice varies in form. Free recall asks learners to produce what they know with little prompting. Cued recall provides a question, image, key term, or partial structure. Recognition asks learners to identify an answer, which usually supplies more support. Prompts should match the desired future performance. Remembering a definition may require a different prompt from explaining a causal relationship or choosing a strategy in a new problem. Retrieval should recur after some forgetting and across different contexts rather than appearing once at the end of a unit.

Feedback matters, especially after an unsuccessful or incomplete attempt. Learners need a chance to compare their response with an accurate explanation and then retrieve again later. Low-stakes conditions reduce the temptation to treat every error as a judgment of ability. Teachers should avoid turning retrieval practice into rapid-fire grading that rewards speed, public comparison, or isolated facts at the expense of reasoning. The technique is also not a substitute for initial teaching, worked examples, discussion, or supported practice.

Digital and AI tools can schedule prompts, vary examples, and invite explanations, but they should not quietly reveal the answer before retrieval occurs. Generated questions also require review for accuracy, ambiguity, and alignment with the curriculum. Learners can also rate their confidence before feedback, which helps separate secure knowledge from guesses and gives teachers evidence for the next instructional decision. Later recall should confirm the change. A useful sequence is simple: learn with appropriate support, remove some support, attempt retrieval, receive informative feedback, and revisit the idea after a delay. The aim is not to make learning feel difficult for its own sake. It is to help knowledge become available when notes, hints, and familiar wording are absent.`,
    coreIdeas: [
      "Retrieval practice requires an attempt to recall or use knowledge without simply restudying the visible answer.",
      "Well-spaced retrieval can strengthen later access and reveal gaps, even when it feels harder than rereading.",
      "Prompts, feedback, stakes, and alignment with future performance determine whether retrieval supports meaningful learning.",
    ],
    educationConnection: "Use brief low-stakes recall, explanation, or problem-solving prompts after initial teaching, then provide accurate feedback and revisit the same ideas after a delay.",
    relatedConcepts: ["Testing effect", "Desirable difficulties", "Feedback"],
    sourceUrls: [
      { label: "Roediger and Karpicke on test-enhanced learning", url: "https://doi.org/10.1111/j.1467-9280.2006.01693.x" },
      { label: "Karpicke and Blunt on retrieval practice", url: "https://doi.org/10.1126/science.1199327" },
      { label: "Dunlosky and colleagues on effective learning techniques", url: "https://doi.org/10.1177/1529100612453266" },
    ],
    createdAt: "2026-07-24T08:00:00.000Z",
  },
  {
    id: "academy-011",
    listingIdentifier: "AI Knowledge 06",
    slug: "features-labels-and-representations",
    title: "Features, Labels, and Learned Representations",
    track: "ai-knowledge",
    level: "basics",
    tags: ["features", "labels", "representations"],
    image: "/images/academy/covers/academy-011-features-labels-and-learned-representations.png",
    imageAlt: "Two education researchers compare a small set of physical objects through clear measuring frames and a separate stack of blank category cards on a pale studio table",
    summaryAudio: "/audio/academy/academy-011-features-labels-and-learned-representations-summary.m4a",
    summaryAudioTitle: "Listen to Features, Labels, and Learned Representations",
    shortSummary: "How models turn observations into inputs and targets, then build internal representations that support prediction while preserving human assumptions.",
    fullSummary: `Machine-learning systems do not encounter a learner, essay, image, or classroom in the same way a person does. They receive representations of observations. Features are the input variables made available to a model, while labels are target values used in many supervised learning tasks. A row in a dataset might contain features such as prior attempts, response time, item history, or encoded text, with a label indicating a later outcome. These choices define what the system can notice and what it is asked to predict.

Some features are selected or constructed directly. Numerical values may be scaled, categories encoded, and text converted into counts or vectors. Feature engineering can make relevant structure easier for a model to use, but it also embeds judgments about what matters. A convenient variable may act as a proxy for socioeconomic status, language background, disability, or institutional opportunity. A timestamp, identifier, or post-outcome record can leak information that would not be available when the system is actually used. High predictive accuracy cannot repair a feature set that makes the intended decision invalid or unfair.

Labels deserve equal scrutiny. They may come from measurements, expert judgments, administrative records, or earlier decisions. A label such as engagement, risk, quality, or mastery is not self-defining. It operationalizes a concept through a particular process. If teachers referred some students for support more often than others, a model trained to reproduce those referrals may learn the referral pattern rather than an independent need. Missing, noisy, delayed, and inconsistently applied labels all shape the learned result.

Modern neural networks often learn internal representations instead of relying only on hand-designed features. During training, successive transformations organize inputs into patterns useful for the objective. An embedding represents an item as a vector so that relationships can be expressed through position and distance. Useful representations can capture regularities that transfer across tasks, but they are not neutral summaries. They reflect the training data, architecture, objective, and feedback. A compact representation may also hide which original details influenced a decision.

Educational evaluation should trace the whole chain from observation to representation to output. Teams should document when each feature becomes available, how labels were created, which groups are represented, and whether performance changes across settings. They should test for leakage, unstable proxies, and distribution shift. Data documentation should preserve these decisions so later reviewers can reconstruct why a representation was considered appropriate. Teachers do not need to inspect every parameter to ask strong questions. What evidence entered the system? What target defined success? What was compressed or omitted? A model learns from the version of reality encoded in its features, labels, and objective, not from the full educational situation those variables are intended to represent.`,
    coreIdeas: [
      "Features encode the observations a model can use, and their selection carries assumptions about relevance, timing, and fairness.",
      "Labels operationalize a target through human and institutional processes, so they may contain noise, bias, or leakage.",
      "Learned representations organize inputs for an objective, but they still reflect the data and decisions that produced them.",
    ],
    educationConnection: "When reviewing educational AI, document the origin and timing of every major feature, how the target label was defined, and what important classroom context the representation leaves out.",
    relatedConcepts: ["Feature engineering", "Embeddings", "Data leakage"],
    sourceUrls: [
      { label: "Google ML: numerical data and features", url: "https://developers.google.com/machine-learning/crash-course/numerical-data" },
      { label: "Google ML: embeddings", url: "https://developers.google.com/machine-learning/crash-course/embeddings" },
      { label: "Deep Learning book: representation learning", url: "https://www.deeplearningbook.org/contents/representation.html" },
    ],
    createdAt: "2026-07-25T08:00:00.000Z",
  },
  {
    id: "academy-012",
    listingIdentifier: "Educational Theory 06",
    slug: "spacing-and-interleaving",
    title: "Spacing and Interleaving",
    track: "educational-theory",
    level: "basics",
    tags: ["spacing", "interleaving", "practice design"],
    image: "/images/academy/covers/academy-012-spacing-and-interleaving.png",
    imageAlt: "An educator and adult learner move between four separated stations that alternate coral construction and navy pattern tasks",
    summaryAudio: "/audio/academy/academy-012-spacing-and-interleaving-summary.m4a",
    summaryAudioTitle: "Listen to Spacing and Interleaving",
    shortSummary: "How distributing practice across time and mixing related problem types can improve retention, discrimination, and flexible strategy selection.",
    fullSummary: `Spacing and interleaving are ways of organizing practice rather than new kinds of content. Spacing distributes encounters with an idea across time instead of concentrating them in one session. Interleaving mixes related topics, examples, or problem types instead of completing a long block of one type before moving to the next. The two can be combined, but they address different learning demands. Spacing creates opportunities to retrieve after some forgetting, while interleaving requires learners to distinguish among possibilities and select an appropriate approach.

Massed practice can produce rapid improvement during a lesson because the same information and procedure remain active. That fluency may not last. When practice is spaced, the learner has to reconstruct more of the knowledge on a later occasion. This effort can strengthen retention and reveal what was not securely learned. There is no universal best interval. Useful spacing depends on how long the knowledge should be retained, the complexity of the material, prior knowledge, and whether learners can still make a meaningful attempt when the idea returns.

Blocked practice reduces the need to decide what kind of problem is present because the current section often announces the method. Interleaving removes that cue. A mathematics learner who sees several equation types mixed together must first identify the structure and then choose a method. This can slow initial performance and feel less orderly, yet it may improve later discrimination and transfer. Interleaving is most useful when categories are confusable or strategy selection matters. Randomly mixing unrelated tasks can instead create unnecessary switching and overload.

Good design therefore preserves coherence. Teachers can introduce a concept with clear explanation and focused examples, then revisit it across later lessons and mix it with closely related alternatives. Brief cumulative questions, comparison tasks, and delayed practice sets can provide both spacing and interleaving. Feedback should explain not only whether an answer is correct but why a particular strategy fits. Learners may need a visible overview at first, followed by progressively fewer cues as their discrimination improves.

Digital systems can schedule review and vary practice, but simple frequency rules are not enough. An adaptive tool should avoid treating every error as evidence that the interval was too long, because errors can arise from misunderstanding, ambiguous prompts, or inaccessible design. It should also avoid endless review of easy items that crowds out deeper application. Teachers should inspect the sequence as a curriculum, not only as an algorithmic queue. The schedule should remain understandable to learners and teachers. The central principle is purposeful return: revisit important knowledge after time has passed, and place it beside related knowledge so learners practice deciding what applies. Difficulty is valuable only when it supports durable, flexible learning rather than confusion.`,
    coreIdeas: [
      "Spacing distributes practice across time so learners reconstruct knowledge after some forgetting instead of relying on immediate fluency.",
      "Interleaving mixes related cases so learners practice discrimination and strategy selection rather than following blocked cues.",
      "Intervals and mixtures must remain coherent, supported, and aligned with the knowledge learners need to retain and transfer.",
    ],
    educationConnection: "After focused initial instruction, revisit core ideas in later lessons and mix them with related alternatives that require learners to identify which concept or strategy applies.",
    relatedConcepts: ["Distributed practice", "Discrimination learning", "Transfer"],
    sourceUrls: [
      { label: "Cepeda and colleagues on distributed practice", url: "https://doi.org/10.1037/0033-2909.132.3.354" },
      { label: "Kang on spaced repetition", url: "https://doi.org/10.1177/2372732215624708" },
      { label: "Rohrer on interleaving practice", url: "https://doi.org/10.1007/s10648-012-9201-3" },
    ],
    createdAt: "2026-07-25T08:00:00.000Z",
  },
  {
    id: "academy-013",
    listingIdentifier: "AI Knowledge 07",
    slug: "what-neural-networks-learn",
    title: "What Neural Networks Learn",
    track: "ai-knowledge",
    level: "basics",
    tags: ["neural networks", "features", "model interpretation"],
    image: "/images/academy/covers/academy-013-what-neural-networks-learn.png",
    imageAlt: "An educator and adult learner compare a coral object with transparent overlays showing its outline, shape, and recognizable pattern",
    summaryAudio: "/audio/academy/academy-013-what-neural-networks-learn-summary.m4a",
    summaryAudioTitle: "Listen to What Neural Networks Learn",
    shortSummary: "How training adjusts network parameters to build task-oriented representations, and why useful prediction does not guarantee human-like concepts.",
    fullSummary: `A neural network learns by adjusting numerical parameters so that its outputs better satisfy a training objective. It does not store a neat textbook of rules inside each unit. The learned parameters define a function that transforms inputs through a sequence of layers. During training, optimization changes those parameters in response to error signals. What emerges can support accurate predictions, but the internal organization is distributed across many units and shaped by the task the network was rewarded for performing.

Layers are often described as learning a hierarchy of features. In an image model, early computations may respond to local contrasts or orientations, while later computations combine information across larger regions. In a language model, representations can encode patterns involving words, syntax, topics, and longer contexts. This description is useful but incomplete. A unit may respond to several unrelated patterns, and a meaningful concept may be represented across many units. The same architecture trained on different data or objectives can organize information differently.

The training objective determines which distinctions are useful. If a model is trained to predict an outcome, it may discover any regularity that reduces error, including shortcuts people did not intend. An image classifier can rely on backgrounds, watermarks, or camera artifacts. An educational model can rely on school identifiers, response opportunities, or patterns of missing data instead of the learner process designers hoped to measure. The network has no independent commitment to causal explanation, fairness, or educational meaning. It follows the statistical incentives present in its data and objective.

Interpretability methods provide partial views. Feature visualization can generate inputs that strongly activate a unit or direction. Attribution methods estimate which parts of an input influenced an output. Probes test whether certain information can be recovered from a representation. These tools can reveal patterns and support hypotheses, but they do not automatically explain the complete computation or establish why a model behaves as it does in every case. Human-readable images and labels can also tempt observers to see a clean concept where the representation is more mixed.

For educational use, the practical question is not whether a network thinks like a person. It is whether the learned function remains valid for the intended learners, settings, and decisions. Teams should test plausible shortcuts, compare subgroups, examine failures, and evaluate changes over time. Repeated evaluation with new cohorts can show whether a representation remains useful or has become tied to local conditions that no longer hold. Teachers should receive evidence about capabilities and limits rather than anthropomorphic claims about understanding. Neural networks can learn powerful representations, but those representations are task-oriented products of data, architecture, objectives, and optimization. Their usefulness must be demonstrated through independent evidence and accountable use.`,
    coreIdeas: [
      "Neural-network learning adjusts distributed parameters to optimize an objective rather than storing one human-readable rule per unit.",
      "Internal representations can organize useful features across layers, but units and concepts rarely have a simple one-to-one correspondence.",
      "Data and objectives can reward shortcuts, so interpretation and independent evaluation are necessary before educational use.",
    ],
    educationConnection: "Ask which patterns a model could exploit besides the intended learning construct, then test those shortcuts and failures across learners, schools, and changing conditions.",
    relatedConcepts: ["Distributed representations", "Feature visualization", "Shortcut learning"],
    sourceUrls: [
      { label: "Distill: feature visualization", url: "https://distill.pub/2017/feature-visualization/" },
      { label: "Stanford CS231n: convolutional networks", url: "https://cs231n.github.io/convolutional-networks/" },
      { label: "Deep Learning book: representation learning", url: "https://www.deeplearningbook.org/contents/representation.html" },
    ],
    createdAt: "2026-07-26T08:00:00.000Z",
  },
  {
    id: "academy-014",
    listingIdentifier: "Educational Theory 07",
    slug: "dual-coding-and-multimedia-learning",
    title: "Dual Coding and Multimedia Learning",
    track: "educational-theory",
    level: "basics",
    tags: ["dual coding", "multimedia learning", "instructional design"],
    image: "/images/academy/covers/academy-014-dual-coding-and-multimedia-learning.png",
    imageAlt: "An educator and adult learner coordinate a simple physical process model with a concise spoken explanation in a bright media studio",
    summaryAudio: "/audio/academy/academy-014-dual-coding-and-multimedia-learning-summary.m4a",
    summaryAudioTitle: "Listen to Dual Coding and Multimedia Learning",
    shortSummary: "How words and meaningful visuals can support coordinated mental models when instructional media manages attention, load, and accessibility.",
    fullSummary: `Dual coding theory proposes that people can represent information through partly distinct verbal and nonverbal systems. Multimedia learning research examines how learners build understanding from words and pictures while working memory is limited and prior knowledge varies. Together, these traditions support a careful claim: relevant verbal and visual representations can complement one another when learners select, organize, and connect them. They do not support decorating every explanation with pictures or assigning students to fixed visual and verbal learning styles.

Words can be spoken or written. Visuals can include diagrams, photographs, graphs, animation, or demonstrations. Their educational value depends on what each representation contributes. A diagram may make spatial relations visible, while narration explains a causal sequence. A graph may show a pattern that a paragraph then interprets. Learning requires coordination across representations, not mere exposure to two formats. If the picture and words communicate unrelated ideas, compete for attention, or require excessive searching, adding media can make understanding harder.

Several multimedia design principles address this risk. Coherence means removing material that does not support the learning goal. Signaling highlights the organization of essential information without turning the page into decoration. Spatial and temporal contiguity place corresponding words and visuals near one another and present related events at useful times. Segmenting gives learners manageable units and control over pace. Redundancy needs careful treatment: narrating an explanation while displaying the same full paragraph can overload visual and verbal processing, while concise labels or accessible transcripts may still be necessary.

The design should follow the task. A realistic image can establish context, but a simplified diagram may better reveal hidden structure. An animation can show change over time, yet learners may need controls, pauses, and a static reference for review. Teachers can ask learners to explain how a visual maps to the verbal account, complete a partially worked diagram, or create their own representation and justify it. These activities make integration visible instead of assuming that students automatically connect the parts.

Accessibility is part of multimedia quality. Images need meaningful alternatives, audio needs captions or transcripts, color cannot carry the only distinction, and controls must work with keyboards and assistive technology. AI tools can draft diagrams, narration, and alternative text, but generated media requires review for factual correspondence, unnecessary detail, bias, and accessibility. Learners should have time to inspect the relationship, control the pace, and return to a representation when an explanation depends on it. The medium should serve the idea rather than become the lesson's main attraction. The goal is not maximum stimulation. It is representational fit: choose words and visuals that each do useful work, reduce avoidable load, and help learners build one coherent mental model they can explain and apply.`,
    coreIdeas: [
      "Words and meaningful visuals can provide complementary representations that learners must actively organize and connect.",
      "Coherence, signaling, contiguity, segmenting, and careful redundancy help multimedia manage limited attention and working memory.",
      "Effective multimedia is task-aligned and accessible, not evidence for fixed learning styles or decorative media abundance.",
    ],
    educationConnection: "Pair each explanation with a visual that contributes necessary structure, place corresponding information together, remove decorative detail, and ask learners to explain the connection.",
    relatedConcepts: ["Cognitive theory of multimedia learning", "Coherence principle", "Accessibility"],
    sourceUrls: [
      { label: "Clark and Paivio on dual coding theory", url: "https://doi.org/10.1007/BF01320076" },
      { label: "Cambridge Handbook of Multimedia Learning", url: "https://doi.org/10.1017/9781108894333" },
      { label: "Mayer and Moreno on multimedia learning", url: "https://doi.org/10.1207/S15326985EP3801_6" },
    ],
    createdAt: "2026-07-26T08:00:00.000Z",
  },
  {
    id: "academy-015",
    listingIdentifier: "AI Knowledge 08",
    slug: "prompts-context-and-model-responses",
    title: "Prompts, Context, and Model Responses",
    track: "ai-knowledge",
    level: "basics",
    tags: ["prompt design", "context", "model responses"],
    image: "/images/academy/covers/academy-015-prompts-context-and-model-responses.png",
    imageAlt: "An educator adjusts a tabletop optical device while an adult learner watches cyan and amber light paths pass through three glass lenses",
    summaryAudio: "/audio/academy/academy-015-prompts-context-and-model-responses-summary.m4a",
    summaryAudioTitle: "Listen to Prompts, Context, and Model Responses",
    shortSummary: "How prompts and surrounding context shape probabilistic model responses, and why clear task design still requires verification and human judgment.",
    fullSummary: `A prompt is the information given to an AI model when asking it to produce a response. It may include a question, an instruction, examples, background material, formatting requirements, and earlier messages in a conversation. The model also receives other context supplied by the application, such as system instructions, retrieved documents, or tool results. A useful distinction is that the prompt is what a user deliberately contributes, while the context is the wider collection of information available to the model for that turn. This distinction helps users ask whether missing or hidden information may have shaped the result.

A language model does not interpret a prompt as a person interprets a shared intention. It uses the available tokens to estimate likely continuations according to patterns learned during training and later alignment. Small wording changes can shift which patterns become relevant, so two similar requests may produce different answers. Responses can also vary because generation may involve sampling. A polished answer therefore shows what the model produced under particular conditions, not a stable fact stored behind the interface.

Clear prompting makes the task and evaluation criteria easier to infer. A practical prompt can name the goal, audience, relevant evidence, constraints, and desired form. Examples can demonstrate a category or style when description alone is ambiguous. Breaking a complex task into stages can help users inspect assumptions before asking for a final product. However, adding instructions without purpose can create conflict or bury the important material. Prompt quality is not measured by length. It is measured by whether the model receives the information needed for the task and whether the result can be checked.

Context has limits. Models process a finite context window, and applications may truncate, summarize, or selectively retrieve material before a request reaches the model. Even when information fits, the model may not use every part equally well. Position, relevance, duplication, and competing instructions can affect the response. Users should place essential evidence close to the task, label sources clearly, and remove irrelevant material. Sensitive personal or institutional information should not be included unless the tool, purpose, consent, and data protections are appropriate.

In education, prompting is best treated as a form of task design followed by evaluation. Teachers can ask learners to state the purpose of a prompt, compare several responses, identify which details changed the result, and verify claims against course sources. A prompt can request uncertainty, citations, or alternative explanations, but those requests do not guarantee truthful answers. Reliable use requires checking the output for accuracy, bias, completeness, and fit with the learner. The goal is not to discover a magical phrase. It is to communicate a well-defined task, provide relevant context, observe the response critically, and revise both the request and the human judgment applied to the result.`,
    coreIdeas: [
      "A prompt is the user's contribution, while context includes all information made available to the model for the current response.",
      "Clear goals, relevant evidence, constraints, and examples are more useful than unnecessary prompt length or supposed magical phrases.",
      "Prompting can improve relevance but cannot guarantee truth, so outputs still require evidence-based human evaluation.",
    ],
    educationConnection: "Ask learners to identify a prompt's goal and context, compare resulting responses, and verify important claims against course sources before revising their request.",
    relatedConcepts: ["Prompt design", "Context window", "Output evaluation"],
    sourceUrls: [
      { label: "Anthropic: how Claude Code works", url: "https://code.claude.com/docs/en/how-claude-code-works" },
      { label: "Liu and colleagues: prompt methods survey", url: "https://arxiv.org/abs/2107.13586" },
      { label: "Brown and colleagues: few-shot language models", url: "https://arxiv.org/abs/2005.14165" },
      { label: "Liu and colleagues: long-context use", url: "https://aclanthology.org/2024.tacl-1.9/" },
    ],
    createdAt: "2026-07-29T08:00:00.000Z",
  },
  {
    id: "academy-016",
    listingIdentifier: "Educational Theory 08",
    slug: "scaffolding-and-the-zone-of-proximal-development",
    title: "Scaffolding and the Zone of Proximal Development",
    track: "educational-theory",
    level: "basics",
    tags: ["scaffolding", "zone of proximal development", "guided participation"],
    image: "/images/academy/covers/academy-016-scaffolding-and-the-zone-of-proximal-development.png",
    imageAlt: "An educator watches an adult learner add a glass-and-wood segment to an arch resting on a removable bronze support in a Hong Kong maker lab",
    summaryAudio: "/audio/academy/academy-016-scaffolding-and-the-zone-of-proximal-development-summary.m4a",
    summaryAudioTitle: "Listen to Scaffolding and the Zone of Proximal Development",
    shortSummary: "How responsive support helps learners complete challenging work, then fades as competence, strategy use, and independent responsibility develop.",
    fullSummary: `Scaffolding is temporary support that helps a learner participate in a task that would be difficult to complete independently. The support might include a worked example, a cue, a question, a partial solution, a checklist, modeling, or feedback. Good scaffolding does not simply make work easier. It makes important thinking possible while preserving a meaningful role for the learner. As understanding grows, support is adjusted and gradually removed so that responsibility shifts toward independent performance.

The zone of proximal development describes the distance between what a learner can currently do alone and what the learner can do with capable guidance or collaboration. It is not a fixed score or a permanent label attached to a person. The zone depends on the task, prior knowledge, available tools, language, relationships, and quality of assistance. A learner may need substantial support for one concept and little support for another. Teachers therefore discover the useful level of support through interaction, not through assumption.

Effective scaffolding is contingent. The teacher first attends to what the learner is trying, where progress stops, and which misconception or missing step is involved. Support then responds to that evidence. A prompt may be enough when the learner has a plan but overlooks a detail. Modeling may be more suitable when the process itself is unfamiliar. If support remains too weak, the learner may stay stuck. If it is too strong, the teacher or tool completes the intellectual work and loses evidence of what the learner can now do. The learner's response remains the evidence that determines whether support should continue, change form, or begin to fade.

Fading is the planned reduction of help as competence develops. It can involve removing steps from a template, delaying hints, shifting from demonstration to questioning, or asking learners to explain and check their own decisions. Fading should follow demonstrated progress rather than a rigid timetable. Transfer of responsibility is successful when learners can select strategies, monitor results, and seek targeted help in a new situation. Productive struggle remains bounded: challenge should invite reasoning without turning confusion into the main activity.

Digital and AI systems can offer hints, examples, and conversational guidance, but frequent assistance is not automatically scaffolding. A system must respond to learner evidence, avoid revealing answers too quickly, and create opportunities for independent performance. Teachers can compare assisted and unassisted work, ask learners to explain how a hint changed their reasoning, and review whether support is fading. They should also consider accessibility and cultural or linguistic differences in how help is offered and interpreted. The central design question is not how much support to provide in general. It is which support enables this learner to take the next meaningful step, and when that support should be withdrawn.`,
    coreIdeas: [
      "Scaffolding is temporary support for meaningful learner participation, not simply assistance that makes a task easier.",
      "Effective support is contingent on evidence from the learner's current performance and the demands of the particular task.",
      "Fading transfers strategy selection, monitoring, and responsibility to the learner as independent competence develops.",
    ],
    educationConnection: "Observe where a learner's progress stops, provide the smallest useful support, and compare assisted with independent performance before deciding whether to adapt or fade the help.",
    relatedConcepts: ["Contingent support", "Fading", "Learner agency"],
    sourceUrls: [
      { label: "Wood, Bruner, and Ross on tutoring", url: "https://acamh.onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-7610.1976.tb00381.x" },
      { label: "Van de Pol and colleagues on scaffolding", url: "https://link.springer.com/article/10.1007/s10648-010-9127-6" },
      { label: "Reiser on scaffolding complex learning", url: "https://www.tandfonline.com/doi/abs/10.1207/s15327809jls1303_2" },
      { label: "Vygotsky: Mind in Society", url: "https://books.google.com/books?id=RxjjUefze_oC" },
    ],
    createdAt: "2026-07-29T08:00:00.000Z",
  },
  {
    id: "academy-017",
    listingIdentifier: "AI Knowledge 09",
    slug: "ai-errors-uncertainty-and-hallucination",
    title: "AI Errors, Uncertainty, and Hallucination",
    track: "ai-knowledge",
    level: "basics",
    tags: ["AI errors", "uncertainty", "hallucination"],
    image: "/images/academy/covers/academy-017-ai-errors-uncertainty-and-hallucination.png",
    imageAlt: "A Black educator, an East Asian learner, and a White learner inspect maps, evidence panels, magnifiers, and a confidence gauge on a three-part verification console",
    summaryAudio: "/audio/academy/academy-017-ai-errors-uncertainty-and-hallucination-summary.m4a",
    summaryAudioTitle: "Listen to AI Errors, Uncertainty, and Hallucination",
    shortSummary: "How to distinguish AI errors, hallucination, and uncertainty, evaluate evidence, and match verification and oversight to educational consequences.",
    fullSummary: `An AI error is an output that fails to meet a relevant requirement. The requirement may concern factual accuracy, reasoning, classification, safety, fairness, citation, or fit with the task. Different failures need different responses. A spelling error can be corrected directly, while an unsupported medical recommendation or an unfair educational decision requires stronger safeguards. Calling every failure a hallucination hides these differences and can make evaluation less precise. This approach also prevents a single label from obscuring whether the problem came from missing evidence, poor instructions, or unsuitable system design.

Hallucination usually refers to generated content that appears plausible but is unsupported, inconsistent with the provided evidence, or false. A language model produces likely token sequences rather than checking every statement against the world. It may invent a reference, combine details from different sources, or continue an incorrect premise in fluent language. Retrieval and tools can provide better evidence, but they do not guarantee that the model will use it faithfully. A cited source must still be opened and compared with the claim.

Uncertainty concerns what is not known and how strongly a conclusion is supported. Some AI systems provide probability scores, yet a high score is not automatically a reliable probability of correctness. Calibration asks whether predictions made with a stated confidence are correct at a corresponding rate across suitable cases. Generative systems often express confidence through language that may not match factual reliability. Asking a model to state uncertainty can be useful for reflection, but its verbal caution or confidence should not replace external evidence.

Evaluation should begin with the intended use. Teams can build test cases that represent common inputs, difficult boundaries, different learner groups, and conditions likely to change. They can record error types rather than relying only on an average score. For high-impact uses, people need clear routes to review, override, and challenge outputs. Monitoring after release matters because data, user behavior, and system components can change. Good documentation separates observed performance from assumptions and states where evidence is limited.

In education, teachers can turn uncertain outputs into disciplined inquiry without normalizing inaccuracy. Learners can mark claims that require verification, trace quotations to original sources, compare answers with course materials, and explain why an error matters. Teachers should not ask students to detect failures without giving them adequate subject knowledge, time, and access to evidence. Institutions should match oversight to consequences: brainstorming carries different risk from grading, placement, or wellbeing advice. The practical habit is to pause before trusting fluency, identify the claim being made, locate independent support, and decide who remains accountable. AI literacy includes knowing that useful systems can still be wrong, uncertainty can be poorly communicated, and responsible use depends on evidence and human judgment.`,
    coreIdeas: [
      "AI errors include different failures of accuracy, reasoning, safety, fairness, citation, or task fit and should not all be called hallucinations.",
      "Fluent language and stated confidence are not reliable measures of truth, so claims and citations require independent checking.",
      "Evaluation and human oversight should reflect the intended use, affected learners, likely error types, and consequences of failure.",
    ],
    educationConnection: "Give learners adequate subject knowledge and credible sources, then ask them to classify errors, verify claims, and explain how the consequence of a mistake should change the required oversight.",
    relatedConcepts: ["Calibration", "Grounding", "Human oversight"],
    sourceUrls: [
      { label: "Ji and colleagues: hallucination survey", url: "https://doi.org/10.1145/3571730" },
      { label: "Guo and colleagues on calibration", url: "https://proceedings.mlr.press/v70/guo17a.html" },
      { label: "NIST Generative AI Profile", url: "https://doi.org/10.6028/NIST.AI.600-1" },
    ],
    createdAt: "2026-07-21T08:00:00.000Z",
  },
  {
    id: "academy-018",
    listingIdentifier: "Educational Theory 09",
    slug: "metacognition-and-self-regulated-learning",
    title: "Metacognition and Self-Regulated Learning",
    track: "educational-theory",
    level: "basics",
    tags: ["metacognition", "self-regulated learning", "learning strategies"],
    image: "/images/academy/covers/academy-018-metacognition-and-self-regulated-learning.png",
    imageAlt: "An East Asian educator and Black and South Asian adult learners compare a wooden bridge model with planning, monitoring, and revision diagrams",
    summaryAudio: "/audio/academy/academy-018-metacognition-and-self-regulated-learning-summary.m4a",
    summaryAudioTitle: "Listen to Metacognition and Self-Regulated Learning",
    shortSummary: "How learners plan, monitor, and evaluate their learning, and how teachers and AI tools can strengthen rather than replace self-regulation.",
    fullSummary: `Metacognition is knowledge and regulation of one's own thinking and learning. It includes understanding what a task demands, recognizing the limits of current knowledge, selecting a strategy, monitoring progress, and evaluating the result. Self-regulated learning is a broader process that also includes goals, motivation, emotion, behavior, and management of time or resources. The concepts overlap, but they are not identical. Metacognitive monitoring helps learners decide when and how to regulate their learning.

Self-regulation is often described as a cycle. Before a task, learners interpret requirements, set goals, choose strategies, and anticipate obstacles. During performance, they monitor comprehension, effort, and progress, then adjust what they are doing. Afterward, they compare the outcome with suitable criteria and reflect on causes. That reflection shapes the next attempt. The phases are not a simple checklist. Learners may move back and forth as new information, feedback, or difficulty changes the task.

Monitoring can be inaccurate. Familiar material may feel learned because it is easy to reread, while the learner cannot retrieve or apply it without cues. Confidence can also be too low when effortful practice feels difficult even though it is productive. Effective learners use observable evidence rather than relying on feelings alone. They test recall, explain an idea, solve a new problem, compare work with criteria, and inspect errors. Feedback is most useful when it helps them identify the gap and choose a next action, not merely receive a score.

Teachers can make regulation visible by modeling how an expert plans, checks, and revises. Prompts such as "What is your goal?", "What evidence supports this step?", and "What will you try next?" can focus attention on decisions. Supports should be concise and gradually withdrawn so that reflection does not become another form completed for compliance. Strategy instruction should connect a method to the conditions in which it works. Learners need opportunities to choose, adapt, and explain strategies across different tasks. Over time, learners should become less dependent on prompts and more capable of initiating these questions for themselves.

Digital and AI tools can support planning, generate practice questions, organize feedback, or invite reflection, but they can also weaken regulation if they make every decision or provide answers before learners attempt the work. A useful design preserves learner agency and creates checkpoints for prediction, independent effort, verification, and revision. Teachers can ask students to document what assistance they used and how their judgment changed. Data dashboards may inform monitoring, but traces such as clicks or time do not directly reveal understanding or motivation. The educational aim is not constant self-surveillance. It is increasingly accurate awareness and purposeful control: learners know what they are trying to achieve, gather evidence about progress, select an appropriate response, and carry that knowledge into future learning.`,
    coreIdeas: [
      "Metacognition concerns knowledge and regulation of thinking, while self-regulated learning also includes motivation, emotion, behavior, goals, and resources.",
      "Planning, monitoring, strategy adjustment, and reflection form a recurring cycle informed by evidence rather than feelings of familiarity alone.",
      "Teaching and digital tools should make regulation visible while preserving independent effort, learner choice, and eventual control.",
    ],
    educationConnection: "Model how to plan, monitor, and revise, then give learners opportunities to gather evidence, choose strategies, explain changes, and complete later attempts with less prompting.",
    relatedConcepts: ["Metacognitive monitoring", "Strategy selection", "Learner agency"],
    sourceUrls: [
      { label: "Flavell on metacognitive monitoring", url: "https://doi.org/10.1037/0003-066X.34.10.906" },
      { label: "Zimmerman on self-regulated learning", url: "https://doi.org/10.1207/s15430421tip4102_2" },
      { label: "Panadero review of self-regulated learning", url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00422/full" },
    ],
    createdAt: "2026-07-21T08:00:00.000Z",
  },
  {
    id: "academy-019",
    listingIdentifier: "AI Knowledge 10",
    slug: "evaluating-ai-system-performance",
    title: "Evaluating AI System Performance",
    track: "ai-knowledge",
    level: "basics",
    tags: ["AI evaluation", "performance metrics", "model testing"],
    image: "/images/academy/covers/academy-019-evaluating-ai-system-performance.png",
    imageAlt: "A Black educator and an East Asian adult learner inspect repeated geometric test objects inside a three-compartment technology evaluation apparatus",
    summaryAudio: "/audio/academy/academy-019-evaluating-ai-system-performance-summary.m4a",
    summaryAudioTitle: "Listen to Evaluating AI System Performance",
    shortSummary: "How to define an AI evaluation claim, select representative test data and useful metrics, inspect uneven failures, and monitor performance in context.",
    fullSummary: `Evaluating an AI system begins by defining the decision or task it is meant to support. “Good performance” is not a property of a model in the abstract. It is a claim about a particular population, setting, output, and consequence. A writing-feedback tool, a plagiarism detector, and a model that recommends learning resources need different evidence. Evaluators should state the intended use, identify a reasonable baseline, specify unacceptable failures, and decide what improvement would be educationally meaningful before looking at a headline score. The evaluation plan should name the responsible reviewers and record decisions made before testing, reducing the temptation to choose a favorable metric after results are known.

Evidence should come from data that are separate from the examples used to fit or tune the system. A representative test set needs cases resembling real use, including ordinary examples, difficult boundary cases, and groups likely to experience different outcomes. If the test set is narrow, outdated, duplicated, or contaminated by training data, an impressive result may not transfer. Evaluation should also document who is represented, how labels were produced, what disagreements occurred, and which conditions remain outside the evidence.

The right metric depends on the error cost. Accuracy summarizes the proportion of correct classifications, but it can mislead when one class is rare. Precision asks how often positive predictions are correct; recall asks how many actual positive cases are found. Raising one may lower the other. A school screening tool that misses learners needing support creates a different harm from one that sends too many learners for review. Thresholds should therefore be chosen with affected people, workload, and consequences in view, not merely to maximize one number.

Aggregate metrics can hide systematic weakness. Evaluators should inspect results across relevant subgroups, languages, topics, input quality, and changing conditions. They can test robustness with carefully designed variations, examine calibration when probabilities guide decisions, and conduct qualitative error analysis to learn why failures occur. Human evaluation is useful for open-ended outputs, but raters need clear criteria and agreement checks. Safety, accessibility, privacy, fairness, latency, and cost may be part of performance when they determine whether a system works responsibly in practice.

Evaluation continues after release. User behavior, data, policies, and connected components change, so teams need monitoring, feedback channels, incident review, and criteria for pausing or revising the system. Model cards and similar documentation should distinguish measured results from assumptions and record limitations. In education, students can compare two systems on the same task, build a small test set, calculate several metrics, inspect errors, and argue which evidence matters. The central lesson is disciplined comparison: define the educational purpose, test under relevant conditions, interpret trade-offs, and keep accountable human judgment around consequential uses.`,
    coreIdeas: [
      "AI performance is a use-specific claim about a task, population, setting, baseline, and consequence rather than one universal score.",
      "Representative held-out cases, multiple metrics, subgroup analysis, and qualitative error review reveal trade-offs hidden by aggregate accuracy.",
      "Evaluation must continue after release through documentation, monitoring, feedback, incident review, and accountable human decisions.",
    ],
    educationConnection: "Have learners define a classroom AI task, build a small representative test set, compare accuracy, precision, recall, and error types, then justify which evidence matters for the consequences.",
    relatedConcepts: ["Precision and recall", "Model cards", "Post-deployment monitoring"],
    sourceUrls: [
      { label: "Google ML: accuracy, precision, and recall", url: "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall" },
      { label: "NIST AI RMF Core", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" },
      { label: "Model Cards for Model Reporting", url: "https://doi.org/10.1145/3287560.3287596" },
    ],
    createdAt: "2026-07-22T08:00:00.000Z",
  },
  {
    id: "academy-020",
    listingIdentifier: "Educational Theory 10",
    slug: "motivation-self-determination-and-agency",
    title: "Motivation, Self-Determination, and Agency",
    track: "educational-theory",
    level: "basics",
    tags: ["motivation", "self-determination theory", "learner agency"],
    image: "/images/academy/covers/academy-020-motivation-self-determination-and-agency.png",
    imageAlt: "A Middle Eastern educator and Black and East Asian adult learners make meaningful choices at a branching project station while reviewing visible progress evidence",
    summaryAudio: "/audio/academy/academy-020-motivation-self-determination-and-agency-summary.m4a",
    summaryAudioTitle: "Listen to Motivation, Self-Determination, and Agency",
    shortSummary: "How autonomy, competence, relatedness, and learner agency shape the quality of motivation—and how structure and AI can support meaningful choice.",
    fullSummary: `Motivation is not only how much energy a learner shows; it also concerns why the learner acts. Self-determination theory distinguishes more autonomous motivation, in which activity is interesting or personally valued, from controlled motivation driven mainly by pressure, reward, guilt, or fear. A learner can work hard under either condition, yet the quality of engagement, persistence, and wellbeing may differ. Motivation also changes across tasks and contexts, so labels such as “motivated student” can conceal how teaching conditions shape participation. This distinction matters because visible compliance can resemble committed learning for a short period, even while the learner is avoiding risk, protecting self-worth, or waiting for external direction.

Three psychological needs help explain supportive conditions. Autonomy is the experience of volition and meaningful choice, not the absence of structure or guidance. Competence is the sense that effective action is possible and developing, supported by optimally challenging work and informative feedback. Relatedness is feeling respected, included, and connected to others. These needs interact. Choice without enough knowledge can overwhelm, challenge without support can frustrate competence, and feedback delivered without care can weaken belonging even when technically accurate.

Learner agency extends the picture from feeling motivated to contributing intentionally to learning. Agentic learners ask questions, express preferences, seek clarification, propose goals, and influence how activity develops. Agency does not mean that every request must be granted or that responsibility rests entirely on the learner. Teachers shape real possibilities through task design, explanations, routines, resources, and responsiveness. Productive classrooms combine clear expectations with room for learners to make consequential decisions and see how their actions affect progress.

Autonomy-supportive teaching offers meaningful options within useful boundaries, explains the rationale for necessary constraints, acknowledges learners’ perspectives, and uses language that invites engagement rather than control. Competence grows when goals are clear, tasks are neither trivial nor impossible, strategies are teachable, and feedback identifies a workable next step. Relatedness grows through reliable care, fair participation, and collaborative norms. Rewards, points, or gamified features are not automatically harmful, but they can narrow attention when they become the main reason for doing work or signal that learning is merely compliance.

AI tools can either support or displace motivation and agency. A tool may offer alternative explanations, adjustable practice, or feedback that helps a learner choose the next action. It may also make every decision, optimize for clicks, or deliver answers before independent effort. Educators can preserve agency by asking learners to set a goal, select among justified forms of assistance, attempt the task, evaluate the feedback, and decide what to revise. The aim is not unlimited choice. It is a structured environment in which learners understand purposes, experience growing capability and belonging, and increasingly direct their learning with evidence and responsibility.`,
    coreIdeas: [
      "The quality of motivation matters: autonomous reasons for learning differ from action driven mainly by pressure, reward, guilt, or fear.",
      "Autonomy means volition within meaningful structure, while competence and relatedness support effective action and belonging.",
      "Learner agency grows when students can contribute, choose, seek support, evaluate feedback, and increasingly direct consequential parts of learning.",
    ],
    educationConnection: "Offer meaningful choices within clear boundaries, explain necessary constraints, provide actionable feedback and belonging, then let learners decide how evidence should shape their next attempt.",
    relatedConcepts: ["Autonomy support", "Psychological needs", "Agentic engagement"],
    sourceUrls: [
      { label: "Ryan and Deci on self-determination theory", url: "https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf" },
      { label: "Niemiec and Ryan on autonomy in education", url: "https://doi.org/10.1177/1477878509104318" },
      { label: "Reeve and Tseng on agentic engagement", url: "https://doi.org/10.1016/j.cedpsych.2011.05.002" },
    ],
    createdAt: "2026-07-22T08:00:00.000Z",
  },
  {
    id: "academy-021",
    listingIdentifier: "AI Knowledge 11",
    slug: "embeddings-and-semantic-similarity",
    title: "Embeddings and Semantic Similarity",
    track: "ai-knowledge",
    level: "core",
    tags: ["embeddings", "semantic similarity", "vector search"],
    image: "/images/academy/covers/academy-021-embeddings-and-semantic-similarity.png",
    imageAlt: "A Latino educator and East Asian and Middle Eastern adult learners compare a riverbank query image with three candidates linked by sparse cyan similarity bands",
    summaryAudio: "/audio/academy/academy-021-embeddings-and-semantic-similarity-summary.m4a",
    summaryAudioTitle: "Listen to Embeddings and Semantic Similarity",
    shortSummary: "How models represent words, sentences, images, and documents as vectors—and why computational similarity is useful but never neutral or self-validating.",
    fullSummary: `An embedding is a learned numerical representation of an item such as a word, sentence, image, learner response, or document. Instead of storing the item as a human-readable definition, a model maps it to a vector: an ordered list of numbers in a multidimensional space. Training adjusts these numbers so that relationships useful for an objective become easier to compute. Embeddings are therefore not neutral coordinates waiting to be discovered. Their geometry reflects the data, model architecture, and task used to learn them.

Semantic similarity is often estimated by comparing vectors. Cosine similarity measures the angle between two vectors, while dot product and distance-based measures capture related notions under different assumptions. Items with nearby representations may share topic, function, style, or usage. The meaning of “nearby” depends on the model. A space trained to predict neighboring words can organize language differently from one trained to match questions with relevant passages. Similarity is a model output, not a guarantee that two items are equivalent, true, or educationally appropriate. Different models can therefore produce different neighborhoods for the same material.

Some embeddings assign one vector to each token regardless of context. Contextual models instead create different representations for a token according to surrounding language, helping distinguish meanings such as “bank” beside a river and “bank” in finance. Sentence and document embeddings compress larger units into fixed-size vectors that support rapid comparison. Systems can index many vectors and retrieve nearest neighbors efficiently. This enables semantic search, clustering, recommendation, duplicate detection, and retrieval-augmented generation, where selected documents enter a model’s current context.

Compression creates trade-offs. A single vector cannot preserve every detail of a long text, and small wording or language changes may move an item unexpectedly. Training data can encode cultural stereotypes and uneven representation. High similarity can reflect superficial patterns or sensitive attributes rather than the concept an educator intends. Retrieval quality also depends on how text is divided, which model produces embeddings, how candidates are filtered, and how many results are returned. A plausible neighbor must still be checked against the original source and the task.

In education, embeddings can help learners find related explanations, group open responses for teacher review, or connect questions with a curated resource collection. Evaluation should use authentic queries and judge whether retrieved items are relevant, diverse, accurate, and useful for the intended learners. Teachers can make the mechanism visible with a small activity: ask students to predict which phrases should be close, inspect model-ranked neighbors, and explain surprising matches or omissions. This turns a hidden vector operation into a critical literacy exercise. Embeddings offer efficient relational structure, but people must define the purpose, inspect failures, protect sensitive information, and decide whether computational similarity represents the kind of meaning the learning task requires.`,
    coreIdeas: [
      "Embeddings are task-shaped numerical representations whose geometry reflects training data, model design, and learning objectives.",
      "Vector similarity can support search, clustering, recommendation, and retrieval, but closeness does not guarantee equivalence, truth, or educational value.",
      "Authentic evaluation must inspect relevance, diversity, bias, compression losses, privacy, and the original sources behind retrieved items.",
    ],
    educationConnection: "Ask learners to predict which phrases or resources should be close, inspect an embedding model’s neighbors, and explain useful matches, surprising omissions, and task-specific risks.",
    relatedConcepts: ["Vector space", "Cosine similarity", "Semantic retrieval"],
    sourceUrls: [
      { label: "Google ML: embeddings", url: "https://developers.google.com/machine-learning/crash-course/embeddings" },
      { label: "Google ML: embedding space", url: "https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space" },
      { label: "Sentence-BERT", url: "https://aclanthology.org/D19-1410/" },
    ],
    createdAt: "2026-07-27T08:00:00.000Z",
  },
  {
    id: "academy-022",
    listingIdentifier: "Educational Theory 11",
    slug: "schema-theory",
    title: "Schema Theory",
    track: "educational-theory",
    level: "core",
    tags: ["schema theory", "prior knowledge", "knowledge organization"],
    image: "/images/academy/covers/academy-022-schema-theory.png",
    imageAlt: "A White educator and Black and East Asian adult learners reorganize illustrated animal and plant cards across a three-part wooden knowledge frame",
    summaryAudio: "/audio/academy/academy-022-schema-theory-summary.m4a",
    summaryAudioTitle: "Listen to Schema Theory",
    shortSummary: "How prior knowledge structures guide attention, inference, and memory—and how teaching can activate, differentiate, and revise those structures.",
    fullSummary: `A schema is an organized knowledge structure that helps a person interpret information, anticipate relationships, and decide what deserves attention. Schemas develop through experience and can represent familiar situations, concepts, events, or roles. When reading a story about a restaurant, for example, prior knowledge about ordering, eating, and paying helps connect details that the text does not state. Learning is therefore not simply placing isolated facts into memory. New information is interpreted through structures the learner already brings.

Schemas make thinking efficient. They guide attention, support inferences, organize recall, and reduce the effort needed to understand recurring patterns. They can also distort. People may overlook details that do not fit an active schema, fill gaps with expected information, or remember material in a schema-consistent way. Research showing that readers recall different details when adopting different perspectives illustrates that the same text can be organized through different knowledge structures. A schema is useful, but it is neither a complete record nor a fixed container.

Prior knowledge strongly affects learning because it provides places to connect new ideas. When relevant knowledge is accurate and accessible, learners can understand and remember more. When it is incomplete or inappropriate, the same organizing power can support confident misunderstanding. Teachers need to discover what learners are using, not merely whether they have heard a term. Quick predictions, concept maps, examples and nonexamples, explanations, and comparison tasks can reveal relationships learners currently assume. Activation also matters: knowledge that exists but is not cued may not guide the current task.

Instruction can help learners build and revise schemas. Teachers can begin with a familiar case, make the underlying structure explicit, compare it with varied cases, and ask learners to retrieve and apply the pattern later. Worked examples can highlight which features matter, while contrasting cases can prevent a schema from becoming too narrow. Diagrams and well-organized notes can show relations among ideas, but their value comes from meaningful structure rather than decoration. Learners also need opportunities to reorganize knowledge when exceptions or new evidence appear.

In education, schema theory cautions against both content-free discovery and one-way transmission. Learners require enough guidance and examples to form productive structures, yet teachers must engage the meanings learners already hold. AI systems can activate prior knowledge with questions or propose analogies, but a generated analogy may emphasize the wrong relationship. A useful routine asks learners to state what they expect, examine a case, identify which prior pattern they used, and revise a diagram or explanation. The goal is flexible organization: knowledge that supports inference and transfer while remaining open to correction. Understanding schemas helps educators design sequences that connect, differentiate, retrieve, and refine ideas instead of treating every lesson as a fresh list of facts.`,
    coreIdeas: [
      "Schemas organize prior knowledge, guiding attention, inference, interpretation, and recall while also creating expectations that can distort memory.",
      "Learning depends on which knowledge structures are available and activated, so a familiar term does not prove a productive schema is in use.",
      "Varied examples, contrasting cases, retrieval, explanation, and reorganization help learners build flexible schemas that support transfer and correction.",
    ],
    educationConnection: "Elicit a prediction or concept map, compare varied cases, make the underlying relationship explicit, and ask learners to revise and apply their schema in a new context.",
    relatedConcepts: ["Prior knowledge", "Knowledge organization", "Transfer"],
    sourceUrls: [
      { label: "Anderson on schema-directed processes", url: "https://eric.ed.gov/?id=ED142977" },
      { label: "Anderson and Pichert on perspective and recall", url: "https://doi.org/10.1016/S0022-5371(78)90485-1" },
      { label: "OpenStax: schemas and cognition", url: "https://openstax.org/books/psychology-2e/pages/7-1-what-is-cognition" },
    ],
    createdAt: "2026-07-27T08:00:00.000Z",
  },
  {
    id: "academy-023",
    listingIdentifier: "AI Knowledge 12",
    slug: "transformers-attention-and-context-windows",
    title: "Transformers, Attention, and Context Windows",
    track: "ai-knowledge",
    level: "core",
    tags: ["transformers", "self-attention", "context windows"],
    image: "/images/academy/covers/academy-023-transformers-attention-and-context-windows.png",
    imageAlt: "A Black educator and South Asian and White adult learners inspect six object-image panels and cyan attention paths inside a movable glass context frame",
    summaryAudio: "/audio/academy/academy-023-transformers-attention-and-context-windows-summary.m4a",
    summaryAudioTitle: "Listen to Transformers, Attention, and Context Windows",
    shortSummary: "How transformer layers route information with self-attention, what a context window actually contains, and why more context does not guarantee faithful use.",
    fullSummary: `A transformer is a neural-network architecture designed to process relationships among tokens. Text first becomes tokens, and each token is mapped to an embedding. Because attention alone does not know order, the model also receives positional information. These representations pass through repeated layers that combine attention with feed-forward transformations, residual connections, and normalization. The architecture can process many positions in parallel during training, which helped make large language models practical at scale.

Self-attention lets each position build a new representation by drawing selectively from other positions. The layer creates query, key, and value vectors. A query is compared with keys to produce weights, and those weights mix the corresponding values. Multiple attention heads can learn different relationship patterns, such as agreement, reference, or local context, although individual heads do not always have a simple human interpretation. Later layers transform the combined representations, allowing the network to construct increasingly context-sensitive features.

For next-token generation, a causal mask prevents a position from attending to future tokens. The model predicts a continuation from the tokens currently available, chooses or samples a token, appends it, and repeats. Attention is not a database lookup and does not by itself verify facts. It is a learned routing operation inside a statistical model. The model’s parameters hold patterns acquired during training, while external retrieval can add documents to the prompt. These sources of information should not be confused.

A context window is the finite number of tokens that a model can consider in one operation. It may contain instructions, conversation history, retrieved documents, and generated text. A longer window permits more material, but it is not permanent memory and does not guarantee that every detail will influence the answer. Evidence can be diluted, truncated, or used unevenly depending on its position and relevance. Research on long-context models has found that information in the middle can be harder to use than information near the beginning or end. Counting tokens also differs from counting words: a word may become one token or several, and images or other inputs can consume part of the available context budget.

Educators can improve long-context tasks by selecting relevant material, dividing complex work into meaningful stages, labeling sources clearly, and asking for claims to be linked back to evidence. Students can compare answers when the same evidence is placed in different positions, then inspect which details were ignored or transformed. Sensitive information should not be added merely because a window is large. The practical mental model is limited computational attention: transformers create context-sensitive representations, and context windows define what can be available during a response. Human readers still decide what evidence belongs, whether it was used faithfully, and whether the result meets disciplinary standards.`,
    coreIdeas: [
      "Transformers create context-sensitive token representations through repeated self-attention and feed-forward layers with position information.",
      "Attention is learned information routing, not factual verification, database lookup, consciousness, or a complete explanation of model behavior.",
      "A context window limits what can be available during one operation; longer context is not permanent memory and may still be used unevenly.",
    ],
    educationConnection: "Let learners move the same evidence within a controlled prompt, compare outputs, trace claims back to sources, and explain why context length alone does not ensure faithful reasoning.",
    relatedConcepts: ["Query-key-value attention", "Causal masking", "Long-context evaluation"],
    sourceUrls: [
      { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { label: "The Annotated Transformer", url: "https://nlp.seas.harvard.edu/annotated-transformer/" },
      { label: "Lost in the Middle", url: "https://aclanthology.org/2024.tacl-1.9/" },
    ],
    createdAt: "2026-07-28T08:00:00.000Z",
  },
  {
    id: "academy-024",
    listingIdentifier: "Educational Theory 12",
    slug: "conceptual-change",
    title: "Conceptual Change",
    track: "educational-theory",
    level: "core",
    tags: ["conceptual change", "prior conceptions", "model revision"],
    image: "/images/academy/covers/academy-024-conceptual-change.png",
    imageAlt: "A Black learner, South Asian educator, and East Asian learner compare red and amber heat-transfer models around a glass-enclosed metal rod",
    summaryAudio: "/audio/academy/academy-024-conceptual-change-summary.m4a",
    summaryAudioTitle: "Listen to Conceptual Change",
    shortSummary: "How learners reorganize persistent explanations, why contradictory facts are insufficient, and how prediction, evidence, model comparison, and transfer support change.",
    fullSummary: `Conceptual change concerns learning that reorganizes an existing way of understanding, not merely adding another fact. Learners often enter a lesson with explanations built from everyday experience, previous teaching, language, and culture. These ideas may be productive in familiar settings even when they conflict with a disciplinary model. For example, a learner may treat force as something a moving object contains because that account seems to explain ordinary motion. Calling such thinking careless misses why it persists.

New information does not automatically replace an established conception. Learners can memorize a formula while interpreting it through the old framework, compartmentalize school knowledge, or explain away conflicting evidence. Conceptual-change research has proposed that learners are more likely to revise when they recognize limits in the current account and encounter an alternative that is understandable, plausible, and useful. These conditions are helpful design questions, not a guaranteed linear recipe. Emotion, identity, trust, language, and classroom relationships also shape whether learners reconsider an idea. Change may be gradual, uneven, and context-specific; a learner can use a scientific account in one setting and return to an intuitive account in another.

Some difficulties involve more than a missing proposition. Learners may assign a concept to the wrong kind of category, such as understanding heat as a material substance rather than a process of energy transfer. Others may organize many observations through a broader framework that resists piecemeal correction. Teachers therefore need diagnostic evidence about the structure of reasoning. A right answer on a familiar item may conceal an unchanged explanation, while a prediction, drawing, comparison, or transfer problem can reveal how ideas are connected.

Instruction can support change by eliciting initial explanations before correction, creating a meaningful need to compare them with evidence, and making an alternative model explicit. Contrasting cases, demonstrations, simulations, analogies, discussion, and carefully sequenced questions can expose where each model succeeds or fails. Learners should explain why evidence matters, revise representations, and apply the new account to unfamiliar situations. Anomalies alone are insufficient: without guidance, a surprising result may be ignored, misread, or absorbed into the existing schema.

In education, the aim is not to erase every intuitive idea but to build more powerful, appropriately bounded explanations. Teachers can treat learners’ reasoning respectfully while holding claims accountable to evidence. AI can generate alternative examples or simulate a dialogue, but it may invent misconceptions, overstate consensus, or provide a polished correction before the learner’s thinking is visible. A strong routine asks learners to predict, explain, test, compare models, revise, and transfer. Conceptual change is demonstrated when the learner can use the revised framework deliberately and explain its advantage, limitations, and relation to prior thinking—not when the learner simply repeats the teacher’s preferred sentence.`,
    coreIdeas: [
      "Conceptual change reorganizes an existing explanatory framework; learners’ prior conceptions are often coherent and useful in familiar contexts.",
      "Contradictory information alone rarely produces change because evidence can be ignored, reinterpreted, compartmentalized, or absorbed into the old account.",
      "Prediction, diagnostic explanation, guided model comparison, revision, and transfer provide stronger evidence of change than repeating a corrected statement.",
    ],
    educationConnection: "Elicit an explanation before correction, test its predictions against evidence, compare it with an explicit alternative model, then require revision and transfer to a new case.",
    relatedConcepts: ["Prior conceptions", "Cognitive conflict", "Knowledge restructuring"],
    sourceUrls: [
      { label: "Posner and colleagues on conceptual change", url: "https://doi.org/10.1002/sce.3730660207" },
      { label: "Vosniadou on conceptual change", url: "https://doi.org/10.1016/0959-4752(94)90018-3" },
      { label: "Chi and colleagues on ontological categories", url: "https://doi.org/10.1016/0959-4752(94)90017-5" },
      { label: "Duit and Treagust review", url: "https://doi.org/10.1080/09500690305016" },
    ],
    createdAt: "2026-07-28T08:00:00.000Z",
  },
  {
    id: "academy-025",
    listingIdentifier: "AI Knowledge 13",
    slug: "retrieval-augmented-generation",
    title: "Retrieval-Augmented Generation",
    track: "ai-knowledge",
    level: "core",
    tags: ["retrieval-augmented generation", "evidence retrieval", "grounded generation"],
    image: "/images/academy/covers/academy-025-retrieval-augmented-generation.png",
    imageAlt: "A Black educator and White and South Asian adult learners trace geometric source sheets from an archive drawer through a glass evidence window to a response board",
    summaryAudio: "/audio/academy/academy-025-retrieval-augmented-generation-summary.m4a",
    summaryAudioTitle: "Listen to Retrieval-Augmented Generation",
    shortSummary: "How retrieval-augmented generation selects external evidence for a model, where grounding can fail, and how people should evaluate retrieval and answers separately.",
    fullSummary: `Retrieval-augmented generation, commonly called RAG, combines a generative model with an external collection of information. Instead of relying only on patterns stored in model parameters, the system first searches for material related to a question and then places selected passages into the model's current context. The model uses the question, instructions, and retrieved passages to compose a response. This design can make changing or specialized knowledge available without retraining the entire model, and it can provide evidence that a reader can inspect.

A typical pipeline prepares documents before any question arrives. Files are cleaned, divided into chunks, described with metadata, and indexed. Many systems convert each chunk into an embedding so that a new query can be compared with candidate passages by semantic similarity. Keyword search, filters, rerankers, or hybrid retrieval may also be used. The highest-ranked passages enter the prompt, subject to a limited context budget. Every choice matters: chunk boundaries can separate a claim from its qualification, metadata can exclude relevant sources, and a similarity score can favor topically related text that does not answer the question.

Retrieval and generation are separate stages with separate failure modes. The retriever may miss the best evidence, select an outdated version, or return duplicated and conflicting passages. The generator may ignore a retrieved qualification, merge claims from different sources, or produce a statement that no passage supports. A citation can point to a real document while still failing to support the sentence beside it. RAG therefore reduces some forms of unsupported generation but does not guarantee truth, completeness, or faithful citation.

Evaluation should inspect the whole chain. Retrieval measures can ask whether relevant evidence appears among the selected passages and how highly it is ranked. Answer measures can examine accuracy, completeness, attribution, and whether each claim is entailed by its cited source. Testing should include ambiguous questions, missing evidence, adversarial documents, access restrictions, and cases where the collection contains no answer. Human reviewers need to see the query, retrieved passages, source dates, and final response rather than judging fluent output alone.

In education, learners can build a small RAG activity from a bounded set of approved readings. They can predict which passages should be retrieved, compare keyword and semantic search, and mark every answer claim as supported, contradicted, or absent. Teachers should distinguish source quality from retrieval relevance and require students to open original documents. Sensitive records need access controls before indexing, not only after generation. Versioned source collections and reproducible test questions also help a class notice when retrieval quality changes after an index or model update. The useful mental model is evidence-assisted composition: retrieval changes what information is available, while accountable readers still decide whether the selected evidence is appropriate and whether the response represents it faithfully.`,
    coreIdeas: [
      "RAG retrieves external passages and places them in a generative model's current context rather than changing the model's parameters for every knowledge update.",
      "Retrieval and generation fail differently, so relevant passages, faithful use, source quality, and claim-level support must be evaluated separately.",
      "Citations and retrieved documents make inspection possible, but they do not guarantee that an answer is true, complete, current, or supported.",
    ],
    educationConnection: "Give learners a bounded source collection, let them compare retrieval methods, and require every generated claim to be traced to a passage that genuinely supports it.",
    relatedConcepts: ["Dense retrieval", "Reranking", "Claim-level attribution"],
    sourceUrls: [
      { label: "Lewis and colleagues: Retrieval-Augmented Generation", url: "https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html" },
      { label: "Karpukhin and colleagues: Dense Passage Retrieval", url: "https://aclanthology.org/2020.emnlp-main.550/" },
      { label: "Gao and colleagues: RAG survey", url: "https://arxiv.org/abs/2312.10997" },
    ],
    createdAt: "2026-07-30T08:00:00.000Z",
  },
  {
    id: "academy-026",
    listingIdentifier: "Educational Theory 13",
    slug: "situated-learning",
    title: "Situated Learning",
    track: "educational-theory",
    level: "core",
    tags: ["situated learning", "legitimate peripheral participation", "authentic practice"],
    image: "/images/academy/covers/academy-026-situated-learning.png",
    imageAlt: "A South Asian mentor coaches a Black adult apprentice adjusting a bicycle brake while a White peer checks a mechanical diagram",
    summaryAudio: "/audio/academy/academy-026-situated-learning-summary.m4a",
    summaryAudioTitle: "Listen to Situated Learning",
    shortSummary: "How knowledge develops through participation in meaningful practice, how newcomers gain legitimate access, and why authentic activity requires guidance and reflection.",
    fullSummary: `Situated learning treats knowing as connected to the activity, tools, language, relationships, and culture in which it is developed and used. This does not mean that learning happens only in a physical location or that abstract knowledge is unimportant. It means that concepts acquire meaning through participation in recognizable practices. A formula used to interpret evidence in a laboratory, for example, is learned differently from the same symbols copied without a purpose, audience, or standard of judgment.

Lave and Wenger described learning through legitimate peripheral participation. A newcomer begins with limited but genuine access to a community's work, people, artifacts, and conversations. Peripheral does not mean trivial or excluded. It describes a position from which the learner can observe, contribute safely, receive feedback, and gradually take responsibility for more central activity. Participation changes both competence and identity: the learner is not only acquiring facts but becoming someone who can act, communicate, and judge within a practice.

Good situated instruction therefore offers more than a realistic backdrop. Learners need consequential tasks, access to how experienced people reason, and support matched to their current participation. A mentor can model a process, explain decisions, coach performance, and gradually fade assistance. Peers can compare strategies and make tacit conventions discussable. Tools and representations should be used for the purposes they serve in the field. A simulated clinic, design brief, classroom case, or community investigation becomes educationally valuable when learners must interpret conditions, make decisions, justify actions, and respond to authentic feedback.

Authenticity alone is not enough. Workplaces and communities can hide expertise, restrict newcomers, reproduce inequity, or expose learners to risk. An activity can look realistic while leaving students to imitate surface routines without understanding. Teachers must make participation legitimate, safe, inclusive, and intellectually visible. They should identify what learners can decide, which criteria matter, how feedback will be given, and when reflection will connect a local experience with broader concepts. Explicit comparison across cases helps learners see what transfers and what depends on context.

Digital and AI-supported environments can extend participation when they connect learners with real problems, collaborators, records, and expert feedback. They can also simulate authority or complete the meaningful parts of a task before the learner participates. A useful design asks learners to use tools while preserving responsibility for diagnosis, choice, explanation, and revision. Participation records should show what the learner actually attempted, which feedback changed the work, and how responsibility increased across successive tasks. After activity, learners should reconstruct the reasoning, compare it with another setting, and explain how tools and social expectations shaped the result. Situated learning is strongest when access to practice expands over time and learners can both perform within a community and critically understand the practice they are joining.`,
    coreIdeas: [
      "Knowledge develops through participation in activities, tools, language, relationships, and cultural standards rather than as context-free information alone.",
      "Legitimate peripheral participation gives newcomers real but supported access and a pathway toward fuller responsibility, competence, and identity.",
      "Authentic activity needs modeling, coaching, inclusion, reflection, and comparison across cases; realism by itself does not guarantee learning or transfer.",
    ],
    educationConnection: "Design a genuine disciplinary task with a safe entry role, visible expert reasoning, coached participation, increasing responsibility, and reflection that compares the experience with another context.",
    relatedConcepts: ["Communities of practice", "Cognitive apprenticeship", "Authentic assessment"],
    sourceUrls: [
      { label: "Lave and Wenger: Situated Learning", url: "https://doi.org/10.1017/CBO9780511815355" },
      { label: "Brown, Collins, and Duguid on situated cognition", url: "https://doi.org/10.3102/0013189X018001032" },
      { label: "Cambridge chapter on legitimate peripheral participation", url: "https://www.cambridge.org/highereducation/books/situated-learning/6915ABD21C8E4619F750A4D4ACA616CD/legitimate-peripheral-participation/28CD74BD15EBFABE881F24826917EC4C" },
    ],
    createdAt: "2026-07-30T08:00:00.000Z",
  },
  {
    id: "academy-027",
    listingIdentifier: "AI Knowledge 14",
    slug: "fine-tuning-instruction-tuning-and-preference-learning",
    title: "Fine-Tuning, Instruction Tuning, and Preference Learning",
    track: "ai-knowledge",
    level: "core",
    tags: ["fine-tuning", "instruction tuning", "preference learning"],
    image: "/images/academy/covers/academy-027-fine-tuning-instruction-tuning-and-preference-learning.png",
    imageAlt: "A Black educator and East Asian and Middle Eastern adult learners adjust a transparent three-stage training apparatus with blue and amber light paths in a Hong Kong lab",
    summaryAudio: "/audio/academy/academy-027-fine-tuning-instruction-tuning-and-preference-learning-summary.m4a",
    summaryAudioTitle: "Listen to Fine-Tuning, Instruction Tuning, and Preference Learning",
    shortSummary: "How pretrained models are adapted with task examples, natural-language instructions, and human preference comparisons, and why evaluation must match the intended use.",
    fullSummary: `Fine-tuning adapts a pretrained model by continuing training on a more focused dataset and objective. Pretraining gives a model broad statistical patterns, while fine-tuning changes its parameters toward a particular task, domain, style, or behavior. This differs from prompting, which supplies temporary instructions without changing the model, and from retrieval, which adds external information to the current context. Full fine-tuning updates many or all parameters. Parameter-efficient methods such as LoRA instead train smaller added components, reducing memory and storage demands while leaving most pretrained weights fixed.

Instruction tuning is supervised fine-tuning on examples that pair natural-language instructions with desired responses. A dataset may include summarizing, classifying, explaining, transforming, and answering tasks expressed in varied ways. Research on FLAN showed that training across many instruction-described tasks could improve zero-shot performance on unseen tasks. Instruction tuning helps a model recognize what a user is asking and follow common response conventions. It does not guarantee that the response is factual, current, safe, or appropriate for every learner. Those properties require separate evidence.

Preference learning uses judgments about which outputs are better. In reinforcement learning from human feedback, people may first provide demonstrations, then rank candidate responses. A reward model learns from those rankings, and reinforcement learning adjusts the language model toward highly rewarded behavior. Direct Preference Optimization offers a simpler route that learns directly from preferred and rejected response pairs without training a separate reward model and running the same reinforcement-learning loop. In either case, the result reflects who supplied the comparisons, what criteria they used, and which situations the dataset represented. A preference signal is not a universal definition of quality.

Adaptation creates trade-offs. Narrow data can improve specialized performance but encourage overfitting, reduce capabilities elsewhere, or amplify errors and exclusions in the examples. Training data may also contain private learner information or copyrighted material. Evaluation should therefore compare the base and adapted models on held-out tasks, relevant subgroups, safety cases, and realistic classroom conditions. Teams should document data provenance, intended use, version changes, and rollback criteria. Fine-tuning should not be chosen merely because it sounds more advanced; prompting or retrieval may be easier to inspect and update.

In education, the adaptation method should follow the learning purpose. A school might tune a model to follow a feedback rubric, but teachers must test whether it preserves subject accuracy, offers useful next steps, treats learner groups fairly, and avoids replacing professional judgment. Students can compare a base model with an adapted version, identify which behaviors changed, and ask what examples or preferences may explain the difference. This makes a central lesson visible: model behavior is designed through data and objectives. Tailored style can be useful, but it is not proof of truth, pedagogical value, or accountability.`,
    coreIdeas: [
      "Fine-tuning changes a pretrained model's parameters for a focused purpose, while prompting and retrieval alter the information available without the same parameter update.",
      "Instruction tuning learns from instruction-response examples, while preference learning uses comparisons to shape which behaviors a model favors.",
      "Adapted models require task-specific, subgroup, safety, provenance, and base-model comparisons because preferred behavior is not automatically accurate or educationally sound.",
    ],
    educationConnection: "Compare a base and adapted model on authentic learner work, trace changed behavior to training examples or preference criteria, and keep teachers accountable for the final pedagogical decision.",
    relatedConcepts: ["Supervised fine-tuning", "Human feedback", "Parameter-efficient adaptation"],
    sourceUrls: [
      { label: "FLAN: Finetuned Language Models Are Zero-Shot Learners", url: "https://arxiv.org/abs/2109.01652" },
      { label: "Training language models to follow instructions with human feedback", url: "https://arxiv.org/abs/2203.02155" },
      { label: "Direct Preference Optimization", url: "https://arxiv.org/abs/2305.18290" },
      { label: "LoRA: Low-Rank Adaptation of Large Language Models", url: "https://arxiv.org/abs/2106.09685" },
    ],
    createdAt: "2026-07-31T08:00:00.000Z",
  },
  {
    id: "academy-028",
    listingIdentifier: "Educational Theory 14",
    slug: "communities-of-practice",
    title: "Communities of Practice",
    track: "educational-theory",
    level: "core",
    tags: ["communities of practice", "social learning", "professional learning"],
    image: "/images/academy/covers/academy-028-communities-of-practice.png",
    imageAlt: "Four racially diverse adult educators and learners assemble a functional timber-and-metal mechanism together around a circular maker workbench",
    summaryAudio: "/audio/academy/academy-028-communities-of-practice-summary.m4a",
    summaryAudioTitle: "Listen to Communities of Practice",
    shortSummary: "How people learn by sustaining a shared domain, relationships, and repertoire of practice, and how educators can support participation without manufacturing community.",
    fullSummary: `A community of practice is a group of people who learn how to do something better through sustained interaction around a shared concern or activity. Wenger-Trayner describes three necessary elements: a domain that gives the group a common focus, a community whose members build relationships and learn together, and a practice made of shared ways of addressing recurring problems. A mailing list, staff category, online platform, or friendly gathering is not automatically a community of practice. Members must engage with one another as practitioners and develop something they can use.

The concept grew from Lave and Wenger's account of situated learning and legitimate peripheral participation. Newcomers can begin at the edge of a practice through limited but genuine access to its people, tools, language, and work. They observe, contribute, receive feedback, and gradually take greater responsibility. Peripheral participation is not a remedial waiting room. When it is legitimate, it provides a pathway toward fuller participation and a developing identity. Experienced members also learn as they explain judgments, encounter new cases, and revise what the community considers competent practice.

A practice includes more than written procedures. It can contain stories, cases, routines, tools, artifacts, vocabulary, standards, and tacit judgments about what counts as a good response. Joint problem solving turns individual experience into a shared repertoire. Members may carry ideas across boundaries, connecting one community with another. Yet communities can also reproduce hierarchy, exclude newcomers, normalize weak routines, or treat one group's experience as universal. Participation should therefore be examined for access, voice, recognition, power, and the quality of the practice being sustained.

Educators cannot create a genuine community simply by announcing one or opening a discussion board. They can cultivate the conditions: recurring time, authentic problems, voluntary and meaningful contribution, visible expertise, mentorship, shared stewardship, and useful records of developing practice. Newcomers need real entry roles rather than observation forever. Facilitation can invite quieter members, connect questions with relevant experience, and keep disagreement focused on improving practice. Documentation should capture cases and reasoning without replacing the conversations and trust through which knowledge becomes usable.

Communities of practice are valuable for teacher learning, laboratory work, design studios, professional placements, and cross-school improvement. AI can help search a case archive, summarize recurring questions, or connect members facing similar problems. It cannot supply mutual accountability, decide whose experience should count, or guarantee an inclusive learning trajectory. Evaluation should look beyond attendance and message counts. Useful evidence includes changes in practice, the quality and reuse of shared resources, widening participation, stronger professional judgment, and members' ability to explain how collective learning changed their work. The educational goal is not social activity alone, but a community that expands responsible participation while improving what its members can do together.`,
    coreIdeas: [
      "A community of practice combines a shared domain, relationships that support collective learning, and an evolving repertoire of practical knowledge.",
      "Legitimate peripheral participation gives newcomers genuine entry into work and a pathway toward greater competence, responsibility, and identity.",
      "Communities need cultivation and critical attention to access, power, inclusion, and practice quality; a platform or group label cannot create them by itself.",
    ],
    educationConnection: "Give educators or learners recurring authentic problems, legitimate newcomer roles, shared stewardship, mentorship, and evidence of how participation changes both practice and professional judgment.",
    relatedConcepts: ["Legitimate peripheral participation", "Situated learning", "Professional identity"],
    sourceUrls: [
      { label: "Lave and Wenger: Situated Learning", url: "https://doi.org/10.1017/CBO9780511815355" },
      { label: "Wenger: Communities of Practice", url: "https://doi.org/10.1017/CBO9780511803932" },
      { label: "Wenger-Trayner introduction to communities of practice", url: "https://www.wenger-trayner.com/introduction-to-communities-of-practice/" },
      { label: "IIEP-UNESCO Communities of Practice for education", url: "https://www.iiep.unesco.org/en/cop" },
    ],
    createdAt: "2026-07-31T08:00:00.000Z",
  },
];
