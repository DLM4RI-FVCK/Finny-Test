<template>
  <v-row class="fill-height align-center justify-center pa-4">
    <v-col cols="12" class="d-flex flex-column justify-center">
      <div class="d-flex justify-center mb-4">
        <RegisterLogo />
      </div>

      <div class="px-2">
        <h1 class="font-weight-black text-display-medium text-textos2 mb-8">Registro</h1>
        <p class="text-body-2 text-black mt-n6">
          ¡Completa la información para que finny te conozca mejor!
        </p>
      </div>

      <!--
        v-form agrupa los inputs y el botón.
        v-model guarda si los datos pasan las reglas de Vuetify.
        En esta versión los dos primeros campos van juntos en una sola fila.
      -->
      <v-form v-model="formularioValido" class="register-form w-100" @submit.prevent="registrar">
        <v-row class="ma-0" dense>
          <!-- Cada v-model guarda lo que se escribe en ese campo. -->
          <v-col class="field-col pa-1" cols="6" sm="6">
            <v-text-field class="auth-input" v-model="nombre" label="Nombre" :rules="reglaObligatoria" clearable variant="outlined"
              rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-account"
              density="comfortable" hide-details="auto" />
          </v-col>

          <v-col class="field-col pa-1" cols="6" sm="6">
            <v-text-field class="auth-input" v-model="apellido" label="Apellido" :rules="reglaObligatoria" clearable variant="outlined"
              rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-account"
              density="comfortable" hide-details="auto" />
          </v-col>
        </v-row>


        <v-col class="field-col pa-1" cols="6" sm="6">
          <v-text-field class="auth-input" v-model="usuario" label="Usuario" :rules="reglaObligatoria" clearable variant="outlined"
            rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
            prepend-inner-icon="mdi-account-circle" density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="6" sm="6">
          <v-text-field class="auth-input" v-model="edad" label="edad" type="number" min="1" step="1" :rules="reglaObligatoria" clearable variant="outlined" rounded="xl"
            bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-calendar"
            density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="12" sm="6">
          <v-text-field class="auth-input" v-model="correoElectronico" label="Email" type="email" :rules="reglasCorreo" clearable variant="outlined"
            rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-email"
            density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="12" sm="6">
          <v-text-field class="auth-input" v-model="contrasena" label="Contraseña" type="password" :rules="reglasContrasena" clearable
            variant="outlined" rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
            prepend-inner-icon="mdi-lock" density="comfortable" hide-details="auto" />
        </v-col>

        <!--
          Botón de registro.
          ocupa todo el ancho del formulario y usa el color primario naranja del proyecto.
        -->
        <v-row class="ma-0 mt-4">
          <v-col class="field-col pa-1" cols="12">
            <v-btn type="submit" class=" bg-botones font-weight-black text-textos px-8 w-100" size="large"
              elevation="0" rounded>
              Registrate
            </v-btn>
            <p class="text-right mr-3 font-weight-bold">Tienes cuenta? <NuxtLink to="/login"
                class="text-primary font-weight-bold">Entra aqui</NuxtLink></p>

          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { useUsuarioStore } from '~/stores/usuario'

export default {
  data() {
    return {
      formularioValido: false,
      nombre: '',
      apellido: '',
      usuario: '',
      edad: '',
      correoElectronico: '',
      contrasena: '',
      confirmarContrasena: '',
      reglaObligatoria: [valor => !!valor || 'Este campo es obligatorio.'],
      // Estas reglas se ejecutan mientras la persona completa el formulario.
      reglasCorreo: [
        valor => !!valor || 'El email es obligatorio.',
        valor => /.+@.+\..+/.test(valor) || 'Ingresa un email válido.',
      ],
      reglasContrasena: [valor => !!valor || 'La contraseña es obligatoria.'],
      reglasConfirmarContrasena: [
        valor => !!valor || 'Confirma tu contraseña.',
        valor => valor === this.contrasena || 'Las contraseñas deben coincidir.',
      ],
    }
  },
  methods: {
    registrar() {
      if (!this.formularioValido) {
        return
      }

      const email = this.correoElectronico.trim()
      const usuarioStore = useUsuarioStore()

      usuarioStore.guardarUsuario({
        id: email,
        usuario: this.usuario.trim(),
        nombre: this.nombre.trim(),
        apellido: this.apellido.trim(),
        edad: Number(this.edad),
        email,
      })

      this.$router.push('/dashboard')
    },
  },
}
</script>

<style scoped>
.auth-input :deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.88) !important;
}

.auth-input :deep(.v-field__outline),
.auth-input :deep(.v-label) {
  color: rgba(174, 174, 178, 0.62) !important;
}

.auth-input.v-input--dirty:not(.v-input--error) :deep(.v-field__outline),
.auth-input.v-input--dirty:not(.v-input--error) :deep(.v-label),
.auth-input.v-input--dirty:not(.v-input--error) :deep(.v-field__prepend-inner .v-icon),
.auth-input.v-input--dirty:not(.v-input--error) :deep(.v-field__append-inner .v-icon) {
  color: #a8d5ba !important;
}

.register-form {
  min-width: 0;
  max-width: 100%;
}

.register-form :deep(.v-col),
.register-form :deep(.v-input),
.register-form :deep(.v-field),
.register-form :deep(.v-messages) {
  min-width: 0;
  max-width: 100%;
}

.register-form :deep(.v-messages__message) {
  overflow-wrap: anywhere;
}
</style>
