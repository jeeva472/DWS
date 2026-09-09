"use client";

import dynamic from "next/dynamic";

/**
 * Non-blocking Lazy Loader for DigitalWebStudio AI Chatbot.
 * Ensures zero impact on Core Web Vitals, LCP, CLS, or initial page bundle.
 */
const ChatbotWidget = dynamic(
  () => import("./ChatbotWidget").then((mod) => mod.ChatbotWidget),
  {
    ssr: false,
  }
);

export function ChatbotLazyLoader() {
  return <ChatbotWidget />;
}
