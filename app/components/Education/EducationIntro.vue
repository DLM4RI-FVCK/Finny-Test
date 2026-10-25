<template>
  <header class="education-intro">
    <div class="education-icon" aria-hidden="true">
      <v-icon color="white" size="24">mdi-school</v-icon>
    </div>
    <p class="eyebrow">Aprende a tu ritmo</p>
    <h1>Educación</h1>
    <p class="intro-description">
      Aprende sobre el manejo del dinero, practica con ejemplos y comprueba lo que sabes.
    </p>
  </header>
</template>

<style scoped>
.education-intro {
  padding: 18px 8px 20px;
  text-align: center;
}

.education-icon {
  align-items: center;
  background: #5bbe45;
  border-radius: 18px;
  display: flex;
  height: 56px;
  justify-content: center;
  margin: 0 auto 12px;
  width: 56px;
}

.eyebrow {
  color: #5a8d4d;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  margin: 0 0 4px;
  text-transform: uppercase;
}

h1 {
  color: #252525;
  font-size: 1.65rem;
  font-weight: 800;
  margin: 0;
}

.intro-description {
  color: #777;
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 8px auto 0;
  max-width: 420px;
}
</style>
