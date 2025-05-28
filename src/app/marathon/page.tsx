import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import MarathonHero from '@/components/heros/marathon';
import EzimoMarathon from '@/components/marathon';
import React from 'react';

export default function MarathonPage() {
  return (
    <>
      <MarathonHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <EzimoMarathon />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
