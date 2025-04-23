export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY
    }
  }
})
