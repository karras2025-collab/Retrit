import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProgram = () => {
    const element = document.getElementById('program');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[52vh] md:h-[60vh] flex items-end overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Ретрит Возрождение на берегу Каспийского моря"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToProgram}
        className="relative z-10 w-full flex flex-col items-center pb-8 cursor-pointer group"
      >
        <span className="text-white/80 text-sm mb-2 group-hover:text-gold-400 transition-colors drop-shadow-lg">
          Подробнее
        </span>
        <ChevronDown
          size={32}
          className="text-white/80 animate-bounce group-hover:text-gold-400 transition-colors drop-shadow-lg"
        />
      </div>
    </section>
  );
};