const initialState = {
    currentTime: new Date()
};

const time = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TIME:
            return state.currentTime = new Date();
        default:
            return state;
    }
};

export default time;