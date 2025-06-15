import React from 'react';
import HeroSection from '.';

const CarnivalHero = () => {
  return (
    <HeroSection
      title="Carnival"
      description="The Ezimo Cultural Carnival is an explosion of tradition, where
              music, dance, and ancestral pride fill the streets in a dazzling
             display of Igbo culture."
      bgImage="carnival-hero.jpg"
      subSections={[
        {
          title: 'A Celebration of Heritage',
          para: `From masquerades to folklore reenactments, the carnival immerses
                visitors in Ezimo’s vibrant spirit — a journey through the
                 sights, sounds, and soul of our people.`,
        },
        {
          title: 'Where Culture Comes Alive',
          para: `Held annually with pride, this festive gathering unites
                generations, showcasing Ezimo’s rich customs, native attire, and
                timeless unity in one unforgettable celebration.`,
        },
      ]}
    />
  );
};

export default CarnivalHero;
