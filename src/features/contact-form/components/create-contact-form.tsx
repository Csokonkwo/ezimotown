import React from 'react'
import { contactFormSchema, createContactInput, useCreateContact } from '../api/contact'
import { formatErrors } from '@/lib/utils'
import { Form, Input, Select } from '@/components/ui/form'
import { Textarea } from '@/components/ui/form/textarea'
import { inquiryTypes } from '@/constants'
import { Button } from '@/components/ui/buttons'
import { toast } from 'react-toastify'
import { UseFormReturn } from 'react-hook-form'

export default function CreateContactForm() {
    const createContact = useCreateContact()
    let formReset: UseFormReturn<createContactInput>['reset'];

    const handleSubmit = (values:createContactInput) => {
        createContact.mutate({data:values}, {
          onSuccess: () => {
            toast.success('Contact message submitted successfully!')
            if (formReset) {
                formReset();
            }
          },
          onError:(error:any)=>{
            const formError = formatErrors(error)
            toast.error(formError)
          }
        })
    }
  return (
    <>
    <Form
      className="border border-grey-15 rounded-lg lg:rounded-[10px] p-5 md:p-10 lg:p-[85px] mt-6 md:mt-12 lg:mt-[68px]"
      schema={contactFormSchema}
      onSubmit={handleSubmit}
      options={{
        defaultValues:{
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            inquiry_type:'',
            message:''
        }
      }}
    >
      {({ register, formState, reset }) => {
        formReset = reset
        return (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-[42.5px]">
              <Input
                type="text"
                label="First Name"
                placeholder="Enter First Name"
                error={formState.errors['first_name']}
                registration={register('first_name')}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Enter Last Name"
                error={formState.errors['last_name']}
                registration={register('last_name')}
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your Email"
                error={formState.errors['email']}
                registration={register('email')}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-6 lg:gap-x-[42.5px]">
              <Input
                type="tel"
                label="Phone"
                placeholder="Enter Phone Number"
                error={formState.errors['phone']}
                registration={register('phone')}
              />
              <Select
                label="Inquiry Type"
                error={formState.errors['inquiry_type']}
                registration={register('inquiry_type')}
                // placeholder="Select Inquiry Type"
                options={inquiryTypes.map((item) => ({
                  label: item.label,
                  value: item.value,
                }))}
              />
            </div>
            <div className="grid grid-cols-1 gap-x-6 lg:gap-x-[42.5px]">
              {/* Row 3 - Message full width */}
              <Textarea
                label="Message"
                rows={5}
                placeholder="Enter your message here..."
                error={formState.errors['message']}
                registration={register('message')}
              />
            </div>
            <div className="text-end">
              <Button 
                type='submit'
                isLoading={createContact.isPending} 
                disabled={createContact.isPending}
                className="bg-light-gold/90 hover:bg-light-gold px-9.5 py-3.5 font-helvetica font-[400] text-[14px] rounded-[8.5px] text-white">
                Send Your Message
              </Button>
            </div>
          </>
      )
      }}
    </Form>
  </>
  )
}
