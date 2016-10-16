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
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div className="numbers-container">
              <NumbersContainer numbersToShow="1000"></NumbersContainer>
            </div>
            <div className="time-container">
                  <TimeContainer></TimeContainer>
            </div>
          </div>
      );
    }
}

export default App;
