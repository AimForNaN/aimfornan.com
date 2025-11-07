<script setup>
	import { useStepper } from '@vueuse/core';
	import api from '../lib/api.js';

	import HealthExamAgreement from './health-exam-agreement.vue';
	import HealthExamContact from './health-exam-contact.vue';
	import HealthExamForm from './health-exam-form.vue';

	const body = {
		email: null,
		exam: null,
	};
	const { current, goToNext, isAfter, isCurrent, steps } = useStepper({
		'agreement': {
			component: HealthExamAgreement,
			handler: () => goToNext(),
			label: 'Agreement',
		},
		'email': {
			component: HealthExamContact,
			handler() {
				goToNext();
			},
			label: 'Contact',
		},
		'exam': {
			component: HealthExamForm,
			handler() {
				finalize().then(goToNext).catch(console.error);
			},
			label: 'Exam',
		},
		'final': {
			label: 'Final',
		},
	});

	function finalize() {
		return fetch(api + '/health/exam', {
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	}
</script>

<template>
	<header class="flex gap-2 mb-8 -mt-6">
		<template v-for="(step, id, index) in steps">
			<span v-show="index !== 0">&raquo;</span>
			<span :aria-selected="isAfter(id) || isCurrent(id)" class="opacity-50 aria-selected:opacity-100">{{step.label}}</span>
		</template>
	</header>
	<component :is="current.component" @submit="current.handler"></component>
</template>
