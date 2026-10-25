# Stores y conexión con el frontend

## Idea general

Un *store* es un estado compartido. En este proyecto usamos Pinia: un componente
puede cambiar un dato y los componentes que leen ese dato se actualizan.

Los stores de usuario, gestión y tips guardan datos en memoria. No usan una base
de datos ni `localStorage`; si se recarga la página, vuelven a los valores
iniciales que aparecen en el código.

## Recorrido de los datos

| Store | Qué guarda | Quién lo modifica | Dónde se ve |
|---|---|---|---|
| `app/stores/usuario.ts` | Usuario de prueba y contador de registros. | `RegisterForm.vue` guarda los datos del formulario. `MovementForm.vue` suma uno al contador. | `DashboardHeader.vue` muestra el nombre. `DashboardStreak.vue` muestra el contador. |
| `app/stores/gestion.ts` | Dinero disponible, ahorro y deuda. | `MovementForm.vue` actualiza el saldo correspondiente. | `CarruselFinanzas.vue` muestra los tres saldos. |
| `app/stores/tips.ts` | Consejos de la ardilla y cuál se está mostrando. | El botón “Otro” de `FinnyTips.vue` avanza al siguiente. | `FinnyTips.vue` muestra el consejo actual y la cantidad de consejos. |

## 1. Store de gestión: `app/stores/gestion.ts`

### Explicación del código

| Código | En palabras sencillas |
|---|---|
| `import { defineStore } from 'pinia'` | Importa de Pinia la función que crea un store. |
| `interface Gestion {` | Comienza un tipo de TypeScript llamado `Gestion`. Describe la forma de los saldos. |
| `disponible: number` | `disponible` debe ser un número. |
| `ahorro: number` | `ahorro` debe ser un número. |
| `deuda: number` | `deuda` debe ser un número. |
| `}` | Termina la descripción del tipo `Gestion`. |
| `export type TipoMovimiento = 'ingreso' \| 'ahorro' \| 'deuda'` | Define los únicos tres textos aceptados para clasificar un movimiento. TypeScript detecta otros valores incorrectos al revisar el código. |
| `export const useGestionStore = defineStore('gestion', {` | Crea y exporta el store con el identificador `gestion`. Los componentes lo obtienen llamando a `useGestionStore()`. |
| `state: (): Gestion => ({` | Declara los datos que tendrá el store y comprueba que sigan el tipo `Gestion`. |
| `disponible: 425000` | Saldo inicial de prueba para el dinero disponible. |
| `ahorro: 1200000` | Saldo inicial de prueba para el ahorro. |
| `deuda: 69800` | Saldo inicial de prueba para la deuda. |
| `}),` | Termina el estado inicial. |
| `actions: {` | Abre la sección de acciones: funciones que pueden cambiar los datos del store. |
| `actualizarGestion(datos: Partial<Gestion>) {` | Crea una acción para actualizar uno o más saldos. `Partial<Gestion>` significa que no es obligatorio enviar los tres. |
| `this.$patch(datos)` | Combina los campos recibidos con los saldos actuales. `this` se refiere a este store. |
| `registrarMovimiento(tipo: TipoMovimiento, monto: number) {` | Crea la acción que recibe la clase de movimiento y su cantidad. |
| `if (!Number.isFinite(monto) \|\| monto <= 0)` | Comprueba que el monto sea un número válido y mayor que cero. |
| `throw new Error(...)` | Detiene la acción si el monto no es válido; no cambia los saldos. |
| `if (tipo === 'ingreso')` | Comprueba si el movimiento es un ingreso. |
| `this.disponible += monto` | Suma el ingreso al saldo disponible. |
| `else if (tipo === 'ahorro')` | Si no es ingreso, comprueba si es ahorro. |
| `this.ahorro += monto` | Suma el ahorro al saldo de ahorro. |
| `else if (tipo === 'deuda')` | Si no es lo anterior, comprueba si es una deuda. |
| `this.deuda += monto` | Suma el monto al saldo de deuda. |
| `else { throw new Error(...) }` | Rechaza un tipo no reconocido. El tipo también está restringido por `TipoMovimiento`. |
| `}` | Cierra la acción y la definición del store. |

### Dónde se conecta en el frontend

`app/components/Dashboard/CarruselFinanzas.vue` importa `useGestionStore()` y
lee `gestionStore.disponible`, `gestionStore.ahorro` y `gestionStore.deuda`.
Convierte los números a un formato fácil de leer y dibuja las tarjetas del
dashboard. Como son datos reactivos de Pinia, las tarjetas se actualizan cuando
un formulario cambia un saldo.

