import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

import colors from "vuetify/util/colors";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.orange.darken1,
            textos: '#443c25',
            botones: '#F18018',
          }
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
