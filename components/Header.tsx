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
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logos Area */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Sanatorium Logo */}
            <a
              href="https://pervayalinia.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start hover:opacity-80 transition-opacity"
            >
              <span className={`font-serif font-bold tracking-widest uppercase text-[10px] sm:text-xs lg:text-base leading-tight ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
                ПЕРВАЯ ЛИНИЯ
              </span>
              <span className={`text-[8px] sm:text-[9px] lg:text-xs uppercase tracking-wider leading-tight ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                Санаторий
              </span>
            </a>

            <div className={`h-6 sm:h-8 w-px ${isScrolled ? 'bg-stone-300' : 'bg-white/30'}`}></div>

            {/* Sofi Rumi Logo */}
            <div className="flex flex-col items-start">
              <span className={`font-serif font-bold tracking-widest uppercase text-[10px] sm:text-xs lg:text-base leading-tight ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
                СОФИ РУМИ
              </span>
              <span className={`text-[8px] sm:text-[9px] lg:text-xs uppercase tracking-wider leading-tight ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                Ретритный центр
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`h-full flex items-center px-3 xl:px-4 text-sm lg:text-base font-medium uppercase tracking-wide transition-colors ${isScrolled ? 'text-stone-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:89260259669"
              className={`h-full flex items-center gap-2 px-3 xl:px-4 font-semibold text-sm lg:text-base ${isScrolled ? 'text-primary-700' : 'text-white'}`}
            >
              <Phone size={16} />
              <span>+7 (926) 025-96-69</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-700 text-base font-medium py-3 px-2 border-b border-stone-100 hover:bg-stone-50 transition-colors rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="tel:89260259669"
              className="flex items-center justify-center gap-2 mt-4 bg-primary-700 text-white font-bold text-base py-3 px-4 rounded-xl hover:bg-primary-800 transition-colors"
            >
              <Phone size={18} />
              <span>+7 (926) 025-96-69</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};