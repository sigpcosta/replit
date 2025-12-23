import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleServerless } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

// Use HTTP mode in production (serverless), WebSocket in development
let db: ReturnType<typeof drizzleHttp<typeof schema>> | ReturnType<typeof drizzleServerless<typeof schema>>;

if (process.env.NODE_ENV === "production") {
  // Production: Use HTTP mode (neon-http) - works better in serverless environments
  const sql = neon(process.env.DATABASE_URL);
  db = drizzleHttp(sql, { schema });
  console.log("[DB] Using HTTP mode for production");
} else {
  // Development: Use WebSocket mode for better performance
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 10000,
  });
  pool.on('error', (err) => {
    console.error('[DB] Unexpected pool error:', err.message);
  });
  db = drizzleServerless(pool, { schema });
  console.log("[DB] Using WebSocket mode for development");
}

export { db };
