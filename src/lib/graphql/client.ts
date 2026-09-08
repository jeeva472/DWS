import {
  FullHomepageData,
  FullAboutPageData,
  FullServicesPageData,
  FullAIAutomationPageData,
  FullSEOPageData,
  FullVibeCodePageData,
  FullDigitalMarketingPageData,
  FullChatbotPageData,
  FullAPIIntegrationPageData,
  FullCaseStudiesArchiveData,
  FullSingleCaseStudyData,
  CaseStudyItemData,
} from "../types/wordpress";
import {
  GET_HOMEPAGE_FULL_DATA,
  GET_ABOUT_PAGE_FULL_DATA,
  GET_SERVICES_PAGE_FULL_DATA,
  GET_AI_AUTOMATION_PAGE_DATA,
  GET_SEO_PAGE_DATA,
  GET_VIBE_CODE_PAGE_DATA,
  GET_DIGITAL_MARKETING_PAGE_DATA,
  GET_CHATBOT_PAGE_DATA,
  GET_API_INTEGRATION_PAGE_DATA,
  GET_CASE_STUDIES_PAGE_DATA,
} from "./queries";

const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "https://cms.digitalwebstudio.in/graphql";

/**
 * Single source of truth for fallback header navigation menu matching WordPress.
 */
export const FALLBACK_HEADER_MENU = {
  nodes: [
    {
      id: "header-menu",
      name: "Header Menu",
      slug: "header-menu",
      menuItems: {
        nodes: [
          { id: "1", label: "Home", url: "/", path: "/" },
          { id: "2", label: "About Us", url: "/about-us/", path: "/about-us/" },
          { id: "3", label: "Service", url: "/service/", path: "/service/" },
        ],
      },
    },
  ],
};

/**
 * Fallback static dataset matching existing WordPress/ACF database state,
 * used when WordPress is offline or during build environments.
 */
export const FALLBACK_HOMEPAGE_DATA: FullHomepageData = {
  generalSettings: {
    title: "DigitalWebStudio",
    description: "AI Automation, SEO & Digital Growth Solutions",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription:
      "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading:
      "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
    privacyPolicyUrl: "/privacy-policy",
    termsServiceUrl: "/terms-of-service",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
    },
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "home-page",
    databaseId: 27,
    title: "Home",
    slug: "home",
    uri: "/",
    seo: {
      title: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      metaDesc:
        "DigitalWebStudio helps businesses scale and operate smarter through custom AI automation workflows, technical SEO architecture, and modern digital systems.",
      canonical: "https://digitalwebstudio.in",
      opengraphTitle: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      opengraphDescription:
        "DigitalWebStudio helps businesses scale and operate smarter through custom AI automation workflows, technical SEO architecture, and modern digital systems.",
      opengraphSiteName: "DigitalWebStudio",
      opengraphType: "website",
      twitterTitle: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      twitterDescription:
        "DigitalWebStudio helps businesses scale and operate smarter through custom AI automation workflows, technical SEO architecture, and modern digital systems.",
    },
    homepageData: {
      hero: {
        eyebrow: "AI AUTOMATION · SEO · DIGITAL GROWTH",
        heading: "AI Automation and",
        headingHighlight: "SEO Solutions for Business Growth",
        headingTag: "h1",
        description:
          "We help businesses operate smarter and scale organic revenue through custom AI automation workflows, high-performance technical SEO, and modern digital systems.",
        btnPrimaryText: "Explore Capabilities",
        btnPrimaryUrl: "#contact",
        btnSecondaryText: "Our Services",
        btnSecondaryUrl: "/services",
        visualEnabled: true,
      },
      heroBenefits: [
        {
          icon: "cpu",
          title: "Business Automation",
          text: "AI & workflow systems that save 100s of hours",
        },
        {
          icon: "layers",
          title: "App Development",
          text: "High-scale Next.js & mobile ecosystems",
        },
        {
          icon: "sparkles",
          title: "UI/UX Design",
          text: "Conversion-optimized digital aesthetics",
        },
      ],
      about: {
        eyebrow: "Company Positioning",
        heading: "We Build Digital Experiences That Make an Impact",
        headingHighlight: "Impact",
        headingTag: "h2",
        description:
          "We combine technical engineering excellence with cutting-edge design and strategic marketing. Whether crafting custom headless architectures, deploying intelligent AI chatbots, or scaling customer acquisition, we are your long-term growth partner.",
        btnPrimaryText: "Know More About Us",
        btnPrimaryUrl: "#about",
      },
      aboutFeatures: [
        {
          icon: "code",
          title: "Full-Stack Engineering",
          text: "Clean, robust, and maintainable software architectures.",
        },
        {
          icon: "cpu",
          title: "AI & Smart Automations",
          text: "Autonomous workflows and data integrations.",
        },
        {
          icon: "chart-up",
          title: "Data-Driven Scaling",
          text: "Measurable revenue growth and conversion rate optimization.",
        },
      ],
      servicesSection: {
        eyebrow: "Our Capabilities",
        heading: "Our Solutions, Your Growth",
        headingHighlight: "Growth",
        headingTag: "h2",
        description:
          "End-to-end digital solutions designed to help your business grow, automate and succeed in the digital world.",
      },
      services: [
        {
          active: true,
          icon: "code",
          title: "Web Development",
          description:
            "Custom web applications, headless CMS platforms, and ultra-fast business websites built with Next.js, React, and modern cloud stacks.",
          bullets: [
            "Enterprise Business Websites",
            "Custom Web Applications",
            "Headless WordPress & Next.js",
            "E-commerce & Conversion Engines",
          ],
          linkUrl: "#contact",
          linkText: "Discover Web Solutions",
        },
        {
          active: true,
          icon: "cpu",
          title: "AI & Automation",
          description:
            "Streamline internal operations, reduce manual labor, and deploy smart conversational assistants that operate 24/7.",
          bullets: [
            "Custom AI Applications & LLM Workflows",
            "Intelligent Customer Support Chatbots",
            "Business Process Automation",
            "n8n / Make / Zapier Enterprise Integrations",
          ],
          linkUrl: "#contact",
          linkText: "Explore AI Capabilities",
        },
        {
          active: true,
          icon: "puzzle",
          title: "Integrations & Systems",
          description:
            "Unify your disparate tools into a cohesive ecosystem with seamless custom API pipelines, CRM syncs, and payment gateways.",
          bullets: [
            "Custom REST & GraphQL API Integrations",
            "CRM / Zoho / HubSpot Custom Sync",
            "Secure Payment Gateways (Stripe, Razorpay)",
            "Automated Multi-Database Sync Systems",
          ],
          linkUrl: "#contact",
          linkText: "Learn About Systems",
        },
        {
          active: true,
          icon: "chart-up",
          title: "Growth & Marketing",
          description:
            "High-intent customer acquisition through precision Meta/Google Ads, technical SEO audits, and conversion funnel engineering.",
          bullets: [
            "Technical SEO & Content Strategy",
            "Performance Meta & Google Ads Campaigns",
            "Advanced Analytics & Event Tracking",
            "Conversion Funnel & LTV Optimization",
          ],
          linkUrl: "#contact",
          linkText: "Scale Your Traffic",
        },
      ],
      whySection: {
        eyebrow: "The DigitalWebStudio Advantage",
        heading: "We Are Your Growth Partner",
        headingHighlight: "Growth Partner",
        headingTag: "h2",
        description:
          "We operate as an extension of your team, providing proactive technical leadership and measurable outcomes.",
      },
      whyChoose: [
        {
          icon: "cpu",
          title: "Modern Technology",
          text: "We leverage state-of-the-art frameworks (Next.js, TypeScript, Tailwind, Headless CMS) for unmatched speed and security.",
        },
        {
          icon: "puzzle",
          title: "Transparent Process",
          text: "Clear milestones, weekly sprints, open communication channels, and zero hidden technical debt.",
        },
        {
          icon: "shield-check",
          title: "Reliable Support",
          text: "Proactive monitoring, uptime guarantees, and dedicated SLA support whenever you need assistance.",
        },
        {
          icon: "rocket",
          title: "Performance First",
          text: "Sub-second load times, 95+ Core Web Vitals, and accessibility built into every single component.",
        },
        {
          icon: "layers",
          title: "Custom Solutions",
          text: "Every piece of code is tailored to your exact business model — no cookie-cutter templates or bloat.",
        },
        {
          icon: "users",
          title: "Long Term Partnership",
          text: "We iterate, scale, and evolve your systems as your customer base and market opportunities expand.",
        },
      ],
      stats: [
        {
          icon: "users",
          number: "150+",
          label: "Businesses Scaled",
        },
        {
          icon: "rocket",
          number: "300+",
          label: "Projects Delivered",
        },
        {
          icon: "cpu",
          number: "20+",
          label: "Engineering Specialists",
        },
        {
          icon: "shield-check",
          number: "5+",
          label: "Years of Proven Delivery",
        },
      ],
      testiSection: {
        eyebrow: "Client Success Stories",
        heading: "What Our Clients Say",
        headingHighlight: "Clients Say",
        headingTag: "h2",
      },
      testimonials: [
        {
          active: true,
          name: "Aravind Kumar",
          role: "Managing Director",
          company: "Apex Global Solutions",
          text: "DigitalWebStudio transformed our outdated platform into a high-performing digital engine. Their technical depth, speed of delivery, and proactive communication set a new benchmark for agency partners.",
          rating: 5,
        },
        {
          active: true,
          name: "Priya Nair",
          role: "Head of Digital Growth",
          company: "Vanguard Retail",
          text: "The AI automation pipelines they deployed saved our operations team over 25 hours every week while cutting customer support response time by 80%. An indispensable tech partner.",
          rating: 5,
        },
        {
          active: true,
          name: "Rahul Singh",
          role: "Co-Founder & CTO",
          company: "NexGen Logistics",
          text: "From UI/UX design to Next.js development and SEO architecture, everything was executed flawlessly. The site speed and conversion rates exceeded our highest expectations.",
          rating: 5,
        },
        {
          active: true,
          name: "Velan Packers & Movers",
          role: "Founder & CEO",
          company: "Velan Enterprises",
          text: "The DigitalWebStudio team provided exceptional digital marketing and web infrastructure from start to finish. Our qualified inbound leads grew by 140% within the first 60 days.",
          rating: 5,
        },
      ],
      testiAutoplay: true,
      contactCta: {
        eyebrow: "Start Your Next Phase",
        heading: "Let's Build Something Remarkable Together",
        headingHighlight: "Remarkable Together",
        headingTag: "h2",
        description:
          "Tell us about your objectives, timeline, and vision. Our technical leads will analyze your requirements and present a tailored architecture within 24 hours.",
        btnPrimaryText: "Schedule Consultation",
        btnPrimaryUrl: "#contact",
      },
      contactFormId: 7,
    },
  },
};

