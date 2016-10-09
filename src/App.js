import './App.css';
import React, { Component } from 'react';
import NumbersContainer from './components/numbers/numbers-container';
import TimeContainer from './components/time/time-container';
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    }
    render() {
        const { store } = this.props;

        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div className="numbers-container">
              <NumbersContainer store={ store } numbersToShow="1150"></NumbersContainer>
            </div>
            <div className="time-container">
                  <TimeContainer store={ store }></TimeContainer>
            </div>
          </div>
      );
    }
}

export default App;
