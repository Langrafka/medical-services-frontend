import { BookingForm } from "@/src/components/booking/BookingForm";
import React from "react";

export default function BookingPage() {
  return (
    <div className="min-h-screen flex justify-center py-8 px-5">
      <div className="w-full max-w-93.75 md:max-w-md bg-transparent">
        <h1 className="font-sans font-semibold text-[24px] text-main-dark text-center mb-8 leading-tight">
          Booking online
        </h1>

        <BookingForm />
      </div>
    </div>
  );
}
