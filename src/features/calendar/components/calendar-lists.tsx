'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import {motion} from 'motion/react'

export default function CalendarLists() {
    const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <div className="overflow-hidden px-8">
        <motion.div
         initial={{scale:1, y: 10 }}
         whileInView={{ y: 0 }}
         viewport={{ root: scrollRef }}
         transition={{ delay: 0.5,duration:0.8 }}
         className="w-full overflow-hidden pb-20">
          <motion.h5 className="-mb-4 text-lg text-center font-normal text-white capitalize leading-[30px] overflow-hidden">
            Event calender
          </motion.h5>
          <motion.div className="opacity-20 w-[144px] h-[15px] mx-auto bg-gold overflow-hidden"></motion.div>
          <motion.h2 className="lg:text-[50px] text-center font-poppins mt-2  text-4xl font-medium overflow-hidden lg:leading-[62px] text-white w-full">
            10 days of fun filled activities
          </motion.h2>
        </motion.div>

        {/* calendar schedule */}
        <motion.div className="max-w-7xl mx-auto mt-10">
          <div className="flex flex-col">
            {/* children */}
            <div className="flex gap-6 items-center">
              {/* colored rectangle */}
              <motion.div
                initial={{scale:1, y: 10 }}
                whileInView={{ y: 0 }}
                whileHover={{scale:1.02}}
                viewport={{ root: scrollRef }}
                transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-gold w-[10%] flex flex-col items-center justify-center pt-14 md:gap-[72px] gap-20 h-[300px]">
                <motion.p className="text-white font-helvetica font-medium text-xl capitalize">
                  start day
                </motion.p>
              </motion.div>
              {/* colored rectangle */}
              {/* Caldendar Card */}
              <div className="shadow rounded-md gap-10 px-4 lg:px-[55px]  overflow-y-hidden  bg-black-15  w-full">
                {/* Calendar items */}
                <div className="flex flex-col md:flex-row py-14 border-b  border-white last:border-0 transition-all duration-300">
                  {/* caldendar img */}
                  <div className="p-8 md:border-r md:border-b-0 border-b border-white">
                    <div className="flex gap-3">
                      <h5 className="text-gold text-lg font-semibold font-poppins">
                        30
                      </h5>
                      <div>
                        <h5 className="text-white text-lg font-semibold font-poppins">
                          November
                        </h5>
                        <p className="text-white/70 text-xs font-semibold font-poppins">
                          Saturday
                        </p>
                      </div>
                    </div>
                    <motion.div
                     initial={{scale:1, y: 10 }}
                     whileInView={{ y: 0 }}
                     whileHover={{x: 10}}
                     viewport={{ root: scrollRef }}
                     transition={{ delay: 0.5,duration:0.8 }}
                    >
                      <Image
                        src="/assets/logo/ezimo_logo.png"
                        alt="Logo icon"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </div>
                  {/* caldendar img */}
                  {/* calendar content */}
                  <motion.div 
                   initial={{scale:1, y: 10 }}
                   whileInView={{ y: 0 }}
                   whileHover={{x: 10}}
                   transition={{ delay: 0.5,duration:0.8 }}
                  className="lg:ml-8 pt-8 lg:pt-0">
                    <p className="text-xs text-white mb-4 capitalize">
                      Flag Off-Ezimo Municipality, Enugu
                    </p>
                    <h6 className="font-medium text-lg text-white mb-4 font-poppins capitalize">
                      Chrismas Tree Lighting, Carnival Ezimo & Festival
                      Lottery Raffle/Draws
                    </h6>
                    <p className="text-xs text-white mb-4 capitalize">
                      Announcing The Season Of Christmas In Enugu State 
                      Major Cities - Ezimo
                    </p>
                    <p className="text-xs text-white mb-4 capitalize">
                      This Night Births Flickers And Illumination In These Cities, For A
                      Sleepless And Bustling 32 Days.
                    </p>
                    <p className="text-xs text-white capitalize">
                      Tree Lighting Raffle Draws: -Ezimo Prize 20k
                    </p>
                  </motion.div>
                  {/* calendar content */}
                </div>
                {/* Calendar items */}
              </div>
              {/* Caldendar Card */}
            </div>
            {/* children */}
          </div>
        </motion.div>
        {/* calendar schedule */}
      </div>
    </section>
  );
}
