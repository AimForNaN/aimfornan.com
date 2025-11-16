<script setup>
	const emit = defineEmits(['submit']);

	function onSubmit () {
		emit('submit');
	}
</script>

<template>
	<div class="card card-border">
		<form class="card-body" @submit.stop.prevent="onSubmit">
			<p>
				This health exam will allow us to get a general idea of your current state of health by the details you provide us.
				It will be used to assess whether you qualify to be a stool donor,
				and what you can do to improve your health in case you don't qualify.
			</p>
			<p>
				Your participation helps everyone to get one step closer to saving lives,
				improving the gut and overall health of others,
				all while helping us support the continued existence of healthy microbes.
				Therefore, we will need you to be as detailed and open and truthful as possible while taking the exam.
			</p>
			<p>
				<b>Note:</b>
				There is no time limit, but sessions will not be saved until you finish the exam.
				So, closing or refreshing the page will force you to start over.
			</p>
			<footer class="card-actions justify-end">
				<button class="btn btn-primary" type="submit">I understand</button>
			</footer>
		</form>
	</div>
</template>
