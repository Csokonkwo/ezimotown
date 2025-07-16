'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import CreateContactForm from '@/features/contact-form/components/create-contact-form';

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
     <CreateContactForm/>
    </section>
  );
}
