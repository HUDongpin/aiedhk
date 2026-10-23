import type { AcademyLesson } from "@/lib/types";

export const academyRelease20260919To20260925: AcademyLesson[] = [
  {
    "id": "academy-127",
    "listingIdentifier": "AI Knowledge 64",
    "title": "Knowledge Graphs for Educational AI",
    "slug": "knowledge-graphs-for-educational-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-19T08:00:00.000Z",
    "image": "/images/academy/covers/academy-127-knowledge-graphs-for-educational-ai.png",
    "summaryAudio": "/audio/academy/academy-127-knowledge-graphs-for-educational-ai-summary.m4a",
    "shortSummary": "A knowledge graph represents entities and explicit relationships, supporting structured educational queries while making the quality, provenance, and limits of those relationships important design questions.",
    "fullSummary": "A list of course titles cannot directly answer which lessons depend on proportional reasoning or which resources support a particular learning objective. A knowledge graph makes such relationships explicit. It represents entities, such as concepts, lessons, resources, and authors, together with named relationships between them. The graph can then support queries that follow those connections instead of relying only on matching words.\n\nIn an RDF-style representation, a statement can be expressed as a subject, a predicate, and an object. For example, a particular lesson may have a relationship meaning introduces to a concept. Stable identifiers help distinguish two entities with similar names and connect references to the same entity. A shared vocabulary defines what relationships mean. A prerequisite relationship should not silently mean the same thing as related topic, recommended next lesson, or frequently studied together.\n\nSuppose a teacher education programme builds a small graph for mathematics resources. It connects fraction equivalence to a lesson, links that lesson to its learning objectives, and records which earlier ideas the designers regard as prerequisites. An instructor asks for resources that address equivalence and have an accessible text alternative. The system follows explicit relationships and filters the results. It can show the supporting links, making the answer easier to inspect than an unexplained recommendation.\n\nThe hardest work often concerns the content of those links. A prerequisite judgment may depend on the course sequence or learner population. A resource may support only part of an objective. A relationship inferred by a language model can look plausible while being wrong. Store provenance, dates, and review status where needed, and distinguish asserted facts from tentative inferences. Missing links should not automatically be treated as proof that a relationship does not exist.\n\nKnowledge graphs can work alongside language models. A model may help extract candidate relationships from documents, while a graph supplies structured information for retrieval or checking. The combination does not make generated answers automatically correct. Entity matching can fail, queries can be wrong, and the graph can become outdated. Graph completion methods also predict likely links; they do not turn predictions into verified educational knowledge. Human review should focus on relationships that affect learner pathways or important decisions.\n\nA practical learning activity uses a dozen concepts and resources on cards. Learners label the relationships, write a query, and inspect which conclusions their graph permits. Then introduce an ambiguous prerequisite and ask what extra context is needed. This exercise reveals that a graph's usefulness comes from meaningful structure and maintained evidence, not from the visual density of its diagram. Begin with a narrow educational question, use a vocabulary people can understand, and test the answers against known cases. Expand the graph only when the additional relationships support real teaching or learning needs and can be kept accurate over time.",
    "coreIdeas": [
      "Knowledge graphs encode entities and explicitly typed relationships.",
      "Stable identifiers, vocabulary, provenance, and context determine what graph statements mean.",
      "Graph queries and predicted links require validation against the educational question."
    ],
    "educationConnection": "Build a small resource-concept graph, query for accessible lessons, and discuss whether a proposed prerequisite is justified.",
    "relatedConcepts": [
      "RDF triples",
      "Ontology",
      "Entity linking"
    ],
    "tags": [
      "knowledge graphs",
      "educational resources",
      "structured knowledge"
    ],
    "imageAlt": "A teacher and two adult learners arrange illustrated lesson cards and discuss the relationships connecting them in a small knowledge graph.",
    "summaryAudioTitle": "Listen to Knowledge Graphs for Educational AI",
    "sourceUrls": [
      {
        "label": "Hogan and colleagues: Knowledge Graphs",
        "url": "https://arxiv.org/abs/2003.02320"
      },
      {
        "label": "W3C: RDF 1.1 Concepts and Abstract Syntax",
        "url": "https://www.w3.org/TR/rdf11-concepts/"
      }
    ]
  },
  {
    "id": "academy-128",
    "listingIdentifier": "Educational Theory 64",
    "title": "Learning with Multiple External Representations",
    "slug": "learning-with-multiple-external-representations",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-19T08:00:00.000Z",
    "image": "/images/academy/covers/academy-128-learning-with-multiple-external-representations.png",
    "summaryAudio": "/audio/academy/academy-128-learning-with-multiple-external-representations-summary.m4a",
    "shortSummary": "Multiple representations help when their roles and connections are clear. Ainsworth’s DeFT framework considers design, function, and the tasks learners must perform to coordinate them.",
    "fullSummary": "A lesson places an animation, equation, graph, and paragraph on one screen. The variety looks helpful, but learners may not know how the displays connect. Learning with multiple external representations concerns the design of these combinations. The question is not simply whether two formats are better than one, but what each contributes and what cognitive work is required to use them together.\n\nAinsworth's DeFT framework examines design, functions, and tasks. Design includes choices about the number, form, and presentation of representations. Functions include complementing one another, constraining interpretation, and supporting a deeper understanding through connections. Tasks include understanding each representation and translating or coordinating information across them. The framework explains why an additional display can help in one situation and create difficulty in another.\n\nComplementary representations may highlight different information. A table provides exact values while a graph makes a trend easier to see. One representation can also constrain a misleading interpretation of another: a written description can clarify that a line on a graph describes change over time rather than a physical path. Building connections can support abstraction, but those connections require attention and prior knowledge. They are not guaranteed by presenting everything simultaneously.\n\nConsider a lesson about filling a container at a constant rate. Learners watch a short demonstration, record water height over time, and examine a height-time graph. For a container that widens upward, equal additions of water produce progressively smaller increases in height. The teacher pauses the demonstration, asks students to predict the next graph segment, and points to corresponding intervals in the table. Learners explain how the container's shape relates to the changing slope. A later example with a different shape tests whether the connections have become usable.\n\nThe teacher should introduce conventions before expecting coordination. Label axes, use consistent units, and explain which table row corresponds to which part of the event. Avoid unnecessary animation, competing colour systems, or decorative diagrams. Sometimes a sequence is more manageable than a simultaneous display. Sometimes learners benefit from constructing a representation themselves. The choice depends on the goal and on whether students can already interpret the component representations.\n\nThis design perspective is distinct from representational competence, which describes what learners can do. It helps educators decide which environment might support that competence. Assessment should ask learners to translate, predict, explain mismatches, and choose an appropriate representation, not simply recognize a familiar screen. AI-generated materials deserve the same checks: a polished graph may contradict the accompanying equation or use an inappropriate scale. Compare each element with the underlying relationship and test the links between elements. Multiple representations are educationally valuable when their differences and connections serve the learning task; adding more media without that purpose can increase effort while leaving understanding unchanged.",
    "coreIdeas": [
      "Representations can complement information, constrain interpretation, or support deeper connections.",
      "Learners must understand each form and coordinate information across forms.",
      "Design the number, sequence, conventions, and links around the intended cognitive task."
    ],
    "educationConnection": "Connect container shape, a filling demonstration, a table, and a graph through prediction and correspondence questions.",
    "relatedConcepts": [
      "DeFT framework",
      "Representational coordination",
      "Complementary representations"
    ],
    "tags": [
      "multiple representations",
      "instructional design",
      "DeFT"
    ],
    "imageAlt": "A teacher and two adult learners connect water levels in a widening container with observation sketches and an increasing curve that gradually flattens.",
    "summaryAudioTitle": "Listen to Learning with Multiple External Representations",
    "sourceUrls": [
      {
        "label": "Ainsworth: DeFT Framework",
        "url": "https://www.researchgate.net/publication/222410911_DeFT_A_conceptual_framework_for_learning_with_multiple_representations_Learning_and_Instruction_16_183-198"
      },
      {
        "label": "Dufresne, Gerace, and Leonard: Multiple Representations in Physics",
        "url": "https://srri.umass.edu/publications/dufresne-1997spp/"
      }
    ]
  },
  {
    "id": "academy-129",
    "listingIdentifier": "AI Knowledge 65",
    "title": "Neuro-Symbolic AI",
    "slug": "neuro-symbolic-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-20T08:00:00.000Z",
    "image": "/images/academy/covers/academy-129-neuro-symbolic-ai.png",
    "summaryAudio": "/audio/academy/academy-129-neuro-symbolic-ai-summary.m4a",
    "shortSummary": "Neuro-symbolic AI combines learned pattern recognition with explicit structures such as rules or programs. The combination can support particular tasks, but correctness depends on both components and their connection.",
    "fullSummary": "A system may recognize handwriting well yet make unreliable arithmetic judgments. Another system can apply exact arithmetic rules but cannot interpret a photograph of a worksheet. Neuro-symbolic AI explores combinations of learned neural components with symbolic representations or operations. The aim is to use different computational strengths together rather than assume that one technique will solve every part of a task.\n\nNeural components learn patterns from examples, such as mapping an image to likely digits. Symbolic components work with explicit objects, relationships, rules, or programs. Their outputs can be combined in several ways. A neural model might provide inputs to a rule-based reasoner, logical constraints might influence training, or a system might learn parts of a symbolic procedure. Neuro-symbolic therefore describes a family of designs rather than one standard architecture.\n\nDeepProbLog is an example that combines neural networks with probabilistic logic programming. Logic Tensor Networks illustrate another approach in which logical knowledge and learned numerical representations interact. These research systems demonstrate particular combinations under specified conditions. They do not establish that adding logic to a model makes every answer explainable, correct, or educationally valuable. The symbolic vocabulary and rules still need to fit the problem.\n\nImagine a hypothetical tool checking handwritten addition exercises. An image model proposes possible digits, including uncertainty where the writing is ambiguous. A symbolic arithmetic component evaluates the resulting expressions. If the image could be either three or eight, the tool should preserve that ambiguity rather than announce a definitive error. A teacher sees the interpreted expression and can correct it. The calculation stage may be exact while the overall conclusion remains uncertain because the input interpretation is uncertain.\n\nEvaluation should separate these stages. Use clearly printed expressions to test arithmetic, ambiguous images to test recognition, and complete worksheets to test the combined workflow. A failure may come from perception, incorrect rules, mismatched representations, or the way uncertainty is passed between components. Showing an internal rule trace is useful only if the trace accurately represents the system's operation and is understandable to the person reviewing it. It does not by itself establish the validity of the original input.\n\nFor classroom learning, students can build a small pipeline using fictional examples: identify symbols, form an expression, apply rules, and explain the result. Give the pipeline one uncertain symbol and one incorrect rule so learners can distinguish failure types. Discuss which parts require learned judgment and which can be checked deterministically. In educational products, keep the task bounded and compare the hybrid design with simpler alternatives. The central benefit to investigate is whether the combination provides a more reliable and inspectable solution to a particular problem. It should not be marketed as a general escape from the limitations of either machine learning or formal reasoning.",
    "coreIdeas": [
      "Neuro-symbolic systems combine learned components with explicit rules, structures, or programs.",
      "The connection between perception and reasoning is itself a possible source of error.",
      "Evaluate component performance and end-to-end conclusions, preserving input uncertainty."
    ],
    "educationConnection": "Build a handwriting-to-arithmetic pipeline on fictional examples and distinguish recognition errors from rule errors.",
    "relatedConcepts": [
      "Probabilistic logic",
      "Symbolic reasoning",
      "Hybrid AI"
    ],
    "tags": [
      "neuro-symbolic AI",
      "reasoning",
      "hybrid systems"
    ],
    "imageAlt": "A computing educator and two learners connect hand-drawn triangles with recognized symbols and a simple rule-checking diagram.",
    "summaryAudioTitle": "Listen to Neuro-Symbolic AI",
    "sourceUrls": [
      {
        "label": "Manhaeve and colleagues: DeepProbLog",
        "url": "https://arxiv.org/abs/1805.10872"
      },
      {
        "label": "Serafini and Garcez: Logic Tensor Networks",
        "url": "https://arxiv.org/abs/1606.04422"
      }
    ]
  },
  {
    "id": "academy-130",
    "listingIdentifier": "Educational Theory 65",
    "title": "Analogical Reasoning",
    "slug": "analogical-reasoning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-20T08:00:00.000Z",
    "image": "/images/academy/covers/academy-130-analogical-reasoning.png",
    "summaryAudio": "/audio/academy/academy-130-analogical-reasoning-summary.m4a",
    "shortSummary": "Analogical reasoning uses relationships in a familiar situation to understand a new one. Useful analogies make the mapping explicit and identify where the comparison stops working.",
    "fullSummary": "A teacher compares an equation to a balanced scale. The scale helps learners reason about maintaining equality when the same change is made to both sides. The usefulness lies in a relationship that can be carried from one situation to another. Analogical reasoning uses a source situation to understand or solve a target situation, often despite differences in their surface appearance.\n\nGentner's structure-mapping theory emphasizes relational structure. A strong analogy maps relationships among objects rather than simply matching visible features. The teacher is not suggesting that numbers are made of metal or that an equals sign has a physical hinge. The relevant connection is that coordinated changes preserve a relationship. Making that selection explicit helps learners use the analogy without importing irrelevant properties.\n\nAnalogical reasoning involves several demands. A learner must understand the source, notice its relevance, identify correspondences, and judge which inferences are legitimate. The teacher's familiarity with an analogy does not guarantee the learner's familiarity. A comparison involving an unfamiliar sport or technology can create a second problem instead of clarifying the first. Even a familiar source may invite an incorrect mapping if the relationships are left implicit.\n\nIn an adult mathematics class, the teacher presents a balance diagram representing an unknown quantity plus three units equal to seven units. Learners remove three units from each side and connect the action to subtracting three from both sides of the equation. They then explain which part of the diagram corresponds to each symbol. A second equation requires dividing both sides by the same nonzero number. Students discuss how grouping equal weights can illustrate that operation and where a physical balance becomes awkward, especially with negative quantities.\n\nThe limits belong in the lesson. A scale analogy can support equality while becoming less helpful for some algebraic operations or number systems. Teachers should identify those boundaries and move toward the mathematical structure rather than stretch the analogy indefinitely. Asking learners to compare two examples can help reveal a common relationship, but comparison needs prompts and feedback. Similar-looking cases can operate by different principles, and superficially different cases can share the same structure.\n\nAssessment should examine whether students can use the relationship in a new case and explain why it applies. Ask for a mapping, a justified inference, and a feature that must not transfer. AI-generated analogies require this same scrutiny: vividness and familiarity do not establish mathematical or scientific validity. A practical planning routine is to name the target idea, check that learners understand the source, list the correspondences, and state at least one limitation. Analogical reasoning becomes a disciplined bridge when those relationships are inspected. Without that discipline, a memorable comparison can preserve a misconception as effectively as it can support understanding.",
    "coreIdeas": [
      "Analogies transfer relational structure rather than every property of a familiar situation.",
      "Learners need support to understand the source, map correspondences, and evaluate inferences.",
      "Explicit boundaries and new cases distinguish useful reasoning from superficial similarity."
    ],
    "educationConnection": "Map a balanced scale to an equation, justify operations, and identify where the analogy becomes inadequate.",
    "relatedConcepts": [
      "Structure mapping",
      "Relational similarity",
      "Analogical transfer"
    ],
    "tags": [
      "analogy",
      "reasoning",
      "transfer"
    ],
    "imageAlt": "A mathematics teacher and two adult learners connect a balanced scale with a sketch showing the same change on both sides.",
    "summaryAudioTitle": "Listen to Analogical Reasoning",
    "sourceUrls": [
      {
        "label": "Gentner: Structure-Mapping",
        "url": "https://groups.psych.northwestern.edu/gentner/papers/Gentner83.2b.pdf"
      },
      {
        "label": "Northwestern Qualitative Reasoning Group: Structure-Mapping Model",
        "url": "https://www.qrg.northwestern.edu/ideas/smeidea.htm"
      }
    ]
  },
  {
    "id": "academy-131",
    "listingIdentifier": "AI Knowledge 66",
    "title": "Constraint Satisfaction and Scheduling",
    "slug": "constraint-satisfaction-and-scheduling",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-21T08:00:00.000Z",
    "image": "/images/academy/covers/academy-131-constraint-satisfaction-and-scheduling.png",
    "summaryAudio": "/audio/academy/academy-131-constraint-satisfaction-and-scheduling-summary.m4a",
    "shortSummary": "Constraint satisfaction models scheduling as variables, allowed values, and requirements. A solver can find feasible combinations, but people must define which conditions are mandatory and which tradeoffs are acceptable.",
    "fullSummary": "A school timetable must place classes into rooms and time slots without double-booking teachers. Some rooms have specialist equipment, some learners need accessible routes, and staff may have preferences about consecutive lessons. Constraint satisfaction turns such a problem into an explicit model. Instead of asking an AI system to invent a plausible-looking timetable, the institution specifies variables, possible values, and relationships that acceptable assignments must satisfy.\n\nA variable might represent the time slot for a class. Its domain contains the slots it is allowed to occupy. A constraint may require two classes taught by the same teacher to occur at different times. Capacity and equipment requirements add further conditions. A feasible solution satisfies all hard constraints. Optimization goes further by selecting among feasible solutions according to an objective, such as reducing unwanted gaps or balancing room use.\n\nThe distinction between hard and soft conditions is consequential. A teacher preference may be negotiable; a required accessibility provision should not casually become a penalty that the solver can trade away. Objective weights encode judgments about whose inconvenience matters. The computer cannot decide those values merely by searching more efficiently. Stakeholders need to review the model before interpreting its output as a fair or workable schedule.\n\nConsider an illustrative training day with four workshops, two rooms, and three time slots. One workshop needs a laboratory, two share an instructor, and a participant group must attend both introductory sessions. Learners first try scheduling with cards. They then write variables and constraints and compare their hand-built schedule with a solver's proposal. Adding a new requirement may make the model infeasible. Rather than silently dropping a rule, the group identifies the conflict and discusses an authorized change, such as adding a slot or changing a workshop's duration.\n\nPractical solvers use search, propagation, and other techniques to narrow possibilities. OR-Tools documents a CP-SAT solver and scheduling examples that illustrate explicit modelling. Solver status matters: a feasible solution is not necessarily proven optimal, and a time limit may prevent either finding a solution or proving that none exists. Reports should state what the solver actually established. A polished timetable alone does not reveal that distinction.\n\nThe model is also only as complete as its inputs. It can miss walking time, informal duties, equipment setup, or a recently changed room capacity. Test a proposed schedule against real operational requirements and invite corrections from affected people. An AI assistant can help draft constraints, but those translations need inspection before a solver runs. For teaching, the most useful outcome is often a clear account of assumptions and tradeoffs rather than a complex schedule. Constraint satisfaction shows how precise requirements make computation accountable, while reminding us that a technically feasible answer still requires human judgment about the situation it is meant to serve.",
    "coreIdeas": [
      "Variables, domains, and constraints define the space of feasible schedules.",
      "Hard requirements and optimization preferences express different commitments.",
      "Solver status and model completeness determine what a proposed schedule actually establishes."
    ],
    "educationConnection": "Model a four-workshop training day, introduce a conflict, and distinguish infeasibility from a merely suboptimal schedule.",
    "relatedConcepts": [
      "Constraint propagation",
      "Feasibility",
      "Combinatorial optimization"
    ],
    "tags": [
      "constraint satisfaction",
      "scheduling",
      "optimization"
    ],
    "imageAlt": "An educator and two adult learners move illustrated workshop cards between available timetable slots while checking a room-resource diagram.",
    "summaryAudioTitle": "Listen to Constraint Satisfaction and Scheduling",
    "sourceUrls": [
      {
        "label": "Google OR-Tools: CP-SAT Solver",
        "url": "https://developers.google.com/optimization/cp/cp_solver"
      },
      {
        "label": "Google OR-Tools: Employee Scheduling",
        "url": "https://developers.google.com/optimization/scheduling/employee_scheduling"
      }
    ]
  },
  {
    "id": "academy-132",
    "listingIdentifier": "Educational Theory 66",
    "title": "Case-Based Reasoning",
    "slug": "case-based-reasoning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-21T08:00:00.000Z",
    "image": "/images/academy/covers/academy-132-case-based-reasoning.png",
    "summaryAudio": "/audio/academy/academy-132-case-based-reasoning-summary.m4a",
    "shortSummary": "Case-based reasoning uses a relevant previous experience to interpret and respond to a new situation, with adaptation, testing, and reflection rather than direct copying.",
    "fullSummary": "An experienced teacher encounters a discussion in which several learners remain silent. A previous lesson comes to mind, but the teacher also notices that the present group has different language needs and a different task. Case-based reasoning describes reasoning from particular prior situations. A useful case includes context, the problem, actions taken, outcomes, and explanations of why those actions helped or failed.\n\nA common computational account describes a cycle of retrieving, reusing, revising, and retaining cases. Retrieve a relevant case, adapt its solution to the new situation, evaluate and revise the result, and retain what has been learned for future use. The cycle also offers a useful educational design idea, provided it is not treated as a complete description of every human decision. A collection of stories becomes more valuable when learners know how to index, compare, and question them.\n\nRelevance is the central challenge. Two cases can share obvious features while differing in the relationship that matters. A quiet group may reflect uncertainty about content, fear of public error, inaccessible materials, or an unclear discussion task. Retrieving only cases labelled low participation could hide those differences. Cases should therefore include the conditions and reasoning behind an intervention, not merely a successful technique and a positive outcome.\n\nIn a teacher education seminar, participants study a fictional case where individual writing followed by paired discussion improved the visibility of learners' ideas. They then receive a second case involving a student who cannot access the assigned text. Groups explain which features are similar, which differ, and why repeating the earlier participation routine would be insufficient. They propose an adapted response that first addresses access, then plan what evidence would show whether participation and understanding improved.\n\nReflection makes a case reusable. Ask learners to record the problem as they initially understood it, the evidence that changed their interpretation, their selected action, and the eventual result. Include unsuccessful cases and unresolved outcomes. A case library containing only polished successes can encourage overconfidence and conceal the conditions required for success. Protect privacy when using classroom experiences, and avoid turning identifiable learners into permanent examples of difficulty.\n\nCase-based reasoning can support professional learning, but an anecdote is not a causal estimate. A method that worked in one classroom may have coincided with other changes, and remembered events can be selective. Compare cases with broader research, local evidence, and the perspectives of people involved. AI-assisted retrieval can locate candidate cases quickly, but the system's similarity score is not a professional judgment. Assess learners on their reasoning about relevance, adaptation, and verification rather than their ability to recall the most familiar story. The goal is to make experience available for thoughtful use while preserving the uncertainty and context that prevent experience from becoming an inflexible recipe.",
    "coreIdeas": [
      "Cases preserve context, actions, outcomes, and explanations for future reasoning.",
      "Retrieval must distinguish meaningful relationships from superficial resemblance.",
      "Adaptation, testing, and reflection turn remembered experience into a revisable resource."
    ],
    "educationConnection": "Compare two fictional participation cases and explain why a previously useful routine needs adaptation when the underlying barrier changes.",
    "relatedConcepts": [
      "Case retrieval",
      "Adaptation",
      "Reflective practice"
    ],
    "tags": [
      "case-based reasoning",
      "professional learning",
      "case learning"
    ],
    "imageAlt": "A South Asian man lecturer and Black and White adult teachers compare two annotated classroom case sheets in a warm seminar room.",
    "summaryAudioTitle": "Listen to Case-Based Reasoning",
    "sourceUrls": [
      {
        "label": "Aamodt and Plaza: Case-Based Reasoning",
        "url": "https://www.iiia.csic.es/~enric/papers/Aamodt_1994_Case.pdf"
      },
      {
        "label": "Kolodner and Guzdial: Theory and Practice of Case-Based Learning Aids",
        "url": "https://www.cs.auckland.ac.nz/~ian/CBR/kolodner.pdf"
      }
    ]
  },
  {
    "id": "academy-133",
    "listingIdentifier": "AI Knowledge 67",
    "title": "Search and Planning in AI",
    "slug": "search-and-planning-in-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-133-search-and-planning-in-ai.png",
    "summaryAudio": "/audio/academy/academy-133-search-and-planning-in-ai-summary.m4a",
    "shortSummary": "Search and planning represent possible states and actions to find a route toward a goal. Their usefulness depends on the model, costs, constraints, and evidence that actions work as expected.",
    "fullSummary": "A robot needs to reach a destination, and a timetable system needs to reach a valid assignment. Both can be understood as finding a route through possible states. Search explores those possibilities. Planning adds an explicit account of actions and their conditions and effects. These ideas predate modern language models and remain useful for understanding how a system can choose a sequence rather than merely produce a plausible description of one.\n\nA search problem specifies an initial state, possible actions, resulting states, a goal test, and sometimes action costs. Different algorithms decide which possibilities to explore first. Breadth-first search expands shallow possibilities, while cost-based methods prioritize accumulated cost. Informed search uses a heuristic, an estimate that guides exploration toward promising states. A heuristic can save effort, but its properties and the search procedure determine what guarantees are justified.\n\nFor example, A-star search combines the cost already incurred with an estimate of the remaining cost. Under appropriate conditions, including suitable heuristic properties, it can find a least-cost solution. This is not a general promise that any AI-generated plan is optimal. A language model's confident preference is not automatically a valid heuristic, and a natural-language task may lack the precise state and action model needed for a formal guarantee.\n\nImagine a campus navigation lesson using a fictional map. Learners seek a route from a library to a laboratory. They first minimize distance, then add a requirement to avoid stairs and allow time for a locked gate to open. The state may now need to include time as well as location. A shortest line on the map is no longer necessarily a feasible route. Students compare how the model changes the search and explain why an omitted constraint produces an unusable answer.\n\nPlanning in an educational assistant involves similar distinctions. Drafting a study schedule requires assumptions about available time, dependencies, and the effects of practice. Those effects are uncertain and cannot be treated like guaranteed moves on a board. A useful system monitors progress, checks whether actions occurred, and revises the plan when circumstances change. It should distinguish a proposed action from an executed action and a completed action from an achieved learning outcome.\n\nA classroom activity can trace a small search tree and compare the number of states explored under two strategies. Follow this with a discussion of what the representation leaves out. Formal search is powerful when a task has a clear structure, but large or uncertain environments can make exact planning costly or inappropriate. Evaluate success against the actual goal, including safety and resource constraints. The educational lesson is that a plan is an argument about how actions change a situation, and that argument needs a trustworthy model and feedback from execution.",
    "coreIdeas": [
      "Search needs explicit states, actions, goals, and costs.",
      "Heuristics guide exploration, while guarantees depend on the algorithm and assumptions.",
      "Real-world planning requires execution checks and revision when the model is incomplete or uncertain."
    ],
    "educationConnection": "Compare campus routes under distance, accessibility, and time constraints, then explain which state information each plan requires.",
    "relatedConcepts": [
      "State space",
      "Heuristic search",
      "Planning under uncertainty"
    ],
    "tags": [
      "AI search",
      "planning",
      "heuristics"
    ],
    "imageAlt": "A Black woman teacher and White and East Asian adult learners trace routes on a simple campus map in a bright classroom.",
    "summaryAudioTitle": "Listen to Search and Planning in AI",
    "sourceUrls": [
      {
        "label": "UC Berkeley CS188: Search",
        "url": "https://inst.eecs.berkeley.edu/~cs188/textbook/search/"
      },
      {
        "label": "UC Berkeley CS188: Informed Search",
        "url": "https://inst.eecs.berkeley.edu/~cs188/textbook/search/informed.html"
      }
    ]
  },
  {
    "id": "academy-134",
    "listingIdentifier": "Educational Theory 67",
    "title": "Problem-Based Learning",
    "slug": "problem-based-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-22T08:00:00.000Z",
    "image": "/images/academy/covers/academy-134-problem-based-learning.png",
    "summaryAudio": "/audio/academy/academy-134-problem-based-learning-summary.m4a",
    "shortSummary": "Problem-based learning organizes inquiry around a substantial problem that reveals what learners need to know. Facilitation, targeted study, application, and reflection make the problem a vehicle for learning.",
    "fullSummary": "A class is asked why a school garden's plants are failing despite regular watering. Learners have partial information and several plausible explanations. Problem-based learning uses a substantial problem like this to organize the acquisition and application of knowledge. Learners identify what they already know, propose explanations, determine what they need to learn, investigate, and return to the problem with better-informed reasoning.\n\nThe problem is an instructional starting point rather than merely an exercise after all relevant content has been taught. It should create a reason to study important concepts and allow meaningful inquiry. In many implementations, learners work in small groups with a facilitator. The facilitator asks questions, monitors participation, models useful reasoning, and helps the group identify knowledge gaps. This is guided learning, not an expectation that novices independently discover everything they need.\n\nIn the garden example, students initially list water, light, soil, and disease as possibilities. The teacher provides observations and helps them distinguish a testable explanation from a guess. Groups identify learning needs about drainage, root function, and fair comparisons. After targeted reading and instruction, they design a limited investigation and revise their explanation. They then state which evidence supports it and which alternatives remain possible. The teacher checks individual understanding of the scientific ideas, not just the quality of the group's recommendation.\n\nThe cycle needs structure. Resources should be credible and accessible, tasks should match the available time, and group roles should support participation without fragmenting the learning. If each learner studies only one component and never integrates the others, the group may produce an answer while individuals retain major gaps. Whole-group synthesis, explanation, and individual follow-up tasks help make the learning visible. Direct instruction can be introduced when a shared gap prevents productive progress.\n\nProblem-based learning overlaps with inquiry and project work, but its organizing emphasis is the problem and the learning needed to understand or address it. A lengthy public product is not required. Research and practice span different disciplines and implementations, so effects should not be generalized from one version to all others. The quality of the problem, facilitation, prior knowledge, and assessment all influence what students have an opportunity to learn.\n\nFor educators, begin by identifying the concepts and reasoning that the problem should develop. Anticipate likely explanations and prepare questions that help learners evaluate them. Make room for uncertainty without allowing unsupported claims to stand as conclusions. AI tools may help locate candidate resources or generate alternative explanations, but students must check sources and explain their reasoning. Evaluate both the proposed solution and the learning process through evidence use, conceptual explanations, collaboration, and individual transfer. A successful activity leaves learners better able to investigate another problem, rather than merely satisfied that this one has been completed.",
    "coreIdeas": [
      "A substantial problem creates a purpose for identifying and addressing learning needs.",
      "Facilitators guide inquiry, reasoning, participation, and integration of new knowledge.",
      "Assess individual conceptual learning as well as the proposed group response."
    ],
    "educationConnection": "Investigate a fictional school-garden problem through hypotheses, targeted study, evidence, revised explanation, and an individual transfer task.",
    "relatedConcepts": [
      "Learning issues",
      "Facilitated inquiry",
      "Self-directed learning"
    ],
    "tags": [
      "problem-based learning",
      "inquiry",
      "facilitation"
    ],
    "imageAlt": "A White woman science teacher and Black and South Asian adult learners examine a potted plant and annotated leaf sketches in an open notebook.",
    "summaryAudioTitle": "Listen to Problem-Based Learning",
    "sourceUrls": [
      {
        "label": "Savery: Overview of Problem-Based Learning",
        "url": "https://docs.lib.purdue.edu/ijpbl/vol1/iss1/3/"
      },
      {
        "label": "Hmelo-Silver: What and How Do Students Learn",
        "url": "https://docdrop.org/static/drop-pdf/Hmelo-Silver2004-ZZaX8.pdf"
      }
    ]
  },
  {
    "id": "academy-135",
    "listingIdentifier": "AI Knowledge 68",
    "title": "Multi-Agent Coordination",
    "slug": "multi-agent-coordination",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-135-multi-agent-coordination.png",
    "summaryAudio": "/audio/academy/academy-135-multi-agent-coordination-summary.m4a",
    "shortSummary": "Multi-agent coordination divides work among interacting AI processes. It can support specialization and parallel work, but adds communication, verification, and shared-state problems that need explicit control.",
    "fullSummary": "An AI workflow may use one process to find sources, another to draft an explanation, and a third to check calculations. Multi-agent coordination concerns how such processes divide work, communicate, share information, and decide when the task is complete. An agent here is a computational component with a role, context, and available actions. Several named agents do not necessarily represent independent expertise or independent evidence.\n\nCoordination can take different forms. A central coordinator may assign bounded tasks and integrate results. Agents may pass work through a sequence, or several may propose alternatives before a selection step. Systems such as AutoGen and CAMEL illustrate approaches to agent conversation and role assignment. Their existence demonstrates design possibilities, not a guarantee that more agents improve every task or make human review unnecessary.\n\nThe interfaces between agents are important. Each needs a clear input, expected output, authority boundary, and stopping condition. Shared files or records require ownership rules so that one agent does not overwrite another's work. Messages should distinguish observations, assumptions, recommendations, and completed actions. Otherwise, a confident draft can be mistaken for verified evidence, or a proposed tool operation can be reported as executed.\n\nImagine a department preparing a lesson about population growth. A source agent retrieves approved reference material, a mathematics agent checks a numerical example, and an editor integrates the explanation. Each returns evidence in a defined format. The editor checks that the numerical assumptions match the source material and that the citations support the final claims. A teacher then reviews the lesson against its learning objective. Parallel work helps only if the subtasks are sufficiently independent and the integration preserves their meaning.\n\nSeveral failure modes deserve attention. Agents using the same model may repeat the same misconception, so agreement is not equivalent to corroboration. One agent can pass an incorrect premise through the whole group. Long conversations can increase latency and cost without improving the result. Broad tool permissions create opportunities for unintended actions, and malicious content retrieved by one agent can influence others if it is treated as instruction. Verification should rely on external evidence and well-defined checks wherever possible.\n\nA classroom activity can simulate the workflow with human roles and fictional data. Give one role an incomplete source and ask the group to document how the uncertainty travels through the process. Compare the coordinated approach with one person following a clear checklist. Measure accuracy, time, communication effort, and unresolved disagreement. In an educational application, select the simplest arrangement that meets the need, restrict each agent's actions, and provide a human escalation route. Multi-agent coordination is a way of organizing computation; its educational value must be demonstrated through the quality of the completed work and the reliability of the process that produced it.",
    "coreIdeas": [
      "Agents need explicit roles, interfaces, authority boundaries, and completion criteria.",
      "Coordination adds communication and shared-state risks as well as possible specialization.",
      "Agreement among similar models is not independent evidence of correctness."
    ],
    "educationConnection": "Simulate source, calculation, and editor roles, track an uncertain claim through the workflow, and compare with a single checklist-based approach.",
    "relatedConcepts": [
      "Task decomposition",
      "Shared state",
      "Agent orchestration"
    ],
    "tags": [
      "multi-agent systems",
      "coordination",
      "AI workflows"
    ],
    "imageAlt": "An East Asian woman teacher and Black and White adult learners coordinate tasks using three annotated cards and a sparse workflow diagram.",
    "summaryAudioTitle": "Listen to Multi-Agent Coordination",
    "sourceUrls": [
      {
        "label": "Wu and colleagues: AutoGen",
        "url": "https://arxiv.org/abs/2308.08155"
      },
      {
        "label": "Li and colleagues: CAMEL",
        "url": "https://arxiv.org/abs/2303.17760"
      }
    ]
  },
  {
    "id": "academy-136",
    "listingIdentifier": "Educational Theory 68",
    "title": "Project-Based Learning",
    "slug": "project-based-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-23T08:00:00.000Z",
    "image": "/images/academy/covers/academy-136-project-based-learning.png",
    "summaryAudio": "/audio/academy/academy-136-project-based-learning-summary.m4a",
    "shortSummary": "Project-based learning organizes sustained study around a meaningful question and a developed product. Clear learning goals, instruction, feedback, and individual assessment distinguish it from simply making something.",
    "fullSummary": "A class spends several weeks designing a guide to reducing food waste in its college. Learners collect data, investigate causes, compare proposals, and revise a product for an audience. Project-based learning uses sustained work of this kind to organize learning. The project is a vehicle for developing important knowledge and capabilities, not merely an attractive activity added after the substantive teaching is over.\n\nProject designs vary, but common features include a meaningful question, extended inquiry, learner decisions, feedback, revision, and a product that communicates the work. PBLWorks offers one explicit design framework with these elements. It is useful as a planning resource, while its preferred design should not be treated as the only definition of project-based learning or as proof that every project will produce better outcomes.\n\nFor the food-waste project, the teacher begins with learning goals about measurement, proportional reasoning, evidence, and persuasive communication. Students agree on a manageable sampling method and collect non-identifying data. Short lessons address units, sampling limitations, and the difference between a measured pattern and an assumed cause. Teams propose a response, estimate its possible implications, and explain uncertainty. A draft guide receives feedback from peers and the intended audience before revision.\n\nThe product creates a reason to integrate knowledge, but it can also conceal gaps. One student may handle all calculations while another designs the pages. The group then produces a polished guide without every member understanding the evidence. Individual explanations, short transfer tasks, and rotating substantive responsibilities help reveal learning. Assessment should distinguish content understanding, quality of evidence, collaboration, and communication rather than collapsing everything into a single impression of presentation quality.\n\nProjects also require time, accessible resources, and careful management. Home support and access to equipment can influence what learners produce, so essential work and materials should be available within the course. Teachers may need to reduce scope, provide examples, or teach a method directly. An EEF evaluation of a particular secondary-school project-based programme found no clear positive impact on its measured literacy and engagement outcomes, with substantial limitations in the evaluation. That result cautions against universal promises while leaving room to examine other designs and outcomes.\n\nWhen planning, ask what students will learn that they could not demonstrate merely by delegating the product to an AI system. Require decisions, evidence trails, explanations, and revision records that make their thinking visible. Use AI assistance only where it supports the stated learning purpose and is transparently acknowledged. A final audience can make the work meaningful, but public sharing should respect consent and privacy. Evaluate the project through the intended knowledge and skills, the quality of participation, and what learners can do afterward. Completion of a product is an event; durable learning requires separate evidence.",
    "coreIdeas": [
      "A project should organize sustained inquiry toward explicit learning goals.",
      "Products need critique and revision, while individuals need opportunities to demonstrate understanding.",
      "Outcomes depend on design, instruction, resources, participation, and assessment rather than the project label."
    ],
    "educationConnection": "Develop a food-waste guide using measurement and proportional reasoning, with individual explanations and a transfer task alongside the group product.",
    "relatedConcepts": [
      "Driving question",
      "Critique and revision",
      "Authentic audience"
    ],
    "tags": [
      "project-based learning",
      "projects",
      "assessment"
    ],
    "imageAlt": "A South Asian woman teacher and Black and White adult learners review a food-waste project chart and an illustrated draft guide.",
    "summaryAudioTitle": "Listen to Project-Based Learning",
    "sourceUrls": [
      {
        "label": "PBLWorks: Essential Project Design Elements",
        "url": "https://www.pblworks.org/gold-standard/pbl-project-design"
      },
      {
        "label": "EEF: Project-Based Learning Trial",
        "url": "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/project-based-learning/"
      }
    ]
  },
  {
    "id": "academy-137",
    "listingIdentifier": "AI Knowledge 69",
    "title": "Tool Permissions and Least Privilege",
    "slug": "tool-permissions-and-least-privilege",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-137-tool-permissions-and-least-privilege.png",
    "summaryAudio": "/audio/academy/academy-137-tool-permissions-and-least-privilege-summary.m4a",
    "shortSummary": "Least privilege gives an AI tool only the access needed for its assigned task. Permissions must be enforced by the surrounding system, with clear boundaries between reading, drafting, and acting.",
    "fullSummary": "A teaching assistant can summarize a class document without needing permission to delete it. An agent that drafts a message does not automatically need authority to send it. Least privilege is the security principle of granting only the access necessary for an assigned function. When AI systems use tools, this principle helps limit the consequences of mistakes, ambiguous requests, and malicious instructions embedded in content.\n\nPermissions have several dimensions. A tool may read or modify information, access one course or many, act for one user or an entire institution, and operate for a limited period or indefinitely. A broad credential can quietly erase boundaries that the interface appears to preserve. The surrounding application must authenticate the user and authorize the specific action. A prompt telling the model to behave responsibly is not a substitute for those checks.\n\nConsider a hypothetical assistant that prepares weekly practice summaries. It needs to read approved practice results and create a draft for a teacher. It does not need to change grades, search unrelated student records, or publish the draft. A narrowly scoped service provides only the permitted information and actions. Before any later publication step, the teacher sees the intended audience and content. The authorization applies to that concrete action rather than granting open-ended control over the learning platform.\n\nTool design can make boundaries easier to enforce. A function that retrieves one authorized document is easier to constrain than a generic command that can access the whole filesystem. Inputs should be validated, and the backend should check permissions again when an action occurs. Temporary credentials, separation of duties, logging, and revocation routes can support the arrangement. Logs should record useful action evidence without becoming a new repository of unnecessary personal information.\n\nOWASP describes excessive agency in terms of excessive functionality, permissions, or autonomy. These distinctions help diagnose a risky workflow. A tool may expose operations the task never needs, hold broader access than the current user, or execute consequential changes without appropriate oversight. Reducing one dimension does not automatically fix the others. A read-only tool can still disclose sensitive information if its data scope is too broad.\n\nA useful educational exercise gives learners fictional tool cards showing actions, data scope, and expiry. Groups select the minimum set required for a study-planning assistant and explain why each permission is needed. Then introduce a retrieved document that instructs the assistant to send private notes elsewhere. Learners identify which system boundary should block the attempted action even if the model follows the text. Least privilege does not eliminate every AI risk, but it makes the relationship between purpose and authority explicit. Review permissions when tasks change, remove unused capabilities, and test denied actions as deliberately as successful ones.",
    "coreIdeas": [
      "Access should match the task across action type, data scope, identity, and duration.",
      "Authorization belongs in enforceable system boundaries rather than model instructions alone.",
      "Review excessive functionality, permissions, and autonomy separately."
    ],
    "educationConnection": "Assign minimal permissions to a fictional study assistant and test whether an injected instruction can cross the intended data or action boundary.",
    "relatedConcepts": [
      "Authorization",
      "Capability scope",
      "Excessive agency"
    ],
    "tags": [
      "tool permissions",
      "least privilege",
      "AI security"
    ],
    "imageAlt": "A Black man teacher and East Asian and White adult learners compare permission cards beside a course-access diagram.",
    "summaryAudioTitle": "Listen to Tool Permissions and Least Privilege",
    "sourceUrls": [
      {
        "label": "NIST: Least Privilege",
        "url": "https://csrc.nist.gov/glossary/term/least_privilege"
      },
      {
        "label": "OWASP: Excessive Agency",
        "url": "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/?lang=us"
      }
    ]
  },
  {
    "id": "academy-138",
    "listingIdentifier": "Educational Theory 69",
    "title": "Knowledge Building Theory",
    "slug": "knowledge-building-theory",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-24T08:00:00.000Z",
    "image": "/images/academy/covers/academy-138-knowledge-building-theory.png",
    "summaryAudio": "/audio/academy/academy-138-knowledge-building-theory-summary.m4a",
    "shortSummary": "Knowledge Building Theory treats ideas as improvable objects of shared work. Learners take collective responsibility for advancing understanding rather than only completing individual assignments.",
    "fullSummary": "A class investigates why some materials keep drinks warm longer than others. Students offer explanations, compare evidence, and revise a shared account over several lessons. Knowledge Building Theory, developed by Marlene Scardamalia and Carl Bereiter, focuses on this collective improvement of ideas. The community's developing understanding becomes a central object of work, alongside the learning of its individual members.\n\nThe approach distinguishes knowledge building from simply sharing information or participating in discussion. Ideas are treated as objects that can be questioned, connected, improved, and used to generate further problems. Learners help determine what the community needs to understand next. This involves epistemic agency: taking responsibility for goals, evidence, explanations, and improvement rather than waiting for the teacher to specify every intellectual move.\n\nCollective responsibility does not mean that everyone must agree or contribute identical work. Diverse ideas can reveal gaps and support better explanations. A group may develop a more inclusive account that incorporates useful parts of earlier proposals while resolving contradictions. This is sometimes described as rising above existing ideas. Such progress depends on engagement with the substance of claims, not on counting posts or treating all contributions as equally well supported.\n\nIn the warm-drink investigation, learners begin with competing explanations about thickness, trapped air, and surface material. They identify what evidence would distinguish those explanations and use safe, teacher-approved comparisons. A shared board records the current theories, supporting observations, and unresolved questions. After each investigation, students revise the account and explain why it changed. The teacher introduces relevant scientific concepts and helps the community connect its inquiry with reliable sources rather than letting misconceptions circulate indefinitely.\n\nTechnology can make the history of ideas visible through linked notes, revisions, and shared questions. However, a discussion platform does not create knowledge building by itself. Students need norms for respectful challenge, access to worthwhile problems, and opportunities to contribute in different ways. Teachers monitor who has influence and who is absent from the discussion. A fluent writer or an AI-generated paragraph should not automatically receive more authority than a carefully observed result expressed in simpler language.\n\nAssessment can examine how explanations improve, whether evidence is used productively, and how learners contribute to communal progress. Individual understanding also matters and can be checked through explanations and new tasks. Knowledge building is a demanding pedagogical approach, not a universal replacement for instruction, practice, or personal study. Its practical question is whether the class treats ideas as resources to develop together. A useful starting move is to revisit an earlier explanation and ask what the group can now improve, what remains uncertain, and which next inquiry would be most valuable. This makes continuity and responsibility visible while keeping the focus on the quality of knowledge rather than the volume of classroom activity.",
    "coreIdeas": [
      "Ideas are improvable objects of collective work rather than finished personal possessions.",
      "Epistemic agency and collective responsibility concern goals, evidence, and continuing improvement.",
      "Assess substantive progress in understanding alongside individual learning and equitable participation."
    ],
    "educationConnection": "Maintain and revise a shared explanation of insulation, linking each change to evidence and the next worthwhile question.",
    "relatedConcepts": [
      "Epistemic agency",
      "Collective cognitive responsibility",
      "Improvable ideas"
    ],
    "tags": [
      "knowledge building",
      "community knowledge",
      "idea improvement"
    ],
    "imageAlt": "A White man science teacher and a Black woman adult learner revise cup-insulation sketches on a whiteboard beside two covered cups, while another learner watches.",
    "summaryAudioTitle": "Listen to Knowledge Building Theory",
    "sourceUrls": [
      {
        "label": "Scardamalia and Bereiter: Knowledge Building",
        "url": "https://ikit.org/fulltext/2003Knowledge_Building.htm"
      },
      {
        "label": "Scardamalia and Bereiter: Theory, Pedagogy, and Technology",
        "url": "https://ikit.org/fulltext/2006_KBTheory.pdf"
      }
    ]
  },
  {
    "id": "academy-139",
    "listingIdentifier": "AI Knowledge 70",
    "title": "Sandboxing AI-Generated Code",
    "slug": "sandboxing-ai-generated-code",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-09-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-139-sandboxing-ai-generated-code.png",
    "summaryAudio": "/audio/academy/academy-139-sandboxing-ai-generated-code-summary.m4a",
    "shortSummary": "Sandboxing restricts the environment in which generated code runs. Isolation, limited permissions, resource controls, and output inspection reduce risk, but no sandbox makes arbitrary code automatically safe.",
    "fullSummary": "An AI assistant generates a short script to turn a table into a chart. The script looks ordinary, yet running it may read files, contact a network service, install packages, or consume excessive resources. Sandboxing creates a controlled execution environment that restricts what code can access and do. It is especially relevant when code has not been independently trusted, including code produced by an AI system.\n\nA sandbox is a boundary, not a quality judgment about the program. It can limit filesystem access, network connections, process capabilities, memory, computing time, and other resources. Different technologies create different boundaries. Containers, virtual machines, language runtimes, and systems such as gVisor have distinct security models and limitations. Selecting a familiar technology without examining its configuration can create a false sense of protection.\n\nFor a classroom data exercise, imagine a teacher testing an AI-generated plotting script with a fictional dataset. The environment contains only the input file and a designated output directory. It has no production credentials, no access to learner records, and no unnecessary network access. A time limit and memory limit reduce the effect of an accidental infinite loop or oversized calculation. The teacher inspects the generated chart and the program's reported actions before making the exercise available to learners.\n\nUseful boundaries can be undermined by convenience choices. Mounting a broad home directory exposes files the task does not need. Giving a container privileged access or control of the host's container service can weaken isolation substantially. Network access can allow unwanted downloads or data transmission. Dependencies may introduce risks independent of the generated script. The effective security arrangement includes the runtime, permissions, mounted data, credentials, packages, and surrounding infrastructure.\n\nSandboxing also does not prove that an answer is correct. A program can safely compute the wrong statistic, misread a column, or draw a misleading graph. Separate checks should verify assumptions, units, missing values, and the interpretation of results. Outputs themselves may require inspection before opening or sharing. A successful process exit means only that execution completed according to the runtime, not that the educational task was performed appropriately.\n\nA useful learning activity asks groups to draw a boundary around a fictional code runner and list what crosses it. Introduce requests to read another directory, download a package, or write a file outside the output area, and ask which should be permitted for the stated task. Explain the purpose of each decision rather than memorizing one technology's settings. In real deployments, keep the runtime maintained, test restrictions, record relevant execution evidence, and provide a way to stop or discard a run. Sandboxing helps make experimentation manageable when it is combined with minimal access, suitable supervision, and independent checks of what the computation actually means.",
    "coreIdeas": [
      "A sandbox restricts execution capabilities rather than certifying code quality.",
      "The effective boundary depends on configuration, mounts, credentials, network access, and resources.",
      "Safe execution and correct educational results require separate verification."
    ],
    "educationConnection": "Design a minimal plotting environment for fictional data and justify every permitted file, network, and output action.",
    "relatedConcepts": [
      "Process isolation",
      "Resource limits",
      "Execution environment"
    ],
    "tags": [
      "sandboxing",
      "generated code",
      "security"
    ],
    "imageAlt": "A South Asian woman computing teacher and Black and White adult learners inspect a laptop and an annotated input-output diagram.",
    "summaryAudioTitle": "Listen to Sandboxing AI-Generated Code",
    "sourceUrls": [
      {
        "label": "gVisor: Security Model",
        "url": "https://gvisor.dev/docs/architecture_guide/security/"
      },
      {
        "label": "Docker: Engine Security",
        "url": "https://docs.docker.com/engine/security/"
      }
    ]
  },
  {
    "id": "academy-140",
    "listingIdentifier": "Educational Theory 70",
    "title": "Connectivism",
    "slug": "connectivism",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-09-25T08:00:00.000Z",
    "image": "/images/academy/covers/academy-140-connectivism.png",
    "summaryAudio": "/audio/academy/academy-140-connectivism-summary.m4a",
    "shortSummary": "Connectivism emphasizes learning through networks of people, resources, and technologies. It offers useful questions about maintaining connections, while its status as a distinct learning theory remains debated.",
    "fullSummary": "A teacher learning about a new curriculum may rely on colleagues, professional communities, research databases, examples, and digital tools. No single source contains everything the teacher needs. Connectivism, associated with George Siemens and Stephen Downes, emphasizes learning in such networks and the ability to form, maintain, and evaluate connections. It draws attention to how people navigate knowledge that is distributed and continually changing.\n\nSiemens argues that connecting specialized information sources and recognizing when knowledge needs updating are central capabilities in a digital environment. Downes develops an account of connective knowledge in which patterns across a network matter. These are theoretical proposals about learning and knowing, not evidence that collecting more online contacts necessarily improves understanding. The quality and organization of connections are more important educational questions than their sheer number.\n\nA connectivist perspective can shift attention from possessing an answer to knowing how to find, evaluate, and revise one. However, these activities still require knowledge. Without enough understanding of a subject, a learner may not recognize an unreliable source or formulate a useful question. Search access and network participation should therefore complement deliberate study and practice rather than be treated as replacements for them.\n\nImagine a teacher education group investigating accessible digital assessment. Participants map relevant connections: accessibility standards, disabled learners' perspectives, subject teachers, institutional support staff, and research evidence. Each group explains what a source contributes and where its authority stops. They compare conflicting advice, identify a missing perspective, and revise a proposed assessment. Later, a change in a tool prompts them to revisit the network and update the recommendation. The activity assesses how the connections support a defensible decision, not how many links appear on the map.\n\nNetworks can also exclude and mislead. Popular sources may dominate attention, algorithms can narrow what people encounter, and repeated claims can appear independent when they originate from one source. Access differs with language, disability, time, money, and professional status. Learners need support to check provenance, seek relevant differences in perspective, and protect personal information. Openness should not require everyone to publish their learning or identity on a public platform.\n\nResearchers debate whether connectivism constitutes a distinct learning theory or a useful perspective on existing processes in networked settings. Educators can use its questions without presenting that debate as settled. Ask which connections help learners gain reliable understanding, how they judge those connections, and how they continue learning when information changes. Include an individual explanation or application task so that participation is not mistaken for knowledge. The practical contribution is attention to the maintenance of a learning network and the judgment required to use it well. A network becomes educationally useful through purposeful engagement, credible information, and opportunities to integrate what is encountered.",
    "coreIdeas": [
      "Connectivism emphasizes connections across people, resources, and technologies in changing information environments.",
      "Network participation requires domain knowledge, source evaluation, and equitable access.",
      "Its theoretical status is debated, so assess learning rather than assuming connectivity is sufficient."
    ],
    "educationConnection": "Map sources for accessible assessment, inspect their different authority and limitations, and update a recommendation when new evidence appears.",
    "relatedConcepts": [
      "Connective knowledge",
      "Networked learning",
      "Information currency"
    ],
    "tags": [
      "connectivism",
      "networks",
      "digital learning"
    ],
    "imageAlt": "An East Asian man lecturer and a Black woman adult learner discuss a sparse professional-learning source map on a pinboard.",
    "summaryAudioTitle": "Listen to Connectivism",
    "sourceUrls": [
      {
        "label": "Siemens: Connectivism",
        "url": "https://itdl.org/Journal/Jan_05/Jan_05.pdf"
      },
      {
        "label": "Downes: An Introduction to Connective Knowledge",
        "url": "https://www.downes.ca/post/33034"
      },
      {
        "label": "Kop and Hill: Learning Theory of the Future or Vestige of the Past",
        "url": "https://www.irrodl.org/index.php/irrodl/article/view/523/1103"
      }
    ]
  }
];
