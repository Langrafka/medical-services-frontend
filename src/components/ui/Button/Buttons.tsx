import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "white";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-white";

  const finalClass = `${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
};
