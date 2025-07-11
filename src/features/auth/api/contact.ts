import { z } from 'zod';

export const contactFormScheme = z.object({
  first_name: z.string().min(3, 'First Name is required'),
  last_name: z.string().min(3, 'Last Name is required'),
  email: z.string().min(5, 'Email is required').email('Invalid email address'),
  phone: z.string().min(3, 'Phone is required'),
  enquiry: z.string({ required_error: 'Enquiry is required' }),
  message: z.string().min(10, 'Message is required'),
});
