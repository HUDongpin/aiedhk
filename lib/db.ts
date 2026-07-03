import postgres from "postgres";

type DatabaseClient = ReturnType<typeof postgres>;

let cachedClient: DatabaseClient | null = null;

function shouldUseSsl(connectionString: string) {
  try {
    const url = new URL(connectionString);
    return !["localhost", "127.0.0.1", "::1"].includes(url.hostname);
  } catch {
    return true;
  }
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
      ssl: shouldUseSsl(connectionString) ? "require" : false,
    });
  }

  return cachedClient;
}
