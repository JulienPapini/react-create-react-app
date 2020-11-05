import React from 'react';
import ReactDOM from 'react-dom';

import WebVitals from '@app/shared/services/web-vitals';

const App = () => <div />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

WebVitals.reportWebVitals();
