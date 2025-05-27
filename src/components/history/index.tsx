'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import GridCard from '../ui/cards/grid-card';
import Image from 'next/image';

export default function History() {
  const scrollRef = useRef(null);
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px]"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-white font-bold font-poppins text-xl sm:text-4xl md:text-6xl lg:text-6xl mb-3 lg:mb-4">
          The History of Ezimo Town
        </h2>
        <p className="font-helvetica text-white max-w-xs sm:max-w-md md:max-w-2xl mx-auto lg:max-w-[914px] font-normal text-[6px] sm:text-sm md:text-lg text-center">
          We are pleased to grace you with the beautiful history of our town and
          to show you how far the people of Ezimo town have developed and
          fostered family and love
        </p>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ delay: 0.5 }}
      className='mt-12 lg:mt-[93px] md:px-[80px] lg:px-[102px]'>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className='flex-1 basis-0 w-full  cursor-pointer group'>
            <Image
              src={'/assets/images/history-carousel1.jpg'}
              width={606}
              height={703}
              alt="History Image"
              className="md:rounded-[7px] mx-auto object-cover grayscale duration-500 group-hover:scale-105"
            />
          </div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5 }}
          className='mt-8 px-8 md:mt-[37px] flex-1 basis-0'>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg mb-8 lg:mb-12">
              Tucked within the rolling hills of Enugu State, Ezimo Town is more
              than just a dot on the map—it's a vibrant tapestry woven with rich
              stories, timeless legends, and an enduring legacy. Believed to
              have been founded over 400 years ago, Ezimo emerged from the union
              of several resilient ancestral clans who, through sheer
              determination and courage, journeyed across dense forests, crossed
              sacred rivers, and braved countless challenges to settle on this
              blessed and fertile soil. Over centuries, these early settlers
              built a thriving community, passing down customs, traditions, and
              wisdom that continue to shape the town’s identity today. Ezimo’s
              history is not just a tale of survival, but a testament to the
              strength and unity of its people, who have always found ways to
              adapt and thrive despite the challenges of time.
            </motion.p>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg leading-6 mb-4">
              Brief History:
            </motion.p>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg">
              Originally known as Ezi-Oma, which translates to "The Path of
              Goodness," the name of the town evolved over time into Ezimo, a
              reflection of the town's enduring spirit of unity, peace, and
              strength. This transformation in name carries with it the essence
              of the community's resilience and commitment to its roots. Oral
              tradition speaks of a great and revered leader, Okpara Idu, a
              visionary warrior and spiritual custodian who, guided by divine
              revelation beneath the sacred Oji (kolanut) tree, led his people
              across the rugged Ugwunye Hills to settle in the land that is now
              known as Ezimo. His leadership not only marked the beginning of
              the town's formation but also anchored its values of harmony and
              foresight. From its earliest days, Ezimo quickly grew into a
              cultural and economic powerhouse.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ delay: 0.5 }}
      className='mt-12 lg:mt-[93px] md:px-[80px] lg:px-[102px]'>
        <div className="flex  flex-col-reverse items-center lg:flex-row lg:items-center gap-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5 }}
          className='mt-8 px-8 md:mt-[37px] flex-1 basis-0 w-full'>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg mb-8 lg:mb-12">
            Ezimo, now divided into Ezimo Uno and Ezimo Agu, has long stood as a beacon of unity, culture, and craftsmanship. The town was one of the first in the region to establish a self-rule system that empowered its people, creating a framework of governance rooted in tradition. This system, which predated colonial rule, was based on village councils, age-grade groups, and vibrant masquerade festivals that not only helped maintain law and order but also preserved the rich cultural identity of Ezimo. In a time long before colonial governance reached the rolling hills of the region, Ezimo’s community-led structure allowed the town to thrive, creating a harmonious society where collective decision-making and respect for tradition were paramount.
            </motion.p>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg leading-6 mb-4">
             It is said that the Ofia Ezimo (Ezimo forest) once echoed with the rhythmic chants of warriors preparing for battle, the soft, melodic songs of moonlit maidens celebrating harvests, and the whispered tales of ancestors who walked the land before them. These stories, passed down through generations, were not just narratives but sacred teachings, guiding the people of Ezimo through both times of prosperity and change. The forest, with its dense canopy and quiet paths, stood as a living testament to the town's history, holding the wisdom of their ancestors in every breeze and rustling leaf.
            </motion.p>
            <motion.p className="text-[#FFE9D5] font-helvetica font-normal text-[10px] sm:text-sm lg:text-lg">
            The town of Ezimo played a quiet but undeniably powerful role during the pre-independence era, contributing significantly to the broader political and social movements of the time. Many sons and daughters of Ezimo were at the forefront of early missionary education, civic organization, and the fight for national liberation. 
            </motion.p>
          </motion.div>

          <div className='flex-1 basis-0 w-full cursor-pointer group'>
            <Image
              src={'/assets/images/history-carousel2.jpg'}
              width={606}
              height={703}
              alt="History Image"
              className="md:rounded-[7px] duration-500 mx-auto group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
