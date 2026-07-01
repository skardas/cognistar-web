'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, HeartHandshake, EyeOff } from 'lucide-react';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t('title')}
            </h1>
            <p className="mt-4 text-slate-400 leading-relaxed">
              {t('intro')}
            </p>
          </div>

          {/* Details */}
          <div className="mt-16 space-y-12">
            
            {/* Section 1: COPPA */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-white">{t('coppa_title')}</h2>
              </div>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                {t('coppa_desc')}
              </p>
            </div>

            {/* Section 2: Local Database */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/30 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <EyeOff className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-white">{t('storage_title')}</h2>
              </div>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                {t('storage_desc')}
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
