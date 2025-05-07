import { z } from "zod";

export const WorkExperienceSchema = z.object({
  role: z.string().min(1, { message: "Role is Required" }),
  company: z.string().min(1, { message: "Company is Required" }),
  task: z
    .array(z.string().min(1, { message: "Task must not be empty" }))
    .min(1, { message: "At least 1 task is required" }),
  stack: z.array(z.string()).optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

export type WorkExperienceSchemaValid = z.infer<typeof WorkExperienceSchema>;

export const WorkExperienceSchemaEdit = z.object({
  role: z.string().min(1, { message: "Role is Required" }),
  company: z.string().min(1, { message: "Company is Required" }),
  task: z
    .array(z.string().min(1, { message: "Task must not be empty" }))
    .min(1, { message: "At least 1 task is required" }),
  image_url: z.string().optional(),
  stack: z.array(z.string()).optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

export type WorkExperienceSchemaValidEdit = z.infer<
  typeof WorkExperienceSchemaEdit
>;
