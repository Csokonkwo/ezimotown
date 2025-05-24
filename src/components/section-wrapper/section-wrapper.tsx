import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer } from '@/utils/motion';
export default function SectionWrapper(
  Component: React.ComponentType,
  idName: string,
) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(1, 30)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-8xl mx-auto relative z-0`}
      >
        <span className="hash-span">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };
}
