"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../ui/Button/Buttons";
import { SERVICES_UI } from "@/src/constants/services-ui";
import { useLocale, useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("Services");
  const locale = useLocale();

  return (
    <section className="mt-14 w-full px-5">
      <h2 className="text-center font-sans text-2xl font-semibold text-main-dark mb-6">
        {t("title")}
      </h2>

      <div
        className="grid grid-cols-2"
        style={{ rowGap: "21px", columnGap: "16px" }}
      >
        {SERVICES_UI.map((service) => (
          <div
            key={service.slug}
            className="flex flex-col items-center rounded-xl pt-7 pb-4 w-full"
            style={{
              backgroundImage: "var(--background-image-brand-gradient)",
              gap: "16px",
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={t(`items.${service.slug}`)}
                width={48}
                height={48}
                className="w-full h-auto object-contain brightness-0 invert"
              />
            </div>

            <h3
              className={`font-sans text-white font-semibold text-[14px] text-center leading-tight 
    ${locale === "uk" ? "tracking-normal" : "tracking-[-0.02em]"} 
    px-2`}
            >
              {t(`items.${service.slug}`)}
            </h3>

            <div className="w-28.75 h-10">
              <Button
                variant="white"
                href={`/services?category=${service.slug}`}
                className="w-full py-2! px-0! text-sm h-10"
              >
                {t("details")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
