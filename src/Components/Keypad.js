import React from 'react';
import '../Style/Keypad.css';

class Keypad extends React.Component {

  keyPressed(value) {
    return () => this.props.onNumPress(value);
  }

  render(){
    return (
      <div id="keypad">
        <button onClick={this.keyPressed("7")} id="seven">7</button>
        <button onClick={this.keyPressed("8")} id="eight">8</button>
        <button onClick={this.keyPressed("9")} id="nine">9</button>
        <button onClick={this.keyPressed("*")} id="multiple">*</button>
        <button onClick={this.keyPressed("4")} id="four">4</button>
        <button onClick={this.keyPressed("5")} id="five">5</button>
        <button onClick={this.keyPressed("6")} id="six">6</button>
        <button onClick={this.keyPressed("-")} id="subtrack">-</button>
        <button onClick={this.keyPressed("1")} id="one">1</button>
        <button onClick={this.keyPressed("2")} id="two">2</button>
        <button onClick={this.keyPressed("3")} id="three">3</button>
        <button onClick={this.keyPressed("+")} id="add">+</button>
        <button onClick={this.keyPressed("0")} id="zero">0</button>
        <button onClick={this.keyPressed("/")} id="divide">/</button>
        <button onClick={this.keyPressed(".")} id="decimal">.</button>
        <button onClick={this.props.onEqualPress} id="equals">=</button>
        <button onClick={this.props.onClear} id="clear">C</button>
      </div>
    );
  }
}

export default KeyPad;
