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
          variables: {
            "font-family": "'Outfit', sans-serif",
          },
          colors: {
            primary: colors.orange.darken1,
            second: colors.shades.white,
            textos: "#443c25",
            textos2: "#1D1B20",
            botones: "#F18018",        
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
