'use client';

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gridItems } from '@/constants';

export const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ClientMasonry() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.3 }}
      className="md:p-6"
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 245: 1, 345: 2, 768: 2, 1024: 3 }}
      >
        <Masonry gutter="18px">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-4xl md:rounded-[50px] group cursor-pointer ${index === gridItems.length - 2 ? 'grayscale' : ''}`}
            >
              {/* image container */}
              <div
                className="relative w-full h-auto"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  height={382}
                  width={476}
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10 px-4 sm:px-8.5 pt-7 md:pt-12.5 flex flex-col justify-start">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-white text-[14px] lg:text-xl max-w-[188px] lg:max-w-[288px]"
                >
                  {item.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
}
