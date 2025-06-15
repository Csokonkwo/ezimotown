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
          para: `Cascading through lush, untouched greenery, the Iyi-Nzu
                Waterfall is a breathtaking natural wonder that captures the
                soul of Ezimo’s beauty.`,
        },
        {
          title: 'Where Legends Meet the Falls',
          para: `Ezimo is characterized by its peaceful atmosphere and communal
                lifestyle. The community is known for its hospitality and strong
                 sense of identity.`,
        },
      ]}
    />
  );
};

export default IyiNzuHero;
