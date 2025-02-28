import { z } from 'zod';
import { ActionSchema } from '@/components/component-schema';
import { MediaPropsSchema } from '@/components/media/config';
import { SectionPropsSchema } from '@/components/section/config';
export const FeatureBoxPropsSchema = z.object({
    type: z.literal('featureBox'),
    media: MediaPropsSchema.optional(),
    title: z.string().optional(),
    overline: z.string().optional(),
    content: z.string().optional(),
    action: ActionSchema.optional(),
    reverse: z.boolean().default(false),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map