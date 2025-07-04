import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import FootballHero from '@/components/heros/football';
import { getFootball } from '@/features/football/api/get-football';
import Footballlists from '@/features/football/components/football-lists';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const football = await getFootball();
  const firstItem = football?.data?.posts[0];
  return {
    title: firstItem?.meta_title || 'Football Page',
    description:
      firstItem?.meta_description ||
      'Understand how football tactics have changed over the years',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}

export default function FootballPage() {
  return (
    <>
      <FootballHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <Footballlists />
          <BlogStories
            categorySlug="football"
            title="Latest news from Our Football"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
