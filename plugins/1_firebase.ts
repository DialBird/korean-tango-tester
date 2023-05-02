import { initializeApp } from 'firebase/app'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseApp = initializeApp({
    apiKey: config.public.fbApiKey,
    authDomain: config.public.fbAuthDomain,
    projectId: config.public.fbProjectId,
    storageBucket: config.public.fbStorageBucket,
    messagingSenderId: config.public.fbMessagingSenderId,
    appId: config.public.fbAppId,
    measurementId: config.public.fbMeasurementId,
  })

  nuxtApp.vueApp.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [VueFireFirestoreOptionsAPI()],
  })
})
