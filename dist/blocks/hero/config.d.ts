import { z } from 'zod';
export type HeroProps = z.infer<typeof HeroBasePropsSchema>;
export declare const HeroBasePropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"hero">;
    variant: z.ZodEnum<["highImpact", "mediumImpact", "productScreenshot"]>;
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
    subtitle: z.ZodOptional<z.ZodString>;
    actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "hero";
    variant: "highImpact" | "mediumImpact" | "productScreenshot";
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
    subtitle?: string | undefined;
    actions?: ({
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
    type: "hero";
    variant: "highImpact" | "mediumImpact" | "productScreenshot";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
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
    subtitle?: string | undefined;
    actions?: ({
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
export declare const HeroSchema: z.ZodDiscriminatedUnion<"variant", [z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"hero">;
    variant: z.ZodEnum<["highImpact", "mediumImpact", "productScreenshot"]>;
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
    subtitle: z.ZodOptional<z.ZodString>;
    actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, {
    variant: z.ZodLiteral<"highImpact">;
}>, "strip", z.ZodTypeAny, {
    type: "hero";
    variant: "highImpact";
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
    subtitle?: string | undefined;
    actions?: ({
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
    type: "hero";
    variant: "highImpact";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
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
    subtitle?: string | undefined;
    actions?: ({
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"hero">;
    variant: z.ZodEnum<["highImpact", "mediumImpact", "productScreenshot"]>;
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
    subtitle: z.ZodOptional<z.ZodString>;
    actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, {
    variant: z.ZodLiteral<"mediumImpact">;
}>, "strip", z.ZodTypeAny, {
    type: "hero";
    variant: "mediumImpact";
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
    subtitle?: string | undefined;
    actions?: ({
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
    type: "hero";
    variant: "mediumImpact";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
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
    subtitle?: string | undefined;
    actions?: ({
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"hero">;
    variant: z.ZodEnum<["highImpact", "mediumImpact", "productScreenshot"]>;
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
    subtitle: z.ZodOptional<z.ZodString>;
    actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, {
    variant: z.ZodLiteral<"productScreenshot">;
}>, "strip", z.ZodTypeAny, {
    type: "hero";
    variant: "productScreenshot";
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
    subtitle?: string | undefined;
    actions?: ({
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
    type: "hero";
    variant: "productScreenshot";
    section?: {
        className?: string | undefined;
    } | undefined;
    title?: string | undefined;
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
    subtitle?: string | undefined;
    actions?: ({
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
}>]>;
