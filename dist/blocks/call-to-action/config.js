import { z } from 'zod';
import { ButtonActionSchema } from '@/components/component-schema';
import { SectionPropsSchema } from '@/components/section/config';
export const CallToActionPropsSchema = z.object({
    type: z.literal('callToAction'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    button: ButtonActionSchema,
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map