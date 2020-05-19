// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {
  
  render(){
    return (
    <button onClick={this.handleDelay}>Delayed</button>  
    )
  }
  
  handleDelay = event => {
    event.persist()
    window.setTimeout(() =>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  
  
}
