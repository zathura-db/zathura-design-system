import { tv } from "tailwind-variants/lite";
import type { ReactNode } from "react";

const sectionVariants = tv({
  base: "flex flex-col items-center text-center relative z-10",
  variants: {
    type: {
      normal: "py-16",
      chevron: "py-32 clip-chevron",
    },
  },
  defaultVariants: { type: "normal" },
});

const colourTheme = {
  white: {
    background: "bg-white",
    textColour: "text-blue",
    underlineColour: "bg-themeRed",
  },
  black: {
    background: "bg-themeBlack",
    textColour: "text-white",
    underlineColour: "bg-white",
  },
  orange: {
    background: "bg-themeOrange",
    textColour: "text-white",
    underlineColour: "bg-white",
  },
  blue: {
    background: "bg-themeBlue",
    textColour: "text-white",
    underlineColour: "bg-white",
  },
  green: {
    background: "bg-themeGreen",
    textColour: "text-white",
    underlineColour: "bg-white",
  },
} as const;

export type SectionProps = {
  sectionTitle: string;
  children?: ReactNode;
  disableHeading?: boolean;
  disableUnderline?: boolean;
  underlineColourOverride?: string;
  className?: string;
  colour?: keyof typeof colourTheme;
  type?: keyof typeof sectionVariants.variants.type;
};

/**
 * Section component with optional heading, underline, colour themes, and chevron layout.
 */
export default function Section({
  sectionTitle,
  children,
  disableHeading,
  disableUnderline,
  underlineColourOverride,
  className,
  colour = "white",
  type,
}: SectionProps) {
  const theme = colourTheme[colour];

  return (
    <section id={sectionTitle}>
      {type === "chevron" && (
        <div className={`clip-chevron ${theme.background}`} />
      )}

      <div
        className={`${sectionVariants({ type })} ${theme.background} ${theme.textColour} ${className ?? ""}`}
      >
        {!disableHeading && (
          <>
            <h2>{sectionTitle}</h2>
            {!disableUnderline && (
              <div
                className={`mx-auto mt-3 mb-12 h-1 w-[5%] md:w-[2%] rounded-full ${
                  underlineColourOverride ?? theme.underlineColour
                }`}
              />
            )}
          </>
        )}
        {children}
      </div>
    </section>
  );
}
