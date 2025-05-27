import Footer from '@/components/footer/footer';
import Image from 'next/image';
import Navbar from '@/components/navbar/index';
import OurHome from '@/components/our-home';
import GallerySection from '@/components/gallery';
import BlogStories from '@/components/blog-stories';
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-helvetica"> */}
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <OurHome />
          <GallerySection />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
