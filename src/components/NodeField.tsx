'use client';

import { useEffect, useRef } from 'react';

/**
 * Reusable node/edge field (the DEMNE "routing" motif).
 * - fixed: a calm, ambient layer behind the whole page (cursor-reactive).
 * - hoverParent: a per-card field that only animates while its parent is hovered.
 * - color: a hex accent; when omitted it reads the theme's --cyan.
 * Static (no loop) under prefers-reduced-motion.
 */
type Props = {
  color?: string;
  fixed?: boolean;
  hoverParent?: boolean;
  density?: number;
  className?: string;
};

export default function NodeField({
  color,
  fixed = false,
  hoverParent = false,
  density = 16000,
  className = '',
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    if (!ctx || !parent) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const readVar = (name: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

    let accent = color && color.startsWith('#') ? color : readVar('--cyan', '#36457C');
    let faint = readVar('--text-faint', '#8a90a8');
    const refresh = () => {
      if (!(color && color.startsWith('#'))) accent = readVar('--cyan', '#36457C');
      faint = readVar('--text-faint', '#8a90a8');
    };
    const mo = new MutationObserver(refresh);
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
    const LINK = hoverParent ? 96 : 130;
    const REACH = hoverParent ? 150 : 170;
    const sizeOf = () => (fixed ? { width: window.innerWidth, height: window.innerHeight } : parent.getBoundingClientRect());

    const resize = () => {
      const r = sizeOf();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(hoverParent ? 34 : 72, Math.max(hoverParent ? 10 : 22, (w * h) / density)));
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
        ctx.fillStyle = near ? toRgba(accent, 0.9) : toRgba(faint, 0.4);
        ctx.beginPath();
        ctx.arc(a.x, a.y, near ? 2.5 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let running = false;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce) {
        draw();
        return;
      }
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    };

    const pointerTarget: HTMLElement | Window = fixed ? window : parent;
    const onMove = (e: PointerEvent) => {
      if (fixed) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
      if (reduce) draw();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      if (reduce) draw();
    };
    const onEnter = () => start();
    const onParentLeave = () => {
      onLeave();
      stop();
    };

    // pause the ambient (always-on) field while the tab is hidden
    const onVisibility = () => {
      if (hoverParent || reduce) return;
      if (document.hidden) stop();
      else start();
    };

    resize();
    window.addEventListener('resize', resize);
    (pointerTarget as HTMLElement).addEventListener('pointermove', onMove as EventListener);
    document.addEventListener('visibilitychange', onVisibility);

    if (hoverParent) {
      parent.addEventListener('pointerenter', onEnter);
      parent.addEventListener('pointerleave', onParentLeave);
      // render one calm still frame at rest
      draw();
    } else {
      parent.addEventListener?.('pointerleave', onLeave);
      start();
    }

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      (pointerTarget as HTMLElement).removeEventListener('pointermove', onMove as EventListener);
      document.removeEventListener('visibilitychange', onVisibility);
      if (hoverParent) {
        parent.removeEventListener('pointerenter', onEnter);
        parent.removeEventListener('pointerleave', onParentLeave);
      } else {
        parent.removeEventListener?.('pointerleave', onLeave);
      }
      mo.disconnect();
    };
  }, [color, fixed, hoverParent, density]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
