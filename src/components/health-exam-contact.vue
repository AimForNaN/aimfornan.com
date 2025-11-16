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
	<div class="card card-border">
		<form class="card-body" @submit.stop.prevent="onSubmit">
			<label class="flex flex-col gap-4">
				<p>
					We'll need a way to contact you.
					You'll also be able to use your email to pull up your results.
				</p>
				<input autofocus class="input" placeholder="email" required type="email" v-model="email">
			</label>
			<footer class="card-actions justify-end">
				<button class="btn btn-primary" type="submit">Next</button>
			</footer>
		</form>
	</div>
</template>
