import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import HistoryHero from '@/components/heros/history';
import History from '@/components/history';
import { getHistory } from '@/features/history/api/get-history';
import HistoryLists from '@/features/history/components/history-lists';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const history = await getHistory();
  const firstItem = history?.data?.posts[0];
  return {
    title: firstItem?.meta_title || 'History',
    description: firstItem?.meta_description || 'Explore Our Culture',
    keywords: firstItem?.meta_keywords?.split(',') || [],
  };
}

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <History />
          <HistoryLists />
          <BlogStories
            categorySlug="culture"
            title="Latest news from Our History"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
