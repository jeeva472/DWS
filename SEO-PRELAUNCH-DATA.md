# SEO PRE-LAUNCH DATA
**Website / Project:** DigitalWebStudio  
**Status:** Pre-Launch Local Development (Anti Gravity Environment)  
**Audit Purpose:** Comprehensive Pre-Launch Information Gathering for Senior SEO Strategist  
**Classification Standards:** [FACT] (Direct codebase verification) | [INFERENCE] (Logical architectural deduction) | [UNKNOWN] (Requires live/production/business data)  
**Document Generated:** September 2026  

---

## 1. Project Overview

### 1.1 Core Architecture & Stack [FACT]
* **Framework:** Next.js 16.3.4 (App Router architecture with React Server Components + Client Components).
* **React Version:** React 19.2.8 / React DOM 19.2.8.
* **Language & Type System:** TypeScript 5.x (Strict mode enabled in `tsconfig.json`).
* **Styling Framework:** Tailwind CSS v4 (`@tailwindcss/postcss` v4, `tailwindcss` v4) utilizing pure CSS tokens with custom glassmorphic styling, neon-accent utilities, and dark mode palette.
* **Build System:** Next.js Build Pipeline (`next build` with Turbopack / Webpack optimization, static HTML prerendering for 32/32 routes).
* **Package Manager:** npm (Node v24.19.0, npm v11.17.0).
* **Image Optimization:** Next.js Image Optimization API (`next/image`) paired with `sharp` v0.35.4 backend for automated WebP/AVIF compression.
* **Icons & UI Utilities:** `lucide-react` v1.40.0, `clsx` v2.1.1, `tailwind-merge` v3.6.0.
* **Animation & Rendering Libraries:**
  * `framer-motion` v13.2.0 (Interactive cards, staggered fade-ins, mobile menus, accordion disclosures).
  * `lottie-react` v3.1.1 (JSON vector animation rendering via `digital-pulse.json`).
  * `three` v0.185.1 & `@types/three` v0.185.4 (Listed in dependencies for prospective 3D WebGL background features).

### 1.2 Package.json Dependencies Inventory [FACT]
```json
{
  "dependencies": {
    "@types/three": "^0.185.4",
    "clsx": "^2.1.1",
    "framer-motion": "^13.2.0",
    "lottie-react": "^3.1.1",
    "lucide-react": "^1.40.0",
    "next": "16.3.4",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "sharp": "^0.35.4",
    "tailwind-merge": "^3.6.0",
    "three": "^0.185.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### 1.3 Environment Variables Structure [FACT]
* `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` (Classification: **PUBLIC**): Endpoint URL for WPGraphQL (e.g., `http://localhost/Digitalwebstudio/graphql`).
* `NEXT_PUBLIC_SITE_URL` (Classification: **PUBLIC**): Production / staging canonical base URL (defaults to `http://localhost:3000` during local development).
* `WORDPRESS_REVALIDATION_SECRET` (Classification: **PRIVATE**): Secret authentication bearer token for triggering Next.js On-Demand ISR webhook at `/api/revalidate`.

### 1.4 Deployment & Infrastructure Assumptions [INFERENCE]
* **Frontend:** Vercel serverless edge network (or Node.js standalone Docker container) planned for hosting Next.js.
* **Backend CMS:** Headless WordPress instance on Apache/Nginx + PHP 8.x + MySQL (currently local XAMPP environment).
* **Data Flow:** WordPress (WPGraphQL + ACF) -> Next.js SSR/SSG -> Client Browser.

---

## 2. Complete Route Inventory

The Next.js App Router project was completely scanned. Below is the comprehensive inventory of all public, alias, dynamic, API, and metadata routes:

| Route | Page Name / Component | Purpose | Static / Dynamic | File Location | Indexability [FACT/INFERENCE] | HTTP Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Home (`HomeClientView`) | Primary brand positioning & capability showcase | Static (SSG) | `src/app/page.tsx` | Indexable (Canonical: `/`) | 200 OK |
| `/about-us` | About Us (`AboutClientView`) | Company philosophy, team, engineering values | Static (SSG) | `src/app/about-us/page.tsx` | Indexable (Canonical: `/about-us`) | 200 OK |
| `/about` | About Redirect | Legacy redirect wrapper to canonical `/about-us` | Static (Redirect) | `src/app/about/page.tsx` | Non-indexable (308/Permanent Redirect) | 200/308 |
| `/services` | Services Hub (`ServicesClientView`) | Comprehensive services matrix & architecture hub | Static (SSG) | `src/app/services/page.tsx` | Indexable (Canonical: `/services`) | 200 OK |
| `/service` | Service Alias | Alias route re-exporting `/services` | Static (Alias) | `src/app/service/page.tsx` | Non-indexable / Canonical to `/services` | 200 OK |
| `/services/ai-automation` | AI Automation Single | Primary pillar: Workflow & CRM AI automations | Static (SSG) | `src/app/services/ai-automation/page.tsx` | Indexable (Canonical: `/services/ai-automation`) | 200 OK |
| `/services/seo` | SEO Single | Primary pillar: Technical, on-page, architecture SEO | Static (SSG) | `src/app/services/seo/page.tsx` | Indexable (Canonical: `/services/seo`) | 200 OK |
| `/services/digital-marketing` | Digital Marketing Single | Primary pillar: Organic growth & performance systems | Static (SSG) | `src/app/services/digital-marketing/page.tsx` | Indexable (Canonical: `/services/digital-marketing`) | 200 OK |
| `/services/vibe-code-development` | Vibe Code Development | Supporting pillar: Rapid AI prototyping & MVP engineering | Static (SSG) | `src/app/services/vibe-code-development/page.tsx` | Indexable (Canonical: `/services/vibe-code-development`) | 200 OK |
| `/services/chatbot-development` | Chatbot Development | Supporting pillar: Custom AI agents & support bots | Static (SSG) | `src/app/services/chatbot-development/page.tsx` | Indexable (Canonical: `/services/chatbot-development`) | 200 OK |
| `/services/api-integration` | API Integration Single | Supporting pillar: REST/GraphQL data integration | Static (SSG) | `src/app/services/api-integration/page.tsx` | Indexable (Canonical: `/services/api-integration`) | 200 OK |
| `/services/web-development` | Web Development Single | Supporting pillar: High-performance Next.js engineering | Static (SSG) | `src/app/services/web-development/page.tsx` | Indexable (Canonical: `/services/web-development`) | 200 OK |
| `/ai-automation` | AI Automation Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/ai-automation/page.tsx` | Should 308 redirect to `/services/ai-automation` | 200 OK |
| `/seo` | SEO Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/seo/page.tsx` | Should 308 redirect to `/services/seo` | 200 OK |
| `/digital-marketing` | Digital Marketing Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/digital-marketing/page.tsx` | Should 308 redirect to `/services/digital-marketing` | 200 OK |
| `/vibe-code-development` | Vibe Code Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/vibe-code-development/page.tsx` | Should 308 redirect to `/services/vibe-code-development` | 200 OK |
| `/chatbot-development` | Chatbot Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/chatbot-development/page.tsx` | Should 308 redirect to `/services/chatbot-development` | 200 OK |
| `/api-integration` | API Integration Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/api-integration/page.tsx` | Should 308 redirect to `/services/api-integration` | 200 OK |
| `/web-development` | Web Development Root Alias | Root-level alias re-exporting canonical service | Static (Alias) | `src/app/web-development/page.tsx` | Should 308 redirect to `/services/web-development` | 200 OK |
| `/contact` | Contact Page (`ContactClientView`) | Primary commercial conversion & inquiry point | Static (SSG) | `src/app/contact/page.tsx` | Indexable (Canonical: `/contact`) | 200 OK |
| `/case-studies` | Case Studies Index | Proof index showcasing client implementations | Static (SSG) | `src/app/case-studies/page.tsx` | Indexable (Canonical: `/case-studies`) | 200 OK |
| `/case-studies/lead-processing-automation-system` | Single Case Study 1 | AI Automation & CRM Lead Processing Case Study | Static (SSG / `generateStaticParams`) | `src/app/case-studies/[slug]/page.tsx` | Indexable (Canonical: `/case-studies/lead-processing-automation-system`) | 200 OK |
| `/case-studies/technical-seo-headless-migration` | Single Case Study 2 | Technical SEO & Headless Next.js Migration Case Study | Static (SSG / `generateStaticParams`) | `src/app/case-studies/[slug]/page.tsx` | Indexable (Canonical: `/case-studies/technical-seo-headless-migration`) | 200 OK |
| `/case-studies/rapid-mvp-vibe-code-development` | Single Case Study 3 | Rapid MVP & Vibe Code Prototyping Case Study | Static (SSG / `generateStaticParams`) | `src/app/case-studies/[slug]/page.tsx` | Indexable (Canonical: `/case-studies/rapid-mvp-vibe-code-development`) | 200 OK |
| `/case-studies/[slug]` | Dynamic Case Study Template | Dynamic template for prospective CMS case studies | Dynamic (SSR / SSG fallback) | `src/app/case-studies/[slug]/page.tsx` | Indexable dynamically | 200 OK |
| `/api/revalidate` | On-Demand ISR Route Handler | Webhook endpoint triggered by WP post publish/save | Serverless Route Handler | `src/app/api/revalidate/route.ts` | Non-indexable (API Endpoint) | 200 OK |
| `/sitemap.xml` | Dynamic XML Sitemap | Machine-readable search engine sitemap | Dynamic Metadata | `src/app/sitemap.ts` | Indexable XML feed | 200 OK |
| `/robots.txt` | Robots Exclusion Protocol | Crawler directives and sitemap declaration | Dynamic Metadata | `src/app/robots.ts` | Directives text file | 200 OK |
| `404` | Not Found Handler | Default Next.js 404 error catch-all | Dynamic | Next.js Internal / Shell | Non-indexable (404 status) | 404 |

