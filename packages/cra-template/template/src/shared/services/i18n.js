import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import moment from 'moment';

import 'moment/locale/fr';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    whitelist: ['en', 'fr'],
    load: 'languageOnly',
    ns: ['default'],
    defaultNS: 'default',
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (value instanceof Date) return moment(value).format(format);
        return value;
      },
    },
  });

i18n.on('languageChanged', (lng) => moment.locale(lng));

export default i18n;
