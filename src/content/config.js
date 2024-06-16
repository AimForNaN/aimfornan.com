import { defineCollection, getCollection, getEntry, z } from 'astro:content';
import mapAsync from '../lib/map-async';

const compendium_collection = defineCollection({
	sort_by: 'index',
	type: 'content',
	schema: z.object({
		category: z.string(),
		index: z.coerce.number().nonnegative().int(),
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
	nutrition: rootCollection('Nutrition'),
	'nutrition-compendium': compendium_collection,
	'nutrition-fruits': foods_collection,
	'nutrition-vegetables': foods_collection,
};

export async function getEntriesFromCollections(entry_collections = []) {
	return await mapAsync(async (collection) => {
		const c = collections[collection];
		collection = await getCollection(collection);
		return collection.toSorted((a,b) => {
			return a.data[c.sort_by] - b.data[c.sort_by];
		});
	}, entry_collections);
}

export async function getRootCollections() {
	return await Promise.all(Object.entries(collections).filter(([, item]) => item.root).map(async ([collection]) => {
		[collection] = await getCollection(collection);
		return collection;
	}));
}

export async function getRootEntries() {
	return await Promise.all(Object.values(collections).filter((item) => item.root).map(async (collection) => {
		return await getEntry(collection, 'index');
	}));
}

export async function groupEntriesBy(entry_collections = [], group_by) {
	const entries = await getEntriesFromCollections(entry_collections);
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
