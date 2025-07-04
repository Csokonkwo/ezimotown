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
  const latestBlog = blogs[blogs.length - 1];
  return (
    <ScrollZoomText className="will-change-transform text-start flex flex-col lg:flex-row gap-16 mt-8 shadow-inner shadow-white/5 py-8">
      <div className="relative max-h-[320px] overflow-hidden md:px-10 px-6  pb-16">
        {/* Excerpted blog content */}
        <div className="space-y-4 text-white">
          {latestBlog.content
            .split('\n')
            // .slice(0, 6)
            .map((para, idx) => (
              <React.Fragment key={idx}>
                {renderBlogContent(para)}
              </React.Fragment>
            ))}
        </div>

        {/* Fade-to-black effect */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none z-10" />

        {/* Read Full Blog Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <Link href={paths.blog.getHref(latestBlog.slug)}>
            <Button
              icon={<ArrowDownIcon />}
              className="capitalize bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10"
            >
              Read Full Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* sidebar (content 2) */}
      <div className="px-8 md:px-10">
        <div className="flex gap-8">
          <div>
            <h6 className="text-gray-60 text-xs lg:text-lg font-normal">
              Publication Date
            </h6>
            <p className="text-white text-xs lg:text-lg font-normal">
              {formatDate(latestBlog.published_at)}
            </p>
          </div>
          <div>
            <h6 className="text-gray-60 text-xs lg:text-lg font-normal">
              Category
            </h6>
            <p className="text-white text-xs lg:text-lg font-normal">
              {latestBlog.category.name}
            </p>
          </div>
        </div>

        <div className="flex gap-8 pt-6">
          <div>
            <h6 className="text-gray-60 text-xs lg:text-lg font-normal">
              Reading Time
            </h6>
            <p className="text-white text-xs lg:text-lg font-normal">
              {calculateReadingTime(latestBlog.content)}
            </p>
          </div>
          <div>
            <h6 className="text-gray-60 text-xs lg:text-lg font-normal">
              Author Name
            </h6>
            <p className="text-white text-xs lg:text-lg font-normal">
              {latestBlog.published_by.first_name +
                ' ' +
                latestBlog.published_by.last_name}
            </p>
          </div>
        </div>

        <motion.aside
          className="mt-10 sticky top-20 self-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-60 text-xs mb-3">Tags</p>
          <ul className="bg-black-10 p-4 md:max-w-sm md:px-10 flex flex-col gap-4 rounded-[10px]">
            {latestBlog.post_tags.map((tag) => (
              <li
                key={tag.id}
                className="list-disc list-inside text-white text-xs lg:text-lg font-normal"
              >
                {tag.tag.name}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      {/* sidebar (content 2) */}
    </ScrollZoomText>
  );
}
