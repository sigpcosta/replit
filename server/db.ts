import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleServerless } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";
import ws from "ws";

const isProduction = process.env.NODE_ENV === "production" || process.env.REPLIT_DEPLOYMENT === "1";
const isReplitDeployment = process.env.REPLIT_DEPLOYMENT === "1";

// Check if we have valid database configuration
function hasValidDatabaseConfig(): boolean {
  const dbUrl = process.env.DATABASE_URL;
  const pgHost = process.env.PGHOST;
  
  // Replit deployment can use internal database
  if (isReplitDeployment && dbUrl) {
    return true;
  }
  
  // In production (non-Replit), we need a valid Neon hostname
  if (isProduction && !isReplitDeployment) {
    if (pgHost && pgHost.includes('.neon.tech')) return true;
    if (dbUrl && (dbUrl.includes('.neon.tech') || dbUrl.includes('.neon.aws'))) return true;
    return false;
  }
  
  // In development, any DATABASE_URL works
  return !!dbUrl;
}

// Build database URL with proper error handling
// PRIORITY: Always use NEON_DATABASE_URL if available (single database for dev + prod)
function getDatabaseUrl(): string | null {
  const dbUrl = process.env.DATABASE_URL;
  const neonUrl = process.env.NEON_DATABASE_URL;
  const pgHost = process.env.PGHOST;
  const pgUser = process.env.PGUSER;
  const pgPassword = process.env.PGPASSWORD;
  const pgDatabase = process.env.PGDATABASE;
  const pgPort = process.env.PGPORT || "5432";
  
  console.log(`[DB] Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
  console.log(`[DB] NEON_DATABASE_URL: ${neonUrl ? 'set' : 'not set'}`);
  
  // PRIORITY 1: Always use NEON_DATABASE_URL if available (shared database)
  if (neonUrl && neonUrl.includes('.neon.tech')) {
    console.log("[DB] Using NEON_DATABASE_URL (shared external database)");
    return neonUrl;
  }
  
  // PRIORITY 2: Fallback to internal Replit database
  if (dbUrl) {
    console.log("[DB] Fallback: Using internal DATABASE_URL");
    return dbUrl;
  }
  
  // PRIORITY 3: Construct from PG* vars if available
  if (pgHost && pgUser && pgPassword && pgDatabase) {
    const constructedUrl = `postgresql://${pgUser}:${encodeURIComponent(pgPassword)}@${pgHost}:${pgPort}/${pgDatabase}?sslmode=require`;
    console.log("[DB] Using constructed URL from PG* variables");
    return constructedUrl;
  }
  
  console.warn("[DB] No database configured");
  return null;
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
    // Use WebSocket mode for development and Replit deployment (internal DB)
    // Use HTTP mode only for external production (Netlify with Neon)
    const useWebSocket = !isProduction || isReplitDeployment;
    
    if (useWebSocket) {
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
      console.log("[DB] Initialized with WebSocket mode");
    } else {
      const sql = neon(connectionString);
      db = drizzleHttp(sql, { schema });
      dbAvailable = true;
      console.log("[DB] Initialized with HTTP mode for production");
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
