import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, Star } from 'lucide-react';
import { heroImageUrl } from '@/lib/imageSources';

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookingClick }) => {
  const { t } = useLanguage();
  const [dynamicUrl, setDynamicUrl] = useState<string>(heroImageUrl);

  useEffect(() => {
    let isMounted = true;
    fetch('/instagram.json')
      .then((r) => r.ok ? r.json() : null)
      .then((json) => {
        const url = json?.images?.[0];
        if (isMounted && typeof url === 'string' && url.length > 0) {
          setDynamicUrl(url);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={dynamicUrl} 
          alt="Premium barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Rating Stars */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">
              {t('hero.experience')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-4">
            {t('hero.subtitle')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {t('hero.description')}
            <br />
            <span className="text-primary font-medium">
              {t('hero.promo')}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={onBookingClick}
              className="group"
            >
              {t('hero.cta')}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('learn_more')}
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-gradient rounded-lg p-6 hover-lift border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{t('features.quality.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('features.quality.desc')}
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 hover-lift border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{t('features.mobile.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('features.mobile.desc')}
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 hover-lift border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{t('features.expert.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('features.expert.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;