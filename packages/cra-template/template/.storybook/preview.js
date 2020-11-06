import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../src/shared/services/i18n';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withI18nextProvider = (Story, context) => {
  i18n.changeLanguage(context.globals.locale);
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};

export const decorators = [withI18nextProvider];
