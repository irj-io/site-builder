import { z } from 'zod';
import { IconSchema } from '../../components/component-schema';
import { SectionPropsSchema } from '../../components/section/config';
const FeatureListItemPropsSchema = z.object({
    icon: IconSchema.optional(),
    content: z.string().optional(),
});
export const FeatureListPropsSchema = z.object({
    type: z.literal('featureList'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    features: z.array(FeatureListItemPropsSchema),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map