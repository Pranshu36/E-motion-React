import z from 'zod';

export const articalSchema = z.object({
  source: z.object({
    id: z.string().nullable(),
    name: z.string(),
  }),
  author: z.string().nullable(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  urlToImage: z.string(),
  publishedAt: z.string(),
  content: z.string(),
});

export type ArticalType = z.infer<typeof articalSchema>;
