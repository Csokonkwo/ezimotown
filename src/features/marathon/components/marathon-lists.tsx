'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import ScrollZoomImage from '@/components/scroll/use-zoom-image';
import { useMarathon } from '../api/get-marathon';
import { Spinner } from '@/components/ui/spinner';
// import ScrollZoomText from '@/components/scroll/use-scroll-zoomtext';
// import { renderContent } from '@/components/render-content/render-content';

export default function MarathonLists() {
  const scrollRef = useRef(null);
  const marathonQuery = useMarathon();
  const marathon = marathonQuery?.data?.data;

  if (marathonQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (marathonQuery.isError) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="text-white text-center py-12">
          Failed to load marathon content
        </p>
      </section>
    );
  }

  if (
    !marathon ||
    marathon?.posts.length === 0 ||
    marathon?.galleries?.length === 0
  ) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] md:min-h-screen pb-[70px] px-0 overflow-hidden"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="font-helvetica text-white font-normal text-[6px] sm:text-sm md:text-lg text-center lg:max-w-[1389px] mb-4">
          No content to show
        </p>
      </section>
    );
  }
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90  bg-cover bg-top pt-12 md:pt-[67px] min-h-auto md:min-h-screen pb-[70px] px-0 overflow-hidden"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      {/* {marathon?.map((item) => (
        <ScrollZoomText key={item.id}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.5 }}
            className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4"
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
          {marathon?.galleries?.map((img) => (
            <ScrollZoomImage
              key={img.id}
              src={`${process.env.NEXT_PUBLIC_URL}/${img.path}`}
              alt={`${img.label} Images`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
