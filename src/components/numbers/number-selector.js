import React from 'react';

const NumberSelector = (props) => (
            <div className="number-selector">
                <ul>
                    <li>
                        <input
                            type="radio"
                            name="numberTypes"
                            value="odd"
                            onClick={ props.onChoiceChange } />Odd
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="numberTypes"
                            value="even"
                            onClick={ props.onChoiceChange } />Even
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="numberTypes"
                            value="primes"
                            onClick={ props.onChoiceChange } />Primes
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="numberTypes"
                            value="fibonacci"
                            onClick={ props.onChoiceChange } />Fibonacci
                    </li>
                </ul>
            </div>
);

export default NumberSelector;