/**
 * Execute a GraphQL query against the WordPress endpoint with ISR tags and error handling.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidateSeconds = 60
): Promise<T | null> {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(2000),
      next: {
        tags: ["wordpress"],
        revalidate: revalidateSeconds,
      },
    });

    if (!res.ok) {
      console.warn(`[WPGraphQL] HTTP Error ${res.status}: ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    if (json.errors && json.errors.length > 0) {
      console.warn("[WPGraphQL] Query Errors:", json.errors);
    }

    return json.data as T;
  } catch (err) {
    console.warn("[WPGraphQL] Failed to connect to WordPress endpoint:", err);
    return null;
  }
}

/**
 * Retrieve homepage data from WordPress WPGraphQL, merging with fallback defaults for missing fields.
 */
export async function getHomepageData(): Promise<FullHomepageData> {
  const data = await fetchGraphQL<FullHomepageData>(GET_HOMEPAGE_FULL_DATA);

  if (!data || !data.page) {
    return FALLBACK_HOMEPAGE_DATA;
  }

  // Deep merge with fallback values to ensure zero undefined rendering
  const merged: FullHomepageData = {
    generalSettings: data.generalSettings || FALLBACK_HOMEPAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_HOMEPAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_HOMEPAGE_DATA.globalSettings!,
      ...data.globalSettings,
      social: {
        ...FALLBACK_HOMEPAGE_DATA.globalSettings?.social,
        ...data.globalSettings?.social,
      },
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HOMEPAGE_DATA.menus,
    page: {
      ...FALLBACK_HOMEPAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_HOMEPAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      homepageData: {
        ...FALLBACK_HOMEPAGE_DATA.page?.homepageData!,
        ...data.page.homepageData,
        hero: {
          ...FALLBACK_HOMEPAGE_DATA.page?.homepageData?.hero!,
          ...data.page.homepageData?.hero,
        },
        heroBenefits:
          data.page.homepageData?.heroBenefits?.length
            ? data.page.homepageData.heroBenefits
            : FALLBACK_HOMEPAGE_DATA.page?.homepageData?.heroBenefits!,
        about: {
          ...FALLBACK_HOMEPAGE_DATA.page?.homepageData?.about!,
          ...data.page.homepageData?.about,
        },
        services:
          data.page.homepageData?.services?.length
            ? data.page.homepageData.services
            : FALLBACK_HOMEPAGE_DATA.page?.homepageData?.services!,
        servicesSection: {
          ...FALLBACK_HOMEPAGE_DATA.page?.homepageData?.servicesSection!,
          ...data.page.homepageData?.servicesSection,
        },
        whyChoose:
          data.page.homepageData?.whyChoose?.length
            ? data.page.homepageData.whyChoose
            : FALLBACK_HOMEPAGE_DATA.page?.homepageData?.whyChoose!,
        whySection: {
          ...FALLBACK_HOMEPAGE_DATA.page?.homepageData?.whySection!,
          ...data.page.homepageData?.whySection,
        },
        testimonials:
          data.page.homepageData?.testimonials?.length
            ? data.page.homepageData.testimonials
            : FALLBACK_HOMEPAGE_DATA.page?.homepageData?.testimonials!,
        stats:
          data.page.homepageData?.stats?.length
            ? data.page.homepageData.stats
            : FALLBACK_HOMEPAGE_DATA.page?.homepageData?.stats!,
        contactCta: {
          ...FALLBACK_HOMEPAGE_DATA.page?.homepageData?.contactCta!,
          ...data.page.homepageData?.contactCta,
        },
      },
    },
  };

  return merged;
}

/**
 * Fallback static dataset for About Page matching WordPress/ACF database state.
 */
export const FALLBACK_ABOUT_PAGE_DATA: FullAboutPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "Web Development, AI Automation & Digital Marketing Solutions",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses build, automate and grow.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription:
      "We build digital solutions that help businesses build, automate and grow faster.",
    newsletterHeading:
      "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
    privacyPolicyUrl: "/privacy-policy/",
    termsServiceUrl: "/terms-of-service/",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
    },
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "about-page",
    databaseId: 42,
    title: "About Us",
    slug: "about-us",
    uri: "/about-us/",
    seo: {
      title: "About Us | DigitalWebStudio — Web Development & Digital Marketing Agency",
      metaDesc:
        "Learn about DigitalWebStudio, our mission, values, engineering philosophy and human-centric approach to building web applications and digital marketing systems.",
      canonical: "https://digitalwebstudio.in/about-us/",
      opengraphTitle: "About Us | DigitalWebStudio — Web Development & Digital Marketing Agency",
      opengraphDescription:
        "Learn about DigitalWebStudio, our mission, values, engineering philosophy and human-centric approach to building web applications and digital marketing systems.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "article",
      twitterTitle: "About Us | DigitalWebStudio — Web Development & Digital Marketing Agency",
      twitterDescription:
        "Learn about DigitalWebStudio, our mission, values, engineering philosophy and human-centric approach to building web applications and digital marketing systems.",
    },
    aboutPageData: {
      hero: {
        eyebrow: "ABOUT DIGITALWEBSTUDIO",
        title: "We Build Digital Experiences That Move Businesses Forward",
        description:
          "DigitalWebStudio helps businesses turn ideas into reliable digital products, websites and growth systems. We combine thoughtful strategy, clean development and digital marketing to create solutions that are built for real business goals.",
        ctaText: "Let's Work Together",
        ctaUrl: "#contact",
        imageUrl: "/images/digitalwebstudio-development-team.webp",
        imageAlt: "DigitalWebStudio engineering team building digital products",
      },
      intro: {
        eyebrow: "WHO WE ARE",
        title: "Technology should solve real problems.",
        content:
          "We work with businesses to design, build and improve digital experiences that are useful, scalable and focused on outcomes. From websites and web applications to digital marketing and automation, we bring strategy and implementation together under one roof.",
        imageUrl: "/images/web-development-team-engineering.webp",
        imageAlt: "Software developer working on practical digital systems",
      },
      approach: {
        eyebrow: "OUR APPROACH",
        title: "From idea to impact.",
        description:
          "A practical, five-stage methodology built for precision, performance, and measurable growth.",
        steps: [
          {
            number: "01",
            title: "Understand",
            description: "We start by understanding your business, audience and goals.",
            icon: "eye",
          },
          {
            number: "02",
            title: "Plan",
            description: "We turn those goals into a clear digital strategy and practical roadmap.",
            icon: "target",
          },
          {
            number: "03",
            title: "Build",
            description: "We design and develop reliable digital experiences around your requirements.",
            icon: "code",
          },
          {
            number: "04",
            title: "Launch",
            description: "We test, refine and launch with performance and usability in mind.",
            icon: "rocket",
          },
          {
            number: "05",
            title: "Grow",
            description: "We continue improving your digital presence as your business evolves.",
            icon: "chart-up",
          },
        ],
      },
      values: {
        eyebrow: "WHAT WE BELIEVE",
        title: "Good digital work starts with good thinking.",
        description:
          "Core principles that guide how we design systems, write code, and collaborate with our clients.",
        items: [
          {
            number: "01",
            title: "Purpose over complexity",
            description: "We build what your business actually needs, without unnecessary complexity.",
          },
          {
            number: "02",
            title: "Design with intention",
            description: "Every interaction should have a reason and every element should support the experience.",
          },
          {
            number: "03",
            title: "Technology that works",
            description: "We focus on reliable, maintainable solutions that work beyond launch day.",
          },
          {
            number: "04",
            title: "Partnerships, not handoffs",
            description: "We aim to build long-term relationships, not simply deliver a project and disappear.",
          },
        ],
      },
      technology: {
        eyebrow: "OUR TECHNOLOGY",
        title: "The tools behind the work.",
        description:
          "We use proven technologies and platforms to build flexible digital experiences, automate processes and help businesses grow.",
        items: [
          { name: "WordPress", category: "CMS & Web Platform", iconKey: "wordpress" },
          { name: "WooCommerce", category: "E-Commerce Engines", iconKey: "woocommerce" },
          { name: "React", category: "Modern UI Architecture", iconKey: "react" },
          { name: "Next.js", category: "Production Web Applications", iconKey: "nextjs" },
          { name: "Node.js", category: "Backend Services & APIs", iconKey: "nodejs" },
          { name: "n8n", category: "Workflow Automation", iconKey: "n8n" },
          { name: "Make", category: "Integration Ecosystems", iconKey: "make" },
          { name: "Google Analytics", category: "Data & Conversion Insights", iconKey: "analytics" },
          { name: "Google Tag Manager", category: "Measurement & Event Tracking", iconKey: "gtm" },
        ],
      },
      whyUs: {
        eyebrow: "WHY DIGITALWEBSTUDIO",
        title: "Built around your goals, not just your brief.",
        description:
          "We operate as an extension of your team, delivering clarity, technical excellence, and genuine accountability.",
        items: [
          {
            number: "01",
            title: "Practical expertise",
            description: "We combine development, design, marketing and automation to solve problems from multiple angles.",
          },
          {
            number: "02",
            title: "Clear communication",
            description: "We keep the process understandable and collaborative from start to finish.",
          },
          {
            number: "03",
            title: "Built to perform",
            description: "We care about speed, usability, maintainability and strong technical foundations.",
          },
          {
            number: "04",
            title: "Long-term thinking",
            description: "We build solutions that can evolve as your business grows.",
          },
        ],
      },
      collaboration: {
        eyebrow: "OUR PEOPLE",
        title: "Behind every digital solution are people who understand the problem.",
        text: "We believe the best digital work is built on direct communication, deep empathy for end users, and craftsman-level care in execution. When you work with us, you partner with engineers and strategists who genuinely care about your outcomes.",
        imageUrl: "/images/digitalwebstudio-workspace-collaboration.webp",
        imageAlt: "DigitalWebStudio team collaborating on digital system architecture",
      },
      cta: {
        eyebrow: "LET'S BUILD SOMETHING USEFUL",
        title: "Have an idea worth building?",
        description: "Tell us what you're working on. We'll help you turn it into a practical digital solution.",
        buttonText: "Start a Project",
        buttonUrl: "#contact",
      },
    },
  },
};

