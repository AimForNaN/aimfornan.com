<script setup>
	const model = defineModel();
	const props = defineProps({
		is: String,
	});
</script>

<template>
	<input v-if="props.is === 'input'" v-model="model">
	<textarea v-else-if="props.is === 'textarea'" v-model="model"></textarea>
</template>
