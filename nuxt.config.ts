// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            REPO: process.env.PUBLIC_REPO,
            GH_PAGES_PREFIX: process.env.PUBLIC_GH_PAGES_PREFIX,
        },
    },
});
