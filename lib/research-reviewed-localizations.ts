import type { Locale } from "@/lib/i18n";
import type { ResearchPaperLocalization } from "@/lib/types";

/**
 * Human-reviewed, per-article translations of the curated Research News corpus,
 * keyed by paper `id` then locale. A locale is only listed for an article once a
 * genuine translation exists; missing locales fall back to the English source in
 * `localizedPaper()` so the reader never sees broken or machine-filler content.
 *
 * New translations are produced by `scripts/translate-reviewed-papers.ts`
 * (which uses the AI localization stage in `lib/research-pipeline/generation.ts`)
 * and then reviewed before being pasted here.
 */
export const reviewedResearchPaperLocalizations: Record<string, Partial<Record<Locale, ResearchPaperLocalization>>> = {
  "aied-025": {
    "zh-hant": {
      title: "新聞：OpenAI 與 Anthropic 推出支援主動學習與反思式 AI 使用的工具",
      tags: ["新聞", "ChatGPT 互動學習", "Claude 反思"],
      imageAlt: "ChatGPT 互動學習與 Claude 反思式 AI 使用的專題封面",
      shortSummary:
        "新聞：OpenAI 為數學與科學概念推出的互動視覺解說，以及 Anthropic 為 Claude 加入的反思儀表板，共同指向一種能支援實驗探索、後設認知，並對「將工作交給 AI」設下審慎界線的 AI 產品方向。",
      fullSummary: [
        "這則產品新聞彙整對 AIEDHK 具參考價值，因為 OpenAI 與 Anthropic 正在加入的功能，分別回應了以 AI 學習的兩個不同面向：理解艱深概念，以及反思自己應將多少工作交由 AI 代勞。OpenAI 於 2026 年 3 月的更新，為 ChatGPT 中逾 70 個核心數學與科學概念加入互動式視覺解說。Anthropic 於 2026 年 7 月的測試版，則為 Claude 加入反思儀表板，摘要使用模式、提示使用者檢視 AI 在其生活中所扮演的角色，並提供「安靜時段」與休息提醒等工具。兩者合觀，顯示產品正從單純生成答案，走向主動探索與後設認知的自我監督。",
        "OpenAI 的功能把選定的公式與關係轉化為可操作的視覺模組。學習者可以調整變數、更改公式，並即時看到圖像或結果如何隨之變化。首批清單最適合高中與大學學習者，涵蓋代數、幾何、力學、電學、熱力學與統計等主題。OpenAI 表示，此體驗正向所有方案的登入使用者全球推出。這項設計建基於「學習模式」與測驗，但加入了具體的表徵層：學生可以實際檢驗一個關係，而不只是閱讀對它的解釋。",
        "當互動與「預測」和「解釋」相扣時，教育潛力最為突出。移動變數能令抽象關係變得可見，但單靠視覺動態並不保證概念理解。教師可以要求學生在改變控制項之前先預測會發生什麼、解釋圖像為何改變、將結果與符號推導相比較，再把原理遷移到新問題。OpenAI 亦承認，關於 AI 與學習的研究仍在發展之中。因此，這項產品公告是一種設計訊號，而非證明這些模組能在不同學科與學習者群體中促進持久學習的證據。",
        "Anthropic 的反思功能回應的是另一個問題：使用者可能在使用 AI 時變得高效，卻沒有察覺自己反覆把哪些工作交了出去、又有哪些仍想親自完成。在啟用記憶功能後，Claude 可摘要過去一、三、六或十二個月的主題、使用模式與任務類型，並不時提出問題，例如：即使 Claude 能更快完成，有哪些活動是你仍想親自持續去做的。此儀表板亦以 Anthropic 的「4D AI 素養」模型來組織建議：委派、描述、辨識與審慎。使用者可設定安靜時段，或安排提醒自己休息的提示。",
        "Anthropic 表示，這項反思功能不會使用無痕對話、來自連接工具的底層檔案，或與健康整合相關的對話，並且由此得出的洞見不會用於其他用途。即便如此，院校仍應審視有哪些對話中繼資料可被取用、記憶設定如何影響此功能，以及學生是否明白該儀表板是供應商生成的詮釋，而非客觀的學習紀錄。反思提示可以支持學習者的自主性，但不應淪為監控，或取代由教師引導的自我評估。",
        "對香港教育工作者而言，綜合的啟示是：要為主動認知與反思界線而設計。互動模組應要求預測、推理與遷移；使用反思則應協助學習者判斷哪些工作可以委派、哪些需要查證、哪些應獨立練習。兩項產品都仍屬供應商的早期版本，因此學校應以明確的學習目標、無障礙檢查、私隱審查，以及對理解程度的獨立量度來進行試點。真正重要的新聞，並非 AI 介面增添了更多功能，而是主流產品開始把「學習活動」與「人類監督」變成介面中可見的一部分。",
      ].join("\n\n"),
      keyTakeaways: [
        "新聞：ChatGPT 現為逾 70 個數學與科學概念提供互動視覺解說，讓學習者操作變數並觀察關係的變化。",
        "Claude 的反思測試版會摘要 AI 使用模式、套用「4D AI 素養」框架，並加入由使用者控制的安靜時段與休息提醒。",
        "教育工作者應把互動工具與預測、遷移任務相配合，並善用反思功能強化自主性，同時避免把供應商的分析變成監控或學習證據。",
      ],
      whyItMatters:
        "產業新聞訊號：OpenAI 與 Anthropic 把「實驗探索」與「反思」化為可見的產品功能，為 AIEDHK 提供了一個及時的案例，用以圍繞主動推理、後設認知、私隱與人類自主性來設計 AI 的使用方式。",
    },
    "zh-hans": {
      title: "新闻：OpenAI 与 Anthropic 推出支持主动学习与反思式 AI 使用的工具",
      tags: ["新闻", "ChatGPT 互动学习", "Claude 反思"],
      imageAlt: "ChatGPT 互动学习与 Claude 反思式 AI 使用的专题封面",
      shortSummary:
        "新闻：OpenAI 为数学与科学概念推出的互动视觉讲解，以及 Anthropic 为 Claude 加入的反思仪表板，共同指向一种能支持实验探索、元认知，并对“将工作交给 AI”设下审慎界线的 AI 产品方向。",
      fullSummary: [
        "这则产品新闻汇整对 AIEDHK 具参考价值，因为 OpenAI 与 Anthropic 正在加入的功能，分别回应了以 AI 学习的两个不同面向：理解艰深概念，以及反思自己应将多少工作交由 AI 代劳。OpenAI 于 2026 年 3 月的更新，为 ChatGPT 中逾 70 个核心数学与科学概念加入互动式视觉讲解。Anthropic 于 2026 年 7 月的测试版，则为 Claude 加入反思仪表板，汇总使用模式、提示用户检视 AI 在其生活中所扮演的角色，并提供“安静时段”与休息提醒等工具。两者合观，显示产品正从单纯生成答案，走向主动探索与元认知的自我监督。",
        "OpenAI 的功能把选定的公式与关系转化为可操作的视觉模块。学习者可以调整变量、更改公式，并即时看到图像或结果如何随之变化。首批清单最适合高中与大学学习者，涵盖代数、几何、力学、电学、热力学与统计等主题。OpenAI 表示，此体验正向所有方案的登录用户全球推出。这项设计建基于“学习模式”与测验，但加入了具体的表征层：学生可以实际检验一个关系，而不只是阅读对它的解释。",
        "当互动与“预测”和“解释”相扣时，教育潜力最为突出。移动变量能令抽象关系变得可见，但单靠视觉动态并不保证概念理解。教师可以要求学生在改变控制项之前先预测会发生什么、解释图像为何改变、将结果与符号推导相比较，再把原理迁移到新问题。OpenAI 也承认，关于 AI 与学习的研究仍在发展之中。因此，这项产品公告是一种设计信号，而非证明这些模块能在不同学科与学习者群体中促进持久学习的证据。",
        "Anthropic 的反思功能回应的是另一个问题：用户可能在使用 AI 时变得高效，却没有察觉自己反复把哪些工作交了出去、又有哪些仍想亲自完成。在启用记忆功能后，Claude 可汇总过去一、三、六或十二个月的主题、使用模式与任务类型，并不时提出问题，例如：即使 Claude 能更快完成，有哪些活动是你仍想亲自持续去做的。此仪表板也以 Anthropic 的“4D AI 素养”模型来组织建议：委派、描述、辨识与审慎。用户可设定安静时段，或安排提醒自己休息的提示。",
        "Anthropic 表示，这项反思功能不会使用无痕对话、来自连接工具的底层文件，或与健康集成相关的对话，并且由此得出的洞见不会用于其他用途。即便如此，院校仍应审视有哪些对话元数据可被取用、记忆设定如何影响此功能，以及学生是否明白该仪表板是供应商生成的诠释，而非客观的学习记录。反思提示可以支持学习者的自主性，但不应沦为监控，或取代由教师引导的自我评估。",
        "对香港教育工作者而言，综合的启示是：要为主动认知与反思界线而设计。互动模块应要求预测、推理与迁移；使用反思则应协助学习者判断哪些工作可以委派、哪些需要查证、哪些应独立练习。两项产品都仍属供应商的早期版本，因此学校应以明确的学习目标、无障碍检查、隐私审查，以及对理解程度的独立量度来进行试点。真正重要的新闻，并非 AI 界面增添了更多功能，而是主流产品开始把“学习活动”与“人类监督”变成界面中可见的一部分。",
      ].join("\n\n"),
      keyTakeaways: [
        "新闻：ChatGPT 现为逾 70 个数学与科学概念提供互动视觉讲解，让学习者操作变量并观察关系的变化。",
        "Claude 的反思测试版会汇总 AI 使用模式、套用“4D AI 素养”框架，并加入由用户控制的安静时段与休息提醒。",
        "教育工作者应把互动工具与预测、迁移任务相配合，并善用反思功能强化自主性，同时避免把供应商的分析变成监控或学习证据。",
      ],
      whyItMatters:
        "产业新闻信号：OpenAI 与 Anthropic 把“实验探索”与“反思”化为可见的产品功能，为 AIEDHK 提供了一个及时的案例，用以围绕主动推理、元认知、隐私与人类自主性来设计 AI 的使用方式。",
    },
  },
};

export function getReviewedLocalization(paperId: string, locale: Locale): ResearchPaperLocalization | undefined {
  return reviewedResearchPaperLocalizations[paperId]?.[locale];
}

/** Locales (excluding English) that have at least one reviewed translation for the given article. */
export function localizedLocalesForPaper(paperId: string): Locale[] {
  return Object.keys(reviewedResearchPaperLocalizations[paperId] ?? {}) as Locale[];
}
