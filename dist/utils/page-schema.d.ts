import { z } from 'zod';
export type Page = z.infer<typeof PageSchema>;
export declare const PageSchema: z.ZodObject<{
    layout: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"featureGrid">;
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            icon: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }, {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "featureGrid";
        features: {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }, {
        type: "featureGrid";
        features: {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"featureList">;
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            icon: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            icon?: string | undefined;
        }, {
            content?: string | undefined;
            icon?: string | undefined;
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "featureList";
        features: {
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }, {
        type: "featureList";
        features: {
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"collapsibleContent">;
        title: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            content?: string | undefined;
        }, {
            title?: string | undefined;
            content?: string | undefined;
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "collapsibleContent";
        items: {
            title?: string | undefined;
            content?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    }, {
        type: "collapsibleContent";
        items: {
            title?: string | undefined;
            content?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"content">;
        columns: z.ZodArray<z.ZodObject<{
            content: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            }>, z.ZodObject<{
                type: z.ZodLiteral<"testimonial">;
                variant: z.ZodDefault<z.ZodEnum<["vertical"]>>;
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
                content: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "testimonial";
                variant: "vertical";
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
                subtitle?: string | undefined;
            }, {
                type: "testimonial";
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
                content?: string | undefined;
                variant?: "vertical" | undefined;
                subtitle?: string | undefined;
            }>, z.ZodObject<{
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
            }>]>>;
        }, "strip", z.ZodTypeAny, {
            content?: {
                type: "contentBox";
                align: "center" | "end" | "start" | "left" | "right";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
            } | {
                type: "image";
                alt: string;
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
            } | {
                type: "testimonial";
                variant: "vertical";
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
                subtitle?: string | undefined;
            } | undefined;
        }, {
            content?: {
                type: "contentBox";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
                align?: "center" | "end" | "start" | "left" | "right" | undefined;
            } | {
                type: "image";
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
                alt?: string | undefined;
            } | {
                type: "testimonial";
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
                content?: string | undefined;
                variant?: "vertical" | undefined;
                subtitle?: string | undefined;
            } | undefined;
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "content";
        columns: {
            content?: {
                type: "contentBox";
                align: "center" | "end" | "start" | "left" | "right";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
            } | {
                type: "image";
                alt: string;
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
            } | {
                type: "testimonial";
                variant: "vertical";
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
                subtitle?: string | undefined;
            } | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    }, {
        type: "content";
        columns: {
            content?: {
                type: "contentBox";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
                align?: "center" | "end" | "start" | "left" | "right" | undefined;
            } | {
                type: "image";
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
                alt?: string | undefined;
            } | {
                type: "testimonial";
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
                content?: string | undefined;
                variant?: "vertical" | undefined;
                subtitle?: string | undefined;
            } | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"logoMarquee">;
        items: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "logoMarquee";
        items: {
            type: "image";
            alt: string;
            src: string;
            style?: "screenshot" | undefined;
            height?: number | undefined;
            width?: number | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    }, {
        type: "logoMarquee";
        items: {
            type: "image";
            src: string;
            style?: "screenshot" | undefined;
            height?: number | undefined;
            width?: number | undefined;
            alt?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"stats">;
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        }, "strip", z.ZodTypeAny, {
            value: string | number;
            label?: string | undefined;
        }, {
            value: string | number;
            label?: string | undefined;
        }>, "many">;
        section: z.ZodOptional<z.ZodObject<{
            className: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
        }, {
            className?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "stats";
        items: {
            value: string | number;
            label?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }, {
        type: "stats";
        items: {
            value: string | number;
            label?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    layout: ({
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
    } | {
        type: "collapsibleContent";
        items: {
            title?: string | undefined;
            content?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    } | {
        type: "collectionStack";
        collectionId: string;
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
        type: "contactForm";
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    } | {
        type: "content";
        columns: {
            content?: {
                type: "contentBox";
                align: "center" | "end" | "start" | "left" | "right";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
            } | {
                type: "image";
                alt: string;
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
            } | {
                type: "testimonial";
                variant: "vertical";
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
                subtitle?: string | undefined;
            } | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    } | {
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
    } | {
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
    } | {
        type: "featureGrid";
        features: {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
        type: "featureList";
        features: {
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
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
    } | {
        type: "logoMarquee";
        items: {
            type: "image";
            alt: string;
            src: string;
            style?: "screenshot" | undefined;
            height?: number | undefined;
            width?: number | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    } | {
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
    } | {
        type: "stats";
        items: {
            value: string | number;
            label?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    })[];
}, {
    layout: ({
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
    } | {
        type: "collapsibleContent";
        items: {
            title?: string | undefined;
            content?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    } | {
        type: "collectionStack";
        collectionId: string;
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
        type: "contactForm";
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
    } | {
        type: "content";
        columns: {
            content?: {
                type: "contentBox";
                title?: string | undefined;
                className?: string | undefined;
                content?: string | undefined;
                subtitle?: string | undefined;
                align?: "center" | "end" | "start" | "left" | "right" | undefined;
            } | {
                type: "image";
                src: string;
                style?: "screenshot" | undefined;
                height?: number | undefined;
                width?: number | undefined;
                alt?: string | undefined;
            } | {
                type: "testimonial";
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
                content?: string | undefined;
                variant?: "vertical" | undefined;
                subtitle?: string | undefined;
            } | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    } | {
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
    } | {
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
    } | {
        type: "featureGrid";
        features: {
            title?: string | undefined;
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
        type: "featureList";
        features: {
            content?: string | undefined;
            icon?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    } | {
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
    } | {
        type: "logoMarquee";
        items: {
            type: "image";
            src: string;
            style?: "screenshot" | undefined;
            height?: number | undefined;
            width?: number | undefined;
            alt?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
    } | {
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
    } | {
        type: "stats";
        items: {
            value: string | number;
            label?: string | undefined;
        }[];
        section?: {
            className?: string | undefined;
        } | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
    })[];
}>;
