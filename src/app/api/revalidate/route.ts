import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * On-Demand Revalidation Endpoint for WordPress Webhook / Headless CMS.
 *
 * Triggered by WordPress on post save or Yoast SEO updates.
 * Updates the Next.js cache immediately without manual redeployment.
 */
export async function POST(req: NextRequest) {
  try {
    let secret = "";
    let path = "/";
    let tag = "wordpress";

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json().catch(() => ({}));
      secret = body.secret || "";
      path = body.path || "/";
      tag = body.tag || "wordpress";
    } else {
      secret = req.nextUrl.searchParams.get("secret") || "";
      path = req.nextUrl.searchParams.get("path") || "/";
      tag = req.nextUrl.searchParams.get("tag") || "wordpress";
    }

    const expectedSecret =
      process.env.WORDPRESS_REVALIDATION_SECRET || "dws_revalidation_secret_2026";

    if (!secret || secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Invalid revalidation secret token" },
        { status: 401 }
      );
    }

    // Revalidate specific path
    if (path) {
      revalidatePath(path);
    }

    // Revalidate tag
    if (tag) {
      revalidateTag(tag, "default");
    }

    return NextResponse.json({
      revalidated: true,
      path,
      tag,
      now: Date.now(),
      message: "Cache successfully revalidated",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { error: "Failed to revalidate cache", details: errorMsg },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
