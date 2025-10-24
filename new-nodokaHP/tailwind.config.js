/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nodoka-orange': '#FF6B35',
        'nodoka-orange-light': '#FF8A5B',
        'nodoka-orange-dark': '#E55A2B',
        'nodoka-white': '#FFFFFF',
        'nodoka-gray': '#F8F9FA',
        'nodoka-dark': '#2C3E50',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
