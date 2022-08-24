/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'bay-photo': "url('img/bay_photo.jpg')",
    },
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
      ibarra: ["'Ibarra Real Nova'", "serif"],
    },
    extend: {
      colors: {
        'pink': '#FA9999',
        'dark-blue': '#002742',
        'light-blue': '#B8E1FF'
      },
      animation: {
        fade1s: "fade ease-in 1s",
        fade3s: "fade ease-in 3s",
        fade6s: "fade ease-in 6s",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "40%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
