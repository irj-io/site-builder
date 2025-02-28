import { z } from 'zod';
export type SectionProps = z.infer<typeof SectionPropsSchema>;
export declare const SectionPropsSchema: z.ZodObject<{
    className: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    className?: string | undefined;
}, {
    className?: string | undefined;
}>;
