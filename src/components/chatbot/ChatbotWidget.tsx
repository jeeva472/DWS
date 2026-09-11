"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { BotAvatar } from "./BotAvatar";
import { ChatbotLeadForm } from "./ChatbotLeadForm";
import { trackChatbotOpen, trackChatbotMessageSent } from "@/lib/analytics";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  suggestedQuestions?: string[];
  suggestedLinks?: { label: string; url: string }[];
  showLeadForm?: boolean;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome-msg",
  role: "assistant",
  content: `👋 Hi! I'm the **DigitalWebStudio AI Assistant**.\n\nI can help you explore our **AI automation workflows**, **technical SEO architecture**, **modern Next.js applications**, case studies, or connect directly with our engineering leads.\n\nHow can I help you today?`,
  suggestedQuestions: [
    "What AI automations do you build?",
    "How does Technical SEO work?",
    "What are project timelines?",
    "Get a project quote",
  ],
  suggestedLinks: [
    { label: "Our Services", url: "/services" },
    { label: "Case Studies", url: "/case-studies" },
  ],
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastFirstFold, setIsScrolledPastFirstFold] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll listener to only show chatbot after scrolling past the first fold
  useEffect(() => {
    const handleScroll = () => {
      const threshold = Math.max(window.innerHeight * 0.65, 350);
      setIsScrolledPastFirstFold(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll to bottom of conversation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      trackChatbotOpen();
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  // Load / Save session storage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("dws_chat_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (messages.length > 1) {
        sessionStorage.setItem("dws_chat_history", JSON.stringify(messages));
      }
    } catch {}
  }, [messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isLoading) return;

    trackChatbotMessageSent(messageText.length);
    setHasInteracted(true);
    setInputValue("");

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I am currently unable to process your request.",
        suggestedQuestions: data.suggestedQuestions,
        suggestedLinks: data.suggestedLinks,
        showLeadForm: data.showLeadForm,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const fallbackMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "I encountered a temporary connection issue. You can reach out directly to our engineering team at **contact@digitalwebstudio.in** or WhatsApp **+91 63830 88993**.",
        suggestedLinks: [{ label: "Contact Page", url: "/contact" }],
        showLeadForm: true,
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    try {
      sessionStorage.removeItem("dws_chat_history");
    } catch {}
  };

  // Simple Markdown-like renderer for formatted replies
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return (
      <div className="space-y-1.5 text-xs text-[#e6ece8] leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1" />;

          // Headings (### Title)
          if (line.startsWith("### ")) {
            return (
              <div key={idx} className="font-bold text-white text-sm pt-1 pb-0.5 text-[#9ae64c]">
                {line.replace("### ", "")}
              </div>
            );
          }

          // Bullet points (- Point)
          if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
            const clean = line.trim().replace(/^[-•]\s*/, "");
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] mt-1.5 shrink-0" />
                <span>{renderInlineBold(clean)}</span>
              </div>
            );
          }

          // Standard paragraph line
          return <div key={idx}>{renderInlineBold(line)}</div>;
        })}
      </div>
    );
  };

  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Launcher Trigger (Only appears after scrolling past the first fold) */}
      <div className="fixed bottom-5 right-5 z-40 select-none">
        <AnimatePresence>
          {!isOpen && isScrolledPastFirstFold && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex items-center gap-3 group"
            >
              {/* Interactive Floating Pill Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                onClick={() => setIsOpen(true)}
                className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#08100c]/90 backdrop-blur-xl border border-[#9ae64c]/30 text-xs font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.8)] cursor-pointer hover:border-[#9ae64c]/70 hover:shadow-[0_0_20px_rgba(154,230,76,0.25)] hover:scale-[1.03] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#9ae64c] animate-pulse" />
                <span className="text-[#e2ece7] text-[11px] font-medium tracking-wide">
                  Ask DWS AI
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#9ae64c]/20 border border-[#9ae64c]/30 text-[#9ae64c] text-[9px] font-mono font-bold">
                  Online
                </span>
              </motion.div>

              {/* High-Tech Launcher Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open DigitalWebStudio AI Assistant"
                className="w-14 h-14 sm:w-15 sm:h-15 rounded-full relative flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer group/btn"
              >
                {/* Multi-layered Neon Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9ae64c] via-[#b4fa6c] to-[#5aa018] opacity-75 blur-md group-hover/btn:opacity-100 group-hover/btn:blur-lg transition-all duration-300 animate-pulse" />

                {/* Rotating Conic Border Aura */}
                <div className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_0deg,#9ae64c,#13281d,#9ae64c,#b4fa6c,#13281d,#9ae64c)] animate-[spin_5s_linear_infinite] opacity-70 group-hover/btn:opacity-100 transition-opacity" />

                {/* Button Inner Glass Capsule */}
                <div className="absolute inset-[2.5px] rounded-full bg-gradient-to-b from-[#14261e] via-[#091410] to-[#040907] flex items-center justify-center border border-[#9ae64c]/50 group-hover/btn:border-[#9ae64c] transition-colors shadow-inner overflow-hidden">
                  {/* Subtle Inner Highlight Refraction */}
                  <div className="absolute top-1 inset-x-3 h-3 rounded-full bg-white/[0.12] blur-[1px] pointer-events-none" />

                  {/* Custom High-Tech Bot Avatar */}
                  <BotAvatar
                    size="lg"
                    animated={true}
                    className="transition-transform duration-300 group-hover/btn:scale-110"
                  />
                </div>

                {/* Online Active Status Beacon */}
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#05080a] border-2 border-[#9ae64c] flex items-center justify-center z-10 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-ping" />
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Chat Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-50 w-[calc(100vw-40px)] sm:w-[410px] h-[580px] max-h-[85vh] bg-[#070b0e]/98 backdrop-blur-2xl border border-white/[0.12] rounded-3xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3.5 px-4 bg-gradient-to-r from-[#0d1a15] via-[#09130f] to-[#060a0d] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-b from-[#14261e] to-[#08100c] border border-[#9ae64c]/40 text-[#9ae64c] flex items-center justify-center shadow-[0_0_15px_rgba(154,230,76,0.25)]">
                  <BotAvatar size="md" animated={true} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>DigitalWebStudio AI</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#9ae64c]/20 text-[#9ae64c] font-mono border border-[#9ae64c]/30">
                      v1.0
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7d9287]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-pulse" />
                    <span>Domain-Grounded Assistant</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    type="button"
                    onClick={handleClearChat}
                    title="Reset Conversation"
                    className="p-1.5 rounded-lg text-[#7d9287] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-[#7d9287] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Bubble Container */}
                  <div className="flex items-start gap-2.5 max-w-[90%]">
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-lg bg-[#0d1a15] border border-[#9ae64c]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <BotAvatar size="sm" animated={false} />
                      </div>
                    )}

                    <div
                      className={`p-3 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-[#9ae64c] to-[#7fcd32] text-[#05080a] font-medium text-xs rounded-tr-sm shadow-[0_2px_10px_rgba(154,230,76,0.2)]"
                          : "bg-white/[0.04] border border-white/[0.08] text-white rounded-tl-sm shadow-md"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <div className="text-xs font-semibold">{msg.content}</div>
                      ) : (
                        renderFormattedText(msg.content)
                      )}
                    </div>
                  </div>

                  {/* Inline Suggested Quick Links */}
                  {msg.suggestedLinks && msg.suggestedLinks.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 pl-8">
                      {msg.suggestedLinks.map((link) => (
                        <Link
                          key={link.url}
                          href={link.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-[#9ae64c]/20 border border-white/[0.1] hover:border-[#9ae64c]/40 text-[10px] text-[#9cb1a6] hover:text-[#9ae64c] transition-colors"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Inline Lead Capture Form */}
                  {msg.showLeadForm && (
                    <div className="w-full pl-8 pr-1">
                      <ChatbotLeadForm />
                    </div>
                  )}

                  {/* Suggested Question Chips (Only for latest assistant message) */}
                  {msg.suggestedQuestions &&
                    msg.suggestedQuestions.length > 0 &&
                    msg.id === messages[messages.length - 1].id &&
                    !isLoading && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 pl-8">
                        {msg.suggestedQuestions.map((q, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMessage(q)}
                            className="px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#9ae64c]/40 text-[10px] text-[#7d9287] hover:text-white transition-all text-left flex items-center gap-1 cursor-pointer"
                          >
                            <span>{q}</span>
                            <ArrowRight className="w-2.5 h-2.5 text-[#9ae64c]" />
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 pl-1">
                  <div className="w-6 h-6 rounded-lg bg-[#0d1a15] border border-[#9ae64c]/30 flex items-center justify-center shrink-0 shadow-sm">
                    <BotAvatar size="sm" animated={true} />
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#060a0d] border-t border-white/[0.08]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about AI automation, SEO, web dev..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  maxLength={400}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs placeholder:text-[#556960] focus:outline-none focus:border-[#9ae64c] focus:ring-1 focus:ring-[#9ae64c]/30 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#b4fa6c] to-[#9ae64c] text-[#05080a] disabled:opacity-30 hover:shadow-[0_0_15px_rgba(154,230,76,0.4)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-[9px] text-[#556960] text-center pt-1.5 font-mono">
                Grounded strictly on DigitalWebStudio facts & capabilities
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

