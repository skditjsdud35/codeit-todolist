import type { Config } from "tailwindcss";

const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': { max: '375px' }, // 375px 미만
      'md': { min: '376px', max: '745px' }, // 375px 이상 744px 이하
      'lg': { min: '746px' }
    },
    colors: {
      slate: {
        900: '#0F172A',
        800: '#1E293B',
        500: '#64748B',
        400: '#94A3B8',
        300: '#CBD5E1',
        200: '#E2E8F0',
        100: '#F1F5F9',
        50: '#F8FAFC',
      },
      violet: {
        600: '#7C3AED',
        100: '#EDE9FE'
      },
      rose: '#F43F5E',
      lime: '#BEF264',
      amber: '#92400E',
      white: '#FFFFFF'
    },
    spacing: {
      ...range(1, 1200).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {} as Record<string, string>),
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'nanum': ['NanumSquare', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
