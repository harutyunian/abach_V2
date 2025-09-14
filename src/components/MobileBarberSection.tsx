import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Shield, Award } from 'lucide-react';
import mobileImage from '@/assets/mobile-barbershop.jpg';

interface MobileBarberSectionProps {
  onBookingClick: () => void;
}

const MobileBarberSection: React.FC<MobileBarberSectionProps> = ({ onBookingClick }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight">
                {t('mobile.title')}
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('mobile.description')}
              </p>
              
              <p className="text-lg text-foreground font-medium">
                Обеспечение высокого профессионального качества обслуживания и максимального удобства для клиентов.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">We Come to You</h3>
                  <p className="text-sm text-muted-foreground">Professional services at your location</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Hours</h3>
                  <p className="text-sm text-muted-foreground">Available when you need us</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Premium Equipment</h3>
                  <p className="text-sm text-muted-foreground">Professional tools and products</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Service</h3>
                  <p className="text-sm text-muted-foreground">Skilled professional barbers</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card-gradient rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Ready to Experience Mobile Barbering?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={onBookingClick}
                >
                  {t('book_now')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('tel:+37498157773', '_self')}
                >
                  Call: {t('mobile.phone')}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Желающие воспользоваться нашими услугами, могут позвонить и машина приедет в желаемое Вами место.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl elegant-shadow group">
              <img 
                src={mobileImage} 
                alt="ABACH Mobile Barbershop Van"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 card-gradient rounded-xl p-4 border border-border/50 elegant-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">#1</div>
                <div className="text-sm text-muted-foreground">Mobile Barbershop</div>
                <div className="text-xs text-muted-foreground">in Armenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBarberSection;