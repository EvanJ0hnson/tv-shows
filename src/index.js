import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.css';

const defaultState = { data: [] };
const myShowsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SHOW':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;  
  }
}

const store = createStore(myShowsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
