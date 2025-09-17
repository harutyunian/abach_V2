// Fetch OpenGraph image (and simple fallbacks) from abach.am
// and save to public/abach.json.
// Usage: node ./scripts/fetch-abach.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_SITE = process.env.ABACH_SITE || 'https://abach.am';

function toAbsoluteUrl(url, base) {
  try {
    return new URL(url, base).href;
  } catch {
    return null;
  }
}

async function main() {
  const res = await fetch(TARGET_SITE, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${TARGET_SITE}: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();

  // Try OpenGraph first
  const ogRegex = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i;
  const twitterRegex = /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i;
  const linkIconRegex = /<link[^>]+rel=["'](?:icon|apple-touch-icon)(?:[^"']*)["'][^>]+href=["']([^"']+)["'][^>]*>/i;
  const imgRegex = /<img[^>]+src=["']([^"']+\.(?:jpg|jpeg|png|webp))(?:\?[^"']*)?["'][^>]*>/gi;

  let candidate = null;
  const og = html.match(ogRegex)?.[1];
  if (!candidate && og) candidate = toAbsoluteUrl(og, TARGET_SITE);
  const tw = html.match(twitterRegex)?.[1];
  if (!candidate && tw) candidate = toAbsoluteUrl(tw, TARGET_SITE);
  const icon = html.match(linkIconRegex)?.[1];
  if (!candidate && icon) candidate = toAbsoluteUrl(icon, TARGET_SITE);

  if (!candidate) {
    const imgs = [];
    for (const m of html.matchAll(imgRegex)) {
      const abs = toAbsoluteUrl(m[1], TARGET_SITE);
      if (abs) imgs.push(abs.split('?')[0]);
    }
    // Prefer larger-looking filenames
    imgs.sort((a, b) => (b.length || 0) - (a.length || 0));
    candidate = imgs[0] || null;
  }

  const out = { site: TARGET_SITE, image: candidate };
  const outPath = path.resolve(__dirname, '../public/abach.json');
  await fs.writeFile(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Saved abach image to public/abach.json: ${candidate || 'none found'}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


