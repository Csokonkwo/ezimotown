'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import {
  carnivalContent,
  carnivalContent2,
  carnivalImages1,
  carnivalImages2,
} from '@/constants';
import ScrollZoomImage from '../scroll/use-zoom-image';
import ScrollZoomText from '../scroll/use-scroll-zoomtext';

export default function EzimoCarnival() {
  const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <ScrollZoomText>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5 }}
          className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4"
        >
          Ezimo Cultural Carnival
        </motion.h2>
        {carnivalContent.map((item) => (
          <p
            key={item.id}
            className="font-helvetica text-[#FFE9D5] font-normal text-[6px] sm:text-sm md:text-lg text-start  lg:max-w-[1389px] mb-4"
          >
            {item.content}
          </p>
        ))}
      </ScrollZoomText>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {carnivalImages1.map((item) => (
            <ScrollZoomImage
              key={item.id}
              src={item.image}
              alt="Football Images"
            />
          ))}
        </div>
      </motion.div>
      {/* content */}
      <ScrollZoomText className="lg:min-h-[50vh] flex-col my-12.5 lg:my-[100px] text-center mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5 }}
          className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4"
        >
          The Festival of a Lifetime
        </motion.h2>
        {carnivalContent2.map((item) => (
          <p
            key={item.id}
            className="font-helvetica text-[#FFE9D5] font-normal text-[6px] sm:text-sm md:text-lg text-start  lg:max-w-[1389px] mb-4"
          >
            {item.content}
          </p>
        ))}
      </ScrollZoomText>
      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {carnivalImages2.map((item) => (
            <ScrollZoomImage
              key={item.id}
              src={item.image}
              alt="Football Images"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
