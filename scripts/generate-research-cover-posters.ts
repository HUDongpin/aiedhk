import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type VisualKind =
  | "network"
  | "llm"
  | "taxonomy"
  | "tutor"
  | "mining"
  | "tracing"
  | "effect"
  | "cognitive"
  | "field"
  | "agenda";

interface CoverSpec {
  file: string;
  title: string;
  desc: string;
  label: string;
  year: string;
  headline: string;
  authors: string;
  venue: string;
  visual: VisualKind;
  tags: string[];
}

const outputDir = join(process.cwd(), "public", "images", "research", "covers");

const covers: CoverSpec[] = [
  {
    file: "aied-001-zawacki-richter-2019.svg",
    title: "Visualization poster for Zawacki-Richter et al. 2019 systematic review",
    desc: "A full-bleed research visualization poster with citation clusters, educator gap signals, and AI in higher education application areas.",
    label: "Systematic review",
    year: "2019",
    headline: "AI in higher education: where are the educators?",
    authors: "Zawacki-Richter, Marin, Bond and Gouverneur",
    venue: "International Journal of Educational Technology in Higher Education",
    visual: "network",
    tags: ["higher education", "AI applications", "educator role"],
  },
  {
    file: "aied-002-kasneci-2023.svg",
    title: "Visualization poster for Kasneci et al. 2023 ChatGPT for good",
    desc: "A full-bleed research visualization poster with language-model layers, classroom dialogue, and risk governance signals.",
    label: "LLM opportunities",
    year: "2023",
    headline: "ChatGPT for good? Large language models for education",
    authors: "Kasneci and colleagues",
    venue: "Learning and Individual Differences",
    visual: "llm",
    tags: ["large language models", "teacher support", "assessment"],
  },
  {
    file: "aied-003-chen-2020.svg",
    title: "Visualization poster for Chen, Chen and Lin 2020 AI in Education review",
    desc: "A full-bleed research visualization poster mapping artificial intelligence in education across administration, instruction, and learning.",
    label: "Field map",
    year: "2020",
    headline: "Artificial Intelligence in Education: A Review",
    authors: "Chen, Chen and Lin",
    venue: "IEEE Access",
    visual: "taxonomy",
    tags: ["administration", "instruction", "learning"],
  },
  {
    file: "aied-004-anderson-1985.svg",
    title: "Visualization poster for Anderson, Boyle and Reiser 1985 Intelligent Tutoring Systems",
    desc: "A full-bleed research visualization poster showing domain models, learner models, and pedagogical feedback loops.",
    label: "Foundational ITS",
    year: "1985",
    headline: "Intelligent Tutoring Systems",
    authors: "Anderson, Boyle and Reiser",
    venue: "Science",
    visual: "tutor",
    tags: ["domain model", "learner model", "feedback"],
  },
  {
    file: "aied-005-romero-2010.svg",
    title: "Visualization poster for Romero and Ventura 2010 Educational Data Mining review",
    desc: "A full-bleed research visualization poster with learning traces, clustering signals, and prediction patterns.",
    label: "Data mining",
    year: "2010",
    headline: "Educational Data Mining: a review of the field",
    authors: "Romero and Ventura",
    venue: "IEEE Transactions on Systems, Man, and Cybernetics, Part C",
    visual: "mining",
    tags: ["prediction", "clustering", "learning traces"],
  },
  {
    file: "aied-006-corbett-1995.svg",
    title: "Visualization poster for Corbett and Anderson 1995 knowledge tracing",
    desc: "A full-bleed research visualization poster with mastery probability curves, skill states, and practice history signals.",
    label: "Learner modeling",
    year: "1995",
    headline: "Knowledge tracing: modeling procedural knowledge acquisition",
    authors: "Corbett and Anderson",
    venue: "User Modeling and User-Adapted Interaction",
    visual: "tracing",
    tags: ["knowledge tracing", "mastery probability", "skill map"],
  },
  {
    file: "aied-007-vanlehn-2011.svg",
    title: "Visualization poster for VanLehn 2011 tutoring effectiveness review",
    desc: "A full-bleed research visualization poster comparing human tutoring, intelligent tutoring systems, and no tutoring evidence.",
    label: "Effectiveness review",
    year: "2011",
    headline: "The relative effectiveness of human tutoring and intelligent tutors",
    authors: "Kurt VanLehn",
    venue: "Educational Psychologist",
    visual: "effect",
    tags: ["human tutoring", "intelligent tutors", "learning outcomes"],
  },
  {
    file: "aied-008-anderson-1995.svg",
    title: "Visualization poster for Anderson et al. 1995 Cognitive Tutors",
    desc: "A full-bleed research visualization poster showing cognitive tutor rules, model tracing, hints, and classroom implementation.",
    label: "Cognitive tutors",
    year: "1995",
    headline: "Cognitive Tutors: lessons learned",
    authors: "Anderson, Corbett, Koedinger and Pelletier",
    venue: "Journal of the Learning Sciences",
    visual: "cognitive",
    tags: ["production rules", "model tracing", "hints"],
  },
  {
    file: "aied-009-crompton-2023.svg",
    title: "Visualization poster for Crompton and Burke 2023 AI in higher education state of the field",
    desc: "A full-bleed research visualization poster mapping higher education AI categories, publication growth, and student-facing evidence.",
    label: "State of the field",
    year: "2023",
    headline: "Artificial intelligence in higher education: the state of the field",
    authors: "Crompton and Burke",
    venue: "International Journal of Educational Technology in Higher Education",
    visual: "field",
    tags: ["assessment", "prediction", "AI assistants"],
  },
  {
    file: "aied-010-hwang-2020.svg",
    title: "Visualization poster for Hwang, Xie, Wah and Gasevic 2020 AIED vision and challenges",
    desc: "A full-bleed research visualization poster showing AIED roles, educational settings, and research issues.",
    label: "Field agenda",
    year: "2020",
    headline: "Vision, challenges, roles and research issues of AIED",
    authors: "Hwang, Xie, Wah and Gasevic",
    venue: "Computers and Education: Artificial Intelligence",
    visual: "agenda",
    tags: ["student roles", "teacher roles", "governance"],
  },
];

