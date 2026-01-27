import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProgram = () => {
    const element = document.getElementById('program');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-end overflow-hidden pt-24" style={{ height: 'calc(100vh - 0px)' }}>
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

      {/* Left Logo - Санаторий Первая Линия */}
      <div className="absolute left-4 md:left-8 lg:left-12 bottom-[45%] z-10">
        <img
          src="/logo-sanatorium.jpg"
          alt="Санаторий Первая Линия"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl"
        />
      </div>

      {/* Right Logo - Sofi Rumi */}
      <div className="absolute right-4 md:right-8 lg:right-12 bottom-[45%] z-10">
        <img
          src="/logo-sofi-rumi.png"
          alt="Sofi Rumi - Ретритный центр"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl"
        />
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