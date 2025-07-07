import React from 'react';
import HeroSection from './index';

const IyiNzuHero = () => {
  return (
    <HeroSection
      title="Iyi-Nzu"
      description="The Iyi-Nzu Waterfall stands as Ezimo Town’s crown jewel — our
              most prestigious tourist destination and a timeless symbol of
              pride."
      bgImage="Iyi-Nzu-hero.jpg"
      subSections={[
        {
          title: 'Nature’s Masterpiece in Ezimo',
          para: `Flowing gracefully through verdant, untouched landscapes, the Iyi-Nzu Waterfall stands as a stunning natural marvel, embodying the serene beauty and spirit of Ezimo.`,
        },
        {
          title: 'Where Legends Meet the Falls',
          para: `In Ezimo, the majestic Iyi-Nzu Waterfall flows as a living legend, weaving nature’s beauty into the fabric of the town. Ezimo is a place where tradition and nature come together to create an unforgettable experience for residents and visitors alike.`,
        },
      ]}
    />
  );
};

export default IyiNzuHero;
