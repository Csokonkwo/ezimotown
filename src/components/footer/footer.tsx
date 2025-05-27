'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { footerLinks } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-cover relative overflow-hidden bg-black-8 bg-blend-overlay bg-no-repeat bg-center w-full h-[424px]"
      style={{ backgroundImage: `url(/assets/images/gold-background-2.png)` }}
    >
      {/* footer-container */}
      <div className="flex flex-row items-center justify-between w-full h-full lg:px-[75px]">
        {/* logo */}
        <Link href='/' className="flex-shrink-0 relative size-[70px] md:size-56">
          <Image
            aria-hidden
            src="/assets/logo/ezimo_logo.png"
            alt="Logo icon"
            // width={227}
            // height={227}
            fill
            className="object-contain"
          />
        </Link>
        {/* logo */}
        {/* links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-10 aos-fade-up">
          {footerLinks.map((link) => (
            <motion.div
              transition={{ ease: 'easeInOut', duration: 0.75 }}
              key={link.id}
            >
              <h3 className="text-white font-poppins font-semibold text-[20px] leading-[130%] -tracking-[0.03] mb-8">
                {link.title}
              </h3>
              <motion.ul className="space-y-3">
                {link.children.map((child) => (
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 0.85 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}
                    key={child.id}
                    role="listitem"
                    className="text-white font-poppins font-normal text-[18px] leading-[130%] -tracking-[0.03]"
                  >
                    <Link href={child.url} className="hover:text-white/70">
                      {child.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
        {/* links */}
        {/* copyrights */}
        {/* <p className='text-white text-center font-normal text-[18px] -tracking-[0.03em]'>&copy; {new Date().getFullYear()} Ezimo Town. All rights reserved.</p> */}
        {/* copyrights */}
      </div>
      {/* footer-container */}
    </footer>
  );
}
