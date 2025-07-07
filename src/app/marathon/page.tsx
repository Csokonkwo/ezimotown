import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import MarathonHero from '@/components/heros/marathon';
import { getMarathon } from '@/features/marathon/api/get-marathon';
import MarathonLists from '@/features/marathon/components/marathon-lists';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata(): Promise<Metadata> {
  const marathon = await getMarathon();
  const firstItem = marathon?.data?.posts[0];
  return {
    title: firstItem?.meta_title || 'Marathon Page',
    description: firstItem?.meta_description || 'Explore Ezimo Marathon Event',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}
export default function MarathonPage() {
  return (
    <>
      <MarathonHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <MarathonLists />
          <BlogStories
            categorySlug="marathon"
            title="Latest news from Our Marathon"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
