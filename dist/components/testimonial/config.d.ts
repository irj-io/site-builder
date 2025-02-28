import { z } from 'zod';
export type TestimonialProps = z.infer<typeof TestimonialPropsSchema>;
export declare const TestimonialPropsSchema: z.ZodObject<{
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
}>;
