import { defineCollection, getCollection, getEntry, z } from 'astro:content';

export const collections = {
	gut: defineCollection({
		name: 'The human gut',
		root: true,
		type: 'content',
		schema: z.object({
			collections: z.array(z.string()).optional(),
		}),
	}),
	'gut-compendium': defineCollection({
		sort_by: 'index',
		type: 'content',
		schema: z.object({
			index: z.coerce.number().nonnegative().int(),
			category: z.string(),
			title: z.string(),
		}),
	}),
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
	nutrition: defineCollection({
		name: 'Nutrition',
		root: true,
		type: 'content',
	}),
	'nutrition-compendium': defineCollection({
		sort_by: 'index',
		type: 'content',
		schema: z.object({
			index: z.coerce.number().positive().int(),
			title: z.string(),
		}),
	}),
	'nutrition-foods': defineCollection({
		sort_by: 'title',
		type: 'content',
		schema: z.object({
			title: z.string(),
		}),
	}),
};

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
