import React, { useState } from 'react';
import { DATES, CONTACTS } from '../constants';
import { Button } from './Button';
import { BookingModal } from './BookingModal';
import { Calendar, Check, Users } from 'lucide-react';

const RETREAT_PRICE = 78000;

export const Pricing: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="pricing" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left: Pricing Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-stone-200 sticky top-24 transition-all duration-300 hover:border-gold-300 hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)]">
                            <div className="flex items-center gap-2 text-primary-700 mb-4 font-bold tracking-wider uppercase text-xs sm:text-sm">
                                <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <span>Всего 10 мест в группе</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-2">Всё включено</h2>
                            <p className="text-stone-500 mb-6 sm:mb-8 text-sm sm:text-base">Полный пакет участия в программе</p>

                            <div className="flex items-baseline mb-6 sm:mb-8">
                                <span className="text-4xl sm:text-5xl font-bold text-stone-900">78 000 ₽</span>
                                <span className="ml-2 text-stone-500 text-sm sm:text-base">/ чел</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Проживание в 2-х местном номере",
                                    "3-разовое здоровое питание",
                                    "Полная программа практик (10 дней)",
                                    "Медицинские консультации",
                                    "Массажи и СПА процедуры",
                                    "Сопровождение кураторов"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="bg-primary-100 rounded-full p-1">
                                            <Check size={14} className="text-primary-800" />
                                        </div>
                                        <span className="text-stone-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>



                            <Button fullWidth size="lg" onClick={() => setIsModalOpen(true)}>
                                Забронировать место
                            </Button>
                            <p className="text-center text-xs text-stone-500 mt-4">Безопасная оплата через ЮKassa</p>
                        </div>
                    </div>

                    {/* Right: Dates and Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-primary-800 mb-6 sm:mb-10">Ближайшие даты заездов</h2>

                        <div className="grid gap-6">
                            {DATES.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)] transition-all duration-300 border border-stone-100 hover:border-gold-300">
                                    <h3 className="text-2xl font-bold text-primary-700 mb-6 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <Calendar size={24} className="text-primary-600" />
                                        </div>
                                        {item.month}
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {item.dates.map((date, dateIdx) => (
                                            <span key={dateIdx} className="px-6 py-3 bg-gradient-to-br from-stone-50 to-stone-100 text-stone-800 rounded-xl border border-stone-200 text-lg font-bold hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-default">
                                                {date}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                price={RETREAT_PRICE}
            />
        </section>
    );
};