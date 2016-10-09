import { getEvens, getFibonaccis, getOdds, getPrimes } from '../../actions/actions';
import NumberSelector from './number-selector';
import Numbers from './numbers';
import React from 'react';
import { connect } from 'react-redux';


const numbersToShow = 1000;

const mapStateToProps = (state) => ({
    numbers: numbersToShow,
    selection: state.numbers
});

const mapDispatchToProps = (dispatch) => ({
    onChoiceChange: (e) => {
        switch (e.target.value) {
            case 'odd':
                dispatch(getOdds(numbersToShow));
                break;
            case 'even':
                dispatch(getEvens(numbersToShow));
                break;
            case 'primes':
                dispatch(getPrimes(numbersToShow));
                break;
            case 'fibonacci':
                dispatch(getFibonaccis(numbersToShow));
                break;

            default:
                dispatch(getEvens(numbersToShow));
                break;
        }
    }
});


const NumbersDisplay = (props) => {
    const { numbers, selection, onChoiceChange } = props;

    return (
        <div>
            <h3>Numbers</h3>
            <NumberSelector
                onChoiceChange={ onChoiceChange }>
            </NumberSelector>
            <Numbers
                max={ numbers } selection={ selection }>
            </Numbers>
        </div>
    );
};

const NumbersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumbersDisplay);

export default NumbersContainer;
