'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { ShieldCheck, Mail, Database, Lock, Globe, EyeOff, HeartHandshake, UserX, Scale, type LucideIcon } from 'lucide-react';

const privacyTranslations: Record<string, { title: string; intro: string; sections: { icon: LucideIcon; title: string; desc: string }[] }> = {
  en: {
    title: "Privacy Policy",
    intro: "This policy explains what the CogniStar app and this website do with data. In short: the game runs offline and nothing about your child leaves the device. Last updated: 25 October 2026.",
    sections: [
      { icon: Mail, title: "1. Who we are", desc: "CogniStar is developed by Fodla Media, the data controller for the limited data described here. Questions about privacy or child safety: fodla.media@gmail.com." },
      { icon: Database, title: "2. What stays on the device", desc: "Child profiles, names a parent enters, progress, answers, settings, play-pattern summaries shown in the parent dashboard and worksheets are kept in the device's local storage. They are not uploaded to us or to anyone else." },
      { icon: Lock, title: "3. What leaves the device", desc: "Only two things use the internet:\n• Subscriptions: when a parent buys or restores Premium, Apple App Store or Google Play and our subscription provider RevenueCat process an anonymous purchase identifier, product and transaction details and subscription status. We never see card or billing details, and no child data is sent.\n• Update check: when the app starts it asks the store whether a newer version exists. This sends the app identifier and, like any internet request, the device's IP address — nothing about the child. Offline, the check is skipped." },
      { icon: Globe, title: "4. This website", desc: "If you use the contact form, your name, email address and message are sent through the Web3Forms service to our inbox so that we can reply; if it fails, your own email app opens instead. The site sets a single cookie that remembers your language choice and uses no advertising or analytics cookies." },
      { icon: EyeOff, title: "5. No advertising, no analytics", desc: "The app shows no advertising and contains no analytics, tracking or profiling SDKs. We do not sell personal data." },
      { icon: HeartHandshake, title: "6. Children", desc: "CogniStar is made for children aged 6-9. The app asks children for no account, email or location. Purchases, settings, sharing and links out of the app sit behind a parental check. We have designed the app with COPPA, the GDPR and Turkey's KVKK in mind; if you believe a child has sent us personal data through the website, contact us and we will delete it." },
      { icon: UserX, title: "7. Keeping and deleting data", desc: "Data on the device is removed by deleting a profile, using \"Delete all data\" in Settings, or uninstalling the app. Contact-form messages are kept only as long as needed to answer you and then deleted. Purchase records are kept by Apple, Google and RevenueCat under their own policies." },
      { icon: Scale, title: "8. Your rights and changes", desc: "Under the GDPR and KVKK you can ask us to access, correct or delete personal data we hold about you (in practice, contact-form messages) and object to its processing; write to fodla.media@gmail.com. You may also complain to your data protection authority. If this policy changes, the date above changes with it." },
    ]
  },
  tr: {
    title: "Gizlilik Politikası",
    intro: "Bu politika, CogniStar uygulamasının ve bu web sitesinin verilerle ne yaptığını açıklar. Kısaca: oyun çevrimdışı çalışır ve çocuğunuzla ilgili hiçbir bilgi cihazdan çıkmaz. Son güncelleme: 25 Ekim 2026.",
    sections: [
      { icon: Mail, title: "1. Biz kimiz", desc: "CogniStar, burada açıklanan sınırlı verilerin veri sorumlusu olan Fodla Media tarafından geliştirilmektedir. Gizlilik veya çocuk güvenliği soruları için: fodla.media@gmail.com." },
      { icon: Database, title: "2. Cihazda kalanlar", desc: "Çocuk profilleri, ebeveynin girdiği adlar, ilerleme, yanıtlar, ayarlar, veli panelinde gösterilen oyun davranışı özetleri ve çalışma kağıtları cihazın yerel depolamasında tutulur. Bize veya başka birine yüklenmez." },
      { icon: Lock, title: "3. Cihazdan çıkanlar", desc: "İnterneti yalnızca iki şey kullanır:\n• Abonelikler: Ebeveyn Premium satın aldığında veya geri yüklediğinde Apple App Store ya da Google Play ile abonelik hizmet sağlayıcımız RevenueCat; anonim bir satın alma kimliğini, ürün ve işlem bilgilerini ve abonelik durumunu işler. Kart veya fatura bilgilerini görmeyiz; çocuğa ait hiçbir veri gönderilmez.\n• Güncelleme kontrolü: Uygulama açılırken mağazaya yeni bir sürüm olup olmadığını sorar. Bu istek uygulamanın kimliğini ve her internet isteğinde olduğu gibi cihazın IP adresini gönderir; çocuğa dair bir şey içermez. Bağlantı yoksa kontrol atlanır." },
      { icon: Globe, title: "4. Bu web sitesi", desc: "İletişim formunu kullanırsanız adınız, e-posta adresiniz ve mesajınız size yanıt verebilmemiz için Web3Forms hizmeti aracılığıyla e-posta kutumuza iletilir; gönderim başarısız olursa kendi e-posta uygulamanız açılır. Site yalnızca dil tercihinizi hatırlayan tek bir çerez kullanır; reklam veya analiz çerezi kullanmaz." },
      { icon: EyeOff, title: "5. Reklam ve analiz yok", desc: "Uygulamada reklam gösterilmez; analiz, takip veya profil çıkarma SDK'sı bulunmaz. Kişisel veri satmayız." },
      { icon: HeartHandshake, title: "6. Çocuklar", desc: "CogniStar 6-9 yaş arası çocuklar için hazırlanmıştır. Uygulama çocuklardan hesap, e-posta veya konum istemez. Satın alma, ayarlar, paylaşım ve uygulama dışına çıkan bağlantılar ebeveyn doğrulamasının arkasındadır. Uygulamayı COPPA, GDPR ve KVKK'yı gözeterek tasarladık; web sitesi üzerinden bir çocuğun bize kişisel veri gönderdiğini düşünüyorsanız bize yazın, sileriz." },
      { icon: UserX, title: "7. Saklama ve silme", desc: "Cihazdaki veriler profil silinerek, Ayarlar'daki \"Tüm Veriyi Sil\" ile veya uygulama kaldırılarak silinir. İletişim formu mesajları yalnızca size yanıt vermek için gerektiği sürece saklanır, ardından silinir. Satın alma kayıtları Apple, Google ve RevenueCat tarafından kendi politikalarına göre tutulur." },
      { icon: Scale, title: "8. Haklarınız ve değişiklikler", desc: "KVKK ve GDPR kapsamında hakkınızda tuttuğumuz kişisel verilere (pratikte iletişim formu mesajları) erişmeyi, düzeltilmesini veya silinmesini isteyebilir ve işlenmesine itiraz edebilirsiniz; fodla.media@gmail.com adresine yazmanız yeterli. Kişisel Verileri Koruma Kurumu'na veya ülkenizdeki veri koruma otoritesine şikâyette de bulunabilirsiniz. Politika değişirse yukarıdaki tarih de değişir." },
    ]
  },
  ku: {
    title: "Polîtîkaya Nihêniyê",
    intro: "Ev polîtîka diyar dike ka sepana CogniStar û ev malper bi daneyan çi dikin. Bi kurtî: lîstik offline dixebite û tiştek li ser zarokê we ji cîhazê dernakeve. Nûkirina dawî: 25 Cotmeh 2026.",
    sections: [
      { icon: Mail, title: "1. Em kî ne", desc: "CogniStar ji hêla Fodla Media ve tê pêşxistin, ku berpirsê daneyên sînordar ên li vir hatine diyarkirin e. Ji bo pirsên nihênî an ewlehiya zarokan: fodla.media@gmail.com." },
      { icon: Database, title: "2. Tiştên li ser cîhazê dimînin", desc: "Profîlên zarokan, navên ku dêûbav dinivîsin, pêşveçûn, bersiv, mîheng, kurteyên tevgera lîstikê yên di panela dêûbavan de û pelên xebatê di depoya herêmî ya cîhazê de têne parastin. Ji me re an ji kesekî din re nayên barkirin." },
      { icon: Lock, title: "3. Tiştên ji cîhazê derdikevin", desc: "Tenê du tişt înternetê bikar tînin:\n• Abonetî: Dema dêûbav Premium dikire an vedigerîne, Apple App Store an Google Play û peydakarê me yê abonetiyê RevenueCat nasnameyek kirînê ya anonîm, agahiyên hilber û danûstendinê û rewşa abonetiyê pêvajo dikin. Em agahiyên kartê nabînin û daneyên zarokan nayên şandin.\n• Kontrola nûkirinê: Dema sepan vedibe ji firotgehê dipirse ka guhertoyek nû heye an na. Ev nasnameya sepanê û navnîşana IP ya cîhazê dişîne — tiştek li ser zarokê tune. Bê girêdan kontrol nayê kirin." },
      { icon: Globe, title: "4. Ev malper", desc: "Heke hûn forma têkiliyê bikar bînin, nav, e-name û peyama we bi rêya karûbarê Web3Forms digihîje qutiya me da ku em bersivê bidin; heke neçe, sepana e-nameya we vedibe. Malper tenê çerezek ku zimanê we bi bîr tîne bikar tîne; çerezên reklam an analîtîkê tune ne." },
      { icon: EyeOff, title: "5. Bê reklam, bê analîtîk", desc: "Sepan reklaman nîşan nade û ti SDK-yên analîtîk, şopandin an profîlkirinê tê de tune ne. Em daneyên kesane nafiroşin." },
      { icon: HeartHandshake, title: "6. Zarok", desc: "CogniStar ji bo zarokên 6-9 salî hatiye çêkirin. Sepan ji zarokan hesab, e-name an cih naxwaze. Kirîn, mîheng, parvekirin û girêdanên derveyî li pişt kontrola dêûbavan in. Me sepan bi hişyariya COPPA, GDPR û KVKK sêwirandiye; heke hûn difikirin ku zarokek bi rêya malperê daneyên kesane şandiye, ji me re binivîsin, em ê jê bibin." },
      { icon: UserX, title: "7. Parastin û jêbirin", desc: "Daneyên li ser cîhazê bi jêbirina profîlê, bi \"Hemû daneyan jê bibe\" di Mîhengan de an bi rakirina sepanê têne jêbirin. Peyamên forma têkiliyê tenê heta ku bersiv were dayîn têne parastin û paşê têne jêbirin. Tomarên kirînê ji hêla Apple, Google û RevenueCat ve li gorî polîtîkayên wan têne parastin." },
      { icon: Scale, title: "8. Mafên we û guhertin", desc: "Li gorî GDPR û KVKK hûn dikarin bixwazin ku em bigihîjin, rast bikin an jê bibin daneyên kesane yên ku em li ser we digirin (di pratîkê de peyamên formê) û li dijî pêvajoyê îtiraz bikin; ji fodla.media@gmail.com re binivîsin. Hûn dikarin ji desthilata parastina daneyan re jî gilî bikin. Heke polîtîka biguhere, dîroka li jor jî diguhere." },
    ]
  },
  ar: {
    title: "سياسة الخصوصية",
    intro: "توضح هذه السياسة ما يفعله تطبيق CogniStar وهذا الموقع بالبيانات. باختصار: تعمل اللعبة دون اتصال ولا يغادر الجهاز أي شيء يخص طفلك. آخر تحديث: 25 أكتوبر 2026.",
    sections: [
      { icon: Mail, title: "١. من نحن", desc: "يطوّر CogniStar شركة Fodla Media، وهي المسؤولة عن البيانات المحدودة الموضحة هنا. للأسئلة حول الخصوصية أو سلامة الأطفال: fodla.media@gmail.com." },
      { icon: Database, title: "٢. ما يبقى على الجهاز", desc: "تُحفظ ملفات الأطفال، والأسماء التي يدخلها الوالد، والتقدم، والإجابات، والإعدادات، وملخصات أنماط اللعب المعروضة في لوحة الوالدين، وأوراق العمل في التخزين المحلي للجهاز. ولا تُرفع إلينا ولا إلى أي جهة أخرى." },
      { icon: Lock, title: "٣. ما يغادر الجهاز", desc: "لا يستخدم الإنترنت إلا أمران:\n• الاشتراكات: عندما يشتري الوالد الاشتراك المميز أو يستعيده، يعالج متجر Apple أو Google Play ومزوّد الاشتراكات لدينا RevenueCat معرّف شراء مجهول وتفاصيل المنتج والمعاملة وحالة الاشتراك. لا نرى أي بيانات بطاقة، ولا تُرسل أي بيانات للطفل.\n• التحقق من التحديثات: عند تشغيل التطبيق يسأل المتجر عن وجود إصدار أحدث. يُرسل هذا معرّف التطبيق، وكأي طلب عبر الإنترنت عنوان IP للجهاز — ولا شيء عن الطفل. وعند عدم الاتصال يتم تخطيه." },
      { icon: Globe, title: "٤. هذا الموقع", desc: "إذا استخدمت نموذج التواصل، يُرسل اسمك وبريدك الإلكتروني ورسالتك عبر خدمة Web3Forms إلى بريدنا لنتمكن من الرد؛ وإن فشل الإرسال يُفتح تطبيق البريد لديك. يستخدم الموقع ملف تعريف ارتباط واحداً فقط لتذكّر لغتك، ولا يستخدم ملفات تعريف ارتباط إعلانية أو تحليلية." },
      { icon: EyeOff, title: "٥. لا إعلانات ولا تحليلات", desc: "لا يعرض التطبيق إعلانات ولا يحتوي على أي أدوات تحليل أو تتبع أو تنميط. ولا نبيع البيانات الشخصية." },
      { icon: HeartHandshake, title: "٦. الأطفال", desc: "صُمم CogniStar للأطفال من 6 إلى 9 سنوات. لا يطلب التطبيق من الأطفال أي حساب أو بريد إلكتروني أو موقع. وتقع المشتريات والإعدادات والمشاركة والروابط الخارجية خلف تحقق أبوي. صممنا التطبيق مع مراعاة COPPA وGDPR وقانون KVKK التركي؛ وإن اعتقدت أن طفلاً أرسل إلينا بيانات شخصية عبر الموقع فراسلنا وسنحذفها." },
      { icon: UserX, title: "٧. الاحتفاظ بالبيانات وحذفها", desc: "تُحذف البيانات الموجودة على الجهاز بحذف الملف الشخصي أو باستخدام \"حذف جميع البيانات\" في الإعدادات أو بإزالة التطبيق. ونحتفظ برسائل نموذج التواصل فقط للمدة اللازمة للرد ثم نحذفها. أما سجلات الشراء فتحتفظ بها Apple وGoogle وRevenueCat وفق سياساتها." },
      { icon: Scale, title: "٨. حقوقك والتغييرات", desc: "بموجب GDPR وKVKK يمكنك أن تطلب الوصول إلى بياناتك الشخصية التي نحتفظ بها (عملياً رسائل نموذج التواصل) أو تصحيحها أو حذفها، والاعتراض على معالجتها؛ راسلنا على fodla.media@gmail.com. ويمكنك أيضاً تقديم شكوى إلى هيئة حماية البيانات. وإذا تغيّرت هذه السياسة يتغيّر التاريخ أعلاه." },
    ]
  },
  fr: {
    title: "Politique de confidentialité",
    intro: "Cette politique explique ce que l'application CogniStar et ce site font des données. En bref : le jeu fonctionne hors ligne et rien concernant votre enfant ne quitte l'appareil. Dernière mise à jour : 25 octobre 2026.",
    sections: [
      { icon: Mail, title: "1. Qui sommes-nous", desc: "CogniStar est développé par Fodla Media, responsable du traitement des données limitées décrites ici. Questions sur la vie privée ou la sécurité des enfants : fodla.media@gmail.com." },
      { icon: Database, title: "2. Ce qui reste sur l'appareil", desc: "Profils des enfants, prénoms saisis par un parent, progression, réponses, réglages, résumés de jeu affichés dans le tableau de bord parent et fiches d'exercices sont conservés dans le stockage local de l'appareil. Ils ne nous sont pas envoyés, ni à personne d'autre." },
      { icon: Lock, title: "3. Ce qui quitte l'appareil", desc: "Seules deux choses utilisent internet :\n• Abonnements : lorsqu'un parent achète ou restaure Premium, l'App Store d'Apple ou Google Play et notre prestataire d'abonnement RevenueCat traitent un identifiant d'achat anonyme, les détails du produit et de la transaction et l'état de l'abonnement. Nous ne voyons jamais les données de carte, et aucune donnée d'enfant n'est envoyée.\n• Vérification des mises à jour : au démarrage, l'application demande au magasin si une version plus récente existe. Cela transmet l'identifiant de l'application et, comme toute requête internet, l'adresse IP de l'appareil — rien sur l'enfant. Hors ligne, la vérification est ignorée." },
      { icon: Globe, title: "4. Ce site", desc: "Si vous utilisez le formulaire de contact, vos nom, adresse e-mail et message sont transmis via le service Web3Forms à notre boîte de réception afin que nous puissions répondre ; en cas d'échec, votre application de messagerie s'ouvre. Le site utilise un seul cookie qui mémorise votre langue, sans cookie publicitaire ni de mesure d'audience." },
      { icon: EyeOff, title: "5. Ni publicité, ni analyse", desc: "L'application n'affiche aucune publicité et ne contient aucun SDK d'analyse, de suivi ou de profilage. Nous ne vendons pas de données personnelles." },
      { icon: HeartHandshake, title: "6. Les enfants", desc: "CogniStar est conçu pour les enfants de 6 à 9 ans. L'application ne demande aux enfants ni compte, ni e-mail, ni localisation. Achats, réglages, partage et liens sortants sont protégés par un contrôle parental. Nous avons conçu l'application en tenant compte de la COPPA, du RGPD et de la loi turque KVKK ; si vous pensez qu'un enfant nous a envoyé des données personnelles via le site, écrivez-nous et nous les supprimerons." },
      { icon: UserX, title: "7. Conservation et suppression", desc: "Les données de l'appareil sont supprimées en effaçant un profil, via « Supprimer toutes les données » dans les Réglages ou en désinstallant l'application. Les messages du formulaire ne sont conservés que le temps de vous répondre, puis supprimés. Les données d'achat sont conservées par Apple, Google et RevenueCat selon leurs propres politiques." },
      { icon: Scale, title: "8. Vos droits et modifications", desc: "En vertu du RGPD et de la KVKK, vous pouvez nous demander l'accès, la rectification ou l'effacement des données personnelles que nous détenons sur vous (en pratique, les messages du formulaire) et vous opposer à leur traitement ; écrivez à fodla.media@gmail.com. Vous pouvez aussi saisir votre autorité de protection des données (CNIL en France). Si cette politique change, la date ci-dessus change aussi." },
    ]
  },
  de: {
    title: "Datenschutzerklärung",
    intro: "Diese Erklärung beschreibt, was die CogniStar-App und diese Website mit Daten tun. Kurz gesagt: Das Spiel läuft offline, und nichts über Ihr Kind verlässt das Gerät. Zuletzt aktualisiert: 25. Oktober 2026.",
    sections: [
      { icon: Mail, title: "1. Wer wir sind", desc: "CogniStar wird von Fodla Media entwickelt, dem Verantwortlichen für die hier beschriebenen begrenzten Daten. Fragen zu Datenschutz oder Kindersicherheit: fodla.media@gmail.com." },
      { icon: Database, title: "2. Was auf dem Gerät bleibt", desc: "Kinderprofile, von Eltern eingegebene Namen, Fortschritt, Antworten, Einstellungen, im Eltern-Dashboard gezeigte Spielmuster-Übersichten und Arbeitsblätter liegen im lokalen Speicher des Geräts. Sie werden weder an uns noch an Dritte übertragen." },
      { icon: Lock, title: "3. Was das Gerät verlässt", desc: "Nur zwei Dinge nutzen das Internet:\n• Abos: Wenn Eltern Premium kaufen oder wiederherstellen, verarbeiten der Apple App Store oder Google Play und unser Abo-Dienstleister RevenueCat eine anonyme Kauf-ID, Produkt- und Transaktionsdaten sowie den Abo-Status. Kartendaten sehen wir nie, und es werden keine Kinderdaten gesendet.\n• Update-Prüfung: Beim Start fragt die App den Store, ob es eine neuere Version gibt. Dabei werden die App-Kennung und, wie bei jeder Internetanfrage, die IP-Adresse des Geräts übermittelt – nichts über das Kind. Offline entfällt die Prüfung." },
      { icon: Globe, title: "4. Diese Website", desc: "Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail-Adresse und Nachricht über den Dienst Web3Forms an unser Postfach übermittelt, damit wir antworten können; schlägt das fehl, öffnet sich Ihre E-Mail-App. Die Website setzt nur ein Cookie, das Ihre Sprachwahl speichert, und keine Werbe- oder Analyse-Cookies." },
      { icon: EyeOff, title: "5. Keine Werbung, keine Analyse", desc: "Die App zeigt keine Werbung und enthält keine Analyse-, Tracking- oder Profiling-SDKs. Wir verkaufen keine personenbezogenen Daten." },
      { icon: HeartHandshake, title: "6. Kinder", desc: "CogniStar ist für Kinder von 6 bis 9 Jahren gemacht. Die App verlangt von Kindern weder Konto noch E-Mail oder Standort. Käufe, Einstellungen, Teilen und Links aus der App heraus liegen hinter einer Elternabfrage. Wir haben die App mit Blick auf COPPA, DSGVO und das türkische KVKK gestaltet; falls Sie glauben, dass uns ein Kind über die Website personenbezogene Daten geschickt hat, schreiben Sie uns, und wir löschen sie." },
      { icon: UserX, title: "7. Speicherung und Löschung", desc: "Daten auf dem Gerät werden gelöscht, indem Sie ein Profil löschen, in den Einstellungen „Alle Daten löschen“ wählen oder die App entfernen. Nachrichten aus dem Kontaktformular bewahren wir nur so lange auf, wie es für die Antwort nötig ist, und löschen sie dann. Kaufdaten werden von Apple, Google und RevenueCat nach deren eigenen Richtlinien aufbewahrt." },
      { icon: Scale, title: "8. Ihre Rechte und Änderungen", desc: "Nach DSGVO und KVKK können Sie Auskunft, Berichtigung oder Löschung der personenbezogenen Daten verlangen, die wir über Sie haben (in der Praxis Kontaktformular-Nachrichten), und der Verarbeitung widersprechen; schreiben Sie an fodla.media@gmail.com. Sie können sich auch bei einer Datenschutzaufsichtsbehörde beschweren. Ändert sich diese Erklärung, ändert sich auch das Datum oben." },
    ]
  },
  ru: {
    title: "Политика конфиденциальности",
    intro: "Эта политика объясняет, что приложение CogniStar и этот сайт делают с данными. Коротко: игра работает офлайн, и никакие сведения о вашем ребёнке не покидают устройство. Последнее обновление: 25 октября 2026 г.",
    sections: [
      { icon: Mail, title: "1. Кто мы", desc: "CogniStar разрабатывает Fodla Media — оператор ограниченных данных, описанных здесь. Вопросы о конфиденциальности или безопасности детей: fodla.media@gmail.com." },
      { icon: Database, title: "2. Что остаётся на устройстве", desc: "Профили детей, имена, введённые родителем, прогресс, ответы, настройки, сводки игровых паттернов в родительской панели и рабочие листы хранятся в локальной памяти устройства. Они не загружаются ни нам, ни кому-либо ещё." },
      { icon: Lock, title: "3. Что покидает устройство", desc: "Интернет используют только две функции:\n• Подписки: когда родитель покупает или восстанавливает Premium, App Store или Google Play и наш поставщик подписок RevenueCat обрабатывают анонимный идентификатор покупки, данные о продукте и транзакции и статус подписки. Данные карт мы не видим, сведения о ребёнке не передаются.\n• Проверка обновлений: при запуске приложение спрашивает магазин, есть ли новая версия. При этом передаётся идентификатор приложения и, как при любом интернет-запросе, IP-адрес устройства — ничего о ребёнке. Без подключения проверка пропускается." },
      { icon: Globe, title: "4. Этот сайт", desc: "Если вы пользуетесь формой обратной связи, ваше имя, e-mail и сообщение передаются через сервис Web3Forms в наш почтовый ящик, чтобы мы могли ответить; если отправка не удалась, откроется ваше почтовое приложение. Сайт использует один cookie для запоминания языка и не использует рекламные или аналитические cookie." },
      { icon: EyeOff, title: "5. Без рекламы и аналитики", desc: "В приложении нет рекламы и нет SDK для аналитики, отслеживания или профилирования. Мы не продаём персональные данные." },
      { icon: HeartHandshake, title: "6. Дети", desc: "CogniStar создан для детей 6–9 лет. Приложение не запрашивает у детей аккаунт, e-mail или местоположение. Покупки, настройки, функция «поделиться» и внешние ссылки защищены родительской проверкой. Приложение разработано с учётом COPPA, GDPR и турецкого закона KVKK; если вы считаете, что ребёнок прислал нам персональные данные через сайт, напишите нам, и мы их удалим." },
      { icon: UserX, title: "7. Хранение и удаление", desc: "Данные на устройстве удаляются при удалении профиля, через «Удалить все данные» в Настройках или при удалении приложения. Сообщения из формы хранятся только до ответа, затем удаляются. Сведения о покупках хранят Apple, Google и RevenueCat по своим правилам." },
      { icon: Scale, title: "8. Ваши права и изменения", desc: "Согласно GDPR и KVKK вы можете запросить доступ к вашим персональным данным, которые у нас есть (на практике это сообщения из формы), их исправление или удаление, а также возразить против обработки; пишите на fodla.media@gmail.com. Вы также можете подать жалобу в орган по защите данных. Если политика изменится, изменится и дата выше." },
    ]
  },
  zh: {
    title: "隐私政策",
    intro: "本政策说明 CogniStar 应用和本网站如何处理数据。简而言之：游戏离线运行，任何关于孩子的信息都不会离开设备。最后更新：2026 年 10 月 25 日。",
    sections: [
      { icon: Mail, title: "1. 我们是谁", desc: "CogniStar 由 Fodla Media 开发，Fodla Media 是本政策所述有限数据的控制者。如有隐私或儿童安全方面的问题，请联系：fodla.media@gmail.com。" },
      { icon: Database, title: "2. 保留在设备上的数据", desc: "儿童档案、家长输入的名字、进度、答案、设置、家长面板中显示的游戏行为摘要以及练习纸都保存在设备的本地存储中，不会上传给我们或任何第三方。" },
      { icon: Lock, title: "3. 离开设备的数据", desc: "只有两项功能会使用网络：\n• 订阅：家长购买或恢复高级版时，Apple App Store 或 Google Play 以及我们的订阅服务商 RevenueCat 会处理匿名购买标识、产品与交易信息以及订阅状态。我们看不到任何银行卡信息，也不会发送任何儿童数据。\n• 更新检查：应用启动时会询问应用商店是否有新版本。此请求会发送应用标识，以及与任何网络请求一样的设备 IP 地址——不包含任何关于儿童的信息。离线时将跳过检查。" },
      { icon: Globe, title: "4. 本网站", desc: "如果您使用联系表单，您的姓名、邮箱和留言会通过 Web3Forms 服务发送到我们的邮箱，以便我们回复；如果发送失败，会打开您自己的邮件应用。本网站只使用一个记住语言偏好的 Cookie，不使用广告或分析 Cookie。" },
      { icon: EyeOff, title: "5. 无广告、无分析", desc: "应用不展示广告，也不包含任何分析、跟踪或用户画像 SDK。我们不出售个人数据。" },
      { icon: HeartHandshake, title: "6. 儿童", desc: "CogniStar 为 6-9 岁儿童设计。应用不会向儿童索取账号、邮箱或位置。购买、设置、分享以及离开应用的链接均需通过家长验证。我们在设计时考虑了 COPPA、GDPR 和土耳其 KVKK；如果您认为有儿童通过网站向我们发送了个人信息，请联系我们，我们将予以删除。" },
      { icon: UserX, title: "7. 数据保存与删除", desc: "设备上的数据可通过删除档案、在设置中使用\"删除所有数据\"或卸载应用来删除。联系表单的留言只在回复所需期间保存，之后删除。购买记录由 Apple、Google 和 RevenueCat 按其各自政策保存。" },
      { icon: Scale, title: "8. 您的权利与变更", desc: "根据 GDPR 和 KVKK，您可以要求查阅、更正或删除我们持有的关于您的个人数据（实际上即联系表单留言），并可反对相关处理；请写信至 fodla.media@gmail.com。您也可以向数据保护机构投诉。若本政策发生变更，上方日期也会随之更新。" },
    ]
  },
};

export default function PrivacyPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const t = privacyTranslations[locale] || privacyTranslations['en'];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Details */}
          <div className="mt-16 space-y-10">
            {t.sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div 
                  key={idx} 
                  className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{section.title}</h2>
                  </div>
                  <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                    {section.desc}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
