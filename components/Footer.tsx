import React from 'react';
import { CONTACTS } from '../constants';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-stone-900 text-stone-300">

            {/* Questions Section */}
            <div className="bg-primary-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        Остались вопросы?
                    </h3>
                    <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                        Свяжитесь с нами — мы с радостью ответим на все ваши вопросы о ретрите
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/79260259669"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
                                <li className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Phone size={16} />
                                    <a href="tel:+79260259669">+7 (926) 025-96-69</a>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition-colors">
                                    <MessageCircle size={16} />
                                    <a href="https://wa.me/79260259669" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Send size={16} />
                                    <a href="https://t.me/Sofia_Rumi" target="_blank" rel="noopener noreferrer">@Sofia_Rumi</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MapPin size={16} className="shrink-0" />
                                    <span>г. Каспийск, Санаторий «Первая линия»</span>
                                </li>
                            </ul>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Информация</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/offer.html" className="hover:text-white transition-colors">Публичная оферта</a></li>
                                <li><a href="/privacy.html" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                                <li><a href="/consent.html" className="hover:text-white transition-colors">Согласие на обработку данных</a></li>
                                <li><a href="/messaging-consent.html" className="hover:text-white transition-colors">Согласие на рассылку</a></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Мы в соцсетях</h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://wa.me/79260259669"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                                >
                                    <MessageCircle size={18} className="text-white" />
                                </a>
                                <a
                                    href="https://t.me/Sofia_Rumi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
                                >
                                    <Send size={18} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-800 pt-8 text-center text-xs opacity-50">
                        <p>&copy; {new Date().getFullYear()} Sofi Rumi. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};