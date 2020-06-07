import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>                
    <CoordinatesButton onReceiveCoordinates={ (array) =>{
        
       //let [x, y] = [mouseCoordinates.clientX, mouseCoordinates.clientY]  
          console.log(array)
        return array
        } }
       />
    <DelayedButton onDelayedClick={event => console.log(event)} delay={1500}
      
      />
  </div>,
  document.getElementById('global')
);
