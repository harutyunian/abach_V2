import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'am' as const, label: 'Հայ' },
    { code: 'ru' as const, label: 'Рус' },
    { code: 'en' as const, label: 'Eng' },
  ];

  const navigationItems = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-gradient">ABACH</h1>
            <div className="hidden sm:block text-xs text-muted-foreground">
              {t('hero.description')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <a
              href="tel:+37498157773"
              className="hidden md:flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+374 98 157 773</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-border/50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 lang-switch ${
                    currentLanguage === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            {/* Booking Button */}
            <Button 
              variant="booking" 
              size="default"
              onClick={onBookingClick}
              className="hidden sm:flex"
            >
              {t('nav.booking')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Phone */}
              <a
                href="tel:+37498157773"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+374 98 157 773</span>
              </a>

              {/* Mobile Booking Button */}
              <Button 
                variant="booking" 
                size="lg"
                onClick={() => {
                  onBookingClick();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4"
              >
                {t('nav.booking')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;