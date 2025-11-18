import { defineStore } from 'pinia';
import { computed, ref, shallowReadonly, shallowRef } from 'vue';
import api from '../lib/api.js';

const useUserStore = defineStore('user', () => {
	const email = shallowRef(null);
	const password = shallowRef(null);
	const password_confirmation = shallowRef(null);
	const requests = ref(new Set());
	const user = shallowRef(null);
	const user_loading = computed(() => {
		return requests.value.size;
	});

	function fetchUser() {
		const p = api.get('/user');
		requests.value.add(p);

		p.then((rsp) => {
			if (rsp.ok) {
				return rsp.json();
			}
		}).then((data) => {
			user.value = data;
		}).catch((err) => {
			console.error(err);
		}).finally(() => {
			requests.value.delete(p);
		});
	}
	function login() {
		const p = api.post('/login', {
			email: email.value,
			password: password.value,
			password_confirmation: password_confirmation.value,
		});
		requests.value.add(p);

		p.then((rsp) => {
			if (rsp.ok) {
				fetchUser();
			}
		}).finally(() => {
			requests.value.delete(p);
		});
	}
	function register() {}

	return {
		email,
		fetchUser,
		login,
		password,
		password_confirmation,
		register,
		user: shallowReadonly(user),
		user_loading,
	};
});

export default useUserStore;
