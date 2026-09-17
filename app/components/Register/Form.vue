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
        En esta versión los dos primeros campos van juntos en una sola fila.
      -->
      <v-form v-model="valid" class="register-form w-100">
        <v-row class="ma-0" dense>
          <v-col class="field-col pa-1" cols="6" sm="6">
            <v-text-field class="auth-input" v-model="nombre" label="Nombre" :rules="requiredRule" clearable variant="outlined"
              rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-account"
              density="comfortable" hide-details="auto" />
          </v-col>

          <v-col class="field-col pa-1" cols="6" sm="6">
            <v-text-field class="auth-input" v-model="apellido" label="Apellido" :rules="requiredRule" clearable variant="outlined"
              rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-account"
              density="comfortable" hide-details="auto" />
          </v-col>
        </v-row>


        <v-col class="field-col pa-1" cols="6" sm="6">
          <v-text-field class="auth-input" v-model="usuario" label="Usuario" :rules="requiredRule" clearable variant="outlined"
            rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
            prepend-inner-icon="mdi-account-circle" density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="6" sm="6">
          <v-text-field class="auth-input" v-model="edad" label="edad" :rules="requiredRule" clearable variant="outlined" rounded="xl"
            bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-calendar"
            density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="12" sm="6">
          <v-text-field class="auth-input" v-model="email" label="Email" type="email" :rules="emailRules" clearable variant="outlined"
            rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1" prepend-inner-icon="mdi-email"
            density="comfortable" hide-details="auto" />
        </v-col>

        <v-col class="field-col pa-1" cols="12" sm="6">
          <v-text-field class="auth-input" v-model="password" label="Contraseña" type="password" :rules="passwordRules" clearable
            variant="outlined" rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
            prepend-inner-icon="mdi-lock" density="comfortable" hide-details="auto" />
        </v-col>

        <!--
          Botón de registro.
          ocupa todo el ancho del formulario y usa el color primario naranja del proyecto.
        -->
        <v-row class="ma-0 mt-4">
          <v-col class="field-col pa-1" cols="12">
            <v-btn to="/dashboard" type="submit" class=" bg-botones font-weight-black text-textos px-8 w-100" size="large"
              elevation="0" rounded>
              Registrate
            </v-btn>
            <p class="text-right mr-3 font-weight-bold">Tienes cuenta? <nuxt-link to="/login"
                class="text-primary font-weight-bold">Entra aqui</nuxt-link></p>

          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      nombre: '',
      apellido: '',
      usuario: '',
      edad: '',
      email: '',
      password: '',
      confirmPassword: '',
      requiredRule: [value => !!value || 'Este campo es obligatorio.'],
      emailRules: [
        value => !!value || 'El email es obligatorio.',
        value => /.+@.+\..+/.test(value) || 'Ingresa un email válido.',
      ],
      passwordRules: [value => !!value || 'La contraseña es obligatoria.'],
      confirmPasswordRules: [
        value => !!value || 'Confirma tu contraseña.',
        value => value === this.password || 'Las contraseñas deben coincidir.',
      ],
    }
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
