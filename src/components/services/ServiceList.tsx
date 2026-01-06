"use client";

import { SERVICES_DATA } from "@/src/constants/services-data";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ServiceItem from "./ServiceItem";

export const ServiceList = () => {
  const [manualIndex, setManualIndex] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const autoIndex = category
    ? SERVICES_DATA.findIndex((item) => item.slug === category)
    : -1;

  const openIndex =
    manualIndex !== null ? manualIndex : autoIndex !== -1 ? autoIndex : null;

  const toggleService = (index: number) => {
    setManualIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-8 mt-8">
      {SERVICES_DATA.map((service, index) => (
        <ServiceItem
          key={index}
          {...service}
          isOpen={openIndex === index}
          onToggle={() => toggleService(index)}
        />
      ))}
    </div>
  );
};
