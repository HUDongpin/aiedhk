import type { Locale } from "@/lib/i18n";
import type { NewsletterChannel } from "./types";

export interface NewsletterCopy {
  eyebrow: string;
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  alreadySubscribed: string;
  invalidEmail: string;
  notConfigured: string;
  error: string;
  privacyNote: string;
  pendingConfirmation: string;
  rateLimited: string;
  confirmationFailed: string;
  confirmTitle: string;
  confirmMessage: string;
  confirmAction: string;
  confirmSuccess: string;
  confirmUsed: string;
  confirmSuccessUnknown: string;
  confirmExpired: string;
  confirmInvalid: string;
  unsubscribeTitle: string;
  unsubscribeMessage: string;
  unsubscribeMultipleMessage: string;
  unsubscribeUnknownMessage: string;
  unsubscribeAction: string;
  unsubscribeSuccess: string;
  unsubscribeSuccessUnknown: string;
  newsLabel: string;
  academyLabel: string;
  chooseChannels: string;
  reviewLabel: string;
  fallbackLabel: string;
  readMore: string;
  emptySelection: string;
  backHome: string;
}

type LandingCopy = Pick<NewsletterCopy, "eyebrow" | "title" | "description">;
type ScopeCopy = Pick<NewsletterCopy, "confirmUsed" | "confirmSuccessUnknown" | "unsubscribeMultipleMessage" | "unsubscribeUnknownMessage" | "unsubscribeSuccessUnknown">;
type SharedCopy = Omit<NewsletterCopy, keyof LandingCopy | keyof ScopeCopy | "success">;