/**
 * Fetch full About page dataset from WPGraphQL with fallback handling.
 */
export async function getAboutPageData(): Promise<FullAboutPageData> {
  const data = await fetchGraphQL<FullAboutPageData>(GET_ABOUT_PAGE_FULL_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_ABOUT_PAGE_DATA;
  }

  const merged: FullAboutPageData = {
    generalSettings: data.generalSettings || FALLBACK_ABOUT_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_ABOUT_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_ABOUT_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
      social: {
        ...FALLBACK_ABOUT_PAGE_DATA.globalSettings?.social,
        ...data.globalSettings?.social,
      },
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_ABOUT_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_ABOUT_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      aboutPageData: {
        ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData!,
        ...data.page.aboutPageData,
        hero: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.hero!,
          ...data.page.aboutPageData?.hero,
        },
        intro: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.intro!,
          ...data.page.aboutPageData?.intro,
        },
        approach: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.approach!,
          ...data.page.aboutPageData?.approach,
          steps:
            data.page.aboutPageData?.approach?.steps?.length
              ? data.page.aboutPageData.approach.steps
              : FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.approach.steps!,
        },
        values: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.values!,
          ...data.page.aboutPageData?.values,
          items:
            data.page.aboutPageData?.values?.items?.length
              ? data.page.aboutPageData.values.items
              : FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.values.items!,
        },
        technology: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.technology!,
          ...data.page.aboutPageData?.technology,
          items:
            data.page.aboutPageData?.technology?.items?.length
              ? data.page.aboutPageData.technology.items
              : FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.technology.items!,
        },
        whyUs: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.whyUs!,
          ...data.page.aboutPageData?.whyUs,
          items:
            data.page.aboutPageData?.whyUs?.items?.length
              ? data.page.aboutPageData.whyUs.items
              : FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.whyUs.items!,
        },
        collaboration: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.collaboration!,
          ...data.page.aboutPageData?.collaboration,
        },
        cta: {
          ...FALLBACK_ABOUT_PAGE_DATA.page?.aboutPageData?.cta!,
          ...data.page.aboutPageData?.cta,
        },
      },
    },
  };

  return merged;
}

/**
 * Fallback static dataset for the Services page.
 */
export const FALLBACK_SERVICES_PAGE_DATA: FullServicesPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "AI Automation, SEO & Digital Growth Solutions",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription:
      "We help businesses automate workflows, improve search visibility, and build smarter digital systems.",
    newsletterHeading:
      "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
    privacyPolicyUrl: "/privacy-policy/",
    termsServiceUrl: "/terms-of-service/",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
    },
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "services-page",
    databaseId: 61,
    title: "Services",
    slug: "services",
    uri: "/services/",
    seo: {
      title: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      metaDesc:
        "We help businesses automate repetitive work, improve search visibility, and build smarter digital systems with AI automation, SEO, and modern engineering.",
      canonical: "https://digitalwebstudio.in/services/",
      opengraphTitle: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      opengraphDescription:
        "We help businesses automate repetitive work, improve search visibility, and build smarter digital systems with AI automation, SEO, and modern engineering.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "AI Automation, SEO & Digital Growth Solutions | DigitalWebStudio",
      twitterDescription:
        "We help businesses automate repetitive work, improve search visibility, and build smarter digital systems with AI automation, SEO, and modern engineering.",
    },
    servicesPageData: {
      hero: {
        eyebrow: "AI AUTOMATION • SEO • DIGITAL GROWTH",
        title: "AI Automation & SEO Solutions Built for Business Growth",
        description:
          "We help businesses automate repetitive work, improve search visibility and build smarter digital systems using AI, automation and modern technology.",
        ctaText: "Start a Project",
        ctaUrl: "#contact",
      },
      intro: {
        eyebrow: "OUR CAPABILITIES",
        title: "Everything you need to automate, rank and scale.",
        description:
          "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
      },
      services: [
        {
          number: "01",
          title: "AI Automation",
          slug: "ai-automation",
          shortDescription: "Smarter workflows and business process automation",
          description:
            "We connect AI with your existing tools and workflows to reduce repetitive tasks, streamline operations, and eliminate manual bottlenecks across your business.",
          icon: "cpu",
          features: [
            "Workflow Automation",
            "Lead Management Automation",
            "CRM & Data Pipelines",
            "n8n & Make Automations",
            "Automated Notifications",
            "Internal Process Automation",
          ],
          ctaText: "Explore AI Automation",
          ctaUrl: "#contact",
        },
        {
          number: "02",
          title: "SEO",
          slug: "seo",
          shortDescription: "Search visibility and revenue-driven organic growth",
          description:
            "Make your website easier to find — and more valuable when people arrive. We engineer technical SEO foundations, search strategy, and conversion architecture for sustainable business growth.",
          icon: "target",
          features: [
            "Technical SEO Architecture",
            "On-Page & Keyword Optimization",
            "Conversion-Focused SEO",
            "Local SEO & Business Listings",
            "Comprehensive SEO Audits",
            "Analytics & Search Performance",
          ],
          ctaText: "Explore SEO Solutions",
          ctaUrl: "#contact",
        },
        {
          number: "03",
          title: "Vibe Code Development",
          slug: "vibe-code-development",
          shortDescription: "Rapid AI-assisted development backed by senior engineering",
          description:
            "Turn ideas into working digital products faster with AI-assisted development and experienced technical oversight. We leverage accelerated AI engineering workflows validated by senior architectural rigor.",
          icon: "zap",
          features: [
            "Rapid Prototyping & MVPs",
            "AI-Assisted Engineering Workflows",
            "Next.js & React Architecture",
            "Fast UI/UX Implementation",
            "Automated Testing & Code Quality",
            "Production-Ready Deployment",
          ],
          ctaText: "Explore Vibe Code Development",
          ctaUrl: "#contact",
        },
        {
          number: "04",
          title: "Digital Marketing",
          slug: "digital-marketing",
          shortDescription: "Strategic growth, paid campaigns and conversion",
          description:
            "Multi-channel growth systems built to acquire customers, scale brand visibility, and generate measurable ROI through targeted campaigns, content, and data analytics.",
          icon: "megaphone",
          features: [
            "Multi-Channel Growth Strategy",
            "Paid Performance Campaigns",
            "Conversion Rate Optimization",
            "Audience Acquisition Funnels",
            "Data Analytics & Tracking",
            "ROI & Attribution Reporting",
          ],
          ctaText: "Explore Digital Marketing",
          ctaUrl: "#contact",
          imageUrl: "/images/digital-marketing-strategy.webp",
          imageAlt: "Digital marketing strategists analyzing campaign analytics and growth data",
        },
        {
          number: "05",
          title: "Chatbot Development",
          slug: "chatbot-development",
          shortDescription: "Conversational AI assistants and support systems",
          description:
            "Intelligent conversational assistants connected directly to your business data, qualifying incoming leads, handling customer support 24/7, and resolving repetitive inquiries.",
          icon: "sparkles",
          features: [
            "AI Customer Support Assistants",
            "Automated Lead Qualification",
            "Knowledge-Base & Doc Chatbots",
            "WhatsApp & Web Integrations",
            "Custom Agentic Dialog Flows",
            "Live Agent Handover Protocols",
          ],
          ctaText: "Explore Chatbot Development",
          ctaUrl: "#contact",
        },
        {
          number: "06",
          title: "API Integration",
          slug: "api-integration",
          shortDescription: "Connected infrastructure uniting tools and systems",
          description:
            "We engineer the underlying integration infrastructure that connects your AI models, automations, CRM, e-commerce engines, and third-party tools into a cohesive ecosystem.",
          icon: "layers",
          features: [
            "REST & GraphQL Integrations",
            "CRM & ERP Data Synchronization",
            "Secure Payment Gateways",
            "Webhook & Event Architecture",
            "Cloud Service Bridges",
            "Custom Backend API Development",
          ],
          ctaText: "Explore API Integration",
          ctaUrl: "#contact",
        },
        {
          number: "07",
          title: "Web Development",
          slug: "web-development",
          shortDescription: "High-performance digital foundations and web applications",
          description:
            "High-performance websites and web applications that provide the reliable foundation for your digital growth, automation pipelines, and search visibility.",
          icon: "code",
          features: [
            "Headless Next.js & React Apps",
            "Custom WordPress Architecture",
            "Scalable WooCommerce Platforms",
            "Core Web Vitals Optimization",
            "Clean Modular Codebases",
            "Enterprise Security & Reliability",
          ],
          ctaText: "Explore Web Development",
          ctaUrl: "#contact",
          imageUrl: "/images/software-development-team.webp",
          imageAlt: "Senior engineering team building modern high performance digital platforms",
        },
      ],
      process: {
        eyebrow: "OUR PROCESS",
        title: "From idea to launch.",
        description:
          "A disciplined, six-stage delivery framework that turns vision into reliable, high-performing digital systems.",
        steps: [
          {
            number: "01",
            title: "Discover",
            description: "Understand the business, audience and goals.",
            icon: "eye",
          },
          {
            number: "02",
            title: "Plan",
            description: "Define the strategy, technology and roadmap.",
            icon: "target",
          },
          {
            number: "03",
            title: "Design",
            description: "Create the experience and interface.",
            icon: "layers",
          },
          {
            number: "04",
            title: "Build",
            description: "Develop and integrate the solution.",
            icon: "code",
          },
          {
            number: "05",
            title: "Launch",
            description: "Test, deploy and refine.",
            icon: "rocket",
          },
          {
            number: "06",
            title: "Grow",
            description: "Measure, improve and support.",
            icon: "chart-up",
          },
        ],
      },
      technology: {
        eyebrow: "OUR TECH STACK",
        title: "Built with the right tools for the job.",
        description:
          "We select proven, modern technologies suited to your speed, scalability, and maintainability requirements.",
        items: [
          { name: "n8n", category: "Workflow Automation", iconKey: "n8n" },
          { name: "Make", category: "Integration Ecosystems", iconKey: "make" },
          { name: "OpenAI", category: "AI Models & Processing", iconKey: "openai" },
          { name: "Next.js", category: "Production Web Applications", iconKey: "nextjs" },
          { name: "React", category: "Modern UI Architecture", iconKey: "react" },
          { name: "Node.js", category: "Backend Services & APIs", iconKey: "nodejs" },
          { name: "WordPress", category: "CMS & Content Foundation", iconKey: "wordpress" },
          { name: "Google Analytics", category: "Data & Conversion Insights", iconKey: "analytics" },
          { name: "Google Tag Manager", category: "Measurement & Event Tracking", iconKey: "gtm" },
        ],
      },
      cta: {
        eyebrow: "READY TO GROW?",
        title: "Let's create something that works for your business.",
        description:
          "Tell us what you're working on. We'll help you automate workflows, improve rankings, and turn ideas into practical digital solutions.",
        buttonText: "Start a Project",
        buttonUrl: "#contact",
      },
    },
  },
};

