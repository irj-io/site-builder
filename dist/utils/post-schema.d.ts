import { z } from 'zod';
export type MarkdownData = z.infer<typeof MarkdownDataSchema>;
export declare const MarkdownDataSchema: z.ZodObject<{
    _contentHtml: z.ZodString;
    author: z.ZodOptional<z.ZodString>;
    authorAvatarUrl: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
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
    order: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodArray<z.ZodString, "many">;
    title: z.ZodOptional<z.ZodString>;
    banner: z.ZodOptional<z.ZodString>;
    bannerAlt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    slug: string[];
    _contentHtml: string;
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
    banner?: string | undefined;
    date?: string | undefined;
    order?: number | undefined;
    author?: string | undefined;
    authorAvatarUrl?: string | undefined;
    description?: string | undefined;
    bannerAlt?: string | undefined;
}, {
    slug: string[];
    _contentHtml: string;
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
    banner?: string | undefined;
    date?: string | undefined;
    order?: number | undefined;
    author?: string | undefined;
    authorAvatarUrl?: string | undefined;
    description?: string | undefined;
    bannerAlt?: string | undefined;
}>;
export type ArticleData = z.infer<typeof ArticleDataSchema>;
export declare const ArticleDataSchema: z.ZodObject<{
    _contentHtml: z.ZodString;
    author: z.ZodString;
    authorAvatarUrl: z.ZodString;
    date: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
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
    order: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodArray<z.ZodString, "many">;
    title: z.ZodString;
    banner: z.ZodOptional<z.ZodString>;
    bannerAlt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    date: string;
    slug: string[];
    _contentHtml: string;
    author: string;
    authorAvatarUrl: string;
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
    banner?: string | undefined;
    order?: number | undefined;
    description?: string | undefined;
    bannerAlt?: string | undefined;
}, {
    title: string;
    date: string;
    slug: string[];
    _contentHtml: string;
    author: string;
    authorAvatarUrl: string;
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
    banner?: string | undefined;
    order?: number | undefined;
    description?: string | undefined;
    bannerAlt?: string | undefined;
}>;
