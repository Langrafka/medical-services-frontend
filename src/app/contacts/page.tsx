import { SOCIAL_LINKS } from "@/src/constants/links";
import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="mt-8 mb-10 w-full px-5 md:px-10 lg:px-16 max-w-7xl mx-auto transition-all duration-300"
    >
      <h2 className="text-center font-sans text-2xl md:text-3xl font-semibold text-main-dark mb-8 md:mb-12">
        Contacts
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-8 md:gap-4 lg:gap-10">
        <div className="flex items-center gap-4.75 md:gap-6 shrink-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 transition-all duration-300">
            <Image
              src="/images/owner.png"
              alt="Klushyn Vladyslav"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-main-dark leading-tight">
              Klushyn Vladyslav
            </h3>
            <p className="font-sans text-[14px] md:text-[16px] text-main-dark font-semibold leading-tight mt-1 opacity-80">
              Founder of Medical solution
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8 lg:gap-4 xl:flex-row xl:gap-10 justify-center">
          <a
            href="tel:+380954136981"
            className="flex items-center gap-4 group transition-opacity hover:opacity-80"
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0">
              <Image
                src="/icons/phone.svg"
                alt="Phone link"
                fill
                className="object-contain brightness-0"
              />
            </div>
            <span className="font-sans text-main-dark text-base md:text-lg font-medium whitespace-nowrap">
              +380 (95) 413 69 81
            </span>
          </a>

          <a
            href="mailto:med.solution360@gmail.com"
            className="flex items-center gap-4 group transition-opacity hover:opacity-80"
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0">
              <Image
                src="/icons/mail.svg"
                alt="Mail link"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-sans text-main-dark text-base md:text-lg font-medium break-all md:break-normal">
              med.solution360@gmail.com
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6 md:gap-8 justify-start md:justify-end">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 w-8 h-8 md:w-9 md:h-9 relative block"
            >
              <Image
                src={link.icon}
                alt={link.name}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
