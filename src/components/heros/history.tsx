import React from 'react';
import HeroSection from '.';

const HistoryHero = () => {
  return (
    <HeroSection
      title="Our History"
      description="Discover first hand the root of the home of the people of Ezimo
               town. Get to know our roots and what makes the amazing people we
               are"
      bgImage="history-hero.jpg"
      subSections={[
        {
          title: 'History is Culture',
          para: `The installation of ancestral symbols is part of the historical
                developments of the people, reflecting their commitment to
                preserving cultural heritage.`,
        },
        {
          title: 'Embrace our Roots',
          para: `Ezimo is characterized by its peaceful atmosphere and communal
                 lifestyle. The community is known for its hospitality and strong
                sense of identity.`,
        },
      ]}
    />
  );
};

export default HistoryHero;
