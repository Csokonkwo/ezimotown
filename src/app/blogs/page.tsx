import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import BlogHero from '@/components/heros/blog';
import { getBlogPosts } from '@/features/blog/api/get-blogs';
import BlogLists from '@/features/blog/components/blog-lists';
import { Metadata } from 'next';

import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const blogs = await getBlogPosts();
  const firstItem = blogs?.data?.[0];
  return {
    title: firstItem?.meta_title || 'Blog Page',
    description: firstItem?.meta_description || '',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <BlogLists />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
