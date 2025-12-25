import z from 'zod';

export const contactFormSchem = z.object({
  email: z.string().trim().nonempty('Email is required'),
  name: z.string().trim().nonempty('Name is required'),
  subject: z.string().trim().nonempty('Subject is rquired'),
  description: z.string().trim().nonempty('Description is required'),
});

export type ContactFormType = z.infer<typeof contactFormSchem>;
