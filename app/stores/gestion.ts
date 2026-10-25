import { defineStore } from 'pinia'

interface Gestion {
  disponible: number
  ahorro: number
  deuda: number
}

export type TipoMovimiento = 'ingreso' | 'ahorro' | 'deuda'

export const useGestionStore = defineStore('gestion', {
  state: (): Gestion => ({
    disponible: 425000,
    ahorro: 1200000,
    deuda: 69800,
  }),

  actions: {
    actualizarGestion(datos: Partial<Gestion>) {
      this.$patch(datos)
    },

    registrarMovimiento(tipo: TipoMovimiento, monto: number) {
      if (!Number.isFinite(monto) || monto <= 0) {
        throw new Error('El monto del movimiento debe ser mayor que cero.')
      }

      if (tipo === 'ingreso') {
        this.disponible += monto
      } else if (tipo === 'ahorro') {
        this.ahorro += monto
      } else if (tipo === 'deuda') {
        this.deuda += monto
      } else {
        throw new Error('El tipo de movimiento no es válido.')
      }
    },
  },
})
