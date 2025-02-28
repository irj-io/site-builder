import { z } from 'zod';
import { SectionPropsSchema } from '@/components/section/config';
const CollapsibleContentItemPropsSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});
export const CollapsibleContentPropsSchema = z.object({
    type: z.literal('collapsibleContent'),
    title: z.string().optional(),
    items: z.array(CollapsibleContentItemPropsSchema),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map