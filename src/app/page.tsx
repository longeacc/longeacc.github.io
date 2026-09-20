import type { Metadata } from 'next';
import { LANG_CODES, REDIRECT_LANG, pathForLang } from '@/lib/languages';

const redirectPath = pathForLang(REDIRECT_LANG);
const redirectUrl = `https://clement-longeac.com${redirectPath}`;

const languages: Record<string, string> = { 'x-default': redirectUrl };
LANG_CODES.forEach((code) => {
  languages[code] = `https://clement-longeac.com${pathForLang(code)}`;
});

export const metadata: Metadata = {
  title: 'Clément Longeac',
  robots: { index: false, follow: true },
  alternates: {
    canonical: redirectUrl,
    languages,
  },
};

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${redirectPath}`} />
      <p style={{ padding: '48px', fontFamily: 'sans-serif' }}>
        Redirecting to <a href={redirectPath}>clement-longeac.com{redirectPath}</a>…
      </p>
    </>
  );
}
