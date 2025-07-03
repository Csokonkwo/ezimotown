'use client';
import React, { useRef } from 'react';
import EmblaCarousel from '../carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { imgSlides } from '@/constants';
import { motion } from 'motion/react';
import MobileGallery from './mobile-gallery';

const OPTIONS: EmblaOptionsType = { loop: true };
export default function GallerySection() {
  const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black sm:bg-black/40  bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] lg:pl-[135px] pb-24 lg:pr-4"
      style={{ backgroundImage: `url(/assets/images/main-replacement.jpg)` }}
    >
      <div className="flex flex-col lg:flex-row h-full  lg:justify-between items-center">
        {/* <div className='flex-shrink-0'> */}
        <motion.div className="px-6 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-center sm:text-start font-poppins font-semibold text-2xl sm:text-[50px] md:text-6xl mb-3 md:mb-8"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white font-helvetica text-[14px] max-w-[90%] sm:max-w-xs  sm:text-xl font-normal md:max-w-lg"
          >
            Take a moment to glance at the progress of Ezimo Town and witness
            how far we’ve come — from humble beginnings to a thriving community
            rich in culture, unity, and growth
          </motion.p>
        </motion.div>
        <div className="md:mt-12 hidden sm:block">
          <EmblaCarousel slides={imgSlides} options={OPTIONS} />
        </div>
        <div className="mt-13 sm:hidden">
          <MobileGallery />
        </div>
      </div>
    </section>
  );
}
