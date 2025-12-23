# Azores4fun - Multi-Service Tourism Platform

## Overview

Azores4fun is a comprehensive tourism and lifestyle business platform based in Horta, Faial (Azores). The platform integrates five distinct business verticals under one unified brand:

1. **Local Accommodation** - 3 modern apartments in central Horta
2. **Tourism Activities** - Lasertag, Paintball, SUP, Kayak rentals, and island tours
3. **Events** - Event tents, inflatables, birthday parties, and team-building
4. **Tattoo & Piercing Studio** - Professional studio with booking system
5. **Property Management** - Long-term rentals, maintenance, and construction services
6. **Retail Shop** - Regional products, merchandise, and tourism services point

The application is a full-stack web platform designed to showcase services, handle bookings, and provide multilingual (Portuguese/English) content for both locals and tourists.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript
- Vite as build tool and development server
- Wouter for client-side routing
- TailwindCSS for styling with custom design system
- shadcn/ui component library (New York style variant)

**Design System:**
- Primary font: Montserrat (headings), Inter (body text)
- Custom color scheme centered around a primary blue (#2B7BA0 approximation)
- Responsive-first design with mobile breakpoint at 768px
- Consistent spacing units: 4, 6, 8, 12, 16, 20, 24
- Design approach inspired by Airbnb and adventure tourism sites

**State Management:**
- TanStack Query (React Query) for server state
- React Context for i18n (LanguageContext)
- Local component state with useState/useReducer

**Internationalization:**
- Custom i18n implementation via React Context
- Two languages: Portuguese (default) and English
- Language preference stored in localStorage
- Translation keys organized by feature area

**Routing Structure:**
- `/` - Home page with hero and service overview
- `/alojamento` - Accommodation details
- `/animacao` - Tourism activities
- `/eventos` - Events services
- `/tatuagem` - Tattoo studio with booking form
- `/imobiliaria` - Property management
- `/loja` - Retail shop
- `/portfolio` - Tattoo portfolio gallery

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Custom middleware for request logging and JSON parsing

**API Endpoints:**
- `POST /api/booking` - Tattoo/service booking requests with Zod validation
- `POST /api/contact` - General contact form submissions
- Email integration via Resend API for booking notifications

**Data Validation:**
- Zod schemas for runtime type validation
- Separate schemas for booking and contact forms
- Integration with Drizzle-Zod for database schema validation

**Development Features:**
- Vite middleware mode for HMR in development
- Custom error overlay plugin (@replit/vite-plugin-runtime-error-modal)
- Request logging with duration tracking
- Replit-specific development tooling integration

### Database & ORM

**Database:**
- PostgreSQL (configured via Drizzle Kit)
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Connection via DATABASE_URL environment variable

**ORM:**
- Drizzle ORM with PostgreSQL dialect
- Schema location: `shared/schema.ts`
- Migrations output: `./migrations`

**Current Schema:**
- `users` table with id, username, password fields
- UUID generation via `gen_random_uuid()`
- Currently minimal schema - appears to be authentication placeholder

**In-Memory Storage:**
- Temporary MemStorage implementation for user management
- Suggests database integration is planned but not fully implemented for user data

### Asset Management

**Static Assets:**
- Generated images stored in `attached_assets/generated_images/`
- Images for each service vertical (apartments, activities, tattoos, etc.)
- Path aliasing via Vite: `@assets` points to `attached_assets`

**Image Organization:**
- Semantic naming convention with service identifiers
- Hash suffixes for cache-busting
- PNG format for all generated images

### Authentication & Sessions

**Current State:**
- User schema defined but authentication not actively implemented
- Session storage configuration present (connect-pg-simple)
- Appears to be prepared for future admin/user authentication

**Planned Approach:**
- PostgreSQL-backed session storage
- Password-based authentication
- User management interface not yet implemented

## External Dependencies

### Email Service
- **Resend API** - Transactional email service for booking confirmations
- API key required via `RESEND_API_KEY` environment variable
- Used for sending booking notifications to business

### Database
- **Neon Serverless PostgreSQL** - Cloud-hosted PostgreSQL database
- Accessed via DATABASE_URL environment variable
- Drizzle ORM as abstraction layer

### UI Component Library
- **shadcn/ui** - Component collection built on Radix UI primitives
- Comprehensive set of ~40 components (buttons, forms, dialogs, etc.)
- Customized with "New York" style variant
- All components use CVA (class-variance-authority) for variant management

### Third-Party Services (Planned/Referenced)
- **External booking system** - Linked at `book.azores4fun.com` (external platform)
- **Social media integration** - Facebook and Instagram links in footer
- **Google Fonts** - Montserrat, Inter, and other typefaces

### Development Tools
- **Replit Plugins** - Cartographer and dev banner for Replit environment
- **PostCSS with Autoprefixer** - CSS processing pipeline
- **ESBuild** - Production bundling for server code
- **TSX** - TypeScript execution for development

### Frontend Libraries
- **date-fns** - Date manipulation and formatting
- **embla-carousel-react** - Carousel/slider functionality
- **lucide-react** - Icon library
- **Radix UI** - Headless component primitives (20+ packages)
- **React Hook Form** - Form state management
- **TailwindCSS** - Utility-first CSS framework

### Notable Architectural Decisions

1. **Monorepo Structure** - Shared code in `/shared`, client in `/client`, server in `/server`
2. **Path Aliases** - Absolute imports via `@/`, `@shared/`, `@assets/` for cleaner imports
3. **Hybrid Rendering** - SPA with dynamic prerendering for SEO
4. **Type Safety** - End-to-end TypeScript with strict mode enabled
5. **Component Co-location** - Example components alongside production code for development reference
6. **Custom i18n** - Lightweight implementation instead of heavy libraries like i18next
7. **Email-First Contact** - No database persistence for contact/booking submissions, relies on email delivery

---

## SEO & LLM Optimization Requirements

**CRITICAL: All changes to this project MUST maintain these SEO standards.**

### Mandatory SEO Rules

1. **Dynamic Prerendering for Bots**
   - Search engine crawlers receive server-rendered HTML with full content
   - Middleware in `server/routes.ts` detects bots and serves prerendered pages
   - FAQs from database are included in the HTML sent to crawlers

2. **JSON-LD Structured Data**
   - Every service page MUST include FAQPage schema with real FAQs from database
   - Organization/LocalBusiness schema on all pages
   - Service schema on service-specific pages

3. **Meta Tags**
   - Every page MUST have unique title, description, and canonical URL
   - Open Graph tags for social sharing
   - Hreflang tags for PT/EN language variants

4. **Dynamic Sitemap**
   - `/sitemap.xml` is generated dynamically from routes and blog posts
   - Generated by `server/generate-sitemap.ts`
   - Blog posts are automatically included

5. **Robots.txt**
   - Located at `public/robots.txt`
   - References sitemap location
   - Blocks `/admin` and `/api/` from indexing

### When Adding New Pages

1. Add route to `client/src/App.tsx`
2. Add route configuration in `server/routes.ts` `routeConfig` object for prerendering
3. Update sitemap in `server/generate-sitemap.ts`
4. Use `SEOHead` component with proper meta tags
5. Include `ServiceFAQs` component if page has related FAQs

### When Adding FAQs

1. Add FAQs to database with correct `service` field
2. FAQs automatically appear in:
   - Service pages via `ServiceFAQs` component
   - Prerendered HTML for crawlers
   - JSON-LD FAQPage schema
   - Chatbot knowledge base

### File Locations

- **SEO Configuration**: `client/src/lib/seo-config.ts`
- **Structured Data Helpers**: `client/src/lib/structured-data.ts`, `client/src/components/SSRPage.tsx`
- **Sitemap Generator**: `server/generate-sitemap.ts`
- **Prerender Script**: `scripts/prerender.ts`
- **Bot Detection & Prerender Middleware**: `server/routes.ts`

### Testing SEO

Use curl to test what crawlers see:
```bash
curl -A "Googlebot" https://your-site.com/animacao
```

This should return HTML with FAQs, JSON-LD, and meta tags.