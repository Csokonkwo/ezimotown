import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import CarnivalHero from '@/components/heros/carnival';
import { getCarnival } from '@/features/carnival/api/get-carnival';
import CarnivalLists from '@/features/carnival/components/carnival-lists';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const carnival = await getCarnival();
  const firstItem = carnival?.data?.[0];
  return {
    title: firstItem?.meta_title || 'Carnival Page',
    description:
      firstItem?.meta_description || 'Discover the festival of a lifetime.',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}
export default function CarnivalPage() {
  return (
    <>
      <CarnivalHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <CarnivalLists />
          <BlogStories categorySlug="carnival" />
        </main>
      </div>
      <Footer />
    </>
  );
}
