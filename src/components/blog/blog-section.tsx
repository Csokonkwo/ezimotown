import React from 'react';
import ScrollZoomText from '../scroll/use-scroll-zoomtext';
import { Button } from '../ui/buttons';
import { motion } from 'motion/react';
import ArrowDownIcon from '../svgs/arrow-down-icon';
import { BlogPosts } from '@/types/api';
import { renderBlogContent } from '../render-content/render-blog-content';
import { calculateReadingTime, formatDate } from '@/utils/format';
import Link from 'next/link';
import { paths } from '@/config/paths';
type BlogProps = {
  blogs: BlogPosts[];
};
export default function BlogContentSection({ blogs }: BlogProps) {
  return (
    <ScrollZoomText className="will-change-transform text-start flex flex-col lg:flex-row gap-16 mt-8 shadow-inner shadow-white/5 p-8">
      <div className="flex-1 space-y-4 md:space-y-12">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`space-y-2  pb-10 px-0 md:px-10 ${index < blogs.length - 1 ? 'border-b border-black-15' : ''}`}
          >
            <h4 className="font-normal text-sm lg:text-2xl text-white">
              {blog.title}
            </h4>
            {blog.content.split('\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {renderBlogContent(paragraph)}
              </React.Fragment>
            ))}
          </div>
        ))}

        {/* Read full blog section */}
        <div className="space-y-4 md:space-y-6">
          {blogs.map((blog) => (
            <React.Fragment key={blog.id}>
              <h4 className="font-medium text-sm lg:text-2xl text-white  md:px-10">
                {blogs[blogs.length - 1].title}
              </h4>
              <div
                className="relative pb-10 px-4 md:px-8 lg:px-10"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(20, 20, 20, 0) -98.48%, #141414 55.11%)`,
                }}
              >
                <>{renderBlogContent(blogs[blogs.length - 1].content)}</>
                {/* </p> */}
                <motion.div className="text-center relative mt-2  z-[10]">
                  <Link href={paths.blog.getHref(blog?.slug)}>
                    <Button icon={<ArrowDownIcon />} className="capitalize">
                      Read Full blog
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* sidebar (content 2) */}
      <div className="px-8 md:px-10">
        {blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            {/* publication  */}
            <div className="flex  gap-8">
              <div>
                <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
                  Publication Date
                </h6>
                <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
                  {formatDate(blog.published_at)}
                </p>
              </div>
              <div>
                <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:lg:text-lg font-normal">
                  Category
                </h6>
                <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
                  {blog.category.name}
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
                  {calculateReadingTime(blog.content)}
                </p>
              </div>
              <div className="">
                <h6 className="text-gray-60 text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
                  Author Name
                </h6>
                <p className="text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal">
                  {blog.published_by.first_name +
                    ' ' +
                    blog.published_by.last_name}
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
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-normal text-[6.5px] sm:text-xs md:text-sm lg:text-lg text-gray-60 mb-3">
                Tags
              </p>
              <ul className="bg-black-10 p-4  md:max-w-sm md:px-10 flex flex-col gap-4 rounded-[10px]">
                {blog.post_tags.map((tag) => (
                  <li
                    key={tag.id}
                    className="list-disc list-inside text-white text-[6.5px] sm:text-xs md:text-sm lg:text-lg font-normal"
                  >
                    {tag.tag.name}
                  </li>
                ))}
              </ul>
            </motion.aside>
            {/* table of content */}
          </React.Fragment>
        ))}
      </div>
      {/* sidebar (content 2) */}
    </ScrollZoomText>
  );
}
