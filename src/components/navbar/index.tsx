'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '../mobile-menu';
import PageLoader from '../ui/spinner/page-loader';

export default function Navbar() {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PageLoader />
      <header
        className={`relative bg-cover bg-black-15 bg-top bg-blend-overlay my-gradient-bg bg-no-repeat md:bg-center  w-full h-[60vh] sm:h-[75vh] md:h-screen overflow-x-hidden`}
        style={{backgroundImage:`url(/assets/images/home-hero.jpg)`}}
      >
        <div className="relative z-[2] overflow-hidden">
          <nav
            className={`flex items-center bg-black md:bg-transparent justify-between px-6 lg:pl-[72px] lg:pr-[81px] py-10 h-[61px] md:pb-24 md:pt-16  w-full`}
          >
            {/* logo */}
            <Link
              href={'/'}
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
              <motion.ul className="space-y-3  text-white hidden md:flex">
                {navLinks.map((link) => (
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 0.85 }}
                    whileTap={{ scale: 0.95 }}
                    key={link.id}
                    role="listitem"
                    className="text-white mx-4 font-normal text-[20px] leading-[100%] tracking-[0%]"
                  >
                    <Link
                      href={link.url}
                      className="hover:text-white/70 transition-colors"
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
                  className="object-contain w-auto h-auto mr-6 md:hidden cursor-pointer"
                />
              </button>
              {/* hamburger */}
            </motion.div>
            {/* links */}
          </nav>
          {/* <MobileNav/> */}
          {/* header-subcontainer */}

          {/* content */}
          <div className="text-center mt-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white font-poppins font-bold text-4xl md:text-7xl lg:text-8xl md:mb-2"
            >
              Explore <br /> Ezimo Town
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white font-helvetica mx-auto max-w-[179px] sm:max-w-sm md:max-w-[496px] text-[7.21px] sm:text-sm md:text-lg font-normal text-center"
            >
              Deje! Ezimo Town is a treasure trove of heritage and history, proudly home to the breathtaking Iyi-Nzu Waterfall, a natural wonder that adds to the town’s rich cultural legacy.
            </motion.p>
          </div>
          {/* content */}
          {/* cultural */}
          <div
            className="flex justify-between w-full mt-10 lg:mt-24 px-6 md:px-8 lg:px-[94px]"
            ref={scrollRef}
            style={{ overflow: 'scroll' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="font-helvetica text-white text-[10px] sm:text-sm md:text-3xl font-normal mb-2 lg:mb-3">
                Cultural and Historical Insights
              </h3>
              <p className="font-helvetica text-white font-normal max-w-[150px] sm:max-w-[270px] md:max-w-[500px] text-[7.99px] sm:text-xs md:text-sm">
              Ezimo Town is deeply rooted in its ancestral traditions, with the installation of sacred symbols and monuments reflecting the community’s unwavering commitment to preserving its rich cultural heritage. From the revered Iyi-Nzu Waterfall to the time-honored carnivals, Ezimo continues to honor its past while embracing progress for the future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="font-helvetica text-white text-[10px] sm:text-sm md:text-3xl font-normal mb-2 lg:mb-3">
                Community and Lifestyle
              </h3>
              <p className="font-helvetica text-white font-normal max-w-[150px] sm:max-w-[270px] md:max-w-[500px] text-[7.99px] sm:text-xs md:text-sm">
              Ezimo is a town where peace and unity thrive, nestled in a close-knit community that values togetherness and mutual support. Known for its warm hospitality, the people of Ezimo share a deep sense of pride in their heritage and identity. Whether through communal gatherings or shared traditions, the spirit of cooperation is at the heart of daily life, fostering a sense of belonging and harmony among all who call this vibrant town home.
              </p>
            </motion.div>
          </div>
          {/* cultural */}
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
