// src/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english } from './translations/en';
import { arabic } from './translations/ar';

i18next
  .use(initReactI18next) // Passes i18next down to react-i18next
  .init({
    resources: {
      en: {
        translation: english,
      },
      ar: {
        translation: arabic,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18next;
