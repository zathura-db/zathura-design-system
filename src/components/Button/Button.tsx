// components/Button.tsx
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
      orangeOutline: "bg-transparent border-2 border-themeOrange text-themeOrange",
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
      orangeFill: "hover:bg-themeOrange hover:text-white transition-colors duration-200",
      orangeOutline: "hover:bg-transparent hover:border-themeOrange border-2 border-themeOrange",
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
 * When `href` is provided the component renders as an `<a>` tag (SEO-friendly).
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * A customizable button component with theme colors, hover effects, and size variants.
 *
 * Features:
 * - Multiple color variants (Red, Orange, Blue, Green, Purple, Black)
 * - Configurable hover styles (White outline, Color offsets)
 * - Two size options (Small, Large)
 * - Display modes (Inline, Block)
 * - Full support for native button HTML attributes
 * - className override for custom styling
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with default styling
 * <Button>Click Me</Button>
 * ```
 *
 * @example
 * ```tsx
 * // Custom color and size
 * <Button baseColour="blue" buttonSize="small">
 *   Small Blue Button
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * // Block button with custom hover
 * <Button
 *   baseColour="orange"
 *   display="block"
 *   hoverStyle="orangeOffset"
 * >
 *   Full Width Button
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * // With onClick handler and custom className
 * <Button
 *   baseColour="green"
 *   onClick={() => console.log('Clicked')}
 *   className="shadow-lg"
 * >
 *   Submit
 * </Button>
 * ```
 *
 * @param {ButtonProps} props - Component props
 * @param {"red" | "orange" | "blue" | "green" | "purple" | "black"} [props.baseColour="red"] - Background color variant
 * @param {"white"} [props.textColour="white"] - Text color variant
 * @param {"white" | "redOffset" | "orangeOffset" | "blueOffset" | "greenOffset" | "purpleOffset" | "blackOffset"} [props.hoverStyle="white"] - Hover effect style
 * @param {"small" | "large"} [props.buttonSize="large"] - Button size variant
 * @param {"inline" | "block"} [props.display="inline"] - Display mode (inline-block or full-width block)
 * @param {string} [props.className] - Additional CSS classes to override or extend button styling
 *
 * @returns {JSX.Element} A styled button element
 */
const Button: React.FC<ButtonProps> = ({
  hoverStyle,
  baseColour,
  textColour,
  display,
  buttonSize,
  className,
  href,
  target,
  rel,
  ...props
}) => {
  const classes = button({
    baseColour,
    display,
    hoverStyle,
    textColour,
    buttonSize,
    className,
  });

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {props.children}
      </a>
    );
  }

  return <button className={classes} {...props} />;
};

export default Button;
