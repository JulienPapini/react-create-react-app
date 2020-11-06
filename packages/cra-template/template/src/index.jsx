import React from 'react';
import ReactDOM from 'react-dom';

import { NavigationSuspense, RootSwitch, Router } from '@app/navigation/components';
import WebVitals from '@app/shared/services/web-vitals';

import '@app/shared/services/i18n';

const App = () => (
  <Router>
    <NavigationSuspense>
      <RootSwitch />
    </NavigationSuspense>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

WebVitals.reportWebVitals();
