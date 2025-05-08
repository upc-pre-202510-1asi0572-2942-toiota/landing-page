import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';

i18n
  .use(initReactI18next) // Integra con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'en', // Configura manualmente el idioma predeterminado
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;