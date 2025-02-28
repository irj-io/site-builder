import { z } from 'zod';
export type CustomSvgProps = z.infer<typeof ImagePropsSchema>;
export declare const CustomSvgPropsSchema: z.ZodObject<{
    type: z.ZodLiteral<"customSvg">;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "customSvg";
    id: string;
}, {
    type: "customSvg";
    id: string;
}>;
export type ImageProps = z.infer<typeof ImagePropsSchema>;
export declare const ImagePropsSchema: z.ZodObject<{
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
}>;
export type MediaProps = z.infer<typeof MediaPropsSchema>;
export declare const MediaPropsSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}>]>;
