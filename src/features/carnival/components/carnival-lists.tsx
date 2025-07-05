'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useCarnival } from '../api/get-carnival';
import ScrollZoomImage from '@/components/scroll/use-zoom-image';
import { Spinner } from '@/components/ui/spinner';
// import { renderContent } from '@/components/render-content/render-content';
// import ScrollZoomText from '@/components/scroll/use-scroll-zoomtext';

export default function CarnivalLists() {
  const scrollRef = useRef(null);
  const carnivalQuery = useCarnival();
  const carnival = carnivalQuery?.data?.data;

  if (carnivalQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (carnivalQuery.isError) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="font-helvetica text-[#FFE9D5] font-normal text-[6px] sm:text-sm md:text-lg text-center lg:max-w-[1389px] mb-4">
          Failed to load carnival content
        </p>
      </section>
    );
  }
  if (
    !carnival ||
    carnival?.posts.length === 0 ||
    carnival?.galleries.length === 0
  ) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="font-helvetica text-[#FFE9D5] font-normal text-[6px] sm:text-sm md:text-lg text-center lg:max-w-[1389px] mb-4">
          No content to show
        </p>
      </section>
    );
  }
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      {/* {carnival?.map((item) => (
        <ScrollZoomText key={item.id}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white font-bold font-poppins text-xl sm:text-3xl md:text-4xl lg:text-6xl mb-3 lg:mb-4"
          >
            {item.title}
          </motion.h2>
          <>{renderContent(item.content)}</>
        </ScrollZoomText>
      ))} */}
      {/* --- ALL IMAGES AFTER TEXT CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {carnival?.galleries?.slice(0,4)?.map((img) => (
            <ScrollZoomImage
              key={img.id}
              src={`${process.env.NEXT_PUBLIC_URL}/${img.path}`}
              alt={`${img.label} Images`}
            />
          ))}
        </div>
      </motion.div>
      {/* content */}
    </section>
  );
}
