import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  submissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    website: v.optional(v.string()),
    projectType: v.string(),
    budget: v.string(),
    timeline: v.string(),
    message: v.optional(v.string()),
    status: v.string(), // "pending", "contacted", "completed"
    createdAt: v.number(),
  }),
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
});
