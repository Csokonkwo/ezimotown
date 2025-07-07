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
          para: `In the heart of Ezimo lies a community shaped by peace, unity, and timeless tradition. With a deep sense of identity and unwavering hospitality, Ezimo embodies the strength of its roots where every handshake tells a story, and every gathering strengthens the bond of family and culture.`,
        },
      ]}
    />
  );
};

export default HistoryHero;
