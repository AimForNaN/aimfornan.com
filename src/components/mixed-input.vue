<script setup>
	const model = defineModel();
	const props = defineProps({
		is: [String, Function, Object],
	});
</script>

<template>
	<input class="input" v-if="props.is === 'input'" v-model="model">
	<textarea class="textarea" v-else-if="props.is === 'textarea'" v-model="model"></textarea>
	<component :is="props.is" v-else v-model="model"></component>
</template>
