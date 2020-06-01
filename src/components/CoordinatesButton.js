// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        let joj = [e.clientX, e.clientY]
        console.log(this.props.onReceiveCoordinates(joj))
    }

    render() {
        return (
            <button onClick={this.handleClick} >RECEIVE</button>
        )
    }

}