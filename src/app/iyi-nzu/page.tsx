import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import IyiNzuHero from '@/components/heros/iyi-nzu';
import AboutIyiNzu from '@/components/iyi-nzu';
import React from 'react';

export default function IyinzuPage() {
  return (
    <>
      <IyiNzuHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <AboutIyiNzu/>
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
