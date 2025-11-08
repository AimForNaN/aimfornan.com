<script setup>
	import { useStepper } from '@vueuse/core';
	import api from '../lib/api.js';

	import HealthExamAgreement from './health-exam-agreement.vue';
	import HealthExamContact from './health-exam-contact.vue';
	import HealthExamDone from './health-exam-done.vue';
	import HealthExamForm from './health-exam-form.vue';
	import { markRaw } from 'vue';

	const body = {
		email: null,
		exam: null,
	};
	const { current, goToNext, isAfter, isCurrent, steps } = useStepper({
		'agreement': {
			component: markRaw(HealthExamAgreement),
			handler: () => goToNext(),
			label: 'Agreement',
		},
		'email': {
			component: markRaw(HealthExamContact),
			handler(email) {
				body.email = email;
				goToNext();
			},
			label: 'Contact',
		},
		'exam': {
			component: markRaw(HealthExamForm),
			handler(exam) {
				body.exam = exam;
				finalize().then((rsp) => {
					if (rsp.ok) {
						goToNext();
					}
				}).catch(console.error);
			},
			label: 'Exam',
		},
		'final': {
			component: markRaw(HealthExamDone),
			handler() {},
			label: 'Done',
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
	<header class="breadcrumbs flex gap-2 mb-8 -mt-4">
		<template v-for="(step, id, index) in steps">
			<span v-show="index !== 0">&raquo;</span>
			<span :aria-selected="isAfter(id) || isCurrent(id)" class="breadcrumb">{{step.label}}</span>
		</template>
	</header>
	<component :is="current.component" @submit="current.handler"></component>
</template>
