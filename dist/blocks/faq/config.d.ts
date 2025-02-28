import { z } from 'zod';
export type FaqProps = z.infer<typeof FaqPropsSchema>;
export declare const FaqPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"faq">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        content: string;
    }, {
        title: string;
        content: string;
    }>, "many">;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "faq";
    items: {
        title: string;
        content: string;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "faq";
    items: {
        title: string;
        content: string;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
