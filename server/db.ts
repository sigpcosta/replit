import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

// Configure WebSocket for Neon serverless
neonConfig.webSocketConstructor = ws;

// Use fetch connection pooling in production for better reliability
if (process.env.NODE_ENV === "production") {
  neonConfig.fetchConnectionCache = true;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

// Create pool with error handling
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000,
});

// Handle pool errors gracefully
pool.on('error', (err) => {
  console.error('[DB] Unexpected pool error:', err.message);
});

export const db = drizzle(pool, { schema });
