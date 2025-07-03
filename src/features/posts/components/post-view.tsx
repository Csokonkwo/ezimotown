'use client';
import React, { useRef } from 'react';
import { usePost } from '../api/get-post';
import { useParams } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';
import { renderContent } from '@/components/render-content/render-content';
import BlogStories from '@/components/blog-stories';
import { motion } from 'motion/react';
import { formatDate } from '@/utils/format';

export default function PostView() {
  const scrollRef = useRef(null);
  const params = useParams();
  const slug = params.slug as string;
  const postQuery = usePost({ slug });
  const post = postQuery?.data?.data;

  if (postQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (postQuery.isError) {
    return (
      <div className="text-white text-center py-12">
        Failed to load posts content
      </div>
    );
  }

  if (!post) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] md:mt-[267px] min-h-[100vh] pb-[70px] px-0"
        style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
      >
        <p className="font-helvetica text-white font-normal text-[6px] sm:text-sm md:text-lg text-center lg:max-w-[1389px] mb-4">
          No content to show
        </p>
      </section>
    );
  }
  return (
    <section
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px]"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex max-w-4xl mx-auto gap-8 mb-4 sm:mb-6 md:mb-8"
        >
          <motion.h6 className="text-white">{post.category.name}</motion.h6>
          <motion.p className="text-white/70">
            {formatDate(post.published_at)}
          </motion.p>
        </motion.div>
        <motion.h4
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-normal max-w-4xl mx-auto  font-poppins text-xs sm:text-2xl md:text-3xl text-white"
        >
          {post.title}
        </motion.h4>
        <motion.div className="mt-5 md:mt-10 lg:mt-14 mx-auto mb-4 md:mb-14">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/${post?.images[0]?.path}`}
            alt={post?.images[0]?.label}
            width={434}
            height={188}
            className="w-full h-full rounded-2xl text-center mx-auto max-w-4xl max-h-[608px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {renderContent(post.content)}
        </motion.div>
      </div>
      <BlogStories />
    </section>
  );
}
