import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        card: '344/480',
      },
      dropShadow: {
        DEFAULT: [
          '0px 16px 24px rgba(0, 0, 0, 0.1)',
          '0px 4px 8px rgba(0, 0, 0, 0.15)',
        ],
      },
      boxShadow: {
        DEFAULT: '0px 4px 36px 2px rgba(0, 0 ,0, 0.05)',
        hover: '0px 4px 36px 2px rgba(0, 0 ,0, 0.12)',
      },
      maxWidth: {
        modal: '424px',
      },
      width: {
        modal: '424px',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1368px',
      '2xl': '1536px',
    },
    dropShadow: {
      avatar: '0px 2px 16px rgba(0, 0, 0, 0.2)',
      artwork: [
        '0px 4px 8px rgba(0, 0, 0, 0.2)',
        '0px 16px 24px rgba(0, 0, 0, 0.2)',
      ],
    },
  },
  plugins: [],
};
export default config;
