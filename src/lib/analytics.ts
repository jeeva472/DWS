/**
 * Production-Ready Analytics & Lead Event Tracking Utility
 * Supports Google Tag Manager (dataLayer) and Google Analytics 4 (gtag.js).
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface LeadAttribution {
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

/**
 * Extracts URL attribution & UTM parameters in the browser without exposing secrets.
 */
export function getLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") {
    return {
      landingPage: "/",
      referrer: "",
    };
  }

  const urlParams = new URLSearchParams(window.location.search);

  return {
    landingPage: window.location.pathname,
    referrer: document.referrer || "",
    utmSource: urlParams.get("utm_source") || undefined,
    utmMedium: urlParams.get("utm_medium") || undefined,
    utmCampaign: urlParams.get("utm_campaign") || undefined,
    utmTerm: urlParams.get("utm_term") || undefined,
    utmContent: urlParams.get("utm_content") || undefined,
  };
}

/**
 * Generic safe event dispatcher to GTM dataLayer or GA4 gtag.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to GTM dataLayer if present
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // Call GA4 gtag if present
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Event] ${eventName}:`, eventPayload);
  }
}

/**
 * Lead Generation Events
 */
export function trackLeadSubmission(data: {
  service: string;
  budget?: string;
  timeline?: string;
  formLocation: string;
}) {
  const attribution = getLeadAttribution();
  trackEvent("generate_lead", {
    service_interest: data.service,
    budget_range: data.budget,
    timeline: data.timeline,
    form_location: data.formLocation,
    ...attribution,
  });
  trackEvent("contact_form_submit", {
    service: data.service,
    form_location: data.formLocation,
  });
}

export function trackContactFormStart(formLocation: string) {
  trackEvent("contact_form_start", {
    form_location: formLocation,
    landing_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * CTA & Interaction Events
 */
export function trackCTAClick(ctaText: string, destination: string, location: string) {
  trackEvent("click_cta", {
    cta_text: ctaText,
    destination_url: destination,
    click_location: location,
  });
}

export function trackPrimaryCTA(ctaText: string, location: string) {
  trackEvent("click_primary_cta", {
    cta_text: ctaText,
    click_location: location,
  });
}

export function trackServiceCTA(serviceName: string, ctaText: string, location: string) {
  trackEvent("click_service_cta", {
    service_name: serviceName,
    cta_text: ctaText,
    click_location: location,
  });
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent("click_phone", {
    phone_number: phoneNumber,
    page_location: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

export function trackEmailClick(emailAddress: string) {
  trackEvent("click_email", {
    email_address: emailAddress,
    page_location: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

export function trackCaseStudyView(slug: string, title?: string) {
  trackEvent("view_case_study", {
    case_study_slug: slug,
    case_study_title: title,
  });
}
