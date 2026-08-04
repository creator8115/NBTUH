import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-parchment hover:bg-forest-deep focus-visible:outline-brass",
  secondary:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 focus-visible:outline-brass",
  ghost:
    "text-forest border-b border-forest hover:text-brass hover:border-brass px-0 py-1 rounded-none",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
} & ComponentPropsWithoutRef<"button"> &
  Partial<ComponentPropsWithoutRef<"a">>;

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
