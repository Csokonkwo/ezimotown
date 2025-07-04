import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import HistoryHero from '@/components/heros/history';
import History from '@/components/history';
// import HistoryLists from '@/features/history/components/history-lists';
import React from 'react';

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <History />
          {/* <HistoryLists /> */}
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
