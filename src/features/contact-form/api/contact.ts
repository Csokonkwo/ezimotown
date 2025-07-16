import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export const contactFormSchema = z.object({
  first_name: z.string().min(3, 'First Name is required'),
  last_name: z.string().min(3, 'Last Name is required'),
  email: z.string().min(5, 'Email is required').email('Invalid email address'),
  phone: z.string().min(3, 'Phone is required'),
  inquiry_type: z.string({ required_error: 'Inquiry Field is required' }),
  message: z.string().min(10, 'Message is required'),
});

export type createContactInput = z.infer<typeof contactFormSchema>

export const  createContact = ({data}:{data:createContactInput}): Promise<createContactInput> => {
  return api.post('/contact',data)
}

export type UseCreateContactOptions = {
  mutationConfig?: MutationConfig<typeof createContact>
}

export const useCreateContact = ({mutationConfig}:UseCreateContactOptions = {}) => {
  const queryClient = useQueryClient()

  const {onSuccess, ...restConfig} = mutationConfig || {}

  return useMutation({
    onSuccess:(...args) => {
      queryClient.invalidateQueries({
        queryKey:['contact']
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createContact
  })
}