import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store.js';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);