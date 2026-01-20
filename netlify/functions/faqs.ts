import { neon } from "@neondatabase/serverless";

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
  path: string;
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

    const service = event.queryStringParameters?.service;

    if (service) {
      const result = await sql`
        SELECT 
          id,
          service,
          question_pt as "questionPt",
          question_en as "questionEn",
          answer_pt as "answerPt",
          answer_en as "answerEn",
          keywords,
          display_order as "displayOrder",
          is_active as "isActive"
        FROM faqs 
        WHERE service = ${service} AND is_active = true
        ORDER BY display_order
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result),
      };
    }

    const result = await sql`
      SELECT 
        id,
        service,
        question_pt as "questionPt",
        question_en as "questionEn",
        answer_pt as "answerPt",
        answer_en as "answerEn",
        keywords,
        display_order as "displayOrder",
        is_active as "isActive"
      FROM faqs 
      WHERE is_active = true
      ORDER BY service, display_order
    `;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to fetch FAQs" }),
    };
  }
};
