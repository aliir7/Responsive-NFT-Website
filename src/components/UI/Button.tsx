import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "outline";
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  size?: "sm" | "md"; // ✨ برای کنترل سایز در Nav یا Hero
};

function Button({
  variant = "outline",
  children,
  icon,
  className,
  size = "md",
}: Props) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1", // برای nav موبایل
    md: "px-5 py-2.5 text-base gap-2", // برای hero section
  };

  const base =
    "inline-flex items-center justify-center rounded-md border border-transparent text-white transition-all duration-500 font-semibold";

  const variants = {
    primary: `
      relative overflow-hidden bg-stone-900 group cursor-pointer border-none
      before:absolute before:inset-0 before:-translate-x-[102%]  /* ✅ مهم‌ترین بخش */
      before:bg-primary before:transition-transform before:duration-500 before:ease-out
      hover:before:translate-x-0
    `,
    outline: `
      bg-stone-900 border border-transparent hover:border-primary cursor-pointer shadow-primary
    `,
  };

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)}>
      <span
        className={clsx(
          "relative z-10 flex items-center transition-colors duration-500",
          variant === "primary" && "group-hover:text-stone-900",
        )}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span className="ml-2 whitespace-nowrap">{children}</span>
      </span>
    </button>
  );
}

export default Button;
