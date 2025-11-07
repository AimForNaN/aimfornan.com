<script setup>
	import { shallowRef } from 'vue';

	const email = shallowRef(null);
	const emit = defineEmits(['submit']);

	function onSubmit() {
		if (!email.value) {
			return;
		}

		emit('submit', {
			email,
		});
	}
</script>

<template>
	<form class="border border-b-zinc-300 flex flex-col gap-8 mx-auto px-8 py-6 rounded-md md:w-96 dark:border-zinc-700" @submit.prevent="onSubmit">
		<label class="flex flex-col gap-2">
			<p>
				We'll need a way to contact you.
				You'll also be able to use your email to pull up your results.
			</p>
			<input autofocus placeholder="email" required type="email" v-model="email">
		</label>
		<footer class="flex gap-4 items-center justify-end">
			<button class="btn" type="submit">Next</button>
		</footer>
	</form>
</template>
