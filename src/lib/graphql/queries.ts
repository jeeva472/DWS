/**
 * Centralized WPGraphQL Queries for DigitalWebStudio Next.js Frontend.
 */

export const GET_HOMEPAGE_FULL_DATA = `
query GetHomepageFullData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "home", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
    homepageData {
      hero {
        eyebrow
        heading
        headingHighlight
        headingTag
        description
        btnPrimaryText
        btnPrimaryUrl
        btnSecondaryText
        btnSecondaryUrl
        visualEnabled
      }
      heroBenefits {
        icon
        title
        text
      }
      about {
        eyebrow
        heading
        headingHighlight
        headingTag
        description
        btnPrimaryText
        btnPrimaryUrl
      }
      aboutFeatures {
        icon
        title
        text
      }
      aboutImageUrl
      aboutImageAlt
      services {
        active
        icon
        title
        description
        bullets
        linkUrl
        linkText
      }
      servicesSection {
        eyebrow
        heading
        headingHighlight
        headingTag
        description
      }
      whyChoose {
        icon
        title
        text
      }
      whySection {
        eyebrow
        heading
        headingHighlight
        headingTag
        description
      }
      testimonials {
        active
        name
        role
        company
        text
        rating
        avatarUrl
      }
      testiSection {
        eyebrow
        heading
        headingHighlight
        headingTag
      }
      testiAutoplay
      contactCta {
        eyebrow
        heading
        headingHighlight
        headingTag
        description
      }
      contactFormId
      stats {
        icon
        number
        label
      }
    }
  }
}
`;

export const GET_PAGE_SEO_BY_URI = `
query GetPageSEO($uri: ID!) {
  page(id: $uri, idType: URI) {
    id
    title
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

export const GET_ABOUT_PAGE_FULL_DATA = `
query GetAboutPageFullData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "about-us", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
    aboutPageData {
      hero {
        eyebrow
        title
        description
        ctaText
        ctaUrl
        imageUrl
        imageAlt
      }
      intro {
        eyebrow
        title
        content
        imageUrl
        imageAlt
      }
      approach {
        eyebrow
        title
        description
        steps {
          number
          title
          description
          icon
        }
      }
      values {
        eyebrow
        title
        description
        items {
          number
          title
          description
        }
      }
      technology {
        eyebrow
        title
        description
        items {
          name
          category
          iconKey
        }
      }
      whyUs {
        eyebrow
        title
        description
        items {
          number
          title
          description
        }
      }
      collaboration {
        eyebrow
        title
        text
        imageUrl
        imageAlt
      }
      cta {
        eyebrow
        title
        description
        buttonText
        buttonUrl
      }
    }
  }
}
`;

export const GET_SERVICES_PAGE_FULL_DATA = `
query GetServicesPageFullData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "service", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
    servicesPageData {
      hero {
        eyebrow
        title
        description
        ctaText
        ctaUrl
      }
      intro {
        eyebrow
        title
        description
      }
      services {
        number
        title
        slug
        shortDescription
        description
        icon
        features
        ctaText
        ctaUrl
        imageUrl
        imageAlt
      }
      process {
        eyebrow
        title
        description
        steps {
          number
          title
          description
          icon
        }
      }
      technology {
        eyebrow
        title
        description
        items {
          name
          category
          iconKey
        }
      }
      cta {
        eyebrow
        title
        description
        buttonText
        buttonUrl
      }
    }
  }
}
`;

/**
 * AI Automation Service Page Full Query
 */
export const GET_AI_AUTOMATION_PAGE_DATA = `
query GetAIAutomationPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "ai-automation", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * SEO Service Page Full Query
 */
export const GET_SEO_PAGE_DATA = `
query GetSEOPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "seo", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * Vibe Code Development Service Page Full Query
 */
export const GET_VIBE_CODE_PAGE_DATA = `
query GetVibeCodePageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "vibe-code-development", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * Digital Marketing Service Page Full Query
 */
export const GET_DIGITAL_MARKETING_PAGE_DATA = `
query GetDigitalMarketingPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "digital-marketing", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * Chatbot Development Service Page Full Query
 */
export const GET_CHATBOT_PAGE_DATA = `
query GetChatbotPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "chatbot-development", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * API Integration Service Page Full Query
 */
export const GET_API_INTEGRATION_PAGE_DATA = `
query GetAPIIntegrationPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
  page(id: "api-integration", idType: URI) {
    id
    databaseId
    title
    slug
    uri
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage
      opengraphUrl
      opengraphSiteName
      opengraphType
      twitterTitle
      twitterDescription
      twitterImage
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
}
`;

/**
 * Case Studies Archive Query
 */
export const GET_CASE_STUDIES_PAGE_DATA = `
query GetCaseStudiesPageData {
  generalSettings {
    title
    description
    url
  }
  siteLogo {
    id
    url
    altText
    width
    height
    title
  }
  globalSettings {
    phone
    email
    address
    tagline
    ctaText
    ctaUrl
    footerDescription
    newsletterHeading
    copyrightText
    privacyPolicyUrl
    termsServiceUrl
    social {
      facebook
      linkedin
      instagram
      youtube
      twitter
    }
  }
  menus {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  }
}
`;


