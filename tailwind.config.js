/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        comfortaa: ['var(--font-comfortaa)'],
        roboto: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
