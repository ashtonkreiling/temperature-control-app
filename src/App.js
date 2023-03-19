import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [currentTemp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState();
  const hslColor = {
    backgroundColor: `hsl(${tempColor}, 100%, 50%)`
  }
  return (
    <div className='control-panel'>
      <div className='temperature-viewer'>
        <div className='temperature-display' style={hslColor}>{currentTemp}</div>
      </div>
      <div className='button-bar'>
        <button onClick={() => {
          setTemp(Math.min(currentTemp + 1, 100))
          setTempColor(1.4 * currentTemp + 230);
        }}>+</button>
        <button onClick={() =>{
          setTemp(Math.max(currentTemp - 1, -30))
          setTempColor(1.4 * currentTemp + 230);
        }}>-</button>
      </div>
    </div>
  )
}

export default App;