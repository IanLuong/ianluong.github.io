import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
} satisfies Config;
