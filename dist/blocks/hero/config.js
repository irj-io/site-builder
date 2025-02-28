import { z } from 'zod';
import { ActionSchema } from '@/components/component-schema';
import { MediaPropsSchema } from '@/components/media/config';
import { SectionPropsSchema } from '@/components/section/config';
export const HeroBasePropsSchema = z.object({
    type: z.literal('hero'),
    variant: z.enum(['highImpact', 'mediumImpact', 'productScreenshot']),
    media: MediaPropsSchema.optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    actions: z.array(ActionSchema).optional(),
    section: SectionPropsSchema.optional(),
});
const HeroHighImpactSchema = HeroBasePropsSchema.extend({
    variant: z.literal('highImpact'),
});
const HeroMediumImpactSchema = HeroBasePropsSchema.extend({
    variant: z.literal('mediumImpact'),
});
const HeroProductScreenshotSchema = HeroBasePropsSchema.extend({
    variant: z.literal('productScreenshot'),
});
export const HeroSchema = z.discriminatedUnion('variant', [
    HeroHighImpactSchema,
    HeroMediumImpactSchema,
    HeroProductScreenshotSchema,
]);
//# sourceMappingURL=config.js.map