import React, { Component } from 'react';
import { getEvens, getFibonaccis, getInitial, getOdds, getPrimes } from '../../actions/actions';
import NumberSelector from './number-selector';
import Numbers from './numbers';

class NumbersContainer extends Component {

    constructor(props) {
        super(props);

        this.numbersToShow = props.numbersToShow;
        const { store } = props;
        store.dispatch(getInitial(props.numbersToShow));
        this.state = store.getState();
        store.subscribe(this.onStoreUpdate.bind(this));
    }

    onStoreUpdate() {
        this.setState(this.props.store.getState());
    }

    onChoiceChange(e) {
        const { store } = this.props;
        switch (e.target.value) {
            case 'odd':
                store.dispatch(getOdds(this.numbersToShow));
                break;
            case 'even':
                store.dispatch(getEvens(this.numbersToShow));
                break;
            case 'primes':
                store.dispatch(getPrimes(this.numbersToShow));
                break;
            case 'fibonacci':
                store.dispatch(getFibonaccis(this.numbersToShow));
                break;

            default:
                store.dispatch(getEvens(this.numbersToShow));
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
