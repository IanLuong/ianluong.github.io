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
        fade2s: "fade 2s ease-in-out",
        fade4s: "fade 4s ease-in-out",
        fade6s: "fade 6s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
