"use client";

import { useState, useEffect, useCallback } from "react";
import { BurgerButton } from "../../ui/BurgerButton/BurgerButton";
import { Logo } from "../Logo/Logo";
import { MobileMenu } from "./MobileMenu";
import { MENU_LINKS } from "@/src/constants/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div
        className={`transition-all duration-300 ${
          isOpen ? "shadow-none" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 py-[29px] flex items-center justify-between">
          <div className="shrink-0 relative z-50">
            <Logo isOpen={isOpen} />
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {MENU_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="relative z-50 md:hidden">
              <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
};
