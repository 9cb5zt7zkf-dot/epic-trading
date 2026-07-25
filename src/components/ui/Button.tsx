import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base = "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 ease-epic";
  const styles =
    variant === "primary"
      ? "bg-gold-500 text-forest-950 hover:bg-gold-400 hover:shadow-gold-glow"
      : "border border-white/25 text-current hover:border-gold-400 hover:text-gold-300";

  return (
    <Link href={href} className={cx(base, styles, className)}>
      <span>{children}</span>
      {showArrow && <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
