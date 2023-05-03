// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      fbApiKey: process.env.NUXT_PUBLIC_FB_API_KEY || '',
      fbAuthDomain: process.env.NUXT_PUBLIC_FB_AUTH_DOMAIN || '',
      fbProjectId: process.env.NUXT_PUBLIC_FB_PROJECT_ID || '',
      fbStorageBucket: process.env.NUXT_PUBLIC_FB_STORAGE_BUCKET || '',
      fbMessagingSenderId: process.env.NUXT_PUBLIC_FB_MESSAGING_SENDER_ID || '',
      fbAppId: process.env.NUXT_PUBLIC_FB_APP_ID || '',
      fbMeasurementId: process.env.NUXT_PUBLIC_FB_MEASUREMENT_ID || '',
    },
  },
})