`app/components/Movimientos/MovementForm.vue` importa el mismo store. Al enviar
un formulario válido, llama a:

```ts
gestionStore.registrarMovimiento(props.tipo, valor)
```

`valor` sale del campo de monto y `props.tipo` indica si es ingreso, ahorro o
deuda. La acción suma el importe al saldo adecuado.

## 2. Store de usuario: `app/stores/usuario.ts`

### Explicación del código

| Código | En palabras sencillas |
|---|---|
| `import { defineStore } from 'pinia'` | Importa la función de Pinia para crear el store. |
| `interface Usuario { ... }` | Describe el objeto de usuario completo que se guarda. |
| `id: string` | El identificador es texto. Por ahora, el formulario usa el correo como identificador temporal. |
| `usuario: string` | Nombre de usuario, como `kiket`. |
| `racha: number` | Número que actualmente representa registros de movimientos, no días consecutivos. |
| `nombre: string` y `apellido: string` | Nombre y apellido que aparecen en el saludo. |
| `edad: number` | Edad como número. |
| `email: string` | Correo como texto. |
| `interface DatosUsuario { ... }` | Describe el objeto que se puede pasar a la acción para guardar un usuario. |
| `racha?: number` | La racha es opcional al guardar. `?` significa que puede no enviarse. |
| `export const useUsuarioStore = defineStore('usuario', {` | Crea y exporta el store identificado como `usuario`. |
| `state: (): { usuario: Usuario \| null } => ({` | Declara que el estado tiene una propiedad `usuario`, que puede contener un usuario o `null`. |
| `usuario: { ... }` | En este momento el usuario empieza con datos ficticios para probar la interfaz. |
| `id: '1'`, `usuario: 'kiket'` | Identificador y nombre de usuario ficticios. |
| `racha: 4` | El contador empieza en cuatro por el valor de prueba configurado actualmente. |
| `nombre: 'Alexander'`, `apellido: 'Toscano'` | Nombre ficticio que se ve inicialmente en el dashboard. |
| `edad: 20`, `email: 'alex@email.com'` | Edad y correo ficticios. |
| `actions: {` | Abre las acciones disponibles para este store. |
| `guardarUsuario(datos: DatosUsuario) {` | Crea la acción que recibe los datos de usuario con la forma descrita arriba. |
| `this.usuario = { ... }` | Reemplaza el usuario actual por un objeto nuevo con los datos recibidos. |
| `racha: datos.racha ?? 0` | Usa la racha recibida; si no se envía, empieza en cero. `??` solo usa el valor de la derecha cuando falta el de la izquierda. |
| `registrarActividad() {` | Acción simple que se ejecuta al guardar un movimiento válido. |
| `if (this.usuario) {` | Comprueba que exista un usuario antes de modificarlo. |
| `this.usuario.racha += 1` | Suma uno al contador. No revisa fechas ni cuenta días consecutivos. |

### De dónde salen los datos y dónde se reflejan

`app/components/Register/RegisterForm.vue` importa `useUsuarioStore()`. Cuando
se envía el formulario válido, llama a `guardarUsuario` con el nombre, apellido,
nombre de usuario, edad y correo que escribió la persona. El formulario no
guarda la contraseña en el store. Después de guardar navega al dashboard.

`app/components/Dashboard/DashboardHeader.vue` lee el nombre y apellido del
store para construir el saludo. Si no hubiera usuario, muestra “usuario”.

`app/components/Dashboard/DashboardStreak.vue` lee `usuario.racha` y lo muestra
como cantidad de registros.

`app/components/Movimientos/MovementForm.vue` llama a
`usuarioStore.registrarActividad()` después de registrar un movimiento válido.
Por eso cada movimiento añade uno al contador.

## 3. Store de tips: `app/stores/tips.ts`

### Explicación del código

| Código | En palabras sencillas |
|---|---|
| `import { defineStore } from 'pinia'` | Importa la función de Pinia. |
| `interface Tip { texto: string }` | Describe un consejo: es un objeto con un campo de texto. |
| `export const useTipsStore = defineStore('tips', {` | Crea y exporta el store identificado como `tips`. |
| `state: () => ({` | Declara el estado inicial del store. |
| `tips: [...] as Tip[]` | Guarda tres consejos de ejemplo. `Tip[]` indica que es una lista de objetos `Tip`. |
| `indiceActual: 0` | Selecciona el primer consejo, porque las listas empiezan a contar desde cero. |
| `getters: {` | Abre los getters: valores calculados a partir del estado. |
| `tipActual: state => state.tips[state.indiceActual]` | Devuelve el consejo ubicado en la posición actual. |
| `actions: {` | Abre las acciones del store. |
| `mostrarSiguienteTip() {` | Crea la acción que cambia al siguiente consejo. |
| `this.indiceActual = (this.indiceActual + 1) % this.tips.length` | Aumenta el índice y, al llegar al final, vuelve a cero para empezar de nuevo. |

