import { z } from 'zod';
export type CollectionStackProps = z.infer<typeof CollectionStackPropsSchema>;
export declare const CollectionStackPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"collectionStack">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    collectionId: z.ZodString;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "collectionStack";
    collectionId: string;
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "collectionStack";
    collectionId: string;
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
