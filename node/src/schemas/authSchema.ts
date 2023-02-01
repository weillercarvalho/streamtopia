import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "The name needs at least 1 character." }),
  email: z.string().email(),
  password: z.string().min(6),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type signUpType = z.infer<typeof signUpSchema>;
export type signInType = z.infer<typeof signInSchema>;

export { signInSchema, signUpSchema };
