import Image from "next/image";
import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  icon?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "reset" | "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const BlackButton = ({
  label,
  icon,
  disabled,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-flex items-center justify-center gap-x-4 rounded-[4px] bg-black px-10 py-3 text-white text-sm  ${className} ${
        disabled && "opacity-60"
      }`}
    >
      {label}
      {icon && (
        <Image
          src="/icons/upward-pointer.svg"
          alt="upwad pointer"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};
