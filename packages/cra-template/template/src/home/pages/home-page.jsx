import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return <div>{t('home:pages.homePage.welcomeText', 'Welcome to the home page !')}</div>;
};

export default HomePage;
