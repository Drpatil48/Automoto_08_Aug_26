export type SubscribeCode =
  | "SUCCESS"
  | "NOT_CONFIGURED"
  | "ALREADY_SUBSCRIBED"
  | "INVALID_EMAIL"
  | "ERROR";

export type SubscribeResult = {
  success: boolean;
  code: SubscribeCode;
  message: string;
};

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const trimmedEmail = email.trim().toLowerCase();
  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      success: false,
      code: "INVALID_EMAIL",
      message: "Please enter a valid email address.",
    };
  }

  const provider = process.env.NEWSLETTER_PROVIDER?.toLowerCase().trim();
  const apiKey = process.env.NEWSLETTER_API_KEY?.trim();
  const listId = process.env.NEWSLETTER_LIST_ID?.trim();
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL?.trim();

  if (!provider) {
    return {
      success: false,
      code: "NOT_CONFIGURED",
      message:
        "Newsletter subscriptions are not enabled yet. An email service provider (such as Brevo or Mailchimp) must be configured in system settings.",
    };
  }

  try {
    if (provider === "brevo") {
      if (!apiKey) {
        return {
          success: false,
          code: "NOT_CONFIGURED",
          message: "Brevo API key is missing from environment settings.",
        };
      }
      const listIds = listId ? [parseInt(listId, 10)] : [1];
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          listIds,
          updateEnabled: true,
        }),
      });

      if (res.ok) {
        return {
          success: true,
          code: "SUCCESS",
          message: "Thank you for subscribing to AutomotoNews updates!",
        };
      }

      const errData = await res.json().catch(() => null);
      if (errData?.code === "duplicate_parameter") {
        return {
          success: true,
          code: "ALREADY_SUBSCRIBED",
          message: "You are already subscribed to our newsletter.",
        };
      }

      return {
        success: false,
        code: "ERROR",
        message: errData?.message || "Failed to subscribe. Please try again later.",
      };
    }

    if (provider === "mailchimp") {
      if (!apiKey || !listId) {
        return {
          success: false,
          code: "NOT_CONFIGURED",
          message: "Mailchimp API key or List ID is missing from environment settings.",
        };
      }

      const dc = apiKey.split("-")[1] || "us1";
      const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: trimmedEmail,
          status: "subscribed",
        }),
      });

      if (res.ok) {
        return {
          success: true,
          code: "SUCCESS",
          message: "Thank you for subscribing to AutomotoNews updates!",
        };
      }

      const errData = await res.json().catch(() => null);
      if (errData?.title === "Member Exists") {
        return {
          success: true,
          code: "ALREADY_SUBSCRIBED",
          message: "You are already subscribed to our newsletter.",
        };
      }

      return {
        success: false,
        code: "ERROR",
        message: errData?.detail || "Failed to subscribe. Please try again later.",
      };
    }

    if (provider === "webhook" && webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          subscribedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        return {
          success: true,
          code: "SUCCESS",
          message: "Thank you for subscribing to AutomotoNews updates!",
        };
      }

      return {
        success: false,
        code: "ERROR",
        message: "Webhook newsletter delivery returned an error.",
      };
    }

    return {
      success: false,
      code: "NOT_CONFIGURED",
      message: `Unsupported or incomplete newsletter provider settings for provider '${provider}'.`,
    };
  } catch (error) {
    console.error("Newsletter service error:", error);
    return {
      success: false,
      code: "ERROR",
      message: "An unexpected network error occurred. Please try again.",
    };
  }
}
