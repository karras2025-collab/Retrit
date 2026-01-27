/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f0eb',
                    100: '#cce1d6',
                    200: '#99c3ad',
                    300: '#66a584',
                    400: '#33875b',
                    500: '#1f6040',
                    600: '#185033',
                    700: '#124028',
                    800: '#0d3320',
                    900: '#0a2819',
                    950: '#071c11',
                },
                gold: {
                    50: '#fefbea',
                    100: '#fdf5c7',
                    200: '#fce88a',
                    300: '#f6d34f',
                    400: '#d4af37',
                    500: '#c9a227',
                    600: '#b8860b',
                    700: '#946b0a',
                    800: '#7a5410',
                    900: '#664512',
                },
                sand: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                cream: '#faf8f5',
                light: '#f5f5f0',
            },
            fontFamily: {
                serif: ['Merriweather', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
