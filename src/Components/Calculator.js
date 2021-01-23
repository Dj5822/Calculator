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
    if (OPERATORS.has(value)) {
      let location = this.state.value.length-1;
      if (OPERATORS.has(this.state.value.slice(location))){
        this.setState(state => ({value: state.value.slice(0, location)}));
      }
    }

    if ("0" === this.state.value) {
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
