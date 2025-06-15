'use client';
import React from 'react';
import { useGetPosts } from '../api/get-posts';
import { Spinner } from '@/components/ui/spinner';
import PostsContentList from './posts-content-list';

export default function PostLists() {
  const postsQuery = useGetPosts();
  const posts = postsQuery?.data?.data;

  if (postsQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (postsQuery.isError) {
    return (
      <div className="text-white text-center py-12">
        Failed to load posts content
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section
        className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
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
      className="w-full relative bg-blend-overlay bg-black/90 bg-cover bg-top pt-12 md:pt-[67px] min-h-[100vh] pb-[70px] px-0"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <PostsContentList />
    </section>
  );
}
