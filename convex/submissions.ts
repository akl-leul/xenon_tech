import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createSubmission = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    website: v.optional(v.string()),
    projectType: v.string(),
    budget: v.string(),
    timeline: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("submissions", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
    return submissionId;
  },
});

export const getSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db.query("submissions").order("desc").collect();
  },
});

export const createContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    });
    return contactId;
  },
});

export const getContacts = query({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});
