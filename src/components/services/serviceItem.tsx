"use client";
import { PriceItem } from "@/src/types/PriceItem";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

interface ServiceItemProps {
  slug: string;
  prices: PriceItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  slug,
  prices,
  isOpen,
  onToggle,
}) => {
  const t = useTranslations("ServicesPage");

  return (
    <div className="last:border-none">
      <button
        onClick={onToggle}
        className="w-full pb-6 flex items-center justify-between gap-17.5 text-left group transition-colors cursor-pointer border-b border-[#C0C0C0]"
      >
        <span className="font-sans text-xl md:text-[30px] font-semibold text-main-dark">
          {t(`${slug}.title`)}
        </span>

        <div
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="Toggle details"
            width={14}
            height={7}
            className="h-auto w-auto"
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 pt-6">
          <p className="font-sans text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-main-dark mb-6">
            {t(`${slug}.description`)}
          </p>
          <ul className="flex flex-col gap-4">
            {prices.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-end border-b border-[#C0C0C0] pb-4"
              >
                <span className="font-sans text-[16px] font-semibold text-main-dark">
                  {t(`${slug}.items.${item.id}`)}
                </span>
                <span className="font-sans text-[16px] font-semibold text-main-dark whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-sans text-sm font-normal text-main-dark opacity-70">
            {t(`${slug}.note`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceItem);
