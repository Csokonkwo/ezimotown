'use client';
import React, { Fragment, useRef } from 'react';
import { motion } from 'motion/react';
import ScrollZoomImage from '@/components/scroll/use-zoom-image';
import { useFootball } from '../api/get-football';
import { renderContent } from '@/components/render-content/render-content';
import { Spinner } from '@/components/ui/spinner';
import ScrollZoomText from '@/components/scroll/use-scroll-zoomtext';
export default function Footballlists() {
  const scrollRef = useRef(null);
  const footballQuery = useFootball();
  const football = footballQuery?.data?.data;

  if (footballQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (footballQuery.isError) {
    return (
      <div className="text-white text-center py-12">
        Failed to load football content
      </div>
    );
  }

  if (!football || football.length === 0) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-auto md:min-h-screen pb-[70px] px-0"
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
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-auto md:min-h-screen pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      {football?.map((item) => (
        <Fragment key={item.id}>
          <ScrollZoomText>
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
        </Fragment>
      ))}
      {/* --- ALL IMAGES AFTER TEXT CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {football?.flatMap((item) =>
            item.images?.map((img) => {
              return (
                <ScrollZoomImage
                  key={img.id}
                  src={`${process.env.NEXT_PUBLIC_URL}/${img.path}`}
                  alt={`${img.label} Images`}
                />
              );
            }),
          )}
        </div>
      </motion.div>
    </section>
  );
}
