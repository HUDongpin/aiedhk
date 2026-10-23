import assert from "node:assert/strict";
import test from "node:test";
import { postgresConnectionOptions } from "@/lib/db";

test("Neon connections use supported direct TLS while local isolated Postgres stays local", () => {
  const neon = postgresConnectionOptions("postgres://test:example@sample-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");
  assert.equal(neon.ssl, "require");
  assert.equal(neon.sslnegotiation, "direct");
  assert.equal(postgresConnectionOptions("postgres://test@127.0.0.1:5432/test").ssl, false);
  assert.equal(postgresConnectionOptions("postgres://test@[::1]:5432/test").ssl, false);
  assert.equal(postgresConnectionOptions("postgres://test@postgres.example.com/test").sslnegotiation, undefined);
});
