import { neon } from "@neondatabase/serverless";

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
  queryStringParameters?: Record<string, string>;
}

interface HandlerResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

const defaultHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const headers = defaultHeaders;

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    
    if (!databaseUrl) {
      throw new Error("Database URL not configured");
    }

    const sql = neon(databaseUrl);

    const slug = event.queryStringParameters?.slug;

    if (slug) {
      const result = await sql`
        SELECT 
          id,
          slug,
          title_pt as "titlePt",
          title_en as "titleEn",
          content_pt as "contentPt",
          content_en as "contentEn",
          excerpt_pt as "excerptPt",
          excerpt_en as "excerptEn",
          meta_description_pt as "metaDescriptionPt",
          meta_description_en as "metaDescriptionEn",
          keywords_pt as "keywordsPt",
          keywords_en as "keywordsEn",
          author,
          author_bio as "authorBio",
          featured_image as "featuredImage",
          featured_image_alt as "featuredImageAlt",
          category,
          tags,
          published_at as "publishedAt",
          updated_at as "updatedAt",
          created_at as "createdAt"
        FROM blog_posts 
        WHERE slug = ${slug}
        LIMIT 1
      `;

      if (result.length === 0) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "Blog post not found" }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result[0]),
      };
    }

    const result = await sql`
      SELECT 
        id,
        slug,
        title_pt as "titlePt",
        title_en as "titleEn",
        content_pt as "contentPt",
        content_en as "contentEn",
        excerpt_pt as "excerptPt",
        excerpt_en as "excerptEn",
        meta_description_pt as "metaDescriptionPt",
        meta_description_en as "metaDescriptionEn",
        keywords_pt as "keywordsPt",
        keywords_en as "keywordsEn",
        author,
        author_bio as "authorBio",
        featured_image as "featuredImage",
        featured_image_alt as "featuredImageAlt",
        category,
        tags,
        published_at as "publishedAt",
        updated_at as "updatedAt",
        created_at as "createdAt"
      FROM blog_posts 
      ORDER BY published_at DESC
    `;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to fetch blogs" }),
    };
  }
};
