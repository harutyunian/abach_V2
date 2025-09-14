import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Award, Clock, Target } from 'lucide-react';

interface AboutSectionProps {
  onBookingClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBookingClick }) => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Users,
      number: '769+',
      label: 'Graduates',
      description: 'Professional barbers trained in our academy'
    },
    {
      icon: Clock,
      number: '4+',
      label: 'Years',
      description: 'Of experience and continuous improvement'
    },
    {
      icon: Award,
      number: '#1',
      label: 'In Armenia',
      description: 'First and leading barbershop academy'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Satisfaction',
      description: 'Dedicated to exceptional service quality'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.header_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-foreground">
                {t('about.hero_title')}
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('about.description')} {t('about.p1')}
                </p>
                
                <p>
                  {t('about.p2')}
                </p>
                
                <p>
                  {t('about.p3')}
                </p>
              </div>

              <div className="card-gradient rounded-xl p-6 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">{t('about.karo_name')}</h4>
                <p className="text-muted-foreground">{t('about.karo_title')}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('about.karo_quote')}
                </p>
              </div>
            </div>

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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('learn_more')}
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.label}
                  className="card-gradient rounded-xl p-6 text-center hover-lift border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className="font-semibold text-foreground mb-2">
                    {t(`about.ach.${achievement.label.toLowerCase()}.label`)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {t(`about.ach.${achievement.label.toLowerCase()}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academy Info */}
        <div className="mt-16">
          <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 text-center">
            <h3 className="text-3xl font-serif font-bold text-gradient mb-6">
              {t('about.academy.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('about.academy.desc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.academy.f1.title')}</div>
                <p className="text-sm text-muted-foreground">{t('about.academy.f1.desc')}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.academy.f2.title')}</div>
                <p className="text-sm text-muted-foreground">{t('about.academy.f2.desc')}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.academy.f3.title')}</div>
                <p className="text-sm text-muted-foreground">{t('about.academy.f3.desc')}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+37498157773', '_self')}
            >
              {t('about.academy.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;