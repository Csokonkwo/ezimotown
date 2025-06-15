import Footer from '@/components/footer/footer';
import CalendarHero from '@/components/heros/calendar';
import CalendarLists from '@/features/calendar/components/calendar-lists';
import React from 'react';

export default function PostsPage() {
  return (
    <>
      <CalendarHero />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <CalendarLists />
        </main>
      </div>
      <Footer />
    </>
  );
}
