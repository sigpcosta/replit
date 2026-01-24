#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sharedDir = join(__dirname, '..', 'shared');
const destDir = join(__dirname, '..', 'netlify', 'functions', 'data');

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// 1. Export FAQs from database to shared/static-faqs.ts AND copy to netlify/functions/data/faqs.ts
async function syncFaqs(client) {
  try {
    const result = await client.query(`
      SELECT id, service, question_pt, question_en, answer_pt, answer_en, keywords, display_order, is_active 
      FROM faqs 
      ORDER BY service, display_order
    `);

    const rows = result.rows;
    console.log(`[sync-netlify-data] Found ${rows.length} FAQs in database`);

    const escape = (s) => s ? s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') : '';

    const faqsArray = rows.map(row => `  {
    id: ${row.id},
    service: "${row.service}",
    questionPt: "${escape(row.question_pt)}",
    questionEn: "${escape(row.question_en)}",
    answerPt: "${escape(row.answer_pt)}",
    answerEn: "${escape(row.answer_en)}",
    keywords: "${escape(row.keywords || '')}",
    displayOrder: ${row.display_order},
    isActive: ${row.is_active}
  }`);

    const faqsContent = `// FAQs for chatbot context - AUTO-GENERATED
// Run: npm run sync-netlify-data to regenerate from database
// Last updated: ${new Date().toISOString()}

export interface FAQ {
  id: number;
  service: string;
  questionPt: string;
  questionEn: string;
  answerPt: string;
  answerEn: string;
  keywords: string;
  displayOrder: number;
  isActive: boolean;
}

export const staticFaqs: FAQ[] = [
${faqsArray.join(',\n')}
];

export function getFaqsForChatbot(language: 'pt' | 'en'): string {
  return staticFaqs
    .filter(faq => faq.isActive)
    .map(faq => {
      const q = language === 'pt' ? faq.questionPt : faq.questionEn;
      const a = language === 'pt' ? faq.answerPt : faq.answerEn;
      return \`Q: \${q}\\nA: \${a}\`;
    })
    .join('\\n\\n');
}

export function getFaqsByService(service: string): FAQ[] {
  return staticFaqs.filter(faq => faq.service === service && faq.isActive);
}

export function getAllFaqs(): FAQ[] {
  return staticFaqs.filter(faq => faq.isActive);
}
`;

    // Write to shared/static-faqs.ts
    const sharedDest = join(sharedDir, 'static-faqs.ts');
    writeFileSync(sharedDest, faqsContent);
    console.log('[sync-netlify-data] ✓ Generated shared/static-faqs.ts from database');

    // Copy to netlify/functions/data/faqs.ts
    const netlifyDest = join(destDir, 'faqs.ts');
    copyFileSync(sharedDest, netlifyDest);
    console.log('[sync-netlify-data] ✓ Copied to netlify/functions/data/faqs.ts');

  } catch (error) {
    console.error('[sync-netlify-data] ✗ Error syncing FAQs:', error.message);
  }
}

// 2. Generate blogs.ts from database
async function syncBlogs(client) {
  try {
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
  }
}

// Run sync
async function main() {
  console.log('[sync-netlify-data] Starting sync...');
  console.log('[sync-netlify-data] This script exports FAQs and Blogs from database to static files');
  
  // PRIORITY: Use NEON_DATABASE_URL (shared external database) if available
  const neonUrl = process.env.NEON_DATABASE_URL;
  const databaseUrl = (neonUrl && neonUrl.includes('.neon.tech')) ? neonUrl : process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('[sync-netlify-data] ✗ No database URL set. Cannot sync from database.');
    console.log('[sync-netlify-data] Please ensure NEON_DATABASE_URL or DATABASE_URL environment variable is configured.');
    process.exit(1);
  }

  console.log(`[sync-netlify-data] Using ${neonUrl && neonUrl.includes('.neon.tech') ? 'NEON_DATABASE_URL' : 'DATABASE_URL'}`);
  const client = new pg.Client({ connectionString: databaseUrl });
  
  try {
    await client.connect();
    console.log('[sync-netlify-data] ✓ Connected to database');

    await syncFaqs(client);
    await syncBlogs(client);
    
    console.log('[sync-netlify-data] ✓ Done! All static files updated.');
    console.log('[sync-netlify-data] Next steps: commit changes and push to GitHub for Netlify rebuild.');

  } catch (error) {
    console.error('[sync-netlify-data] ✗ Database connection error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main().catch(console.error);
