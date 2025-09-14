import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MobileBarberSection from '@/components/MobileBarberSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onBookingClick={openBooking} />
        
        <main>
          <HeroSection onBookingClick={openBooking} />
          <ServicesSection onBookingClick={openBooking} />
          <MobileBarberSection onBookingClick={openBooking} />
          <AboutSection onBookingClick={openBooking} />
          <ContactSection onBookingClick={openBooking} />
        </main>
        
        <Footer />
        
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
