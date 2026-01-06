import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/,
      "Name can only contain letters, spaces, hyphens and apostrophes",
    )
    .transform((val) => val.trim()),

  surname: z
    .string()
    .min(1, "Surname is required")
    .min(2, "Surname must be at least 2 characters")
    .max(50, "Surname must not exceed 50 characters")
    .regex(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/,
      "Surname can only contain letters, spaces, hyphens and apostrophes",
    )
    .transform((val) => val.trim()),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .transform((val) => val.replace(/[\s\-\(\)]/g, ""))
    .refine(
      (val) => {
        const ukrainePattern = /^\+380\d{9}$/;
        const internationalPattern = /^\+[1-9]\d{9,14}$/;
        return ukrainePattern.test(val) || internationalPattern.test(val);
      },
      {
        message: "Enter a valid phone number (e.g., +380XXXXXXXXX)",
      },
    ),

  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .transform((val) => val.trim()),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const createFieldSchema = (field: keyof BookingFormData) => {
  return bookingFormSchema.pick({ [field]: true });
};
