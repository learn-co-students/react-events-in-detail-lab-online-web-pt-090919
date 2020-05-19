// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
    <button onMouseMove={this.handleCoordinates}>Receive coordinates</button>  
    )
  }
  
  handleCoordinates = (event) => {
    return let coordinates = [event.clientX, event.clientY]
  }
  
}
