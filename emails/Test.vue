<template>
	<EHtml>
		<EHead />
		<EBody>
			<EContainer>
				<EHeading>
					Join the team
					<strong>{{ props.teamName }}</strong>
				</EHeading>
			</EContainer>
		</EBody>
	</EHtml>
</template>

<script setup lang="ts">
	const props = defineProps<{
		teamName: string
	}>()
</script>
