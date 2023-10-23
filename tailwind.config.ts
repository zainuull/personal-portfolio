import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        menuPrimary: '#386261',
        menuSecondary: '#4C7B7A',
        primary: '#0A3130',
        secondary: '#FCB336',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
};
export default config;