/**
 * Fetch full Services page data from WPGraphQL with resilient fallback.
 */
export async function getServicesPageData(): Promise<FullServicesPageData> {
  const data = await fetchGraphQL<FullServicesPageData>(GET_SERVICES_PAGE_FULL_DATA);

  if (!data || !data.page) {
    return FALLBACK_SERVICES_PAGE_DATA;
  }

  const merged: FullServicesPageData = {
    generalSettings: {
      ...FALLBACK_SERVICES_PAGE_DATA.generalSettings!,
      ...data.generalSettings,
    },
    siteLogo: data.siteLogo?.url
      ? data.siteLogo
      : FALLBACK_SERVICES_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_SERVICES_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
      social: {
        ...FALLBACK_SERVICES_PAGE_DATA.globalSettings?.social,
        ...data.globalSettings?.social,
      },
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_SERVICES_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_SERVICES_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      servicesPageData: {
        ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData!,
        ...data.page.servicesPageData,
        hero: {
          ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.hero!,
          ...data.page.servicesPageData?.hero,
        },
        intro: {
          ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.intro!,
          ...data.page.servicesPageData?.intro,
        },
        services:
          data.page.servicesPageData?.services?.length
            ? data.page.servicesPageData.services
            : FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.services!,
        process: {
          ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.process!,
          ...data.page.servicesPageData?.process,
          steps:
            data.page.servicesPageData?.process?.steps?.length
              ? data.page.servicesPageData.process.steps
              : FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.process.steps!,
        },
        technology: {
          ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.technology!,
          ...data.page.servicesPageData?.technology,
          items:
            data.page.servicesPageData?.technology?.items?.length
              ? data.page.servicesPageData.technology.items
              : FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.technology.items!,
        },
        cta: {
          ...FALLBACK_SERVICES_PAGE_DATA.page?.servicesPageData?.cta!,
          ...data.page.servicesPageData?.cta,
        },
      },
    },
  };

  return merged;
}

