<template>
	<div>Test in playground</div>
	<button @click="() => handleCallApi()">call api to render template</button>
</template>

<script setup lang="ts">
	const handleCallApi = async () => {
		const res = await $fetch('/api/get-template')
		console.log({ res })
	}
</script>
