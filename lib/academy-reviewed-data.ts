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
  {
    id: "academy-029",
    listingIdentifier: "AI Knowledge 15",
    slug: "multimodal-ai",
    title: "Multimodal AI",
    track: "ai-knowledge",
    level: "core",
    tags: ["multimodal AI", "shared representations", "cross-modal learning"],
    image: "/images/academy/covers/academy-029-multimodal-ai.png",
    imageAlt: "A Black woman, an East Asian man, and a Middle Eastern woman examine a camera, speaker waveform, and textured plate connected through a glass prism",
    summaryAudio: "/audio/academy/academy-029-multimodal-ai-summary.m4a",
    summaryAudioTitle: "Listen to Multimodal AI",
    shortSummary: "How AI connects text, images, audio, and other signals, where cross-modal evidence helps, and why educational use requires careful evaluation, access, and consent.",
    fullSummary: `Multimodal AI processes and relates information from more than one modality, such as text, images, audio, video, sensor readings, or action. A modality is a way information is represented or sensed. A system may accept several modalities as inputs, produce one or more modalities as outputs, or learn connections among them. An image captioner, for example, receives pixels and produces language. A speech-enabled tutor may hear words, inspect a diagram, and answer in text or voice. Calling a system multimodal does not mean that it understands every channel equally well or combines them reliably.

To connect modalities, a model usually converts each kind of input into numerical representations. Different encoders may process words, pixels, or sound before an alignment or fusion mechanism relates their representations. CLIP learned from image-caption pairs so that related images and language could be located near one another in a shared space. ImageBind showed how image-paired data could connect six modalities in one embedding space. Other systems, including language-image models such as PaLI, combine visual and textual components so that a model can answer questions, describe scenes, or interpret text visible in images. These architectures differ, so the label multimodal describes a family of designs rather than one technique.

Combining channels can provide complementary evidence. Tone may change the interpretation of words, a diagram may clarify a verbal explanation, and depth may distinguish objects that look similar in a flat image. Yet more inputs do not guarantee better answers. A system may ignore one modality, over-rely on an easy cue, align events at the wrong time, or invent a connection between unrelated signals. Missing audio, ambiguous images, background noise, unfamiliar accents, and conflicting cues can expose weaknesses. Evaluation should therefore test each modality separately, meaningful combinations, missing-input conditions, and examples where the channels disagree.

In education, multimodal systems can support activities that are difficult to represent through text alone. A learner might explain a science model aloud while pointing to a diagram, record a physical procedure, or receive a spoken description of a visual resource. Teachers can ask whether feedback refers to evidence the learner actually provided. Accessibility requires options rather than assumptions: captions, transcripts, image descriptions, keyboard control, and alternatives to speech or camera input should remain available. Voice, face, classroom video, and behavioral traces can be sensitive personal data, so collection needs a clear purpose, informed consent, limited retention, and appropriate human oversight.

A productive learning task makes the modalities visible. Ask learners to identify what information came from the image, sound, text, or sensor; explain how the pieces support or contradict one another; and verify the system's claim against the original evidence. Start with bounded, low-stakes uses and compare performance across languages, devices, environments, and learner groups. Multimodal AI can widen how people express understanding, but it should not turn every activity into surveillance or replace teacher judgment. Its educational value comes from preserving learner agency while using several forms of evidence carefully.`,
    coreIdeas: [
      "Multimodal AI processes or produces more than one form of information and may align different encoders through shared representations or fusion mechanisms.",
      "Complementary modalities can strengthen interpretation, but missing, conflicting, biased, or poorly aligned signals can also create new failure modes.",
      "Educational value depends on accessible alternatives, evidence-aware tasks, privacy safeguards, and evaluation across modalities, settings, devices, and learner groups.",
    ],
    educationConnection: "Invite learners to submit or examine evidence in two or more forms, trace which claim comes from each modality, test conflicting or missing inputs, and keep non-camera and non-speech alternatives available.",
    relatedConcepts: ["Shared representations", "Vision-language models", "Cross-modal evaluation"],
    sourceUrls: [
      { label: "Radford and colleagues: CLIP", url: "https://arxiv.org/abs/2103.00020" },
      { label: "Girdhar and colleagues: ImageBind", url: "https://arxiv.org/abs/2305.05665" },
      { label: "Chen and colleagues: PaLI", url: "https://arxiv.org/abs/2209.06794" },
    ],
    createdAt: "2026-08-03T08:00:00.000Z",
  },
  {
    id: "academy-030",
    listingIdentifier: "Educational Theory 15",
    slug: "social-learning-and-modeling",
    title: "Social Learning and Modeling",
    track: "educational-theory",
    level: "core",
    tags: ["social learning", "modeling", "self-efficacy"],
    image: "/images/academy/covers/academy-030-social-learning-and-modeling.png",
    imageAlt: "A Black man demonstrates an articulated wooden arm while an East Asian woman and a White man reproduce the movement on smaller models",
    summaryAudio: "/audio/academy/academy-030-social-learning-and-modeling-summary.m4a",
    summaryAudioTitle: "Listen to Social Learning and Modeling",
    shortSummary: "How observation becomes learning through attention, retention, practice, and motivation, and how teachers can model thinking without encouraging passive imitation.",
    fullSummary: `Social learning and modeling explain how people can acquire knowledge, strategies, attitudes, and behavior by observing other people and the consequences of their actions. Observation can occur through a live demonstration, a peer, a recorded example, or another symbolic model. It is more than copying visible movements. Learners notice selected features, organize what they observed, anticipate possible results, and decide whether and how to act. Bandura's experiments also distinguished acquisition from performance: a learner may have learned a modeled response without displaying it until incentives, confidence, or circumstances change.

Four connected processes help explain effective modeling. Attention determines what the learner notices, so a demonstration needs a clear goal, visible critical features, and limited distraction. Retention preserves the observed pattern through mental images, language, diagrams, or rehearsal. Production turns a representation into action and improves through practice, feedback, and correction. Motivation influences whether the learner performs what was learned, based partly on expected outcomes and observed consequences. These processes interact. Watching an expert complete a complex task once may create admiration without giving a novice enough structure to remember or reproduce the method.

Social cognitive theory later emphasized reciprocal influence among personal factors, behavior, and environment. Learners are not passive recipients of models. Their prior knowledge, goals, emotions, and sense of efficacy shape what they attend to and attempt. Their actions also change the social environment by inviting feedback, help, or collaboration. A model can support agency when it reveals choices and self-correction, not merely a polished final performance. Seeing a similar peer succeed through effort and useful strategies may strengthen confidence, but credibility and relevance matter more than superficial similarity alone.

For teaching, model the thinking as well as the action. A teacher solving a problem can name the goal, inspect evidence, try a strategy, notice an error, revise, and explain why the revision works. Learners can then rehearse a manageable part, compare their attempt with criteria, receive feedback, and gradually perform independently. Peer models can make varied strategies visible, especially when students discuss why approaches differ. Contrasting an effective example with a plausible mistake often reveals decision points that a flawless demonstration hides. Assessment should examine what learners can now explain or do, not assume that attentive watching produced mastery.

Models also transmit harmful routines, stereotypes, overconfidence, and unequal expectations. Classrooms should not present one person, accent, culture, body, or communication style as the only image of competence. Digital creators and AI-generated demonstrations can appear authoritative while hiding errors or unrealistic performance. Teachers should select diverse credible models, verify the modeled process, make values and consequences discussable, and invite learners to question what deserves imitation. The goal is thoughtful participation: learners use observation to expand their repertoire, test actions in context, and eventually regulate their own practice rather than depend permanently on a model.`,
    coreIdeas: [
      "People can acquire strategies and behavior by observing live, peer, recorded, or symbolic models, even when learning is not immediately visible in performance.",
      "Effective modeling supports attention, retention, production, and motivation while revealing goals, decisions, errors, correction, and consequences.",
      "Learners and environments influence each other, so diverse credible models, guided practice, feedback, agency, and critical questioning matter.",
    ],
    educationConnection: "Demonstrate a real task with a think-aloud, make critical decisions and error correction visible, then move learners through observation, partial rehearsal, feedback, peer comparison, and independent performance.",
    relatedConcepts: ["Observational learning", "Self-efficacy", "Vicarious reinforcement"],
    sourceUrls: [
      { label: "Bandura on modeled consequences and imitation", url: "https://doi.org/10.1037/h0022070" },
      { label: "Bandura, Ross, and Ross on observational learning", url: "https://doi.org/10.1037/h0045925" },
      { label: "Bandura: Social Cognitive Theory", url: "https://doi.org/10.1146/annurev.psych.52.1.1" },
    ],
    createdAt: "2026-08-03T08:00:00.000Z",
  },
  {
    id: "academy-031",
    listingIdentifier: "AI Knowledge 16",
    slug: "agents-tools-and-workflows",
    title: "AI Agents, Tools, and Workflows",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI agents", "tool use", "agentic workflows"],
    image: "/images/academy/covers/academy-031-ai-agents-tools-and-workflows.png",
    imageAlt: "A Black woman, an East Asian man, and a Middle Eastern woman operate a camera, mechanical gripper, and inspection light table connected by an amber line",
    summaryAudio: "/audio/academy/academy-031-ai-agents-tools-and-workflows-summary.m4a",
    summaryAudioTitle: "Listen to AI Agents, Tools, and Workflows",
    shortSummary: "How AI agents combine models, context, tools, and action loops, why workflows mix fixed and adaptive steps, and where human control and verification remain essential.",
    fullSummary: `An AI agent is a system that uses a model to pursue a goal through a sequence of decisions and actions. A chatbot may answer once from the context it receives. An agent can instead gather information, choose a tool, inspect the result, update its working context, and continue until it reaches a stopping condition. The model supplies language and decision capabilities, while a surrounding harness manages instructions, available tools, permissions, memory, execution, and the loop itself. Agency is therefore a property of the whole system, not of the model alone.

A common agentic loop begins by understanding the task and collecting relevant context. The system then selects an action, invokes a tool, observes what happened, and decides what to do next. ReAct research showed how interleaving reasoning and actions can help language models use external information and adjust a plan. Coding agents illustrate the pattern clearly: they can search files, edit code, run tests, read failures, and revise the implementation. A useful stop is not simply a confident sentence. It is evidence that the requested outcome has been produced and checked.

Tools are explicit interfaces to capabilities such as search, calculation, file access, databases, or laboratory equipment. Their descriptions and input schemas tell the agent what actions are possible. The Model Context Protocol offers a standard way for applications to expose tools, resources, and reusable prompts to AI clients. Standard connectivity does not guarantee good judgment or safe execution. A tool can return stale, malicious, ambiguous, or incomplete information, and a model can select the wrong tool or supply harmful arguments.

A workflow organizes actions toward a repeatable outcome. Some steps should be deterministic, such as validating a file type or checking a numerical threshold. Other steps may benefit from agentic choice, such as deciding which source to inspect next. Strong systems combine both: fixed gates constrain important transitions, while the agent adapts within a bounded space. Reliability improves through least-privilege access, approvals for consequential actions, limits on time and tool use, structured logs, checkpoints, tests, and explicit failure and stop conditions. Tool outputs should be treated as untrusted input, especially when they can contain instructions aimed at redirecting the agent.

In education, agents are most useful when learners can inspect meaningful decisions and artifacts. A class might give an agent a small approved source collection and a bounded research question, then record which tools it used, what evidence each tool returned, and why the final answer should be trusted. Learners can compare a fixed workflow with an adaptive agent, predict failure points, and design verification rules. They should evaluate observable actions and results rather than request private hidden reasoning. Teachers remain responsible for task design, data protection, accessibility, and high-impact decisions. The central lesson is controlled delegation: an agent can coordinate useful work, but people must define authority, examine evidence, and decide when the work is genuinely complete.`,
    coreIdeas: [
      "An AI agent combines a model with context, tools, permissions, memory, execution, and a loop that selects actions, observes results, and stops on evidence.",
      "Workflows can mix deterministic gates with bounded agentic choices, while tool standards such as MCP provide connectivity rather than guaranteed reliability or safety.",
      "Least privilege, approvals, budgets, logs, tests, verification, and explicit stop conditions keep delegated actions inspectable and accountable.",
    ],
    educationConnection: "Give learners a bounded task and approved tools, expose the action log and resulting artifacts, compare adaptive and fixed workflows, and require evidence-based verification before accepting completion.",
    relatedConcepts: ["Agentic loop", "Tool calling", "Human oversight"],
    sourceUrls: [
      { label: "Claude Code: How Claude Code works", url: "https://code.claude.com/docs/en/how-claude-code-works" },
      { label: "Yao and colleagues: ReAct", url: "https://openreview.net/forum?id=WE_vluYUL-X" },
      { label: "Model Context Protocol architecture", url: "https://modelcontextprotocol.io/docs/learn/architecture" },
      { label: "NIST lessons on tool use in agent systems", url: "https://www.nist.gov/news-events/news/2025/08/lessons-learned-consortium-tool-use-agent-systems" },
    ],
    createdAt: "2026-08-04T08:00:00.000Z",
  },
  {
    id: "academy-032",
    listingIdentifier: "Educational Theory 16",
    slug: "mastery-learning",
    title: "Mastery Learning",
    track: "educational-theory",
    level: "core",
    tags: ["mastery learning", "formative assessment", "corrective instruction"],
    image: "/images/academy/covers/academy-032-mastery-learning.png",
    imageAlt: "A Latino man guides a Black woman aligning optical lenses while a White woman extends a teal beam through a prism",
    summaryAudio: "/audio/academy/academy-032-mastery-learning-summary.m4a",
    summaryAudioTitle: "Listen to Mastery Learning",
    shortSummary: "How clear outcomes, formative diagnosis, targeted correction, reassessment, and enrichment let learners reach important goals with different amounts of time and support.",
    fullSummary: `Mastery learning organizes instruction around the expectation that most learners can reach important outcomes when they receive suitable time, feedback, and corrective support. Instead of allowing achievement to vary widely after everyone receives the same schedule and assistance, the approach holds core outcomes relatively constant and varies the path toward them. Bloom argued that differences in prior learning, pace, and support should not be treated as fixed limits on capability. Mastery does not mean perfection. It means meeting a clearly defined and educationally defensible criterion before later learning depends on that knowledge or skill.

The cycle begins with precise objectives and high-quality initial instruction. A short formative assessment then diagnoses what each learner understands and where difficulty remains. This check is not mainly for grading. It guides a targeted correction connected to the specific error or prerequisite gap. Correction should offer a different route, such as a worked example, peer explanation, concrete representation, smaller practice sequence, or teacher conference, rather than simply repeating the first lesson. Learners then complete a parallel reassessment that examines the same outcome with different items. Those who already demonstrated mastery use the time for meaningful enrichment, extension, or application.

Mastery learning is not identical to unlimited retakes, self-paced worksheets, or lowering the standard until everyone passes. A score threshold alone can hide fragile knowledge. Criteria should describe what competent performance looks like and include evidence of explanation, application, or transfer when those qualities matter. Teachers also need to distinguish a temporary performance boost from retained learning. Later checks can show whether learners remember and use the knowledge after support has faded. Some contemporary programs use the phrase teaching for mastery, but that broader curriculum tradition should not be assumed to implement Bloom's complete formative, corrective, reassessment, and enrichment cycle.

Research reviews have generally found positive average effects, but results vary with implementation, subject, duration, assessment design, and comparison conditions. The Education Endowment Foundation currently rates the evidence security for mastery learning as low, which is a reason for careful local evaluation rather than rejection or overclaiming. Practical constraints matter. If assessments are vague, corrections arrive late, or every learner waits while a few repeat the same activity, the cycle can create bottlenecks. Schools need scheduled support, manageable objectives, reusable corrective resources, and ways to prevent additional help from becoming a stigma.

In education, a teacher might identify one essential concept, publish a rubric with examples, teach it through a coherent sequence, and use a brief diagnostic before the next dependency. Learners receive correction matched to their evidence, while peers who are ready investigate an extension problem. A parallel task then checks mastery, and a later transfer task checks durability. AI can propose alternative examples or group error patterns, but teachers must verify accuracy, protect learner data, and decide what evidence is sufficient. The central commitment is equitable opportunity to learn: keep expectations meaningful, respond to evidence quickly, and change the support before concluding that a learner cannot succeed.`,
    coreIdeas: [
      "Mastery learning keeps important outcomes stable while varying time, feedback, and support so that learners can reach a clear criterion before dependent learning continues.",
      "The full cycle combines strong initial instruction, diagnostic formative assessment, targeted corrective instruction, parallel reassessment, and meaningful enrichment.",
      "Mastery requires defensible evidence, transfer and retention checks, equitable access to timely support, and local evaluation of implementation rather than unlimited retakes alone.",
    ],
    educationConnection: "Define one essential outcome and visible criterion, diagnose specific gaps, provide a genuinely different corrective route, reassess with a parallel task, and later test transfer while offering enrichment to ready learners.",
    relatedConcepts: ["Formative assessment", "Corrective instruction", "Criterion-referenced assessment"],
    sourceUrls: [
      { label: "Bloom: Mastery Learning", url: "https://eric.ed.gov/?id=ED053419" },
      { label: "Kulik and colleagues: Meta-analysis of mastery learning", url: "https://doi.org/10.3102/00346543060002265" },
      { label: "Guskey: Lessons of Mastery Learning", url: "https://www.ascd.org/el/articles/lessons-of-mastery-learning" },
      { label: "Education Endowment Foundation: Mastery learning", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/mastery-learning" },
    ],
    createdAt: "2026-08-04T08:00:00.000Z",
  },
  {
    id: "academy-033",
    listingIdentifier: "AI Knowledge 17",
    slug: "knowledge-tracing-and-learner-models",
    title: "Knowledge Tracing and Learner Models",
    track: "ai-knowledge",
    level: "core",
    tags: ["knowledge tracing", "learner models", "adaptive learning"],
    image: "/images/academy/covers/academy-033-knowledge-tracing-and-learner-models.png",
    imageAlt: "A South Asian woman points to four glass chambers with amber disks while a Black man and East Asian woman study the connected learner-model apparatus",
    summaryAudio: "/audio/academy/academy-033-knowledge-tracing-and-learner-models-summary.m4a",
    summaryAudioTitle: "Listen to Knowledge Tracing and Learner Models",
    shortSummary: "How digital learning systems estimate changing mastery from interaction records, why predictions remain uncertain, and how transparent learner models can support better decisions.",
    fullSummary: `A learner model is a structured representation of what a system believes about a learner at a particular time. It may include estimates of knowledge, skills, strategies, goals, or engagement. Knowledge tracing is a narrower family of methods that updates an estimate of knowledge as a learner completes a sequence of tasks. The important word is estimate. Knowledge is not observed directly. The system observes evidence such as which item was attempted, whether the response was correct, how much time or help was used, and which knowledge components the item is assumed to require.

Bayesian Knowledge Tracing represents each knowledge component with a probability that it has been learned. A classic model includes an initial mastery estimate, a probability of learning after an opportunity, and allowances for a correct guess or an incorrect slip. After each tagged response, the model updates its estimate and predicts later performance. This makes assumptions visible, but the result depends heavily on how items are mapped to skills. Extensions may represent forgetting, item difficulty, multiple strategies, or individual differences because a simple correct-or-incorrect sequence cannot capture every path to understanding.

Deep Knowledge Tracing introduced recurrent neural networks that learn patterns across longer interaction sequences without requiring the same hand-specified state structure. Later models use attention, memory, graphs, or other architectures. Greater flexibility can improve prediction on some datasets, but a higher benchmark score does not automatically produce a more valid learner model. Comparisons can change with data splits, hyperparameters, baselines, and evaluation metrics. A model may also exploit repeated items or platform routines without representing durable knowledge. Useful evaluation asks about calibration, performance for new learners and items, transfer across contexts, and whether uncertainty is communicated.

Predictions become educationally meaningful only through the decisions they inform. A tutor might choose the next practice item, while a dashboard might help a teacher identify a pattern worth investigating. These actions should not treat a low probability as a fixed trait or diagnosis. Missing practice, language demands, accessibility barriers, guessing, collaboration, and poor item design can all shape the record. Open learner models make selected evidence and inferences visible to learners, sometimes allowing them to question or correct the representation. This can support reflection and trust while improving model accuracy.

In education, teachers and learners should use a learner model as a revisable hypothesis. A class can calculate a small Bayesian trace from several responses, change the guess or slip assumption, and observe how the estimated state moves. Learners can compare that trace with explanations, transfer tasks, and their own confidence, then identify evidence the model missed. Systems should minimize data collection, protect sensitive records, test for uneven errors, and preserve human review for consequential decisions. Knowledge tracing is valuable when it turns interaction history into a transparent prompt for better support, not when a probability replaces the learner or the teacher's judgment.`,
    coreIdeas: [
      "Knowledge tracing estimates an unobserved knowledge state from sequences of learner interactions, item-skill mappings, and explicit or learned assumptions.",
      "Bayesian, deep, and other models represent learning differently, so predictive scores must be checked for calibration, leakage, transfer, baselines, and uncertainty.",
      "Learner-model predictions should remain revisable, transparent, privacy-conscious evidence for support rather than fixed diagnoses or substitutes for learner and teacher judgment.",
    ],
    educationConnection: "Let learners calculate and challenge a simple knowledge trace, compare it with explanations and transfer evidence, and decide what additional evidence is needed before adapting instruction.",
    relatedConcepts: ["Bayesian knowledge tracing", "Open learner models", "Adaptive learning"],
    sourceUrls: [
      { label: "Corbett and Anderson: Knowledge Tracing", url: "https://doi.org/10.1007/BF01099821" },
      { label: "Piech and colleagues: Deep Knowledge Tracing", url: "https://proceedings.neurips.cc/paper_files/paper/2015/hash/bac9162b47c56fc8a4d2a519803d51b3-Abstract.html" },
      { label: "Sarsa and colleagues: Empirical Evaluation of Deep Knowledge Tracing", url: "https://jedm.educationaldatamining.org/index.php/JEDM/article/view/553" },
      { label: "Bull: Negotiated Learner Modelling", url: "https://link.springer.com/article/10.1186/s41039-016-0035-3" },
    ],
    createdAt: "2026-08-05T08:00:00.000Z",
  },
  {
    id: "academy-034",
    listingIdentifier: "Educational Theory 17",
    slug: "formative-assessment",
    title: "Formative Assessment",
    track: "educational-theory",
    level: "core",
    tags: ["formative assessment", "feedback", "evidence of learning"],
    image: "/images/academy/covers/academy-034-formative-assessment.png",
    imageAlt: "A Black woman points to coral pendulum traces while a White man adjusts the counterweight and a Middle Eastern woman holds a board of hand-drawn curves",
    summaryAudio: "/audio/academy/academy-034-formative-assessment-summary.m4a",
    summaryAudioTitle: "Listen to Formative Assessment",
    shortSummary: "How teachers and learners clarify goals, elicit evidence, interpret thinking, give actionable feedback, and adjust next steps while learning is still underway.",
    fullSummary: `Formative assessment is a planned, ongoing process in which teachers and learners elicit and use evidence to move learning forward. It is not a particular quiz, app, worksheet, or grading category. An activity becomes formative when evidence gathered during learning changes what someone does next. The process connects an intended learning goal, evidence of current thinking, and an adjustment that helps close the gap. Students participate by understanding the goal, examining evidence, using feedback, and increasingly directing their own next steps.

Strong formative practice begins with clear learning goals and success criteria grounded in the discipline. Teachers then design questions, discussions, observations, demonstrations, drafts, or exit tasks that can reveal how learners are reasoning. A correct answer may hide a misconception, while a carefully chosen explanation or contrasting case can expose it. Evidence should be broad enough that quiet, uncertain, multilingual, and disabled learners can show their thinking. Techniques that collect a response from every learner are often more informative than relying on volunteers, but the task still needs to distinguish among plausible understandings.

Interpretation must lead to action. A teacher might revisit a prerequisite, compare two anonymous responses, change the example, form a short support group, or advance to a more demanding application. Feedback is formative when it is actionable and the learner has time to use it. Comments that locate the current work, clarify the goal, and identify a manageable next move are more useful than praise or a score alone. Peer feedback and self-assessment can expand this process when learners understand the criteria, practice giving evidence-based comments, and work in a respectful culture where emerging ideas are safe to share.

Frequent testing is not automatically formative. If scores are recorded but teaching and learning continue unchanged, the loop remains open. The same task can be used formatively during instruction and summatively later, depending on purpose and response. Evidence on formative assessment is encouraging, including a large English secondary-school trial of a professional development programme, but results depend on implementation, subject, timing, and what teachers do with the evidence. No single routine works equally well in every classroom.

In education, a useful cycle can fit inside one lesson. Clarify a goal, ask learners to predict and explain, display a small range of responses, and decide together what the evidence suggests. The teacher chooses a next move, learners revise or try a parallel problem, and both check whether understanding changed. AI tools can help group response patterns or propose follow-up questions, but teachers must verify interpretations, protect learner data, and notice minority reasoning that an aggregate may hide. Formative assessment closes the loop through responsive action. Its value lies not in collecting more data, but in making timely, disciplined changes with learners while improvement is still possible.`,
    coreIdeas: [
      "Formative assessment is an ongoing process, not a specific instrument, and evidence becomes formative only when it changes a next step in teaching or learning.",
      "Clear goals, success criteria, well-designed elicitation, interpretation, actionable feedback, and opportunities to revise work together as an integrated cycle.",
      "Students need inclusive ways to show thinking, participate in self- and peer assessment, use feedback, and share responsibility within a safe disciplinary learning culture.",
    ],
    educationConnection: "Clarify one goal, elicit an explanation from every learner, interpret a range of responses, choose a responsive next move, and provide immediate time to revise or try a parallel task.",
    relatedConcepts: ["Assessment for learning", "Actionable feedback", "Self-assessment"],
    sourceUrls: [
      { label: "Black and Wiliam: Assessment and Classroom Learning", url: "https://assess.ucr.edu/sites/g/files/rcwecm2336/files/2019-02/blackwiliam_1998.pdf" },
      { label: "CCSSO: Formative Assessment Resources", url: "https://learning.ccsso.org/supporting-state-assessment-systems" },
      { label: "Education Endowment Foundation: Embedding Formative Assessment", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/embedding-formative-assessment" },
      { label: "Education Endowment Foundation: Teacher Feedback Guidance", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback" },
    ],
    createdAt: "2026-08-05T08:00:00.000Z",
  },
  {
    id: "academy-035",
    listingIdentifier: "AI Knowledge 18",
    slug: "recommendation-and-personalization-systems",
    title: "Recommendation and Personalization Systems",
    track: "ai-knowledge",
    level: "core",
    tags: ["recommender systems", "personalization", "ranking"],
    image: "/images/academy/covers/academy-035-recommendation-and-personalization-systems.png",
    imageAlt: "A Black woman turns a brass selector beside an East Asian man and White woman moving illuminated image panels through a recommendation apparatus",
    summaryAudio: "/audio/academy/academy-035-recommendation-and-personalization-systems-summary.m4a",
    summaryAudioTitle: "Listen to Recommendation and Personalization Systems",
    shortSummary: "How recommender systems generate candidates, predict relevance, rank choices, and shape the learning evidence from which future personalization is built.",
    fullSummary: `Recommendation and personalization systems select or order choices for a particular user, group, or context. They can suggest videos, books, practice items, courses, peers, or next activities when the available collection is too large to inspect directly. A recommendation is not a discovery of what someone truly wants or needs. It is a prediction made from representations of users, items, context, and an objective chosen by designers. Personalization changes what is presented; adaptation additionally changes a learning experience in response to evidence. Neither guarantees that the change is educationally beneficial.

Content-based filtering recommends items whose features resemble items a user previously valued. Collaborative filtering instead learns from patterns of interaction across many users and items. Matrix factorization represents both sides with compact vectors and estimates preference from their relationship. Modern systems may use neural networks, language or image embeddings, knowledge graphs, rules, or hybrid combinations. Each method has blind spots. Collaborative methods struggle with new users and items, content methods can become too narrow, and interaction records may confuse curiosity, convenience, exposure, or accidental clicks with preference.

Large systems commonly divide recommendation into stages. Candidate generation reduces a huge collection to a manageable set. A scoring model predicts a selected outcome for each candidate, then ranking or re-ranking chooses the final order while applying constraints such as diversity, freshness, prerequisites, accessibility, or safety. The objective matters as much as the model. Optimizing clicks, time, completion, challenge, or long-term learning can produce different lists. A technically accurate predictor can therefore serve the wrong purpose if its target does not represent the outcome that learners and educators value.

Recommendation also changes the data used to train future recommendations. Items shown near the top receive more attention, so later interaction records partly reflect earlier rankings. This feedback loop can amplify popularity, narrow exposure, or make behavior more similar without improving value. Missing interaction is not proof of dislike, and high engagement is not proof of learning. Evaluation should combine offline ranking measures with prospective tests, educational outcomes, calibration, coverage, novelty, subgroup analysis, privacy review, and checks for unintended effects. Users need meaningful ways to inspect, correct, diversify, or reset the information shaping a profile.

In education, a recommender might propose the next problem, resource, or collaborator, but the recommendation should remain a revisable proposal. Teachers and learners can compare two ranked lists produced by different objectives, identify which evidence moved an item upward, and ask what the system could not observe. They can test whether a suggestion respects readiness without trapping a learner in an assumed level. Designers should minimize data, protect sensitive profiles, document objectives, monitor who is underserved, and preserve human override for consequential choices. Responsible personalization expands useful options and supports agency. It does not quietly replace curriculum judgment, learner voice, or the right to encounter something unexpected.`,
    coreIdeas: [
      "Recommender systems represent users, items, and context, then use content-based, collaborative, or hybrid methods to predict which options may be relevant.",
      "Production recommenders separate candidate generation, scoring, ranking, and re-ranking, and the chosen objective determines what the system actually promotes.",
      "Exposure shapes later interaction data, so feedback loops, privacy, coverage, subgroup effects, user correction, and human override are central educational design concerns.",
    ],
    educationConnection: "Have learners compare recommendations produced by two objectives, trace which evidence shaped the order, identify missing context, and revise the list before using it for a learning decision.",
    relatedConcepts: ["Collaborative filtering", "Ranking objectives", "Algorithmic feedback loops"],
    sourceUrls: [
      { label: "Koren, Bell, and Volinsky: Matrix Factorization Techniques", url: "https://doi.org/10.1109/MC.2009.263" },
      { label: "Google Research: Deep Neural Networks for YouTube Recommendations", url: "https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/" },
      { label: "Verbert and colleagues: Context-Aware Recommender Systems for Learning", url: "https://doi.org/10.1109/TLT.2012.11" },
      { label: "Chaney and colleagues: Algorithmic Confounding in Recommendation Systems", url: "https://arxiv.org/abs/1710.11214" },
    ],
    createdAt: "2026-08-07T08:00:00.000Z",
  },
  {
    id: "academy-036",
    listingIdentifier: "Educational Theory 18",
    slug: "feedback-for-learning",
    title: "Feedback for Learning",
    track: "educational-theory",
    level: "core",
    tags: ["feedback", "revision", "feedback literacy"],
    image: "/images/academy/covers/academy-036-feedback-for-learning.png",
    imageAlt: "An East Asian woman points to coral light bands while a Middle Eastern man steadies a wooden mechanism and a Black woman adjusts its brass joint",
    summaryAudio: "/audio/academy/academy-036-feedback-for-learning-summary.m4a",
    summaryAudioTitle: "Listen to Feedback for Learning",
    shortSummary: "How evidence becomes useful feedback when it clarifies a goal, guides a manageable next move, and gives the learner a real opportunity to revise.",
    fullSummary: `Feedback for learning is information that helps a learner understand a current performance and take a productive next step toward a valued goal. It is not simply praise, correction, a grade, or any comment made after work. A useful feedback process connects three questions: Where am I going? How am I going? What should I do next? Its educational effect depends on what the learner notices, interprets, and uses. A perfectly written comment that arrives without time, trust, or opportunity for action may produce no learning at all.

Feedback can address different levels. Task feedback identifies accuracy, completeness, or a specific feature of the work. Process feedback focuses on strategies, relationships, or methods that can improve performance. Self-regulation feedback helps learners monitor, seek evidence, choose a strategy, and judge progress. Comments about the person, such as broad praise or criticism, often provide little direction and can shift attention from the work to self-image. Effective feedback is grounded in clear goals, success criteria, sound instruction, and evidence of learner thinking. It should be specific enough to guide action without solving the entire task or overwhelming the learner.

Timing and form depend on the learning problem. Immediate verification can prevent an error from being repeated during early practice, while delayed feedback can sometimes preserve productive thinking or support transfer. Spoken, written, peer, automated, and modeled feedback can all be useful when the message fits the task and the learner can act on it. More feedback is not always better. Dense marking, competing grades, vague advice, or too many targets can hide the highest-value next move. A manageable sequence often begins with one priority, an explanation or prompt, and a new chance to attempt related work.

Learners also need feedback literacy. This includes appreciating the purpose of feedback, making judgments about quality, managing emotional responses, and taking action. Examining exemplars, comparing contrasting work, practicing peer review, and discussing criteria can strengthen those capacities. Peer feedback should not merely outsource teacher marking. Its value often lies in helping learners notice qualities, explain decisions, and apply those judgments to their own work. A respectful culture matters because uncertainty and revision require learners to expose unfinished thinking without expecting embarrassment or fixed labels.

In education, a teacher might clarify one criterion, collect a small sample of work, and identify evidence of the current strategy. The learner then chooses one concrete revision, explains why it addresses the evidence, and applies it to the original or a parallel task. Both check whether the change improved the result. AI can help organize comments, compare drafts, or suggest prompts, but teachers must verify accuracy, protect data, and prevent fluent generic advice from replacing disciplinary judgment. Feedback closes a learning loop only when evidence leads to understandable action and the learner has agency, support, and time to complete that action.`,
    coreIdeas: [
      "Feedback supports learning when it connects a clear goal, trustworthy evidence of current performance, and a manageable next action that the learner can use.",
      "Task, process, and self-regulation feedback serve different purposes, while person-focused praise, excessive detail, or a grade without guidance can divert attention from improvement.",
      "Feedback literacy, exemplars, peer judgment, emotional safety, revision time, and learner agency determine whether information becomes meaningful action.",
    ],
    educationConnection: "Clarify one criterion, examine evidence in current work, agree on one actionable revision, give immediate time to apply it, and check the change on the original or a parallel task.",
    relatedConcepts: ["Formative feedback", "Feedback literacy", "Self-regulated learning"],
    sourceUrls: [
      { label: "Hattie and Timperley: The Power of Feedback", url: "https://doi.org/10.3102/003465430298487" },
      { label: "Shute: Focus on Formative Feedback", url: "https://doi.org/10.3102/0034654307313795" },
      { label: "Carless and Boud: The Development of Student Feedback Literacy", url: "https://doi.org/10.1080/02602938.2018.1463354" },
      { label: "Education Endowment Foundation: Teacher Feedback Guidance", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback" },
    ],
    createdAt: "2026-08-07T08:00:00.000Z",
  },
  {
    id: "academy-037",
    listingIdentifier: "AI Knowledge 19",
    slug: "computer-vision-for-learning",
    title: "Computer Vision for Learning",
    track: "ai-knowledge",
    level: "core",
    tags: ["computer vision", "image recognition", "responsible AI"],
    image: "/images/academy/covers/academy-037-computer-vision-for-learning.png",
    imageAlt: "A Middle Eastern woman points to illuminated outlines of three solid shapes beneath an overhead camera while a Black man and East Asian woman compare the physical objects",
    summaryAudio: "/audio/academy/academy-037-computer-vision-for-learning-summary.m4a",
    summaryAudioTitle: "Listen to Computer Vision for Learning",
    shortSummary: "How computer vision turns pixels into predictions, how its tasks and evaluations differ, and why classroom uses require consent, fairness checks, and human judgment.",
    fullSummary: `Computer vision is the field of computing that enables systems to process images or video and produce useful predictions. A digital image is first represented as an array of pixel values, not as objects with human meaning. A model may classify the whole image, locate objects with bounding boxes, separate regions through segmentation, estimate body keypoints, read characters, or track movement across frames. These are different tasks with different outputs. A camera records light, while a computer vision pipeline converts that record into a task-specific estimate.

Earlier systems often relied on human-designed features such as edges, corners, color histograms, and geometric relationships. Modern systems usually learn representations from many examples using convolutional neural networks, vision transformers, or multimodal models. During training, labeled examples connect pixel patterns with target categories, locations, masks, or captions. Data augmentation can vary crops, lighting, and orientation to improve robustness. Yet a model does not automatically acquire a complete concept. It may depend on background cues, camera position, annotation conventions, or correlations that fail outside the training collection.

Evaluation must match the intended task. Classification can be examined with accuracy, precision, recall, confusion matrices, and calibration. Detection and segmentation also depend on how predicted regions overlap reference annotations, often measured with intersection over union. A held-out benchmark such as COCO can support comparison, but benchmark performance does not guarantee reliable classroom performance. Schools have different cameras, lighting, languages, accessibility needs, learner demographics, and activities. Testing should therefore include realistic local conditions, difficult counterexamples, subgroup analysis, and explicit thresholds for uncertain predictions.

Educational uses can include digitizing handwritten work, recognizing mathematical diagrams, supporting laboratory observation, creating descriptions for visual materials, or helping learners examine motion and spatial relationships. Risks grow when a system identifies people or infers attention, emotion, behavior, or ability from appearance. Such inferences may be scientifically weak, uneven across groups, intrusive, and difficult to challenge. Images can reveal faces, locations, disability, relationships, and classroom routines. Consent, data minimization, secure retention, accessibility, and meaningful alternatives should be designed before collection begins.

In education, learners can build a small investigation with photographs of familiar objects under varied lighting and viewpoints. They define the categories, inspect errors, compare false positives and false negatives, and identify which visual cues the model may be using. They can then decide whether the evidence is adequate for a low-stakes learning aid and what a human reviewer must check. They should also document when the system declines to make a prediction. The central lesson is that computer vision does not simply see. It performs a specified measurement shaped by data, labels, objectives, and context. Responsible use keeps those choices visible and leaves consequential interpretations with people who can examine the learner, the setting, and evidence beyond the image.`,
    coreIdeas: [
      "Computer vision maps pixel arrays to task-specific predictions such as classes, bounding boxes, segments, keypoints, text, or tracked movement rather than understanding an image as a person does.",
      "Learned visual representations depend on training examples, labels, context, and evaluation design, so benchmark performance must be supplemented with realistic local and subgroup testing.",
      "Educational uses require consent, data minimization, accessibility, uncertainty handling, and human review, especially when images reveal identity or invite claims about attention, emotion, behavior, or ability.",
    ],
    educationConnection: "Have learners test the same object classifier across lighting, viewpoints, and backgrounds, inspect its errors and cues, then define a narrow low-stakes use with clear consent and human-review rules.",
    relatedConcepts: ["Image classification", "Object detection and segmentation", "Algorithmic fairness"],
    sourceUrls: [
      { label: "Szeliski: Computer Vision, Second Edition", url: "https://szeliski.org/Book/" },
      { label: "COCO: Common Objects in Context", url: "https://cocodataset.org/" },
      { label: "NIST: Face Recognition Demographic Effects", url: "https://doi.org/10.6028/NIST.IR.8280" },
    ],
    createdAt: "2026-08-09T08:00:00.000Z",
  },
  {
    id: "academy-038",
    listingIdentifier: "Educational Theory 19",
    slug: "deliberate-practice",
    title: "Deliberate Practice",
    track: "educational-theory",
    level: "core",
    tags: ["deliberate practice", "expertise", "feedback"],
    image: "/images/academy/covers/academy-038-deliberate-practice.png",
    imageAlt: "A Black woman coaches an East Asian violinist on hand position while a White cellist listens beside music stands and a metronome in a bright rehearsal room",
    summaryAudio: "/audio/academy/academy-038-deliberate-practice-summary.m4a",
    summaryAudioTitle: "Listen to Deliberate Practice",
    shortSummary: "Why expertise grows through specific goals, demanding focused rehearsal, high-quality feedback, and repeated adjustment rather than experience or repetition alone.",
    fullSummary: `Deliberate practice is structured activity designed specifically to improve a defined aspect of performance. It differs from simply repeating a familiar task, accumulating hours, completing routine exercises, or performing for an audience. A deliberate-practice task has a clear target just beyond the learner's current reliable performance. It demands focused attention, produces evidence about a weakness, and allows another attempt after feedback. The purpose is improvement rather than enjoyment, completion, or immediate success, although motivation and a supportive learning climate help people sustain the effort.

The cycle begins by identifying a specific component of a complex skill. A musician might isolate one transition, a writer might revise the logic of one paragraph, and a teacher candidate might rehearse how to elicit reasoning after an incorrect answer. The learner attempts the component under conditions that make relevant differences visible. A knowledgeable teacher, coach, peer, recording, rubric, or well-designed task then provides information connected to the goal. The learner interprets that evidence, changes a strategy or action, and tries again. Repetition matters only when each attempt is informed by what happened before.

Expert guidance is valuable because novices may not yet recognize the most important error, an effective practice sequence, or a useful model of high-quality performance. Feedback should be timely and precise enough to guide change without taking over the task. Difficulty should rise as control improves, and practice should include variation and later tests of transfer so that success is not tied to one cue or routine. Rest also matters. Sustained concentration is demanding, and exhausted repetition can stabilize mistakes rather than improve skill. Deliberate practice develops domain-specific representations and control, not a general shortcut to expertise.

Research supports an association between structured practice and performance, but strong popular claims require caution. The original expertise research emphasized activities designed by teachers and methods that permit repeated correction. Later reviews found that measured deliberate practice explains only part of the variation in performance, with effects differing across music, games, sports, education, and professions. Prior knowledge, opportunity, instruction, health, motivation, resources, and the quality of measurement also matter. A fixed number of hours cannot guarantee expertise, and unequal access to coaching or protected practice time should not be mistaken for differences in potential.

In education, a teacher can select one high-value move, show a credible model, and define observable success criteria. Learners rehearse briefly, receive one prioritized piece of evidence, explain the adjustment they will make, and immediately try a parallel version. A record of attempts helps them notice progress and decide when to increase difficulty, vary the context, or return to prerequisite knowledge. The same structure can strengthen academic problem solving, artistic performance, laboratory technique, language production, and teacher preparation. Deliberate practice is most educationally responsible when goals are meaningful, feedback is trustworthy, access is equitable, and focused rehearsal remains connected to flexible performance in authentic settings.`,
    coreIdeas: [
      "Deliberate practice targets a specific weakness just beyond current reliable performance and organizes focused attempts for improvement rather than repetition, completion, or performance alone.",
      "A productive cycle uses clear criteria, informative attempts, knowledgeable feedback, immediate adjustment, rising challenge, variation, transfer checks, and adequate rest.",
      "Structured practice contributes to expertise but does not explain all performance differences, so educators must avoid fixed-hour myths and address unequal access to coaching, time, and resources.",
    ],
    educationConnection: "Choose one high-value component, model the target, rehearse briefly, give one prioritized piece of evidence, require an immediate adjusted attempt, and later vary the context to check transfer.",
    relatedConcepts: ["Expert performance", "Feedback cycles", "Transfer of learning"],
    sourceUrls: [
      { label: "Ericsson and colleagues: The Role of Deliberate Practice", url: "https://doi.org/10.1037/0033-295X.100.3.363" },
      { label: "Ericsson and Harwell: Why the Original Definition Matters", url: "https://doi.org/10.3389/fpsyg.2019.02396" },
      { label: "Macnamara and colleagues: Deliberate Practice Meta-analysis", url: "https://doi.org/10.1177/0956797614535810" },
      { label: "Deans for Impact: Practice with Purpose", url: "https://www.deansforimpact.org/files/assets/practice-with-purpose.pdf" },
    ],
    createdAt: "2026-08-09T08:00:00.000Z",
  },
  {
    id: "academy-039",
    listingIdentifier: "AI Knowledge 20",
    slug: "speech-recognition-and-synthesis",
    title: "Speech Recognition and Synthesis",
    track: "ai-knowledge",
    level: "core",
    tags: ["speech recognition", "speech synthesis", "accessible learning"],
    image: "/images/academy/covers/academy-039-speech-recognition-and-synthesis.png",
    imageAlt: "A South Asian woman teacher guides a Black man using a studio microphone while an East Asian woman learner compares a waveform on a tablet with a notebook containing meaningful sound diagrams",
    summaryAudio: "/audio/academy/academy-039-speech-recognition-and-synthesis-summary.m4a",
    summaryAudioTitle: "Listen to Speech Recognition and Synthesis",
    shortSummary: "How speech recognition turns audio into text, how speech synthesis turns text into sound, how both systems are evaluated, and why accent, accessibility, consent, and human review matter in education.",
    fullSummary: `Speech recognition and speech synthesis connect spoken language with digital representations. Automatic speech recognition, or ASR, converts an audio signal into a sequence of words or other tokens. Text-to-speech, or TTS, works in the other direction by generating an audible waveform from text and instructions about language, speaker, or speaking style. Both tasks involve more than matching sounds with letters. Speech carries timing, accent, emotion, background noise, and overlapping voices, while written text leaves many features of pronunciation and expression unspecified.

An ASR system first represents a recording as short frames or learned audio features. A model then estimates which linguistic units and sequences are plausible. Earlier systems often combined separate acoustic, pronunciation, and language models. End-to-end systems can learn a more direct mapping from audio to text, sometimes using connectionist temporal classification, attention, or encoder-decoder architectures. Modern large-scale models can learn from multilingual and weakly labeled recordings, but they still produce substitutions, deletions, and insertions. Word error rate summarizes those errors against a reference transcript. It is useful, yet it does not reveal whether mistakes change meaning, affect one speaker group more than another, or make a caption unusable for a particular learner.

TTS systems typically convert text into an intermediate acoustic representation and then use a vocoder or related generator to produce a waveform. Neural systems such as Tacotron 2 showed how a sequence model could predict a mel spectrogram while a separate neural vocoder generated speech. Current systems may control voice, pace, emphasis, and language more flexibly. Natural-sounding output is not automatically accurate or appropriate. Evaluation should consider intelligibility, pronunciation, prosody, listener judgments, task success, and whether the system faithfully follows the source text. Synthetic speech can also imitate a person, so consent, disclosure, and safeguards against impersonation matter.

In education, speech technology can support captions, searchable recordings, dictation, pronunciation practice, read-aloud access, and augmentative communication. A teacher might ask learners to compare an automatic transcript with the recording, label different error types, and investigate why proper names, technical terms, code-switching, or classroom noise caused difficulty. Learners can then correct the transcript and test whether the revision improves comprehension. For synthesis, they can compare several readings of the same sentence and explain how pacing or emphasis changes interpretation.

Performance must be checked across the people and conditions that will actually use the system. Research on commercial ASR found substantial error disparities between recordings of Black and White speakers in the studied corpus, showing why one average score is insufficient. Schools should test accents, languages, ages, disabilities, microphones, and noise conditions; protect voice recordings as sensitive data; provide correction and opt-out routes; and keep human review for consequential uses. Speech systems can expand participation when they remain inspectable tools, not unquestioned judges of fluency, ability, identity, or intent.`,
    coreIdeas: [
      "Automatic speech recognition maps audio representations to linguistic sequences, while word error rate counts substitutions, deletions, and insertions but cannot capture every meaning, usability, or subgroup concern.",
      "Text-to-speech systems turn text into an acoustic representation and waveform, and naturalness must be evaluated alongside intelligibility, pronunciation, fidelity, consent, and misuse risk.",
      "Educational speech tools require testing across real accents and conditions, privacy protection for voice data, learner correction routes, accessibility review, and human oversight for consequential uses.",
    ],
    educationConnection: "Let learners compare a recording, an automatic transcript, and two synthesized readings, classify meaningful errors, revise the transcript, and explain how accent, noise, pacing, and emphasis affect educational use.",
    relatedConcepts: ["Automatic speech recognition", "Text-to-speech", "Word error rate"],
    sourceUrls: [
      { label: "Graves and Jaitly: End-to-End Speech Recognition", url: "https://proceedings.mlr.press/v32/graves14.html" },
      { label: "Shen and colleagues: Tacotron 2", url: "https://arxiv.org/abs/1712.05884" },
      { label: "Radford and colleagues: Robust Speech Recognition", url: "https://arxiv.org/abs/2212.04356" },
      { label: "Koenecke and colleagues: Racial Disparities in ASR", url: "https://doi.org/10.1073/pnas.1915768117" },
    ],
    createdAt: "2026-08-01T08:00:00.000Z",
  },
  {
    id: "academy-040",
    listingIdentifier: "Educational Theory 20",
    slug: "transfer-of-learning",
    title: "Transfer of Learning",
    track: "educational-theory",
    level: "core",
    tags: ["transfer of learning", "adaptive expertise", "varied practice"],
    image: "/images/academy/covers/academy-040-transfer-of-learning.png",
    imageAlt: "A Middle Eastern man teacher guides a Black woman and an East Asian man as they compare a small bridge model with a larger bridge model beside a meaningful hand-drawn force sketch",
    summaryAudio: "/audio/academy/academy-040-transfer-of-learning-summary.m4a",
    summaryAudioTitle: "Listen to Transfer of Learning",
    shortSummary: "How prior learning helps or hinders new performance, why far transfer does not happen automatically, and how varied examples, principle-focused comparison, and future-learning assessments support flexible use.",
    fullSummary: `Transfer of learning occurs when prior learning influences performance or further learning in a new situation. Positive transfer helps, negative transfer interferes, and apparent zero transfer means that earlier learning produces no detectable advantage on the chosen measure. Transfer is central to education because lessons are meant to matter beyond the exact worksheet, example, room, or assessment in which they were first learned. It should not be confused with simple repetition. A learner who reproduces the same procedure on an almost identical item may demonstrate retention without showing flexible use.

Near and far transfer describe degrees of change between the learning and application situations. Barnett and Ceci's taxonomy separates what is transferred, such as a procedure or principle, from the contexts across which it travels, such as a new task, knowledge domain, physical setting, social setting, or time period. Distance is therefore multidimensional rather than a single label. A mathematics strategy used with different numbers is nearer than the same principle recognized in a science investigation, but either judgment depends on which features researchers treat as important.

Transfer requires sufficient initial learning, yet practice alone does not guarantee it. Learners need organized knowledge, an understanding of underlying principles, and awareness of the conditions under which a principle applies. Knowledge can remain bound to the surface features of the original example, or it can be activated inappropriately because a new problem only looks similar. Multiple contrasting examples help learners distinguish deep structure from incidental details. Explanations, comparison, retrieval, and varied practice can make relevant relationships easier to notice. Teachers should also address misconceptions because prior knowledge can guide reasoning in an unproductive direction.

Researchers measure transfer in different ways. A traditional test asks whether a learner solves a novel problem without assistance. Other approaches examine how quickly and effectively the learner uses feedback, resources, or instruction in a new domain. This preparation-for-future-learning perspective recognizes that adaptive expertise includes learning well when the answer is not already known. Actor-oriented research also asks what connections learners themselves construct, rather than counting only the solution anticipated by an expert. These measures can reveal productive reasoning that a single right-or-wrong transfer item misses.

In education, teach for transfer deliberately. State the principle, use examples with different surface features, include a tempting nonexample, and ask learners to explain where the principle applies and where it does not. Later, present a new context and require learners to identify relevant prior knowledge before solving. A useful assessment can separate unaided performance from learning with a carefully chosen resource. Teachers should avoid promising broad benefits from one isolated activity. Transfer is specific, effortful, and supported by cues, knowledge, motivation, and context. The goal is not knowledge that travels automatically, but learners who can notice relationships, test an analogy, revise a strategy, and continue learning across settings.`,
    coreIdeas: [
      "Transfer can be positive, negative, or undetected, and near or far transfer depends on several dimensions separating the original learning and later application contexts.",
      "Flexible transfer depends on sufficient initial learning, organized principles, conditions of applicability, contrasting examples, and the ability to look beyond misleading surface similarities.",
      "Transfer assessment can examine both unaided novel performance and preparation for future learning, while instruction should deliberately cue comparison, explanation, varied practice, and revision.",
    ],
    educationConnection: "Teach one principle through varied examples and a tempting nonexample, then ask learners to identify and justify its use in a new context before comparing unaided transfer with learning from a selected resource.",
    relatedConcepts: ["Near and far transfer", "Preparation for future learning", "Adaptive expertise"],
    sourceUrls: [
      { label: "Barnett and Ceci: Taxonomy for Far Transfer", url: "https://pubmed.ncbi.nlm.nih.gov/12081085/" },
      { label: "National Research Council: Learning and Transfer", url: "https://www.nationalacademies.org/read/9853/chapter/6" },
      { label: "Perkins and Salomon: Teaching for Transfer", url: "https://eric.ed.gov/?id=EJ376242" },
      { label: "Lobato: Alternative Perspectives on Transfer", url: "https://doi.org/10.1207/s15327809jls1504_1" },
    ],
    createdAt: "2026-08-01T08:00:00.000Z",
  },
  {
    id: "academy-041",
    listingIdentifier: "AI Knowledge 21",
    slug: "algorithmic-bias-and-fairness",
    title: "Algorithmic Bias and Fairness",
    track: "ai-knowledge",
    level: "core",
    tags: ["algorithmic bias", "fairness metrics", "sociotechnical systems"],
    image: "/images/academy/covers/academy-041-algorithmic-bias-and-fairness.png",
    imageAlt: "An East Asian woman teacher guides a Black woman and a South Asian man as they compare two sparse outcome diagrams with meaningful evidence cards on a classroom table",
    summaryAudio: "/audio/academy/academy-041-algorithmic-bias-and-fairness-summary.m4a",
    summaryAudioTitle: "Listen to Algorithmic Bias and Fairness",
    shortSummary: "How bias can enter an AI system, why fairness has multiple competing definitions, and how disaggregated audits, community input, contestability, and process changes support responsible decisions.",
    fullSummary: `Algorithmic bias occurs when a computational system produces or reinforces systematically different outcomes that are harmful, unjustified, or poorly aligned with its intended purpose. Bias can enter through the problem definition, data collection, labels, features, model objective, decision threshold, user interface, or the institutional process surrounding the model. It is not limited to a programmer expressing prejudice, and removing a protected attribute does not remove information correlated with that attribute. A system can be accurate on average while failing particular groups or intersections of groups.

Fairness is a normative goal, not one universal statistic. Demographic parity asks whether groups receive a positive outcome at similar rates. Equal opportunity compares true positive rates for people who meet a relevant condition, while equalized odds also compares false positive rates. Calibration asks whether the same score has a similar meaning across groups. These criteria answer different moral and practical questions, and they can conflict when groups have different observed base rates or when labels reflect unequal conditions. Selecting a metric therefore requires a justified account of the decision, the harms of different errors, and the people who bear them.

Evidence of disparity requires disaggregated evaluation. The Gender Shades study showed that commercial gender classification systems tested on a more balanced benchmark had much larger error rates for darker-skinned women than for lighter-skinned men. The lesson is broader than facial analysis: aggregate performance can hide intersectional failures, and benchmark composition shapes what developers notice. Testing should examine false positives, false negatives, calibration, uncertainty, missing data, accessibility, and performance across relevant subgroups. Small sample sizes and unstable categories also need to be reported rather than converted into confident claims.

Technical mitigation can include improving data quality and coverage, revising labels or objectives, reweighting examples, constraining a model, adjusting thresholds, or changing how outputs are used. None of these steps proves that a system is fair. Fairness and Abstraction in Sociotechnical Systems warns that technical work can fail when it ignores the social process around a model, treats people as fixed categories, or assumes the modeled task is the real problem. Governance therefore includes affected-community input, documentation, contestability, monitoring after deployment, and the option not to automate.

In education, learners can audit a small fictional admissions or support model. They should define the decision, calculate a confusion matrix for each subgroup, compare two fairness criteria, and identify who benefits or is harmed by each choice. They can then propose a non-model change, such as improving access to support or adding human review. Schools should not use a fairness score as permission for high-stakes automation. They need lawful purposes, data minimization, accessible explanations, appeal routes, and evidence that the overall process supports learners. Responsible practice asks not only whether predictions are statistically balanced, but whether the task, data, intervention, and accountability structure are educationally defensible.`,
    coreIdeas: [
      "Algorithmic bias can arise throughout a sociotechnical system, from problem definition and data to objectives, interfaces, deployment, and institutional response.",
      "Fairness metrics such as demographic parity, equal opportunity, equalized odds, and calibration answer different questions and may conflict, so metric choice requires contextual justification.",
      "Responsible evaluation combines disaggregated and intersectional testing with documentation, affected-community input, contestability, monitoring, human review, and the option not to automate.",
    ],
    educationConnection: "Let learners audit subgroup confusion matrices for a fictional educational decision, compare two fairness criteria, identify who bears each error, and propose both a model change and a non-model process change.",
    relatedConcepts: ["Equalized odds", "Intersectional auditing", "Contestability"],
    sourceUrls: [
      { label: "NIST: Identifying and Managing Bias in AI", url: "https://doi.org/10.6028/NIST.SP.1270" },
      { label: "Hardt, Price, and Srebro: Equality of Opportunity", url: "https://proceedings.neurips.cc/paper_files/paper/2016/hash/6a9659feb1216f14f7384ba499518b38-Abstract.html" },
      { label: "Buolamwini and Gebru: Gender Shades", url: "https://proceedings.mlr.press/v81/buolamwini18a.html" },
      { label: "Selbst and colleagues: Fairness and Abstraction", url: "https://doi.org/10.1145/3287560.3287598" },
    ],
    createdAt: "2026-08-02T08:00:00.000Z",
  },
  {
    id: "academy-042",
    listingIdentifier: "Educational Theory 21",
    slug: "achievement-goal-theory",
    title: "Achievement Goal Theory",
    track: "educational-theory",
    level: "core",
    tags: ["achievement goals", "mastery orientation", "classroom goal structures"],
    image: "/images/academy/covers/academy-042-achievement-goal-theory.png",
    imageAlt: "A woman teacher points to a three-stage pathway diagram while a Black man and an East Asian woman review illustrated learning portfolios at a classroom table",
    summaryAudio: "/audio/academy/academy-042-achievement-goal-theory-summary.m4a",
    summaryAudioTitle: "Listen to Achievement Goal Theory",
    shortSummary: "How learners define and pursue competence, how mastery and performance goals combine with approach and avoidance, and how classroom structures can support challenge, revision, and developable competence.",
    fullSummary: `Achievement goal theory examines how people define and pursue competence in achievement settings. A goal is not merely a target score or a plan. It represents the purpose or standard that organizes attention, interpretation, emotion, and action during learning. Early work distinguished mastery goals, focused on developing competence and understanding, from performance goals, focused on demonstrating competence relative to others. The theory explains patterns of response, not fixed types of students. The same learner can adopt different goals across tasks and classrooms.

Later models separated approach from avoidance. In the 2 x 2 framework, mastery-approach goals involve improving or mastering a task, while mastery-avoidance goals involve trying not to lose skill or misunderstand. Performance-approach goals involve demonstrating greater competence than others, while performance-avoidance goals involve trying not to appear incompetent. Approach and avoidance refer to direction, not to moral character. These goals can coexist. They also show different relationships with interest, strategy use, anxiety, persistence, and performance. Performance-approach goals may sometimes accompany strong achievement, so the theory does not support a simple claim that every form of competition is harmful.

Goals are shaped by both personal interpretation and the learning environment. Classroom tasks, authority, recognition, grouping, evaluation, and timing communicate what counts as success. Public ranking, scarce rewards, and emphasis on being the best can make social comparison especially salient. Meaningful choices, challenging tasks, private feedback, opportunities to revise, and recognition of improvement can support a mastery structure. A slogan about effort is not enough if grading, pacing, and classroom talk continue to punish error or reward only quick public performance.

Researchers measure achievement goals with questionnaires and experiments, but the labels and items used across studies have not always represented the same constructs. Meta-analytic work warns that measures can blur the goal's standard, such as task mastery or outperforming others, with reasons for pursuing it, such as interest or approval. Results should therefore be interpreted with attention to the exact definition, task, population, and outcome. Achievement goals are also only one part of motivation. Value, belonging, self-efficacy, emotion, prior success, material conditions, and relationships can change whether a learner engages.

In education, teachers can audit the messages built into one assignment. Ask what learners are invited to improve, what evidence counts, who sees the comparison, whether mistakes can be revised, and whether several forms of competent work are recognized. Students can set a mastery-approach goal tied to a strategy and evidence, then reflect on progress rather than ranking themselves. This does not mean hiding standards or removing challenge. It means making competence developable, criteria understandable, and feedback usable. Achievement goal theory is most helpful when it guides design of a classroom climate, not when it labels a learner as mastery oriented or performance oriented forever.`,
    coreIdeas: [
      "Achievement goals describe how learners define competence, including mastery versus performance standards and approach versus avoidance directions, rather than fixed personality types.",
      "Mastery-approach, mastery-avoidance, performance-approach, and performance-avoidance goals can coexist and relate differently to strategy use, emotion, persistence, interest, and achievement.",
      "Tasks, authority, recognition, grouping, evaluation, and timing communicate classroom goal structures, so mastery support requires coherent opportunities for challenge, private feedback, choice, and revision.",
    ],
    educationConnection: "Audit one assignment for the competence messages carried by its task, feedback, comparison, and revision rules, then help learners set a mastery-approach goal tied to a strategy and observable evidence of progress.",
    relatedConcepts: ["Mastery-approach goals", "Performance-avoidance goals", "Motivational climate"],
    sourceUrls: [
      { label: "Dweck and Leggett: Social-Cognitive Approach to Motivation", url: "https://doi.org/10.1037/0033-295X.95.2.256" },
      { label: "Ames: Classroom Goals and Student Motivation", url: "https://doi.org/10.1037/0022-0663.84.3.261" },
      { label: "Elliot and McGregor: 2 x 2 Achievement Goal Framework", url: "https://pubmed.ncbi.nlm.nih.gov/11300582/" },
      { label: "Hulleman and colleagues: Meta-Analysis of Achievement Goal Measures", url: "https://doi.org/10.1037/a0018947" },
    ],
    createdAt: "2026-08-02T08:00:00.000Z",
  },
  {
    id: "academy-043",
    listingIdentifier: "AI Knowledge 22",
    slug: "privacy-security-and-educational-data",
    title: "Privacy, Security, and Educational Data",
    track: "ai-knowledge",
    level: "core",
    tags: ["data privacy", "cybersecurity", "data governance"],
    image: "/images/academy/covers/academy-043-privacy-security-and-educational-data.png",
    imageAlt: "A White woman teacher guides a Black man holding a security key and an Asian woman learner as they trace a sparse data-flow diagram beside a notebook containing a meaningful system sketch",
    summaryAudio: "/audio/academy/academy-043-privacy-security-and-educational-data-summary.m4a",
    summaryAudioTitle: "Listen to Privacy, Security, and Educational Data",
    shortSummary: "How educational data move through a lifecycle, why privacy and security solve related but different problems, and how purpose limits, minimization, safeguards, and accountable governance reduce risk.",
    fullSummary: `Educational data are created whenever people teach, learn, assess, communicate, or use digital services. They include names and contact details, submitted work, scores, attendance, accessibility needs, messages, recordings, device information, click histories, and inferences produced by analytics or AI. A useful way to understand these data is as a lifecycle: collection, use, sharing, storage, access, correction, retention, and deletion. Risk can appear at every stage. A dataset does not become harmless merely because it has moved from a classroom application to a school system, research repository, model provider, or backup.

Privacy and security are related but different. Privacy concerns how data processing can affect people, whether the purpose is appropriate, what choices and protections people have, and who is accountable. Security concerns protecting information and systems from unauthorized access, alteration, loss, or disruption. Strong security cannot make an unnecessary or unfair use appropriate. Likewise, a worthy educational purpose does not protect records from stolen credentials, insecure devices, or a poorly controlled vendor account. Responsible practice needs both privacy risk management and cybersecurity risk management.

Governance should begin before collection. A school can state the educational purpose, identify each data element and data flow, and ask whether less sensitive information would accomplish the same task. It should assign decision owners, document who may access the information, examine service providers and onward sharing, set retention and deletion rules, and provide understandable notice and meaningful choices where appropriate. Consent is not a universal solution because power, age, jurisdiction, and whether participation is genuinely optional all matter. Pseudonyms can reduce direct exposure, but linked behavior, rare attributes, or outside datasets may still permit reidentification.

Security translates the risk assessment into layered safeguards. Examples include least-privilege access, strong authentication, appropriate encryption, secure configuration, software updates, protected backups, monitoring, staff preparation, and tested plans to detect, contain, communicate, and recover from incidents. The safeguards should match the likely harm and the sensitivity, scale, and duration of processing. Records should not be retained indefinitely simply because storage is cheap. Deletion must also address copies, exports, and contractual obligations, while audit records should show whether promised controls are operating rather than existing only in policy.

AI makes the lifecycle especially important because a system may derive predictions about knowledge, behavior, identity, or risk from ordinary learning traces. Learners and teachers should be able to distinguish observed data from inferred claims, challenge consequential errors, and know when a person will review a decision. In a classroom audit, students can map one learning tool from input to deletion, mark every person and organization that receives data, and test a proposed control against a realistic failure. They then decide what to stop collecting, what to protect, who is accountable, and what evidence would demonstrate improvement. The central principle is not to collect everything safely. It is to use only justified data for a clear educational purpose, protect them throughout their lifecycle, and remain answerable to the people affected.`,
    coreIdeas: [
      "Educational data include direct records, behavioral traces, media, and derived inferences, and privacy risk can arise at every stage from collection through deletion.",
      "Privacy asks whether data processing and its effects are appropriate and accountable, while security protects information and systems from unauthorized access, alteration, loss, and disruption.",
      "Purpose limitation, data minimization, mapped data flows, assigned responsibility, vendor oversight, layered safeguards, retention limits, incident readiness, and human review work together as governance.",
    ],
    educationConnection: "Map one educational tool from collection to deletion, identify observed and inferred data plus every recipient, test one realistic failure, then remove unjustified data and assign safeguards, review, and accountability.",
    relatedConcepts: ["Data minimization", "Privacy risk management", "Cybersecurity governance"],
    sourceUrls: [
      { label: "NIST: Privacy Framework", url: "https://www.nist.gov/privacy-framework" },
      { label: "NIST: Cybersecurity Framework 2.0", url: "https://doi.org/10.6028/NIST.CSWP.29" },
      { label: "U.S. Department of Education: Data Security Checklist", url: "https://studentprivacy.ed.gov/resources/data-security-checklist" },
    ],
    createdAt: "2026-08-06T08:00:00.000Z",
  },
  {
    id: "academy-044",
    listingIdentifier: "Educational Theory 22",
    slug: "control-value-theory-of-achievement-emotions",
    title: "Control-Value Theory of Achievement Emotions",
    track: "educational-theory",
    level: "core",
    tags: ["achievement emotions", "control appraisals", "value appraisals"],
    image: "/images/academy/covers/academy-044-control-value-theory-of-achievement-emotions.png",
    imageAlt: "A teacher works with two adult learners as they compare three diagram cards showing a block path, a bridge, and a rise-and-fall curve beside illustrated notebooks",
    summaryAudio: "/audio/academy/academy-044-control-value-theory-of-achievement-emotions-summary.m4a",
    summaryAudioTitle: "Listen to Control-Value Theory of Achievement Emotions",
    shortSummary: "How learners' judgments of control and value shape distinct achievement emotions, how those emotions influence learning, and how teachers can change task conditions without labeling students.",
    fullSummary: `Control-value theory explains emotions that are directly connected to achievement activities or achievement outcomes. Activity emotions concern doing the work, such as enjoyment, frustration, anger, or boredom while learning. Outcome emotions concern possible or completed success and failure, such as hope, anxiety, pride, relief, shame, or hopelessness. The theory does not treat emotion as an extra reaction outside learning. It places emotion within a system linking learners' interpretations of a situation, their motivation and strategies, their actions, and the results they experience.

Two appraisals are central. Subjective control is a learner's judgment about whether actions and outcomes can be influenced. It can involve perceived competence, expectations that effort or a strategy will work, and beliefs about the causes of success or failure. Subjective value is the importance attached to the activity or outcome. A task may be valued because doing it is enjoyable or meaningful, because its result matters, or because success and failure have consequences. These are appraisals, not fixed properties of a learner or task. The same person can experience different control, value, and emotion in mathematics, writing, a particular test, or even different moments of one lesson.

Patterns of control and value help explain distinct emotions without determining them mechanically. Enjoyment is more likely when an activity is valued and feels controllable. Hope and anxiety can both arise when an important future outcome remains uncertain, but they differ in the balance of expected success and failure. Hopelessness is associated with important failure that seems beyond control. Boredom can arise when an activity seems to lack value, including when underchallenge or overchallenge makes the activity feel meaningless. Emotions can also be classified by whether they are pleasant or unpleasant, activating or deactivating, and focused on an activity or outcome. This prevents the simplistic claim that every pleasant emotion helps and every unpleasant emotion harms.

Achievement emotions can direct attention, change effort and motivation, influence strategy use, affect self-regulation, and contribute to performance. The relationships are reciprocal. Results and feedback can change later control and value appraisals, which then shape later emotions and action. Anxiety, for example, may prompt effort in some conditions while consuming attention or encouraging avoidance in others. Pride can support engagement, while relief may reduce immediate activation. Teachers should therefore examine the particular emotion, task, timing, and learner response rather than impose a single emotional ideal.

Instruction can influence appraisals by making goals and success criteria clear, matching challenge with support, teaching usable strategies, providing informative feedback, allowing meaningful agency, and connecting work to credible purposes. This is not a license to diagnose personality from facial expression or demand that learners feel positive. A practical classroom inquiry uses separate evidence cards for the task, perceived control, perceived value, and reported emotion. Learners describe their own appraisals, the teacher checks patterns across class, study, and assessment contexts, and the group changes one condition. They might add a model, reduce an unnecessary threat, offer a meaningful choice, or explain why the work matters, then examine whether strategy use and emotion change. The goal is an environment in which learners can understand and regulate achievement emotions while teachers improve the conditions that help produce them.`,
    coreIdeas: [
      "Achievement emotions concern current learning activities or anticipated and completed outcomes, and they differ by object focus, pleasantness, and activation.",
      "Learners' subjective judgments of control and value are central antecedents of distinct emotions, but these appraisals vary across domains, situations, and moments rather than defining a person.",
      "Emotions influence attention, motivation, strategy use, self-regulation, and performance, while outcomes and feedback reciprocally reshape later appraisals, emotions, and action.",
    ],
    educationConnection: "Use separate task, control, value, and emotion evidence cards to identify one change in clarity, challenge, support, agency, or purpose, then examine how learners' reported emotions and strategies respond.",
    relatedConcepts: ["Achievement emotions", "Control appraisals", "Value appraisals"],
    sourceUrls: [
      { label: "Pekrun: Control-Value Theory of Achievement Emotions", url: "https://doi.org/10.1007/s10648-006-9029-9" },
      { label: "Pekrun and colleagues: Achievement Emotions Questionnaire", url: "https://doi.org/10.1016/j.cedpsych.2010.10.002" },
      { label: "Lichtenfeld and colleagues: Achievement Emotions in Elementary School", url: "https://doi.org/10.1016/j.lindif.2011.04.009" },
    ],
    createdAt: "2026-08-06T08:00:00.000Z",
  },
  {
    id: "academy-045",
    listingIdentifier: "AI Knowledge 23",
    slug: "explainability-and-transparency",
    title: "Explainability and Transparency",
    track: "ai-knowledge",
    level: "core",
    tags: ["explainable AI", "transparency", "human oversight"],
    image: "/images/academy/covers/academy-045-explainability-and-transparency.png",
    imageAlt: "A Black woman teacher guides a White man and East Asian woman as they trace sparse layers from evidence through highlighted features to an AI outcome",
    summaryAudio: "/audio/academy/academy-045-explainability-and-transparency-summary.m4a",
    summaryAudioTitle: "Listen to Explainability and Transparency",
    shortSummary: "How explanations and transparent documentation reveal different parts of an AI system, what common explanation methods can show, and why evidence and human judgment remain necessary.",
    fullSummary: `Explainability and transparency help people examine an AI system, but they answer different questions. Explainability concerns evidence or reasons related to an output or process. Transparency concerns access to relevant facts about the system, including its purpose, data, design, evaluation, limitations, owners, and human decision process. An explanation might show why one learner received a recommendation. Transparent documentation should also disclose what the recommendation system was designed to optimize, whose data informed it, how well it was tested, and who can change or challenge its use. Neither quality by itself proves that a system is accurate, fair, safe, or educationally valuable.

Explanations can operate at different levels. A global explanation describes broad model behavior, while a local explanation addresses one prediction. Some models are sufficiently simple that a person can inspect how inputs determine outputs. More complex models often receive post hoc explanations created after a prediction. LIME, for example, fits a simpler model around one case to approximate nearby behavior. SHAP assigns contributions to features for a particular prediction within an additive explanation framework. Such methods can help developers debug models and help users notice influential evidence, but they explain the behavior captured by their assumptions and reference choices, not a complete humanlike chain of reasoning.

A useful explanation should accompany an output, be meaningful to its intended recipient, correctly reflect the system process it claims to describe, and respect the system's knowledge limits. Those requirements are demanding. A visually persuasive explanation can be unstable, omit interactions, or encourage a causal interpretation of correlations. Different recipients also need different information. A developer may need error patterns and feature diagnostics, a teacher may need classroom relevant evidence and uncertainty, and a learner may need a clear account plus a way to correct inaccurate data. For consequential decisions, an interpretable model may be preferable to explaining a black box after the fact when it can meet the task requirements.

Transparency extends beyond an explanation screen. Responsible documentation identifies intended and prohibited uses, data provenance and gaps, evaluation populations and metrics, subgroup results, uncertainty, update history, security and privacy controls, and the role of human review. It also makes governance visible: who approved the system, who monitors it, how a person reports harm, and whether an affected learner can obtain review. Publishing technical detail without an understandable route to action is not meaningful transparency. Conversely, a friendly feature chart without system documentation can hide important choices.

In education, learners can investigate a fictional support model that predicts whether additional practice may help. They trace which evidence entered the model, compare a local explanation with the documented objective, and test whether small relevant changes alter the output consistently. They then list information the model cannot observe and decide what a teacher must verify before acting. The teacher treats the prediction as one source of evidence, invites the learner's account, and records the human rationale for any decision. This practice makes explanation a tool for disciplined inquiry rather than a decoration that automatically creates trust.`,
    coreIdeas: [
      "Explainability supplies evidence or reasons for outputs or processes, while transparency discloses system purpose, data, evaluation, limitations, governance, and human roles.",
      "Local and global explanation methods can reveal model behavior, but their results depend on assumptions and do not automatically establish causal reasoning, fairness, accuracy, or safety.",
      "Meaningful educational use matches information to its audience, tests the explanation, documents uncertainty and recourse, and keeps consequential judgment with accountable people.",
    ],
    educationConnection: "Ask learners to trace evidence through a model output, compare the explanation with system documentation, test its stability, identify missing context, and define the teacher review and learner recourse required before action.",
    relatedConcepts: ["Model interpretability", "Feature attribution", "Algorithmic accountability"],
    sourceUrls: [
      { label: "NIST: Four Principles of Explainable Artificial Intelligence", url: "https://doi.org/10.6028/NIST.IR.8312" },
      { label: "Ribeiro, Singh, and Guestrin: Explaining Classifier Predictions", url: "https://aclanthology.org/N16-3020/" },
      { label: "Lundberg and Lee: A Unified Approach to Interpreting Model Predictions", url: "https://papers.nips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html" },
      { label: "Rudin: Use Interpretable Models for High Stakes Decisions", url: "https://doi.org/10.1038/s42256-019-0048-x" },
    ],
    createdAt: "2026-08-08T08:00:00.000Z",
  },
  {
    id: "academy-046",
    listingIdentifier: "Educational Theory 23",
    slug: "cognitive-apprenticeship",
    title: "Cognitive Apprenticeship",
    track: "educational-theory",
    level: "core",
    tags: ["cognitive apprenticeship", "scaffolding", "situated learning"],
    image: "/images/academy/covers/academy-046-cognitive-apprenticeship.png",
    imageAlt: "An East Asian man teacher demonstrates a wooden joint while a Black woman learner holds a matching piece and a Middle Eastern man learner points to joint sketches in an open notebook",
    summaryAudio: "/audio/academy/academy-046-cognitive-apprenticeship-summary.m4a",
    summaryAudioTitle: "Listen to Cognitive Apprenticeship",
    shortSummary: "How experts make thinking visible through modeling, coaching, scaffolding, articulation, reflection, and exploration as learners take increasing responsibility in meaningful practice.",
    fullSummary: `Cognitive apprenticeship adapts features of craft apprenticeship to skills whose important processes are often hidden. A learner can watch a carpenter position a tool, but cannot directly see how an expert reader identifies a contradiction, how a scientist chooses a representation, or how a teacher interprets an unexpected answer. Cognitive apprenticeship makes such cognitive and metacognitive processes visible in meaningful activity. The expert demonstrates not only what to do but also what to notice, which strategy to choose, how to monitor progress, and how to respond when an approach fails. The learner then practises with support and assumes increasing responsibility.

Six primary teaching methods organize this process, with fading built into the use of scaffolding. In modeling, the expert performs a task while externalizing decisions that would otherwise remain tacit. Coaching occurs as the learner works and the expert observes, diagnoses, prompts, challenges, and gives feedback. Scaffolding supplies temporary supports such as cues, checklists, partial solutions, or shared performance. Fading gradually removes those supports as control improves. Articulation asks learners to explain their knowledge, strategies, and reasons. Reflection helps them compare their process with an expert model, a peer approach, or an earlier attempt. Exploration invites learners to define and solve problems with greater independence.

The learning environment matters as much as any single method. Tasks should be situated in purposes learners can understand and connected to the tools, language, and standards of a practice. A conceptual view of the whole task helps components make sense. Sequences can then increase complexity and diversity so learners integrate skills and recognize when a strategy transfers. A community of practice creates opportunities to observe several approaches, make unfinished thinking discussable, and use feedback as part of participation rather than as judgment from outside the work.

Cognitive apprenticeship is not a fixed script or an argument that all instruction must imitate a workplace. Modeling can transmit weak practice if the model is not credible. Coaching can become control if learners never explain or choose. Scaffolding can create dependence if it is removed by schedule rather than evidence, while premature fading can leave novices guessing. Authentic activity also needs carefully selected tasks, explicit knowledge, equitable access to tools and expert attention, and time for varied practice. Reading and direct explanation remain useful, especially when integrated with opportunities to apply and examine ideas.

In education, an expert teacher might model how to diagnose and repair a faulty circuit while speaking aloud about safety checks, evidence, and decision points. Learners first observe the whole process, then complete one meaningful repair with prompts. During coached practice, they explain each choice, compare their process with the model, and revise after feedback. The teacher withdraws the checklist and hints only when performance shows readiness, then changes the fault so the learner must select a strategy rather than copy steps. A final exploration asks learners to diagnose a new case and justify their plan. The same structure can support writing, mathematical problem solving, laboratory work, clinical reasoning, and teaching practice. Its central promise is visible thinking joined to guided participation, reflection, and growing autonomy.`,
    coreIdeas: [
      "Cognitive apprenticeship makes expert cognitive and metacognitive processes visible so learners can observe, enact, discuss, and refine them in meaningful activity.",
      "Modeling, coaching, scaffolding and fading support guided performance, while articulation, reflection, and exploration develop awareness, comparison, transfer, and autonomy.",
      "Whole tasks, increasing complexity and diversity, authentic purposes, credible models, equitable participation, and evidence based fading shape whether the approach supports independent expertise.",
    ],
    educationConnection: "Model one complete disciplinary task with visible thinking, coach a supported attempt, require articulation and reflection, then fade specific supports according to evidence before testing the strategy in a varied case.",
    relatedConcepts: ["Situated cognition", "Scaffolding and fading", "Metacognitive modeling"],
    sourceUrls: [
      { label: "Collins, Brown, and Newman: Cognitive Apprenticeship Technical Report", url: "https://eric.ed.gov/?id=ED284181" },
      { label: "Collins, Brown, and Holum: Making Thinking Visible", url: "https://www.aft.org/ae/winter1991/collins_brown_holum" },
      { label: "Brown, Collins, and Duguid: Situated Cognition and the Culture of Learning", url: "https://doi.org/10.3102/0013189X018001032" },
    ],
    createdAt: "2026-08-08T08:00:00.000Z",
  },
  {
    id: "academy-047",
    listingIdentifier: "AI Knowledge 24",
    slug: "human-in-the-loop-ai",
    title: "Human-in-the-Loop AI",
    track: "ai-knowledge",
    level: "core",
    tags: ["human-in-the-loop AI", "human oversight", "human-AI interaction"],
    image: "/images/academy/covers/academy-047-human-in-the-loop-ai.png",
    imageAlt: "A Black woman educator pauses a tabletop robotic arm with a control pendant while an East Asian man studies a shape sequence and a Middle Eastern woman corrects it with a green wooden cylinder",
    summaryAudio: "/audio/academy/academy-047-human-in-the-loop-ai-summary.m4a",
    summaryAudioTitle: "Listen to Human-in-the-Loop AI",
    shortSummary: "How people contribute judgment before, during, and after AI actions, and how meaningful oversight requires clear roles, usable controls, evidence, authority, and accountability.",
    fullSummary: `Human-in-the-loop AI is a way of designing a system so that people contribute judgment at defined points in its development or operation. The human may supply labels, clarify goals, review uncertain cases, approve a proposed action, correct an output, or decide when the system should stop. This arrangement is not a guarantee of safety and does not mean that every output needs manual approval. Its value depends on matching a human role to a real decision where contextual knowledge, ethical judgment, or accountability is needed.

People can enter the loop while a model is being built. Domain experts may define useful labels, examine difficult examples, or resolve disagreements in training data. In active learning, a model selects informative cases for people to label rather than requesting labels for every case. Human feedback can also help shape preferences or improve a system after deployment. These contributions become new data, so they can introduce inconsistency or reproduce institutional bias as well as correct errors. Teams need labeling guidance, disagreement records, quality checks, and evidence about whose judgments are represented.

Operational oversight can occur before, during, or after an AI action. A teacher might edit a generated lesson plan before students see it. A laboratory operator might monitor a robotic process and use an emergency stop. An auditor might inspect decisions, investigate complaints, and change the system later. Agentic tools illustrate the same pattern: a model gathers context, proposes or takes actions through tools, verifies results, and can be interrupted by the user. Permissions, previews, reversible actions, confidence signals, and escalation routes help people intervene at the right moment.

A person in the interface is not automatically meaningful oversight. Reviewers need enough time, training, information, authority, and alternative options to challenge the system. Automation bias can lead people to accept confident-looking outputs, while frequent false alarms can make monitoring ineffective. A poorly designed process may ask a person to absorb blame without giving them control. Evaluation should therefore measure more than model accuracy. It should examine whether reviewers notice important errors, how often they override correctly, which groups experience missed harms, how quickly cases escalate, and whether the combined human-AI process improves the educational decision.

In education, learners can practise with a fictional AI recommendation for a student's next activity. They inspect the evidence, uncertainty, missing context, and intended goal, then choose to accept, edit, reject, or escalate the recommendation. Groups compare decisions and identify what information changed their judgment. They also record why they intervened so later reviewers can examine patterns, disagreement, and consequences. The teacher makes clear who remains responsible and protects any real learner data. Human-in-the-loop design is strongest when it preserves agency and creates a usable path from machine output to informed human action, correction, and accountability.`,
    coreIdeas: [
      "Human-in-the-loop AI assigns people defined roles in data creation, system development, action review, correction, escalation, and accountability rather than treating human presence as a safety guarantee.",
      "Human contributions can improve contextual fit and catch errors, but they also become data and decisions that require guidance, disagreement records, quality checks, and representative participation.",
      "Meaningful oversight requires time, information, authority, usable controls, reversible actions, and evaluation of the combined human-AI process across errors, groups, and consequences.",
    ],
    educationConnection: "Give learners a fictional AI recommendation with evidence and uncertainty, ask them to accept, edit, reject, or escalate it, and compare which missing context and accountability rules changed their decisions.",
    relatedConcepts: ["Human oversight", "Active learning", "Automation bias"],
    sourceUrls: [
      { label: "NIST: AI Risk Management and Human-AI Interaction", url: "https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/" },
      { label: "Amershi and colleagues: Guidelines for Human-AI Interaction", url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf" },
      { label: "UNESCO: Guidance for Generative AI in Education and Research", url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" },
      { label: "Claude Code Docs: How Claude Code Works", url: "https://code.claude.com/docs/en/how-claude-code-works" },
    ],
    createdAt: "2026-08-10T08:00:00.000Z",
  },
  {
    id: "academy-048",
    listingIdentifier: "Educational Theory 24",
    slug: "inquiry-based-learning",
    title: "Inquiry-Based Learning",
    track: "educational-theory",
    level: "core",
    tags: ["inquiry-based learning", "guided inquiry", "evidence-based explanation"],
    image: "/images/academy/covers/academy-048-inquiry-based-learning.png",
    imageAlt: "A Black woman teacher holds a pond-water sample while an East Asian man examines the tray with a magnifying lens and a White woman compares leaves beside a notebook of hand-drawn observations",
    summaryAudio: "/audio/academy/academy-048-inquiry-based-learning-summary.m4a",
    summaryAudioTitle: "Listen to Inquiry-Based Learning",
    shortSummary: "How learners investigate answerable questions, gather and interpret evidence, construct explanations, communicate claims, and reflect with guidance matched to their knowledge and task.",
    fullSummary: `Inquiry-based learning organizes learning around questions, investigation, evidence, explanation, and reflection. Learners do more than receive a finished account. They identify or refine a question, decide what evidence could address it, collect or examine information, interpret patterns, and communicate a defensible conclusion. Inquiry is not defined by physical activity alone. Following a recipe without making decisions may be hands-on but not strongly inquiry based, while analyzing a historical archive or digital dataset can involve substantial inquiry. It is also not the same as leaving novices to discover everything without support.

Inquiry often moves through connected phases. Orientation builds interest and establishes the problem. Conceptualization develops questions or hypotheses. Investigation includes exploration, experimentation, observation, or data interpretation. Conclusion connects evidence with the question, while discussion includes communication and reflection. These phases form a flexible cycle rather than a rigid sequence. New evidence may send learners back to revise a question, improve a method, or reconsider an explanation. Communication and reflection can occur throughout as learners make reasoning visible and compare interpretations.

The amount and type of guidance should match learners, content, and purpose. Teachers may provide the initial question, model how to control variables, offer a data table, prompt comparison, or set checkpoints for explanation. As knowledge and skill grow, learners can make more decisions about questions, methods, representations, and standards of evidence. Research syntheses generally find benefits from inquiry-oriented instruction, but they also show that guidance matters. Support can reduce unproductive search, make disciplinary reasoning visible, and preserve attention for interpreting evidence. Guidance should enable thinking rather than replace it.

A well-designed inquiry needs an answerable question, access to relevant evidence, and criteria for judging a claim. Learners may need prior knowledge before they can notice a meaningful pattern or design a fair comparison. Teachers should anticipate measurement error, alternative explanations, safety, accessibility, language demands, and unequal access to tools or participation. Group work can expand ideas, yet one confident participant can dominate decisions unless roles and discussion routines distribute responsibility. Assessment should examine the process as well as the final answer, including question quality, method, evidence use, revision, and reflection.

In education, a class might investigate why two pond-water samples look different. Learners record observations, propose testable explanations, choose a small set of comparisons, and document uncertainty. The teacher provides safe tools and checkpoints, asks what evidence would count against each claim, and introduces needed domain knowledge at the moment it becomes useful. Groups represent findings, critique one another's reasoning, revise conclusions, and identify the next question. AI may help suggest questions or organize observations, but learners must verify outputs, protect data, and retain ownership of the investigation. Inquiry-based learning develops disciplined curiosity when freedom to investigate is joined with purposeful guidance and accountable use of evidence.`,
    coreIdeas: [
      "Inquiry-based learning engages learners in developing questions, investigating evidence, constructing explanations, communicating claims, and reflecting rather than merely completing hands-on procedures.",
      "Orientation, conceptualization, investigation, conclusion, discussion, and reflection form a flexible cycle in which new evidence can prompt revision of questions, methods, or explanations.",
      "Guidance should match prior knowledge and task demands, supporting disciplinary reasoning, safety, access, collaboration, evidence quality, revision, and growing learner responsibility.",
    ],
    educationConnection: "Let learners investigate differences between two pond-water samples, define an answerable question, choose evidence, critique competing explanations, revise a conclusion, and identify the next inquiry with teacher checkpoints.",
    relatedConcepts: ["Guided discovery", "Scientific inquiry", "Epistemic agency"],
    sourceUrls: [
      { label: "National Academies: Inquiry in the National Science Education Standards", url: "https://www.nationalacademies.org/read/9596/chapter/3" },
      { label: "Pedaste and colleagues: Phases of Inquiry-Based Learning", url: "https://doi.org/10.1016/j.edurev.2015.02.003" },
      { label: "Lazonder and Harmsen: Guidance in Inquiry-Based Learning", url: "https://doi.org/10.3102/0034654315627366" },
      { label: "Furtak and colleagues: Inquiry-Based Science Teaching Meta-Analysis", url: "https://doi.org/10.3102/0034654312457206" },
    ],
    createdAt: "2026-08-10T08:00:00.000Z",
  },
  {
    id: "academy-049",
    listingIdentifier: "AI Knowledge 25",
    slug: "ai-safety-and-risk-management",
    title: "AI Safety and Risk Management",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI safety", "risk management", "responsible AI"],
    image: "/images/academy/covers/academy-049-ai-safety-and-risk-management.png",
    imageAlt: "A Black woman educator points to an illustrated risk matrix while an East Asian man holds a red tile and a light-skinned woman holds an amber tile in a bright workshop",
    summaryAudio: "/audio/academy/academy-049-ai-safety-and-risk-management-summary.m4a",
    summaryAudioTitle: "Listen to AI Safety and Risk Management",
    shortSummary: "How to identify, evaluate, reduce, monitor, and communicate AI risks across a system's lifecycle while preserving human agency and accountability.",
    fullSummary: `AI safety is the practice of reducing unacceptable harm from AI systems while enabling worthwhile educational uses in practice. It is not a single technical feature and it does not promise zero risk. A hazard is a source of possible harm, such as disclosure of learner data or a biased recommendation. Risk considers both the likelihood of an event and the severity of its consequences in a particular context. The same model can therefore present different risks when it drafts a low-stakes example, recommends an intervention, or influences access to an educational opportunity.

Risk management begins before a tool is selected. The NIST AI Risk Management Framework organizes continuous work through four connected functions: Govern, Map, Measure, and Manage. Governance establishes accountable roles, policies, documentation, and risk tolerances. Mapping describes the intended purpose, affected people, operating conditions, dependencies, and foreseeable misuse. Measurement tests performance, uncertainty, privacy, security, bias, accessibility, and human-AI interaction with evidence suited to the real setting. Management prioritizes risks, applies controls, decides whether deployment should proceed, and monitors what happens after release.

Educational risks extend beyond an incorrect answer. They can include fabricated sources, unequal error rates, harmful stereotypes, exposure of personal information, insecure integrations, inappropriate content, loss of learner agency, automation bias, inaccessible design, and assessment results that no longer support their intended interpretation. Generative and agentic systems add risks because outputs vary and tools can act on files or services. An agentic loop that gathers context, takes action, and verifies results can be useful, but its permissions, data access, stopping points, and verification evidence must match the stakes.

Effective controls are layered. A school can limit a system to a clearly defined use, minimize the data it receives, test representative scenarios, require human approval for consequential actions, restrict tool permissions, keep useful logs, make actions reversible, and prepare incident and appeal routes. Red-team exercises may reveal failure modes, but one benchmark or safety score cannot represent every learner, language, subject, or future condition. Residual risk should be documented rather than hidden, and controls should be re-evaluated when the model, users, data, or purpose changes.

In education, learners can examine a fictional AI study adviser before it is adopted. They identify stakeholders, intended benefits, possible harms, and evidence gaps; rank each risk by likelihood and consequence; propose controls; and name the person accountable for monitoring and intervention. They then test cases involving ambiguous language, disability access, and sensitive data, record remaining uncertainty, and decide whether to proceed, redesign, limit, or reject the use. This exercise treats safety as disciplined inquiry and shared responsibility. The aim is not fear or blind trust, but proportionate judgment that keeps educational purpose, rights, equity, evidence, and human agency at the center.`,
    coreIdeas: [
      "AI risk depends on a system's purpose, people, context, likelihood of failure, and severity of consequences rather than on the model alone.",
      "Govern, Map, Measure, and Manage connect accountability, contextual analysis, testing, controls, deployment decisions, and continuous monitoring across the lifecycle.",
      "Layered safeguards, bounded permissions, verification, human authority, incident response, and documented residual risk support proportionate educational decisions.",
    ],
    educationConnection: "Ask learners to risk-assess a fictional AI study adviser, test diverse cases, propose layered controls, document residual uncertainty, and decide who can approve, interrupt, appeal, or stop its use.",
    relatedConcepts: ["Trustworthy AI", "Risk assessment", "Human oversight"],
    sourceUrls: [
      { label: "NIST: Artificial Intelligence Risk Management Framework 1.0", url: "https://doi.org/10.6028/NIST.AI.100-1" },
      { label: "NIST: Generative Artificial Intelligence Profile", url: "https://doi.org/10.6028/NIST.AI.600-1" },
      { label: "UNESCO: Guidance for Generative AI in Education and Research", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
      { label: "Claude Code Docs: How Claude Code Works", url: "https://code.claude.com/docs/en/how-claude-code-works" },
    ],
    createdAt: "2026-08-12T08:00:00.000Z",
  },
  {
    id: "academy-050",
    listingIdentifier: "Educational Theory 25",
    slug: "collaborative-learning",
    title: "Collaborative Learning",
    track: "educational-theory",
    level: "core",
    tags: ["collaborative learning", "social interdependence", "group learning"],
    image: "/images/academy/covers/academy-050-collaborative-learning.png",
    imageAlt: "A Black woman music teacher guides an East Asian violinist, a hijab-wearing clarinetist, and a White cellist rehearsing in a bright studio",
    summaryAudio: "/audio/academy/academy-050-collaborative-learning-summary.m4a",
    summaryAudioTitle: "Listen to Collaborative Learning",
    shortSummary: "How carefully structured joint activity can turn explanation, disagreement, coordination, and reflection into learning while keeping every participant responsible.",
    fullSummary: `Collaborative learning places two or more learners in a situation where they work toward understanding, a solution, or a shared product through interaction. The label covers many scales and arrangements, so sitting people together is not enough to define the learning process. Collaboration becomes educationally meaningful when participants explain ideas, question evidence, negotiate interpretations, coordinate actions, and build on one another's contributions. These interactions can make thinking visible and create opportunities for elaboration, feedback, perspective taking, and mutual regulation that an individual task may not generate in the same way.

Collaborative and cooperative learning overlap, but the distinction can clarify task design. In strongly collaborative work, learners jointly plan and organize activity, and each action changes what others can do next. In cooperative work, a larger task may be divided into components that are completed separately and later combined. Both can support learning. However, division of labour can become a weak relay if members never examine one another's reasoning, while unstructured collaboration can let one confident participant make every decision.

Social interdependence theory explains why structure matters. Positive interdependence exists when learners understand that they can reach a valued goal only by supporting the group's progress. Structured cooperative approaches often pair this shared purpose with individual accountability, promotive interaction, interpersonal skills, and group reflection. Individual accountability does not oppose collaboration. It ensures that every learner prepares, contributes, and develops understanding rather than hiding behind a polished group product. Teachers can check this through individual explanations, rotating responsibilities, brief transfer tasks, or records of decisions and revisions.

Evidence reviews generally report positive average effects, but results vary substantially across tasks, subjects, ages, grouping choices, implementation quality, and outcome measures. The Education Endowment Foundation rates the security of its collaborative-learning evidence as low despite a positive average estimate. This cautions against treating group work as an automatic intervention. Learners need explicit models of productive talk, accessible roles, enough prior knowledge, equitable access to materials, and norms for disagreement. Teachers should monitor who speaks, whose ideas are taken up, whether status differences silence participants, and whether the shared task actually requires interdependence.

In education, a teacher can give groups a complex claim supported by incomplete and partly conflicting evidence. Each learner first records an interpretation, then the group must produce one explanation that identifies uncertainty and incorporates a challenge raised by every member. Roles rotate between evidence tracker, questioner, connector, and summarizer, but all learners must understand the final reasoning. The teacher listens for explanation and exclusion, prompts quieter voices without assigning permanent identities, and ends with an individual application to a new case. Groups then review which interactions changed their thinking and what they would improve. Collaborative learning succeeds when joint work deepens each learner's understanding and when responsibility, dialogue, inclusion, and reflection are designed into the task rather than left to chance.`,
    coreIdeas: [
      "Collaborative learning depends on interactions such as explanation, questioning, negotiation, coordination, and mutual regulation, not merely on physical grouping.",
      "Positive interdependence and individual accountability can make a shared goal require contribution while ensuring that every learner develops and demonstrates understanding.",
      "Task design, productive-talk routines, equitable participation, teacher monitoring, individual checks, and group reflection determine whether collaboration supports learning.",
    ],
    educationConnection: "Design a shared evidence task in which every learner contributes a challenge, roles rotate, the group explains one defensible conclusion, individuals transfer the reasoning, and the team reflects on participation and revision.",
    relatedConcepts: ["Social interdependence", "Dialogic teaching", "Peer learning"],
    sourceUrls: [
      { label: "Dillenbourg: What Do You Mean by Collaborative Learning?", url: "https://tecfa.unige.ch/tecfa/teaching/aei/papiers/Dillenbourg.pdf" },
      { label: "National Academies: How People Learn II", url: "https://nap.nationalacademies.org/read/24783/chapter/10" },
      { label: "Johnson and Johnson: Social Interdependence Theory and Cooperative Learning", url: "https://doi.org/10.3102/0013189X09339057" },
      { label: "Education Endowment Foundation: Collaborative Learning Approaches", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/collaborative-learning-approaches" },
    ],
    createdAt: "2026-08-12T08:00:00.000Z",
  },
  {
    id: "academy-051",
    listingIdentifier: "AI Knowledge 26",
    slug: "benchmarking-and-evaluation-design",
    title: "Benchmarking and Evaluation Design",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI evaluation", "benchmark design", "educational validity"],
    image: "/images/academy/covers/academy-051-benchmarking-and-evaluation-design.png",
    imageAlt: "A Black woman educator points to one of three tablets showing matching geometric tasks while an East Asian man and a hijab-wearing woman compare results beside a hand-drawn line chart in a bright Hong Kong workshop",
    summaryAudio: "/audio/academy/academy-051-benchmarking-and-evaluation-design-summary.m4a",
    summaryAudioTitle: "Listen to Benchmarking and Evaluation Design",
    shortSummary: "How to design AI evaluations whose tasks, data, metrics, comparisons, and uncertainty support a specific educational decision rather than a misleading score.",
    fullSummary: `A benchmark is a standardized collection of tasks, cases, procedures, and scoring rules used to compare AI systems under stated conditions. Evaluation is the broader process of deciding what should be measured, why it matters, which evidence is credible, and how results will inform action. A benchmark score can be useful, but it is never the system itself. It represents performance on selected items, with particular prompts, settings, graders, and metrics. Changing any of these can change the result, so a leaderboard position cannot establish that a model is best for every educational purpose.

Good evaluation design begins with a claim and a decision. Evaluators specify the intended use, users, context, consequences, and capabilities or risks that matter. A writing-feedback tool might need evidence about factual accuracy, feedback quality, reading level, bias, privacy, and teacher control. A benchmark built only from short multiple-choice questions would miss several of those requirements. The evaluation should therefore sample tasks that resemble the intended setting, include relevant languages and learner populations, and document important conditions such as model version, prompt format, tools, retrieval sources, and human review.

Metrics must match the construct. Exact-match accuracy works for some questions, while open responses may require a rubric, expert judgment, or several complementary measures. HELM demonstrates a multi-metric approach that considers factors beyond accuracy, including calibration, robustness, fairness, bias, toxicity, and efficiency. Tradeoffs should remain visible instead of being collapsed into one unexplained total. Test sets also need protection from leakage and excessive tuning. If examples or close variants appear in training data, or teams repeatedly redesign against the same test results, the score may exaggerate performance on genuinely new cases.

AI outputs can vary across runs, items differ in difficulty, and human raters may disagree. Results are therefore estimates with uncertainty. NIST distinguishes performance on a fixed benchmark from generalized performance across a wider population of related items. Repeated trials, confidence intervals, subgroup analysis, and transparent statistical assumptions can help people judge whether an observed difference is meaningful. Evaluators should also inspect failures qualitatively, because two systems with the same average may fail in very different ways. Independent review and post-deployment monitoring matter when real conditions change.

In education, learners can evaluate three fictional tutoring systems for one classroom purpose. They define success before seeing results, build a small set of representative cases, choose separate measures for correctness, explanation quality, accessibility, and harmful behavior, then run each system consistently. Groups compare averages, variation, subgroup patterns, and concrete failures. They finally recommend adoption, limitation, redesign, or rejection and state what the benchmark cannot prove. This activity teaches that evaluation is an argument from evidence, not a contest to produce the highest number. A responsible benchmark makes its intended claim, scope, uncertainty, and limitations clear enough for others to challenge and reproduce.`,
    coreIdeas: [
      "A benchmark compares systems on standardized tasks, while evaluation connects those results to a specific claim, use context, affected population, and decision.",
      "Representative cases, construct-aligned metrics, controlled procedures, protected test data, multiple criteria, and documented system settings make comparisons more valid and reproducible.",
      "Repeated trials, uncertainty estimates, subgroup analysis, qualitative failure review, independent assessment, and monitoring limit overconfident conclusions from one average score.",
    ],
    educationConnection: "Ask learners to define a classroom AI decision, build representative test cases and multiple metrics, compare three systems consistently, inspect uncertainty and failures, and state what their evidence cannot support.",
    relatedConcepts: ["Construct validity", "Test data leakage", "Uncertainty quantification"],
    sourceUrls: [
      { label: "NIST AI 800-3: Expanding the AI Evaluation Toolbox", url: "https://doi.org/10.6028/NIST.AI.800-3" },
      { label: "Stanford CRFM: Holistic Evaluation of Language Models", url: "https://arxiv.org/abs/2211.09110" },
      { label: "NIST AI RMF: Measure Function", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" },
      { label: "NIST: Generative AI Profile", url: "https://doi.org/10.6028/NIST.AI.600-1" },
    ],
    createdAt: "2026-08-16T08:00:00.000Z",
  },
  {
    id: "academy-052",
    listingIdentifier: "Educational Theory 26",
    slug: "universal-design-for-learning",
    title: "Universal Design for Learning",
    track: "educational-theory",
    level: "core",
    tags: ["Universal Design for Learning", "learner variability", "inclusive design"],
    image: "/images/academy/covers/academy-052-universal-design-for-learning.png",
    imageAlt: "A Black man teacher guides a wheelchair-using White woman and a South Asian man with headphones as they explore a raised solar-system model and matching orbit board in a warm learning studio",
    summaryAudio: "/audio/academy/academy-052-universal-design-for-learning-summary.m4a",
    summaryAudioTitle: "Listen to Universal Design for Learning",
    shortSummary: "How proactive design can reduce barriers through flexible engagement, representation, and action while keeping learning goals rigorous and evaluating whether options actually help.",
    fullSummary: `Universal Design for Learning, or UDL, is a framework for designing goals, assessments, methods, materials, and environments in anticipation of learner variability. Instead of waiting for one standard pathway to exclude someone and then repairing it, educators examine likely barriers early and create purposeful options. UDL does not mean making every lesson different for every learner, lowering expectations, or offering unlimited choice. It aims to preserve a worthwhile learning goal while increasing the ways learners can access the task, participate, use support, and demonstrate relevant understanding.

CAST Guidelines 3.0 organizes UDL around multiple means of engagement, representation, and action and expression. Engagement concerns access to purpose, belonging, interest, effort, persistence, collaboration, and emotional capacity. Representation concerns how learners perceive and make sense of language, symbols, media, perspectives, and knowledge. Action and expression concerns interaction, communication, strategy, and ways to show learning. These areas interact rather than forming a fixed sequence. The current guidelines emphasize learner agency and barriers connected to identity, bias, and exclusion as well as disability and access.

Effective options remain aligned with the goal. If the goal is to explain planetary motion, learners might inspect a raised orbit model, hear a carefully described explanation, and study a clear diagram. They might then explain the relationship orally, in writing, through a labeled model, or with accessible technology, provided each response supplies comparable evidence about the target concept. If decoding scientific notation is itself the goal, removing all notation would change what is being assessed. Teachers therefore distinguish the intended knowledge or skill from incidental demands that block learners without contributing useful evidence.

UDL complements, but does not replace, accessibility standards, assistive technology, individualized accommodations, specialist expertise, or direct teaching. More formats do not automatically create better learning, and UDL should not be confused with assigning instruction according to unsupported learning-style categories. Options need usable navigation, accurate captions and descriptions, compatible documents, clear language, explicit instruction, and feedback. Teachers should ask learners which barriers remain and examine participation and learning evidence. CAST describes the guidelines as suggestions, not a prescription or checklist.

Research warrants both interest and caution. A meta-analysis of controlled studies reported a moderate average achievement benefit for UDL-based instruction, but the included interventions, learners, settings, and implementation varied. Critical reviews also question whether all claims attached to the guidelines have direct empirical support. Educators should therefore treat UDL as a design framework to test thoughtfully, not as an automatic guarantee. In education, learners can redesign one science activity by naming the fixed goal, identifying barriers, creating two purposeful access or response options, and checking each option against the same success criteria. They then gather user feedback and performance evidence, revise the design, and document which barriers still require individual support.`,
    coreIdeas: [
      "UDL proactively designs for learner variability by separating rigorous learning goals from avoidable barriers in methods, materials, environments, and assessments.",
      "Multiple means of engagement, representation, and action and expression provide purposeful options that must remain aligned with the same learning goal and success evidence.",
      "UDL complements accessibility and individualized support, requires explicit teaching and evaluation, and should be applied as a revisable framework rather than a checklist or guarantee.",
    ],
    educationConnection: "Have learners identify the fixed goal and avoidable barriers in one activity, create aligned options for access and response, test them with users and common criteria, then document remaining support needs.",
    relatedConcepts: ["Accessibility", "Learner agency", "Inclusive assessment"],
    sourceUrls: [
      { label: "CAST: Universal Design for Learning Guidelines 3.0", url: "https://udlguidelines.cast.org/" },
      { label: "CAST: UDL Guidelines Frequently Asked Questions", url: "https://udlguidelines.cast.org/more/frequently-asked-questions/" },
      { label: "King-Sears and colleagues: UDL Achievement Meta-Analysis", url: "https://doi.org/10.1016/j.tate.2022.103956" },
      { label: "Boysen: Critical Analysis of the UDL Evidence Base", url: "https://doi.org/10.1177/14782103241255428" },
    ],
    createdAt: "2026-08-16T08:00:00.000Z",
  },

];
