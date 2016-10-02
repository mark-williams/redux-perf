import { UPDATETIME } from '../actions/actions';
import time from './time-reducer';

describe('time reducer', () => {
    it('given an update action it should return the current time', () => {
        const action = { type: UPDATETIME };
        const newState = time({}, action);
        expect(newState.currentTime).toBeDefined;
                
        const tolerance = (new Date()) - newState.currentTime;
        expect(tolerance).toBeLessThan(100);
    });
});