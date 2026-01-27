import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Author: React.FC = () => {
  return (
    <section id="author" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image / Video Placeholder */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img
                src="/sofia-ibragimova.jpg"
                alt="София Ибрагимова"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-gold-300 rounded-2xl hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">Автор и ведущая</h4>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-800 mb-6">София Ибрагимова</h2>

            <p className="text-stone-600 text-lg mb-6 leading-relaxed italic border-l-4 border-primary-600 pl-4">
              «Я верю, что внутри каждого человека уже есть ответы, сила и свет. Моя задача — помочь этому свету проснуться.»
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-stone-600">
                Основатель Международного Восточного Университета Коучинга, мастер-коуч с 10-летней практикой. Создатель трансформационных ретритов и программ для женщин.
              </p>
              <p className="text-stone-600">
                Помогла более <span className="font-bold text-primary-700">1000 женщинам</span> обрести любовь к себе, своей жизни и духовному пути.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-700 shrink-0" />
                <span className="text-stone-600 text-sm">10+ лет профессиональной практики</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-700 shrink-0" />
                <span className="text-stone-600 text-sm">Сотни проведенных тренингов</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-700 shrink-0" />
                <span className="text-stone-600 text-sm">Глубинные методики востока и запада</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-700 shrink-0" />
                <span className="text-stone-600 text-sm">Авторская программа "Sofi Rumi"</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};