import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: image().refine((img) => img.width >= 600, {
            message: "Image must be at least 600 pixels width"
        }),
        tags: z.array(z.string())
    })
});

export const collections = {
    blog: blogCollection,
}