"use client";

import { MENU_LINKS } from "@/src/constants/navigation";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden bg-white flex flex-col p-5 pt-40 transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-full invisible"
      }`}
    >
      <nav className="flex flex-col gap-12">
        {MENU_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`group flex items-center text-[24px] font-semibold transition-[transform,opacity] duration-500 ease-out ${
              isOpen
                ? `translate-x-0 opacity-100 ${link.delay}`
                : "-translate-x-4 opacity-0"
            }`}
          >
            <span className="text-main-dark transition-colors duration-300 group-hover:text-brand-green">
              {link.name}
            </span>
            <div className="ml-2.5 opacity-0 scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
              <Image
                src="/icons/heart.svg"
                alt="heart"
                width={30}
                height={27}
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </nav>

      <div
        className={`mt-auto flex gap-4 text-[20px] font-semibold transition-all duration-500 delay-400 pb-10 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="text-brand-green cursor-pointer">EN</button>
        <button className="text-main-dark cursor-pointer">UA</button>
      </div>
    </div>
  );
};
