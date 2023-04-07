/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        almostWhite: '#F8F8F8',
        almostGrey: '#8D8D8D',
        almostBlack: '#212121',

        amaranthPink: '#F19CBB',
        peach: '#FFCBA4',
        navajoWhite: '#FFDEAD',
        ivory: '#FFFFF0',
        celeste: '#B2FFFF',
        columbiaBlue: '#B9D9EB',
        mauve: '#E0B0FF',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