// Every supported locale is explicit: newsletter consent must never silently
// fall back to an English interface. {channel} is replaced with its local label.
const shared: Record<Locale, SharedCopy> = {
  en: {
    emailLabel: "Email address", emailPlaceholder: "you@example.com", submit: "Subscribe", submitting: "Sending confirmation…",
    alreadySubscribed: "This address is already confirmed for {channel}.", invalidEmail: "Please enter a valid email address.",
    notConfigured: "Subscriptions are temporarily unavailable. Please try again later.", error: "Something went wrong. Please try again.",
    privacyNote: "Confirm by email before receiving updates. You can unsubscribe from each newsletter at any time.",
    pendingConfirmation: "Check your inbox to confirm your subscription. Updates begin only after confirmation.",
    rateLimited: "Too many requests. Please wait a few minutes before trying again.", confirmationFailed: "We could not send the confirmation email. Please try again later.",
    confirmTitle: "Confirm your newsletter subscription", confirmMessage: "Please confirm that you want to receive {channel}. This link expires in 48 hours.",
    confirmAction: "Confirm subscription", confirmSuccess: "Your subscription to {channel} is confirmed.",
    confirmExpired: "This confirmation link has expired. Subscribe again to request a new 48-hour link.", confirmInvalid: "This confirmation link is invalid. Please request a new one.",
    unsubscribeTitle: "Unsubscribe from this newsletter", unsubscribeMessage: "Stop receiving {channel}? Your other newsletter subscriptions will remain active.",
    unsubscribeAction: "Unsubscribe", unsubscribeSuccess: "You have unsubscribed from {channel}.",
    newsLabel: "Research News", academyLabel: "Academy lessons", chooseChannels: "Choose your newsletters", reviewLabel: "Review",
    fallbackLabel: "English content — a reviewed translation is not yet available.", readMore: "Read more", emptySelection: "Select at least one newsletter before confirming.", backHome: "Back to home",
  },
  "zh-hant": {
    emailLabel: "電郵地址", emailPlaceholder: "you@example.com", submit: "訂閱", submitting: "正在傳送確認電郵…",
    alreadySubscribed: "此電郵地址已確認訂閱「{channel}」。", invalidEmail: "請輸入有效的電郵地址。",
    notConfigured: "訂閱服務暫時無法使用，請稍後再試。", error: "發生錯誤，請再試一次。",
    privacyNote: "確認電郵後才會收到更新，你可隨時分別取消各份電子報的訂閱。",
    pendingConfirmation: "請查看收件匣並確認訂閱。確認後才會開始傳送更新。",
    rateLimited: "請求過於頻繁，請稍候幾分鐘再試。", confirmationFailed: "未能傳送確認電郵，請稍後再試。",
    confirmTitle: "確認你的電子報訂閱", confirmMessage: "請確認你希望收到「{channel}」。此連結將於 48 小時後失效。",
    confirmAction: "確認訂閱", confirmSuccess: "已確認訂閱「{channel}」。",
    confirmExpired: "此確認連結已失效。請重新訂閱，取得有效期為 48 小時的新連結。", confirmInvalid: "此確認連結無效，請申請新的連結。",
    unsubscribeTitle: "取消訂閱此電子報", unsubscribeMessage: "停止接收「{channel}」？其他電子報的訂閱將會保留。",
    unsubscribeAction: "取消訂閱", unsubscribeSuccess: "已取消訂閱「{channel}」。",
    newsLabel: "研究新聞", academyLabel: "學院課程", chooseChannels: "選擇你要訂閱的電子報", reviewLabel: "複習",
    fallbackLabel: "英文內容：經審閱的譯文尚未提供。", readMore: "閱讀更多", emptySelection: "請至少選擇一份電子報，再確認訂閱。", backHome: "返回首頁",
  },
  "zh-hans": {
    emailLabel: "电子邮箱", emailPlaceholder: "you@example.com", submit: "订阅", submitting: "正在发送确认邮件…",
    alreadySubscribed: "此邮箱已确认订阅“{channel}”。", invalidEmail: "请输入有效的电子邮箱地址。",
    notConfigured: "订阅服务暂时无法使用，请稍后再试。", error: "发生错误，请重试。",
    privacyNote: "确认邮件后才会收到更新，你可随时分别取消各份电子报的订阅。",
    pendingConfirmation: "请查看收件箱并确认订阅。确认后才会开始发送更新。",
    rateLimited: "请求过于频繁，请稍候几分钟再试。", confirmationFailed: "未能发送确认邮件，请稍后再试。",
    confirmTitle: "确认你的电子报订阅", confirmMessage: "请确认你希望收到“{channel}”。此链接将在 48 小时后失效。",
    confirmAction: "确认订阅", confirmSuccess: "已确认订阅“{channel}”。",
    confirmExpired: "此确认链接已过期。请重新订阅，获取有效期为 48 小时的新链接。", confirmInvalid: "此确认链接无效，请申请新链接。",
    unsubscribeTitle: "取消订阅此电子报", unsubscribeMessage: "停止接收“{channel}”？其他电子报的订阅将会保留。",
    unsubscribeAction: "取消订阅", unsubscribeSuccess: "已取消订阅“{channel}”。",
    newsLabel: "研究新闻", academyLabel: "学院课程", chooseChannels: "选择你要订阅的电子报", reviewLabel: "复习",
    fallbackLabel: "英文内容：经审阅的译文尚未提供。", readMore: "阅读更多", emptySelection: "请至少选择一份电子报，再确认订阅。", backHome: "返回首页",
  },
  es: {
    emailLabel: "Correo electrónico", emailPlaceholder: "you@example.com", submit: "Suscribirme", submitting: "Enviando confirmación…",
    alreadySubscribed: "Esta dirección ya tiene una suscripción confirmada a «{channel}».", invalidEmail: "Introduce una dirección de correo válida.",
    notConfigured: "Las suscripciones no están disponibles temporalmente. Inténtalo más tarde.", error: "Ha ocurrido un error. Inténtalo de nuevo.",
    privacyNote: "Confirma tu correo antes de recibir novedades. Puedes cancelar cada boletín en cualquier momento.",
    pendingConfirmation: "Revisa tu correo para confirmar la suscripción. Los envíos comenzarán solo después de confirmarla.",
    rateLimited: "Demasiadas solicitudes. Espera unos minutos antes de volver a intentarlo.", confirmationFailed: "No pudimos enviar el correo de confirmación. Inténtalo más tarde.",
    confirmTitle: "Confirma tu suscripción", confirmMessage: "Confirma que deseas recibir «{channel}». Este enlace caduca en 48 horas.",
    confirmAction: "Confirmar suscripción", confirmSuccess: "Tu suscripción a «{channel}» está confirmada.",
    confirmExpired: "Este enlace ha caducado. Suscríbete de nuevo para recibir otro válido durante 48 horas.", confirmInvalid: "Este enlace de confirmación no es válido. Solicita uno nuevo.",
    unsubscribeTitle: "Cancelar la suscripción a este boletín", unsubscribeMessage: "¿Dejar de recibir «{channel}»? Tus otras suscripciones seguirán activas.",
    unsubscribeAction: "Cancelar suscripción", unsubscribeSuccess: "Has cancelado tu suscripción a «{channel}».",
    newsLabel: "Noticias de investigación", academyLabel: "Lecciones de la Academia", chooseChannels: "Elige tus boletines", reviewLabel: "Repaso",
    fallbackLabel: "Contenido en inglés: aún no hay una traducción revisada.", readMore: "Leer más", emptySelection: "Selecciona al menos un boletín antes de confirmar.", backHome: "Volver al inicio",
  },
  fr: {
    emailLabel: "Adresse e-mail", emailPlaceholder: "you@example.com", submit: "M’abonner", submitting: "Envoi de la confirmation…",
    alreadySubscribed: "Cette adresse dispose déjà d’un abonnement confirmé à « {channel} ».", invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    notConfigured: "Les abonnements sont temporairement indisponibles. Veuillez réessayer plus tard.", error: "Une erreur est survenue. Veuillez réessayer.",
    privacyNote: "Confirmez votre adresse avant de recevoir des messages. Vous pouvez vous désabonner de chaque lettre à tout moment.",
    pendingConfirmation: "Consultez votre messagerie pour confirmer votre abonnement. Les envois commenceront uniquement après confirmation.",
    rateLimited: "Trop de demandes. Veuillez patienter quelques minutes avant de réessayer.", confirmationFailed: "L’e-mail de confirmation n’a pas pu être envoyé. Veuillez réessayer plus tard.",
    confirmTitle: "Confirmez votre abonnement", confirmMessage: "Veuillez confirmer que vous souhaitez recevoir « {channel} ». Ce lien expire dans 48 heures.",
    confirmAction: "Confirmer l’abonnement", confirmSuccess: "Votre abonnement à « {channel} » est confirmé.",
    confirmExpired: "Ce lien a expiré. Inscrivez-vous à nouveau pour recevoir un lien valable 48 heures.", confirmInvalid: "Ce lien de confirmation est invalide. Veuillez en demander un nouveau.",
    unsubscribeTitle: "Se désabonner de cette lettre", unsubscribeMessage: "Ne plus recevoir « {channel} » ? Vos autres abonnements resteront actifs.",
    unsubscribeAction: "Se désabonner", unsubscribeSuccess: "Vous êtes désabonné de « {channel} ».",
    newsLabel: "Actualités de la recherche", academyLabel: "Leçons de l’Académie", chooseChannels: "Choisissez vos lettres d’information", reviewLabel: "Révision",
    fallbackLabel: "Contenu en anglais : aucune traduction révisée n’est encore disponible.", readMore: "Lire la suite", emptySelection: "Sélectionnez au moins une lettre avant de confirmer.", backHome: "Retour à l’accueil",
  },
  pt: {
    emailLabel: "Endereço de e-mail", emailPlaceholder: "you@example.com", submit: "Subscrever", submitting: "A enviar confirmação…",
    alreadySubscribed: "Este endereço já tem uma subscrição confirmada de «{channel}».", invalidEmail: "Introduza um endereço de e-mail válido.",
    notConfigured: "As subscrições estão temporariamente indisponíveis. Tente novamente mais tarde.", error: "Ocorreu um erro. Tente novamente.",
    privacyNote: "Confirme o seu e-mail antes de receber novidades. Pode cancelar cada boletim a qualquer momento.",
    pendingConfirmation: "Consulte a sua caixa de entrada para confirmar a subscrição. Os envios só começam após a confirmação.",
    rateLimited: "Demasiados pedidos. Aguarde alguns minutos antes de tentar novamente.", confirmationFailed: "Não foi possível enviar o e-mail de confirmação. Tente mais tarde.",
    confirmTitle: "Confirme a sua subscrição", confirmMessage: "Confirme que pretende receber «{channel}». Esta ligação expira dentro de 48 horas.",
    confirmAction: "Confirmar subscrição", confirmSuccess: "A sua subscrição de «{channel}» está confirmada.",
    confirmExpired: "Esta ligação expirou. Subscreva novamente para receber uma ligação válida durante 48 horas.", confirmInvalid: "Esta ligação de confirmação é inválida. Peça uma nova.",
    unsubscribeTitle: "Cancelar a subscrição deste boletim", unsubscribeMessage: "Deixar de receber «{channel}»? As suas outras subscrições continuarão ativas.",
    unsubscribeAction: "Cancelar subscrição", unsubscribeSuccess: "Cancelou a sua subscrição de «{channel}».",
    newsLabel: "Notícias de investigação", academyLabel: "Lições da Academia", chooseChannels: "Escolha os seus boletins", reviewLabel: "Revisão",
    fallbackLabel: "Conteúdo em inglês: ainda não existe uma tradução revista.", readMore: "Ler mais", emptySelection: "Selecione pelo menos um boletim antes de confirmar.", backHome: "Voltar ao início",
  },
  de: {
    emailLabel: "E-Mail-Adresse", emailPlaceholder: "you@example.com", submit: "Abonnieren", submitting: "Bestätigung wird gesendet…",
    alreadySubscribed: "Für diese Adresse ist das Abonnement „{channel}“ bereits bestätigt.", invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    notConfigured: "Abonnements sind vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.", error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    privacyNote: "Bestätigen Sie Ihre E-Mail-Adresse, bevor Sie Updates erhalten. Sie können jeden Newsletter jederzeit abbestellen.",
    pendingConfirmation: "Prüfen Sie Ihr Postfach und bestätigen Sie Ihr Abonnement. Der Versand beginnt erst nach der Bestätigung.",
    rateLimited: "Zu viele Anfragen. Bitte warten Sie einige Minuten und versuchen Sie es erneut.", confirmationFailed: "Die Bestätigungs-E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    confirmTitle: "Bestätigen Sie Ihr Newsletter-Abonnement", confirmMessage: "Bitte bestätigen Sie, dass Sie „{channel}“ erhalten möchten. Dieser Link läuft in 48 Stunden ab.",
    confirmAction: "Abonnement bestätigen", confirmSuccess: "Ihr Abonnement „{channel}“ ist bestätigt.",
    confirmExpired: "Dieser Link ist abgelaufen. Melden Sie sich erneut an, um einen neuen, 48 Stunden gültigen Link zu erhalten.", confirmInvalid: "Dieser Bestätigungslink ist ungültig. Bitte fordern Sie einen neuen an.",
    unsubscribeTitle: "Diesen Newsletter abbestellen", unsubscribeMessage: "„{channel}“ nicht mehr erhalten? Ihre anderen Newsletter-Abonnements bleiben aktiv.",
    unsubscribeAction: "Abbestellen", unsubscribeSuccess: "Sie haben „{channel}“ abbestellt.",
    newsLabel: "Forschungsnachrichten", academyLabel: "Akademie-Lektionen", chooseChannels: "Wählen Sie Ihre Newsletter", reviewLabel: "Wiederholung",
    fallbackLabel: "Englischer Inhalt: Eine geprüfte Übersetzung ist noch nicht verfügbar.", readMore: "Weiterlesen", emptySelection: "Wählen Sie vor der Bestätigung mindestens einen Newsletter aus.", backHome: "Zur Startseite",
  },
  ar: {
    emailLabel: "البريد الإلكتروني", emailPlaceholder: "you@example.com", submit: "اشتراك", submitting: "جارٍ إرسال رسالة التأكيد…",
    alreadySubscribed: "الاشتراك في «{channel}» مؤكد بالفعل لهذا العنوان.", invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
    notConfigured: "الاشتراكات غير متاحة مؤقتًا. يرجى المحاولة لاحقًا.", error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
    privacyNote: "أكّد بريدك الإلكتروني قبل تلقي التحديثات. يمكنك إلغاء اشتراك كل نشرة في أي وقت.",
    pendingConfirmation: "تحقق من بريدك الوارد لتأكيد الاشتراك. لن يبدأ الإرسال إلا بعد التأكيد.",
    rateLimited: "طلبات كثيرة جدًا. يرجى الانتظار بضع دقائق قبل المحاولة مجددًا.", confirmationFailed: "تعذّر إرسال رسالة التأكيد. يرجى المحاولة لاحقًا.",
    confirmTitle: "أكّد اشتراكك في النشرة", confirmMessage: "يرجى تأكيد رغبتك في تلقي «{channel}». تنتهي صلاحية هذا الرابط خلال 48 ساعة.",
    confirmAction: "تأكيد الاشتراك", confirmSuccess: "تم تأكيد اشتراكك في «{channel}».",
    confirmExpired: "انتهت صلاحية رابط التأكيد. اشترك مجددًا للحصول على رابط جديد صالح لمدة 48 ساعة.", confirmInvalid: "رابط التأكيد غير صالح. يرجى طلب رابط جديد.",
    unsubscribeTitle: "إلغاء الاشتراك في هذه النشرة", unsubscribeMessage: "هل تريد إيقاف تلقي «{channel}»؟ ستبقى اشتراكاتك الأخرى فعّالة.",
    unsubscribeAction: "إلغاء الاشتراك", unsubscribeSuccess: "تم إلغاء اشتراكك في «{channel}».",
    newsLabel: "أخبار الأبحاث", academyLabel: "دروس الأكاديمية", chooseChannels: "اختر نشراتك", reviewLabel: "مراجعة",
    fallbackLabel: "المحتوى باللغة الإنجليزية؛ لا تتوفر ترجمة مُراجَعة بعد.", readMore: "اقرأ المزيد", emptySelection: "اختر نشرة واحدة على الأقل قبل التأكيد.", backHome: "العودة إلى الرئيسية",
  },
  ko: {
    emailLabel: "이메일 주소", emailPlaceholder: "you@example.com", submit: "구독 신청", submitting: "확인 이메일을 보내는 중…",
    alreadySubscribed: "이 주소는 이미 ‘{channel}’ 구독이 확인되었습니다.", invalidEmail: "올바른 이메일 주소를 입력해 주세요.",
    notConfigured: "구독 서비스를 일시적으로 이용할 수 없습니다. 나중에 다시 시도해 주세요.", error: "오류가 발생했습니다. 다시 시도해 주세요.",
    privacyNote: "이메일 확인 후 소식을 보내 드립니다. 각 뉴스레터의 구독은 언제든 따로 해지할 수 있습니다.",
    pendingConfirmation: "받은편지함에서 구독을 확인해 주세요. 확인 후에만 발송을 시작합니다.",
    rateLimited: "요청이 너무 많습니다. 몇 분 후 다시 시도해 주세요.", confirmationFailed: "확인 이메일을 보내지 못했습니다. 나중에 다시 시도해 주세요.",
    confirmTitle: "뉴스레터 구독을 확인해 주세요", confirmMessage: "‘{channel}’ 수신을 원하는지 확인해 주세요. 이 링크는 48시간 후 만료됩니다.",
    confirmAction: "구독 확인", confirmSuccess: "‘{channel}’ 구독이 확인되었습니다.",
    confirmExpired: "확인 링크가 만료되었습니다. 다시 구독을 신청하면 48시간 동안 유효한 새 링크를 받을 수 있습니다.", confirmInvalid: "확인 링크가 유효하지 않습니다. 새 링크를 요청해 주세요.",
    unsubscribeTitle: "이 뉴스레터 구독 해지", unsubscribeMessage: "‘{channel}’ 수신을 중단하시겠습니까? 다른 뉴스레터 구독은 유지됩니다.",
    unsubscribeAction: "구독 해지", unsubscribeSuccess: "‘{channel}’ 구독을 해지했습니다.",
    newsLabel: "연구 뉴스", academyLabel: "아카데미 수업", chooseChannels: "받을 뉴스레터 선택", reviewLabel: "복습",
    fallbackLabel: "영어 콘텐츠: 검토된 번역이 아직 없습니다.", readMore: "더 읽기", emptySelection: "확인하기 전에 뉴스레터를 하나 이상 선택해 주세요.", backHome: "홈으로 돌아가기",
  },
  ja: {
    emailLabel: "メールアドレス", emailPlaceholder: "you@example.com", submit: "購読を申し込む", submitting: "確認メールを送信中…",
    alreadySubscribed: "このアドレスの「{channel}」の購読は確認済みです。", invalidEmail: "有効なメールアドレスを入力してください。",
    notConfigured: "現在、購読サービスをご利用いただけません。後ほどお試しください。", error: "エラーが発生しました。もう一度お試しください。",
    privacyNote: "メールでの確認後に配信を開始します。各ニュースレターはいつでも個別に解除できます。",
    pendingConfirmation: "受信トレイで購読を確認してください。確認後にのみ配信を開始します。",
    rateLimited: "リクエストが多すぎます。数分待ってからもう一度お試しください。", confirmationFailed: "確認メールを送信できませんでした。後ほどお試しください。",
    confirmTitle: "ニュースレターの購読を確認", confirmMessage: "「{channel}」の受信を希望することを確認してください。このリンクは48時間後に失効します。",
    confirmAction: "購読を確認する", confirmSuccess: "「{channel}」の購読が確認されました。",
    confirmExpired: "確認リンクの有効期限が切れています。再度申し込むと、48時間有効な新しいリンクが届きます。", confirmInvalid: "確認リンクが無効です。新しいリンクをリクエストしてください。",
    unsubscribeTitle: "このニュースレターの購読を解除", unsubscribeMessage: "「{channel}」の配信を停止しますか？他のニュースレターの購読は継続します。",
    unsubscribeAction: "購読を解除する", unsubscribeSuccess: "「{channel}」の購読を解除しました。",
    newsLabel: "研究ニュース", academyLabel: "アカデミーのレッスン", chooseChannels: "ニュースレターを選ぶ", reviewLabel: "復習",
    fallbackLabel: "英語のコンテンツ：確認済みの翻訳はまだありません。", readMore: "続きを読む", emptySelection: "確認する前にニュースレターを1つ以上選んでください。", backHome: "ホームに戻る",
  },
  hi: {
    emailLabel: "ईमेल पता", emailPlaceholder: "you@example.com", submit: "सदस्यता लें", submitting: "पुष्टि ईमेल भेज रहे हैं…",
    alreadySubscribed: "इस पते के लिए ‘{channel}’ की सदस्यता पहले ही पुष्ट है।", invalidEmail: "कृपया मान्य ईमेल पता दर्ज करें।",
    notConfigured: "सदस्यता सेवा अभी उपलब्ध नहीं है। कृपया बाद में प्रयास करें।", error: "कोई त्रुटि हुई। कृपया फिर प्रयास करें।",
    privacyNote: "अपडेट पाने से पहले ईमेल से पुष्टि करें। आप किसी भी समाचार पत्र की सदस्यता कभी भी अलग से रद्द कर सकते हैं।",
    pendingConfirmation: "सदस्यता की पुष्टि के लिए अपना इनबॉक्स देखें। पुष्टि के बाद ही अपडेट भेजे जाएँगे।",
    rateLimited: "बहुत अधिक अनुरोध आए हैं। फिर प्रयास करने से पहले कुछ मिनट प्रतीक्षा करें।", confirmationFailed: "पुष्टि ईमेल नहीं भेजा जा सका। कृपया बाद में प्रयास करें।",
    confirmTitle: "समाचार पत्र की सदस्यता की पुष्टि करें", confirmMessage: "कृपया पुष्टि करें कि आप ‘{channel}’ प्राप्त करना चाहते हैं। यह लिंक 48 घंटे में समाप्त हो जाएगा।",
    confirmAction: "सदस्यता की पुष्टि करें", confirmSuccess: "‘{channel}’ की आपकी सदस्यता पुष्ट हो गई है।",
    confirmExpired: "यह पुष्टि लिंक समाप्त हो गया है। 48 घंटे तक मान्य नया लिंक पाने के लिए फिर सदस्यता लें।", confirmInvalid: "यह पुष्टि लिंक अमान्य है। कृपया नया लिंक माँगें।",
    unsubscribeTitle: "इस समाचार पत्र की सदस्यता रद्द करें", unsubscribeMessage: "क्या ‘{channel}’ पाना बंद करना चाहते हैं? आपकी अन्य सदस्यताएँ सक्रिय रहेंगी।",
    unsubscribeAction: "सदस्यता रद्द करें", unsubscribeSuccess: "आपने ‘{channel}’ की सदस्यता रद्द कर दी है।",
    newsLabel: "शोध समाचार", academyLabel: "अकादमी के पाठ", chooseChannels: "अपने समाचार पत्र चुनें", reviewLabel: "पुनरावलोकन",
    fallbackLabel: "अंग्रेज़ी सामग्री: समीक्षित अनुवाद अभी उपलब्ध नहीं है।", readMore: "और पढ़ें", emptySelection: "पुष्टि से पहले कम से कम एक समाचार पत्र चुनें।", backHome: "मुखपृष्ठ पर लौटें",
  },
  ru: {
    emailLabel: "Электронная почта", emailPlaceholder: "you@example.com", submit: "Подписаться", submitting: "Отправляем подтверждение…",
    alreadySubscribed: "Для этого адреса подписка на «{channel}» уже подтверждена.", invalidEmail: "Введите действительный адрес электронной почты.",
    notConfigured: "Подписка временно недоступна. Попробуйте позже.", error: "Произошла ошибка. Попробуйте ещё раз.",
    privacyNote: "Подтвердите адрес почты, прежде чем получать письма. От каждой рассылки можно отписаться отдельно в любое время.",
    pendingConfirmation: "Проверьте почту, чтобы подтвердить подписку. Отправка начнётся только после подтверждения.",
    rateLimited: "Слишком много запросов. Подождите несколько минут и попробуйте снова.", confirmationFailed: "Не удалось отправить письмо с подтверждением. Попробуйте позже.",
    confirmTitle: "Подтвердите подписку на рассылку", confirmMessage: "Подтвердите, что хотите получать «{channel}». Ссылка действительна 48 часов.",
    confirmAction: "Подтвердить подписку", confirmSuccess: "Ваша подписка на «{channel}» подтверждена.",
    confirmExpired: "Срок действия ссылки истёк. Подпишитесь снова, чтобы получить новую ссылку на 48 часов.", confirmInvalid: "Ссылка для подтверждения недействительна. Запросите новую.",
    unsubscribeTitle: "Отписаться от этой рассылки", unsubscribeMessage: "Перестать получать «{channel}»? Другие ваши подписки останутся активными.",
    unsubscribeAction: "Отписаться", unsubscribeSuccess: "Вы отписались от рассылки «{channel}».",
    newsLabel: "Новости исследований", academyLabel: "Уроки Академии", chooseChannels: "Выберите рассылки", reviewLabel: "Повторение",
    fallbackLabel: "Материал на английском: проверенный перевод пока недоступен.", readMore: "Читать далее", emptySelection: "Перед подтверждением выберите хотя бы одну рассылку.", backHome: "На главную",
  },
  id: {
    emailLabel: "Alamat email", emailPlaceholder: "you@example.com", submit: "Berlangganan", submitting: "Mengirim konfirmasi…",
    alreadySubscribed: "Alamat ini sudah dikonfirmasi untuk berlangganan ‘{channel}’.", invalidEmail: "Masukkan alamat email yang valid.",
    notConfigured: "Layanan langganan sementara tidak tersedia. Silakan coba lagi nanti.", error: "Terjadi kesalahan. Silakan coba lagi.",
    privacyNote: "Konfirmasikan email sebelum menerima pembaruan. Anda dapat berhenti berlangganan setiap buletin secara terpisah kapan saja.",
    pendingConfirmation: "Periksa kotak masuk untuk mengonfirmasi langganan. Pengiriman dimulai hanya setelah konfirmasi.",
    rateLimited: "Terlalu banyak permintaan. Tunggu beberapa menit sebelum mencoba lagi.", confirmationFailed: "Email konfirmasi tidak dapat dikirim. Silakan coba lagi nanti.",
    confirmTitle: "Konfirmasikan langganan buletin Anda", confirmMessage: "Konfirmasikan bahwa Anda ingin menerima ‘{channel}’. Tautan ini berlaku selama 48 jam.",
    confirmAction: "Konfirmasikan langganan", confirmSuccess: "Langganan ‘{channel}’ Anda telah dikonfirmasi.",
    confirmExpired: "Tautan konfirmasi ini telah kedaluwarsa. Daftar lagi untuk menerima tautan baru yang berlaku 48 jam.", confirmInvalid: "Tautan konfirmasi ini tidak valid. Silakan minta tautan baru.",
    unsubscribeTitle: "Berhenti berlangganan buletin ini", unsubscribeMessage: "Berhenti menerima ‘{channel}’? Langganan Anda yang lain akan tetap aktif.",
    unsubscribeAction: "Berhenti berlangganan", unsubscribeSuccess: "Anda telah berhenti berlangganan ‘{channel}’.",
    newsLabel: "Berita penelitian", academyLabel: "Pelajaran Akademi", chooseChannels: "Pilih buletin Anda", reviewLabel: "Ulasan ulang",
    fallbackLabel: "Konten berbahasa Inggris: terjemahan yang ditinjau belum tersedia.", readMore: "Baca selengkapnya", emptySelection: "Pilih setidaknya satu buletin sebelum mengonfirmasi.", backHome: "Kembali ke beranda",
  },
  bn: {
    emailLabel: "ইমেইল ঠিকানা", emailPlaceholder: "you@example.com", submit: "সাবস্ক্রাইব করুন", submitting: "নিশ্চিতকরণ ইমেইল পাঠানো হচ্ছে…",
    alreadySubscribed: "এই ঠিকানার জন্য ‘{channel}’ সাবস্ক্রিপশন ইতিমধ্যে নিশ্চিত হয়েছে।", invalidEmail: "একটি বৈধ ইমেইল ঠিকানা লিখুন।",
    notConfigured: "সাবস্ক্রিপশন পরিষেবা সাময়িকভাবে অনুপলব্ধ। পরে আবার চেষ্টা করুন।", error: "একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।",
    privacyNote: "আপডেট পাওয়ার আগে ইমেইলে নিশ্চিত করুন। যেকোনো সময় প্রতিটি নিউজলেটার আলাদাভাবে বাতিল করতে পারেন।",
    pendingConfirmation: "সাবস্ক্রিপশন নিশ্চিত করতে আপনার ইনবক্স দেখুন। নিশ্চিত করার পরেই আপডেট পাঠানো শুরু হবে।",
    rateLimited: "অনেক বেশি অনুরোধ এসেছে। আবার চেষ্টা করার আগে কয়েক মিনিট অপেক্ষা করুন।", confirmationFailed: "নিশ্চিতকরণ ইমেইল পাঠানো যায়নি। পরে আবার চেষ্টা করুন।",
    confirmTitle: "আপনার নিউজলেটার সাবস্ক্রিপশন নিশ্চিত করুন", confirmMessage: "আপনি ‘{channel}’ পেতে চান কি না নিশ্চিত করুন। এই লিংকের মেয়াদ 48 ঘণ্টা।",
    confirmAction: "সাবস্ক্রিপশন নিশ্চিত করুন", confirmSuccess: "আপনার ‘{channel}’ সাবস্ক্রিপশন নিশ্চিত হয়েছে।",
    confirmExpired: "এই নিশ্চিতকরণ লিংকের মেয়াদ শেষ হয়েছে। 48 ঘণ্টা কার্যকর নতুন লিংক পেতে আবার সাবস্ক্রাইব করুন।", confirmInvalid: "এই নিশ্চিতকরণ লিংকটি বৈধ নয়। নতুন লিংকের অনুরোধ করুন।",
    unsubscribeTitle: "এই নিউজলেটারের সাবস্ক্রিপশন বাতিল করুন", unsubscribeMessage: "‘{channel}’ পাওয়া বন্ধ করতে চান? আপনার অন্য সাবস্ক্রিপশনগুলো সক্রিয় থাকবে।",
    unsubscribeAction: "সাবস্ক্রিপশন বাতিল করুন", unsubscribeSuccess: "আপনি ‘{channel}’ সাবস্ক্রিপশন বাতিল করেছেন।",
    newsLabel: "গবেষণার খবর", academyLabel: "একাডেমির পাঠ", chooseChannels: "আপনার নিউজলেটার বেছে নিন", reviewLabel: "পুনরালোচনা",
    fallbackLabel: "ইংরেজি বিষয়বস্তু: পর্যালোচিত অনুবাদ এখনো পাওয়া যায়নি।", readMore: "আরও পড়ুন", emptySelection: "নিশ্চিত করার আগে অন্তত একটি নিউজলেটার বেছে নিন।", backHome: "হোমপেজে ফিরুন",
  },
};

