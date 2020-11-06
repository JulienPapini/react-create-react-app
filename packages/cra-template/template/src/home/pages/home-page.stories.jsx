import React from 'react';

import HomePage from './home-page';

export default {
  title: 'Home/Pages/HomePage',
  component: HomePage,
};

const Template = (props) => <HomePage {...props} />;

export const Default = Template.bind({});
