import fs from 'node:fs';
import path from 'node:path';

const pub = (...p: string[]) => path.join(process.cwd(), 'public', ...p);

/** Section photos live in /public/images/<name>.jpg */
export const imgSrc = (name: string) => `/images/${name}.jpg`;

/** True if /public/images/<name>.jpg exists — sections without a photo keep their text-only layout */
export const hasImage = (name: string) => fs.existsSync(pub('images', `${name}.jpg`));

/** True if /public/headers/<name>-desktop.jpg exists */
export const hasHeader = (name: string) => fs.existsSync(pub('headers', `${name}-desktop.jpg`));

const optCache = new Map<string, string[]>();
const optFiles = (dir: string) => {
  if (!optCache.has(dir)) {
    const d = pub(dir, 'opt');
    optCache.set(dir, fs.existsSync(d) ? fs.readdirSync(d) : []);
  }
  return optCache.get(dir)!;
};

/**
 * srcset strings for the AVIF/WebP copies made by `npm run images`
 * (public/<dir>/opt/<name>-<width>.<ext>). Empty string if none exist yet.
 */
export function srcsets(dir: 'images' | 'headers', name: string) {
  const re = (ext: string) => new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)\\.${ext}$`);
  const build = (ext: string) =>
    optFiles(dir)
      .map((f) => ({ f, m: f.match(re(ext)) }))
      .filter((x) => x.m)
      .map((x) => ({ f: x.f, w: Number(x.m![1]) }))
      .sort((a, b) => a.w - b.w)
      .map(({ f, w }) => `/${dir}/opt/${f} ${w}w`)
      .join(', ');
  return { avif: build('avif'), webp: build('webp') };
}
