import combineReducers from '../reducers/index';
import { createStore } from 'redux';

const store = createStore(combineReducers);
export default store;

