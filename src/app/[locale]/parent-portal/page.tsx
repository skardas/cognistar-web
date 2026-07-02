'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { BarChart3, Printer, ShieldAlert, Award, ChevronRight, FileText } from 'lucide-react';
import { Link } from '@/i18n/routing';

const parentPortalTranslations: Record<string, any> = {
  en: {
    title: 'Parent Portal & Cognitive Analytics',
    subtitle: 'Track your child\'s development, view cognitive ELO graphs, and export customized printable worksheets.',
    download_app: 'Download App to Access Portal',
    feature1_title: 'Detailed Analytics Reports',
    feature1_desc: 'Monitor progress across 8 cognitive categories including memory, logic, and spatial reasoning. Track ELO progression over time.',
    feature2_title: 'Custom PDF Worksheets',
    feature2_desc: 'Export personalized worksheets tailored to your child\'s weaker areas. Print wirelessly and practice offline.',
    feature3_title: '100% Offline & Private',
    feature3_desc: 'For ultimate child privacy, all reports are calculated and stored locally on the device. No cloud sync, zero server tracking.'
  },
  tr: {
    title: 'Veli Paneli & Bilişsel Analizler',
    subtitle: 'Çocuğunuzun gelişimini takip edin, bilişsel ELO grafiklerini inceleyin ve kişiye özel yazdırılabilir çalışma kağıtları dışa aktarın.',
    download_app: 'Panele Erişmek İçin Uygulamayı İndirin',
    feature1_title: 'Detaylı Analiz Raporları',
    feature1_desc: 'Hafıza, mantık ve uzamsal düşünme dahil 8 farklı bilişsel alandaki gelişimi izleyin. Zaman içindeki ELO gelişimini takip edin.',
    feature2_title: 'Özel PDF Çalışma Kağıtları',
    feature2_desc: 'Çocuğunuzun gelişim göstermesi gereken alanlara özel tasarlanmış çalışma kağıtlarını dışa aktarın. Kablosuz olarak basın ve kalemle çalışın.',
    feature3_title: '%100 Çevrimdışı ve Güvenli',
    feature3_desc: 'En üst düzey çocuk gizliliği için tüm raporlar cihaz üzerinde yerel olarak hesaplanır ve saklanır. Bulut senkronizasyonu veya sunucu takibi yoktur.'
  },
  ku: {
    title: 'Panela Dêûbavan & Analîzên Hişî',
    subtitle: 'Gelişimiya zarokê xwe bişopînin, grafîkên ELO bibînin û pelên xebatê yên çapkirî derxînin.',
    download_app: 'Ji bo Têketina Panelê Sepanê Daxînin',
    feature1_title: 'Raporên Analîza Berfireh',
    feature1_desc: 'Pêşveçûna di 8 kategoriyên hişî de bişopînin. Grafîkên ELO yên demkî kontrol bikin.',
    feature2_title: 'Pelên PDF yên Taybet',
    feature2_desc: 'Ji bo qadên qels pelên xebatê yên taybet çêbikin, bi serhêl çap bikin û offline bixebitin.',
    feature3_title: '100% Offline & Ewledar',
    feature3_desc: 'Hemî rapor li ser cîhazê bi herêmî têne tomar kirin. Bê şopandin û bê server.'
  },
  ar: {
    title: 'لوحة الأولياء والتحليلات المعرفية',
    subtitle: 'تتبع تطور طفلك المعرفي، واطلع على رسوم ELO البيانية، وقم بتصدير أوراق عمل مخصصة للطباعة.',
    download_app: 'تحميل التطبيق للوصول إلى لوحة التحكم',
    feature1_title: 'تقارير تحليلية مفصلة',
    feature1_desc: 'راقب التقدم في 8 فئات معرفية بما في ذلك الذاكرة والمنطق. تتبع نقاط ELO بمرور الوقت.',
    feature2_title: 'أوراق عمل PDF مخصصة',
    feature2_desc: 'قم بتصدير أوراق عمل مخصصة للمهارات التي تحتاج إلى تقوية ليتدرب عليها الطفل محلياً بالقلم والورقة.',
    feature3_title: '100% دون اتصال وآمن',
    feature3_desc: 'لحماية الخصوصية بالكامل، يتم حساب جميع التقارير وحفظها محلياً على الجهاز دون أي تتبع سحابي.'
  },
  fr: {
    title: 'Espace Parents & Analyses Cognitives',
    subtitle: 'Suivez le développement de votre enfant, visualisez les graphiques ELO et exportez des fiches d\'exercices imprimables personnalisées.',
    download_app: 'Télécharger l\'application pour accéder au portail',
    feature1_title: 'Rapports d\'Analyse Détaillés',
    feature1_desc: 'Suivez la progression dans 8 domaines cognitifs. Visualisez l\'évolution du score ELO au fil du temps.',
    feature2_title: 'Fiches d\'Exercices PDF sur mesure',
    feature2_desc: 'Exportez des fiches personnalisées ciblant les points faibles. Imprimez sans fil et entraînez-vous hors ligne.',
    feature3_title: '100% Hors-ligne & Sécurisé',
    feature3_desc: 'Pour une confidentialité absolue, tous les rapports sont stockés localement sur l\'appareil. Aucun suivi sur serveur.'
  },
  de: {
    title: 'Elternbereich & Kognitive Analysen',
    subtitle: 'Verfolgen Sie die Entwicklung Ihres Kindes, sehen Sie kognitive ELO-Kurven und exportieren Sie druckbare Arbeitsblätter.',
    download_app: 'App herunterladen, um das Portal zu nutzen',
    feature1_title: 'Detaillierte Analyseberichte',
    feature1_desc: 'Überwachen Sie den Fortschritt in 8 Bereichen. Verfolgen Sie die ELO-Entwicklung im Zeitverlauf.',
    feature2_title: 'Individuelle PDF-Arbeitsblätter',
    feature2_desc: 'Exportieren Sie maßgeschneiderte Übungsblätter für Schwachpunkte. Kabellos drucken und offline üben.',
    feature3_title: '100% Offline & Sicher',
    feature3_desc: 'Für maximalen Datenschutz werden alle Berichte lokal auf dem Gerät berechnet und gespeichert. Keine Server-Übertragung.'
  },
  ru: {
    title: 'Панель родителей и когнитивная аналитика',
    subtitle: 'Отслеживайте развитие ребенка, просматривайте графики ELO и экспортируйте индивидуальные задания для печати.',
    download_app: 'Скачать приложение для доступа к панели',
    feature1_title: 'Подробные отчеты',
    feature1_desc: 'Контролируйте прогресс по 8 направлениям мышления. Следите за ростом ELO со временем.',
    feature2_title: 'Индивидуальные PDF-задания',
    feature2_desc: 'Создавайте задания, нацеленные на проработку слабых навыков. Распечатывайте и занимайтесь оффлайн.',
    feature3_title: '100% локально и конфиденциально',
    feature3_desc: 'Все отчеты формируются и хранятся исключительно на устройстве. Никакой синхронизации с облаком.'
  },
  zh: {
    title: '家长控制台与成长分析报告',
    subtitle: '跟踪孩子的脑力成长，查看认知 ELO 曲线，并导出量身定制的纸质练习册。',
    download_app: '下载 App 以访问控制台',
    feature1_title: '精细化成长报告',
    feature1_desc: '全面监测记忆力、逻辑等 8 大脑力维度的表现，实时查看 ELO 评分随时间的变化。',
    feature2_title: '定制 PDF 练习册',
    feature2_desc: '针对孩子的薄弱环节一键生成专属工作表，支持无线打印，线下纸笔练习巩固。',
    feature3_title: '100% 离线与绝对隐私',
    feature3_desc: '所有分析均在设备本地计算并保存，无需上传云端，零服务器数据追踪，保障儿童隐私。'
  }
};

export default function ParentPortalPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const t = parentPortalTranslations[locale] || parentPortalTranslations['en'];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Award className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="#download" 
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.download_app}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Grid of features */}
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            
            {/* Feature 1 */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 shadow-xs hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">{t.feature1_title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.feature1_desc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 shadow-xs hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Printer className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">{t.feature2_title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.feature2_desc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 shadow-xs hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">{t.feature3_title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.feature3_desc}
              </p>
            </div>

          </div>

          {/* Action Card explaining how to open it in-app */}
          <div className="mt-16 rounded-3xl border border-slate-200/60 dark:border-white/5 bg-linear-to-r from-purple-500/5 to-indigo-500/5 p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <FileText className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">How do I access this dashboard in the app?</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When playing CogniStar on your iOS or Android device, tap on the <strong className="text-slate-900 dark:text-white">"Veli" (Parent)</strong> tab at the bottom navigation bar. Complete the parental verification gate (simple multiplication puzzle) to instantly access analytics reports and printable PDF generators.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/support" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 underline">
                Go to Support Center
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
