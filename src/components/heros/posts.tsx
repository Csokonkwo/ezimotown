'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '../mobile-menu';
import { usePathname } from 'next/navigation';

const PostsHero = () => {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header
        className={`relative bg-cover bg-top  bg-no-repeat md:bg-center  w-full h-[50vh] sm:h-[65vh] md:h-[70vh]`}
      >
        <Image
          src="/assets/images/blog-hero.jpg"
          alt="Post Hero"
          fill
          priority // prevent flashing
          className="object-cover object-top md:object-center z-0"
        />

        {/* Top gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

        {/* Optional texture overlay */}
        <div className="absolute inset-0 z-[2] opacity-20 bg-[url(/assets/images/newspaper-overlay.jpg)] bg-cover bg-repeat" />
        <div className="relative z-[3]">
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
              <motion.ul className="space-y-3 hidden md:flex">
                {navLinks.map((link) => (
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 0.85 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}
                    key={link.id}
                    role="listitem"
                    className=" mx-4 font-normal text-[20px] leading-[100%] tracking-[0%]"
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
          <div className="text-center mt-32 md:mt-24 px-8">
            <motion.h1
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.8 }}
              className="text-white font-poppins font-bold text-xl sm:text-4xl md:text-5xl lg:text-5xl md:mb-2"
            >
              Find all our blogs from here
            </motion.h1>
          </div>
          {/* content */}
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default PostsHero;
