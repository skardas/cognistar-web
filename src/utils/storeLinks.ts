export function getLocalizedStoreLinks(locale: string) {
  // App Store country code mapping
  const appStoreLocaleMap: Record<string, string> = {
    tr: 'tr',
    fr: 'fr',
    de: 'de',
    ru: 'ru',
    ar: 'ae',
    zh: 'cn',
    en: 'us',
    ku: 'us',
  };

  // Google Play language parameter (`hl`) mapping
  const playStoreLocaleMap: Record<string, string> = {
    tr: 'tr',
    fr: 'fr',
    de: 'de',
    ru: 'ru',
    ar: 'ar',
    zh: 'zh',
    en: 'en',
    ku: 'ku',
  };

  const storeCountry = appStoreLocaleMap[locale] || 'us';
  const playLang = playStoreLocaleMap[locale] || 'en';

  return {
    appStore: `https://apps.apple.com/${storeCountry}/app/cognistar-brain-training/id6787395641`,
    playStore: `https://play.google.com/store/apps/details?id=com.cognistar.brain&hl=${playLang}`,
  };
}
