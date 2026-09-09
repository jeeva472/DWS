/**
 * DigitalWebStudio Knowledge Base
 * Single Source of Truth for Chatbot Domain Context & Factual Grounding.
 */

export interface KnowledgeItem {
  id: string;
  category:
    | "company"
    | "service"
    | "case-study"
    | "process"
    | "technology"
    | "contact"
    | "faq"
    | "non-offered";
  title: string;
  keywords: string[];
  summary: string;
  details: string[];
  links?: { label: string; url: string }[];
}

export const COMPANY_INFO = {
  name: "DigitalWebStudio",
  tagline: "AI Automation, SEO & Digital Growth Systems",
  description:
    "DigitalWebStudio architects intelligent AI automation workflows, technical SEO systems, and high-performance digital solutions that drive measurable business growth.",
  location: "Coimbatore, India (Serving clients worldwide)",
  email: "contact@digitalwebstudio.in",
  secondaryEmail: "jeevawebstudio@gmail.com",
  phone: "+91 63830 88993",
  workingModel:
    "Worldwide remote delivery with agile weekly sprints, transparent communication, and dedicated technical leadership.",
  turnaroundTime: "Initial technical architecture proposal delivered within 24 hours.",
  philosophy: [
    "Purpose over complexity: We build what your business actually needs, without bloated overhead.",
    "Design with intention: Every interaction supports measurable user conversion and speed.",
    "Technology that works: Clean, robust, and maintainable software architectures that scale.",
    "Partnerships, not handoffs: We iterate and grow alongside our clients over the long term.",
  ],
};

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  // 1. Company Overview
  {
    id: "company-overview",
    category: "company",
    title: "About DigitalWebStudio",
    keywords: [
      "digitalwebstudio",
      "agency",
      "who are you",
      "company",
      "about",
      "location",
      "team",
      "experience",
      "coimbatore",
      "india",
    ],
    summary:
      "DigitalWebStudio is an engineering-driven digital agency based in Coimbatore, India, serving global clients with AI automation workflows, technical SEO architecture, and modern full-stack web applications.",
    details: [
      "Location: Coimbatore, India (working with businesses worldwide).",
      "Specialization: AI automation workflows, high-performance headless Next.js web applications, and technical SEO growth engines.",
      "Track Record: 150+ businesses scaled, 300+ projects delivered, 5+ years of proven delivery.",
      "Email: contact@digitalwebstudio.in | Phone / WhatsApp: +91 63830 88993.",
    ],
    links: [
      { label: "About Us", url: "/about-us" },
      { label: "Contact Us", url: "/contact" },
    ],
  },

  // 2. AI Automation Service
  {
    id: "service-ai-automation",
    category: "service",
    title: "AI Automation Solutions",
    keywords: [
      "ai automation",
      "automation",
      "workflow",
      "n8n",
      "make",
      "zapier",
      "crm sync",
      "lead automation",
      "document processing",
      "invoice automation",
      "llm workflow",
      "busywork",
      "bottlenecks",
    ],
    summary:
      "We design custom end-to-end AI automation pipelines using n8n, Make, REST APIs, and LLMs to eliminate repetitive busywork, automate CRM data flows, and connect existing tools.",
    details: [
      "What We Automate: Instant lead qualification & enrichment, bi-directional CRM syncing (HubSpot, Salesforce, Zoho), automated invoice & document parsing, AI customer ticket triaging, smart Slack/WhatsApp alerts.",
      "Platforms: n8n, Make, custom Node.js/Python scripts, Webhooks, REST APIs.",
      "Outcome: Saves 20-30+ hours per week of manual data entry, cuts lead response time from hours to seconds.",
      "Typical Project Timeline: 1 to 3 weeks.",
    ],
    links: [
      { label: "Explore AI Automation", url: "/services/ai-automation" },
      { label: "Automate Your Workflow", url: "/contact" },
    ],
  },

  // 3. Technical SEO Service
  {
    id: "service-seo",
    category: "service",
    title: "Technical SEO & Organic Growth Systems",
    keywords: [
      "seo",
      "technical seo",
      "search engine optimization",
      "rankings",
      "core web vitals",
      "google search console",
      "audit",
      "schema",
      "indexing",
      "traffic",
      "organic growth",
    ],
    summary:
      "Comprehensive technical SEO and organic search strategy built for sustainable search rankings, sub-second Core Web Vitals, clean semantic schema, and high-intent customer acquisition.",
    details: [
      "Capabilities: In-depth technical audits, crawl budget & canonical architecture, Core Web Vitals optimization (LCP < 1.2s, 0 CLS), JSON-LD structured data graphs, local SEO, content intent clustering, GA4 tracking.",
      "Outcome: Higher search visibility, zero technical crawl debt, and qualified inbound organic leads.",
      "Typical Project Timeline: 2 to 4 weeks for initial audit and full technical fixes.",
    ],
    links: [
      { label: "Explore SEO Capabilities", url: "/services/seo" },
      { label: "Get an SEO Audit", url: "/contact" },
    ],
  },

  // 4. Digital Marketing Service
  {
    id: "service-digital-marketing",
    category: "service",
    title: "Digital Marketing & Performance Systems",
    keywords: [
      "digital marketing",
      "marketing",
      "google ads",
      "meta ads",
      "facebook ads",
      "performance marketing",
      "conversion optimization",
      "cro",
      "analytics",
      "ga4",
      "attribution",
    ],
    summary:
      "Data-backed digital marketing and conversion funnel engineering combining high-intent Google/Meta ad campaigns with GA4 attribution to maximize customer acquisition and ROAS.",
    details: [
      "Capabilities: Google Ads (Search/Shopping/PMax), Meta Ads (Facebook & Instagram), conversion rate optimization (CRO), GA4 & GTM server-side event tracking, landing page optimization.",
      "Approach: Continuous iteration based on Cost Per Acquisition (CPA) and Customer Lifetime Value (LTV).",
    ],
    links: [
      { label: "Explore Digital Marketing", url: "/services/digital-marketing" },
      { label: "Scale Your Traffic", url: "/contact" },
    ],
  },

  // 5. Vibe Code Development Service
  {
    id: "service-vibe-code",
    category: "service",
    title: "Vibe Code Rapid MVP Development",
    keywords: [
      "vibe code",
      "rapid prototyping",
      "mvp",
      "prototype",
      "fast development",
      "ai coding",
      "quick launch",
      "startup",
      "build mvp",
    ],
    summary:
      "Accelerated software engineering pairing AI velocity with rigorous senior engineering oversight to deliver production-ready MVPs and web tools in 7 to 14 days without technical debt.",
    details: [
      "How It Works: We leverage modern AI-assisted engineering tools guided by experienced software architects to build clean Next.js/TypeScript applications at 5x speed.",
      "What You Get: Full source code ownership, production-grade security, type-safe APIs, and a scalable architecture ready for investors and users.",
      "Timeline: Working MVP in 7 to 14 days.",
    ],
    links: [
      { label: "Explore Vibe Code", url: "/services/vibe-code-development" },
      { label: "Launch Your MVP", url: "/contact" },
    ],
  },

  // 6. Chatbot Development Service
  {
    id: "service-chatbot",
    category: "service",
    title: "AI Chatbot Development",
    keywords: [
      "chatbot",
      "ai chatbot",
      "conversational ai",
      "customer support bot",
      "support assistant",
      "lead bot",
      "rag bot",
      "custom chatbot",
    ],
    summary:
      "Custom conversational AI assistants and grounded support chatbots that handle 24/7 lead qualification, customer inquiries, and knowledge retrieval directly on your website.",
    details: [
      "Capabilities: Grounded domain RAG (Retrieval-Augmented Generation), lead qualification forms, CRM sync, multi-channel support, zero hallucination guardrails.",
      "Timeline: 1 to 3 weeks.",
    ],
    links: [
      { label: "Explore Chatbot Solutions", url: "/services/chatbot-development" },
      { label: "Build a Custom Chatbot", url: "/contact" },
    ],
  },

  // 7. API Integration Service
  {
    id: "service-api-integration",
    category: "service",
    title: "API Integration & Systems Architecture",
    keywords: [
      "api",
      "api integration",
      "rest api",
      "graphql",
      "stripe",
      "razorpay",
      "payment gateway",
      "crm integration",
      "database sync",
      "webhooks",
    ],
    summary:
      "Custom REST and GraphQL API integrations unifying disconnected business software, payment gateways (Stripe, Razorpay), CRMs, and databases into a seamless automated ecosystem.",
    details: [
      "Capabilities: Bi-directional sync, OAuth2 authentication, webhook listeners, rate limit handling, multi-database sync, automated failure recovery.",
      "Timeline: 1 to 3 weeks.",
    ],
    links: [
      { label: "Explore API Integrations", url: "/services/api-integration" },
      { label: "Connect Your Systems", url: "/contact" },
    ],
  },

  // 8. Modern Web Development Service
  {
    id: "service-web-development",
    category: "service",
    title: "Modern Web & Headless Next.js Development",
    keywords: [
      "web development",
      "website",
      "next.js",
      "nextjs",
      "react",
      "headless wordpress",
      "custom website",
      "frontend development",
      "responsive web",
    ],
    summary:
      "Custom high-performance websites and web applications built with Next.js, React, TypeScript, and headless CMS platforms for sub-second speeds, top Core Web Vitals, and modern UX.",
    details: [
      "Tech Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS, Headless WordPress (WPGraphQL).",
      "Features: Sub-second load times, automated image optimization, responsive mobile design, dark cyber aesthetics, zero plugin bloat.",
      "Timeline: 2 to 4 weeks for marketing websites; 4 to 8 weeks for complex web apps.",
    ],
    links: [
      { label: "Explore Web Development", url: "/services/web-development" },
      { label: "Start a Web Project", url: "/contact" },
    ],
  },

  // 9. Case Study: Lead Processing Automation
  {
    id: "case-study-lead-automation",
    category: "case-study",
    title: "Case Study: Lead Processing Automation System",
    keywords: [
      "case study",
      "lead automation case study",
      "lead processing",
      "crm case study",
      "results",
      "proof",
    ],
    summary:
      "Engineered an automated lead pipeline that captured multi-channel form inquiries, scored intent, synced data to CRM, and notified sales reps instantly.",
    details: [
      "Challenge: Inbound leads were sitting unassigned in inboxes for 4+ hours, resulting in lost deals.",
      "Solution: Automated n8n webhook pipeline with regex validation, instant CRM contact creation, and Slack/WhatsApp routing.",
      "Key Outcome: Average lead response time cut from 4 hours down to 45 seconds; 100% routing accuracy.",
    ],
    links: [
      {
        label: "Read Case Study",
        url: "/case-studies/lead-processing-automation-system",
      },
    ],
  },

  // 10. Case Study: Technical SEO Headless Migration
  {
    id: "case-study-seo-migration",
    category: "case-study",
    title: "Case Study: Technical SEO & Headless Next.js Migration",
    keywords: [
      "seo case study",
      "headless migration",
      "speed case study",
      "core web vitals case study",
    ],
    summary:
      "Migrated a slow monolithic CMS to a decoupled Next.js App Router frontend with Incremental Static Regeneration (ISR) and structured JSON-LD schemas.",
    details: [
      "Challenge: Slow load times (LCP > 4.2s), failing Core Web Vitals, and declining search traffic.",
      "Solution: Headless Next.js architecture on Vercel paired with WordPress WPGraphQL and automated image compression.",
      "Key Outcome: 98+ Core Web Vitals performance score, 0.8s LCP, and a 140% surge in organic traffic within 90 days.",
    ],
    links: [
      {
        label: "Read Case Study",
        url: "/case-studies/technical-seo-headless-migration",
      },
    ],
  },

  // 11. Case Study: Rapid MVP Vibe Code
  {
    id: "case-study-rapid-mvp",
    category: "case-study",
    title: "Case Study: Rapid MVP Vibe Code Development",
    keywords: [
      "mvp case study",
      "startup case study",
      "vibe code case study",
      "fast build case study",
    ],
    summary:
      "Turned a founder's concept into a fully functioning SaaS prototype with authentication, payments, and dashboards in just 14 days.",
    details: [
      "Challenge: Startup needed a live, functional product to showcase to angel investors before an impending demo day.",
      "Solution: Vibe Code AI-assisted engineering with strict TypeScript architecture and PostgreSQL database integration.",
      "Key Outcome: Deployed full production MVP in 14 days; client secured angel funding on schedule.",
    ],
    links: [
      {
        label: "Read Case Study",
        url: "/case-studies/rapid-mvp-vibe-code-development",
      },
    ],
  },

  // 12. Delivery Process & Methodology
  {
    id: "delivery-process",
    category: "process",
    title: "Our 5-Stage Engineering Process",
    keywords: [
      "process",
      "how you work",
      "methodology",
      "steps",
      "timeline",
      "workflow",
      "how long",
    ],
    summary:
      "A disciplined 5-stage framework designed for speed, transparent milestones, and zero architectural surprises.",
    details: [
      "Stage 1: Discover — Analyze existing workflows, audit current tools, and identify high-ROI opportunities.",
      "Stage 2: Plan & Map — Blueprint technical data flows, wireframes, validation rules, and error fallbacks.",
      "Stage 3: Build — Agile development with weekly progress reviews and staging previews.",
      "Stage 4: Connect & Launch — Production deployment, webhook tests, security audits, and Core Web Vitals checks.",
      "Stage 5: Grow & Optimize — Proactive monitoring, uptime guarantees, and ongoing support.",
    ],
    links: [
      { label: "View Process", url: "/about-us" },
      { label: "Start a Project", url: "/contact" },
    ],
  },

  // 13. Tech Stack & Tools
  {
    id: "tech-stack",
    category: "technology",
    title: "Technologies We Use",
    keywords: [
      "tech stack",
      "technologies",
      "tools",
      "react",
      "nextjs",
      "wordpress",
      "typescript",
      "node",
      "n8n",
      "make",
    ],
    summary:
      "We select modern, proven technologies tailored for speed, scalability, and long-term maintainability.",
    details: [
      "Frontend: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion.",
      "Backend & CMS: Headless WordPress, WPGraphQL, Node.js, REST APIs.",
      "Automation: n8n, Make, Zapier, Webhooks.",
      "Analytics & Growth: Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console, Yoast SEO.",
      "Payments & CRMs: Stripe, Razorpay, HubSpot, Zoho, Salesforce.",
    ],
    links: [{ label: "View All Capabilities", url: "/services" }],
  },

  // 14. Contact & Inquiries
  {
    id: "contact-info",
    category: "contact",
    title: "Contact Information & Project Inquiries",
    keywords: [
      "contact",
      "email",
      "phone",
      "whatsapp",
      "hire",
      "get in touch",
      "consultation",
      "quote",
      "price",
      "pricing",
      "cost",
      "estimate",
      "call",
    ],
    summary:
      "Get in touch with the DigitalWebStudio engineering team for project consultations, technical audits, and custom estimates.",
    details: [
      "Email: contact@digitalwebstudio.in (or jeevawebstudio@gmail.com)",
      "Phone / WhatsApp: +91 63830 88993",
      "Location: Coimbatore, India (Worldwide Delivery)",
      "Response Time: Within 24 hours with tailored technical proposals.",
    ],
    links: [{ label: "Open Contact Form", url: "/contact" }],
  },

  // 15. FAQs
  {
    id: "common-faqs",
    category: "faq",
    title: "Frequently Asked Questions",
    keywords: [
      "faq",
      "questions",
      "frequently asked",
      "how much does it cost",
      "pricing details",
    ],
    summary:
      "Common questions regarding our project pricing, timelines, technology choices, and headless WordPress setups.",
    details: [
      "Q: How much does a project cost?\nA: Pricing depends on project scope. Targeted automations typically start at tailored starter packages, while custom Next.js web applications and headless migrations vary by complexity. We provide a clear itemized estimate within 24 hours.",
      "Q: Why choose Next.js over traditional monolithic WordPress themes?\nA: Next.js provides sub-second page loads, 98+ Core Web Vitals, superior security (backend is decoupled from public traffic), and dynamic UI capabilities that increase conversion rates.",
      "Q: Can we keep managing our content in WordPress?\nA: Yes! With our headless architecture, your team continues using WordPress Gutenberg/ACF, while Next.js powers the high-speed frontend.",
      "Q: How long does a project take?\nA: Workflow automations: 1–3 weeks; Marketing websites: 2–4 weeks; Full-stack web apps/MVPs: 4–8 weeks.",
    ],
    links: [{ label: "Contact Us for a Quote", url: "/contact" }],
  },

  // 16. Explicit Non-Offered Services (Guardrail)
  {
    id: "non-offered-services",
    category: "non-offered",
    title: "Services Not Currently Offered",
    keywords: [
      "native app",
      "ios swift",
      "android kotlin",
      "hardware repair",
      "printer repair",
      "it support helpdesk",
      "print design",
      "brochure printing",
      "black hat seo",
      "link buying",
      "drupal",
      "joomla",
    ],
    summary:
      "DigitalWebStudio specializes strictly in AI automation, technical SEO, digital marketing, and modern Next.js/headless web development.",
    details: [
      "We do NOT build native iOS/Android apps in Swift/Kotlin (we build high-performance mobile-responsive PWAs and web apps).",
      "We do NOT provide hardware repair, computer servicing, or on-site physical IT helpdesk support.",
      "We do NOT engage in black-hat SEO, automated link spamming, or PBNs.",
      "We do NOT provide traditional print design or physical merchandise printing.",
    ],
    links: [{ label: "View Our Core Services", url: "/services" }],
  },
];
