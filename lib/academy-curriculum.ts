import type { AcademyLevel, AcademyTrack } from "@/lib/types";

export interface AcademyCurriculumTopic {
  slug: string;
  title: string;
  track: AcademyTrack;
  level: AcademyLevel;
  prerequisiteSlugs: string[];
}

export interface AcademyCurriculumPair {
  order: number;
  topics: [AcademyCurriculumTopic, AcademyCurriculumTopic];
}

const aiTopics = [
  ["what-artificial-intelligence-is", "What Artificial Intelligence Is"],
  ["machine-learning-deep-learning-generative-ai", "Machine Learning, Deep Learning, and Generative AI"],
  ["how-large-language-models-generate-text", "How Large Language Models Generate Text"],
  ["training-validation-and-test-data", "Training, Validation, and Test Data"],
  ["supervised-unsupervised-reinforcement-learning", "Supervised, Unsupervised, and Reinforcement Learning"],
  ["features-labels-and-representations", "Features, Labels, and Learned Representations"],
  ["what-neural-networks-learn", "What Neural Networks Learn"],
  ["prompts-context-and-model-responses", "Prompts, Context, and Model Responses"],
  ["ai-errors-uncertainty-and-hallucination", "AI Errors, Uncertainty, and Hallucination"],
  ["evaluating-ai-system-performance", "Evaluating AI System Performance"],
  ["embeddings-and-semantic-similarity", "Embeddings and Semantic Similarity"],
  ["transformers-attention-and-context-windows", "Transformers, Attention, and Context Windows"],
  ["retrieval-augmented-generation", "Retrieval-Augmented Generation"],
  ["fine-tuning-instruction-tuning-and-preference-learning", "Fine-Tuning, Instruction Tuning, and Preference Learning"],
  ["multimodal-ai", "Multimodal AI"],
  ["agents-tools-and-workflows", "AI Agents, Tools, and Workflows"],
  ["knowledge-tracing-and-learner-models", "Knowledge Tracing and Learner Models"],
  ["recommendation-and-personalization-systems", "Recommendation and Personalization Systems"],
  ["computer-vision-for-learning", "Computer Vision for Learning"],
  ["speech-recognition-and-synthesis", "Speech Recognition and Synthesis"],
  ["algorithmic-bias-and-fairness", "Algorithmic Bias and Fairness"],
  ["privacy-security-and-educational-data", "Privacy, Security, and Educational Data"],
  ["explainability-and-transparency", "Explainability and Transparency"],
  ["human-in-the-loop-ai", "Human-in-the-Loop AI"],
  ["ai-safety-and-risk-management", "AI Safety and Risk Management"],
  ["benchmarking-and-evaluation-design", "Benchmarking and Evaluation Design"],
  ["open-and-closed-ai-models", "Open and Closed AI Models"],
  ["compute-efficiency-and-environmental-cost", "Compute, Efficiency, and Environmental Cost"],
  ["ai-governance-in-education", "AI Governance in Education"],
  ["designing-responsible-ai-learning-systems", "Designing Responsible AI Learning Systems"],
  ["educational-data-governance-and-data-quality", "Educational Data Governance and Data Quality"],
  ["model-monitoring-drift-and-incident-response", "Model Monitoring, Drift, and Incident Response"],
  ["procuring-and-evaluating-educational-ai-vendors", "Procuring and Evaluating Educational AI Vendors"],
  ["participatory-design-of-educational-ai", "Participatory Design of Educational AI"],
  ["evaluating-the-learning-impact-of-ai", "Evaluating the Learning Impact of AI"],
  ["tokenization-and-multilingual-ai", "Tokenization and Multilingual AI"],
  ["sampling-temperature-and-top-p", "Sampling, Temperature, and Top-p"],
  ["structured-outputs-and-json-schemas", "Structured Outputs and JSON Schemas"],
  ["prompt-injection-and-untrusted-content", "Prompt Injection and Untrusted Content"],
  ["grounded-answers-and-citation-verification", "Grounded Answers and Citation Verification"],
  ["abstention-and-selective-prediction", "Abstention and Selective Prediction"],
  ["probability-calibration-in-ai", "Probability Calibration in AI"],
  ["precision-recall-and-decision-thresholds", "Precision, Recall, and Decision Thresholds"],
  ["learning-from-imbalanced-data", "Learning from Imbalanced Data"],
  ["data-leakage-in-machine-learning", "Data Leakage in Machine Learning"],
  ["overfitting-and-regularization", "Overfitting and Regularization"],
  ["cross-validation-for-small-datasets", "Cross-Validation for Small Datasets"],
  ["prediction-and-causal-inference", "Prediction and Causal Inference"],
  ["bayesian-updating-for-ai-decisions", "Bayesian Updating for AI Decisions"],
  ["decision-trees-and-rule-based-models", "Decision Trees and Rule-Based Models"],
  ["clustering-without-ground-truth-labels", "Clustering Without Ground-Truth Labels"],
  ["dimensionality-reduction-and-visualization", "Dimensionality Reduction and Visualization"],
  ["gradient-descent-and-optimization", "Gradient Descent and Optimization"],
  ["loss-functions-and-learning-objectives", "Loss Functions and Learning Objectives"],
  ["self-supervised-learning", "Self-Supervised Learning"],
  ["contrastive-learning", "Contrastive Learning"],
  ["knowledge-distillation", "Knowledge Distillation"],
  ["model-quantization", "Model Quantization"],
  ["low-rank-adaptation", "Low-Rank Adaptation"],
  ["synthetic-training-data", "Synthetic Training Data"],
  ["federated-learning", "Federated Learning"],
  ["differential-privacy", "Differential Privacy"],
  ["machine-unlearning", "Machine Unlearning"],
  ["knowledge-graphs-for-educational-ai", "Knowledge Graphs for Educational AI"],
  ["neuro-symbolic-ai", "Neuro-Symbolic AI"],
  ["constraint-satisfaction-and-scheduling", "Constraint Satisfaction and Scheduling"],
  ["search-and-planning-in-ai", "Search and Planning in AI"],
  ["multi-agent-coordination", "Multi-Agent Coordination"],
  ["tool-permissions-and-least-privilege", "Tool Permissions and Least Privilege"],
  ["sandboxing-ai-generated-code", "Sandboxing AI-Generated Code"],
  ["persistent-memory-in-ai-assistants", "Persistent Memory in AI Assistants"],
  ["chunking-documents-for-retrieval", "Chunking Documents for Retrieval"],
  ["hybrid-search-and-reranking", "Hybrid Search and Reranking"],
  ["numerical-reasoning-with-computational-tools", "Numerical Reasoning with Computational Tools"],
  ["optical-character-recognition-for-learning-materials", "Optical Character Recognition for Learning Materials"],
  ["document-layout-and-table-understanding", "Document Layout and Table Understanding"],
  ["vector-databases-and-retrieval-indexes", "Vector Databases and Retrieval Indexes"],
  ["speech-recognition-across-accents", "Speech Recognition Across Accents"],
  ["caption-alignment-and-timing", "Caption Alignment and Timing"],
  ["handwriting-recognition", "Handwriting Recognition"],
  ["ai-assisted-assessment-item-generation", "AI-Assisted Assessment Item Generation"],
  ["reliability-of-automated-essay-scoring", "Reliability of Automated Essay Scoring"],
  ["computerized-adaptive-testing", "Computerized Adaptive Testing"],
  ["the-cold-start-problem-in-recommendations", "The Cold-Start Problem in Recommendations"],
] as const;

