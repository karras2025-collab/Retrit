import React from 'react';
import { CONTACTS } from '../constants';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-stone-900 text-stone-300">

            {/* Questions Section */}
            <div className="bg-primary-800 py-12 sm:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
                        Остались вопросы?
                    </h3>
                    <p className="text-base sm:text-lg text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Свяжитесь с нами — мы с радостью ответим на все ваши вопросы о ретрите
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/79260259669"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-primary-800 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <MessageCircle size={24} />
                            WhatsApp
                        </a>
                        <a
                            href="https://t.me/Sofia_Rumi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <Send size={24} />
                            Telegram
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        {/* Brand */}
                        <div>
                            <h3 className="text-white text-xl font-serif mb-4">Возрождение</h3>
                            <p className="text-sm opacity-70 mb-6">
                                Трансформационный оздоровительный курс в санатории «Первая линия» под руководством Софии Ибрагимовой.
                            </p>
                        </div>

                        {/* Contacts */}
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Контакты</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <Phone size={16} className="shrink-0 mt-0.5" />
                                    <a href="tel:+79260259669">+7 (926) 025-96-69</a>
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <MessageCircle size={16} className="shrink-0 mt-0.5" />
                                    <a href="https://wa.me/79260259669" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <Send size={16} className="shrink-0 mt-0.5" />
                                    <a href="https://t.me/Sofia_Rumi" target="_blank" rel="noopener noreferrer">@Sofia_Rumi</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="shrink-0 mt-0.5" />
                                    <span>г. Каспийск, Санаторий «Первая линия»</span>
                                </li>
                            </ul>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Информация</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/offer.html" className="hover:text-white transition-colors">Публичная оферта</a></li>
                                <li><a href="/privacy.html" className="hover:text-white transition-colors">Политика защиты и обработки персональных данных и использования файлов cookie</a></li>
                                <li><a href="/consent.html" className="hover:text-white transition-colors">Согласие на обработку данных</a></li>
                                <li><a href="/messaging-consent.html" className="hover:text-white transition-colors">Согласие на рассылку</a></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Мы в соцсетях</h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://t.me/coachmsi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram канал"
                                    className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
                                >
                                    <Send size={18} className="text-white" />
                                </a>
                                <a
                                    href="https://vk.ru/sofia_coach_msi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="ВКонтакте"
                                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.53-2.05-1.727-1.033-1.01-1.49-1.147-1.744-1.147-.357 0-.46.102-.46.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.042-2.763-5.32-2.763-5.785 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.492 2.303 4.675 2.898 4.675.221 0 .322-.102.322-.66V9.72c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.745c.373 0 .508.203.508.644v3.473c0 .373.17.508.271.508.221 0 .407-.135.814-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.187.305-.255.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.475-.085.72-.576.72z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* IP Info Block */}
                    <div className="border-t border-stone-800 pt-8 mb-8">
                        <div className="text-center text-sm text-stone-400 space-y-1">
                            <p className="font-semibold text-stone-300">Индивидуальный предприниматель:</p>
                            <p>Ибрагимова София Алиевна</p>
                            <p>ИНН: 050501504988 | ОГРНИП: 317774600430518</p>
                            <p>Email: <a href="mailto:sofi_rumi@mail.ru" className="hover:text-white transition-colors">sofi_rumi@mail.ru</a> | Тел: <a href="tel:+79260259669" className="hover:text-white transition-colors">+7 (926) 025-96-69</a></p>
                        </div>
                    </div>

                    <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-400">
                        <p>&copy; {new Date().getFullYear()} Sofi Rumi. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};