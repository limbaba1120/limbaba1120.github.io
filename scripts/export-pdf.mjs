#!/usr/bin/env node
// Export A4 PDFs for /resume/ (ko) and /resume/en/ (en).
//
// Usage:
//   bundle exec jekyll build           # produces ./_site
//   node scripts/export-pdf.mjs        # writes ./out/resume.{ko,en}.pdf
//
// Or use the npm script:  npm run export:pdf  (builds + exports)

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';

const ROOT = resolve(import.meta.dirname, '..');
const SITE_DIR = resolve(ROOT, '_site');
const OUT_DIR = resolve(ROOT, 'out');
const PORT = Number(process.env.PORT ?? 4173);

if (!existsSync(SITE_DIR)) {
  console.error(`[export-pdf] _site/ not found. Run "bundle exec jekyll build" first.`);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

console.log(`[export-pdf] starting static server on :${PORT}`);
const server = spawn('npx', ['serve', '-l', String(PORT), SITE_DIR], {
  stdio: ['ignore', 'pipe', 'inherit'],
});

// Wait for the server to be ready before launching the browser.
await new Promise((res, rej) => {
  const t = setTimeout(() => rej(new Error('serve did not start in 8s')), 8000);
  server.stdout.on('data', (b) => {
    if (b.toString().includes(`localhost:${PORT}`)) {
      clearTimeout(t);
      res();
    }
  });
});

const targets = [
  { lang: 'ko', path: '/resume/' },
  { lang: 'en', path: '/resume/en/' },
];

const browser = await chromium.launch();
try {
  const ctx = await browser.newContext();
  for (const { lang, path: p } of targets) {
    const url = `http://localhost:${PORT}${p}`;
    const out = resolve(OUT_DIR, `resume.${lang}.pdf`);
    console.log(`[export-pdf] ${lang}: ${url} -> ${out}`);
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: out,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
  }
} finally {
  await browser.close();
  server.kill('SIGTERM');
}

console.log('[export-pdf] done');
