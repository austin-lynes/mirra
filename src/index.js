import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';

import rootReducer from './store';
//REDUX
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(logger, thunk));



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

