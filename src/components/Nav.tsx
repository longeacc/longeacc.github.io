'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import type { Dictionary, Lang } from '@/lib/dictionaries';

export default function Nav({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const otherLangHref = lang === 'fr' ? '/en/' : '/';

  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          CL<span>.</span>
        </div>
        <ul className={open ? 'nav-open' : ''}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              {dict.nav.about}
            </a>
          </li>
          <li>
            <a href="#research" onClick={() => setOpen(false)}>
              {dict.nav.research}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setOpen(false)}>
              {dict.nav.experience}
            </a>
          </li>
          <li>
            <a href="#publications" onClick={() => setOpen(false)}>
              {dict.nav.publications}
            </a>
          </li>
          <li>
            <a href="#writing" onClick={() => setOpen(false)}>
              {dict.nav.writing}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              {dict.nav.contact}
            </a>
          </li>
        </ul>
        <div className="nav-controls">
          <Link href={otherLangHref} className="lang-toggle" hrefLang={lang === 'fr' ? 'en' : 'fr'}>
            {dict.nav.langSwitchLabel}
          </Link>
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
    </nav>
  );
}
