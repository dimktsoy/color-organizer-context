import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { colorsReducer } from './store/reducers';
import App from './App';
import './index.scss';

const store = createStore(
  combineReducers({
    colors: colorsReducer,
  })
);

window.store = store;

const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.subscribe(render);

render();
