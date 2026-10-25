<template>
  <div class="config-container">
    <h1 class="text-h5 font-weight-bold">
      Configuración
    </h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'phone',
})
</script>

<style scoped>
.config-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  text-align: center;
}
</style>
