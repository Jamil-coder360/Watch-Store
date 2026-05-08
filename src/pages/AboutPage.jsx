import React from 'react';
import AboutHero from '../component/about/AboutHero';
import AboutStats from '../component/about/AboutStats';
import AboutHeritage from '../component/about/AboutHeritage';
import AboutValues from '../component/about/AboutValues';
import AboutCTA from '../component/about/AboutCTA';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <AboutHero />
      <AboutStats />
      <AboutHeritage />
      <AboutValues />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
