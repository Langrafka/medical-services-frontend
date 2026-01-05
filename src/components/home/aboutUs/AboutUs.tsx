import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="flex flex-col items-center text-center px-5">
      <div className="relative mb-8">
        <div className="rounded-full overflow-hidden">
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
          className="absolute top-4 -right-25.75 w-18 h-18 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          style={{ background: "var(--background-image-brand-gradient)" }}
        >
          <Image
            src="/icons/phone.svg"
            alt="Call"
            width={37}
            height={37}
            className="brightness-0 invert"
          />
        </a>
      </div>

      <h2 className="text-main-dark text-[24px] font-bold mb-6">About us</h2>

      <div className="flex flex-col gap-5 text-main-dark text-[16px] leading-normal tracking-[-0.02em] font-normal">
        <p>
          We follow a personalized, precise, preventive, and patient-centered
          approach to healthcare.
        </p>

        <p>
          Our goal is to provide the highest standard of medical services,
          taking into account the individual needs of every patient.
        </p>

        <div className="flex flex-col gap-1">
          <p>
            Our team of qualified professionals offers a wide range of medical
            services, focused on accuracy, care, and long-term health.
          </p>
          <p>Your safety and comfort are our top priorities.</p>
        </div>

        <p>
          Trust your health to our specialists and receive reliable,
          high-quality medical care.
        </p>
      </div>
    </section>
  );
};