/* ==========================================================================
   1. AI AUTOMATION SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_AI_AUTOMATION_PAGE_DATA: FullAIAutomationPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "AI Automation for Smarter, More Efficient Businesses",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "ai-automation-page",
    databaseId: 101,
    title: "AI Automation",
    slug: "ai-automation",
    uri: "/services/ai-automation/",
    seo: {
      title: "AI Automation for Smarter Businesses | DigitalWebStudio",
      metaDesc: "We help businesses automate repetitive work, connect existing tools, and build AI-powered workflows that save time and eliminate bottlenecks.",
      canonical: "https://digitalwebstudio.in/services/ai-automation/",
      opengraphTitle: "AI Automation for Smarter Businesses | DigitalWebStudio",
      opengraphDescription: "We help businesses automate repetitive work, connect existing tools, and build AI-powered workflows that save time and eliminate bottlenecks.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "AI Automation for Smarter Businesses | DigitalWebStudio",
      twitterDescription: "We help businesses automate repetitive work, connect existing tools, and build AI-powered workflows that save time and eliminate bottlenecks.",
    },
    aiAutomationPageData: {
      hero: {
        eyebrow: "AI AUTOMATION • PROCESS OPTIMIZATION",
        title: "AI Automation for Smarter, More Efficient Businesses",
        description: "We help businesses automate repetitive work, connect the tools they already use and build AI-powered workflows that save time and improve everyday operations.",
        ctaText: "Automate Your Workflow",
        ctaUrl: "#contact",
      },
      problem: {
        eyebrow: "THE BOTTLENECK",
        title: "Too much manual work?",
        description: "Growing businesses often get weighed down by repetitive digital tasks that take valuable time away from clients, strategy, and revenue.",
        items: [
          { icon: "clipboard", title: "Repetitive Data Entry", description: "Re-keying information manually between spreadsheets, forms, and tools." },
          { icon: "user-check", title: "Manual Lead Processing", description: "Leads sitting in inboxes waiting for someone to manually qualify and route them." },
          { icon: "copy", title: "Copy/Paste Workflows", description: "Moving order data, client info, and updates between disconnected apps." },
          { icon: "mail", title: "Repetitive Emails", description: "Typing the same onboarding, follow-up, and status messages repeatedly." },
          { icon: "database", title: "CRM Updates", description: "Forgetting to log notes, update deal stages, or create follow-up tasks." },
          { icon: "file-text", title: "Manual Reporting", description: "Spending hours pulling numbers into weekly spreadsheets instead of analyzing them." },
          { icon: "message-square", title: "Customer Support Tasks", description: "Answering the same 10 baseline questions instead of handling high-priority requests." },
          { icon: "bell", title: "Inconsistent Notifications", description: "Team members missing updates due to lack of automated cross-platform alerts." },
        ],
      },
      useCases: {
        eyebrow: "WHAT WE AUTOMATE",
        title: "Practical automations that eliminate busywork.",
        description: "We design end-to-end automation pipelines that run reliably in the background 24/7.",
        items: [
          { number: "01", icon: "target", title: "Lead Management", description: "Instant lead enrichment, intent scoring, routing, and automated calendar booking." },
          { number: "02", icon: "database", title: "CRM Automation", description: "Auto-sync contacts, deal stages, call summaries, and follow-up sequences across HubSpot/Salesforce." },
          { number: "03", icon: "message-square", title: "Customer Support", description: "Automated ticket tagging, smart triaging, and AI-assisted drafts for faster resolution." },
          { number: "04", icon: "cpu", title: "Data Processing", description: "Extract, structure, and sanitize incoming PDFs, invoices, forms, and webhooks automatically." },
          { number: "05", icon: "bell", title: "Smart Notifications", description: "Context-aware alerts to Slack, WhatsApp, or Microsoft Teams when critical events occur." },
          { number: "06", icon: "sparkles", title: "Content Workflows", description: "Automate drafting, meta data generation, multi-channel repurposing, and scheduling queues." },
          { number: "07", icon: "workflow", title: "Internal Operations", description: "Employee onboarding checklists, invoice generation, approval chains, and task dispatch." },
          { number: "08", icon: "bar-chart", title: "Automated Reporting", description: "Scheduled performance snapshots and executive summaries delivered straight to your inbox." },
        ],
      },
      technology: {
        eyebrow: "OUR AUTOMATION STACK",
        title: "Built on battle-tested automation platforms.",
        description: "We connect your ecosystem using robust orchestration engines and modern AI models.",
        items: [
          { name: "n8n", category: "Workflow Orchestration", iconKey: "n8n" },
          { name: "Make", category: "Visual Integration Engine", iconKey: "make" },
          { name: "OpenAI", category: "LLMs, Vision & Embeddings", iconKey: "openai" },
          { name: "REST APIs", category: "Direct Endpoint Integration", iconKey: "api" },
          { name: "Webhooks", category: "Real-Time Event Streams", iconKey: "webhook" },
          { name: "Google Workspace", category: "Sheets, Drive & Gmail", iconKey: "google" },
          { name: "HubSpot / CRM", category: "Bi-Directional Pipeline Sync", iconKey: "crm" },
        ],
      },
      process: {
        eyebrow: "HOW IT WORKS",
        title: "From manual friction to seamless automation.",
        description: "A disciplined, 5-stage deployment framework designed for reliability, data security, and long-term stability.",
        steps: [
          { number: "01", title: "Discover", description: "We analyze your current manual tasks, identify high-ROI friction points, and audit your existing tools.", icon: "eye" },
          { number: "02", title: "Map", description: "We diagram the end-to-end data flow, triggers, validation checks, and error fallbacks.", icon: "target" },
          { number: "03", title: "Build", description: "We configure the workflow logic, test edge cases, and integrate AI prompts with schema controls.", icon: "code" },
          { number: "04", title: "Connect", description: "We securely authenticate your production tools, test live webhooks, and ensure data integrity.", icon: "layers" },
          { number: "05", title: "Improve", description: "We monitor execution logs, optimize performance, and iterate as your operations expand.", icon: "chart-up" },
        ],
      },
      outcomes: {
        eyebrow: "REAL BUSINESS OUTCOMES",
        title: "Built for tangible operational gains.",
        description: "Automation delivers clear, compounding advantages for growing teams.",
        items: [
          { title: "Less Manual Work", description: "Cut dozens of hours of repetitive data entry and routine admin overhead every week." },
          { title: "Faster Customer Response", description: "Engage leads and resolve routine customer queries in seconds instead of hours." },
          { title: "Fewer Human Errors", description: "Eliminate copy-paste mistakes, missed emails, and forgotten follow-up tasks." },
          { title: "Complete Workflow Visibility", description: "Gain transparent execution logs and real-time alerts across every connected process." },
          { title: "More Time for Strategic Work", description: "Free your core team to focus on high-value client relationships and product growth." },
          { title: "Scalable Operations", description: "Handle 10x more volume without being forced to linearly increase administrative headcount." },
        ],
      },
      caseStudyCTA: {
        eyebrow: "REAL-WORLD RESULTS",
        title: "See how we solve real operational challenges.",
        description: "Explore how we engineered an automated lead processing pipeline that connected multi-channel forms to CRM and notifications.",
        buttonText: "See How We Solve Real Problems",
        buttonUrl: "/case-studies",
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Common questions about business automation.",
        items: [
          {
            question: "What can a business automate?",
            answer: "Businesses can automate almost any repetitive digital task—including lead capture, data synchronization between apps, invoice generation, customer onboarding sequences, CRM record updates, and executive reporting.",
          },
          {
            question: "Do I need to replace my existing software?",
            answer: "No. Our philosophy is to connect and enhance the tools you already rely on (such as your website, CRM, email provider, Google Workspace, and communication tools) through APIs and webhooks without disrupting your existing workflows.",
          },
          {
            question: "Can AI work with my CRM?",
            answer: "Yes. We integrate AI models directly with CRMs like HubSpot, Salesforce, and Zoho to automatically summarize incoming messages, score leads based on intent, categorize tickets, and generate personalized response drafts.",
          },
          {
            question: "Can n8n and Make work with APIs?",
            answer: "Yes. Both n8n and Make provide enterprise-grade capabilities for REST APIs, GraphQL, webhooks, OAuth2 authentication, and custom Python or JavaScript logic to handle complex data transformation seamlessly.",
          },
          {
            question: "How long does an automation project take?",
            answer: "Most targeted workflow automations are mapped, built, rigorously tested, and deployed live within 1 to 3 weeks. Complex multi-system enterprise integrations typically take 3 to 6 weeks.",
          },
        ],
      },
      cta: {
        eyebrow: "READY TO AUTOMATE?",
        title: "What could your business automate?",
        description: "Tell us about the repetitive tasks slowing your team down. We will map a practical automation roadmap tailored to your tools.",
        buttonText: "Talk to Us",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getAIAutomationPageData(): Promise<FullAIAutomationPageData> {
  const data = await fetchGraphQL<FullAIAutomationPageData>(GET_AI_AUTOMATION_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_AI_AUTOMATION_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_AI_AUTOMATION_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_AI_AUTOMATION_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_AI_AUTOMATION_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_AI_AUTOMATION_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_AI_AUTOMATION_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      aiAutomationPageData: FALLBACK_AI_AUTOMATION_PAGE_DATA.page?.aiAutomationPageData!,
    },
  };
}

/* ==========================================================================
   2. SEO SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_SEO_PAGE_DATA: FullSEOPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "SEO That Helps Your Business Get Found",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "seo-page",
    databaseId: 102,
    title: "SEO",
    slug: "seo",
    uri: "/services/seo/",
    seo: {
      title: "SEO That Helps Your Business Get Found | DigitalWebStudio",
      metaDesc: "We combine technical SEO, on-page optimization, and search strategy to improve visibility, attract relevant visitors, and build sustainable organic growth.",
      canonical: "https://digitalwebstudio.in/services/seo/",
      opengraphTitle: "SEO That Helps Your Business Get Found | DigitalWebStudio",
      opengraphDescription: "We combine technical SEO, on-page optimization, and search strategy to improve visibility, attract relevant visitors, and build sustainable organic growth.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "SEO That Helps Your Business Get Found | DigitalWebStudio",
      twitterDescription: "We combine technical SEO, on-page optimization, and search strategy to improve visibility, attract relevant visitors, and build sustainable organic growth.",
    },
    seoPageData: {
      hero: {
        eyebrow: "SEARCH ENGINE OPTIMIZATION • ORGANIC GROWTH",
        title: "SEO That Helps Your Business Get Found",
        description: "We combine technical SEO, on-page optimisation and search strategy to improve visibility, attract relevant visitors and build sustainable organic growth.",
        ctaText: "Get an SEO Audit",
        ctaUrl: "#contact",
      },
      capabilities: {
        eyebrow: "CORE CAPABILITIES",
        title: "Comprehensive search engine optimization.",
        description: "We address every dimension of search visibility—from underlying server architecture to high-intent content strategy.",
        items: [
          { title: "Technical SEO", description: "Server response, crawl budget, canonicalization, robots.txt, XML sitemaps, and indexing architecture." },
          { title: "On-Page SEO", description: "Heading hierarchy, semantic HTML tags, metadata optimization, URL structure, and contextual internal linking." },
          { title: "SEO Audits", description: "Deep architectural audits identifying crawl errors, schema gaps, duplicate content, and performance bottlenecks." },
          { title: "Local SEO", description: "Google Business Profile optimization, local citation consistency, geo-targeted landing pages, and review signals." },
          { title: "Content Strategy", description: "Topic clustering, search intent mapping, competitive gap analysis, and conversion-focused editorial outlines." },
          { title: "Search Console Analysis", description: "Granular query monitoring, CTR optimization, index coverage resolution, and crawl rate tracking." },
          { title: "Analytics & Tracking", description: "GA4 conversion tracking, custom event attribution, and transparent organic search performance reporting." },
          { title: "Conversion-Focused SEO", description: "Aligning high-intent search queries with intuitive UX flows to turn organic visitors into qualified business leads." },
        ],
      },
      process: {
        eyebrow: "OUR SEO FRAMEWORK",
        title: "A systematic, data-informed methodology.",
        description: "We avoid guesswork. Every optimization is grounded in search engine documentation and real crawl data.",
        steps: [
          { number: "01", title: "Audit", description: "Comprehensive crawl of site architecture, indexation health, Core Web Vitals, and keyword coverage.", icon: "search" },
          { number: "02", title: "Analyse", description: "Uncover search intent opportunities, competitor gaps, and high-impact keyword clusters.", icon: "chart-up" },
          { number: "03", title: "Prioritise", description: "Build a phased technical and content roadmap prioritized by business impact and effort.", icon: "target" },
          { number: "04", title: "Optimise", description: "Execute technical fixes, on-page structuring, metadata enhancements, and internal linking.", icon: "code" },
          { number: "05", title: "Measure", description: "Track organic impressions, ranking movements, index status, and organic goal completions.", icon: "eye" },
          { number: "06", title: "Improve", description: "Iterate strategy based on search trends, algorithm updates, and live conversion metrics.", icon: "sparkles" },
        ],
      },
      devConnection: {
        eyebrow: "SEO + TECHNICAL ENGINEERING",
        title: "Why technical development is the backbone of search.",
        description: "Search engines favor fast, well-structured, clean websites. We build and refactor websites so search engines can easily crawl, render, and index your content.",
        points: [
          { title: "Site Architecture & Hierarchy", description: "Clean URL trees and shallow click depth ensure search bots discover your important pages easily." },
          { title: "Core Web Vitals & Speed", description: "Fast Largest Contentful Paint (LCP < 1.2s) and zero Cumulative Layout Shift (CLS) directly improve user engagement and search signals." },
          { title: "Structured Schema Markup", description: "Organization, Service, FAQ, and Breadcrumb JSON-LD schema help search engines understand your exact business offerings." },
          { title: "Server-Side Rendering (SSR)", description: "Clean Next.js SSR and ISR deliver fully rendered HTML to search engine bots with zero client-side hydration delay." },
        ],
      },
      aiSearch: {
        eyebrow: "MODERN SEARCH LANDSCAPE",
        title: "SEO for traditional search and modern AI discovery.",
        description: "As search experiences evolve, the core principles of authority, technical clarity, and authentic expertise matter more than ever.",
        points: [
          { title: "Helpful, Intent-Driven Content", description: "Answering specific user questions thoroughly rather than stuffing generic keywords." },
          { title: "Clear Information Architecture", description: "Logical headings, concise paragraphs, and structured data that AI models and search crawlers can parse accurately." },
          { title: "Original Subject Matter Expertise", description: "Showcasing real case studies, verified outcomes, and authentic technical perspective that cannot be replicated by low-quality content mills." },
        ],
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Clear answers about SEO and organic search.",
        items: [
          {
            question: "How long does SEO take?",
            answer: "SEO is a compounding strategy. Critical technical fixes often improve crawlability and indexation within weeks, while keyword ranking growth and substantial organic traffic gains typically compound over 3 to 6 months of consistent optimization.",
          },
          {
            question: "What does an SEO audit include?",
            answer: "Our comprehensive audit covers technical site health, Core Web Vitals performance, crawl errors, indexation coverage, schema validation, keyword ranking analysis, content gaps, internal linking structure, and an actionable prioritized roadmap.",
          },
          {
            question: "Can you work with an existing website?",
            answer: "Yes. We routinely optimize existing WordPress, Next.js, headless architectures, and custom platforms without requiring a full redesign, fixing the technical foundations that unlock search growth.",
          },
          {
            question: "Do you also handle technical SEO implementation?",
            answer: "Yes. Unlike agencies that only provide static PDF recommendations, our engineering team can directly implement code fixes, structured schema, speed optimizations, server caching, and URL redirects.",
          },
          {
            question: "How do you measure SEO performance?",
            answer: "We measure performance using Google Search Console and GA4 metrics—tracking organic impression growth, high-intent keyword ranking movements, qualified organic traffic, and actual business conversions.",
          },
        ],
      },
      cta: {
        eyebrow: "ORGANIC VISIBILITY AUDIT",
        title: "Let's Find Where Your Website Can Grow.",
        description: "Request a technical and on-page SEO assessment. We will identify the specific opportunities to increase your organic visibility and attract high-intent visitors.",
        buttonText: "Request an SEO Audit",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getSEOPageData(): Promise<FullSEOPageData> {
  const data = await fetchGraphQL<FullSEOPageData>(GET_SEO_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_SEO_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_SEO_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_SEO_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_SEO_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_SEO_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_SEO_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      seoPageData: FALLBACK_SEO_PAGE_DATA.page?.seoPageData!,
    },
  };
}

/* ==========================================================================
   3. VIBE CODE DEVELOPMENT SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_VIBE_CODE_PAGE_DATA: FullVibeCodePageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "Build Digital Products Faster with AI-Assisted Development",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "vibe-code-page",
    databaseId: 103,
    title: "Vibe Code Development",
    slug: "vibe-code-development",
    uri: "/services/vibe-code-development/",
    seo: {
      title: "Vibe Code Rapid Prototyping & Development | DigitalWebStudio",
      metaDesc: "We combine modern AI coding workflows with real engineering expertise to prototype, build, and refine web applications and digital products faster.",
      canonical: "https://digitalwebstudio.in/services/vibe-code-development/",
      opengraphTitle: "Vibe Code Rapid Prototyping & Development | DigitalWebStudio",
      opengraphDescription: "We combine modern AI coding workflows with real engineering expertise to prototype, build, and refine web applications and digital products faster.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "Vibe Code Rapid Prototyping & Development | DigitalWebStudio",
      twitterDescription: "We combine modern AI coding workflows with real engineering expertise to prototype, build, and refine web applications and digital products faster.",
    },
    vibeCodePageData: {
      hero: {
        eyebrow: "AI-ASSISTED DEVELOPMENT • SENIOR ENGINEERING",
        title: "Build Digital Products Faster with AI-Assisted Development",
        description: "We combine modern AI coding workflows with real engineering expertise to prototype, build and refine websites, applications and digital products faster.",
        ctaText: "Build an Idea",
        ctaUrl: "#contact",
      },
      overview: {
        eyebrow: "WHAT IS VIBE CODING",
        title: "AI velocity guided by senior engineering craft.",
        description: "Vibe coding leverages AI-assisted engineering workflows to compress months of boilerplate scaffolding into days, while experienced senior engineers guide architecture, validate security, and ensure maintainable production quality.",
      },
      useCases: {
        eyebrow: "WHAT WE BUILD",
        title: "Ideal for rapid, high-impact product cycles.",
        description: "Accelerate time-to-market without compromising underlying code quality.",
        items: [
          { number: "01", title: "MVP Development", description: "Launch functional Minimum Viable Products in weeks to test market demand and gather real user feedback." },
          { number: "02", title: "Rapid Prototyping", description: "Transform product concepts into interactive, high-fidelity working prototypes for stakeholders and investors." },
          { number: "03", title: "Modern Landing Pages", description: "High-conversion, fast-loading Next.js landing pages with tailored animations and responsive layouts." },
          { number: "04", title: "Internal Business Tools", description: "Custom administrative portals, dashboards, and workflows designed around internal operational needs." },
          { number: "05", title: "SaaS Product Interfaces", description: "Clean, accessible, and reactive frontend interfaces built on React, TypeScript, and modern component systems." },
          { number: "06", title: "Next.js & React Apps", description: "Production-ready web applications with server-side rendering, API routes, and optimized assets." },
        ],
      },
      approach: {
        eyebrow: "OUR BALANCED APPROACH",
        title: "AI accelerates speed. Human expertise controls quality.",
        description: "We use AI where it excels and senior engineers where human judgement is essential.",
        aiPoints: [
          "Rapid ideation and architectural scaffolding",
          "Boilerplate and component structure generation",
          "Fast prototyping of UI iterations",
          "Automated test suite scaffolding",
        ],
        humanPoints: [
          "Scalable database and system architecture",
          "Security, authentication and data protection",
          "Core Web Vitals and runtime performance audits",
          "Refactoring for long-term code maintainability",
        ],
      },
      quality: {
        eyebrow: "ENGINEERING RIGOR",
        title: "Fast does not mean careless.",
        description: "AI code generation without senior oversight leads to security vulnerabilities, brittle edge cases, and technical debt. We enforce strict engineering standards on every line of code.",
        items: [
          { title: "Strict TypeScript Typings", description: "Zero runtime surprises with comprehensive type safety across all frontend and API layers." },
          { title: "Security & Auth Verification", description: "Human validation of auth tokens, CORS policies, environment variables, and secure API bridges." },
          { title: "Production Performance Audits", description: "Every build is benchmarked for bundle size, image optimization, and sub-second page loads." },
        ],
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Understanding AI-assisted rapid development.",
        items: [
          {
            question: "What is Vibe Code Development?",
            answer: "It is an accelerated engineering approach that pairs advanced AI coding workflows with experienced senior software engineers to scaffold, build, test, and iterate on web applications significantly faster than traditional cycles.",
          },
          {
            question: "Is AI-generated code production ready?",
            answer: "Not on its own. AI excels at boilerplate and speed, but requires experienced engineers to architect system design, secure data flows, handle edge cases, and ensure clean maintainability.",
          },
          {
            question: "What technologies do you use for rapid development?",
            answer: "We primarily use Next.js, React, TypeScript, TailwindCSS/Vanilla CSS, Node.js, and headless WordPress/Supabase APIs to produce modular, high-performance codebases.",
          },
          {
            question: "How quickly can an MVP or prototype be built?",
            answer: "Depending on feature complexity, functional MVPs and working prototypes can often be delivered in 1 to 2 weeks instead of several months.",
          },
          {
            question: "Can rapid prototypes scale into long-term products?",
            answer: "Yes. Because our foundational architecture is structured and reviewed by senior engineers from day one, your codebase remains clean, modular, and ready for future feature expansion.",
          },
        ],
      },
      cta: {
        eyebrow: "RAPID BUILD SPRINT",
        title: "Have an idea you'd like to build quickly?",
        description: "Share your product concept with us. We will evaluate how AI velocity and senior engineering can bring your vision to life rapidly.",
        buttonText: "Let's Build It",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getVibeCodePageData(): Promise<FullVibeCodePageData> {
  const data = await fetchGraphQL<FullVibeCodePageData>(GET_VIBE_CODE_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_VIBE_CODE_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_VIBE_CODE_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_VIBE_CODE_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_VIBE_CODE_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_VIBE_CODE_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_VIBE_CODE_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      vibeCodePageData: FALLBACK_VIBE_CODE_PAGE_DATA.page?.vibeCodePageData!,
    },
  };
}

/* ==========================================================================
   4. DIGITAL MARKETING SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_DIGITAL_MARKETING_PAGE_DATA: FullDigitalMarketingPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "Digital Marketing Built Around Growth",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "digital-marketing-page",
    databaseId: 104,
    title: "Digital Marketing",
    slug: "digital-marketing",
    uri: "/services/digital-marketing/",
    seo: {
      title: "Digital Marketing Built Around Growth | DigitalWebStudio",
      metaDesc: "We combine strategy, content, campaigns, and measurement to help businesses reach the right audience and turn attention into meaningful opportunities.",
      canonical: "https://digitalwebstudio.in/services/digital-marketing/",
      opengraphTitle: "Digital Marketing Built Around Growth | DigitalWebStudio",
      opengraphDescription: "We combine strategy, content, campaigns, and measurement to help businesses reach the right audience and turn attention into meaningful opportunities.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "Digital Marketing Built Around Growth | DigitalWebStudio",
      twitterDescription: "We combine strategy, content, campaigns, and measurement to help businesses reach the right audience and turn attention into meaningful opportunities.",
    },
    digitalMarketingPageData: {
      hero: {
        eyebrow: "DIGITAL GROWTH • PERFORMANCE MARKETING",
        title: "Digital Marketing Built Around Growth",
        description: "We combine strategy, content, campaigns and measurement to help businesses reach the right audience and turn attention into meaningful opportunities.",
        ctaText: "Plan Your Growth",
        ctaUrl: "#contact",
      },
      services: {
        eyebrow: "GROWTH CAPABILITIES",
        title: "Strategic marketing designed for measurable ROI.",
        description: "We focus on qualified audience acquisition, conversion funnels, and data attribution rather than vanity metrics.",
        items: [
          { number: "01", title: "Digital Growth Strategy", description: "Market positioning, audience persona mapping, and cross-channel conversion roadmaps." },
          { number: "02", title: "Paid Performance Campaigns", description: "Targeted Google Ads and Meta advertising optimized for cost-per-acquisition and lead quality." },
          { number: "03", title: "Content & Editorial Strategy", description: "High-intent content creation that educates prospective clients and builds topical authority." },
          { number: "04", title: "Conversion Rate Optimization", description: "A/B testing, user journey audits, and landing page refactoring to maximize form submissions." },
          { number: "05", title: "Analytics & Attribution", description: "End-to-end GA4 event tracking, UTM taxonomy, and clear channel revenue attribution." },
          { number: "06", title: "Audience Research & Funnels", description: "Mapping customer touchpoints from initial awareness through consideration to final conversion." },
        ],
      },
      growthFramework: {
        eyebrow: "GROWTH FRAMEWORK",
        title: "The continuous growth cycle.",
        description: "A disciplined 5-stage loop that turns initial market attention into compounding business value.",
        steps: [
          { number: "01", title: "Reach", description: "Connect with high-intent prospects via SEO, targeted search, and paid distribution." },
          { number: "02", title: "Engage", description: "Deliver clear value through intuitive UI, helpful content, and transparent messaging." },
          { number: "03", title: "Convert", description: "Streamline conversion paths with fast forms, clear CTAs, and instant response mechanisms." },
          { number: "04", title: "Measure", description: "Track exact source attribution, conversion rates, and acquisition costs." },
          { number: "05", title: "Improve", description: "Reinvest budget into top-performing channels and optimize underperforming touchpoints." },
        ],
      },
      seoConnection: {
        eyebrow: "SYNERGY ACROSS CHANNELS",
        title: "How SEO, content, and campaigns work together.",
        description: "Digital marketing performs best when organic search foundations, paid campaigns, and analytical telemetry reinforce one another into a unified growth engine.",
      },
      analytics: {
        eyebrow: "MEASUREMENT & ATTRIBUTION",
        title: "Transparent data tracking with GA4 & Tag Manager.",
        description: "We configure enterprise-grade Google Analytics 4 and Google Tag Manager setups so you always know where your leads come from.",
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Understanding our digital marketing approach.",
        items: [
          {
            question: "How does digital marketing support SEO?",
            answer: "Paid campaigns provide immediate keyword search intent data and audience insights that inform long-term SEO content strategy, while SEO delivers sustainable organic traffic that lowers blended customer acquisition costs.",
          },
          {
            question: "How do you measure marketing success?",
            answer: "We track business metrics that matter—qualified inquiries, cost per lead (CPL), landing page conversion rate, and pipeline value—rather than superficial vanity impressions.",
          },
          {
            question: "Do you manage paid ad budgets?",
            answer: "Yes. We plan, execute, and optimize Google Search, Display, and Meta campaign budgets with continuous A/B creative testing and negative keyword pruning.",
          },
          {
            question: "What analytics setup do you provide?",
            answer: "We implement custom Google Analytics 4 event tracking, Google Tag Manager data layers, conversion triggers, and clear reporting dashboards.",
          },
        ],
      },
      cta: {
        eyebrow: "GROWTH STRATEGY SESSION",
        title: "Let's Build a Smarter Growth Strategy.",
        description: "Schedule a conversation with our digital growth specialists to plan your customer acquisition roadmap.",
        buttonText: "Start a Conversation",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getDigitalMarketingPageData(): Promise<FullDigitalMarketingPageData> {
  const data = await fetchGraphQL<FullDigitalMarketingPageData>(GET_DIGITAL_MARKETING_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_DIGITAL_MARKETING_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_DIGITAL_MARKETING_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_DIGITAL_MARKETING_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_DIGITAL_MARKETING_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_DIGITAL_MARKETING_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_DIGITAL_MARKETING_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      digitalMarketingPageData: FALLBACK_DIGITAL_MARKETING_PAGE_DATA.page?.digitalMarketingPageData!,
    },
  };
}

/* ==========================================================================
   5. CHATBOT DEVELOPMENT SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_CHATBOT_PAGE_DATA: FullChatbotPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "AI Chatbots That Help Your Business Respond Faster",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "chatbot-page",
    databaseId: 105,
    title: "Chatbot Development",
    slug: "chatbot-development",
    uri: "/services/chatbot-development/",
    seo: {
      title: "AI Chatbot Development & Conversational Systems | DigitalWebStudio",
      metaDesc: "We build intelligent chat experiences that help businesses answer questions, capture inquiries, and automate repetitive conversations 24/7.",
      canonical: "https://digitalwebstudio.in/services/chatbot-development/",
      opengraphTitle: "AI Chatbot Development & Conversational Systems | DigitalWebStudio",
      opengraphDescription: "We build intelligent chat experiences that help businesses answer questions, capture inquiries, and automate repetitive conversations 24/7.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "AI Chatbot Development & Conversational Systems | DigitalWebStudio",
      twitterDescription: "We build intelligent chat experiences that help businesses answer questions, capture inquiries, and automate repetitive conversations 24/7.",
    },
    chatbotPageData: {
      hero: {
        eyebrow: "AI CHATBOTS • CONVERSATIONAL SYSTEMS",
        title: "AI Chatbots That Help Your Business Respond Faster",
        description: "We build intelligent chat experiences that help businesses answer questions, capture enquiries and automate repetitive conversations.",
        ctaText: "Build a Chatbot",
        ctaUrl: "#contact",
      },
      useCases: {
        eyebrow: "USE CASES",
        title: "Conversational AI tailored to your business data.",
        description: "Custom AI assistants connected directly to your documentation, CRM, and customer workflows.",
        items: [
          { number: "01", title: "Lead Qualification", description: "Ask targeted qualifying questions, collect contact details, and schedule appointments automatically." },
          { number: "02", title: "24/7 Customer Support", description: "Instant answers to common customer questions at any time of day without human delay." },
          { number: "03", title: "FAQ & Policy Automation", description: "Accurate answers pulled directly from your official pricing, shipping, or return policies." },
          { number: "04", title: "Knowledge Base Search", description: "Semantic retrieval across internal product documentation, technical guides, and PDFs." },
          { number: "05", title: "Live Agent Handover", description: "Smooth transition to human team members when high-value leads or complex edge cases arise." },
          { number: "06", title: "Multi-Platform Deployment", description: "Embed directly on your Next.js/WordPress website, WhatsApp Business, or client portals." },
        ],
      },
      integrations: {
        eyebrow: "CONNECTED ECOSYSTEM",
        title: "Connected to your existing business tools.",
        description: "Our chatbots do not live in a vacuum. They sync data directly with your CRM, databases, and notifications.",
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Common questions about AI chatbots.",
        items: [
          {
            question: "How does a custom chatbot differ from generic AI?",
            answer: "Generic AI answers from public web data. Our custom chatbots are grounded strictly in your business knowledge base, product specs, and pricing rules, ensuring accurate answers without hallucinations.",
          },
          {
            question: "Can the chatbot capture leads and update our CRM?",
            answer: "Yes. When a prospect provides contact details or requests a consultation, the bot validates the data and pushes the contact record directly into HubSpot, Salesforce, or your email inbox via webhook.",
          },
          {
            question: "What happens when the bot cannot answer a question?",
            answer: "We configure polite fallback protocols that capture the user contact information and alert your human support team via Slack or email for follow-up.",
          },
          {
            question: "Can we deploy the chatbot on WhatsApp or other channels?",
            answer: "Yes. We support website embeds, WhatsApp Business API integrations, and internal Slack bots sharing the same core knowledge base.",
          },
        ],
      },
      cta: {
        eyebrow: "CONVERSATIONAL AI",
        title: "Build a Smarter Customer Experience",
        description: "Deploy an intelligent AI assistant that answers questions accurately and captures qualified leads 24/7.",
        buttonText: "Build a Chatbot",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getChatbotPageData(): Promise<FullChatbotPageData> {
  const data = await fetchGraphQL<FullChatbotPageData>(GET_CHATBOT_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_CHATBOT_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_CHATBOT_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_CHATBOT_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_CHATBOT_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_CHATBOT_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_CHATBOT_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      chatbotPageData: FALLBACK_CHATBOT_PAGE_DATA.page?.chatbotPageData!,
    },
  };
}

/* ==========================================================================
   6. API INTEGRATION SERVICE PAGE FALLBACK & GETTER
   ========================================================================== */

