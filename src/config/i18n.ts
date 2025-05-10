// Removendo o arquivo de configuração de i18n, pois ele não fazia parte do estado original.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa os arquivos JSON diretamente
import enTranslation from '@/assets/locales/en.json';
import ptTranslation from '@/assets/locales/pt.json';
import esTranslation from '@/assets/locales/es.json';

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
  es: { translation: esTranslation },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // idioma padrão
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React já faz a sanitização
  },
});

export default i18n;
