'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import BlogContentSection from '@/components/blog/blog-section';
import { useGetBlogPosts } from '../api/get-blogs';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';

export default function BlogLists() {
  const scrollRef = useRef(null);
  const toRef = useRef(null);
  const inView = useInView(toRef, { once: true });
  const controls = useAnimation();
  const blogsQuery = useGetBlogPosts();
  const blogs = blogsQuery?.data?.data;

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
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="text-white text-center py-12">
          Failed to load blog content
        </p>
      </section>
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

  const latestBlog = blogs[blogs.length - 1];
  const imageUrl = `${process.env.NEXT_PUBLIC_URL}/${latestBlog?.images[0]?.path}`;

  return (
    <section className="w-full relative bg-black/95 pt-12 md:pt-[140px] min-h-[100vh] pb-[70px] px-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/gold-background.png"
          alt="Gold background"
          fill
          className="object-cover"
        />
      </div>

      {/* Blog Banner */}
      <div className="relative w-full h-[300px] lg:min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <Image
          src={imageUrl}
          alt={latestBlog?.title}
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-[#141414] z-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white relative z-20 mx-auto text-center font-bold font-poppins text-xl sm:text-4xl lg:text-6xl mb-3 lg:mb-8"
        >
          {latestBlog.title}
        </motion.h2>
      </div>

      <BlogContentSection blogs={blogs} />
    </section>
  );
}
