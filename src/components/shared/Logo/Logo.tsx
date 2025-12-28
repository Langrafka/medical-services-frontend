"use client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  isOpen?: boolean;
  variant?: "default" | "white";
};

export const Logo: React.FC<Props> = ({ isOpen, variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className="transition-opacity flex items-center group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image
        src="/icons/logo.svg"
        alt="Medical Solution Logo"
        width={140}
        height={40}
        className={`${isOpen ? "h-12 w-12" : "h-10 w-10"} md:h-10 md:w-35 duration-300 object-contain mr-3`}
        priority
      />
      <div className="flex flex-col leading-[0.9] gap-1.5 md:leading-none">
        <span
          className={`text-[14px] md:text-[24px] font-semibold tracking-tight ${isWhite ? "text-white" : "text-main-dark"}`}
        >
          Medical
        </span>
        <span
          className={`text-[14px] md:text-[24px] font-semibold tracking-tight ${isWhite ? "text-white" : "text-main-dark"}`}
        >
          Solution
        </span>
      </div>
    </Link>
  );
};
