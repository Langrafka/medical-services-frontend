import Image from "next/image";
import { Button } from "../../ui/Button/Buttons";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="flex flex-col items-center text-center px-15 pt-8 pb-14">
      <div className="mb-4">
        <Image
          src="/images/syringe.png"
          alt="Medical Solution 3D Illustration"
          width={765}
          height={765}
          className="w-63.75 h-63.75bject-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-main-dark text-[24px] font-bold leading-tight">
          {t("title")}
        </h1>
        <p className="...">{t("description")}</p>
      </div>
      <div className="mt-6 min-w-83.75 w-full">
        <Button
          href="/booking"
          variant="primary"
          className="w-full text-[18px]"
        >
          {t("button")}
        </Button>
      </div>
    </section>
  );
};
