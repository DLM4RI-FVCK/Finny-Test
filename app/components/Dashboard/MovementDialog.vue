<template>
  <v-dialog :model-value="modelValue" max-width="360" @update:model-value="emitir('update:modelValue', $event)">
    <v-card class="movement-dialog" elevation="0">
      <v-card-title>Agregar {{ tipoMovimiento }}</v-card-title>
      <v-card-text>
        <div class="integration-placeholder">
          <v-icon color="success" size="32">mdi-tools</v-icon>
          <p class="mb-0">Aquí aparecerá el componente de {{ tipoMovimiento }}.</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" @click="emitir('update:modelValue', false)">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
// Recibimos del padre si el diálogo está abierto y qué movimiento debe mostrar.
defineProps({
  modelValue: Boolean,
  tipoMovimiento: String,
})

// Avisamos al padre cuando el diálogo debe cerrarse o cambiar de estado.
const emitir = defineEmits(['update:modelValue'])
</script>

<style scoped>
.movement-dialog {
  border-radius: 22px !important;
}

.integration-placeholder {
  align-items: center;
  background: #f8fcf4;
  border-radius: 16px;
  color: #777;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 16px;
  text-align: center;
}
</style>
