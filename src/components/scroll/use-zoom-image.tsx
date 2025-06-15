'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

export default function ScrollZoomImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 0.8]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="w-full h-full cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={606}
        height={703}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
