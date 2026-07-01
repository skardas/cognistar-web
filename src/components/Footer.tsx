'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Star } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-md font-bold tracking-tight text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-tr from-purple-600 to-indigo-500">
              <Star className="h-4 w-4 text-white fill-white/20" />
            </div>
            <span>Cogni<span className="text-purple-400">Star</span></span>
          </Link>

          {/* Legal / Pages */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <Link href="/" className="hover:text-white transition-colors">
              {t('links').split('•')[0].trim()}
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t('links').split('•')[1].trim()}
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              {t('links').split('•')[2].trim()}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-slate-500 md:text-right">
            {t('copyright')}
          </p>

        </div>
      </div>
    </footer>
  );
}
