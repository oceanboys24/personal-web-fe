import { z } from "zod";

export interface Stack {
  id: string;
  name: string;
  image_url: string;
}

export const StackSchema = z.object({
  name: z.string(),
});

export type StackSchemaValid = z.infer<typeof StackSchema>;
