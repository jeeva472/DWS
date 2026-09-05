/**
 * TypeScript interfaces for Headless WordPress & WPGraphQL responses.
 */

export interface SiteLogo {
  id?: number;
  url: string;
  altText?: string;
  width?: number;
  height?: number;
  title?: string;
}

export interface GeneralSettings {
  title: string;
  description: string;
  url: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export interface GlobalSettings {
  phone: string;
  email: string;
  address: string;
  tagline: string;
  ctaText: string;
  ctaUrl: string;
  footerDescription: string;
  newsletterHeading: string;
  copyrightText: string;
  privacyPolicyUrl?: string;
  termsServiceUrl?: string;
  social?: SocialLinks;
}

export interface MenuItemNode {
  id: string;
  label: string;
  url: string;
  path?: string;
}

export interface MenuNode {
  id: string;
  name: string;
  slug: string;
  menuItems: {
    nodes: MenuItemNode[];
  };
}

export interface YoastSEO {
  title?: string;
  metaDesc?: string;
  canonical?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphImage?: string;
  opengraphUrl?: string;
  opengraphSiteName?: string;
  opengraphType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  metaRobotsNoindex?: string;
  metaRobotsNofollow?: string;
}

export interface HeroSectionData {
  eyebrow?: string;
  heading: string;
  headingHighlight?: string;
  headingTag?: string;
  description?: string;
  btnPrimaryText?: string;
  btnPrimaryUrl?: string;
  btnSecondaryText?: string;
  btnSecondaryUrl?: string;
  visualEnabled?: boolean;
}

export interface IconItemData {
  icon: string;
  title: string;
  text?: string;
}

export interface ServiceItemData {
  active: boolean;
  icon: string;
  title: string;
  description?: string;
  bullets?: string[];
  linkUrl?: string;
  linkText?: string;
}

export interface TestimonialItemData {
  active: boolean;
  name: string;
  role?: string;
  company?: string;
  text: string;
  rating?: number;
  avatarUrl?: string;
}

export interface StatItemData {
  icon?: string;
  number: string;
  label: string;
}

export interface HomepageACFData {
  hero: HeroSectionData;
  heroBenefits: IconItemData[];
  about: HeroSectionData;
  aboutFeatures: IconItemData[];
  aboutImageUrl?: string;
  aboutImageAlt?: string;
  services: ServiceItemData[];
  servicesSection: HeroSectionData;
  whyChoose: IconItemData[];
  whySection: HeroSectionData;
  testimonials: TestimonialItemData[];
  testiSection: HeroSectionData;
  testiAutoplay?: boolean;
  contactCta: HeroSectionData;
  contactFormId?: number;
  stats: StatItemData[];
}

export interface AboutHeroData {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface AboutIntroData {
  eyebrow?: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ApproachStepData {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutApproachData {
  eyebrow?: string;
  title: string;
  description: string;
  steps: ApproachStepData[];
}

export interface ValueItemData {
  number: string;
  title: string;
  description: string;
}

export interface AboutValuesData {
  eyebrow?: string;
  title: string;
  description: string;
  items: ValueItemData[];
}

export interface TechItemData {
  name: string;
  category: string;
  iconKey: string;
}

export interface AboutTechnologyData {
  eyebrow?: string;
  title: string;
  description: string;
  items: TechItemData[];
}

export interface WhyUsItemData {
  number: string;
  title: string;
  description: string;
}

export interface AboutWhyUsData {
  eyebrow?: string;
  title: string;
  description: string;
  items: WhyUsItemData[];
}

export interface AboutCollaborationData {
  eyebrow?: string;
  title: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface AboutCTAData {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface AboutPageACFData {
  hero: AboutHeroData;
  intro: AboutIntroData;
  approach: AboutApproachData;
  values: AboutValuesData;
  technology: AboutTechnologyData;
  whyUs: AboutWhyUsData;
  collaboration: AboutCollaborationData;
  cta: AboutCTAData;
}

export interface ServicesHeroData {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface ServicesIntroData {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface ServicesPageItemData {
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesProcessData {
  eyebrow?: string;
  title: string;
  description: string;
  steps: ProcessStepData[];
}

export interface ServicesTechData {
  eyebrow?: string;
  title: string;
  description: string;
  items: TechItemData[];
}

export interface ServicesCTAData {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ServicesPageACFData {
  hero: ServicesHeroData;
  intro: ServicesIntroData;
  services: ServicesPageItemData[];
  process: ServicesProcessData;
  technology: ServicesTechData;
  cta: ServicesCTAData;
}

export interface PageNode {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  uri: string;
  seo?: YoastSEO;
  homepageData?: HomepageACFData;
  aboutPageData?: AboutPageACFData;
  servicesPageData?: ServicesPageACFData;
}

export interface FullHomepageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode;
}

export interface FullAboutPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode;
}

export interface FullServicesPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode;
}

/* ==========================================================================
   INDIVIDUAL SERVICE PAGE DATA INTERFACES
   ========================================================================== */

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface ProblemItemData {
  icon: string;
  title: string;
  description: string;
}

export interface OutcomeItemData {
  title: string;
  description: string;
}

export interface AIAutomationPageData {
  hero: ServicesHeroData;
  problem: {
    eyebrow?: string;
    title: string;
    description: string;
    items: ProblemItemData[];
  };
  useCases: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{
      number: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  technology: ServicesTechData;
  process: ServicesProcessData;
  outcomes: {
    eyebrow?: string;
    title: string;
    description: string;
    items: OutcomeItemData[];
  };
  caseStudyCTA: {
    eyebrow?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullAIAutomationPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    aiAutomationPageData?: AIAutomationPageData;
  };
}

export interface SEOPageData {
  hero: ServicesHeroData;
  capabilities: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  process: ServicesProcessData;
  devConnection: {
    eyebrow?: string;
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
  aiSearch: {
    eyebrow?: string;
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullSEOPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    seoPageData?: SEOPageData;
  };
}

export interface VibeCodePageData {
  hero: ServicesHeroData;
  overview: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  useCases: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  approach: {
    eyebrow?: string;
    title: string;
    description: string;
    aiPoints: string[];
    humanPoints: string[];
  };
  quality: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullVibeCodePageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    vibeCodePageData?: VibeCodePageData;
  };
}

export interface DigitalMarketingPageData {
  hero: ServicesHeroData;
  services: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  growthFramework: {
    eyebrow?: string;
    title: string;
    description: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  seoConnection: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  analytics: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullDigitalMarketingPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    digitalMarketingPageData?: DigitalMarketingPageData;
  };
}

export interface ChatbotPageData {
  hero: ServicesHeroData;
  useCases: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  integrations: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullChatbotPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    chatbotPageData?: ChatbotPageData;
  };
}

export interface APIIntegrationPageData {
  hero: ServicesHeroData;
  capabilities: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  businessValue: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  faq: {
    eyebrow?: string;
    title: string;
    items: FAQItemData[];
  };
  cta: ServicesCTAData;
}

export interface FullAPIIntegrationPageData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  page?: PageNode & {
    apiIntegrationPageData?: APIIntegrationPageData;
  };
}

/* ==========================================================================
   CASE STUDIES INTERFACES
   ========================================================================== */

export interface CaseStudyItemData {
  id?: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  clientName: string;
  industry: string;
  summary: string;
  servicesRendered: string[];
  technologies: string[];
  challenge: string;
  approach: string;
  implementation: string;
  results: string[];
  lessons?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FullCaseStudiesArchiveData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  hero: ServicesHeroData;
  items: CaseStudyItemData[];
}

export interface FullSingleCaseStudyData {
  generalSettings?: GeneralSettings;
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: {
    nodes: MenuNode[];
  };
  caseStudy: CaseStudyItemData;
}
