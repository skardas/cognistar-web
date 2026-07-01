import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
