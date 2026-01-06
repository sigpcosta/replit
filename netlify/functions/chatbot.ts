let staticFaqs: any[] = [];
let getFaqsForChatbot: (lang: 'pt' | 'en') => string = () => '';

try {
  const faqModule = require("./data/faqs");
  staticFaqs = faqModule.staticFaqs || [];
  getFaqsForChatbot = faqModule.getFaqsForChatbot || (() => '');
} catch (importError) {
  console.error("[Chatbot] Failed to import FAQs:", importError);
}

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

const defaultHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const headers = defaultHeaders;

  try {
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
    const body = JSON.parse(event.body || "{}");
    const { message, language = "pt", currentPage = "/" } = body;

    console.log("[Chatbot] Request received:", { message: message?.substring(0, 50), language, currentPage });

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Mensagem é obrigatória" }),
      };
    }

    const openaiApiKey = process.env.OPENAI_API_KEY || process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const openaiBaseUrl = process.env.OPENAI_BASE_URL || process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || "https://api.openai.com/v1";

    console.log("[Chatbot] API Key exists:", !!openaiApiKey, "Base URL:", openaiBaseUrl);

    if (!openaiApiKey) {
      console.error("[Chatbot] ERROR: OpenAI API key not configured. Check OPENAI_API_KEY environment variable in Netlify.");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          response: language === "pt" 
            ? "[DEBUG: OPENAI_API_KEY não encontrada] O nosso assistente AI está em configuração. Por favor, contacte-nos por WhatsApp (+351 962537160) ou telefone (+351 934 993 770)." 
            : "[DEBUG: OPENAI_API_KEY not found] Our AI assistant is being configured. Please contact us via WhatsApp (+351 962537160) or phone (+351 934 993 770).",
          debug: { keyExists: false, baseUrl: openaiBaseUrl }
        }),
      };
    }

    const faqContext = getFaqsForChatbot(language as 'pt' | 'en');

    const systemPrompt = language === "pt" 
      ? `És o assistente virtual da Azores4Fun, uma empresa de turismo e serviços nos Açores, Ilha do Faial, Horta. Fomos fundados em 2012 e temos a certificação Marca Açores. Focamos na sustentabilidade e experiências autênticas.

INFORMAÇÕES DA EMPRESA:
- Localização: Travessa Poiso Novo 1, Horta, Faial, Açores
- Telefone: +351 934 993 770
- WhatsApp: +351 962537160
- Email: info@azores4fun.com
- Website: azores4fun.com

SERVIÇOS DETALHADOS:
1. ATIVIDADES: Paintball (campo próprio), LaserTag, GelBlaster, Nerfs - ideais para grupos e festas
2. CAIAQUE & SUP: Tours guiados na costa do Faial, equipamento incluído
3. TOURS: Carrinha elétrica para 9 pessoas, tours pela ilha do Faial
4. ALOJAMENTO: 3 apartamentos no centro da Horta (Levadas, Caldeira, Vulcão) - registados AL 2591, 3530, 4274
5. TATUAGENS & PIERCINGS: Estúdio com Catarina Gomes, trabalho personalizado
6. EVENTOS: Festas de aniversário, despedidas de solteiro, team building
7. TRANSFERS: Aeroporto/Porto, tours personalizados
8. IMOBILIÁRIA: Gestão de propriedades, arrendamentos
9. LOJA: Merchandising e produtos regionais

PERGUNTAS FREQUENTES (usa estas respostas quando relevante):
${faqContext}

REGRAS IMPORTANTES:
- Responde SEMPRE em português de Portugal
- Sê simpático, profissional e conciso (máximo 3-4 frases)
- USA as FAQs acima para responder - elas contêm informação detalhada sobre cada serviço
- Se a pergunta não está nas FAQs, dá uma resposta útil baseada no contexto geral
- Se não souberes mesmo, sugere contactar por WhatsApp: +351 962537160
- Página atual do visitante: ${currentPage}`
      : `You are the virtual assistant for Azores4Fun, a tourism and services company in Faial Island, Azores. Founded in 2012 with Marca Açores certification. We focus on sustainability and authentic experiences.

COMPANY INFO:
- Location: Travessa Poiso Novo 1, Horta, Faial, Azores
- Phone: +351 934 993 770
- WhatsApp: +351 962537160
- Email: info@azores4fun.com

DETAILED SERVICES:
1. ACTIVITIES: Paintball (own field), LaserTag, GelBlaster, Nerfs - ideal for groups and parties
2. KAYAK & SUP: Guided tours on Faial coast, equipment included
3. TOURS: Electric van for 9 people, island tours
4. ACCOMMODATION: 3 apartments in Horta center (Levadas, Caldeira, Vulcão) - registered AL 2591, 3530, 4274
5. TATTOOS & PIERCINGS: Studio with artist Catarina Gomes
6. EVENTS: Birthday parties, bachelor/bachelorette, team building
7. TRANSFERS: Airport/Port, personalized tours
8. REAL ESTATE: Property management, rentals
9. SHOP: Merchandise and regional products

FREQUENTLY ASKED QUESTIONS (use these answers when relevant):
${faqContext}

IMPORTANT RULES:
- Always respond in English
- Be friendly, professional and concise (max 3-4 sentences)
- USE the FAQs above to answer - they contain detailed information about each service
- If the question is not in FAQs, give a helpful answer based on general context
- If truly unsure, suggest contacting via WhatsApp: +351 962537160
- Current page: ${currentPage}`;

    console.log("[Chatbot] Calling OpenAI API...");
    
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

    console.log("[Chatbot] OpenAI response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Chatbot] OpenAI API error:", response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("[Chatbot] OpenAI response received, has choices:", !!data.choices?.length);
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
    let language = "pt";
    try {
      language = JSON.parse(event.body || "{}").language || "pt";
    } catch {}
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      statusCode: 200,
      headers: defaultHeaders,
      body: JSON.stringify({ 
        response: language === "pt"
          ? `[DEBUG: Erro - ${errorMessage}] Peço desculpa, tive um problema técnico. Por favor, contacte-nos diretamente por WhatsApp (+351 962537160) ou telefone (+351 934 993 770).`
          : `[DEBUG: Error - ${errorMessage}] Sorry, I had a technical issue. Please contact us directly via WhatsApp (+351 962537160) or phone (+351 934 993 770).`,
        debug: { error: errorMessage }
      }),
    };
  }
};
