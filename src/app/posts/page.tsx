import Footer from '@/components/footer/footer';
import PostsHero from '@/components/heros/posts';
import { getPosts } from '@/features/posts/api/get-posts';
import PostLists from '@/features/posts/components/post-lists';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const firstItem = posts?.data[0];
  return {
    title: firstItem?.meta_title || 'Posts Page',
    description: firstItem?.meta_description || '',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}
export default function PostsPage() {
  return (
    <>
      <PostsHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <PostLists />
        </main>
      </div>
      <Footer />
    </>
  );
}
