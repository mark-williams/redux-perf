import React, { Component } from 'react';
import Numbers from './numbers';

class NumbersContainer extends Component {
  render() {
    return (
      <div>
        <h3>Numbers</h3>
            <Numbers max="100"></Numbers>
      </div>
    );
  }
}

export default NumbersContainer;