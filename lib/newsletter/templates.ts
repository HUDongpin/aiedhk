import { localeMeta, type Locale } from "@/lib/i18n";
import { getNewsletterCopy } from "./messages";
import type { NewsletterChannel, NewsletterEmailItem, RenderedNewsletterEmail } from "./types";

interface EmailCopy {
  newsSubject: string;
  academySubject: string;
  chooseMessage: string;
  ignoreMessage: string;
  ideasHeading: string;
}

const emailCopy: Record<Locale, EmailCopy> = {
  en: {
    newsSubject: "New research news", academySubject: "Your daily lesson pair",
    chooseMessage: "Open the page to choose the newsletters you want and confirm your choices. No channels are selected or activated automatically. This link expires in 48 hours.",
    ignoreMessage: "If you did not request this email, you can ignore it. No new subscription will be activated without your confirmation.", ideasHeading: "Core ideas",
  },
  "zh-hant": {
    newsSubject: "最新研究新聞", academySubject: "每日精選兩課",
    chooseMessage: "開啟頁面，選擇你希望收到的電子報並確認。系統不會自動選擇或啟用任何訂閱。此連結將於 48 小時後失效。",
    ignoreMessage: "如你沒有要求收到此電郵，可以忽略它。未經你確認，不會啟用任何新訂閱。", ideasHeading: "核心概念",
  },
  "zh-hans": {
    newsSubject: "最新研究新闻", academySubject: "每日精选两课",
    chooseMessage: "打开页面，选择你希望收到的电子报并确认。系统不会自动选择或启用任何订阅。此链接将在 48 小时后失效。",
    ignoreMessage: "如果你没有请求此邮件，可以忽略它。未经你确认，不会启用任何新订阅。", ideasHeading: "核心概念",
  },
  es: {
    newsSubject: "Nuevas noticias de investigación", academySubject: "Tus dos lecciones del día",
    chooseMessage: "Abre la página para elegir los boletines que deseas y confirmar tu elección. Ningún boletín se selecciona ni se activa automáticamente. Este enlace caduca en 48 horas.",
    ignoreMessage: "Si no solicitaste este correo, puedes ignorarlo. No se activará ninguna suscripción nueva sin tu confirmación.", ideasHeading: "Ideas principales",
  },
  fr: {
    newsSubject: "Nouvelles actualités de la recherche", academySubject: "Vos deux leçons du jour",
    chooseMessage: "Ouvrez la page pour choisir vos lettres d’information et confirmer vos choix. Aucun abonnement n’est sélectionné ni activé automatiquement. Ce lien expire dans 48 heures.",
    ignoreMessage: "Si vous n’avez pas demandé cet e-mail, vous pouvez l’ignorer. Aucun nouvel abonnement ne sera activé sans votre confirmation.", ideasHeading: "Idées clés",
  },
  pt: {
    newsSubject: "Novas notícias de investigação", academySubject: "As suas duas lições do dia",
    chooseMessage: "Abra a página para escolher os boletins que pretende receber e confirmar as suas escolhas. Nenhum boletim é selecionado ou ativado automaticamente. Esta ligação expira dentro de 48 horas.",
    ignoreMessage: "Se não pediu este e-mail, pode ignorá-lo. Nenhuma nova subscrição será ativada sem a sua confirmação.", ideasHeading: "Ideias centrais",
  },
  de: {
    newsSubject: "Neue Forschungsnachrichten", academySubject: "Ihre zwei Lektionen für heute",
    chooseMessage: "Öffnen Sie die Seite, wählen Sie die gewünschten Newsletter und bestätigen Sie Ihre Auswahl. Kein Newsletter wird automatisch ausgewählt oder aktiviert. Dieser Link läuft in 48 Stunden ab.",
    ignoreMessage: "Falls Sie diese E-Mail nicht angefordert haben, können Sie sie ignorieren. Ohne Ihre Bestätigung wird kein neues Abonnement aktiviert.", ideasHeading: "Kernideen",
  },
  ar: {
    newsSubject: "أخبار بحثية جديدة", academySubject: "درساك المختاران لهذا اليوم",
    chooseMessage: "افتح الصفحة لاختيار النشرات التي تريدها وتأكيد اختياراتك. لن يتم اختيار أي نشرة أو تفعيلها تلقائيًا. تنتهي صلاحية هذا الرابط خلال 48 ساعة.",
    ignoreMessage: "إذا لم تطلب هذه الرسالة، يمكنك تجاهلها. لن يتم تفعيل أي اشتراك جديد دون تأكيدك.", ideasHeading: "الأفكار الأساسية",
  },
  ko: {
    newsSubject: "새로운 연구 소식", academySubject: "오늘의 두 가지 수업",
    chooseMessage: "페이지를 열어 원하는 뉴스레터를 선택하고 확인해 주세요. 자동으로 선택되거나 활성화되는 구독은 없습니다. 이 링크는 48시간 후 만료됩니다.",
    ignoreMessage: "이 이메일을 요청하지 않았다면 무시하셔도 됩니다. 확인 없이는 새 구독이 활성화되지 않습니다.", ideasHeading: "핵심 아이디어",
  },
  ja: {
    newsSubject: "新しい研究ニュース", academySubject: "今日の2つのレッスン",
    chooseMessage: "ページを開いて希望するニュースレターを選び、選択内容を確認してください。自動で選択または有効化される購読はありません。このリンクは48時間後に失効します。",
    ignoreMessage: "このメールをリクエストしていない場合は無視してください。確認なしに新しい購読が有効になることはありません。", ideasHeading: "核心概念",
  },
  hi: {
    newsSubject: "नए शोध समाचार", academySubject: "आज के आपके दो पाठ",
    chooseMessage: "पृष्ठ खोलकर इच्छित समाचार पत्र चुनें और अपने चुनाव की पुष्टि करें। कोई समाचार पत्र अपने आप चुना या सक्रिय नहीं होता। यह लिंक 48 घंटे में समाप्त हो जाएगा।",
    ignoreMessage: "यदि आपने यह ईमेल नहीं माँगा था, तो इसे अनदेखा कर सकते हैं। आपकी पुष्टि के बिना कोई नई सदस्यता सक्रिय नहीं होगी।", ideasHeading: "मुख्य विचार",
  },
  ru: {
    newsSubject: "Новые исследовательские новости", academySubject: "Ваши два урока на сегодня",
    chooseMessage: "Откройте страницу, выберите нужные рассылки и подтвердите свой выбор. Ни одна рассылка не выбирается и не активируется автоматически. Ссылка действительна 48 часов.",
    ignoreMessage: "Если вы не запрашивали это письмо, его можно проигнорировать. Без вашего подтверждения новая подписка не будет активирована.", ideasHeading: "Ключевые идеи",
  },
  id: {
    newsSubject: "Kabar penelitian terbaru", academySubject: "Dua pelajaran Anda hari ini",
    chooseMessage: "Buka halaman untuk memilih buletin yang Anda inginkan dan mengonfirmasi pilihan. Tidak ada buletin yang dipilih atau diaktifkan secara otomatis. Tautan ini berlaku selama 48 jam.",
    ignoreMessage: "Jika Anda tidak meminta email ini, abaikan saja. Tidak ada langganan baru yang akan diaktifkan tanpa konfirmasi Anda.", ideasHeading: "Ide inti",
  },
  bn: {
    newsSubject: "নতুন গবেষণার সংবাদ", academySubject: "আজকের আপনার দুটি পাঠ",
    chooseMessage: "পৃষ্ঠাটি খুলে আপনার পছন্দের নিউজলেটার বেছে নিন এবং নির্বাচন নিশ্চিত করুন। কোনো নিউজলেটার স্বয়ংক্রিয়ভাবে নির্বাচিত বা সক্রিয় হয় না। এই লিংকের মেয়াদ 48 ঘণ্টা।",
    ignoreMessage: "আপনি এই ইমেইলের অনুরোধ না করলে এটি উপেক্ষা করতে পারেন। আপনার নিশ্চিতকরণ ছাড়া নতুন কোনো সাবস্ক্রিপশন সক্রিয় হবে না।", ideasHeading: "মূল ধারণা",
  },
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function httpUrl(value: string): URL {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Newsletter links must be absolute HTTP(S) URLs.");
  }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("Newsletter links must be HTTP(S) URLs without credentials.");
  }
  return url;
}

