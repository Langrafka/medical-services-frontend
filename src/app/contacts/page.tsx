import { SOCIAL_LINKS } from "@/src/constants/links";
import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="mt-8 mb-8.75 w-full px-5 max-w-93.75 md:max-w-7xl mx-auto"
    >
      <h2 className="text-center font-sans text-2xl font-semibold text-main-dark mb-8">
        Contacts
      </h2>

      <div className="flex flex-col items-start w-full gap-8">
        <div className="flex items-center gap-4.75">
          <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/owner.png"
              alt="Klushyn Vladyslav"
              width={78}
              height={78}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans font-semibold text-[16px] text-main-dark leading-tight">
              Klushyn Vladyslav
            </h3>
            <p className="font-sans text-[14px] text-main-dark font-semibold leading-tight mt-1">
              Founder of Medical solution
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <a
            href="tel:+380954136981"
            className="flex items-center gap-4 group transition-opacity hover:opacity-80"
          >
            <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
              <Image
                src="/icons/phone.svg"
                alt="Phone link"
                fill
                className="object-contain brightness-0"
              />
            </div>
            <span className="font-sans text-main-dark text-base font-medium">
              +380 (95) 413 69 81
            </span>
          </a>

          <a
            href="mailto:med.solution360@gmail.com"
            className="flex items-center gap-4 group transition-opacity hover:opacity-80"
          >
            <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
              <Image
                src="/icons/mail.svg"
                alt="Mail link"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-sans text-main-dark text-base font-medium break-all">
              med.solution360@gmail.com
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 w-8 h-8 relative block"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
