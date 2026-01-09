"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { MobileMenu } from "./MobileMenu";
import { MENU_LINKS } from "@/src/constants/navigation";
import { Logo } from "../Logo";
import { BurgerButton } from "../../ui/BurgerButton";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { Navigation } from "../Navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");

  const translatedLinks = useMemo(
    () =>
      MENU_LINKS.map((link) => ({
        ...link,
        name: t(link.id),
      })),
    [t],
  );

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      sessionStorage.setItem("menu_open", newState.toString());
      return newState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("menu_open", "false");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div
        className={`transition-all duration-300 ${isOpen ? "shadow-none" : "shadow-sm"}`}
      >
        <div className="mx-auto max-w-360 px-5 py-7.25 flex items-center justify-between">
          <div className="shrink-0 relative z-50">
            <Logo isOpen={isOpen} />
          </div>

          <div className="flex items-center gap-8">
            <Navigation
              links={translatedLinks}
              className="hidden md:flex items-center gap-8"
            />

            <div className="hidden md:block">
              <LocaleSwitcher />
            </div>

            <div className="relative z-50 md:hidden flex items-center gap-4">
              <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} links={translatedLinks} />
    </header>
  );
};
