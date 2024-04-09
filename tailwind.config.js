/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#005aff',
                    secondary: '#00a69e',
                    accent: '#005aff',
                    neutral: '#1e1d18',
                    'base-100': '#fcfcfc',
                    info: '#00d2ff',
                    success: '#00f2b0',
                    warning: '#ffc300',
                    error: '#ff85a3',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
