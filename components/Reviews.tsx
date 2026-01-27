import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-24 bg-gradient-to-b from-stone-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-primary-800 mb-6">
                    Истории участников
                </h2>
                <p className="text-center text-lg md:text-xl text-stone-500 mb-16 max-w-2xl mx-auto">
                    Отзывы женщин, прошедших программу «Возрождение»
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 md:p-10 rounded-3xl relative flex flex-col h-full border border-stone-100 shadow-lg hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)] hover:border-gold-300 transition-all duration-300">
                            <Quote className="text-gold-400 w-12 h-12 mb-6" />

                            {review.isVideo && review.videoUrl ? (
                                <div className="mb-8 relative rounded-2xl overflow-hidden bg-stone-200 aspect-video">
                                    <video
                                        src={review.videoUrl}
                                        controls
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                    >
                                        Ваш браузер не поддерживает видео.
                                    </video>
                                </div>
                            ) : null}

                            <p className="text-lg md:text-xl text-stone-700 italic mb-8 flex-grow leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-stone-200">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-stone-900">{review.name}</p>
                                    <p className="text-base text-stone-500">Участница ретрита</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};