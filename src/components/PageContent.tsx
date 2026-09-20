'use client';

import { useEffect } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Research from './Research';
import Experience from './Experience';
import Publications from './Publications';
import Writing from './Writing';
import Contact from './Contact';
import Footer from './Footer';
import { dictionaries, type Lang } from '@/lib/dictionaries';
import { langMeta } from '@/lib/languages';

export default function PageContent({ lang }: { lang: Lang }) {
  const dict = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = dict.htmlLang;
    document.documentElement.dir = langMeta(lang).dir;
  }, [dict.htmlLang, lang]);

  return (
    <>
      <Nav dict={dict} lang={lang} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Research dict={dict} />
      <Experience dict={dict} />
      <Publications dict={dict} />
      <Writing dict={dict} lang={lang} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </>
  );
}
