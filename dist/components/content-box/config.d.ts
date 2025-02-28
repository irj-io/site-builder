import { z } from 'zod';
export type ContentBoxProps = z.infer<typeof ContentBoxPropsSchema>;
export declare const ContentBoxPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"contentBox">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    align: z.ZodDefault<z.ZodEnum<["left", "right", "center", "start", "end"]>>;
    className: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "contentBox";
    align: "center" | "end" | "start" | "left" | "right";
    title?: string | undefined;
    className?: string | undefined;
    content?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "contentBox";
    title?: string | undefined;
    className?: string | undefined;
    content?: string | undefined;
    subtitle?: string | undefined;
    align?: "center" | "end" | "start" | "left" | "right" | undefined;
}>;
