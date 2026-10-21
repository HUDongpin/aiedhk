type Environment = Record<string, string | undefined>;

export interface SupportConfig { url: string }
export interface AdSenseConfig { publisherId: string; slot: string }
export interface GammaConfig { url: string; reviewedPaths: string[] }
export interface MonetizationConfig {
  support: SupportConfig | null;
  publisherId: string | null;
  ads: AdSenseConfig | null;
  gamma: GammaConfig | null;
  trackClicks: boolean;
}

function httpsUrl(value: string | undefined): URL | null {
  try {
    const url = new URL(value?.trim() || "");
    if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
    return url;
  } catch { return null; }
}

// These are public integration identifiers, never payment credentials. Flags are
// deliberately independent: a verified publisher ID may be used for review while
// ad serving remains off. Changes require a rebuild/redeployment of static pages.
export function getMonetizationConfig(env: Environment = process.env): MonetizationConfig {
  const coffee = httpsUrl(env.BUY_ME_A_COFFEE_URL);
  const support = env.SUPPORT_ENABLED === "true" && coffee
    && ["buymeacoffee.com", "www.buymeacoffee.com"].includes(coffee.hostname)
    && /^\/[a-zA-Z0-9_-]{2,50}\/?$/.test(coffee.pathname)
    ? { url: coffee.href } : null;

  const candidate = env.ADSENSE_PUBLISHER_ID?.trim() || "";
  const publisherId = /^ca-pub-\d{16}$/.test(candidate) && candidate !== "ca-pub-0000000000000000" ? candidate : null;
  const slot = env.ADSENSE_HOME_SLOT?.trim() || "";
  const ads = env.ADSENSE_ENABLED === "true" && env.ADSENSE_CONSENT_READY === "true"
    && publisherId && /^\d{10}$/.test(slot) && slot !== "0000000000"
    ? { publisherId, slot } : null;

  const referral = httpsUrl(env.GAMMA_AFFILIATE_URL);
  const reviewedPaths = [...new Set((env.GAMMA_REVIEWED_PATHS || "").split(",")
    .map((path) => path.trim()).filter((path) => /^(news|academy)\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(path)))];
  const gamma = env.GAMMA_AFFILIATE_ENABLED === "true" && referral && reviewedPaths.length > 0
    ? { url: referral.href, reviewedPaths } : null;

  return { support, publisherId, ads, gamma, trackClicks: env.MONETIZATION_ANALYTICS_ENABLED === "true" };
}

export function gammaForArticle(config: MonetizationConfig, section: "news" | "academy", slug: string) {
  return config.gamma?.reviewedPaths.includes(`${section}/${slug}`) ? config.gamma : null;
}

export function buildAdsTxt(config: MonetizationConfig): string | null {
  return config.publisherId ? `google.com, ${config.publisherId.slice(3)}, DIRECT, f08c47fec0942fa0\n` : null;
}
