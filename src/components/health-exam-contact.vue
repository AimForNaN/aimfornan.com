<script setup>
	import { shallowRef, unref } from 'vue';

	const email = shallowRef(null);
	const emit = defineEmits(['submit']);

	function onSubmit() {
		if (!email.value) {
			return;
		}

		emit('submit', unref(email));
	}
</script>

<template>
	<div>
		<form class="box" @submit.stop.prevent="onSubmit">
			<label class="flex flex-col gap-4">
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
	</div>
</template>
