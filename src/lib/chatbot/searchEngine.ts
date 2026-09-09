import { KNOWLEDGE_BASE, COMPANY_INFO, KnowledgeItem } from "./knowledgeBase";

export interface ChatResponse {
  reply: string;
  isOutOfScope: boolean;
  isHighIntent: boolean;
  suggestedQuestions?: string[];
  suggestedLinks?: { label: string; url: string }[];
  showLeadForm?: boolean;
}

// Common English stop words to strip before scoring
const STOP_WORDS = new Set([
  "a",
  "about",
  "above",
  "after",
  "again",
  "against",
  "all",
  "am",
  "an",
  "and",
  "any",
  "are",
  "aren't",
  "as",
  "at",
  "be",
  "because",
  "been",
  "before",
  "being",
  "below",
  "between",
  "both",
  "but",
  "by",
  "can",
  "can't",
  "cannot",
  "could",
  "couldn't",
  "did",
  "didn't",
  "do",
  "does",
  "doesn't",
  "doing",
  "don't",
  "down",
  "during",
  "each",
  "few",
  "for",
  "from",
  "further",
  "had",
  "hadn't",
  "has",
  "hasn't",
  "have",
  "haven't",
  "having",
  "he",
  "he'd",
  "he'll",
  "he's",
  "her",
  "here",
  "here's",
  "hers",
  "herself",
  "him",
  "himself",
  "his",
  "how",
  "how's",
  "i",
  "i'd",
  "i'll",
  "i'm",
  "i've",
  "if",
  "in",
  "into",
  "is",
  "isn't",
  "it",
  "it's",
  "its",
  "itself",
  "let's",
  "me",
  "more",
  "most",
  "mustn't",
  "my",
  "myself",
  "no",
  "nor",
  "not",
  "of",
  "off",
  "on",
  "once",
  "only",
  "or",
  "other",
  "ought",
  "our",
  "ours",
  "ourselves",
  "out",
  "over",
  "own",
  "same",
  "shan't",
  "she",
  "she'd",
  "she'll",
  "she's",
  "should",
  "shouldn't",
  "so",
  "some",
  "such",
  "than",
  "that",
  "that's",
  "the",
  "their",
  "theirs",
  "them",
  "themselves",
  "then",
  "there",
  "there's",
  "these",
  "they",
  "they'd",
  "they'll",
  "they're",
  "they've",
  "this",
  "those",
  "through",
  "to",
  "too",
  "under",
  "until",
  "up",
  "very",
  "was",
  "wasn't",
  "we",
  "we'd",
  "we'll",
  "we're",
  "we've",
  "were",
  "weren't",
  "what",
  "what's",
  "when",
  "when's",
  "where",
  "where's",
  "which",
  "while",
  "who",
  "who's",
  "whom",
  "why",
  "why's",
  "with",
  "won't",
  "would",
  "wouldn't",
  "you",
  "you'd",
  "you'll",
  "you're",
  "you've",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "tell",
  "give",
  "show",
  "please",
]);

// Out-of-scope intent triggers
const OUT_OF_SCOPE_PATTERNS = [
  /\b(weather|temperature|forecast|rain|sunny|climate)\b/i,
  /\b(president|election|politics|government|prime minister|war|treaty)\b/i,
  /\b(recipe|cook|baking|ingredients|calories|nutrition|diet)\b/i,
  /\b(joke|funny|riddle|humor|pun|poem|story|song|lyrics)\b/i,
  /\b(movie|cinema|actor|celebrity|oscar|hollywood|netflix|anime)\b/i,
  /\b(sports|cricket|football|nba|messi|ronaldo|ipl|fifa)\b/i,
  /\b(crypto|bitcoin|ethereum|dogecoin|forex trading|stock prediction)\b/i,
  /\b(general knowledge|who was|capital of|distance to|how many planets)\b/i,
  /\b(write a (python|java|c\+\+|rust|php) (program|script|algorithm|quicksort|binary search|fibonacci))\b/i,
  /\b(solve this (math|calculus|equation|algebra|integral))\b/i,
];

// High-intent purchase / inquiry triggers
const HIGH_INTENT_PATTERNS = [
  /\b(price|pricing|cost|how much|estimate|quote|rate|fee|budget|investment)\b/i,
  /\b(hire|start a project|book a call|schedule|consultation|talk to team|work together|get started)\b/i,
  /\b(proposal|timeline|how long|turnaround|delivery time|availability)\b/i,
  /\b(contact|email address|phone number|whatsapp|meet)\b/i,
];

