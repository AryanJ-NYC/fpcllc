import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        anzac: {
          '50': '#faf9ec',
          '100': '#f5f0cc',
          '200': '#ebdf9d',
          '300': '#e0c864',
          '400': '#d5b038',
          '500': '#c69b2c',
          '600': '#aa7a24',
          '700': '#885a20',
          '800': '#724921',
          '900': '#623e21',
          '950': '#382010',
        },
      },
      fontFamily: {
        'grey-qo': ['var(--font-grey-qo)'],
        sans: ['var(--font-lato)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
};
export default config;
