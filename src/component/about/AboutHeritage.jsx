import React from 'react';
import heritageImg from '../../assets/heritage.png';

const AboutHeritage = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            Our Heritage
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-amber-500"></span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Founded in the heart of London, our journey began with a simple passion: to bring the world's most exceptional timepieces to those who appreciate the finer things in life.
            </p>
            <p>
              Over the past 15 years, we have grown from a boutique workshop into a global destination for watch enthusiasts. Our curators travel the globe, from the valleys of Switzerland to the workshops of Japan, seeking out perfection.
            </p>
            <p>
              Every watch in our collection tells a story—of innovation, tradition, and the relentless pursuit of precision. We are proud to be part of your story.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl blur-3xl"></div>
          <img 
            src={heritageImg} 
            alt="Heritage Craftsmanship" 
            className="relative z-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeritage;