### Dónde se refleja

`app/components/Dashboard/FinnyTips.vue` importa y obtiene el store con
`useTipsStore()`. Muestra `tipActual.texto` como consejo y `tips.length` como
cantidad total. El botón **Otro** llama a `mostrarSiguienteTip()`. Los textos
están escritos en el store; no vienen de una base de datos o de una API.

## 4. `props` y `emits` en estos componentes

### Qué significa cada palabra

- Una **prop** es un dato que un componente padre le entrega a un componente
  hijo. En este proyecto, las props configuran el formulario compartido de
  movimientos.
- Un **emit** es un evento que un componente hijo envía a su padre para avisarle
  que ocurrió algo. Aquí se usa para comunicar qué acción financiera se
  seleccionó.
- Los stores no necesitan `props` ni `emits`: los componentes los importan y
  comparten el mismo estado de Pinia.

### Props del formulario de movimientos

`app/components/Ingreso/IngresoForm.vue`,
`app/components/Ahorro/AhorroForm.vue` y
`app/components/Deuda/DeudaForm.vue` usan el mismo hijo:
`app/components/Movimientos/MovementForm.vue`. Cada uno le pasa diferentes
props:

| Prop | Para qué sirve |
|---|---|
| `tipo` | Define qué saldo actualizar: `ingreso`, `ahorro` o `deuda`. |
| `title` | Texto del título del formulario. |
| `amountLabel` | Etiqueta del campo donde se escribe la cantidad. |
| `color` | Color del formulario y del botón. |
| `icon` | Icono que acompaña el título. |

En `MovementForm.vue`, `defineProps<{ ... }>()` declara y tipa esas props. Por
ejemplo, `tipo: TipoMovimiento` solo admite los tres tipos definidos en
`gestion.ts`; los otros campos son texto (`string`). El objeto `props` permite
leerlos como `props.tipo`, `props.title`, etcétera.

El formulario compartido no emite un evento al padre. Al enviarse, llama
directamente a los stores para actualizar saldos y contador.

### Emit de las acciones financieras

`app/components/Dashboard/FinanceActions.vue` muestra el botón `+` y las
opciones de ingreso, deuda y ahorro.

| Código | En palabras sencillas |
|---|---|
| `defineEmits(['seleccionar'])` | Declara un evento llamado `seleccionar` que el componente puede enviar a su padre. |
| `const emitir = ...` | Guarda la función con la que se envían eventos. |
| `seleccionarAccion(accion)` | Recibe el tipo de acción que se pulsó. |
| `estaAbierto.value = false` | Cierra el menú de acciones. |
| `emitir('seleccionar', accion)` | Avisa al padre cuál opción eligió la persona, por ejemplo `ingreso`. |
| `@click="seleccionarAccion('ingreso')"` | Al pulsar “Ingreso”, llama la función con el valor `ingreso`. Las opciones de ahorro y deuda hacen lo mismo con su valor. |

El padre es `app/layouts/phone.vue`. Allí,
`<FinanceActions @seleccionar="abrirPaginaMovimiento" />` escucha el evento.
`abrirPaginaMovimiento(tipoMovimiento)` recibe el dato emitido y usa
`navigateTo('/' + tipoMovimiento)` para abrir la página correspondiente, como
`/ingreso`.

## Recorrido completo de un movimiento

1. En el menú del teléfono, la persona elige Ingreso, Ahorro o Deuda.
2. `FinanceActions.vue` emite el evento `seleccionar` con ese tipo.
3. `phone.vue` recibe el evento y navega a la página correspondiente.
4. La página, por ejemplo `IngresoForm.vue`, crea `MovementForm.vue` con sus
   props.
5. `MovementForm.vue` recibe la cantidad y la descripción escritas.
6. Si los valores son válidos, llama a `gestionStore.registrarMovimiento(...)`
   para actualizar el saldo y a `usuarioStore.registrarActividad()` para sumar
   uno al contador.
7. `CarruselFinanzas.vue` y `DashboardStreak.vue` reflejan los nuevos valores
   porque leen los mismos stores.

Todo este recorrido funciona en memoria y permite probar la interfaz sin una
base de datos. Al recargar, los stores vuelven a sus valores iniciales.
