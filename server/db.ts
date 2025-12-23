import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleServerless } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

// Build database URL - in production, construct from PG* env vars to avoid internal hostname issues
function getDatabaseUrl(): string {
  // Check if DATABASE_URL contains internal hostname (helium) that doesn't work in production
  const dbUrl = process.env.DATABASE_URL;
  
  if (process.env.NODE_ENV === "production" || process.env.REPLIT_DEPLOYMENT === "1") {
    // In production, prefer constructing URL from individual PG* variables
    const pgHost = process.env.PGHOST;
    const pgUser = process.env.PGUSER;
    const pgPassword = process.env.PGPASSWORD;
    const pgDatabase = process.env.PGDATABASE;
    const pgPort = process.env.PGPORT || "5432";
    
    if (pgHost && pgUser && pgPassword && pgDatabase && !pgHost.includes("helium")) {
      const constructedUrl = `postgresql://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}?sslmode=require`;
      console.log(`[DB] Production: Using constructed URL with host ${pgHost}`);
      return constructedUrl;
    }
    
    // Fallback to DATABASE_URL if PG* vars not available
    if (dbUrl) {
      console.log("[DB] Production: Using DATABASE_URL");
      return dbUrl;
    }
  }
  
  if (!dbUrl) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }
  
  return dbUrl;
}

const connectionString = getDatabaseUrl();

// Use HTTP mode in production (serverless), WebSocket in development
let db: ReturnType<typeof drizzleHttp<typeof schema>> | ReturnType<typeof drizzleServerless<typeof schema>>;

if (process.env.NODE_ENV === "production" || process.env.REPLIT_DEPLOYMENT === "1") {
  // Production: Use HTTP mode (neon-http) - works better in serverless environments
  const sql = neon(connectionString);
  db = drizzleHttp(sql, { schema });
  console.log("[DB] Using HTTP mode for production");
} else {
  // Development: Use WebSocket mode for better performance
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ 
    connectionString,
    connectionTimeoutMillis: 10000,
  });
  pool.on('error', (err) => {
    console.error('[DB] Unexpected pool error:', err.message);
  });
  db = drizzleServerless(pool, { schema });
  console.log("[DB] Using WebSocket mode for development");
}

export { db };