function itemUrl(siteUrl: string, locale: Locale, channel: NewsletterChannel, slug: string): string {
  if (!slug.trim() || slug === "." || slug === "..") {
    throw new Error("Newsletter item slug must identify an article or lesson.");
  }
  const base = httpUrl(siteUrl);
  base.search = "";
  base.hash = "";
  base.pathname = `${base.pathname.replace(/\/+$/, "")}/${locale}/${channel}/${encodeURIComponent(slug)}`;
  return base.toString();
}

function shell(locale: Locale, title: string, body: string): string {
  const { htmlLang, dir } = localeMeta[locale];
  return `<!doctype html>
<html lang="${htmlLang}" dir="${dir}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:24px 12px;background:#f5f5f4;color:#202020;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #dededb;"><tr><td dir="${dir}" style="padding:28px;text-align:${dir === "rtl" ? "right" : "left"};overflow-wrap:anywhere;">
<p style="margin:0 0 12px;font-size:13px;letter-spacing:1px;">AIEDHK</p>
${body}
</td></tr></table></td></tr></table>
</body></html>`;
}

function action(label: string, url: string): string {
  return `<a href="${escapeHtml(url)}" style="color:#155e59;text-decoration:underline;">${escapeHtml(label)}</a>`;
}

export function renderNewsletterDigest({
  channel, locale, items, unsubscribeUrl, review = false, siteUrl,
}: {
  channel: NewsletterChannel;
  locale: Locale;
  items: NewsletterEmailItem[];
  unsubscribeUrl: string;
  review?: boolean;
  siteUrl: string;
}): RenderedNewsletterEmail {
  // Validate the explicit site even for an empty item list.
  httpUrl(siteUrl);
  const unsubscribe = httpUrl(unsubscribeUrl).toString();
  const copy = getNewsletterCopy(locale, channel);
  const mail = emailCopy[locale];
  const label = channel === "news" ? copy.newsLabel : copy.academyLabel;
  const isReview = channel === "academy" && review;
  const reviewPrefix = isReview ? `${copy.reviewLabel} · ` : "";
  const heading = `${reviewPrefix}${label}`;
  const subject = `AIEDHK · ${reviewPrefix}${channel === "news" ? mail.newsSubject : mail.academySubject}`;
  const renderedItems = items.map((item) => {
    const url = itemUrl(siteUrl, locale, channel, item.slug);
    const content = localeMeta[item.contentLocale];
    const fallback = item.contentLocale !== locale;
    const ideas = item.coreIdeas ?? [];
    const html = `<section style="margin:24px 0;padding-top:20px;border-top:1px solid #dededb;">
${fallback ? `<p style="font-size:13px;color:#666;">${escapeHtml(copy.fallbackLabel)}</p>` : ""}
<div lang="${content.htmlLang}" dir="${content.dir}" style="text-align:${content.dir === "rtl" ? "right" : "left"};">
<h2 style="font-size:21px;line-height:1.35;margin:0 0 12px;">${escapeHtml(item.title)}</h2>
<p>${escapeHtml(item.summary)}</p>
${ideas.length > 0 ? `<p lang="${localeMeta[locale].htmlLang}" dir="${localeMeta[locale].dir}" style="font-weight:bold;">${escapeHtml(mail.ideasHeading)}</p><ul>${ideas.map((idea) => `<li>${escapeHtml(idea)}</li>`).join("")}</ul>` : ""}
</div>
<p>${action(copy.readMore, url)}</p>
</section>`;
    const text = [
      ...(fallback ? [copy.fallbackLabel] : []), item.title, item.summary,
      ...(ideas.length > 0 ? [mail.ideasHeading, ...ideas.map((idea) => `- ${idea}`)] : []),
      `${copy.readMore}: ${url}`,
    ].join("\n\n");
    return { html, text };
  });
  const footer = `${copy.unsubscribeAction} · ${label}`;
  const body = `<h1 style="font-size:26px;line-height:1.3;">${escapeHtml(heading)}</h1>
<p>${escapeHtml(copy.description)}</p>
${renderedItems.map((item) => item.html).join("\n")}
<p style="border-top:1px solid #dededb;padding-top:20px;font-size:13px;">${action(footer, unsubscribe)}</p>`;
  return {
    subject,
    html: shell(locale, subject, body),
    text: ["AIEDHK", heading, copy.description, ...renderedItems.map((item) => item.text), `${footer}: ${unsubscribe}`].join("\n\n"),
  };
}

