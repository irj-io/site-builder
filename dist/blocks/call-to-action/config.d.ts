import { z } from 'zod';
export type CallToActionProps = z.infer<typeof CallToActionPropsSchema>;
export declare const CallToActionPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"callToAction">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    button: z.ZodObject<{
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
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    button: {
        label: string;
        type: "button";
        href?: string | undefined;
        size?: "default" | "icon" | "sm" | "lg" | undefined;
        variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
        startIcon?: string | undefined;
    };
    type: "callToAction";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    button: {
        label: string;
        type: "button";
        href?: string | undefined;
        size?: "default" | "icon" | "sm" | "lg" | undefined;
        variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
        startIcon?: string | undefined;
    };
    type: "callToAction";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
