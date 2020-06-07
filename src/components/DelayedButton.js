import React from 'react';
export default class DelayedButton extends React.Component{  
    constructor(props){
        super(props);
        this.funk = this.funk.bind(this)
    }
    funk = (event) => { 
            event.persist()
            let persistant = event 
        setTimeout(() => this.props.onDelayedClick(persistant), this.props.delay)
        }

    render(){ 

        return(<div>
            <button onClick={this.funk} >Delay Button</button>
        </div>)
    } 
}