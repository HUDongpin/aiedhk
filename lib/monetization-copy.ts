import type { Locale } from "@/lib/i18n";

interface MonetizationCopy {
  supportLabel: string; supportTitle: string; supportBody: string;
  adLabel: string; privacyTitle: string; disclosureTitle: string; privacyChoices: string;
  affiliateLabel: string; gammaDescription: string; gammaLimitations: string; affiliateCta: string; affiliateDisclosure: string;
  policyLanguageNotice: string; backHome: string; updated: string;
}

export const monetizationCopy: Record<Locale, MonetizationCopy> = {
  en: {
    supportLabel: "Support us", supportTitle: "Help keep AIED knowledge open", supportBody: "If this helped you understand AI in education, buy AIED.hk a coffee to support free research explainers and multilingual learning resources.",
    adLabel: "Advertisement", privacyTitle: "Privacy policy", disclosureTitle: "Funding & editorial independence", privacyChoices: "Privacy choices",
    affiliateLabel: "Partner tool", gammaDescription: "Gamma helps turn an outline into a presentation draft. It may suit educators preparing a first version of a lesson presentation.", gammaLimitations: "Check every claim, image, licence and teaching activity before classroom use. Generated slides still need your review.", affiliateCta: "Explore Gamma", affiliateDisclosure: "We may earn a commission if you purchase through this link. Our editorial choices remain independent.",
    policyLanguageNotice: "This policy is currently available in English and Chinese. The English text follows.", backHome: "Back to home", updated: "Updated",
  },
  "zh-hant": {
    supportLabel: "支持我們", supportTitle: "支持 AI 教育知識免費開放", supportBody: "如果這篇內容幫助你理解 AI 教育的新進展，歡迎請 AIED.hk 喝杯咖啡，支持免費研究解讀與多語言學習資源。",
    adLabel: "廣告", privacyTitle: "私隱政策", disclosureTitle: "收入來源與編輯獨立性", privacyChoices: "私隱選擇",
    affiliateLabel: "合作工具", gammaDescription: "Gamma 可協助把大綱轉成簡報初稿，適合教師準備課堂簡報的第一個版本。", gammaLimitations: "課堂使用前，請核對每項論述、圖片、授權與教學活動。生成的簡報仍需人工審閱。", affiliateCta: "了解 Gamma", affiliateDisclosure: "透過此連結購買，我們可能獲得佣金。編輯選擇保持獨立。",
    policyLanguageNotice: "本政策目前提供英文及中文版本。以下為英文內容。", backHome: "返回首頁", updated: "更新日期",
  },
  "zh-hans": {
    supportLabel: "支持我们", supportTitle: "支持 AI 教育知识免费开放", supportBody: "如果这篇内容帮助你理解 AI 教育的新进展，欢迎请 AIED.hk 喝杯咖啡，支持免费研究解读与多语言学习资源。",
    adLabel: "广告", privacyTitle: "隐私政策", disclosureTitle: "收入来源与编辑独立性", privacyChoices: "隐私选择",
    affiliateLabel: "合作工具", gammaDescription: "Gamma 可协助把大纲转成演示文稿初稿，适合教师准备课堂演示的第一个版本。", gammaLimitations: "课堂使用前，请核对每项论述、图片、授权与教学活动。生成的演示文稿仍需人工审阅。", affiliateCta: "了解 Gamma", affiliateDisclosure: "通过此链接购买，我们可能获得佣金。编辑选择保持独立。",
    policyLanguageNotice: "本政策目前提供英文及中文版本。以下为英文内容。", backHome: "返回首页", updated: "更新日期",
  },
  es: {
    supportLabel: "Apóyanos", supportTitle: "Ayuda a mantener abierto el conocimiento sobre IA educativa", supportBody: "Si este contenido te ayudó a comprender la IA en educación, invita a AIED.hk a un café para apoyar nuestros análisis gratuitos y recursos multilingües.",
    adLabel: "Publicidad", privacyTitle: "Política de privacidad", disclosureTitle: "Financiación e independencia editorial", privacyChoices: "Opciones de privacidad",
    affiliateLabel: "Herramienta asociada", gammaDescription: "Gamma ayuda a convertir un esquema en un borrador de presentación. Puede servir a docentes que preparan una primera versión para su clase.", gammaLimitations: "Revisa las afirmaciones, imágenes, licencias y actividades antes de usarlas en clase. Las diapositivas generadas requieren revisión.", affiliateCta: "Conocer Gamma", affiliateDisclosure: "Podemos recibir una comisión si compras mediante este enlace. Nuestras decisiones editoriales son independientes.",
    policyLanguageNotice: "Esta política está disponible en inglés y chino. A continuación se muestra el texto en inglés.", backHome: "Volver al inicio", updated: "Actualizado",
  },
  fr: {
    supportLabel: "Nous soutenir", supportTitle: "Pour un savoir ouvert sur l’IA en éducation", supportBody: "Si ce contenu vous a aidé à comprendre l’IA en éducation, offrez un café à AIED.hk pour soutenir nos analyses gratuites et ressources multilingues.",
    adLabel: "Publicité", privacyTitle: "Politique de confidentialité", disclosureTitle: "Financement et indépendance éditoriale", privacyChoices: "Choix de confidentialité",
    affiliateLabel: "Outil partenaire", gammaDescription: "Gamma aide à transformer un plan en ébauche de présentation. Il peut servir aux enseignants qui préparent une première version de leur cours.", gammaLimitations: "Vérifiez les affirmations, images, licences et activités avant leur utilisation en classe. Les diapositives générées nécessitent une relecture.", affiliateCta: "Découvrir Gamma", affiliateDisclosure: "Nous pouvons percevoir une commission si vous achetez via ce lien. Nos choix éditoriaux restent indépendants.",
    policyLanguageNotice: "Cette politique est disponible en anglais et en chinois. Le texte anglais figure ci-dessous.", backHome: "Retour à l’accueil", updated: "Mise à jour",
  },
  pt: {
    supportLabel: "Apoie-nos", supportTitle: "Ajude a manter aberto o conhecimento sobre IA na educação", supportBody: "Se este conteúdo ajudou você a entender a IA na educação, ofereça um café ao AIED.hk para apoiar análises gratuitas e recursos multilíngues.",
    adLabel: "Publicidade", privacyTitle: "Política de privacidade", disclosureTitle: "Financiamento e independência editorial", privacyChoices: "Opções de privacidade",
    affiliateLabel: "Ferramenta parceira", gammaDescription: "O Gamma ajuda a transformar um roteiro em um rascunho de apresentação. Pode servir a educadores que preparam a primeira versão de uma aula.", gammaLimitations: "Verifique afirmações, imagens, licenças e atividades antes do uso em sala. Os slides gerados ainda precisam de revisão.", affiliateCta: "Conheça o Gamma", affiliateDisclosure: "Podemos receber uma comissão se você comprar por este link. Nossas escolhas editoriais permanecem independentes.",
    policyLanguageNotice: "Esta política está disponível em inglês e chinês. O texto em inglês aparece abaixo.", backHome: "Voltar ao início", updated: "Atualizado",
  },
  de: {
    supportLabel: "Unterstützen", supportTitle: "Offenes Wissen über KI in der Bildung ermöglichen", supportBody: "Wenn dieser Beitrag Ihnen geholfen hat, KI in der Bildung zu verstehen, spendieren Sie AIED.hk einen Kaffee für kostenlose Forschungsübersichten und mehrsprachige Lernmaterialien.",
    adLabel: "Werbung", privacyTitle: "Datenschutzerklärung", disclosureTitle: "Finanzierung und redaktionelle Unabhängigkeit", privacyChoices: "Datenschutzeinstellungen",
    affiliateLabel: "Partnerwerkzeug", gammaDescription: "Gamma hilft, eine Gliederung in einen Präsentationsentwurf umzuwandeln. Das kann Lehrkräften beim ersten Entwurf einer Unterrichtspräsentation helfen.", gammaLimitations: "Prüfen Sie Aussagen, Bilder, Lizenzen und Aktivitäten vor dem Unterricht. Generierte Folien müssen überprüft werden.", affiliateCta: "Gamma entdecken", affiliateDisclosure: "Wenn Sie über diesen Link kaufen, erhalten wir möglicherweise eine Provision. Unsere redaktionellen Entscheidungen bleiben unabhängig.",
    policyLanguageNotice: "Diese Erklärung ist auf Englisch und Chinesisch verfügbar. Nachfolgend steht der englische Text.", backHome: "Zur Startseite", updated: "Aktualisiert",
  },
  ar: {
    supportLabel: "ادعمنا", supportTitle: "ساهم في إتاحة المعرفة حول الذكاء الاصطناعي في التعليم", supportBody: "إذا ساعدك هذا المحتوى على فهم الذكاء الاصطناعي في التعليم، يمكنك تقديم دعم لـ AIED.hk للمساهمة في الشروحات البحثية المجانية والموارد متعددة اللغات.",
    adLabel: "إعلان", privacyTitle: "سياسة الخصوصية", disclosureTitle: "التمويل والاستقلالية التحريرية", privacyChoices: "خيارات الخصوصية",
    affiliateLabel: "أداة شريكة", gammaDescription: "يساعد Gamma في تحويل مخطط إلى مسودة عرض تقديمي، وقد يناسب المعلمين عند إعداد نسخة أولى لعرض الدرس.", gammaLimitations: "تحقق من المعلومات والصور والتراخيص والأنشطة قبل استخدامها في الصف. تحتاج الشرائح المولدة إلى مراجعة بشرية.", affiliateCta: "استكشف Gamma", affiliateDisclosure: "قد نحصل على عمولة إذا اشتريت عبر هذا الرابط. تظل اختياراتنا التحريرية مستقلة.",
    policyLanguageNotice: "تتوفر هذه السياسة حالياً بالإنجليزية والصينية. يرد النص الإنجليزي أدناه.", backHome: "العودة إلى الرئيسية", updated: "آخر تحديث",
  },
  ko: {
    supportLabel: "후원하기", supportTitle: "AI 교육 지식의 무료 공개를 함께 지켜 주세요", supportBody: "이 글이 교육 분야의 AI를 이해하는 데 도움이 되었다면 AIED.hk에 커피 한 잔을 후원해 주세요. 무료 연구 해설과 다국어 학습 자료 제작에 도움이 됩니다.",
    adLabel: "광고", privacyTitle: "개인정보 처리방침", disclosureTitle: "수익 구조와 편집 독립성", privacyChoices: "개인정보 설정",
    affiliateLabel: "제휴 도구", gammaDescription: "Gamma는 개요를 프레젠테이션 초안으로 만드는 데 도움을 줍니다. 수업 발표 자료의 첫 초안을 준비하는 교사에게 유용할 수 있습니다.", gammaLimitations: "수업에 사용하기 전에 주장, 이미지, 이용 허가와 활동을 확인하세요. 생성된 슬라이드는 사람이 검토해야 합니다.", affiliateCta: "Gamma 살펴보기", affiliateDisclosure: "이 링크를 통해 구매하면 저희가 수수료를 받을 수 있습니다. 편집상의 선택은 독립적으로 이루어집니다.",
    policyLanguageNotice: "이 방침은 현재 영어와 중국어로 제공됩니다. 아래는 영어 원문입니다.", backHome: "홈으로", updated: "업데이트",
  },
  ja: {
    supportLabel: "支援する", supportTitle: "AI教育の知識を無料で届け続けるために", supportBody: "この記事が教育におけるAIの理解に役立ったら、AIED.hkにコーヒー一杯分のご支援を。無料の研究解説と多言語の学習資料を支えます。",
    adLabel: "広告", privacyTitle: "プライバシーポリシー", disclosureTitle: "収益源と編集の独立性", privacyChoices: "プライバシー設定",
    affiliateLabel: "提携ツール", gammaDescription: "Gammaは構成案をプレゼンテーションの下書きにする作業を支援します。授業用スライドの初稿を準備する教員に役立つ場合があります。", gammaLimitations: "授業で使う前に、記述、画像、利用許諾、活動内容を確認してください。生成されたスライドには人による見直しが必要です。", affiliateCta: "Gammaを見る", affiliateDisclosure: "このリンクから購入すると、当サイトが紹介料を受け取る場合があります。編集上の判断は独立しています。",
    policyLanguageNotice: "このポリシーは現在、英語と中国語で提供しています。以下は英語版です。", backHome: "ホームに戻る", updated: "更新日",
  },
  hi: {
    supportLabel: "सहयोग करें", supportTitle: "AI शिक्षा का ज्ञान सबके लिए खुला रखने में मदद करें", supportBody: "यदि इस लेख से शिक्षा में AI को समझने में मदद मिली, तो AIED.hk को एक कॉफ़ी का सहयोग दें। इससे निःशुल्क शोध व्याख्याएँ और बहुभाषी शिक्षण संसाधन जारी रखने में मदद मिलती है।",
    adLabel: "विज्ञापन", privacyTitle: "गोपनीयता नीति", disclosureTitle: "आय के स्रोत और संपादकीय स्वतंत्रता", privacyChoices: "गोपनीयता विकल्प",
    affiliateLabel: "साझेदार टूल", gammaDescription: "Gamma किसी रूपरेखा को प्रस्तुति के मसौदे में बदलने में मदद करता है। यह पाठ की प्रस्तुति का पहला मसौदा तैयार करने वाले शिक्षकों के लिए उपयोगी हो सकता है।", gammaLimitations: "कक्षा में उपयोग से पहले दावों, चित्रों, लाइसेंस और गतिविधियों की जाँच करें। बनाई गई स्लाइडों की मानवीय समीक्षा ज़रूरी है।", affiliateCta: "Gamma देखें", affiliateDisclosure: "इस लिंक से खरीदने पर हमें कमीशन मिल सकता है। हमारे संपादकीय निर्णय स्वतंत्र रहते हैं।",
    policyLanguageNotice: "यह नीति अभी अंग्रेज़ी और चीनी में उपलब्ध है। नीचे अंग्रेज़ी पाठ दिया गया है।", backHome: "मुखपृष्ठ पर वापस जाएँ", updated: "अद्यतन",
  },
  ru: {
    supportLabel: "Поддержать", supportTitle: "Помогите сохранить открытый доступ к знаниям об ИИ в образовании", supportBody: "Если этот материал помог вам понять ИИ в образовании, угостите AIED.hk чашкой кофе, поддержав бесплатные обзоры исследований и многоязычные учебные материалы.",
    adLabel: "Реклама", privacyTitle: "Политика конфиденциальности", disclosureTitle: "Финансирование и редакционная независимость", privacyChoices: "Настройки конфиденциальности",
    affiliateLabel: "Партнёрский инструмент", gammaDescription: "Gamma помогает превратить план в черновик презентации. Это может пригодиться преподавателям, готовящим первую версию презентации для урока.", gammaLimitations: "Перед использованием на уроке проверьте утверждения, изображения, лицензии и задания. Созданные слайды требуют проверки человеком.", affiliateCta: "Узнать о Gamma", affiliateDisclosure: "Мы можем получить комиссию при покупке по этой ссылке. Наши редакционные решения остаются независимыми.",
    policyLanguageNotice: "Эта политика доступна на английском и китайском языках. Ниже приведён английский текст.", backHome: "На главную", updated: "Обновлено",
  },
  id: {
    supportLabel: "Dukung kami", supportTitle: "Bantu menjaga pengetahuan AI pendidikan tetap terbuka", supportBody: "Jika artikel ini membantu Anda memahami AI dalam pendidikan, traktir AIED.hk secangkir kopi untuk mendukung ulasan riset gratis dan sumber belajar multibahasa.",
    adLabel: "Iklan", privacyTitle: "Kebijakan privasi", disclosureTitle: "Pendanaan dan independensi editorial", privacyChoices: "Pilihan privasi",
    affiliateLabel: "Alat mitra", gammaDescription: "Gamma membantu mengubah kerangka menjadi draf presentasi. Alat ini dapat membantu pendidik menyiapkan versi awal presentasi pelajaran.", gammaLimitations: "Periksa klaim, gambar, lisensi, dan aktivitas sebelum digunakan di kelas. Slide yang dihasilkan tetap perlu ditinjau manusia.", affiliateCta: "Jelajahi Gamma", affiliateDisclosure: "Kami mungkin menerima komisi jika Anda membeli melalui tautan ini. Pilihan editorial kami tetap independen.",
    policyLanguageNotice: "Kebijakan ini tersedia dalam bahasa Inggris dan Mandarin. Teks bahasa Inggris ditampilkan di bawah.", backHome: "Kembali ke beranda", updated: "Diperbarui",
  },
  bn: {
    supportLabel: "সহায়তা করুন", supportTitle: "AI শিক্ষার জ্ঞান সবার জন্য উন্মুক্ত রাখতে সাহায্য করুন", supportBody: "এই লেখা যদি শিক্ষায় AI বুঝতে সাহায্য করে, তাহলে AIED.hk-কে এক কাপ কফির সমমূল্যের সহায়তা দিন। এতে বিনামূল্যের গবেষণা ব্যাখ্যা ও বহুভাষিক শিক্ষাসামগ্রী চালিয়ে যেতে সাহায্য হবে।",
    adLabel: "বিজ্ঞাপন", privacyTitle: "গোপনীয়তা নীতি", disclosureTitle: "আয়ের উৎস ও সম্পাদকীয় স্বাধীনতা", privacyChoices: "গোপনীয়তার পছন্দ",
    affiliateLabel: "অংশীদার টুল", gammaDescription: "Gamma একটি রূপরেখা থেকে উপস্থাপনার খসড়া তৈরি করতে সাহায্য করে। পাঠের উপস্থাপনার প্রথম সংস্করণ তৈরি করা শিক্ষকদের কাজে লাগতে পারে।", gammaLimitations: "শ্রেণিকক্ষে ব্যবহারের আগে তথ্য, ছবি, লাইসেন্স ও কার্যক্রম যাচাই করুন। তৈরি করা স্লাইডে মানুষের পর্যালোচনা প্রয়োজন।", affiliateCta: "Gamma দেখুন", affiliateDisclosure: "এই লিঙ্কের মাধ্যমে কিনলে আমরা কমিশন পেতে পারি। আমাদের সম্পাদকীয় সিদ্ধান্ত স্বাধীন থাকে।",
    policyLanguageNotice: "এই নীতি বর্তমানে ইংরেজি ও চীনা ভাষায় উপলভ্য। নিচে ইংরেজি পাঠ দেওয়া হয়েছে।", backHome: "হোমপেজে ফিরুন", updated: "হালনাগাদ",
  },
};
