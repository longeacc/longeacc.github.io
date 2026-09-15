'use client';

import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; label: string };
type SubNode = { parent: number; angle: number; radius: number; phase: number };

export default function PipelineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let subNodes: SubNode[] = [];
    let t = 0;
    let rafId = 0;

    const stageLabels = ['RULES', 'CRF', 'TRANSFORMER', 'LLM'];
    const cyan = '#5EEAD4';
    const lineColor = 'rgba(139, 147, 173, 0.25)';
    const speed = 0.008;

    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function layout() {
      nodes = [];
      subNodes = [];
      const marginX = w * 0.12;
      const usableW = w - marginX * 2;
      for (let i = 0; i < 4; i++) {
        const x = marginX + (usableW * i) / 3;
        const y = h * 0.42 + Math.sin(i * 1.3) * h * 0.06;
        nodes.push({ x, y, label: stageLabels[i] });
        const satCount = 3;
        for (let s = 0; s < satCount; s++) {
          const angle = (Math.PI * 2 * s) / satCount + i;
          subNodes.push({
            parent: i,
            angle,
            radius: 20 + (s % 2) * 8,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < nodes.length - 1; i++) {
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y);
      }
      ctx.stroke();

      subNodes.forEach((s) => {
        const parent = nodes[s.parent];
        const a = s.angle + t * 0.3;
        const x = parent.x + Math.cos(a) * s.radius;
        const y = parent.y + Math.sin(a) * s.radius * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 127, 255, 0.35)';
        ctx.fill();
      });

      const totalLen = nodes.length - 1;
      const pulsePos = (t * speed * 40) % totalLen;
      const segIndex = Math.floor(pulsePos);
      const segFrac = pulsePos - segIndex;
      if (nodes[segIndex] && nodes[segIndex + 1]) {
        const a = nodes[segIndex];
        const b = nodes[segIndex + 1];
        const px = a.x + (b.x - a.x) * segFrac;
        const py = a.y + (b.y - a.y) * segFrac;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 18);
        grad.addColorStop(0, 'rgba(94, 234, 212, 0.9)');
        grad.addColorStop(1, 'rgba(94, 234, 212, 0)');
        ctx.beginPath();
        ctx.arc(px, py, 18, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      nodes.forEach((n, i) => {
        const active = i === segIndex || i === segIndex + 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = active ? cyan : '#2A3358';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = active ? cyan : 'rgba(139, 147, 173, 0.4)';
        ctx.stroke();

        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = active ? cyan : 'rgba(140, 147, 173, 0.7)';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + 26);
      });

      t += 1;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    layout();

    const handleResize = () => {
      resize();
      layout();
    };
    window.addEventListener('resize', handleResize);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      rafId = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} id="pipelineCanvas" />;
}
