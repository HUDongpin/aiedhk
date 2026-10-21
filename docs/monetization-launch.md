# AIED.hk 变现接入与开通手册

日期：2026-10-21。收款地区：香港。内容继续免费。

## 当前边界

站方已确认 Buy Me a Coffee、AdSense、Gamma 合作账户均未开通。
代码支持三条收入渠道独立启用；默认全部关闭，不包含真实收款链接、发布商 ID 或推荐链接。
本手册中的建议用户名、金额和申请文案不是已经注册或获批的资料。
没有外部平台审核、真实付款、银行到账或佣金归因的验收记录。

## 1. Buy Me a Coffee

入口：[Buy Me a Coffee](https://www.buymeacoffee.com/)。

由账户持有人完成注册、实际香港个人或公司身份验证和银行设置；不把身份证件、银行资料或密码交给代码库。
建议公开名称 `AIED.hk`，用户名优先尝试 `aiedhk`（可用性未确认）。
开启一次性支持，建议默认 US$5；会员和商店不属于本轮范围。

可直接使用的英文介绍：

> AIED.hk helps educators and researchers make sense of AI in education through free research explainers and multilingual learning resources. If our work has helped you, a coffee supports ongoing editorial work, translation and website operations. Reading remains free, and support does not influence our editorial decisions. Thank you for helping keep this knowledge accessible.

中文介绍：

> AIED.hk 通过免费的研究解读和多语言学习资源，帮助教育者与研究者理解 AI 教育的发展。如果这些内容对你有帮助，欢迎请我们喝杯咖啡，支持持续的编辑、翻译与网站运营。内容继续免费开放，支持不会影响编辑判断。谢谢你让知识更容易被看见。

取得真实主页 URL 后配置 `BUY_ME_A_COFFEE_URL`，并设置 `SUPPORT_ENABLED=true`。
完整 URL 必须是 `https://buymeacoffee.com/用户名` 或其 `www` 版本。
完成重新构建和部署后，桌面导航、手机菜单、页脚及 News/Academy 文末会出现入口。
站内不安装平台浮动挂件，也不创建自有支付接口。

验收：核对链接确实归属本站账户；检查手机付款页、币种与手续费；由账户持有人安排真实的小额支持并核对平台记录和银行到账。按钮可点击不等于收款验收通过。
中国内地读者的访问和支付可用性需另行实测，不承诺微信或支付宝支持。

## 2. AdSense

入口：[Google AdSense](https://adsense.google.com/start/)。

### 申请及网站验证

1. 以实际收款主体注册；个人或公司资料应与银行资料一致。平台要求的身份、地址、税务或银行步骤由账户持有人完成。
2. 添加 `aied.hk`；将后台给出的 `ca-pub-` 发布商 ID 填入 `ADSENSE_PUBLISHER_ID`。
3. 重新构建并部署。网站输出 `google-adsense-account` meta 和根路径 `/ads.txt`，可在显示广告前用于审核。没有合法 ID 时 `/ads.txt` 返回 404，不授权虚构卖方。
4. 提交站点审核，处理后台明确反馈的问题；不把发布代码当作 Google 审核通过。

### 同意设置及广告位

1. 在 Privacy & messaging 发布适用于本站域名的欧洲法规消息，提供拒绝、选择和再次管理同意的入口。
2. 设置适用的美国州法规消息，保留 Google 的默认 Do Not Sell or Share 控件。代码不替换该控件。
3. 将本站 `/en/privacy`（或中文版本）填写为隐私政策地址。上线前确认关于我们页面的运营者联络路径可用，并由实际运营者审阅政策内容。
4. 在站点广告设置关闭 Auto ads，包括 anchor、vignette、侧边浮动和其他自动广告。代码只创建一个手动主页广告位；后台自动广告开关需要实际账户核查。
5. 创建一个响应式展示广告单元，将其 10 位 ID 填入 `ADSENSE_HOME_SLOT`。
6. 只有站点审核通过、消息已发布、自动广告关闭并完成下列真实预览检查，才将 `ADSENSE_CONSENT_READY=true`、`ADSENSE_ENABLED=true` 应用于正式环境。

代码把 AdSense 请求先暂停，再等待 Google CMP 的 TCF 和美国州状态；未知、错误、拒绝、撤回或美国州退出状态不请求广告。
首版请求非个性化广告，Google 仍自行评估完整 TCF/GPP 信号。非个性化广告仍可能使用 Cookie。
Google CMP 由 AdSense 官方脚本加载；缺少消息或回调时不采用猜测的地区、页面语言或本地自制 Cookie 代替同意。
拒绝或广告拦截不影响阅读；未填充广告折叠。脚本在每个文档内只插入一次，离开主页暂停请求。
美国 GPP 状态改变后，本次文档停止请求，完整刷新后读取新状态。
所有语言共用同一个广告单元，位于主页三张主要入口卡片之后。

真实验收必须在平台支持的预览/测试环境中进行，不能点击自己的正式广告：

- `?fc=alwaysshow&fctype=gdpr`：同意、拒绝、自定义、撤回与再次访问。
- `?fc=alwaysshow&fctype=usnat`：美国州退出控件与退出状态。
- 页脚“隐私选择”链接返回主页并重开适用的欧洲消息；美国用户使用 Google 默认退出控件。
- 使用实际浏览器检查未知状态无请求、拒绝后内容可读、脚本不重复、未填充折叠；验证 Google 管理后台能接收正确的同意信号。
- 禁用脚本/广告拦截及手机、桌面布局。不要把本地模拟 CMP 结果表述为 Google CMP 的真实验收。

参考：[Google CMP API](https://developers.google.com/funding-choices/fc-api-docs)、[暂停广告请求](https://support.google.com/adsense/answer/7670312)、[ads.txt](https://support.google.com/adsense/answer/12171612)。

## 3. Gamma 合作计划

入口：[官方申请说明](https://help.gamma.app/en/articles/11048092-how-do-i-join-the-gamma-affiliate-program)。

英文申请草稿（不包含未经核实的月流量或教学效果承诺）：

> AIED.hk is a freely accessible, multilingual AI-in-education information site for educators and researchers. We publish research explainers and learning resources. We would introduce Gamma only where a presentation-drafting workflow is relevant to the article, describe its limitations, and disclose the affiliate relationship beside the link. We do not use paid-click schemes or alter original research citations for commercial links. Our pilot would begin with one manually reviewed placement. We would like to confirm Hong Kong payout eligibility, commission terms, attribution windows and settlement requirements before activation.

由账户持有人登录 PartnerStack 提交申请并核实收款资格和实际条款。正式推荐链接应由平台提供。
先实际试用并审阅该教育用途，再指定文章。现有文章不会被关键词自动匹配到推荐。

配置：

- `GAMMA_AFFILIATE_URL`：正式 HTTPS 推荐链接（允许平台使用自己的跳转域名）。
- `GAMMA_REVIEWED_PATHS`：人工审阅的 `news/文章slug` 或 `academy/课程slug`，逗号分隔，不含语言前缀；不支持通配符。
- `GAMMA_AFFILIATE_ENABLED=true`：在合作获批及用途审阅完成后启用。

一个条目在各语言页沿用相同的内容标识。相关块说明用途、限制和佣金关系，链接带 `rel="sponsored noopener noreferrer"`。
不改原文、原始文献链接或文章/课程编号。第一轮只启用一个审阅过的内容条目。

## 配置与发布

所有值放在本地被忽略的 `.env.local` 或部署平台环境变量中。`.env.example` 只列名称。
所有开关仅接受小写 `true`；缺少正式必需字段时对应功能不显示。
配置在静态页面构建时读取：修改后必须重新构建和部署，不能只改远端变量期待现有页面立即更新。

| 名称 | 用途 |
| --- | --- |
| `SUPPORT_ENABLED`、`BUY_ME_A_COFFEE_URL` | 独立启用真实支持链接 |
| `ADSENSE_PUBLISHER_ID` | 发布商验证及 ads.txt，独立于广告开关 |
| `ADSENSE_ENABLED`、`ADSENSE_HOME_SLOT`、`ADSENSE_CONSENT_READY` | 经审核的主页广告与同意设置 |
| `GAMMA_AFFILIATE_ENABLED`、`GAMMA_AFFILIATE_URL`、`GAMMA_REVIEWED_PATHS` | 获批且人工审阅的推荐 |
| `MONETIZATION_ANALYTICS_ENABLED` | 可选的按钮点击事件；确认 Vercel 套餐支持自定义事件后才开启 |

按钮及披露标签覆盖 14 种语言；政策正文提供英文、繁体中文及简体中文。
其他 11 种语言明确提示英文政策正文，并设置正文 `lang` 和从左到右方向；不把英文正文伪装成已翻译内容。

发布前使用独立工作区，审阅变更、测试并提交；从干净提交运行 `npm run release:verify` 后部署。
关闭某项时，把对应开关设为 `false`，重新部署；紧急停止广告也可先在 AdSense 后台停用投放。
代码库不包含银行信息、支付密钥，也不新增支付数据库。

## 首个完整 30 天的人工复盘

从每项实际启用日开始，记录日期区间、生产环境页面浏览量、平台结算收入、费用、维护时间与页面表现。
广告采用 AdSense 的广告页面浏览量和页面 RPM，不用全站 Vercel 浏览量代替主页广告曝光。
支持以平台确认/实际到账为准，佣金以平台确认的合格交易为准；点击、注册、预计佣金、已结算金额分别记录。
没有为了本次试点新建收费分析服务或定时发送报告。

可选 Vercel 事件为 `support_click` 和 `affiliate_click`，属性只有语言与入口位置，页面路径由现有分析上下文提供。
这些事件不代表付款，也不记录支持者邮箱、留言、金额或银行卡资料。

## 可重复的本地浏览器检查

`scripts/qa/monetization-disabled.js` 与 `scripts/qa/monetization-enabled.js` 是 Playwright CLI 的 `run-code` 输入，不属于需要连接真实平台的端到端验收。
使用 `npx --package @playwright/cli playwright-cli --session monetization-qa open about:blank` 建立独立浏览器会话，创建 `output/playwright/`，然后以 `run-code` 传入相应文件全文。

关闭状态：清除本手册列出的商业化环境变量，以 `npm run dev -- --port 3317` 启动。运行 disabled 脚本，检查 42 条本地路由、三个手机政策页面及没有 ID 时的 ads.txt。

启用模拟：重启同一端口的开发服务器，仅为该进程设置以下**测试值**，不要存入正式部署环境：

```text
SUPPORT_ENABLED=true
BUY_ME_A_COFFEE_URL=https://buymeacoffee.com/aiedhk-local-test
ADSENSE_ENABLED=true
ADSENSE_PUBLISHER_ID=ca-pub-1234567890123456
ADSENSE_HOME_SLOT=1234567890
ADSENSE_CONSENT_READY=true
GAMMA_AFFILIATE_ENABLED=true
GAMMA_AFFILIATE_URL=https://try.gamma.app/aiedhk-local-test
GAMMA_REVIEWED_PATHS=news/news-openai-interactive-learning-anthropic-claude-reflection
```

这些 URL、ID 和文章位置只用于模拟，不表示账户、合作关系或内容适配已获批准。
enabled 脚本会拦截 Google 广告脚本并用本地 SDK/CMP fixture 替代，验证同意/拒绝/撤回、SDK 对象替换、离开主页前后及延迟初始化时的美国退出、GPP 错误、重复隐私入口、14 种语言的三种宽度和推荐隔离。
支持和推荐链接只检查目标，不进行付款或外部购买。运行结束后停止测试服务器，以无测试变量的干净构建进行发布检查。
