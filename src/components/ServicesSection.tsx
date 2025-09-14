import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scissors, Crown, Brush, Sparkles, Waves, Palette, CheckCircle } from 'lucide-react';

interface ServicesSectionProps {
  onBookingClick: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookingClick }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scissors,
      nameKey: 'services.haircut',
      price: 6000,
      duration: '45 min',
      description: t('services.haircut.desc'),
      features: [t('feature.consultation'), t('feature.wash_cut'), t('feature.styling'), t('feature.premium_products')]
    },
    {
      icon: Crown,
      nameKey: 'services.royal_shave',
      price: 6000,
      duration: '60 min',
      description: t('services.royal_shave.desc'),
      features: [t('feature.hot_towel'), t('feature.premium_shave'), t('feature.face_massage'), t('feature.aftercare')]
    },
    {
      icon: Brush,
      nameKey: 'services.beard_styling',
      price: 5000,
      duration: '30 min',
      description: t('services.beard_styling.desc'),
      features: [t('feature.trimming'), t('feature.shaping'), t('feature.oil_treatment'), t('feature.styling')]
    },
    {
      icon: Sparkles,
      nameKey: 'services.waxing',
      price: 4000,
      duration: '20 min',
      description: t('services.waxing.desc'),
      features: [t('feature.nose_ear_wax'), t('feature.eyebrow_trim'), t('feature.clean_finish'), t('feature.comfort_care')]
    },
    {
      icon: Waves,
      nameKey: 'services.spa',
      price: 3000,
      duration: '40 min',
      description: t('services.spa.desc'),
      features: [t('feature.face_mask'), t('feature.scalp_massage'), t('feature.relaxation'), t('feature.premium_care')]
    },
    {
      icon: Palette,
      nameKey: 'services.toning',
      price: 3000,
      duration: '35 min',
      description: t('services.toning.desc'),
      features: [t('feature.color_analysis'), t('feature.toning'), t('feature.conditioning'), t('feature.styling')]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.nameKey}
                className="card-gradient rounded-xl p-8 hover-lift border border-border/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Service Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {t(service.nameKey)}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and Booking */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-gradient">
                      {service.price.toLocaleString()} {t('amd')}
                    </div>
                    <Button 
                      variant="premium"
                      onClick={onBookingClick}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {t('book_now')}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-gradient mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('services.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={onBookingClick}
                className="group"
              >
                {t('book_now')}
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => window.open('tel:+37498157773', '_self')}
              >
                {t('call')}: +374 98 157 773
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;