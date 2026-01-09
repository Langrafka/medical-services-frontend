import { SOCIAL_LINKS } from "@/src/constants/links";
import Image from "next/image";
import { Logo } from "../Logo";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#0A150E] text-white mt-14 pt-4.5 px-5 pb-10">
      <div className="max-w-360 mx-auto">
        <Logo variant="white" />

        <p className="mt-8 font-sans text-[16px] font-normal leading-[150%] tracking-[-0.02em] max-w-[320px] text-white">
          {t("description")}
        </p>

        <div className="flex gap-6 mt-10">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
                className="brightness-0 invert transition-all duration-300 group-hover:filter-[invert(58%)_sepia(8%)_saturate(2264%)_hue-rotate(97deg)_brightness(95%)_contrast(86%)]"
              />
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-white/20 mt-8" />

        <p className="mt-5 text-[14px] text-gray-400">{t("rights")}</p>
      </div>
    </footer>
  );
};
