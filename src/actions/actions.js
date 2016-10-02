export const EVEN = 'EVEN';
export const ODD = 'ODD';
export const PRIME = 'PRIME';
export const FIBONACCI = 'FIBONACCI';

export const UPDATETIME = 'UPDATETIME';

export const INITIAL = 'INITIAL';

export const getEvens = (max) => (
    {
        type: EVEN,
        max
    }
);

export const getOdds = (max) => (
    {
        type: ODD,
        max
    }
);

export const getPrimes = (max) => (
    {
        type: PRIME,
        max
    }
);

export const getFibonaccis = (max) => (
    {
        type: FIBONACCI,
        max
    }
);

export const getInitial = (max) => (
    {
        type: INITIAL,
        max
    }
);

