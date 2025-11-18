import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),

			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),

			category: z.string().optional(),
			tags: z.array(z.string()).optional(),

			drills: z
				.array(
					z.object({
						name: z.string(),
						focus: z.string(),
						reps: z.string().optional(),
					})
				)
				.optional(),
		}),
});

export const collections = { blog };