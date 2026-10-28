// Flattens one prerendered kb page into a single self-contained HTML file:
// stylesheets inlined, hydration scripts dropped, so the page opens from disk
// looking as the desk sees it.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const [src, out] = process.argv.slice(2);
if (!src || !out) throw new Error('usage: flatten.mjs <built.html> <out.html>');

let html = readFileSync(src, 'utf8');

const css = [...html.matchAll(/<link href="([^"]+\.css)"[^>]*>/g)];
const styles = css
  .map(([, href]) => readFileSync(resolve(dirname(src), href), 'utf8'))
  .join('\n');

html = html
  .replace(/<link href="[^"]+\.css"[^>]*>/g, '')
  .replace(/<link rel="modulepreload"[^>]*>/g, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, '')
  .replace('</head>', `<style>\n${styles}\n</style>\n</head>`);

writeFileSync(out, html);
console.log(`${out}: ${html.length} bytes, ${css.length} stylesheets inlined`);
