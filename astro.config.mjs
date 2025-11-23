// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		mdx(),
		vue({
			appEntrypoint: './src/pages/_app',
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
