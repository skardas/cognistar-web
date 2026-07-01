'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeviceMockup from '@/components/DeviceMockup';
import { Brain, ShieldAlert, Cpu, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-slate-950 font-sans antialiased text-slate-200">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column: Text & Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col text-center lg:text-start items-center lg:items-start"
            >
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 tracking-wide"
              >
                <Brain className="h-3 w-3 fill-purple-500/10" />
                Pedagogical Brain Training
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] max-w-lg lg:max-w-none"
              >
                {t('Hero.title').split(' ').map((word, idx) => (
                  <span key={idx} className={idx >= 2 ? "bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent block sm:inline" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed"
              >
                {t('Hero.subtitle')}
              </motion.p>

              {/* Download CTA Badges */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
              >
                {/* App Store Badge */}
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 hover:bg-slate-900/80 hover:border-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group duration-200"
                >
                  <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.63.73-1.18 1.87-1.03 2.97 1.12.09 2.27-.61 2.98-1.43z"/>
                  </svg>
                  <div className="text-start">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Download on the</p>
                    <p className="text-sm font-bold text-white leading-tight">App Store</p>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 hover:bg-slate-900/80 hover:border-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group duration-200"
                >
                  <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                    <path d="M5 3.01C4.54 3.4 4 4.11 4 5.09v13.82c0 .98.54 1.69 1 2.08L15.39 12 5 3.01zM18.87 9.87L16.29 8.4 6.09 19.91l10.2 5.92 2.58-1.47c.73-.42 1.13-1.08 1.13-1.92v-8.72c0-.84-.4-1.5-1.13-1.92z"/>
                  </svg>
                  <div className="text-start">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Get it on</p>
                    <p className="text-sm font-bold text-white leading-tight">Google Play</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D-Tilt Mockups */}
            <div className="relative flex items-center justify-center">
              <DeviceMockup />
            </div>
          </div>
        </section>

        {/* Bento Features Grid Section */}
        <section className="relative border-t border-white/5 bg-slate-950/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {t('Features.title')}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-400">
                {t('Features.subtitle')}
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Feature 1: 144+ Logic Games (Large Card spanning 2 cols) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8 sm:col-span-2 hover:bg-slate-900/50 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 group">
                <div className="absolute top-0 right-0 -z-10 h-44 w-44 rounded-full bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-all duration-300" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform duration-200">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{t('Features.f1_title')}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-md">{t('Features.f1_desc')}</p>
                </div>
                <div className="mt-8 flex items-center gap-1 text-xs font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span>Explore Games</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>

              {/* Feature 2: 100% Offline (Regular Card) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-white/10 transition-all duration-300 group">
                <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{t('Features.f2_title')}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t('Features.f2_desc')}</p>
                </div>
                <Link href="/privacy" className="mt-8 flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  <span>Privacy First</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Feature 3: AI Engine (Regular Card) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-white/10 transition-all duration-300 group">
                <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{t('Features.f3_title')}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t('Features.f3_desc')}</p>
                </div>
                <div className="mt-8 flex items-center gap-1 text-xs font-bold text-indigo-400">
                  <span>Smart Pacing</span>
                </div>
              </div>

              {/* Feature 4: Parent Raporları & PDF (Large Card spanning 2 cols) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8 sm:col-span-2 hover:bg-slate-900/50 hover:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 group">
                <div className="absolute top-0 right-0 -z-10 h-44 w-44 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-all duration-300" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{t('Features.f4_title')}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-md">{t('Features.f4_desc')}</p>
                </div>
                <Link href="/support" className="mt-8 flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <span>Parent Portal</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