const colors = {
  ink: "#0f172a",
  muted: "#52657a",
  line: "#bad0df",
  panel: "#f7fbff",
  paper: "#edf8fd",
  blue: "#0f5ea8",
  cyan: "#48d5e8",
  navy: "#123047",
  sky: "#d9f4fb",
  soft: "#f3fbff",
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text: string, maxChars: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function textLines(text: string, x: number, y: number, size: number, lineHeight: number, options = "") {
  return wrapText(text, size >= 58 ? 32 : 54)
    .map((line, index) => `<tspan x="${x}" y="${y + index * lineHeight}"${options}>${escapeXml(line)}</tspan>`)
    .join("");
}

function pill(label: string, x: number, y: number, width: number) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="44" rx="22" fill="${colors.sky}" stroke="${colors.line}"/>
    <text x="${x + 22}" y="${y + 29}" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800">${escapeXml(label)}</text>
  `;
}

function node(label: string, x: number, y: number, width = 176, fill = colors.panel) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="74" rx="20" fill="${fill}" stroke="${colors.line}" stroke-width="2"/>
    <text x="${x + width / 2}" y="${y + 44}" text-anchor="middle" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="850">${escapeXml(label)}</text>
  `;
}

function line(x1: number, y1: number, x2: number, y2: number, opacity = 0.85) {
  return `<path d="M${x1} ${y1}C${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" fill="none" stroke="${colors.blue}" stroke-width="3" opacity="${opacity}" stroke-linecap="round"/>`;
}

function networkVisual() {
  const nodes = [
    [980, 355, 30],
    [1110, 290, 22],
    [1220, 385, 26],
    [1150, 520, 24],
    [995, 570, 20],
    [870, 480, 25],
    [875, 315, 18],
    [1300, 545, 17],
    [1265, 265, 16],
  ];
  return `
    <g transform="translate(0 0)">
      <rect x="790" y="205" width="640" height="500" rx="36" fill="#eaf7fc" stroke="${colors.line}" stroke-width="2"/>
      <text x="835" y="265" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">REVIEW MAP</text>
      ${nodes
        .map(([x, y]) => `<path d="M1110 430L${x} ${y}" stroke="${colors.blue}" stroke-width="2" opacity="0.28"/>`)
        .join("")}
      <circle cx="1110" cy="430" r="72" fill="${colors.navy}"/>
      <text x="1110" y="423" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900">EDUCATOR</text>
      <text x="1110" y="456" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900">GAP</text>
      ${nodes
        .map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${i % 3 === 0 ? colors.cyan : colors.panel}" stroke="${colors.blue}" stroke-width="3"/>`)
        .join("")}
      ${node("prediction", 825, 735, 185)}
      ${node("assessment", 1032, 735, 185)}
      ${node("tutoring", 1238, 735, 160)}
    </g>
  `;
}

function llmVisual() {
  return `
    <g>
      <rect x="800" y="205" width="640" height="500" rx="36" fill="#eaf8f5" stroke="${colors.line}" stroke-width="2"/>
      <text x="850" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">MODEL IN CLASSROOM</text>
      <rect x="860" y="315" width="265" height="82" rx="28" fill="${colors.panel}" stroke="${colors.line}" stroke-width="2"/>
      <text x="895" y="366" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="850">student question</text>
      <rect x="1045" y="425" width="285" height="90" rx="30" fill="${colors.navy}"/>
      <text x="1082" y="479" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900">LLM response</text>
      <rect x="885" y="555" width="265" height="82" rx="28" fill="${colors.panel}" stroke="${colors.line}" stroke-width="2"/>
      <text x="920" y="606" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="850">teacher review</text>
      ${line(1125, 397, 1135, 425)}
      ${line(1045, 515, 1016, 555)}
      <path d="M1338 288L1375 365L1338 442L1301 365Z" fill="${colors.cyan}" opacity="0.85"/>
      <text x="1338" y="373" text-anchor="middle" fill="${colors.navy}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900">AI</text>
      ${node("opportunity", 845, 735, 200)}
      ${node("safeguards", 1070, 735, 190)}
      ${node("assessment", 1285, 735, 170)}
    </g>
  `;
}

function taxonomyVisual() {
  const items = [
    ["administration", 850, 280],
    ["instruction", 1240, 280],
    ["learning", 850, 585],
    ["personalization", 1225, 585],
  ];
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#eef4ff" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">AIED TAXONOMY</text>
      <circle cx="1115" cy="455" r="86" fill="${colors.navy}"/>
      <text x="1115" y="448" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900">AI IN</text>
      <text x="1115" y="482" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900">EDUCATION</text>
      ${items.map(([label, x, y]) => line(1115, 455, Number(x) + 90, Number(y) + 37, 0.5)).join("")}
      ${items.map(([label, x, y]) => node(String(label), Number(x), Number(y), 215)).join("")}
      <path d="M890 735H1350" stroke="${colors.blue}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="890" cy="735" r="9" fill="${colors.cyan}"/><circle cx="1045" cy="735" r="9" fill="${colors.cyan}"/><circle cx="1200" cy="735" r="9" fill="${colors.cyan}"/><circle cx="1350" cy="735" r="9" fill="${colors.cyan}"/>
    </g>
  `;
}

