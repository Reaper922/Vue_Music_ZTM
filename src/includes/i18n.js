import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs';
import de from '@/locales/de.json';
import en from '@/locales/en.json';

export default createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de,
    en
  },
  numberFormats: {
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    }
  }
});
