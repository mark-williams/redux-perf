import combineReducers from '../reducers/index';
import { createStore } from 'redux';

const configureStore = () => createStore(combineReducers);
export default configureStore;