const theoryTopics = [
  ["behaviorism-learning-through-consequences", "Behaviorism and Learning Through Consequences"],
  ["cognitive-load-theory", "Cognitive Load Theory"],
  ["constructivism-active-knowledge-building", "Constructivism and Active Knowledge Building"],
  ["working-memory-and-long-term-memory", "Working Memory and Long-Term Memory"],
  ["retrieval-practice", "Retrieval Practice"],
  ["spacing-and-interleaving", "Spacing and Interleaving"],
  ["dual-coding-and-multimedia-learning", "Dual Coding and Multimedia Learning"],
  ["scaffolding-and-the-zone-of-proximal-development", "Scaffolding and the Zone of Proximal Development"],
  ["metacognition-and-self-regulated-learning", "Metacognition and Self-Regulated Learning"],
  ["motivation-self-determination-and-agency", "Motivation, Self-Determination, and Agency"],
  ["schema-theory", "Schema Theory"],
  ["conceptual-change", "Conceptual Change"],
  ["situated-learning", "Situated Learning"],
  ["communities-of-practice", "Communities of Practice"],
  ["social-learning-and-modeling", "Social Learning and Modeling"],
  ["mastery-learning", "Mastery Learning"],
  ["formative-assessment", "Formative Assessment"],
  ["feedback-for-learning", "Feedback for Learning"],
  ["deliberate-practice", "Deliberate Practice"],
  ["transfer-of-learning", "Transfer of Learning"],
  ["achievement-goal-theory", "Achievement Goal Theory"],
  ["control-value-theory-of-achievement-emotions", "Control-Value Theory of Achievement Emotions"],
  ["cognitive-apprenticeship", "Cognitive Apprenticeship"],
  ["inquiry-based-learning", "Inquiry-Based Learning"],
  ["collaborative-learning", "Collaborative Learning"],
  ["universal-design-for-learning", "Universal Design for Learning"],
  ["culturally-responsive-pedagogy", "Culturally Responsive Pedagogy"],
  ["learning-analytics-and-assessment-validity", "Learning Analytics and Assessment Validity"],
  ["teacher-professional-judgment", "Teacher Professional Judgment"],
  ["ethics-care-and-human-flourishing-in-education", "Ethics, Care, and Human Flourishing in Education"],
  ["teacher-professional-learning", "Teacher Professional Learning"],
  ["student-voice-and-learner-participation", "Student Voice and Learner Participation"],
  ["inclusive-pedagogy-and-digital-accessibility", "Inclusive Pedagogy and Digital Accessibility"],
  ["evidence-informed-educational-decision-making", "Evidence-Informed Educational Decision Making"],
  ["implementation-science-in-education", "Implementation Science in Education"],
  ["the-worked-example-effect", "The Worked-Example Effect"],
  ["self-explanation-in-learning", "Self-Explanation in Learning"],
  ["the-generation-effect", "The Generation Effect"],
  ["elaborative-interrogation", "Elaborative Interrogation"],
  ["desirable-difficulties", "Desirable Difficulties"],
  ["productive-failure", "Productive Failure"],
  ["the-icap-framework", "The ICAP Framework"],
  ["learning-by-teaching", "Learning by Teaching"],
  ["peer-instruction", "Peer Instruction"],
  ["dialogic-teaching", "Dialogic Teaching"],
  ["distributed-cognition", "Distributed Cognition"],
  ["embodied-cognition", "Embodied Cognition"],
  ["constructionism", "Constructionism"],
  ["experiential-learning", "Experiential Learning"],
  ["reflective-practice", "Reflective Practice"],
  ["transformative-learning", "Transformative Learning"],
  ["andragogy-and-adult-learning", "Andragogy and Adult Learning"],
  ["heutagogy-and-self-determined-learning", "Heutagogy and Self-Determined Learning"],
  ["cognitive-flexibility-theory", "Cognitive Flexibility Theory"],
  ["variation-theory", "Variation Theory"],
  ["apos-theory-in-mathematics-learning", "APOS Theory in Mathematics Learning"],
  ["realistic-mathematics-education", "Realistic Mathematics Education"],
  ["instrumental-genesis", "Instrumental Genesis"],
  ["commognition-and-learning-mathematics", "Commognition and Learning Mathematics"],
  ["threshold-concepts", "Threshold Concepts"],
  ["epistemic-cognition", "Epistemic Cognition"],
  ["conceptual-and-procedural-knowledge", "Conceptual and Procedural Knowledge"],
  ["representational-competence", "Representational Competence"],
  ["learning-with-multiple-external-representations", "Learning with Multiple External Representations"],
  ["analogical-reasoning", "Analogical Reasoning"],
  ["case-based-reasoning", "Case-Based Reasoning"],
  ["problem-based-learning", "Problem-Based Learning"],
  ["project-based-learning", "Project-Based Learning"],
  ["knowledge-building-theory", "Knowledge Building Theory"],
  ["connectivism", "Connectivism"],
  ["the-community-of-inquiry-framework", "The Community of Inquiry Framework"],
  ["transactional-distance", "Transactional Distance"],
  ["self-efficacy-in-learning", "Self-Efficacy in Learning"],
  ["expectancy-value-theory", "Expectancy-Value Theory"],
  ["attribution-theory", "Attribution Theory"],
  ["the-development-of-interest", "The Development of Interest"],
  ["flow-and-learning", "Flow and Learning"],
  ["school-belonging", "School Belonging"],
  ["identity-and-learning", "Identity and Learning"],
  ["possible-selves", "Possible Selves"],
  ["stereotype-threat-in-learning-contexts", "Stereotype Threat in Learning Contexts"],
  ["test-anxiety-and-learning", "Test Anxiety and Learning"],
  ["epistemic-emotions", "Epistemic Emotions"],
  ["social-interdependence-theory", "Social Interdependence Theory"],
] as const;

