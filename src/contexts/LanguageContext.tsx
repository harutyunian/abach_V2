import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'am' | 'ru' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  am: {
    // Navigation
    'nav.services': 'Ծառայություններ',
    'nav.gallery': 'Պատկերասրահ',
    'nav.about': 'Մեր մասին',
    'nav.contact': 'Կապ',
    'nav.booking': 'Ամրագրում',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Հայտարարե՛ք ձեր մասին',
    'hero.description': 'Հայաստանի լավագույն վարբերություն',
    'hero.cta': 'Ամրագրել',
    
    // Services
    'services.title': 'Մեր ծառայությունները',
    'services.haircut': 'Մազահարդարում',
    'services.royal_shave': 'Թագավորական ածում',
    'services.beard_styling': 'Մորուքի ճարտարապետություն',
    'services.waxing': 'Մոմապակում',
    'services.spa': 'Սպա ծառայություններ',
    'services.toning': 'Մազերի տոնավորում',
    'services.finishing': 'Ավարտական հպումներ',
    
    // Mobile Barbershop
    'mobile.title': 'Միակ շարժական վարբերությունը',
    'mobile.description': 'Առաջին անգամ Հայաստանում շարժական վարբերություն՝ տան գալով։ Ժամանակակից մոտեցումների վրա հիմնված վարբերական ծառայություններ։',
    'mobile.phone': '+374 98 157 773',
    
    // About
    'about.title': 'Մեր մասին',
    'about.description': 'Բարի գալուստ Հայաստանի առաջին վարբերական ակադեմիա «Abach»։ Ցանկանու՞մ եք հմուտ վարբեր դառնալ։',
    
    // Contact
    'contact.title': 'Կապ մեզ հետ',
    'contact.phone': 'Հեռախոս',
    'contact.email': 'Էլ. փոստ',
    'contact.address': 'Հասցե',
    
    // Common
    'book_now': 'Ամրագրել հիմա',
    'learn_more': 'Ավելին իմանալ',
    'price': 'Գին',
    'amd': 'դրամ',
  },
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.gallery': 'Галерея',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.booking': 'Запись',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Заявите о себе',
    'hero.description': 'Лучший Барбершоп в Армении',
    'hero.cta': 'Записаться',
    
    // Services
    'services.title': 'Наши услуги',
    'services.haircut': 'Стрижка',
    'services.royal_shave': 'Королевское бритьё',
    'services.beard_styling': 'Стрижка усов и бороды',
    'services.waxing': 'Воск',
    'services.spa': 'Барбер СПА услуги',
    'services.toning': 'Тонирование волос',
    'services.finishing': 'Отделка',
    
    // Mobile Barbershop
    'mobile.title': 'Единственный барбершоп у дома',
    'mobile.description': 'Первый в Армении мобильный барбершоп предлагает барбера на выезд. Предоставление парикмахерских услуг, основанных на современных подходах.',
    'mobile.phone': '+374 98 157 773',
    
    // About
    'about.title': 'О нас',
    'about.description': 'Добро пожаловать в первую барберскую академию Армении «Abach». Желаете стать искусным барбером?',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.address': 'Адрес',
    
    // Common
    'book_now': 'Записаться сейчас',
    'learn_more': 'Узнать больше',
    'price': 'Цена',
    'amd': 'драм',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.booking': 'Booking',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Make Your Statement',
    'hero.description': 'Armenia\'s Premier Barbershop',
    'hero.cta': 'Book Now',
    
    // Services
    'services.title': 'Our Services',
    'services.haircut': 'Haircut',
    'services.royal_shave': 'Royal Shave',
    'services.beard_styling': 'Beard Styling',
    'services.waxing': 'Waxing',
    'services.spa': 'Barber SPA Services',
    'services.toning': 'Hair Toning',
    'services.finishing': 'Finishing Touches',
    
    // Mobile Barbershop
    'mobile.title': 'The Only Mobile Barbershop',
    'mobile.description': 'Armenia\'s first mobile barbershop offers professional grooming services at your location. Modern approach to traditional barbering.',
    'mobile.phone': '+374 98 157 773',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Welcome to Armenia\'s first barber academy "Abach". Want to become a skilled barber?',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Common
    'book_now': 'Book Now',
    'learn_more': 'Learn More',
    'price': 'Price',
    'amd': 'AMD',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['am', 'ru', 'en'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[typeof currentLanguage]] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};