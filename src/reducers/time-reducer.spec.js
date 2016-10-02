import time from './time-reducer';
import { UPDATETIME } from '../actions/actions';

describe('time reducer', () => {
    it('given an update action it should return the current time', () => {
        let action = { type: UPDATETIME };
        let newState = time({}, action);

        expect(newState.currentTime).toBeDefined;
        console.log(newState);
        let tolerance = (new Date()) - newState.currentTime;
        expect(tolerance).toBeLessThan(100);
    });
});