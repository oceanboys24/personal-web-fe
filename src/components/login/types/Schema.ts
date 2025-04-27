import { z } from "zod";

export interface AdminUser {
  email: string;
  password: string;
}

export const LoginSchemaAdmin = z.object({
  email: z.string().email({ message: "Email not Valid" }),
  password: z.string().min(6, { message: "Minimum 6 Character" }),
});

export type AdminUserZod = z.infer<typeof LoginSchemaAdmin>;
