import Image from "next/image";
import React from "react";
import { Button } from "../../ui/Button/Buttons";

const services = [
  {
    title: "Injections",
    icon: "/icons/injections.svg",
    href: "/services/injections",
  },
  {
    title: "IV Infusions",
    icon: "/icons/infusions.svg",
    href: "/services/infusions",
  },
  {
    title: "Dressings",
    icon: "/icons/dressings.svg",
    href: "/services/dressings",
  },
  {
    title: "Wellness Drips",
    icon: "/icons/wellness.svg",
    href: "/services/wellness",
  },
];

export const Services = () => {
  return (
    <section className="mt-14 w-full px-5">
      <h2 className="text-center font-sans text-2xl font-semibold text-main-dark mb-6">
        Services
      </h2>

      <div
        className="grid grid-cols-2"
        style={{ rowGap: "21px", columnGap: "16px" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl pt-7 pb-4 w-full"
            style={{
              backgroundImage: "var(--background-image-brand-gradient)",
              gap: "16px",
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>

            <h3 className="font-sans text-white font-semibold text-4 text-center leading-tight whitespace-nowrap">
              {service.title}
            </h3>

            <div className="w-28.75 h-10">
              <Button
                variant="white"
                href={service.href}
                className="w-full py-2! px-0! text-sm h-10"
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
