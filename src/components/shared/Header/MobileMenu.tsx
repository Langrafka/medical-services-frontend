"use client";
import Image from "next/image";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { LinksData } from "@/src/types/LinksData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<LinksData>;
}

export const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden bg-white flex flex-col p-5 pt-40 transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-full invisible"
      }`}
    >
      <nav className="flex flex-col gap-12">
        {links.map((link) => (
          <a
            key={link.id}
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
                className="object-contain w-auto h-auto"
              />
            </div>
          </a>
        ))}
      </nav>

      <div
        className={`mt-auto transition-all duration-500 delay-400 pb-10 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        <LocaleSwitcher />
      </div>
    </div>
  );
};
