<template>
  <v-container fluid>
    <v-row class="flat d-flex flex-col align-center justify-center">
      <div class="d-flex flex-column align-center justify-center">
        <LogoFinny />
        <div>
          <h1 class="text-brown-darken-4 font-weight-bold">Cargando...</h1>
        </div>
      </div>

      <slot />
    </v-row>
  </v-container>
</template>
