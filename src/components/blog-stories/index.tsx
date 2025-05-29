'use client';
import React, { useRef } from 'react';
import { Button } from '../ui/buttons';
import Image from 'next/image';
import ArrowIcon from '../svgs/arrow-icon';
import { blogs } from '@/constants';
import { motion } from 'motion/react';
import { cardVariant } from '../ui/cards/client-masonry';

export default function BlogStories() {
  const scrollRef = useRef(null);
  return (
    <section className="w-full relative  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto lg:min-h-[100vh] px-4  lg:px-20">
      <div className="flex justify-between items-center pb-8 md:pb-16">
        <div>
          <motion.h6 className="text-gray-80 text-[12px] sm:text-xl md:text-2xl font-normal">
            Latest news from Our Blog Stories
          </motion.h6>
        </div>
        <div>
          <Button
            icon={<ArrowIcon />}
            className="font-helvetica  text-[10px] sm:text-[12px]  md:text-lg text-gray-60 rounded-[10.2px]"
          >
            See More
          </Button>
        </div>
      </div>

      {/* blog story card */}
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6 items-center justify-center mx-auto">
        {blogs.map((blog) => (
          //   <div key={blog.id} className='flex items-center sm:items-start flex-row md:flex-col gap-[6px] relative'>
          <motion.div
            key={blog.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ root: scrollRef }}
            className="group cursor-pointer"
          >
            <Image
              src={blog.image}
              alt={blog.categories}
              width={434}
              height={188}
              className="rounded-[10.2px] mb-4 max-h-[100px]  md:max-h-[188px] object-cover w-[434px] h-[188px] transition-transform duration-500 group-hover:scale-105"
            />

            <motion.p className="font-normal text-[12px] underline sm:no-underline sm:text-base text-white mb-2">
              {blog.content}
            </motion.p>
            <motion.h6 className="text-[#98989A] mb-4 hidden md:block">
              {blog.categories}
            </motion.h6>
            <Button
              icon={<ArrowIcon />}
              className="bg-black-8 hidden md:flex rounded-[10.2px] text-gray-60 text-lg font-normal w-full"
            >
              Read More
            </Button>
          </motion.div>
        ))}
      </div>
      {/* blog story card */}
    </section>
  );
}
