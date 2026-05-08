import React from 'react';
import heroImg from '../../assets/about_hero.png';

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Luxury Watch" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Crafting <span className="text-amber-400">Time</span> Since 2009
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
          We don't just sell watches; we curate legacies. Discover the intersection of precision engineering and artistic expression.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
      `}} />
    </section>
  );
};

export default AboutHero;
