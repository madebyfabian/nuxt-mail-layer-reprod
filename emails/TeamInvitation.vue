<template>
	<Wrapper>
		<EHeading>
			Join the team
			<strong>{{ props.teamName }}</strong>
		</EHeading>
	</Wrapper>
</template>

<script setup lang="ts">
	const props = defineProps<{
		teamName: string
	}>()
</script>
