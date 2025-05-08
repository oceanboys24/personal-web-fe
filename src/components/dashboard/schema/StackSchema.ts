import { z } from "zod";

export const StackSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  image_url: z.string().optional(),
});

export type StackSchemaValid = z.infer<typeof StackSchema>;
