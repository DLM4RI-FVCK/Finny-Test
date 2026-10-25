import { defineStore } from 'pinia'

interface Tip {
  texto: string
}

export const useTipsStore = defineStore('tips', {
  state: () => ({
    tips: [
      {
        texto: 'Procura abonar dinero libre al saldo de tus deudas para disminuir los intereses y pagar menos al final.',
      },
      {
        texto: 'Separa una parte de cada ingreso para tu ahorro antes de gastar el resto.',
      },
      {
        texto: 'Anota tus gastos diarios para saber en qué puedes ahorrar.',
      },
    ] as Tip[],
    indiceActual: 0,
  }),

  getters: {
    tipActual: state => state.tips[state.indiceActual],
  },

  actions: {
    mostrarSiguienteTip() {
      this.indiceActual = (this.indiceActual + 1) % this.tips.length
    },
  },
})
