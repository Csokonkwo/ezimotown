'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { iyiNzuImages } from '@/constants';
import ScrollZoomImage from '../scroll/use-zoom-image';

export default function AboutIyiNzu() {
  const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4">
          About The Iyi-Nzu Waterfall
        </h2>
        <p className="font-helvetica text-[#FFE9D5] max-w-xs sm:max-w-md md:max-w-2xl mx-auto lg:max-w-[914px] font-normal text-[6px] sm:text-sm md:text-lg text-center">
          Long before roads carved paths into Ezimo and long before maps etched
          its name onto paper, the Iyi-Nzu Waterfall roared and whispered
          through the centuries — an eternal force of nature, revered and
          protected by generations past. Tucked deep within the untouched groves
          of the ancestral forest, this golden stream was not just water — it
          was spirit. It was said to descend from the gods, cascading over
          ancient stones worn smooth by time and prayer. Legends passed down
          through the moonlit fires speak of elders and dibias (healers) who
          would journey through dense foliage, guided by dreams and omens, to
          stand at its base. There, they performed sacred rites, cleansed
          burdens, and sought visions. The Iyi-Nzu was believed to heal not only
          the body, but the soul — a sanctuary where nature met divinity, and
          where silence held more wisdom than words.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5 }}
        className="mt-12 lg:mt-[93px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-0 w-full m-0 p-0">
          {iyiNzuImages.map((item) => (
            <div key={item.id} className="w-full h-full cursor-pointer m-0 p-0">
              {/* <Image
                src={item.image}
                width={606}
                height={703}
                alt="Iyi-nzu Image"
                className="object-cover block w-full h-full"
              /> */}
              <ScrollZoomImage
                key={item.id}
                src={item.image}
                alt="Iyi-nzu Image"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
