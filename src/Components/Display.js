import React from 'react';
import '../Style/Display.scss';

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
