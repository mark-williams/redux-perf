import { UPDATETIME } from '../actions/actions';

const initialState = {
    currentTime: new Date()
};

const time = (state = initialState, action) => {
    switch (action.type) {
        case UPDATETIME:
            return Object.assign({}, { currentTime : new Date() });
        default:
            return state;
    }
};

export default time;