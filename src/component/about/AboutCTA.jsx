import React from 'react';

const AboutCTA = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Ready to find your perfect timepiece?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Join our exclusive inner circle and be the first to know about new arrivals and limited editions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-950 text-white rounded-full font-bold hover:scale-105 transition-transform">
            Browse Collection
          </button>
          <button className="px-8 py-4 border border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Contact Concierge
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
