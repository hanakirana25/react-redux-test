import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useDispatch } from 'react-redux';
import configureStore from './store/configureStore';

import {fetchData} from './actions/getData'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const store = configureStore();
store.subscribe ( () => console.log('hai'))
store.dispatch(fetchData());
