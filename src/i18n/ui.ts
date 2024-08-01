export const LANGUAGES: Record<string, { code: string, name: string }> = {
    es: {
        code: "es",
        name: "Español",
    },
    en: {
        code: "en",
        name: "English",
    }
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
    es: {
      'nav.home': 'Inicio',
      'nav.briefcase': 'Portafolio',
      'nav.about_us': 'Acerca de nosotros',
      'nav.contact_us': 'Contactanos',
      'nav.legal': 'Aviso Legal',
          'nav.privacidad': 'Privacidad',
          'nav.cookies': 'Cookies'
    },  
    en: {
      'nav.home': 'Home',
      'nav.briefcase': 'Briefcase',
      'nav.about_us': 'About us',
      'nav.contact_us': 'Contact us',
      'nav.legal': 'Legal Notice',
          'nav.privacidad': 'Privacy',
          'nav.cookies': 'Cookies'
    }
  } as const;
  
  export const routes = {
    es: {
      briefcase: 'portafolio',
      about_us: 'acerca-de-nosotros',
      contact_us: 'contactanos'
    },
    en: {
      briefcase: 'portfolio',
      about_us: 'about-us',
      contact_us: 'contact-us'
    }
  };