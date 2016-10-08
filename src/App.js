/* eslint-disable */
import React, { Component } from 'react';
import NumbersContainer from './components/numbers/numbers-container';
import TimeContainer from './components/time/time-container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div className="numbers-container">
              <NumbersContainer numbersToShow="1150"></NumbersContainer>
            </div>
            <div className="time-container">
                  <TimeContainer></TimeContainer>
            </div>
          </div>
      );
    }
}

export default App;
