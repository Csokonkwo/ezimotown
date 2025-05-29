'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import useNavbarScroll from '@/hooks/use-navbar-scroll';
import MobileNav from '../mobile-menu';

const MarathonHero = () => {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useNavbarScroll();
  return (
    <>
      <header
        className={`relative bg-cover bg-black-15 bg-top bg-blend-overlay bg-[url(/assets/images/marathon-hero.jpg)] bg-linear(180deg,rgba(0_0_0_0)_64.71%,rgba(0_0_0_0.5)_82.69%) bg-no-repeat md:bg-center  w-full h-[50vh] sm:h-[65vh] md:h-[100vh]`}
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
                loading="lazy"
                width={1512}
                height={982}
                className="object-contain"
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
                    onHoverStart={() => console.log('hover started!')}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.8 }}
              className="text-white font-poppins font-bold text-4xl md:text-7xl lg:text-8xl md:mb-2"
            >
              Marathon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white font-helvetica mx-auto max-w-[179px] sm:max-w-sm md:max-w-[893px] text-[7.21px] sm:text-sm md:text-lg font-normal text-center"
            >
              The Ezimo Cultural Carnival is an explosion of tradition, where
              music, dance, and ancestral pride fill the streets in a dazzling
              display of Igbo culture.
            </motion.p>
          </div>
          {/* content */}
          {/* cultural */}
          <div
            className="flex justify-between w-full mt-10 lg:mt-24 px-8 lg:px-[94px]"
            ref={scrollRef}
            style={{ overflow: 'scroll' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-helvetica text-white text-[7.99px] sm:text-sm md:text-3xl font-normal mb-2 lg:mb-3">
                A Celebration of Heritage
              </h3>
              <p className="font-helvetica text-center text-white font-normal max-w-[109px] sm:max-w-[270px] md:max-w-[331px] text-[4.5px] sm:text-xs md:text-sm">
                From masquerades to folklore reenactments, the carnival immerses
                visitors in Ezimo’s vibrant spirit — a journey through the
                sights, sounds, and soul of our people.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ delay: 0.5 }}
              data-aos="fade-left"
            >
              <h3 className="font-helvetica text-white text-[7.99px] sm:text-sm md:text-3xl font-normal mb-2 lg:mb-3">
                Where Culture Comes Alive
              </h3>
              <p className="font-helvetica text-center text-white font-normal max-w-[109px] sm:max-w-[270px] md:max-w-[331px] text-[4.5px] sm:text-xs md:text-sm">
                Held annually with pride, this festive gathering unites
                generations, showcasing Ezimo’s rich customs, native attire, and
                timeless unity in one unforgettable celebration.
              </p>
            </motion.div>
          </div>
          {/* cultural */}
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MarathonHero;
