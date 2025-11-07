<script setup>
	import { h, shallowRef, ref, unref } from 'vue';
	import MixedInput from './mixed-input.vue';

	const emit = defineEmits('submit');
	const exam = [
		{
			label: 'Physical',
			fields: [
				{
					attrs: {
						min: 1,
						name: 'age',
						placeholder: 'yrs',
						required: true,
						type: 'number',
					},
					label: 'Age (in years).',
					type: 'input',
					value: shallowRef(null),
				},
				{
					attrs: {
						min: 1,
						name: 'weight',
						placeholder: 'kgs',
						required: true,
						type: 'number',
					},
					label: 'Weight (in kilograms).',
					type: 'input',
					value: shallowRef(null),
				},
				{
					attrs: {
						min: 1,
						name: 'height',
						placeholder: 'cm',
						required: true,
						type: 'number',
					},
					label: 'Height (in centimeters).',
					type: 'input',
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'sex',
						required: true,
					},
					label: 'Sex.',
					options: [
						{
							value: 'Male',
						},
						{
							value: 'Female',
						},
					],
					type: 'select',
					value: shallowRef('Male'),
				},
			],
		},
		{
			label: 'Medical history',
			fields: [
				{
					attrs: {
						name: 'balding',
						required: true,
					},
					label: 'Bald or balding?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'asthma',
						required: true,
					},
					label: 'Childhood asthma?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'receding-gums',
						required: true,
					},
					label: 'Have receding gums?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'depression',
						required: true,
					},
					label: 'Suffer from depression?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'falling-asleep',
						required: true,
					},
					label: 'Issues falling asleep?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'staying-asleep',
						required: true,
					},
					label: 'Issues staying asleep?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'low-libido',
						required: true,
					},
					label: 'Have a low libido?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'diabetic',
						required: true,
					},
					label: 'Diabetic?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'edema',
						required: true,
					},
					label: 'Edema?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'food-allergy',
						required: true,
					},
					label: 'Allergic to any food?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'laxative',
						required: true,
					},
					label: 'Take a laxative?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'abx',
						required: true,
					},
					label: 'Take antibiotics?',
					options: [
						{
							value: 'Never',
						},
						{
							value: 'When I feel under the weather',
						},
						{
							value: 'I\'m on a prescription',
						},
						{
							value: 'Had some only recently',
						},
					],
					type: 'select',
					value: shallowRef('Never'),
				},
				{
					attrs: {
						name: 'vaxed',
						required: true,
					},
					label: 'Ever been vaccinated?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						min: 0,
						name: 'covid-shots',
						required: true,
						type: 'number',
						value: 0,
					},
					label: 'COVID vaccine shots.',
					type: 'input',
					value: shallowRef(0),
				},
				{
					attrs: {
						multiple: true,
						name: 'gut-disease',
						required: true,
					},
					label: 'Gut disease history.',
					options: [
						{
							value: 'None',
						},
						{
							value: 'Auto-brewery syndrome',
						},
						{
							value: 'Bloating',
						},
						{
							value: 'Candidiasis',
						},
						{
							value: 'Chronic fatigue syndrome',
						},
						{
							value: 'Colitis',
						},
						{
							value: 'Constipation',
						},
						{
							value: 'Crohn\'s disease',
						},
						{
							value: 'Diarrhea',
						},
						{
							value: 'Diverticulitis',
						},
						{
							value: 'Gastritis',
						},
						{
							value: 'GERD',
						},
						{
							value: 'Irritable bowel disease',
						},
						{
							value: 'Lactose intolerance',
						},
						{
							value: 'Short bowel syndrome',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: ref([]),
				},
				{
					attrs: {
						multiple: true,
						name: 'infections',
						required: true,
					},
					label: 'Infectious disease history.',
					options: [
						{
							value: 'None',
						},
						{
							value: 'AIDS',
						},
						{
							value: 'Epstein-Barr',
						},
						{
							value: 'HIV',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: ref([]),
				},
				{
					attrs: {
						multiple: true,
						name: 'liver-disease',
						required: true,
					},
					label: 'Liver disease history.',
					options: [
						{
							value: 'None',
						},
						{
							value: 'Alcoholic fatty liver',
						},
						{
							value: 'Cancer',
						},
						{
							value: 'Cirrhosis',
						},
						{
							value: 'Hepatitis',
						},
						{
							value: 'Non-alcoholic fatty liver',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: ref([]),
				},
				{
					attrs: {
						multiple: true,
						name: 'neurological-disease',
						required: true,
					},
					label: 'Neurological disease history.',
					options: [
						{
							value: 'None',
						},
						{
							value: 'Autism',
						},
						{
							value: 'Multiple Sclerosis',
						},
						{
							value: 'Parkinson\'s disease',
						},
						{
							value: 'Schizophrenia',
						},
						{
							value: 'Seizures',
						},
						{
							value: 'Stroke',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: ref([]),
				},
				{
					attrs: {
						multiple: true,
						name: 'skin-disease',
						required: true,
					},
					label: 'Skin disease history.',
					options: [
						{
							value: 'None',
						},
						{
							value: 'Acne',
						},
						{
							value: 'Dermatitis',
						},
						{
							value: 'Eczema',
						},
						{
							value: 'Hives',
						},
						{
							value: 'Psoriasis',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: ref([]),
				},
				{
					attrs: {
						name: 'disease-other',
						required: true,
					},
					group: {
						attrs: {
							class: 'md:col-span-2 lg:col-span-3',
						},
					},
					label: 'Write in detail anything we missed.',
					type: 'textarea',
					value: shallowRef(''),
				},
			],
		},
		{
			label: 'Lifestyle and diet',
			fields: [
				{
					attrs: {
						name: 'clubbing',
						required: true,
					},
					label: 'Go clubbing?',
					options: [
						{
							value: 'Never',
						},
						{
							value: 'Whenever they\'re open',
						},
						{
							value: 'Weekly',
						},
						{
							value: 'Monthly',
						},
						{
							value: 'Only just recently',
						},
						{
							value: 'Used to (frequently)',
						},
						{
							value: 'Used to (occasionally)',
						},
					],
					type: 'select',
					value: shallowRef('Never'),
				},
				{
					attrs: {
						name: 'music-frequency',
						required: true,
					},
					label: 'Listen to music often?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'alcohol',
						required: true,
					},
					label: 'Drink alcoholic beverages?',
					options: [
						{
							value: 'Never',
						},
						{
							value: 'Daily',
						},
						{
							value: 'Weekly',
						},
						{
							value: 'Monthly',
						},
						{
							value: 'Only just recently',
						},
						{
							value: 'Used to (frequently)',
						},
						{
							value: 'Used to (occasionally)',
						},
					],
					type: 'select',
					value: shallowRef('Never'),
				},
				{
					attrs: {
						multiple: true,
						name: 'drinks',
						required: true,
					},
					label: 'What do you drink?',
					options: [
						{
							value: 'Water',
						},
						{
							value: 'Beer',
						},
						{
							value: 'Juices',
						},
						{
							value: 'Soda',
						},
						{
							value: 'Wine',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'oral-sex',
						required: true,
					},
					label: 'Ever given oral sex?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'anal-sex',
						required: true,
					},
					label: 'Ever received anal sex?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'hydrochloric-acid',
						required: true,
					},
					label: 'Use hydrochloric acid?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'digestive-enzymes',
						required: true,
					},
					label: 'Use digestive enzymes?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'active-level',
						required: true,
					},
					label: 'How active are you?',
					options: [
						{
							value: 'Mostly bed-bound',
						},
						{
							value: 'Couch potato',
						},
						{
							value: 'Mostly sitting behind a computer or phone',
						},
						{
							value: 'I dedicate a few hours towards walking(weekly)',
						},
						{
							value: 'I dedicate a few hours towards walking (daily)',
						},
						{
							value: 'I dedicate a few hours towards jogging (weekly)',
						},
						{
							value: 'I dedicate a few hours towards jogging (daily)',
						},
						{
							value: 'I play a sport (weekly)',
						},
						{
							value: 'I play a sport (daily)',
						},
						{
							value: 'I go to the gym (weekly)',
						},
						{
							value: 'I go to the gym (daily)',
						},
						{
							value: 'I\'m a practicing athlete',
						},
					],
					type: 'select',
					value: shallowRef('Mostly bed-bound'),
				},
				{
					attrs: {
						name: 'diet',
						required: true,
					},
					label: 'Are you on any exclusive diet?',
					options: [
						{
							value: 'I eat whatever I want',
						},
						{
							value: 'Vegan',
						},
						{
							value: 'Vegetarian',
						},
						{
							value: 'Pescetarian',
						},
						{
							value: 'Mediterranean',
						},
						{
							value: 'Carnivore',
						},
						{
							value: 'Keto',
						},
						{
							value: 'Paleo',
						},
						{
							value: 'Low FODMAP',
						},
						{
							value: 'Other',
						},
					],
					type: 'select',
					value: shallowRef('I eat whatever I want'),
				},
				{
					attrs: {
						min: 0,
						name: 'water',
						placeholder: 'oz',
						required: true,
						type: 'number',
					},
					label: 'Water per day (in ounces).',
					type: 'input',
					value: shallowRef(0),
				},
				{
					attrs: {
						name: 'diet-last',
						required: true,
					},
					group: {
						attrs: {
							class: 'md:col-span-2 lg:col-span-3',
						},
					},
					label: 'Describe in detail what you ate the last 3-5 days.',
					type: 'textarea',
					value: shallowRef(''),
				},
			],
		},
		{
			label: 'Stool',
			fields: [
				{
					attrs: {
						name: 'smelly-poop',
						required: true,
					},
					label: 'Smelly poop?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'poop-residue',
						required: true,
					},
					label: 'Any residue on poop?',
					type: YesNoGroup,
					value: shallowRef(null),
				},
				{
					attrs: {
						name: 'poop-frequency',
						required: true,
					},
					label: 'How frequent do you poop?',
					options: [
						{
							value: 'Once a day',
						},
						{
							value: 'More than once a day',
						},
						{
							value: 'Once every other day',
						},
						{
							value: 'Twice a week',
						},
						{
							value: 'Once a week',
						},
						{
							value: 'Once every other week',
						},
					],
					type: 'select',
					value: shallowRef('Once a day'),
				},
				{
					attrs: {
						class: 'stool-types',
						name: 'poop-type',
						required: true,
					},
					label: 'Poop shape.',
					options: [
						{
							value: 'Type 1',
						},
						{
							value: 'Type 2',
						},
						{
							value: 'Type 3',
						},
						{
							value: 'Type 4',
						},
						{
							value: 'Type 5',
						},
						{
							value: 'Type 6',
						},
						{
							value: 'Type 7',
						},
					],
					type: 'select',
					value: shallowRef('Type 1'),
				},
				{
					attrs: {
						name: 'poop-color',
						required: true,
					},
					label: 'Color of your poop.',
					options: [
						{
							value: 'Brown',
						},
						{
							value: 'Light brown',
						},
						{
							value: 'Dark brown',
						},
						{
							value: 'Black',
						},
						{
							value: 'White',
						},
						{
							value: 'Yellowish',
						},
						{
							value: 'Greenish',
						},
						{
							value: 'Orangey',
						},
						{
							value: 'Really dark (not black)',
						},
					],
					type: 'select',
					value: shallowRef('Brown'),
				},
			],
		},
	];

	function FieldGroup(props, { slots }) {
		return h('label', { class: 'border border-zinc-300 flex flex-col gap-1 p-4 rounded-md dark:border-zinc-700' },
			slots.default(),
		);
	}
	function FieldSection(props, { slots }) {
		return h('div', { class: 'flex flex-col gap-4 md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3' },
			slots.default(),
		);
	}
	function ToggleField({ name }, { slots }) {
		return h('label', { class: 'flex gap-1' }, [
			h('input', { name, type: 'checkbox' }),
			h('span', slots.default()),
		]);
	}
	function YesNoGroup({ name, required = false }) {
		return h('p', { class: 'flex gap-4' }, [
			h('label', [
				h('input', { name, required, type: 'radio', value: false }),
				' No',
			]),
			h('span', '/'),
			h('label', [
				h('input', { name, required, type: 'radio', value: true }),
				' Yes',
			]),
		]);
	}
	function isChecked({ value: field }, option) {
		if (Array.isArray(field.value)) {
			return field.value.includes(option.value);
		}

		return field.value === option.value;
	}
	function onSubmit(e) {
		const p = new Promise((resolve, reject) => {
			const results = {};
			const success = exam.every((category) => {
				const { fields } = category;

				return fields.every((field) => {
					const value = unref(field.value);

					if (!value || (Array.isArray(value) && !value.length)) {
						reject(`${field.attrs.name} is required!`);
						return false;
					}

					results[field.attrs.name] = value;
					return true;
				});
			});

			if (success) {
				console.log('success', results);
				resolve(results);
			}
		});

		p.then((results) => {
			console.log(results);
			emit('submit', results);
		}).catch(console.error);
	}
</script>

<template>
	<div>
		<form @submit.stop.prevent="onSubmit">
			<template :key="section.label" v-for="section in exam">
				<h2>{{ section.label }}</h2>
				<FieldSection>
					<FieldGroup :key="field.label" v-bind="field.group?.attrs" v-for="field in section.fields">
						<p>{{ field.label }}</p>
						<select v-bind="field.attrs" v-model="field.value" v-if="field.options">
							<option :selected="isChecked(field, option)" :value="option.value" v-for="option in field.options">{{ option.label ?? option.value }}</option>
						</select>
						<MixedInput :is="field.type" v-bind="field.attrs" v-model="field.value" v-else></MixedInput>
					</FieldGroup>
				</FieldSection>
			</template>
			<footer class="flex gap-4 items-center justify-end mt-8">
				<button class="btn" type="submit">Send</button>
			</footer>
		</form>
	</div>
</template>

<style>
	.stool-types::picker(select) {
		@apply grid grid-cols-2;
	}

	.stool-types option {
		@apply items-center justify-center;
	}
</style>
