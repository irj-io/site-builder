import { z } from 'zod';
export type StatsProps = z.infer<typeof StatsPropsSchema>;
export declare const StatsPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"stats">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
        value: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        value: string | number;
        label?: string | undefined;
    }, {
        value: string | number;
        label?: string | undefined;
    }>, "many">;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "stats";
    items: {
        value: string | number;
        label?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "stats";
    items: {
        value: string | number;
        label?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
