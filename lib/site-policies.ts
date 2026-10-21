import type { Locale } from "@/lib/i18n";

export type PolicyKind = "privacy" | "disclosure";
interface PolicySection { title: string; paragraphs: string[] }
interface PolicyDocument { intro: string; sections: PolicySection[]; aboutLabel: string; providerLabel: string }
export const POLICY_UPDATED = "2026-10-21";

const documents: Record<"en" | "zh-hant" | "zh-hans", Record<PolicyKind, PolicyDocument>> = {
  en: {
    privacy: {
      intro: "This policy explains how AIEDHK handles information when you read our content, subscribe to updates, or use an optional support, advertising or partner link. It describes optional services only when they are enabled on the site.",
      sections: [
        { title: "Site operation and analytics", paragraphs: ["Our hosting service processes technical request information, such as IP addresses and browser details, to deliver and secure the website. We use Vercel Web Analytics to understand aggregate page views, referral sources, device types and approximate countries. Its visitor measurement does not use analytics cookies and does not identify the same visitor across different days.", "If click measurement is enabled, support and partner-link events contain the page context, language and placement. A click is not recorded as a payment. We do not include email addresses, payment details or support messages in these events."] },
        { title: "Email subscriptions", paragraphs: ["If you subscribe, we store your email address, selected language, subscription status, source page, consent-version record and an unsubscribe token in our subscription database. These records support the requested updates, delivered through our configured email service. Unsubscribing stops future subscription mail; it does not automatically erase the existing database record.", "Records are retained while needed to operate the subscription, maintain security and handle requests. To request access, correction or deletion, contact the site operator through the links on our About page."] },
        { title: "Reader support and purchases", paragraphs: ["An optional support button takes you to Buy Me a Coffee. That service and its payment provider handle checkout and may share payment status and the supporter information you choose to provide with the creator. AIEDHK does not collect card numbers through its own website.", "Partner links take you to an external provider, such as Gamma, and may include a referral identifier. The provider and its affiliate platform may use their own cookies or similar methods to attribute eligible purchases. Their policies and terms apply after you leave AIEDHK."] },
        { title: "Advertising and choices", paragraphs: ["When enabled, Google AdSense supplies a labelled home-page advertisement. Google and its advertising partners may process IP addresses, browser information, cookies and similar identifiers to deliver, measure and protect advertising. Google advertising cookies may also use visits to this or other sites where the applicable settings and consent permit it.", "Our initial ad integration requests non-personalized ads and waits for Google's consent-management signals before requesting an ad. Non-personalized ads can still use cookies; they are not a substitute for consent. Where applicable, Google's Privacy & messaging interface provides consent and US state opt-out choices. You can revisit the home page using Privacy choices in the footer; Google's applicable controls appear there. Reading remains available if you decline or advertising is blocked. Google also provides ad controls at My Ad Center."] },
        { title: "External providers and policy changes", paragraphs: ["Hosting, email, support, advertising and affiliate providers may process information outside your country, under their own policies and applicable safeguards. Follow the provider links below for details. This page will be updated when our actual data practices change; the date above identifies this version."] },
      ], aboutLabel: "Site operator and contact links", providerLabel: "Provider information and privacy choices",
    },
    disclosure: {
      intro: "AIEDHK publishes freely accessible AI-in-education explainers and learning resources. Optional reader support, clearly labelled advertisements and disclosed partner links can help fund this work.",
      sections: [
        { title: "Voluntary reader support", paragraphs: ["When a Buy Me a Coffee link is available, support is voluntary and processed by the external platform. It does not purchase editorial influence or additional access to the article. The checkout page shows the amount, currency and payment terms. We do not describe support as a tax-deductible charitable donation."] },
        { title: "Display advertisements", paragraphs: ["An advertisement is labelled and separate from our research explanations. Ad selection is handled by the advertising provider and is not an endorsement by AIEDHK. Readers do not need to view or click advertisements to access content. Support invitations refer to the support service, not to clicking advertisements."] },
        { title: "Affiliate recommendations", paragraphs: ["A partner recommendation may earn AIEDHK a commission when a reader follows its link and completes a transaction that qualifies under the partner's terms. The disclosure appears beside the recommendation. A click or a free registration is not necessarily a payable referral.", "Recommendations are selected for a specific educational use and include limitations. Commercial links are separate from original research and news-source links. Partnership approval does not establish educational effectiveness, and generated teaching materials still require an educator's review."] },
        { title: "Editorial independence", paragraphs: ["Payments do not buy favourable research conclusions. We retain responsibility for selecting, explaining and correcting our content. A tool's inclusion does not mean it is suitable for every learner, school, jurisdiction or use of personal data. Check the provider's current functionality, prices, terms and privacy practices before purchasing."] },
      ], aboutLabel: "About AIEDHK", providerLabel: "Related policies",
    },
  },
  "zh-hans": {
    privacy: {
      intro: "本政策说明 AIEDHK 如何处理你在阅读内容、订阅更新，以及使用可选支持、广告或合作链接时涉及的信息。可选服务的说明仅在网站启用相应服务时适用。",
      sections: [
        { title: "网站运行与访问分析", paragraphs: ["托管服务会处理 IP 地址、浏览器信息等技术请求数据，用于提供网站和维护安全。我们使用 Vercel Web Analytics 了解汇总浏览量、来源、设备类别和大致国家或地区。其访客统计不使用分析 Cookie，也不跨不同日期识别同一访客。", "若启用点击统计，支持和合作链接事件仅包含页面上下文、语言和入口位置。点击不会被记录为付款；这些事件不包含邮箱、支付资料或支持留言。"] },
        { title: "邮件订阅", paragraphs: ["订阅时，我们在订阅数据库保存邮箱、所选语言、订阅状态、来源页面、同意版本记录和退订令牌，用于通过已配置的邮件服务发送所请求的更新。退订会停止后续订阅邮件，但不会自动删除既有数据库记录。", "我们在运营订阅、维护安全和处理请求所需的期间保留记录。如需访问、更正或删除资料，请通过关于我们页面中的链接联系网站运营者。"] },
        { title: "读者支持与购买", paragraphs: ["可选的支持按钮会前往 Buy Me a Coffee。该平台及其支付服务商处理结账，并可能向创作者提供付款状态及你选择提供的支持者信息。AIEDHK 网站本身不收集银行卡号。", "合作链接会前往 Gamma 等外部服务，可能包含推荐标识。服务商及其联盟平台可能通过自己的 Cookie 或类似技术归因合格购买。离开 AIEDHK 后，相应服务商的政策和条款适用。"] },
        { title: "广告与选择", paragraphs: ["启用广告时，Google AdSense 在主页提供明确标注的广告。Google 及其广告合作方可能处理 IP 地址、浏览器信息、Cookie 和类似标识，用于广告投放、衡量及安全。在相应设置及同意允许的情况下，Google 广告 Cookie 也可能使用你对本站或其他网站的访问记录。", "首版接入请求非个性化广告，并等待 Google 同意管理信号后才请求广告。非个性化广告仍可能使用 Cookie，不能替代同意机制。适用时，Google 的 Privacy & messaging 界面提供同意和美国州法规退出选项。页脚的“隐私选择”会带你返回主页，在那里使用 Google 的适用控件。拒绝或屏蔽广告仍可阅读内容。你也可以在 Google My Ad Center 管理广告设置。"] },
        { title: "外部服务与政策更新", paragraphs: ["托管、邮件、支持、广告和联盟服务商可能在你所在国家或地区以外处理信息，并适用其政策及相应保障。下方链接提供服务商信息。实际数据处理方式变化时，我们会更新本页；上方日期标识当前版本。"] },
      ], aboutLabel: "运营者信息与联络链接", providerLabel: "服务商信息与隐私选择",
    },
    disclosure: {
      intro: "AIEDHK 免费提供 AI 教育研究解读与学习资源。自愿读者支持、明确标注的广告，以及已披露的合作链接，可用于支持这项工作。",
      sections: [
        { title: "自愿读者支持", paragraphs: ["网站提供 Buy Me a Coffee 链接时，支持完全自愿，由外部平台处理。支持不购买编辑影响力，也不是阅读文章的条件。金额、币种和支付条款以结账页为准。我们不将支持款描述为可抵税的慈善捐赠。"] },
        { title: "展示广告", paragraphs: ["广告有明确标注，与研究解读分开。广告内容由广告服务商选择，不代表 AIEDHK 背书。读者无需观看或点击广告即可阅读内容。支持提示指向支持平台，不是鼓励点击广告。"] },
        { title: "联盟推荐", paragraphs: ["读者通过合作链接完成符合合作条款的交易时，AIEDHK 可能获得佣金。相关披露显示在推荐旁。点击链接或免费注册不一定产生可结算的推荐收入。", "推荐围绕具体教育用途选择，并说明限制。商业链接与原始论文或新闻来源链接分开。获批合作不代表工具已经证实教学效果，生成的教学材料仍需教育者审核。"] },
        { title: "编辑独立性", paragraphs: ["付款不能购买有利的研究结论。我们对内容选择、解读和更正负责。某个工具被介绍，不代表它适合所有学习者、学校、地区或个人数据用途。购买前请核对服务商的最新功能、价格、条款和隐私措施。"] },
      ], aboutLabel: "关于 AIEDHK", providerLabel: "相关政策",
    },
  },
  "zh-hant": {
    privacy: {
      intro: "本政策說明 AIEDHK 如何處理你在閱讀內容、訂閱更新，以及使用可選支持、廣告或合作連結時涉及的資訊。可選服務的說明僅在網站啟用相應服務時適用。",
      sections: [
        { title: "網站運作與訪問分析", paragraphs: ["託管服務會處理 IP 位址、瀏覽器資訊等技術請求資料，用於提供網站和維護安全。我們使用 Vercel Web Analytics 了解彙總瀏覽量、來源、裝置類別和大致國家或地區。其訪客統計不使用分析 Cookie，也不跨不同日期識別同一訪客。", "若啟用點擊統計，支持和合作連結事件僅包含頁面上下文、語言和入口位置。點擊不會被記錄為付款；這些事件不包含電郵地址、支付資料或支持留言。"] },
        { title: "電郵訂閱", paragraphs: ["訂閱時，我們在訂閱資料庫保存電郵地址、所選語言、訂閱狀態、來源頁面、同意版本記錄和退訂權杖，用於透過已配置的電郵服務發送所請求的更新。退訂會停止後續訂閱電郵，但不會自動刪除既有資料庫記錄。", "我們在營運訂閱、維護安全和處理請求所需的期間保留記錄。如需查閱、更正或刪除資料，請透過關於我們頁面中的連結聯絡網站營運者。"] },
        { title: "讀者支持與購買", paragraphs: ["可選的支持按鈕會前往 Buy Me a Coffee。該平台及其支付服務商處理結賬，並可能向創作者提供付款狀態及你選擇提供的支持者資訊。AIEDHK 網站本身不收集銀行卡號。", "合作連結會前往 Gamma 等外部服務，可能包含推薦識別碼。服務商及其聯盟平台可能透過自己的 Cookie 或類似技術歸因合格購買。離開 AIEDHK 後，相應服務商的政策和條款適用。"] },
        { title: "廣告與選擇", paragraphs: ["啟用廣告時，Google AdSense 在首頁提供明確標註的廣告。Google 及其廣告合作方可能處理 IP 位址、瀏覽器資訊、Cookie 和類似識別碼，用於廣告投放、衡量及安全。在相應設定及同意允許的情況下，Google 廣告 Cookie 也可能使用你對本站或其他網站的訪問記錄。", "首版接入請求非個人化廣告，並等待 Google 同意管理訊號後才請求廣告。非個人化廣告仍可能使用 Cookie，不能替代同意機制。適用時，Google 的 Privacy & messaging 介面提供同意和美國州法規退出選項。頁腳的「私隱選擇」會帶你返回首頁，在那裡使用 Google 的適用控制項。拒絕或屏蔽廣告仍可閱讀內容。你也可以在 Google My Ad Center 管理廣告設定。"] },
        { title: "外部服務與政策更新", paragraphs: ["託管、電郵、支持、廣告和聯盟服務商可能在你所在國家或地區以外處理資訊，並適用其政策及相應保障。下方連結提供服務商資訊。實際資料處理方式變化時，我們會更新本頁；上方日期標識目前版本。"] },
      ], aboutLabel: "營運者資訊與聯絡連結", providerLabel: "服務商資訊與私隱選擇",
    },
    disclosure: {
      intro: "AIEDHK 免費提供 AI 教育研究解讀與學習資源。自願讀者支持、明確標註的廣告，以及已披露的合作連結，可用於支持這項工作。",
      sections: [
        { title: "自願讀者支持", paragraphs: ["網站提供 Buy Me a Coffee 連結時，支持完全自願，由外部平台處理。支持不購買編輯影響力，也不是閱讀文章的條件。金額、幣種和支付條款以結賬頁為準。我們不將支持款描述為可扣稅的慈善捐款。"] },
        { title: "展示廣告", paragraphs: ["廣告有明確標註，與研究解讀分開。廣告內容由廣告服務商選擇，不代表 AIEDHK 背書。讀者無需觀看或點擊廣告即可閱讀內容。支持提示指向支持平台，不是鼓勵點擊廣告。"] },
        { title: "聯盟推薦", paragraphs: ["讀者透過合作連結完成符合合作條款的交易時，AIEDHK 可能獲得佣金。相關披露顯示在推薦旁。點擊連結或免費註冊不一定產生可結算的推薦收入。", "推薦圍繞具體教育用途選擇，並說明限制。商業連結與原始論文或新聞來源連結分開。獲批合作不代表工具已經證實教學效果，生成的教學材料仍需教育者審核。"] },
        { title: "編輯獨立性", paragraphs: ["付款不能購買有利的研究結論。我們對內容選擇、解讀和更正負責。某個工具被介紹，不代表它適合所有學習者、學校、地區或個人資料用途。購買前請核對服務商的最新功能、價格、條款和私隱措施。"] },
      ], aboutLabel: "關於 AIEDHK", providerLabel: "相關政策",
    },
  },
};

export function getPolicy(locale: Locale, kind: PolicyKind) {
  const contentLocale = locale === "zh-hant" || locale === "zh-hans" ? locale : "en";
  return { ...documents[contentLocale][kind], contentLocale, isFallback: contentLocale !== locale };
}
