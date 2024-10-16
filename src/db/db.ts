import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";

// If you are clonning locally add .evn file and DATABASE_CONNECTION connection string.
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);