---

## 3. Page Content Inventory

Below is the exact, unparaphrased content inventory extracted directly from the compiled components and fallback payloads for every canonical page [FACT]:

### 3.1 Homepage (`/`)
* **Page Title:** DigitalWebStudio — High-Performance Digital Solutions
* **H1:** Built for Speed, Scaled for Growth
* **H2s:**
  1. Selected Work
  2. Capabilities
  3. Why Choose DigitalWebStudio
  4. How We Work
  5. What Our Clients Say
  6. Ready to Scale Your Digital Presence?
* **H3s:**
  * Selected Work: *Apex Global*, *Vanguard AI*, *Hyperion Health*
  * Capabilities Matrix: *AI Automation*, *SEO & Search Visibility*, *Digital Marketing & Growth*, *Vibe Code Development*, *Chatbot Development*, *API Integration*, *Web Development*
  * Why Choose Us: *Performance-First Architecture*, *AI-Augmented Engineering*, *Conversion-Focused Design*, *Transparent & Scalable*
  * Process: *01 / Discovery & Strategy*, *02 / Design & Prototyping*, *03 / Development & Automation*, *04 / Launch & Optimization*
  * Testimonials: *Sarah Jenkins (VP of Growth, FinTech Global)*, *David Ross (CTO, OmniHealth Logistics)*, *Elena Rostova (Founder, VibePay)*
* **Intro / Hero Copy:** "We architect next-generation digital experiences, intelligent automation workflows, and high-impact search strategies that drive measurable business outcomes."
* **CTAs:**
  * Primary Hero CTA: "Explore Capabilities" -> `/services`
  * Secondary Hero CTA: "Book a Consultation" -> Opens Contact Modal / `/contact`
  * Section CTAs: "View All Projects" -> `/case-studies`, "Start Your Project" -> `/contact`
* **Trust Elements:** 3 Client Testimonials with role/company attribution, Stats Grid (99.8% Uptime, 3.4x Pipeline Growth, <100ms API Latency, 40+ Projects Delivered).

### 3.2 About Us Page (`/about-us`)
* **Page Title:** About Us | DigitalWebStudio
* **H1:** Engineering Digital Systems That Drive Real Growth
* **H2s:**
  1. Pragmatic technology. Measurable business impact.
  2. The Principles Behind Our Work
  3. Why Businesses Choose DigitalWebStudio
  4. Modern Systems, Battle-Tested Engineering
  5. Close Collaboration at Every Stage
  6. How We Deliver Consistent Results
  7. Ready to Build Smarter Systems?
* **H3s:**
  * Principles: *Business-First Engineering*, *Speed with Maintainability*, *Transparent Partnership*, *Continuous Evolution*
  * Why Us: *Full-Spectrum Technical Execution*, *AI-Powered Acceleration*, *Conversion-Driven Thinking*, *Direct Senior Engineering Access*
  * Tech Stack: *Next.js & React*, *WordPress & Headless CMS*, *Automation & AI*, *APIs & Integrations*
  * Collaboration: *Engineering-Led Communication*, *Iterative Feedback Loops*, *Documentation & Ownership*
  * Delivery Process: *01 / Discovery & System Mapping*, *02 / Architecture & Prototyping*, *03 / Engineering & Integration*, *04 / Quality & Performance*, *05 / Launch & Ongoing Growth*
* **Intro Copy:** "DigitalWebStudio is an engineering-driven digital agency. We combine modern web architecture, AI automation, and technical SEO to build digital systems that help businesses scale."
* **CTAs:** "Book a Consultation" -> `/contact`, "Explore Our Services" -> `/services`

### 3.3 Services Overview Hub (`/services`)
* **Page Title:** Services | DigitalWebStudio
* **H1:** AI Automation & SEO Solutions Built for Business Growth
* **H2s:**
  1. Our Core Services
  2. Deep Capabilities Across 7 Disciplines
  3. Modern Technology Stack
  4. How We Deliver Results
  5. Let’s Build Something Exceptional
* **H3s:**
  * Core Services: *AI Automation*, *Search Engine Optimization*, *Digital Marketing*, *Vibe Code Development*, *Chatbot Development*, *API Integration*, *Web Development*
  * Process: *01 / Strategic Assessment*, *02 / Solution Architecture*, *03 / Rapid Execution*, *04 / Performance Tuning*
* **Intro Copy:** "We engineer end-to-end digital solutions that streamline your business operations, dominate search results, and accelerate revenue growth."
* **CTAs:** "Schedule Strategy Call" -> `/contact`, "View Case Studies" -> `/case-studies`, Individual service card links to `/services/[slug]`.

### 3.4 AI Automation Service Page (`/services/ai-automation`)
* **Page Title:** AI Automation for Smarter Businesses | DigitalWebStudio
* **H1:** AI Automation for Smarter, More Efficient Businesses
* **H2s:**
  1. Too much manual work?
  2. Practical automations that eliminate busywork.
  3. Built on battle-tested automation platforms.
  4. From manual friction to seamless automation.
  5. Built for tangible operational gains.
  6. Connected Capabilities for Intelligent Automation
  7. Common questions about business automation.
  8. What could your business automate?
* **H3s:**
  * Problems: *Repetitive Data Entry*, *Manual Lead Processing*, *Copy/Paste Workflows*, *Repetitive Emails*, *CRM Updates*, *Manual Reporting*, *Customer Support Tasks*, *Inconsistent Notifications*
  * Use Cases: *Lead Management*, *CRM Automation*, *Customer Support*, *Data Processing*, *Smart Notifications*, *Content Workflows*, *Internal Operations*, *Automated Reporting*
  * Platforms: *n8n*, *Make*, *OpenAI*, *REST APIs*, *Webhooks*, *Google Workspace*, *HubSpot / CRM*
  * Process Steps: *Discover*, *Map*, *Build*, *Connect*, *Improve*
  * Business Gains: *Less Manual Work*, *Faster Customer Response*, *Fewer Human Errors*, *Complete Workflow Visibility*, *More Time for Strategic Work*, *Scalable Operations*
  * Related Capabilities: *Chatbot Development*, *API Integration*, *Vibe Code Development*
* **FAQs:**
  1. *What is business workflow automation?* -> Automating recurring multi-step tasks across apps.
  2. *Do we need to replace our current software?* -> No, we connect your existing stack via APIs.
  3. *What tools do you use for automation?* -> n8n, Make, custom Node/Python microservices, and AI APIs.
  4. *How long does an automation project take?* -> Typical sprints range from 1 to 3 weeks.
  5. *How do we ensure automations don't break?* -> Error handling, retry logic, webhook logs, and automated alerts.
* **CTAs:** "Discuss Your Automation Needs" -> `/contact`, "Explore Lead Processing Automation Case Study" -> `/case-studies/lead-processing-automation-system`

### 3.5 SEO Service Page (`/services/seo`)
* **Page Title:** Technical & Strategic SEO Services | DigitalWebStudio
* **H1:** Search Engine Optimization Built for Sustainable Growth
* **H2s:**
  1. Search is evolving. Is your website visible?
  2. Strategic SEO Capabilities Built for Revenue
  3. How Search Works in the AI Era
  4. The Architecture Behind High-Ranking Sites
  5. A Methodical, Data-Driven Approach
  6. Connected Capabilities for Organic Growth
  7. Common questions about modern SEO.
  8. Ready to grow your organic visibility?
* **H3s:**
  * Capabilities: *Technical SEO Architecture*, *On-Page & Semantic SEO*, *Content Strategy & Authority*, *Performance & Core Web Vitals*, *Local & Entity SEO*, *Analytics & Search Console*
  * Modern Search: *Generative AI Overviews (SGE)*, *Semantic Entity Understanding*, *User Intent & Engagement Signals*, *Technical Precision as a Baseline*
  * Dev Connection: *Clean HTML & Semantic Hierarchy*, *Fast Server-Side Rendering*, *Automated Structured Data*, *Zero-Bloat Asset Delivery*
  * Process: *01 / Technical & Content Audit*, *02 / Information Architecture & Entity Map*, *03 / Technical Remediation & On-Page*, *04 / Authority Building & Monitoring*
  * Related Capabilities: *Digital Marketing*, *Web Development*, *API Integration*
