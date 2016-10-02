import React from 'react';

const NumberSelector = (props) => {
    return (
            <div className="number-selector">
                <ul>
                    <li><input type="radio" name="numberTypes" value="odd" onClick={ props.onChoiceChange.bind(this) } />Odd</li>
                    <li><input type="radio" name="numberTypes" value="even" onClick={ props.onChoiceChange.bind(this) } />Even</li>
                    <li><input type="radio" name="numberTypes" value="primes" onClick={ props.onChoiceChange.bind(this) } />Primes</li>
                    <li><input type="radio" name="numberTypes" value="fibonacci" onClick={ props.onChoiceChange.bind(this) } />Fibonacci</li>
                </ul>
            </div>
        );
};

export default NumberSelector
 


