<template>
  <v-card class="test-card pa-6 text-center w-100" elevation="0">
    <h1 class="text-h5 font-weight-bold mb-4 text-black">Prueba de Server</h1>

    <p v-if="postStore.loading" class="text-grey">Cargando publicación...</p>
    <p v-else-if="postStore.error" class="text-error">Error: {{ postStore.error }}</p>
    <div v-else class="post-details text-left">
      <p class="mb-2">
        <strong class="text-success">ID de publicación:</strong> <span class="texto-prueba">{{ postStore.post.id }}</span>
      </p>
      <p class="mb-2">
        <strong class="text-success">ID de usuario:</strong> <span class="texto-prueba"> {{ postStore.post.userId }}</span>
      </p>
      <p class="mb-2">
        <strong class="text-success">Título:</strong> <span class="texto-prueba">  {{ postStore.post.title }} </span>
      </p>
      <p class="mb-0">
        <strong class="text-success">Contenido:</strong> <span class="texto-prueba" >  {{ postStore.post.body }} </span>
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { usePostStore } from '~/stores/post'

const postStore = usePostStore()
await postStore.fetchPost()
</script>

<style scoped>
.test-card {
  background: #ffffff;
  border: 1px solid #eef3eb;
  border-radius: 20px !important;
  box-shadow: 0 5px 18px rgba(68, 91, 49, 0.06) !important;
  max-width: 100%;
}

.post-details {
  background: #fdfbf7;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #f2ece0;
}

.texto-prueba{
  color: black;
}
</style>
