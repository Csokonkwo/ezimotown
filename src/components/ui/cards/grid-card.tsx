// 'use client';
// import { gridItems } from '@/constants';
// import Image from 'next/image';
// import React, { useRef } from 'react';
// import { motion } from 'motion/react';
// import Masonry from "react-masonry-css";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariant = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// // Define breakpoints for masonry columns
// const breakpointColumnsObj = {
//   default: 3, // 3 columns by default
//   1024: 3,    // 3 columns on large screens (lg)
//   768: 2,     // 2 columns on medium screens (md/sm)
//   640: 1      // 1 column on small screens (base/xs)
// };

// export default function GridCard() {
//   const scrollRef = useRef(null);
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//       // className="columns-1 sm:columns-2 lg:columns-3 gap-6 p-6 space-y-6"
//     >
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className='my-masonry-grid flex -ml-6 w-auto'
//         columnClassName='my-masonry-grid_column pl-6'
//       >
//       {/* cards */}
//       {gridItems.map((item, index) => {
//         const isEven = index % 2 === 0;
//         const rowSpan = isEven ? 'row-span-2' : 'row-span-1'
//         return (
//           <motion.div
//             key={index}
//             variants={cardVariant}
//             className={`relative overflow-hidden mb-6 rounded-[50px] transform-gpu group cursor-pointer  `}
//             // style={{
//             //   backgroundImage: `url(${item.image})`,
//             // }}
//           >
//             {/* parallax image */}
//             <motion.div
//               // className="absolute inset-0 z-0"
//               className={`relative w-full`}
//               initial={{ scale: 1.2, y: -20 }}
//               whileInView={{ scale: 1.05, y: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//               viewport={{ root: scrollRef }}
//               style={{height:item.height}}
//             >
//               <Image
//                 key={index}
//                 src={item.image}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//                 //  className='h-full w-full'
//                 className={`transition-transform duration-500 group-hover:scale-105`}
//               />
//             </motion.div>
//             {/* parallax image */}
//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10 px-8 pt-8 lg:pt-[49px] flex flex-col justify-start">
//               <motion.h3
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-white font-bold text-4xl font-poppins mb-2 group-hover:opacity-100"
//               >
//                 {item.title}
//               </motion.h3>
//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className="text-white text-lg font-helvetica font-normal group-hover:opacity-100"
//               >
//                 {item.content}
//               </motion.p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </Masonry>
//       {/* cards */}
//     </motion.div>
//   );
// }

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';

const ClientMasonry = dynamic(() => import('./client-masonry'), { ssr: false });

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function GridCard() {
  return <ClientMasonry />;
}
