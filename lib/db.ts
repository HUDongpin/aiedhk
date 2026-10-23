import postgres from "postgres";

type DatabaseClient = ReturnType<typeof postgres>;

let cachedClient: DatabaseClient | null = null;

export function postgresConnectionOptions(connectionString: string) {
  const host = new URL(connectionString).hostname;
  const local = ["localhost", "127.0.0.1", "::1", "[::1]"].includes(host);
  return {
    ssl: local ? false as const : "require" as const,
    // Verified against the project's Neon endpoint: direct TLS works where
    // traditional PostgreSQL SSLRequest negotiation stalls on the local route.
    sslnegotiation: host.endsWith(".neon.tech") ? "direct" : undefined,
    connect_timeout: 15,
    idle_timeout: 20,
  };
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getDatabaseClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = postgres(connectionString, {
      max: 1,
      ...postgresConnectionOptions(connectionString),
    });
  }

  return cachedClient;
}
