'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { FileText, Tablet, Smartphone, ExternalLink } from 'lucide-react';
import { termsContent } from './content';

const APPLE_EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';
const PLAY_TERMS = 'https://play.google.com/about/play-terms/';

export default function TermsPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const t = termsContent[locale] || termsContent.en;

  const blocks = [
    { icon: Tablet, title: t.iosTitle, paragraphs: t.ios, link: { href: APPLE_EULA, label: t.appleEula } },
    { icon: Smartphone, title: t.androidTitle, paragraphs: t.android, link: { href: PLAY_TERMS, label: t.playTerms } },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{t.effective}</p>
          </div>

          <div className="mt-16 space-y-10">
            {blocks.map((block) => {
              const Icon = block.icon;
              return (
                <section
                  key={block.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 p-8 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{block.title}</h2>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <a
                    href={block.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:underline dark:text-purple-400"
                  >
                    {block.link.label}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </section>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
