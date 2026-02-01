import React from 'react';
import { Home, Stethoscope, Droplets, Heart, Moon } from 'lucide-react';

export const About: React.FC = () => {
    const sections = [
        {
            icon: Home,
            title: 'Пространство для восстановления',
            items: [
                'Проживание в комфортабельном двухместном номере',
                'Трёхразовое сбалансированное питание'
            ]
        },
        {
            icon: Stethoscope,
            title: 'Профессиональное сопровождение',
            items: [
                'Консультация эндокринолога',
                'Консультация невропатолога',
                'Приём терапевта',
                'Сеанс репродуктолога',
                'Персональная коуч-сессия'
            ]
        },
        {
            icon: Droplets,
            title: 'Телесные практики обновления',
            items: [
                'Жемчужная ванна',
                'Озоновая процедура',
                'Энергетический массаж тела'
            ]
        },
        {
            icon: Heart,
            title: 'Психоэмоциональная трансформация',
            items: [
                'Ежедневные медитации и практики осознанности',
                'Авторский курс «Осознанное счастье»',
                'Эксклюзивные методические материалы'
            ]
        },
        {
            icon: Moon,
            title: 'Ритуалы глубокой перезагрузки',
            items: [
                'Вечерние прогулки в природе',
                'Пространство тишины и поддержки'
            ]
        }
    ];

    return (
        <section className="py-12 sm:py-14 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 text-primary-600 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
                        <span>Трансформационный ретрит</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-800 mb-3 sm:mb-4">
                        «ВОЗРОЖДЕНИЕ» в Санатории Первая линия
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-sm md:text-base px-2">
                        Путешествие к телесному здоровью, эмоциональной гармонии и новой жизненной энергии.
                        Это не просто отдых — это мягкая, глубокая перезагрузка тела, психики и жизненного сценария.
                    </p>
                </div>

                {/* Program Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-stone-50 border border-stone-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <section.icon className="w-5 h-5 text-primary-700" />
                                </div>
                                <h3 className="text-sm font-bold text-stone-800 leading-tight">{section.title}</h3>
                            </div>
                            <ul className="space-y-1.5">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="text-xs text-stone-600 flex items-start gap-2">
                                        <span className="text-primary-600 mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Results Section */}
                <div className="mt-12 bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">
                        <span>Результат ретрита «Возрождение»</span>
                    </div>
                    <p className="text-stone-700 font-medium mb-6">После программы участники:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mt-2"></span>
                            <span className="text-stone-700">чувствуют легкость в теле и ясность в голове</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mt-2"></span>
                            <span className="text-stone-700">восстанавливают энергию и эмоциональный баланс</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mt-2"></span>
                            <span className="text-stone-700">получают новые стратегии жизни и внутреннюю опору</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mt-2"></span>
                            <span className="text-stone-700">выходят с ощущением «Я заново родился/родилась»</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
