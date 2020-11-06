import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '@app/home/pages';
import { NotFoundPage } from '@app/shared/pages';

const RootSwitch = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>

    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default RootSwitch;
