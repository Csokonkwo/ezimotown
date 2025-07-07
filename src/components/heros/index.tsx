'use client';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import MobileNav from '../mobile-menu';
import Head from 'next/head';
import PageLoader from '../ui/spinner/page-loader';
type HeroProps = {
  title: string;
  description: string;
  bgImage: string;
  subSections?: {
    title: string;
    para: string;
  }[];
};

export default function HeroSection({
  title,
  description,
  bgImage,
  subSections = [],
}: HeroProps) {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const backgroundUrl = `/assets/images/${bgImage}`;
  return (
    <>
      <PageLoader />
      {/* Preload the background image */}
      <Head>
        <link rel="preload" as="image" href={backgroundUrl} />
      </Head>
      <header
        className={`relative bg-cover bg-top my-gradient-bg bg-black-15 bg-blend-overlay bg-no-repeat md:bg-center  w-full h-[60vh] sm:h-[75vh] md:h-[100vh] overflow-hidden`}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="relative z-[2]">
          <nav
            className={`flex items-center bg-black md:bg-transparent justify-between lg:pl-[72px] lg:pr-[81px] py-10 h-[61px] md:pb-[105px] md:pt-[105px]  w-full`}
          >
            {/* logo */}
            <Link
              href="/"
              className="flex-shrink-0 relative size-[70px] md:size-56"
            >
              <Image
                src="/assets/logo/ezimo_logo.png"
                alt="Logo icon"
                width={1512}
                height={982}
                className="object-contain"
                priority
              />
            </Link>
            {/* logo */}
            {/* links */}
            <motion.div className="">
              <motion.ul className="space-y-3  hidden md:flex">
                {navLinks.map((link) => (
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 0.85 }}
                    whileTap={{ scale: 0.95 }}
                    key={link.id}
                    role="listitem"
                    className={`mx-4 font-normal text-[20px] leading-[100%] tracking-[0%] ${pathname === link.url ? 'text-gold' : 'text-white'}`}
                  >
                    <Link
                      href={link.url}
                      className={`hover:text-white/70 transition-colors ${pathname === link.url ? 'text-gold' : 'text-white'}`}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <Image
                  aria-hidden
                  src="/assets/svgs/hamburger.svg"
                  alt="hamburger icon"
                  width={16}
                  height={13}
                  className="object-contain mr-6 md:hidden cursor-pointer"
                />
              </button>
              {/* hamburger */}
            </motion.div>
            {/* links */}
          </nav>
          {/* <MobileNav/> */}
          {/* header-subcontainer */}

          {/* content */}
          <div className="text-center mt-6 md:mt-12">
            <motion.h1
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.8 }}
              className="text-white font-poppins mb-2 font-bold text-4xl md:text-6xl lg:text-8xl md:mb-2"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white font-helvetica mx-auto max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-[893px] text-[7.21px] sm:text-sm lg:text-lg font-normal text-center"
            >
              {description}
            </motion.p>
          </div>
          {/* content */}
          {/*subsection start */}
          {subSections.length > 0 && (
            <div
              className="flex justify-between w-full mt-10 lg:mt-24 px-8 lg:px-[94px]"
              ref={scrollRef}
              style={{ overflow: 'scroll' }}
            >
              {subSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ root: scrollRef }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h3 className="font-helvetica text-white text-[12px] sm:text-sm md:text-xl lg:text-3xl font-normal mb-2 lg:mb-3">
                    {section.title}
                  </h3>
                  <p className="font-helvetica  text-white font-normal max-w-[150px] sm:max-w-[270px] md:max-w-[331px] text-[8.99px] sm:text-xs lg:text-sm">
                    {section.para}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
          {/* subsection end */}
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

// 'use client';

// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react';
// import { motion } from 'motion/react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { navLinks } from '@/constants';
// import MobileNav from '../mobile-menu';
// import PageLoader from '../ui/spinner/page-loader';

// type HeroProps = {
//   title: string;
//   description: string;
//   bgImage: string;
//   subSections?: {
//     title: string;
//     para: string;
//   }[];
// };

// export default function HeroSection({
//   title,
//   description,
//   bgImage,
//   subSections = [],
// }: HeroProps) {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [loaded, setLoaded] = useState(false);
//   const backgroundUrl = `/assets/images/${bgImage}`;

//   return (
//     <>
//     <PageLoader/>
//     <header className="relative w-full min-h-auto sm:h-[65vh] md:h-screen overflow-hidden">
//       {/* Background Image Layer */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <Image
//           src={backgroundUrl}
//           alt="Hero background"
//           fill
//           priority
//           onLoadingComplete={() => setLoaded(true)}
//           className={`object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90" />
//       </div>

//       {/* LOADING fallback */}
//       {!loaded && (
//         <div className="absolute inset-0 z-20 flex items-center justify-center bg-black text-white text-sm">
//           Loading hero...
//         </div>
//       )}

//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-6 lg:px-20 py-6 z-30 relative">
//         {/* Logo */}
//         <Link href="/" className="relative w-14 h-14 md:w-24 md:h-24 z-30">
//           <Image
//             src="/assets/logo/ezimo_logo.png"
//             alt="Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <li key={link.id}>
//               <Link
//                 href={link.url}
//                 className={`text-white font-medium hover:text-white/70 transition ${
//                   pathname === link.url ? 'text-gold' : ''
//                 }`}
//               >
//                 {link.title}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-30">
//           <Image
//             src="/assets/svgs/hamburger.svg"
//             alt="Menu"
//             width={16}
//             height={13}
//             className="object-contain"
//           />
//         </button>
//       </nav>

//       {/* CONTENT */}
//       <div className="relative z-30 text-white text-center flex flex-col items-center justify-center px-4 pt-16 h-full">
//         <motion.h1
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
//         >
//           {title}
//         </motion.h1>

//         <motion.p
//           initial={{ y: 10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="max-w-3xl text-xs sm:text-base lg:text-lg font-normal text-white/90"
//         >
//           {description}
//         </motion.p>
//       </div>

//       {/* SUBSECTIONS */}
//       {subSections.length > 0 && (
//         <div className="relative z-30 flex flex-wrap justify-center gap-6 px-6 lg:px-20 mt-10">
//           {subSections.map((section, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="max-w-sm"
//             >
//               <h3 className="text-white text-lg lg:text-2xl font-semibold mb-2">
//                 {section.title}
//               </h3>
//               <p className="text-white text-sm lg:text-base opacity-80">{section.para}</p>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* MOBILE NAV */}
//       <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
//     </header>
//     </>
//   );
// }
