'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGES, pathForLang, type Lang } from '@/lib/languages';

export default function LangSwitcher({
  current,
  placeholder,
  noResultsLabel,
}: {
  current: Lang;
  placeholder: string;
  noResultsLabel: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentMeta = LANGUAGES.find((l) => l.code === current)!;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (l) =>
        l.nameNative.toLowerCase().includes(q) ||
        l.nameEn.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  function selectLang(code: Lang) {
    setOpen(false);
    router.push(pathForLang(code));
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      selectLang(results[0].code);
    }
  }

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className="lang-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {currentMeta.code.toUpperCase()}
      </button>
      {open && (
        <div className="lang-dropdown" role="listbox">
          <input
            ref={inputRef}
            type="text"
            className="lang-search-input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div className="lang-list">
            {results.length === 0 && <div className="lang-empty">{noResultsLabel}</div>}
            {results.map((l) => (
              <button
                type="button"
                key={l.code}
                className={'lang-option' + (l.code === current ? ' lang-option-active' : '')}
                role="option"
                aria-selected={l.code === current}
                onClick={() => selectLang(l.code)}
              >
                <span className="lang-native">{l.nameNative}</span>
                <span className="lang-en">{l.nameEn}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
