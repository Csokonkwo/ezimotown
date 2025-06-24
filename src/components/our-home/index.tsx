'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import GridCard from '../ui/cards/grid-card';

export default function OurHome() {
  const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-auto lg:min-h-screen"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4">
          Welcome to our Home
        </h2>
        <p className="font-helvetica text-white max-w-xs sm:max-w-md mx-auto lg:max-w-[658px] font-normal text-[6px] sm:text-sm md:text-lg lg:text-xl text-center">
          Explore the enchanting culture and lifestyle of Ezimo Town, see what
          we have to offer and what the proud people from our town are ecsatic
          to offer
        </p>
      </motion.div>
      <motion.div>
        <div className="pt-6 sm:pt-12.5 md:pt-[103px] pb-[169px] px-4 md:px-8">
          <GridCard />
        </div>
      </motion.div>
    </section>
  );
}
