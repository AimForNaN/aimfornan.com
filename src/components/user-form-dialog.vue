<script setup>
import { onMounted, shallowRef } from 'vue';
	import { storeToRefs } from 'pinia';
	import routes from '../lib/routes.js';
	import useUserStore from '../stores/user.js';

	const user_store = useUserStore();
	const { email, password, password_confirmation } = storeToRefs(user_store);
	const { login, register } = user_store;
	const tab_active = shallowRef(null);
	const tabs = [
		{ id: 'log-in', label: 'Log in', handler: login },
		{ id: 'sign-up', label: 'Sign up', handler: register },
	];

	function onSubmit(e) {
		tab_active.value.handler();
	}

	tab_active.value = tabs[0];

	onMounted(() => {
		routes().get('/sanctum/csrf-cookie');
	});
</script>

<template>
	<dialog class="modal" id="user-form-dialog">
		<form class="modal-box bg-base-100 border border-base-300 flex flex-col gap-4 p-8 shadow-xl md:gap-6 md:p-12" @submit.prevent="onSubmit">
			<div class="tabs tabs-box grid grid-flow-col">
				<button class="tab" :class="{ 'tab-active': tab_active === tab }" :key="tab.id" type="button" @click="tab_active = tab" v-for="tab in tabs">{{tab.label}}</button>
			</div>
			<div class="flex flex-col gap-2 md:gap-3">
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Email:</legend>
					<input class="input" type="email" v-model="email"/>
				</fieldset>
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Password:</legend>
					<input class="input" type="password" v-model="password"/>
				</fieldset>
				<fieldset class="fieldset" v-if="tab_active.id === 'sign-up'">
					<legend class="fieldset-legend">Repeat password:</legend>
					<input class="input" type="password" v-model="password_confirmation"/>
				</fieldset>
			</div>
			<div class="card-actions justify-end">
				<button class="btn btn-primary" type="submit">{{tab_active.label}}</button>
			</div>
		</form>
		<form class="modal-backdrop backdrop-blur-xs" method="dialog">
			<button>close</button>
		</form>
	</dialog>
</template>
