import { z } from 'zod';
export type CollapsibleContentPropsItem = z.infer<typeof CollapsibleContentItemPropsSchema>;
declare const CollapsibleContentItemPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
export type CollapsibleContentProps = z.infer<typeof CollapsibleContentPropsSchema>;
export declare const CollapsibleContentPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"collapsibleContent">;
    title: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        content?: string | undefined;
    }, {
        title?: string | undefined;
        content?: string | undefined;
    }>, "many">;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "collapsibleContent";
    items: {
        title?: string | undefined;
        content?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
}, {
    type: "collapsibleContent";
    items: {
        title?: string | undefined;
        content?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
}>;
export {};
