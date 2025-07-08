import { leads, type Lead, type InsertLead } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values({
        ...insertLead,
        notes: insertLead.notes || null,
        language: insertLead.language || 'he',
      })
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    const allLeads = await db.select().from(leads);
    return allLeads.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getLeadById(id: number): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead || undefined;
  }
}

export const storage = new DatabaseStorage();
