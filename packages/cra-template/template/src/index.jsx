import React from 'react';
import ReactDOM from 'react-dom';

import { RootSwitch, Router } from '@app/navigation/components';
import WebVitals from '@app/shared/services/web-vitals';

const App = () => (
  <Router>
    <RootSwitch />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

WebVitals.reportWebVitals();
