import React from 'react';
import HeroSection from '.';

const HistoryHero = () => {
  return (
    <HeroSection
      title="Our History"
      description="Explore the origins and heritage of Ezimo Town, the proud home of its people. Learn about our roots and the values that have shaped the remarkable community we are today."
      bgImage="history-hero.jpg"
      subSections={[
        {
          title: 'History is Culture',
          para: `The placement of ancestral symbols throughout Ezimo reflects a deep-rooted dedication to preserving the town’s rich cultural heritage, honoring the legacy and traditions passed down through generations.`,
        },
        {
          title: 'Embrace our Roots',
          para: `Ezimo is a serene community where peaceful living and strong bonds define everyday life. Known for its warm hospitality and deep sense of identity, the town proudly upholds its traditions and close-knit spirit.`,
        },
      ]}
    />
  );
};

export default HistoryHero;
