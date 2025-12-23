import fs from "fs";
import path from "path";
import { storage } from "./storage";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  hreflangPt?: string;
  hreflangEn?: string;
}

const BASE_URL = "https://azores4fun.com";

const staticPages: SitemapUrl[] = [
  { loc: "/", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "1.0", hreflangPt: "/", hreflangEn: "/?lang=en" },
  { loc: "/alojamento", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.9", hreflangPt: "/alojamento", hreflangEn: "/alojamento?lang=en" },
  { loc: "/animacao", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.9", hreflangPt: "/animacao", hreflangEn: "/animacao?lang=en" },
  { loc: "/paintball", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.8", hreflangPt: "/paintball", hreflangEn: "/paintball?lang=en" },
  { loc: "/tatuagem", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.9", hreflangPt: "/tatuagem", hreflangEn: "/tatuagem?lang=en" },
  { loc: "/eventos", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.8", hreflangPt: "/eventos", hreflangEn: "/eventos?lang=en" },
  { loc: "/imobiliaria", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.8", hreflangPt: "/imobiliaria", hreflangEn: "/imobiliaria?lang=en" },
  { loc: "/loja", lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.8", hreflangPt: "/loja", hreflangEn: "/loja?lang=en" },
  { loc: "/sobre", lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.7", hreflangPt: "/sobre", hreflangEn: "/sobre?lang=en" },
  { loc: "/portfolio", lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.6", hreflangPt: "/portfolio", hreflangEn: "/portfolio?lang=en" },
  { loc: "/blog", lastmod: new Date().toISOString().split("T")[0], changefreq: "daily", priority: "0.8", hreflangPt: "/blog", hreflangEn: "/blog?lang=en" },
  { loc: "/contact", lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.7", hreflangPt: "/contact", hreflangEn: "/contact?lang=en" },
  { loc: "/termos-site", lastmod: new Date().toISOString().split("T")[0], changefreq: "yearly", priority: "0.3" },
  { loc: "/termos-vending", lastmod: new Date().toISOString().split("T")[0], changefreq: "yearly", priority: "0.3" },
  { loc: "/privacidade", lastmod: new Date().toISOString().split("T")[0], changefreq: "yearly", priority: "0.3" },
  { loc: "/cookies", lastmod: new Date().toISOString().split("T")[0], changefreq: "yearly", priority: "0.3" },
];

function generateUrlEntry(url: SitemapUrl): string {
  let entry = `  <url>
    <loc>${BASE_URL}${url.loc}</loc>`;
  
  if (url.hreflangPt && url.hreflangEn) {
    entry += `
    <xhtml:link rel="alternate" hreflang="pt" href="${BASE_URL}${url.hreflangPt}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${url.hreflangEn}" />`;
  }
  
  entry += `
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  
  return entry;
}

export async function generateSitemap(): Promise<string> {
  const urls: SitemapUrl[] = [...staticPages];
  
  try {
    const blogPosts = await storage.getAllBlogPosts();
    
    for (const post of blogPosts) {
      const lastmod = post.publishedAt 
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];
      
      urls.push({
        loc: `/blog/${post.slug}`,
        lastmod,
        changefreq: "monthly",
        priority: "0.6",
        hreflangPt: `/blog/${post.slug}`,
        hreflangEn: `/blog/${post.slug}?lang=en`,
      });
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urls.map(generateUrlEntry).join("\n\n")}

</urlset>`;
  
  return sitemap;
}

export async function writeSitemapToFile(): Promise<void> {
  const sitemap = await generateSitemap();
  const sitemapPath = path.resolve(import.meta.dirname, "..", "public", "sitemap.xml");
  
  fs.writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log(`Sitemap generated and written to ${sitemapPath}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemapToFile().catch(console.error);
}