function tutorVisual() {
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#eef9fb" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">TUTOR ARCHITECTURE</text>
      ${node("domain model", 860, 332, 220)}
      ${node("learner model", 1150, 332, 220)}
      ${node("feedback policy", 1005, 560, 250, colors.sky)}
      ${line(1080, 369, 1150, 369)}
      ${line(1260, 406, 1130, 560)}
      ${line(1005, 596, 970, 406)}
      <circle cx="1115" cy="465" r="62" fill="${colors.navy}"/>
      <text x="1115" y="474" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900">STEP</text>
      <path d="M860 745C955 695 1050 790 1140 735S1290 710 1360 760" fill="none" stroke="${colors.cyan}" stroke-width="8" stroke-linecap="round"/>
      <path d="M860 770C960 725 1050 815 1160 760S1288 740 1360 790" fill="none" stroke="${colors.blue}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
    </g>
  `;
}

function miningVisual() {
  const points = Array.from({ length: 34 }, (_, i) => {
    const x = 860 + ((i * 73) % 470);
    const y = 300 + ((i * 41) % 300);
    const r = 7 + (i % 4) * 2;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${i % 3 === 0 ? colors.cyan : colors.blue}" opacity="${i % 3 === 0 ? 0.9 : 0.55}"/>`;
  }).join("");
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#eef9f2" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">LEARNING DATA TRACES</text>
      <path d="M850 630H1360M850 630V290" stroke="${colors.navy}" stroke-width="4" stroke-linecap="round"/>
      ${points}
      <path d="M865 585C925 540 965 560 1018 500S1120 410 1185 455S1260 545 1350 365" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <rect x="875" y="710" width="120" height="26" rx="13" fill="${colors.cyan}" opacity="0.8"/>
      <rect x="1030" y="710" width="180" height="26" rx="13" fill="${colors.blue}" opacity="0.7"/>
      <rect x="1245" y="710" width="95" height="26" rx="13" fill="${colors.cyan}" opacity="0.8"/>
      <text x="875" y="780" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="850">prediction, clustering, discovery</text>
    </g>
  `;
}

function tracingVisual() {
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#f2efff" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">MASTERY OVER TIME</text>
      <path d="M850 635H1370M850 635V295" stroke="${colors.navy}" stroke-width="4" stroke-linecap="round"/>
      <path d="M870 610C930 610 950 565 1008 555C1060 546 1070 468 1125 440C1190 407 1210 350 1270 330C1315 315 1338 305 1360 290" fill="none" stroke="${colors.cyan}" stroke-width="10" stroke-linecap="round"/>
      <path d="M870 610C930 610 950 565 1008 555C1060 546 1070 468 1125 440C1190 407 1210 350 1270 330C1315 315 1338 305 1360 290" fill="none" stroke="${colors.navy}" stroke-width="3" opacity="0.75" stroke-linecap="round"/>
      ${[920, 1035, 1160, 1290].map((x, i) => `<circle cx="${x}" cy="${590 - i * 78}" r="18" fill="${colors.panel}" stroke="${colors.blue}" stroke-width="4"/>`).join("")}
      ${node("skill A", 875, 720, 140)}
      ${node("skill B", 1038, 720, 140)}
      ${node("skill C", 1202, 720, 140)}
    </g>
  `;
}

