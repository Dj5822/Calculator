import React from 'react';

class KeyPad extends React.Component {
  render(){
    return (
      <div id="keypad">
        <button id="zero">0</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
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

export default KeyPad;
