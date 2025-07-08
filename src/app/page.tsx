import Footer from '@/components/footer/footer';
import OurHome from '@/components/our-home';
import GallerySection from '@/components/gallery';
import BlogStories from '@/components/blog-stories';
import HomeHero from '@/components/heros/home';
export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="min-h-screen font-helvetica w-full">
        <main className="flex flex-col max-w-[1920px] mx-auto overflow-hidden">
          <OurHome />
          <GallerySection />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
