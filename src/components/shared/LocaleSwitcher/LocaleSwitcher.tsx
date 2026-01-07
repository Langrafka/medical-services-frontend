"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/routing";

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (nextLocale: "en" | "uk") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex gap-4 text-[20px] font-semibold">
      <button
        onClick={() => handleLocaleChange("en")}
        className={`cursor-pointer transition-all duration-300 relative group ${
          locale === "en"
            ? "text-brand-green"
            : "text-main-dark hover:text-brand-green"
        }`}
      >
        EN
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-300 ${locale === "en" ? "w-full" : "w-0 group-hover:w-full"}`}
        ></span>
      </button>

      <button
        onClick={() => handleLocaleChange("uk")}
        className={`cursor-pointer transition-all duration-300 relative group ${
          locale === "uk"
            ? "text-brand-green"
            : "text-main-dark hover:text-brand-green"
        }`}
      >
        UA
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-300 ${locale === "uk" ? "w-full" : "w-0 group-hover:w-full"}`}
        ></span>
      </button>
    </div>
  );
};
