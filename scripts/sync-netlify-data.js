#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = join(__dirname, '..', 'shared', 'static-faqs.ts');
const destDir = join(__dirname, '..', 'netlify', 'functions', 'data');
const dest = join(destDir, 'faqs.ts');

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

copyFileSync(source, dest);
console.log('[sync-netlify-data] Copied shared/static-faqs.ts to netlify/functions/data/faqs.ts');
