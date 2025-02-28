import { z } from 'zod';
export type FeatureGridItemProps = z.infer<typeof FeatureGridItemPropsSchema>;
declare const FeatureGridItemPropsSchema: z.ZodObject<{
    icon: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
    icon?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
    icon?: string | undefined;
}>;
export type FeatureGridProps = z.infer<typeof FeatureGridPropsSchema>;
export declare const FeatureGridPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"featureGrid">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    features: z.ZodArray<z.ZodObject<{
        icon: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        content?: string | undefined;
        icon?: string | undefined;
    }, {
        title?: string | undefined;
        content?: string | undefined;
        icon?: string | undefined;
    }>, "many">;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "featureGrid";
    features: {
        title?: string | undefined;
        content?: string | undefined;
        icon?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "featureGrid";
    features: {
        title?: string | undefined;
        content?: string | undefined;
        icon?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
export {};