function effectVisual() {
  const rows = [
    ["human tutoring", 900, 330, 1290],
    ["intelligent tutor", 900, 465, 1260],
    ["no tutoring", 900, 600, 1060],
  ];
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#fff7f2" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">EVIDENCE COMPARISON</text>
      ${rows
        .map(
          ([label, x1, y, x2]) => `
          <text x="${x1}" y="${Number(y) - 24}" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="850">${escapeXml(String(label))}</text>
          <path d="M${x1} ${y}H${x2}" stroke="${colors.blue}" stroke-width="5" stroke-linecap="round" opacity="0.72"/>
          <circle cx="${x2}" cy="${y}" r="24" fill="${colors.cyan}" stroke="${colors.navy}" stroke-width="4"/>
        `
        )
        .join("")}
      <path d="M880 690H1360" stroke="${colors.navy}" stroke-width="3" opacity="0.35"/>
      <text x="880" y="755" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="750">interaction granularity and learning outcomes</text>
    </g>
  `;
}

function cognitiveVisual() {
  const tiles = ["IF", "THEN", "HINT", "TRACE", "RULE", "STEP"];
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#eef8fb" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">MODEL TRACING</text>
      ${tiles
        .map((label, i) => {
          const x = 850 + (i % 3) * 175;
          const y = 330 + Math.floor(i / 3) * 135;
          return `<rect x="${x}" y="${y}" width="135" height="92" rx="22" fill="${i % 2 ? colors.sky : colors.panel}" stroke="${colors.blue}" stroke-width="3"/><text x="${x + 67}" y="${y + 58}" text-anchor="middle" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900">${label}</text>`;
        })
        .join("")}
      <path d="M870 650C955 620 990 705 1070 665S1190 590 1340 655" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="870" cy="650" r="13" fill="${colors.cyan}"/><circle cx="1070" cy="665" r="13" fill="${colors.cyan}"/><circle cx="1340" cy="655" r="13" fill="${colors.cyan}"/>
      <text x="850" y="760" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="750">production rules, hints, classroom iteration</text>
    </g>
  `;
}

function fieldVisual() {
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#f1f8ef" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">HIGHER EDUCATION AI</text>
      ${["assessment", "prediction", "AI assistant", "tutoring", "learning management"]
        .map((label, i) => {
          const x = 855 + i * 95;
          const h = 90 + i * 28 + (i === 2 ? 55 : 0);
          return `<rect x="${x}" y="${620 - h}" width="64" height="${h}" rx="18" fill="${i % 2 ? colors.blue : colors.cyan}" opacity="${i % 2 ? 0.7 : 0.9}"/><text x="${x + 32}" y="662" text-anchor="middle" fill="${colors.ink}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="850">${escapeXml(label)}</text>`;
        })
        .join("")}
      <path d="M850 705C930 690 960 720 1035 675S1180 625 1240 650S1320 725 1370 600" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <text x="850" y="765" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="750">field growth, categories, student-facing evidence</text>
    </g>
  `;
}

function agendaVisual() {
  return `
    <g>
      <rect x="790" y="205" width="650" height="500" rx="36" fill="#ecf9fb" stroke="${colors.line}" stroke-width="2"/>
      <text x="840" y="263" fill="${colors.blue}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="3">AIED ROLES</text>
      <path d="M1115 320L1360 625H870Z" fill="${colors.sky}" stroke="${colors.blue}" stroke-width="4"/>
      <circle cx="1115" cy="320" r="54" fill="${colors.navy}"/>
      <circle cx="870" cy="625" r="54" fill="${colors.navy}"/>
      <circle cx="1360" cy="625" r="54" fill="${colors.navy}"/>
      <text x="1115" y="328" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900">STUDENT</text>
      <text x="870" y="633" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900">TEACHER</text>
      <text x="1360" y="633" text-anchor="middle" fill="${colors.sky}" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900">SYSTEM</text>
      <circle cx="1115" cy="520" r="72" fill="${colors.cyan}" opacity="0.95"/>
      <text x="1115" y="515" text-anchor="middle" fill="${colors.navy}" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="900">LEARNING</text>
      <text x="1115" y="548" text-anchor="middle" fill="${colors.navy}" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="900">NEEDS</text>
      ${node("ethics", 850, 735, 140)}
      ${node("feedback", 1018, 735, 160)}
      ${node("assessment", 1210, 735, 175)}
    </g>
  `;
}

function figureText(text: string, x: number, y: number, size = 20, weight = 760, fill = colors.ink, anchor = "start") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}">${escapeXml(text)}</text>`;
}

function finePanel(x: number, y: number, width: number, height: number, fill = "rgba(255,255,255,0.72)", opacity = 1, role?: string) {
  const roleAttribute = role ? ` data-role="${role}"` : "";

  return `
    <rect${roleAttribute} x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${fill}" opacity="${opacity}" filter="url(#paperShadow)"/>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="none" stroke="${colors.line}" stroke-width="1.5" opacity="0.86"/>
  `;
}

