import { z } from 'zod';
export type LogoMarqueeProps = z.infer<typeof LogoMarqueePropsSchema>;
export declare const LogoMarqueePropsSchema: z.ZodObject<{
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
}>;