* **FAQs:**
  1. *How is technical SEO different from content SEO?* -> Technical ensures crawlability/speed; content satisfies user intent.
  2. *How long does it take to see SEO results?* -> Significant indexing and ranking shifts appear in 3–6 months.
  3. *Do you optimize for Google's AI Overviews?* -> Yes, through entity grounding and structured topical depth.
  4. *Can you fix indexing issues on JavaScript / Next.js sites?* -> Yes, through clean SSR and metadata pipeline verification.
  5. *Do you provide monthly SEO reporting?* -> Yes, tracking organic impressions, CTR, queries, and conversions.
* **CTAs:** "Get an SEO Assessment" -> `/contact`, "View Headless Migration Case Study" -> `/case-studies/technical-seo-headless-migration`

### 3.6 Digital Marketing Page (`/services/digital-marketing`)
* **Page Title:** Digital Marketing & Organic Growth Systems | DigitalWebStudio
* **H1:** Digital Marketing That Drives Qualified Demand
* **H2s:**
  1. Marketing without alignment wastes budget.
  2. Integrated Marketing Services
  3. The Organic-First Growth Framework
  4. Marketing and SEO Work Together
  5. Data-Led Optimization & Reporting
  6. Connected Capabilities for Digital Growth
  7. Common questions about digital marketing.
  8. Ready to scale your acquisition pipeline?
* **H3s:**
  * Services: *Content Marketing & Strategy*, *Conversion Rate Optimization (CRO)*, *Search Visibility & Distribution*, *Performance Analytics & Attribution*, *Funnel & Lead Nurturing*, *Brand Positioning & Messaging*
  * Framework: *01 / Audience & Intent Research*, *02 / Content & Funnel Architecture*, *03 / Multi-Channel Distribution*, *04 / Conversion Tuning & Scale*
  * Analytics: *Full-Funnel Tracking*, *Attribution Modeling*, *Behavioral Analytics*, *Iterative Testing*
  * Related Capabilities: *SEO*, *Web Development*, *AI Automation*
* **CTAs:** "Plan Your Growth Strategy" -> `/contact`

### 3.7 Vibe Code Development Page (`/services/vibe-code-development`)
* **Page Title:** Vibe Code Development & AI Prototyping | DigitalWebStudio
* **H1:** Rapid Prototyping & Intelligent Application Development
* **H2s:**
  1. Traditional development can be slow and rigid.
  2. What Vibe Code Development Delivers
  3. Speed with Engineering Rigor
  4. From Concept to Production
  5. Ideal Use Cases for Vibe Code Development
  6. Connected Capabilities for Rapid Engineering
  7. Common questions about vibe code development.
  8. Have an idea you want to build quickly?
* **H3s:**
  * Capabilities: *Rapid MVP Development*, *Interactive Prototypes*, *AI-Augmented Workflows*, *Component-Driven Systems*, *API-Ready Foundations*, *Production Refinement*
  * Engineering Rigor: *Clean TypeScript Types*, *Modern Next.js Architecture*, *Scalable Component Design*, *Security & Production Readiness*
  * Process: *01 / Ideate & Scope*, *02 / Rapid Prototyping*, *03 / Engineering Polish*, *04 / Production Deployment*
  * Use Cases: *Startup MVPs*, *Internal Tools & Dashboards*, *Proof-of-Concept Apps*, *Feature Prototyping*
  * Related Capabilities: *Web Development*, *API Integration*, *AI Automation*
* **CTAs:** "Discuss Your Prototype" -> `/contact`, "Read Rapid MVP Case Study" -> `/case-studies/rapid-mvp-vibe-code-development`

### 3.8 Chatbot Development Page (`/services/chatbot-development`)
* **Page Title:** AI Chatbot Development & Intelligent Agents | DigitalWebStudio
* **H1:** Custom AI Chatbots & Intelligent Conversational Agents
* **H2s:**
  1. Generic bots frustrate users. Smart bots solve problems.
  2. Purpose-Built Chatbot Capabilities
  3. Connected with Your Entire Software Stack
  4. How We Build Intelligent Chatbots
  5. Connected Capabilities for Conversational Systems
  6. Common questions about AI chatbots.
  7. Ready to automate customer conversations?
* **H3s:**
  * Use Cases: *Customer Support Automation*, *Lead Qualification & Booking*, *Internal Knowledge Base Assistants*, *Transactional E-Commerce Bots*, *Multilingual Assistants*, *Custom API Task Bots*
  * Integrations: *OpenAI / Claude / LLM APIs*, *CRM Systems (HubSpot, Salesforce)*, *Helpdesk (Zendesk, Intercom)*, *Messaging Channels (WhatsApp, Slack, Web)*
  * Process: *01 / Conversational Mapping*, *02 / Knowledge Ingestion & RAG*, *03 / Tool Calling & API Hooks*, *04 / Testing & Guardrails*
  * Related Capabilities: *AI Automation*, *API Integration*, *Web Development*
* **CTAs:** "Build Your Custom Chatbot" -> `/contact`

### 3.9 API Integration Page (`/services/api-integration`)
* **Page Title:** API Integration & Custom Middleware Services | DigitalWebStudio
* **H1:** Seamless API Integrations & Custom Middleware Architecture
* **H2s:**
  1. Isolated systems slow your business down.
  2. Core API Integration Capabilities
  3. The Business Value of Unified Data
  4. How We Build Reliable Integrations
  5. Connected Capabilities for Integrated Systems
  6. Common questions about API integrations.
  7. Ready to connect your business systems?
* **H3s:**
  * Capabilities: *REST & GraphQL Integration*, *Custom Middleware & Webhooks*, *CRM & ERP Synchronization*, *Payment & E-Commerce APIs*, *Data Transformation & ETL*, *Legacy System Modernization*
  * Value: *Eliminate Data Silos*, *Real-Time Data Sync*, *Automated Multi-System Actions*, *Secure API Architecture*
  * Process: *01 / Endpoint & Schema Analysis*, *02 / Middleware Architecture*, *03 / Security & Rate-Limit Handling*, *04 / Integration Testing & Monitoring*
  * Related Capabilities: *AI Automation*, *Web Development*, *Chatbot Development*
* **CTAs:** "Plan Your Integration" -> `/contact`

### 3.10 Web Development Page (`/services/web-development`)
* **Page Title:** High-Performance Web Development | DigitalWebStudio
* **H1:** High-Performance Web Development for Modern Businesses
* **H2s:**
  1. Slow, bloated websites cost you revenue and rank.
  2. Web Development Capabilities Built for Scale
  3. An Engineering Approach to Web Architecture
  4. How We Build High-Performing Websites
  5. Connected Capabilities for Modern Web Systems
  6. Common questions about web development.
  7. Ready to build a high-performance website?
* **H3s:**
  * Capabilities: *Next.js & React Architecture*, *Headless CMS Integration*, *Performance & Core Web Vitals*, *Responsive & Accessible Design*, *Conversion-Focused Layouts*, *Maintainable Component Systems*
  * Engineering Pillars: *Server-Side Rendering (SSR)*, *Zero-Bloat CSS & Assets*, *Strict TypeScript Safety*, *SEO-Engineered Markup*
  * Process: *01 / Discovery & Architecture*, *02 / UI/UX Design System*, *03 / Next.js Engineering*, *04 / Optimization & QA*
  * Related Capabilities: *SEO*, *API Integration*, *Vibe Code Development*
* **CTAs:** "Start Your Web Project" -> `/contact`

### 3.11 Case Studies Hub (`/case-studies`)
* **Page Title:** Case Studies & Client Results | DigitalWebStudio
* **H1:** Proven Outcomes Across Automation, SEO & Engineering
* **H2s:**
  1. Featured Client Implementations
  2. Ready to achieve similar results?
* **H3s (Case Study Titles):**
  1. *Lead Processing Automation System for B2B Logistics*
  2. *Technical SEO & Headless Architecture Migration*
  3. *Rapid MVP Prototyping for an AI-Powered FinTech Platform*
* **Intro Copy:** "Explore how DigitalWebStudio helps businesses eliminate manual friction, rank higher in organic search, and launch robust digital products."
* **CTAs:** "Read Full Case Study" -> `/case-studies/[slug]`, "Start a Similar Project" -> `/contact`

### 3.12 Single Case Studies (`/case-studies/[slug]`)
* **Case Study 1:** `/case-studies/lead-processing-automation-system`
  * **H1:** Lead Processing Automation System for B2B Logistics
  * **Metrics / Results:** `85%` Manual Processing Reduction, `<2 min` Average Lead Response Time, `100%` CRM Data Accuracy
  * **H2s:** *The Challenge*, *Our Approach & Solution*, *System Architecture & Technologies*, *Business Outcomes & Impact*
  * **Technologies:** n8n, OpenAI GPT-4o, HubSpot API, Google Workspace, Webhooks
  * **CTA:** "Start a Similar Project" -> `/contact`
