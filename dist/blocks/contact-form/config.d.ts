import { z } from 'zod';
export type ContactFormProps = z.infer<typeof ContactFormPropsSchema>;
export declare const ContactFormPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"contactForm">;
    title: z.ZodOptional<z.ZodString>;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "contactForm";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
}, {
    type: "contactForm";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
}>;
