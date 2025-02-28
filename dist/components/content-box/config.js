import { z } from 'zod';
export const ContentBoxPropsSchema = z.object({
    type: z.literal('contentBox'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    content: z.string().optional(),
    align: z.enum(['left', 'right', 'center', 'start', 'end']).default('start'),
    className: z.string().optional(),
});
//# sourceMappingURL=config.js.map