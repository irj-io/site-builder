import { z } from 'zod';
import { ActionSchema } from '../component-schema';
import { MediaPropsSchema } from '../media/config';
const FooterColumn = z.object({
    title: z.string().optional(),
    content: z.array(ActionSchema).optional(),
});
export const FooterSchema = z.object({
    logo: MediaPropsSchema.optional(),
    topSection: z
        .object({
        content: z.string().optional(),
    })
        .optional(),
    columns: z.array(FooterColumn).optional(),
    bottomSection: z
        .object({
        content: z.string().optional(),
    })
        .optional(),
});
//# sourceMappingURL=footer-schema.js.map