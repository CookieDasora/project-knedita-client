import { z } from 'zod'

export const AuthUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email must be valid')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must have 8 characters'),
})
