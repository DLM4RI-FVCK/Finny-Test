<template>
  <div class="test-page-container">
    <TestCard />
  </div>
</template>

<script setup lang="ts">


definePageMeta({
  layout: 'phone',
})
</script>

<style scoped>
.test-page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  box-sizing: border-box;
  color: black;
}
</style>
