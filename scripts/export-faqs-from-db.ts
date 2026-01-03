import { neon } from '@neondatabase/serverless';
import * as fs from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  const rows = await sql`
    SELECT id, service, question_pt, question_en, answer_pt, answer_en, keywords, display_order, is_active 
    FROM faqs 
    ORDER BY service, display_order
  `;

  const header = `export interface FAQ {
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

export const staticFaqs: FAQ[] = [`;

  const footer = `];

export function getFaqsForChatbot(language: 'pt' | 'en'): string {
  return staticFaqs
    .filter(faq => faq.isActive)
    .map(faq => {
      const q = language === 'pt' ? faq.questionPt : faq.questionEn;
      const a = language === 'pt' ? faq.answerPt : faq.answerEn;
      return \`Q: \${q}\\nA: \${a}\`;
    })
    .join('\\n\\n');
}`;

  const escape = (s: string) => s ? s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') : '';
  
  const faqs = rows.map((row: any) => `  {
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

  const content = header + '\n' + faqs.join(',\n') + '\n' + footer;
  fs.writeFileSync('shared/static-faqs.ts', content);
  console.log(`Exported ${rows.length} FAQs to shared/static-faqs.ts`);
}

main();
