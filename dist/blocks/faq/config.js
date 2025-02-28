import { z } from 'zod';
import { SectionPropsSchema } from '../../components/section/config';
const FaqItemPropsSchema = z.object({
    title: z.string(),
    content: z.string(),
});
export const FaqPropsSchema = z.object({
    type: z.literal('faq'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    items: z.array(FaqItemPropsSchema),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map