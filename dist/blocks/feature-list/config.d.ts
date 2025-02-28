import { z } from 'zod';
export type FeatureListItemProps = z.infer<typeof FeatureListItemPropsSchema>;
declare const FeatureListItemPropsSchema: z.ZodObject<{
    icon: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    content?: string | undefined;
    icon?: string | undefined;
}, {
    content?: string | undefined;
    icon?: string | undefined;
}>;
export type FeatureListProps = z.infer<typeof FeatureListPropsSchema>;
export declare const FeatureListPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"featureList">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    features: z.ZodArray<z.ZodObject<{
        icon: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        content?: string | undefined;
        icon?: string | undefined;
    }, {
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
    type: "featureList";
    features: {
        content?: string | undefined;
        icon?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "featureList";
    features: {
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
