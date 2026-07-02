'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeviceMockup from '@/components/DeviceMockup';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import { 
  Brain, ShieldAlert, Cpu, BarChart3, ArrowRight, EyeOff, Sparkles, 
  HelpCircle, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle, BookOpen
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } }
  };

  const sampleCategories = [
    { title: t('Categories.cat1_title'), desc: t('Categories.cat1_desc') },
    { title: t('Categories.cat2_title'), desc: t('Categories.cat2_desc') },
    { title: t('Categories.cat3_title'), desc: t('Categories.cat3_desc') },
    { title: t('Categories.cat4_title'), desc: t('Categories.cat4_desc') },
    { title: t('Categories.cat5_title'), desc: t('Categories.cat5_desc') },
    { title: t('Categories.cat6_title'), desc: t('Categories.cat6_desc') },
    { title: t('Categories.cat7_title'), desc: t('Categories.cat7_desc') },
    { title: t('Categories.cat8_title'), desc: t('Categories.cat8_desc') }
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />

      <main className="flex-1">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            
            {/* Left Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col text-center lg:text-start items-center lg:items-start"
            >
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-600 dark:text-purple-300 tracking-wide"
              >
                <Sparkles className="h-3 w-3 fill-purple-500/20" />
                {t('Hero.badge')}
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1] max-w-lg lg:max-w-none"
              >
                {t('Hero.title').split(' ').map((word, idx) => (
                  <span key={idx} className={idx >= 2 ? "bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent block sm:inline" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
              >
                {t('Hero.subtitle')}
              </motion.p>

              {/* Badges */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
              >
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-5 py-3 shadow-sm hover:shadow-md hover:border-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group duration-200"
                >
                  <svg className="h-6 w-6 fill-slate-900 dark:fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.63.73-1.18 1.87-1.03 2.97 1.12.09 2.27-.61 2.98-1.43z"/>
                  </svg>
                  <div className="text-start">
                    <p className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 tracking-wider">{t('Hero.download_on')}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">App Store</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-5 py-3 shadow-sm hover:shadow-md hover:border-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group duration-200"
                >
                  <svg className="h-6 w-6 fill-slate-900 dark:fill-white" viewBox="0 0 24 24">
                    <path d="M5 3.01C4.54 3.4 4 4.11 4 5.09v13.82c0 .98.54 1.69 1 2.08L15.39 12 5 3.01zM18.87 9.87L16.29 8.4 6.09 19.91l10.2 5.92 2.58-1.47c.73-.42 1.13-1.08 1.13-1.92v-8.72c0-.84-.4-1.5-1.13-1.92z"/>
                  </svg>
                  <div className="text-start">
                    <p className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 tracking-wider">{t('Hero.get_it_on')}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Google Play</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Mockup */}
            <div className="relative flex items-center justify-center">
              <DeviceMockup />
            </div>
          </div>
        </section>

        {/* Bento Box Core Features */}
        <section className="relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {t('Features.title')}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
                {t('Features.subtitle')}
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Feature 1 */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 sm:col-span-2 hover:bg-white/80 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-xs">
                <div className="absolute top-0 right-0 -z-10 h-44 w-44 rounded-full bg-purple-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{t('Features.f1_title')}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">{t('Features.f1_desc')}</p>
                </div>
                <div className="mt-8 flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400">
                  <span>Adaptive ELO engine loaded</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 hover:bg-white/80 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-xs">
                <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{t('Features.f2_title')}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('Features.f2_desc')}</p>
                </div>
                <Link href="/privacy" className="mt-8 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>{t('Navbar.privacy')}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Feature 3 */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 hover:bg-white/80 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-xs">
                <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{t('Features.f3_title')}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('Features.f3_desc')}</p>
                </div>
                <div className="mt-8 flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>Cognitive ELO Scaling active</span>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 sm:col-span-2 hover:bg-white/80 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-xs">
                <div className="absolute top-0 right-0 -z-10 h-44 w-44 rounded-full bg-indigo-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{t('Features.f4_title')}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">{t('Features.f4_desc')}</p>
                </div>
                <Link href="/parent-portal" className="mt-8 flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>{t('Navbar.parent_portal')}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Screenshot Gallery Section (New!) */}
        <ScreenshotGallery />

        {/* Cognitive ELO Scaling & MMR */}
        <section className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Text details */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{t('MMR.badge')}</span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                {t('MMR.title')}
              </h2>
              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('MMR.desc')}
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{t('MMR.list_item1_title')}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('MMR.list_item1_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{t('MMR.list_item2_title')}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('MMR.list_item2_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{t('MMR.list_item3_title')}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('MMR.list_item3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="rounded-3xl border border-slate-200/60 dark:border-white/5 bg-slate-100 dark:bg-slate-900/20 p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-purple-500/5 blur-2xl" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-6">{t('MMR.chart_title')}</h3>
              <div className="space-y-4">
                
                {/* 1 */}
                <div className="rounded-2xl bg-white dark:bg-slate-900/60 p-4 border border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">{t('MMR.grade1_title')}</span>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">MMR 800 - 1500</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-linear-to-r from-purple-500 to-indigo-500" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">{t('MMR.grade1_desc')}</p>
                </div>

                {/* 2 */}
                <div className="rounded-2xl bg-white dark:bg-slate-900/60 p-4 border border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">{t('MMR.grade2_title')}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">MMR 1500 - 2500</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-linear-to-r from-purple-500 to-indigo-500" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">{t('MMR.grade2_desc')}</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 144 Categories List section */}
        <section className="relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                {t('Categories.title')}
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
                {t('Categories.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sampleCategories.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 p-6 hover:shadow-lg dark:hover:shadow-purple-500/5 hover:border-purple-500/20 dark:hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h4 className="mt-4 font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility & Zen Mode Section */}
        <section className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Zen Mode Visual */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-900/20 p-8 shadow-xs">
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{t('Zen.card_title')}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">{t('Zen.label1')}</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">{t('Zen.val1')}</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">{t('Zen.label2')}</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">{t('Zen.val2')}</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">{t('Zen.label3')}</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">{t('Zen.val3')}</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">{t('Zen.label4')}</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">{t('Zen.val4')}</span>
                </div>
              </div>
            </div>

            {/* Zen Mode Text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{t('Zen.badge')}</span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                {t('Zen.title')}
              </h2>
              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('Zen.desc')}
              </p>
              
              <div className="mt-8 flex gap-4">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-4 w-1/2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">{t('Zen.c1_title')}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{t('Zen.c1_desc')}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-4 w-1/2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">{t('Zen.c2_title')}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{t('Zen.c2_desc')}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Free trial levels & worksheet limits */}
        <section className="relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">{t('Limits.badge')}</span>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                  {t('Limits.title')}
                </h2>
                <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('Limits.desc')}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 rounded-2xl p-5">
                    <span className="text-purple-600 dark:text-purple-400 text-lg font-extrabold">{t('Limits.c1_title')}</span>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-300 text-xs mt-2">{t('Limits.c1_title')}</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{t('Limits.c1_desc')}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 rounded-2xl p-5">
                    <span className="text-purple-600 dark:text-purple-400 text-lg font-extrabold">{t('Limits.c2_title')}</span>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-300 text-xs mt-2">{t('Limits.c2_title')}</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{t('Limits.c2_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Cloned Parent Dashboard PDF Mockup */}
              <div className="rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-900 p-2 overflow-hidden shadow-2xl relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950">
                  <Image 
                    fill
                    className="object-cover opacity-90 select-none pointer-events-none"
                    src={`/screenshots/${locale}/android_tablet/7_parent_dashboard.png`} 
                    alt="CogniStar Parent Dashboard PDF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-white">
                    <BookOpen className="h-3.5 w-3.5" />
                    {t('Limits.label')}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
