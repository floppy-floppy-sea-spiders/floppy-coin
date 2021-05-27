// hanging the App up in the 'root' element in index.html and wrapping the store in Provider

import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store';

ReactDOM.render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
