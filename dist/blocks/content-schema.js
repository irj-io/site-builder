import { z } from 'zod';
import { ContentBoxPropsSchema } from '@/components/content-box/config';
import { ImagePropsSchema } from '@/components/media/config';
import { TestimonialPropsSchema } from '@/components/testimonial/config';
export const ContentSchema = z.discriminatedUnion('type', [
    ContentBoxPropsSchema,
    TestimonialPropsSchema,
    ImagePropsSchema,
]);
//# sourceMappingURL=content-schema.js.map