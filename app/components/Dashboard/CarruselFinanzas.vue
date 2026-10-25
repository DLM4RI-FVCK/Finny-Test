<template>
  <section class="finance-overview" aria-label="Resumen de finanzas">
    <div class="finance-chips">
      <button
        v-for="tarjeta in tarjetasFinancieras"
        :key="tarjeta.titulo"
        type="button"
        :class="['finance-chip', `finance-chip--${tarjeta.tono}`, { 'finance-chip--active': tarjetaSeleccionada?.id === tarjeta.id }]"
        :aria-expanded="tarjetaSeleccionada?.id === tarjeta.id"
        aria-controls="finance-details-panel"
        @click="alternarTarjeta(tarjeta.id)"
      >
        <span class="chip-icon">
          <v-icon size="18" aria-hidden="true">{{ tarjeta.icono }}</v-icon>
        </span>
        <span class="chip-value">
          <span>{{ tarjeta.valor }}</span>
          <span class="chip-currency">{{ tarjeta.moneda }}</span>
        </span>
      </button>
    </div>

    <Transition name="finance-details">
      <section
        v-if="tarjetaSeleccionada"
        id="finance-details-panel"
        :key="tarjetaSeleccionada.titulo"
        :class="['finance-details', `finance-details--${tarjetaSeleccionada.tono}`]"
        :aria-label="`Detalles de ${tarjetaSeleccionada.titulo}`"
      >
        <div class="details-heading">
          <div class="balance-label">
            <v-icon size="20" aria-hidden="true">{{ tarjetaSeleccionada.icono }}</v-icon>
            <span>{{ tarjetaSeleccionada.titulo }}</span>
          </div>
        </div>
        <div class="details-value">
          <span>{{ tarjetaSeleccionada.valor }}</span>
          <span class="currency-code">{{ tarjetaSeleccionada.moneda }}</span>
        </div>
        <div class="details-footer">
          <span>{{ tarjetaSeleccionada.nota }}</span>
          <span class="balance-reference">{{ tarjetaSeleccionada.referencia }}</span>
        </div>
      </section>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useGestionStore } from '~/stores/gestion'

const gestionStore = useGestionStore()
const formatoMonto = new Intl.NumberFormat('es-CO', {
  maximumFractionDigits: 0,
})

const tarjetasFinancieras = computed(() => [
  {
    id: 'ahorro',
    titulo: 'Ahorrado',
    valor: `$${formatoMonto.format(gestionStore.ahorro)}`,
    moneda: 'COP',
    nota: 'Tu meta sigue creciendo',
    referencia: 'Este mes',
    icono: 'mdi-piggy-bank',
    tono: 'saving',
  },
  {
    id: 'deuda',
    titulo: 'Deuda',
    valor: `$${formatoMonto.format(gestionStore.deuda)}`,
    moneda: 'COP',
    nota: 'Abona hoy y paga menos intereses',
    referencia: 'Pendiente',
    icono: 'mdi-credit-card-outline',
    tono: 'debt',
  },
  {
    id: 'disponible',
    titulo: 'Disponible',
    valor: `$${formatoMonto.format(gestionStore.disponible)}`,
    moneda: 'COP',
    nota: 'Listo para gastar hoy',
    referencia: 'Hoy',
    icono: 'mdi-wallet',
    tono: 'balance',
  },
])

const idTarjetaSeleccionada = ref('disponible')
const tarjetaSeleccionada = computed(() =>
  tarjetasFinancieras.value.find(tarjeta => tarjeta.id === idTarjetaSeleccionada.value),
)

function alternarTarjeta(id) {
  idTarjetaSeleccionada.value = idTarjetaSeleccionada.value === id ? '' : id
}
</script>

<style scoped>
.finance-overview {
  display: grid;
  gap: 10px;
}

