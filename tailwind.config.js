/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "karla": "Karla"
            },
            colors: {
                "green-light": "hsl(148, 38%, 91%)",
                "green-medium": "hsl(169, 82%, 27%)",
                "green-dark": "hsl(169, 82%, 20%)",
                "grey-medium": "hsl(186, 15%, 59%)",
                "grey-dark": "hsl(187, 24%, 22%)",
                "red": "hsl(0, 66%, 54%)"
            },
            keyframes: {
                fade: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            },
            animation: {
                fade: 'fade 0.25s ease-in-out 1'
            }
        },
    },
    plugins: [],
}

