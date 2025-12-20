import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import path from "path";
import fs from "fs";
import { insertBlogPostSchema } from "@shared/schema";

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
  // Serve static SEO files from public/ folder
  const publicPath = path.resolve(import.meta.dirname, "..", "public");
  
  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.join(publicPath, "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.type("application/xml").sendFile(sitemapPath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });
  
  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.join(publicPath, "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain").sendFile(robotsPath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });
  
  app.get("/logo.gif", (_req, res) => {
    const logoPath = path.join(publicPath, "logo.gif");
    if (fs.existsSync(logoPath)) {
      res.type("image/gif").sendFile(logoPath);
    } else {
      res.status(404).send("Logo not found");
    }
  });
  
  app.get("/og-home.jpg", (_req, res) => {
    const imagePath = path.join(publicPath, "og-home.jpg");
    if (fs.existsSync(imagePath)) {
      res.type("image/jpeg").sendFile(imagePath);
    } else {
      res.status(404).send("OG image not found");
    }
  });
  
  app.get("/og-default.jpg", (_req, res) => {
    const imagePath = path.join(publicPath, "og-default.jpg");
    if (fs.existsSync(imagePath)) {
      res.type("image/jpeg").sendFile(imagePath);
    } else {
      res.status(404).send("OG image not found");
    }
  });

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

  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Erro ao obter artigos:", error);
      res.status(500).json({ error: "Erro ao obter artigos" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      res.json(post);
    } catch (error) {
      console.error("Erro ao obter artigo:", error);
      res.status(500).json({ error: "Erro ao obter artigo" });
    }
  });

  // Blog creation endpoint disabled for security - use seed script instead
  // Uncomment and add authentication middleware if admin functionality is needed
  // app.post("/api/blog", async (req, res) => {
  //   try {
  //     const data = insertBlogPostSchema.parse(req.body);
  //     const post = await storage.createBlogPost(data);
  //     res.status(201).json(post);
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       return res.status(400).json({ error: "Dados inválidos", details: error.errors });
  //     }
  //     console.error("Erro ao criar artigo:", error);
  //     res.status(500).json({ error: "Erro ao criar artigo" });
  //   }
  // });

  const httpServer = createServer(app);

  return httpServer;
}
