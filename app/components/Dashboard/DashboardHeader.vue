<template>
  <header class="dashboard-header">
    <v-avatar class="profile-avatar" size="54" aria-label="Foto de perfil">
      <v-icon color="success" size="30">mdi-account</v-icon>
    </v-avatar>
    <div class="welcome-copy">
      <h1 class="welcome-title">¡Hola, {{ nombreUsuario }}!</h1>
      <p class="welcome-subtitle mb-0">Finny está orgulloso de ti ✨</p>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useUsuarioStore } from '~/stores/usuario'

const usuarioStore = useUsuarioStore()
const nombreUsuario = computed(() => {
  const usuario = usuarioStore.usuario
  return usuario ? `${usuario.nombre} ${usuario.apellido}`.trim() : 'usuario'
})
</script>

<style scoped>
.dashboard-header {
  align-items: center;
  display: flex;
  gap: 13px;
  padding: 8px 4px 12px;
}

.profile-avatar {
  background: #ddf4c9;
  border: 2px solid #c6e9ad;
  flex: 0 0 auto;
}

.welcome-copy {
  min-width: 0;
}

.welcome-title {
  color: #252525;
  font-size: 1.12rem;
  font-weight: 800;
  line-height: 1.2;
}

.welcome-subtitle {
  color: #777;
  font-size: 0.8rem;
}
</style>
