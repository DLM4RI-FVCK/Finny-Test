<template>
  <v-container
    fluid
    class="fill-height pa-0 d-flex align-center justify-center bg-primary"
  >

    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" class="text-center d-flex flex-column align-center justify-center">

        <div class="logo-enter">
          <LogoFinny />
        </div>

        <h1 class="text-brown-darken-4 font-weight-bold text-h4 mt-6 text-enter">
          Cargando...
        </h1>

        <v-progress-circular
          indeterminate
          color="brown-darken-3"
          size="42"
          class="mt-6 spinner-enter"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.logo-enter,
.text-enter,
.spinner-enter {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.logo-enter {
  animation-delay: 0.1s;
}

.text-enter {
  animation-delay: 0.4s;
}

.spinner-enter {
  animation-delay: 0.7s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


<script setup>
// La idea es: al entrar a la página, esperar 3 segundos y luego ir a login.

// Este valor guarda el temporizador para poder limpiarlo si la página se desmonta antes.
let redirectTimer = null

// onMounted se ejecuta cuando la página termina de cargarse.
// Aquí arrancamos el contador de 3 segundos.
onMounted(() => {
  redirectTimer = setTimeout(() => {
    // navigateTo es una función de Nuxt para cambiar de ruta.
    // replace: true evita que el usuario vuelva a esta pantalla usando el botón atrás.
    navigateTo('/login', { replace: true })
  }, 3000)
})

// onBeforeUnmount se ejecuta antes de destruir la vista.
// Si la página se va antes de terminar los 3 segundos, cancelamos el temporizador.
onBeforeUnmount(() => {
  if (redirectTimer) {
    clearTimeout(redirectTimer)
  }
})
</script>