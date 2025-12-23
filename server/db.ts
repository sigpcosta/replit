import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleServerless } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

const isProduction = process.env.NODE_ENV === "production" || process.env.REPLIT_DEPLOYMENT === "1";

// Check if we have valid database configuration
function hasValidDatabaseConfig(): boolean {
  const dbUrl = process.env.DATABASE_URL;
  const pgHost = process.env.PGHOST;
  
  // In production, we need a valid Neon hostname
  if (isProduction) {
    // Check if we have Neon-style hostname
    if (pgHost && pgHost.includes('.neon.tech')) return true;
    if (dbUrl && (dbUrl.includes('.neon.tech') || dbUrl.includes('.neon.aws'))) return true;
    // Internal hostnames like "helium" won't work in production
    return false;
  }
  
  // In development, any DATABASE_URL works
  return !!dbUrl;
}

// Build database URL with proper error handling
function getDatabaseUrl(): string | null {
  const dbUrl = process.env.DATABASE_URL;
  const neonUrl = process.env.NEON_DATABASE_URL;
  const pgHost = process.env.PGHOST;
  const pgUser = process.env.PGUSER;
  const pgPassword = process.env.PGPASSWORD;
  const pgDatabase = process.env.PGDATABASE;
  const pgPort = process.env.PGPORT || "5432";
  
  console.log(`[DB] Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
  console.log(`[DB] PGHOST: ${pgHost || 'not set'}`);
  console.log(`[DB] NEON_DATABASE_URL: ${neonUrl ? 'set' : 'not set'}`);
  
  // In production, require valid Neon hostname
  if (isProduction) {
    // First check custom NEON_DATABASE_URL (for external Neon database)
    if (neonUrl && neonUrl.includes('.neon.tech')) {
      console.log("[DB] Production: Using NEON_DATABASE_URL");
      return neonUrl;
    }
    
    if (pgHost && pgHost.includes('.neon.tech') && pgUser && pgPassword && pgDatabase) {
      const constructedUrl = `postgresql://${pgUser}:${encodeURIComponent(pgPassword)}@${pgHost}:${pgPort}/${pgDatabase}?sslmode=require`;
      console.log(`[DB] Production: Using Neon host`);
      return constructedUrl;
    }
    
    if (dbUrl && (dbUrl.includes('.neon.tech') || dbUrl.includes('.neon.aws'))) {
      console.log("[DB] Production: Using DATABASE_URL with Neon domain");
      return dbUrl;
    }
    
    // No valid production database - return null (app will run without DB)
    console.warn("[DB] Production: No valid Neon database configured. App will run without database.");
    return null;
  }
  
  // Development mode
  if (!dbUrl) {
    console.warn("[DB] Development: No DATABASE_URL set");
    return null;
  }
  
  return dbUrl;
}

// Database instance - may be null if no valid database is configured
let db: ReturnType<typeof drizzleHttp<typeof schema>> | ReturnType<typeof drizzleServerless<typeof schema>> | null = null;
let dbAvailable = false;

function initializeDatabase() {
  const connectionString = getDatabaseUrl();
  
  if (!connectionString) {
    console.log("[DB] No database connection - app will run with limited functionality");
    return;
  }
  
  try {
    if (isProduction) {
      const sql = neon(connectionString);
      db = drizzleHttp(sql, { schema });
      dbAvailable = true;
      console.log("[DB] Initialized with HTTP mode for production");
    } else {
      neonConfig.webSocketConstructor = ws;
      const pool = new Pool({ 
        connectionString,
        connectionTimeoutMillis: 10000,
      });
      pool.on('error', (err) => {
        console.error('[DB] Pool error:', err.message);
      });
      db = drizzleServerless(pool, { schema });
      dbAvailable = true;
      console.log("[DB] Initialized with WebSocket mode for development");
    }
  } catch (error) {
    console.error("[DB] Failed to initialize database:", error);
    db = null;
    dbAvailable = false;
  }
}

// Initialize on module load
initializeDatabase();

// Helper to check if database is available
function isDatabaseAvailable(): boolean {
  return dbAvailable && db !== null;
}

export { db, isDatabaseAvailable };
