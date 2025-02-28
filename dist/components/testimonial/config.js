import { z } from 'zod';
import { MediaPropsSchema } from '../media/config';
export const TestimonialPropsSchema = z.object({
    type: z.literal('testimonial'),
    variant: z.enum(['vertical']).default('vertical'),
    media: MediaPropsSchema.optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    content: z.string().optional(),
});
//# sourceMappingURL=config.js.map