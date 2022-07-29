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
        extend: {
            animation: {
                fade: 'fade 2s ease-in-out',
            },
            keyframes: {
                fade: {
                    '0%' : { opacity: 0 },
                    '100%': { opacity: 1 }
                },
            }
        },
    },
    plugins: [],
}
