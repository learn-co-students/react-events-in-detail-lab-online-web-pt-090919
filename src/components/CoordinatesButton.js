// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
     handleMouseCoords = (event) => {
          return this.props.onReceiveCoordinates([event.clientX, event.clientY])
     }
     render() {
          return (
               <button onClick={this.handleMouseCoords}>Coord Button</button>
          );
     }
}

export default CoordinatesButton;