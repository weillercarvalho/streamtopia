import { z } from "zod";

const paymentSchema = z.object({
  lastNumbers: z.string().min(3),
  name: z.string(),
  expirationDate: z.string(),
  cvv: z.string(),
  packageValue: z.string(),
});

type PaymentType = z.infer<typeof paymentSchema>;

export { paymentSchema, PaymentType };
