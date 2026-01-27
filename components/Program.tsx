import React, { useState } from 'react';
import { SCHEDULE } from '../constants';

export const Program: React.FC = () => {
    const [activeDay, setActiveDay] = useState<number | null>(1);

    const toggleDay = (day: number) => {
        setActiveDay(activeDay === day ? null : day);
    };

    return (
        <section id="program" className="py-20 bg-cream relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d9a379_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Concept Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-primary-800 mb-6">Программа курса</h2>
                    <p className="text-lg text-stone-600 mb-10">
                        Уникальное сочетание санаторно-курортного лечения, оздоровительных процедур и глубоких энергетических практик. Мы работаем на уровне тела, эмоций и сознания.
                    </p>
                </div>

                {/* Accordion Schedule */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 bg-primary-700 text-white flex justify-between items-center flex-wrap gap-4">
                        <h3 className="text-2xl font-serif">Расписание по дням</h3>
                        <span className="text-primary-100 text-sm">Нажмите на день, чтобы раскрыть детали</span>
                    </div>

                    <div className="divide-y divide-stone-100">
                        {SCHEDULE.map((day) => (
                            <div key={day.day} className="group">
                                <button
                                    onClick={() => toggleDay(day.day)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${activeDay === day.day ? 'bg-primary-600 text-white' : 'bg-stone-100 text-stone-500'
                                            }`}>
                                            {day.day}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-stone-800">{day.title}</h4>
                                            <p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Цель: {day.goal}</p>
                                        </div>
                                    </div>
                                    <span className={`transform transition-transform duration-300 text-stone-400 ${activeDay === day.day ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDay === day.day ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <ul className="space-y-2">
                                            {day.practices.map((practice, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-stone-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0"></span>
                                                    {practice}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};