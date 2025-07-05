import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ScrollZoomText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`${className ?? 'text-center mx-auto px-4 md:px-10 will-change-transform'}`}
    >
      {children}
    </motion.div>
  );
}
