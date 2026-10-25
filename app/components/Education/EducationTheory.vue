<template>
  <section class="theory-section" aria-label="Lecciones de educación financiera">
    <header class="section-heading">
      <p class="eyebrow">Conceptos básicos</p>
      <h2>Aprende a organizar tu dinero</h2>
      <p class="section-description">Lee cada tema y revisa los ejemplos para entender cómo usarlo en tu día a día.</p>
    </header>

    <article v-for="tema in temas" :key="tema.titulo" class="theory-card">
      <div class="topic-heading">
        <div class="topic-icon">
          <v-icon size="21" aria-hidden="true">{{ tema.icono }}</v-icon>
        </div>
        <h3>{{ tema.titulo }}</h3>
      </div>
      <p class="topic-description">{{ tema.descripcion }}</p>
      <div class="example">
        <v-icon size="18" aria-hidden="true">mdi-lightbulb-outline</v-icon>
        <p><strong>Ejemplo:</strong> {{ tema.ejemplo }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
const temas = [
  {
    titulo: 'Ingresos y gastos',
    icono: 'mdi-cash-plus',
    descripcion: 'Los ingresos son el dinero que recibes. Los gastos son el dinero que usas para comprar algo o pagar un servicio. Conocer ambos te ayuda a tomar mejores decisiones.',
    ejemplo: 'Si recibes $30 por una tarea, esos $30 son un ingreso. Si gastas $8 en materiales, esos $8 son un gasto.',
  },
  {
    titulo: 'Necesidades y deseos',
    icono: 'mdi-scale-balance',
    descripcion: 'Una necesidad es algo importante para tu bienestar, como comida o transporte. Un deseo es algo que te gustaría tener, pero que puede esperar.',
    ejemplo: 'Comprar el almuerzo puede ser una necesidad; comprar un juguete nuevo puede ser un deseo.',
  },
  {
    titulo: 'Presupuesto',
    icono: 'mdi-calculator-variant-outline',
    descripcion: 'Un presupuesto es un plan para decidir cómo usar el dinero que tienes. Puedes separar una parte para tus necesidades, otra para tus deseos y otra para ahorrar.',
    ejemplo: 'Si recibes $20, puedes guardar $5 y planear cómo usar los $15 restantes.',
  },
  {
    titulo: 'Ahorro y metas',
    icono: 'mdi-piggy-bank-outline',
    descripcion: 'Ahorrar significa guardar una parte de tu dinero para usarla más adelante. Tener una meta concreta te ayuda a mantener el hábito.',
    ejemplo: 'Si quieres comprar algo que cuesta $12, puedes ahorrar $3 cada semana durante cuatro semanas.',
  },
]
</script>

<style scoped>
.theory-section {
  margin-top: 18px;
}

.section-heading {
  margin: 0 2px 12px;
}

.eyebrow {
  color: #5a8d4d;
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

.theory-card {
  background: #fff;
  border: 1px solid #f0e9dd;
  border-radius: 17px;
  box-shadow: 0 4px 14px rgba(68, 91, 49, 0.05);
  margin-top: 10px;
  padding: 15px;
}

.topic-heading {
  align-items: center;
  display: flex;
  gap: 10px;
}

.topic-icon {
  align-items: center;
  background: #e8f6df;
  border-radius: 12px;
  color: #347d2b;
  display: flex;
  flex: 0 0 40px;
  height: 40px;
  justify-content: center;
}

.topic-heading h3 {
  color: #252525;
  font-size: 0.92rem;
  font-weight: 800;
  margin: 0;
}

.topic-description {
  color: #626262;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 11px 0 0;
}

.example {
  align-items: flex-start;
  background: #f7f9f6;
  border-radius: 11px;
  color: #4b7641;
  display: flex;
  gap: 7px;
  margin-top: 11px;
  padding: 9px;
}

.example :deep(.v-icon) {
  flex: 0 0 auto;
  margin-top: 1px;
}

.example p {
  color: #4f5e4b;
  font-size: 0.75rem;
  line-height: 1.45;
  margin: 0;
}

.example strong {
  color: #347d2b;
}
</style>