.finance-chips {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.finance-chip {
  align-items: center;
  appearance: none;
  background: #5bbe45;
  border: 2px solid transparent;
  border-radius: 999px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: center;
  min-height: 48px;
  min-width: 0;
  overflow: hidden;
  padding: 7px 6px;
  transition: border-color 180ms ease, box-shadow 220ms ease;
}

.finance-chip:focus-visible {
  outline: 3px solid #252525;
  outline-offset: 2px;
}

.finance-chip--active {
  border-color: #1f5e16;
  outline: 2px solid #1f5e16;
  outline-offset: 2px;
  box-shadow: 0 0 0 1px rgba(91, 190, 69, 0.55), 0 0 16px 3px rgba(91, 190, 69, 0.8);
}

.finance-chip--saving.finance-chip--active {
  border-color: #755900;
  outline-color: #755900;
  box-shadow: 0 0 0 1px rgba(255, 217, 61, 0.65), 0 0 16px 3px rgba(255, 217, 61, 0.95);
}

.finance-chip--debt.finance-chip--active {
  border-color: #9b3c54;
  outline-color: #9b3c54;
  box-shadow: 0 0 0 1px rgba(254, 150, 150, 0.6), 0 0 16px 3px rgba(254, 150, 150, 0.9);
}

.finance-chip--saving {
  background: #ffd93d;
  color: #252525;
}

.finance-chip--debt {
  background: #fee2e2;
  color: #252525;
}

.chip-icon {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
}

.chip-value {
  align-items: baseline;
  display: flex;
  font-size: clamp(0.64rem, 2.8vw, 0.82rem);
  font-weight: 800;
  gap: 2px;
  letter-spacing: -0.04em;
  line-height: 1.1;
  white-space: nowrap;
}

.chip-currency {
  font-size: 0.6em;
  letter-spacing: 0;
}

.finance-details {
  background: #5bbe45;
  border-radius: 20px;
  color: #fff;
  padding: 18px;
  box-shadow: 0 0 18px rgba(91, 190, 69, 0.4);
}

.finance-details-enter-active,
.finance-details-leave-active {
  max-height: 240px;
  overflow: hidden;
  transition:
    max-height 360ms ease-in,
    opacity 280ms ease-in,
    transform 360ms ease-in;
  transform-origin: top;
}

.finance-details-enter-from,
.finance-details-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-4px) scale(0.99);
}

.finance-details--saving {
  background: #ffd93d;
  color: #252525;
  box-shadow: 0 0 18px rgba(255, 217, 61, 0.55);
}

.finance-details--debt {
  background: #fee2e2;
  color: #252525;
  box-shadow: 0 0 18px rgba(254, 150, 150, 0.45);
}

.details-heading {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.balance-label {
  align-items: center;
  display: flex;
  font-size: 0.86rem;
  font-weight: 700;
  gap: 7px;
}

.growth-chip {
  background: #ddf4c9 !important;
  color: #388e3c !important;
  font-weight: 800;
}

.details-value {
  align-items: baseline;
  display: flex;
  font-size: clamp(1.5rem, 8vw, 2rem);
  font-weight: 800;
  gap: 6px;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 22px 0;
  white-space: nowrap;
}

.details-value .currency-code {
  font-size: 0.5em;
}

.details-footer {
  align-items: start;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  display: grid;
  font-size: 0.78rem;
  gap: 10px;
  grid-template-columns: minmax(0, 1fr) auto;
  line-height: 1.35;
  min-height: 2.7em;
  padding-top: 10px;
}

.balance-reference {
  text-align: right;
  white-space: nowrap;
}

.finance-details--saving .details-footer,
.finance-details--debt .details-footer {
  border-color: rgba(37, 37, 37, 0.16);
}

@media (prefers-reduced-motion: reduce) {
  .finance-details-enter-active,
  .finance-details-leave-active {
    transition: none;
  }
}

@media (max-width: 340px) {
  .finance-chips {
    gap: 5px;
  }

  .finance-chip {
    gap: 3px;
    padding-left: 4px;
    padding-right: 4px;
  }

  .chip-value {
    font-size: 0.6rem;
  }
}
</style>
