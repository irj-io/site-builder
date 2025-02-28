import { z } from 'zod';
export type ContentProps = z.infer<typeof ContentPropsSchema>;
export declare const ContentPropsSchema: z.ZodObject<{
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
}>;
