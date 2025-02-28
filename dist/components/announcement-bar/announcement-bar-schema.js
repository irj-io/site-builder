import { z } from 'zod';
import { SectionPropsSchema } from '../section/config';
const AnnouncementItemSchema = z.object({
    content: z.string(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
});
export const AnnouncementBarSchema = z.object({
    announcements: z.array(AnnouncementItemSchema).optional(),
    section: SectionPropsSchema.optional(),
});
//# sourceMappingURL=announcement-bar-schema.js.map