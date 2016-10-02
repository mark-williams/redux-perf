import { combineReducers } from 'redux';
import numbers from './numbers-reducer';
import time from './time-reducer';

export default combineReducers({
    numbers,
    time
});
