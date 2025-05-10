import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Mock de recursos de tradução
const resources = {
  en: {
    translation: {
      'welcome.title': 'Welcome',
      'welcome.subtitle': 'Subtitle',
      'welcome.login': 'Login',
      'welcome.register': 'Register',
      'welcome.changeLanguage': 'Change Language',
      'welcome.errorTitle': 'Error',
      'welcome.errorMessage': 'An error occurred',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
