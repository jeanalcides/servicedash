/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        openNotify: {
          '0%': { width: '0px' },
          '50%': { width: '200px' },
        }
      }
    },
    colors: {
      gray: {
        '100': '#E1E0E5',
        '200': '#87868B',
        '300': '#5A5860',
        '400': '#25262E',
        '500': '#1C1B22',
      }
    }
  },
  plugins: [],
}
