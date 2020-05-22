import React from 'react';
export default class DelayedButton extends React.Component{  
    funk = (event) => { 
            let persistant = event 
            console.log("i am persistant", persistant)
        setTimeout((persistant) => { 
            console.log("this", this)
            console.log(persistant)
            this.props.onDelayedClick(persistant)
        }, this.props.delay);
    }

    render(){ 

        return(<div>
            <button onClick={this.funk}>Delay Button</button>
        </div>)
    }
}