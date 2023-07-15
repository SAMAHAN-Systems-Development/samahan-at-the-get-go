import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // For Storybook
    "./src/**/*.mdx",
    "./src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        "title-lg": "6rem",
        "title-md": "2.8rem",
        "title-sm": "2.3rem",
      },
      fontSize: {
        "title-lg": "5.6rem",
        "title-md": "2.5rem",
        "title-sm": "2rem",
      },
      borderRadius: {
        "section-card": "20px",
        card: "15px ",
      },
      borderWidth: {
        card: "2.5px",
      },
      textShadow: {
        soft: "1px 1px 3px rgba(0, 0, 0, 0.1)",
        bold: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 4px 3px rgba(0,0,0,0.3)",
        "close-heavy":
          "0px 4px 3px rgba(0,0,0,0.4),  0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",
        outline:
          "2px 2px 0px rgba(0, 0, 0, 0.8), -2px -2px 0px rgba(0, 0, 0, 0.8), 2px -2px 0px rgba(0, 0, 0, 0.8), -2px 2px 0px rgba(0, 0, 0, 0.8)",
      },
    },
    colors: {
      white: "rgb(var(--color-white) / <alpha-value>)",
      blue: "rgb(var(--color-blue) / <alpha-value>)",
      lightBlue: "rgb(var(--color-lightBlue) / <alpha-value>)",
      orange: "rgb(var(--color-orange) / <alpha-value>)",
      yellow: "rgb(var(--color-yellow) / <alpha-value>)",
      lightYellow: "rgb(var(--color-lightYellow) / <alpha-value>)",
      beige: "rgb(var(--color-beige) / <alpha-value>)",
    },
    fontFamily: {
      artega: ["var(--font-artega)"],
      appleGaramond: ["var(--font-appleGaramond)"],
      "appleGaramond-light": ["var(--font-appleGaramondLight)"],
      "appleGaramond-bold": ["var(--font-appleGaramondBold)"],
      sans: [
        "Helvetica",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;

export default config;
