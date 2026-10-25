<template>
  <div class="education-options" aria-label="Secciones de educación">
    <button
      v-for="opcion in opciones"
      :key="opcion.id"
      type="button"
      :class="['education-option', { 'education-option--active': modelValue === opcion.id }]"
      :aria-pressed="modelValue === opcion.id"
      @click="$emit('update:modelValue', opcion.id)"
    >
      <v-icon size="20" aria-hidden="true">{{ opcion.icono }}</v-icon>
      <span>{{ opcion.nombre }}</span>
    </button>
  </div>
</template>

<script setup>
// modelValue recibe la opción seleccionada; update:modelValue avisa al padre cuando cambia.
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

// Este evento permite usar v-model en el componente que muestra estos botones.
defineEmits(['update:modelValue'])

const opciones = [
  { id: 'teoria', nombre: 'Teoría', icono: 'mdi-book-open-variant' },
  { id: 'practica', nombre: 'Práctica', icono: 'mdi-puzzle-outline' },
  { id: 'examen', nombre: 'Examen', icono: 'mdi-clipboard-check-outline' },
]
</script>

<style scoped>
.education-options {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.education-option {
  align-items: center;
  background: #fff;
  border: 1px solid #eee8dc;
  border-radius: 14px;
  color: #555;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  gap: 6px;
  justify-content: center;
  min-height: 68px;
  padding: 8px 4px;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
}

.education-option--active {
  background: #e8f6df;
  border-color: #b8dda9;
  color: #347d2b;
}

.education-option:focus-visible {
  outline: 3px solid #252525;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .education-option {
    transition: none;
  }
}
</style>
