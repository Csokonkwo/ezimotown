'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { paths } from '@/config/paths';
import { useGetPosts } from '@/features/posts/api/get-posts';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/buttons';
import ArrowIcon from '@/components/svgs/arrow-icon';
import { cardVariant } from '@/components/ui/cards/client-masonry';
import MagnifyIcon from '@/components/svgs/search-icon';
import LightBoxGallery from '@/components/ui/lightbox';
import { formatDate } from '@/utils/format';
import Pagination from '@/components/ui/pagination';
const POSTS_PER_PAGE = 15;
export default function PostsContentList() {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lightImages, setLightImages] = useState<
    { src: string; alt: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);

  const postQuery = useGetPosts();
  const posts = postQuery?.data?.data;

  const totalPosts = posts?.length;
  const totalPages = Math.ceil(totalPosts! / POSTS_PER_PAGE);

  const paginatedPosts = posts?.slice(
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

  if (postQuery?.isError) {
    return (
      <section className="w-full relative  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto lg:min-h-[100vh] px-4  lg:px-20">
        <p className="font-normal text-[12px] text-center sm:text-base text-white mb-2">
          Error showing blogs
        </p>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="w-full relative  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto lg:min-h-[100vh] px-4  lg:px-20">
        <p className="font-normal text-[12px] sm:text-base text-white mb-2">
          No blogs to show
        </p>
      </section>
    );
  }

  const handleImageClick = (images: typeof lightImages, idx: number) => {
    setLightImages(images);
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <>
      <section className="w-full relative  bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto  px-4  lg:px-20">
        {/* blog story card */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-6 items-center justify-center mx-auto">
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
                    className="max-h-[100px] md:max-h-[188px] object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <MagnifyIcon className="text-gold w-10 h-10 md:w-14 md:h-14" />
                  </div>
                </div>

                <motion.div className="flex gap-4">
                  <motion.h6 className="text-[#98989A] mb-4">
                    {post?.category?.name}
                  </motion.h6>
                  <motion.p className="text-white/70">
                    {formatDate(post.published_at)}
                  </motion.p>
                </motion.div>
                <motion.p className="font-normal font-poppins text-[12px] sm:text-base text-white mb-2 line-clamp-1">
                  {post?.title}
                </motion.p>
                <motion.p className="font-normal text-[12px] sm:text-sm text-[#FFE9D5] mb-2 line-clamp-3">
                  {post?.excerpt}
                </motion.p>
                <Link href={paths.post.getHref(post?.slug)}>
                  <Button
                    icon={<ArrowIcon />}
                    className="bg-black-8 rounded-[10.2px] text-gray-60 text-lg font-normal w-full"
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
    </>
  );
}
