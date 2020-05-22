import React from 'react'; 
export default class CoordinatesButton extends React.Component{
    render(){
        return <button onClick={this.props.onReceiveCoordinates}>I'm a BUTTON</button>
    }
}
