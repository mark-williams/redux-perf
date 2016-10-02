import React, { Component } from 'react';
import Numbers from './numbers';
import reducer from '../reducers/index';
import { createStore } from 'redux';
import { INITIAL, EVEN, FIBONACCI, ODD, PRIME } from '../actions/actions';

class NumbersContainer extends Component {

    constructor(props) {
        super();

        this.numbersToShow = props.numbersToShow;
        this.store = createStore(reducer); 
        this.store.dispatch({ type: INITIAL });
        this.state = this.store.getState();

        this.store.subscribe(this.onStoreUpdate.bind(this));
    }

    onStoreUpdate() {
        this.setState(this.store.getState());
    }

    onChoiceChange(e) {
        switch(e.target.value) {
            case 'odd':
                this.store.dispatch({ type: ODD, max: this.numbersToShow });
                break;
            case 'even':
                this.store.dispatch({ type: EVEN, max: this.numbersToShow });
                break;
            case 'primes':
                this.store.dispatch({ type: PRIME, max: this.numbersToShow });
                break;
            case 'fibonacci':
                this.store.dispatch({ type: FIBONACCI, max: this.numbersToShow });
                break;

            default:
                this.store.dispatch({ type: INITIAL, max: this.numbersToShow });
                break;
        }
    }

    getPrimes() {
        const action = { type: PRIME, max: this.numbersToShow };
        this.store.dispatch(action);
    }


    render() {
        return (
            <div>
                <h3>Numbers</h3>
                <div>
                    <input type="radio" name="numberTypes" value="odd" onClick={ this.onChoiceChange.bind(this) } />Odd<br />
                    <input type="radio" name="numberTypes" value="even" onClick={ this.onChoiceChange.bind(this) } />Even<br />
                    <input type="radio" name="numberTypes" value="primes" onClick={ this.onChoiceChange.bind(this) } />Primes<br />
                    <input type="radio" name="numberTypes" value="fibonacci" onClick={ this.onChoiceChange.bind(this) } />Fibonacci<br />
                </div>
                <Numbers max={ this.props.numbersToShow } selection={ this.state.numbers }></Numbers>
                <button onClick={this.getPrimes.bind(this)}>Get</button>
            </div>
        );
    }
}

export default NumbersContainer;