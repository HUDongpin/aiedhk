import type { AcademyLesson } from "@/lib/types";

export const academyBackfill20260817To0821: AcademyLesson[] = [
  {
    id: "academy-063",
    listingIdentifier: "AI Knowledge 32",
    slug: "model-monitoring-drift-and-incident-response",
    title: "Model Monitoring, Drift, and Incident Response",
    track: "ai-knowledge",
    level: "core",
    tags: ["model monitoring", "AI drift", "incident response"],
    image: "/images/academy/covers/academy-063-model-monitoring-drift-and-incident-response.png",
    imageAlt: "A Black woman data scientist, White man teacher, and East Asian woman student representative inspect a model-monitoring timeline and incident-response board in a bright operations room",
    summaryAudio: "/audio/academy/academy-063-model-monitoring-drift-and-incident-response-summary.m4a",
    summaryAudioTitle: "Listen to Model Monitoring, Drift, and Incident Response",
    shortSummary: "How educational AI teams detect changing data, behaviour, performance, access, costs, and harms, and how clear thresholds, ownership, containment, communication, remedy, and learning turn monitoring into accountable operations.",
    fullSummary: `An AI system that passed evaluation before launch can become less suitable over time. Models, prompts, retrieval sources, interfaces, users, courses, and policies change. Monitoring is the planned collection and interpretation of evidence about whether the system continues to work as intended and whether new harms appear. It should begin from the educational purpose and risk assessment, not from whatever metrics a vendor happens to expose.

Drift describes change that can weaken an earlier evaluation. Data drift occurs when inputs change, such as a new curriculum, language mix, or student population. Concept drift occurs when the relationship between inputs and the target changes. Model or product updates can alter output without a local code change. Retrieval sources may become stale. Human practice can drift when users develop shortcuts or use a tool for decisions outside its approved scope. Cost and latency changes can also make access inequitable.

Monitoring combines technical and human signals. Teams can track error rates, calibration, source fidelity, harmful outputs, latency, usage, override rates, accessibility failures, complaints, subgroup patterns, and unaided learning outcomes. Averages need examples and uncertainty. A stable metric does not prove that unmeasured harms are absent. Learners and educators need easy routes to report problems, and reports should be protected from retaliation and reviewed by people able to act.

An incident is an event that threatens safety, rights, learning, security, privacy, or reliable operation. Response plans name severity levels, owners, communication channels, evidence-preservation rules, and authority to pause a feature. Teams contain the issue, protect affected people, investigate causes, correct or roll back, communicate honestly, and provide remedy. Secrets and personal data should not be copied into public logs. A post-incident review examines system and process causes rather than searching only for individual blame.

In education, learners can monitor a fictional writing-feedback model across two terms. They receive charts showing rising citation errors after a model update, slower performance on older devices, and complaints from multilingual students. Groups decide what crosses a stop threshold, what evidence to preserve, whom to notify, and how to support affected learners. They design a rollback and a test for safe return, then publish a plain-language incident summary.

Monitoring is meaningful only when evidence changes decisions. Institutions should define baselines, thresholds, review frequency, update triggers, retention, and escalation before launch. They should periodically retest with representative cases and retire systems whose benefits no longer justify their risks or burden. Drift is not proof of negligence; ignoring observable drift is a governance failure. Responsible operations make change, uncertainty, incidents, and repair visible throughout the life of educational AI. A public monitoring note can summarize the current version, checks, known limitations, recent incidents, corrective actions, owner, and next review without exposing personal or security-sensitive data.`,
    coreIdeas: [
      "Monitoring tests whether an educational AI system continues to meet its purpose as models, data, content, users, contexts, costs, and policies change.",
      "Data, concept, product, source, practice, performance, accessibility, and cost drift require technical measures plus complaints, examples, subgroup analysis, and learning evidence.",
      "Incident response needs thresholds, owners, containment, protected evidence, communication, remedy, rollback, safe-return tests, and post-incident learning without reflexive blame.",
    ],
    educationConnection: "Have learners respond to a fictional model update with rising citation errors, device inequity, and multilingual complaints by setting thresholds, preserving evidence, supporting users, rolling back, testing return, and writing a public summary.",
    relatedConcepts: ["Concept drift", "AI incident response", "Continuous evaluation"],
    sourceUrls: [
      { label: "NIST AI RMF: Manage Function", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" },
      { label: "NIST Generative AI Profile", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" },
      { label: "OECD AI Incidents Monitor", url: "https://oecd.ai/en/incidents" },
    ],
    createdAt: "2026-08-17T08:00:00.000Z",
  },
  {
    id: "academy-064",
    listingIdentifier: "Educational Theory 32",
    slug: "student-voice-and-learner-participation",
    title: "Student Voice and Learner Participation",
    track: "educational-theory",
    level: "core",
    tags: ["student voice", "learner participation", "co-decision"],
    image: "/images/academy/covers/academy-064-student-voice-and-learner-participation.png",
    imageAlt: "A Latina teenage student chairs a design discussion with a Black boy, East Asian girl, wheelchair-using White student, and attentive teacher around a classroom decision map",
    summaryAudio: "/audio/academy/academy-064-student-voice-and-learner-participation-summary.m4a",
    summaryAudioTitle: "Listen to Student Voice and Learner Participation",
    shortSummary: "How schools create safe, inclusive spaces for learners to form and express views, reach responsible audiences, influence decisions, receive feedback, and share power without tokenism or compelled disclosure.",
    fullSummary: `Student voice concerns learners' perspectives, experiences, questions, and proposals about education. Participation goes further by asking how learners help shape decisions that affect them. Voice is not a survey completed after adults have already chosen. Meaningful participation creates conditions in which learners can form a view, express it in accessible ways, reach someone responsible, influence a real decision, and learn what happened afterward.

Laura Lundy's model interprets the right to be heard through space, voice, audience, and influence. Space means a safe and inclusive opportunity to form and express views. Voice means appropriate information and support to communicate. Audience means the view reaches a person or body with responsibility. Influence means it receives due weight and a reasoned response. These elements expose tokenism: inviting comments without an audience or possible influence is not shared decision-making.

Participation must include learner diversity. Meetings, writing, anonymous channels, visual methods, supported communication, home languages, and trusted advocates may offer different routes. Students should not be forced to disclose identity, disability, trauma, family circumstances, or criticism publicly. Adults need to notice whose confidence, language, schedule, status, or digital access makes participation easier. Compensation, preparation, safeguarding, and clear boundaries can reduce extractive consultation.

Power remains real. Learners do not need to make every institutional decision, and adults retain duties for safety, rights, curriculum, and resources. Institutions should explain what is open to change, what constraints apply, and how competing views will be weighed. Feedback closes the loop. When a proposal is not adopted, students deserve a reason and, where possible, another route. Participation should not expose dissenting learners to punishment or lower expectations.

In education, learners can co-design rules for a classroom AI assistant. The class receives plain-language information about data, capabilities, and limits. Small groups identify acceptable uses, prohibited uses, support needs, and evidence of benefit or harm. Anonymous and spoken routes collect views. A mixed student-teacher council publishes decisions, reasons, unresolved disagreements, a review date, and a way to report problems. Later evidence can reopen the rules.

Student voice strengthens education when it changes knowledge and action rather than decorating an adult plan. It can reveal access barriers, unintended consequences, and goals that formal metrics miss. Institutions should document who participated, who was absent, what influence occurred, and how views differed without claiming one student represents a group. Participation develops civic and metacognitive capability while improving decisions, but only when learners have information, safety, support, audience, influence, and visible follow-through. Schools should revisit participation methods and outcomes with students, since a route that feels safe and influential for one decision, age, culture, or group may fail in another. Evidence of influence should include concrete changes as well as responsible reasons when proposals could not be adopted.`,
    coreIdeas: [
      "Student voice becomes meaningful participation when learners have safe space, supported expression, a responsible audience, genuine influence, and feedback about the decision.",
      "Inclusive routes, safeguarding, preparation, privacy, and attention to absent or less powerful learners reduce tokenism and extractive consultation.",
      "Adults retain duties and constraints, but they should define decision boundaries, weigh views transparently, protect dissent, explain outcomes, and permit later review.",
    ],
    educationConnection: "Have learners co-design classroom AI rules through accessible and anonymous routes, publish accepted and rejected proposals with reasons, name unresolved disagreement, and schedule evidence-based review.",
    relatedConcepts: ["Learner agency", "Co-design", "Children's rights"],
    sourceUrls: [
      { label: "Lundy: Voice is not Enough", url: "https://doi.org/10.1080/01411920701657033" },
      { label: "UN Convention on the Rights of the Child", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child" },
      { label: "OECD Learning Compass 2030", url: "https://www.oecd.org/en/data/tools/oecd-learning-compass-2030.html" },
    ],
    createdAt: "2026-08-17T08:00:00.000Z",
  },
  {
    id: "academy-065",
    listingIdentifier: "AI Knowledge 33",
    slug: "procuring-and-evaluating-educational-ai-vendors",
    title: "Procuring and Evaluating Educational AI Vendors",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI procurement", "vendor evaluation", "education technology"],
    image: "/images/academy/covers/academy-065-procuring-and-evaluating-educational-ai-vendors.png",
    imageAlt: "A South Asian woman procurement lead, Black man teacher, and White woman student representative compare an educational AI contract, evidence table, and data-flow diagram",
    summaryAudio: "/audio/academy/academy-065-procuring-and-evaluating-educational-ai-vendors-summary.m4a",
    summaryAudioTitle: "Listen to Procuring and Evaluating Educational AI Vendors",
    shortSummary: "A practical method for comparing educational need, independent evidence, data flows, security, accessibility, model change, costs, support, contract rights, exit, and accountable pilot results before purchasing AI.",
    fullSummary: `Procuring educational AI is a decision about a learning system, not a shopping comparison of feature lists. Institutions first define the educational problem, affected users, current workflow, evidence of need, and non-purchase alternatives. A product should not be selected merely because it demonstrates fluent output or promises personalization. Requirements should state the learner or educator outcome, acceptable risks, implementation capacity, and evidence needed to continue.

Vendor claims require verification. Buyers can request evaluation methods, representative populations, limitations, error examples, subgroup results, accessibility testing, security practices, incident history, model and data documentation, and references from comparable settings. A benchmark score may not match the local curriculum, language, age, or decision. Demonstrations should use institution-designed cases, including failures and accessibility needs, rather than only vendor-selected prompts.

Data and technical review maps every flow. Teams ask what is collected, inferred, retained, combined, used for training, shared with subprocessors, stored in which jurisdictions, and deleted at contract end. They examine authentication, encryption, role controls, logs, breach response, integrations, availability, exports, and recovery. Contract language should address ownership, confidentiality, audit, change notification, service levels, intellectual property, indemnity, legal compliance, and the institution's ability to suspend a risky feature.

Full cost includes licences, usage charges, devices, network capacity, integration, migration, training, accessibility remediation, monitoring, support, security review, staff time, and exit. Promotional pricing can hide later dependence. Institutions need usable data exports, deletion confirmation, transition support, and a fallback if the service changes or closes. A model update that materially changes behaviour should trigger notice and reassessment rather than arrive as an invisible improvement.

In education, learners can act as a procurement panel comparing two fictional AI tutors and an improved non-AI alternative. They create weighted criteria for learning evidence, accessibility, privacy, security, teacher control, total cost, model change, support, and exit. After testing common cases, each group identifies unanswered questions and contract conditions. The panel may reject all bids, recommend a bounded pilot, or approve with limits and a review date.

A pilot is part of procurement evidence, not an automatic path to purchase. It should use representative users, independent measures, clear consent, protected alternatives, success and stop thresholds, and a plan for deletion. Learners and educators report burden as well as benefit. Procurement is responsible when it preserves institutional choice, makes vendor dependence visible, and ties continued payment to demonstrable educational value, rights protection, and acceptable operation throughout the contract. Renewal should repeat key checks rather than rely on the original sales review. Buyers should compare actual usage, total spending, support records, incidents, accessibility fixes, model changes, outcome evidence, and the cost of switching. A credible exit test confirms that data can be exported and deleted before dependence becomes irreversible. That choice should remain genuinely reversible.`,
    coreIdeas: [
      "Procurement starts from a defined educational need, affected users, alternatives, required outcomes, risks, and institutional capacity rather than a vendor demonstration.",
      "Independent evaluation covers local learning evidence, failures, subgroup performance, accessibility, security, data flows, model changes, support, and implementation burden.",
      "Contracts and total-cost analysis should preserve audit, notice, suspension, export, deletion, transition, and exit rights while a bounded pilot tests value and harm.",
    ],
    educationConnection: "Have learners compare two fictional AI tutors and a non-AI alternative using weighted educational, accessibility, data, security, cost, support, change, and exit criteria, then issue a conditional procurement decision.",
    relatedConcepts: ["Vendor due diligence", "Total cost of ownership", "Algorithmic impact assessment"],
    sourceUrls: [
      { label: "UK Government: Procuring Educational Technology", url: "https://www.gov.uk/guidance/data-protection-in-schools/procuring-educational-technology-edtech" },
      { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "US Department of Education: AI and the Future of Teaching and Learning", url: "https://eric.ed.gov/?id=ED631097" },
    ],
    createdAt: "2026-08-18T08:00:00.000Z",
  },
  {
    id: "academy-066",
    listingIdentifier: "Educational Theory 33",
    slug: "inclusive-pedagogy-and-digital-accessibility",
    title: "Inclusive Pedagogy and Digital Accessibility",
    track: "educational-theory",
    level: "core",
    tags: ["inclusive pedagogy", "digital accessibility", "learner variability"],
    image: "/images/academy/covers/academy-066-inclusive-pedagogy-and-digital-accessibility.png",
    imageAlt: "A Black woman teacher supports a White wheelchair user, East Asian student using a screen reader, and Middle Eastern student studying the same tactile science diagram in a bright classroom",
    summaryAudio: "/audio/academy/academy-066-inclusive-pedagogy-and-digital-accessibility-summary.m4a",
    summaryAudioTitle: "Listen to Inclusive Pedagogy and Digital Accessibility",
    shortSummary: "How educators combine belonging, high expectations, flexible participation, explicit support, accessible digital materials, assistive technology, accommodations, learner feedback, and common learning goals without stereotyping or lowering rigor.",
    fullSummary: `Inclusive pedagogy designs learning so diverse students participate, belong, and pursue worthwhile goals without being treated as exceptions. Digital accessibility ensures that websites, documents, media, controls, and tools can be perceived, operated, understood, and used reliably by people with disabilities. The two overlap but are not identical. A technically conforming page can support an exclusionary lesson, while a welcoming teacher cannot remove a keyboard trap through goodwill alone.

Inclusive practice begins with learner variability rather than a mythical average. Educators identify the fixed learning goal and separate it from avoidable barriers in language, navigation, timing, sensory format, physical action, background knowledge, or social participation. Purposeful options can support engagement, representation, and expression while common success criteria preserve rigor. Options should be manageable and tested; more formats do not automatically improve access or learning.

Digital materials need semantic headings, keyboard access, visible focus, sufficient contrast, meaningful alternative text, captions, transcripts, understandable labels, error guidance, and compatibility with assistive technology. Documents require reading order and tagged structure. Time limits, drag-only interactions, inaccessible equations, and unlabeled controls can block participation. Automated checkers find some problems, but human inspection and testing with disabled users remain necessary.

Accessibility standards do not replace individual accommodations, specialist expertise, or direct teaching. A learner may need sign-language interpretation, extended time, a particular communication method, accessible assessment, or assistive technology even in a well-designed course. Teachers should ask rather than infer needs from a diagnosis or identity. Privacy matters because requesting support can reveal sensitive information. Students need a route to report barriers without proving harm repeatedly.

In education, learners can audit an online science activity using keyboard-only navigation, screen-reader checks, zoom, captions, colour-independent meaning, plain instructions, and a review of the learning goal. They interview or use feedback from varied users, fix barriers, and retest. They then compare whether alternative response modes provide equivalent evidence about the target concept rather than making one route easier or less respected.

Inclusion is continuous because content, tools, and learners change. Institutions should assign accessibility owners, include requirements in procurement, train staff, monitor complaints and fixes, and publish support routes. Participation and outcome data should be examined without blaming learners for inaccessible systems. Inclusive pedagogy and digital accessibility work together when design anticipates variability, individual support remains available, disabled people shape decisions, and every learner is treated as a full member of the educational community. Remediation priorities should consider severity and educational timing, since a barrier fixed after an assessment or course ends has already denied opportunity. Temporary accessible alternatives, direct communication, and individual remedy are needed while technical repair proceeds. Public progress reporting can build accountability without revealing a learner's disability or support history. Access delayed can become educational opportunity permanently denied.`,
    coreIdeas: [
      "Inclusive pedagogy addresses belonging, participation, high expectations, and learner variability, while digital accessibility supplies testable access requirements for technologies and content.",
      "Fixed learning goals should be separated from avoidable barriers, with purposeful options and common success criteria rather than stereotypes, unlimited choice, or reduced rigor.",
      "Standards, human testing, disabled-user participation, accommodations, assistive technology, reporting routes, procurement, ownership, and continuous remediation work together.",
    ],
    educationConnection: "Have learners audit and remediate an online science activity with keyboard, screen reader, zoom, captions, contrast, instructions, user feedback, and equivalent evidence checks across response options.",
    relatedConcepts: ["Universal Design for Learning", "WCAG", "Assistive technology"],
    sourceUrls: [
      { label: "W3C Web Content Accessibility Guidelines 2.2", url: "https://www.w3.org/TR/WCAG22/" },
      { label: "CAST Universal Design for Learning Guidelines", url: "https://udlguidelines.cast.org/" },
      { label: "UNESCO Global Education Monitoring Report: Inclusion and Education", url: "https://www.unesco.org/gem-report/en/publication/inclusion-and-education?hub=70285" },
    ],
    createdAt: "2026-08-18T08:00:00.000Z",
  },
  {
    id: "academy-067",
    listingIdentifier: "AI Knowledge 34",
    slug: "participatory-design-of-educational-ai",
    title: "Participatory Design of Educational AI",
    track: "ai-knowledge",
    level: "core",
    tags: ["participatory design", "educational AI", "co-design"],
    image: "/images/academy/covers/academy-067-participatory-design-of-educational-ai.png",
    imageAlt: "A Black teenage student, Latina teacher, East Asian parent, and White product designer build an educational AI prototype together with storyboards and risk cards",
    summaryAudio: "/audio/academy/academy-067-participatory-design-of-educational-ai-summary.m4a",
    summaryAudioTitle: "Listen to Participatory Design of Educational AI",
    shortSummary: "How learners, educators, families, and affected staff share knowledge and influence across problem framing, requirements, prototyping, testing, governance, deployment, monitoring, and redesign rather than merely reacting to a finished AI product.",
    fullSummary: `Participatory design involves people affected by a system as contributors to shaping it, not only as subjects who test a finished product. In educational AI, learners, teachers, families, support staff, leaders, and communities hold different knowledge about goals, routines, barriers, relationships, risks, and consequences. Their participation can change whether AI is needed, what role it receives, what data are acceptable, and how success is defined.

Participation begins with problem framing. A school may assume it needs an AI engagement predictor, while students reveal that inaccessible schedules and unclear deadlines are the real problem. Co-design can redirect effort toward simpler changes. Teams map stakeholders, including people who may not volunteer or who could be harmed. They clarify which decisions are open, what constraints apply, how contributions will influence the result, and who remains accountable.

Methods can include interviews, observation, journey maps, storyboards, paper prototypes, role-play, scenario critique, diary studies, workshops, and supported trials. Materials should be understandable without technical expertise. Children and marginalized participants need age-appropriate information, safeguarding, accessible communication, privacy, and freedom to disagree or withdraw. Compensation and scheduling recognize participation as labour. One representative cannot speak for an entire group.

Power must be designed, not assumed away. Product teams control budgets and technical choices; teachers control classroom access; adults may dominate children; fluent speakers may dominate meetings. Facilitators can use small groups, anonymous routes, independent advocates, multiple languages, and published decision logs. Feedback shows which proposals were accepted, changed, or rejected and why. Participation without influence becomes extraction and can deepen distrust.

In education, learners can co-design an AI study planner. Participants first describe current planning practices and barriers. They create low-tech alternatives and AI prototypes, then test scenarios involving changing deadlines, shared devices, disability access, family responsibilities, and unwanted data collection. A decision log records tradeoffs. The group defines what the planner must never infer, how users correct it, what evidence would justify a pilot, and who can stop deployment.

Participation continues after launch. People affected by errors need reporting and appeal routes, and governance groups need monitoring evidence and authority to require change. Teams should evaluate both the product and the participation: who joined, who was missing, whose ideas influenced decisions, and whether burdens were fairly distributed. Participatory design does not guarantee a safe or effective system, but it improves the knowledge and legitimacy available for decision-making and keeps educational AI answerable to the communities it changes. Institutions should budget participation as core project work, not unpaid goodwill. They should return findings in accessible forms, preserve dissenting views, and explain how later evidence changed the design. When participation reveals that the original problem or product is inappropriate, cancellation should count as a successful design outcome. Stopping is also valid design work.`,
    coreIdeas: [
      "Participatory design gives affected people influence over problem framing, alternatives, requirements, data, prototypes, testing, governance, monitoring, and redesign.",
      "Accessible methods, safeguarding, privacy, compensation, multiple routes, clear decision boundaries, and attention to missing voices make participation more inclusive and less extractive.",
      "Power remains unequal, so decision logs, feedback, appeal, monitoring authority, and evaluation of whose ideas changed the system are essential.",
    ],
    educationConnection: "Have learners and stakeholders co-design a study planner by examining current barriers, testing AI and non-AI prototypes against diverse scenarios, recording decisions, defining prohibited inferences, and setting pilot and stop rules.",
    relatedConcepts: ["Co-design", "Human-centred AI", "Student voice"],
    sourceUrls: [
      { label: "Google PAIR Guidebook", url: "https://pair.withgoogle.com/guidebook/" },
      { label: "UNICEF Policy Guidance on AI for Children", url: "https://www.unicef.org/globalinsight/reports/policy-guidance-ai-children" },
      { label: "OECD: Children and Young People's Participation", url: "https://www.oecd.org/en/topics/children-and-young-people.html" },
    ],
    createdAt: "2026-08-20T08:00:00.000Z",
  },
  {
    id: "academy-068",
    listingIdentifier: "Educational Theory 34",
    slug: "evidence-informed-educational-decision-making",
    title: "Evidence-Informed Educational Decision Making",
    track: "educational-theory",
    level: "core",
    tags: ["evidence-informed practice", "educational research", "decision making"],
    image: "/images/academy/covers/academy-068-evidence-informed-educational-decision-making.png",
    imageAlt: "A South Asian woman school leader, Black man teacher, and White woman student compare research findings, local classroom evidence, and community priorities on a decision board",
    summaryAudio: "/audio/academy/academy-068-evidence-informed-educational-decision-making-summary.m4a",
    summaryAudioTitle: "Listen to Evidence-Informed Educational Decision Making",
    shortSummary: "How educators combine relevant research, local data, professional expertise, learner and community knowledge, feasibility, ethics, and ongoing evaluation without treating one study, dashboard, or evidence hierarchy as an automatic answer.",
    fullSummary: `Evidence-informed educational decision making uses the best available and relevant evidence alongside professional expertise, local knowledge, values, resources, and the perspectives of learners and communities. It differs from an evidence-dictated model in which a study automatically determines action. Research can estimate likely effects and explain mechanisms, but educators still need to judge fit, feasibility, equity, ethics, and what evidence should be collected locally.

Different questions require different evidence. Randomized studies can estimate average causal effects under specified conditions. Quasi-experiments, observational data, qualitative research, design studies, implementation studies, systematic reviews, and theory contribute other forms of knowledge. A strong decision examines study quality, population, intervention, comparison, outcomes, context, uncertainty, and conflicts of interest. A high position in an evidence hierarchy does not make an irrelevant outcome or poorly implemented programme useful locally.

Local data also need interpretation. Attendance, assessment, surveys, work samples, observations, and learner accounts can reveal needs and implementation, but each has limitations. A dashboard correlation is not a causal explanation. Professional expertise helps connect evidence with curriculum and classroom relationships, while students and families reveal burdens, goals, and consequences that formal measures may miss. Disagreement is information rather than a defect to hide.

Decision processes can be structured. Teams define the problem and desired outcome, map stakeholders, search and appraise evidence, compare alternatives, examine equity and feasibility, state assumptions, and select a proportionate action. A theory of change explains how activities should lead to outcomes. Implementation measures show whether the approach occurred as intended. Predefined success, harm, and stop criteria make later evaluation less vulnerable to convenient reinterpretation.

In education, learners can advise a school considering AI-generated feedback. Groups examine a small research review, vendor evidence, local writing samples, teacher workload data, accessibility reports, and student concerns. They identify missing evidence, build a theory of change, and recommend rejection, a revised non-AI workflow, or a bounded pilot. The decision includes measures of writing improvement, feedback use, equity, workload, and unintended effects.

Responsible evidence use is iterative. Institutions should document decisions and uncertainty, monitor implementation and outcomes, invite challenge, and revise or stop when evidence changes. They should avoid selectively citing supportive findings or demanding impossible certainty only for alternatives to established practice. Evidence-informed work is disciplined humility: it makes reasons visible, treats context and affected people as evidence, and uses evaluation to learn rather than to defend a decision already made. Decision records should state whose outcomes mattered, which alternatives were considered, what evidence was unavailable, and when reconsideration will occur. Sharing null and negative local findings reduces repeated waste. Independent facilitation can help when leaders, vendors, or researchers have interests that make honest interpretation difficult. Evidence should remain challengeable by the people who experience the decision's consequences.`,
    coreIdeas: [
      "Evidence-informed decisions integrate relevant research with professional expertise, local evidence, learner and community knowledge, values, ethics, resources, and context.",
      "Different questions need different methods, and appraisal examines quality, relevance, population, outcomes, uncertainty, implementation, equity, and conflicts rather than hierarchy alone.",
      "Structured problem definition, alternatives, theory of change, predefined measures, documented assumptions, monitoring, challenge, and revision support disciplined learning.",
    ],
    educationConnection: "Have learners advise on AI feedback by appraising research, vendor claims, local work, workload, accessibility, and student concerns, then build a theory of change and a time-bounded decision with stop criteria.",
    relatedConcepts: ["Research appraisal", "Theory of change", "Implementation fidelity"],
    sourceUrls: [
      { label: "Education Endowment Foundation: Teaching and Learning Toolkit", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit" },
      { label: "What Works Clearinghouse", url: "https://ies.ed.gov/ncee/wwc/" },
      { label: "Campbell Collaboration: Education", url: "https://www.campbellcollaboration.org/education/" },
    ],
    createdAt: "2026-08-20T08:00:00.000Z",
  },
  {
    id: "academy-069",
    listingIdentifier: "AI Knowledge 35",
    slug: "evaluating-the-learning-impact-of-ai",
    title: "Evaluating the Learning Impact of AI",
    track: "ai-knowledge",
    level: "core",
    tags: ["AI evaluation", "learning outcomes", "educational impact"],
    image: "/images/academy/covers/academy-069-evaluating-the-learning-impact-of-ai.png",
    imageAlt: "A Black woman learning scientist and East Asian and White adult learners compare unaided transfer tasks, process evidence, and an AI-supported classroom activity in a bright research studio",
    summaryAudio: "/audio/academy/academy-069-evaluating-the-learning-impact-of-ai-summary.m4a",
    summaryAudioTitle: "Listen to Evaluating the Learning Impact of AI",
    shortSummary: "How teams move from AI output quality and usage to credible claims about learner knowledge, transfer, retention, agency, equity, wellbeing, teacher workload, implementation, cost, and unintended effects.",
    fullSummary: `Evaluating educational AI requires a clear claim. A system may generate accurate answers, attract repeated use, save teacher time, improve work completed with assistance, or strengthen learning that learners can later demonstrate independently. These are different outcomes. Product engagement and model performance can support an evaluation, but neither proves learning. Teams should define the target knowledge or skill, population, setting, comparison, timeframe, and decision before collecting favourable metrics.

Learning measures should align with the construct. Immediate supported performance shows what a learner can do with the tool. An unaided post-test examines independent capability. Delayed assessment tests retention, while a new problem examines transfer. Explanations, error analysis, and process traces can reveal strategy and misconception. Measures also need accessibility, reliability, validity, and protection from contamination when test items or answers enter the AI context.

Study designs offer different strengths. Random assignment can reduce selection bias when ethical and feasible. Strong quasi-experimental designs can compare groups or changes when randomization is unavailable. Within-person designs, interrupted time series, mixed methods, and careful qualitative studies can answer other questions. Baselines should include ordinary teaching and credible lower-cost alternatives, not only no support. Pre-registration, adequate samples, attrition analysis, uncertainty intervals, and independent replication reduce overclaiming.

Impact extends beyond average achievement. Evaluation can include agency, confidence calibration, help-seeking, wellbeing, accessibility, academic integrity, privacy, teacher workload, implementation quality, opportunity cost, cost-effectiveness, and subgroup outcomes. A positive average may hide exclusion or harm. Fidelity data show whether the intended pedagogy occurred. Model versions, prompts, sources, settings, and product updates should be recorded because the intervention can change during the study.

In education, learners can design an evaluation for a scaffolded algebra tutor. They specify the hypothesis, comparison, supported practice measure, immediate unaided test, delayed transfer task, workload record, and harm indicators. They decide how to handle absences and tool changes, create consent and opt-out procedures, and state what result would justify adoption, redesign, or stopping. A mock dataset then tests whether their conclusion matches the uncertainty.

Evaluation should improve decisions, not decorate a launch. Institutions need proportionate pilots before scale, ongoing monitoring after adoption, transparent reporting of null and negative results, and routes for affected people to challenge interpretation. A credible conclusion distinguishes observed association from causal evidence and learning from task completion. AI has educational impact only when its contribution to worthwhile, durable, equitable capability is demonstrated in the context where people intend to use it. Reports should identify funding, evaluator independence, missing data, implementation variation, model changes, and limits on generalization. Learners and teachers deserve understandable findings, including evidence that challenges the preferred product. When benefits disappear after assistance is removed, the result may demonstrate supported productivity rather than the independent, durable learning the institution intended.`,
    coreIdeas: [
      "AI accuracy, engagement, assisted performance, time savings, and independent learning are distinct outcomes that require an explicit claim, construct, comparison, population, and timeframe.",
      "Aligned immediate, unaided, delayed, and transfer measures plus suitable designs, uncertainty, attrition, implementation, version records, and replication strengthen inference.",
      "Impact includes agency, wellbeing, access, integrity, privacy, workload, cost, opportunity cost, subgroup outcomes, unintended effects, and transparent null or negative findings.",
    ],
    educationConnection: "Have learners design an algebra-tutor evaluation with supported and unaided measures, delayed transfer, a credible comparison, workload and harm indicators, consent, uncertainty, and explicit adopt, redesign, or stop thresholds.",
    relatedConcepts: ["Causal inference", "Transfer of learning", "Construct validity"],
    sourceUrls: [
      { label: "What Works Clearinghouse Standards Handbook", url: "https://ies.ed.gov/ncee/wwc/Handbooks" },
      { label: "Education Endowment Foundation: Evaluating Projects", url: "https://educationendowmentfoundation.org.uk/projects-and-evaluation/evaluating-projects" },
      { label: "CONSORT-AI Extension", url: "https://www.nature.com/articles/s41591-020-1034-x" },
    ],
    createdAt: "2026-08-21T08:00:00.000Z",
  },
  {
    id: "academy-070",
    listingIdentifier: "Educational Theory 35",
    slug: "implementation-science-in-education",
    title: "Implementation Science in Education",
    track: "educational-theory",
    level: "core",
    tags: ["implementation science", "educational change", "continuous improvement"],
    image: "/images/academy/covers/academy-070-implementation-science-in-education.png",
    imageAlt: "A Middle Eastern woman implementation coach, Black man teacher, White woman school leader, and East Asian student examine a classroom change timeline with feedback and adaptation notes",
    summaryAudio: "/audio/academy/academy-070-implementation-science-in-education-summary.m4a",
    summaryAudioTitle: "Listen to Implementation Science in Education",
    shortSummary: "How evidence-based ideas become usable routines through fit assessment, active implementation teams, training, coaching, data systems, leadership, facilitative administration, adaptation, staged scale, and attention to outcomes and sustainability.",
    fullSummary: `Implementation science studies how programmes, practices, and policies become used with quality in real settings. A promising intervention does not produce outcomes merely because a school purchases it or staff attend training. People need usable guidance, skills, time, resources, leadership, data, and organizational support. The intervention also needs to fit learners, curriculum, culture, infrastructure, and local priorities. Implementation is a distinct object of inquiry rather than an administrative afterthought.

Teams begin by defining the usable innovation: its essential functions, teachable components, expected mechanisms, and permissible adaptations. They assess need, evidence, readiness, fit, capacity, and alternatives. Exploration leads to installation, where staffing, technology, materials, policies, and data systems are prepared. Initial implementation involves learning and solving problems under real conditions. Full implementation and scale should follow demonstrated capability, not a calendar promise.

Implementation drivers include competency, organization, and leadership. Selection, training, coaching, and performance assessment support practitioners. Decision-support data, facilitative administration, and system interventions remove organizational barriers. Technical leadership addresses known tasks, while adaptive leadership helps people work through uncertainty, values, identity, and changing relationships. An implementation team coordinates these functions and has authority to respond to evidence.

Fidelity asks whether essential functions occurred, but rigid replication can ignore context. Adaptation should be deliberate and documented. Teams identify the core mechanism they must preserve, the local barrier prompting change, and the evidence used to judge the adaptation. Outcomes operate at several levels: implementation, such as reach, acceptability, feasibility, adoption, fidelity, cost, and sustainability; service or teaching quality; and learner outcomes. Success at one level does not guarantee another.

In education, learners can plan the introduction of an AI-supported formative-assessment routine. They define its essential function, compare current practice, map stakeholders and readiness, and design training, coaching, technical support, data review, and student feedback. A small initial site tests workload, access, fidelity, and learning. The team records adaptations and decides whether to improve, expand, pause, or stop rather than assuming pilot completion requires scale.

Sustainability means continued educational value and capacity, not permanent attachment to a product. Staff turnover, funding, model updates, curriculum change, and accumulated burden can weaken use. Institutions should build local expertise, monitor equity, budget full costs, and retain exit routes. Implementation science brings disciplined realism to innovation: outcomes depend on both the practice and the system that supports it, and responsible scale follows evidence of fit, capability, benefit, and learning over time. Scale can therefore mean spreading, adapting, deepening, or deliberately limiting a practice. The right decision may be to strengthen one setting rather than expand quickly. De-implementation is also skilled work: teams remove low-value routines, support transition, preserve necessary records, and learn why earlier expectations were not sustained. Responsible implementation treats practical limits as evidence, not embarrassment or failure.`,
    coreIdeas: [
      "Implementation science examines how an intervention's usable components, context, people, organization, and system supports produce or fail to produce intended outcomes.",
      "Exploration, installation, initial implementation, full implementation, and scale require fit, readiness, training, coaching, data, administration, leadership, resources, and empowered teams.",
      "Fidelity and documented adaptation, implementation outcomes, teaching quality, learner outcomes, equity, cost, sustainability, local capacity, and exit all require evidence.",
    ],
    educationConnection: "Have learners plan an AI formative-assessment implementation by defining core functions, readiness, support, staged testing, student feedback, workload, fidelity, adaptation records, outcomes, and improve, expand, pause, or stop decisions.",
    relatedConcepts: ["Implementation fidelity", "Change management", "Continuous improvement"],
    sourceUrls: [
      { label: "National Implementation Research Network: Active Implementation Hub", url: "https://www.ed.gov/teaching-and-administration/lead-and-manage-my-school/state-support-network/ssn-resources/the-national-implementation-research-networks-active-implementation-hub" },
      { label: "Education Endowment Foundation: Putting Evidence to Work", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/implementation" },
      { label: "Fixsen and colleagues: Implementation Research Synthesis", url: "https://lincs.ed.gov/professional-development/resource-collections/profile-727" },
    ],
    createdAt: "2026-08-21T08:00:00.000Z",
  },
];
