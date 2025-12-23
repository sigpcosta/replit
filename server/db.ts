import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleServerless } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

const isProduction = process.env.NODE_ENV === "production" || process.env.REPLIT_DEPLOYMENT === "1";

// Build database URL with proper error handling
function getDatabaseUrl(): string {
  const dbUrl = process.env.DATABASE_URL;
  const pgHost = process.env.PGHOST;
  const pgUser = process.env.PGUSER;
  const pgPassword = process.env.PGPASSWORD;
  const pgDatabase = process.env.PGDATABASE;
  const pgPort = process.env.PGPORT || "5432";
  
  console.log(`[DB] Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
  console.log(`[DB] PGHOST available: ${!!pgHost}, ends with .neon.tech: ${pgHost?.includes('.neon.tech') || false}`);
  
  // In production, try to use a valid external hostname
  if (isProduction) {
    // Check if PGHOST has a valid external domain (.neon.tech)
    if (pgHost && pgHost.includes('.neon.tech') && pgUser && pgPassword && pgDatabase) {
      const constructedUrl = `postgresql://${pgUser}:${encodeURIComponent(pgPassword)}@${pgHost}:${pgPort}/${pgDatabase}?sslmode=require`;
      console.log(`[DB] Production: Using Neon host ${pgHost}`);
      return constructedUrl;
    }
    
    // Check if DATABASE_URL has a valid external domain
    if (dbUrl && (dbUrl.includes('.neon.tech') || dbUrl.includes('.neon.aws'))) {
      console.log("[DB] Production: Using DATABASE_URL with valid Neon domain");
      return dbUrl;
    }
    
    // Log warning if using potentially internal hostname
    if (dbUrl) {
      const urlHost = dbUrl.match(/@([^:\/]+)/)?.[1] || 'unknown';
      console.warn(`[DB] Warning: DATABASE_URL host "${urlHost}" may be internal. Using anyway.`);
      return dbUrl;
    }
  }
  
  if (!dbUrl) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }
  
  return dbUrl;
}

let connectionString: string;
try {
  connectionString = getDatabaseUrl();
} catch (error) {
  console.error("[DB] Failed to get database URL:", error);
  throw error;
}

// Use HTTP mode in production (serverless), WebSocket in development
let db: ReturnType<typeof drizzleHttp<typeof schema>> | ReturnType<typeof drizzleServerless<typeof schema>>;

try {
  if (isProduction) {
    // Production: Use HTTP mode (neon-http) - works better in serverless environments
    const sql = neon(connectionString);
    db = drizzleHttp(sql, { schema });
    console.log("[DB] Initialized with HTTP mode for production");
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
    console.log("[DB] Initialized with WebSocket mode for development");
  }
} catch (error) {
  console.error("[DB] Failed to initialize database:", error);
  throw error;
}

export { db };
