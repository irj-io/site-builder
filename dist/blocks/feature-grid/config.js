import { z } from 'zod';
import { IconSchema } from '../../components/component-schema';
import { SectionPropsSchema } from '../../components/section/config';
const FeatureGridItemPropsSchema = z.object({
    icon: IconSchema.optional(),
    title: z.string().optional(),
    content: z.string().optional(),
});
export const FeatureGridPropsSchema = z.object({
    type: z.literal('featureGrid'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    features: z.array(FeatureGridItemPropsSchema),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map