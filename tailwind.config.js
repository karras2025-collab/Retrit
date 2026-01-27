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
                    50: '#e6f2ed',
                    100: '#cce5db',
                    200: '#99cbb7',
                    300: '#66b193',
                    400: '#33976f',
                    500: '#046038',
                    600: '#034f2d',
                    700: '#024024',
                    800: '#01321c',
                    900: '#01261a',
                    950: '#001a10',
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
