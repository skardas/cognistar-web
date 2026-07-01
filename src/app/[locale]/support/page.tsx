'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function SupportPage() {
  const t = useTranslations('Support');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const faqItems = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') }
  ];

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
              {t('title')}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left side: FAQ accordion */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>{t('faq_title')}</span>
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 transition-all duration-300 shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-start font-medium text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="text-sm pr-4">{item.q}</span>
                      {activeFaq === idx ? <ChevronUp className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />}
                    </button>
                    
                    {activeFaq === idx && (
                      <div className="border-t border-slate-200 dark:border-white/5 p-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/30 dark:bg-slate-950/20">
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
                <span>{t('form_title')}</span>
              </h2>

              {formSubmitted ? (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-emerald-600 dark:text-emerald-400 text-sm font-semibold animate-in fade-in duration-300">
                  {t('success')}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t('name')}</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-purple-500 focus:outline-hidden transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t('email')}</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-purple-500 focus:outline-hidden transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{t('message')}</label>
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
                    {t('submit')}
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
