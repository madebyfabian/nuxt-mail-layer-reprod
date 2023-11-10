// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@vue-email/nuxt'],
	build: {
		transpile: ['@vue-email/nuxt'],
	},
})
