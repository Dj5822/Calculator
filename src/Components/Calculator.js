import React from 'react';
import Display from './Display.js';
import Keypad from './Keypad.js';

class Calculator extends React.Component {
  render(){
    return (
      <div>
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
