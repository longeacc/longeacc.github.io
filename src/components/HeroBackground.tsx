"use client";
import { useEffect, useRef } from "react";

/**
 * Hero background: slow domain-warped flow field, reacts gently to the pointer.
 * - Raw WebGL (no three.js): ~0 kB of extra JS.
 * - Starts only when the browser is idle, so it never delays first paint (LCP).
 * - Pauses when the hero is off-screen or the tab is hidden.
 * - prefers-reduced-motion: renders a single still frame.
 * - Palette follows the site theme (dark navy / warm light).
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uPointer;
uniform vec3  uBg;
uniform vec3  uInk;
uniform vec3  uAccent;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = r * p * 2.02; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y;
  float t = uTime * 0.045;

  // pointer bends the field locally (soft falloff, never snaps)
  vec2 d = p - uPointer;
  float pull = exp(-dot(d, d) * 5.0) * 0.35;
  p += d * pull * 0.5;

  // two-stage domain warp -> long silky filaments
  vec2 q = vec2(fbm(p * 1.3 + t), fbm(p * 1.3 - t + 4.2));
  vec2 r = vec2(fbm(p * 1.6 + 2.0 * q + vec2(1.7, 9.2) + t * 1.3),
                fbm(p * 1.6 + 2.0 * q + vec2(8.3, 2.8) - t * 1.1));
  float f = fbm(p * 1.4 + 2.2 * r);

  // thin contour lines of the field instead of a flat gradient
  float dist  = abs(fract(f * 7.0) - 0.5);          // 0.5 right on a contour
  float lines = smoothstep(0.472, 0.497, dist);
  float body  = smoothstep(0.35, 0.95, f);

  vec3 col = uBg;
  col = mix(col, uAccent, body * 0.10);
  col = mix(col, uInk, lines * 0.075);
  col = mix(col, uAccent, lines * smoothstep(0.55, 0.9, f) * 0.20);

  // vignette so text always sits on the calmest area
  float vig = 1.0 - smoothstep(0.25, 1.25, length(uv - vec2(0.35, 0.5)) * 1.1);
  col = mix(uBg, col, vig);

  // fine grain: kills banding, gives a printed feel
  col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.012;

  gl_FragColor = vec4(col, 1.0);
}
`;

function hexToVec3(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const PALETTES = {
  dark: { bg: "#0A0E1A", ink: "#F0EDE6", accent: "#8B7FFF" },
  light: { bg: "#FAFAF8", ink: "#1A1810", accent: "#6D63E8" },
} as const;

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
      if (!gl) return;

      const compile = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      const u = (n: string) => gl.getUniformLocation(prog, n);
      const uRes = u("uRes"), uTime = u("uTime"), uPointer = u("uPointer");
      const uBg = u("uBg"), uInk = u("uInk"), uAccent = u("uAccent");

      const applyTheme = () => {
        const theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        const p = PALETTES[theme];
        gl.uniform3fv(uBg, hexToVec3(p.bg));
        gl.uniform3fv(uInk, hexToVec3(p.ink));
        gl.uniform3fv(uAccent, hexToVec3(p.accent));
      };
      applyTheme();
      const themeObs = new MutationObserver(() => { applyTheme(); if (reduced) draw(0); });
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

      // render at reduced resolution: the field is soft, nobody can tell, GPU stays cool
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      const resize = () => {
        const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
        const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
        if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uRes, canvas.width, canvas.height);
      };

      // pointer in the same space as the shader (centered, height-normalised), smoothed
      const target = { x: 10, y: 10 };
      const cur = { x: 10, y: 10 };
      const onMove = (e: PointerEvent) => {
        const r = canvas.getBoundingClientRect();
        target.x = (e.clientX - r.left - r.width / 2) / r.height;
        target.y = -(e.clientY - r.top - r.height / 2) / r.height;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      let raf = 0;
      let visible = true;
      const t0 = performance.now();
      let last = t0;

      function draw(time: number) {
        resize();
        cur.x += (target.x - cur.x) * 0.06;
        cur.y += (target.y - cur.y) * 0.06;
        gl!.uniform1f(uTime, time);
        gl!.uniform2f(uPointer, cur.x, cur.y);
        gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      }

      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        if (now - last < 1000 / 40) return; // cap at 40 fps
        last = now;
        draw((now - t0) / 1000 + 12.0);
      };

      const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
      io.observe(canvas);

      canvas.style.opacity = "0";
      canvas.style.transition = "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1)";
      draw(12.0);
      requestAnimationFrame(() => { canvas.style.opacity = "1"; });
      if (!reduced) raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        themeObs.disconnect();
        window.removeEventListener("pointermove", onMove);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    };

    // never compete with first paint
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    const handle = ric ? ric(start, { timeout: 1200 }) : window.setTimeout(start, 150);

    return () => {
      cancelled = true;
      if (!ric) clearTimeout(handle as number);
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hero-bg"
      style={{
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    />
  );
}
