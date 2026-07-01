'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { routing, Link, usePathname, useRouter } from '@/i18n/routing';
import { Globe, Menu, X, Star } from 'lucide-react';

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  tr: 'Türkçe',
  ar: 'العربية',
  ku: 'Kurdî',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский',
  zh: '简体中文'
};

export default function Header() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/75 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-black tracking-tight text-white group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-tr from-purple-600 to-indigo-500 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
            <Star className="h-5 w-5 text-white fill-white/20" />
          </div>
          <span>Cogni<span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Star</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            {t('home')}
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            {t('privacy')}
          </Link>
          <Link href="/support" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            {t('support')}
          </Link>
        </nav>

        {/* Right Section: Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{LANGUAGE_NAMES[locale]}</span>
            </button>

            {langDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 z-50 w-44 rounded-2xl border border-white/5 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  {routing.locales.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang)}
                      className={`flex w-full items-center rounded-xl px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                        locale === lang
                          ? 'bg-purple-600 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {LANGUAGE_NAMES[lang]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            href="/support"
            className="rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t('parent_portal')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Language Selector (Icon only on mobile header) */}
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 cursor-pointer"
          >
            <Globe className="h-4 w-4" />
          </button>
          
          {langDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
              <div className="absolute right-14 top-14 z-50 w-40 rounded-2xl border border-white/5 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl">
                {routing.locales.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`flex w-full items-center rounded-xl px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                      locale === lang ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {LANGUAGE_NAMES[lang]}
                  </button>
                ))}
              </div>
            </>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 py-4 md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t('support')}
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg"
            >
              {t('parent_portal')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
