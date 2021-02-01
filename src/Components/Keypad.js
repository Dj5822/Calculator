import React from 'react';
import '../Style/Keypad.scss';

class Keypad extends React.Component {

  keyPressed(value) {
    return () => this.props.onNumPress(value);
  }

  render(){
    return (
      <div id="keypad">
        <button class="numButton" onClick={this.keyPressed("7")} id="seven">7</button>
        <button class="numButton" onClick={this.keyPressed("8")} id="eight">8</button>
        <button class="numButton" onClick={this.keyPressed("9")} id="nine">9</button>
        <button onClick={this.keyPressed("*")} id="multiply">*</button>
        <button class="numButton" onClick={this.keyPressed("4")} id="four">4</button>
        <button class="numButton" onClick={this.keyPressed("5")} id="five">5</button>
        <button class="numButton" onClick={this.keyPressed("6")} id="six">6</button>
        <button onClick={this.keyPressed("-")} id="subtract">-</button>
        <button class="numButton" onClick={this.keyPressed("1")} id="one">1</button>
        <button class="numButton" onClick={this.keyPressed("2")} id="two">2</button>
        <button class="numButton" onClick={this.keyPressed("3")} id="three">3</button>
        <button onClick={this.keyPressed("+")} id="add">+</button>
        <button class="numButton" onClick={this.keyPressed("/")} id="divide">/</button>
        <button class="numButton" onClick={this.keyPressed("0")} id="zero">0</button>
        <button class="numButton" onClick={this.keyPressed(".")} id="decimal">.</button>
        <button onClick={this.props.onEqualPress} id="equals">=</button>
        <button onClick={this.props.onClear} id="clear">C</button>
      </div>
    );
  }
}

export default Keypad;
