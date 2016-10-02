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


const numbers = (state = [], action) => {
    switch (action.type) {
        case EVEN:
            return getEvens(action.max);
        case ODD:
            return getOdds(action.max);
        case PRIME:
            return getPrimes(action.max);
        case FIBONACCI:
            return getFibonacci(action.max);

        default:
            return state;
    }
};


export default numbers;
