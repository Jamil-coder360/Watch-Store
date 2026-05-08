import React from 'react';
import { Clock, Zap, Globe, Users } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Watches Delivered', value: '50k+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Global Retailers', value: '120+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '45k+', icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-3 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
