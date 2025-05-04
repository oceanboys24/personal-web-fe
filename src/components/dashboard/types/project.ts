import { z } from "zod";

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  repo: string;
  demo: string;
  image_url: string;
}

export const ProjectSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  description: z.string().min(1, "Description is Required"),
  stack: z.array(z.string()).optional(),
  repo: z.string().optional(),
  demo: z.string().optional(),
  image_url: z.string().optional(),
});

export type ProjectValid = z.infer<typeof ProjectSchema>;
