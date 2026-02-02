# Migration Pathway — Project Requirements Document (PRD)

## 1) Executive Summary
**Purpose:** Build a high‑end, conversion‑focused agency website for a Ghana‑based migration services firm helping clients travel for **work** and **study** abroad. The site should feel premium, trustworthy, and human—no generic “AI‑looking” aesthetics—while driving inquiries to **WhatsApp**.
**Scope:** A modern marketing site (no user login, no document upload) with strong SEO, persuasive messaging, and clear conversion paths.
**Timeline:** 3–4 weeks total (discovery → design → build → QA → launch).
**Budget Target:** GHS 3,000.

---

## 2) Goals & Outcomes
**Primary goals**
- Increase qualified inquiries via WhatsApp.
- Build credibility and trust with prospects and families.
- Clearly communicate services, process, and outcomes.

**Secondary goals**
- Rank for local intent keywords (e.g., “study abroad Ghana”, “work abroad Ghana”).
- Provide an easy path for referrals and repeat visits.

**Success metrics**
- +30% month‑over‑month increase in WhatsApp inquiries.
- 2–4% conversion rate from landing page visits to WhatsApp chat.
- First‑page ranking for at least 3 local keywords in 3–6 months (with ongoing SEO).

---

## 3) Target Audience
**Primary users**
- Students in Ghana seeking admissions abroad.
- Professionals seeking international work opportunities.
- Parents/guardians funding education abroad.

**Secondary users**
- Referral partners and family members checking legitimacy.
- Corporate HR partners sourcing overseas placements.

---

## 4) Branding Direction (Non‑AI, High‑Trust)
**Tone:** Confident, human, practical, and reassuring.
**Aesthetic:** Premium, editorial, understated. Strong typography, restrained palette, minimal gradients.
**Avoid:** Over‑used neon gradients, generic stock photo collages, or clichéd “AI‑style” hero sections.

**Suggested palette (human, calm, premium)**
- **Charcoal** #1F2933 (primary text)
- **Warm White** #FAFAF7 (background)
- **Deep Olive** #2F3E35 (accents)
- **Muted Gold** #B08D57 (highlight)
- **Slate** #6B7280 (secondary text)

**Typography**
- Headings: *Playfair Display* or *Libre Baskerville* (editorial authority)
- Body: *Inter* or *Source Sans 3* (clean, modern readability)

---

## 5) Site Structure (Pages & Sections)
### 1. **Home**
**Goal:** Establish credibility, explain value, and convert to WhatsApp.
**Sections**
- Hero: Clear promise, two CTAs (WhatsApp + Consultation)
- Proof: Stats, testimonials, partner logos (if available)
- Services: Study Abroad, Work Abroad, Visa Guidance
- Process: Simple 4‑step journey
- Destinations: UK, Canada, USA, Germany, etc.
- FAQ
- Final CTA

### 2. **About**
**Goal:** Humanize the team and build trust.
**Sections**
- Mission & values
- Founder story (if provided)
- Licenses/registrations (if available)
- Why choose us

### 3. **Services**
**Goal:** Detail offerings with outcomes.
**Sections**
- Study abroad services
- Work abroad services
- Visa guidance & support
- Document review & interview prep

### 4. **Success Stories**
**Goal:** Social proof and legitimacy.
**Sections**
- Testimonials (text + photos)
- Before/after outcomes

### 5. **Contact**
**Goal:** Convert.
**Sections**
- WhatsApp CTA
- Email + phone
- Location (map embed optional)
- Operating hours

### 6. **Legal**
- Privacy Policy
- Terms of Service

---

## 6) Core Features
- **WhatsApp CTA** fixed on mobile and repeated throughout.
- **Performance‑first** (fast loads, optimized images, lazy loading).
- **SEO‑optimized** with metadata, semantic HTML, and structured data.
- **CMS‑ready** content structure (optional future phase).
- **Analytics** (Google Analytics or Plausible).

---

## 7) Marketing Copy (Draft)
### Hero
**Headline:** *Your Pathway to Study or Work Abroad Starts Here.*
**Subhead:** We help students and professionals in Ghana secure opportunities abroad with honest guidance, expert preparation, and step‑by‑step support.
**Primary CTA:** *Chat on WhatsApp*
**Secondary CTA:** *Book a Free Consultation*

### Services Highlights
**Study Abroad**
Admissions guidance, school selection, application support, and visa preparation—built around your goals and budget.

**Work Abroad**
We help you navigate work visa pathways, employer requirements, and placement preparation.

**Visa Guidance**
Document review, interview coaching, and compliance checks to improve your approval chances.

### Process
1. **Discovery Call** – We learn your goals and timeline.
2. **Pathway Plan** – We recommend the best route (school/work).
3. **Preparation** – Documentation, applications, interview prep.
4. **Departure Support** – Travel and post‑approval guidance.

### Credibility Section
“We don’t just submit applications. We build pathways that make sense for your future.”

### Final CTA
**Ready to move forward?**
Get honest guidance and a clear plan in one WhatsApp chat.

---

## 8) SEO Strategy
**Target keyword clusters**
- “study abroad Ghana”
- “work abroad Ghana”
- “visa support Ghana”
- “migration agency Ghana”
- “overseas education Ghana”

**On‑page SEO**
- H1 per page with location modifiers
- Keyword‑rich meta titles & descriptions
- Internal links between services and FAQs
- Optimized image alt tags (“Ghana students preparing for study abroad”)

**Schema**
- Organization
- LocalBusiness
- FAQ

**Local SEO**
- Google Business Profile setup
- Consistent NAP (Name, Address, Phone)
- Reviews prompt after successful placements

---

## 9) Technical Stack (Latest, Stable)
**Frontend**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Motion: Framer Motion (subtle only)

**Content**
- Static content in code for v1
- Optional: Sanity/Contentful for v2

**Infrastructure**
- Hosting: Vercel (recommended)
- Domain: Namecheap/GoDaddy (client preference)
- Email: Google Workspace or Zoho

**Analytics**
- Google Analytics 4 or Plausible

---

## 10) Deployment Plan
1. **Repo setup** (GitHub)
2. **Production build** with environment variables
3. **Vercel deployment** (CI/CD on main)
4. **Domain connection** + SSL
5. **Post‑launch checks** (404s, analytics, form links)

---

## 11) Deliverables
- Fully responsive website (desktop, tablet, mobile)
- SEO‑ready copy + metadata
- WhatsApp integration
- Hosting + domain configuration
- Basic analytics

---

## 12) Out of Scope (v1)
- User login system
- Document upload portal
- Payment processing
- Admin dashboard

---

## 13) Open Questions (for client)
Provide these to the client to finalize content and build.
```
1) What is the official business name (for footer, legal pages, and domain)?
2) What is your primary WhatsApp number for inquiries?
3) Do you have a business address to display?
4) Which countries should we highlight (UK, Canada, USA, Germany, etc.)?
5) Do you have any testimonials or success stories we can publish?
6) Are you registered/licensed? If yes, provide registration details for trust.
7) Do you want a “Book a Consultation” calendar link or WhatsApp only?
8) What is your preferred brand tone (formal, friendly, premium)?
9) Do you have any existing photos or do we need new imagery?
10) What language mix do you prefer (English only or English + Twi)?
```

---

## 14) Timeline (Suggested)
- **Week 1:** Discovery, content collection, information architecture
- **Week 2:** Wireframes + visual direction
- **Week 3:** Build + on‑page SEO
- **Week 4:** QA, revisions, deployment
