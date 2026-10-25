<template>
  <section class="quiz-section" aria-label="Examen de educación financiera">
    <header class="section-heading">
      <p class="eyebrow">Comprueba lo aprendido</p>
      <h2>Examen rápido</h2>
      <p class="section-description">Elige una respuesta para cada pregunta y revisa tu resultado.</p>
    </header>

    <article v-for="(pregunta, index) in preguntas" :key="pregunta.texto" class="question-card">
      <div class="question-number">Pregunta {{ index + 1 }}</div>
      <h3>{{ pregunta.texto }}</h3>

      <div class="answers">
        <v-btn
          v-for="respuesta in pregunta.opciones"
          :key="respuesta"
          :color="colorRespuesta(index, respuesta)"
          :variant="selecciones[index] === respuesta ? 'tonal' : 'outlined'"
          rounded="lg"
          class="answer-option"
          @click="selecciones[index] = respuesta"
        >
          {{ respuesta }}
        </v-btn>
      </div>

      <p
        v-if="selecciones[index]"
        :class="['feedback', selecciones[index] === pregunta.correcta ? 'feedback--correct' : 'feedback--wrong']"
      >
        {{ selecciones[index] === pregunta.correcta ? pregunta.explicacionCorrecta : pregunta.explicacionIncorrecta }}
      </p>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selecciones = ref([])

const preguntas = [
  {
    texto: 'Recibiste $20 y guardaste $5. ¿Cuánto te queda para usar?',
    opciones: ['$10', '$15', '$25'],
    correcta: '$15',
    explicacionCorrecta: '¡Correcto! $20 - $5 = $15.',
    explicacionIncorrecta: 'Resta el ahorro al dinero recibido: $20 - $5.',
  },
  {
    texto: '¿Cuál de estos ejemplos es un ingreso?',
    opciones: ['El dinero que recibes por una tarea', 'Comprar una merienda', 'Pagar el transporte'],
    correcta: 'El dinero que recibes por una tarea',
    explicacionCorrecta: '¡Muy bien! Un ingreso es dinero que recibes.',
    explicacionIncorrecta: 'Un ingreso es dinero que recibes, no dinero que gastas.',
  },
  {
    texto: '¿Cuál suele ser una necesidad?',
    opciones: ['Un juguete nuevo', 'El almuerzo', 'Un videojuego'],
    correcta: 'El almuerzo',
    explicacionCorrecta: '¡Correcto! Alimentarse es una necesidad básica.',
    explicacionIncorrecta: 'Piensa en algo importante para el bienestar diario, como alimentarse.',
  },
  {
    texto: 'Quieres ahorrar $12 y puedes guardar $3 cada semana. ¿Cuántas semanas necesitas?',
    opciones: ['3 semanas', '4 semanas', '6 semanas'],
    correcta: '4 semanas',
    explicacionCorrecta: '¡Así es! $12 dividido entre $3 es igual a 4 semanas.',
    explicacionIncorrecta: 'Divide la meta ($12) entre lo que ahorras cada semana ($3).',
  },
  {
    texto: '¿Para qué sirve un presupuesto?',
    opciones: ['Para planear cómo usar el dinero', 'Para gastar todo el dinero', 'Para evitar tener metas'],
    correcta: 'Para planear cómo usar el dinero',
    explicacionCorrecta: '¡Correcto! Un presupuesto ayuda a organizar tus ingresos y gastos.',
    explicacionIncorrecta: 'Un presupuesto es un plan para organizar el dinero.',
  },
]

function colorRespuesta(indice, respuesta) {
  if (selecciones.value[indice] !== respuesta) return 'success'
  return respuesta === preguntas[indice].correcta ? 'success' : 'error'
}
</script>

<style scoped>
.quiz-section {
  margin-top: 18px;
}

.section-heading {
  margin: 0 2px 12px;
}

.eyebrow {
  color: #4666a8;
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

.question-card {
  background: #fff;
  border: 1px solid #f0e9dd;
  border-radius: 17px;
  box-shadow: 0 4px 14px rgba(68, 91, 49, 0.05);
  margin-top: 10px;
  padding: 15px;
}

.question-number {
  color: #4666a8;
  font-size: 0.66rem;
  font-weight: 800;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.question-card h3 {
  color: #252525;
  font-size: 0.88rem;
  font-weight: 800;
  line-height: 1.4;
  margin: 0 0 11px;
}

.answers {
  display: grid;
  gap: 7px;
  grid-template-columns: 1fr;
}

.answer-option {
  font-size: 0.75rem;
  font-weight: 700;
  justify-content: flex-start;
  min-height: 38px;
  text-transform: none;
  white-space: normal;
}

.feedback {
  border-radius: 10px;
  font-size: 0.76rem;
  line-height: 1.45;
  margin: 10px 0 0;
  padding: 9px;
}

.feedback--correct {
  background: #e8f6df;
  color: #347d2b;
}

.feedback--wrong {
  background: #fff0ed;
  color: #a33d2e;
}
</style>
