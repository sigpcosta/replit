import { type User, type InsertUser, type BlogPost, type InsertBlogPost, blogPosts, type Faq, type InsertFaq, faqs } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  getAllFaqs(): Promise<Faq[]>;
  getFaqsByService(service: string): Promise<Faq[]>;
  getFaqById(id: number): Promise<Faq | undefined>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  updateFaq(id: number, faq: Partial<InsertFaq>): Promise<Faq | undefined>;
  deleteFaq(id: number): Promise<boolean>;
  getFaqsCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return result[0];
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return result[0];
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const result = await db.update(blogPosts).set(post).where(eq(blogPosts.id, id)).returning();
    return result[0];
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  async getAllFaqs(): Promise<Faq[]> {
    return db.select().from(faqs).where(eq(faqs.isActive, "true")).orderBy(faqs.service, faqs.displayOrder);
  }

  async getFaqsByService(service: string): Promise<Faq[]> {
    return db.select().from(faqs).where(and(eq(faqs.service, service), eq(faqs.isActive, "true"))).orderBy(faqs.displayOrder);
  }

  async getFaqById(id: number): Promise<Faq | undefined> {
    const result = await db.select().from(faqs).where(eq(faqs.id, id)).limit(1);
    return result[0];
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const result = await db.insert(faqs).values(faq).returning();
    return result[0];
  }

  async updateFaq(id: number, faq: Partial<InsertFaq>): Promise<Faq | undefined> {
    const result = await db.update(faqs).set(faq).where(eq(faqs.id, id)).returning();
    return result[0];
  }

  async deleteFaq(id: number): Promise<boolean> {
    const result = await db.delete(faqs).where(eq(faqs.id, id)).returning();
    return result.length > 0;
  }

  async getFaqsCount(): Promise<number> {
    const result = await db.select().from(faqs);
    return result.length;
  }
}

export const storage = new MemStorage();
