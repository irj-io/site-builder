import { z } from 'zod';
import { MediaPropsSchema } from '@/components/media/config';
export const MarkdownDataSchema = z.object({
    _contentHtml: z.string(),
    author: z.string().optional(),
    authorAvatarUrl: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
    media: MediaPropsSchema.optional(),
    order: z.number().optional(),
    slug: z.array(z.string()),
    title: z.string().optional(),
    // Deprecated, use media
    banner: z.string().optional(),
    bannerAlt: z.string().optional(),
});
export const ArticleDataSchema = z.object({
    _contentHtml: z.string(),
    author: z.string(),
    authorAvatarUrl: z.string(),
    date: z.string(),
    description: z.string().optional(),
    media: MediaPropsSchema.optional(),
    order: z.number().optional(),
    slug: z.array(z.string()),
    title: z.string(),
    // Deprecated, use media
    banner: z.string().optional(),
    bannerAlt: z.string().optional(),
});
//# sourceMappingURL=post-schema.js.map