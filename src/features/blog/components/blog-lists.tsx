'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import BlogContentSection from '@/components/blog/blog-section';
import { useGetBlogPosts } from '../api/get-blogs';
import { Spinner } from '@/components/ui/spinner';

export default function BlogLists() {
  const scrollRef = useRef(null);
  const toRef = useRef(null);
  const inView = useInView(toRef, { once: true });
  const controls = useAnimation();
  const blogsQuery = useGetBlogPosts();
  const blogs = blogsQuery?.data?.data;
  console.log(blogs);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  if (blogsQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (blogsQuery.isError) {
    return (
      <div className="text-white text-center py-12">
        Failed to load blog content
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/95 bg-cover bg-top pt-12 md:pt-[140px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="font-helvetica text-[#FFE9D5] font-normal text-[6px] sm:text-sm md:text-lg text-center lg:max-w-[1389px] mb-4">
          No content to show
        </p>
      </section>
    );
  }
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/95 bg-cover bg-top pt-12 md:pt-[140px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <motion.div />
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full h-[300px] flex flex-col justify-end lg:min-h-[70vh] bg-gradient bg-center bg-cover relative "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.880208) 75.52%, #141414 100%), url(${process.env.NEXT_PUBLIC_URL}/${blog?.images[0]?.path})`,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className=" text-white mx-auto text-center  font-bold font-poppins text-xl sm:text-4xl lg:text-6xl mb-3 lg:mb-8"
          >
            {/* More Boreholes are being Built in Ezimo */}
            {blog.title}
          </motion.h2>
        </div>
      ))}

      <BlogContentSection blogs={blogs} />
    </section>
  );
}
