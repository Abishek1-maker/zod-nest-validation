import { z } from 'zod';

export const PropertySchema = z
  .object({
    name: z.string(),
    description: z.string().min(5).max(20),
    area: z.coerce.number().positive(),
  })
  .strict();
//for return error like forbiddinewhitelist:true
// .required(); not nidded if you use z.zodobject

export type propertyzodDto = z.infer<typeof PropertySchema>;
// Zod schema for URL param
export const IdParamSchema = z.object({
  id: z.coerce.number().positive(), // coerce string to number
});

// Zod schema for query
export const SortQuerySchema = z.object({
  sort: z.preprocess((val) => val === 'true', z.boolean()),
});
