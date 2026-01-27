import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
    "/gallery-9.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
  ];

  // Дублируем массив для бесшовного цикла
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-primary-800">
          Фото галерея Санатория
        </h2>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative w-full">
        <div
          className="flex gap-4 animate-scroll"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedImages.map((src, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-80 h-56 md:w-96 md:h-64 overflow-hidden rounded-xl group"
            >
              <img
                src={src}
                alt={`Санаторий Первая линия ${(idx % images.length) + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};