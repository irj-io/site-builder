import { z } from 'zod';
export declare const IconSchema: z.ZodString;
export type ButtonAction = z.infer<typeof ButtonActionSchema>;
export declare const ButtonActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"button">;
    variant: z.ZodOptional<z.ZodEnum<["default", "outline", "secondary", "destructive", "ghost", "link"]>>;
    href: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    startIcon: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodEnum<["default", "sm", "lg", "icon"]>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    type: "button";
    href?: string | undefined;
    size?: "default" | "icon" | "sm" | "lg" | undefined;
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
    startIcon?: string | undefined;
}, {
    label: string;
    type: "button";
    href?: string | undefined;
    size?: "default" | "icon" | "sm" | "lg" | undefined;
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
    startIcon?: string | undefined;
}>;
export type LinkAction = z.infer<typeof LinkActionSchema>;
export declare const LinkActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"link">;
    href: z.ZodString;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
    type: "link";
}, {
    label: string;
    href: string;
    type: "link";
}>;
export type Action = z.infer<typeof ActionSchema>;
export declare const ActionSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"button">;
    variant: z.ZodOptional<z.ZodEnum<["default", "outline", "secondary", "destructive", "ghost", "link"]>>;
    href: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    startIcon: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodEnum<["default", "sm", "lg", "icon"]>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    type: "button";
    href?: string | undefined;
    size?: "default" | "icon" | "sm" | "lg" | undefined;
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
    startIcon?: string | undefined;
}, {
    label: string;
    type: "button";
    href?: string | undefined;
    size?: "default" | "icon" | "sm" | "lg" | undefined;
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
    startIcon?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"link">;
    href: z.ZodString;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
    type: "link";
}, {
    label: string;
    href: string;
    type: "link";
}>]>;
