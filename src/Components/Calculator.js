import React from 'react';
import Display from './Display.js';
import Keypad from './Keypad.js';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "0"
    }
    this.keypadPressed = this.keypadPressed.bind(this);
  }

  keypadPressed(value) {
    this.setState({value: value});
  }

  render(){
    return (
      <div>
        <Display value={this.state.value} />
        <Keypad onNumPress={this.keypadPressed} />
      </div>
    );
  }
}

export default Calculator;
