import { z } from 'zod';
export type AnnouncementBar = z.infer<typeof AnnouncementBarSchema>;
export declare const AnnouncementBarSchema: z.ZodObject<{
    announcements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        startDate: z.ZodOptional<z.ZodDate>;
        endDate: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }, {
        content: string;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }>, "many">>;
    section: z.ZodOptional<z.ZodObject<{
        className: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        className?: string | undefined;
    }, {
        className?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    section?: {
        className?: string | undefined;
    } | undefined;
    announcements?: {
        content: string;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }[] | undefined;
}, {
    section?: {
        className?: string | undefined;
    } | undefined;
    announcements?: {
        content: string;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }[] | undefined;
}>;
