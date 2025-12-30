import { staticFaqs, getFaqsForChatbot } from "./data/faqs";

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}

interface HandlerResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

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
    const body = JSON.parse(event.body || "{}");
    const { message, language = "pt", currentPage = "/" } = body;

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Mensagem é obrigatória" }),
      };
    }

    const openaiApiKey = process.env.OPENAI_API_KEY || process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const openaiBaseUrl = process.env.OPENAI_BASE_URL || process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || "https://api.openai.com/v1";

    if (!openaiApiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          response: language === "pt" 
            ? "Desculpe, o chatbot está temporariamente indisponível. Por favor, contacte-nos por WhatsApp (+351 969 519 950)." 
            : "Sorry, the chatbot is temporarily unavailable. Please contact us via WhatsApp (+351 969 519 950)."
        }),
      };
    }

    const faqContext = getFaqsForChatbot(language as 'pt' | 'en');

    const systemPrompt = language === "pt" 
      ? `És o assistente virtual da Azores4Fun, uma empresa de turismo e serviços nos Açores, Ilha do Faial, Horta.

INFORMAÇÕES DA EMPRESA:
- Localização: Rua Conselheiro Medeiros 27, Horta, Faial, Açores
- Telefone: +351 934 993 770
- WhatsApp: +351 969 519 950
- Email: info@azores4fun.com
- Website: azores4fun.com

SERVIÇOS OFERECIDOS:
1. Paintball, LaserTag, GelBlaster, Nerfs
2. Caiaque & SUP
3. Tours de Carrinha Elétrica
4. Alojamento - Casa da Travessa
5. Tatuagens & Piercings
6. Eventos & Festas
7. Transfers
8. Gestão Imobiliária
9. Loja

PERGUNTAS FREQUENTES:
${faqContext}

REGRAS:
- Responde SEMPRE em português de Portugal
- Sê simpático e conciso (máximo 3-4 frases)
- Se não souberes, sugere contactar por WhatsApp
- Página atual: ${currentPage}`
      : `You are the virtual assistant for Azores4Fun, a tourism company in Faial Island, Azores.

COMPANY INFO:
- Location: Rua Conselheiro Medeiros 27, Horta, Faial, Azores
- Phone: +351 934 993 770
- WhatsApp: +351 969 519 950
- Email: info@azores4fun.com

SERVICES: Paintball, LaserTag, Kayak, SUP, Van Tours, Accommodation, Tattoos, Events, Transfers, Property Management, Shop

FAQs:
${faqContext}

RULES:
- Always respond in English
- Be friendly and concise (max 3-4 sentences)
- If unsure, suggest contacting via WhatsApp
- Current page: ${currentPage}`;

    const response = await fetch(`${openaiBaseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || (language === "pt" 
      ? "Desculpe, não consegui processar. Tente novamente." 
      : "Sorry, I couldn't process. Please try again.");

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: aiResponse }),
    };
  } catch (error) {
    console.error("Chatbot error:", error);
    const language = JSON.parse(event.body || "{}").language || "pt";
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        response: language === "pt"
          ? "Desculpe, ocorreu um erro. Contacte-nos por WhatsApp (+351 969 519 950)."
          : "Sorry, an error occurred. Contact us via WhatsApp (+351 969 519 950)."
      }),
    };
  }
};
