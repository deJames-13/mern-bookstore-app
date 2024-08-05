/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Rubik', 'system-ui'],
      serif: ['Rubik', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      body: ['"Rubik"', 'Font Awesome'],
    },
  },
  plugins: [require('daisyui')],
};
