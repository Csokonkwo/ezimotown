'use client';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import MobileNav from '../mobile-menu';
import Head from 'next/head';
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
      {/* Preload the background image */}
      <Head>
        <link rel="preload" as="image" href={backgroundUrl} />
      </Head>
      <header
        className={`relative bg-cover bg-top bg-black-15 bg-blend-overlay bg-no-repeat md:bg-center  w-full h-[50vh] sm:h-[65vh] md:h-[100vh]`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 64.71%, rgba(0, 0, 0, 0.9) 82.69%), url(${backgroundUrl})`,
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
              className="text-white font-poppins font-bold text-4xl md:text-7xl lg:text-8xl md:mb-2"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white font-helvetica mx-auto max-w-[179px] sm:max-w-sm md:max-w-[893px] text-[7.21px] sm:text-sm md:text-lg font-normal text-center"
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
                  <h3 className="font-helvetica text-white text-[7.99px] sm:text-sm md:text-3xl font-normal mb-2 lg:mb-3">
                    {section.title}
                  </h3>
                  <p className="font-helvetica  text-white font-normal max-w-[109px] sm:max-w-[270px] md:max-w-[331px] text-[4.5px] sm:text-xs md:text-sm">
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
