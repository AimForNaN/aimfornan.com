<script setup>
	const model = defineModel();
	const props = defineProps({
		name: String,
		required: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<div class="flex gap-4">
		<label>
			<input class="radio" :name="props.name" :required="props.required" type="radio" :value="false" v-model="model">
			No
		</label>
		<span>/</span>
		<label>
			<input class="radio" :name="props.name" :required="props.required" type="radio" :value="true" v-model="model">
			Yes
		</label>
	</div>
</template>
