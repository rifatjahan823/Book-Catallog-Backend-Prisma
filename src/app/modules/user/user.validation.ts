import { z } from 'zod';
const create = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    role: z.string().refine(value => value === 'admin' || value === 'customer', {
      message: 'Role must be either "admin" or "customer"',
    }),
    contactNo: z.string({ required_error: 'Contact number is required' }),
    address: z.string({ required_error: 'Address is required' }),
    profileImg: z.string({ required_error: 'Profile image is required' }),
  }),
});

export const UsersValidation={
  create
}