const explicitLaunchLevels: Record<string, AcademyLevel> = {
  "what-artificial-intelligence-is": "basics",
  "machine-learning-deep-learning-generative-ai": "basics",
  "how-large-language-models-generate-text": "core",
  "behaviorism-learning-through-consequences": "basics",
  "cognitive-load-theory": "core",
  "constructivism-active-knowledge-building": "basics",
};

function curriculumTopic(
  pairIndex: number,
  item: readonly [string, string],
  track: AcademyTrack,
  previous?: readonly [string, string]
): AcademyCurriculumTopic {
  return {
    slug: item[0],
    title: item[1],
    track,
    level: explicitLaunchLevels[item[0]] ?? (pairIndex < 10 ? "basics" : "core"),
    prerequisiteSlugs: previous ? [previous[0]] : [],
  };
}

export const academyCurriculumV1: { version: 1; pairs: AcademyCurriculumPair[] } = {
  version: 1,
  pairs: aiTopics.map((ai, index) => ({
    order: index + 1,
    topics: [
      curriculumTopic(index, ai, "ai-knowledge", aiTopics[index - 1]),
      curriculumTopic(index, theoryTopics[index], "educational-theory", theoryTopics[index - 1]),
    ],
  })),
};

export function getNextUnpublishedAcademyPair(existingSlugs: Iterable<string>) {
  const published = new Set(existingSlugs);

  for (const pair of academyCurriculumV1.pairs) {
    const publishedCount = pair.topics.filter((topic) => published.has(topic.slug)).length;
    if (publishedCount === pair.topics.length) continue;
    if (publishedCount > 0) {
      throw new Error(
        `Academy curriculum pair ${pair.order} is partially published; stop before selecting another pair.`
      );
    }
    return pair;
  }

  return undefined;
}
