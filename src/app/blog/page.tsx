import EzimoBlog from '@/components/blog';
import BlogStories from '@/components/blog-stories';
import Footer from '@/components/footer/footer';
import BlogHero from '@/components/heros/blog';
import BlogNews from '@/components/news';

import React from 'react';

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <EzimoBlog />
          <BlogNews />
        </main>
      </div>
      <Footer />
    </>
  );
}
