import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  titlePt: text("title_pt").notNull(),
  titleEn: text("title_en").notNull(),
  contentPt: text("content_pt").notNull(),
  contentEn: text("content_en").notNull(),
  excerptPt: text("excerpt_pt").notNull(),
  excerptEn: text("excerpt_en").notNull(),
  metaDescriptionPt: text("meta_description_pt"),
  metaDescriptionEn: text("meta_description_en"),
  keywordsPt: text("keywords_pt"),
  keywordsEn: text("keywords_en"),
  author: text("author").notNull().default("Azores4fun"),
  authorBio: text("author_bio"),
  featuredImage: text("featured_image"),
  featuredImageAlt: text("featured_image_alt"),
  category: text("category"),
  tags: text("tags"),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
}).extend({
  publishedAt: z.union([z.date(), z.string().transform((str) => new Date(str))]).optional(),
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
