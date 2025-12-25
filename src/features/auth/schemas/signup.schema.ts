import z from 'zod';

export const signupSchema = z.object({
  name: z.string().trim().nonempty('Name is required'),
  email: z.string().trim().nonempty('Email is required'),
  password: z.string().trim().nonempty('Password is required'),
  confirmPassword: z.string().trim().nonempty('Confirm Password is required'),
});
export type SignupDataType = z.infer<typeof signupSchema>;
