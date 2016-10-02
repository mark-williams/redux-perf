import * as ACTIONTYPES from '../actions/actions';
import numbers from './numbers-reducer';


describe('numbers reducer', () => {
    let maxValue;

    describe('evens', () => {
        let action = {};

        beforeEach(() => {
            maxValue = 10;
            action = { type: ACTIONTYPES.EVEN, max: maxValue };
        });

        it('given an evens action should return numbers up to and including the max', () => {
            const newState = numbers([], action);
            expect(newState[newState.length - 1]).toEqual(maxValue);
        });

        it('given an evens action should return even numbers', () => {
            const newState = numbers([], action);

            expect(newState).toBeDefined();
            expect(newState).toEqual([2, 4, 6, 8, 10]);
        });
    });


    describe('odds', () => {
        let action = {};
        beforeEach(() => {
            maxValue = 10;
            action = { type: ACTIONTYPES.ODD, max: maxValue };
        });

        it('given an odds action should return odd numbers up to and including the max', () => {
            const newState = numbers([], action);

            const expected = maxValue % 2 ? maxValue : maxValue - 1;
            expect(newState[newState.length - 1]).toEqual(expected);
        });

        it('given an odds action should return odd numbers', () => {
            const newState = numbers([], action);

            expect(newState).toBeDefined();
            expect(newState).toEqual([1, 3, 5, 7, 9]);
        });
    });

    describe('primes', () => {
        let action = {};
        beforeEach(() => {
            maxValue = 10;
            action = { type: ACTIONTYPES.PRIME, max: maxValue };
        });

        it('given an primes action should return numbers up to and including the max', () => {
            const newState = numbers([], action);

            const expected = 7;
            expect(newState[newState.length - 1]).toEqual(expected);
        });

        it('given an prime action should return prime numbers', () => {
            const newState = numbers([], action);

            expect(newState).toBeDefined();
            expect(newState).toEqual([2, 3, 5, 7]);
        });
    });

    describe('fibonacci', () => {

        let action = {};
        beforeEach(() => {
            maxValue = 21;
            action = { type: ACTIONTYPES.FIBONACCI, max: maxValue };
        });

        it('given an fibonacci action should return fibonacci numbers up to max', () => {
            const newState = numbers([], action);

            expect(newState[newState.length - 1]).toEqual(maxValue);
        });

        it('given an prime action should return odd numbers', () => {
            const newState = numbers([], action);

            expect(newState).toBeDefined();
            expect(newState).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
        });
    });
});
