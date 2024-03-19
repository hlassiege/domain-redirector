// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            token: "toto",
            redirectUrl:
                process.env.REDIRECT_URL || "https://eventuallycoding.com",
        },
    },
});
