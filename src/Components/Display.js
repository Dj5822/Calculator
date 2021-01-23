import React from 'react';
import '../Style/Display.css';

class Display extends React.Component {
  render() {
    return (
      <div id="display">
        {this.props.value}
      </div>
    );
  }
}

export default Display;
