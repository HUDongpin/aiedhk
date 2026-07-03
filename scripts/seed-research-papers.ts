import { getDatabaseClient } from "@/lib/db";
import { seedReviewedResearchPapers } from "@/lib/research-seed";

const result = await seedReviewedResearchPapers();

if (result.status === "database_not_configured") {
  console.error("DATABASE_URL is not configured.");
  process.exit(1);
}

console.log(
  `Seeded ${result.seeded} research papers, archived ${result.archived} stale papers, published count ${result.publishedBefore} -> ${result.publishedAfter}.`
);

await getDatabaseClient()?.end();
