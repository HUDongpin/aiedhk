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
  return academyCurriculumV1.pairs.find((pair) => pair.topics.some((topic) => !published.has(topic.slug)));
}