export const FALLBACK_API_INTEGRATION_PAGE_DATA: FullAPIIntegrationPageData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "Connect Your Business Systems",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  page: {
    id: "api-integration-page",
    databaseId: 106,
    title: "API Integration",
    slug: "api-integration",
    uri: "/services/api-integration/",
    seo: {
      title: "API Integration & Systems Architecture | DigitalWebStudio",
      metaDesc: "We integrate the platforms, APIs, and tools your business relies on so data moves reliably and workflows run without manual bottlenecks.",
      canonical: "https://digitalwebstudio.in/services/api-integration/",
      opengraphTitle: "API Integration & Systems Architecture | DigitalWebStudio",
      opengraphDescription: "We integrate the platforms, APIs, and tools your business relies on so data moves reliably and workflows run without manual bottlenecks.",
      opengraphSiteName: "digitalwebstudio",
      opengraphType: "website",
      twitterTitle: "API Integration & Systems Architecture | DigitalWebStudio",
      twitterDescription: "We integrate the platforms, APIs, and tools your business relies on so data moves reliably and workflows run without manual bottlenecks.",
    },
    apiIntegrationPageData: {
      hero: {
        eyebrow: "SYSTEM INTEGRATION • API ARCHITECTURE",
        title: "Connect Your Business Systems",
        description: "We integrate the platforms, APIs and tools your business relies on so data can move between systems reliably and workflows can run without unnecessary manual work.",
        ctaText: "Discuss an Integration",
        ctaUrl: "#contact",
      },
      capabilities: {
        eyebrow: "INTEGRATION CAPABILITIES",
        title: "Connecting tools across your entire business.",
        description: "We engineer the underlying integration bridges that allow your software stack to operate as a single unified system.",
        items: [
          { number: "01", title: "REST & GraphQL APIs", description: "Custom API design, endpoint development, and third-party API consumption with robust error handling." },
          { number: "02", title: "CRM & ERP Synchronization", description: "Bi-directional synchronization between CRMs (HubSpot, Salesforce, Zoho) and inventory or accounting systems." },
          { number: "03", title: "Payment Gateways", description: "Secure checkout and subscription integrations with Stripe, Razorpay, and PayPal with automated webhook handling." },
          { number: "04", title: "Webhook & Event Streams", description: "Real-time event listeners that trigger instant downstream actions when user behaviors or transactions occur." },
          { number: "05", title: "AI & LLM API Bridges", description: "Connecting OpenAI, Anthropic, and custom AI inference models directly into your web applications." },
          { number: "06", title: "Custom Middleware & Services", description: "Lightweight Node.js / Python middleware to transform data schemas, sanitize payloads, and manage rate limits." },
        ],
      },
      businessValue: {
        eyebrow: "SYSTEM EFFICIENCY",
        title: "Why unified systems create compounding value.",
        description: "Disconnected software creates data silos, manual entry errors, and communication delays. Modern API integrations solve this at the foundational level.",
        items: [
          { title: "Eliminate Manual Data Entry", description: "Data entered in one platform updates everywhere automatically in real time." },
          { title: "Keep Records Synchronized", description: "Prevent discrepancies between your CRM, billing software, and customer portal." },
          { title: "Centralize Business Intelligence", description: "Consolidate operational metrics into a single source of truth for informed decision making." },
          { title: "Enterprise Security & Reliability", description: "Secure API key handling, TLS encryption, retry logic, and fallback logging." },
        ],
      },
      faq: {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Understanding API & system integrations.",
        items: [
          {
            question: "Can you connect custom or proprietary legacy software?",
            answer: "Yes. As long as your software provides an API, database access, or export capability, we can build custom middleware to interface with modern cloud platforms.",
          },
          {
            question: "How do you handle API rate limits and connection downtime?",
            answer: "We implement robust queuing mechanisms, exponential backoff retries, rate-limiting handlers, and automated error notification alerts to ensure zero data loss.",
          },
          {
            question: "Is data encrypted during transfer?",
            answer: "Yes. All data transmissions use TLS/SSL encryption, secure webhook signature verification, and environment-isolated secret key storage.",
          },
        ],
      },
      cta: {
        eyebrow: "SYSTEM INTEGRATION",
        title: "Let's Connect Your Systems",
        description: "Tell us about the tools and platforms you need to connect. We will architect a reliable integration strategy.",
        buttonText: "Discuss an Integration",
        buttonUrl: "#contact",
      },
    },
  },
};

