import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 255 }),
  completed: boolean().notNull().default(false),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
