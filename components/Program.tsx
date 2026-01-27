import React, { useState } from 'react';
import { SCHEDULE } from '../constants';
import { Users, Gift, Target, Sparkles, Check, Heart, Brain, Smile, Shield, MapPin, MessageCircle } from 'lucide-react';

const targetAudience = [
    "Женщины и мужчины от 25 лет",
    "В состоянии выгорания, кризиса, поиска смысла",
    "Предприниматели, топ-менеджеры, коучи, психологи",
    "Готовые инвестировать в здоровье и трансформацию",
    "Люди с тревогой и паническими атаками",
    "Эмоциональное выгорание",
    "Хронический стресс",
    "Чувство пустоты и потери смысла",
    "Желание обрести внутреннее счастье"
];

const bonusItems = [
    "30-дневное онлайн сопровождение",
    "Чек-лист анти-паники",
    "Аудио-медитации на 21 день",
    "Закрытый чат поддержки"
];

const results = [
    { icon: Shield, text: "Научитесь останавливать панические атаки" },
    { icon: Brain, text: "Перезагрузите и восстановите нервную систему" },
    { icon: Heart, text: "Почувствуете глубокое спокойствие" },
    { icon: Sparkles, text: "Укрепите свою ценность и ценность жизни" },
    { icon: MapPin, text: "Получите персональный план устойчивой счастливой жизни" },
    { icon: MessageCircle, text: "Понимать свои эмоции" },
    { icon: Smile, text: "Начнёте испытывать больше счастья и устойчивости" },
    { icon: Heart, text: "Обретёте душевное и телесное спокойствие" }
];

export const Program: React.FC = () => {
    const [activeDay, setActiveDay] = useState<number | null>(1);

    const toggleDay = (day: number) => {
        setActiveDay(activeDay === day ? null : day);
    };

    return (
        <section id="program" className="py-24 bg-cream relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d9a379_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Main Title */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-800 mb-6">
                        Трансформационный ретрит «Возрождение»
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
                        Уникальное сочетание санаторно-курортного лечения, оздоровительных процедур и глубоких энергетических практик
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    {/* For Whom Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 12px 24px -8px rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-inner">
                                <Users className="w-7 h-7 text-primary-700" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif text-primary-800">Для кого</h3>
                        </div>
                        <ul className="space-y-3">
                            {targetAudience.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-stone-600">
                                    <span className="w-2 h-2 bg-gold-500 rounded-full mt-2.5 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Results Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 12px 24px -8px rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center shadow-inner">
                                <Target className="w-7 h-7 text-gold-700" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif text-primary-800">🎯 Результат за 10 дней</h3>
                        </div>
                        <ul className="space-y-3">
                            {results.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <li key={idx} className="flex items-start gap-3 text-lg text-stone-600">
                                        <Check className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                                        {item.text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>

                {/* Bonus Card - Full Width */}
                <div
                    className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 mb-16 text-white transition-all duration-500 hover:scale-[1.01]"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                                <Gift className="w-8 h-8 text-gold-300" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif">🌸 БОНУС: Программа после ретрита</h3>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {bonusItems.map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <p className="text-lg font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Schedule Accordion */}
                <div
                    className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden mb-16"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 12px 24px -8px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <div className="p-8 bg-primary-700 text-white flex justify-between items-center flex-wrap gap-4">
                        <h3 className="text-2xl md:text-3xl font-serif">Расписание по дням</h3>
                        <span className="text-primary-100 text-base">Нажмите на день, чтобы раскрыть детали</span>
                    </div>

                    <div className="divide-y divide-stone-100">
                        {SCHEDULE.map((day) => (
                            <div key={day.day} className="group">
                                <button
                                    onClick={() => toggleDay(day.day)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-stone-50 transition-all duration-300 focus:outline-none"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${activeDay === day.day ? 'bg-primary-600 text-white scale-110' : 'bg-stone-100 text-stone-500'
                                            }`}>
                                            {day.day}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-stone-800">{day.title}</h4>
                                            <p className="text-sm text-stone-500 uppercase tracking-wide mt-1">Цель: {day.goal}</p>
                                        </div>
                                    </div>
                                    <span className={`transform transition-transform duration-300 text-stone-400 text-xl ${activeDay === day.day ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-out ${activeDay === day.day ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 pb-6 pl-24">
                                        <ul className="space-y-3">
                                            {day.practices.map((practice, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-lg text-stone-600">
                                                    <span className="w-2 h-2 rounded-full bg-primary-400 mt-2.5 shrink-0"></span>
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

                {/* Final Quote */}
                <div className="text-center max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-10 md:p-14 border border-stone-200"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Sparkles className="w-12 h-12 text-gold-500 mx-auto mb-6" />
                        <blockquote className="text-2xl md:text-3xl font-serif text-primary-800 leading-relaxed mb-6">
                            💎 Ретрит «Возрождение» — это пространство, где тело исцеляется, эмоции освобождаются, а сознание создаёт новую реальность.
                        </blockquote>
                        <p className="text-xl md:text-2xl text-stone-600 font-medium">
                            Это не отдых. Это новая точка отсчёта вашей жизни.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};