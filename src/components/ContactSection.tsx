import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react';

interface ContactSectionProps {
  onBookingClick: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBookingClick }) => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+374 98 157 773',
      action: () => window.open('tel:+37498157773', '_self'),
      secondary: '+374 43 157 773'
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'barbershopabach@yandex.ru',
      action: () => window.open('mailto:barbershopabach@yandex.ru', '_self')
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Yerevan, Armenia',
      description: 'Mobile service throughout the city'
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Monday - Sunday',
      description: '9:00 AM - 9:00 PM'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/barbershopkaroabachyan/',
      handle: '@barbershopkaroabachyan'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: '#',
      handle: 'Coming Soon'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-background to-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium barbershop services? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.label}
                    className={`card-gradient rounded-xl p-6 border border-border/50 hover-lift ${
                      info.action ? 'cursor-pointer group' : ''
                    }`}
                    onClick={info.action}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.label}
                        </h3>
                        <p className={`text-lg ${info.action ? 'text-primary group-hover:text-primary-glow' : 'text-foreground'} font-medium transition-colors duration-300`}>
                          {info.value}
                        </p>
                        {info.secondary && (
                          <p className="text-muted-foreground mt-1">
                            {info.secondary}
                          </p>
                        )}
                        {info.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Follow Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <div
                      key={social.label}
                      className="card-gradient rounded-xl p-4 border border-border/50 hover-lift cursor-pointer group"
                      onClick={() => social.url !== '#' && window.open(social.url, '_blank')}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{social.label}</div>
                          <div className="text-sm text-primary group-hover:text-primary-glow transition-colors duration-300">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="space-y-8">
            <div className="card-gradient rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-serif font-bold text-gradient mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Ready to book an appointment or have questions about our services? 
                  Choose your preferred contact method below.
                </p>

                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={onBookingClick}
                    className="w-full"
                  >
                    {t('book_now')}
                  </Button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('tel:+37498157773', '_self')}
                      className="w-full"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('https://wa.me/37498157773', '_blank')}
                      className="w-full"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold text-foreground mb-3">Service Areas</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Yerevan Center</div>
                    <div>• Arabkir District</div>
                    <div>• Malatia-Sebastia</div>
                    <div>• Ajapnyak District</div>
                    <div>• Avan District</div>
                    <div>• And more areas</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Mobile barbershop service available throughout greater Yerevan area
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Emergency & Same-Day Service</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Need urgent grooming services? We offer same-day appointments based on availability.
              </p>
              <Button 
                variant="premium"
                onClick={() => window.open('tel:+37498157773', '_self')}
                className="w-full"
              >
                Call for Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;