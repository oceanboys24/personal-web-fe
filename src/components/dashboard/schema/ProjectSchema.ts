import { z } from "zod";

export const ProjectSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  description: z.string().min(1, "Description is Required"),
  stack: z.array(
    z.string().min(1, {
      message: "Required At Least 1",
    })
  ),
  repo: z.string().url().or(z.literal("")).optional(),
  demo: z.string().url().or(z.literal("")).optional(),
  image_url: z.string().optional(),
});
export type ProjectValid = z.infer<typeof ProjectSchema>;

export const ProjectSchemaEdit = z.object({
  name: z.string().min(1, "Name is Required").optional(),
  description: z.string().min(1, "Description is Required").optional(),
  stack: z.array(z.string()).min(1, "Minimal 1 stack!").optional(),
  repo: z.string().url().or(z.literal("")).optional(),
  demo: z.string().url().or(z.literal("")).optional(),
  image_url: z.string(),
});

export type ProjectValidEdit = z.infer<typeof ProjectSchemaEdit>;
