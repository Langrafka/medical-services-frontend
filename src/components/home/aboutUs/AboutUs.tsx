import Image from "next/image";
import { useTranslations } from "next-intl";

export const AboutUs = () => {
  const t = useTranslations("AboutUs");

  return (
    <section className="flex flex-col items-center text-center px-5">
      <div className="relative mb-8">
        <div className="rounded-full overflow-hidden border-4 border-white shadow-sm">
          <Image
            src="/images/owner.png"
            alt="Owner"
            width={120}
            height={120}
            className="object-cover w-30 h-30"
          />
        </div>

        <a
          href="tel:+380954136981"
          className="fixed bottom-8 right-5 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-xl 
                     bg-[#01b061] text-white cursor-pointer 
                     transition-transform hover:scale-110 active:scale-95 
                     animate-bounce-slow"
        >
          <Image
            src="/icons/phone.svg"
            alt="Call"
            width={32}
            height={32}
            className="brightness-0 invert"
          />
        </a>
      </div>

      <h2 className="text-main-dark text-[24px] font-bold mb-6">
        {t("title")}
      </h2>

      <div className="flex flex-col gap-5 text-main-dark text-[16px] leading-normal tracking-[-0.02em] font-normal">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>

        <div className="flex flex-col gap-1">
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
        </div>

        <p>{t("p5")}</p>
      </div>
    </section>
  );
};
