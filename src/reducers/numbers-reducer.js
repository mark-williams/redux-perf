import { EVEN, ODD, PRIME, FIBONACCI } from '../actions/actions';

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

const getEvens = (max) => {
    let results = [];
    for (var i=1; i <= max; i++) {
        if (i % 2 === 0) {
            results = [...results, i];
        }
    }

    return results;
};

const getOdds = (max) => {
    let results = [];
    for (var i=1; i <= max; i++) {
        if (i % 2 !== 0) {
            results = [...results, i];
        }
    }

    return results;
};

const getPrimes = (max) => {
    let results = [];
    for (var i = 2; i <= max; i++) {
        if (isPrime(i)) {
            results = [...results, i];
        }
    }
    return results;
};

const isPrime = (number) => {
    for (let f = 2; f < number; f++) {
        if ((number % f) === 0) {
            return false;
        }
    }

    return true;
};

const getFibonacci = (max) => {
    let results = [1, 1];
    while(true) {
        let fib = results[results.length - 2] + results[results.length - 1];
        if (fib > max || results.length > 1000) {
            return results;
        }

        results = [...results, fib];
    }
};

export default numbers;
