<template>
  <v-container fluid class="auth-shell fill-height pa-5">
    <div class="auth-orbs" aria-hidden="true">
      <span class="auth-orb auth-orb--green-top" />
      <span class="auth-orb auth-orb--yellow-bottom" />
      <span class="auth-orb auth-orb--yellow-top" />
      <span class="auth-orb auth-orb--green-bottom" />
    </div>

    <v-row class="auth-content" align="center" justify="center">
      <Logotipo />
      <v-col cols="12" class="d-flex flex-column justify-center">
        <div class="flex-grow-1 px-10">
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.auth-shell {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.auth-content {
  position: relative;
  z-index: 1;
}

.auth-orbs {
  display: none;
}

@media (max-width: 959px) {
  .auth-orbs {
    display: block;
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .auth-orb {
    position: absolute;
    width: 320px;
    height: 520px;
    border-radius: 50%;
    opacity: 0.25;
    filter: blur(65px);
  }

  .auth-orb--yellow-top {
    top: -105px;
    left: -70px;
    background: #ffd93d;
  }

  .auth-orb--green-top {
    top: 12%;
    right: -95px;
    background: #7ac943;
  }

  .auth-orb--green-bottom {
    bottom: 8%;
    left: -95px;
    background: #7ac943;
  }

  .auth-orb--yellow-bottom {
    right: -70px;
    bottom: -80px;
    background: #ffd93d;
  }
}
</style>
