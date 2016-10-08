import React, { Component } from 'react';
import { getEvens, getFibonaccis, getInitial, getOdds, getPrimes } from '../../actions/actions';
import NumberSelector from './number-selector';
import Numbers from './numbers';
import store from '../../store/store';


class NumbersContainer extends Component {

    constructor(props) {
        super();

        this.numbersToShow = props.numbersToShow;
        this.store = store;
        this.store.dispatch(getInitial(props.numbersToShow));
        this.state = this.store.getState();

        this.store.subscribe(this.onStoreUpdate.bind(this));
    }

    onStoreUpdate() {
        this.setState(this.store.getState());
    }

    onChoiceChange(e) {
        switch (e.target.value) {
            case 'odd':
                this.store.dispatch(getOdds(this.numbersToShow));
                break;
            case 'even':
                this.store.dispatch(getEvens(this.numbersToShow));
                break;
            case 'primes':
                this.store.dispatch(getPrimes(this.numbersToShow));
                break;
            case 'fibonacci':
                this.store.dispatch(getFibonaccis(this.numbersToShow));
                break;

            default:
                this.store.dispatch(getEvens(this.numbersToShow));
                break;
        }
    }

    render() {
        return (
            <div>
                <h3>Numbers</h3>
                <NumberSelector
                    onChoiceChange={ this.onChoiceChange.bind(this) }>
                </NumberSelector>
                <Numbers
                    max={ this.props.numbersToShow } selection={ this.state.numbers }>
                </Numbers>
            </div>
        );
    }
}

export default NumbersContainer;
