'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useHistory } from '../api/get-history';
import { Spinner } from '@/components/ui/spinner';
import ScrollZoomImage from '@/components/scroll/use-zoom-image';
import HistorySection from './history-section';

export default function HistoryLists() {
  const scrollRef = useRef(null);
  const historyQuery = useHistory();
  const history = historyQuery?.data?.data;
  console.log(history);

  if (historyQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (historyQuery.isError) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="text-white text-center py-12">
          Failed to load history content
        </p>
      </section>
    );
  }

  if (
    !history ||
    history.posts.length === 0 ||
    history.galleries.length === 0
  ) {
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
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-auto md:min-h-screen pb-[70px]"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-white font-bold font-poppins text-xl sm:text-4xl lg:text-6xl mb-3 lg:mb-4">
          The History of Ezimo Town
        </h2>
        <p className="font-helvetica text-white max-w-[80%] sm:max-w-md md:max-w-2xl mx-auto lg:max-w-[914px] font-normal text-[14px] sm:text-sm lg:text-lg text-center">
          {`We are pleased to grace you with the beautiful history of our town and
          to show you how far the people of Ezimo town have developed and
          fostered family and love`}
        </p>
      </motion.div>

      <HistorySection
        imageSrc="/assets/images/history-carousel1.jpg"
        imagePosition="left"
        paragraphs={[
          `Tucked within the rolling hills of Enugu State, Ezimo Town is more than just a dot on the map...`,
          `Originally known as Ezi-Oma, which translates to "The Path of Goodness", the name evolved...`,
        ]}
        title="Brief History:"
      />

      <HistorySection
        imageSrc="/assets/images/history-carousel2.jpg"
        imagePosition="right"
        paragraphs={[
          `Ezimo, now divided into Ezimo Uno and Ezimo Agu, has long stood as a beacon...`,
          `It is said that the Ofia Ezimo (Ezimo forest) once echoed with the rhythmic chants...`,
          `The town of Ezimo played a quiet but undeniably powerful role during the pre-independence era...`,
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {history.galleries?.map((img) => (
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