// Used links and legacy target sets must not imply current enrollment in a
// guessed channel or promise that an unverified subscription remains active.
const scopeCopy: Record<Locale, ScopeCopy> = {
  en: {
    confirmUsed: "This link has already been used. It has not changed your current subscriptions.",
    confirmSuccessUnknown: "Your subscription request has been confirmed.",
    unsubscribeMultipleMessage: "Stop receiving all of the newsletters listed below?",
    unsubscribeUnknownMessage: "Unsubscribe from the newsletter subscriptions associated with this link?",
    unsubscribeSuccessUnknown: "The unsubscribe request for this link is complete.",
  },
  "zh-hant": {
    confirmUsed: "此連結已被使用，並未更改你目前的訂閱。",
    confirmSuccessUnknown: "已確認你的訂閱申請。",
    unsubscribeMultipleMessage: "停止接收下列所有電子報？",
    unsubscribeUnknownMessage: "取消與此連結相關的電子報訂閱？",
    unsubscribeSuccessUnknown: "此連結的取消訂閱請求已完成。",
  },
  "zh-hans": {
    confirmUsed: "此链接已被使用，并未更改你当前的订阅。",
    confirmSuccessUnknown: "已确认你的订阅申请。",
    unsubscribeMultipleMessage: "停止接收下列所有电子报？",
    unsubscribeUnknownMessage: "取消与此链接相关的电子报订阅？",
    unsubscribeSuccessUnknown: "此链接的取消订阅请求已完成。",
  },
  es: {
    confirmUsed: "Este enlace ya se ha utilizado. No ha cambiado tus suscripciones actuales.",
    confirmSuccessUnknown: "Tu solicitud de suscripción ha sido confirmada.",
    unsubscribeMultipleMessage: "¿Dejar de recibir todos los boletines que se indican a continuación?",
    unsubscribeUnknownMessage: "¿Cancelar las suscripciones a los boletines asociados a este enlace?",
    unsubscribeSuccessUnknown: "La solicitud de cancelación de suscripción de este enlace se ha completado.",
  },
  fr: {
    confirmUsed: "Ce lien a déjà été utilisé. Il n’a pas modifié vos abonnements actuels.",
    confirmSuccessUnknown: "Votre demande d’abonnement a été confirmée.",
    unsubscribeMultipleMessage: "Ne plus recevoir toutes les lettres d’information ci-dessous ?",
    unsubscribeUnknownMessage: "Annuler les abonnements aux lettres d’information associés à ce lien ?",
    unsubscribeSuccessUnknown: "La demande de désabonnement associée à ce lien est terminée.",
  },
  pt: {
    confirmUsed: "Este link já foi utilizado. Não alterou as suas subscrições atuais.",
    confirmSuccessUnknown: "O seu pedido de subscrição foi confirmado.",
    unsubscribeMultipleMessage: "Deixar de receber todos os boletins listados abaixo?",
    unsubscribeUnknownMessage: "Cancelar as subscrições dos boletins associados a este link?",
    unsubscribeSuccessUnknown: "O pedido de cancelamento de subscrição deste link foi concluído.",
  },
  de: {
    confirmUsed: "Dieser Link wurde bereits verwendet. Ihre aktuellen Abonnements wurden dadurch nicht geändert.",
    confirmSuccessUnknown: "Ihre Abonnementanfrage wurde bestätigt.",
    unsubscribeMultipleMessage: "Alle unten aufgeführten Newsletter abbestellen?",
    unsubscribeUnknownMessage: "Die mit diesem Link verbundenen Newsletter-Abonnements kündigen?",
    unsubscribeSuccessUnknown: "Die Abmeldung über diesen Link ist abgeschlossen.",
  },
  ar: {
    confirmUsed: "لقد استُخدم هذا الرابط من قبل. لم يغيّر اشتراكاتك الحالية.",
    confirmSuccessUnknown: "تم تأكيد طلب اشتراكك.",
    unsubscribeMultipleMessage: "هل تريد إيقاف تلقي جميع النشرات الإخبارية المدرجة أدناه؟",
    unsubscribeUnknownMessage: "هل تريد إلغاء اشتراكات النشرات الإخبارية المرتبطة بهذا الرابط؟",
    unsubscribeSuccessUnknown: "اكتمل طلب إلغاء الاشتراك المرتبط بهذا الرابط.",
  },
  ko: {
    confirmUsed: "이 링크는 이미 사용되었습니다. 현재 구독 상태는 변경되지 않았습니다.",
    confirmSuccessUnknown: "구독 요청이 확인되었습니다.",
    unsubscribeMultipleMessage: "아래에 나열된 모든 뉴스레터 수신을 중단하시겠습니까?",
    unsubscribeUnknownMessage: "이 링크와 연결된 뉴스레터 구독을 취소하시겠습니까?",
    unsubscribeSuccessUnknown: "이 링크의 구독 취소 요청이 완료되었습니다.",
  },
  ja: {
    confirmUsed: "このリンクはすでに使用されています。現在の購読設定は変更されていません。",
    confirmSuccessUnknown: "購読リクエストが確認されました。",
    unsubscribeMultipleMessage: "以下のすべてのニュースレターの受信を停止しますか？",
    unsubscribeUnknownMessage: "このリンクに関連付けられたニュースレターの購読を解除しますか？",
    unsubscribeSuccessUnknown: "このリンクの購読解除リクエストが完了しました。",
  },
  hi: {
    confirmUsed: "इस लिंक का पहले ही उपयोग किया जा चुका है। इससे आपकी वर्तमान सदस्यताओं में कोई बदलाव नहीं हुआ है।",
    confirmSuccessUnknown: "आपके सदस्यता अनुरोध की पुष्टि हो गई है।",
    unsubscribeMultipleMessage: "क्या आप नीचे दिए गए सभी न्यूज़लेटर प्राप्त करना बंद करना चाहते हैं?",
    unsubscribeUnknownMessage: "क्या आप इस लिंक से जुड़ी न्यूज़लेटर सदस्यताएँ रद्द करना चाहते हैं?",
    unsubscribeSuccessUnknown: "इस लिंक के लिए सदस्यता रद्द करने का अनुरोध पूरा हो गया है।",
  },
  ru: {
    confirmUsed: "Эта ссылка уже использована. Она не изменила ваши текущие подписки.",
    confirmSuccessUnknown: "Ваш запрос на подписку подтверждён.",
    unsubscribeMultipleMessage: "Отписаться от всех перечисленных ниже рассылок?",
    unsubscribeUnknownMessage: "Отменить подписки на рассылки, связанные с этой ссылкой?",
    unsubscribeSuccessUnknown: "Запрос на отмену подписки по этой ссылке выполнен.",
  },
  id: {
    confirmUsed: "Tautan ini sudah digunakan. Tautan ini tidak mengubah langganan Anda saat ini.",
    confirmSuccessUnknown: "Permintaan berlangganan Anda telah dikonfirmasi.",
    unsubscribeMultipleMessage: "Berhenti menerima semua buletin yang tercantum di bawah ini?",
    unsubscribeUnknownMessage: "Batalkan langganan buletin yang terkait dengan tautan ini?",
    unsubscribeSuccessUnknown: "Permintaan berhenti berlangganan untuk tautan ini telah selesai.",
  },
  bn: {
    confirmUsed: "এই লিংকটি আগেই ব্যবহার করা হয়েছে। এটি আপনার বর্তমান সাবস্ক্রিপশনগুলো পরিবর্তন করেনি।",
    confirmSuccessUnknown: "আপনার সাবস্ক্রিপশনের অনুরোধ নিশ্চিত করা হয়েছে।",
    unsubscribeMultipleMessage: "নিচে তালিকাভুক্ত সব নিউজলেটার পাওয়া বন্ধ করবেন?",
    unsubscribeUnknownMessage: "এই লিংকের সঙ্গে যুক্ত নিউজলেটার সাবস্ক্রিপশনগুলো বাতিল করবেন?",
    unsubscribeSuccessUnknown: "এই লিংকের সাবস্ক্রিপশন বাতিলের অনুরোধ সম্পন্ন হয়েছে।",
  },
};

