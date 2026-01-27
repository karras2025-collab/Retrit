import React, { useState, useRef } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToProgram = () => {
    const element = document.getElementById('program');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-14">
      {/* Mobile: aspect ratio container, Desktop: full viewport */}
      <div className="relative md:h-screen md:min-h-[600px]">
        {/* Background Video */}
        <div className="relative md:absolute md:inset-0 z-0">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video md:aspect-auto md:h-full md:object-cover"
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
        </div>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute top-20 md:top-28 right-3 md:right-6 z-20 p-2.5 md:p-3 min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px] bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 active:bg-black/70 transition-colors flex items-center justify-center touch-manipulation"
          aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
        >
          {isMuted ? <VolumeX size={20} className="md:w-6 md:h-6" /> : <Volume2 size={20} className="md:w-6 md:h-6" />}
        </button>

        {/* CTA Buttons */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-[25%] md:pb-[20%]">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#program"
              className="px-8 py-4 bg-primary-800 text-white text-lg font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Узнать подробнее
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-gold-400 text-stone-900 text-lg font-semibold rounded-full hover:bg-gold-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Забронировать место
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={scrollToProgram}
          className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center cursor-pointer group touch-manipulation"
        >
          <span className="text-white/90 text-xs md:text-sm mb-1.5 md:mb-2 group-hover:text-gold-400 transition-colors drop-shadow-lg font-medium">
            Подробнее
          </span>
          <ChevronDown
            size={28}
            className="text-white/90 animate-bounce group-hover:text-gold-400 transition-colors drop-shadow-lg md:w-8 md:h-8"
          />
        </div>
      </div>
    </section>
  );
};