'use client';
import React, { useRef } from 'react';
import { Form, Input, Select } from '../ui/form';
import { contactFormScheme } from '@/features/auth/api/contact';
import { Textarea } from '../ui/form/textarea';
import { inquiryTypes } from '@/constants';
import { Button } from '../ui/buttons';
import { motion } from 'motion/react';

export default function ContactForm() {
  const scrollRef = useRef(null);

  return (
    <section className="w-full relative max-w-[1920px] mx-auto  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto md:min-h-screen  px-6  lg:px-20 overflow-hidden">
      <motion.div
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-white mb-3 font-semibold text-xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl">
          Let's Connect
        </h2>
        <p className="font-helvetica font-[400] max-w-3xl text-[14px] text-[#999999] sm:text-base lg:text-sm">
          {`We're excited to connect with you and learn more about your experience
          on our platform. Use the form below to get in touch with us. We're
          here to answer your questions and provide the assistance you need.`}
        </p>
      </motion.div>
      <>
        <Form
          className="border border-grey-15 rounded-lg lg:rounded-[10px] p-5 md:p-10 lg:p-[85px] mt-6 md:mt-12 lg:mt-[68px]"
          onSubmit={() => console.log('hi')}
          schema={contactFormScheme}
        >
          {({ register, formState }) => (
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
                  error={formState.errors['enquiry']}
                  registration={register('enquiry')}
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
                <Button className="bg-light-gold/90 hover:bg-light-gold px-9.5 py-3.5 font-helvetica font-[400] text-[14px] rounded-[8.5px] text-white">
                  Send Your Message
                </Button>
              </div>
            </>
          )}
        </Form>
      </>
    </section>
  );
}
