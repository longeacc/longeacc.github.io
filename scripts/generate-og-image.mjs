import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs/promises';

const CYAN = '#5EEAD4';
const BG = '#0A0E1A';
const TEXT = '#E7E9F5';
const TEXT_MUTED = '#8C93AD';

async function fetchFont(url) {
  const res = await fetch(url);
  return Buffer.from(await res.arrayBuffer());
}

async function getFontUrls() {
  const css = await (
    await fetch(
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
    )
  ).text();
  const blocks = css.split('@font-face').slice(1);
  const fonts = [];
  for (const block of blocks) {
    const family = block.match(/font-family:\s*'([^']+)'/)[1];
    const weight = parseInt(block.match(/font-weight:\s*(\d+)/)[1], 10);
    const url = block.match(/url\(([^)]+)\)/)[1];
    fonts.push({ family, weight, url });
  }
  return fonts;
}

async function main() {
  const fontDefs = await getFontUrls();
  const fontData = await Promise.all(
    fontDefs.map(async (f) => ({
      name: f.family,
      weight: f.weight,
      style: 'normal',
      data: await fetchFont(f.url),
    })),
  );

  const svgBuf = await fs.readFile('public/favicon.svg', 'utf8');
  const m = svgBuf.match(/xlink:href="data:image\/jpeg;base64,([^"]+)"/);
  const logoDataUri = `data:image/jpeg;base64,${m[1]}`;

  const markup = {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BG,
        position: 'relative',
        fontFamily: 'Space Grotesk',
      },
      children: [
        // top-left brand mark: the actual favicon monogram, small
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '40px',
              left: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            },
            children: [
              {
                type: 'img',
                props: {
                  src: logoDataUri,
                  width: 34,
                  height: 34,
                  style: { borderRadius: '4px' },
                },
              },
              {
                type: 'div',
                props: {
                  style: { color: TEXT, fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' },
                  children: 'CL.',
                },
              },
            ],
          },
        },
        // central hero mark: the same favicon monogram, large
        {
          type: 'img',
          props: {
            src: logoDataUri,
            width: 140,
            height: 140,
            style: { borderRadius: '20px', marginBottom: '28px' },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              color: TEXT,
              fontSize: '52px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              display: 'flex',
            },
            children: 'Clément Longeac',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              color: CYAN,
              fontSize: '25px',
              fontWeight: 600,
              marginTop: '16px',
              display: 'flex',
            },
            children: 'Clinical NLP & Biomedical AI',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              width: '120px',
              height: '2px',
              backgroundColor: CYAN,
              marginTop: '32px',
              marginBottom: '32px',
              display: 'flex',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              color: TEXT_MUTED,
              fontSize: '15px',
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.02em',
              display: 'flex',
            },
            children: 'ESIEE Paris · Tremplin Recherche',
          },
        },
        // call to action pill, gives the preview something to click toward
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '36px',
              padding: '10px 22px',
              border: `1px solid ${CYAN}`,
              borderRadius: '3px',
              color: CYAN,
              fontFamily: 'Space Grotesk',
              fontSize: '16px',
              fontWeight: 600,
            },
            children: 'Voir la recherche → clement-longeac.com',
          },
        },
      ],
    },
  };

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: fontData,
  });

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();

  await fs.mkdir('public/images', { recursive: true });
  await fs.writeFile('public/images/og-image.png', png);
  console.log('Wrote public/images/og-image.png', png.length, 'bytes');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
