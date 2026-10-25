<template>
  <v-container class="dashboard-shell pa-0" fluid>
    <DashboardHeader class="mb-3" />
    <DashboardStreak />

    <CarruselFinanzas class="mb-3" />

    <DashboardEducation />
    <FinnyTips />

    <TecUnicordoba />
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: 'phone',
})





</script>

<style scoped>
.dashboard-shell {
  background: #fffdf7;
  box-sizing: border-box;
  flex: 1 1 auto;
  height: calc(90vh - 76px);
  max-width: 672px;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  width: 100%;
  margin: 0 auto;
  padding: 14px 16px 88px !important;
}

@supports (height: 100dvh) {
  .dashboard-shell {
    height: calc(100dvh - 76px);
  }
}

@media (max-width: 360px) {
  .dashboard-shell {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}
</style>
