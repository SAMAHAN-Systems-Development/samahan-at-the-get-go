import type { Config } from "tailwindcss";

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
      appleGaramound: ["var(--font-appleGaramound)"],
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
  plugins: [],
} satisfies Config;

export default config;
