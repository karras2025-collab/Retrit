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
    <section className="relative flex items-end overflow-hidden pt-14 min-h-[60vh] md:min-h-screen bg-stone-900" style={{ height: 'calc(100svh - 0px)' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-cover"
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute top-20 md:top-28 right-3 md:right-6 z-20 p-2.5 md:p-3 min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px] bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 active:bg-black/70 transition-colors flex items-center justify-center touch-manipulation"
        aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
      >
        {isMuted ? <VolumeX size={20} className="md:w-6 md:h-6" /> : <Volume2 size={20} className="md:w-6 md:h-6" />}
      </button>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToProgram}
        className="relative z-10 w-full flex flex-col items-center pb-6 md:pb-8 cursor-pointer group touch-manipulation"
      >
        <span className="text-white/90 text-xs md:text-sm mb-1.5 md:mb-2 group-hover:text-gold-400 transition-colors drop-shadow-lg font-medium">
          Подробнее
        </span>
        <ChevronDown
          size={28}
          className="text-white/90 animate-bounce group-hover:text-gold-400 transition-colors drop-shadow-lg md:w-8 md:h-8"
        />
      </div>
    </section>
  );
};