* **Case Study 2:** `/case-studies/technical-seo-headless-migration`
  * **H1:** Technical SEO & Headless Architecture Migration
  * **Metrics / Results:** `+240%` Organic Traffic Increase, `0.8s` Largest Contentful Paint (LCP), `#1-3` Rankings for Core Terms
  * **H2s:** *The Challenge*, *Our Approach & Solution*, *System Architecture & Technologies*, *Business Outcomes & Impact*
  * **Technologies:** Next.js 16, WPGraphQL, Yoast SEO, Tailwind CSS, Vercel
  * **CTA:** "Start a Similar Project" -> `/contact`
* **Case Study 3:** `/case-studies/rapid-mvp-vibe-code-development`
  * **H1:** Rapid MVP Prototyping for an AI-Powered FinTech Platform
  * **Metrics / Results:** `14 Days` Concept to Live MVP, `$1.2M` Seed Funding Secured, `10,000+` Early Beta Users
  * **H2s:** *The Challenge*, *Our Approach & Solution*, *System Architecture & Technologies*, *Business Outcomes & Impact*
  * **Technologies:** React, Next.js, Tailwind CSS, Stripe API, Supabase
  * **CTA:** "Start a Similar Project" -> `/contact`

### 3.13 Contact Page (`/contact`)
* **Page Title:** Contact Us | DigitalWebStudio
* **H1:** Let's Build Something Exceptional Together
* **H2s:**
  1. Send Us a Message
  2. Direct Contact Information
  3. What Happens Next?
  4. Frequently Asked Questions
* **H3s:**
  * Direct Contact: *Email Us*, *Call Us*, *Location*, *Office Hours*
  * Process: *1. Discovery & Analysis*, *2. Tailored Strategy*, *3. Engineering & Delivery*
* **Intro Copy:** "Have a project in mind, need to automate manual workflows, or want to scale your organic search visibility? Reach out and our senior engineering team will respond within 24 hours."
* **CTAs:** Form Submit Button ("Send Message"), Email link, Phone link.

---

## 4. Page-by-Page SEO Data

Below is the verified SEO metadata status extracted directly from each page component's `generateMetadata()` or static metadata export [FACT]:

| Route | SEO Title | Meta Description | Canonical URL | Robots | OG Title | OG Description | OG Image | Twitter Title | Twitter Description | Twitter Image | Metadata Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | DigitalWebStudio — High-Performance Digital Solutions | DigitalWebStudio architects next-generation digital experiences, intelligent AI automation workflows, and high-impact search strategies. | `http://localhost:3000/` | index, follow | DigitalWebStudio — High-Performance Digital Solutions | DigitalWebStudio architects next-generation digital experiences... | `/images/digitalwebstudio-workspace-collaboration.webp` | DigitalWebStudio — High-Performance Digital Solutions | DigitalWebStudio architects next-generation digital experiences... | `/images/digitalwebstudio-workspace-collaboration.webp` | WP Yoast / Client Fallback |
| `/about-us` | About Us | DigitalWebStudio | Learn about DigitalWebStudio's engineering philosophy, team expertise, and commitment to building scalable digital systems. | `http://localhost:3000/about-us` | index, follow | About Us | DigitalWebStudio | Learn about DigitalWebStudio's engineering philosophy... | `/images/digitalwebstudio-workspace-collaboration.webp` | About Us | DigitalWebStudio | Learn about DigitalWebStudio's engineering philosophy... | `/images/digitalwebstudio-workspace-collaboration.webp` | WP Yoast / Client Fallback |
| `/services` | Services | DigitalWebStudio | Explore our comprehensive digital services: AI Automation, SEO, Digital Marketing, Vibe Code, Chatbots, API Integration, and Web Development. | `http://localhost:3000/services` | index, follow | Services | DigitalWebStudio | Explore our comprehensive digital services... | `/images/software-development-team.webp` | Services | DigitalWebStudio | Explore our comprehensive digital services... | `/images/software-development-team.webp` | WP Yoast / Client Fallback |
| `/services/ai-automation` | AI Automation for Smarter Businesses | DigitalWebStudio | Eliminate repetitive tasks and streamline operations with custom AI automation workflows, CRM integrations, and intelligent data pipelines. | `http://localhost:3000/services/ai-automation` | index, follow | AI Automation for Smarter Businesses | DigitalWebStudio | Eliminate repetitive tasks and streamline operations... | `/images/software-development-team.webp` | AI Automation for Smarter Businesses | DigitalWebStudio | Eliminate repetitive tasks and streamline operations... | `/images/software-development-team.webp` | WP Yoast / Client Fallback |
| `/services/seo` | Technical & Strategic SEO Services | DigitalWebStudio | Data-driven SEO strategies that dominate search rankings, drive qualified traffic, and build long-term organic authority. | `http://localhost:3000/services/seo` | index, follow | Technical & Strategic SEO Services | DigitalWebStudio | Data-driven SEO strategies that dominate search rankings... | `/images/digital-growth-strategy-collaboration.webp` | Technical & Strategic SEO Services | DigitalWebStudio | Data-driven SEO strategies that dominate search rankings... | `/images/digital-growth-strategy-collaboration.webp` | WP Yoast / Client Fallback |
| `/services/digital-marketing` | Digital Marketing & Organic Growth Systems | DigitalWebStudio | Performance-driven digital marketing and organic growth systems built to generate qualified leads and maximize ROI. | `http://localhost:3000/services/digital-marketing` | index, follow | Digital Marketing & Organic Growth Systems | DigitalWebStudio | Performance-driven digital marketing... | `/images/digital-marketing-strategy.webp` | Digital Marketing & Organic Growth Systems | DigitalWebStudio | Performance-driven digital marketing... | `/images/digital-marketing-strategy.webp` | WP Yoast / Client Fallback |
| `/services/vibe-code-development` | Vibe Code Development & AI Prototyping | DigitalWebStudio | Rapid prototyping and intelligent application development using AI-assisted coding paired with rigorous engineering standards. | `http://localhost:3000/services/vibe-code-development` | index, follow | Vibe Code Development & AI Prototyping | DigitalWebStudio | Rapid prototyping and intelligent application development... | `/images/software-development-team.webp` | Vibe Code Development & AI Prototyping | DigitalWebStudio | Rapid prototyping and intelligent application development... | `/images/software-development-team.webp` | WP Yoast / Client Fallback |
| `/services/chatbot-development` | AI Chatbot Development & Intelligent Agents | DigitalWebStudio | Custom AI chatbots and intelligent conversational agents that automate customer support, qualify leads, and connect to your APIs. | `http://localhost:3000/services/chatbot-development` | index, follow | AI Chatbot Development & Intelligent Agents | DigitalWebStudio | Custom AI chatbots and intelligent conversational agents... | `/images/software-development-team.webp` | AI Chatbot Development & Intelligent Agents | DigitalWebStudio | Custom AI chatbots and intelligent conversational agents... | `/images/software-development-team.webp` | WP Yoast / Client Fallback |
| `/services/api-integration` | API Integration & Custom Middleware Services | DigitalWebStudio | Seamless API integrations, webhook architectures, and custom middleware that connect your disparate software systems. | `http://localhost:3000/services/api-integration` | index, follow | API Integration & Custom Middleware Services | DigitalWebStudio | Seamless API integrations, webhook architectures... | `/images/software-development-team.webp` | API Integration & Custom Middleware Services | DigitalWebStudio | Seamless API integrations, webhook architectures... | `/images/software-development-team.webp` | WP Yoast / Client Fallback |
| `/services/web-development` | High-Performance Web Development | DigitalWebStudio | Custom web applications and high-performance websites built with Next.js, React, and modern headless architecture. | `http://localhost:3000/services/web-development` | index, follow | High-Performance Web Development | DigitalWebStudio | Custom web applications and high-performance websites... | `/images/web-development-team-engineering.webp` | High-Performance Web Development | DigitalWebStudio | Custom web applications and high-performance websites... | `/images/web-development-team-engineering.webp` | Next.js Page Metadata / Fallback |
| `/case-studies` | Case Studies & Client Results | DigitalWebStudio | Explore real-world client results across AI automation, technical SEO, and modern web application development. | `http://localhost:3000/case-studies` | index, follow | Case Studies & Client Results | DigitalWebStudio | Explore real-world client results across AI automation... | `/images/digitalwebstudio-workspace-collaboration.webp` | Case Studies & Client Results | DigitalWebStudio | Explore real-world client results across AI automation... | `/images/digitalwebstudio-workspace-collaboration.webp` | WP Yoast / Client Fallback |
| `/case-studies/lead-processing-automation-system` | Lead Processing Automation System | DigitalWebStudio | Discover how DigitalWebStudio reduced manual processing by 85% with an intelligent lead automation system. | `http://localhost:3000/case-studies/lead-processing-automation-system` | index, follow | Lead Processing Automation System | DigitalWebStudio | Discover how DigitalWebStudio reduced manual processing... | `/images/software-development-team.webp` | Lead Processing Automation System | DigitalWebStudio | Discover how DigitalWebStudio reduced manual processing... | `/images/software-development-team.webp` | Next.js Dynamic Metadata |
| `/case-studies/technical-seo-headless-migration` | Technical SEO & Headless Architecture Migration | DigitalWebStudio | See how a modern Next.js migration and technical SEO overhaul drove a +240% organic traffic increase. | `http://localhost:3000/case-studies/technical-seo-headless-migration` | index, follow | Technical SEO & Headless Architecture Migration | DigitalWebStudio | See how a modern Next.js migration and technical SEO overhaul... | `/images/digital-growth-strategy-collaboration.webp` | Technical SEO & Headless Architecture Migration | DigitalWebStudio | See how a modern Next.js migration and technical SEO overhaul... | `/images/digital-growth-strategy-collaboration.webp` | Next.js Dynamic Metadata |
| `/case-studies/rapid-mvp-vibe-code-development` | Rapid MVP Prototyping for FinTech | DigitalWebStudio | Learn how DigitalWebStudio engineered a live, investor-ready MVP in 14 days using AI-accelerated workflows. | `http://localhost:3000/case-studies/rapid-mvp-vibe-code-development` | index, follow | Rapid MVP Prototyping for FinTech | DigitalWebStudio | Learn how DigitalWebStudio engineered a live, investor-ready MVP... | `/images/software-development-team.webp` | Rapid MVP Prototyping for FinTech | DigitalWebStudio | Learn how DigitalWebStudio engineered a live, investor-ready MVP... | `/images/software-development-team.webp` | Next.js Dynamic Metadata |
| `/contact` | Contact Us | DigitalWebStudio | Get in touch with DigitalWebStudio to discuss your AI automation, SEO, or web development project. | `http://localhost:3000/contact` | index, follow | Contact Us | DigitalWebStudio | Get in touch with DigitalWebStudio to discuss your AI automation... | `/images/digitalwebstudio-workspace-collaboration.webp` | Contact Us | DigitalWebStudio | Get in touch with DigitalWebStudio to discuss your AI automation... | `/images/digitalwebstudio-workspace-collaboration.webp` | Next.js Page Metadata / Fallback |

