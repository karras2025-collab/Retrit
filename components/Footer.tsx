import React from 'react';
import { CONTACTS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-stone-900 text-stone-300 py-16">
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
                                <a href={`tel:${CONTACTS.phone}`}>+7 (926) 025-96-69</a>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail size={16} />
                                <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
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
                            <li><a href="/privacy.html" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                            <li><a href="/consent.html" className="hover:text-white transition-colors">Согласие на обработку данных</a></li>
                        </ul>
                    </div>

                    {/* CTA Small */}
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Оставайтесь на связи</h4>
                        <p className="text-xs mb-4">Подпишитесь на новости о новых ретритах</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email" className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-primary-500" />
                            <button className="bg-primary-600 text-white px-3 py-2 rounded text-sm hover:bg-primary-700">OK</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 text-center text-xs opacity-50">
                    <p>&copy; {new Date().getFullYear()} Sofi Rumi. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};