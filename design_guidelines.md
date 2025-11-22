# Azores4fun Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Airbnb (accommodation sections), booking platforms, and adventure tourism sites. The design balances professionalism with the adventurous spirit of the Azores, creating a vibrant multi-service portal that clearly segments 5 distinct business areas while maintaining cohesive branding.

## Core Design Principles
- **Adventure Meets Professionalism**: Energetic and inviting while maintaining credibility across diverse services
- **Clear Service Segmentation**: Each of the 5 business areas has distinct visual identity within unified system
- **Island Authenticity**: Reflects Azores' natural beauty and adventure tourism appeal
- **Conversion-Focused**: Every section guides users toward booking or inquiry

## Typography
- **Primary Font**: Montserrat (Google Fonts) - modern, clean, excellent for headings
- **Body Font**: Inter (Google Fonts) - highly readable for content
- **Hero Headlines**: Bold, 3xl to 5xl, uppercase for impact
- **Section Headers**: Semibold, 2xl to 3xl
- **Body Text**: Regular, base to lg
- **CTAs**: Semibold, uppercase tracking-wide

## Layout System
**Spacing Units**: Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 
- Component spacing: gap-6 to gap-12
- Container: max-w-7xl with px-4 md:px-8

## Page Structure

### Hero Section (Full viewport impact)
- Large background image showcasing Azores landscape/activities
- Centered headline: "Azores4fun - A Sua Aventura Completa nos Açores"
- Subheadline highlighting 5 service areas
- Prominent CTA button with blur background
- Subtle overlay for text readability

### Services Navigation Hub
Grid layout showcasing 5 main service cards:
1. **Alojamento Local** - apartment imagery
2. **Animação Turística** - action sports/water activities
3. **Eventos** - teambuilding/celebrations
4. **Tatuagem & Piercings** - studio atmosphere
5. **Gestão Imobiliária** - property management

Each card: Large image, icon, title, brief description, "Explorar" CTA
Desktop: 3-column grid (top 3), 2-column (bottom 2)
Mobile: Single column stack

### Featured Activities Section
Highlight signature experiences:
- 2-column layout with alternating image/content placement
- Lasertag/Paintball showcase
- Water sports (SUP/Kayak) with ocean imagery
- Tours personalizados with electric van
3-4 featured activities total

### Why Choose Azores4fun
3-column grid of value propositions:
- "Localização Central" (Horta location)
- "Experiências Únicas" (diverse activities)
- "Equipamento Moderno" (quality equipment/facilities)
Icons, bold headlines, supporting text

### Social Proof
Testimonial carousel or 3-column static display
Customer photos, quotes, star ratings
Emphasize international and local clientele

### Call-to-Action Section
Bold, contrasting background
Centered content: "Pronto para a Aventura?"
Primary CTA: "Reservar Agora"
Secondary CTA: "Contactar"
Contact info: phone, email, social media icons

### Footer
4-column layout:
- About Azores4fun + logo
- Quick links to 5 service areas
- Contact information
- Social media + newsletter signup

## Component Library

**Navigation**: 
- Logo left, horizontal menu center (5 services), CTA/language selector right
- Mobile: Hamburger with full-screen overlay menu
- Sticky header on scroll

**Cards**:
- Rounded corners (rounded-lg to rounded-xl)
- Hover: subtle lift (shadow-lg, scale-102)
- Image aspect ratio: 4:3 or 16:9

**Buttons**:
- Primary: Large, rounded-full, px-8 py-4
- On images: backdrop-blur with semi-transparent background
- Arrow icons for directional CTAs

**Icons**: Heroicons for UI elements, custom activity icons where needed

**Forms** (contact):
- Clean input fields with floating labels
- Full-width on mobile, 2-column on desktop
- Clear validation states

## Images Strategy

### Hero Image
Full-width ocean/coastline view with activities in action (kayaking, hiking, or Pico mountain backdrop). High-energy, inviting atmosphere.

### Service Cards (5 images)
1. Modern apartment interior (bright, clean)
2. Lasertag/Paintball action shot
3. Event setup with tents/inflatables
4. Tattoo studio workspace
5. Property/building exterior

### Featured Activities (3-4 images)
- SUP/Kayak on azure waters
- Group doing outdoor activity
- Electric van on scenic Azores road
- Teambuilding event atmosphere

### Testimonial Section
2-3 customer photos (diverse, authentic)

## Animations
Minimal and purposeful:
- Scroll-triggered fade-in for sections (once)
- Smooth card hover states
- Hero parallax effect (subtle)
- No excessive animations

## Responsive Behavior
- Mobile-first approach
- Hamburger menu < 1024px
- Grid columns collapse progressively
- Images: object-cover, optimized for mobile bandwidth
- Touch-friendly tap targets (min 44px)

## Accessibility
- WCAG 2.1 AA contrast ratios
- Focus states on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support