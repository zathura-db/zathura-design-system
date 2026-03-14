import { tv, VariantProps } from "tailwind-variants";
import type { ReactNode } from "react";

interface ToggleText {
  CloseText: string;
  OpenText: string;
}

const dropDownStyles = tv({
  slots: { button: "" },
  variants: {
    colour: {
      Orange: { button: "text-themeOrange" },
      Blue: { button: "text-themeBlue" },
      Green: { button: "text-themeGreen" },
      Red: { button: "text-themeRed" },
      Purple: { button: "text-themePurple" },
      Black: { button: "text-themeBlack" },
    },
  },
  defaultVariants: { colour: "Orange" },
});

export type DropDownProps = {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  primaryColour?: VariantProps<typeof dropDownStyles>["colour"];
  className?: string;
  toggleText?: ToggleText;
};

/**
 * A collapsible dropdown component with smooth animations and customizable color themes.
 */
export default function DropDown({
  isOpen,
  onToggle,
  children,
  primaryColour = "Orange",
  className,
  toggleText,
}: DropDownProps) {
  const { button } = dropDownStyles({ colour: primaryColour });

  return (
    <>
      <button
        onClick={onToggle}
        className={`mt-4 text-sm font-semibold ${className ?? button()} hover:underline flex items-center gap-2`}
      >
        {isOpen ? toggleText?.CloseText : toggleText?.OpenText}
        <span
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
