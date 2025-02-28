import { z } from 'zod';
import { SectionPropsSchema } from '@/components/section/config';
export const CollectionStackPropsSchema = z.object({
    type: z.literal('collectionStack'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    collectionId: z.string(),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map