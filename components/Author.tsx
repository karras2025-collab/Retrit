import React from 'react';
import { CheckCircle2, Star, Award, Users, Sparkles } from 'lucide-react';

export const Author: React.FC = () => {
  return (
    <section id="author" className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image with decorative elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img
                src="/sofia-ibragimova.jpg"
                alt="София Ибрагимова"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-gold-400 rounded-2xl hidden md:block"></div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-800">1000+</p>
                  <p className="text-sm text-stone-500">участниц</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="text-gold-600 font-semibold uppercase tracking-widest text-sm">Автор и ведущая</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-800 mb-8">
              София Ибрагимова
            </h2>

            <blockquote className="text-xl md:text-2xl text-stone-700 mb-8 leading-relaxed italic border-l-4 border-gold-400 pl-6">
              «Я верю, что внутри каждого человека уже есть ответы, сила и свет. Моя задача — помочь этому свету проснуться.»
            </blockquote>

            <div className="space-y-5 mb-10">
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                Основатель Международного Восточного Университета Коучинга, мастер-коуч с 10-летней практикой.
              </p>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                Создатель трансформационных ретритов и программ для женщин. Помогла более <span className="font-bold text-primary-700">1000 женщинам</span> обрести любовь к себе и своей жизни.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary-700" />
                </div>
                <span className="text-stone-700 text-base font-medium">10+ лет профессиональной практики</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-primary-700" />
                </div>
                <span className="text-stone-700 text-base font-medium">Сотни проведённых тренингов</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-primary-700" />
                </div>
                <span className="text-stone-700 text-base font-medium">Глубинные методики востока и запада</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary-700" />
                </div>
                <span className="text-stone-700 text-base font-medium">Авторская программа «Софии Руми»</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};