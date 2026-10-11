'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/lib/dictionaries';

const SECTIONS = ['#about', '#research', '#experience', '#publications', '#writing', '#contact'];

export default function FloatingNav({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      for (const id of SECTIONS) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: '#about', label: dict.nav.about },
    { id: '#research', label: dict.nav.research },
    { id: '#experience', label: dict.nav.experience },
    { id: '#publications', label: dict.nav.publications },
    { id: '#writing', label: dict.nav.writing },
    { id: '#contact', label: dict.nav.contact },
  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Floating navigation"
      className="floating-nav"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, -12px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.id}
          onClick={(e) => handleClick(e, link.id)}
          className={`floating-nav-link${active === link.id ? ' floating-nav-active' : ''}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
