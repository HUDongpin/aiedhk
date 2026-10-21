import { buildAdsTxt, getMonetizationConfig } from "@/lib/monetization";

export const dynamic = "force-dynamic";

export function GET() {
  const content = buildAdsTxt(getMonetizationConfig());
  return new Response(content || "", {
    status: content ? 200 : 404,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