---

## 5. Next.js SEO Implementation

### 5.1 Metadata Architecture & Pipeline [FACT]
* **`metadataBase` Configuration (`src/app/layout.tsx`):**
  ```typescript
  export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: {
      default: 'DigitalWebStudio — High-Performance Digital Solutions',
      template: '%s | DigitalWebStudio',
    },
    description: 'DigitalWebStudio architects next-generation digital experiences, intelligent automation workflows, and high-impact search strategies.',
    // ... OpenGraph, Twitter, Icons, Alternates
  }
  ```
* **Server-Side Rendering:** 100% of metadata is resolved on the server inside Server Components prior to HTML stream delivery.
* **Icons & Manifest:**
  * Favicon: `/favicon.ico` (7.1 KB)
  * Standard App Icon: `/icon.png` (2.2 KB)
  * Apple Touch Icon: `/apple-icon.png` (32.9 KB)
  * PWA Manifest: `/site.webmanifest` (Declared in `layout.tsx`)
* **Viewport & Theme Color:** `viewport: { themeColor: '#030608', width: 'device-width', initialScale: 1 }` defined cleanly in `layout.tsx`.

### 5.2 Dynamic Metadata Functions (`generateMetadata`) [FACT]
Dynamic metadata is handled asynchronously across:
* `src/app/page.tsx` -> `getHomepageData()`
* `src/app/about-us/page.tsx` -> `getAboutPageData()`
* `src/app/services/page.tsx` -> `getServicesPageData()`
* `src/app/services/[service]/page.tsx` -> `get[Service]PageData()`
* `src/app/case-studies/[slug]/page.tsx` -> `getSingleCaseStudyData(slug)`
* All functions extract the WordPress Yoast payload via WPGraphQL. If the WordPress endpoint is unreachable or returns null during build/runtime, each function seamlessly falls back to pre-compiled, highly optimized static fallback metadata.

### 5.3 Robots & Sitemap Implementation [FACT]
* **`src/app/robots.ts`:**
  ```typescript
  import { MetadataRoute } from 'next';
  export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    return {
      rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }
  ```
* **`src/app/sitemap.ts`:**
  Dynamically maps all canonical URLs with `lastModified: new Date()`, `changeFrequency: 'weekly'` or `'monthly'`, and `priority` (1.0 for Home, 0.9 for Services, 0.8 for Service Singles, 0.7 for Case Studies).

---

## 6. WordPress / Yoast / GraphQL Pipeline

### 6.1 SEO Data Pipeline Flow [FACT]
```
[WordPress Admin / Yoast SEO Plugin]
                  │
                  ▼
[ACF Free Programmatic Field Groups (acf-fields.php)]
                  │
                  ▼
[WPGraphQL + WPGraphQL for ACF + custom GraphQL schema (graphql.php)]
                  │ (HTTP POST with JSON query)
                  ▼
[Next.js Client (src/lib/graphql/client.ts)]
                  │ (next: { revalidate: 60 })
                  ▼
[Next.js generateMetadata() / Page Component]
                  │
                  ▼
[HTML Head Rendering & Client Hydration]
```

### 6.2 Yoast SEO Fields Queried in WPGraphQL [FACT]
The standard GraphQL fragment queried across all pages in `src/lib/graphql/queries.ts` includes:
```graphql
seo {
  title
  metaDesc
  canonical
  metaRobotsNoindex
  metaRobotsNofollow
  opengraphTitle
  opengraphDescription
  opengraphImage {
    sourceUrl
  }
  twitterTitle
  twitterDescription
  twitterImage {
    sourceUrl
  }
}
```

### 6.3 On-Demand Revalidation Webhook [FACT]
* File: `src/app/api/revalidate/route.ts`
* Webhook trigger: Registered in WordPress `wp-content/themes/digitalwebstudio/inc/graphql.php` via `save_post` action.
* Security: Validates secret token against `process.env.WORDPRESS_REVALIDATION_SECRET`.
* Action: Calls Next.js `revalidatePath(path)` to immediately purge and regenerate ISR cache.

---

## 7. ACF Inventory

All ACF fields are registered programmatically in `wp-content/themes/digitalwebstudio/inc/acf-fields.php` using ACF Free field structures. Below is the complete field group mapping [FACT]:

### 7.1 Field Group: Homepage Settings (`group_dws_homepage`)
* Target: Page Template `front-page.php` / Front Page.
* Fields:
  1. `hero_tagline` (Text) -> Hero badge ("Next-Gen Digital Solutions").
  2. `hero_heading` (Text) -> Main H1 headline.
  3. `hero_subheading` (Textarea) -> Hero supporting copy.
  4. `hero_cta_primary_text` & `hero_cta_primary_link` (Text) -> Primary CTA button.
  5. `hero_cta_secondary_text` & `hero_cta_secondary_link` (Text) -> Secondary CTA button.
  6. `intro_badge`, `intro_heading`, `intro_text_p1`, `intro_text_p2` (Text / Textarea) -> Company Intro section.
  7. `work_heading`, `work_subheading`, `work_project_1_*` through `work_project_3_*` (Text / Image) -> Selected Work section.
  8. `services_heading`, `services_subheading`, `service_1_*` through `service_7_*` (Text / Textarea) -> Capabilities Matrix.
  9. `stats_number_1`..`stats_label_4` (Text) -> Key Stats metrics.
  10. `why_choose_heading`, `why_item_1_*`..`why_item_4_*` (Text / Textarea) -> Why Choose Us section.
  11. `process_heading`, `step_1_*`..`step_4_*` (Text / Textarea) -> Process section.
  12. `testimonials_heading`, `test_1_*`..`test_3_*` (Text / Textarea) -> Testimonials.
  13. `cta_heading`, `cta_text`, `cta_btn_text`, `cta_btn_link` (Text / Textarea) -> Bottom CTA.

### 7.2 Field Group: About Us Settings (`group_dws_about`)
* Target: Page Template `template-about.php` / Page with slug `about-us`.
* Fields:
  1. `about_hero_badge`, `about_hero_title`, `about_hero_subtitle`, `about_hero_image`
  2. `about_intro_badge`, `about_intro_title`, `about_intro_p1`, `about_intro_p2`
  3. `about_values_badge`, `about_values_title`, `about_val_1_*`..`about_val_4_*`
  4. `about_why_badge`, `about_why_title`, `about_why_1_*`..`about_why_4_*`
  5. `about_tech_badge`, `about_tech_title`, `about_tech_1_*`..`about_tech_4_*`
  6. `about_collab_badge`, `about_collab_title`, `about_collab_1_*`..`about_collab_3_*`
  7. `about_approach_badge`, `about_approach_title`, `about_step_1_*`..`about_step_5_*`
  8. `about_cta_title`, `about_cta_desc`, `about_cta_btn1_*`, `about_cta_btn2_*`

