import { Logo } from "../Logo/Logo";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/qr/V5VHLYWOIPAYO1?autoload=1&app_absent=0",
    icon: "/icons/whatsapp.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/medical___solution/?igsh=OTQ0YjVqems0MnJ3",
    icon: "/icons/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Medical-Solution/100087263677603/",
    icon: "/icons/facebook.svg",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0A150E] text-white mt-[56px] pt-[18px] px-5 pb-10">
      <div className="max-w-[1440px] mx-auto">
        <Logo variant="white" />

        <p className="mt-8 text-[16px] leading-[1.4] max-w-[320px] font-light text-gray-300">
          High-quality medical care tailored to every patient. Trusted
          professionals. Safety, comfort, and long-term health
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
                className="brightness-0 invert transition-all duration-300 group-hover:[filter:invert(58%)_sepia(8%)_saturate(2264%)_hue-rotate(97deg)_brightness(95%)_contrast(86%)]"
              />
            </a>
          ))}
        </div>

        <div className="h-[1px] w-full bg-white/20 mt-8" />

        <p className="mt-5 text-[14px] text-gray-400">
          ©2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};
