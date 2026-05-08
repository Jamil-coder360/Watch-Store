import React from 'react';
import { Award, ShieldCheck, Clock } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      title: "Uncompromising Quality",
      description: "Every timepiece in our collection undergoes rigorous testing to ensure it meets the highest standards of horological excellence.",
      icon: <Award className="text-amber-500" />
    },
    {
      title: "Authenticity Guaranteed",
      description: "We work directly with master watchmakers and authorized distributors to guarantee the 100% authenticity of every watch.",
      icon: <ShieldCheck className="text-amber-500" />
    },
    {
      title: "Timeless Design",
      description: "Our curation process focuses on pieces that transcend trends, offering beauty that lasts for generations.",
      icon: <Clock className="text-amber-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-16">The Principles That Drive Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amber-500/40 transition-colors">
                {React.cloneElement(value.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
