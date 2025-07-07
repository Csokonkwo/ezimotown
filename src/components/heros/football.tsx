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
          para: `The Ezimo Annual Football Tournament is more than just a game, it’s a thrilling display of skill, passion, and community pride, where the energy of cheering fans, rhythmic drumming, and spirited dance creates an unforgettable atmosphere from kickoff to the final whistle.`,
        },
        {
          title: 'More Than a Game',
          para: `What started as a Ezimo’sgathering has grown into a celebrated tournament that draws enthusiastic crowds and showcases rising talents. It stands as a powerful symbol of Ezimo’s unity, resilience, and deep passion for football, inspiring both players and fans alike.`,
        },
      ]}
    />
  );
};

export default FootballHero;
