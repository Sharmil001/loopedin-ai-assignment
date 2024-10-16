import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Minimum 3 characters required"),
  age: z
    .number({ required_error: "Age is required" })
    .min(1, "Age must be a positive number")
    .max(120, "Age must be below 120"),
  gender: z.string().trim().nonempty({ message: "Gender is required" }),
});

export type UserFormType = z.infer<typeof UserSchema>;
