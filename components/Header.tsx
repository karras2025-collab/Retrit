import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "О программе", href: "#program" },
    { name: "Автор", href: "#author" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Даты и цены", href: "#pricing" },
    { name: "Контакты", href: "#footer" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-primary-900/70 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logos Area */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Simulating Sanatorium Logo */}
            <div className="flex flex-col items-center">
              <div className={`font-serif font-bold tracking-widest leading-tight uppercase ${isScrolled ? 'text-sm text-primary-700' : 'text-base text-white'}`}>
                Первая линия
              </div>
              <span className={`text-[10px] uppercase tracking-wider ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>Санаторий</span>
            </div>

            <div className={`h-8 w-px ${isScrolled ? 'bg-stone-300' : 'bg-white/30'}`}></div>

            {/* Simulating Sofi Rumi Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Heart className="w-5 h-5 text-gold-600 fill-gold-300" />
              </div>
              <div>
                <div className={`font-serif font-bold leading-none text-sm sm:text-base ${isScrolled ? 'text-stone-800' : 'text-white'}`}>SOFI RUMI</div>
                <div className={`text-[8px] sm:text-[9px] uppercase tracking-widest ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>Ретритный центр тела и души</div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-stone-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:89260259669"
              className={`flex items-center gap-2 font-semibold ${isScrolled ? 'text-primary-700' : 'text-gold-300'}`}
            >
              <Phone size={16} />
              <span>+7 (926) 025-96-69</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-800 text-lg font-medium block py-2 border-b border-stone-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:89260259669"
            className="text-primary-700 font-bold block py-2"
          >
            Позвонить
          </a>
        </div>
      )}
    </header>
  );
};