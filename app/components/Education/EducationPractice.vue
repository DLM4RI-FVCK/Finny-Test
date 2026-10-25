<template>
  <section class="practice-section" aria-label="Ejercicios prácticos">
    <header class="section-heading">
      <p class="eyebrow">Ponlo en práctica</p>
      <h2>Resuelve estos ejercicios</h2>
      <p class="section-description">Intenta resolver cada situación antes de mostrar la respuesta.</p>
    </header>

    <article v-for="(ejercicio, index) in ejercicios" :key="ejercicio.titulo" class="exercise-card">
      <div class="exercise-number">Ejercicio {{ index + 1 }}</div>
      <h3>{{ ejercicio.titulo }}</h3>
      <p class="exercise-question">{{ ejercicio.pregunta }}</p>
      <v-btn
        color="success"
        variant="tonal"
        rounded="lg"
        class="answer-button"
        @click="mostrarRespuesta[index] = !mostrarRespuesta[index]"
      >
        {{ mostrarRespuesta[index] ? 'Ocultar respuesta' : 'Ver respuesta' }}
      </v-btn>
      <p v-if="mostrarRespuesta[index]" class="answer">
        <strong>Respuesta:</strong> {{ ejercicio.respuesta }}
      </p>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mostrarRespuesta = ref([])

const ejercicios = [
  {
    titulo: 'Calcula cuánto te queda',
    pregunta: 'Recibiste $20 para la semana y quieres ahorrar $5. ¿Cuánto puedes usar?',
    respuesta: 'Puedes usar $15, porque $20 - $5 = $15.',
  },
  {
    titulo: 'Alcanza una meta',
    pregunta: 'Quieres comprar un libro de $16. Si ahorras $4 cada semana, ¿cuántas semanas necesitas?',
    respuesta: 'Necesitas 4 semanas, porque $16 dividido entre $4 es igual a 4.',
  },
  {
    titulo: 'Compara antes de comprar',
    pregunta: 'Tienes $10. Un cuaderno cuesta $6 y un lápiz cuesta $2. ¿Cuánto te queda si compras ambos?',
    respuesta: 'Te quedan $2, porque $10 - $6 - $2 = $2.',
  },
  {
    titulo: 'Distingue necesidad y deseo',
    pregunta: 'Tienes dinero para comprar el almuerzo o un juguete. ¿Cuál debería ser prioridad si tienes hambre?',
    respuesta: 'El almuerzo, porque comer es una necesidad. El juguete puede esperar.',
  },
]
</script>

<style scoped>
.practice-section {
  margin-top: 18px;
}

.section-heading {
  margin: 0 2px 12px;
}

.eyebrow {
  color: #946700;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin: 0 0 3px;
  text-transform: uppercase;
}

.section-heading h2 {
  color: #252525;
  font-size: 1.08rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
}

.section-description {
  color: #777;
  font-size: 0.8rem;
  line-height: 1.45;
  margin: 5px 0 0;
}

.exercise-card {
  background: #fff;
  border: 1px solid #f0e9dd;
  border-radius: 17px;
  box-shadow: 0 4px 14px rgba(68, 91, 49, 0.05);
  margin-top: 10px;
  padding: 15px;
}

.exercise-number {
  color: #946700;
  font-size: 0.66rem;
  font-weight: 800;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.exercise-card h3 {
  color: #252525;
  font-size: 0.92rem;
  font-weight: 800;
  margin: 0;
}

.exercise-question {
  color: #626262;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 8px 0 12px;
}

.answer-button {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: none;
}

.answer {
  background: #f7f9f6;
  border-radius: 10px;
  color: #4f5e4b;
  font-size: 0.78rem;
  line-height: 1.5;
  margin: 11px 0 0;
  padding: 10px;
}

.answer strong {
  color: #347d2b;
}
</style>
