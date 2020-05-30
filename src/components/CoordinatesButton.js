// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleMouseCoordinates = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
        <button onClick={this.handleMouseCoordinates}></button>
        );
    }
        
}

export default CoordinatesButton;