import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollZoomText({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="text-center mx-auto px-10">
      {children}
    </motion.div>
  );
}
