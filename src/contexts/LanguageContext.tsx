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
    // Header Slogan
    'header.slogan': 'Ճիշտ այն, ինչ պետք է ձեզ',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Հայտարարե՛ք ձեր մասին',
    'hero.description': 'Հայաստանի լավագույն վարբերություն',
    'hero.experience': 'Պրեմիում վաբերական փորձ',
    'hero.promo': 'Բարբերշոփ Կարո Աբաչյանը ապահովում է լավագույն սպասարկում յուրաքանչյուր հաճախորդի համար',
    'hero.cta': 'Ամրագրել',
    // Hero Features
    'features.quality.title': 'Պրեմիում որակ',
    'features.quality.desc': 'Մասնագիտական սարքավորումներ և պրեմիում ապրանքներ',
    'features.mobile.title': 'Շարժական ծառայություն',
    'features.mobile.desc': 'Հայաստանի առաջին շարժական վաբերշոփը՝ գալիս ենք ձեզ մոտ',
    'features.expert.title': 'Փորձառու վաբերներ',
    'features.expert.desc': 'Տարիների փորձ ունեցող մասնագետներ',
    
    // Services
    'services.title': 'Մեր ծառայությունները',
    'services.description': 'Պրեմիում խնամքի ծառայություններ՝ ավանդական տեխնիկաներով և ժամանակակից սարքավորումներով',
    'services.haircut': 'Մազահարդարում',
    'services.royal_shave': 'Թագավորական ածում',
    'services.beard_styling': 'Մորուքի ճարտարապետություն',
    'services.waxing': 'Մոմապակում',
    'services.spa': 'Սպա ծառայություններ',
    'services.toning': 'Մազերի տոնավորում',
    'services.finishing': 'Ավարտական հպումներ',
    'services.haircut.desc': 'Մասնագիտական սանրվածք՝ ժամանակակից տեխնիկայով',
    'services.royal_shave.desc': 'Ավանդական տաք սրբիչով շեյվ՝ լյուքս խնամք',
    'services.beard_styling.desc': 'Մորուքի ճշգրիտ ձևավորում և խնամք',
    'services.waxing.desc': 'Մոմապակում՝ մաքուր և հարթ արդյունքի համար',
    'services.spa.desc': 'Հանգստացնող SPA պրոցեդուրաներ',
    'services.toning.desc': 'Մազերի պրոֆեսիոնալ տոնավորում',
    'services.cta.title': 'Պատրա՞ստ եք պրեմիում փորձին?',
    'services.cta.desc': 'Ամրագրեք այսօր և զգացեք ամենաբարձր որակի սպասարկումը Հայաստանում։',
    // Generic feature labels
    'feature.consultation': 'Խորհրդատվություն',
    'feature.wash_cut': 'Լվացում և կտրում',
    'feature.styling': 'Սթայլինգ',
    'feature.premium_products': 'Պրեմիում միջոցներ',
    'feature.hot_towel': 'Տաք սրբիչ',
    'feature.premium_shave': 'Պրեմիում ածելք',
    'feature.face_massage': 'Դեմքի մերսում',
    'feature.aftercare': 'Հետխնամք',
    'feature.trimming': 'Կրճատում',
    'feature.shaping': 'Ձևավորում',
    'feature.oil_treatment': 'Յուղային խնամք',
    'feature.nose_ear_wax': 'Քթի/ականջի մոմ',
    'feature.eyebrow_trim': 'Հոնքերի ձևավորում',
    'feature.clean_finish': 'Մաքուր ավարտ',
    'feature.comfort_care': 'Հարմարավետ խնամք',
    'feature.face_mask': 'Դեմքի դիմակ',
    'feature.scalp_massage': 'Գլխամաշկի մերսում',
    'feature.relaxation': 'Թուլացում',
    'feature.premium_care': 'Պրեմիում խնամք',
    'feature.color_analysis': 'Գույնի վերլուծություն',
    'feature.toning': 'Տոնավորում',
    'feature.conditioning': 'Խնամք',
    
    // Mobile Barbershop
    'mobile.title': 'Միակ շարժական վաբերությունը',
    'mobile.description': 'Հայաստանի առաջին շարժական վաբերշոփը՝ պրոֆեսիոնալ խնամք ձեր վայրում։ Ժամանակակից մոտեցում՝ ավանդական արվեստին։',
    'mobile.phone': '+374 98 157 773',
    'mobile.quality_statement': 'Բարձր մասնագիտական որակ և առավելագույն հարմարավետություն հաճախորդների համար։',
    'mobile.feature1.title': 'Գալիս ենք ձեր մոտ',
    'mobile.feature1.desc': 'Մասնագիտական ծառայություններ՝ ձեր վայրում',
    'mobile.feature2.title': 'Ճկուն ժամեր',
    'mobile.feature2.desc': 'Հասանելի է, երբ ձեզ է պետք',
    'mobile.feature3.title': 'Պրեմիում սարքավորումներ',
    'mobile.feature3.desc': 'Մասնագիտական գործիքներ և նյութեր',
    'mobile.feature4.title': 'Փորձառու ծառայություն',
    'mobile.feature4.desc': 'Փորձառու մասնագետներ',
    'mobile.cta_title': 'Պատրա՞ստ եք շարժական վաբերինգին?',
    'mobile.cta_note': 'Զանգահարեք, և մեքենան կժամանի ձեր ցանկալի վայր։',
    'mobile.banner.rank': '#1',
    'mobile.banner.title': 'Շարժական վաբերշոփ',
    'mobile.banner.subtitle': 'Հայաստանում',
    
    // About
    'about.title': 'Մեր մասին',
    'about.header_subtitle': 'Բարի գալուստ Հայաստանի առաջին վաբերի ակադեմիա և պրեմիում խնամքի տարածք',
    'about.hero_title': 'Հայաստանի առաջին վաբերի ակադեմիա «ABACH»',
    'about.description': 'Բարի գալուստ Հայաստանի առաջին վաբերի ակադեմիա «Abach»։ Ցանկանու՞մ եք դառնալ հմուտ վաբեր։',
    'about.p1': 'Ցանկանու՞մ եք տիրապետել այն հմտություններին, որոնք միշտ արդիական են։ Եկեք մեզ մոտ՝ մենք կսովորեցնենք։',
    'about.p2': 'Առաջին անգամ Հայաստանում բացվեց վաբերների դպրոց։ 4 տարիների ընթացքում կուտակել ենք մեծ փորձ։',
    'about.p3': 'Հմտությունները կիրառվում են պրակտիկայում մոդելների վրա։ Ավարտելուց հետո օգնում ենք աշխատանքի տեղավորման մեջ։',
    'about.karo_name': 'Karo Abachyan',
    'about.karo_title': 'Հիմնադիր և վաբեր-մաստեր',
    'about.karo_quote': '"Սպասում ենք ձեզ. մի կորցրեք հնարավորությունը"',
    'about.ach.graduates.label': 'Շրջանավարտներ',
    'about.ach.graduates.desc': 'Մասնագիտական վաբերներ՝ մեր ակադեմիայից',
    'about.ach.years.label': 'Տարիներ',
    'about.ach.years.desc': 'Փորձ և շարունակական զարգացում',
    'about.ach.rank.label': 'Հայաստանում',
    'about.ach.rank.desc': 'Առաջին և առաջատար ակադեմիա',
    'about.ach.satisfaction.label': 'Գոհունակություն',
    'about.ach.satisfaction.desc': 'Բարձր որակի սպասարկման նվիրվածություն',
    'about.academy.title': 'Միացեք մեր վաբերի ակադեմիային',
    'about.academy.desc': 'Սովորեք լավագույններից և դարձեք հմուտ մասնագետ։ Ծրագիրը ներառում է ավանդական և ժամանակակից մեթոդներ։',
    'about.academy.f1.title': 'Մասնագիտական դասավանդում',
    'about.academy.f1.desc': 'Համապարփակ կրթություն',
    'about.academy.f2.title': 'Աշխատանքի տեղավորում',
    'about.academy.f2.desc': 'Աշխատանք Հայաստանում և Ռուսաստանում',
    'about.academy.f3.title': 'Գործնական փորձ',
    'about.academy.f3.desc': 'Իրական փորձ մոդելների հետ',
    'about.academy.cta': 'Իմանալ ակադեմիայի մասին',
    
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
    'call': 'Զանգ',
  },
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.gallery': 'Галерея',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.booking': 'Запись',
    // Header Slogan
    'header.slogan': 'Именно то, что вам нужно',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Заявите о себе',
    'hero.description': 'Лучший Барбершоп в Армении',
    'hero.experience': 'Премиальный опыт барбершопа',
    'hero.promo': 'Барбершоп Каро Абачян предоставляет наилучшее обслуживание для каждого клиента',
    'hero.cta': 'Записаться',
    'features.quality.title': 'Премиум качество',
    'features.quality.desc': 'Профессиональное оборудование и премиум продукты',
    'features.mobile.title': 'Мобильный сервис',
    'features.mobile.desc': 'Первый мобильный барбершоп в Армении — приедем к вам',
    'features.expert.title': 'Экспертные барберы',
    'features.expert.desc': 'Опытные специалисты с многолетней практикой',
    
    // Services
    'services.title': 'Наши услуги',
    'services.description': 'Премиальные услуги по уходу с традиционными техниками и современным оборудованием',
    'services.haircut': 'Стрижка',
    'services.royal_shave': 'Королевское бритьё',
    'services.beard_styling': 'Стрижка усов и бороды',
    'services.waxing': 'Воск',
    'services.spa': 'Барбер СПА услуги',
    'services.toning': 'Тонирование волос',
    'services.finishing': 'Отделка',
    'services.haircut.desc': 'Профессиональная стрижка с современными техниками и инструментами',
    'services.royal_shave.desc': 'Традиционное бритьё горячим полотенцем с люкс-уходом',
    'services.beard_styling.desc': 'Точная форма и уход за бородой',
    'services.waxing.desc': 'Процедуры воском для чистого и гладкого результата',
    'services.spa.desc': 'Расслабляющие SPA-процедуры',
    'services.toning.desc': 'Профессиональное тонирование волос',
    'feature.consultation': 'Консультация',
    'feature.wash_cut': 'Мытьё и стрижка',
    'feature.styling': 'Укладка',
    'feature.premium_products': 'Премиум средства',
    'feature.hot_towel': 'Горячее полотенце',
    'feature.premium_shave': 'Премиум бритьё',
    'feature.face_massage': 'Массаж лица',
    'feature.aftercare': 'Уход после',
    'feature.trimming': 'Подравнивание',
    'feature.shaping': 'Формовка',
    'feature.oil_treatment': 'Масляной уход',
    'feature.nose_ear_wax': 'Воск для носа/ушей',
    'feature.eyebrow_trim': 'Коррекция бровей',
    'feature.clean_finish': 'Чистый финиш',
    'feature.comfort_care': 'Комфортный уход',
    'feature.face_mask': 'Маска для лица',
    'feature.scalp_massage': 'Массаж головы',
    'feature.relaxation': 'Расслабление',
    'feature.premium_care': 'Премиум уход',
    'feature.color_analysis': 'Анализ цвета',
    'feature.toning': 'Тонирование',
    'feature.conditioning': 'Кондиционирование',
    
    // Mobile Barbershop
    'mobile.title': 'Единственный барбершоп у дома',
    'mobile.description': 'Первый в Армении мобильный барбершоп предлагает барбера на выезд. Предоставление парикмахерских услуг, основанных на современных подходах.',
    'mobile.phone': '+374 98 157 773',
    'mobile.quality_statement': 'Высокое профессиональное качество обслуживания и максимальное удобство.',
    'mobile.feature1.title': 'Мы приедем к вам',
    'mobile.feature1.desc': 'Профессиональные услуги на вашей локации',
    'mobile.feature2.title': 'Гибкий график',
    'mobile.feature2.desc': 'Доступны когда вам удобно',
    'mobile.feature3.title': 'Премиум оборудование',
    'mobile.feature3.desc': 'Профессиональные инструменты и средства',
    'mobile.feature4.title': 'Экспертный сервис',
    'mobile.feature4.desc': 'Опытные профессиональные барберы',
    'mobile.cta_title': 'Готовы к мобильному барберингу?',
    'mobile.cta_note': 'Позвоните, и машина приедет в желаемое место.',
    'mobile.banner.rank': '#1',
    'mobile.banner.title': 'Мобильный барбершоп',
    'mobile.banner.subtitle': 'в Армении',
    
    // About
    'about.title': 'О нас',
    'about.header_subtitle': 'Добро пожаловать в первую в Армении барберскую академию и премиум пространство',
    'about.hero_title': 'Первая барберская академия Армении «ABACH»',
    'about.description': 'Добро пожаловать в первую барберскую академию Армении «Abach». Желаете стать искусным барбером?',
    'about.p1': 'Хотите овладеть навыками, которые всегда актуальны? Приходите к нам — мы обучим.',
    'about.p2': 'Впервые в Армении открылась школа барберов. За 4 года мы накопили большой опыт и готовы им поделиться.',
    'about.p3': 'Все навыки отрабатываем на практике и моделях. После обучения помогаем с трудоустройством.',
    'about.karo_name': 'Karo Abachyan',
    'about.karo_title': 'Основатель и мастер-барбер',
    'about.karo_quote': '“Мы ждём вас. Не упустите возможность!”',
    'about.ach.graduates.label': 'Выпускники',
    'about.ach.graduates.desc': 'Профессиональные барберы, обученные у нас',
    'about.ach.years.label': 'Годы',
    'about.ach.years.desc': 'Опыт и постоянное развитие',
    'about.ach.rank.label': 'В Армении',
    'about.ach.rank.desc': 'Первая и ведущая академия',
    'about.ach.satisfaction.label': 'Удовлетворённость',
    'about.ach.satisfaction.desc': 'Преданность высокому качеству сервиса',
    'about.academy.title': 'Присоединяйтесь к нашей академии',
    'about.academy.desc': 'Учитесь у лучших и становитесь профессионалом. Программа включает традиционные и современные методы.',
    'about.academy.f1.title': 'Профессиональное обучение',
    'about.academy.f1.desc': 'Комплексное образование',
    'about.academy.f2.title': 'Трудоустройство',
    'about.academy.f2.desc': 'Работа в Армении и России',
    'about.academy.f3.title': 'Практика',
    'about.academy.f3.desc': 'Реальный опыт с моделями',
    'about.academy.cta': 'Узнать об Академии',
    
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
    'call': 'Звонок',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.booking': 'Booking',
    // Header Slogan
    'header.slogan': 'Exactly what you need',
    
    // Hero Section
    'hero.title': 'ABACH',
    'hero.subtitle': 'Make Your Statement',
    'hero.description': "Armenia's Premier Barbershop",
    'hero.experience': 'Premium Barbershop Experience',
    'hero.promo': 'Karo Abachyan Barbershop delivers the best service for every client',
    'hero.cta': 'Book Now',
    'features.quality.title': 'Premium Quality',
    'features.quality.desc': 'Professional equipment and premium products',
    'features.mobile.title': 'Mobile Service',
    'features.mobile.desc': "Armenia's first mobile barbershop — we come to you",
    'features.expert.title': 'Expert Barbers',
    'features.expert.desc': 'Skilled professionals with years of experience',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'Experience premium grooming with traditional techniques and modern equipment',
    'services.haircut': 'Haircut',
    'services.royal_shave': 'Royal Shave',
    'services.beard_styling': 'Beard Styling',
    'services.waxing': 'Waxing',
    'services.spa': 'Barber SPA Services',
    'services.toning': 'Hair Toning',
    'services.finishing': 'Finishing Touches',
    'services.haircut.desc': 'Professional styling with modern techniques and tools',
    'services.royal_shave.desc': 'Traditional hot towel shave with luxury treatment',
    'services.beard_styling.desc': 'Expert beard trimming and shaping',
    'services.waxing.desc': 'Professional waxing for a clean, smooth finish',
    'services.spa.desc': 'Relaxing spa treatments for grooming',
    'services.toning.desc': 'Professional hair toning and enhancement',
    'feature.consultation': 'Consultation',
    'feature.wash_cut': 'Wash & Cut',
    'feature.styling': 'Styling',
    'feature.premium_products': 'Premium Products',
    'feature.hot_towel': 'Hot Towel',
    'feature.premium_shave': 'Premium Shave',
    'feature.face_massage': 'Face Massage',
    'feature.aftercare': 'Aftercare',
    'feature.trimming': 'Trimming',
    'feature.shaping': 'Shaping',
    'feature.oil_treatment': 'Oil Treatment',
    'feature.nose_ear_wax': 'Nose/Ear Wax',
    'feature.eyebrow_trim': 'Eyebrow Trim',
    'feature.clean_finish': 'Clean Finish',
    'feature.comfort_care': 'Comfort Care',
    'feature.face_mask': 'Face Mask',
    'feature.scalp_massage': 'Scalp Massage',
    'feature.relaxation': 'Relaxation',
    'feature.premium_care': 'Premium Care',
    'feature.color_analysis': 'Color Analysis',
    'feature.toning': 'Toning',
    'feature.conditioning': 'Conditioning',
    
    // Mobile Barbershop
    'mobile.title': 'The Only Mobile Barbershop',
    'mobile.description': "Armenia's first mobile barbershop offers professional grooming services at your location. Modern approach to traditional barbering.",
    'mobile.phone': '+374 98 157 773',
    'mobile.quality_statement': 'Delivering high professional quality and maximum convenience.',
    'mobile.feature1.title': 'We Come to You',
    'mobile.feature1.desc': 'Professional services at your location',
    'mobile.feature2.title': 'Flexible Hours',
    'mobile.feature2.desc': 'Available when you need us',
    'mobile.feature3.title': 'Premium Equipment',
    'mobile.feature3.desc': 'Professional tools and products',
    'mobile.feature4.title': 'Expert Service',
    'mobile.feature4.desc': 'Skilled professional barbers',
    'mobile.cta_title': 'Ready to Experience Mobile Barbering?',
    'mobile.cta_note': 'Call us and the van will arrive to your location.',
    'mobile.banner.rank': '#1',
    'mobile.banner.title': 'Mobile Barbershop',
    'mobile.banner.subtitle': 'in Armenia',
    
    // About
    'about.title': 'About Us',
    'about.header_subtitle': "Welcome to Armenia's first barber academy and premium grooming destination",
    'about.hero_title': "Armenia's first barber academy \"ABACH\"",
    'about.description': "Welcome to Armenia's first barber academy \"Abach\". Want to become a skilled barber?",
    'about.p1': "Want to master timeless skills? Join us — we'll teach you.",
    'about.p2': "The first barber school in Armenia. Over 4 years we've gained invaluable experience to share.",
    'about.p3': 'We practice on real models. After graduation we assist with job placement.',
    'about.karo_name': 'Karo Abachyan',
    'about.karo_title': 'Founder & Master Barber',
    'about.karo_quote': '“We\'re waiting for you. Don\'t miss the opportunity!”',
    'about.ach.graduates.label': 'Graduates',
    'about.ach.graduates.desc': 'Professional barbers trained at our academy',
    'about.ach.years.label': 'Years',
    'about.ach.years.desc': 'Experience and continuous improvement',
    'about.ach.rank.label': 'In Armenia',
    'about.ach.rank.desc': 'First and leading academy',
    'about.ach.satisfaction.label': 'Satisfaction',
    'about.ach.satisfaction.desc': 'Committed to exceptional service quality',
    'about.academy.title': 'Join Our Barbershop Academy',
    'about.academy.desc': 'Learn from the best. The program covers traditional techniques and modern methods.',
    'about.academy.f1.title': 'Professional Training',
    'about.academy.f1.desc': 'Comprehensive barbering education',
    'about.academy.f2.title': 'Job Placement',
    'about.academy.f2.desc': 'Employment in Armenia and Russia',
    'about.academy.f3.title': 'Hands-on Practice',
    'about.academy.f3.desc': 'Real experience with models',
    'about.academy.cta': 'Learn About Academy',
    
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
    'call': 'Call',
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