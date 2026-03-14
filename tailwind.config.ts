import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
      borderColor: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
      outlineColor: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-themeOrange",
    "bg-themeBlue",
    "bg-themeGreen",
    "bg-themeRed",
    "bg-themePurple",
    "bg-themeBlack",
    "border-themeOrange",
    "border-themeBlue",
    "border-themeGreen",
    "border-themeRed",
    "border-themePurple",
    "border-themeBlack",
    "text-themeOrange",
    "text-themeBlue",
    "text-themeGreen",
    "text-themeRed",
    "text-themePurple",
    "text-themeBlack",
    "outline-themeOrange",
    "outline-themeBlue",
    "outline-themeGreen",
    "outline-themeRed",
    "outline-themePurple",
    "outline-themeBlack",
    "bg-themeRedOffset",
  ],
};

export default config;
