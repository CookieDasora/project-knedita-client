import { z } from 'zod'

export const CreateUserFormSchema = z.object({
  username: z
    .string()
    .nonempty('Username is required')
    .min(5, 'Username too short')
    .max(15, 'Username too long')
    .toLowerCase(),
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
