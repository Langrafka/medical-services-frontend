import { BookingForm } from "@/src/components/booking/BookingForm";
import { useTranslations } from "next-intl";
import React from "react";

export default function BookingPage() {
  const t = useTranslations("Booking");
  return (
    <div className="min-h-screen flex justify-center py-8 px-5">
      <div className="w-full max-w-93.75 md:max-w-md bg-transparent">
        <h1 className="font-sans font-semibold text-[24px] text-main-dark text-center mb-8 leading-tight">
          {t("title")}
        </h1>

        <BookingForm />
      </div>
    </div>
  );
}
