import BlogStories from '@/components/blog-stories';
import EzimoCarnival from '@/components/carnival';
import Footer from '@/components/footer/footer';
import CarnivalHero from '@/components/heros/carnival';
import React from 'react';

export default function CarnivalPage() {
  return (
    <>
      <CarnivalHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <EzimoCarnival />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
