import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import krTranslations from '@/public/translations/ko_KR.json';
import usTranslations from '../public/translations/en_US.json';

const resources = {
  ko_KR: {
    translation: krTranslations,
  },
  en_US: {
    translation: usTranslations,
  },

};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko_KR',
  fallbackLng: 'ko_KR',
  debug: false,
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: false,
  returnNull: false,
});

export default i18n;