/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#E0F7FA',
          DEFAULT: '#81D4FA', // 调浅
          dark: '#4FC3F7', // 调浅
        },
        green: {
          light: '#E8F5E9',
          DEFAULT: '#81C784', // 调浅
          dark: '#66BB6A', // 调浅
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#BDBDBD', // 调浅
          dark: '#9E9E9E', // 调浅
        },
        white: '#FFFFFF',
      },
    },
  },
};
