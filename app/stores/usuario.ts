import { defineStore } from 'pinia'

interface Usuario {
  id: string
  usuario: string
  racha: number
  nombre: string
  apellido: string
  edad: number
  email: string
}

interface DatosUsuario {
  id: string
  usuario: string
  racha?: number
  nombre: string
  apellido: string
  edad: number
  email: string
}

export const useUsuarioStore = defineStore('usuario', {
  state: (): { usuario: Usuario | null } => ({
    usuario: {
    id: '1',
    usuario: 'kiket',
    racha: 4,
    nombre: 'Alexander',
    apellido: 'Toscano',
    edad: 20,
    email: 'alex@email.com',
  },
  }),

  actions: {
    guardarUsuario(datos: DatosUsuario) {
      
      this.usuario = {
        id: datos.id,
        usuario: datos.usuario,
        racha: datos.racha ?? 0,
        nombre: datos.nombre,
        apellido: datos.apellido,
        edad: datos.edad,
        email: datos.email,
      }
    },

    
  },
})
