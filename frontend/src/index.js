import React from 'react';
import ReactDOM from 'react-dom';
//-Redux
import store from './store';
import { Provider } from 'react-redux';
//-Styles
import './bootstrap.min.css';
import './index.css';
//-Components :
import App from './App';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
