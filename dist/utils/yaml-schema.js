import { z } from 'zod';
import { BlocksSchema } from '@/blocks/block-schema';
import { ContentSchema } from '@/blocks/content-schema';
import { AnnouncementBarSchema } from '@/components/announcement-bar/announcement-bar-schema';
import { FooterSchema } from '@/components/footers/footer-schema';
import { HeaderSchema } from '@/components/headers/header-schema';
export const YamlGlobalSchema = z.object({
    announcementBar: AnnouncementBarSchema.optional().describe('AnnouncementBar properties'),
    header: HeaderSchema.optional().describe('Header properties'),
    footer: FooterSchema.optional().describe('Footer properties'),
});
export const YamlPageSchema = z.object({
    announcementBar: AnnouncementBarSchema.optional().describe('Override announcementBar properties'),
    header: HeaderSchema.pick({ theme: true }).optional().describe('Override header properties'),
    layout: z.array(BlocksSchema).describe('A list of page blocks to add to the page'),
});
export const isYamlPage = (data) => {
    return YamlPageSchema.safeParse(data).success;
};
export const YamlCollectionDetailSchema = z.object({
    items: z.array(z.object({
        id: z.string().or(z.number()),
        content: ContentSchema,
    })),
});
export const isYamlCollectionDetail = (data) => {
    return YamlCollectionDetailSchema.safeParse(data).success;
};
export const YamlCollectionSchema = z
    .object({
    collections: z.record(z.string(), YamlCollectionDetailSchema),
})
    .passthrough();
export const isYamlCollection = (data) => {
    return YamlCollectionSchema.safeParse(data).success;
};
//# sourceMappingURL=yaml-schema.js.map