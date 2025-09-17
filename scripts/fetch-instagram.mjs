// Fetch recent public images for an Instagram profile using the r.jina.ai proxy
// and save them to public/instagram.json.
// Usage: npm run fetch:instagram

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROFILE = process.env.INSTAGRAM_PROFILE || 'barbershopkaroabachyan';
const TARGET_URL = `https://r.jina.ai/http://www.instagram.com/${PROFILE}/?hl=en`;

async function main() {
  const res = await fetch(TARGET_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Instagram page: ${res.status} ${res.statusText}`);
  }

  const text = await res.text();

  // Extract image URLs from the page (both generic and JSON-embedded)
  const genericImgRegex = /https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi;
  const displayUrlRegex = /\"display_url\"\s*:\s*\"(https?:\\\\\/\\\\\/[^"]+\.(?:jpg|jpeg|png|webp))/g;
  const ogImageRegex = /<meta[^>]+property=['"]og:image['"][^>]+content=['"]([^'"]+)['"][^>]*>/gi;
  const ogImageSecureRegex = /<meta[^>]+property=['"]og:image:secure_url['"][^>]+content=['"]([^'"]+)['"][^>]*>/gi;
  const twitterImageRegex = /<meta[^>]+name=['"]twitter:image['"][^>]+content=['"]([^'"]+)['"][^>]*>/gi;
  const profilePicRegex = /\"profile_pic_url_hd\"\s*:\s*\"(https?:\\\\\/\\\\\/[^"]+\.(?:jpg|jpeg|png|webp))/g;

  const matchesA = text.match(genericImgRegex) || [];
  const matchesB = Array.from(text.matchAll(displayUrlRegex)).map((m) =>
    m[1].replace(/\\\\\\\//g, '/').replace(/\\\\\//g, '/').replace(/\\\\/g, '')
  );
  const ogA = Array.from(text.matchAll(ogImageRegex)).map((m) => m[1]);
  const ogB = Array.from(text.matchAll(ogImageSecureRegex)).map((m) => m[1]);
  const twA = Array.from(text.matchAll(twitterImageRegex)).map((m) => m[1]);
  const prof = Array.from(text.matchAll(profilePicRegex)).map((m) =>
    m[1].replace(/\\\\\\\//g, '/').replace(/\\\\\//g, '/').replace(/\\\\/g, '')
  );
  const matches = [...matchesA, ...matchesB, ...ogA, ...ogB, ...twA, ...prof];
  // Remove query params and dedupe
  const images = Array.from(
    new Set(
      matches
        .map((u) => u.replace(/&amp;/g, '&'))
        .map((u) => u.split('?')[0])
    )
  );

  // Keep a reasonable number
  const top = images.slice(0, 20);

  const out = { profile: PROFILE, source: TARGET_URL, images: top };
  const outPath = path.resolve(__dirname, '../public/instagram.json');
  await fs.writeFile(outPath, JSON.stringify(out, null, 2), 'utf8');

  console.log(`Saved ${top.length} images to public/instagram.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


