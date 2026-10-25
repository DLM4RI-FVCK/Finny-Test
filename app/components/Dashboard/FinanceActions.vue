<template>
  <div class="finance-dial-wrapper">
    <v-speed-dial v-model="estaAbierto" direction="top" location="bottom end" transition="slide-y-reverse-transition">
      <template #activator="{ props }">
        <v-fab
          v-bind="props"
          class="add-fab"
          color="success"
          size="52"
          :icon="estaAbierto ? 'mdi-close' : 'mdi-plus'"
          :aria-label="estaAbierto ? 'Cerrar acciones financieras' : 'Abrir acciones financieras'"
          elevation="0"
        />
      </template>
      <v-btn class="action-btn income-btn" size="small" prepend-icon="mdi-arrow-up" elevation="0" @click="seleccionarAccion('ingreso')">Ingreso</v-btn>
      <v-btn class="action-btn debt-btn" size="small" prepend-icon="mdi-credit-card-outline" elevation="0" @click="seleccionarAccion('deuda')">Deuda</v-btn>
      <v-btn class="action-btn saving-btn" size="small" prepend-icon="mdi-piggy-bank" elevation="0" @click="seleccionarAccion('ahorro')">Ahorro</v-btn>
    </v-speed-dial>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Este evento avisa a la página qué acción eligió la persona.
const emitir = defineEmits(['seleccionar'])

// v-model mantiene sincronizado si el menú de Vuetify está abierto.
const estaAbierto = ref(false)

function seleccionarAccion(accion) {
  estaAbierto.value = false
  emitir('seleccionar', accion)
}
</script>

<style scoped>
.finance-dial-wrapper {
  bottom: 82px !important;
  position: fixed !important;
  right: max(18px, calc(50vw - 336px + 18px)) !important;
  z-index: 5;
}

.add-fab {
  box-shadow: none !important;
}

.action-btn {
  border-radius: 18px !important;
  color: #fff !important;
  font-size: 0.68rem !important;
  font-weight: 800;
  min-width: 96px;
  padding-inline: 10px !important;
}

.income-btn {
  background: #5bbe45 !important;
}

.debt-btn {
  background: #d95f70 !important;
}

.saving-btn {
  background: #ffb43f !important;
}
</style>
