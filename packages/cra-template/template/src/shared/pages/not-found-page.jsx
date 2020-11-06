import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation('shared');

  return <div>{t('shared:pages.notFoundPage.notFoundText', 'Not found')}</div>;
};

export default NotFoundPage;