export function renderNewsletterConfirmation({ channel, locale, confirmUrl }: {
  channel: NewsletterChannel | "choose";
  locale: Locale;
  confirmUrl: string;
}): RenderedNewsletterEmail {
  const url = httpUrl(confirmUrl).toString();
  const copy = getNewsletterCopy(locale, channel === "choose" ? "news" : channel);
  const mail = emailCopy[locale];
  const heading = channel === "choose" ? copy.chooseChannels : copy.confirmTitle;
  const channelLabel = channel === "academy" ? copy.academyLabel : copy.newsLabel;
  const subject = `AIEDHK · ${heading}${channel === "choose" ? "" : ` · ${channelLabel}`}`;
  const message = channel === "choose" ? mail.chooseMessage : copy.confirmMessage;
  const cta = channel === "choose" ? copy.chooseChannels : copy.confirmAction;
  const body = `<h1 style="font-size:26px;line-height:1.3;">${escapeHtml(heading)}</h1>
<p>${escapeHtml(message)}</p>
<p style="margin:28px 0;">${action(cta, url)}</p>
<p style="font-size:13px;color:#666;">${escapeHtml(mail.ignoreMessage)}</p>`;
  return { subject, html: shell(locale, subject, body), text: ["AIEDHK", heading, message, `${cta}: ${url}`, mail.ignoreMessage].join("\n\n") };
}
