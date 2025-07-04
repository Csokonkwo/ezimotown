'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { footerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      id="footer"
      className="bg-cover relative  overflow-hidden bg-black-8 bg-blend-overlay bg-no-repeat bg-center w-full h-[424px]"
      style={{ backgroundImage: `url(/assets/images/gold-background-2.png)` }}
    >
      {/* footer-container */}
      <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between w-full h-full px-8 lg:px-[75px] overflow-hidden">
        {/* logo */}
        <Link
          href="/"
          className="flex-shrink-0 relative size-[70px] md:size-56"
        >
          <Image
            aria-hidden
            src="/assets/logo/ezimo_logo.png"
            alt="Logo icon"
            width={227}
            height={227}
            className="object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        {/* logo */}
        <div className="flex flex-col">
          {/* links */}
          <div className="grid grid-cols-3 gap-5 sm:grid-cols-3 md:gap-10">
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
                      key={child.id}
                      role="listitem"
                      className="font-poppins font-normal text-[11px] sm:text-[18px] leading-[130%] -tracking-[0.03]"
                    >
                      <Link
                        href={child.url}
                        className={`hover:text-white/70 ${pathname === child.url ? 'text-gold' : 'text-white'}`}
                      >
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
          <div className="mt-16 lg:mt-24 flex w-full justify-start md:justify-end">
            <p className="text-white mx-auto sm:mx-0 font-normal text-[11px] md:text-[18px] -tracking-[0.03em]">
              &copy; {new Date().getFullYear()} Ezimo Town. All rights reserved
              |{' '}
              <Link
                className="hover:text-gold text-sm transition-colors ease-out"
                href="https://zeltechnologies.com/"
                target="_blank"
              >
                Developed by Zeltechnologies
              </Link>
            </p>
          </div>
          {/* copyrights */}
        </div>
      </div>
      {/* footer-container */}
    </footer>
  );
}
