import React from 'react';

const NumberSelector = (props) => {
    return (
            <div>
                <input type="radio" name="numberTypes" value="odd" onClick={ props.onChoiceChange.bind(this) } />Odd<br />
                <input type="radio" name="numberTypes" value="even" onClick={ props.onChoiceChange.bind(this) } />Even<br />
                <input type="radio" name="numberTypes" value="primes" onClick={ props.onChoiceChange.bind(this) } />Primes<br />
                <input type="radio" name="numberTypes" value="fibonacci" onClick={ props.onChoiceChange.bind(this) } />Fibonacci<br />
            </div>
        );
};

export default NumberSelector
 


