import BlogStories from '@/components/blog-stories';
import EzimoFootball from '@/components/football';
import Footer from '@/components/footer/footer';
import FootballHero from '@/components/heros/football';
import React from 'react';

export default function FootballPage() {
  return (
    <>
      <FootballHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <EzimoFootball />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
