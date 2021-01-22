import React from 'react';
import Keypad from './Keypad.js';

class Calculator extends React.Component {
  render(){
    return (
      <div>
        <div id="display"></div>
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
