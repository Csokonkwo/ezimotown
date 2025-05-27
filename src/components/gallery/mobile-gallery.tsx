import { imgSlides } from '@/constants';
import Image from 'next/image';
import React from 'react';

export default function MobileGallery() {
  return (
    <>
      {imgSlides.map((img, index) => (
        <div className="mb-16" key={img.id}>
          <Image
            src={img.image}
            width={392}
            height={485}
            alt={`Gallery Slides ${index}`}
            objectFit="cover"
            className="object-cover"
          />
        </div>
      ))}
    </>
  );
}
