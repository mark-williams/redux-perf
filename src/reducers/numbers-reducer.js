import { EVEN, FIBONACCI, ODD, PRIME } from '../actions/actions';

const enumerate = (start, end, test) => {
    let results = [];
    for (let i = start; i <= end; i++) {
        if (test(i)) {
            results = [...results, i];
        }
    }

    return results;
};

const isPrime = (number) => {
    if (number === 1) {
        return false;
    }
    const maxFactor = number / 2;
    for (let f = 2; f <= maxFactor; f++) {
        if ((number % f) === 0) {
            return false;
        }
    }

    return true;
};

const getEvens = (max) => (
    enumerate(1, max, (x) => (x % 2 === 0))
);

const getOdds = (max) => enumerate(1, max, (x) => x % 2 !== 0);

const getPrimes = (max) => enumerate(1, max, isPrime);

const getFibonacci = (max) => {
    let results = [1, 1];
    while (results.length < 10000) {
        const fib = results[results.length - 2] + results[results.length - 1];
        if (fib > max) {
            return results;
        }

        results = [...results, fib];
    }

    return results;
};

const cachedResults = {};
const cachedGet = (func, key) => {
    if (cachedResults[key]) {
        return cachedResults[key];
    }

    const results = func();
    cachedResults[key] = results;

    return results;
};

const numbers = (state = [], action) => {
    switch (action.type) {
        case EVEN:
            return cachedGet(() => getEvens(action.max), action.type);
        case ODD:
            return cachedGet(() => getOdds(action.max), action.type);
        case PRIME:
            return cachedGet(() => getPrimes(action.max), action.type);
        case FIBONACCI:
            return cachedGet(() => getFibonacci(action.max), action.type);

        default:
            return state;
    }
};


export default numbers;
