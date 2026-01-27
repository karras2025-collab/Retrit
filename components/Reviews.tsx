import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif text-center text-primary-800 mb-16">
                    Истории участников
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-stone-50 p-8 rounded-2xl relative flex flex-col h-full border border-stone-100 hover:border-gold-300 transition-colors">
                            <Quote className="text-gold-400 w-10 h-10 mb-4" />

                            {review.isVideo && review.videoUrl ? (
                                <div className="mb-6 relative rounded-xl overflow-hidden bg-stone-200 aspect-video">
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

                            <p className="text-stone-700 italic mb-6 flex-grow leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900">{review.name}</p>
                                    <p className="text-xs text-stone-500">Участница ретрита</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};