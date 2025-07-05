'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

type HistorySectionProps = {
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  paragraphs: string[];
  title?: string;
};

export default function HistorySection({
  imageSrc,
  imagePosition = 'right',
  paragraphs,
  title,
}: HistorySectionProps) {
  const isImageLeft = imagePosition === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-12 lg:mt-[93px] md:px-[80px] lg:px-[102px]"
    >
      <div
        className={`flex flex-col ${
          isImageLeft ? 'lg:flex-row' : 'flex-col-reverse lg:flex-row'
        } items-center gap-12`}
      >
        {isImageLeft && (
          <div className="flex-1 basis-0 w-full cursor-pointer group">
            <Image
              src={imageSrc}
              width={606}
              height={703}
              alt="History Image"
              className="md:rounded-[7px] mx-auto object-cover grayscale duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="px-8 flex-1 basis-0 w-full"
        >
          {title && (
            <p className="text-[#FFE9D5] text-sm lg:text-lg font-helvetica mb-4 leading-6">
              {title}
            </p>
          )}
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className="text-[#FFE9D5] font-helvetica font-normal text-sm lg:text-lg mb-6"
            >
              {text}
            </p>
          ))}
        </motion.div>

        {!isImageLeft && (
          <div className="flex-1 basis-0 w-full cursor-pointer group">
            <Image
              src={imageSrc}
              width={606}
              height={703}
              alt="History Image"
              className="md:rounded-[7px] mx-auto object-cover duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
