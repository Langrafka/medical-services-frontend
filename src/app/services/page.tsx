"use client";

import { ServiceItem } from "@/src/components/services/serviceItem";
import { SERVICES_DATA } from "@/src/constants/services";
import React, { useState } from "react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-8 w-full px-5 max-w-7xl mx-auto">
      <h2 className="text-center font-sans text-2xl font-semibold text-main-dark">
        Services
      </h2>

      <div className="flex flex-col gap-8 mt-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            prices={service.prices}
            note={service.note}
            isOpen={openIndex === index}
            onToggle={() => toggleService(index)}
          />
        ))}
      </div>
    </section>
  );
}
