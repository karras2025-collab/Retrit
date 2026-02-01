import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-primary-800 backdrop-blur-sm'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logos Area */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Sanatorium Logo */}
            <a
              href="https://pervayalinia.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className={`font-serif font-bold tracking-widest uppercase text-xs sm:text-sm lg:text-base leading-none ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
                ПЕРВАЯ ЛИНИЯ
              </span>
              <span className={`text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-wider leading-none mt-0.5 ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                Санаторий
              </span>
            </a>

            <div className={`h-8 w-px ${isScrolled ? 'bg-stone-300' : 'bg-white/30'}`}></div>

            {/* Sofi Rumi Logo */}
            <div className="flex flex-col items-center justify-center">
              <span className={`font-serif font-bold tracking-widest uppercase text-xs sm:text-sm lg:text-base leading-none ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
                СОФИ РУМИ
              </span>
              <span className={`text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-wider leading-none mt-0.5 ${isScrolled ? 'text-stone-500' : 'text-stone-300'} hidden sm:block`}>
                Ретритный центр тела и души
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Single Row */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors leading-none ${isScrolled ? 'text-stone-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:89260259669"
              className={`flex items-center gap-1.5 font-semibold text-sm leading-none ${isScrolled ? 'text-primary-700' : 'text-white'}`}
            >
              <Phone size={14} />
              <span>+7 (926) 025-96-69</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-3 px-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-800 text-sm font-medium block py-2 border-b border-stone-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:89260259669"
            className="flex items-center gap-2 text-primary-700 font-bold text-sm py-2"
          >
            <Phone size={16} />
            <span>+7 (926) 025-96-69</span>
          </a>
        </div>
      )}
    </header>
  );
};