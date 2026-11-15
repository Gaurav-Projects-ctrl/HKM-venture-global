/**
 * Image optimiser — run after adding or replacing photos:
 *     npm run images
 *
 * For every JPG in public/images and public/headers it writes AVIF + WebP copies
 * in several widths into an  opt/  sub-folder (e.g. images/opt/home-about-800.avif).
 * The site serves the smallest file the visitor's screen needs; the original JPG
 * stays as a fallback for very old browsers.
 *
 * It also converts the home-page earth animation frames to WebP
 * (public/frames/webp = desktop, public/frames/sm = phones).
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const pub = (...p) => path.join(root, 'public', ...p);

const SETS = [
  { dir: 'images',  widths: [480, 800, 1200, 1920] },
  { dir: 'headers', widths: [640, 1080, 1600, 1920] },
];

let made = 0, skipped = 0;
const fresh = (src, out) => fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;

for (const { dir, widths } of SETS) {
  const inDir = pub(dir), outDir = pub(dir, 'opt');
  if (!fs.existsSync(inDir)) continue;
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(inDir).filter((f) => /\.jpe?g$/i.test(f))) {
    const src = path.join(inDir, file);
    const name = file.replace(/\.jpe?g$/i, '');
    const { width: srcW } = await sharp(src).metadata();
    const ws = [...new Set(widths.map((w) => Math.min(w, srcW)))];
    for (const w of ws) {
      for (const [ext, opts] of [['avif', { quality: 50, effort: 4 }], ['webp', { quality: 72, effort: 5 }]]) {
        const out = path.join(outDir, `${name}-${w}.${ext}`);
        if (fresh(src, out)) { skipped++; continue; }
        await sharp(src).resize({ width: w, withoutEnlargement: true })[ext](opts).toFile(out);
        made++;
      }
    }
  }
}

// Earth animation frames
const frames = fs.readdirSync(pub('frames')).filter((f) => /^frame_\d+\.jpg$/.test(f));
for (const [sub, w, q] of [['webp', 1280, 70], ['sm', 768, 66]]) {
  fs.mkdirSync(pub('frames', sub), { recursive: true });
  for (const f of frames) {
    const src = pub('frames', f), out = pub('frames', sub, f.replace('.jpg', '.webp'));
    if (fresh(src, out)) { skipped++; continue; }
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: q, effort: 5 }).toFile(out);
    made++;
  }
}

// Remove optimised copies whose source photo was deleted
for (const { dir } of SETS) {
  const outDir = pub(dir, 'opt');
  if (!fs.existsSync(outDir)) continue;
  const names = new Set(fs.readdirSync(pub(dir)).filter((f) => /\.jpe?g$/i.test(f)).map((f) => f.replace(/\.jpe?g$/i, '')));
  for (const f of fs.readdirSync(outDir)) {
    if (!names.has(f.replace(/-\d+\.(avif|webp)$/, ''))) fs.rmSync(path.join(outDir, f));
  }
}

console.log(`Images optimised: ${made} written, ${skipped} already up to date.`);
