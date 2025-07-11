'use client';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/buttons';
import Image from 'next/image';
import ArrowIcon from '../svgs/arrow-icon';
import { motion } from 'framer-motion';
import { cardVariant } from '../ui/cards/client-masonry';
import Link from 'next/link';
import { paths } from '@/config/paths';
import { useGetPosts } from '@/features/posts/api/get-posts';
import { Spinner } from '../ui/spinner';
import LightBoxGallery from '../ui/lightbox';
import MagnifyIcon from '../svgs/search-icon';
import Pagination from '../ui/pagination';
import EmptyState from '../errors/empty-state';

const POSTS_PER_PAGE = 6;
type BlogProps = {
  categorySlug?: string;
  title?: string;
};
export default function BlogStories({
  categorySlug,
  title = 'Latest news from Our Blog Stories',
}: BlogProps) {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lightImages, setLightImages] = useState<
    { src: string; alt: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);

  const postQuery = useGetPosts();
  const posts = postQuery?.data?.data || [];

  let filteredPosts = posts;

  if (categorySlug) {
    const matchedPosts = posts.filter(
      (post) =>
        post.category?.slug?.toLowerCase() === categorySlug.toLowerCase(),
    );
    if (matchedPosts.length > 0) {
      filteredPosts = matchedPosts;
    } else {
      filteredPosts = [...posts]
        .sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime(),
        )
        .slice(0, 6);
    }
  }

  const totalPosts = filteredPosts?.length;
  const totalPages = Math.ceil(totalPosts! / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts?.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  if (postQuery.isLoading) {
    return (
      <div className="flex relative h-screen w-screen bg-black items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (postQuery.isError) return <EmptyState message="Error showing blogs" />;
  if (filteredPosts.length === 0)
    return <EmptyState message="No blogs to show" />;

  const handleImageClick = (images: typeof lightImages, idx: number) => {
    setLightImages(images);
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <section className="w-full relative max-w-[1920px] mx-auto  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto md:min-h-screen  px-6  lg:px-20 overflow-hidden">
      <div className="flex justify-between items-center pb-8 md:pb-16">
        <div>
          <motion.h6 className="text-gray-80 text-[14px] sm:text-xl md:text-2xl font-normal">
            {/* Latest news from Our Blog Stories */}
            {title}
          </motion.h6>
        </div>
        <Link href={paths.posts.getHref()}>
          <Button
            icon={<ArrowIcon />}
            className="font-helvetica text-[12px]  md:text-lg text-gray-60 rounded-[10.2px]"
          >
            See More
          </Button>
        </Link>
      </div>

      {/* blog story card */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-12 gap-x-6 items-center justify-center mx-auto overflow-hidden">
        {paginatedPosts?.map((post) => {
          const imgs = post.images.map((img) => ({
            src: `${process.env.NEXT_PUBLIC_URL}/${img?.path}`,
            alt: img.label,
          }));
          return (
            <motion.div
              key={post.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ root: scrollRef }}
              className="group cursor-pointer"
            >
              {/* Image Container with Overlay */}
              <div
                className="relative rounded-[10.2px] overflow-hidden mb-4"
                onClick={() => handleImageClick(imgs, 0)}
              >
                <Image
                  src={imgs[0]?.src}
                  alt={imgs[0]?.alt}
                  width={434}
                  height={188}
                  loading="lazy"
                  className="max-h-[250px] object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <MagnifyIcon className="text-gold w-10 h-10 md:w-14 md:h-14" />
                </div>
              </div>

              <motion.p className="font-normal text-[14px] capitalize sm:text-base text-white mb-2 line-clamp-1">
                {post?.title}
              </motion.p>
              <motion.h6 className="text-[#98989A] mb-4 text-[12px] sm:text-sm md:text-base xl:text-lg">
                {post?.category?.name}
              </motion.h6>
              <Link href={paths.post.getHref(post?.slug)}>
                <Button
                  icon={<ArrowIcon />}
                  className="bg-black-8 rounded-[10.2px] text-gray-60 text-[12px] md:text-lg font-normal w-full"
                >
                  Read More
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </div>
      {/* blog story card */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentpage}
      />
      <LightBoxGallery
        slides={lightImages}
        startIndex={currentIndex}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
