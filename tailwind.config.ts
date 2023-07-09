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
      white: "var(--color-white)",
      blue: "var(--color-blue)",
      "blue-opacity-25": "rgba(var(--color-blue), 0.25)",
      lightBlue: "var(--color-light-blue)",
      orange: "var(--color-orange)",
      yellow: "var(--color-yellow)",
      lightYellow: "var(--color-light-yellow)",
      beige: "var(--color-beige)",
    },
    fontFamily: {
      artega: ["var(--font-artega)"],
      appleGaramound: ["var(--font-appleGaramound)"],
      // helvetica: ["var(--font-helvetica)"],
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
