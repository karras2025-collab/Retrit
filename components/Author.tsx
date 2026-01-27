import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Eye, Star, Gem } from 'lucide-react';

const slides = [
  {
    icon: Sparkles,
    title: "✨ София Ибрагимова — проводник к Возрождению",
    content: `Меня зовут София Ибрагимова. Я основатель Международного Восточного Университета Коучинга, коуч MSI и создатель пространства Sofi Rumi.

Более 10 лет я сопровождаю людей в их глубинных переходах — из боли к любви, из кризиса к смыслу, из выживания к осознанной жизни.

Я помогла более 1000 женщинам почувствовать любовь к себе, к жизни и к Богу.`,
    stats: [
      "10+ лет профессиональной практики",
      "10+ лет международных тренингов и ретритов",
      "1000+ трансформированных клиенток"
    ]
  },
  {
    icon: Heart,
    title: "🌿 Мой путь",
    content: `Более 10 лет я иду рядом с людьми на их пути внутреннего пробуждения, соединяя знания восточной мудрости, коучинга, психологии и духовных практик.

За эти годы я провела сотни тренингов, программ и ретритов, создавая пространства, где люди могут вспомнить, кто они есть на самом деле.

Более 1000 женщин прошли через мои программы и почувствовали любовь к себе, к людям, к своей жизни и к Богу.`
  },
  {
    icon: Star,
    title: "🌸 Моя миссия",
    content: `Моя миссия — привести человека в состояние глубокого принятия себя и ясного понимания своих жизненных смыслов.

Я верю, что внутри каждого человека уже есть ответы, сила и свет. Моя задача — помочь этому свету проснуться.

«Возрождение» — это пространство, где ты возвращаешься к себе. И твоя новая жизнь начинается здесь.`
  },
  {
    icon: Eye,
    title: "🧿 Мой подход",
    content: `Я работаю на пересечении:`,
    list: [
      "Древних восточных знаний",
      "Современного коучинга и нейропсихологии",
      "Телесных и энергетических практик",
      "Духовного сопровождения и практик осознанности"
    ],
    footer: "Мои программы — это не обучение. Это инициация в новую версию себя."
  },
  {
    icon: Sparkles,
    title: "🌙 Почему «Возрождение»",
    content: `Ретрит «Возрождение» родился как отражение моего пути. Я знаю, каково это — терять себя, искать смысл, проходить через кризисы и заново собирать свою душу по частям.

И я знаю, как выглядит момент, когда человек говорит: «Я вернулся к себе. Я живу. Я люблю. Я чувствую смысл».

Именно для этого я создаю свои пространства.`
  },
  {
    icon: Gem,
    title: "💎 Твоя уникальная формула трансформации",
    content: `Я вижу мир, где люди живут из любви, осознанности и внутренней силы. Где женщины чувствуют свою ценность и священную природу. Где человек знает свои смыслы и живёт не из страха, а из света.`,
    formula: "Тело → Эмоции → Сознание → Энергия → Новая реальность",
    quote: "Ты не сломан. Ты в пути. И «Возрождение» — это твой дом на этом пути."
  }
];

export const Author: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section id="author" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img
                src="/sofia-ibragimova.jpg"
                alt="София Ибрагимова"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-gold-400 rounded-2xl hidden md:block"></div>
          </div>

          {/* Content Slider */}
          <div className="w-full lg:w-3/5">
            <div
              className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 h-[520px] flex flex-col"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02)',
                transform: 'perspective(1000px) rotateX(1deg)',
              }}
            >

              {/* Slide Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-primary-800">
                  {slide.title}
                </h3>
              </div>

              {/* Slide Content - Fixed height with scroll if needed */}
              <div className="flex-grow overflow-y-auto pr-2">
                <p className="text-stone-600 text-base md:text-lg leading-relaxed whitespace-pre-line mb-4">
                  {slide.content}
                </p>

                {slide.list && (
                  <ul className="space-y-2 mb-4">
                    {slide.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-stone-600">
                        <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {slide.footer && (
                  <p className="text-primary-700 font-medium italic mt-4">{slide.footer}</p>
                )}

                {slide.stats && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-3 text-center shadow-sm">
                        <p className="text-sm text-stone-600">{stat}</p>
                      </div>
                    ))}
                  </div>
                )}

                {slide.formula && (
                  <div className="bg-gradient-to-r from-primary-100 to-gold-100 rounded-xl p-4 mt-4 text-center shadow-sm">
                    <p className="text-primary-800 font-bold text-lg">{slide.formula}</p>
                  </div>
                )}

                {slide.quote && (
                  <blockquote className="border-l-4 border-gold-400 pl-4 mt-4 italic text-stone-700 bg-stone-50 py-2 rounded-r-lg">
                    {slide.quote}
                  </blockquote>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-stone-200">
                <button
                  onClick={prevSlide}
                  className="flex items-center gap-2 text-stone-500 hover:text-primary-700 transition-colors px-3 py-2 rounded-lg hover:bg-stone-50"
                >
                  <ChevronLeft size={20} />
                  <span className="text-sm font-medium">Назад</span>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide
                          ? 'bg-primary-600 w-8'
                          : 'bg-stone-300 hover:bg-stone-400 w-2.5'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center gap-2 text-stone-500 hover:text-primary-700 transition-colors px-3 py-2 rounded-lg hover:bg-stone-50"
                >
                  <span className="text-sm font-medium">Далее</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};