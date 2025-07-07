import React from 'react';
import HeroSection from '.';

const HomeHero = () => {
  return (
    <HeroSection
      title={<> Explore <br /> Ezimo Town </>}
      description=" Deje! Ezimo Town is a treasure trove of heritage and history, proudly home to the breathtaking Iyi-Nzu Waterfall, a natural wonder that adds to the town’s rich cultural legacy."
      bgImage="home-hero.jpg"
      subSections={[
        {
          title: 'Cultural and Historical Insights',
          para: `Ezimo Town is deeply rooted in its ancestral traditions, with the installation of sacred symbols and monuments reflecting the community’s unwavering commitment to preserving its rich cultural heritage.`,
        },
        {
          title: 'Community and Lifestyle',
          para: `Ezimo is a town where peace and unity thrive, nestled in a close-knit community that values togetherness and mutual support. Known for its warm hospitality, the spirit of cooperation is at the heart of daily life, fostering a sense of belonging and harmony among all who call this vibrant town home.`,
        },
      ]}
    />
  );
};

export default HomeHero;
