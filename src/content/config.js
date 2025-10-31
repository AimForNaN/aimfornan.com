import { defineCollection, getCollection, getEntry, getEntries, z } from 'astro:content';
import mapAsync from '../lib/map-async';

const compendium_collection = defineCollection({
	sort_by: 'index',
	type: 'content',
	schema: z.object({
		category: z.string(),
		index: z.coerce.number().nonnegative().int().optional(),
		title: z.string(),
	}),
});

const foods_collection = defineCollection({
	sort_by: 'title',
	type: 'content',
	schema: z.object({
		category: z.string(),
		title: z.string(),
	}),
});

export const collections = {
	gut: rootCollection('The human gut'),
	'gut-compendium': compendium_collection,
	'gut-microbiome': defineCollection({
		sort_by: 'title',
		type: 'content',
		schema: z.object({
			category: z.string(),
			genus: z.string(),
			species: z.string(),
			subspecies: z.string().optional(),
			title: z.string(),
		}),
	}),
	health: rootCollection('Health'),
	'health-compendium': compendium_collection,
	nutrition: rootCollection('Nutrition'),
	'nutrition-fruits': foods_collection,
	'nutrition-vegetables': foods_collection,
};

export async function getSortedEntriesFromCollections(entry_collections = []) {
	return await mapAsync(async (collection) => {
		const c = collections[collection];
		collection = await getCollection(collection);
		return collection.toSorted((a,b) => {
			return (a.data[c.sort_by] ?? 2) - (b.data[c.sort_by] ?? 2);
		});
	}, entry_collections);
}

export async function getNonRootEntries() {
	return (await Promise.all(Object.entries(collections).filter(([, item]) => !item.root).map(async ([collection]) => {
		return await getCollection(collection);
	}))).flat();
}

export async function getRootEntries() {
	return await Promise.all(Object.entries(collections).filter(([, item]) => item.root).map(async ([collection]) => {
		return await getEntry(collection, 'index');
	}));
}

export async function groupEntriesBy(entry_collections = [], group_by) {
	const entries = await getSortedEntriesFromCollections(entry_collections);
	return Object.groupBy(entries.flat(), group_by);
}

function rootCollection(name) {
	return defineCollection({
		name,
		root: true,
		type: 'content',
		schema: z.object({
			collections: z.string().array().nonempty(),
		}),
	});
}