### 7.3 Field Group: Services Overview Settings (`group_dws_services`)
* Target: Page Template `template-services.php` / Page with slug `services`.
* Fields:
  1. `services_hero_badge`, `services_hero_title`, `services_hero_subtitle`
  2. `services_overview_badge`, `services_overview_title`, `services_overview_desc`
  3. `services_list_item_1_*` through `services_list_item_7_*` (Title, Slug, Excerpt, Features, Icon)
  4. `services_process_badge`, `services_process_title`, `services_step_1_*`..`services_step_4_*`
  5. `services_tech_badge`, `services_tech_title`, `services_tech_desc`
  6. `services_cta_title`, `services_cta_desc`, `services_cta_btn_*`

### 7.4 Field Group: Single Service Settings (`group_dws_service_single`)
* Target: Custom Post Type `service` or individual service pages.
* Fields: `hero_title`, `problem_items`, `capabilities_list`, `use_cases`, `architecture_diagram`, `tech_stack`, `delivery_process`, `business_results`, `faq_items`, `cta_banner`.

### 7.5 Field Group: Global Site Settings (`group_dws_global_settings`)
* Target: Options screen (`admin.php?page=dws-global-settings`).
* Fields: `site_logo`, `contact_phone`, `contact_email`, `office_address`, `social_github`, `social_linkedin`, `social_twitter`, `footer_copyright`.

---

## 8. GraphQL Inventory

Documented GraphQL queries in `src/lib/graphql/queries.ts` and their execution profile [FACT]:

