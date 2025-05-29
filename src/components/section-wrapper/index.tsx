'use client';

import { useState } from 'react';

export default function EzimoBlogSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="mt-8 px-8 md:px-10"
      style={{ backgroundImage: `url(/assets/images/gold-background.png)` }}
    >
      <div className="border border-white/10 p-8 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4 border-b border-white/10 pb-8">
            <h4 className="text-2xl text-white font-normal">Introduction</h4>
            <p className="text-lg text-gray-400 font-normal">
              Ezimo Town, nestled in the heart of Enugu State, has long been
              recognized for its vibrant community, deep-rooted culture, and
              natural beauty. However, in recent years, a new wave of
              development has been sweeping through the town — one that seeks to
              address a fundamental need: water. Traditionally known for its
              fertile farmlands and bustling local markets, Ezimo is now making
              strides towards improving its water infrastructure.
            </p>
          </div>

          <div
            className={`space-y-6 transition-all duration-300 ${expanded ? 'max-h-full' : 'max-h-[400px] overflow-hidden'}`}
          >
            <div className="space-y-4 border-b border-white/10 pb-8">
              <h4 className="text-2xl text-white font-normal">
                Background: The Water Challenge in Ezimo
              </h4>
              <p className="text-lg text-gray-400 font-normal">
                Before the advent of boreholes, many of the people in Ezimo
                faced significant challenges in accessing clean and safe water.
                Water sources were often far and limited, leading to long walks,
                especially for women and children, who had to trek miles to
                fetch water from rivers, streams, and other natural sources.
                These sources were not always reliable and were frequently
                contaminated, leading to waterborne diseases.
              </p>
              <p className="text-lg text-gray-400 font-normal">
                The introduction of boreholes has not only alleviated these
                challenges but has also significantly reduced the time spent
                fetching water. Now, water is much more accessible, allowing
                families to focus on other important activities like farming,
                education, and health. This chapter delves into the history of
                water access issues in Ezimo, the efforts to resolve them, and
                the social and economic transformation that has been set in
                motion by these vital infrastructure projects.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl text-white font-medium">
                Community Needs and Government Response
              </h4>
              <p className="text-lg text-gray-400 font-normal">
                Boreholes in Ezimo have not only improved access to clean water
                but have also had a profound effect on the overall development
                of the town. Access to reliable water sources is crucial for the
                community’s daily operations, from agriculture to household
                chores, and has a significant impact on the local economy.
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-2 text-white bg-black/20 border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            {expanded ? 'Show Less' : 'Read Full Blog'} ↓
          </button>
        </div>

        {/* Side Info */}
        <aside className="w-full lg:w-[300px] space-y-8">
          {/* Metadata */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div>
              <h6 className="text-gray-400 text-lg font-normal">
                Publication Date
              </h6>
              <p className="text-white text-lg font-normal">January 16, 2025</p>
            </div>
            <div>
              <h6 className="text-gray-400 text-lg font-normal">Category</h6>
              <p className="text-white text-lg font-normal">General</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div>
              <h6 className="text-gray-400 text-lg font-normal">
                Reading Time
              </h6>
              <p className="text-white text-lg font-normal">10 Min</p>
            </div>
            <div>
              <h6 className="text-gray-400 text-lg font-normal">Author Name</h6>
              <p className="text-white text-lg font-normal">
                Dr. James Okonkwo
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div>
            <p className="text-gray-400 text-lg font-normal mb-3">
              Table of Contents
            </p>
            <ul className="bg-black/10 border border-white/10 p-6 px-10 rounded-lg space-y-4">
              {[
                'Introduction',
                'Background: The Water Challenge in Ezimo',
                'Community Needs and Government Response',
                'Locations of the New Boreholes',
                'Voices from the Community',
                'Impact on Health and Daily Life',
                'Challenges Faced During Construction',
                'The Future of Good Water Supply in Ezimo',
                'Conclusion',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="list-disc list-inside text-white text-lg font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
