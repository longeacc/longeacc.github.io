'use client';

import { useEffect } from 'react';
import Nav from './Nav';
import FloatingNav from './FloatingNav';
import Hero from './Hero';
import AnimatedSection from './AnimatedSection';
import About from './About';
import Research from './Research';
import Experience from './Experience';
import Publications from './Publications';
import Projects from './Projects';
import TechStack from './TechStack';
import AreasOfFocus from './AreasOfFocus';
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
      <FloatingNav dict={dict} />
      <Hero dict={dict} />
      <AnimatedSection>
        <About dict={dict} />
      </AnimatedSection>
      <AnimatedSection>
        <Research dict={dict} />
      </AnimatedSection>
      <AnimatedSection>
        <Experience dict={dict} />
      </AnimatedSection>
      <AnimatedSection>
        <Publications dict={dict} lang={lang} />
      </AnimatedSection>
      <AnimatedSection>
        <Projects dict={dict} lang={lang} />
      </AnimatedSection>
      <AnimatedSection>
        <TechStack dict={dict} />
      </AnimatedSection>
      <AnimatedSection>
        <AreasOfFocus dict={dict} />
      </AnimatedSection>
      <AnimatedSection>
        <Writing dict={dict} lang={lang} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact dict={dict} />
      </AnimatedSection>
      <Footer dict={dict} />
    </>
  );
}