function fineGrid(x: number, y: number, width: number, height: number, step = 48) {
  const vertical = Array.from({ length: Math.floor(width / step) + 1 }, (_, index) => {
    const px = x + index * step;
    return `<path d="M${px} ${y}V${y + height}" stroke="${colors.line}" stroke-width="1" opacity="0.24"/>`;
  }).join("");
  const horizontal = Array.from({ length: Math.floor(height / step) + 1 }, (_, index) => {
    const py = y + index * step;
    return `<path d="M${x} ${py}H${x + width}" stroke="${colors.line}" stroke-width="1" opacity="0.24"/>`;
  }).join("");

  return `<g data-role="grid">${vertical}${horizontal}</g>`;
}

function topicChip(label: string, x: number, y: number, width: number, accent = colors.blue) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="44" rx="15" fill="#ffffff" stroke="${colors.line}" stroke-width="1.5"/>
    <circle cx="${x + 22}" cy="${y + 22}" r="6" fill="${colors.cyan}" opacity="0.9"/>
    ${figureText(label, x + 40, y + 29, 15, 820, colors.ink)}
  `;
}

function scienceFigure(kind: VisualKind, main: string, tint = "#eef8fb") {
  return `
    <g class="science-editorial-figure" data-style="editorial-science" data-kind="${kind}">
      <rect x="116" y="92" width="1368" height="820" rx="44" fill="${tint}" stroke="${colors.line}" stroke-width="2"/>
      <path d="M152 144H1448M152 736H1448" stroke="#ffffff" stroke-width="1.5" opacity="0.68"/>
      ${finePanel(150, 126, 1300, 720, "rgba(255,255,255,0.52)", 1, "figure-panel")}
      ${fineGrid(176, 152, 1248, 668, 52)}
      <g data-role="primary-visual" transform="translate(-240 -340) scale(1.6)">${main}</g>
    </g>
  `;
}

function editorialNetworkVisual() {
  const nodes = [
    [404, 356, 30, "assessment"],
    [505, 304, 20, "prediction"],
    [602, 383, 16, "tutoring"],
    [671, 480, 24, "adaptive"],
    [530, 564, 18, "ethics"],
    [348, 520, 14, "feedback"],
    [739, 318, 13, "admin"],
    [816, 558, 16, "analytics"],
    [275, 412, 16, "student"],
  ];
  const links = [
    [404, 356, 602, 383],
    [404, 356, 530, 564],
    [505, 304, 671, 480],
    [602, 383, 739, 318],
    [671, 480, 816, 558],
    [348, 520, 530, 564],
    [275, 412, 404, 356],
    [505, 304, 348, 520],
    [739, 318, 816, 558],
  ];
  return scienceFigure(
    "network",
    `
      <ellipse cx="548" cy="434" rx="286" ry="178" fill="${colors.cyan}" opacity="0.09"/>
      <ellipse cx="610" cy="430" rx="218" ry="132" fill="${colors.blue}" opacity="0.07"/>
      ${links.map(([x1, y1, x2, y2]) => `<path d="M${x1} ${y1}C${(x1 + x2) / 2} ${y1 - 30}, ${(x1 + x2) / 2} ${y2 + 30}, ${x2} ${y2}" fill="none" stroke="${colors.blue}" stroke-width="2" opacity="0.28"/>`).join("")}
      ${nodes.map(([x, y, r], index) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${index % 3 === 0 ? colors.cyan : "#ffffff"}" stroke="${colors.blue}" stroke-width="${index % 3 === 0 ? 3 : 2}" opacity="0.96"/>`).join("")}
      <circle cx="568" cy="442" r="68" fill="${colors.navy}" opacity="0.96"/>
      ${figureText("pedagogy", 568, 434, 21, 900, colors.sky, "middle")}
      ${figureText("lens", 568, 462, 21, 900, colors.sky, "middle")}
      ${nodes
        .map(([x, y, , label]) => {
          const labelText = String(label);
          const labelPositions: Record<string, { x: number; y: number; anchor?: string }> = {
            prediction: { x: 872, y: 410 },
            tutoring: { x: Number(x) + 28, y: Number(y) - 33 },
          };
          const labelPosition = labelPositions[labelText];

          if (labelPosition) {
            return figureText(labelText, labelPosition.x, labelPosition.y, 13, 780, colors.muted, labelPosition.anchor ?? "start");
          }

          return figureText(labelText, Number(x), Number(y) + 48, 13, 780, colors.muted, "middle");
        })
        .join("")}
      ${topicChip("prediction", 236, 650, 160)}
      ${topicChip("assessment", 426, 650, 170)}
      ${topicChip("tutoring", 626, 650, 140)}
    `,
    "#eaf7fc"
  );
}

function editorialLlmVisual() {
  return scienceFigure(
    "llm",
    `
      <rect x="268" y="304" width="210" height="64" rx="18" fill="#ffffff" stroke="${colors.line}" stroke-width="2"/>
      ${figureText("student prompt", 373, 344, 19, 850, colors.ink, "middle")}
      <rect x="534" y="284" width="238" height="126" rx="32" fill="${colors.navy}"/>
      ${figureText("LLM", 653, 344, 33, 950, colors.sky, "middle")}
      ${figureText("response layer", 653, 377, 17, 750, colors.sky, "middle")}
      <rect x="274" y="496" width="234" height="70" rx="20" fill="#ffffff" stroke="${colors.line}" stroke-width="2"/>
      ${figureText("teacher review", 391, 540, 19, 850, colors.ink, "middle")}
      <path d="M478 336H534" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M653 410C653 474 548 531 508 531" fill="none" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M392 496C420 456 462 430 534 386" fill="none" stroke="${colors.cyan}" stroke-width="5" opacity="0.72" stroke-linecap="round"/>
      <g transform="translate(812 300)">
        <path d="M78 0L132 96L78 192L24 96Z" fill="${colors.cyan}" opacity="0.88"/>
        ${figureText("AI", 78, 106, 26, 950, colors.navy, "middle")}
      </g>
      ${topicChip("opportunity", 274, 646, 170)}
      ${topicChip("safeguards", 474, 646, 170)}
      ${topicChip("assessment", 674, 646, 170)}
    `,
    "#eaf8f5"
  );
}

function editorialTaxonomyVisual() {
  const cells = [
    ["administration", 260, 304],
    ["instruction", 614, 304],
    ["learning", 260, 506],
    ["personalization", 614, 506],
  ];
  return scienceFigure(
    "taxonomy",
    `
      <path d="M586 284V650M242 466H908" stroke="${colors.line}" stroke-width="2.5"/>
      <rect x="242" y="284" width="666" height="366" rx="28" fill="#ffffff" opacity="0.42" stroke="${colors.line}" stroke-width="1.5"/>
      ${cells
        .map(
          ([label, x, y], index) => `
            <rect x="${x}" y="${y}" width="242" height="104" rx="24" fill="${index % 2 ? colors.sky : "#ffffff"}" stroke="${colors.line}" stroke-width="2"/>
            ${figureText(String(label), Number(x) + 121, Number(y) + 58, 20, 880, colors.ink, "middle")}
            <path d="M${Number(x) + 28} ${Number(y) + 78}H${Number(x) + 214}" stroke="${index % 2 ? colors.blue : colors.cyan}" stroke-width="4" stroke-linecap="round" opacity="0.66"/>
          `
        )
        .join("")}
      <circle cx="586" cy="466" r="76" fill="${colors.navy}" opacity="0.96"/>
      ${figureText("AIED", 586, 457, 28, 950, colors.sky, "middle")}
      ${figureText("function", 586, 490, 18, 820, colors.sky, "middle")}
      <path d="M510 466H362M662 466H736M586 390V356M586 542V558" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
    `,
    "#eef4ff"
  );
}

function editorialTutorVisual() {
  return scienceFigure(
    "tutor",
    `
      <rect x="268" y="296" width="210" height="84" rx="24" fill="#ffffff" stroke="${colors.line}" stroke-width="2"/>
      ${figureText("domain model", 373, 346, 19, 850, colors.ink, "middle")}
      <rect x="684" y="296" width="210" height="84" rx="24" fill="#ffffff" stroke="${colors.line}" stroke-width="2"/>
      ${figureText("learner model", 789, 346, 19, 850, colors.ink, "middle")}
      <rect x="458" y="518" width="244" height="92" rx="28" fill="${colors.sky}" stroke="${colors.line}" stroke-width="2"/>
      ${figureText("feedback policy", 580, 573, 20, 900, colors.ink, "middle")}
      <circle cx="580" cy="438" r="66" fill="${colors.navy}"/>
      ${figureText("next", 580, 430, 22, 920, colors.sky, "middle")}
      ${figureText("step", 580, 460, 22, 920, colors.sky, "middle")}
      <path d="M478 338C525 338 540 372 552 384" fill="none" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M684 338C638 338 622 372 608 384" fill="none" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M580 504V518" stroke="${colors.blue}" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M318 654C414 610 474 703 574 651S762 603 882 676" fill="none" stroke="${colors.cyan}" stroke-width="8" stroke-linecap="round" opacity="0.72"/>
      <path d="M318 678C426 634 478 724 588 678S766 632 882 704" fill="none" stroke="${colors.blue}" stroke-width="3" stroke-linecap="round" opacity="0.62"/>
    `,
    "#eef9fb"
  );
}

function editorialMiningVisual() {
  const points = Array.from({ length: 42 }, (_, index) => {
    const x = 278 + ((index * 83) % 590);
    const y = 314 + ((index * 47) % 292);
    const cluster = index % 3;
    return `<circle cx="${x}" cy="${y}" r="${cluster === 0 ? 8 : 6}" fill="${cluster === 0 ? colors.cyan : cluster === 1 ? colors.blue : colors.navy}" opacity="${cluster === 2 ? 0.42 : 0.66}"/>`;
  }).join("");
  return scienceFigure(
    "mining",
    `
      <path d="M266 632H896M266 632V292" stroke="${colors.navy}" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="462" cy="438" rx="152" ry="88" fill="${colors.cyan}" opacity="0.1" stroke="${colors.cyan}" stroke-width="2"/>
      <ellipse cx="704" cy="478" rx="142" ry="100" fill="${colors.blue}" opacity="0.08" stroke="${colors.blue}" stroke-width="2"/>
      ${points}
      <path d="M282 600C374 548 428 566 510 500S626 414 716 456S806 542 882 348" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <path d="M282 600C374 548 428 566 510 500S626 414 716 456S806 542 882 348" fill="none" stroke="${colors.cyan}" stroke-width="12" opacity="0.18" stroke-linecap="round"/>
      ${topicChip("prediction", 294, 660, 160)}
      ${topicChip("clustering", 484, 660, 160)}
      ${topicChip("discovery", 674, 660, 150)}
    `,
    "#eef9f2"
  );
}

function editorialTracingVisual() {
  return scienceFigure(
    "tracing",
    `
      <path d="M280 640H892M280 640V300" stroke="${colors.navy}" stroke-width="3" stroke-linecap="round"/>
      <path d="M302 602C372 596 410 562 472 542C546 518 560 466 632 430C704 394 732 344 800 322C836 310 866 300 884 286" fill="none" stroke="${colors.cyan}" stroke-width="28" opacity="0.24" stroke-linecap="round"/>
      <path d="M302 602C372 596 410 562 472 542C546 518 560 466 632 430C704 394 732 344 800 322C836 310 866 300 884 286" fill="none" stroke="${colors.blue}" stroke-width="5" stroke-linecap="round"/>
      ${[330, 468, 612, 744, 840].map((x, index) => `<circle cx="${x}" cy="${600 - index * 70}" r="17" fill="#ffffff" stroke="${colors.blue}" stroke-width="3"/>`).join("")}
      ${topicChip("skill A", 314, 668, 128)}
      ${topicChip("skill B", 470, 668, 128)}
      ${topicChip("skill C", 626, 668, 128)}
      <text x="292" y="330" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="800">posterior estimate</text>
    `,
    "#f2efff"
  );
}

function editorialEffectVisual() {
  const rows = [
    ["human tutoring", 370, 380, 792],
    ["intelligent tutor", 370, 488, 736],
    ["no tutoring", 370, 596, 562],
  ];
  return scienceFigure(
    "effect",
    `
      <path d="M360 650H888M560 300V650M720 300V650" stroke="${colors.line}" stroke-width="1.5" opacity="0.72"/>
      ${rows
        .map(
          ([label, x1, y, x2]) => `
            ${figureText(String(label), 268, Number(y) + 8, 19, 850, colors.ink)}
            <path d="M${x1} ${y}H${x2}" stroke="${colors.blue}" stroke-width="4" stroke-linecap="round" opacity="0.72"/>
            <rect x="${Number(x2) - 21}" y="${Number(y) - 21}" width="42" height="42" rx="13" fill="${colors.cyan}" stroke="${colors.navy}" stroke-width="3"/>
          `
        )
        .join("")}
      <path d="M360 694H888" stroke="${colors.navy}" stroke-width="2" opacity="0.36"/>
      ${figureText("lower support", 360, 724, 15, 760, colors.muted)}
      ${figureText("higher support", 790, 724, 15, 760, colors.muted, "end")}
    `,
    "#fff7f2"
  );
}

function editorialCognitiveVisual() {
  const tiles = ["IF", "THEN", "HINT", "TRACE", "RULE", "STEP"];
  return scienceFigure(
    "cognitive",
    `
      ${tiles
        .map((label, index) => {
          const x = 270 + (index % 3) * 196;
          const y = 318 + Math.floor(index / 3) * 132;
          return `
            <rect x="${x}" y="${y}" width="150" height="88" rx="22" fill="${index % 2 ? colors.sky : "#ffffff"}" stroke="${colors.blue}" stroke-width="2.5"/>
            ${figureText(label, x + 75, y + 56, 30, 950, colors.ink, "middle")}
          `;
        })
        .join("")}
      <path d="M420 362H466M616 362H662M345 406V450M541 406V450M737 406V450" stroke="${colors.blue}" stroke-width="2.5" marker-end="url(#arrow)" opacity="0.76"/>
      <path d="M292 642C406 598 452 686 564 642S742 576 882 658" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="292" cy="642" r="13" fill="${colors.cyan}"/><circle cx="564" cy="642" r="13" fill="${colors.cyan}"/><circle cx="882" cy="658" r="13" fill="${colors.cyan}"/>
    `,
    "#eef8fb"
  );
}

function editorialFieldVisual() {
  const categories = ["assess", "predict", "assist", "tutor", "manage"];
  return scienceFigure(
    "field",
    `
      <path d="M280 644H910M280 644V302" stroke="${colors.navy}" stroke-width="3" stroke-linecap="round"/>
      ${categories
        .map((label, index) => {
          const x = 330 + index * 108;
          const heights = [132, 180, 256, 152, 214];
          return `
            <rect x="${x}" y="${644 - heights[index]}" width="60" height="${heights[index]}" rx="16" fill="${index % 2 ? colors.blue : colors.cyan}" opacity="${index % 2 ? 0.7 : 0.88}"/>
            ${figureText(label, x + 30, 678, 14, 820, colors.muted, "middle")}
          `;
        })
        .join("")}
      <path d="M304 546C384 520 438 568 522 512S650 434 726 466S826 586 892 414" fill="none" stroke="${colors.navy}" stroke-width="5" stroke-linecap="round"/>
      <path d="M304 546C384 520 438 568 522 512S650 434 726 466S826 586 892 414" fill="none" stroke="${colors.cyan}" stroke-width="15" opacity="0.16" stroke-linecap="round"/>
    `,
    "#f1f8ef"
  );
}

function editorialAgendaVisual() {
  return scienceFigure(
    "agenda",
    `
      <path d="M586 294L878 626H294Z" fill="${colors.sky}" opacity="0.64" stroke="${colors.blue}" stroke-width="3"/>
      ${[
        ["student", 586, 294],
        ["teacher", 294, 626],
        ["system", 878, 626],
      ]
        .map(
          ([label, x, y]) => `
            <circle cx="${x}" cy="${y}" r="58" fill="${colors.navy}"/>
            ${figureText(String(label), Number(x), Number(y) + 8, 20, 920, colors.sky, "middle")}
          `
        )
        .join("")}
      <circle cx="586" cy="492" r="78" fill="${colors.cyan}" opacity="0.95"/>
      ${figureText("learning", 586, 486, 22, 950, colors.navy, "middle")}
      ${figureText("needs", 586, 516, 22, 950, colors.navy, "middle")}
      ${topicChip("ethics", 314, 690, 126)}
      ${topicChip("feedback", 478, 690, 148)}
      ${topicChip("assessment", 666, 690, 166)}
    `,
    "#ecf9fb"
  );
}

function editorialVisual(kind: VisualKind) {
  switch (kind) {
    case "network":
      return editorialNetworkVisual();
    case "llm":
      return editorialLlmVisual();
    case "taxonomy":
      return editorialTaxonomyVisual();
    case "tutor":
      return editorialTutorVisual();
    case "mining":
      return editorialMiningVisual();
    case "tracing":
      return editorialTracingVisual();
    case "effect":
      return editorialEffectVisual();
    case "cognitive":
      return editorialCognitiveVisual();
    case "field":
      return editorialFieldVisual();
    case "agenda":
      return editorialAgendaVisual();
  }
}

function visual(kind: VisualKind) {
  return editorialVisual(kind);
}

function renderCover(spec: CoverSpec) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">Research visualization cover</title>
  <desc id="desc">Visualization-only research cover with diagram nodes and explanatory labels.</desc>
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${colors.soft}"/>
      <stop offset="0.52" stop-color="${colors.paper}"/>
      <stop offset="1" stop-color="#dceff7"/>
    </linearGradient>
    <radialGradient id="wash" cx="72%" cy="35%" r="62%">
      <stop offset="0" stop-color="${colors.cyan}" stop-opacity="0.28"/>
      <stop offset="0.45" stop-color="${colors.sky}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${colors.soft}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="${colors.line}" stroke-width="1" opacity="0.32"/>
    </pattern>
    <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#123047" flood-opacity="0.08"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10Z" fill="${colors.blue}"/>
    </marker>
  </defs>
  <rect width="1600" height="1000" fill="url(#paper)"/>
  <rect width="1600" height="1000" fill="url(#wash)"/>
  <rect width="1600" height="1000" fill="url(#grid)" opacity="0.52"/>
  <rect x="54" y="54" width="1492" height="892" rx="42" fill="none" stroke="${colors.line}" stroke-width="2"/>
  <!-- research-visualization-poster -->
  <g id="research-visualization-poster" transform="translate(170 44) scale(0.87)">
    ${visual(spec.visual)}
  </g>
</svg>
`;
}

mkdirSync(outputDir, { recursive: true });

for (const cover of covers) {
  writeFileSync(join(outputDir, cover.file), renderCover(cover));
}

console.log(`Generated ${covers.length} research cover posters.`);
