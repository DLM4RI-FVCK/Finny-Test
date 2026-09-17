<template>
	<v-row class="fill-height align-center justify-center">
		<v-col cols="12" md="8" lg="6">
			<LoginLogo />

			<v-col class="text-center">
				<h1 style="font-size: 62px;" class="pa-5 font-weight-black text-textos2">Bienvenido</h1>
				<p style="margin-top: -75px; margin-bottom: 50px;">Inicio sesion o registrate</p>
			</v-col>

			<v-form v-model="valid">
				<v-row>
					<v-col cols="12" md="4">
						<v-text-field class="auth-input" v-model="email" :rules="emailRules" label="E-mail" type="email" variant="outlined"
							rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
							density="comfortable" hide-details="auto" required />
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field class="auth-input" v-model="password" :rules="passwordRules" label="Contraseña" type="password"
							variant="outlined" rounded="xl" bg-color="white" color="primary" base-color="grey-lighten-1"
							density="comfortable" hide-details="auto" required />
					</v-col>
					<v-col cols="12">
						<v-btn to="/dashboard" rounded class="bg-botones font-weight-black text-textos font-size-x-large"
							text="INICIAR SESIÓN" width="100%" height="50" />
						<p class="text-right mr-3 font-weight-bold">No tienes cuenta? <nuxt-link to="/register" class="text-primary font-weight-bold">Registrate aqui</nuxt-link></p>
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
			email: '',
			password: '',
			emailRules: [
				value => !!value || 'El email es obligatorio.',
				value => /.+@.+\..+/.test(value) || 'Ingresa un email válido.',
			],
			passwordRules: [value => !!value || 'La contraseña es obligatoria.'],
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
</style>
