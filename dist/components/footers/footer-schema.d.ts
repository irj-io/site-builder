import { z } from 'zod';
export type FooterColumn = z.infer<typeof FooterColumn>;
declare const FooterColumn: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: ({
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
    })[] | undefined;
}, {
    title?: string | undefined;
    content?: ({
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
    })[] | undefined;
}>;
export type Footer = z.infer<typeof FooterSchema>;
export declare const FooterSchema: z.ZodObject<{
    logo: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"image">;
        src: z.ZodString;
        alt: z.ZodDefault<z.ZodString>;
        style: z.ZodOptional<z.ZodEnum<["screenshot"]>>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        alt: string;
        src: string;
        style?: "screenshot" | undefined;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        type: "image";
        src: string;
        style?: "screenshot" | undefined;
        height?: number | undefined;
        width?: number | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"customSvg">;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "customSvg";
        id: string;
    }, {
        type: "customSvg";
        id: string;
    }>]>>;
    topSection: z.ZodOptional<z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        content?: string | undefined;
    }, {
        content?: string | undefined;
    }>>;
    columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        content?: ({
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
        })[] | undefined;
    }, {
        title?: string | undefined;
        content?: ({
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
        })[] | undefined;
    }>, "many">>;
    bottomSection: z.ZodOptional<z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        content?: string | undefined;
    }, {
        content?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    columns?: {
        title?: string | undefined;
        content?: ({
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
        })[] | undefined;
    }[] | undefined;
    logo?: {
        type: "customSvg";
        id: string;
    } | {
        type: "image";
        alt: string;
        src: string;
        style?: "screenshot" | undefined;
        height?: number | undefined;
        width?: number | undefined;
    } | undefined;
    topSection?: {
        content?: string | undefined;
    } | undefined;
    bottomSection?: {
        content?: string | undefined;
    } | undefined;
}, {
    columns?: {
        title?: string | undefined;
        content?: ({
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
        })[] | undefined;
    }[] | undefined;
    logo?: {
        type: "customSvg";
        id: string;
    } | {
        type: "image";
        src: string;
        style?: "screenshot" | undefined;
        height?: number | undefined;
        width?: number | undefined;
        alt?: string | undefined;
    } | undefined;
    topSection?: {
        content?: string | undefined;
    } | undefined;
    bottomSection?: {
        content?: string | undefined;
    } | undefined;
}>;
export {};
