export interface NewsletterConfig {
  mode: "off" | "test" | "live";
  testRecipients: string[];
  origin: string;
  apiKey: string;
  from: string;
  webhookSecret: string;
  sendConfigured: boolean;
  issues: string[];
}

export function readNewsletterConfig(env: Record<string, string | undefined> = process.env): NewsletterConfig {
  const issues: string[] = [];
  const requestedMode = env.NEWSLETTER_DELIVERY_MODE || "off";
  const mode = requestedMode === "test" || requestedMode === "live" ? requestedMode : "off";
  if (!["off", "test", "live"].includes(requestedMode)) issues.push("invalid_delivery_mode");
  const testRecipients = [...new Set((env.NEWSLETTER_TEST_RECIPIENTS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean))];
  if (testRecipients.some((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) issues.push("invalid_test_recipient");
  const candidate = env.NEWSLETTER_PUBLIC_ORIGIN || (env.VERCEL_ENV === "preview" && env.VERCEL_URL ? `https://${env.VERCEL_URL}` : "https://www.aied.hk");
  let origin = "https://www.aied.hk";
  try {
    const url = new URL(candidate);
    const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if ((url.protocol !== "https:" && !(local && url.protocol === "http:" && env.VERCEL_ENV !== "production"))
      || url.username || url.password || url.pathname !== "/" || url.search || url.hash) throw new Error("origin");
    origin = url.origin;
  } catch { issues.push("invalid_public_origin"); }
  const apiKey = env.RESEND_API_KEY?.trim() ?? "";
  const from = env.NEWSLETTER_FROM?.trim() ?? "";
  const webhookSecret = env.RESEND_WEBHOOK_SECRET?.trim() ?? "";
  if (!env.NEWSLETTER_DATABASE_URL && !env.DATABASE_URL) issues.push("newsletter_database_not_configured");
  if (!apiKey || !from || /[\r\n]/.test(from)) issues.push("email_provider_not_configured");
  if (mode === "test" && !testRecipients.length) issues.push("test_recipients_required");
  if (mode === "live" && !webhookSecret) issues.push("webhook_secret_required");
  return { mode, testRecipients, origin, apiKey, from, webhookSecret, issues, sendConfigured: mode !== "off" && issues.length === 0 };
}

export function recipientAllowed(config: Pick<NewsletterConfig, "mode" | "testRecipients">, email: string) {
  return config.mode === "live" || (config.mode === "test" && config.testRecipients.includes(email.trim().toLowerCase()));
}
