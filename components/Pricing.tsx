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
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 sticky top-24">
                            <div className="flex items-center gap-2 text-primary-600 mb-4 font-bold tracking-wider uppercase text-sm">
                                <Users size={18} />
                                <span>Всего 25 мест в группе</span>
                            </div>

                            <h2 className="text-4xl font-serif text-stone-900 mb-2">Всё включено</h2>
                            <p className="text-stone-500 mb-8">Полный пакет участия в программе</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-stone-900">78 000 ₽</span>
                                <span className="ml-2 text-stone-500">/ чел</span>
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
                                        <div className="bg-green-100 rounded-full p-1">
                                            <Check size={14} className="text-green-600" />
                                        </div>
                                        <span className="text-stone-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>



                            <Button fullWidth size="lg" onClick={() => setIsModalOpen(true)}>
                                Забронировать место
                            </Button>
                            <p className="text-center text-xs text-stone-400 mt-4">Безопасная оплата через ЮKassa</p>
                        </div>
                    </div>

                    {/* Right: Dates and Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl font-serif text-primary-800 mb-8">Ближайшие даты заездов</h2>

                        <div className="grid gap-6">
                            {DATES.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-primary-700 mb-4 flex items-center gap-2">
                                        <Calendar size={20} />
                                        {item.month}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {item.dates.map((date, dateIdx) => (
                                            <span key={dateIdx} className="px-4 py-2 bg-white text-stone-800 rounded-lg border border-stone-200 text-sm font-medium">
                                                {date}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-primary-700 text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif mb-4">Остались вопросы?</h3>
                                <p className="mb-6 opacity-90">Напишите нам, мы поможем подобрать удобные даты и расскажем подробнее о проживании.</p>
                                <a href={`mailto:${CONTACTS.email}`} className="text-gold-300 hover:text-white underline transition-colors">
                                    {CONTACTS.email}
                                </a>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
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