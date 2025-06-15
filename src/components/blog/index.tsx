'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

export default function EzimoBlog() {
  const scrollRef = useRef(null);
  const toRef = useRef(null);
  const inView = useInView(toRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/95 bg-cover bg-top pt-12 md:pt-[140px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div />
      <div
        className="w-full h-[300px] flex flex-col justify-end lg:min-h-[70vh] bg-gradient bg-center bg-cover relative "
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.880208) 75.52%, #141414 100%), url(/assets/images/local-government.jpg)`,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5 }}
          className=" text-white mx-auto text-center  font-bold font-poppins text-xl sm:text-4xl lg:text-6xl mb-3 lg:mb-8"
        >
          More Boreholes are being Built in Ezimo
        </motion.h2>
      </div>

      {/* <BlogContentSection /> */}
    </section>
  );
}
