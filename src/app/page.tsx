import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/index';
import OurHome from '@/components/our-home';
import GallerySection from '@/components/gallery';
import BlogStories from '@/components/blog-stories';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col overflow-hidden">
          <OurHome />
          <GallerySection />
          <BlogStories />
        </main>
      </div>
      <Footer />
    </>
  );
}
