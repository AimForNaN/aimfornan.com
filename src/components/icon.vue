<script setup>
	const props = defineProps({
		icon: {
			type: String,
			required: true,
		},
		height: {
			type: [Number, String],
			default: 24,
		},
		width: {
			type: [Number, String],
			default: 24,
		},
	});
</script>

<template>
	<svg :height="props.height" :width="props.width" viewBox="0 0 24 24">
		<path :d="props.icon"></path>
	</svg>
</template>
