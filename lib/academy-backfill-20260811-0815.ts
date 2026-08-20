import type { AcademyLesson } from "@/lib/types";

export const academyBackfill20260811To0815: AcademyLesson[] = [
  {
    id: "academy-055",
    listingIdentifier: "AI Knowledge 28",
    slug: "compute-efficiency-and-environmental-cost",
    title: "Compute, Efficiency, and Environmental Cost",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI compute", "energy efficiency", "environmental impact"],
    image: "/images/academy/covers/academy-055-compute-efficiency-and-environmental-cost.png",
    imageAlt: "A Black woman engineering teacher and East Asian and White adult learners compare a small server, an energy meter, and a hand-drawn efficiency chart in a bright laboratory",
    summaryAudio: "/audio/academy/academy-055-compute-efficiency-and-environmental-cost-summary.m4a",
    summaryAudioTitle: "Listen to Compute, Efficiency, and Environmental Cost",
    shortSummary: "How training and using AI consume computing, electricity, water, hardware, and money, and how educators can compare useful outcomes with full lifecycle costs rather than model size alone.",
    fullSummary: `Artificial intelligence requires physical infrastructure. Training adjusts model parameters through repeated computation, while inference uses a trained model to answer requests. Both run on processors in data centres supported by memory, storage, networking, cooling, and electricity. The environmental cost of one task depends on the model, hardware, software, data-centre efficiency, electricity source, location, time, workload, and how often the system is used. A single universal number for "AI energy" is therefore misleading.

Training a frontier model can be compute-intensive, but repeated inference can also become a large share of total demand when millions of users submit prompts. Longer contexts, repeated retries, high-resolution media, and unnecessary agent loops add work. Cooling may consume water directly or influence electricity use, and manufacturing processors has material and embodied-carbon costs. These impacts are distributed across places and supply chains, so a low visible price does not mean a cost has disappeared.

Efficiency can improve at several layers. Developers can choose smaller or specialized models, quantize parameters, reuse cached computation, batch requests, improve algorithms, and run hardware at higher utilization. Product designers can limit needless generations and route simple tasks to less intensive systems. Users can provide clear requirements, reuse verified results, and stop loops that no longer add value. Yet efficiency gains can be offset if cheaper use creates much more demand, an effect sometimes called rebound.

Comparisons need a defined unit and outcome. Energy per training run, per thousand tokens, per completed task, or per learner helped answer different questions. A smaller model that repeatedly fails may consume more resources per useful outcome than a larger model used once. Carbon estimates also require time- and location-specific electricity information. Transparent reporting should include hardware, run duration, utilization, energy method, model version, workload, and uncertainty rather than present a precise-looking total without assumptions.

In education, learners can compare three ways to produce feedback on a short assignment: a large general model, a smaller local model, and a teacher-designed rubric without generation. They define quality and safety criteria, measure response time and approximate energy where tools permit, count retries, and examine privacy and accessibility. They then recommend an approach for the actual learning purpose. The goal is not to reject computation, but to ask whether educational value justifies its full resource cost.

Responsible choices combine sufficiency and evidence. Institutions can inventory high-volume AI uses, request vendor reporting, set retention and routing policies, and evaluate whether the system improves learning or workload. Efficiency is not only a technical benchmark. It is a design question about accomplishing a worthwhile educational goal with appropriate models, limited waste, durable hardware, and honest accounting of environmental and social tradeoffs. Public reporting should distinguish measured consumption from estimates and state which lifecycle stages were omitted, allowing educators and learners to compare claims without false precision.`,
    coreIdeas: [
      "AI's resource cost spans training, repeated inference, cooling, electricity, water, networking, and hardware manufacture across a lifecycle.",
      "Efficiency depends on model choice, algorithms, hardware utilization, caching, routing, task design, and demand, so one universal AI-energy number is misleading.",
      "Educational comparison should measure resources per useful, safe learning outcome and disclose assumptions, uncertainty, retries, privacy, and rebound effects.",
    ],
    educationConnection: "Have learners compare three feedback workflows using common quality criteria, response time, retries, approximate resource demand, privacy, and accessibility, then justify the least wasteful option that meets the learning goal.",
    relatedConcepts: ["Green AI", "Lifecycle assessment", "Model routing"],
    sourceUrls: [
      { label: "International Energy Agency: Energy and AI", url: "https://www.iea.org/reports/energy-and-ai" },
      { label: "Schwartz and colleagues: Green AI", url: "https://arxiv.org/abs/1907.10597" },
      { label: "Patterson and colleagues: Carbon Emissions and Large Neural Network Training", url: "https://arxiv.org/abs/2104.10350" },
    ],
    createdAt: "2026-08-11T08:00:00.000Z",
  },
  {
    id: "academy-056",
    listingIdentifier: "Educational Theory 28",
    slug: "learning-analytics-and-assessment-validity",
    title: "Learning Analytics and Assessment Validity",
    track: "educational-theory",
    level: "core",
    tags: ["learning analytics", "assessment validity", "educational measurement"],
    image: "/images/academy/covers/academy-056-learning-analytics-and-assessment-validity.png",
    imageAlt: "A South Asian woman assessment specialist guides a Black man teacher and a White woman student as they connect classroom evidence to a hand-drawn validity argument",
    summaryAudio: "/audio/academy/academy-056-learning-analytics-and-assessment-validity-summary.m4a",
    summaryAudioTitle: "Listen to Learning Analytics and Assessment Validity",
    shortSummary: "Why clicks, scores, traces, and AI classifications become educational evidence only through a defensible interpretation and use, with attention to constructs, consequences, fairness, uncertainty, and alternative explanations.",
    fullSummary: `Learning analytics collects and analyses data about learners and learning contexts to understand and improve learning and its environments. Assessment uses evidence to support an interpretation about knowledge, skill, participation, or another educational construct. The two overlap when dashboard indicators, predictions, or activity traces influence feedback and decisions. A number is not automatically valid evidence. Validity concerns whether the interpretation and intended use are supported by an argument and appropriate evidence.

The construct is the quality an educator wants to understand. A quiz may sample conceptual knowledge; a discussion trace may show visible participation; a model may estimate risk. Each indicator represents only part of the construct and can also reflect irrelevant factors. Low platform activity may mean disengagement, but it may also reflect offline study, shared devices, inaccessible design, employment, illness, or a learner who downloaded materials earlier. Treating the trace as motivation would require evidence that rules out important alternatives.

Validity is use-specific. The same indicator might support a low-stakes conversation but be inadequate for grading, discipline, or restricting opportunity. Evidence can include content alignment, response processes, internal structure, relationships with other measures, and consequences. Reliability matters because unstable measurements cannot support fine distinctions, but a consistently measured quantity can still be the wrong one. Predictive accuracy likewise does not establish that a decision based on the prediction is fair or beneficial.

Analytics systems introduce feedback loops. When a dashboard labels a student at risk, a teacher may provide support, lower expectations, or change interaction. The label can then influence the outcome it was meant to predict. Missing data, group differences, model drift, and interface design also shape interpretation. Students should know what information is used, have a route to correct it, and be able to offer contextual evidence. High-stakes decisions need multiple sources and accountable human judgment.

In education, learners can audit a fictional engagement dashboard. They name the claim behind each indicator, identify the observable data, list alternative explanations, and decide which uses are defensible. They compare the dashboard with interviews, work samples, and an unaided assessment, then write a validity argument that includes uncertainty and possible consequences. If the evidence cannot support the intended decision, they redesign the measure or narrow the claim.

Good analytics makes interpretation more disciplined, not more automatic. Institutions should predefine purposes, minimize data, test technical quality and subgroup performance, study how users understand the display, monitor consequences, and retire measures that no longer fit. Assessment validity keeps the question educational: what conclusion is being drawn about which learner, from what evidence, for what purpose, and with what effects? A defensible answer remains open to new evidence and should become more demanding as the consequences for a learner become more serious or difficult to reverse.`,
    coreIdeas: [
      "Validity concerns the interpretation and use of evidence about a construct, not an inherent property of a score, trace, dashboard, or model.",
      "Observable activity can reflect construct-relevant learning and construct-irrelevant access, context, or design factors, so alternatives must be tested.",
      "Reliability and prediction are insufficient without content, process, relationship, fairness, consequence, uncertainty, and decision-use evidence.",
    ],
    educationConnection: "Ask learners to audit a dashboard by naming each construct claim, data source, alternative explanation, defensible use, uncertainty, and consequence, then triangulate it with work samples and learner accounts.",
    relatedConcepts: ["Construct validity", "Learning analytics", "Consequential validity"],
    sourceUrls: [
      { label: "SoLAR: What is Learning Analytics?", url: "https://www.solaresearch.org/about/what-is-learning-analytics/" },
      { label: "Standards for Educational and Psychological Testing", url: "https://www.testingstandards.net/open-access-files.html" },
      { label: "Jisc: Code of Practice for Learning Analytics", url: "https://www.jisc.ac.uk/guides/code-of-practice-for-learning-analytics" },
    ],
    createdAt: "2026-08-11T08:00:00.000Z",
  },
  {
    id: "academy-057",
    listingIdentifier: "AI Knowledge 29",
    slug: "ai-governance-in-education",
    title: "AI Governance in Education",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI governance", "education policy", "accountability"],
    image: "/images/academy/covers/academy-057-ai-governance-in-education.png",
    imageAlt: "A Black woman school leader, an East Asian man teacher, and a White woman student representative review an AI use map and accountability cards in a bright meeting room",
    summaryAudio: "/audio/academy/academy-057-ai-governance-in-education-summary.m4a",
    summaryAudioTitle: "Listen to AI Governance in Education",
    shortSummary: "How schools and universities translate values, law, evidence, roles, and risk into decisions across AI selection, piloting, use, monitoring, challenge, incident response, and retirement.",
    fullSummary: `AI governance is the set of structures, roles, rules, evidence, and practices used to direct and oversee artificial intelligence. In education, governance connects classroom purposes with privacy, safety, fairness, accessibility, academic integrity, procurement, security, and accountability. It is broader than a usage policy. A policy states expectations; governance determines who makes decisions, what evidence they require, how implementation is monitored, and what happens when a system fails.

The first step is an inventory. Institutions need to know which AI systems are approved, embedded in existing platforms, purchased by departments, or adopted informally. Each use should have a named educational purpose, owner, affected population, data classification, provider, model or service, and decision impact. A low-stakes brainstorming aid and an automated recommendation affecting student opportunity require different controls. Risk should be assessed in context rather than assigned only from a product category.

Governance spans a lifecycle. Before adoption, teams define success, consult affected learners and staff, compare alternatives, review contracts and data flows, and test accessibility and safety. A bounded pilot uses representative cases and clear stop conditions. During use, institutions monitor performance, subgroup effects, complaints, incidents, costs, and whether learning goals are met. Changes in models, policies, data, or users trigger reassessment. Retirement includes export, deletion, transition, and preservation of necessary records.

Roles must be explicit. Senior leaders set accountability and resources; educators define pedagogical fit; technical and security staff inspect infrastructure; data-protection and legal specialists review obligations; procurement staff enforce contract terms; learners and families contribute lived experience; and an identifiable person accepts or rejects high-impact decisions. Human oversight is meaningful only when the reviewer has time, competence, information, and authority to disagree.

In education, learners can form a governance council for a fictional AI tutor. They map stakeholders, classify intended uses, write success and harm indicators, examine a data-flow diagram, and design an appeal and incident path. They then decide whether to reject, pilot, approve with limits, or request evidence. Every decision names the accountable owner and review date. The exercise shows that governance is ongoing institutional learning rather than one permission form.

Good governance preserves educational agency. It makes approved and prohibited uses understandable, offers alternatives where possible, protects people who raise concerns, and publishes proportionate evidence. Frameworks such as the NIST AI Risk Management Framework, OECD AI Principles, and UNESCO guidance provide useful questions, but local institutions must translate them into operational decisions. Governance succeeds when values become observable controls and when people can challenge, improve, or stop a system before harm becomes routine. Annual review is insufficient for rapidly changing services; significant model, contract, feature, data-flow, population, or legal changes should trigger a documented reassessment before expanded use, with the outcome communicated to every affected school community.`,
    coreIdeas: [
      "AI governance links educational purpose, values, evidence, law, roles, controls, monitoring, challenge, incidents, and retirement across a system lifecycle.",
      "Risk and oversight must reflect the specific use, affected people, data, decision impact, and alternatives rather than a product label alone.",
      "Meaningful accountability names owners and gives informed human reviewers and affected communities real authority to question, limit, or stop use.",
    ],
    educationConnection: "Have learners govern a fictional tutor by mapping stakeholders and data, defining success and stop conditions, designing appeal and incident routes, and issuing a time-bounded decision with an accountable owner.",
    relatedConcepts: ["AI risk management", "Algorithmic accountability", "Sociotechnical systems"],
    sourceUrls: [
      { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" },
      { label: "UNESCO Guidance for Generative AI in Education", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
    ],
    createdAt: "2026-08-13T08:00:00.000Z",
  },
  {
    id: "academy-058",
    listingIdentifier: "Educational Theory 29",
    slug: "teacher-professional-judgment",
    title: "Teacher Professional Judgment",
    track: "educational-theory",
    level: "core",
    tags: ["teacher judgment", "professional knowledge", "educational decision making"],
    image: "/images/academy/covers/academy-058-teacher-professional-judgment.png",
    imageAlt: "A Middle Eastern woman teacher and Black man colleague examine student work, classroom observations, and a curriculum map while an East Asian student explains her reasoning",
    summaryAudio: "/audio/academy/academy-058-teacher-professional-judgment-summary.m4a",
    summaryAudioTitle: "Listen to Teacher Professional Judgment",
    shortSummary: "How teachers integrate disciplinary, pedagogical, curricular, relational, and contextual knowledge under uncertainty, and how evidence, collaboration, reflection, and challenge can strengthen rather than replace judgment.",
    fullSummary: `Teacher professional judgment is the reasoned interpretation and action through which educators respond to particular learners, content, goals, and circumstances. Rules, research, rubrics, assessments, and technologies inform judgment, but they rarely determine one correct response. A teacher may need to decide whether an error reflects a misconception, language difficulty, incomplete instruction, anxiety, or a reasonable alternative method. The decision combines evidence with professional knowledge and an ethical responsibility to the learner.

Lee Shulman's account of teacher knowledge highlights subject matter, pedagogy, curriculum, learners, contexts, purposes, and pedagogical content knowledge. These forms of knowledge interact. Knowing mathematics does not by itself reveal which representation will help a novice, and knowing a general teaching strategy does not guarantee that it fits a particular concept. Teachers also draw on relationships and histories that may not appear in a data system, while recognizing that familiarity can introduce bias.

Judgment is not intuition beyond scrutiny. Strong practice makes the basis for a decision discussable. Teachers gather multiple forms of evidence, compare interpretations, notice uncertainty, and revise when outcomes conflict with expectations. Moderation of student work, collaborative planning, observation, and inquiry can expose assumptions. Structured tools such as rubrics and decision protocols improve consistency when they preserve space for relevant context and documented exceptions.

AI can extend available information by proposing examples, summarizing patterns, or highlighting work for review. It can also narrow attention, present uncertain classifications as facts, or detach a recommendation from classroom meaning. A teacher remains accountable for high-impact educational decisions and needs authority to reject a system's suggestion. Human oversight is weak if the teacher lacks time, source evidence, training, or an alternative. The aim is augmented professional judgment, not ceremonial approval.

In education, learners can study three anonymized work samples that received the same low score. They examine the task, student explanations, prior evidence, and context, then propose different next steps with reasons. Groups compare how evidence changed their interpretations and identify what additional information they need. They also review an AI-generated recommendation and decide which parts are useful, unsupported, or potentially biased. The activity shows why identical outcomes can require different responses.

Professional judgment develops through knowledge, deliberate experience, feedback, and collective responsibility. Institutions should create time for moderation and inquiry, make policies challengeable, and evaluate decisions for patterns of inequity. Teachers should explain important decisions in language learners and families can understand. Judgment is strongest when it is informed but not mechanically controlled, confident enough to act but humble enough to revise, and directed toward educational purposes rather than administrative convenience. Recording the reasons for consequential decisions supports learning and appeal, provided documentation remains proportionate and does not replace the relationship or create needless surveillance, defensive paperwork, or hidden inequity.`,
    coreIdeas: [
      "Professional judgment integrates disciplinary, pedagogical, curricular, relational, contextual, and ethical knowledge to act under educational uncertainty.",
      "Judgment becomes more trustworthy through multiple evidence sources, explicit reasoning, moderation, collaboration, feedback, and willingness to revise.",
      "Rules and AI can inform decisions, but meaningful teacher oversight requires competence, time, evidence, authority to disagree, and accountability for consequences.",
    ],
    educationConnection: "Ask learners to interpret three similar low-scoring work samples using task evidence, explanations, history, and context, compare responses, identify missing information, and challenge an AI recommendation.",
    relatedConcepts: ["Pedagogical content knowledge", "Assessment moderation", "Human oversight"],
    sourceUrls: [
      { label: "Shulman: Those Who Understand, Knowledge Growth in Teaching", url: "https://doi.org/10.3102/0013189X015002004" },
      { label: "Biesta: The Future of Teacher Education", url: "https://orbilu.uni.lu/handle/10993/6866" },
      { label: "OECD: Teachers as Designers of Learning Environments", url: "https://doi.org/10.1787/9789264085374-en" },
    ],
    createdAt: "2026-08-13T08:00:00.000Z",
  },
  {
    id: "academy-059",
    listingIdentifier: "AI Knowledge 30",
    slug: "designing-responsible-ai-learning-systems",
    title: "Designing Responsible AI Learning Systems",
    track: "ai-knowledge",
    level: "core",
    tags: ["responsible AI", "learning-system design", "safety by design"],
    image: "/images/academy/covers/academy-059-designing-responsible-ai-learning-systems.png",
    imageAlt: "A Latina teacher, a Black teenage learner, and an East Asian product designer co-design an AI learning activity using a purpose map, safety cards, and a working prototype",
    summaryAudio: "/audio/academy/academy-059-designing-responsible-ai-learning-systems-summary.m4a",
    summaryAudioTitle: "Listen to Designing Responsible AI Learning Systems",
    shortSummary: "A lifecycle method for turning learning goals into bounded AI roles, representative evaluation, understandable controls, human responsibility, monitoring, incident response, and evidence of independent learner capability.",
    fullSummary: `A responsible AI learning system begins with an educational purpose, not a model demonstration. Designers first state what learners should understand or do, what productive effort should remain theirs, and why AI is needed. They compare non-AI and lower-risk alternatives before selecting a role such as generating practice, retrieving approved sources, offering graduated hints, supporting accessibility, or helping teachers inspect patterns. A narrow role is easier to evaluate and govern than a promise to personalize everything.

The system includes more than a model. Data, prompts, retrieval sources, interfaces, policies, educators, learners, vendors, and institutional routines shape its effects. Designers map this sociotechnical system and identify affected people, especially those who may be excluded or burdened. They examine privacy, security, bias, accuracy, accessibility, academic integrity, intellectual property, emotional effects, and the risk that assistance replaces learning. Requirements should turn each concern into a testable control.

Evaluation uses representative tasks and users. Technical measures may include correctness, calibration, latency, harmful-output rates, and source fidelity. Educational measures include quality of feedback, unaided retention, transfer, learner agency, teacher workload, accessibility, and distribution of outcomes. A polished average can hide severe failures, so teams inspect examples, uncertainty, subgroup patterns, and boundary cases. A pilot has predefined success, stop, escalation, and rollback conditions.

Human control must be operational. Learners need to know when AI is involved and how to question or avoid it. Teachers need evidence, time, training, and authority to override recommendations. High-impact decisions require accountable people and independent information. Interfaces should reveal sources, uncertainty, and the scope of an action without overwhelming users. Data collection and retention should be minimized, while consent and alternatives should match the actual educational setting and age group.

In education, learners can design a hint system for fraction problems. They define the target understanding, sequence hints from recall prompt to partial representation, and forbid immediate completed answers. They test the prototype with diverse fictional cases, including language and accessibility needs, then record failures and revise. An unaided transfer item checks whether support produced capability rather than task completion. A governance card identifies the owner, data used, review date, and shutdown route.

Responsibility continues after launch. Models, content, users, and policies change, so teams monitor incidents, drift, complaints, costs, and educational outcomes. They communicate updates and retire systems whose value no longer outweighs harm or burden. Frameworks can organize the work, but responsibility is demonstrated through evidence and action. A responsible learning system makes its purpose, limits, decisions, and consequences inspectable while protecting the human relationships and intellectual activity education exists to develop. Learners and educators should receive the results of monitoring in understandable form and have a visible route to request correction, alternative support, independent review, or immediate suspension.`,
    coreIdeas: [
      "Responsible design starts from a learning goal, preserves productive learner effort, compares alternatives, and assigns AI a bounded role that can be evaluated.",
      "The system is sociotechnical, so data, models, interfaces, people, policies, risks, access, and institutional routines require lifecycle evidence and controls.",
      "Representative testing, unaided learning outcomes, meaningful human authority, monitoring, incident response, rollback, and retirement make responsibility operational.",
    ],
    educationConnection: "Have learners design and test a graduated fraction-hint system with a fixed learning goal, forbidden substitutions, diverse cases, an unaided transfer item, and a governance card naming data, owner, review, and shutdown routes.",
    relatedConcepts: ["Safety by design", "Human-in-the-loop AI", "Learning transfer"],
    sourceUrls: [
      { label: "NIST AI RMF Playbook", url: "https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook" },
      { label: "UNICEF Policy Guidance on AI for Children", url: "https://www.unicef.org/globalinsight/reports/policy-guidance-ai-children" },
      { label: "UNESCO Guidance for Generative AI in Education", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
    ],
    createdAt: "2026-08-14T08:00:00.000Z",
  },
  {
    id: "academy-060",
    listingIdentifier: "Educational Theory 30",
    slug: "ethics-care-and-human-flourishing-in-education",
    title: "Ethics, Care, and Human Flourishing in Education",
    track: "educational-theory",
    level: "core",
    tags: ["ethics of care", "human flourishing", "educational purpose"],
    image: "/images/academy/covers/academy-060-ethics-care-and-human-flourishing-in-education.png",
    imageAlt: "A Black woman teacher listens closely as a South Asian girl and White boy discuss a community project around a table with meaningful sketches and reflection notes",
    summaryAudio: "/audio/academy/academy-060-ethics-care-and-human-flourishing-in-education-summary.m4a",
    summaryAudioTitle: "Listen to Ethics, Care, and Human Flourishing in Education",
    shortSummary: "How educational ethics moves beyond compliance and efficiency to relationships, attentiveness, dignity, agency, justice, belonging, capability, and the question of what kind of life and community learning should support.",
    fullSummary: `Educational ethics asks not only whether an action follows a rule, but what purposes, relationships, and forms of life it supports. Human flourishing refers broadly to living and developing well through capabilities, meaning, agency, relationships, participation, and material and social conditions. Education contributes to flourishing when it expands what people can understand, do, value, and become with others. Achievement matters, but it is not the whole educational good.

The ethics of care emphasizes attentiveness, relationship, responsiveness, and responsibility. Care is not simply kindness or avoiding challenge. A caring teacher tries to understand a learner's expressed needs and context, responds competently, and checks how the response is received. The learner is not a passive object of help. Voice and reciprocity matter. Care can also include carefully demanding work, honest feedback, boundaries, and collective responsibility when these serve growth and dignity.

Care must also be examined through justice. Warm relationships cannot compensate for inaccessible materials, discriminatory discipline, unsafe environments, or unequal opportunity. Educators should ask who receives attention, whose needs are interpreted as legitimate, who performs hidden caring labour, and whether support increases dependence or capability. Institutions need fair structures, resources, and rights alongside personal responsiveness. Ethical decisions often require balancing individual and collective needs without reducing either to a simple score.

AI makes these questions concrete. A system may save time or personalize practice while weakening privacy, agency, belonging, or human contact. Simulated empathy can sound caring without carrying responsibility for the learner. An automated recommendation may optimize completion while narrowing aspiration. Educators should ask what relationships the technology changes, which human capabilities it strengthens, what burdens it shifts, and who can contest its action. Efficiency is valuable only inside an account of the educational good.

In education, learners can examine a fictional AI attendance intervention. One proposal sends escalating automated messages; another begins with a confidential conversation and practical support. Groups consider accuracy, dignity, access, cultural interpretation, family circumstances, teacher workload, consistency, and the student's ability to respond. They design a process that combines fair rules with attentive human inquiry, then explain how success will be judged beyond attendance alone.

Flourishing is plural and contested, so schools should not impose one image of a good life. Learners, families, educators, and communities need genuine participation in defining aims and evaluating effects. Care provides a relational discipline; justice guards against selective benevolence; capability and agency keep support oriented toward what people can become and choose. Together they help education resist a narrow equation of good outcomes with speed, compliance, or measurable performance. Reflection should include whose wellbeing is absent from the evidence, who bears implementation labour, and whether short-term convenience weakens long-term learner capability, mutual trust, democratic participation, belonging, or human connection.`,
    coreIdeas: [
      "Human flourishing broadens educational purpose beyond scores to capability, meaning, agency, dignity, relationships, participation, and conditions for living well.",
      "An ethics of care requires attentiveness, competent response, learner voice, reciprocity, honest challenge, and checking how support is actually received.",
      "Care must work with justice so relational warmth does not hide inaccessible structures, unequal burdens, discrimination, dependence, or restricted opportunity.",
    ],
    educationConnection: "Ask learners to redesign an AI attendance intervention by balancing fair rules with confidential human inquiry, dignity, access, practical support, contestability, workload, and outcomes broader than attendance.",
    relatedConcepts: ["Ethics of care", "Capabilities approach", "Relational pedagogy"],
    sourceUrls: [
      { label: "Stanford Encyclopedia of Philosophy: Care Ethics", url: "https://plato.stanford.edu/entries/care-ethics/" },
      { label: "UNESCO: Reimagining Our Futures Together", url: "https://unesdoc.unesco.org/ark:/48223/pf0000379707" },
      { label: "OECD: Student Well-being", url: "https://www.oecd.org/en/topics/student-well-being.html" },
    ],
    createdAt: "2026-08-14T08:00:00.000Z",
  },
  {
    id: "academy-061",
    listingIdentifier: "AI Knowledge 31",
    slug: "educational-data-governance-and-data-quality",
    title: "Educational Data Governance and Data Quality",
    track: "ai-knowledge",
    level: "core",
    tags: ["data governance", "data quality", "educational data"],
    image: "/images/academy/covers/academy-061-educational-data-governance-and-data-quality.png",
    imageAlt: "A Middle Eastern woman data steward, a Black man teacher, and an East Asian woman student trace approved educational data through a quality checklist and lifecycle map",
    summaryAudio: "/audio/academy/academy-061-educational-data-governance-and-data-quality-summary.m4a",
    summaryAudioTitle: "Listen to Educational Data Governance and Data Quality",
    shortSummary: "How institutions assign stewardship and control across collection, meaning, quality, access, sharing, retention, correction, deletion, provenance, and appropriate AI use of learner and staff data.",
    fullSummary: `Educational data governance defines who may decide how data are collected, described, accessed, combined, shared, retained, corrected, and deleted. It connects technical management with educational purpose, law, ethics, security, and accountability. Data quality concerns whether information is fit for a stated use. Accurate data can still be inappropriate, while imperfect data may be sufficient for a low-stakes conversation but dangerous for an automated high-impact decision.

Quality has several dimensions. Accuracy asks whether a value represents what occurred. Completeness concerns missing records. Timeliness asks whether information remains current. Consistency examines whether systems use compatible formats and definitions. Validity checks whether values follow rules, while uniqueness addresses duplicates. Representativeness asks whose experiences appear or disappear. Provenance records where data came from, how they changed, and which version a model or report used. Each dimension depends on the decision being supported.

Educational records are contextual. A blank assignment field may mean non-submission, an approved extension, offline work, a synchronization failure, or an inaccessible task. A language label may hide multilingual practice. Behaviour codes may reflect unequal observation and discipline. Combining systems can make data look comprehensive while stripping away meaning. Data dictionaries, common definitions, timestamps, lineage, and routes for learners and staff to correct records help preserve context.

Governance assigns roles such as owner, steward, custodian, user, and accountable decision-maker. Access follows least privilege and is reviewed when roles change. Collection is limited to a declared purpose, and secondary uses require fresh assessment. Contracts address provider access, model training, subcontractors, location, breach response, export, and deletion. Retention schedules prevent a useful classroom trace from becoming a permanent profile. Security controls protect data without making legitimate correction impossible.

In education, learners can audit a fictional early-warning dataset. They inspect a data dictionary and ten records containing missing activity, duplicate identities, old programme labels, and unexplained risk fields. Groups decide which issues can be corrected, which require the learner's account, and which make the intended prediction invalid. They build a lineage map from source to decision and assign an owner, steward, review date, and deletion rule.

AI systems do not automatically repair weak educational data. Models can amplify existing errors, infer sensitive attributes, and make incomplete histories appear authoritative. Institutions should test data quality before modelling, document exclusions, monitor drift, allow challenge, and avoid collecting information merely because it might be useful later. Good governance makes data meaning and responsibility visible. It treats learners as people with rights and context, not as rows whose availability authorizes every possible use. Quality reports should be versioned with the dataset and decision, because later corrections cannot silently repair conclusions already delivered to teachers, families, or learners; those earlier decisions need prompt, traceable human review, notification, correction, and remedy.`,
    coreIdeas: [
      "Data governance assigns purpose, stewardship, access, sharing, correction, retention, deletion, security, provenance, and accountability across an educational lifecycle.",
      "Quality is use-specific and includes accuracy, completeness, timeliness, consistency, validity, uniqueness, representativeness, and contextual meaning.",
      "AI can amplify weak or decontextualized records, so institutions need lineage, minimization, learner correction, contract controls, drift checks, and explicit decision owners.",
    ],
    educationConnection: "Have learners audit a flawed early-warning dataset, diagnose quality and context problems, map lineage to the intended decision, and assign correction, access, review, retention, and accountability rules.",
    relatedConcepts: ["Data stewardship", "Data provenance", "Privacy by design"],
    sourceUrls: [
      { label: "NIST Privacy Framework", url: "https://www.nist.gov/privacy-framework" },
      { label: "UK ICO: Children's Code", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/" },
      { label: "UNESCO Guidance for Generative AI in Education", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
    ],
    createdAt: "2026-08-15T08:00:00.000Z",
  },
  {
    id: "academy-062",
    listingIdentifier: "Educational Theory 31",
    slug: "teacher-professional-learning",
    title: "Teacher Professional Learning",
    track: "educational-theory",
    level: "core",
    tags: ["professional learning", "teacher inquiry", "instructional improvement"],
    image: "/images/academy/covers/academy-062-teacher-professional-learning.png",
    imageAlt: "A White woman teacher, Black man colleague, and South Asian instructional coach analyse student work and rehearse a science explanation beside a meaningful lesson diagram",
    summaryAudio: "/audio/academy/academy-062-teacher-professional-learning-summary.m4a",
    summaryAudioTitle: "Listen to Teacher Professional Learning",
    shortSummary: "Why sustained, content-focused, collaborative, active, feedback-rich inquiry connected to student evidence is more likely to change teaching than isolated workshops, and how implementation conditions shape results.",
    fullSummary: `Effective, sustained teacher professional learning is the continuing development of knowledge, practice, judgment, identity, and collective capacity across a career. It includes formal courses and workshops, but also coaching, lesson study, collaborative planning, observation, inquiry, reading, rehearsal, and analysis of student work. Professional learning is stronger when it addresses a real instructional purpose and treats teachers as knowledgeable participants rather than passive recipients of techniques.

Research reviews identify recurring features of effective professional development. It is often content-focused, incorporates active learning, supports collaboration, models effective practice, provides coaching or expert support, offers feedback and reflection, and continues long enough for experimentation and revision. These features are not a guaranteed recipe. Their value depends on coherence with curriculum, leadership, time, teacher needs, learner populations, and the quality of implementation.

Learning must connect new ideas with classroom evidence. A teacher can study an approach, rehearse it with colleagues, adapt it for a class, observe what learners do, and revise. Student work and discussion reveal whether the intended reasoning appeared. Coaching can focus attention without turning observation into surveillance. Collaborative inquiry helps teachers compare interpretations and make tacit choices visible, while psychological safety allows uncertainty and unsuccessful trials to become sources of learning.

One-off workshops often fail because teachers return to unchanged schedules, materials, assessment pressures, and support. Institutions need protected time, relevant resources, leadership participation, access to expertise, and opportunities to revisit practice. Accountability should distinguish participation from learning and learning from classroom impact. Attendance certificates do not show that instruction changed, and a short-term student score cannot by itself explain why it changed.

AI can support professional learning by generating rehearsal cases, helping locate research, suggesting questions, or organizing evidence. It can also produce generic advice, fabricate sources, or standardize practice without context. Teachers should verify claims, protect student data, and retain ownership of instructional decisions. An AI-produced lesson is not professional learning unless educators examine its assumptions, adapt it, test it, and learn from the result.

In education, a teacher team can select one recurring misconception, study relevant evidence, design and rehearse a response, teach it, and bring anonymized work to the next meeting. Colleagues compare what learners understood, not whether the teacher followed a script perfectly. They document revisions and decide what evidence would justify wider use. This cycle makes professional learning an inquiry into teaching and learning rather than an event. Sustained improvement grows when individual expertise, collective responsibility, supportive conditions, and honest evidence reinforce one another. Leaders should monitor whose voices shape the programme, whose classrooms receive coaching, and whether workload or temporary contracts prevent some teachers from participating fully. Professional learning should itself model the inclusive, collaborative, evidence-responsive teaching it asks educators to provide in practice.`,
    coreIdeas: [
      "Professional learning develops teacher knowledge, practice, judgment, identity, and collective capacity through formal and job-embedded experiences across a career.",
      "Content focus, active learning, collaboration, modelling, coaching, feedback, reflection, duration, and coherence can support change when implementation conditions are strong.",
      "Participation is not impact; teachers need sustained inquiry that connects ideas, rehearsal, classroom evidence, revision, and context while preserving professional agency.",
    ],
    educationConnection: "Have a teacher team investigate one misconception through research, rehearsal, classroom enactment, anonymized student evidence, collegial interpretation, documented revision, and explicit criteria for wider adoption.",
    relatedConcepts: ["Instructional coaching", "Lesson study", "Teacher inquiry"],
    sourceUrls: [
      { label: "Learning Policy Institute: Effective Teacher Professional Development", url: "https://learningpolicyinstitute.org/product/effective-teacher-professional-development-report" },
      { label: "OECD: TALIS", url: "https://www.oecd.org/en/about/programmes/talis.html" },
      { label: "Darling-Hammond and colleagues: Professional Learning in the Learning Profession", url: "https://learningforward.org/wp-content/uploads/2017/08/professional-learning-in-the-learning-profession.pdf" },
    ],
    createdAt: "2026-08-15T08:00:00.000Z",
  },
];
