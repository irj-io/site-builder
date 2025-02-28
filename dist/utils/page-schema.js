import { z } from 'zod';
import { BlocksSchema } from '../blocks/block-schema';
export const PageSchema = z.object({
    layout: z.array(BlocksSchema),
});
//# sourceMappingURL=page-schema.js.map