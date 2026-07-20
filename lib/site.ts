export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.aied.hk").replace(/\/+$/, "");

export function absoluteUrl(path = "") {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${suffix === "/" ? "" : suffix}`;
}
