/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'inter': ["'Inter'", 'sans-serif'],
            'ibarra': ["'Ibarra Real Nova'", 'serif'],
        },
        extend: {},
    },
    plugins: [],
}
