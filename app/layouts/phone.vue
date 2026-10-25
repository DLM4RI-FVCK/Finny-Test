<template>
  <v-main class="phone-layout">
    <div class="phone-container">
      <slot />
    </div>
    <FinanceActions @seleccionar="abrirPaginaMovimiento" />
    <DashboardBottomNavigation />
  </v-main>
</template>

<script setup>
function abrirPaginaMovimiento(tipoMovimiento) {
  navigateTo(`/${tipoMovimiento}`)
}
</script>

<style>
.phone-layout {
  box-sizing: border-box;
  flex: 1 1 0;
  height: 100vh;
  height: 100dvh;
  min-height: 0;
  max-height: 100vh;
  max-height: 100dvh;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #f7f9f6;
}

.phone-container {
  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100%;
  max-width: 672px;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #fffdf7;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (min-width: 673px) {
  .phone-container {
    box-shadow: 0 0 32px rgba(68, 91, 49, 0.08);
  }
}
</style>
