import { z } from 'zod';
import { SectionPropsSchema } from '@/components/section/config';
export const ContactFormPropsSchema = z.object({
    type: z.literal('contactForm'),
    title: z.string().optional(),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map