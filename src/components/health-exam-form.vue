<script setup>
	import { h } from 'vue';

	function FieldGroup(props, { slots }) {
		return h('label', { class: 'border border-zinc-300 flex flex-col gap-1 p-4 rounded-md dark:border-zinc-700' },
			slots.default(),
		);
	}
	function FieldSection(props, { slots }) {
		return h('div', { class: 'flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3' },
			slots.default(),
		);
	}
	function ToggleField({ name }, { slots }) {
		return h('label', { class: 'flex gap-1' }, [
			h('input', { name, type: 'checkbox' }),
			h('span', slots.default()),
		]);
	}
	function YesNoGroup({ name }) {
		return h('p', { class: 'flex gap-4' }, [
			h('label', [
				h('input', { name, type: 'radio', value: true }),
				' Yes',
			]),
			h('span', '/'),
			h('label', [
				h('input', { name, type: 'radio', value: false }),
				' No',
			]),
		]);
	}
</script>

<template>
	<form>
		<h2>Physical</h2>
		<FieldSection>
			<FieldGroup>
				<p>Age (in years).</p>
				<input min="1" placeholder="yrs" type="number" />
			</FieldGroup>
			<FieldGroup>
				<p>Weight (in kilograms).</p>
				<input min="1" placeholder="kg" type="number" />
			</FieldGroup>
			<FieldGroup>
				<p>Height (in centimeters).</p>
				<input min="1" placeholder="cm" type="number" />
			</FieldGroup>
			<FieldGroup>
				<p>Sex.</p>
				<select>
					<option>Male</option>
					<option>Female</option>
				</select>
			</FieldGroup>
		</FieldSection>

		<h2>Medical history</h2>
		<FieldSection>
			<FieldGroup>
				<p>Bald or balding?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Have receding gums?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Suffer from depression?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Issues falling asleep?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Issues staying asleep?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Have a low libido?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Diabetic?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Edema?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Take antibiotics?</p>
				<select>
					<option>Never</option>
					<option>Whenever I feel a cold or flu coming</option>
					<option>I'm on a prescription</option>
					<option>Had some only recently</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Ever been vaccinated?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>How many COVID vaccine shots?</p>
				<input type="number" value="0" />
			</FieldGroup>

			<FieldGroup>
				<p>Allergic to any food?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Take a laxative?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Gut disease history.</p>
				<select multiple>
					<option selected>None</option>
					<option>Auto-brewery syndrome</option>
					<option>Colitis</option>
					<option>Constipation</option>
					<option>Crohn's disease</option>
					<option>Chronic fatigue syndrome</option>
					<option>Diverticulitis</option>
					<option>Irritable bowel disease</option>
					<option>Lactose intolerance</option>
					<option>Short bowel syndrome</option>
					<option>Other</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Liver disease history.</p>
				<select multiple>
					<option selected>None</option>
					<option>Alcoholic fatty liver</option>
					<option>Cancer</option>
					<option>Cirrhosis</option>
					<option>Hepatitis</option>
					<option>Non-alcoholic fatty liver</option>
					<option>Other</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Neurological disease history.</p>
				<select multiple>
					<option selected>None</option>
					<option>Autism</option>
					<option>Multiple Sclerosis</option>
					<option>Parkinson's disease</option>
					<option>Schizophrenia</option>
					<option>Seizures</option>
					<option>Stroke</option>
					<option>Other</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Skin disease history.</p>
				<select multiple>
					<option selected>None</option>
					<option>Acne</option>
					<option>Dermatitis</option>
					<option>Eczema</option>
					<option>Hives</option>
					<option>Psoriasis</option>
					<option>Other</option>
				</select>
			</FieldGroup>
		</FieldSection>

		<h2>Lifestyle and diet</h2>
		<FieldSection>
			<FieldGroup>
				<p>How active are you?</p>
				<select>
					<option>Mostly bed-bound</option>
					<option>Couch potato</option>
					<option>Mostly sitting behind a computer or phone</option>
					<option>I dedicate a few hours towards walking (weekly)</option>
					<option>I dedicate a few hours towards walking (daily)</option>
					<option>I dedicate a few hours towards jogging (weekly)</option>
					<option>I dedicate a few hours towards jogging (daily)</option>
					<option>I play a sport (weekly)</option>
					<option>I play a sport (daily)</option>
					<option>I go to the gym (weekly)</option>
					<option>I go to the gym (daily)</option>
					<option>I'm a practicing athlete</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Are you on any exclusive diet?</p>
				<select>
					<option>I eat whatever I want</option>
					<option>Vegan</option>
					<option>Vegetarian</option>
					<option>Pescetarian</option>
					<option>Mediterranean</option>
					<option>Carnivore</option>
					<option>Keto</option>
					<option>Paleo</option>
					<option>Low FODMAP</option>
					<option>Other</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>Water per day (in ounces).</p>
				<input type="number" min="0" value="0" />
			</FieldGroup>

			<FieldGroup class="md:col-span-2 lg:col-span-3">
				<p>Describe in detail what you ate the last 3-5 days.</p>
				<textarea></textarea>
			</FieldGroup>

			<FieldGroup>
				<p>Drink alcoholic beverages frequently?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Ever received anal sex?</p>
				<YesNoGroup/>
			</FieldGroup>

			<FieldGroup>
				<p>Ever given oral sex?</p>
				<YesNoGroup/>
			</FieldGroup>
		</FieldSection>

		<h2>Stool</h2>
		<FieldSection>
			<FieldGroup>
				<p>How frequent do you poop?</p>
				<select>
					<option>Once a day</option>
					<option>More than once a day</option>
					<option>Once every other day</option>
					<option>Twice a week</option>
					<option>Once a week</option>
					<option>Once every other week</option>
				</select>
			</FieldGroup>

			<FieldGroup>
				<p>How does your poop look like?</p>
				<select class="stool-types">
					<option>Type 1</option>
					<option>Type 2</option>
					<option>Type 3</option>
					<option>Type 4</option>
					<option>Type 5</option>
					<option>Type 6</option>
					<option>Type 7</option>
				</select>
			</FieldGroup>
		</FieldSection>
	</form>
</template>

<style>
	.stool-types::picker(select) {
		@apply grid grid-cols-2;
	}

	.stool-types option {
		@apply items-center justify-center;
	}
</style>
