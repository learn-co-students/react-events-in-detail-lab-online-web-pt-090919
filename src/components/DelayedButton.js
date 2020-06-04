// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleDelayButtonClick = (event) => {
      event.persist()

      setTimeout(() => {
               this.props.onDelayedClick(event)
          }, this.props.delay);
  }

  render() {
    return (
      <div>
      <button onClick={this.handleDelayButtonClick}>Delay</button>
      </div>
    );
  }

}

export default DelayedButton;
