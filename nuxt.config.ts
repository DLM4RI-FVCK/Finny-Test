// https://nuxt.com/docs/api/configuration/nuxt-config
// esto es importar el plugin vite-vuetify
// @ts-expect-error vite-plugin-vuetify is resolved by Vite at runtime.
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
 // esto esta en la configuracion e instalacion de VUETIFY con nuxt, son nodos necesarios para el funcionamiento de Vuetify
   build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})