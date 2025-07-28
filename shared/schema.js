import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const leads = pgTable("leads", {
    id: serial("id").primaryKey(),
    fullName: text("full_name").notNull(),
    phone: text("phone").notNull(),
    city: text("city").notNull(),
    serviceType: text("service_type").notNull(),
    notes: text("notes"),
    language: text("language").notNull().default("he"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const insertLeadSchema = createInsertSchema(leads).pick({
    fullName: true,
    phone: true,
    city: true,
    serviceType: true,
    notes: true,
    language: true,
});
