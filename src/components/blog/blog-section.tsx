import React from 'react';
import ScrollZoomText from '../scroll/use-scroll-zoomimage';
import { blogContent } from '@/constants';
import { Button } from '../ui/buttons';
import { motion } from 'motion/react';
import ArrowDownIcon from '../svgs/arrow-down-icon';

export default function BlogContentSection() {
  return (
    <ScrollZoomText className="will-change-transform text-start flex flex-col lg:flex-row gap-16 mt-8 shadow-inner shadow-white/5 p-8">
      <div className="flex-1 space-y-4 md:space-y-12">
        {blogContent.sections.slice(0, 2).map((section, index) => (
          <div
            key={index}
            className={`space-y-2  pb-10 px-0 md:px-10 ${index < blogContent.sections.length - 1 ? 'border-b border-black-15' : ''}`}
          >
            <h4 className="font-normal text-sm lg:text-2xl text-white">
              {section.title}
            </h4>
            {section.content.split('\n').map((paragraph, paraIndex) => (
              <p
                key={paraIndex}
                className="font-normal text-[10px] md:text-base lg:text-lg text-gray-60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        {/* Read full blog section */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="font-medium text-sm md:text-2xl text-white  md:px-10">
            {blogContent.sections[blogContent.sections.length - 1].title}
          </h4>
          <div
            className="relative pb-10 px-4 md:px-8 lg:px-10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(20, 20, 20, 0) -98.48%, #141414 55.11%)`,
            }}
          >
            <p className="font-normal text-[10px] pt-2 line-clamp-4  md:text-base lg:text-lg text-gray-60">
              {blogContent.sections[blogContent.sections.length - 1].content}
            </p>
            <motion.div className="text-center relative mt-2  z-[10]">
              <Button icon={<ArrowDownIcon />} className="capitalize">
                Read Full blog
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* sidebar (content 2) */}
      <div className="px-8 md:px-10">
        {/* publication  */}
        <div className="flex  gap-8">
          <div>
            <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              Publication Date
            </h6>
            <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              {blogContent.metadata.publicationDate}
            </p>
          </div>
          <div>
            <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:lg:text-lg font-normal">
              Category
            </h6>
            <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              {blogContent.metadata.category}
            </p>
          </div>
        </div>
        {/* publication */}
        {/* date  */}
        <div className="flex gap-8 pt-6">
          <div>
            <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              Reading Time
            </h6>
            <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              {blogContent.metadata.readingTime}
            </p>
          </div>
          <div className="">
            <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              Author Name
            </h6>
            <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
              {blogContent.metadata.authorName}
            </p>
          </div>
        </div>
        {/* date */}
        {/* table of content */}
        <motion.aside
          className="mt-10 sticky top-20 self-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-normal text-[6.5px] sm:text-xs md:text-sm lg:text-lg text-gray-60 mb-3">
            Table of Contents
          </p>
          <ul className="bg-black-10 p-4  md:max-w-sm md:px-10 flex flex-col gap-4 rounded-[10px]">
            {blogContent.tableOfContents.map((item, idx) => (
              <li
                key={idx}
                className="list-disc list-inside text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.aside>
        {/* table of content */}
      </div>
      {/* sidebar (content 2) */}
    </ScrollZoomText>
  );
}
