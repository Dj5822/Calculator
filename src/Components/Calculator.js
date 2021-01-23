import React from 'react';
import Display from './Display.js';
import Keypad from './Keypad.js';

const OPERATORS = new Set("+-*/");

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "0"
    }
    this.keypadPressed = this.keypadPressed.bind(this);
    this.clear = this.clear.bind(this);
  }

  keypadPressed(value) {
    // Location of the previous character.
    let location = this.state.value.length-1;

    // Removes previous operator when consecutive operators are entered.
    if (OPERATORS.has(value)) {
      if (OPERATORS.has(this.state.value.slice(location))){
        this.setState(state => ({value: state.value.slice(0, location)}));
      }
    }

    // Removes consecutive zeros after an operator.
    if ("0" === value) {
      if ("0" === this.state.value[location]) {
        if (OPERATORS.has(this.state.value[location-1])) {
          this.setState(state => ({value: state.value.slice(0, location)}));
        }
      }
    }

    // Removes the first zero when something other than . is entered.
    if ("0" === this.state.value && "." !== value) {
      this.setState({value: value.toString()});
    }
    else {
      this.setState(state => ({value: state.value + value.toString()}));
    }
  }

  clear() {
    this.setState({value: "0"});
  }

  render(){
    return (
      <div>
        <Display value={this.state.value} />
        <Keypad onNumPress={this.keypadPressed} onClear={this.clear}/>
      </div>
    );
  }
}

export default Calculator;
