import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'am' as const, label: 'Հայերեն' },
    { code: 'ru' as const, label: 'Русский' },
    { code: 'en' as const, label: 'English' },
  ];

  const quickLinks = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const services = [
    'services.haircut',
    'services.royal_shave',
    'services.beard_styling',
    'services.spa',
  ];

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gradient mb-3">ABACH</h2>
              <p className="text-muted-foreground leading-relaxed">
                Armenia's premier barbershop and first mobile grooming service. 
                Experience traditional barbering with modern excellence.
              </p>
            </div>
            
            {/* Language Switcher */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Language / Լեզու / Язык</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 text-sm rounded-md transition-all duration-300 lang-switch ${
                      currentLanguage === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="https://n764433.alteg.io/company/718528/personal/menu?o="
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {t('nav.booking')}
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">{t('nav.services')}</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {t(service)}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">{t('contact.title')}</h4>
            <div className="space-y-4">
              <a
                href="tel:+37498157773"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+374 98 157 773</span>
              </a>
              
              <a
                href="mailto:barbershopabach@yandex.ru"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>barbershopabach@yandex.ru</span>
              </a>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Yerevan, Armenia</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/barbershopkaroabachyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <div className="flex items-center justify-center w-10 h-10 bg-muted/50 rounded-full">
                  <Youtube className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 ABACH Barbershop. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Armenia's Premier Mobile Barbershop Service
              </p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>in Armenia</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Mobile barbershop services available throughout Yerevan and surrounding areas. 
              Professional grooming at your location with premium equipment and products.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;