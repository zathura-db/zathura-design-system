import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const button = tv({
  base: "rounded-md my-1",
  variants: {
    baseColour: {
      red: "bg-themeRed",
      orange: "bg-themeOrange",
      blue: "bg-themeBlue",
      green: "bg-themeGreen",
      purple: "bg-themePurple",
      black: "bg-themeBlack",
      orangeOutline:
        "bg-transparent border-2 border-themeOrange text-themeOrange",
    },
    textColour: {
      white: "text-white",
    },
    hoverStyle: {
      white:
        "hover:bg-transparent hover:outline outline-2 outline-white transition-colors duration-200",
      redOffset: "hover:bg-red-700",
      orangeOffset: "hover:bg-orange-600",
      blueOffset: "hover:bg-blue-700",
      greenOffset: "hover:bg-green-900",
      purpleOffset: "hover:bg-purple-700",
      blackOffset: "hover:bg-gray-800",
      orangeFill:
        "hover:bg-themeOrange hover:text-white transition-colors duration-200",
      orangeOutline:
        "hover:bg-transparent hover:border-themeOrange border-2 border-themeOrange",
    },
    buttonSize: {
      small: "py-2 px-4 font-bold",
      large: "px-6 py-3 font-bold",
    },
    display: {
      inline: "inline-block",
      block: "block w-full",
    },
  },
  defaultVariants: {
    baseColour: "red",
    display: "inline",
    hoverStyle: "white",
    textColour: "white",
    buttonSize: "large",
  },
});

/**
 * Button component props extending native button HTML attributes with variant options.
 */
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

/**
 * A customizable button component with theme colors, hover effects, and size variants.
 */
const Button: React.FC<ButtonProps> = ({
  hoverStyle,
  baseColour,
  textColour,
  display,
  buttonSize,
  className,
  ...props
}) => {
  return (
    <button
      className={button({
        baseColour,
        display,
        hoverStyle,
        textColour,
        buttonSize,
        className,
      })}
      {...props}
    />
  );
};

export default Button;
