import Image from "next/image";
import { Button } from "../../ui/Button/Buttons";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-[60px] pt-[32px] pb-[56px]">
      <div className="mb-4">
        <Image
          src="/images/syringe.png"
          alt="Medical Solution 3D Illustration"
          width={765}
          height={765}
          className="w-[255px] h-[255px] object-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-[8px]">
        <h1 className="text-main-dark text-[24px] font-bold leading-tight">
          Medical solution
        </h1>
        <p className="text-main-dark text-[16px] font-normal leading-[1.5] tracking-[-0.02em]">
          Patient-centered care tailored to your individual needs
        </p>
      </div>

      <div className="mt-[24px] min-w-[335px] w-full">
        <Button
          href="#booking"
          variant="primary"
          className="w-full text-[18px]"
        >
          Book a service
        </Button>
      </div>
    </section>
  );
};
