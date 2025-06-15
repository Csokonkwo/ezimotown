import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    x: '-100%',
    transition: { type: 'tween', duration: 0.5 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 160 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};
export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const scrollRef = useRef(null);
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`w-full h-full fixed left-0 top-0  z-40 overflow-y-auto p-4 bg-black text-white`}
        >
          {/* close button */}
          <div className="flex">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-black-8 hover:text-white cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          {/* close button */}

          {/* navlinks */}
          <motion.ul
            className="space-y-10 mt-24 text-center"
            ref={scrollRef}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={linkVariants}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
