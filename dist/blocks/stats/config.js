import { z } from 'zod';
import { SectionPropsSchema } from '@/components/section/config';
const StatItemPropsSchema = z.object({
    label: z.string().optional(),
    value: z.union([z.number(), z.string()]),
});
export const StatsPropsSchema = z.object({
    type: z.literal('stats'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    items: z.array(StatItemPropsSchema),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=config.js.map