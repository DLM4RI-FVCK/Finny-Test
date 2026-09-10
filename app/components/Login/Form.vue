<template>
	<v-row class="bg-white">
		<v-col>
			<v-col class="text-textos text-center">
				<h1 style="font-size: 62px;">Finny</h1>
				<p class="text-body-small font-weight-bold">Finanzas Educativas</p>
			</v-col>
			<v-col class="justify-center aling-center d-flex">
				<v-img src="/register.png" width="320" height="300" max-width="100%" />
			</v-col>
			<v-col class="text-center">
				<h1 style="font-size: 62px;" class="pa-5">Registro</h1>
				<p>Registrate para entrar a Finny</p>
			</v-col>
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-col cols="6" md="4">
							<v-text-field v-model="firstname" :counter="10" :rules="nameRules" label="Nombre" required />
						</v-col>
						<v-col cols="6" md="4">
							<v-text-field v-model="lastname" :counter="10" :rules="nameRules" label="Apellido" required />
						</v-col>
						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
						</v-col>
						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Confirm E-mail" required />
						</v-col>
						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Contraseña" required />
						</v-col>
						<v-col cols="12">
							<v-btn class="bg-botones font-weight-bold text-textos font-size-x-large" text="REGISTERARSE" width="100%" height="50" />
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data: () => ({
		valid: false,
		firstname: '',
		lastname: '',
		nameRules: [
			value => value || 'Name is required.',
			value => value?.length <= 10 || 'Name must be less than 10 characters.',
		],
		email: '',
		emailRules: [
			value => value || 'E-mail is required.',
			value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
		],
	}),
}
</script>

<style>
.subtitulo {
	margin-top: -30px;
}
</style><!--<template>
	<v-row class="bg-white">
		<v-col>
			<v-col class="text-textos text-center">
				<div>
					<h1 style="font-size: 62px;">
						Finny
					</h1>
				</div>
				<div style="margin-top: -65px; margin-left: -34px;">
					<p class="text-body-small font-weight-bold">
						Finanzas Educativas
					</p>
				</div>
			</v-col>
			<v-col class="justify-center aling-center d-flex	">
				<v-img src="/register.png" width="320" height="300" max-width="100%" />
			</v-col>
			<v-col>
				<div  class="text-center">
					<h1 style="font-size: 62px;" class="pa-5">Registro
					</h1>
					<p style="margin-top: -70px;">
						Registrate para entrar a Finny
					</p>
				</div>
			</v-col>
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-row>
							<v-col cols="6" md="4">
								<v-text-field v-model="firstname" :counter="10" :rules="nameRules" label="Nombre"
									required></v-text-field>
							</v-col>

							<v-col cols="6" md="4">
								<v-text-field v-model="lastname" :counter="10" :rules="nameRules" label="Apellido"
									required></v-text-field>
							</v-col>
						</v-row>


						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Confirm E-mail"
								required></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Contraseña"
								required></v-text-field>
						</v-col>

						<v-col cols="12">
							<v-btn class="bg-botones font-weight-bold text-textos font-size-x-large" text="REGISTERARSE"
								width="100%" height="50" max-width="100%"></v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>


</template>

<script>
export default {
	data: () => ({
		valid: false,
		firstname: '',
		lastname: '',
		nameRules: [
			value => {
				if (value) return true

				return 'Name is required.'
			},
			value => {
				if (value?.length <= 10) return true

				return 'Name must be less than 10 characters.'
			},
		],
		email: '',
		emailRules: [
			value => {
				if (value) return true

				return 'E-mail is required.'
			},
			value => {
				if (/.+@.+\..+/.test(value)) return true

				return 'E-mail must be valid.'
			},
		],
	}),
}
</script>

<style>
.subtitulo {
	margin-top: -30px;
}
</style><template>
	<v-row class="bg-white">
		<v-col>
			<v-col class="text-textos text-center">
				<div>
					<h1 style="font-size: 62px;">
						Finny
					</h1>
				</div>
				<div style="margin-top: -65px; margin-left: -34px;">
					<p class="text-body-small font-weight-bold">
						Finanzas Educativas
					</p>
				</div>
			</v-col>
			<v-col class="justify-center aling-center d-flex	">
				<v-img src="/register.png" width="320" height="300" max-width="100%" />
			</v-col>
			<v-col>
				<div  class="text-center">
					<h1 style="font-size: 62px;" class="pa-5">Registro
					</h1>
					<p style="margin-top: -70px;">
						Registrate para entrar a Finny
					</p>
				</div>
			</v-col>
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-row>
							<v-col cols="6" md="4">
								<v-text-field v-model="firstname" :counter="10" :rules="nameRules" label="Nombre"
									required></v-text-field>
							</v-col>

							<v-col cols="6" md="4">
								<v-text-field v-model="lastname" :counter="10" :rules="nameRules" label="Apellido"
									required></v-text-field>
							</v-col>
						</v-row>


						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Confirm E-mail"
								required></v-text-field>
						</v-col>

						<v-col cols="12" md="4">
							<v-text-field v-model="email" :rules="emailRules" label="Contraseña"
								required></v-text-field>
						</v-col>

						<v-col cols="12">
							<v-btn class="bg-botones font-weight-bold text-textos font-size-x-large" text="REGISTERARSE"
								width="100%" height="50" max-width="100%"></v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>


</template>

<script>
export default {
	data: () => ({
		valid: false,
		firstname: '',
		lastname: '',
		nameRules: [
			value => {
				if (value) return true

				return 'Name is required.'
			},
			value => {
				if (value?.length <= 10) return true

				return 'Name must be less than 10 characters.'
			},
		],
		email: '',
		emailRules: [
			value => {
				if (value) return true

				return 'E-mail is required.'
			},
			value => {
				if (/.+@.+\..+/.test(value)) return true

				return 'E-mail must be valid.'
			},
		],
	}),
}
</script>

<style>
.subtitulo {
	margin-top: -30px;
}
</style>-->