#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const destDir = join(__dirname, '..', 'netlify', 'functions', 'data');

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// 1. Sync FAQs (copy from shared)
function syncFaqs() {
  const source = join(__dirname, '..', 'shared', 'static-faqs.ts');
  const dest = join(destDir, 'faqs.ts');
  copyFileSync(source, dest);
  console.log('[sync-netlify-data] ✓ Copied shared/static-faqs.ts to netlify/functions/data/faqs.ts');
}

// 2. Generate blogs.ts from database
async function syncBlogs() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.log('[sync-netlify-data] ⚠ DATABASE_URL not set, skipping blog sync');
    return;
  }

  const client = new pg.Client({ connectionString: databaseUrl });
  
  try {
    await client.connect();
    console.log('[sync-netlify-data] Connected to database');

    const result = await client.query(`
      SELECT slug, title_pt, title_en, excerpt_pt, excerpt_en, keywords_pt, keywords_en 
      FROM blog_posts 
      WHERE published_at IS NOT NULL
      ORDER BY created_at DESC
    `);

    const blogs = result.rows;
    console.log(`[sync-netlify-data] Found ${blogs.length} published blog articles`);

    const blogsContent = `// Blog summaries for chatbot context - AUTO-GENERATED
// Run: npm run sync-netlify-data to regenerate from database
// Last updated: ${new Date().toISOString()}

export interface BlogSummary {
  slug: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  keywords: string[];
}

export const blogSummaries: BlogSummary[] = ${JSON.stringify(blogs.map(blog => ({
  slug: blog.slug,
  titlePt: blog.title_pt,
  titleEn: blog.title_en,
  summaryPt: blog.excerpt_pt || '',
  summaryEn: blog.excerpt_en || '',
  keywords: [...(blog.keywords_pt ? blog.keywords_pt.split(',').map(k => k.trim()) : []), ...(blog.keywords_en ? blog.keywords_en.split(',').map(k => k.trim()) : [])]
})), null, 2)};

export function getBlogSummariesForChatbot(lang: 'pt' | 'en'): string {
  return blogSummaries.map(blog => {
    const title = lang === 'pt' ? blog.titlePt : blog.titleEn;
    const summary = lang === 'pt' ? blog.summaryPt : blog.summaryEn;
    return \`- \${title}: \${summary}\`;
  }).join('\\n');
}
`;

    const dest = join(destDir, 'blogs.ts');
    writeFileSync(dest, blogsContent);
    console.log('[sync-netlify-data] ✓ Generated netlify/functions/data/blogs.ts from database');

  } catch (error) {
    console.error('[sync-netlify-data] ✗ Error syncing blogs:', error.message);
  } finally {
    await client.end();
  }
}

// Run sync
async function main() {
  console.log('[sync-netlify-data] Starting sync...');
  
  syncFaqs();
  await syncBlogs();
  
  console.log('[sync-netlify-data] Done!');
}

main().catch(console.error);
