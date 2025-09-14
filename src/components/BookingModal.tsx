import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
 

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleBookingClick = () => {
    window.open('https://n764433.alteg.io/company/718528/personal/menu?o=', '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+37498157773', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/37498157773', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gradient">
              {t('nav.booking')}
            </h2>
            <p className="text-muted-foreground mt-1">
              Choose your preferred booking method
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted"
          >
            Close
          </Button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
        {/* Booking Options */}
        <div className="p-6 space-y-6">
          {/* Online Booking */}
          <div className="card-gradient rounded-xl p-6 border border-border/50 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Online Booking System
                </h3>
                <p className="text-muted-foreground">
                  Book your appointment instantly through our professional booking platform.
                  Choose your service, time, and barber preferences.
                </p>
              </div>
            </div>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleBookingClick}
              className="w-full"
            >
              Open Booking System
            </Button>
          </div>

          {/* Phone Booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-gradient rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Call Directly
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak with our team to schedule your appointment and ask any questions.
                  </p>
                  <div className="font-semibold text-primary text-lg mb-4">
                    +374 98 157 773
                  </div>
                  <Button 
                    variant="outline" 
                    size="default"
                    onClick={handlePhoneCall}
                    className="w-full"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    WhatsApp Booking
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us a message on WhatsApp for quick and convenient booking.
                  </p>
                  <div className="font-semibold text-primary text-lg mb-4">
                    +374 98 157 773
                  </div>
                  <Button 
                    variant="outline" 
                    size="default"
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
            <h4 className="font-semibold text-foreground mb-3">Booking Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Advanced booking recommended for guaranteed availability</li>
              <li>• Mobile barbershop service available throughout Yerevan</li>
              <li>• Same-day appointments subject to availability</li>
              <li>• Group bookings and special events welcome</li>
              <li>• Payment accepted: Cash, Card, and Mobile payments</li>
            </ul>
          </div>
        </div>

        {/* Embedded Booking System */}
        <div className="border-t border-border/50 p-6">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-foreground mb-2">Or Book Directly Below</h4>
            <p className="text-sm text-muted-foreground">
              Use our integrated booking system for immediate scheduling
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl border border-border/50">
            <iframe
              src="https://n764433.alteg.io/company/718528/personal/menu?o="
              className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh] min-h-[480px]"
              title="ABACH Booking System"
              frameBorder="0"
              allow="camera; microphone; geolocation"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;