// import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  routes,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
