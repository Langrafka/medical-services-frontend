"use client";

import { SERVICES_DATA } from "@/src/constants/services-data";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";

export const ServiceList = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const index = SERVICES_DATA.findIndex((item) => item.slug === category);
      if (index !== -1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpenIndices((prev) => {
          if (prev.includes(index)) return prev;
          return [...prev, index];
        });
      }
    }
  }, [category]);

  const toggleService = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="flex flex-col gap-8 mt-8">
      {SERVICES_DATA.map((service, index) => (
        <ServiceItem
          key={index}
          {...service}
          isOpen={openIndices.includes(index)}
          onToggle={() => toggleService(index)}
        />
      ))}
    </div>
  );
};
