'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';
import type { Dictionary } from '@/lib/dictionaries';
import { pathForLang, type Lang } from '@/lib/languages';

export default function Nav({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const home = pathForLang(lang);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="wrap">
        <div className="logo">
          CL<span>.</span>
        </div>
        <ul className={open ? 'nav-open' : ''}>
          <li>
            <a href={`${home}#about`} onClick={() => setOpen(false)}>
              {dict.nav.about}
            </a>
          </li>
          <li>
            <a href={`${home}#research`} onClick={() => setOpen(false)}>
              {dict.nav.research}
            </a>
          </li>
          <li>
            <a href={`${home}#experience`} onClick={() => setOpen(false)}>
              {dict.nav.experience}
            </a>
          </li>
          <li>
            <a href={`${home}#publications`} onClick={() => setOpen(false)}>
              {dict.nav.publications}
            </a>
          </li>
          <li>
            <a href={`${home}#writing`} onClick={() => setOpen(false)}>
              {dict.nav.writing}
            </a>
          </li>
          <li>
            <a href={`${home}#contact`} onClick={() => setOpen(false)}>
              {dict.nav.contact}
            </a>
          </li>
        </ul>
        <div className="nav-controls">
          <LangSwitcher
            current={lang}
            placeholder={dict.nav.langSearchPlaceholder}
            noResultsLabel={dict.nav.langSearchNoResults}
          />
          <ThemeToggle label={dict.nav.themeToggleLabel} />
          <button
            type="button"
            className="nav-toggle"
            aria-label={dict.nav.menuToggleLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
