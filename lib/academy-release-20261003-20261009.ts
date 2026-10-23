import type { AcademyLesson } from "@/lib/types";

export const academyRelease20261003To20261009: AcademyLesson[] = [
  {
    "id": "academy-155",
    "listingIdentifier": "AI Knowledge 78",
    "title": "Speech Recognition Across Accents",
    "slug": "speech-recognition-across-accents",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-03T08:00:00.000Z",
    "image": "/images/academy/covers/academy-155-speech-recognition-across-accents.png",
    "summaryAudio": "/audio/academy/academy-155-speech-recognition-across-accents-summary.m4a",
    "tags": [
      "speech recognition",
      "accent diversity",
      "transcript accuracy"
    ],
    "imageAlt": "A Black woman teacher and East Asian and White adult learners listen to a recording and compare an annotated transcript beside an evaporation sketch.",
    "summaryAudioTitle": "Listen to Speech Recognition Across Accents",
    "shortSummary": "How accent, dialect, recording conditions, and training coverage affect speech recognition, and how educators can evaluate transcripts without confusing recognition errors with learning difficulties.",
    "fullSummary": "Speech recognition across accents concerns how reliably a system converts different ways of speaking into written words. An accent is a pattern of pronunciation; a dialect can also involve vocabulary and grammar. Neither is a measure of intelligence or subject knowledge. A recognizer that works well for one speech community can produce substantial errors for another, even when human listeners readily understand both.\n\nRecognition models learn relationships between recorded sound and text. Their performance depends on the languages, speakers, recording conditions, and transcription conventions represented in training. An unfamiliar pronunciation may be mapped to the wrong word, while a language model can prefer a common phrase over the speaker's intended technical term. Background noise, overlapping voices, microphone quality, and code-switching interact with these differences. Increasing training data can improve coverage without guaranteeing equal performance.\n\nKoenecke and colleagues documented unequal error rates across Black and White speakers in five commercial systems evaluated in their 2020 study. Those findings establish a problem in the systems and samples studied, not a permanent ranking of today's products. Research on large-scale weak supervision, including Whisper, explores broader recognition across languages and domains. A school still needs evidence from its own speakers, tasks, and current software version before relying on a recognizer.\n\nConsider an adult science class recording explanations of evaporation. A learner says that particles escape from the surface, but the transcript substitutes an unrelated word for 'surface'. If an automated assessor grades the transcript, a recognition error becomes an apparent conceptual error. The teacher compares audio and text, corrects the transcript with the learner, and assesses the explanation itself. The class then examines how an accurate overall transcript can still lose the one word that carries the scientific meaning.\n\nA practical evaluation uses consented recordings representing relevant accents, languages, speaking styles, and classroom conditions. Reviewers create reference transcripts and calculate substitutions, deletions, and insertions relative to the reference word count. They also inspect names, quantities, negations, and subject terminology because equal word error rates can hide unequal educational consequences. Report results by meaningful conditions without treating small samples as definitive group estimates. Comparing the same recordings across systems makes differences easier to interpret.\n\nTeachers can provide a vocabulary list where supported, improve microphone placement, and allow speakers to review their words. These adjustments should reduce technical barriers without requiring learners to suppress their linguistic identities. Provide text entry or human transcription when recognition repeatedly fails. Retain recordings only as long as the educational purpose requires and explain who can access them.\n\nThe central decision is whether the remaining errors are acceptable for the intended use. A rough searchable note and a transcript used to grade an oral examination demand different assurance. Recognition confidence is not proof that a sentence is correct, and fluent text may conceal a changed meaning. Accent-aware evaluation therefore combines technical measurement, speaker participation, and a correction route that protects the learner's intended message.",
    "coreIdeas": [
      "Accent and dialect differences interact with training coverage and recording conditions; recognition errors are properties of a system in context, not evidence of learner ability.",
      "Word error rate should be supplemented by checks of educationally important terms, negations, quantities, and differences across relevant speaker groups.",
      "Learner review, correction routes, alternative input methods, and task-specific acceptance criteria are essential when transcripts influence educational decisions."
    ],
    "educationConnection": "Compare consented recordings and transcripts of the same science explanation, identify errors that change the concept, and decide which uses need human verification.",
    "relatedConcepts": [
      "Word error rate",
      "Dialect variation",
      "Speech-to-text assessment"
    ],
    "sourceUrls": [
      {
        "label": "Koenecke et al.: Racial disparities in automated speech recognition",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32205437/"
      },
      {
        "label": "Radford et al.: Robust Speech Recognition via Large-Scale Weak Supervision",
        "url": "https://arxiv.org/abs/2212.04356"
      }
    ]
  },
  {
    "id": "academy-156",
    "listingIdentifier": "Educational Theory 78",
    "title": "School Belonging",
    "slug": "school-belonging",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-03T08:00:00.000Z",
    "image": "/images/academy/covers/academy-156-school-belonging.png",
    "summaryAudio": "/audio/academy/academy-156-school-belonging-summary.m4a",
    "tags": [
      "school belonging",
      "student relationships",
      "inclusive participation"
    ],
    "imageAlt": "A Latina teacher welcomes Black and South Asian adult learners into a project group around a shared diagram and annotated notebook.",
    "summaryAudioTitle": "Listen to School Belonging",
    "shortSummary": "School belonging grows through caring relationships, fair routines, and meaningful participation; it must be examined through students' experiences rather than inferred from attendance or cheerful messages.",
    "fullSummary": "School belonging is the experience of being accepted, valued, and included in a learning community. It includes feeling that adults and peers care about one's learning and about oneself as a person. Belonging is related to attendance, participation, and wellbeing, but it is not identical to any of them. A student can attend every lesson while feeling invisible, or enjoy friendships while feeling that academic contributions are not taken seriously.\n\nThe classroom sends belonging signals through ordinary encounters. A teacher who learns names, follows up after absence, and responds respectfully to uncertainty makes membership concrete. Peer invitations, access to meaningful roles, and fair treatment also matter. Conversely, repeated mispronunciation, exclusion from group decisions, inaccessible activities, and stereotyped expectations can communicate that participation is conditional. Such signals accumulate within wider institutional practices rather than operating as isolated motivational messages.\n\nCDC guidance describes school connectedness through caring relationships and support. Its analysis of the 2021 US Youth Risk Behavior Survey found associations between connectedness and several health-related experiences and behaviors. Because that survey is observational and cross-sectional, it cannot show that a particular belonging activity caused an outcome. The practical implication is to investigate relationships and conditions carefully, not to promise that a short intervention will resolve every difficulty.\n\nImagine a secondary school where students entering midyear rarely speak during project meetings. Staff initially interpret their quietness as low confidence. Brief conversations reveal that project roles were assigned before they arrived and that classmates keep referring to shared experiences they do not know. The teacher introduces rotating roles, explains the group's working routines, and makes space for newcomers' relevant knowledge. This changes access to participation instead of asking students simply to feel more positive.\n\nEducators can examine belonging through short confidential surveys, individual conversations, observation, and student suggestions. Ask about identifiable experiences: having an adult to approach, being listened to, receiving help, and being able to contribute without humiliation. Report patterns carefully, protect small groups from identification, and avoid converting a survey score into a permanent label. When students disagree with the school's positive self-image, that disagreement is evidence to explore.\n\nA useful improvement cycle selects one concrete barrier, changes the routine, and checks whether students experience a difference. A class might replace self-selected teams with thoughtfully supported grouping, establish a reliable help route, or ensure that absent learners can rejoin activities. Students should help judge the change. Increased attendance alone would be insufficient if participation remains constrained or students feel pressured to report satisfaction.\n\nBelonging should support difference rather than demand conformity. Learners need room to disagree, maintain languages and cultural affiliations, and request access adjustments without risking membership. Friendly messages cannot compensate for discrimination, unsafe relationships, or inaccessible teaching. Educators therefore connect interpersonal care with fair procedures and genuine opportunities to contribute. The aim is a community in which learners can say both 'I am part of this' and 'my voice can change how this works'.",
    "coreIdeas": [
      "Belonging concerns accepted and valued membership; attendance, friendship, and achievement are related indicators rather than interchangeable measures.",
      "Everyday interactions and institutional routines communicate whose contributions count and who can obtain support.",
      "Improvement requires listening to students and changing concrete barriers while treating observational evidence cautiously."
    ],
    "educationConnection": "Invite students to identify one routine that helps or hinders participation, revise it together, and check the experience again through confidential feedback and observation.",
    "relatedConcepts": [
      "School connectedness",
      "Relational support",
      "Participation opportunities"
    ],
    "sourceUrls": [
      {
        "label": "CDC: School Connectedness Helps Students Thrive",
        "url": "https://www.cdc.gov/youth-behavior/school-connectedness/"
      },
      {
        "label": "CDC: School Connectedness and Risk Behaviors, YRBS 2021",
        "url": "https://www.cdc.gov/mmwr/volumes/72/su/su7201a2.htm"
      }
    ]
  },
  {
    "id": "academy-157",
    "listingIdentifier": "AI Knowledge 79",
    "title": "Caption Alignment and Timing",
    "slug": "caption-alignment-and-timing",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-04T08:00:00.000Z",
    "image": "/images/academy/covers/academy-157-caption-alignment-and-timing.png",
    "summaryAudio": "/audio/academy/academy-157-caption-alignment-and-timing-summary.m4a",
    "tags": [
      "captions",
      "audio alignment",
      "accessibility"
    ],
    "imageAlt": "A White woman teacher and Black and South Asian adult learners align caption cues with a classroom video timeline.",
    "summaryAudioTitle": "Listen to Caption Alignment and Timing",
    "shortSummary": "Why correct words are only part of caption quality: educators also need meaningful cue boundaries, readable pacing, speaker information, and synchronization with visual teaching actions.",
    "fullSummary": "Caption alignment and timing connect written language to the moment it is spoken. A transcript records content; captions divide that content into timed segments that appear while a video plays. Good captions also identify relevant speakers and meaningful sounds. Accurate words displayed several seconds late can still make an explanation difficult to follow, especially when a teacher points to a changing diagram or demonstrates a procedure.\n\nAn automatic pipeline may first recognize speech and then estimate timestamps. Forced alignment takes an existing transcript and tries to locate its words in the audio. Voice activity detection identifies likely stretches of speech, helping separate utterances from silence. These are different tasks: alignment cannot reliably repair a wrong transcript, and detecting a voice does not establish what was said. Research systems such as WhisperX combine recognition, voice activity detection, and alignment to improve temporal precision.\n\nThe final caption file usually groups words into cues with start and end times. Cue boundaries should follow meaningful phrases where possible, giving readers time to understand a unit without covering important visual information. Word-level timestamps can help an editor create cues, but a stream of rapidly changing individual words is not automatically accessible. Reading speed, line breaks, punctuation, and speaker changes all affect usability alongside timing.\n\nConsider a chemistry demonstration in which a lecturer says 'add the water after removing the container from the heat'. If captions appear too early, viewers may associate the instruction with the wrong action; if a cue breaks after 'add the water', its first fragment can temporarily suggest an unsafe sequence. An editor checks the whole sentence against the demonstration, keeps the relevant phrase together, and confirms that the caption remains visible long enough to read.\n\nA practical classroom exercise begins with a short video containing a pause, a technical term, and a change of speaker. Learners correct the transcript before adjusting cue boundaries. They then watch with sound muted and compare the text with gestures and diagrams. Next they listen while watching the captions, checking whether each cue starts and ends near the corresponding speech. These two passes reveal different problems: missing sound information versus poor synchronization.\n\nW3C accessibility guidance emphasizes captions for speech and relevant non-speech audio. An important alarm or audience response may need a concise description; decorative background detail need not overwhelm the lesson. Captions should avoid obscuring equations, faces used for communication, and other essential visual information. A separate transcript remains valuable for searching and reviewing, while captions serve the time-based experience. Providing one does not make the other unnecessary in every context.\n\nAutomatic timing is a starting point, particularly with overlapping speech, unfamiliar names, accents, music, or noisy rooms. Editing the video can invalidate previously accurate timestamps, so review the exported version after cuts and speed changes. Live captions require different expectations because processing creates delay and correction may occur after display. For both live and recorded teaching, the quality question is whether learners can connect the right words, speaker, sounds, and visual event without avoidable effort.",
    "coreIdeas": [
      "Speech recognition, voice activity detection, and forced alignment solve different problems; an accurate transcript should precede final timing review.",
      "Captions need readable phrase grouping and synchronization, not merely a timestamp for every word.",
      "Review the exported video for timing, speaker changes, meaningful sounds, and captions obscuring essential visuals."
    ],
    "educationConnection": "Have learners repair captions on a short demonstration, checking once with muted sound and once alongside the audio to separate missing information from timing errors.",
    "relatedConcepts": [
      "Forced alignment",
      "Caption cues",
      "Accessible multimedia"
    ],
    "sourceUrls": [
      {
        "label": "Bain et al.: WhisperX",
        "url": "https://arxiv.org/abs/2303.00747"
      },
      {
        "label": "W3C WAI: Captions and Subtitles",
        "url": "https://www.w3.org/WAI/media/av/captions/"
      }
    ]
  },
  {
    "id": "academy-158",
    "listingIdentifier": "Educational Theory 79",
    "title": "Identity and Learning",
    "slug": "identity-and-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-04T08:00:00.000Z",
    "image": "/images/academy/covers/academy-158-identity-and-learning.png",
    "summaryAudio": "/audio/academy/academy-158-identity-and-learning-summary.m4a",
    "tags": [
      "learner identity",
      "participation",
      "recognition"
    ],
    "imageAlt": "A South Asian woman teacher listens as a Black adult learner explains a budgeting diagram to a White adult classmate.",
    "summaryAudioTitle": "Listen to Identity and Learning",
    "shortSummary": "Identity develops through learners' stories, participation, and recognition. Educators can widen meaningful disciplinary roles while avoiding fixed labels and checking conceptual learning separately.",
    "fullSummary": "Identity and learning concern who learners understand themselves to be, how others recognize them, and what participation becomes possible. Saying 'I am a mathematics person' is more than reporting a recent mark. It expresses a relationship to a subject, its activities, and the people associated with it. Such identities develop through experience and recognition; they are neither fixed personality types nor straightforward reflections of ability.\n\nDifferent theories use identity differently. Sfard and Prusak proposed examining significant stories people tell about themselves and others, including accounts of current identity and identity they expect or are expected to acquire. Other research emphasizes participation in practices and the roles available within them. These perspectives direct attention to evidence in stories, interactions, and opportunities rather than treating identity as an invisible trait that explains every behavior.\n\nA learner may be recognized as knowledgeable outside school while receiving little recognition in a classroom. Nasir and Hand's study of basketball and mathematics settings examined how participation structures offered different opportunities for engagement and identity. The lesson for educators is not that every class should resemble a sports team. It is that access to the activity, a meaningful role, and acknowledgement of contributions can influence how people see themselves as participants.\n\nConsider an adult returning to education who manages household budgets confidently but introduces herself as 'bad at maths'. During a lesson on percentages, she explains how comparing installment plans requires distinguishing a monthly payment from the total cost. The teacher asks classmates to examine her reasoning and connects it to the formal representation. Recognition is attached to a specific mathematical contribution, rather than to empty reassurance or an assumption that household experience automatically supplies every required concept.\n\nTeachers can broaden opportunities to develop subject identities by varying intellectually meaningful roles. In a science investigation, a learner might design a comparison, question a measurement, interpret a graph, or explain why evidence is insufficient. Rotating these responsibilities prevents one person from always becoming the recorder while another is always treated as the thinker. All roles require support, and students need access to the disciplinary knowledge needed to perform them well.\n\nListening to learners' stories can also reveal tensions. A student may value a subject while worrying that succeeding will separate them from friends, or may reject a label the teacher considers positive. Invite reflection without demanding personal disclosure or publicly assigning identity categories. Do not infer identity from ethnicity, language, gender, or one classroom observation. Recognition can constrain as well as enable when labels become expectations that learners cannot revise.\n\nIdentity-oriented teaching complements explicit instruction and assessment; it does not replace them. A changed self-description is not sufficient evidence of conceptual learning, and a correct answer does not show that a learner feels accepted in the field. Examine both understanding and participation over time. The practical aim is to make valued forms of knowing accessible and recognizable, so learners have credible opportunities to become the kinds of participants they wish to be.",
    "coreIdeas": [
      "Identity theories examine self-understanding, stories, recognition and participation rather than reducing identity to a stable ability label.",
      "Classroom roles and responses to contributions affect who can see themselves, and be seen, as a legitimate disciplinary participant.",
      "Identity-sensitive teaching requires meaningful access and support, respect for learners' self-descriptions, and separate evidence of understanding."
    ],
    "educationConnection": "Review a group investigation to see who designs, explains, questions, and records; rotate substantive roles and connect recognition to specific disciplinary contributions.",
    "relatedConcepts": [
      "Recognition",
      "Disciplinary participation",
      "Narrative identity"
    ],
    "sourceUrls": [
      {
        "label": "Sfard and Prusak: Telling Identities",
        "url": "https://discovery.ucl.ac.uk/10004312/1/Sfard_-_ER_148-2_-_6_Mar_05.pdf"
      },
      {
        "label": "Nasir and Hand: From the Court to the Classroom",
        "url": "https://doi.org/10.1080/10508400801986108"
      }
    ]
  },
  {
    "id": "academy-159",
    "listingIdentifier": "AI Knowledge 80",
    "title": "Handwriting Recognition",
    "slug": "handwriting-recognition",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-05T08:00:00.000Z",
    "image": "/images/academy/covers/academy-159-handwriting-recognition.png",
    "summaryAudio": "/audio/academy/academy-159-handwriting-recognition-summary.m4a",
    "tags": [
      "handwriting recognition",
      "OCR",
      "assessment evidence"
    ],
    "imageAlt": "A Black man teacher and White and East Asian adult learners compare handwritten geometry notes with a tablet transcription.",
    "summaryAudioTitle": "Listen to Handwriting Recognition",
    "shortSummary": "Handwriting recognition turns marks into text, but character recognition, mathematical layout, and interpretation remain separate problems that educators must verify against the original work.",
    "fullSummary": "Handwriting recognition converts handwritten marks into machine-readable text. It can make scanned notes searchable or help teachers organize written responses, but it does not automatically understand a student's reasoning. Recognizing the symbols in an answer, interpreting their arrangement, and judging the underlying concept are separate tasks. An error in the first stage can distort everything that follows.\n\nOffline recognition works from an image of writing on paper. Online recognition can also use information captured as a person writes with a digital pen, such as the order and direction of strokes. In image-based systems, software may locate writing, separate lines, normalize the image, and predict a sequence of characters or words. Modern approaches such as TrOCR combine visual representations with a text decoder, learning to connect image patterns with probable written sequences.\n\nLanguage patterns help resolve ambiguous marks but can also conceal mistakes. A decoder may turn an unfamiliar name into a common word, remove an unconventional spelling, or produce fluent text that differs from the page. Joined letters, faint pencil, crossed-out work, page shadows, unusual spacing, and mixed scripts complicate recognition. Mathematical notation adds two-dimensional structure: a small raised digit can be an exponent, while a horizontal line can indicate a fraction rather than punctuation.\n\nImagine a teacher digitizing an explanation of equivalent fractions. A learner writes three-sixths and simplifies it to one-half. The system reads a handwritten six as a zero and presents a seemingly nonsensical equation. Before offering corrective feedback, the teacher compares the recognized text with the original image. The problem is transcription, not necessarily fraction knowledge. Keeping the original beside the recognized version makes this distinction inspectable and allows the learner to correct the record.\n\nEvaluation should reflect the intended documents. A benchmark such as the IAM Handwriting Database offers an established resource for English handwriting research, but success on its writing does not establish accuracy for young children's work, another script, or a crowded mathematics worksheet. Compare outputs against carefully checked reference transcriptions and examine character and word errors. For formulas, inspect structural relationships as well as symbols, since a correct character in the wrong position can change the expression.\n\nA manageable classroom workflow starts with a small sample covering different writing styles and page conditions. Improve lighting and capture quality, preserve complete pages, and flag uncertain regions for review. Avoid silently replacing original spelling when the task concerns spelling itself. Separate genuine blank responses from unreadable or missed regions. Accessibility matters: a learner's motor differences or preferred notation should not become an automated penalty because the system was tested only on tidier writing.\n\nRecognition can support search, retrieval, and a teacher's first review when errors remain visible and reversible. Higher-stakes scoring demands stronger checks and a usable appeal route. Students should know when handwriting is being processed, where images are stored, and how corrections affect downstream feedback. The educational value comes from reducing administrative friction while preserving the evidence of thinking on the page, including revisions and partial work that a cleaned transcript might otherwise erase.",
    "coreIdeas": [
      "Offline recognition uses document images, while online recognition may also use pen trajectories and stroke order.",
      "Fluent recognized text can hide substitutions or lost layout; mathematical symbols and spatial relationships require special care.",
      "Evaluate representative handwriting and preserve originals, uncertainty flags and correction routes before using recognition for feedback or scoring."
    ],
    "educationConnection": "Digitize a small set of consented worked solutions, compare each transcription with the page, and classify symbol, layout and reasoning errors separately.",
    "relatedConcepts": [
      "Optical character recognition",
      "Character error rate",
      "Mathematical expression recognition"
    ],
    "sourceUrls": [
      {
        "label": "Li et al.: TrOCR",
        "url": "https://arxiv.org/abs/2109.10282"
      },
      {
        "label": "IAM Handwriting Database",
        "url": "https://fki.tic.heia-fr.ch/databases/iam-handwriting-database"
      }
    ]
  },
  {
    "id": "academy-160",
    "listingIdentifier": "Educational Theory 80",
    "title": "Possible Selves",
    "slug": "possible-selves",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-05T08:00:00.000Z",
    "image": "/images/academy/covers/academy-160-possible-selves.png",
    "summaryAudio": "/audio/academy/academy-160-possible-selves-summary.m4a",
    "tags": [
      "possible selves",
      "future goals",
      "motivation"
    ],
    "imageAlt": "A Latina tutor and South Asian and White adult learners connect an environmental career goal with a practical learning plan.",
    "summaryAudioTitle": "Listen to Possible Selves",
    "shortSummary": "Possible selves connect imagined futures to current identity and action. Their educational value depends on plausible strategies, available support, and room to revise goals.",
    "fullSummary": "Possible selves are ideas about who a person might become, hopes to become, or wants to avoid becoming. They give future-oriented meaning to present choices. A learner might imagine becoming a confident laboratory technician, a reliable community organizer, or someone who keeps postponing an important qualification. These images can matter for motivation, but merely picturing success does not supply the knowledge, resources, or actions needed to reach it.\n\nResearch by Oyserman and colleagues distinguishes having an academic possible self from connecting that self to workable strategies. A future identity is more actionable when the learner can see its relationship to current life and identify plausible next steps. Social context also shapes which futures seem available. Encouragement to 'dream bigger' may feel hollow when a learner lacks information about entry requirements, financial support, or a route through the next assessment.\n\nConsider an adult learner who hopes to work in environmental monitoring. A useful conversation moves from the job image to a near-term activity: interpreting measurements in a spreadsheet and explaining uncertainty in a short report. The learner identifies a current strength, such as careful observation, and an area requiring practice. Together with a tutor, they plan two manageable practice sessions and a way to obtain feedback. The distant identity now connects to an action that can happen this week.\n\nThe plan also needs a response to difficulty. A poor first graph could be interpreted as proof that 'people like me cannot do science', or as information about a skill that still needs practice. Teachers can make ordinary learning obstacles visible and connect them to strategies without pretending every barrier is minor. A missed session caused by paid work may require a different timetable or support, rather than a lecture about commitment. Structural constraints remain real even when motivation improves.\n\nA classroom activity can invite learners to map a hoped-for future, an obstacle, one helpful resource, and a next action. Participation should allow private reflection and more than one possible future. Students should not have to disclose family circumstances, fears, or career ambitions publicly. Educators can offer examples of diverse routes while avoiding the suggestion that one prestigious occupation is the proper destination for everyone. Revising a future goal can reflect informed learning rather than failure.\n\nPossible-selves interventions have been studied in particular populations and instructional settings. Findings do not justify assuming that a brief visualization exercise will improve every learner's attainment. Evaluate both whether students develop usable plans and whether relevant behavior or learning changes. A more ambitious statement on a worksheet is not itself evidence of progress. Follow-up should consider opportunities supplied by the institution as well as actions taken by the learner.\n\nThe idea is most useful when future imagination becomes a resource for present navigation. Teachers can help learners connect identity, strategies, support, and feedback while keeping alternative pathways open. Such work complements subject teaching and practical guidance. It asks not only 'Who might I become?' but also what the next step requires, who can help, and how the plan can change as new experience arrives.",
    "coreIdeas": [
      "Hoped-for and avoided future identities can give meaning to current choices, but aspiration alone does not produce learning.",
      "Actionable possible selves connect a credible future with concrete strategies, social support and responses to difficulty.",
      "Educators should respect privacy and varied futures while checking actual opportunities and learning rather than treating ambitious statements as success."
    ],
    "educationConnection": "Help learners connect a chosen future role to one current skill, one next action, a support person and a review date, allowing private reflection and alternative pathways.",
    "relatedConcepts": [
      "Future identity",
      "Identity-based motivation",
      "Goal strategies"
    ],
    "sourceUrls": [
      {
        "label": "Oyserman, Bybee and Terry: Possible Selves and Academic Outcomes",
        "url": "https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/oyserman_byeee_terry_2006.pdf"
      },
      {
        "label": "Oyserman et al.: Possible Selves as Roadmaps",
        "url": "https://deepblue.lib.umich.edu/bitstream/2027.42/64253/1/Possible_selves_as_roadmaps.pdf"
      }
    ]
  },
  {
    "id": "academy-161",
    "listingIdentifier": "AI Knowledge 81",
    "title": "AI-Assisted Assessment Item Generation",
    "slug": "ai-assisted-assessment-item-generation",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-06T08:00:00.000Z",
    "image": "/images/academy/covers/academy-161-ai-assisted-assessment-item-generation.png",
    "summaryAudio": "/audio/academy/academy-161-ai-assisted-assessment-item-generation-summary.m4a",
    "tags": [
      "item generation",
      "assessment design",
      "human review"
    ],
    "imageAlt": "A White teacher and Black and East Asian adult educators review an assessment item with a water-tank diagram and illustrated answer choices.",
    "summaryAudioTitle": "Listen to AI-Assisted Assessment Item Generation",
    "shortSummary": "AI can draft questions and distractors, but useful assessment requires a blueprint, independent solutions, careful wording, and evidence from real responses before interpreting scores.",
    "fullSummary": "AI-assisted assessment item generation uses a model to propose questions, answer options, marking guidance, or variations of an existing task. The useful unit is a reviewed assessment item, not a fluent question alone. An item must elicit evidence about a specified learning goal, have a defensible answer, and work for the intended learners. Generating many alternatives quickly can help drafting while also multiplying errors that reviewers must detect.\n\nBegin with an assessment blueprint: the concept, cognitive demand, response format, relevant prior knowledge, and evidence a correct response should provide. A prompt can then request a question with a worked solution and an explanation of each distractor. These requests make review easier, but the model's account of its own question is another output to verify. A label such as 'application' does not establish that the item actually requires applying knowledge.\n\nSuppose the target is reasoning about a fraction of a quantity. A draft asks: 'A tank is three-quarters full. Two-thirds of its water is removed. What fraction of the tank's capacity remains?' The removed amount is one-half of capacity, leaving one-quarter. Distractors might include one-half, the amount removed; one-twelfth, obtained by directly subtracting the two given fractions; and two-thirds, copied without interpreting the situation. A teacher checks both the arithmetic and whether those explanations represent plausible errors.\n\nThe wording still needs attention. Does 'its water' clearly refer to the water currently in the tank? Could a diagram reveal the answer unintentionally? Does unnecessary language make the question harder for reasons unrelated to fractions? Are all options expressed in the same form? Independent solution and peer review can catch mistakes that asking the same model to approve its own draft may miss. The NBME item-writing guidance illustrates why clarity, appropriate content sampling, and functioning options matter, although its examples come from health sciences.\n\nResearch on human–language model collaboration for mathematics questions explores how educators can shape and review generated items. Such studies support examining a collaborative workflow; they do not establish that every generated item is ready for consequential use. Content review is followed by trial responses where feasible. Observed difficulty, discrimination, and distractor choices reveal how an item behaves with learners. A model's predicted difficulty is a hypothesis, not a calibrated measurement.\n\nNear-duplicate variants also deserve scrutiny. Changing names or numbers may leave the same reasoning and reveal little additional evidence. More substantive variation can accidentally change the construct or introduce an extra prerequisite. Maintain a record of the final item, source material, solution, reviewers, revisions, and any trial evidence. Check copyright and avoid including identifiable student responses in an external service without an authorized purpose and appropriate safeguards.\n\nFor classroom practice, teachers can select a small number of drafts, solve them independently, and compare learner explanations after use. High-stakes examinations require a more rigorous development and security process. The aim is to use generation to widen useful drafting possibilities while preserving professional responsibility for what the item measures and what conclusions its responses can support.",
    "coreIdeas": [
      "Start from the intended construct and evidence rather than asking a model for a generic set of questions.",
      "Verify the answer, distractors, wording, accessibility and cognitive demand independently; model-generated explanations can also be wrong.",
      "Content review and learner trial evidence serve different purposes, and claimed difficulty remains uncalibrated until examined empirically."
    ],
    "educationConnection": "Ask educators to review a generated fraction item by solving it, diagnosing each distractor, revising its wording and examining a small set of learner explanations.",
    "relatedConcepts": [
      "Assessment blueprint",
      "Distractor analysis",
      "Item calibration"
    ],
    "sourceUrls": [
      {
        "label": "Lee et al.: Math Multiple Choice Question Generation via Human–Large Language Model Collaboration",
        "url": "https://arxiv.org/abs/2405.00864"
      },
      {
        "label": "NBME Item-Writing Guide",
        "url": "https://www.nbme.org/institutions/nbme-item-writing-guide/"
      },
      {
        "label": "Standards for Educational and Psychological Testing",
        "url": "https://www.testingstandards.net/open-access-files.html"
      }
    ]
  },
  {
    "id": "academy-162",
    "listingIdentifier": "Educational Theory 81",
    "title": "Stereotype Threat in Learning Contexts",
    "slug": "stereotype-threat-in-learning-contexts",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-06T08:00:00.000Z",
    "image": "/images/academy/covers/academy-162-stereotype-threat-in-learning-contexts.png",
    "summaryAudio": "/audio/academy/academy-162-stereotype-threat-in-learning-contexts-summary.m4a",
    "tags": [
      "stereotype threat",
      "fair assessment",
      "identity"
    ],
    "imageAlt": "A Black woman teacher and White and South Asian adult learners discuss a programming flowchart and supportive assessment instructions.",
    "summaryAudioTitle": "Listen to Stereotype Threat in Learning Contexts",
    "shortSummary": "Stereotype threat concerns identity-related pressure in evaluative settings. Its effects vary, so educators should remove demeaning cues and improve fair assessment without claiming universal interventions.",
    "fullSummary": "Stereotype threat describes a situation in which a person may worry that performance will confirm a negative stereotype about a group to which they belong. The theory concerns the meaning of an evaluative setting, not a fixed weakness within the learner. A person need not believe the stereotype for the possibility of being judged through it to matter. However, effects depend on the task, cues, population, and conditions being studied.\n\nIn their original experiments, Steele and Aronson examined difficult verbal testing with Black and White university students. Describing the test as diagnostic of intellectual ability was one way of varying the evaluative context. The research proposed that concerns about judgment could interfere with performance. These experiments are evidence about particular comparisons under controlled conditions; they do not show that stereotype threat explains every group difference or that removing it eliminates structural inequalities in education.\n\nLater research has produced a more complicated picture. An ETS field experiment examining questions about ethnicity and sex before computerized placement tests did not find statistically or practically significant performance effects from that manipulation. A preregistered study of Dutch secondary students also tested gender stereotype threat in mathematics. Results across settings warn against treating any single cue as universally harmful or any brief message as a guaranteed remedy. Precision about the intervention and comparison is essential.\n\nFor teachers, a constructive application is to examine unnecessary identity-based evaluation cues. Consider a computing workshop where an instructor introduces a difficult programming task by announcing that one gender usually excels. That statement creates an avoidable stereotype-laden context regardless of whether a measurable threat effect follows in this particular group. A better introduction explains the skills being practiced, the available support, and how solutions will be evaluated. Challenging work can retain clear standards without framing ability through group membership.\n\nSupport should also be credible in practice. Examples can represent varied contributors, mistakes can be treated as information, and feedback can communicate both the standard and how a learner can progress toward it. Students need fair access to instruction, materials, accommodations, and opportunities to participate. An encouraging sentence cannot substitute for those conditions. Educators should avoid telling an individual that their anxiety or result proves stereotype threat, since many explanations may fit the same observation.\n\nIf a school evaluates a change in assessment framing, it should define the change, intended mechanism, and outcomes beforehand. Examine whether learners understood instructions and experienced fair treatment as well as looking at scores. Small subgroup samples create uncertainty, and an unchanged mean does not show that every learner had the same experience. Protect demographic information and avoid creating new labels that invite stereotyping.\n\nThe educational value of the theory lies partly in noticing how identity and evaluation can interact. Its limits are equally important: mechanisms are debated, effects vary, and context matters. Teachers can remove demeaning cues and strengthen fair assessment without promising a universal psychological effect. Responsible interpretation keeps the learner's capabilities separate from the assumptions that an environment places around them.",
    "coreIdeas": [
      "The theory concerns situational concern about confirming a group stereotype, not an inherent deficit or endorsement of that stereotype.",
      "Original experiments and later field studies support context-specific interpretation; a cue or brief intervention does not have a guaranteed effect.",
      "Educators can remove stereotyped framing, provide credible support and examine fair treatment without diagnosing individual learners from scores."
    ],
    "educationConnection": "Review assessment introductions, examples and feedback for unnecessary group stereotypes, then replace them with clear standards, useful support and fair participation opportunities.",
    "relatedConcepts": [
      "Evaluative context",
      "Social identity threat",
      "Assessment framing"
    ],
    "sourceUrls": [
      {
        "label": "Steele and Aronson: Stereotype Threat and Intellectual Test Performance",
        "url": "https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/steele_aronson_1995_-_stereotype_threat_the_intellectual_test_performance_of_african_americans.pdf"
      },
      {
        "label": "Stricker and Ward: Inquiring About Examinees' Ethnicity and Sex",
        "url": "https://www.ets.org/research/policy_research_reports/publications/report/1998/hxwl.html"
      },
      {
        "label": "Flore, Mulder and Wicherts: Registered Report on Gender Stereotype Threat",
        "url": "https://doi.org/10.1080/23743603.2018.1559647"
      }
    ]
  },
  {
    "id": "academy-163",
    "listingIdentifier": "AI Knowledge 82",
    "title": "Reliability of Automated Essay Scoring",
    "slug": "reliability-of-automated-essay-scoring",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-07T08:00:00.000Z",
    "image": "/images/academy/covers/academy-163-reliability-of-automated-essay-scoring.png",
    "summaryAudio": "/audio/academy/academy-163-reliability-of-automated-essay-scoring-summary.m4a",
    "tags": [
      "automated essay scoring",
      "reliability",
      "writing assessment"
    ],
    "imageAlt": "An East Asian teacher and Black and White adult educators compare annotated essays with a small score-comparison chart.",
    "summaryAudioTitle": "Listen to Reliability of Automated Essay Scoring",
    "shortSummary": "Reliable automated essay scoring requires evidence across raters, prompts and learners. Correlation and repeatable outputs alone do not establish accurate decisions, fairness or valid measurement.",
    "fullSummary": "The reliability of automated essay scoring concerns the consistency of scores under conditions relevant to their use. A system might assign the same score repeatedly to identical text yet behave inconsistently across prompts, genres, or learner groups. Reliability therefore involves more than repeatability. It asks how much a reported score depends on the particular response, task, scoring procedure, and source of measurement error.\n\nAutomated scorers use features or learned representations of writing to predict judgments associated with a rubric or training data. ETS's e-rater provides a documented example of combining linguistic features in a scoring model. Language-model-based scorers may instead interpret a prompt, rubric, and essay together. Both approaches require evaluation against the intended assessment purpose. A fluent explanation of a score does not establish that the score is defensible.\n\nAgreement with trained human raters is one useful comparison, but human judgment is not error-free. Raters may disagree because criteria are unclear, a response crosses rubric boundaries, or training is insufficient. A sound evaluation uses independently scored examples, documented resolution procedures, and more than one indicator. Correlation shows whether scores vary together; it can remain high even when a system consistently awards a higher score. Exact agreement, adjacent agreement, average differences, and consequential disagreements reveal different aspects of performance.\n\nImagine an automated scorer that tracks teacher rankings closely but gives every essay one extra point on a five-point scale. Its correlation could be excellent while its pass decisions are wrong near the threshold. Alternatively, it may agree on average while penalizing concise, well-reasoned essays and rewarding longer but repetitive ones. Educators should inspect disagreements and relevant subgroups rather than allowing one headline metric to settle the question.\n\nA classroom trial can use a consented, representative set of responses to the same writing task. Teachers first clarify the rubric and score independently. They compare automated results without seeing model scores during their own initial rating. Disagreement cases are then reviewed for reasons: misunderstood argument, language variation, missing evidence, copied material, or a rubric ambiguity. Repeat the exercise with another prompt before assuming that results transfer across assignments.\n\nReliability is necessary for many uses but does not establish validity. A system can consistently count surface features that poorly represent argument quality. Nor does agreement prove fairness, useful feedback, or improved learning. Examine whether score differences change decisions, whether uncertainty is communicated, and whether students can challenge a result using the original writing. A combined human-and-machine process also needs evaluation because teachers may defer to a machine even when independent review was intended.\n\nFor low-stakes practice, an automated score may be one provisional signal alongside specific teacher and peer feedback. For progression, certification, or selection, stronger evidence and clear human accountability are required. Model updates, prompt changes, and new populations can alter performance, so evaluation must follow the actual version and use. The practical question is not whether the machine seems consistent, but whether the resulting decisions remain sufficiently dependable and educationally justified.",
    "coreIdeas": [
      "Reliability concerns consistency under relevant conditions, including tasks, raters and scoring procedures, not simply repeating an identical output.",
      "Use multiple agreement indicators and inspect consequential disagreements because high correlation can coexist with systematic score bias.",
      "Reliability does not establish validity or fairness; evaluate the complete human-and-machine workflow and provide an appeal route."
    ],
    "educationConnection": "Independently score representative essays with a shared rubric, compare several machine–human agreement measures, and analyze cases near a consequential threshold.",
    "relatedConcepts": [
      "Inter-rater agreement",
      "Measurement error",
      "Score validity"
    ],
    "sourceUrls": [
      {
        "label": "ETS: How the e-rater Scoring Engine Works",
        "url": "https://www.ets.org/erater/how.html"
      },
      {
        "label": "Attali and Burstein: Automated Essay Scoring With e-rater V.2.0",
        "url": "https://www.ets.org/content/dam/ets-org/pdfs/e-rater/automated-essay-writing-e-rater-iaea-paper.pdf"
      },
      {
        "label": "Standards for Educational and Psychological Testing",
        "url": "https://www.testingstandards.net/open-access-files.html"
      }
    ]
  },
  {
    "id": "academy-164",
    "listingIdentifier": "Educational Theory 82",
    "title": "Test Anxiety and Learning",
    "slug": "test-anxiety-and-learning",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-07T08:00:00.000Z",
    "image": "/images/academy/covers/academy-164-test-anxiety-and-learning.png",
    "summaryAudio": "/audio/academy/academy-164-test-anxiety-and-learning-summary.m4a",
    "tags": [
      "test anxiety",
      "assessment conditions",
      "learner support"
    ],
    "imageAlt": "A South Asian teacher and White and Black adult learners review a mathematics practice sheet and plan manageable study sessions.",
    "summaryAudioTitle": "Listen to Test Anxiety and Learning",
    "shortSummary": "Test anxiety can interfere with preparation and performance, but causes and responses vary. Educators can clarify assessment conditions and evaluate support without promising a universal quick remedy.",
    "fullSummary": "Test anxiety is an experience of worry and tension associated with evaluative situations. A learner may fear failure, think about consequences, notice physical arousal, or struggle to concentrate. These experiences are not a direct measure of knowledge. Some students know the material but have difficulty showing it under pressure; others are anxious partly because preparation or task understanding is incomplete. The appropriate response depends on that distinction.\n\nOne proposed mechanism is that worry competes with the attention and working-memory resources needed for a demanding task. Thinking about a disappointing result can interrupt holding intermediate steps in mind. Anxiety can also influence preparation, avoidance, and interpretation of ordinary difficulty. These pathways need not operate identically for every learner, and a single observation of nervousness cannot establish why a particular response was incorrect.\n\nConsider a learner who solves algebra equations during supported practice but repeatedly loses track of signs in a timed quiz. The teacher compares work across conditions and asks the learner to describe the experience privately. The learner reports spending time monitoring the clock and worrying about being last. The teacher can clarify timing expectations, provide practice with the assessment format, and teach a visible step-checking routine while still examining whether sign rules are understood.\n\nBrief expressive writing has been investigated as one way to address testing worries. Ramirez and Beilock's laboratory and field studies reported benefits under their study conditions. A later college-classroom study by Myers and colleagues did not find that its expressive-writing procedure improved examination performance or reduced the anxiety–performance relationship. These findings argue for careful evaluation rather than a promise that writing for a few minutes reliably raises scores.\n\nClassroom support can begin with clear information about what an assessment measures, its format, permitted resources, and how results will be used. Low-stakes practice can make procedures familiar and reveal preparation gaps before a consequential test. Feedback should identify actionable learning needs without publicly ranking nervous students. Where speed is not part of the intended construct, educators can examine whether time pressure is necessary and ensure that approved accommodations are available.\n\nLearners may benefit from choosing a manageable preparation plan and reflecting on which strategies help them. Such reflection should not require disclosure of distress to classmates or collection of intimate personal writing. Teachers can listen, make appropriate adjustments, and connect a learner with qualified support when anxiety is persistent or substantially interferes with daily life. Classroom teaching strategies should not be presented as clinical treatment.\n\nEvaluation needs separate outcomes. Feeling calmer, using a better strategy, attending an examination, and improving subject knowledge are different forms of progress. A higher score after support might also reflect easier questions or additional practice, so causal claims require an appropriate comparison. The educational aim is to help assessment provide interpretable evidence of learning while reducing avoidable pressure and preserving access to support. Students should leave with clearer options, not a new obligation to feel calm on command.",
    "coreIdeas": [
      "Anxiety, subject knowledge and assessment performance are related but distinct, so educators should examine the source of difficulty.",
      "Worry may compete with attention and working memory, while avoidance and preparation can also affect performance.",
      "Evidence for brief expressive-writing interventions is mixed; clear assessment design, appropriate accommodations and individualized support remain important."
    ],
    "educationConnection": "Compare a learner's supported and timed work, clarify the intended role of speed, and select one preparation or assessment adjustment whose effect can be reviewed.",
    "relatedConcepts": [
      "Evaluative worry",
      "Working-memory interference",
      "Assessment accommodations"
    ],
    "sourceUrls": [
      {
        "label": "Ramirez and Beilock: Writing About Testing Worries",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21233387/"
      },
      {
        "label": "Myers et al.: Expressive Writing and Test Anxiety in a College Classroom",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8192598/"
      }
    ]
  },
  {
    "id": "academy-165",
    "listingIdentifier": "AI Knowledge 83",
    "title": "Computerized Adaptive Testing",
    "slug": "computerized-adaptive-testing",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-08T08:00:00.000Z",
    "image": "/images/academy/covers/academy-165-computerized-adaptive-testing.png",
    "summaryAudio": "/audio/academy/academy-165-computerized-adaptive-testing-summary.m4a",
    "tags": [
      "adaptive testing",
      "item banks",
      "measurement"
    ],
    "imageAlt": "A Black teacher and South Asian and White adult learners explore a branching sequence of numeracy question cards.",
    "summaryAudioTitle": "Listen to Computerized Adaptive Testing",
    "shortSummary": "Computerized adaptive testing chooses informative questions and applies explicit stopping rules. Its accuracy depends on a calibrated item bank, sound measurement assumptions and appropriate score use.",
    "fullSummary": "Computerized adaptive testing selects questions in response to the evidence collected during a test. Its purpose is usually to estimate a learner's proficiency or support a classification efficiently. It differs from an adaptive tutor, which selects activities to help the learner improve. A question that is informative for measurement is not necessarily the best next teaching activity, and an adaptive test need not use a generative language model.\n\nMany adaptive tests use item response theory to connect the probability of a response with an estimated proficiency and calibrated item characteristics. After an answer, the system updates its estimate and selects another item that should provide useful information. Selection also respects constraints such as curriculum coverage, item exposure, accessibility, and test length. 'Correct means harder, incorrect means easier' captures only a rough intuition and misses these design requirements.\n\nThe process needs an item bank with empirical evidence about how questions function. If the bank contains few suitable items at an important proficiency level, adaptation cannot create information that is absent. Calibration must fit the intended population and construct sufficiently well. A newly generated question with an estimated difficulty label is not automatically interchangeable with a calibrated item, even if a teacher judges it sensible.\n\nImagine a numeracy assessment beginning with a question about interpreting a percentage discount. After a correct response, the test may choose a more informative percentage item while ensuring that later items also sample other required content. Another learner receives a different sequence. Comparing their raw numbers correct would be misleading because they answered different questions. The scoring model places response patterns on a common scale, subject to its assumptions and supporting evidence.\n\nA stopping rule determines when enough information has been collected or a limit has been reached. A test might stop after reaching a specified precision, after supporting a classification relative to a threshold, or after a maximum number of items. Operational programmes such as NCLEX explain their own decision rules; those rules should not be assumed to apply to every adaptive test. A shorter test is not automatically a sign of stronger or weaker performance.\n\nTeachers can demonstrate adaptation using a small fictional item bank and a transparent paper simulation. Learners track how each response changes an estimate and why content requirements sometimes override a simple difficulty choice. The exercise should be presented as a model of the process, not a validated assessment instrument. It helps explain why test takers may find many questions challenging and why question count alone does not reveal a result.\n\nQuality assurance includes item security, subgroup functioning, accommodations, stable delivery, and clear handling of interruptions. Reports should communicate uncertainty and avoid treating a proficiency estimate as a permanent description of a person. Adaptive delivery can improve efficiency when the bank, model, and operational rules are sound. It cannot compensate for a poorly defined construct or an inappropriate decision. Educators therefore ask what is being measured, how the bank was calibrated, how stopping works, and what evidence supports using the resulting score.",
    "coreIdeas": [
      "Adaptive testing selects items to measure proficiency; adaptive teaching selects activities to support learning, so their objectives differ.",
      "Selection combines response evidence with item calibration, content requirements and operational constraints.",
      "Different question sequences require model-based interpretation, explicit stopping rules and uncertainty-aware reporting."
    ],
    "educationConnection": "Use a fictional item bank to trace how answers update an estimate, then compare a purely difficulty-based sequence with one that preserves curriculum coverage.",
    "relatedConcepts": [
      "Item response theory",
      "Item information",
      "Stopping rules"
    ],
    "sourceUrls": [
      {
        "label": "IACAT: Introduction to Computerized Adaptive Testing",
        "url": "https://iacat.org/introduction-to-cat/"
      },
      {
        "label": "NCLEX: Computerized Adaptive Testing",
        "url": "https://nclex.com/computerized-adaptive-testing.page"
      }
    ]
  },
  {
    "id": "academy-166",
    "listingIdentifier": "Educational Theory 83",
    "title": "Epistemic Emotions",
    "slug": "epistemic-emotions",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-08T08:00:00.000Z",
    "image": "/images/academy/covers/academy-166-epistemic-emotions.png",
    "summaryAudio": "/audio/academy/academy-166-epistemic-emotions-summary.m4a",
    "tags": [
      "epistemic emotions",
      "inquiry",
      "conceptual understanding"
    ],
    "imageAlt": "A White science teacher and Black and East Asian adult learners investigate why differently shaped metal objects float or sink.",
    "summaryAudioTitle": "Listen to Epistemic Emotions",
    "shortSummary": "Curiosity, surprise and confusion can shape inquiry when they concern knowledge itself. Their value depends on how learners interpret and resolve the intellectual challenge.",
    "fullSummary": "Epistemic emotions are emotions directed toward knowledge and the process of understanding. Curiosity about an unanswered question, surprise at an unexpected result, and confusion when two explanations conflict are examples. The defining feature is their object. Anxiety about receiving a low examination grade is an achievement emotion; unease because evidence undermines one's explanation can be epistemic. The same named emotion can therefore play different roles in different situations.\n\nAn unexpected result can reveal a gap between a learner's model and the available evidence. That gap may invite inquiry, but it does not guarantee productive thinking. Surprise can become curiosity when a question seems meaningful and approachable. Confusion may lead to comparison and explanation, or persist until the learner becomes frustrated and disengages. Knowledge, available support, goals, and the interpretation of the situation affect the direction the episode takes.\n\nConsider a class investigating why a large metal object can float while a small metal object sinks. Learners who focus only on the material may be puzzled by the contrast. The teacher asks them to identify what their current explanation predicts, compare shapes and displaced water, and test a revised account. The point is to give the discrepancy an intelligible path toward resolution. Simply presenting a mysterious demonstration and leaving learners confused would not accomplish the same purpose.\n\nResearch using experience sampling and pre–post assessments examines how epistemic emotions relate to learning as activities unfold. Other studies connect these emotions with critical thinking about socio-scientific issues. Such findings suggest that emotional experience belongs within the study of reasoning, while also requiring caution about causal interpretation. A correlation between curiosity and achievement does not establish that making every activity more surprising will improve learning.\n\nTeachers can respond to epistemic emotions with questions that locate the intellectual difficulty: 'Which two ideas seem inconsistent?' or 'What evidence would help decide?' A diagram, comparison case, explanation, or strategic pause may help learners regain direction. Support can be adjusted without removing the challenge entirely. When frustration reflects unclear instructions or missing prerequisite knowledge, adding another puzzle may intensify the problem rather than deepen inquiry.\n\nLearner reports are useful but incomplete. A facial expression, silence, or a click pattern does not uniquely reveal an emotion. Ask respectfully and allow students to describe uncertainty in their own terms. Avoid grading emotional displays or expecting every learner to perform visible enthusiasm. Some may think deeply while appearing calm; others may express strong curiosity without developing a sound explanation. Emotional engagement and conceptual progress need separate evidence.\n\nA practical reflection follows the knowledge journey: what seemed puzzling, what action was taken, and what changed in the explanation. This helps learners see emotions as information that can guide inquiry rather than as proof of success or failure. The goal is not to manufacture discomfort. It is to create worthwhile questions, provide tools for investigating them, and notice when emotional experience is supporting understanding or signaling that a different form of help is needed.",
    "coreIdeas": [
      "Epistemic emotions are defined by their focus on knowing and understanding rather than by a fixed list of pleasant or unpleasant feelings.",
      "A discrepancy may lead to inquiry or disengagement depending on prior knowledge, support and the learner's interpretation.",
      "Teachers should locate the intellectual difficulty and check conceptual progress without inferring emotions directly from faces or click data."
    ],
    "educationConnection": "Use a surprising science comparison, ask learners to name the conflict in their explanation, and provide a route to test and revise it before reflecting on the learning process.",
    "relatedConcepts": [
      "Cognitive disequilibrium",
      "Curiosity",
      "Confusion resolution"
    ],
    "sourceUrls": [
      {
        "label": "Clarifying the Relation Between Epistemic Emotions and Learning",
        "url": "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2022.826852/full"
      },
      {
        "label": "Epistemic Emotions and Epistemic Cognition Predict Critical Thinking",
        "url": "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2021.669908/full"
      }
    ]
  },
  {
    "id": "academy-167",
    "listingIdentifier": "AI Knowledge 84",
    "title": "The Cold-Start Problem in Recommendations",
    "slug": "the-cold-start-problem-in-recommendations",
    "track": "ai-knowledge",
    "level": "core",
    "createdAt": "2026-10-09T08:00:00.000Z",
    "image": "/images/academy/covers/academy-167-the-cold-start-problem-in-recommendations.png",
    "summaryAudio": "/audio/academy/academy-167-the-cold-start-problem-in-recommendations-summary.m4a",
    "tags": [
      "cold start",
      "recommendation systems",
      "personalization"
    ],
    "imageAlt": "A South Asian teacher helps White and Black adult learners select an introductory statistics activity from a few resource cards.",
    "summaryAudioTitle": "Listen to The Cold-Start Problem in Recommendations",
    "shortSummary": "New learners and resources lack interaction histories. Educational recommenders need useful initial signals, safe defaults and honest uncertainty without equating missing data with low ability.",
    "fullSummary": "The cold-start problem occurs when a recommendation system has too little relevant history for a new learner, a new resource, or both. Collaborative filtering learns from patterns of interaction, so an unseen user or item may lack the evidence needed for a useful representation. In education, this problem matters when a student joins a platform, a new course opens, or a teacher adds a resource that has never been selected.\n\nNew-user and new-item cases call for different responses. A new learner can state goals, interests, access needs, or prior experience, and may complete a small diagnostic activity. A new resource can be described through its topic, prerequisites, language, format, and intended level. Content-based methods use such attributes to propose matches without waiting for a large interaction history. Hybrid approaches combine these signals with collaborative information as it becomes available.\n\nConsider a new adult learner entering a statistics course. The platform knows nothing about previous clicks but can ask whether the learner has used graphs, why they are taking the course, and which formats are accessible. A short, optional task reveals difficulty interpreting a vertical axis. The first suggestions include a clear graph-reading explanation and practice with feedback. These recommendations remain provisional; the learner can select another route or tell the teacher that the task misrepresented their experience.\n\nMissing history must not be treated as low ability. A learner may be new to the platform while highly knowledgeable, and may have limited activity because of work schedules or shared-device access. Similarly, a newly uploaded resource may be excellent despite having no popularity signals. If the system repeatedly recommends only established items, new materials receive little exposure and never gain the data needed to be assessed. Cold start can become a self-reinforcing visibility problem.\n\nA useful design therefore offers safe defaults and controlled opportunities to learn. Teachers can curate a small initial menu, explain why items are offered, and let users correct preferences. Diagnostic questions should earn their place by improving support, not become a lengthy barrier before learning begins. Collect only information needed for the educational purpose. Demographic stereotypes are a poor substitute for missing evidence about an individual learner's knowledge or goals.\n\nEvaluation should separate new users and items from established ones. Randomly splitting historical interactions can make performance look stronger if information about the same users or resources appears in both training and evaluation. A more relevant test holds out genuinely new cases and examines the earliest recommendations. Measure curricular appropriateness, accessibility, learning support, and opportunities to discover alternatives, rather than relying only on clicks. Early uncertainty should remain visible to teachers and learners.\n\nCold start is not eliminated permanently after a few interactions. Goals change, learners return after long gaps, and resources are revised. The system needs ways to refresh information and avoid carrying yesterday's assumptions forward indefinitely. Good initial recommendations are modest, useful hypotheses that improve through appropriate feedback. They should help a learner begin while preserving agency and avoiding premature conclusions about what that person can or should learn.",
    "coreIdeas": [
      "New-user and new-item cold starts require different evidence, such as learner goals or resource attributes.",
      "Content-based and hybrid approaches can support initial recommendations while user corrections and teacher-curated options preserve agency.",
      "Evaluate genuinely new cases and early recommendations; popularity loops and missing-data assumptions can systematically limit opportunity."
    ],
    "educationConnection": "Design an onboarding menu for a new statistics learner using only essential information, then test whether a knowledgeable newcomer and a newly added resource receive fair opportunities.",
    "relatedConcepts": [
      "Content-based filtering",
      "Hybrid recommendation",
      "Popularity feedback loops"
    ],
    "sourceUrls": [
      {
        "label": "Google: Collaborative Filtering Advantages and Disadvantages",
        "url": "https://developers.google.com/machine-learning/recommendation/collaborative/summary"
      },
      {
        "label": "Google: Content-Based Filtering",
        "url": "https://developers.google.com/machine-learning/recommendation/content-based/basics"
      },
      {
        "label": "Zhou et al.: Contrastive Collaborative Filtering for Cold-Start Item Recommendation",
        "url": "https://arxiv.org/abs/2302.02151"
      }
    ]
  },
  {
    "id": "academy-168",
    "listingIdentifier": "Educational Theory 84",
    "title": "Social Interdependence Theory",
    "slug": "social-interdependence-theory",
    "track": "educational-theory",
    "level": "core",
    "createdAt": "2026-10-09T08:00:00.000Z",
    "image": "/images/academy/covers/academy-168-social-interdependence-theory.png",
    "summaryAudio": "/audio/academy/academy-168-social-interdependence-theory-summary.m4a",
    "tags": [
      "social interdependence",
      "cooperative learning",
      "group design"
    ],
    "imageAlt": "A Black teacher and East Asian, White and Latina adult learners combine evidence sheets into a rainwater-system plan.",
    "summaryAudioTitle": "Listen to Social Interdependence Theory",
    "shortSummary": "Social interdependence theory explains how goal structures shape cooperation. Effective group tasks combine a real need for one another with individual accountability and reflection.",
    "fullSummary": "Social interdependence theory examines how the relationship between people's goals shapes their interaction. With positive interdependence, participants perceive that they can reach their goals together. With negative interdependence, one person's success is linked to another's failure. With independent goals, outcomes are not strongly connected. The theory helps educators examine the structure of a group task instead of assuming that seating students together creates cooperation.\n\nJohnson and Johnson's account connects cooperative learning with positive interdependence, individual accountability, supportive interaction, interpersonal skills, and reflection on group functioning. These elements address different problems. A shared goal gives a reason to work together, while individual accountability prevents the group product from hiding whether each person learned. Communication and conflict-management skills make cooperation possible when explanations differ or work becomes uneven.\n\nImagine four adult learners comparing possible designs for a school rainwater system. Each initially examines a different piece of evidence: rainfall, storage capacity, costs, or water demand. The group must produce a recommendation that integrates all four, and each member must later explain the reasoning behind the final choice. The design creates a need to exchange information while preserving responsibility for understanding the whole argument. Simply assigning four unrelated report sections would create much less intellectual interdependence.\n\nThe teacher watches how the structure actually operates. If one confident learner takes every decision, the nominally shared task has not produced equal opportunity to reason. A brief pause can ask each member to explain what their evidence contributes and what they still need from others. Roles can rotate so that expertise and status do not become permanently attached to one person. The final reflection examines which exchanges improved the decision and what needs changing next time.\n\nPositive interdependence can be built through shared problems, complementary information, joint explanations, and goals that include every member's understanding. It need not depend on group rewards. Poorly chosen rewards may create pressure or encourage stronger students to do the work for others. Accountability should reveal support needs without humiliation, using individual explanations, short transfer tasks, or teacher conversations alongside the shared outcome.\n\nThe theory offers design principles rather than a guarantee that cooperation always outperforms individual work. Group composition, task demands, preparation, time, accessibility, and facilitation influence what happens. Some learning requires individual practice, and students need ways to raise concerns about unfair workloads or exclusion. Requiring constant consensus can also suppress useful disagreement. Cooperative work should make reasoned differences available for examination, not erase them to maintain a pleasant atmosphere.\n\nA practical planning question is: 'What will learners need from one another, and how will I know each has learned?' If the answer is only that they share a table or a mark, redesign may be needed. When interdependence, accountability, support and reflection align, group work can create opportunities to explain, question, coordinate and learn together. The educational purpose remains the development of each learner through a shared activity whose structure makes mutual contribution meaningful.",
    "coreIdeas": [
      "Positive, negative and independent goal structures create different reasons for people to cooperate, compete or work separately.",
      "A shared goal needs individual accountability, supportive interaction, interpersonal skills and group reflection to support learning.",
      "Group structure should create meaningful intellectual dependence while preventing domination, hidden nonparticipation and unfair workload."
    ],
    "educationConnection": "Design a shared evidence-based recommendation that requires complementary information, then ask every learner to explain the whole decision and reflect on the group's interactions.",
    "relatedConcepts": [
      "Positive interdependence",
      "Individual accountability",
      "Group processing"
    ],
    "sourceUrls": [
      {
        "label": "Johnson and Johnson: What Is Cooperative Learning?",
        "url": "https://www.co-operation.org/what-is-cooperative-learning"
      },
      {
        "label": "Johnson and Johnson: What Makes Cooperative Learning Work",
        "url": "https://files.eric.ed.gov/fulltext/ED437841.pdf"
      }
    ]
  }
];
