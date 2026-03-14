import { tv } from "tailwind-variants/lite";
import type { ReactNode } from "react";

const linkVariants = tv({
  base: "cursor-pointer",
  variants: {
    colour: {
      black: "text-themeBlack hover:underline",
      red: "text-themeRed hover:text-themeRedOffset",
      white: "text-white hover:underline",
    },
    fontWeight: {
      bold: "font-bold",
      normal: "font-normal",
    },
  },
  defaultVariants: {
    colour: "red",
    fontWeight: "normal",
  },
});

export type LinkTextProps = {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  linkColour?: keyof typeof linkVariants.variants.colour;
  fontWeight?: keyof typeof linkVariants.variants.fontWeight;
  className?: string;
};

export function LinkText({
  onClick,
  href,
  children,
  linkColour,
  fontWeight,
  className,
}: LinkTextProps) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={linkVariants({ colour: linkColour, fontWeight }) + " " + (className ?? "")}
    >
      {children}
    </a>
  );
}
