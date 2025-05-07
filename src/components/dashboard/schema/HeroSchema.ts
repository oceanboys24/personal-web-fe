import { z } from "zod";

export const HeroSchema = z.object({
    surname: z.string().min(1, "Surname is Required "),
    email: z.string().email("Invalid email address"),
    handphone: z.string().min(1, "Handphone is Required "),
    cv: z.string().url({
      message: "Invalid Url",
    }),
    profession: z.string().min(1, "Profession is Required "),
    description: z.string().min(1, "Description is Required "),
    location: z.string().min(1, "Location is Required"),
    is_available: z.boolean(),
    image_url: z.string().url("Image must be a valid URL"),
  });
  
  export type HeroSchemaType = z.infer<typeof HeroSchema>;
  