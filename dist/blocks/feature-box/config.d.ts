import { z } from 'zod';
export type FeatureBoxProps = z.infer<typeof FeatureBoxPropsSchema>;
export declare const FeatureBoxPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"featureBox">;
    media: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    title: z.ZodOptional<z.ZodString>;
    overline: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    action: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>>;
    reverse: z.ZodDefault<z.ZodBoolean>;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    reverse: boolean;
    type: "featureBox";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    media?: {
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
    content?: string | undefined;
    overline?: string | undefined;
    action?: {
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
    } | undefined;
}, {
    type: "featureBox";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
    reverse?: boolean | undefined;
    media?: {
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
    content?: string | undefined;
    overline?: string | undefined;
    action?: {
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
    } | undefined;
}>;
