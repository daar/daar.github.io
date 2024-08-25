import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().refine((img) => img.width >= 960, {
			message: "Cover image must be at least 960 pixels wide!",
		}),
	}),
});

export const collections = { news };
