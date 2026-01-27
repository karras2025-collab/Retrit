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
    <section className="relative h-[65vh] flex items-end overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-900 to-transparent"></div>
      </div>

      {/* Right Logo - Sofi Rumi (круглое, правый нижний угол) */}
      <div className="absolute right-4 md:right-12 bottom-16 md:bottom-20 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-xl">
          <img
            src="/logo-sofi-rumi.png"
            alt="Sofi Rumi - Ретритный центр"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute top-20 md:top-24 right-4 md:right-6 z-20 p-3 min-w-[48px] min-h-[48px] bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors flex items-center justify-center"
        aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Clickable overlay for "УЗНАТЬ ПОДРОБНОСТИ" button in image/video */}
      <button
        onClick={scrollToProgram}
        className="absolute left-[6%] bottom-[18%] w-[280px] h-[55px] z-10 cursor-pointer hover:bg-white/10 rounded transition-colors"
        aria-label="Узнать подробности"
      />

      {/* Scroll Indicator */}
      <div
        onClick={scrollToProgram}
        className="relative z-10 w-full flex flex-col items-center pb-8 cursor-pointer group"
      >
        <span className="text-white/70 text-sm mb-2 group-hover:text-gold-400 transition-colors">
          Подробнее
        </span>
        <ChevronDown
          size={32}
          className="text-white/70 animate-bounce group-hover:text-gold-400 transition-colors"
        />
      </div>
    </section>
  );
};