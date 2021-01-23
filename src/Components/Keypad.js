import React from 'react';
import '../Style/Keypad.css';

class KeyPad extends React.Component {

  numPressed(value) {
    return () => this.props.onNumPress(value);
  }

  render(){
    return (
      <div id="keypad">
        <button onClick={this.numPressed(7)} id="seven">7</button>
        <button onClick={this.numPressed(8)} id="eight">8</button>
        <button onClick={this.numPressed(9)} id="nine">9</button>
        <button id="multiple">*</button>
        <button onClick={this.numPressed(4)} id="four">4</button>
        <button onClick={this.numPressed(5)} id="five">5</button>
        <button onClick={this.numPressed(6)} id="six">6</button>
        <button id="subtrack">-</button>
        <button onClick={this.numPressed(1)} id="one">1</button>
        <button onClick={this.numPressed(2)} id="two">2</button>
        <button onClick={this.numPressed(3)} id="three">3</button>
        <button id="add">+</button>
        <button onClick={this.numPressed(0)} id="zero">0</button>
        <button id="divide">/</button>
        <button id="decimal">.</button>
        <button id="equals">=</button>
        <button onClick={this.props.onClear} id="clear">C</button>
      </div>
    );
  }
}

export default KeyPad;
