import Footer from '@/components/footer/footer';
import PostHero from '@/components/heros/post';
import PostView from '@/features/posts/components/post-view';
import React from 'react';

export default function BlogPage() {
  return (
    <>
      <PostHero />
      <div className="min-h-screen font-helvetica">
        <main className="flex flex-col">
          <PostView />
        </main>
      </div>
      <Footer />
    </>
  );
}
