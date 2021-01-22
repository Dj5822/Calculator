import React from 'react';
import Keypad from './Keypad.js';

class Calculator extends React.Component {
  render(){
    return (
      <div>
        <div id="display"></div>
        <Keypad />
        <button id="add">+</button>
        <button id="subtrack">-</button>
        <button id="multiple">*</button>
        <button id="divide">/</button>
        <button id="equals">=</button>
        <button id="decimal">.</button>
        <button id="clear">C</button>
      </div>
    );
  }
}

export default Calculator;
