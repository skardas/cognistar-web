'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { Mail, HelpCircle, ChevronDown, ChevronUp, Clock, Smartphone, Sparkles } from 'lucide-react';

const supportTranslations: Record<string, any> = {
  en: {
    title: 'Support & FAQ Center',
    subtitle: 'Have questions or need assistance? Find answers below or contact us at fodla.media@gmail.com.',
    faq_title: 'Frequently Asked Questions',
    form_title: 'Send Us a Message',
    name: 'Name',
    email: 'Email Address',
    message: 'Message',
    submit: 'Send Message',
    success: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
    faqs: [
      {
        q: 'How do I manage or cancel my Premium subscription?',
        a: 'All subscription purchases are handled securely by Apple App Store (iOS) or Google Play Store (Android). You can cancel, upgrade, or modify your billing choices at any time directly through your device\'s Subscription management settings.'
      },
      {
        q: 'What is included in the free tier vs. Premium?',
        a: 'The first 10 levels of the cognitive adventure map are completely free to play. Upgrading to Premium unlocks unlimited access to all 1024 levels, parental dashboard progress graphs, and unlimited custom PDF worksheet generations.'
      },
      {
        q: 'Does the application require an active internet connection?',
        a: 'No. CogniStar is designed for 100% offline gameplay. Once downloaded, your child can play the games and complete cognitive challenges anywhere without requiring Wi-Fi or cellular data.'
      },
      {
        q: 'How can parents generate and print worksheets?',
        a: 'Navigate to the Parent Portal, select the "Worksheets" section, choose the specific cognitive skills you want to practice, and generate the PDF document. You can print it wirelessly using AirPrint or save it to your device.'
      },
      {
        q: 'Can game progress be synced across multiple devices?',
        a: 'To guarantee absolute child privacy and safety, CogniStar stores all gameplay statistics, MMR ratings, and stars locally on-device. Since we do not run online sync databases, progress cannot be transferred or merged between devices.'
      },
      {
        q: 'How does the adaptive difficulty system calculate levels?',
        a: 'Our offline pedagogical engine uses an ELO/MMR rating system. It tracks your child\'s correct/incorrect responses and response speed. If they excel, the engine dynamically introduces more complex tasks; if a topic is challenging, it scales difficulty back and offers visual clues.'
      }
    ]
  },
  tr: {
    title: 'Destek & Sıkça Sorulan Sorular',
    subtitle: 'Sorularınız mı var? Aşağıdaki detaylı cevaplara göz atabilir veya fodla.media@gmail.com adresinden bizimle iletişime geçebilirsiniz.',
    faq_title: 'Sıkça Sorulan Sorular',
    form_title: 'Bize Mesaj Gönderin',
    name: 'Adınız',
    email: 'E-posta Adresiniz',
    message: 'Mesajınız',
    submit: 'Mesajı Gönder',
    success: 'Teşekkürler! Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.',
    faqs: [
      {
        q: 'Premium aboneliğimi nasıl yönetebilirim veya iptal edebilirim?',
        a: 'Tüm satın alma işlemleri Apple App Store (iOS) veya Google Play Store (Android) tarafından güvenli şekilde yönetilir. Aboneliğinizi dilediğiniz zaman cihazınızın ayarlarındaki abonelikler bölümünden iptal edebilir veya değiştirebilirsiniz.'
      },
      {
        q: 'Ücretsiz sürüm ile Premium sürüm arasındaki fark nedir?',
        a: 'Bilişsel macera haritasının ilk 10 seviyesi tamamen ücretsizdir. Premium\'a geçmek; 1024 seviyenin tamamını, veli analiz raporu grafiklerini ve yazdırılabilir kişiye özel PDF çalışma kağıdı üreticisini açar.'
      },
      {
        q: 'Uygulamayı kullanmak için internet bağlantısı gerekiyor mu?',
        a: 'Hayır. CogniStar %100 çevrimdışı (offline) çalışacak şekilde tasarlanmıştır. Cihazınıza indirdikten sonra, çocuklarınız hiçbir internet bağlantısına (Wi-Fi veya hücresel veri) ihtiyaç duymadan oynayabilir.'
      },
      {
        q: 'Bilişsel çalışma kağıtlarını nasıl oluşturup yazdırabilirim?',
        a: 'Veli Analiz Paneli\'ne gidin, "Çalışma Kağıtları" sekmesine tıklayın, gelişim gereken bilişsel kategoriyi seçip PDF oluşturun. PDF\'i AirPrint ile doğrudan kablosuz yazdırabilir veya cihazınıza kaydedebilirsiniz.'
      },
      {
        q: 'Oyun ilerlemesini farklı cihazlar arasında senkronize edebilir miyim?',
        a: 'Çocuk gizliliğini en üst düzeyde korumak amacıyla tüm oyun kayıtları, MMR puanları ve rozetler cihazda yerel olarak saklanır. Çevrimiçi sunucu veritabanları kullanılmadığı için ilerleme başka bir cihaza aktarılamaz.'
      },
      {
        q: 'Zorluk seviyesini ayarlayan adaptif sistem nasıl çalışıyor?',
        a: 'Pedagojik motorumuz, çocuğun doğru/yanlış cevaplarını ve hızını ölçerek çevrimdışı bir ELO/MMR puanı hesaplar. Çocuk geliştikçe sorular dinamik olarak zorlaşır; zorlandığı alanlarda ise sistem ipuçları vererek seviyeyi dengeler.'
      }
    ]
  },
  ku: {
    title: 'Navenda Piştgirî & FAQ',
    subtitle: 'Pirsên we hene? Li bersivên li jêr binêrin an jî bi fodla.media@gmail.com re bişînin.',
    faq_title: 'Pirsên Pir Tên Pirsîn',
    form_title: 'Peyamek ji Me re Bişînin',
    name: 'Navê we',
    email: 'Navnîşana E-postayê',
    message: 'Peyama we',
    submit: 'Peyam Bişîne',
    success: 'Spas! Peyama we bi serkeftî hat şandin. Em ê di demek kurt de bersiva we bidin.',
    faqs: [
      {
        q: 'Ez çawa dikarim abonetiyê Premium birêve bibim an betal bikim?',
        a: 'Hemî danûstendin ji hêla Apple App Store (iOS) an Google Play Store (Android) ve têne kirin. Hûn dikarin ji mîhengên cîhaza xwe abonetiyê betal bikin.'
      },
      {
        q: 'Di navbera guhertoya belaş û Premium de çi ferq heye?',
        a: '10 astên pêşîn ên serpêhatiyê belaş in. Versiyona Premium hemî 1024 astan, pelên PDF çapkirinê û grafîkên analîza dêûbav vedike.'
      },
      {
        q: 'Ji bo lîstinê internet hewce ye?',
        a: 'Na. CogniStar 100% offline dixebite da ku jîngeheke ewle ji bo zarokan peyda bike. Piştî sazkirinê înternet hewce nake.'
      },
      {
        q: 'Ez çawa dikarim pelên xebatê çap bikim?',
        a: 'Biçe panela dêûbav, beşê "Pelên Xebatê" hilbijêre, PDF-ê çêbike û bi AirPrint çap bike.'
      },
      {
        q: 'Ez dikarim pêşkeftinê li ser cîhazên din sync bikim?',
        a: 'Ji bo ewlehiya zarokan, hemî dane li ser cîhazê bi herêmî têne tomar kirin. Ji ber vê yekê veguhastina pêşkeftinê tune ye.'
      },
      {
        q: 'Pergala zehmetiyê ya adaptîf çawa dixebite?',
        a: 'Motora me ya pedagojîk li gorî bersivên rast û demê, ELO/MMR a zarok hesab dike û pirsên guncan derdixe pêşiya wî.'
      }
    ]
  },
  ar: {
    title: 'مركز الدعم والأسئلة الشائعة',
    subtitle: 'هل لديك أسئلة؟ ابحث عن الإجابات أدناه أو راسلنا مباشرة عبر fodla.media@gmail.com.',
    faq_title: 'الأسئلة الشائعة الأكثر تكراراً',
    form_title: 'أرسل لنا رسالة',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'نص الرسالة',
    submit: 'إرسال الرسالة',
    success: 'شكراً لك! تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً.',
    faqs: [
      {
        q: 'كيف يمكنني إدارة أو إلغاء اشتراكي المميز؟',
        a: 'تتم إدارة جميع عمليات الشراء والاشتراكات بأمان بواسطة متجر تطبيقات Apple (iOS) أو متجر Google Play (Android). يمكنك إلغاء أو تغيير باقتك من إعدادات حسابك على جهازك.'
      },
      {
        q: 'ما الفرق بين الإصدار المجاني والإصدار المميز؟',
        a: 'المستويات العشرة الأولى من خريطة المغامرة مجانية بالكامل. الترقية إلى Premium تفتح جميع المستويات الـ 1024، وتقارير الآباء التحليلية، وتوليد أوراق عمل بصيغة PDF.'
      },
      {
        q: 'هل يتطلب التطبيق اتصالاً بالإنترنت؟',
        a: 'لا. تم تصميم تطبيق CogniStar ليعمل دون اتصال بالإنترنت بنسبة 100%. بعد تنزيل التطبيق، يمكن لطفلك اللعب في أي مكان دون الحاجة لشبكة Wi-Fi.'
      },
      {
        q: 'كيف يمكنني طباعة أوراق العمل التعليمية؟',
        a: 'ادخل إلى بوابة الآباء، اختر قسم "أوراق العمل"، حدد المهارة المعرفية المطلوبة، وقم بتوليد ملف PDF لطباعته لاسلكياً عبر AirPrint أو حفظه على جهازك.'
      },
      {
        q: 'هل يمكنني مزامنة تقدم اللعب بين الأجهزة؟',
        a: 'لحماية خصوصية الأطفال، تُحفظ جميع البيانات ونقاط ELO محلياً على الجهاز فقط. لا توجد قواعد بيانات سحابية، لذا لا يمكن نقل التقدم بين الأجهزة.'
      },
      {
        q: 'كيف يقوم نظام الصعوبة التكيفي بتحديد المستويات؟',
        a: 'يقوم المحرك بحساب نقاط ELO/MMR محلياً بناءً على سرعة الإجابة ودقتها لتعديل صعوبة الأسئلة القادمة تلقائياً لتناسب مستوى الطفل.'
      }
    ]
  },
  fr: {
    title: 'Centre d\'Assistance & FAQ',
    subtitle: 'Des questions ou besoin d\'aide ? Consultez la FAQ ou écrivez-nous directement à fodla.media@gmail.com.',
    faq_title: 'Questions Fréquemment Posées',
    form_title: 'Contactez-nous',
    name: 'Nom',
    email: 'Adresse e-mail',
    message: 'Votre message',
    submit: 'Envoyer',
    success: 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    faqs: [
      {
        q: 'Comment gérer ou résilier mon abonnement Premium ?',
        a: 'Toutes les transactions sont gérées de manière sécurisée par l\'App Store d\'Apple (iOS) ou le Google Play Store (Android). Vous pouvez résilier ou modifier votre abonnement via les paramètres de votre appareil.'
      },
      {
        q: 'Quelle est la différence entre l\'offre gratuite et l\'offre Premium ?',
        a: 'Les 10 premiers niveaux sont gratuits. L\'offre Premium débloque l\'accès aux 1024 niveaux, aux graphiques de progression et à la génération de PDF imprimables.'
      },
      {
        q: 'L\'application fonctionne-t-elle sans connexion Internet ?',
        a: 'Oui. CogniStar est conçu pour fonctionner à 100 % hors ligne afin de garantir une sécurité maximale et d\'éviter toute distraction.'
      },
      {
        q: 'Comment imprimer les fiches d\'exercices ?',
        a: 'Dans l\'espace parents, allez dans l\'onglet "Fiches d\'exercices", sélectionnez une compétence et téléchargez le PDF. Vous pouvez l\'imprimer via AirPrint.'
      },
      {
        q: 'Puis-je synchroniser la progression sur plusieurs appareils ?',
        a: 'Par souci de confidentialité, les progrès sont enregistrés uniquement sur l\'appareil. Aucun compte en ligne n\'est requis, la synchronisation est donc impossible.'
      },
      {
        q: 'Comment fonctionne l\'ajustement automatique de la difficulté ?',
        a: 'Le moteur évalue les réponses correctes et le temps de réaction pour calculer un score ELO/MMR hors ligne afin de proposer des exercices adaptés.'
      }
    ]
  },
  de: {
    title: 'Support- & FAQ-Bereich',
    subtitle: 'Haben Sie Fragen? Finden Sie unten Antworten oder kontaktieren Sie uns unter fodla.media@gmail.com.',
    faq_title: 'Häufig gestellte Fragen',
    form_title: 'Nachricht senden',
    name: 'Name',
    email: 'E-Mail-Adresse',
    message: 'Nachricht',
    submit: 'Senden',
    success: 'Vielen Dank! Ihre Nachricht wurde gesendet. Wir antworten Ihnen so schnell wie möglich.',
    faqs: [
      {
        q: 'Wie kann ich mein Premium-Abonnement verwalten oder kündigen?',
        a: 'Abonnements werden direkt über den Apple App Store oder Google Play Store verwaltet. Sie können diese jederzeit in den Einstellungen Ihres Geräts kündigen.'
      },
      {
        q: 'Was ist in der kostenlosen Version enthalten?',
        a: 'Die ersten 10 Level sind kostenlos. Premium schaltet alle 1024 Level, den unbegrenzten PDF-Arbeitsblatt-Export und detaillierte Elternberichte frei.'
      },
      {
        q: 'Benötigt die App eine Internetverbindung?',
        a: 'Nein. CogniStar läuft zu 100 % offline, um eine sichere, ablenkungsfreie Spielumgebung für Kinder zu gewährleisten.'
      },
      {
        q: 'Wie drucke ich die Arbeitsblätter aus?',
        a: 'Gehen Sie in den Elternbereich, wählen Sie "Arbeitsblätter", klicken Sie auf ein Thema und generieren Sie das PDF. Drucken Sie es direkt per WLAN aus.'
      },
      {
        q: 'Kann ich den Fortschritt auf andere Geräte übertragen?',
        a: 'Zum Schutz der Privatsphäre werden alle Daten lokal auf dem Gerät gespeichert. Es gibt keine Online-Synchronisierung, daher ist kein Transfer möglich.'
      },
      {
        q: 'Wie funktioniert die automatische Anpassung der Schwierigkeit?',
        a: 'Die Engine ermittelt ein Offline-MMR/ELO-Rating basierend auf Antwortgeschwindigkeit und Korrektheit, um stets perfekt abgestimmte Aufgaben zu präsentieren.'
      }
    ]
  },
  ru: {
    title: 'Центр поддержки и FAQ',
    subtitle: 'Есть вопросы? Ознакомьтесь с ответами ниже или напишите нам на fodla.media@gmail.com.',
    faq_title: 'Часто задаваемые вопросы',
    form_title: 'Связаться с нами',
    name: 'Имя',
    email: 'Эл. почта',
    message: 'Сообщение',
    submit: 'Отправить сообщение',
    success: 'Спасибо! Ваше сообщение отправлено. Мы ответим вам в ближайшее время.',
    faqs: [
      {
        q: 'Как управлять премиум-подпиской или отменить ее?',
        a: 'Все подписки обрабатываются Apple App Store или Google Play Store. Вы можете отменить или изменить подписку в настройках подписок вашего устройства.'
      },
      {
        q: 'Что входит в бесплатную версию?',
        a: 'Первые 10 уровней приключений полностью бесплатны. Премиум открывает доступ ко всем 1024 уровням, экспорту PDF-заданий и статистике.'
      },
      {
        q: 'Нужен ли интернет для работы приложения?',
        a: 'Нет. Приложение CogniStar работает на 100% автономно (оффлайн), обеспечивая безопасную среду без отвлекающих факторов.'
      },
      {
        q: 'Как распечатать развивающие задания?',
        a: 'Перейдите в кабинет родителей, выберите раздел "Рабочие листы", выберите тему и скачайте PDF для отправки на печать.'
      },
      {
        q: 'Можно ли синхронизировать прогресс между устройствами?',
        a: 'В целях конфиденциальности все данные хранятся локально на устройстве. Без онлайн-аккаунтов перенос прогресса невозможен.'
      },
      {
        q: 'Как система подстраивает сложность заданий?',
        a: 'Наш алгоритм рассчитывает оффлайн ELO/MMR на основе правильности и скорости ответов, автоматически предлагая оптимальный уровень сложности.'
      }
    ]
  },
  zh: {
    title: '帮助与常见问题中心',
    subtitle: '如有任何疑问，请查阅下方常见问题解答或发送邮件至 fodla.media@gmail.com 联系我们。',
    faq_title: '常见问题解答',
    form_title: '给我们留言',
    name: '您的姓名',
    email: '电子邮箱',
    message: '留言内容',
    submit: '发送留言',
    success: '感谢您的留言！我们已成功收到您的请求，并将尽快回复您。',
    faqs: [
      {
        q: '如何管理或取消我的高级版订阅？',
        a: '所有订阅交易均由 Apple App Store (iOS) 或 Google Play Store (Android) 官方代为管理。您随时可以通过设备的系统订阅页面进行管理与取消操作。'
      },
      {
        q: '免费版与 Premium 高级版相比包含哪些内容？',
        a: '冒险地图的前 10 个关卡完全免费。升级至 Premium 将解锁全部 1024 个挑战关卡、无限量 PDF 练习册导出以及家长端分析图表。'
      },
      {
        q: '使用 App 时需要保持网络连接吗？',
        a: '不需要。CogniStar 采用 100% 纯单机/离线设计，为儿童提供绝对安全且心无旁骛的思维训练环境。'
      },
      {
        q: '如何打印生成的 PDF 练习册？',
        a: '进入家长控制台，选择“纸质练习册”选项，挑选薄弱认知类别即可一键生成 PDF 文本。您可通过系统隔空打印（AirPrint）或保存至本地打印。'
      },
      {
        q: '我可以在多台设备间同步游戏进度吗？',
        a: '为了绝对保障儿童个人隐私，我们没有提供云端数据库同步服务。所有进度均 100% 仅存在设备本地，因此进度无法转移或合并。'
      },
      {
        q: 'App 的智能难度递进系统是如何运作的？',
        a: '内置的离线教学算法会根据儿童解题的正确率与用时，实时动态计算其认知 ELO/MMR 等级，始终确保题目难度符合其当前水平。'
      }
    ]
  }
};

export default function SupportPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const t = supportTranslations[locale] || supportTranslations['en'];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {t.subtitle}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left side: FAQ accordion */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>{t.faq_title}</span>
              </h2>
              
              <div className="space-y-4">
                {t.faqs.map((item: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 transition-all duration-300 shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-start font-medium text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="text-sm pr-4 font-semibold">{item.q}</span>
                      {activeFaq === idx ? (
                        <ChevronUp className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    
                    {activeFaq === idx && (
                      <div className="border-t border-slate-200 dark:border-white/5 p-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/30 dark:bg-slate-950/20 whitespace-pre-line">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl" />
              
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>{t.form_title}</span>
              </h2>

              {formSubmitted ? (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-emerald-600 dark:text-emerald-400 text-sm font-semibold animate-in fade-in duration-300">
                  {t.success}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t.name}</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-purple-500 focus:outline-hidden transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t.email}</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-purple-500 focus:outline-hidden transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t.message}</label>
                    <textarea 
                      required 
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-purple-500 focus:outline-hidden transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all cursor-pointer"
                  >
                    {t.submit}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
