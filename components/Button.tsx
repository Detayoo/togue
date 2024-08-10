import Image from "next/image";

type ButtonProps = {
  label: string;
  icon?: boolean;
  disabled?: boolean;
};

export const BlackButton = ({ label, icon, disabled }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-x-4 rounded-[4px] bg-black px-10 py-3 text-white text-sm  ${
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