| Query Name | Purpose | Target Object | Key Fields Requested | Server / Client | Revalidation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET_HOMEPAGE_FULL_DATA` | Complete homepage dataset + Yoast SEO | `page(id: "/", idType: URI)` | `homepageFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_PAGE_SEO_BY_URI` | Standalone Yoast SEO metadata fetcher | `page(id: $uri, idType: URI)` | `seo` fragment | Server (generateMetadata) | 60s ISR |
| `GET_ABOUT_PAGE_FULL_DATA` | About page content fields + Yoast SEO | `page(id: "/about-us", idType: URI)` | `aboutPageFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_SERVICES_PAGE_FULL_DATA` | Services overview page data + Yoast SEO | `page(id: "/services", idType: URI)` | `servicesPageFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_AI_AUTOMATION_PAGE_DATA` | AI Automation single page data + Yoast SEO | `service(id: "ai-automation")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_SEO_PAGE_DATA` | SEO service single page data + Yoast SEO | `service(id: "seo")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_VIBE_CODE_PAGE_DATA` | Vibe Code service single page data + Yoast SEO | `service(id: "vibe-code-development")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_DIGITAL_MARKETING_PAGE_DATA` | Digital Marketing service single page data + Yoast SEO | `service(id: "digital-marketing")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_CHATBOT_PAGE_DATA` | Chatbot service single page data + Yoast SEO | `service(id: "chatbot-development")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_API_INTEGRATION_PAGE_DATA` | API Integration service single page data + Yoast SEO | `service(id: "api-integration")` | `serviceFields`, `seo` | Server (RSC) | 60s ISR |
| `GET_CASE_STUDIES_PAGE_DATA` | Case studies index data + Yoast SEO | `page(id: "/case-studies", idType: URI)` | `caseStudiesFields`, `seo` | Server (RSC) | 60s ISR |

---

## 9. Internal Link Map

A complete crawl and link graph analysis of the codebase reveals the following structure [FACT]:

### 9.1 Global Navigation & Header Links
* **Source:** `src/components/layout/Navbar.tsx` (Rendered on 100% of pages).
* **Targets & Anchors:**
  * `/` -> Anchor: "DigitalWebStudio" (Brand Logo) & "Home"
  * `/about-us` -> Anchor: "About"
  * `/services` -> Anchor: "Services"
  * `/services/ai-automation` -> Anchor: "AI Automation" (Primary Capability)
  * `/services/seo` -> Anchor: "Search Engine Optimization" (Primary Capability)
  * `/services/digital-marketing` -> Anchor: "Digital Marketing" (Primary Capability)
  * `/services/vibe-code-development` -> Anchor: "Vibe Code Development" (Supporting Capability)
  * `/services/chatbot-development` -> Anchor: "Chatbot Development" (Supporting Capability)
  * `/services/api-integration` -> Anchor: "API Integration" (Supporting Capability)
  * `/services/web-development` -> Anchor: "Web Development" (Supporting Capability)
  * `/case-studies` -> Anchor: "Case Studies"
  * `/contact` -> Anchor: "Contact" & "Get Started" (Primary Nav CTA Button)

### 9.2 Global Footer Links
* **Source:** `src/components/layout/Footer.tsx` (Rendered on 100% of pages).
* **Targets & Anchors:**
  * Services Column: `/services/ai-automation`, `/services/seo`, `/services/digital-marketing`, `/services/vibe-code-development`, `/services/chatbot-development`, `/services/api-integration`, `/services/web-development`.
  * Company Column: `/about-us`, `/services`, `/case-studies`, `/contact`.
  * Contact Info: `mailto:contact@digitalwebstudio.com`, `tel:+1 (555) 019-2834`.

### 9.3 Contextual In-Page & Related Service Links
* **Breadcrumbs Component (`src/components/ui/Breadcrumbs.tsx`):** Rendered on all 7 service single pages and case study pages, providing contextual upward links (`Home -> Services -> [Current Service]`).
* **RelatedServices Component (`src/components/ui/RelatedServices.tsx`):** Rendered on all 7 service pages, linking 2–3 logically connected services per page (e.g., AI Automation links to Chatbots, API Integration, and Vibe Code; SEO links to Digital Marketing, Web Development, and API Integration).
* **Case Study Cross-Links:** All case studies cross-link to relevant service single pages and have direct CTAs to `/contact`.
* **Orphan Status [FACT]:** **0 orphan pages.** Every single canonical route has multiple inbound links from Header, Footer, and contextual components. Maximum crawl depth from Homepage is **2 clicks**.

---

## 10. Navigation Architecture

### 10.1 Header Navigation Structure [FACT]
* **Component:** `src/components/layout/Navbar.tsx`
* **Type:** Interactive desktop dropdown menu + mobile slide-out drawer.
* **Menu Architecture:**
  * **Home** (`/`)
  * **About** (`/about-us`)
  * **Services** (`/services`) -> Accessible dropdown split into:
    * *Primary Solutions:* AI Automation (`/services/ai-automation`), SEO (`/services/seo`), Digital Marketing (`/services/digital-marketing`).
    * *Supporting Capabilities:* Vibe Code (`/services/vibe-code-development`), Chatbots (`/services/chatbot-development`), API Integration (`/services/api-integration`), Web Development (`/services/web-development`).
  * **Case Studies** (`/case-studies`)
  * **Contact** (`/contact`)
  * **Action CTA:** "Get Started" -> `/contact`

### 10.2 Footer Navigation Structure [FACT]
* **Component:** `src/components/layout/Footer.tsx`
* **Columns:**
  1. *Brand Summary & Social Channels:* Logo, Positioning Statement, GitHub, LinkedIn, Twitter links.
  2. *Services:* 7 direct links to canonical service routes.
  3. *Company:* About Us, Services Hub, Case Studies, Contact.
  4. *Direct Contact Details:* Email, Phone, Location.

---

## 11. Service Architecture

Below is the verified structural breakdown for all 7 service pages [FACT]:

| Service | Page URL | H1 Headline | Primary Topic | Related Services Linked | Key FAQ Covered | Primary CTA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AI Automation** | `/services/ai-automation` | AI Automation for Smarter, More Efficient Businesses | Business & Workflow Automation (n8n, Make, CRM) | Chatbots, API Integration, Vibe Code | What tools do you use? (n8n, Make, Python) | "Discuss Your Automation Needs" |
| **SEO** | `/services/seo` | Search Engine Optimization Built for Sustainable Growth | Technical, Semantic & Architecture SEO | Digital Marketing, Web Development, API Integration | How long to see results? (3–6 months) | "Get an SEO Assessment" |
| **Digital Marketing** | `/services/digital-marketing` | Digital Marketing That Drives Qualified Demand | Organic Growth, CRO & Performance Marketing | SEO, Web Development, AI Automation | How do SEO and marketing align? | "Plan Your Growth Strategy" |
| **Vibe Code Development** | `/services/vibe-code-development` | Rapid Prototyping & Intelligent Application Development | AI-Assisted Prototyping & Rapid MVP Engineering | Web Development, API Integration, AI Automation | Is vibe code production ready? | "Discuss Your Prototype" |
| **Chatbot Development** | `/services/chatbot-development` | Custom AI Chatbots & Intelligent Conversational Agents | LLM Agents, Customer Support & Lead Chatbots | AI Automation, API Integration, Web Development | Can bots integrate with CRM/Helpdesk? | "Build Your Custom Chatbot" |
| **API Integration** | `/services/api-integration` | Seamless API Integrations & Custom Middleware Architecture | REST/GraphQL Middleware & Data Synchronization | AI Automation, Web Development, Chatbots | How do you handle legacy systems? | "Plan Your Integration" |
| **Web Development** | `/services/web-development` | High-Performance Web Development for Modern Businesses | Next.js, Headless CMS & High-Speed Web Apps | SEO, API Integration, Vibe Code | Why choose headless over monolith? | "Start Your Web Project" |

---

## 12. Business Positioning

### 12.1 Core Positioning Signals [FACT]
* **Primary Business Positioning:** **AI AUTOMATION + SEO + DIGITAL GROWTH**
* **Supporting Capabilities:** Vibe Code Development, Chatbot Development, API Integration, Web Development, Digital Marketing.
* **Core Value Proposition Statement (from Hero):** *"We architect next-generation digital experiences, intelligent automation workflows, and high-impact search strategies that drive measurable business outcomes."*

### 12.2 Target Audience Signals [INFERENCE]
* Growth-oriented B2B companies, mid-market operators, technical founders, and marketing directors looking to eliminate manual operational friction while scaling their organic acquisition pipeline.

### 12.3 Business Problem Signals [FACT]
* Excessive manual copy-pasting, disjointed software tools, stagnant organic search rankings, slow legacy monolithic websites, and long development cycles for MVPs.

---

## 13. Lead Generation Architecture

### 13.1 Conversion Points & Entry Paths [FACT]
1. **Primary Global Header CTA:** "Get Started" button -> Navigates to `/contact` (or opens `ContactModal`).
2. **Hero Secondary CTA:** "Book a Consultation" -> Triggers `ContactModal` with immediate interactive form.
3. **Dedicated Contact Page (`/contact`):** Full-page interactive form + direct email (`contact@digitalwebstudio.com`) + phone (`+1 (555) 019-2834`).
4. **Service Page Consultation CTAs:** Contextualized action banners at the bottom of all 7 service pages (e.g., "Discuss Your Automation Needs", "Get an SEO Assessment").
5. **Case Study Proof CTAs:** Bottom banner on all case studies ("Start a Similar Project" -> `/contact`).

### 13.2 Contact Form Field Specification [FACT]
* Component: `src/components/ui/ContactModal.tsx` and `src/components/contact/ContactClientView.tsx`
* Fields:
  1. `name` (Text, Required): Full Name.
  2. `email` (Email, Required): Business Email.
  3. `service` (Select Dropdown): Service of interest (AI Automation, SEO, Digital Marketing, Vibe Code, Chatbots, API Integration, Web Development, Other).
  4. `budget` (Select Dropdown): Budget Range ($5k-$10k, $10k-$25k, $25k-$50k, $50k+).
  5. `message` (Textarea, Required): Project details.
* State Management: Handles `submitting`, `submitted` (Thank You view with 24-hour turnaround confirmation), and `error` states gracefully.

---

## 14. Analytics & Tracking Audit

### 14.1 Current Implementation Status [FACT]
* **Google Analytics 4 (GA4):** Not hardcoded in `src/app/layout.tsx`. WordPress backend contains `tracking-code-manager` plugin for snippet injection.
* **Google Tag Manager (GTM):** Not detected in Next.js frontend code.
* **Meta Pixel / LinkedIn Insight:** Not detected in Next.js frontend code.
* **Custom Lead Event Dispatchers:** No client-side `window.dataLayer.push` or `gtag('event')` calls currently exist in form components.

### 14.2 Recommended Pre-Launch Tracking Plan [RECOMMENDATION]
When analytics scripts are deployed, the following custom events should be tracked:
* `generate_lead`: Triggered upon successful submission of the contact form.
* `open_consultation_modal`: Triggered when clicking "Book a Consultation" or service CTAs.
* `click_phone`: Click on `tel:` links in header/footer/contact page.
* `click_email`: Click on `mailto:` links.
* `view_case_study`: In-depth engagement tracking on case study pages.

---

## 15. Image Inventory

All static image assets located in `public/images/` were scanned and verified [FACT]:

| Filename | Format | Dimensions | Approx. Size | Used On Page | Alt Text in Code | Decorative / Content | Next/Image Component? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `digitalwebstudio-workspace-collaboration.webp` | WebP | 1200x800 | 793.7 KB | Home, About, OG Fallback | "DigitalWebStudio team collaborating on digital systems" | Content / Trust | Yes (priority on hero/about) |
| `software-development-team.webp` | WebP | 1200x800 | 755.1 KB | Services, AI Automation, Vibe Code, Chatbots | "Software engineering and automation team" | Content / Trust | Yes |
| `digital-growth-strategy-collaboration.webp` | WebP | 1200x800 | 106.0 KB | SEO, Case Study 2 | "Strategic SEO and digital growth planning" | Content / Proof | Yes |
| `digital-marketing-strategy.webp` | WebP | 1200x800 | 751.2 KB | Digital Marketing | "Digital marketing and growth strategy analytics" | Content | Yes |
| `web-development-team-engineering.webp` | WebP | 1200x800 | 90.1 KB | Web Development | "Web development engineering team at work" | Content | Yes |
| `hero-globe-transparent.webp` | WebP | 800x800 | 382.5 KB | Homepage Hero | "Digital technology network globe" | Decorative / Visual | Yes |
| `hero-banner-bg.webp` | WebP | 1920x1080 | 23.7 KB | Homepage Hero Background | "Hero ambient glow background" | Decorative | Yes |
| `logo-icon.webp` | WebP | 128x128 | 19.9 KB | Header, Footer, Favicon | "DigitalWebStudio Logo" | Brand Asset | Yes |

*Note: Both `.webp` and legacy fallback `.jpg` versions exist in `public/images/` for maximum cross-browser backwards compatibility.*

---

## 16. SVG Inventory

Documented SVG assets and vector components across the project [FACT]:
* **Hero Orbital Services SVG (`src/components/home/HeroServicesOrbit.tsx`):** Custom multi-ring SVG visualization representing connected service nodes with smooth CSS rotation and hover interactions. Fully marked with `aria-hidden="true"` for screen-reader accessibility.
* **Icon Library (`lucide-react`):** Over 30 lightweight SVG vector icons used contextually for capabilities, process steps, stats, and badges.
* **Process Flow Visuals:** CSS/SVG step-connecting lines rendered inside `ProcessSection.tsx` and service process components.

---

## 17. Lottie & Animation Inventory

Documented animation implementations across the codebase [FACT]:
* **Lottie Player (`lottie-react`):**
  * Asset: `src/components/home/digital-pulse.json`
  * Component: `src/components/ui/LottieAnimation.tsx`
  * Execution: Client-side dynamic rendering with fallback container.
* **Framer Motion (`framer-motion` v13.2.0):**
  * Used in client components (`HomeClientView`, `ServicesClientView`, `ContactModal`, etc.) for smooth viewport enter animations (`whileInView`), staggered card reveals, and accordion expanding/collapsing.
* **Performance Assessment [INFERENCE]:** Animations use hardware-accelerated CSS properties (`transform`, `opacity`) ensuring 60fps rendering without layout recalculation overhead.

---

## 18. Performance Implementation

Code-level audit of performance mechanisms [FACT]:
* **Static Prerendering:** All 32 pages prerender statically at build time (`○ (Static)`).
* **Font Optimization:** Google Font `Plus_Jakarta_Sans` loaded via `next/font/google` with `subsets: ['latin']`, `display: 'swap'`, and zero external render-blocking HTTP requests.
* **Image Optimization:** Automated Next.js image optimizer powered by `sharp` with responsive `srcset` generation and native lazy-loading on below-the-fold images.
* **Bundle Splitting:** Modular App Router architecture ensures JavaScript bundles for interactive modals and Lottie players are code-split and loaded on demand.

---

## 19. Core Web Vitals Risk Assessment

Code-level risk analysis [INFERENCE]:
* **Largest Contentful Paint (LCP) Risk:** **LOW.** Hero text is server-rendered immediately in initial HTML. Hero background image is optimized and preloaded with `priority={true}`.
* **Cumulative Layout Shift (CLS) Risk:** **VERY LOW.** All `next/image` instances have explicit `width` and `height` aspect ratio wrappers. Web fonts utilize `display: 'swap'` with font-family fallbacks.
* **Interaction to Next Paint (INP) Risk:** **LOW.** Interactive state transitions (accordions, modal toggles, mobile menu) utilize lightweight React state hooks without blocking main thread computations.

---

## 20. Structured Data (Schema JSON-LD)

Documented active JSON-LD schemas generated in page heads [FACT]:
1. **`Organization` Schema (`src/app/layout.tsx`):**
   * Fields: `@type: "Organization"`, `name: "DigitalWebStudio"`, `url: "http://localhost:3000"`, `logo: "http://localhost:3000/images/logo-icon.webp"`, `sameAs: [GitHub, LinkedIn, Twitter]`, `contactPoint: { telephone, contactType: "customer service" }`.
2. **`WebSite` Schema (`src/app/layout.tsx`):**
   * Fields: `@type: "WebSite"`, `name: "DigitalWebStudio"`, `url: "http://localhost:3000"`.
3. **`BreadcrumbList` Schema (`src/components/ui/Breadcrumbs.tsx`):**
   * Generated dynamically on all service and case study pages conforming to Schema.org standards (`itemListElement` array with positional URLs).
4. **`FAQPage` Schema (`src/components/ui/FAQAccordion.tsx`):**
   * Embedded on service pages containing accordion FAQs, outputting `mainEntity` Question and Answer pairs for rich snippet eligibility.

---

## 21. Robots & Sitemap Audit

* **Robots.txt (`src/app/robots.ts`):** [FACT]
  * User-Agent: `*`
  * Allow: `/`
  * Disallow: `/api/`
  * Sitemap declaration: `http://localhost:3000/sitemap.xml` (Dynamically binds to `NEXT_PUBLIC_SITE_URL`).
