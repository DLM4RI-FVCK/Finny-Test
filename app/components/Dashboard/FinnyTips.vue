<template>
  <v-card class="tips-card" elevation="0">
    <v-card-title class="tips-heading px-4 pt-4 pb-2">
      <v-avatar class="tips-icon mr-2" size="32">
        <v-icon color="white" size="18">mdi-message-text</v-icon>
      </v-avatar>
      <span>💥 Tips de tu Ardilla</span>
      <v-spacer />
      <v-chip class="tips-count" size="small">{{ tipsStore.tips.length }} consejos</v-chip>
      <v-btn
        class="next-tip-button"
        size="small"
        variant="text"
        aria-label="Mostrar otro consejo"
        @click="tipsStore.mostrarSiguienteTip"
      >
        Otro
      </v-btn>
    </v-card-title>
    <v-divider class="mx-4" />
    <v-card-text class="px-4 pt-3 pb-4">
      <v-card class="tip-inner" elevation="0">
        <v-row align="center" no-gutters>
          <v-col cols="2">
            <v-avatar size="42">
              <v-img src="/logo-prueba.png" alt="Papi Finny" cover />
            </v-avatar>
          </v-col>
          <v-col>
            <div class="tip-author">Papi Finny</div>
            <div class="tip-handle">@finnyapp</div>
          </v-col>
          <v-col class="text-right" cols="3">
            <v-icon color="success" size="22">mdi-lightbulb-on</v-icon>
          </v-col>
        </v-row>
        <div class="tip-label mt-3">TIP DEL DÍA</div>
        <p class="tip-text mb-0">{{ tipsStore.tipActual?.texto }}</p>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useTipsStore } from '~/stores/tips'

const tipsStore = useTipsStore()
</script>

<style scoped>
.tips-card {
  background: #fff;
  border-radius: 24px !important;
  box-shadow: 0 7px 22px rgba(68, 91, 49, 0.08) !important;
}

.tips-heading {
  align-items: center;
  color: #252525;
  display: flex;
  font-size: 0.93rem;
  font-weight: 800;
}

.tips-icon {
  background: #5bbe45;
}

.tips-count {
  background: #ddf4c9 !important;
  color: #388e3c !important;
  font-size: 0.62rem;
  font-weight: 800;
}

.next-tip-button {
  color: #388e3c;
  font-size: 0.7rem;
  font-weight: 800;
  min-width: 0;
  padding: 0 6px;
  text-transform: none;
}

.tip-inner {
  background: #f8fcf4;
  border: 1px solid #e6f0df;
  border-radius: 18px !important;
  padding: 13px;
}

.tip-author {
  color: #252525;
  font-size: 0.78rem;
  font-weight: 800;
}

.tip-handle {
  color: #777;
  font-size: 0.73rem;
}

.tip-label {
  color: #388e3c;
  font-size: 0.61rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.tip-text {
  color: #555;
  font-size: 0.75rem;
  line-height: 1.38;
  overflow-wrap: anywhere;
}
</style>
