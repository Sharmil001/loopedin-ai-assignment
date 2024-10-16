import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

// Define a users table with ORM (Drizzle)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  age: integer("age"),
  gender: varchar("gender"),
});
