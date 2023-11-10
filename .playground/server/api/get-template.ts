import { useCompiler } from '#vue-email'

export default defineEventHandler(async event => {
	const template = await useCompiler('TeamInvitation.vue', {
		props: {
			teamName: 'example',
		},
	})

	return {
		template,
	}
})
