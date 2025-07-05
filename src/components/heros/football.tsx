import React from 'react';
import HeroSection from './index';

const FootballHero = () => {
  return (
    <HeroSection
      title="Football"
      description="Every year, Ezimo’s finest athletes gather for a thrilling
              football tournament that unites villages, ignites rivalries, and
              celebrates raw talent on the field."
      bgImage="football-hero1.jpg"
      subSections={[
        {
          title: 'The Pride of the Pitch',
          para: `The Ezimo Annual Football Tournament isn’t just a match — it’s a
                cultural festival where drums, dance, and community spirit
                electrify the air from kickoff to final whistle.`,
        },
        {
          title: 'More Than a Game',
          para: `From humble beginnings to packed sidelines, this beloved
                tournament has become a proving ground for young stars and a
                symbol of Ezimo's unity, strength, and passion for the beautiful
                game.`,
        },
      ]}
    />
  );
};

export default FootballHero;
