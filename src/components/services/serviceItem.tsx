import { PriceItem } from "@/src/types/PriceItem";
import Image from "next/image";
import React from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  prices: PriceItem[];
  note?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const ServiceItem = ({
  title,
  description,
  prices,
  note,
  isOpen,
  onToggle,
}: ServiceItemProps) => {
  return (
    <div className="last:border-none">
      <button
        onClick={onToggle}
        className="w-full pb-6 flex items-center justify-between gap-17.5 text-left group transition-colors cursor-pointer border-b border-[#C0C0C0]"
      >
        <span className="font-sans text-[18px] md:text-[20px] font-semibold text-main-dark">
          {title}
        </span>

        <div
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="Arrow to open details"
            width={14.5}
            height={7.25}
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
            {description}
          </p>
          <ul className="flex flex-col gap-4">
            {prices.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-end border-b border-[#C0C0C0]  pb-4"
              >
                <span className="font-sans text-[16px] font-semibold leading-[150%] tracking-normal text-main-dark">
                  {item.name}
                </span>

                <span className="font-sans text-[16px] font-semibold leading-[150%] tracking-normal text-main-dark whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          {note && (
            <p className="mt-4 font-sans text-4 font-normal leading-[150%] tracking-[-0.02em] text-main-dark">
              {note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
