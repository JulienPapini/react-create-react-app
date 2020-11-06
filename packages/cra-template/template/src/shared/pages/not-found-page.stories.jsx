import React from 'react';

import NotFoundPage from './not-found-page';

export default {
  title: 'Shared/Pages/NotFoundPage',
  component: NotFoundPage,
};

const Template = (props) => <NotFoundPage {...props} />;

export const Default = Template.bind({});