// Unlisted / Non-Offered Service detection
const UNLISTED_SERVICE_PATTERNS = [
  {
    regex: /\b(ios|android|swift|kotlin|flutter|react native|mobile app)\b/i,
    service: "Native iOS / Android Mobile App Development",
    alternative:
      "We specialize in high-performance Progressive Web Apps (PWAs) and ultra-fast responsive Next.js web applications, but we do not develop native Swift/Kotlin iOS/Android apps.",
  },
  {
    regex: /\b(hardware|laptop repair|pc repair|printer|physical network|cctv)\b/i,
    service: "Hardware / IT Field Support",
    alternative:
      "We are a software engineering and digital systems agency. We do not provide physical hardware or on-site computer repair.",
  },
  {
    regex: /\b(print|brochure|business card|banner printing|merchandise)\b/i,
    service: "Physical Print Design & Printing",
    alternative:
      "Our design engineering is focused entirely on digital UI/UX, conversion web design, and digital brand assets.",
  },
  {
    regex: /\b(black hat|buy backlinks|pbn|link farm|spam links)\b/i,
    service: "Black-Hat Link Schemes",
    alternative:
      "We strictly adhere to Google Search Essentials and white-hat technical SEO, structured data, and organic search architecture.",
  },
];

/**
 * Tokenize and normalize user text
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

/**
 * Out-of-Scope Classification
 */
export function checkOutOfScope(message: string): boolean {
  for (const pattern of OUT_OF_SCOPE_PATTERNS) {
    if (pattern.test(message)) {
      return true;
    }
  }
  return false;
}

/**
 * High-Intent Lead Classification
 */
export function checkHighIntent(message: string): boolean {
  for (const pattern of HIGH_INTENT_PATTERNS) {
    if (pattern.test(message)) {
      return true;
    }
  }
  return false;
}

/**
 * Search the Knowledge Base using BM25-style keyword frequency scoring
 */
export function searchKnowledgeBase(
  query: string
): { item: KnowledgeItem; score: number }[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return [];
  }

  const results: { item: KnowledgeItem; score: number }[] = [];

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;

    // Check title match (high weight)
    const titleTokens = tokenize(item.title);
    for (const token of queryTokens) {
      if (titleTokens.includes(token)) {
        score += 8;
      }
    }

    // Check keywords match (very high weight)
    for (const kw of item.keywords) {
      const kwTokens = tokenize(kw);
      const matchesAll = kwTokens.every((t) => queryTokens.includes(t));
      if (matchesAll && kwTokens.length > 0) {
        score += 12 * kwTokens.length;
      } else {
        for (const t of kwTokens) {
          if (queryTokens.includes(t)) {
            score += 3;
          }
        }
      }
    }

    // Check summary & details match
    const summaryTokens = tokenize(item.summary);
    for (const token of queryTokens) {
      if (summaryTokens.includes(token)) {
        score += 2;
      }
    }

    for (const detail of item.details) {
      const detailTokens = tokenize(detail);
      for (const token of queryTokens) {
        if (detailTokens.includes(token)) {
          score += 1.5;
        }
      }
    }

    if (score > 0) {
      results.push({ item, score });
    }
  }

  // Sort descending by score
  results.sort((a, b) => b.score - a.score);
  return results;
}

/**
 * Generate a Grounded, Scoped Response
 */