* **Sitemap.xml (`src/app/sitemap.ts`):** [FACT]
  * Correctly includes all 14 primary canonical pages + 3 single case studies.
  * Note for Strategist: `/about` redirect alias is currently present in sitemap array and should be cleaned prior to launch.

---

## 22. URL & Domain References

Audited hardcoded domain strings across the frontend [FACT]:
* `http://localhost:3000`: Present as fallback in `metadataBase`, `robots.ts`, and `sitemap.ts` when `NEXT_PUBLIC_SITE_URL` environment variable is not defined.
* `http://localhost/Digitalwebstudio/graphql`: Present as default endpoint in `src/lib/graphql/client.ts` when `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` is not defined.
* **Production Action [RECOMMENDATION]:** Ensure `NEXT_PUBLIC_SITE_URL` (e.g. `https://digitalwebstudio.com`) and `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` are set in production Vercel dashboard.

---

## 23. 404 & Redirects

* **Redirect Rules [FACT]:**
  * `src/app/about/page.tsx` uses Next.js `redirect('/about-us', RedirectType.replace)` to enforce canonical URL hygiene.
  * Root alias routes (`/ai-automation`, `/seo`, `/digital-marketing`, etc.) currently re-export service single components.
* **Strategist Recommendation [RECOMMENDATION]:** Update root alias page components to issue explicit `308 Permanent Redirects` to `/services/[slug]` to prevent duplicate indexable content.

---

## 24. Accessibility Information

* **Semantic HTML [FACT]:** 100% of pages utilize valid HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **Heading Hierarchy [FACT]:** Every canonical route has exactly **ONE `<h1>`**, with logical sequential descending `<h2>` and `<h3>` tags.
* **ARIA & Controls [FACT]:** Interactive accordions utilize `aria-expanded`, modals have `role="dialog"`, and icons are decorated with `aria-hidden="true"`.

---

## 25. Content Quality & Editorial Signals

* **Voice & Tone [INFERENCE]:** Technical, engineering-driven, pragmatic, and business-focused. Avoids generic AI hype words ("magic", "revolutionize everything") in favor of specific architectural mechanisms ("REST APIs", "webhook retry logic", "SSR", "entity mapping").
* **Proof Elements [FACT]:** Includes specific operational metrics in case studies (85% reduction, 0.8s LCP, 14-day turnaround).

---

## 26. Trust / E-E-A-T Data

* **Company Identity [FACT]:** Named entity "DigitalWebStudio", clear positioning, documented values, and direct email/phone contact information.
* **Missing Items [UNKNOWN]:** Physical street address, registered company number, specific named leadership bios (founders/executives), and client video testimonials are currently placeholder or not present locally.

---

## 27. Content Gap Data

Topics mentioned on the website that could be expanded into high-value supporting guides or pillar articles [INFERENCE]:
1. *AI Automation:* Detailed breakdowns of **n8n vs Make** for enterprise workflows, CRM lead routing automation architectures, LLM guardrails.
2. *Technical SEO:* Headless Next.js indexing guides, Core Web Vitals optimization for React, Schema markup architecture.
3. *API Integration:* Custom middleware webhook retry strategies, REST to GraphQL migration patterns.

---

## 28. Potential Future Page Signals

| Topic | Search Intent | Business Intent | Recommended Future Format | Priority Signal |
| :--- | :--- | :--- | :--- | :--- |
| **n8n & Make Workflow Automation** | Commercial Investigation | Capture high-intent searches for n8n implementation partners | Dedicated Solution Sub-Page | HIGH |
| **Headless WordPress & Next.js Development** | Commercial Investigation | Attract enterprise clients looking to modernize slow WP sites | Dedicated Architecture Landing Page | HIGH |
| **AI Customer Support Chatbots** | Commercial Investigation | Generate inquiries for Zendesk/Intercom LLM agents | Dedicated Use-Case Landing Page | MEDIUM |
| **CRM Integration & Sync (HubSpot / Salesforce)** | Commercial / Transactional | Win high-ticket middleware & data sync contracts | Dedicated Capability Page | MEDIUM |
| **Enterprise Technical SEO Audits** | Transactional / Lead | Direct lead capture for high-margin audit retainers | Dedicated Service Offer Page | HIGH |

---

## 29. Case Study System

* **Architecture [FACT]:** Built on Next.js dynamic routing (`src/app/case-studies/[slug]/page.tsx`) with static generation via `generateStaticParams()`.
* **Current Active Case Studies:**
  1. `lead-processing-automation-system` (AI Automation & CRM Integration)
  2. `technical-seo-headless-migration` (Technical SEO & Next.js Engineering)
  3. `rapid-mvp-vibe-code-development` (Vibe Code & Rapid Prototyping)
* **Data Fields Documented:** Client Title, Industry, Challenge, Approach, Architecture, Technologies Used, Key Results Metrics, CTA.

---

## 30. Forms & Contact Flow

* **Submission Flow [FACT]:**
  * User submits name, email, service selection, budget, and message.
  * Form client state triggers async submission (connects to WordPress CF7 REST endpoint or server action).
  * On success, form transitions to interactive Thank You card displaying confirmation and 24-hour response commitment.

---

## 31. Technical Environment Variables

Variable names verified in the codebase [FACT]:
* `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` (Classification: **PUBLIC**)
* `NEXT_PUBLIC_SITE_URL` (Classification: **PUBLIC**)
* `WORDPRESS_REVALIDATION_SECRET` (Classification: **PRIVATE**)
*(Verification: No secrets, passwords, or production database credentials exist in public source files).*

---

## 32. Security-Relevant SEO Notes

* **Headless Security [FACT]:** WordPress backend can be restricted / firewalled in production so only the Next.js server IP has access to WPGraphQL, preventing direct indexing of the WordPress CMS subdomain.
* **API Route Protection:** `/api/revalidate` requires secret bearer token header verification.

---

## 33. Information Not Available Locally (Unknowns)

The following data cannot be determined in a local development environment and must be retrieved post-launch [UNKNOWN]:
* Google Search Console historical data (Organic clicks, impressions, CTR, average query positions).
* Live domain backlink profiles and referring domains (Ahrefs / Semrush).
* Real-world Core Web Vitals (Chrome User Experience Report / CrUX field data).
* Live conversion rates and visitor demographics.
* Local geographic search rankings.

---

## 34. Business Information Still Required

The following questionnaire items must be confirmed with the business stakeholder before finalizing the SEO campaign:
1. **Target Geography:** What is the primary target country, region, or city for commercial client acquisition? (e.g., US, UK, Australia, Global B2B).
2. **Ideal Customer Profile (ICP):** What is the minimum project budget or annual revenue of target clients?
3. **Primary Competitors:** Who are the 3–5 direct agency/consultancy competitors to benchmark against?
4. **Physical Entity Details:** Will a registered business address and local telephone number be published for Google Business Profile / Local Entity optimization?
5. **Client Proof & Logos:** Are there named client brand logos and written testimonials ready for public display?

---

## 35. Summary of Current State

| Metric / Audit Element | Current Factual Count / Status | Notes / Strategist Action |
| :--- | :--- | :--- |
| **Total Prerendered Static Routes** | 32 Routes | 100% build success with zero errors |
| **Canonical Public Pages** | 14 Pages | Home, About, Services Hub, 7 Services, 3 Case Studies, Contact |
| **Individual Service Pages** | 7 Dedicated Pages | AI Automation, SEO, Digital Mktg, Vibe Code, Chatbots, API, Web Dev |
| **Case Studies** | 3 Case Studies | Complete with metrics, tech stack, and CTAs |
| **ACF Field Groups** | 5 Programmatic Groups | Registered in `acf-fields.php` |
| **WPGraphQL Queries** | 11 Queries | Defined in `queries.ts` with client fallbacks |
| **SEO Metadata Sources** | WordPress Yoast + Next.js Fallback | Fully server-rendered with JSON-LD schemas |
| **Orphan Pages** | 0 Orphan Pages | Max crawl depth <= 2 clicks |
| **Broken Internal Links** | 0 Broken Links | 100% of internal links return HTTP 200 OK |
| **Heading Structure** | 100% Valid | Exactly one H1 per page, sequential H2/H3s |
| **Core Web Vitals Risk** | LOW | Pure CSS, Next/Image, zero render-blocking fonts |

---
*End of Pre-Launch SEO Intelligence Data Document.*
