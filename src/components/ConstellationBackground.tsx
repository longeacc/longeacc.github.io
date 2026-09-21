'use client';

import { useEffect, useRef } from 'react';

const POINT_COUNT = 48;
const LINK_DISTANCE = 140;
const DRIFT_SPEED = 2; // px/s

type Point = { x: number; y: number; vx: number; vy: number };

function readLineColor(): string {
  const styles = getComputedStyle(document.documentElement);
  return styles.getPropertyValue('--line').trim() || '#242C4D';
}

export function ConstellationBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let lineColor = readLineColor();

    function seedPoints() {
      points = Array.from({ length: POINT_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * DRIFT_SPEED,
          vy: Math.sin(angle) * DRIFT_SPEED,
        };
      });
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedPoints();
    }
    resize();
    window.addEventListener('resize', resize);

    const observer = new MutationObserver(() => {
      lineColor = readLineColor();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let raf = 0;
    let last = performance.now();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function step(now: number) {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      if (!prefersReduced) {
        for (const p of points) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }

      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = lineColor;
      ctx!.fillStyle = lineColor;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx!.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.5;
            ctx!.beginPath();
            ctx!.moveTo(points[i].x, points[i].y);
            ctx!.lineTo(points[j].x, points[j].y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 0.6;
      for (const p of points) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      if (!prefersReduced) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="constellation-bg" aria-hidden="true" />;
}
