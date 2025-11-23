<script setup>
	import { mdiAccountCircle } from '@mdi/js';
	import { storeToRefs } from 'pinia';
	import useUserStore from '../stores/user';

	import Icon from './icon.vue';
	import UserFormDialog from './user-form-dialog.vue';
	import { onMounted } from 'vue';

	const user_store = useUserStore();
	const { user, user_loading } = storeToRefs(user_store);
	const { fetchUser } = user_store;

	function onClick() {
		if (!user.value) {
			openUserFormDialog();
		}
	}
	function openUserFormDialog() {
		document.querySelector('#user-form-dialog').showModal();
	}

	onMounted(() => {
		fetchUser();
	})
</script>

<template>
	<button aria-label="user account menu" class="btn btn-ghost btn-square" :disabled="user_loading" @click="onClick">
		<Icon class="fill-base-content" :icon="mdiAccountCircle"></Icon>
	</button>
	<UserFormDialog v-if="!user"></UserFormDialog>
</template>
