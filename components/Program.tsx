import React, { useState } from 'react';
import { SCHEDULE } from '../constants';
import { Users, Gift, Target, Sparkles, Check, Heart, Brain, Smile, Shield, MapPin, MessageCircle, Home, Utensils, Stethoscope, Leaf, Activity, Moon } from 'lucide-react';

const targetAudience = [
    "Женщины и мужчины от 25 лет",
    "В состоянии выгорания, кризиса, поиска смысла",
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

const includedSections = [
    {
        icon: Home,
        title: "Пространство для восстановления",
        items: [
            "Проживание в комфортабельном двухместном номере",
            "Трёхразовое сбалансированное питание",
            "Личное сопровождение Софи — с вниманием, заботой и глубоким уважением к вашему темпу",
            "Тёплое пространство принятия, где можно быть собой без давления и ожиданий",
            "Поддержка в моменты усталости, сомнений и эмоциональных перегрузок",
            "Бережное ведение через процессы восстановления и внутреннего перезапуска",
            "Разговоры по душам, которые возвращают ясность, спокойствие и чувство опоры",
            "Присутствие, в котором вы не одни — с мягкой женской поддержкой и любовью",
            "Пространство, где вас видят, слышат и ценят"
        ]
    },
    {
        icon: Stethoscope,
        title: "Профессиональное сопровождение",
        items: [
            "Консультация эндокринолога",
            "Консультация невропатолога",
            "Приём терапевта",
            "Сеанс репродуктолога",
            "Персональная коуч-сессия"
        ]
    },
    {
        icon: Activity,
        title: "Телесные практики обновления",
        items: [
            "Жемчужная ванна",
            "Озоновая процедура",
            "Энергетический массаж тела"
        ]
    },
    {
        icon: Brain,
        title: "Психоэмоциональная трансформация",
        items: [
            "Ежедневные медитации и практики осознанности",
            "Авторский курс «Осознанное счастье»",
            "Эксклюзивные методические материалы"
        ]
    },
    {
        icon: Moon,
        title: "Ритуалы глубокой перезагрузки",
        items: [
            "Вечерние прогулки на природе",
            "Пространство тишины и поддержки"
        ]
    }
];

const finalResults = [
    "чувствуют лёгкость в теле и ясность в голове",
    "восстанавливают энергию и эмоциональный баланс",
    "получают новые стратегии жизни и внутреннюю опору",
    "выходят с ощущением «Я заново родился/родилась»"
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
                    <span className="text-4xl mb-4 block">🌿</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-800 mb-4">
                        Трансформационный ретрит
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif text-gold-600 mb-6">
                        «ВОЗРОЖДЕНИЕ» в Санатории Первая линия
                    </h3>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
                        Путешествие к телесному здоровью, эмоциональной гармонии и новой жизненной энергии.
                        Это не просто отдых — это мягкая, глубокая перезагрузка тела, психики и жизненного сценария.
                    </p>
                </div>

                {/* Cards Grid - For Whom & Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    {/* For Whom Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)]"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 12px 24px -8px rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shadow-inner">
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

                    {/* 10-Day Results Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)]"
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
                            {results.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-stone-600">
                                    <Check className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bonus Card - Full Width */}
                <div
                    className="bg-primary-800 rounded-3xl p-8 md:p-12 mb-16 text-white transition-all duration-500 hover:scale-[1.01]"
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

                {/* Download Program Button */}
                <div className="text-center mb-16">
                    <a
                        href="/10-дневная офлайн-программа в санатории может быть очень глубокой трансформацией для участников.pdf"
                        download
                        className="inline-flex items-center gap-4 bg-primary-800 hover:bg-primary-700 text-white px-10 py-5 rounded-2xl text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        style={{
                            boxShadow: '0 20px 40px -10px rgba(34, 87, 70, 0.4)',
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Скачать программу ретрита
                    </a>
                </div>

                {/* Final Quote */}
                <div className="text-center max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-10 md:p-14 border border-stone-200 transition-all duration-300 hover:border-gold-300 hover:shadow-[0_20px_50px_-15px_rgba(34,87,70,0.2)]"
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