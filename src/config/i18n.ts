// Removendo o arquivo de configuração de i18n, pois ele não fazia parte do estado original.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: {
        title: 'Welcome to SOS Antiques!',
        subtitle: 'Your trusted app for antique collections.',
        login: 'Login',
        register: 'Register',
        changeLanguage: 'En',
        logoDescription: 'SOS Antiques logo',
        bannerDescription: 'SOS Antiques banner',
        errorTitle: 'Error',
        errorMessage: 'Could not change the language. Please try again.',
        ok: 'OK',
      },
    },
  },
  pt: {
    translation: {
      welcome: {
        title: 'Bem-vindo ao SOS Antiques!',
        subtitle: 'Seu aplicativo confiável para coleções de antiguidades.',
        login: 'Entrar',
        register: 'Registrar',
        changeLanguage: 'Pt',
        logoDescription: 'Logo do SOS Antiques',
        bannerDescription: 'Banner do SOS Antiques',
        errorTitle: 'Erro',
        errorMessage: 'Não foi possível alterar o idioma. Tente novamente.',
        ok: 'OK',
      },
    },
  },
  es: {
    translation: {
      welcome: {
        title: '¡Bienvenido a SOS Antiques!',
        subtitle:
          'Tu aplicación de confianza para colecciones de antigüedades.',
        login: 'Iniciar sesión',
        register: 'Registrar',
        changeLanguage: 'Es',
        logoDescription: 'Logo de SOS Antiques',
        bannerDescription: 'Banner de SOS Antiques',
        errorTitle: 'Error',
        errorMessage:
          'No se pudo cambiar el idioma. Por favor, inténtalo de nuevo.',
        ok: 'Aceptar',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // Idioma padrão
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React já faz a sanitização
  },
});

export default i18n;
