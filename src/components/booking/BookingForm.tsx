"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ZodError } from "zod";
import { useTranslations } from "next-intl";
import { bookingFormSchema } from "@/src/schemas/booking.schema";
import { BookingFormData } from "@/src/types/BookingFormData";

const initialFormData: BookingFormData = {
  name: "",
  surname: "",
  phone: "",
  description: "",
};

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export const BookingForm = () => {
  const t = useTranslations("Booking");
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getErrorMessage = (
    errorKey: string | undefined,
    field: keyof BookingFormData,
  ) => {
    if (!errorKey) return undefined;

    if (errorKey === "too_short") {
      const minCount = field === "description" ? 10 : 2;
      return t("validation.too_short", { count: minCount });
    }
    if (errorKey === "invalid_format") return t("validation.invalid_format");
    if (errorKey === "invalid_phone") return t("validation.invalid_phone");
    if (errorKey === "required" || errorKey.includes("Required"))
      return t("validation.required");

    return errorKey;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateField = (field: keyof BookingFormData, value: string) => {
    try {
      bookingFormSchema.pick({ [field]: true }).parse({ [field]: value });
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldError = error.issues[0]?.message;
        setErrors((prev) => ({ ...prev, [field]: fieldError }));
      }
    }
  };

  const handleBlur = (field: keyof BookingFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const formatPhoneNumber = (value: string): string => {
    let cleaned = value.replace(/[^\d+]/g, "");
    if (cleaned.length > 0 && !cleaned.startsWith("+")) {
      if (cleaned.startsWith("380")) cleaned = "+" + cleaned;
      else if (cleaned.startsWith("80")) cleaned = "+3" + cleaned;
      else if (cleaned.startsWith("0")) cleaned = "+38" + cleaned;
      else cleaned = "+380" + cleaned;
    }
    if (cleaned.length > 13) cleaned = cleaned.slice(0, 13);
    return cleaned;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (touched.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, surname: true, phone: true, description: true });

    try {
      const validatedData = bookingFormSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      setFormData(initialFormData);
      setTouched({});
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: FormErrors = {};
        error.issues.forEach((err) => {
          if (err.path[0])
            fieldErrors[err.path[0] as keyof BookingFormData] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-1 transition-all font-sans text-main-dark placeholder:text-[#858585] ${
      hasError
        ? "border-red-500 focus:ring-red-500"
        : "border-[var(--color-border-input)] focus:border-[#58A07A] focus:ring-[#58A07A]"
    }`;

  return (
    <div className="w-full">
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-brand-green text-center font-medium">
            {t("success")}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        {/* Поле Имя */}
        <div className="flex flex-col gap-4">
          <label
            htmlFor="name"
            className="font-sans font-medium text-main-dark"
          >
            {t("labels.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            placeholder={t("placeholders.name")}
            className={getInputClass(!!(touched.name && errors.name))}
          />
          {touched.name && errors.name && (
            <p className="text-sm text-red-500">
              {getErrorMessage(errors.name, "name")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label
            htmlFor="surname"
            className="font-sans font-medium text-main-dark"
          >
            {t("labels.surname")}
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            onBlur={() => handleBlur("surname")}
            placeholder={t("placeholders.surname")}
            className={getInputClass(!!(touched.surname && errors.surname))}
          />
          {touched.surname && errors.surname && (
            <p className="text-sm text-red-500">
              {getErrorMessage(errors.surname, "surname")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label
            htmlFor="phone"
            className="font-sans font-medium text-main-dark"
          >
            {t("labels.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={() => handleBlur("phone")}
            placeholder={t("placeholders.phone")}
            className={getInputClass(!!(touched.phone && errors.phone))}
          />
          {touched.phone && errors.phone && (
            <p className="text-sm text-red-500">
              {getErrorMessage(errors.phone, "phone")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label
            htmlFor="description"
            className="font-sans font-medium text-main-dark"
          >
            {t("labels.description")}
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={() => handleBlur("description")}
            placeholder={t("placeholders.description")}
            className={`${getInputClass(!!(touched.description && errors.description))} h-52.25 resize-none`}
          />
          <div className="flex justify-between">
            {touched.description && errors.description && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.description, "description")}
              </p>
            )}
            <p className="text-xs text-placeholder ml-auto">
              {formData.description.length}/500
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full h-12 flex items-center justify-center mt-2"
        >
          {isSubmitting ? t("button.sending") : t("button.send")}
        </button>
      </form>
    </div>
  );
};
