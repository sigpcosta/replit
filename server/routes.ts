import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  service: z.string().min(1, "Serviço é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/booking", async (req, res) => {
    try {
      const data = bookingSchema.parse(req.body);
      
      // Enviar email usando Resend
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.error("RESEND_API_KEY não configurada");
        return res.status(500).json({ 
          error: "Configuração de email não encontrada. Por favor, contacte o administrador." 
        });
      }

      const emailContent = `
        Nova Solicitação de Agendamento - Azores4fun Tattoo
        
        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.phone}
        Serviço: ${data.service}
        
        Descrição:
        ${data.description}
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Azores4fun <onboarding@resend.dev>",
          to: ["catarinagomestattoo00@gmail.com"],
          subject: `Nova Solicitação de Agendamento - ${data.service}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ 
          error: "Erro ao enviar solicitação. Por favor, tente novamente." 
        });
      }

      res.json({ 
        success: true, 
        message: "Solicitação enviada com sucesso! Entraremos em contacto em breve." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Erro ao processar agendamento:", error);
      res.status(500).json({ 
        error: "Erro ao processar solicitação. Por favor, tente novamente." 
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.error("RESEND_API_KEY não configurada");
        return res.status(500).json({ 
          error: "Configuração de email não encontrada. Por favor, contacte o administrador." 
        });
      }

      const emailContent = `
        Nova Mensagem de Contacto - Azores4fun
        
        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.phone || "Não fornecido"}
        
        Mensagem:
        ${data.message}
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Azores4fun <onboarding@resend.dev>",
          to: ["info@azores4fun.com"],
          subject: `Nova Mensagem de Contacto - ${data.name}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ 
          error: "Erro ao enviar mensagem. Por favor, tente novamente." 
        });
      }

      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contacto em breve." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Erro ao processar mensagem:", error);
      res.status(500).json({ 
        error: "Erro ao processar mensagem. Por favor, tente novamente." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
