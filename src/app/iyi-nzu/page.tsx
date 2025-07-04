import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import IyiNzuHero from '@/components/heros/iyi-nzu';
import { getWaterfall } from '@/features/iyi-nzu/api/get-waterfall';
import WaterfallLists from '@/features/iyi-nzu/components/waterfall-lists';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata(): Promise<Metadata> {
  const waterfall = await getWaterfall();
  const firstItem = waterfall?.data?.posts[0];
  return {
    title: firstItem?.meta_title || 'Iyi Nzu',
    description:
      firstItem?.meta_description ||
      'Discover Angel Falls, the tallest waterfall on Earth',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}
export default function IyinzuPage() {
  return (
    <>
      <IyiNzuHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <WaterfallLists />
          <BlogStories
            categorySlug="waterfall"
            title="Latest news from Our Culture"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
