<script setup>
	const emit = defineEmits(['submit']);

	function onSubmit () {
		emit('submit');
	}
</script>

<template>
	<form class="border border-b-zinc-300 flex flex-col gap-8 mx-auto px-8 py-6 rounded-md dark:border-zinc-700" @submit.prevent="onSubmit">
		<p>
			This health exam will allow us to get a general idea of your current state of health by the details you provide us.
			It will be used to assess whether you qualify to be a stool donor,
			and what you can do to improve your health in case you don't qualify.
		</p>
		<footer class="flex gap-4 items-center justify-end">
			<button class="btn" type="submit">I understand</button>
		</footer>
	</form>
</template>
