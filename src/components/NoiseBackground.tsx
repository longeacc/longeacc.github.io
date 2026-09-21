'use client';

import { useEffect, useRef } from 'react';

type Rgb = [number, number, number];

function parseRgbList(value: string): Rgb | null {
  const parts = value.split(',').map((n) => parseFloat(n.trim()) / 255);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
  return [parts[0], parts[1], parts[2]];
}

function hexToRgb(hex: string): Rgb | null {
  const m = hex.trim().match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
}

// site supports a light/dark toggle, so the two mix colors are read from the
// current theme's CSS variables instead of being hardcoded like in the spec
function readThemeColors(): { base: Rgb; accent: Rgb } {
  const styles = getComputedStyle(document.documentElement);
  const base = parseRgbList(styles.getPropertyValue('--bg-rgb')) ?? [0.039, 0.055, 0.102];
  const accent = hexToRgb(styles.getPropertyValue('--line-soft')) ?? [0.075, 0.09, 0.155];
  return { base, accent };
}

export function NoiseBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // resize handling
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
    }
    resize();
    window.addEventListener('resize', resize);

    // Vertex : fullscreen quad
    const vs = `
      attribute vec2 pos;
      void main() { gl_Position = vec4(pos, 0.0, 1.0); }
    `;

    // Fragment : Perlin-like noise very slow
    const fs = `
      precision mediump float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec3 u_base;
      uniform vec3 u_accent;
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
          mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
          u.y
        );
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }
      void main() {
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 p = uv * 3.0;
        p.x += u_time * 0.02;
        p.y += u_time * 0.015;
        float n = fbm(p);
        // Very subtle warm off-white on dark navy (u_base / u_accent supplied per theme)
        vec3 col = mix(u_base, u_accent, n * 0.4);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uBase = gl.getUniformLocation(prog, 'u_base');
    const uAccent = gl.getUniformLocation(prog, 'u_accent');

    let colors = readThemeColors();
    const themeObserver = new MutationObserver(() => {
      colors = readThemeColors();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let raf: number;
    const start = performance.now();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function frame() {
      const t = (performance.now() - start) / 1000;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, t);
      gl!.uniform3f(uBase, colors.base[0], colors.base[1], colors.base[2]);
      gl!.uniform3f(uAccent, colors.accent[0], colors.accent[1], colors.accent[2]);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      if (!prefersReduced) raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="noise-bg" aria-hidden="true" />;
}
