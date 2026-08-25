import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/newsletter";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        {
          success: false,
          code: "INVALID_EMAIL",
          message: "Email address is required.",
        },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        {
          success: false,
          code: "CONSENT_REQUIRED",
          message: "Please accept the privacy policy to subscribe.",
        },
        { status: 400 }
      );
    }

    const result = await subscribeToNewsletter(body.email);
    const statusCode = result.success ? 200 : result.code === "NOT_CONFIGURED" ? 503 : 400;

    return NextResponse.json(result, { status: statusCode });
  } catch (error) {
    console.error("API /api/newsletter error:", error);
    return NextResponse.json(
      {
        success: false,
        code: "ERROR",
        message: "An internal server error occurred.",
      },
      { status: 500 }
    );
  }
}