export async function getAPIIntegrationPageData(): Promise<FullAPIIntegrationPageData> {
  const data = await fetchGraphQL<FullAPIIntegrationPageData>(GET_API_INTEGRATION_PAGE_DATA, {}, 60);

  if (!data || !data.page) {
    return FALLBACK_API_INTEGRATION_PAGE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_API_INTEGRATION_PAGE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_API_INTEGRATION_PAGE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_API_INTEGRATION_PAGE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    page: {
      ...FALLBACK_API_INTEGRATION_PAGE_DATA.page!,
      ...data.page,
      seo: {
        ...FALLBACK_API_INTEGRATION_PAGE_DATA.page?.seo,
        ...data.page.seo,
      },
      apiIntegrationPageData: FALLBACK_API_INTEGRATION_PAGE_DATA.page?.apiIntegrationPageData!,
    },
  };
}

/* ==========================================================================
   7. CASE STUDIES ARCHIVE & SINGLE CASE STUDY FALLBACK & GETTERS
   ========================================================================== */

export const FALLBACK_CASE_STUDIES_ARCHIVE_DATA: FullCaseStudiesArchiveData = {
  generalSettings: {
    title: "digitalwebstudio",
    description: "Work That Solves Real Problems",
    url: "https://digitalwebstudio.in",
  },
  siteLogo: {
    id: 8,
    url: "/images/logo-icon.webp",
    altText: "DigitalWebStudio",
    width: 220,
    height: 60,
    title: "DigitalWebStudio Logo",
  },
  globalSettings: {
    phone: "+91 63830 88993",
    email: "contact@digitalwebstudio.in",
    address: "Coimbatore, India",
    tagline: "We build digital solutions that help businesses automate, rank and scale.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
    footerDescription: "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.",
    newsletterHeading: "Stay updated with our latest insights, news and engineering breakthroughs.",
    copyrightText: "© {year} digitalwebstudio. All Rights Reserved.",
  },
  menus: FALLBACK_HEADER_MENU,
  hero: {
    eyebrow: "PORTFOLIO • VERIFIED CASE STUDIES",
    title: "Work That Solves Real Problems",
    description: "Explore how we use development, SEO, automation and digital strategy to solve practical business challenges.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
  },
  items: [
    {
      id: "cs-1",
      slug: "lead-processing-automation-system",
      title: "Multi-Channel Automated Lead Processing & CRM Pipeline",
      category: "AI Automation",
      categorySlug: "ai-automation",
      clientName: "B2B Digital Services",
      industry: "Professional Services",
      summary: "Automated lead ingestion from web forms, intent scoring with OpenAI, CRM contact synchronization, and instant Slack notifications.",
      servicesRendered: ["AI Automation", "API Integration", "CRM Sync"],
      technologies: ["n8n", "OpenAI", "HubSpot", "Slack API", "Next.js Webhooks"],
      challenge: "The client was receiving inquiries across multiple web forms and email channels. Team members were spending 2-3 hours daily manually copying contact details into HubSpot, categorizing service needs, and drafting introductory emails—leading to delayed response times.",
      approach: "We mapped a centralized webhook architecture using self-hosted n8n. Instead of manual data entry, incoming submissions trigger instant payload validation, AI-based intent categorization, and automated routing based on lead value.",
      implementation: "1. Configured unified Next.js API route capturing form submissions with strict schema validation.\n2. Built n8n workflow listening for webhook events with automated retry queuing.\n3. Integrated OpenAI prompt engineering for structured intent extraction and company classification.\n4. Bi-directionally synced contact and deal records into HubSpot CRM.\n5. Dispatched contextual Slack alert with one-click direct response links.",
      results: [
        "Manual lead data entry eliminated completely",
        "Average initial response time dropped from 4 hours to under 2 minutes",
        "Zero lost form submissions with automated error logging",
        "Over 14 hours saved weekly across the administrative team",
      ],
      lessons: "Structured JSON schema validation at the ingestion layer is critical before passing data to LLMs, ensuring 100% reliable downstream database sync without format errors.",
      imageUrl: "/images/software-development-team.webp",
      imageAlt: "Automated lead processing workflow system architecture",
    },
    {
      id: "cs-2",
      slug: "technical-seo-headless-migration",
      title: "Technical SEO Architecture & Core Web Vitals Optimization",
      category: "SEO",
      categorySlug: "seo",
      clientName: "Enterprise Content Platform",
      industry: "Media & Technology",
      summary: "Re-architecting technical SEO foundations, Core Web Vitals, and structured JSON-LD schema on a headless Next.js frontend.",
      servicesRendered: ["SEO", "Web Development", "Analytics"],
      technologies: ["Next.js", "WordPress WPGraphQL", "Google Search Console", "Yoast SEO"],
      challenge: "The client suffered from slow page loads (LCP > 3.8s), crawl budget wastage due to duplicate URL parameters, and missing structured schema—restricting their organic search performance.",
      approach: "We implemented server-side rendered Next.js architecture with Incremental Static Regeneration (ISR), optimized image pipelines with AVIF/WebP, and built strict dynamic JSON-LD schema for organization and article types.",
      implementation: "1. Audited full index coverage and purged 400+ crawl errors in Google Search Console.\n2. Built Next.js static pages with 60-second ISR caching.\n3. Integrated automated XML sitemap and canonical tag generation.\n4. Deployed BreadcrumbList, Organization, and FAQPage structured data.",
      results: [
        "Core Web Vitals achieved 100% Good rating with LCP reduced to 1.1s",
        "Zero indexation errors across Google Search Console",
        "Rich snippet search presence unlocked across primary keyword queries",
        "Significant organic click growth across target service terms",
      ],
      lessons: "Coupling server-side rendering with granular structured schema provides search bots with unambiguous context, directly improving indexation velocity.",
      imageUrl: "/images/digital-marketing-strategy.webp",
      imageAlt: "Technical SEO Core Web Vitals audit and search visibility architecture",
    },
    {
      id: "cs-3",
      slug: "rapid-mvp-vibe-code-development",
      title: "Rapid MVP Prototyping & Production-Ready Next.js Build",
      category: "Development",
      categorySlug: "development",
      clientName: "SaaS Startup Initiative",
      industry: "Software & Technology",
      summary: "Leveraging AI-assisted engineering workflows with senior architectural oversight to deliver an MVP dashboard in 10 days.",
      servicesRendered: ["Vibe Code Development", "Web Development", "API Integration"],
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js"],
      challenge: "The startup needed a functional, polished product prototype to demonstrate to stakeholders within two weeks, but traditional development timelines quoted 3-4 months.",
      approach: "We used AI-assisted engineering velocity for rapid component scaffolding and boilerplate generation, while our senior engineers controlled database architecture, auth flows, and code reviews.",
      implementation: "1. Scaffolding Next.js App Router with TypeScript type definitions.\n2. Rapid UI generation adhering to a clean dark aesthetic design system.\n3. Senior engineering review for authentication, security headers, and state management.\n4. Comprehensive automated unit and lint testing before live deployment.",
      results: [
        "Full working interactive MVP delivered in 10 business days",
        "Clean modular code structure ready for feature expansion",
        "Sub-second page navigation and 0 TypeScript compilation errors",
      ],
      lessons: "AI speed is transformative when paired with experienced human engineers who know exactly which code patterns to accept, refactor, or reject.",
      imageUrl: "/images/software-development-team.webp",
      imageAlt: "Modern SaaS MVP interface developed with AI-assisted engineering workflows",
    },
  ],
};

