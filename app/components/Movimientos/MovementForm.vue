<template>
  <main class="movement-page" :style="{ '--movement-color': color }">
    <NuxtLink to="/dashboard" class="back-link">
      <v-icon size="18" aria-hidden="true">mdi-arrow-left</v-icon>
      Volver al inicio
    </NuxtLink>

    <v-img
      class="finny-image"
      src="/logo-prueba.png"
      alt="Finny, tu acompañante financiero"
      width="148"
      height="148"
      contain
    />

    <section class="movement-card">
      <div class="card-heading">
        <span class="action-icon">
          <v-icon aria-hidden="true">{{ icon }}</v-icon>
        </span>
        <div>
          <p class="eyebrow">Nuevo registro</p>
          <h1>{{ title }}</h1>
        </div>
      </div>

      <form class="movement-form" @submit.prevent="registrarMovimiento">
        <label for="movement-amount">{{ amountLabel }}</label>
        <v-text-field
          id="movement-amount"
          v-model="monto"
          type="number"
          min="1"
          step="1"
          prefix="$"
          placeholder="0"
          variant="outlined"
          color="success"
          required
          hide-details
        />

        <label for="movement-description">Descripción</label>
        <v-textarea
          id="movement-description"
          v-model="descripcion"
          placeholder="Escribe un detalle de este movimiento"
          variant="outlined"
          color="success"
          rows="3"
          auto-grow
          required
          hide-details
        />

        <v-btn
          type="submit"
          class="register-button"
          :color="color"
          size="large"
          block
          rounded="lg"
        >
          Registrar
        </v-btn>

        <p v-if="mensaje" :class="['form-message', { 'form-message--error': error }]" role="status">
          {{ mensaje }}
        </p>
      </form>
    </section>

    <NuxtLink to="/dashboard" class="cancel-link">Cancelar y volver</NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGestionStore, type TipoMovimiento } from '~/stores/gestion'
import { useUsuarioStore } from '~/stores/usuario'

// Estas props cambian el nombre, el color y la etiqueta del formulario según la acción.
const props = defineProps<{
  tipo: TipoMovimiento
  title: string
  amountLabel: string
  color: string
  icon: string
}>()

const monto = ref('')
const descripcion = ref('')
const mensaje = ref('')
const error = ref(false)
const gestionStore = useGestionStore()
const usuarioStore = useUsuarioStore()

function registrarMovimiento() {
  const valor = Number(monto.value)

  if (
    !['ingreso', 'ahorro', 'deuda'].includes(props.tipo)
    || !Number.isFinite(valor)
    || valor <= 0
    || !descripcion.value.trim()
  ) {
    error.value = true
    mensaje.value = 'Escribe un monto mayor que cero y una descripción.'
    return
  }

  gestionStore.registrarMovimiento(props.tipo, valor)
  usuarioStore.registrarActividad()
  monto.value = ''
  descripcion.value = ''
  error.value = false
  mensaje.value = 'Movimiento registrado correctamente.'
}
</script>

<style scoped>
.movement-page {
  box-sizing: border-box;
  color: #252525;
  margin: 0 auto;
  max-width: 672px;
  min-height: 100%;
  padding: 16px 18px 24px;
  width: 100%;
}

.back-link {
  align-items: center;
  color: #5d7056;
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 5px;
  text-decoration: none;
}

.finny-image {
  margin: 12px auto 16px;
}

.movement-card {
  background: #fff;
  border: 1px solid #f0e9dd;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(68, 91, 49, 0.08);
  padding: 18px;
}

.card-heading {
  align-items: center;
  display: flex;
  gap: 11px;
  margin-bottom: 20px;
}

.action-icon {
  align-items: center;
  background: color-mix(in srgb, var(--movement-color) 15%, white);
  border-radius: 13px;
  color: var(--movement-color);
  display: flex;
  flex: 0 0 44px;
  height: 44px;
  justify-content: center;
}

.eyebrow {
  color: var(--movement-color);
  font-size: 0.68rem;
  font-weight: 800;
  margin: 0 0 2px;
  text-transform: uppercase;
}

h1 {
  color: #252525;
  font-size: 1.08rem;
  font-weight: 800;
  margin: 0;
}

.movement-form {
  display: grid;
  gap: 9px;
}

label {
  color: #444;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 5px;
}

.register-button {
  color: #fff !important;
  font-size: 0.88rem;
  font-weight: 800;
  margin-top: 10px;
  text-transform: none;
}

.form-message {
  color: #347d2b;
  font-size: 0.78rem;
  margin: 2px 0 0;
  text-align: center;
}

.form-message--error {
  color: #b42318;
}

.cancel-link {
  color: #777;
  display: block;
  font-size: 0.72rem;
  margin: 15px auto 0;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 2px;
  width: fit-content;
}

@media (max-height: 700px) {
  .finny-image {
    height: 112px !important;
    margin: 6px auto 10px;
    width: 112px !important;
  }
}
</style>
