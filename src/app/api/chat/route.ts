import { NextRequest, NextResponse } from "next/server";
import { processChatQuery } from "@/lib/chatbot/searchEngine";

// Simple in-memory sliding window rate limiter for abuse prevention
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 25; // max 25 queries per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          reply:
            "You are sending queries too quickly. Please wait a minute before asking another question.",
          isOutOfScope: true,
          isHighIntent: false,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const rawMessage = typeof body.message === "string" ? body.message : "";
    const sanitizedMessage = rawMessage.trim().slice(0, 500);

    if (!sanitizedMessage) {
      return NextResponse.json(
        {
          error: "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    const response = processChatQuery(sanitizedMessage);

    return NextResponse.json(response);
  } catch (error: unknown) {
    console.error("[Chatbot API Error]", error);
    return NextResponse.json(
      {
        reply:
          "I encountered a temporary glitch while processing your request. Please try again or reach out to our team at contact@digitalwebstudio.in.",
        isOutOfScope: false,
        isHighIntent: false,
      },
      { status: 500 }
    );
  }
}
