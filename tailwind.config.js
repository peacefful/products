/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        "3xl": '0px 4px 50px 0px #2667FF26'
      },
      colors: {
        default: '#2667FF',
        baseSilver: '#E7E7E7',
        darkSilver: '#5C5C5C'
      }
    }
  },
  plugins: []
}
