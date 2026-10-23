import type { AcademyLesson } from "@/lib/types";

export const academyRelease20261010To20261016: AcademyLesson[] = [
  {
    "id": "academy-169",
    "listingIdentifier": "AI Knowledge 85",
    "title": "Exploration and Exploitation",
    "slug": "exploration-and-exploitation",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-10T08:00:00.000Z",
    "image": "/images/academy/covers/academy-169-exploration-and-exploitation.png",
    "summaryAudio": "/audio/academy/academy-169-exploration-and-exploitation-summary.m4a",
    "tags": [
      "exploration",
      "exploitation",
      "adaptive decisions"
    ],
    "imageAlt": "A White teacher and Black and East Asian adult learners compare familiar and new learning activities using annotated cards.",
    "summaryAudioTitle": "Listen to Exploration and Exploitation",
    "shortSummary": "AI recommendation policies balance using the current best option with learning about uncertain alternatives. Educational rewards and the distribution of exploration costs determine whether that balance is useful.",
    "fullSummary": "Exploration and exploitation describe a choice between learning about uncertain options and using the option that currently appears best. An AI system recommending learning resources faces this tension when it must decide whether to keep offering a familiar activity or gather evidence about an alternative. Exploitation uses existing estimates; exploration improves those estimates. Neither is automatically the right choice in every situation.\n\nA simple multi-armed bandit model represents several available actions, each producing an uncertain reward. The system sees the outcome of the action it selects, usually not the outcomes that would have followed the alternatives. Early observations can therefore be misleading. If an initially promising option receives every future selection, the system may never discover that another option works better. Conversely, endless experimentation can repeatedly sacrifice a useful known choice.\n\nDifferent strategies manage this tradeoff differently. An epsilon-greedy policy usually selects the current best estimate but sometimes explores. Upper-confidence methods consider both estimated value and uncertainty. Thompson sampling draws from a distribution over uncertain action values, making promising but uncertain options eligible for selection. These are families of methods with assumptions and design choices, not interchangeable settings that guarantee good educational decisions.\n\nConsider a simulated platform choosing between a worked example and a short practice question after a learner makes an error. Its observed reward is success on the next problem. In a classroom demonstration, teachers can give each option a hidden success probability and let teams choose repeatedly. A team that commits after two lucky results may miss the better option. Another team can compare a planned exploration strategy and track the cumulative outcomes over many simulated choices.\n\nThe demonstration illustrates information gathering, but real learning creates additional complications. A strategy that produces an immediate correct answer may not improve later independent performance. Learners change with instruction, and the same resource may suit different knowledge states. A reward based on clicks or time spent can encourage attention capture rather than understanding. Educational objectives must be defined before optimizing them, with meaningful constraints on which alternatives may be offered.\n\nExploration also distributes costs. If one group repeatedly receives uncertain materials while another receives the best-supported option, average improvement can conceal an unfair burden. Educators should define acceptable choices, provide alternatives, and inspect outcomes across relevant learners. Research involving students requires the appropriate institutional and participant protections. Simulation and retrospective analysis can help investigate a policy before any consequential classroom use, although neither substitutes for evidence of real learning.\n\nA practical evaluation asks how much useful knowledge exploration gains, what short-term costs it imposes, and whether the chosen reward represents the intended goal. Changing curricula or user needs may require renewed exploration rather than permanent commitment. The concept is useful because it makes an otherwise hidden decision explicit: a recommendation can aim to help now, learn for later, or balance both. Good design explains that balance and remains accountable for its educational consequences.",
    "coreIdeas": [
      "Exploitation acts on current estimates, while exploration gathers information about uncertain alternatives whose outcomes are otherwise unobserved.",
      "Different bandit strategies balance value and uncertainty under explicit assumptions; early success can mislead a purely greedy policy.",
      "Educational reward definitions, learner change and the distribution of exploration costs require scrutiny beyond average short-term performance."
    ],
    "educationConnection": "Run a paper simulation with two hidden resource-success probabilities, compare choice strategies, and discuss why immediate correctness is an incomplete reward for real learning.",
    "relatedConcepts": [
      "Multi-armed bandits",
      "Regret",
      "Thompson sampling"
    ],
    "sourceUrls": [
      {
        "label": "Lattimore and Szepesvári: Bandit Algorithms",
        "url": "https://tor-lattimore.com/downloads/book/book.pdf"
      },
      {
        "label": "Russo et al.: A Tutorial on Thompson Sampling",
        "url": "https://arxiv.org/abs/1707.02038"
      }
    ]
  },
  {
    "id": "academy-170",
    "listingIdentifier": "Educational Theory 85",
    "title": "Group Cognition",
    "slug": "group-cognition",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-10T08:00:00.000Z",
    "image": "/images/academy/covers/academy-170-group-cognition.png",
    "summaryAudio": "/audio/academy/academy-170-group-cognition-summary.m4a",
    "tags": [
      "group cognition",
      "CSCL",
      "collaborative reasoning"
    ],
    "imageAlt": "A Latina mathematics teacher observes Black and East Asian adult learners jointly annotate a composite-shape diagram.",
    "summaryAudioTitle": "Listen to Group Cognition",
    "shortSummary": "Group cognition examines how reasoning emerges through connected contributions, shared representations and interaction. A successful group product and each member's individual understanding require different evidence.",
    "fullSummary": "Group cognition is an approach to understanding thinking that takes a small group's interaction as a unit of analysis. A solution may develop through a sequence of contributions that no participant initially possessed in full. One person proposes an idea, another interprets it, and a third connects it to a representation. The shared achievement becomes visible in how those moves fit together.\n\nIn Gerry Stahl's account, examining group cognition does not require imagining a mysterious collective brain. It requires close attention to talk, gesture, inscriptions, tools, and the ways participants establish shared meaning. Words such as 'that line' may be intelligible only because everyone can see a diagram and remembers a previous action. Meaning is produced through the evolving activity rather than carried completely within each isolated sentence.\n\nSuppose three adult learners must find the area of an unfamiliar composite shape. One suggests splitting it into two rectangles. A second draws the division and identifies a shared height. The third writes an expression that combines both areas and notices a missing length. Through further discussion, the group derives that length from the whole shape. An analysis focused only on who announced the final answer would miss much of the mathematical work that made the answer possible.\n\nA teacher can preserve the sequence by keeping a shared sketch and asking learners to explain how their ideas changed. Useful questions include: which contribution opened a new possibility, how was a reference understood, and what did the drawing make available? The goal is not to assign ownership to every sentence. It is to notice how participants build on, repair, challenge, and transform one another's proposals into a defensible shared account.\n\nThis perspective informs the design of collaborative tools. A common workspace, visible revision history, and stable references can help participants coordinate meaning. A chat window alone does not guarantee shared understanding; learners may discuss different versions of a diagram without realizing it. Interfaces should support pointing, comparing, revisiting and explaining. Teachers still need to facilitate interaction when one learner dominates or when apparent agreement hides unresolved differences.\n\nEvidence of a group achievement is not the same as evidence that every member can perform independently. Individual reflection or a later transfer task can examine personal understanding, while interaction analysis examines the collaborative process. These forms of evidence answer different questions. Message counts and speaking time cannot establish the quality of group cognition because a short question may transform the argument more than many routine contributions.\n\nGroup cognition remains a theoretical and methodological perspective, with claims that need appropriate analysis rather than automatic acceptance. It is especially useful for tasks whose reasoning develops through interdependent contributions and shared artifacts. Educators can use it to look beyond participation totals and final products toward the actual construction of knowledge. The practical payoff is a more precise account of what collaboration made possible, and where a group's meaning-making process needs support.",
    "coreIdeas": [
      "A small group's sequence of contributions can produce reasoning that no member initially held in complete form.",
      "Shared meaning depends on discourse, gestures, artifacts and references, so isolated utterances or message counts are insufficient evidence.",
      "Analyze collaborative knowledge building alongside separate checks of individual learning and access to meaningful participation."
    ],
    "educationConnection": "Record the evolving diagram and explanation during a collaborative geometry task, then trace which questions and revisions made the solution possible before checking individual transfer.",
    "relatedConcepts": [
      "Shared meaning",
      "Interaction analysis",
      "Joint knowledge construction"
    ],
    "sourceUrls": [
      {
        "label": "Stahl: Group Cognition",
        "url": "https://gerrystahl.net/elibrary/gc/index.html"
      },
      {
        "label": "Stahl: Studying Virtual Math Teams",
        "url": "https://www.gerrystahl.net/elibrary/svmt/svmt.pdf"
      }
    ]
  },
  {
    "id": "academy-171",
    "listingIdentifier": "AI Knowledge 86",
    "title": "Contextual Bandits for Learning Support",
    "slug": "contextual-bandits-for-learning-support",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-11T08:00:00.000Z",
    "image": "/images/academy/covers/academy-171-contextual-bandits-for-learning-support.png",
    "summaryAudio": "/audio/academy/academy-171-contextual-bandits-for-learning-support-summary.m4a",
    "tags": [
      "contextual bandits",
      "learning support",
      "reward design"
    ],
    "imageAlt": "An East Asian teacher and White and Black adult learners compare graph-reading hints beside an annotated chart.",
    "summaryAudioTitle": "Listen to Contextual Bandits for Learning Support",
    "shortSummary": "Contextual bandits learn which support action works in a given situation from partial feedback. Their educational value depends on meaningful rewards, appropriate logging and limits on what current decisions can model.",
    "fullSummary": "A contextual bandit chooses among actions using information about the current situation and feedback from previous choices. In learning support, the context might include the current concept, a recent response, and which help has already been tried. The actions might be a worked example, a hint, or another practice item. The system learns a policy for selecting an action that is expected to produce a defined reward.\n\nThe distinctive feature is partial feedback. After offering a hint, the system observes what followed that hint, but it does not observe what the same learner would have done at that moment with every alternative. Contextual bandit methods combine estimation with some form of exploration to address this missing information. Classic research applied the approach to news recommendation; educational applications require their own assumptions, outcomes, and safeguards rather than borrowing that success claim unchanged.\n\nConsider a fictional tutoring environment with two suitable hints for interpreting a graph. One points to the axis labels; the other asks the learner to compare two data values. The context records the kind of error, not an assumed personality type. A policy can learn that an axis-related hint is often useful after one error pattern, while a comparison hint helps after another. A subsequent independent response provides a more meaningful reward than merely opening the hint.\n\nChoosing the reward is an educational judgment. Immediate correctness may favor giving away an answer, while time-on-task can reward unnecessary delay. Delayed learning outcomes are harder to attribute because many events occur between a recommendation and assessment. A standard contextual bandit primarily models the reward of the current decision; it does not fully represent how an action changes a learner's future knowledge and opportunities. Longer-term instructional planning may require a different model or additional evaluation.\n\nResponsible development begins with a restricted set of teacher-approved actions and a clear fallback. Keep enough records to reconstruct the context, chosen action, probability of selection, policy version, and observed outcome. Selection probabilities matter when evaluating alternatives from logged data, because the historical policy determined which outcomes were observed. If an action was never tried in a situation, the log alone cannot reliably reveal how it would have performed there.\n\nA teacher-education exercise can use synthetic learners with explicitly defined response rules to compare policies. Participants should label the results as a simulation and examine how conclusions change when those rules change. Before real use, evaluate accessibility, unequal exposure to uncertain support, privacy, and opportunities for learners or teachers to override unsuitable choices. A high average reward can conceal poor experiences for a small group or optimize an incomplete goal.\n\nContextual bandits are useful when decisions repeat, the action set is manageable, and relevant feedback arrives often enough to guide learning. They are less persuasive when outcomes are rare, contexts shift rapidly, or the chosen reward misses the educational purpose. Their value lies in a disciplined connection between context, action and observed consequence, supported by transparent constraints and evidence that the resulting policy actually helps learners.",
    "coreIdeas": [
      "A contextual bandit selects an action from the current context and learns from the outcome of the action actually chosen.",
      "Reward definitions and exploration policies shape behavior; immediate correctness or clicks may poorly represent durable learning.",
      "Logged selection probabilities, teacher-approved actions and local validation are needed, while long-term learning dynamics may exceed the model's scope."
    ],
    "educationConnection": "Compare two graph-reading hints in a clearly labeled simulation, record selection probabilities, and test how policies change when the reward shifts from clicks to independent answers.",
    "relatedConcepts": [
      "Contextual policy",
      "Partial feedback",
      "Off-policy evaluation"
    ],
    "sourceUrls": [
      {
        "label": "Li et al.: A Contextual-Bandit Approach to Personalized News Article Recommendation",
        "url": "https://arxiv.org/abs/1003.0146"
      },
      {
        "label": "Vowpal Wabbit: Contextual Bandits Tutorial",
        "url": "https://vowpalwabbit.org/docs/vowpal_wabbit/python/latest/tutorials/python_Contextual_bandits_and_Vowpal_Wabbit.html"
      }
    ]
  },
  {
    "id": "academy-172",
    "listingIdentifier": "Educational Theory 86",
    "title": "Socially Shared Regulation of Learning",
    "slug": "socially-shared-regulation-of-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-11T08:00:00.000Z",
    "image": "/images/academy/covers/academy-172-socially-shared-regulation-of-learning.png",
    "summaryAudio": "/audio/academy/academy-172-socially-shared-regulation-of-learning-summary.m4a",
    "tags": [
      "shared regulation",
      "collaborative learning",
      "group planning"
    ],
    "imageAlt": "A White teacher listens as Black, Latina and South Asian adult learners revise a shared sound-investigation plan.",
    "summaryAudioTitle": "Listen to Socially Shared Regulation of Learning",
    "shortSummary": "Socially shared regulation means jointly planning, monitoring and adapting a group's learning. It differs from individual self-management and from one member simply directing everyone else.",
    "fullSummary": "Socially shared regulation of learning occurs when group members jointly shape and manage their collective learning activity. They develop a shared understanding of the task, set goals, monitor progress, and adjust strategies together. The object of regulation is the group's work. This goes beyond several students independently managing their own schedules while contributing separate pieces to the same assignment.\n\nResearchers distinguish shared regulation from self-regulation and co-regulation. Self-regulation concerns a learner managing their own activity. Co-regulation involves support or guidance between people, such as one member helping another plan. Shared regulation arises when members negotiate and sustain regulation of a collective process. These forms can alternate within one project, so a group should not be assigned a permanent label based on a single moment.\n\nImagine a team preparing an evidence-based proposal for reducing classroom noise. At first, members collect different kinds of information without agreeing what counts as useful evidence. A shared checkpoint reveals the mismatch. The team revises its question, agrees to compare measurements from similar times, assigns collection roles, and decides how to handle missing observations. This episode regulates the group's understanding and method, rather than merely reminding an individual to finish their section.\n\nRegulation also includes motivation and emotion when these affect collective work. If frustration grows because measurements conflict, members might acknowledge the difficulty, revisit their goal, and agree on a simpler comparison. This is more substantive than offering generic encouragement. A teacher can support the process by asking what the group is trying to accomplish, what evidence shows progress, and what needs to change. The group should gradually take responsibility for asking those questions itself.\n\nStudies of collaborative interaction examine how groups notice and respond to regulatory needs. For example, research reported in the Journal of Learning Analytics analyzed cognitive and emotional triggering events in small groups of Finnish secondary students. Such work helps identify patterns of deliberation, but a pattern observed in a small study does not become a universal script. Shared regulation depends on task demands, relationships, knowledge and the opportunities available for participation.\n\nPractical supports include a brief joint plan, visible criteria, scheduled checkpoints and a record of agreed changes. Keep these supports proportionate: filling out a regulation form can become administrative work if it does not influence the activity. Ask each learner to explain the shared plan, because silent agreement may hide different interpretations. Rotate facilitation and provide accessible ways to raise concerns so that one confident member does not define every goal and decision.\n\nEvaluation should consider the process and the learning outcome. A team may monitor carefully yet lack essential subject knowledge; another may finish quickly through one member's effort without shared understanding. Look for episodes in which evidence prompts a collectively understood adjustment, then check what individuals and the group learned. Shared regulation is useful when it makes collaboration more responsive and purposeful, while preserving each learner's voice and responsibility within the collective work.",
    "coreIdeas": [
      "Shared regulation manages the collective task through negotiated goals, monitoring and adaptation; self-regulation and co-regulation can occur alongside it.",
      "Cognitive, motivational and emotional difficulties can trigger a need to revise the group's strategy.",
      "Visible plans and checkpoints help only when members understand and influence them, and process evidence should accompany outcome evidence."
    ],
    "educationConnection": "Give project teams one checkpoint to compare their evidence with a shared goal, agree on a justified change, and record how every member understands the revised plan.",
    "relatedConcepts": [
      "Co-regulation",
      "Shared monitoring",
      "Collective adaptation"
    ],
    "sourceUrls": [
      {
        "label": "Putting Self-Regulated Learning in Context",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9291108/"
      },
      {
        "label": "Dang, Nguyen and Järvelä: Deliberative Interactions for Socially Shared Regulation",
        "url": "https://learning-analytics.info/index.php/JLA/article/view/8393"
      }
    ]
  },
  {
    "id": "academy-173",
    "listingIdentifier": "AI Knowledge 87",
    "title": "Simulated Learners and Their Limits",
    "slug": "simulated-learners-and-their-limits",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-12T08:00:00.000Z",
    "image": "/images/academy/covers/academy-173-simulated-learners-and-their-limits.png",
    "summaryAudio": "/audio/academy/academy-173-simulated-learners-and-their-limits-summary.m4a",
    "tags": [
      "simulated learners",
      "educational AI evaluation",
      "validity"
    ],
    "imageAlt": "A Black teacher and South Asian and White adult educators rehearse a tutoring conversation beside an annotated learning diagram.",
    "summaryAudioTitle": "Listen to Simulated Learners and Their Limits",
    "shortSummary": "Simulated learners can support rehearsal and technical testing, but realistic dialogue is not evidence of realistic learning. Validation must match the intended use and preserve the distinction between synthetic and human outcomes.",
    "fullSummary": "Simulated learners are computational representations that produce responses or actions intended to resemble aspects of learning. They can help developers test a tutoring workflow, let teachers rehearse responses, or explore a theory's predictions. A simulation may use explicit rules, a statistical learner model, or a language model prompted to act as a student. Its usefulness depends on what it represents accurately and what conclusions the user intends to draw.\n\nA rule-based simulator can make its assumptions visible. For example, a learner model might expand twice a bracket by multiplying only the first term. A language model can generate more flexible conversation around that error, but plausible dialogue does not establish a realistic learning process. A model that already knows the correct algebra may unexpectedly abandon its assigned misconception, invent a different error, or respond to feedback in an implausibly convenient way.\n\nConsider a teacher rehearsing how to respond when a simulated student writes '2(x + 3) = 2x + 3'. The teacher asks the student to compare the expression with two groups of the same quantity. The simulator then produces a correct explanation. This shows that the rehearsal system can continue the conversation; it does not show that a human learner with that misconception would understand the feedback. The distinction is essential when evaluating a teaching strategy.\n\nValidation should match the intended use. To test interface routing, the simulator may only need to produce specified categories of response. To study tutoring effectiveness, it would need evidence that its errors, help-seeking, persistence, and changes in knowledge resemble relevant human learners. Research on language-model students examines these fidelity questions, including teachers' judgments of realism. Methodological work also stresses specifying what the learner knows and how that state is allowed to change.\n\nA practical design records the initial knowledge state, available information, response rules, and learning-transition assumptions. Keep some real learner traces separate for evaluation where their use is authorized. Compare patterns and sequences, not only whether an average score matches. A simulator that gets the right proportion of questions wrong for the wrong reasons can mislead a tutor designer. Check whether behavior remains coherent over a long conversation and across alternative phrasings of the same task.\n\nSimulated diversity needs particular care. Assigning a demographic label to a language model does not create a valid representation of a population. It can reproduce stereotypes while concealing differences within groups. Prefer explicit, task-relevant characteristics such as prerequisite knowledge or access constraints, and explain which are assumptions. Human learners should help evaluate whether the scenarios are recognizable without being reduced to fixed profiles.\n\nUse simulation results to identify bugs, compare hypotheses, and decide what needs testing with people. Report synthetic outcomes as synthetic, including failure cases and sensitivity to assumptions. A system that succeeds with its own simulated students may simply be well matched to the simulator. Evidence of educational benefit still requires appropriate observation and evaluation with real learners. A good simulation narrows uncertainty while making the remaining distance to classroom reality visible.",
    "coreIdeas": [
      "A simulator represents selected learner behaviors through explicit or learned assumptions, and its validity depends on the question being asked.",
      "Language-model students can produce plausible conversation while showing unrealistic misconceptions or learning transitions.",
      "Validate error patterns and sequences against appropriate human evidence, avoid demographic stereotypes, and label synthetic outcomes clearly."
    ],
    "educationConnection": "Rehearse feedback on one explicit algebra misconception, then examine which simulated responses test the teaching interface and which would require validation with real learners.",
    "relatedConcepts": [
      "Simulation fidelity",
      "Learner-state modeling",
      "Synthetic evaluation"
    ],
    "sourceUrls": [
      {
        "label": "Can LLMs Effectively Simulate Human Learners? Teachers' Insights",
        "url": "https://aclanthology.org/2025.bea-1.8/"
      },
      {
        "label": "Yuan et al.: Towards Valid Student Simulation with Large Language Models",
        "url": "https://arxiv.org/abs/2601.05473"
      }
    ]
  },
  {
    "id": "academy-174",
    "listingIdentifier": "Educational Theory 87",
    "title": "Adaptive Help-Seeking",
    "slug": "adaptive-help-seeking",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-12T08:00:00.000Z",
    "image": "/images/academy/covers/academy-174-adaptive-help-seeking.png",
    "summaryAudio": "/audio/academy/academy-174-adaptive-help-seeking-summary.m4a",
    "tags": [
      "help-seeking",
      "self-regulation",
      "tutoring"
    ],
    "imageAlt": "A Latina teacher and Black and East Asian adult learners discuss a specific passage in an annotated historical source.",
    "summaryAudioTitle": "Listen to Adaptive Help-Seeking",
    "shortSummary": "Adaptive help-seeking means recognizing an obstacle, requesting appropriate assistance and using it to improve understanding. Counts of hints or questions alone cannot reveal whether support is productive.",
    "fullSummary": "Adaptive help-seeking is the process of obtaining and using assistance that supports learning while retaining responsibility for the task. It involves recognizing a difficulty, deciding what help is needed, choosing an appropriate source, and making sense of the response. Requesting help can be an active learning strategy. Its quality cannot be judged simply by counting how often a student asks or how long they work alone.\n\nA learner may avoid useful help because asking feels embarrassing, because instructions are unclear, or because previous assistance was unhelpful. Another may request a complete answer before engaging with the problem. These patterns require different responses. The aim is neither maximal independence nor constant assistance, but help that enables the learner to move forward with better understanding. Prior knowledge and the accessibility of the task influence what counts as a reasonable attempt.\n\nSuppose an adult learner is evaluating a historical source and cannot identify the author's position. A broad request such as 'What is the answer?' gives the teacher little information. After discussing the task, the learner asks, 'I can identify the date and audience, but which details would show the author's relationship to the event?' That question locates the obstacle and invites guidance. The teacher points to a relevant passage and asks the learner to explain its significance.\n\nThe learning process continues after help arrives. A student can paraphrase the hint, apply it, and check whether it resolves the difficulty. If it does not, the next request can describe what was tried and what remains unclear. In a digital tutor, opening a hint is only an observable action; it does not establish that the hint was read, understood, or used. Similarly, rapid requests may reflect an inaccessible explanation rather than deliberate avoidance of learning.\n\nResearch on the Help Tutor investigated metacognitive feedback about help-seeking within an intelligent tutoring system. Its model made desired help-seeking processes explicit and tested ways to guide learners. This work illustrates that help use itself can be taught and examined. It does not justify transferring a fixed rule, such as always waiting a specified number of seconds before asking, into every classroom or platform.\n\nTeachers can model a useful request by naming the goal, showing an attempted approach, and identifying the point of confusion. Offer several routes, including private questions, peers, worked examples, and accessible digital support. Explain when direct instruction is appropriate rather than withholding it to enforce persistence. A culture in which questions are treated respectfully lowers the social cost of seeking help and makes uncertainty easier to discuss.\n\nA practical assessment looks at whether assistance improves subsequent reasoning and independent performance. Ask learners which support they used and what changed in their approach, without turning disclosure into surveillance. Over time, help can become more targeted and learners can better judge when they need it. Adaptive help-seeking therefore develops through both learner strategy and a responsive environment: people must know how to ask, and useful help must actually be available.",
    "coreIdeas": [
      "Seeking help can be a self-regulated learning strategy when it locates a difficulty and preserves responsibility for understanding.",
      "Avoidance, answer-seeking and accessibility barriers can look similar in logs, so context matters when interpreting help use.",
      "Teach how to request, interpret and apply help, then evaluate subsequent reasoning rather than rewarding either constant help or unsupported struggle."
    ],
    "educationConnection": "Model a help request that names the goal, attempted approach and specific obstacle, then ask learners to explain how the received hint changed their next step.",
    "relatedConcepts": [
      "Instrumental help-seeking",
      "Metacognitive monitoring",
      "Help avoidance"
    ],
    "sourceUrls": [
      {
        "label": "Aleven et al.: Toward Meta-Cognitive Tutoring",
        "url": "https://www.cs.cmu.edu/~bmclaren/pubs/AlevenEtAl-TowardMetaCognitiveTutoring-IJAIED2006.pdf"
      },
      {
        "label": "Roll et al.: Improving Students' Help-Seeking Skills",
        "url": "https://pact.cs.cmu.edu/koedinger/pubs/Roll%2C%20Aleven%2C%20McLaren%20%26%20Koedinger%202011.pdf"
      }
    ]
  },
  {
    "id": "academy-175",
    "listingIdentifier": "AI Knowledge 88",
    "title": "Deepfakes and Media Authenticity",
    "slug": "deepfakes-and-media-authenticity",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-13T08:00:00.000Z",
    "image": "/images/academy/covers/academy-175-deepfakes-and-media-authenticity.png",
    "summaryAudio": "/audio/academy/academy-175-deepfakes-and-media-authenticity-summary.m4a",
    "tags": [
      "deepfakes",
      "media authenticity",
      "digital literacy"
    ],
    "imageAlt": "A South Asian media teacher and White and Black adult learners compare the source history of two classroom video clips.",
    "summaryAudioTitle": "Listen to Deepfakes and Media Authenticity",
    "shortSummary": "Deepfake verification combines origin, context, technical evidence and independent corroboration. Neither appearance-based guessing nor a detector score alone establishes whether a media claim is trustworthy.",
    "fullSummary": "Deepfakes are synthetic or manipulated media that can make a person appear to say or do something they did not. Techniques include face replacement, generated speech, altered lip movement, and fully synthesized scenes. Similar tools also support legitimate accessibility, translation, creative work, and historical reconstruction. The educational question is whether a particular representation is authentic, appropriately disclosed, and reliable for the claim being made.\n\nMedia authenticity has several layers. A file may be an authentic recording but misleadingly cropped or presented with a false date. A synthetic reconstruction may be accurately labeled and useful for teaching. A real speaker can make an inaccurate claim. Establishing where a file came from therefore does not settle whether its content is true, and spotting a visual oddity does not establish that the file is fake.\n\nSuppose students receive a short clip apparently showing a school leader announcing a major assessment change. Before sharing it, they look for the original publication, compare the date and context, and check the school's established communication channel. If the announcement remains uncertain, staff can verify it through a known contact route. Calling a number displayed inside the suspicious clip would merely follow another unverified element of the same material.\n\nTechnical checks can contribute evidence. Detection systems estimate whether media contains patterns associated with manipulation, but performance changes with generation methods, compression, cropping, and the data used for testing. A confident score can be wrong. Content provenance systems such as C2PA can attach signed information about origin and editing history. Their value depends on trustworthy signing, valid verification, and the meaning of the recorded assertions. Missing credentials do not prove deception, and valid credentials do not certify every claim shown.\n\nAn effective lesson uses a small set of consented or openly licensed examples with known histories: an original clip, a cropped version with changed context, and an explicitly labeled synthetic reconstruction. Learners record what each check establishes and what remains unresolved. This avoids training them to rely on a checklist of facial defects that may disappear as technology changes. Verification becomes a process of tracing evidence and context rather than guessing from appearance alone.\n\nInstitutions should also prepare a response when impersonation or manipulated media affects members of the school community. Preserve the relevant evidence securely, avoid unnecessary redistribution, and use established reporting and support procedures. Protect the people depicted, including those harmed by a false allegation that real media was fabricated. Publicly repeating sensational content can increase its reach even when the intention is to debunk it.\n\nThe practical habit is proportionate verification before consequential action or sharing. Pause, find the original, examine provenance where available, and seek independent corroboration from a known source. If evidence remains incomplete, communicate that uncertainty. Media literacy in the age of deepfakes combines technical awareness with ordinary source evaluation, respect for consent, and an understanding that authentic origin, accurate context, and truthful claims are related but separate questions.",
    "coreIdeas": [
      "Synthetic media can serve legitimate purposes or enable deception; origin, context and truth are separate questions.",
      "Detectors and signed provenance provide bounded evidence, with false results, missing credentials and trust assumptions requiring interpretation.",
      "Use known communication routes and independent corroboration before sharing or acting, while protecting people harmed by manipulation or false accusations."
    ],
    "educationConnection": "Compare an original clip, a misleading crop and a disclosed synthetic reconstruction, asking learners to state precisely what each verification step establishes.",
    "relatedConcepts": [
      "Content provenance",
      "Media verification",
      "Synthetic impersonation"
    ],
    "sourceUrls": [
      {
        "label": "NIST: Reducing Risks Posed by Synthetic Content",
        "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf"
      },
      {
        "label": "C2PA: Content Credentials Technical Specification 2.2",
        "url": "https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html"
      }
    ]
  },
  {
    "id": "academy-176",
    "listingIdentifier": "Educational Theory 88",
    "title": "Epistemic Games",
    "slug": "epistemic-games",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-13T08:00:00.000Z",
    "image": "/images/academy/covers/academy-176-epistemic-games.png",
    "summaryAudio": "/audio/academy/academy-176-epistemic-games-summary.m4a",
    "tags": [
      "epistemic games",
      "professional reasoning",
      "simulation learning"
    ],
    "imageAlt": "A Black teacher and Latina and East Asian adult learners discuss a public-space proposal using a site map and planning sketches.",
    "summaryAudioTitle": "Listen to Epistemic Games",
    "shortSummary": "Epistemic games organize learning around professional ways of knowing and judging. Their value comes from connecting knowledge, skills, values, identity and evidence through meaningful simulated practice.",
    "fullSummary": "Epistemic games, in David Williamson Shaffer's educational account, are designed experiences in which learners participate in ways of thinking and acting associated with a professional practice. Learners might work as urban planners, journalists, or engineers within a carefully structured simulation. The educational focus is how knowledge, skills, values, identity, and ways of justifying decisions become connected through activity.\n\nThese connections form what Shaffer calls an epistemic frame. A planner does more than calculate a cost: they decide which constraints matter, interpret evidence, consult stakeholders, and justify a proposal according to professional expectations. An epistemic game brings selected parts of that practice into a manageable learning environment. Roles, tools, mentoring, consequential choices, and reflection help make the reasoning behind decisions visible.\n\nConsider a classroom simulation in which adult learners advise on converting an unused site into a public space. Teams examine a map, a limited budget, environmental information, and accounts from different community members. A choice that increases recreational space might reduce parking or affect drainage. Learners prepare a proposal and explain which evidence and values informed it. A mentor asks them to reconsider a recommendation when new information about accessibility becomes available.\n\nThe learning lies in the relationships among these moves. A student connects a technical measurement to a public concern, uses a professional criterion to compare alternatives, and revises a decision after critique. A decorative role title or a points system would not by itself create those connections. Designers need to identify the actual practice they want learners to engage in and build tasks that require its distinctive forms of judgment.\n\nScaffolding makes participation possible without pretending that novices are already professionals. Provide accessible data, worked examples of reasoning, bounded decisions, and opportunities to ask for advice. Keep the challenge intellectually meaningful while limiting irrelevant administrative complexity. A structured debrief can examine why certain evidence counted, whose needs were considered, and how a different situation might alter the decision. Transfer beyond the simulation should be investigated rather than presumed.\n\nAssessment can examine proposals, explanations, revisions, and dialogue for evidence of increasingly connected reasoning. Epistemic network analysis is one research approach used to study connections among coded elements in discourse. Its output depends on the coding, units and analytic choices, so a network diagram is not direct proof that professional expertise has developed. Independent performance and explanation remain important when making claims about learning.\n\nEpistemic games also carry choices about whose professional practices and values are represented. A simulation can omit contested histories, simplify power relations, or make one stakeholder's priorities seem inevitable. Teachers should invite critique of the modeled practice as well as competent participation within it. The approach is most useful when learners can experience a coherent form of professional reasoning, discuss its assumptions, and recognize both what the simulation teaches and what real-world participation would still require.",
    "coreIdeas": [
      "Epistemic games use structured participation in a professional practice to connect knowledge, skills, values, identity and ways of justifying decisions.",
      "Tasks, mentoring and reflection must make disciplinary judgment necessary; roles and game points alone do not establish the mechanism.",
      "Assess connected reasoning and transfer carefully, while inviting critique of the values and power relations represented in the simulation."
    ],
    "educationConnection": "Run a bounded planning simulation in which learners justify a public-space proposal, respond to new accessibility evidence, and reflect on how professional criteria shaped their decision.",
    "relatedConcepts": [
      "Epistemic frames",
      "Professional practice",
      "Epistemic network analysis"
    ],
    "sourceUrls": [
      {
        "label": "Shaffer: Epistemic Frames for Epistemic Games",
        "url": "https://eric.ed.gov/?id=EJ729748"
      },
      {
        "label": "Shaffer and Ruis: Epistemic Network Analysis, a Worked Example",
        "url": "https://www.solaresearch.org/publications/hla-17/hla17-chapter15/"
      }
    ]
  },
  {
    "id": "academy-177",
    "listingIdentifier": "AI Knowledge 89",
    "title": "AI Watermarks and Detection Limits",
    "slug": "ai-watermarks-and-detection-limits",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-14T08:00:00.000Z",
    "image": "/images/academy/covers/academy-177-ai-watermarks-and-detection-limits.png",
    "summaryAudio": "/audio/academy/academy-177-ai-watermarks-and-detection-limits-summary.m4a",
    "tags": [
      "AI watermarks",
      "text detection",
      "authorship evidence"
    ],
    "imageAlt": "A White teacher and Black and South Asian adult learners compare annotated writing drafts beside a laptop.",
    "summaryAudioTitle": "Listen to AI Watermarks and Detection Limits",
    "shortSummary": "Watermarks and AI-text detectors provide different, limited signals. Their interpretation depends on coverage, transformations, false positives and prevalence, so a flag cannot by itself establish misconduct.",
    "fullSummary": "AI watermarks are signals deliberately added during content generation so that later checks may identify a connection to a particular generation process. They can be embedded in images, audio, or patterns of text. Detection without a watermark takes a different approach: it looks for features associated with generated material after the fact. Neither approach automatically establishes who used a tool, whether its use was permitted, or whether the content is accurate.\n\nOne text-watermark method subtly changes the probabilities of choosing certain tokens during generation. Across enough text, the resulting pattern can be tested statistically. The signal need not appear as a visible label. Its interpretation depends on the watermark scheme, access to the relevant detection method, and enough suitable text. Content generated without that scheme is outside what such a detector was designed to identify.\n\nResearch by Kirchenbauer and colleagues introduced a language-model watermark of this kind. Other research, including work on the limits of detecting generated text, examines how editing and differences between human and machine distributions affect detection. These studies address particular assumptions and methods. They do not establish that every watermarked passage is detectable after every transformation, or that an unmarked passage must be human-authored.\n\nA practical example illustrates why error rates matter. Suppose a hypothetical detector examines 1,000 pieces, of which 100 are generated. If it identifies 90 of those and falsely flags five percent of the 900 human pieces, it produces 90 true flags and 45 false flags. One-third of the flagged pieces would then be human-written. These invented numbers illustrate how prevalence and false-positive rates jointly shape the meaning of a result; they are not performance claims about a product.\n\nShort passages, paraphrasing, translation, mixed authorship, formatting changes, and domain differences can complicate interpretation. Some transformations weaken a signal, while common language patterns can produce accidental matches. Detector confidence may refer to a statistical test under a particular model rather than the probability that a specific student cheated. Thresholds trade missed detections against false accusations, and evaluation should reflect the actual languages and writing tasks involved.\n\nIn education, a useful activity asks learners to compare visible disclosure, signed provenance, watermark checks, and post-hoc text detection. For each, they state what evidence is provided and what remains unknown. A detector output can prompt further examination where appropriate, but should not be the sole basis for a misconduct decision. Process evidence, transparent assignment expectations, opportunities to explain work, and a fair review route are more informative about what happened in a particular case.\n\nWatermarking can contribute to content transparency when adopted and evaluated carefully. Its limits are part of its design, not details to hide in a footnote. Educators should ask which generator and transformations the method covers, how false positives were measured, and whether the available text is sufficient. The central habit is to interpret a technical signal within its scope rather than turn it into certainty about a person's authorship or intent.",
    "coreIdeas": [
      "Watermarks are deliberately embedded signals; post-hoc detectors infer generation from observed features without requiring such a signal.",
      "Detection depends on the scheme, text length, transformations and tested population, while statistical confidence is not a misconduct probability.",
      "False positives and prevalence affect the meaning of a flag, requiring process evidence and a fair review rather than automatic attribution."
    ],
    "educationConnection": "Use a hypothetical detection table to calculate true and false flags, then compare what watermarks, provenance and writing-process evidence can establish about an assignment.",
    "relatedConcepts": [
      "Statistical watermarking",
      "False-positive rate",
      "Base-rate effects"
    ],
    "sourceUrls": [
      {
        "label": "Kirchenbauer et al.: A Watermark for Large Language Models",
        "url": "https://arxiv.org/abs/2301.10226"
      },
      {
        "label": "Sadasivan et al.: Can AI-Generated Text Be Reliably Detected?",
        "url": "https://arxiv.org/abs/2303.11156"
      }
    ]
  },
  {
    "id": "academy-178",
    "listingIdentifier": "Educational Theory 89",
    "title": "Argumentation in Science Learning",
    "slug": "argumentation-in-science-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-14T08:00:00.000Z",
    "image": "/images/academy/covers/academy-178-argumentation-in-science-learning.png",
    "summaryAudio": "/audio/academy/academy-178-argumentation-in-science-learning-summary.m4a",
    "tags": [
      "scientific argumentation",
      "evidence reasoning",
      "science education"
    ],
    "imageAlt": "A Black science teacher and Latina and White adult learners compare insulated cups and a cooling chart while discussing explanations.",
    "summaryAudioTitle": "Listen to Argumentation in Science Learning",
    "shortSummary": "Scientific argumentation connects claims, evidence and reasoning while testing alternatives. Educators can teach learners to qualify and revise explanations rather than merely defend an answer.",
    "fullSummary": "Argumentation in science learning is the process of constructing, evaluating, and revising claims using evidence and reasoning. A scientific argument connects what is observed to what is concluded and explains why the connection is warranted. Learners also examine alternatives and limitations. The purpose is to improve an explanation through public scrutiny, with disagreement directed toward ideas and evidence rather than toward the worth of a person.\n\nA claim answers a question. Evidence consists of relevant observations or information judged sufficiently trustworthy for that question. Reasoning explains how the evidence supports the claim using scientific ideas. Counterarguments and rebuttals examine competing interpretations. These distinctions are useful scaffolds, but completing boxes labeled with them does not guarantee good reasoning. A long list of measurements can still be irrelevant, and a confident claim can exceed what the data support.\n\nConsider a class comparing materials for insulating a cup of warm water. Groups begin with similar water volumes and temperatures, measure temperature after the same interval, and record room conditions. One group claims that its material is best because its cup stayed warmest. Another notices that the group's lid differed. The challenge is scientifically valuable: lid differences offer an alternative explanation. Learners revise the comparison or qualify the claim instead of treating the objection as an attempt to win a debate.\n\nThe teacher can make the reasoning visible by asking why a measurement counts as evidence, which variables need control, and what result would weaken the proposed explanation. Students can compare two plausible arguments built from the same data and identify where their assumptions differ. This work connects disciplinary knowledge with evaluation of evidence. Without relevant scientific understanding, generic discussion techniques alone may produce fluent but unsupported arguments.\n\nThe National Research Council's science framework treats argument from evidence as a central scientific practice. Osborne, Erduran and Simon studied classroom approaches designed to improve argumentation in school science. Such work supports deliberate teaching and analysis of argumentative moves, while effects depend on the particular tasks, teaching and learners involved. It does not imply that adding a debate to any lesson automatically strengthens scientific understanding.\n\nParticipation structures matter. Give learners time to examine data before speaking, allow written or diagrammatic contributions, and invite challenges from several people rather than relying on the fastest speaker. Model how to acknowledge a good objection and change a claim. Assessment can consider relevance of evidence, coherence of reasoning, attention to alternatives, and appropriate qualification. Rewarding only a predetermined conclusion can undermine the willingness to expose uncertainty or revise an explanation.\n\nA useful closing task asks each learner to state the strongest current claim, the evidence supporting it, and one remaining uncertainty. Comparing this with an earlier explanation reveals how reasoning developed. Scientific argumentation does not require treating every position as equally credible: claims must meet disciplinary standards and respond to evidence. Its educational value lies in learning how knowledge is justified, challenged, and improved while maintaining respectful conditions for people to take intellectual risks.",
    "coreIdeas": [
      "A scientific argument explains why relevant evidence supports a claim and how alternative interpretations are addressed.",
      "Argumentation depends on disciplinary knowledge and trustworthy data, so generic discussion or worksheet labels are insufficient.",
      "Teaching and assessment should reward justified revision, appropriate uncertainty and equitable opportunities to contribute."
    ],
    "educationConnection": "Compare insulation-test claims, introduce a plausible confounding variable, and ask learners to revise the investigation or qualify the conclusion using explicit reasoning.",
    "relatedConcepts": [
      "Claims and evidence",
      "Rebuttals",
      "Scientific justification"
    ],
    "sourceUrls": [
      {
        "label": "National Research Council: Science and Engineering Practices",
        "url": "https://www.nationalacademies.org/read/13165/chapter/7"
      },
      {
        "label": "Osborne, Erduran and Simon: Enhancing the Quality of Argumentation in School Science",
        "url": "https://discovery.ucl.ac.uk/10000653/1/Osborne2004Enhancing994.pdf"
      }
    ]
  },
  {
    "id": "academy-179",
    "listingIdentifier": "AI Knowledge 90",
    "title": "Red-Teaming Educational AI",
    "slug": "red-teaming-educational-ai",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-15T08:00:00.000Z",
    "image": "/images/academy/covers/academy-179-red-teaming-educational-ai.png",
    "summaryAudio": "/audio/academy/academy-179-red-teaming-educational-ai-summary.m4a",
    "tags": [
      "red teaming",
      "educational AI safety",
      "system evaluation"
    ],
    "imageAlt": "A South Asian teacher and Black and White adult colleagues review a fictional course-assistant test and a risk-response diagram.",
    "summaryAudioTitle": "Listen to Red-Teaming Educational AI",
    "shortSummary": "Red-teaming tests how an educational AI workflow fails under challenging conditions. Useful findings are bounded, reproducible and tied to concrete consequences, fixes and regression checks.",
    "fullSummary": "Red-teaming educational AI is an organized attempt to discover how a system might fail under challenging, unexpected, or adversarial conditions. The activity starts from a defined use and plausible harm. A tutoring assistant, a grading tool, and an administrative chatbot have different failure possibilities. Testing should examine the complete workflow, including retrieved material, tool permissions, user interfaces, and human review, because a model's isolated response may not reveal the eventual consequence.\n\nA useful test plan specifies who may interact with the system, what information and actions they can access, and which boundaries matter. Cases might examine whether a tutor reveals another learner's data, follows instructions embedded in an untrusted document, supplies an incorrect explanation with false confidence, or mishandles a request for accessible support. The aim is to reveal a reproducible failure mechanism rather than collect sensational screenshots.\n\nConsider a school assistant that answers questions from an approved course folder. In a controlled test environment, evaluators add a fictional document containing both legitimate course information and conflicting instructions directed at the assistant. They check whether the application treats the document as evidence or allows it to alter its operating rules. Synthetic names and records keep the test from exposing real student information. The educational failure is defined beforehand: unauthorized disclosure or a misleading answer attributed to course policy.\n\nResearchers have explored using language models to generate challenging test inputs, as in work on red-teaming language models with language models. Automated generation can broaden the search, but the resulting cases still need human interpretation. A model may produce implausible scenarios or miss culturally and contextually important risks. Educators, accessibility specialists, and people familiar with the actual learning setting contribute knowledge that general automated tests may lack.\n\nFor each finding, record the system version, relevant configuration, minimal test case, observed behavior, expected behavior, and possible consequence. Distinguish a repeatable issue from a one-off result while retaining uncertainty where outputs vary. Prioritize by severity, likelihood, exposure, and available remedies. Fixes should be checked against the original case and related variations, then tested for unintended effects on ordinary educational use, including unnecessary refusals or lost accessibility.\n\nRed-teaming requires authorization and a bounded environment. Set limits on data, tools, external actions, and what testers may attempt. Provide a route for stopping a test and handling sensitive findings. Protect participants from unnecessary exposure to disturbing material, and avoid using real learners as unwitting test subjects. These arrangements make the evidence interpretable as well as keeping the exercise proportionate to the institutional purpose.\n\nA clean test run is evidence about the cases attempted, not proof that the system is safe. Coverage changes when models, prompts, tools, content or user populations change. NIST's generative AI risk guidance places evaluation within ongoing risk management rather than a single certification moment. Schools should retain a route for reporting real incidents and revisiting earlier assumptions. Red-teaming is valuable when discovered failures lead to concrete changes and honest limits on the system's use.",
    "coreIdeas": [
      "Start from a specific use, relevant actors and plausible harm, then test the whole application workflow rather than the model alone.",
      "Automated challenge generation can broaden coverage, but contextual expertise and documented human interpretation remain necessary.",
      "Use authorized environments and synthetic data, verify fixes and ordinary usefulness, and treat passing cases as bounded evidence rather than proof of safety."
    ],
    "educationConnection": "Create a controlled fictional course assistant, test whether untrusted documents alter its instructions, document the failure mechanism, and verify a fix without using real student data.",
    "relatedConcepts": [
      "Threat modeling",
      "Adversarial evaluation",
      "Regression testing"
    ],
    "sourceUrls": [
      {
        "label": "Perez et al.: Red Teaming Language Models with Language Models",
        "url": "https://arxiv.org/abs/2202.03286"
      },
      {
        "label": "NIST: Generative Artificial Intelligence Profile",
        "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
      }
    ]
  },
  {
    "id": "academy-180",
    "listingIdentifier": "Educational Theory 90",
    "title": "Concept Mapping",
    "slug": "concept-mapping",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-15T08:00:00.000Z",
    "image": "/images/academy/covers/academy-180-concept-mapping.png",
    "summaryAudio": "/audio/academy/academy-180-concept-mapping-summary.m4a",
    "tags": [
      "concept mapping",
      "knowledge representation",
      "formative dialogue"
    ],
    "imageAlt": "A Latina teacher and Black and East Asian adult learners revise a sparse plant-growth concept map.",
    "summaryAudioTitle": "Listen to Concept Mapping",
    "shortSummary": "Concept maps make relationships explicit through labeled propositions. Their value depends on a focus question, explanation and revision, with learning checked beyond the appearance of the diagram.",
    "fullSummary": "A concept map represents concepts and the meaningful relationships among them. Concepts usually appear in nodes, while labeled links form propositions that can be read as statements. For example, 'roots absorb water' connects two concepts through a specific relationship. The aim is to externalize an explanation so its organization can be examined, discussed and revised. The number of boxes or the neatness of the layout is secondary.\n\nNovak and Cañas recommend beginning with a focus question that gives the map a purpose. 'How do roots and leaves support plant growth?' is more useful than an unrestricted instruction to map everything about plants. Learners select relevant concepts, organize them, and label connections. A hierarchy can show broad and more specific ideas, while cross-links can reveal relationships between parts of the explanation that initially seemed separate.\n\nConsider a learner who draws roots, water, leaves, light, sugars and growth. Links explain that roots absorb water, leaves use light in photosynthesis, and sugars support growth. A teacher notices an unlabeled arrow from soil to food and asks what the learner means. The conversation reveals the belief that plants obtain their food directly from soil. Revising the map becomes a way to examine that explanation and distinguish mineral nutrients from the sugars produced through photosynthesis.\n\nThe map is a prompt for interpretation, not a transparent picture of the mind. A missing link could reflect limited time, unfamiliarity with mapping, or uncertainty about notation. A learner may also produce a correct-looking map by copying without understanding. Ask for explanations of selected propositions and use other tasks to check meaning. When maps are assessed, criteria should prioritize accurate relationships, relevance to the focus question, and justified integration rather than decorative complexity.\n\nConcept mapping can support planning, discussion, diagnosis and review, but the activity's design matters. A learner who maps while reading may engage in different processes from one who reconstructs a map from memory and then checks it. Experiments by Karpicke and Blunt found benefits for retrieval practice relative to the particular elaborative mapping condition studied. Later work investigated retrieval-based concept mapping. These findings caution against assuming that every diagramming activity produces the same learning benefit.\n\nA practical sequence starts with a small provisional map, invites explanation and comparison, and ends with revision after evidence or feedback. Teachers can supply a few concepts for novices while allowing learners to add or challenge connections. In collaborative work, require discussion of the linking phrases so one person does not simply arrange everyone else's words. Accessible alternatives can use structured text propositions or tactile representations where a spatial diagram creates barriers.\n\nKeep maps revisable and attach them to a worthwhile question. Comparing early and later versions can reveal a changing explanation, but improvement in the artifact should be checked against independent understanding. Concept maps are most useful when they make relationships available for reasoning. They become less useful when students learn to satisfy a visual format without asking whether the propositions are scientifically or logically defensible.",
    "coreIdeas": [
      "Concept nodes and labeled links form propositions that can be examined for meaning and correctness.",
      "A focus question, hierarchy and cross-links help organize an explanation, while missing or attractive links require interpretation rather than automatic scoring.",
      "Mapping with a source present and reconstructing from memory are different learning activities; assess understanding beyond the finished artifact."
    ],
    "educationConnection": "Ask learners to map how roots and leaves support growth, explain selected links, revise misconceptions after discussion, and answer a transfer question independently.",
    "relatedConcepts": [
      "Propositions",
      "Knowledge organization",
      "Retrieval-based mapping"
    ],
    "sourceUrls": [
      {
        "label": "Novak and Cañas: The Theory Underlying Concept Maps",
        "url": "https://cmap.ihmc.us/Publications/ResearchPapers/TheoryUnderlyingConceptMaps.pdf"
      },
      {
        "label": "Karpicke and Blunt: Retrieval Practice and Concept Mapping",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21252317/"
      },
      {
        "label": "Blunt and Karpicke: Learning With Retrieval-Based Concept Mapping",
        "url": "https://learninglab.psych.purdue.edu/downloads/2014/2014_Blunt_Karpicke_JEDP.pdf"
      }
    ]
  },
  {
    "id": "academy-181",
    "listingIdentifier": "AI Knowledge 91",
    "title": "Using Language Models as Evaluators",
    "slug": "using-language-models-as-evaluators",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-16T08:00:00.000Z",
    "image": "/images/academy/covers/academy-181-using-language-models-as-evaluators.png",
    "summaryAudio": "/audio/academy/academy-181-using-language-models-as-evaluators-summary.m4a",
    "tags": [
      "AI evaluation",
      "language model judges",
      "rubric calibration"
    ],
    "imageAlt": "A White teacher and South Asian and Black adult educators evaluate two geometry explanations against an annotated rubric.",
    "summaryAudioTitle": "Listen to Using Language Models as Evaluators",
    "shortSummary": "Language models can help review AI outputs, but their judgments need calibration. Position, verbosity, shared errors and untrusted inputs can distort scores and preferences.",
    "fullSummary": "Using a language model as an evaluator means asking it to judge another output according to criteria. It might compare two explanations, check a lesson draft against a rubric, or identify unsupported claims in a response. This can make large-scale review more manageable, but the evaluator is itself a fallible model. A numerical score and a fluent justification are outputs to validate, not independent evidence that the judgment is correct.\n\nEvaluation can take several forms. A pointwise judge scores one response, while a pairwise judge chooses between alternatives. A reference-based evaluation compares with an expected answer; an open-ended rubric may require judgment without a single reference. These designs answer different questions. A preference for one explanation does not establish mathematical correctness, and agreement on a small benchmark does not establish suitability for a school's curriculum or learners.\n\nResearch on MT-Bench and Chatbot Arena examined strong language models as judges and identified biases such as sensitivity to position and verbosity. Other work on evaluator fairness demonstrates how changing the order of responses can change judgments. The practical implication is to test evaluation behavior, not merely write a more elaborate rubric. A model may reward confident presentation, favor familiar stylistic patterns, or overlook a subtle error shared with the generator.\n\nImagine two explanations of why a fraction with a fixed positive numerator becomes smaller as its positive denominator increases. One is concise and correct; the other is longer but includes an invalid generalization. Teachers independently judge both using explicit criteria. The automated judge receives the pair in both orders. If it favors the longer response or reverses its preference when positions change, the result reveals a weakness in the evaluation process rather than a discovery about teaching quality.\n\nCalibration uses examples with carefully reviewed judgments, including borderline and failure cases. Compare the model with independent reviewers and inspect disagreements by criterion. Keep generator and evaluator versions, prompts, input context and scoring rules recorded. Where repeated outputs vary, report that variability. Using a different model can reduce some shared errors, but two models can still inherit similar blind spots or favor the same superficial cues.\n\nEvaluated content should be treated as untrusted input. A candidate response might contain instructions that attempt to influence the judge. The surrounding application must preserve the evaluation task and validate output structure, while human checks examine whether the reasoning supports the score. Sensitive student work also requires appropriate handling. Automated review should not create an unnoticed route for sharing identifiable writing with an external service.\n\nA useful role is triage: identify likely problems, prioritize human attention, and summarize evidence for review. Consequential judgments need a process that allows correction and records who is responsible. Even a high agreement rate leaves open whether rare failures affect important decisions. Language-model evaluation is strongest when bounded to a clear task, checked against representative human evidence, and combined with deterministic checks wherever correctness can be established directly.",
    "coreIdeas": [
      "Pointwise, pairwise and reference-based judging answer different questions, and a preference score does not establish factual or mathematical correctness.",
      "Test for position, verbosity and shared-model biases using representative examples and independent human judgments.",
      "Record evaluator configuration, protect the task from untrusted content, and use automated judgments as bounded evidence with a correction route."
    ],
    "educationConnection": "Have teachers judge two explanations independently, then compare an automated judge's decisions in both response orders and inspect the reasons for disagreement.",
    "relatedConcepts": [
      "LLM-as-a-judge",
      "Evaluator calibration",
      "Position bias"
    ],
    "sourceUrls": [
      {
        "label": "Zheng et al.: Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
        "url": "https://arxiv.org/abs/2306.05685"
      },
      {
        "label": "Wang et al.: Large Language Models Are Not Fair Evaluators",
        "url": "https://arxiv.org/abs/2305.17926"
      }
    ]
  },
  {
    "id": "academy-182",
    "listingIdentifier": "Educational Theory 91",
    "title": "Assessment Literacy",
    "slug": "assessment-literacy",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-16T08:00:00.000Z",
    "image": "/images/academy/covers/academy-182-assessment-literacy.png",
    "summaryAudio": "/audio/academy/academy-182-assessment-literacy-summary.m4a",
    "tags": [
      "assessment literacy",
      "teacher judgment",
      "measurement quality"
    ],
    "imageAlt": "An East Asian teacher and Black and Latina adult educators examine proportional-reasoning work and revise an assessment plan.",
    "summaryAudioTitle": "Listen to Assessment Literacy",
    "shortSummary": "Assessment literacy connects learning goals, task design, interpretation and action. Educators use it to judge what evidence supports a decision, communicate clearly and recognize limits.",
    "fullSummary": "Assessment literacy is the capacity to design, interpret, communicate, and use assessment information responsibly. For educators, it includes understanding what a task can reveal about learning and what it cannot. It also involves explaining criteria and decisions so learners can act on them. Knowing statistical terms is useful, but assessment literacy becomes visible in the judgments made before, during, and after collecting evidence.\n\nStart with the intended learning and the decision. A quick classroom question may help choose the next example, while a certification assessment supports a more consequential claim. The evidence needed differs. Teachers select tasks that elicit the relevant knowledge or performance, interpret responses against appropriate criteria, and decide what action follows. A score becomes meaningful through that chain of reasoning rather than through its numerical precision alone.\n\nConsider a mathematics task intended to assess proportional reasoning. It uses a long, unfamiliar story and requires students to type into a difficult interface. A low score might reflect the target concept, reading demands, interface barriers, or several of these together. An assessment-literate teacher examines work samples and asks follow-up questions before concluding that the learner lacks proportional understanding. Revising the task can improve the evidence without reducing the intellectual goal.\n\nReliability concerns consistency, while validity concerns support for the intended interpretation and use. Fairness requires examining access and whether irrelevant factors disadvantage some learners. These ideas interact. A perfectly consistent score can still represent the wrong construct, and an accessible task can still sample too little content. Historical professional standards for teacher assessment competence include choosing methods, interpreting results, grading, communicating findings, and recognizing unethical or inappropriate practices.\n\nPractical literacy also includes reading a result cautiously. A class average can hide different patterns of misunderstanding; a percentage can conceal a very small number of questions. A change in score may reflect different task difficulty rather than learning. Teachers should consider uncertainty and examine evidence at the level needed for the decision. They need not calculate every possible statistic, but should know when a claim requires specialist measurement expertise.\n\nCommunication is part of assessment itself. Explain the purpose, criteria, available support and how results will be used. Feedback should help learners identify a next step, and students should have a reasonable way to question errors. In reading and writing, NCTE guidance emphasizes assessment as inquiry situated in classroom and community life. This perspective encourages teachers to consider multiple sources of evidence and the consequences of their interpretations.\n\nA useful professional-learning activity asks colleagues to bring one task, anonymized responses, a proposed interpretation, and the resulting teaching decision. They examine alternative explanations and identify what additional evidence would resolve uncertainty. The discussion can lead to a revised task, clearer criteria, or a different instructional response. Assessment literacy develops through this disciplined connection between learning goals, evidence and action, with attention to both technical quality and the people affected by the decision.",
    "coreIdeas": [
      "Begin with the intended learning and decision, then select tasks that provide relevant evidence for that purpose.",
      "Consistency, validity and fairness address different aspects of assessment; a precise score can still support an inappropriate interpretation.",
      "Responsible communication, attention to uncertainty and collaborative review of alternative explanations make assessment knowledge practical."
    ],
    "educationConnection": "Review one assessment task with colleagues, identify the claim its scores are meant to support, inspect alternative explanations in student responses, and revise the resulting teaching decision.",
    "relatedConcepts": [
      "Assessment competence",
      "Construct alignment",
      "Evidence interpretation"
    ],
    "sourceUrls": [
      {
        "label": "AFT, NCME and NEA: Standards for Teacher Competence in Educational Assessment",
        "url": "https://eric.ed.gov/?id=ED323186"
      },
      {
        "label": "NCTE: Standards for the Assessment of Reading and Writing",
        "url": "https://ncte.org/resources/standards/standards-for-the-assessment-of-reading-and-writing-revised-edition-2009/"
      }
    ]
  }
];
