import React from "react";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center transition-colors duration-300 cursor-pointer"
      aria-label="Toggle menu"
    >
      <div
        className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0D112A"
          strokeWidth="2"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className={`absolute transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          stroke="#0D112A"
          strokeWidth="2"
        >
          <path
            d="M1 1h22M1 9h22M1 17h22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};
