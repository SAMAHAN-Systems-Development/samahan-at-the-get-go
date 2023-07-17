import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // For Storybook
    './src/**/*.mdx',
    './src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight: {
        'title-lg': '6rem',
        'title-md': '2.8rem',
        'title-sm': '2.3rem',
      },
      fontSize: {
        'title-lg': '5.6rem',
        'title-md': '2.5rem',
        'title-sm': '2rem',
      },
      borderRadius: {
        'section-card': '20px',
        card: '15px ',
      },
      borderWidth: {
        card: '2.5px',
      },
      textShadow: {
        soft: '1px 1px 3px rgba(0, 0, 0, 0.1)',
        bold: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 4px 3px rgba(0,0,0,0.3)',
        'close-heavy':
          '0px 4px 3px rgba(0,0,0,0.4),  0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
        outline:
          '2px 2px 0px rgba(0, 0, 0, 0.8), -2px -2px 0px rgba(0, 0, 0, 0.8), 2px -2px 0px rgba(0, 0, 0, 0.8), -2px 2px 0px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      lightBlue: 'rgb(var(--color-lightBlue) / <alpha-value>)',
      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      lightYellow: 'rgb(var(--color-lightYellow) / <alpha-value>)',
      beige: 'rgb(var(--color-beige) / <alpha-value>)',
      darkBeige: 'rgb(var(--color-darkBeige) / <alpha-value>)',
    },
    fontFamily: {
      artega: ['var(--font-artega)'],
      appleGaramond: ['var(--font-appleGaramond)'],
      'appleGaramond-light': ['var(--font-appleGaramondLight)'],
      'appleGaramond-bold': ['var(--font-appleGaramondBold)'],
      sans: [
        'Helvetica',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    screens: {
      xsm: '384px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
      addUtilities,
    }: {
      matchUtilities: Function;
      addUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
      addUtilities({
        '.container-xs': {
          '@apply container max-w-[22] mx-auto xsm:px-0': {},
        },
        '.container-sm': {
          '@apply container max-w-[33rem] mx-auto sm:px-0': {},
        },
        '.container-md': {
          '@apply container max-w-[45rem] mx-auto md:px-0': {},
        },
        '.container-lg': {
          '@apply container max-w-[58rem] mx-auto lg:px-0': {},
        },
        '.container-xl': {
          '@apply container max-w-[71rem] mx-auto xl:px-0': {},
        },
        '.container-2xl': {
          '@apply container max-w-[81.5rem] mx-auto 2xl:px-0': {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
