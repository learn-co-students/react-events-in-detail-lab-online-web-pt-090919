// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleCoordinatesButtonClick = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleCoordinatesButtonClick}>Coordinates</button>
      </div>
    );
  }

}

export default CoordinatesButton;
