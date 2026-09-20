export type Lang =
  | 'en'
  | 'fr'
  | 'es'
  | 'de'
  | 'it'
  | 'pt'
  | 'nl'
  | 'zh'
  | 'ja'
  | 'ko'
  | 'ru'
  | 'ar'
  | 'hi'
  | 'tr'
  | 'pl'
  | 'vi'
  | 'id'
  | 'sv'
  | 'uk'
  | 'th';

export type LangMeta = {
  code: Lang;
  nameNative: string;
  nameEn: string;
  dir: 'ltr' | 'rtl';
};

/** Language the root "/" redirects visitors to. Every language, including this one, is served at /<code>/. */
export const REDIRECT_LANG: Lang = 'en';

export const LANGUAGES: LangMeta[] = [
  { code: 'en', nameNative: 'English', nameEn: 'English', dir: 'ltr' },
  { code: 'fr', nameNative: 'Français', nameEn: 'French', dir: 'ltr' },
  { code: 'es', nameNative: 'Español', nameEn: 'Spanish', dir: 'ltr' },
  { code: 'de', nameNative: 'Deutsch', nameEn: 'German', dir: 'ltr' },
  { code: 'it', nameNative: 'Italiano', nameEn: 'Italian', dir: 'ltr' },
  { code: 'pt', nameNative: 'Português', nameEn: 'Portuguese', dir: 'ltr' },
  { code: 'nl', nameNative: 'Nederlands', nameEn: 'Dutch', dir: 'ltr' },
  { code: 'zh', nameNative: '中文', nameEn: 'Chinese', dir: 'ltr' },
  { code: 'ja', nameNative: '日本語', nameEn: 'Japanese', dir: 'ltr' },
  { code: 'ko', nameNative: '한국어', nameEn: 'Korean', dir: 'ltr' },
  { code: 'ru', nameNative: 'Русский', nameEn: 'Russian', dir: 'ltr' },
  { code: 'ar', nameNative: 'العربية', nameEn: 'Arabic', dir: 'rtl' },
  { code: 'hi', nameNative: 'हिन्दी', nameEn: 'Hindi', dir: 'ltr' },
  { code: 'tr', nameNative: 'Türkçe', nameEn: 'Turkish', dir: 'ltr' },
  { code: 'pl', nameNative: 'Polski', nameEn: 'Polish', dir: 'ltr' },
  { code: 'vi', nameNative: 'Tiếng Việt', nameEn: 'Vietnamese', dir: 'ltr' },
  { code: 'id', nameNative: 'Bahasa Indonesia', nameEn: 'Indonesian', dir: 'ltr' },
  { code: 'sv', nameNative: 'Svenska', nameEn: 'Swedish', dir: 'ltr' },
  { code: 'uk', nameNative: 'Українська', nameEn: 'Ukrainian', dir: 'ltr' },
  { code: 'th', nameNative: 'ไทย', nameEn: 'Thai', dir: 'ltr' },
];

export const LANG_CODES: Lang[] = LANGUAGES.map((l) => l.code);

export function isLang(value: string): value is Lang {
  return (LANG_CODES as string[]).includes(value);
}

export function langMeta(code: Lang): LangMeta {
  return LANGUAGES.find((l) => l.code === code)!;
}

export function pathForLang(code: Lang): string {
  return `/${code}/`;
}
