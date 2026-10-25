<template>
  <main class="education-page">
    <EducationIntro />

    <!-- v-model guarda aquí la sección activa y recibe los cambios de EducationOptions. -->
    <EducationOptions v-model="opcionSeleccionada" />

    <EducationTheory v-if="opcionSeleccionada === 'teoria'" />
    <EducationPractice v-else-if="opcionSeleccionada === 'practica'" />
    <EducationQuiz v-else-if="opcionSeleccionada === 'examen'" />
    
  </main>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'phone',
})

const opcionSeleccionada = ref('teoria')
</script>

<style scoped>
.education-page {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 672px;
  padding: 16px 16px 92px;
  width: 100%;
}
</style>
