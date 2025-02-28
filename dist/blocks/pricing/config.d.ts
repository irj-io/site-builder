import { z } from 'zod';
export type PricingProps = z.infer<typeof PricingPropsSchema>;
export declare const PricingPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"pricing">;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    plans: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        price: z.ZodObject<{
            usd: z.ZodString;
            eur: z.ZodString;
            gbp: z.ZodString;
            zar: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        }, {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        }>;
        descr: z.ZodOptional<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label: string;
        }, {
            label: string;
        }>, "many">;
        action: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        type: string;
        action: {
            label: string;
            type: "button";
            href?: string | undefined;
            size?: "default" | "icon" | "sm" | "lg" | undefined;
            variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
            startIcon?: string | undefined;
        } | {
            label: string;
            href: string;
            type: "link";
        };
        features: {
            label: string;
        }[];
        price: {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        };
        descr?: string | undefined;
    }, {
        type: string;
        action: {
            label: string;
            type: "button";
            href?: string | undefined;
            size?: "default" | "icon" | "sm" | "lg" | undefined;
            variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
            startIcon?: string | undefined;
        } | {
            label: string;
            href: string;
            type: "link";
        };
        features: {
            label: string;
        }[];
        price: {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        };
        descr?: string | undefined;
    }>, "many">;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "pricing";
    plans: {
        type: string;
        action: {
            label: string;
            type: "button";
            href?: string | undefined;
            size?: "default" | "icon" | "sm" | "lg" | undefined;
            variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
            startIcon?: string | undefined;
        } | {
            label: string;
            href: string;
            type: "link";
        };
        features: {
            label: string;
        }[];
        price: {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        };
        descr?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    type: "pricing";
    plans: {
        type: string;
        action: {
            label: string;
            type: "button";
            href?: string | undefined;
            size?: "default" | "icon" | "sm" | "lg" | undefined;
            variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | undefined;
            startIcon?: string | undefined;
        } | {
            label: string;
            href: string;
            type: "link";
        };
        features: {
            label: string;
        }[];
        price: {
            usd: string;
            eur: string;
            gbp: string;
            zar: string;
        };
        descr?: string | undefined;
    }[];
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
