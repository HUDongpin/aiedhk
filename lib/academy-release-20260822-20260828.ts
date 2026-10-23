import type { AcademyLesson } from "@/lib/types";

export const academyRelease20260822To20260828: AcademyLesson[] = [
  {
    "id": "academy-071",
    "listingIdentifier": "AI Knowledge 36",
    "title": "Tokenization and Multilingual AI",
    "slug": "tokenization-and-multilingual-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-071-tokenization-and-multilingual-ai.png",
    "summaryAudio": "/audio/academy/academy-071-tokenization-and-multilingual-ai-summary.m4a",
    "tags": [
      "tokenization",
      "multilingual AI",
      "language access"
    ],
    "imageAlt": "A South Asian woman instructor and two adult learners of different backgrounds compare handwritten syllable tiles and a segmentation diagram at a sunny classroom table.",
    "summaryAudioTitle": "Listen to Tokenization and Multilingual AI",
    "shortSummary": "Why an AI model divides writing into tokens, and how those choices affect context space, language access, and the interpretation of classroom text.",
    "fullSummary": "Before a language model processes a sentence, a tokenizer converts its text into a sequence of identifiers. A token might represent a whole word, part of a word, punctuation, a space, or bytes. These units are computational choices, not a universal map of meaning. The same sentence can be divided differently by different tokenizers, so a word count cannot reliably predict the input length of every model.\n\nSubword methods address a practical problem: a fixed vocabulary cannot list every name, spelling, technical term, and newly coined word. By combining reusable pieces, a model can represent unfamiliar strings without assigning each one a separate vocabulary entry. Byte-pair encoding learns useful combinations from a training corpus; other approaches choose pieces using different statistical criteria. SentencePiece demonstrates a system that can learn subword units directly from raw text, including languages that do not mark every word with spaces.\n\nThis engineering decision has educational consequences. If equivalent passages require different numbers of tokens across languages, a fixed token allowance contains different amounts of material. Research by Petrov and colleagues documents substantial variation among languages and tokenizers. The issue can affect usage costs and effective context capacity. It does not mean that a language with more tokens is inherently more difficult, less expressive, or educationally less valuable. It reflects the design and training of a particular system.\n\nConsider a multilingual history class comparing two teacher-checked translations of the same source. Suppose a chosen tokenizer represents one passage with 300 tokens and another with 600. These are illustrative counts, not universal language ratios. With a 1,200-token input allowance, the second passage leaves less room for instructions, additional evidence, and questions. If software silently cuts text to fit, learners may receive different historical evidence even when the teacher supplied equivalent documents. The remedy begins with inspecting the actual tokenizer and the retained text.\n\nA useful classroom investigation keeps meaning approximately constant while changing language, spelling, or formatting. Learners compare token boundaries in a local or institutionally approved viewer, record the tokenizer version, and discuss what changes. They can test a familiar word, an inflected form, a personal name replaced with a fictional one, and a mathematical expression. The aim is to understand representation, not to rank languages. Student writing should not be uploaded to an unfamiliar service merely to inspect its tokens.\n\nTokenization explains only part of multilingual performance. Training coverage, model architecture, cultural knowledge, evaluation tasks, and the quality of translations also matter. Fewer tokens do not guarantee a more accurate or fair answer. Educators should therefore test complete tasks in the languages learners actually use, check for truncation, and distinguish token-based limits from word-based classroom instructions. A transparent tool can display remaining capacity without making students shorten or abandon their preferred language simply because its internal encoding is less efficient.",
    "coreIdeas": [
      "Tokens are model-specific pieces of encoded text, rather than fixed equivalents of words or meanings.",
      "Subword vocabularies help represent unfamiliar strings, but token counts can differ substantially across languages.",
      "Token budgets can change access to context; multilingual quality still requires evaluation of complete educational tasks."
    ],
    "educationConnection": "Compare teacher-checked translations with the same tokenizer, inspect which evidence fits within a fixed input budget, and discuss language access without treating token counts as language quality scores.",
    "relatedConcepts": [
      "Subword segmentation",
      "Context windows",
      "Multilingual evaluation"
    ],
    "sourceUrls": [
      {
        "label": "Sennrich, Haddow, and Birch: Neural Machine Translation of Rare Words with Subword Units",
        "url": "https://aclanthology.org/P16-1162/"
      },
      {
        "label": "Kudo and Richardson: SentencePiece",
        "url": "https://aclanthology.org/D18-2012/"
      },
      {
        "label": "Petrov and colleagues: Language Model Tokenizers Introduce Unfairness Between Languages",
        "url": "https://arxiv.org/abs/2305.15425"
      }
    ]
  },
  {
    "id": "academy-072",
    "listingIdentifier": "Educational Theory 36",
    "title": "The Worked-Example Effect",
    "slug": "the-worked-example-effect",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-072-the-worked-example-effect.png",
    "summaryAudio": "/audio/academy/academy-072-the-worked-example-effect-summary.m4a",
    "tags": [
      "worked examples",
      "instructional design",
      "novice learning"
    ],
    "imageAlt": "A Black woman tutor points to three successive triangle diagrams on an easel while a South Asian man sketches and a White woman follows the worked solution.",
    "summaryAudioTitle": "Listen to The Worked-Example Effect",
    "shortSummary": "How studying a carefully explained solution can help novices learn a method, and how teachers can move from examples to independent problem solving.",
    "fullSummary": "A worked example presents a problem together with a solution that makes important steps visible. Its purpose is to help a learner notice how a method works before having to discover every step alone. The worked-example effect describes findings in which studying such examples supports novice learning more effectively or efficiently than spending the same learning period solving conventional problems. It is a conditional instructional effect, not a rule that every lesson should become a demonstration.\n\nThe mechanism is closely connected to cognitive load. A novice searching for a solution may devote much of their limited working-memory capacity to trying possibilities and tracking partial results. A well-designed example directs that effort toward relationships among the problem, the chosen operation, and the reason the operation is valid. Merely showing a final answer does not provide this support. Conversely, an explanation overloaded with commentary can make the relationships harder to follow.\n\nImagine teaching an adult numeracy group to solve 3x + 5 = 20. A useful example shows subtracting five from both sides, obtaining 3x = 15, then dividing both sides by three to obtain x = 5. Alongside the changes, the teacher identifies the shared goal: preserve equality while isolating the unknown. Learners check the answer in the original equation. The teacher then offers 4x + 7 = 23 and asks which operation should come first and why. This second task tests whether the example has supplied a usable method.\n\nExample design matters. Keep explanations close to the steps they explain so learners need not search across a page. Highlight meaningful subgoals instead of decorating every symbol. Include enough variation to show what stays invariant: changing numbers is useful, but eventually the equation's arrangement should change too. Comparing a correct solution with a carefully chosen error can reveal a misconception, provided learners receive enough support to identify and correct it. An unexplained erroneous example can instead strengthen confusion.\n\nSupport should change as knowledge grows. A completion problem might supply the first step and ask the learner to finish. Later examples can omit more steps, followed by independent problems and delayed checks. The transition should respond to evidence of understanding, rather than a fixed number of demonstrations. Learners who already know the method may gain little from repeatedly studying fully specified solutions, and redundant guidance can consume attention that would be better spent on a new challenge.\n\nFor teachers, the practical question is what learners should learn to see. In a writing lesson, an annotated paragraph can reveal how evidence supports a claim; in programming, a short traced function can reveal the role of a loop. Ask learners to explain the decision at a pivotal step and then solve a related problem without the example. Smooth copying or apparent agreement is weak evidence of learning. Success means that learners can select, explain, and adapt the method when the original worked solution is no longer in front of them.",
    "coreIdeas": [
      "Worked examples reduce unproductive novice search by making solution steps and their reasons available for study.",
      "Examples need clear subgoals, integrated explanations, and purposeful variation; copying a solution is insufficient evidence of learning.",
      "Fade guidance in response to demonstrated understanding and check independent performance on related problems."
    ],
    "educationConnection": "Use an explained equation solution, a completion problem, and an independent variant; ask learners to justify equality-preserving operations and verify their answers.",
    "relatedConcepts": [
      "Cognitive load theory",
      "Completion problems",
      "Expertise reversal"
    ],
    "sourceUrls": [
      {
        "label": "Institute of Education Sciences: Organizing Instruction and Study to Improve Student Learning",
        "url": "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"
      },
      {
        "label": "UK Department for Education: Using Worked and Partially Completed Examples",
        "url": "https://support-for-early-career-teachers.education.gov.uk/teach-first/year-1-how-do-pupils-learn/autumn-week-4-ect-theory/"
      },
      {
        "label": "Van Gog, Kester, and Paas: Effects of Worked Examples and Problem Pairs",
        "url": "https://www.sciencedirect.com/science/article/pii/S0361476X1000055X"
      }
    ]
  },
  {
    "id": "academy-073",
    "listingIdentifier": "AI Knowledge 37",
    "title": "Sampling, Temperature, and Top-p",
    "slug": "sampling-temperature-and-top-p",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-073-sampling-temperature-and-top-p.png",
    "summaryAudio": "/audio/academy/academy-073-sampling-temperature-and-top-p-summary.m4a",
    "tags": [
      "text generation",
      "temperature",
      "nucleus sampling"
    ],
    "imageAlt": "A silver-haired White instructor and a Black adult learner compare two probability bar charts and three story-ending sketches on a tabletop board.",
    "summaryAudioTitle": "Listen to Sampling, Temperature, and Top-p",
    "shortSummary": "How decoding settings change the range of responses a language model produces, and why more consistent wording does not guarantee more accurate content.",
    "fullSummary": "A language model typically assigns scores to possible next tokens. A decoding procedure turns those scores into an actual choice, then repeats the process with the new token included. This is why the same model and prompt can produce different responses. Sampling settings influence which possibilities are explored; they do not change the facts available to the model or directly measure the educational quality of an answer.\n\nTemperature changes how concentrated the next-token probability distribution becomes. Lower positive temperatures emphasize higher-scoring tokens; higher temperatures spread probability more broadly. Temperature is therefore a control over sampling behavior, not an intelligence or creativity meter. A model can repeat a misconception consistently at a low temperature. A higher setting can produce useful variety, but also irrelevant or less coherent continuations. Some interfaces treat zero as a request for greedy selection, although exact behavior depends on the implementation.\n\nTop-p, also called nucleus sampling, uses a different rule. It retains a smallest high-probability set whose cumulative probability reaches a selected threshold, then samples within that set. Suppose four possible continuations have probabilities 0.50, 0.30, 0.15, and 0.05. With a top-p threshold of 0.80, the first two form the candidate set in this simplified example. Their probabilities are renormalized before sampling. The number of retained candidates changes as the distribution changes, unlike a fixed top-k limit.\n\nA teacher creating discussion starters can investigate these settings without assuming that one value is universally best. Keep the model, prompt, and source passage fixed. Request several questions under each of two temperature settings, while holding other supported controls constant. Then judge the questions against the same rubric: curricular relevance, factual assumptions, accessibility, and whether they invite different defensible responses. Count near-duplicates as well as obviously weak questions. The purpose is to observe a tradeoff in this task, not to crown a setting after one attractive output.\n\nFor a factual classroom explanation, source quality and verification usually matter more than stylistic variety. Asking for lower temperature does not prevent fabricated references or incorrect arithmetic. Constraining the response to an approved passage, checking each claim, and validating calculations address different failure points. If an activity needs reproducible examples, record the model version, prompt, available decoding settings, and generated material. A random seed may help within a particular system, but it is not a promise of identical results across software, hardware, or model changes.\n\nChanging several sampling controls together makes a comparison difficult to interpret. Begin with a documented default and change one relevant control at a time. Some models or hosted services do not expose these controls, and settings with the same name can interact differently across implementations. For learners, the valuable insight is that fluent text emerges through a sequence of constrained choices. Sampling shapes variation within those choices; educators still have to decide whether the resulting content is accurate, inclusive, and useful for the intended learning goal.",
    "coreIdeas": [
      "Temperature reshapes next-token probabilities; it does not directly control truth or reasoning quality.",
      "Top-p samples from a changing candidate set defined by cumulative probability.",
      "Compare settings with a fixed task and rubric, and verify content independently of how consistent or varied it sounds."
    ],
    "educationConnection": "Generate small sets of discussion questions with one setting varied, evaluate them blind against a common rubric, and discuss the limits of drawing conclusions from one response.",
    "relatedConcepts": [
      "Autoregressive generation",
      "Probability distributions",
      "Reproducibility"
    ],
    "sourceUrls": [
      {
        "label": "Holtzman and colleagues: The Curious Case of Neural Text Degeneration",
        "url": "https://arxiv.org/abs/1904.09751"
      },
      {
        "label": "Hugging Face Transformers: Generation Configuration",
        "url": "https://huggingface.co/docs/transformers/main_classes/text_generation"
      }
    ]
  },
  {
    "id": "academy-074",
    "listingIdentifier": "Educational Theory 37",
    "title": "Self-Explanation in Learning",
    "slug": "self-explanation-in-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-074-self-explanation-in-learning.png",
    "summaryAudio": "/audio/academy/academy-074-self-explanation-in-learning-summary.m4a",
    "tags": [
      "self-explanation",
      "reasoning",
      "conceptual understanding"
    ],
    "imageAlt": "A Black adult learner explains a hand-drawn rectangle with one half shaded to a South Asian tutor and an East Asian peer.",
    "summaryAudioTitle": "Listen to Self-Explanation in Learning",
    "shortSummary": "How explaining a step or idea to oneself can reveal missing connections, and how educators can make those explanations productive rather than rehearsed.",
    "fullSummary": "Self-explanation occurs when learners generate an account of why something makes sense to them. They may explain why a mathematical step is valid, connect a scientific sentence to a mechanism, or identify how a new example relates to an earlier principle. The audience can be the learner alone. The important feature is the construction of a connection that was not simply copied from the instructional material.\n\nResearch by Chi and colleagues examined how prompting learners to explain a text could support understanding. A proposed mechanism is that explaining exposes gaps and encourages learners to integrate new information with existing knowledge. In a worked solution, a learner might move from noticing that a number changed to identifying the operation and its justification. However, producing more words is not automatically better. A fluent paraphrase can leave the underlying misconception untouched, and a confident explanation can be incorrect.\n\nConsider a lesson about equivalent fractions. A learner sees one half rewritten as three sixths. Repeating that the fractions are equal provides little evidence of understanding. A more useful explanation is that each original half has been divided into three equal parts, making six equal parts in the whole while preserving the amount selected. The teacher asks the learner to connect a partitioned rectangle with the numerator and denominator. A second prompt asks why multiplying only the numerator would change the amount. These questions make the relevant relationship available for inspection.\n\nGood prompts target a precise reasoning opportunity. Ask which principle licenses a step, what assumption is being made, or how a diagram and sentence describe the same event. Early in learning, model a short explanation and provide a focused question. Later, let learners identify where an explanation is needed. Requiring a paragraph after every trivial step may interrupt the task and increase burden without adding insight. Spoken, written, sketched, or supported communication can serve the same purpose when the reasoning is accessible.\n\nFeedback is essential when learners lack enough knowledge to evaluate their own accounts. A partner or teacher can ask for evidence, offer a counterexample, and help repair a connection. An AI tutor can propose prompts, but its acceptance of a response is not proof of correctness. Educators should inspect whether it rewards genuine justification or merely familiar vocabulary. Learners can also compare their explanation with an authoritative model after attempting their own, noting what changed and why.\n\nTo evaluate the activity, look beyond the explanation itself. Ask learners to solve a related problem, distinguish a correct solution from an attractive error, or explain the concept after a delay. Transfer to a different representation is especially informative in the fractions example. Self-explanation is most useful when it directs attention to meaningful relationships and supports revision. It should not become a test of verbal confidence or a demand that every learner narrate all thinking aloud. The educational goal is a better connected understanding that learners can use independently.",
    "coreIdeas": [
      "Self-explanation generates connections and justifications rather than merely repeating an answer.",
      "Focused prompts and corrective feedback help learners notice gaps and repair inaccurate accounts.",
      "Judge the activity through later explanation and transfer, while allowing accessible forms of expression."
    ],
    "educationConnection": "Use equivalent fractions to connect a diagram, a symbolic transformation, and an explanation of why the quantity stays unchanged; test a new representation afterward.",
    "relatedConcepts": [
      "Inference generation",
      "Metacognitive monitoring",
      "Worked examples"
    ],
    "sourceUrls": [
      {
        "label": "Chi and colleagues: Eliciting Self-Explanations Improves Understanding",
        "url": "https://education.asu.edu/lcl/publications/chi-m-t-h-de-leeuw-n-chiu-m-h-lavancher-c-1994-eliciting-self-explanations-0"
      },
      {
        "label": "Aleven and Koedinger: The Need for Tutorial Dialog to Support Self-Explanation",
        "url": "https://pact.cs.cmu.edu/koedinger/pubs/Aleven%20Koedinger%2000.pdf"
      },
      {
        "label": "Institute of Education Sciences: Deep Explanatory Questions",
        "url": "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"
      }
    ]
  },
  {
    "id": "academy-075",
    "listingIdentifier": "AI Knowledge 38",
    "title": "Structured Outputs and JSON Schemas",
    "slug": "structured-outputs-and-json-schemas",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-075-structured-outputs-and-json-schemas.png",
    "summaryAudio": "/audio/academy/academy-075-structured-outputs-and-json-schemas-summary.m4a",
    "tags": [
      "structured outputs",
      "JSON Schema",
      "validation"
    ],
    "imageAlt": "A computing teacher and two adult learners align illustrated cards with fields on a paper form beside a laptop showing a simple structured grid.",
    "summaryAudioTitle": "Listen to Structured Outputs and JSON Schemas",
    "shortSummary": "How schemas make AI output easier for software to check, and why a correctly shaped answer can still contain inaccurate educational content.",
    "fullSummary": "Structured output means that an AI response follows an explicit format that another program can process. JSON, for example, can represent an object with named fields, arrays, strings, numbers, and Boolean values. A JSON Schema specifies constraints on that structure. This is useful when a learning application needs predictable fields such as a question, answer options, and feedback, rather than a paragraph that another component must interpret informally.\n\nA schema can state that a question must be a string, that options must be an array, and that an item must contain certain required fields. It can limit an answer to an allowed set or reject additional properties. These rules make some failures visible before content reaches learners. However, declaring a property does not necessarily make it required: that constraint needs to be specified explicitly. Systems also differ in which parts of the schema standard their generation tools support.\n\nThere are two distinct places to apply constraints. A program can validate completed output and reject a response that does not conform. Some generation systems can also restrict which tokens are allowed while producing the response, using a grammar or related representation. Research on guided generation explains how such restrictions can enforce output structure. Neither method establishes that the content is true, pedagogically appropriate, or safe to display. A perfectly valid string can contain a completely wrong explanation.\n\nImagine a teacher building a small vocabulary activity. The requested object contains a target word, three candidate definitions, the index of the intended answer, and a short explanation. A structural check can confirm that exactly three definitions exist and that the answer index is within range. A separate content check must establish that precisely one definition fits the target word in the supplied sentence. If two definitions are acceptable, the object can pass its schema while failing as an assessment item. That distinction should shape the review process.\n\nA robust workflow keeps these checks separate. Validate the response format, check domain rules, examine source support where relevant, and review the learner-facing item. Preserve the original input and record why an item was rejected without collecting unnecessary personal data. If generation is interrupted or a tool refuses the request, the application needs an explicit failure path. It should not invent missing fields or display a half-completed item as if it had passed review. Retrying automatically also needs sensible limits.\n\nFor educators, a schema is a useful way to express what a resource must contain. Designing one exposes hidden assumptions: whether feedback may be absent, how many examples are needed, or which learning objective an item addresses. Learners can inspect several synthetic objects and classify failures as structural, factual, or instructional. The exercise makes software reliability tangible. Structured outputs can reduce avoidable integration errors and support consistent checking, while the responsibility for meaningful content remains with the people who define the task, choose the evidence, and review the result.",
    "coreIdeas": [
      "A schema makes required fields, types, and structural constraints explicit and machine-checkable.",
      "Constrained generation and post-generation validation address format reliability, not factual or pedagogical correctness.",
      "Educational workflows need domain checks, review, and explicit handling of missing, refused, or interrupted output."
    ],
    "educationConnection": "Design a vocabulary-item schema and compare objects that fail structurally with objects that are valid JSON but have ambiguous answers or misleading explanations.",
    "relatedConcepts": [
      "Constrained decoding",
      "Data validation",
      "Assessment item quality"
    ],
    "sourceUrls": [
      {
        "label": "JSON Schema: Object Reference",
        "url": "https://json-schema.org/understanding-json-schema/reference/object"
      },
      {
        "label": "Willard and Louf: Efficient Guided Generation for Large Language Models",
        "url": "https://arxiv.org/abs/2307.09702"
      }
    ]
  },
  {
    "id": "academy-076",
    "listingIdentifier": "Educational Theory 38",
    "title": "The Generation Effect",
    "slug": "the-generation-effect",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-076-the-generation-effect.png",
    "summaryAudio": "/audio/academy/academy-076-the-generation-effect-summary.m4a",
    "tags": [
      "generation effect",
      "memory",
      "active study"
    ],
    "imageAlt": "Two adult learners draw a missing stage in a plant picture sequence while a Latina educator watches and a completed example card lies nearby.",
    "summaryAudioTitle": "Listen to The Generation Effect",
    "shortSummary": "Why producing an answer from a cue can sometimes strengthen later memory, and how to use generation without leaving learners to rehearse errors.",
    "fullSummary": "The generation effect is the finding that people can remember information better when they produce it from a cue than when they merely read it. In classic experiments by Slamecka and Graf, participants generated target words under specified rules rather than receiving complete word pairs. The effect concerns an activity at learning and a later memory outcome. It does not imply that learners must invent an entire concept without instruction, or that every form of active work produces the same benefit.\n\nGeneration changes how a learner processes material. Completing a meaningful relationship can direct attention to the target and its connection with a cue. It may also create distinctive information that helps later retrieval. Researchers have proposed multiple explanations, and the result depends on materials, instructions, prior knowledge, and what the later test requires. Effort alone is not a sufficient account: a difficult activity that directs attention away from the desired relationship may have little educational value.\n\nA language teacher might provide the sentence, \"The opposite of scarce is a_____,\" after introducing the relevant vocabulary. Learners attempt to generate \"abundant\" and then compare their response with the accepted answer and its use in a sentence. Another group could study the same word pair in complete form. A later test using a new sentence would help distinguish memory for the original cue from flexible vocabulary knowledge. The classroom comparison is an illustration of a design, not a guarantee that this exact exercise will outperform every alternative.\n\nGeneration should be sufficiently constrained to serve the learning goal. Asking a beginner to invent a technical definition may produce a plausible misconception, whereas asking them to complete a relationship after a short explanation may be productive. Feedback should identify the correct target and clarify why it fits. Research on unsuccessful retrieval attempts shows that even an unsuccessful attempt can sometimes benefit subsequent learning when the correct answer follows. This is a related finding, not permission to leave errors uncorrected or to assume that frustration is beneficial.\n\nIn practice, teachers can pause before revealing a worked answer, leave a meaningful term to complete, or ask learners to predict a result and then inspect evidence. They should distinguish these activities from simple copying disguised as completion. If the missing word is obvious from its first letter but its meaning is never considered, the task may exercise a narrow association. If the goal is conceptual understanding, follow the generated answer with an explanation, application, or comparison that addresses that concept.\n\nEvaluation should match the claim. A next-day recall task can test retention, while a new problem can examine whether learners can use the information. Record how much support was needed and whether errors persisted. Learners with different language proficiency or background knowledge may need different cues. Generation is a useful addition to an instructional sequence when it invites relevant thinking, supplies timely correction, and leads to independently usable knowledge. It is not a substitute for clear teaching or an automatic measure of engagement.",
    "coreIdeas": [
      "Producing information from a cue can improve later memory relative to reading, under particular learning and testing conditions.",
      "Generation must target meaningful relationships and be supported by feedback when answers are incomplete or wrong.",
      "Distinguish retention of a prompted association from understanding and transfer to a new task."
    ],
    "educationConnection": "Have learners complete a meaningful vocabulary relationship, review corrective feedback, and later use the word in a new sentence to check more than cue memorization.",
    "relatedConcepts": [
      "Encoding",
      "Retrieval practice",
      "Corrective feedback"
    ],
    "sourceUrls": [
      {
        "label": "Slamecka: Author Commentary on the Generation Effect",
        "url": "https://garfield.library.upenn.edu/classics1992/A1992HQ13900001.pdf"
      },
      {
        "label": "Kornell, Hays, and Bjork: Unsuccessful Retrieval Attempts Enhance Subsequent Learning",
        "url": "https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/Kornell_Hays_Bjork_2009_JEP-LMC.pdf"
      }
    ]
  },
  {
    "id": "academy-077",
    "listingIdentifier": "AI Knowledge 39",
    "title": "Prompt Injection and Untrusted Content",
    "slug": "prompt-injection-and-untrusted-content",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-077-prompt-injection-and-untrusted-content.png",
    "summaryAudio": "/audio/academy/academy-077-prompt-injection-and-untrusted-content-summary.m4a",
    "tags": [
      "prompt injection",
      "AI security",
      "untrusted content"
    ],
    "imageAlt": "An instructor and two adult learners separate a museum source sheet from a task-flow diagram and mark the boundary between source material and instructions.",
    "summaryAudioTitle": "Listen to Prompt Injection and Untrusted Content",
    "shortSummary": "How instructions hidden in documents or websites can redirect an AI assistant, and how teachers and system designers can protect the boundary between evidence and authority.",
    "fullSummary": "Prompt injection occurs when content supplied to an AI system attempts to redirect its behavior in ways that conflict with the authorized task. A direct attempt may arrive as a user message. An indirect attempt can be embedded in a web page, document, image, or tool result that the assistant reads while doing legitimate work. The central problem is that text encountered as evidence may be mistaken for an instruction the system should obey.\n\nThis differs from an ordinary factual error. A historical source may contain a false claim that needs critical evaluation. An injected passage instead tries to change the assistant's task, such as instructing it to ignore the teacher's request, reveal restricted information, or take an unauthorized action. Research by Greshake and colleagues demonstrates this problem in applications that connect language models with external content. The risk grows when an assistant can act through tools rather than only generate a draft for review.\n\nConsider a teacher asking an approved assistant to summarize a public museum page for a lesson. The page contains a passage that addresses automated readers and tells them to append an unrelated message to every answer. The passage belongs to the page's content; it has no authority over the teacher's instructions. A reliable workflow treats it as untrusted material, extracts relevant historical evidence, and refuses to let the page redefine the task. If the assistant instead follows the passage, even an otherwise accurate summary has crossed an important boundary.\n\nClear instructions and source labeling help, but they are not complete protection. Systems should limit tool permissions, separate sensitive information from unnecessary contexts, validate proposed actions, and require appropriate human confirmation for consequential operations. A summarizer usually does not need permission to send messages or change school records. Reducing that authority limits what an injection can accomplish. Filtering suspicious phrases alone is fragile because an attack can use many forms, including content that is not obvious to a human reader.\n\nEducators can teach the idea with harmless synthetic documents. Give learners a legitimate task and a short source containing an unrelated instruction to change the output's color or insert a nonsense word. Ask them to identify which person authorized the task, which material supplies evidence, and which instructions should be ignored. Keep the demonstration in a controlled environment without real student data or external actions. The learning objective is recognizing misplaced authority, not practicing intrusion against a live service.\n\nA safe workflow also needs recovery. When an assistant appears redirected, stop the action, preserve a minimal record, and report the source and behavior through the institution's support route. Do not copy sensitive content into a public troubleshooting forum. Prompt injection remains a system-design challenge, so no single warning in a prompt should be advertised as an absolute defense. The practical standard is layered protection: trustworthy task authority, limited permissions, inspected evidence, and clear human control over actions that affect learners or institutions.",
    "coreIdeas": [
      "Indirect prompt injection tries to turn untrusted source content into instructions for an AI assistant.",
      "Instruction wording alone is insufficient; least privilege and validation of consequential actions reduce exposure.",
      "Teach authority boundaries with harmless examples and provide a clear route to stop and report redirected behavior."
    ],
    "educationConnection": "Use a synthetic museum extract containing an irrelevant instruction and ask learners to separate the teacher’s authorized task from evidence and attempted redirection.",
    "relatedConcepts": [
      "Instruction hierarchy",
      "Least privilege",
      "Tool authorization"
    ],
    "sourceUrls": [
      {
        "label": "Greshake and colleagues: Indirect Prompt Injection in LLM-Integrated Applications",
        "url": "https://arxiv.org/abs/2302.12173"
      },
      {
        "label": "OWASP: Prompt Injection",
        "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
      }
    ]
  },
  {
    "id": "academy-078",
    "listingIdentifier": "Educational Theory 39",
    "title": "Elaborative Interrogation",
    "slug": "elaborative-interrogation",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-078-elaborative-interrogation.png",
    "summaryAudio": "/audio/academy/academy-078-elaborative-interrogation-summary.m4a",
    "tags": [
      "elaborative interrogation",
      "explanatory questions",
      "prior knowledge"
    ],
    "imageAlt": "A science educator and two adult learners examine condensation on a cold glass and discuss an annotated sketch of the cool surface.",
    "summaryAudioTitle": "Listen to Elaborative Interrogation",
    "shortSummary": "How asking why a fact makes sense can connect it to prior knowledge, and why those explanations need checking rather than automatic acceptance.",
    "fullSummary": "Elaborative interrogation is a study strategy in which learners answer explanatory questions about information they are learning, often in the form, \"Why would this be true?\" Instead of repeating a fact, they try to connect it with relevant knowledge. The strategy is narrower than a general classroom discussion: its purpose is to produce an explanation that makes a particular fact more meaningful and easier to retrieve later.\n\nAn explanation can provide links between new material and an existing knowledge structure. Those links may supply additional routes for remembering the fact. They can also help distinguish it from similar information. Research reviewed by Dunlosky and colleagues identifies elaborative interrogation as promising while emphasizing conditions and evidence gaps. Prior knowledge matters because a learner needs resources from which to construct a plausible account. A demand for explanation does not itself supply the missing knowledge.\n\nTake a science lesson stating that water droplets can form on the outside of a cold glass. A learner might initially explain that water has leaked through the glass. Asking why droplets form on the outside creates an opportunity to examine that account. After recalling that air contains water vapor, the learner can explain that air near the cold surface cools enough for some vapor to condense. The teacher checks the mechanism and asks what would happen with a warmer glass. The useful elaboration is the supported connection, not the mere presence of a sentence beginning with \"because.\"\n\nA short teaching sequence can begin with a clear factual statement and one focused why-question. Learners write or sketch a tentative explanation, compare it with an authoritative account, and revise the connection if necessary. A teacher can provide a relevant diagram or remind learners of prerequisite knowledge without giving the entire answer immediately. Later, learners revisit the fact and explain it without looking at their original notes. The delayed attempt helps reveal whether the connection remains usable.\n\nThe strategy needs care when facts are arbitrary, explanations are disputed, or the text describes correlations rather than causes. Asking why two variables are associated can invite an unsupported causal story. In history, a single event may require several interacting explanations and competing interpretations. Educators should allow uncertainty and ask what evidence would support an explanation. If the material itself is inaccurate, elaborating it can make the error more coherent and memorable. Source checking therefore belongs before and during the activity.\n\nElaborative interrogation also differs from self-explanation of a problem-solving step. The former usually explains a stated fact; the latter can explain a process, representation, or inference as it unfolds. Both can encourage connection building, but they should be selected for the actual learning goal. A practical assessment asks learners to recall the fact, justify it accurately, and apply the relationship in a new situation. Rich wording is not enough. The teacher is looking for a relevant, evidence-consistent explanation that improves understanding rather than decorating memorization.",
    "coreIdeas": [
      "Elaborative interrogation asks learners to explain why a stated fact makes sense and connect it with relevant knowledge.",
      "Prior knowledge and corrective checking determine whether elaboration builds understanding or strengthens a misconception.",
      "Use evidence-sensitive questions and assess later recall, explanation, and application rather than explanation length."
    ],
    "educationConnection": "Ask learners why droplets form outside a cold glass, examine competing explanations, and use a warmer-glass comparison to check the proposed condensation mechanism.",
    "relatedConcepts": [
      "Elaboration",
      "Prior knowledge",
      "Causal explanation"
    ],
    "sourceUrls": [
      {
        "label": "Dunlosky and colleagues: Improving Students’ Learning With Effective Learning Techniques",
        "url": "https://www.psychologicalscience.org/journals/pspi/1529100612453266/"
      },
      {
        "label": "Pressley and colleagues: Elaborating to Learn and Learning to Elaborate",
        "url": "https://eric.ed.gov/?ff1=autPressley%2C+Michael&id=EJ350856&q=instructional+strategies"
      },
      {
        "label": "Institute of Education Sciences: Explanatory Questions in Instruction",
        "url": "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"
      }
    ]
  },
  {
    "id": "academy-079",
    "listingIdentifier": "AI Knowledge 40",
    "title": "Grounded Answers and Citation Verification",
    "slug": "grounded-answers-and-citation-verification",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-26T08:00:00.000Z",
    "image": "/images/academy/covers/academy-079-grounded-answers-and-citation-verification.png",
    "summaryAudio": "/audio/academy/academy-079-grounded-answers-and-citation-verification-summary.m4a",
    "tags": [
      "grounding",
      "citations",
      "evidence verification"
    ],
    "imageAlt": "An educator and two adult learners compare a highlighted tablet passage with an open reference book and a source-checking notebook.",
    "summaryAudioTitle": "Listen to Grounded Answers and Citation Verification",
    "shortSummary": "How to check whether an AI answer is supported by its sources, including the difference between a real citation, a relevant citation, and a citation that supports the exact claim.",
    "fullSummary": "A grounded answer connects its claims to supplied or retrieved evidence. That connection makes the answer more inspectable, but it does not automatically make it correct. A source may be unreliable, outdated, or misunderstood. A generated citation may point to a real page while failing to support the sentence beside it. Verification therefore requires looking at the relationship between each important claim and the actual evidence, not simply counting links.\n\nSeveral questions need separate answers. Does the cited source exist? Is it the source described by the reference? Does the relevant passage support the claim? Does the answer preserve important qualifications, dates, and population boundaries? Finally, are there unsupported claims with no citation at all? Research on automatic citation evaluation distinguishes qualities such as answer correctness and citation support. Work on research-and-revision systems also explores finding evidence and editing unsupported statements after generation.\n\nConsider an AI summary of a school attendance report. The source states that attendance increased during a term in which a mentoring programme operated. The summary says that mentoring caused attendance to improve. Even if the report is real and the citation opens correctly, the causal claim is stronger than the stated evidence. A teacher checking the sentence should replace the causal wording with a description of the observed association unless the report provides a design that supports the stronger inference. The repair concerns the claim, not the formatting of its reference.\n\nA practical verification routine begins by dividing an answer into checkable statements. For each consequential statement, identify the supporting passage and compare scope. A source about adults does not automatically support a claim about young children; a finding for one task does not establish a general benefit. Distinguish direct quotations, paraphrases, calculations, and the writer's own inferences. If the answer combines multiple sources, record what each contributes. A citation placed at the end of a long paragraph can otherwise conceal which sentences it actually supports.\n\nRetrieval can also miss important evidence. Search terms, available collections, language coverage, and ranking affect what enters the model's context. A grounded answer can faithfully summarize a narrow or biased selection. Educators should therefore ask whether the evidence set is adequate for the question, especially when sources disagree. An assistant should acknowledge that it cannot find sufficient support rather than attach an unrelated reference to preserve a polished appearance. Human reviewers still need access to the source material they are expected to check.\n\nIn a classroom, give learners a short generated explanation with three different problems: one invented reference, one accurate reference attached to an overstated claim, and one uncited assertion. Use fictional or openly available material and ask learners to repair the explanation. Assess their reasons and evidence trail, not only the final prose. Citation verification teaches a transferable reading habit: locate the evidence, inspect what it warrants, and keep the strength of the conclusion proportional to the support that can actually be shown.",
    "coreIdeas": [
      "A real, relevant source may still fail to support the exact claim placed beside its citation.",
      "Check existence, entailment, scope, qualifications, and coverage of uncited claims separately.",
      "Grounding also depends on the adequacy of the evidence set and transparent handling of disagreement or missing support."
    ],
    "educationConnection": "Audit a short explanation containing an invented reference, an overstated claim, and an uncited assertion; revise each sentence and document the supporting passage.",
    "relatedConcepts": [
      "Retrieval-augmented generation",
      "Source evaluation",
      "Claim entailment"
    ],
    "sourceUrls": [
      {
        "label": "Tianyu Gao and colleagues: Enabling Large Language Models to Generate Text with Citations",
        "url": "https://arxiv.org/abs/2305.14627"
      },
      {
        "label": "Luyu Gao and colleagues: RARR, Researching and Revising What Language Models Say",
        "url": "https://arxiv.org/abs/2210.08726"
      }
    ]
  },
  {
    "id": "academy-080",
    "listingIdentifier": "Educational Theory 40",
    "title": "Desirable Difficulties",
    "slug": "desirable-difficulties",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-26T08:00:00.000Z",
    "image": "/images/academy/covers/academy-080-desirable-difficulties.png",
    "summaryAudio": "/audio/academy/academy-080-desirable-difficulties-summary.m4a",
    "tags": [
      "desirable difficulties",
      "retention",
      "instructional challenge"
    ],
    "imageAlt": "Adult learners compare sketched route maps with a reference while a teacher listens to their explanations.",
    "summaryAudioTitle": "Listen to Desirable Difficulties",
    "shortSummary": "Why practice that feels less fluent can sometimes support stronger later learning, and how to distinguish useful difficulty from needless barriers.",
    "fullSummary": "A desirable difficulty is a feature of practice that can make learning feel slower or less successful in the moment while improving later retention or transfer. The idea, associated with Robert and Elizabeth Bjork, challenges the assumption that smooth classroom performance always indicates durable learning. Desirability is defined by what the difficulty helps learners retain and use later. A task is not educationally valuable merely because it is hard.\n\nThe distinction between performance and learning is central. A learner may complete several nearly identical problems quickly because the required procedure remains active and obvious. Later, when the topic is no longer signaled, they may struggle to choose that procedure. Practice that requires retrieving an idea, returning to it after a delay, or deciding among problem types can create more informative mental work. The relevant mechanism depends on the activity, so desirable difficulties should not be treated as one uniform intervention.\n\nImagine two ways to practice identifying the area of rectangles and triangles. In a blocked set, every triangle appears together and a displayed formula tells learners which operation to use. In a mixed set, learners must inspect each figure and choose an appropriate method. The mixed set may initially take longer because classification is part of the work. If the learning goal includes selecting a method independently, that effort is relevant. But students who cannot yet interpret the diagrams may first need explicit teaching and worked examples.\n\nA teacher can test whether the difficulty is desirable by keeping the intended outcome visible. After practice, use a delayed task with new figures and no headings that announce the method. Examine both selection and calculation errors. If learners are merely slower during practice and show no later advantage, the activity may need redesign. An immediate success rate or learners' enjoyment alone cannot settle the question. Nor should one small classroom comparison be treated as definitive evidence for every age, subject, or setting.\n\nDifficulty becomes undesirable when it overwhelms prerequisite knowledge, diverts attention, or blocks access. Tiny fonts, ambiguous instructions, inaccessible interfaces, public embarrassment, and excessive time pressure are not justified by this theory. Necessary accommodations can remove irrelevant barriers while leaving the intellectual challenge intact. A useful question is whether the learner is struggling with the concept that the teacher wants to develop or with an avoidable feature of the task. Support and challenge are compatible when they address different demands.\n\nTeachers should explain the purpose of effort without promising that frustration guarantees growth. Let learners compare how confident they feel immediately with what they can do after a delay. Use that discrepancy to improve study choices and adjust support. The practical contribution of desirable difficulties is a change in what counts as evidence: prioritize durable, transferable capability over the appearance of effortless practice. Good instruction makes the important mental work possible and checks whether that work actually serves learning.",
    "coreIdeas": [
      "Desirable difficulties may reduce immediate fluency while supporting later retention or transfer.",
      "The value of a challenge depends on its mechanism, learning goal, prerequisite knowledge, and delayed outcomes.",
      "Remove irrelevant barriers and preserve accessible support; hardship alone is not evidence of educational benefit."
    ],
    "educationConnection": "Compare blocked and mixed area problems, then inspect delayed method-selection and calculation errors on new figures to determine whether the added challenge served the goal.",
    "relatedConcepts": [
      "Learning versus performance",
      "Transfer",
      "Practice design"
    ],
    "sourceUrls": [
      {
        "label": "Bjork and Bjork: Creating Desirable Difficulties to Enhance Learning",
        "url": "https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/04/EBjork_RBjork_2011.pdf"
      },
      {
        "label": "Soderstrom and Bjork: Learning Versus Performance",
        "url": "https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/11/soderstorm_ra_learningvsperformance.pdf"
      }
    ]
  },
  {
    "id": "academy-081",
    "listingIdentifier": "AI Knowledge 41",
    "title": "Abstention and Selective Prediction",
    "slug": "abstention-and-selective-prediction",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-27T08:00:00.000Z",
    "image": "/images/academy/covers/academy-081-abstention-and-selective-prediction.png",
    "summaryAudio": "/audio/academy/academy-081-abstention-and-selective-prediction-summary.m4a",
    "tags": [
      "selective prediction",
      "abstention",
      "human review"
    ],
    "imageAlt": "A botany learner pauses a leaf classification while an instructor opens a field guide and another learner checks the specimen.",
    "summaryAudioTitle": "Listen to Abstention and Selective Prediction",
    "shortSummary": "How an AI system can answer only selected cases, and how to evaluate the tradeoff between fewer automated decisions and the errors that remain.",
    "fullSummary": "An AI system need not make an automated prediction for every input. Selective prediction adds a choice: answer when a selection rule permits it, and abstain otherwise. An abstention can route the case to a teacher, request more information, or explain that the available evidence is insufficient. This differs from simply adding cautious wording to every answer. The system changes which cases it is willing to handle automatically.\n\nTwo quantities describe the tradeoff. Coverage is the proportion of cases accepted for prediction. Selective risk is the error or loss among those accepted cases. Reducing coverage may reduce error among the remaining predictions if the selection rule successfully identifies difficult cases. Research on selective classification and SelectiveNet studies this relationship. A system that abstains on everything has low exposure to automated errors, but it also provides no automated service. Coverage and risk must therefore be reported together.\n\nSuppose a teacher evaluates a fictional classifier on 100 independently labeled science explanations. When required to classify every explanation, it makes ten errors. With an abstention rule, it accepts 70 explanations and makes three errors among those accepted. Coverage is 70 percent and accepted-case error is approximately 4.3 percent. The other 30 explanations still need attention. These illustrative numbers do not establish that the policy is useful: the teacher must also consider which cases were deferred, how long review takes, and what happens if review is unavailable.\n\nThe selection signal can come from predicted confidence, agreement among models, distance from familiar data, or a separately learned selection function. None should be assumed reliable without evaluation. A model can be confidently wrong, especially on unfamiliar inputs. A language model saying \"I am uncertain\" is not equivalent to a validated error estimate. Thresholds should be chosen on suitable development data and evaluated on separate cases that reflect the intended users and tasks.\n\nAbstention also has distributional consequences. A system may defer disproportionately often for learners who use a particular language or write in an unfamiliar style. Even if average accepted-case accuracy rises, those learners may experience delays or receive less support. Educators should examine both error and coverage across relevant groups, alongside the quality of human review. A deferred case must remain visible in the workflow; it should not disappear from a dashboard or be counted as a successful prediction.\n\nA practical classroom activity asks learners to design a review policy for fictional homework feedback. They compare several thresholds, estimate review workload, and decide which kinds of mistakes require immediate human attention. They should also define a message that tells the learner what happens next. Selective prediction is valuable when uncertainty leads to a better allocation of responsibility. Its success depends on the whole service, including timely follow-up, rather than on a flattering accuracy figure calculated only after difficult cases have been removed.",
    "coreIdeas": [
      "Selective prediction explicitly chooses which cases receive automated answers and which require another route.",
      "Evaluate accepted-case risk together with coverage and review workload.",
      "Validate selection signals and examine whether abstention creates unequal delays or hides difficult cases."
    ],
    "educationConnection": "Build a fictional homework-review policy, calculate error and coverage at several thresholds, and specify the teacher follow-up for every deferred response.",
    "relatedConcepts": [
      "Risk–coverage tradeoff",
      "Uncertainty estimation",
      "Human-in-the-loop review"
    ],
    "sourceUrls": [
      {
        "label": "Geifman and El-Yaniv: Selective Classification for Deep Neural Networks",
        "url": "https://arxiv.org/abs/1705.08500"
      },
      {
        "label": "Geifman and El-Yaniv: SelectiveNet",
        "url": "https://proceedings.mlr.press/v97/geifman19a.html"
      }
    ]
  },
  {
    "id": "academy-082",
    "listingIdentifier": "Educational Theory 41",
    "title": "Productive Failure",
    "slug": "productive-failure",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-27T08:00:00.000Z",
    "image": "/images/academy/covers/academy-082-productive-failure.png",
    "summaryAudio": "/audio/academy/academy-082-productive-failure-summary.m4a",
    "tags": [
      "productive failure",
      "problem solving",
      "instructional sequencing"
    ],
    "imageAlt": "Adult learners compare two rough sketches of spread with a teacher who is helping them connect their attempted methods to a clearer comparison.",
    "summaryAudioTitle": "Listen to Productive Failure",
    "shortSummary": "How an initial attempt at a carefully designed problem can prepare learners for explicit instruction, and why the later consolidation is essential.",
    "fullSummary": "Productive failure is an instructional design in which learners first attempt a challenging problem before receiving instruction that consolidates the target concept. The initial attempt may not produce the accepted solution. It can still prepare learners to notice important features, recognize gaps, and understand why a formal method is useful. The term describes a designed sequence with a learning purpose; it does not mean abandoning learners to difficulty and hoping that failure will teach them.\n\nKapur's research examines this sequence in mathematics learning. One line of work asks learners to invent ways of describing variation before introducing a conventional measure. Generating several imperfect approaches can activate prior knowledge and make limitations visible. The later teaching phase compares those approaches with the target concept and explains why particular features matter. Failure becomes potentially productive through this connection between attempted solutions and subsequent instruction, not through the emotional experience of being wrong alone.\n\nConsider two small sets of quiz scores: 4, 5, 6 and 1, 5, 9. Both have a mean of five, but their spread differs. Before naming a formal measure, a teacher asks groups to invent a way to describe how spread out each set is. Learners might propose the range, total distance from the mean, or a diagram. The teacher collects these approaches, asks what each captures, and then introduces the intended measure. The discussion connects the formal definition to a problem learners have already tried to solve.\n\nProblem selection is demanding. Learners need enough prerequisite knowledge to make meaningful attempts, and the task should invite several understandable representations. The teacher must anticipate likely approaches and identify the mathematical features to highlight during consolidation. A task that is simply inaccessible may generate little useful material. Likewise, giving away the entire method immediately can remove the preparation that the sequence was designed to create. The appropriate timing of guidance depends on learners, content, and the instructional aim.\n\nA supportive classroom climate matters. Explain that the initial work is exploratory, limit the time, and avoid grading unsuccessful attempts as evidence of low ability. Allow learners to represent ideas through diagrams or speech as well as formal symbols. During consolidation, treat errors as information about an approach while preserving respect for the person who proposed it. Productive failure does not justify public humiliation, withholding essential support, or repeating an activity that continues to exclude particular learners.\n\nEvaluation should examine what learners understand after instruction, including conceptual questions and new problems, rather than only whether they solved the opening challenge. Compare the complete sequence with a credible alternative, such as instruction followed by practice. Results from particular mathematics studies should not be generalized automatically to every subject or novice population. The design is most defensible when the teacher can explain how the initial attempts will make the later instruction more meaningful, and can show that the consolidation actually uses those attempts.",
    "coreIdeas": [
      "Productive failure links an exploratory problem attempt with explicit consolidation of the target concept.",
      "Initial representations and errors must provide material that later teaching can compare and explain.",
      "Use suitable prerequisites, respectful participation, bounded difficulty, and post-instruction conceptual checks."
    ],
    "educationConnection": "Ask learners to invent ways of comparing the spread of two score sets with the same mean, then use their proposals to motivate and explain a formal measure.",
    "relatedConcepts": [
      "Preparation for future learning",
      "Conceptual contrast",
      "Instructional sequencing"
    ],
    "sourceUrls": [
      {
        "label": "Kapur: Productive Failure in Learning the Concept of Variance",
        "url": "https://escholarship.org/uc/item/16f7z2zq"
      },
      {
        "label": "Kapur: Productive Failure in Learning Math",
        "url": "https://onlinelibrary.wiley.com/doi/10.1111/cogs.12107"
      },
      {
        "label": "Sinha and Kapur: When Productive Failure Fails",
        "url": "https://escholarship.org/uc/item/89k7p1wr"
      }
    ]
  },
  {
    "id": "academy-083",
    "listingIdentifier": "AI Knowledge 42",
    "title": "Probability Calibration in AI",
    "slug": "probability-calibration-in-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-08-28T08:00:00.000Z",
    "image": "/images/academy/covers/academy-083-probability-calibration-in-ai.png",
    "summaryAudio": "/audio/academy/academy-083-probability-calibration-in-ai-summary.m4a",
    "tags": [
      "probability calibration",
      "confidence",
      "AI evaluation"
    ],
    "imageAlt": "A data-science teacher and two adult learners compare paired prediction and observed-result bars and record differences in a notebook.",
    "summaryAudioTitle": "Listen to Probability Calibration in AI",
    "shortSummary": "What it means for an AI probability to match observed frequencies, and why accurate rankings and confident wording are different from calibrated predictions.",
    "fullSummary": "Probability calibration asks whether predicted probabilities agree with observed frequencies. If a classifier assigns about 0.80 probability to a particular outcome across many comparable cases, that outcome should occur in about 80 percent of them for those predictions to be well calibrated. Calibration is a property evaluated over collections of predictions. It cannot guarantee what will happen for one learner or one response, and it does not turn uncertainty into certainty.\n\nThis differs from classification accuracy and ranking ability. A model may correctly rank likely outcomes while assigning probabilities that are too extreme. Another model may always predict the overall event frequency and be calibrated in a limited aggregate sense while providing little useful discrimination between cases. Research by Guo and colleagues showed that modern neural networks can be poorly calibrated despite strong predictive performance. Evaluating only whether the highest-scoring class is correct misses this issue.\n\nImagine a fictional feedback system that labels 100 answers as having an 80 percent probability of containing a particular misconception. A careful human review finds the misconception in 60 of those answers. For that group, the system is overconfident relative to the observed frequency. Before drawing a strong conclusion, educators should inspect the sample size, uncertainty, labeling quality, and whether the cases were selected fairly. The example does not mean that every prediction should simply have twenty percentage points subtracted from it.\n\nA reliability diagram groups predictions into probability ranges and compares predicted probabilities with observed outcomes. Such a diagram can reveal patterns, but its appearance depends on grouping choices and available data. Summary measures can also hide important differences among classes or learner groups. A useful evaluation combines visual inspection, suitable scoring measures, and examples of consequential errors. Predictions about rare events require particular care because some probability ranges may contain few observations.\n\nCalibration methods adjust probability estimates using separate data. Temperature scaling, for example, fits a parameter to transform classifier scores. This use of temperature concerns probability calibration; it is distinct from turning up a text generator's sampling temperature to obtain more varied wording. Calibration data should reflect the intended setting and remain separate from final evaluation data. Reusing the same cases to fit and judge an adjustment can make the result look better than it will be on new learners.\n\nFor educational decisions, probability estimates should support proportionate action rather than labels that appear permanent. A teacher might use a well-tested estimate to prioritize which responses to inspect, while retaining direct evidence and a route to correction. Calibration can deteriorate when populations, tasks, or models change. A conversational model's statement that it is \"80 percent sure\" should not be treated as a calibrated probability unless that output has been evaluated for the specific task. The practical question is whether the number deserves the interpretation that users are likely to give it.",
    "coreIdeas": [
      "Calibration compares predicted probabilities with observed frequencies across sets of cases.",
      "Accuracy, ranking, and calibration are distinct; an informative probability needs evaluation beyond confident presentation.",
      "Fit calibration on suitable separate data and recheck it when tasks, populations, or models change."
    ],
    "educationConnection": "Create a reliability diagram from a fictional misconception detector, discuss uncertainty in small groups of cases, and choose how a teacher would use the estimates for review.",
    "relatedConcepts": [
      "Reliability diagrams",
      "Proper scoring rules",
      "Distribution shift"
    ],
    "sourceUrls": [
      {
        "label": "Guo and colleagues: On Calibration of Modern Neural Networks",
        "url": "https://proceedings.mlr.press/v70/guo17a.html"
      },
      {
        "label": "scikit-learn: Probability Calibration",
        "url": "https://scikit-learn.org/stable/modules/calibration.html"
      }
    ]
  },
  {
    "id": "academy-084",
    "listingIdentifier": "Educational Theory 42",
    "title": "The ICAP Framework",
    "slug": "the-icap-framework",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-08-28T08:00:00.000Z",
    "image": "/images/academy/covers/academy-084-the-icap-framework.png",
    "summaryAudio": "/audio/academy/academy-084-the-icap-framework-summary.m4a",
    "tags": [
      "ICAP",
      "cognitive engagement",
      "learning activities"
    ],
    "imageAlt": "Two adult learners compare and revise diagrams of a plant growing toward light while an educator listens to their shared explanation.",
    "summaryAudioTitle": "Listen to The ICAP Framework",
    "shortSummary": "How the ICAP framework helps teachers distinguish doing something with material, producing new ideas, and building understanding through substantive interaction.",
    "fullSummary": "The ICAP framework distinguishes four modes of engagement: passive, active, constructive, and interactive. Developed by Chi and colleagues, it uses learners' observable activities as clues to the kinds of cognitive work they may be doing. The framework proposes that, under suitable conditions, constructive and interactive work can support deeper learning than simply receiving or manipulating information. It is a design hypothesis with caveats, not a device for reading minds from classroom behavior.\n\nPassive engagement includes receiving an explanation without an observable additional activity. Active engagement involves manipulating or selecting supplied information, such as highlighting a sentence. Constructive engagement produces something beyond what was explicitly given, such as an inference, explanation, or new connection. Interactive engagement involves participants responding substantively to one another's contributions so that understanding is built jointly. Sitting in a group does not automatically make an activity interactive, and moving objects does not automatically make it constructive.\n\nConsider a short explanation of why a plant near a window bends toward light. A learner who reads the explanation is receiving information. A learner who highlights the sentence about unequal growth is selecting it. A learner who draws a new diagram and explains how different growth on opposite sides changes the stem's direction is constructing a representation. Two learners who compare diagrams, challenge an unclear arrow, and revise their shared explanation are engaged in a more substantive interaction. The intended category depends on what their activity actually adds.\n\nThis distinction can improve lesson planning. Instead of asking whether a worksheet looks busy, ask what learners must produce and how that production relates to the concept. A constructive prompt might require explaining a prediction or identifying a missing assumption. An interactive task should require learners to engage with one another's reasoning rather than split work into isolated pieces. Teachers can provide roles or prompts, but the response must remain meaningful; a scripted exchange of agreement may contain little joint thinking.\n\nObservation has limits. A quiet learner may be making sophisticated inferences, while an animated discussion may recycle misconceptions. Overt behavior is therefore an imperfect indicator of cognitive engagement. Prior knowledge, task difficulty, feedback, and the accuracy of ideas also affect learning. The framework should not be used to penalize a learner who needs a different communication mode or to declare listening educationally worthless. Receiving a clear explanation can be necessary preparation for later construction and interaction.\n\nA practical use is to review one existing lesson and redesign a pivotal moment. Identify what learners currently do, propose a task that requires a useful inference, and add an opportunity to compare and revise explanations. Then inspect the resulting reasoning and a later independent task. If the redesign merely increases talk or written volume, revise it. ICAP directs attention to the quality of learners' intellectual contributions: what they notice, what they add, and how their ideas change through engagement with others and with evidence.",
    "coreIdeas": [
      "ICAP distinguishes receiving, manipulating, generating, and jointly developing ideas.",
      "Interactive engagement requires substantive responses to others’ reasoning, not merely group seating or turn-taking.",
      "Use observable activity as an imperfect design clue and verify understanding through learners’ reasoning and later performance."
    ],
    "educationConnection": "Redesign a plant-growth explanation so learners generate a diagram, compare competing interpretations, and revise their account before an independent application task.",
    "relatedConcepts": [
      "Constructive engagement",
      "Co-construction",
      "Active learning"
    ],
    "sourceUrls": [
      {
        "label": "Chi and Wylie: The ICAP Framework",
        "url": "https://education.asu.edu/sites/default/files/lcl/chiwylie2014icap_2.pdf"
      },
      {
        "label": "Arizona State University ICAP Center: Research",
        "url": "https://icap.education.asu.edu/research"
      }
    ]
  }
];