export async function getCaseStudiesPageData(): Promise<FullCaseStudiesArchiveData> {
  const data = await fetchGraphQL<FullCaseStudiesArchiveData>(GET_CASE_STUDIES_PAGE_DATA, {}, 60);

  if (!data) {
    return FALLBACK_CASE_STUDIES_ARCHIVE_DATA;
  }

  return {
    generalSettings: data.generalSettings || FALLBACK_CASE_STUDIES_ARCHIVE_DATA.generalSettings,
    siteLogo: data.siteLogo || FALLBACK_CASE_STUDIES_ARCHIVE_DATA.siteLogo,
    globalSettings: {
      ...FALLBACK_CASE_STUDIES_ARCHIVE_DATA.globalSettings!,
      ...data.globalSettings,
    },
    menus: data.menus?.nodes?.length ? data.menus : FALLBACK_HEADER_MENU,
    hero: FALLBACK_CASE_STUDIES_ARCHIVE_DATA.hero,
    items: FALLBACK_CASE_STUDIES_ARCHIVE_DATA.items,
  };
}

export async function getSingleCaseStudyData(slug: string): Promise<FullSingleCaseStudyData | null> {
  const archive = await getCaseStudiesPageData();
  const found = archive.items.find((item) => item.slug === slug);

  if (!found) {
    return null;
  }

  return {
    generalSettings: archive.generalSettings,
    siteLogo: archive.siteLogo,
    globalSettings: archive.globalSettings,
    menus: archive.menus,
    caseStudy: found,
  };
}