const landing: Record<Locale, Record<NewsletterChannel, LandingCopy>> = {
  en: {
    news: { eyebrow: "Research in your inbox", title: "Get the latest AIED research news", description: "We check daily and send only when there is new research news, with up to five items per email." },
    academy: { eyebrow: "Keep learning", title: "Build your AI and education knowledge", description: "Receive two curated lessons daily: one on AI knowledge and one on educational theory, selected from new and existing lessons." },
  },
  "zh-hant": {
    news: { eyebrow: "研究直送收件匣", title: "接收最新 AIED 研究新聞", description: "我們每天檢查更新，僅在有新研究新聞時發送電郵，每封最多五則。" },
    academy: { eyebrow: "持續學習", title: "累積人工智能與教育知識", description: "每天接收兩課精選內容：一課人工智能知識、一課教育理論，從新課程及現有課程中選取。" },
  },
  "zh-hans": {
    news: { eyebrow: "研究直达收件箱", title: "接收最新 AIED 研究新闻", description: "我们每天检查更新，仅在有新研究新闻时发送邮件，每封最多五则。" },
    academy: { eyebrow: "持续学习", title: "积累人工智能与教育知识", description: "每天接收两课精选内容：一课人工智能知识、一课教育理论，从新课程及现有课程中选取。" },
  },
  es: {
    news: { eyebrow: "Investigación en tu correo", title: "Recibe las últimas noticias de investigación en AIED", description: "Revisamos las novedades a diario y enviamos correos solo cuando hay nuevas noticias de investigación, con un máximo de cinco por envío." },
    academy: { eyebrow: "Sigue aprendiendo", title: "Amplía tus conocimientos de IA y educación", description: "Recibe dos lecciones seleccionadas cada día: una sobre conocimientos de IA y otra sobre teoría educativa, elegidas entre lecciones nuevas y existentes." },
  },
  fr: {
    news: { eyebrow: "La recherche dans votre messagerie", title: "Recevez les dernières actualités de la recherche en AIED", description: "Nous vérifions les nouveautés chaque jour et envoyons un e-mail uniquement lorsque de nouvelles actualités de recherche sont disponibles, avec cinq articles au maximum." },
    academy: { eyebrow: "Continuez à apprendre", title: "Enrichissez vos connaissances en IA et en éducation", description: "Recevez chaque jour deux leçons sélectionnées : une sur les connaissances en IA et une sur la théorie de l’éducation, parmi les leçons nouvelles et existantes." },
  },
  pt: {
    news: { eyebrow: "Investigação na sua caixa de entrada", title: "Receba as últimas notícias de investigação em AIED", description: "Verificamos as novidades diariamente e enviamos e-mails apenas quando há novas notícias de investigação, até cinco por envio." },
    academy: { eyebrow: "Continue a aprender", title: "Aprofunde os seus conhecimentos de IA e educação", description: "Receba diariamente duas lições selecionadas: uma sobre conhecimentos de IA e outra sobre teoria da educação, escolhidas entre lições novas e existentes." },
  },
  de: {
    news: { eyebrow: "Forschung in Ihrem Postfach", title: "Erhalten Sie die neuesten AIED-Forschungsnachrichten", description: "Wir prüfen täglich auf Neuigkeiten und senden nur bei neuen Forschungsnachrichten eine E-Mail mit höchstens fünf Beiträgen." },
    academy: { eyebrow: "Weiterlernen", title: "Erweitern Sie Ihr Wissen über KI und Bildung", description: "Erhalten Sie täglich zwei ausgewählte Lektionen: eine zu KI-Wissen und eine zur Bildungstheorie, ausgewählt aus neuen und bestehenden Lektionen." },
  },
  ar: {
    news: { eyebrow: "الأبحاث في بريدك", title: "تلقَّ أحدث أخبار أبحاث الذكاء الاصطناعي في التعليم", description: "نتحقق يوميًا من المستجدات، ونرسل فقط عند توفر أخبار بحثية جديدة، بحد أقصى خمسة أخبار في الرسالة." },
    academy: { eyebrow: "واصل التعلّم", title: "وسّع معرفتك بالذكاء الاصطناعي والتعليم", description: "تلقَّ درسين مختارين يوميًا: أحدهما في معرفة الذكاء الاصطناعي والآخر في النظرية التعليمية، من الدروس الجديدة والحالية." },
  },
  ko: {
    news: { eyebrow: "이메일로 만나는 연구", title: "최신 AIED 연구 뉴스를 받아보세요", description: "매일 업데이트를 확인하며 새 연구 뉴스가 있을 때만 이메일을 보냅니다. 한 번에 최대 다섯 개의 소식을 전합니다." },
    academy: { eyebrow: "배움을 이어가세요", title: "AI와 교육 지식을 쌓으세요", description: "신규 및 기존 수업에서 엄선한 두 수업을 매일 받아보세요. AI 지식 수업 하나와 교육 이론 수업 하나를 전합니다." },
  },
  ja: {
    news: { eyebrow: "研究をメールでお届け", title: "最新のAIED研究ニュースを受け取る", description: "毎日更新を確認し、新しい研究ニュースがある場合にのみ、1通につき最大5件をお届けします。" },
    academy: { eyebrow: "学びを続ける", title: "AIと教育の知識を深める", description: "新規および既存のレッスンから厳選した2つを毎日お届けします。AI知識を1つ、教育理論を1つ学べます。" },
  },
  hi: {
    news: { eyebrow: "शोध आपके इनबॉक्स में", title: "AIED के नवीनतम शोध समाचार पाएँ", description: "हम हर दिन अपडेट जाँचते हैं और नए शोध समाचार होने पर ही ईमेल भेजते हैं, हर ईमेल में अधिकतम पाँच समाचार।" },
    academy: { eyebrow: "सीखना जारी रखें", title: "AI और शिक्षा का ज्ञान बढ़ाएँ", description: "हर दिन दो चुनिंदा पाठ पाएँ: एक AI ज्ञान पर और एक शिक्षा सिद्धांत पर, नए और मौजूदा पाठों में से चुने हुए।" },
  },
  ru: {
    news: { eyebrow: "Исследования в вашей почте", title: "Получайте последние новости исследований AIED", description: "Мы проверяем обновления ежедневно и отправляем письма только при появлении новых исследовательских новостей — до пяти материалов в письме." },
    academy: { eyebrow: "Продолжайте учиться", title: "Расширяйте знания об ИИ и образовании", description: "Получайте ежедневно два отобранных урока: один о знаниях в области ИИ и один о теории образования, из числа новых и существующих уроков." },
  },
  id: {
    news: { eyebrow: "Penelitian di kotak masuk Anda", title: "Dapatkan berita penelitian AIED terbaru", description: "Kami memeriksa pembaruan setiap hari dan hanya mengirim jika ada berita penelitian baru, dengan maksimal lima berita per email." },
    academy: { eyebrow: "Terus belajar", title: "Perluas pengetahuan AI dan pendidikan Anda", description: "Terima dua pelajaran pilihan setiap hari: satu tentang pengetahuan AI dan satu tentang teori pendidikan, dipilih dari pelajaran baru dan yang sudah ada." },
  },
  bn: {
    news: { eyebrow: "আপনার ইনবক্সে গবেষণা", title: "AIED গবেষণার সর্বশেষ খবর পান", description: "আমরা প্রতিদিন আপডেট দেখি এবং নতুন গবেষণার খবর থাকলেই ইমেইল পাঠাই, প্রতি ইমেইলে সর্বোচ্চ পাঁচটি খবর।" },
    academy: { eyebrow: "শেখা চালিয়ে যান", title: "AI ও শিক্ষা সম্পর্কে জ্ঞান বাড়ান", description: "প্রতিদিন দুটি বাছাই করা পাঠ পান: একটি AI জ্ঞান এবং একটি শিক্ষা তত্ত্ব নিয়ে, নতুন ও বিদ্যমান পাঠ থেকে নির্বাচিত।" },
  },
};

export function getNewsletterCopy(locale: Locale, channel: NewsletterChannel): NewsletterCopy {
  const common = shared[locale];
  const channelLabel = channel === "news" ? common.newsLabel : common.academyLabel;
  const forChannel = (value: string) => value.replace("{channel}", channelLabel);
  return {
    ...common,
    ...scopeCopy[locale],
    ...landing[locale][channel],
    success: common.pendingConfirmation,
    alreadySubscribed: forChannel(common.alreadySubscribed),
    confirmMessage: forChannel(common.confirmMessage),
    confirmSuccess: forChannel(common.confirmSuccess),
    unsubscribeMessage: forChannel(common.unsubscribeMessage),
    unsubscribeSuccess: forChannel(common.unsubscribeSuccess),
  };
}
