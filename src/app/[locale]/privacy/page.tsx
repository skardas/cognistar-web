'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { ShieldCheck, Mail, Database, UserX, HeartHandshake, EyeOff, Lock } from 'lucide-react';

const privacyTranslations: Record<string, any> = {
  en: {
    title: 'Privacy Policy & COPPA Compliance',
    intro: 'CogniStar is a safe, offline, and zero-tracking environment designed specifically for kids. This policy explains how we protect children and ensure compliance with App Store and Google Play child-category regulations.',
    sections: [
      {
        icon: Mail,
        title: '1. Developer & Data Controller',
        desc: 'CogniStar is developed and operated by Fodla Media. If you have any questions or inquiries regarding child safety or this policy, please contact us at fodla.media@gmail.com.'
      },
      {
        icon: UserX,
        title: '2. Data Collection & Processing',
        desc: 'We do not collect, store, or share any personal information from children or adults. Specifically:\n• No registration, signup, or profile fields are sent online.\n• No device identifier tracking, location data, or camera/microphone access is requested.\n• On-Device Database: All stars, ELO progress, level records, unlocked badges, and worksheets are saved 100% locally on the device.'
      },
      {
        icon: Lock,
        title: '3. Subscriptions & Payments',
        desc: 'Subscriptions and premium purchases are processed securely by Apple App Store and Google Play Store. Transactions are subject to their respective terms. Fodla Media does not receive, view, or store any credit card numbers or billing details.'
      },
      {
        icon: EyeOff,
        title: '4. No Advertising & No Analytics',
        desc: 'To guarantee complete safety for kids:\n• There are no third-party advertisements.\n• No analytics, telemetry, or user-profiling SDKs are integrated into the application.'
      },
      {
        icon: HeartHandshake,
        title: '5. COPPA & GDPR Compliance',
        desc: 'We strictly adhere to COPPA (Children\'s Online Privacy Protection Act) and GDPR. We never collect personal data from children under 13, nor do we process personal data of EU residents.'
      },
      {
        icon: Database,
        title: '6. Data Retention & Deletion',
        desc: 'Since all data is stored on-device, you have full control. Deleting the CogniStar app from your device permanently deletes all locally saved progress and settings.'
      }
    ]
  },
  tr: {
    title: 'Gizlilik Politikası & COPPA Uyumluluğu',
    intro: 'CogniStar, çocuklar için tasarlanmış güvenli, çevrimdışı ve sıfır takip odaklı bir ortamdır. Bu politika, çocukları nasıl koruduğumuzu ve App Store ile Google Play çocuk kategorisi kurallarına uyumluluğumuzu açıklamaktadır.',
    sections: [
      {
        icon: Mail,
        title: '1. Geliştirici ve Veri Sorumlusu',
        desc: 'CogniStar, Fodla Media tarafından geliştirilmekte ve işletilmektedir. Çocuk güvenliği veya bu politika hakkındaki sorularınız için bizimle fodla.media@gmail.com adresinden iletişime geçebilirsiniz.'
      },
      {
        icon: UserX,
        title: '2. Veri Toplama ve İşleme',
        desc: 'Çocuklardan veya yetişkinlerden hiçbir kişisel bilgi toplamıyoruz, saklamıyoruz veya paylaşmıyoruz. Özellikle:\n• Kayıt, üyelik veya profil alanları çevrimiçi olarak gönderilmez.\n• Cihaz kimliği takibi, konum verisi veya kamera/mikrofon erişimi istenmez.\n• Cihaz İçi Veritabanı: Kazanılan tüm yıldızlar, ELO ilerlemesi, seviye kayıtları, rozetler ve çalışma kağıtları %100 yerel olarak cihazınızda saklanır.'
      },
      {
        icon: Lock,
        title: '3. Abonelikler ve Ödemeler',
        desc: 'Abonelikler ve premium satın alımlar Apple App Store ve Google Play Store tarafından güvenli bir şekilde işlenir. İşlemler ilgili platformların kullanım koşullarına tabidir. Fodla Media kredi kartı veya fatura bilgilerinizi almaz, görmez veya saklamaz.'
      },
      {
        icon: EyeOff,
        title: '4. Reklamsız ve Takipsiz Arayüz',
        desc: 'Çocukların tam güvenliğini garanti etmek için:\n• Üçüncü taraf reklamlar kesinlikle bulunmaz.\n• Uygulama içine hiçbir analiz, telemetri veya kullanıcı profili çıkarma aracı (SDK) entegre edilmemiştir.'
      },
      {
        icon: HeartHandshake,
        title: '5. COPPA ve KVKK / GDPR Uyumluluğu',
        desc: 'COPPA (Çocukların Çevrimiçi Gizliliğini Koruma Yasası) ve GDPR/KVKK kurallarına sıkı sıkıya bağlıyız. 13 yaşın altındaki çocuklardan asla kişisel veri toplamayız ve üçüncü şahıslara aktarmayız.'
      },
      {
        icon: Database,
        title: '6. Veri Saklama ve Silme',
        desc: 'Tüm veriler cihazınızda yerel olarak saklandığı için tam kontrole sahipsiniz. CogniStar uygulamasını cihazınızdan silmek, yerel olarak kaydedilmiş tüm ilerlemeyi ve ayarları kalıcı olarak siler.'
      }
    ]
  },
  ku: {
    title: 'Polîtîkaya Parastina Daneyan & Li Gorî COPPA-yê',
    intro: 'CogniStar jîngeheke ewledar, offline û bê şopandin e ku bi taybetî ji bo zarokan hatî sêwirandin. Ev polîtîka diyar dike ka em çawa zarokan diparêzin û li gorî qaîdeyên App Store û Google Play-ê tevdigerin.',
    sections: [
      {
        icon: Mail,
        title: '1. Pêşdebir & Berpirsê Daneyan',
        desc: 'CogniStar ji hêla Fodla Media ve tê pêşxistin û birêvebirin. Ji bo pirsên li ser ewlehiya zarokan an vê polîtîkayê, hûn dikarin bi e-maila fodla.media@gmail.com bi me re têkiliyê daynin.'
      },
      {
        icon: UserX,
        title: '2. Komkirin û Pêvajoya Daneyan',
        desc: 'Em ti agahiyên kesane ji zarokan an mezinan kom nakin, hilnaynin an parve nakin. Bi taybetî:\n• Ti qeydkirin an qadên profilê bi serhêl nayên şandin.\n• Ti nasnameya cîhazê, daneyên cihanê, an gihîştina kamera/mîkrofonê nayê xwestin.\n• Daneya ser Cîhazê: Hemî stêrk, pêşkeftina ELO, tomarên astê û pelên xebatê 100% li ser cîhazê bi herêmî têne tomar kirin.'
      },
      {
        icon: Lock,
        title: '3. Abonetî û Teşbîhên Peredanê',
        desc: 'Kirîna abonetiyê bi ewlehî ji hêla Apple App Store û Google Play Store ve tê kirin. Fodla Media ti agahiyên karta krediyê an fatûreyê wernagire, nabîne û hilnayne.'
      },
      {
        icon: EyeOff,
        title: '4. Bê Reklam & Bê Analîtîk',
        desc: 'Ji bo ewlehiya tam a zarokan:\n• Ti reklamên aliyên sêyemîn tune ne.\n• Ti SDK-yên analîtîk an derxistina profîla bikarhêner di sepanê de tune ne.'
      },
      {
        icon: HeartHandshake,
        title: '5. Lihevkirina COPPA & GDPR',
        desc: 'Em bi hişkî li gorî rêgezên COPPA û GDPR tevdigerin. Em qet daneyên kesane ji zarokên di bin 13 saliyê de kom nakin.'
      },
      {
        icon: Database,
        title: '6. Parastin û Jêbirina Daneyan',
        desc: 'Ji ber ku hemî dane li ser cîhazê têne tomar kirin, kontrola tam di destê we de ye. Jêbirina sepana CogniStar ji cîhaza we hemî pêşkeftin û mîhengên herêmî bi domdarî jê dibe.'
      }
    ]
  },
  ar: {
    title: 'سياسة الخصوصية والامتثال لقوانين حماية الأطفال',
    intro: 'تطبيق CogniStar هو بيئة آمنة تماماً، تعمل دون اتصال بالإنترنت، وخالية من أي تتبع، ومصممة خصيصاً للأطفال. توضح هذه السياسة كيفية حماية خصوصية الأطفال والامتثال للوائح فئات الأطفال في متاجر التطبيقات.',
    sections: [
      {
        icon: Mail,
        title: '١. المطور ومراقب البيانات',
        desc: 'تم تطوير وتشغيل تطبيق CogniStar بواسطة Fodla Media. لأي استفسارات تتعلق بسلامة الأطفال أو هذه السياسة، يرجى التواصل معنا عبر البريد الإلكتروني: fodla.media@gmail.com.'
      },
      {
        icon: UserX,
        title: '٢. جمع البيانات ومعالجتها',
        desc: 'نحن لا نجمع أو نخزن أو نشارك أي معلومات شخصية للأطفال أو الكبار. على وجه الخصوص:\n• لا يتم إرسال أي بيانات تسجيل أو حساب أو ملفات تعريفية عبر الإنترنت.\n• لا نطلب تتبع معرف الجهاز أو بيانات الموقع أو الوصول إلى الكاميرا/الميكروفون.\n• قاعدة البيانات المحلية: يتم حفظ جميع مستويات التقدم، ونقاط ELO، والجوائز، وأوراق العمل محلياً بالكامل على الجهاز.'
      },
      {
        icon: Lock,
        title: '٣. الاشتراكات والمدفوعات',
        desc: 'تتم معالجة الاشتراكات بأمان بواسطة متجر تطبيقات Apple ومتجر Google Play. لا تتلقى Fodla Media أو تطلع على أي تفاصيل لبطاقات الائتمان أو الفواتير الخاصة بك.'
      },
      {
        icon: EyeOff,
        title: '٤. لا إعلانات ولا تحليلات',
        desc: 'لضمان السلامة الكاملة للأطفال:\n• لا توجد إعلانات من أي جهة خارجية.\n• لا توجد أدوات تتبع أو تحليلات سلوكية أو إحصائية مدمجة بالتطبيق.'
      },
      {
        icon: HeartHandshake,
        title: '٥. الامتثال لقوانين COPPA و GDPR',
        desc: 'نحن نلتزم بصرامة بقانون حماية خصوصية الأطفال على الإنترنت (COPPA) واللائحة العامة لحماية البيانات (GDPR). لا نقوم بجمع أي بيانات من الأطفال دون سن 13 عاماً.'
      },
      {
        icon: Database,
        title: '٦. الاحتفاظ بالبيانات وحذفها',
        desc: 'بما أن جميع البيانات مخزنة محلياً، فإن حذف تطبيق CogniStar من جهازك سيؤدي إلى حذف جميع ملفات التقدم والإعدادات المخزنة بشكل دائم.'
      }
    ]
  },
  fr: {
    title: 'Politique de Confidentialité & Conformité COPPA',
    intro: 'CogniStar est un environnement sécurisé, hors ligne et sans aucun suivi, conçu spécifiquement pour les enfants. Cette politique explique comment nous protégeons les enfants et respectons les règles de l\'App Store et du Google Play Store.',
    sections: [
      {
        icon: Mail,
        title: '1. Développeur & Responsable du Traitement',
        desc: 'CogniStar est développé et exploité par Fodla Media. Pour toute question concernant la sécurité des enfants ou cette politique, veuillez nous contacter à fodla.media@gmail.com.'
      },
      {
        icon: UserX,
        title: '2. Collecte & Traitement des Données',
        desc: 'Nous ne collectons, ne stockons et ne partageons aucune information personnelle concernant les enfants ou les adultes. En particulier :\n• Aucune inscription ou profil n\'est envoyé en ligne.\n• Aucun identifiant d\'appareil, donnée de localisation ou accès caméra/micro n\'est demandé.\n• Stockage local : Toutes les étoiles, progression ELO, fiches d\'exercices et récompenses sont sauvegardées à 100% sur l\'appareil.'
      },
      {
        icon: Lock,
        title: '3. Abonnements & Paiements',
        desc: 'Les abonnements sont traités de manière sécurisée par l\'App Store d\'Apple et le Google Play Store. Fodla Media ne reçoit, ne visualise ni ne stocke aucune coordonnée bancaire ou de facturation.'
      },
      {
        icon: EyeOff,
        title: '4. Sans Publicité & Sans Outil d\'Analyse',
        desc: 'Pour garantir une sécurité maximale aux enfants :\n• Il n\'y a aucune publicité tierce dans l\'application.\n• Aucun SDK d\'analyse, de télémétrie ou de profilage n\'est intégré.'
      },
      {
        icon: HeartHandshake,
        title: '5. Conformité COPPA & RGPD',
        desc: 'Nous respectons strictement la loi COPPA et le RGPD. Nous ne collectons jamais de données personnelles auprès d\'enfants de moins de 13 ans.'
      },
      {
        icon: Database,
        title: '6. Conservation & Suppression des Données',
        desc: 'Puisque toutes les données sont stockées sur l\'appareil, vous avez le contrôle total. Supprimer l\'application CogniStar supprime définitivement tous les progrès et paramètres locaux.'
      }
    ]
  },
  de: {
    title: 'Datenschutzerklärung & COPPA-Konformität',
    intro: 'CogniStar ist eine sichere, werbefreie und offline nutzbare Umgebung speziell für Kinder. Diese Erklärung erläutert unseren Schutz der Privatsphäre gemäß den Richtlinien von App Store und Google Play.',
    sections: [
      {
        icon: Mail,
        title: '1. Entwickler & Datenverantwortlicher',
        desc: 'CogniStar wird von Fodla Media entwickelt und betrieben. Bei Fragen zum Kinderschutz oder zu dieser Richtlinie wenden Sie sich bitte an fodla.media@gmail.com.'
      },
      {
        icon: UserX,
        title: '2. Datenerhebung & -verarbeitung',
        desc: 'Wir sammeln, speichern oder teilen keinerlei personenbezogene Daten von Kindern oder Erwachsenen. Speziell:\n• Keine Registrierung oder Profile werden online übertragen.\n• Keine Standortdaten, Geräte-IDs oder Kamera-/Mikrofonberechtigungen werden abgefragt.\n• Lokale Speicherung: Alle Spielfortschritte, Sterne, ELO-Werte und Arbeitsblätter werden zu 100 % lokal auf dem Gerät gespeichert.'
      },
      {
        icon: Lock,
        title: '3. Abonnements & Zahlungen',
        desc: 'Zahlungen für Abonnements werden sicher über den Apple App Store und Google Play Store abgewickelt. Fodla Media erhält oder speichert keine Kreditkarten- oder Rechnungsinformationen.'
      },
      {
        icon: EyeOff,
        title: '4. Keine Werbung & Keine Analyse-Tools',
        desc: 'Für maximale Sicherheit der Kinder:\n• Die App ist vollkommen werbefrei.\n• Es sind keine Analyse-, Telemetrie- oder Profiling-SDKs von Drittanbietern integriert.'
      },
      {
        icon: HeartHandshake,
        title: '5. COPPA & DSGVO Konformität',
        desc: 'Wir halten uns strikt an COPPA (Children\'s Online Privacy Protection Act) und DSGVO. Wir erfassen niemals Daten von Kindern unter 13 Jahren.'
      },
      {
        icon: Database,
        title: '6. Datenspeicherung & -löschung',
        desc: 'Da alle Daten auf dem Gerät gespeichert werden, haben Sie die volle Kontrolle. Durch das Löschen der CogniStar-App werden alle lokalen Fortschritte dauerhaft entfernt.'
      }
    ]
  },
  ru: {
    title: 'Политика конфиденциальности и соответствие стандартам COPPA',
    intro: 'Приложение CogniStar создано как безопасная, полностью автономная среда без какого-либо отслеживания. Данная политика объясняет методы защиты данных детей в соответствии с правилами магазинов приложений.',
    sections: [
      {
        icon: Mail,
        title: '1. Разработчик и оператор данных',
        desc: 'CogniStar разработано и управляется Fodla Media. По вопросам защиты детей или политики конфиденциальности пишите на почту: fodla.media@gmail.com.'
      },
      {
        icon: UserX,
        title: '2. Сбор и обработка данных',
        desc: 'Мы не собираем, не храним и не передаем третьим лицам личную информацию. В частности:\n• Отсутствует онлайн-регистрация и создание профилей на сервере.\n• Не запрашивается доступ к геолокации, камере, микрофону или идентификаторам устройств.\n• Локальная БД: Звезды, прогресс ELO, награды и рабочие листы сохраняются исключительно на самом устройстве.'
      },
      {
        icon: Lock,
        title: '3. Подписки и платежи',
        desc: 'Оплата подписок безопасно обрабатывается Apple App Store и Google Play Store. Fodla Media не имеет доступа к данным кредитных карт и платежным реквизитам.'
      },
      {
        icon: EyeOff,
        title: '4. Без рекламы и аналитики',
        desc: 'Для обеспечения полной безопасности:\n• В приложении полностью отсутствует реклама.\n• Не интегрированы маркетинговые или аналитические сервисы отслеживания (SDK).'
      },
      {
        icon: HeartHandshake,
        title: '5. Соответствие COPPA и GDPR',
        desc: 'Мы строго соблюдаем законы COPPA и GDPR. Мы никогда не собираем персональные данные детей младше 13 лет.'
      },
      {
        icon: Database,
        title: '6. Хранение и удаление данных',
        desc: 'Удаление приложения CogniStar с вашего устройства приведет к безвозвратному удалению всех локально сохраненных результатов и настроек.'
      }
    ]
  },
  zh: {
    title: '隐私政策与 COPPA 合规声明',
    intro: 'CogniStar 致力于为儿童提供安全、离线且零追踪的数字成长环境。本政策阐述了我们如何保护儿童隐私，并符合主流应用商店对儿童类 App 的严格合规要求。',
    sections: [
      {
        icon: Mail,
        title: '1. 开发者与数据控制方',
        desc: 'CogniStar 由 Fodla Media 开发并运营。如有关于儿童在线安全或本政策的任何疑问，请通过邮箱 fodla.media@gmail.com 与我们联系。'
      },
      {
        icon: UserX,
        title: '2. 数据收集与处理',
        desc: '我们绝不收集、存储或共享任何儿童或成年人的个人数据。具体表现为：\n• 无需在线注册，不收集任何账户或个人资料信息。\n• 不请求追踪设备识别码、位置数据、摄像头或麦克风等敏感权限。\n• 纯本地存储：所有冒险进度、MMR/ELO 评分、解锁徽章及导出的 PDF 练习册均 100% 仅保存在用户设备上。'
      },
      {
        icon: Lock,
        title: '3. 订阅与支付安全',
        desc: '所有高级版订阅和内购交易均由 Apple App Store 和 Google Play 官方安全通道处理。Fodla Media 不会获取、查看或存储任何用户的信用卡卡号及账单信息。'
      },
      {
        icon: EyeOff,
        title: '4. 纯净无广告与零分析',
        desc: '为确保极致的儿童体验：\n• 软件内不含任何第三方商业广告。\n• 软件内未接入任何用户画像、行为分析或遥测追踪类第三方 SDK。'
      },
      {
        icon: HeartHandshake,
        title: '5. 严守 COPPA 与 GDPR 规范',
        desc: '我们严格遵守美国儿童在线 privacy 保护法（COPPA）和欧盟通用数据保护条例（GDPR），绝不主动收集 13 周岁以下儿童的个人信息。'
      },
      {
        icon: Database,
        title: '6. 数据保留与销毁',
        desc: '由于数据均离线存在您的设备中，卸载/删除 CogniStar 应用程序将会永久且不可恢复地清除所有本地的游戏进度及自定义设置。'
      }
    ]
  }
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
            {t.sections.map((section: any, idx: number) => {
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
