import { z } from 'zod';
export const CustomSvgPropsSchema = z.object({
    type: z.literal('customSvg'),
    id: z.string(),
});
export const ImagePropsSchema = z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string().default(''),
    style: z.enum(['screenshot']).optional(),
    width: z.number().optional(),
    height: z.number().optional(),
});
export const MediaPropsSchema = z.discriminatedUnion('type', [
    ImagePropsSchema,
    CustomSvgPropsSchema,
]);
//# sourceMappingURL=config.js.map