export function processChatQuery(message: string): ChatResponse {
  const cleanMsg = message.trim();

  // 1. Basic greeting / hello handling
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|namaste)\b/i.test(cleanMsg) && cleanMsg.length < 25) {
    return {
      reply: `Hello! I am the **${COMPANY_INFO.name} AI Assistant**.\n\nI can help you explore our **AI automation workflows**, **technical SEO architecture**, **modern Next.js development**, case studies, or schedule a direct consultation with our engineering leads.\n\nHow can I help your business today?`,
      isOutOfScope: false,
      isHighIntent: false,
      suggestedQuestions: [
        "What AI automations do you build?",
        "How does your Technical SEO service work?",
        "What are your typical project timelines?",
        "How can I get a project quote?",
      ],
      suggestedLinks: [
        { label: "Our Services", url: "/services" },
        { label: "Case Studies", url: "/case-studies" },
        { label: "Contact Us", url: "/contact" },
      ],
    };
  }

  // 2. Strict Out-of-Scope Guardrail Check
  if (checkOutOfScope(cleanMsg)) {
    return {
      reply: `I am specialized exclusively in **${COMPANY_INFO.name}** services, technologies, and digital engineering.\n\nI do not answer questions regarding general topics, news, weather, or unrelated code.\n\nFeel free to ask me about our **AI Automations**, **Technical SEO**, **Headless Web Development**, or **Case Studies**!`,
      isOutOfScope: true,
      isHighIntent: false,
      suggestedQuestions: [
        "What services does DigitalWebStudio offer?",
        "Tell me about your AI automation pipelines",
        "How fast are your Next.js web applications?",
      ],
      suggestedLinks: [
        { label: "Explore Capabilities", url: "/services" },
        { label: "Start a Project", url: "/contact" },
      ],
    };
  }

  // 3. Unlisted / Non-Offered Service Guardrail Check
  for (const unlisted of UNLISTED_SERVICE_PATTERNS) {
    if (unlisted.regex.test(cleanMsg)) {
      return {
        reply: `**${unlisted.service}** is not a service currently offered by **${COMPANY_INFO.name}**.\n\n${unlisted.alternative}\n\nWould you like to explore our core digital services or talk with our team to discuss your project requirements?`,
        isOutOfScope: false,
        isHighIntent: false,
        suggestedQuestions: [
          "What web development services do you provide?",
          "Can you build an AI chatbot for my site?",
          "Talk to engineering team",
        ],
        suggestedLinks: [
          { label: "View All Services", url: "/services" },
          { label: "Contact Us", url: "/contact" },
        ],
      };
    }
  }

  // 4. Intent & Knowledge Retrieval
  const isHighIntent = checkHighIntent(cleanMsg);
  const searchResults = searchKnowledgeBase(cleanMsg);

  if (searchResults.length === 0) {
    // Fallback when query is in-scope in tone but doesn't match any specific knowledge keyword
    return {
      reply: `I couldn't find a direct match for that specific inquiry in our current knowledge base.\n\n**${COMPANY_INFO.name}** provides:\n- **AI Automations & LLM Pipelines** (n8n, Make, CRM sync)\n- **Technical SEO Systems** (Core Web Vitals, Schema, Organic rankings)\n- **Modern Web Development** (Headless WordPress, Next.js App Router)\n- **API Integrations & Custom Chatbots**\n\nYou can submit your project requirements below, or contact our team directly at **${COMPANY_INFO.email}** or WhatsApp at **${COMPANY_INFO.phone}**.`,
      isOutOfScope: false,
      isHighIntent: true,
      showLeadForm: true,
      suggestedQuestions: [
        "Tell me about AI automation workflows",
        "What are your typical project timelines?",
        "How much does a project cost?",
      ],
      suggestedLinks: [
        { label: "Explore Services", url: "/services" },
        { label: "Schedule Consultation", url: "/contact" },
      ],
    };
  }

  // Retrieve top matching knowledge items (max 2 for crisp concise answers)
  const topMatches = searchResults.slice(0, 2);
  const primary = topMatches[0].item;

  let formattedReply = `### ${primary.title}\n\n${primary.summary}\n\n`;

  if (primary.details && primary.details.length > 0) {
    formattedReply += `**Key Highlights:**\n`;
    for (const point of primary.details) {
      formattedReply += `- ${point}\n`;
    }
    formattedReply += `\n`;
  }

  // If high intent, append lead conversion prompt
  if (isHighIntent) {
    formattedReply += `⚡ **Ready to get started?** Fill out the quick consultation card below and our technical leads will review your requirements and send a tailored proposal within 24 hours.`;
  }

  // Collect links and follow-up suggestions
  const links: { label: string; url: string }[] = [];
  if (primary.links) {
    links.push(...primary.links);
  }
  if (!links.some((l) => l.url === "/contact")) {
    links.push({ label: "Talk to Us", url: "/contact" });
  }

  const suggestedQuestions: string[] = [];
  if (primary.category === "service") {
    suggestedQuestions.push(
      "What are the project timelines?",
      "Can I see a case study?",
      "How can I get a quote?"
    );
  } else if (primary.category === "case-study") {
    suggestedQuestions.push(
      "What services were used in this case study?",
      "How long did this project take?",
      "Start a similar project"
    );
  } else {
    suggestedQuestions.push(
      "What services do you offer?",
      "Tell me about your engineering process",
      "Get a project estimate"
    );
  }

  return {
    reply: formattedReply.trim(),
    isOutOfScope: false,
    isHighIntent,
    showLeadForm: isHighIntent,
    suggestedQuestions: suggestedQuestions.slice(0, 3),
    suggestedLinks: links.slice(0, 3),
  };
}
