import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, "too_short")
    .max(50, "too_long")
    .regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/, "invalid_format")
    .transform((v) => v.trim()),
  surname: z
    .string()
    .min(2, "too_short")
    .max(50, "too_long")
    .regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/, "invalid_format")
    .transform((v) => v.trim()),
  phone: z
    .string()
    .min(1, "required")
    .transform((v) => v.replace(/[\s\-\(\)]/g, ""))
    .refine(
      (val) => /^\+380\d{9}$/.test(val) || /^\+[1-9]\d{9,14}$/.test(val),
      "invalid_phone",
    ),
  description: z
    .string()
    .min(10, "too_short")
    .max(500, "too_long")
    .transform((v) => v.trim()),
});
