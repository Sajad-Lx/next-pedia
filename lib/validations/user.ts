import * as z from "zod";

export const userUpdateSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});
