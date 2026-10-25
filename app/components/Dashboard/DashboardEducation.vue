<template>
  <NuxtLink to="/education" class="education-link" aria-label="Abrir la sección de Educación">
    <v-card class="education-card" elevation="0">
      <div class="education-icon" aria-hidden="true">
        <v-icon color="white" size="22">mdi-school</v-icon>
      </div>

      <div class="education-copy">
        <p class="education-eyebrow">Sigue aprendiendo</p>
        <h2>Educación financiera</h2>
        <p class="education-description">Estudia, practica y pon a prueba lo que sabes.</p>
        <span class="education-action">
          Explorar sección
          <v-icon size="16" aria-hidden="true">mdi-arrow-right</v-icon>
        </span>
      </div>
    </v-card>
  </NuxtLink>
</template>

<style scoped>
.education-link {
  color: inherit;
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
}

.education-link:focus-visible {
  border-radius: 20px;
  outline: 3px solid #252525;
  outline-offset: 3px;
}

.education-card {
  align-items: center;
  background: linear-gradient(120deg, #f2faec 0%, #fff 72%);
  border: 1px solid #e0efd8;
  border-radius: 20px !important;
  box-shadow: 0 5px 18px rgba(68, 91, 49, 0.07) !important;
  display: flex;
  gap: 13px;
  padding: 16px;
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.education-link:hover .education-card {
  box-shadow: 0 8px 22px rgba(68, 91, 49, 0.13) !important;
  transform: translateY(-1px);
}

.education-icon {
  align-items: center;
  background: #5bbe45;
  border-radius: 15px;
  display: flex;
  flex: 0 0 48px;
  height: 48px;
  justify-content: center;
}

.education-copy {
  flex: 1;
  min-width: 0;
}

.education-eyebrow {
  color: #4b8b3c;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin: 0 0 3px;
  text-transform: uppercase;
}

h2 {
  color: #252525;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0;
}

.education-description {
  color: #707070;
  font-size: 0.73rem;
  line-height: 1.4;
  margin: 4px 0 7px;
}

.education-action {
  align-items: center;
  color: #347d2b;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 800;
  gap: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .education-card {
    transition: none;
  }
}
</style>
