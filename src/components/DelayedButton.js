import React from 'react';
export default class DelayedButton extends React.Component{  
    funk = (event) => { 
            event.persist()
            let persistant = event
            console.log("i am persistant", persistant)
        setTimeout((persistant) => { 
            
            console.log("persistant in timeout", persistant)
            this.props.onDelayedClick
        }, this.props.delay);
    }

    render(){ 

        return(<div>
            <button onClick={this.funk}>Delay Button</button>
        </div>)
    }
}