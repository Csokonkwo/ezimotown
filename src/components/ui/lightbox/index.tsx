'use client';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type LightBoxGalleryProps = {
  slides: { src: string; alt?: string }[];
  startIndex: number;
  open: boolean;
  onClose: () => void;
};
export default function LightBoxGallery({
  slides,
  startIndex,
  open,
  onClose,
}: LightBoxGalleryProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={startIndex}
      carousel={{ finite: false }}
      styles={{ container: { backgroundColor: 'rgba(0,0,0,0.6)' } }}
    />
  );
}
