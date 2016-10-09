import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const store = configureStore();

ReactDOM.render(
    <App store={ store } />,
    document.getElementById('root')
);


