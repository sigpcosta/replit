import { z } from "zod";
import { checkinSchema, sendCheckinEmail } from "../../server/checkin-email";

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
  path: string;
}

interface HandlerResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

const defaultHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const headers = defaultHeaders;

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = checkinSchema.parse(JSON.parse(event.body || "{}"));
    await sendCheckinEmail(data);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    if (error instanceof z.ZodError || error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid data" }),
      };
    }
    console.error("Error sending check-in email:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send check-in email" }),
    };
  }
};
