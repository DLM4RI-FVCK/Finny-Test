<template>
  <v-bottom-navigation
    v-model="pestanaSeleccionada"
    class="bottom-nav"
    grow
    color="success"
  >
    <v-btn value="Inicio" class="btn-color" @click="navigateTo('/dashboard')">
      <v-icon>mdi-home-variant</v-icon>
      <span>Inicio</span>
    </v-btn>
    <v-btn value="Educación" @click="navigateTo('/education')">
      <v-icon>mdi-book-open-page-variant</v-icon>
      <span>Educación</span>
    </v-btn>
    <v-btn value="Config" @click="navigateTo('/config')">
      <v-icon>mdi-cog-outline</v-icon>
      <span>Config</span>
    </v-btn>
    <v-btn value="test" @click="navigateTo('/test')">
      <v-icon>mdi-send</v-icon>
      <span>Prueba</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { ref } from "vue";

// v-model guarda cuál pestaña de la navegación de Vuetify está seleccionada.
const pestanaSeleccionada = ref('Inicio')
</script>

<style scoped>
.bottom-nav {
  border-radius: 22px 22px 0 0 !important;
  bottom: 0;
  box-shadow: 0 -5px 18px rgba(68, 91, 49, 0.1) !important;
  height: 70px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  position: fixed !important;
  width: 100% !important;
  max-width: 672px !important;
  z-index: 4;
  background-color: #ffffff !important;
}

.bottom-nav :deep(.v-btn) {
  min-width: 0;
  opacity: 1;
  text-transform: none;
}

.bottom-nav :deep(.v-icon) {
  color: #808080 !important;
  opacity: 1 !important;
}

.bottom-nav :deep(.v-btn__content) {
  font-size: 0.65rem;
  color: #808080 !important;
  gap: 3px;
}
</style>
