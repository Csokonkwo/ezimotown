'use client';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { motion } from 'motion/react';
type TimeUnit = {
  label: string;
  value: number;
};
export default function CountdownTimer() {
  const [eventDate] = useState<Date | null>(new Date('2026-01-25T00:00:00'));
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    {
      label: 'DAYS',
      value: 0,
    },
    {
      label: 'HOURS',
      value: 0,
    },
    {
      label: 'MINUTES',
      value: 0,
    },
    {
      label: 'SECONDS',
      value: 0,
    },
  ]);

  useEffect(() => {
    if (!eventDate) return;

    const updateTimer = () => {
      const now = new Date();
      const difference = +eventDate - +now;

      if (difference <= 0) {
        setIsCelebrating(true);
        setTimeLeft([
          { label: 'DAYS', value: 0 },
          { label: 'HOURS', value: 0 },
          { label: 'MINUTES', value: 0 },
          { label: 'SECONDS', value: 0 },
        ]);
        return;
      }

      setTimeLeft([
        {
          label: 'DAYS',
          value: Math.floor(difference / (1000 * 60 * 60 * 24)),
        },
        {
          label: 'HOURS',
          value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        },
        {
          label: 'MINUTES',
          value: Math.floor((difference / (1000 / 60)) % 60),
        },
        { label: 'SECONDS', value: Math.floor((difference / 1000) % 60) },
      ]);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);
  const { width, height } = useWindowSize();
  return (
    <div
      className="relative w-full max-h-[704px] min-h-auto sm:h-screen overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, #CE9904 0%, #B28503 31.73%, #000000 100%)`,
      }}
    >
      {isCelebrating ? <Confetti width={width} height={height} /> : null}
      <motion.h1 className="text-white text-center font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-[64px] lg:leading-[116px] font-semibold">
        {isCelebrating ? 'Emume Alaa! 🎉' : 'Nkwado Maka Emume!'}
      </motion.h1>
      {/* card */}
      <div className="bg-[#150F00E5] mt-8 md:mt-16 lg:mt-[82px] rounded-2xl lg:rounded-[39px] py-10 px-8  md:px-10 lg:py-18 lg:px-[93px] mx-auto max-w-[1253px]">
        {!isCelebrating && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]">
            {timeLeft.map(({ label, value }, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`size-[170px] sm:size-[200px] lg:size-[244px] flex flex-col items-center justify-center ${idx >= 2 ? 'bg-[#CE9904E5]' : 'bg-[#D9D9D9]'}`}
                key={idx}
              >
                <div
                  className={`font-montserrat font-bold text-4xl md:text-7xl lg:text-[100px] lg:leading-[100%] ${idx >= 2 ? 'text-white' : 'text-[#CE9904E5]'}`}
                >
                  {value.toString().padStart(2, '0')}
                </div>
                <p
                  className={`font-montserrat font-[400] text-xl md:text-2xl lg:leading-[100%] lg:text-[28px] ${idx >= 2 ? 'text-white' : 'text-[#CE9904E5]'}`}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {/* card */}
      {isCelebrating && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white text-lg sm:text-2xl mt-8"
        >
          🎊 The celebration has begun — enjoy!
        </motion.p>
      )}
    </div>
  );
}
