import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z
    .object({
      title: z.string().min(10),
      description: z.string().min(20),
      status: z.enum(["draft", "review", "approved"]),
      author: z.string().min(1),
      reviewedAt: z.string().nullable(),
      sources: z
        .array(
          z.object({
            title: z.string().min(1),
            url: z.url(),
            consultedAt: z.string(),
          }),
        )
        .min(1),
      canonical: z.url().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.status === "approved" && !data.reviewedAt)
        ctx.addIssue({
          code: "custom",
          message: "La aprobación requiere fecha de revisión humana.",
        });
    }),
});
export const collections = { guides };
