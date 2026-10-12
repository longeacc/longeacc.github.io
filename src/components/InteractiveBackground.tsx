'use client';

import { useEffect, useRef } from 'react';

/**
 * Signature background: a faint field of nodes linked by edges — the DEMNE
 * "routing" motif. Near the cursor, nodes light up in the accent colour and
 * draw edges toward the pointer. Theme-aware, DPR-aware, and static (no loop)
 * when the viewer prefers reduced motion.
 */
export default function InteractiveBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    if (!ctx || !parent) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const readColors = () => {
      const r = getComputedStyle(document.documentElement);
      return {
        accent: (r.getPropertyValue('--cyan').trim() || '#36457C'),
        faint: (r.getPropertyValue('--text-faint').trim() || '#8a90a8'),
      };
    };
    let { accent, faint } = readColors();
    const mo = new MutationObserver(() => ({ accent, faint } = readColors()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const toRgba = (hex: string, a: number) => {
      let h = hex.replace('#', '').trim();
      if (h.length === 3) h = h.split('').map((c) => c + c).join('');
      const n = parseInt(h || '888888', 16);
      return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
    };

    type Node = { x: number; y: number; vx: number; vy: number };
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 128;
    const REACH = 168;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, Math.max(24, (w * h) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = toRgba(faint, (1 - d / LINK) * 0.14);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const a of nodes) {
        const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        const near = d < REACH;
        if (near) {
          ctx.strokeStyle = toRgba(accent, (1 - d / REACH) * 0.5);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = near ? toRgba(accent, 0.9) : toRgba(faint, 0.45);
        ctx.beginPath();
        ctx.arc(a.x, a.y, near ? 2.6 : 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (reduce) draw();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      if (reduce) draw();
    };

    // pause the loop while the tab is hidden (battery / CPU)
    const onVisibility = () => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    parent.addEventListener('pointermove', onMove);
    parent.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('pointermove', onMove);
      parent.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      mo.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="hero-interactive" aria-hidden="true" />;
}
